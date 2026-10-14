/**
 * One-off cleanup for duplicate / legacy records in `pending_verification` and `pending_payment`.
 *
 * Rules (see per-rule comments below). The script is SAFE BY DEFAULT:
 *   - without flags it only reports what it WOULD delete (dry run, no writes)
 *   - with --apply it first writes a full EJSON backup of every doc it is about to delete
 *     to scratch/out/, and only then deletes them by _id
 *   - it never modifies or deletes anything in `users`, `cases` or `transactions`
 *
 * Usage (from the `lr` folder):
 *   node scratch/cleanup_pending_duplicates.js            # dry run
 *   node scratch/cleanup_pending_duplicates.js --apply    # backup + delete
 *
 * Restore a backup (if ever needed): load the EJSON file and insert the docs back into the
 * collection named in each entry.
 */
const { MongoClient, BSON } = require("mongodb");
const fs = require("fs");
const path = require("path");

const APPLY = process.argv.includes("--apply");
const NOW = Date.now();
const HOUR = 60 * 60 * 1000;
const DAY = 24 * HOUR;

// Records touched in the last hour may belong to a payment that is still in flight; never delete those.
const IN_FLIGHT_MS = HOUR;
// Abandoned "buy more credits" records are only removed when older than this.
const ABANDONED_BUY_CREDITS_MS = DAY;

function loadUri() {
  if (process.env.MONGODB_URI) return process.env.MONGODB_URI;
  const envContent = fs.readFileSync(path.join(__dirname, "..", ".env.local"), "utf8");
  for (const line of envContent.split("\n")) {
    if (line.startsWith("MONGODB_URI=")) {
      return line.substring("MONGODB_URI=".length).trim().replace(/^["']|["']$/g, "");
    }
  }
  throw new Error("No MONGODB_URI found in env or .env.local");
}

/** digits only; a leading 0 on an 11-digit number is dropped so 0XXXXXXXXXX and XXXXXXXXXX match */
function normPhone(p) {
  let d = String(p || "").replace(/\D/g, "");
  if (d.length === 11 && d.startsWith("0")) d = d.slice(1);
  return d;
}

const mask = (k) => (k ? "******" + k.slice(-4) : "(no phone)");

/** most recent activity timestamp on a doc */
function lastTouched(doc) {
  return Math.max(
    ...[doc.updatedAt, doc.verifiedAt, doc.createdAt].map((x) => (x ? new Date(x).getTime() : 0))
  );
}

/** an OTP record is "live" while its (possibly extended) expiry is still in the future */
function isLiveOtp(pv) {
  return !!pv.otpExpires && new Date(pv.otpExpires).getTime() > NOW;
}

function groupByPhone(docs) {
  const map = new Map();
  for (const d of docs) {
    const k = normPhone(d.phone);
    if (!map.has(k)) map.set(k, []);
    map.get(k).push(d);
  }
  return map;
}

const byNewest = (a, b) => lastTouched(b) - lastTouched(a);

async function analyze(db) {
  const [users, pps, pvs] = await Promise.all([
    db.collection("users").find({ isPaid: true }, { projection: { phone: 1 } }).toArray(),
    db.collection("pending_payment").find({}).toArray(),
    db.collection("pending_verification").find({}).toArray(),
  ]);

  const paidPhones = new Set(users.map((u) => normPhone(u.phone)));
  const ppByPhone = groupByPhone(pps);
  const pvByPhone = groupByPhone(pvs);
  const phoneKeys = new Set([...ppByPhone.keys(), ...pvByPhone.keys()]);

  // id -> { collection, doc, reason, phoneKey }
  const toDelete = new Map();
  const kept = []; // informational: things we deliberately left alone
  const add = (collection, doc, reason, phoneKey) => {
    toDelete.set(collection + ":" + doc._id.toString(), { collection, doc, reason, phoneKey });
  };
  const ppDeletable = (doc) => NOW - lastTouched(doc) > IN_FLIGHT_MS;

  for (const key of phoneKeys) {
    const ppList = (ppByPhone.get(key) || []).slice().sort(byNewest);
    const pvList = (pvByPhone.get(key) || []).slice().sort(byNewest);
    const isPaidUser = paidPhones.has(key);

    if (isPaidUser) {
      // RULE 1: phone is in `users` (paid) -> signup leads and old OTP records are obsolete.
      const returning = ppList.filter((d) => d.isReturningUser === true);
      const signupLeads = ppList.filter((d) => d.isReturningUser !== true);

      for (const d of signupLeads) {
        if (ppDeletable(d)) add("pending_payment", d, "phone already paid (in users): stale signup lead", key);
        else kept.push({ collection: "pending_payment", doc: d, why: "touched <1h ago (possibly in flight)", key });
      }

      // "buy more credits" records are legitimate while in flight: keep the newest, drop only old abandoned extras.
      returning.forEach((d, idx) => {
        if (idx === 0) {
          kept.push({ collection: "pending_payment", doc: d, why: "newest buy-more-credits record", key });
        } else if (NOW - lastTouched(d) > ABANDONED_BUY_CREDITS_MS) {
          add("pending_payment", d, "older abandoned buy-more-credits duplicate (>24h)", key);
        } else {
          kept.push({ collection: "pending_payment", doc: d, why: "recent buy-more-credits duplicate (<24h)", key });
        }
      });

      for (const d of pvList) {
        if (!isLiveOtp(d)) add("pending_verification", d, "phone already paid (in users): finished/expired OTP record", key);
        else kept.push({ collection: "pending_verification", doc: d, why: "live OTP session", key });
      }
      continue;
    }

    // Not a paid user.
    // RULE 2: several pending_payment docs for the same phone -> keep only the most recently touched one.
    ppList.forEach((d, idx) => {
      if (idx === 0) return;
      if (ppDeletable(d)) add("pending_payment", d, "duplicate pending_payment for same phone", key);
      else kept.push({ collection: "pending_payment", doc: d, why: "duplicate but touched <1h ago", key });
    });

    if (ppList.length > 0) {
      // RULE 3: a pending_payment record implies the OTP was verified -> finished/expired OTP records are redundant.
      for (const d of pvList) {
        if (!isLiveOtp(d)) add("pending_verification", d, "OTP already verified (pending_payment exists): redundant OTP record", key);
        else kept.push({ collection: "pending_verification", doc: d, why: "live OTP session (user re-submitting)", key });
      }
    } else if (pvList.length > 1) {
      // RULE 4: duplicate OTP records for same phone and no payment record -> keep the newest only (live ones are never removed).
      pvList.forEach((d, idx) => {
        if (idx === 0) return;
        if (!isLiveOtp(d)) add("pending_verification", d, "duplicate pending_verification for same phone", key);
        else kept.push({ collection: "pending_verification", doc: d, why: "duplicate but live OTP session", key });
      });
    }
    // A lone pending_verification (even expired) is a genuine lead stuck at OTP -> left alone on purpose.
  }

  const orphanVerified = pvs.filter(
    (d) => d.verified === true && !paidPhones.has(normPhone(d.phone)) && !(ppByPhone.get(normPhone(d.phone)) || []).length
  );

  return { users, pps, pvs, toDelete, kept, orphanVerified };
}

function summarize(result, label) {
  const { pps, pvs, toDelete, kept, orphanVerified } = result;
  const counts = {};
  for (const { collection, reason } of toDelete.values()) {
    counts[collection] = counts[collection] || {};
    counts[collection][reason] = (counts[collection][reason] || 0) + 1;
  }
  console.log(`\n=== ${label} ===`);
  console.log(`pending_payment:      ${pps.length} docs`);
  console.log(`pending_verification: ${pvs.length} docs`);
  console.log(`Planned deletions:    ${toDelete.size}`);
  for (const [col, reasons] of Object.entries(counts)) {
    console.log(`  ${col}`);
    for (const [reason, n] of Object.entries(reasons)) console.log(`    - ${n} x ${reason}`);
  }
  console.log(`Left alone on purpose: ${kept.length} (e.g. live OTP sessions, buy-more-credits, <1h old)`);
  console.log(`Orphan verified OTP records (no payment record, not paid; untouched): ${orphanVerified.length}`);
}

async function main() {
  const client = new MongoClient(loadUri());
  try {
    await client.connect();
    const db = client.db();
    console.log(`Connected DB: ${db.databaseName}`);
    console.log(APPLY ? "MODE: APPLY (backup, then delete)" : "MODE: DRY RUN (no changes will be made)");

    const before = await analyze(db);
    summarize(before, "BEFORE");

    if (before.toDelete.size > 0) {
      console.log("\nPlanned deletions (phones masked):");
      for (const { collection, doc, reason, phoneKey } of before.toDelete.values()) {
        console.log(`  [${collection}] ${doc._id} phone=${mask(phoneKey)} - ${reason}`);
      }
    }

    if (!APPLY) {
      console.log("\nDry run complete. Re-run with --apply to back up and delete.");
      return;
    }
    if (before.toDelete.size === 0) {
      console.log("\nNothing to delete.");
      return;
    }

    // 1. Backup everything that will be deleted
    const outDir = path.join(__dirname, "out");
    fs.mkdirSync(outDir, { recursive: true });
    const backupFile = path.join(outDir, `pending_cleanup_backup_${new Date().toISOString().replace(/[:.]/g, "-")}.json`);
    const backup = [...before.toDelete.values()].map(({ collection, doc, reason }) => ({ collection, reason, doc }));
    fs.writeFileSync(backupFile, BSON.EJSON.stringify(backup, null, 2, { relaxed: false }));
    const written = BSON.EJSON.parse(fs.readFileSync(backupFile, "utf8"));
    if (written.length !== before.toDelete.size) throw new Error("Backup verification failed; aborting before any delete.");
    console.log(`\nBackup written and verified: ${backupFile}`);

    // 2. Delete by _id only
    for (const collection of ["pending_payment", "pending_verification"]) {
      const ids = [...before.toDelete.values()].filter((x) => x.collection === collection).map((x) => x.doc._id);
      if (ids.length === 0) continue;
      const res = await db.collection(collection).deleteMany({ _id: { $in: ids } });
      console.log(`Deleted ${res.deletedCount}/${ids.length} from ${collection}`);
    }

    // 3. Re-analyze to confirm
    const after = await analyze(db);
    summarize(after, "AFTER");
  } finally {
    await client.close();
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
