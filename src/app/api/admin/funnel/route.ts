import { NextRequest, NextResponse } from "next/server";
import { getDbAndBucket } from "@/lib/mongodb";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { ObjectId } from "mongodb";
import {
  FunnelSettings,
  buildMagicResumeUrl,
  calculateFunnelPricing,
  generateResumeToken,
  getFunnelSettings,
  saveFunnelSettings,
} from "@/lib/funnel-config";
import {
  LeadCollectionName,
  dispatchWaveToLead,
  runAutomatedFunnelQueue,
} from "@/lib/funnel-dispatcher";

export const dynamic = "force-dynamic";

function escapeRegex(str: string) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function buildSearchFilter(search: string): Record<string, unknown> {
  if (!search) return {};
  const words = search.split(/\s+/).filter(Boolean);
  if (words.length === 0) return {};

  const perWord = words.map((w) => {
    const pat = escapeRegex(w);
    return {
      $or: [
        { name: { $regex: pat, $options: "i" } },
        { phone: { $regex: pat, $options: "i" } },
        { email: { $regex: pat, $options: "i" } },
        { state: { $regex: pat, $options: "i" } },
      ],
    };
  });

  return perWord.length === 1 ? perWord[0] : { $and: perWord };
}

function mergeFilters(...parts: Record<string, unknown>[]): Record<string, unknown> {
  const nonEmpty = parts.filter((p) => Object.keys(p).length > 0);
  if (nonEmpty.length === 0) return {};
  if (nonEmpty.length === 1) return nonEmpty[0];
  return { $and: nonEmpty };
}

/**
 * Extracts the true historical creation/activity timestamp from a MongoDB document.
 * Falls back through createdAt -> verifiedAt -> paymentDate -> lastPaymentDate -> updatedAt -> ObjectId timestamp.
 * This prevents legacy documents without `createdAt` from being assigned `new Date()` (today).
 */
function resolveDocTimestamp(doc: any): Date {
  const candidates = [
    doc.createdAt,
    doc.funnelStartedAt,
    doc.verifiedAt,
    doc.paymentDate,
    doc.lastPaymentDate,
    doc.updatedAt,
  ];
  for (const c of candidates) {
    if (c) {
      const d = new Date(c);
      if (!isNaN(d.getTime())) return d;
    }
  }
  if (doc._id) {
    try {
      const oid =
        doc._id instanceof ObjectId ? doc._id : new ObjectId(String(doc._id));
      return oid.getTimestamp();
    } catch {
      // ignore invalid ObjectId
    }
  }
  return new Date(0);
}

function computeNextWaveSchedule(doc: any, status: string, settings: FunnelSettings) {
  if (status === "completed") return null;
  const startDate = resolveDocTimestamp(doc);
  const startMs = startDate.getTime();
  if (isNaN(startMs) || startMs <= 0) return null;

  // Only show live countdowns for leads from the last 14 days (matches automated queue window)
  const ageDays = (Date.now() - startMs) / (1000 * 60 * 60 * 24);
  if (ageDays > 14) return null;

  const waves = doc.retargeting?.waves || {};
  const nowMs = Date.now();

  for (const wCfg of settings.waves) {
    if (!wCfg.enabled) continue;
    const wState = waves[String(wCfg.wave)];
    const done = Boolean(wState?.whatsappSent && wState?.emailSent) || (Number(wState?.attempts) || 0) >= 3;
    if (done) continue;

    const dueMs = startMs + wCfg.delayMinutes * 60 * 1000;
    const dueInMinutes = Math.round((dueMs - nowMs) / (60 * 1000));
    return {
      wave: wCfg.wave,
      discountPercent: wCfg.discountPercent,
      dueAt: new Date(dueMs).toISOString(),
      dueInMinutes,
      isOverdue: dueInMinutes <= 0,
    };
  }

  return null;
}

/**
 * Computes the 1..6 visual step number for every user in the funnel:
 * Step 1: Details Submitted (Pending OTP)
 * Step 2: OTP Verified / Checkout Reached (Pending Payment)
 * Step 3: Wave 1 Sent (0% Reminder)
 * Step 4: Wave 2 Sent (15% Fee Drop Unlocked)
 * Step 5: Wave 3 Sent (Final Expiry Warning)
 * Step 6: Completed & Paid
 */
function computeVisualStep(doc: any, status: string): number {
  if (status === "completed") return 6;
  const currentWave = Number(doc.retargeting?.currentWave) || 0;
  if (currentWave >= 3) return 5;
  if (currentWave === 2 || (Number(doc.discountPercent) || 0) > 0) return 4;
  if (currentWave === 1) return 3;
  if (status === "pending_payment") return 2;
  return 1;
}

function sanitizeWaveRecord(w: any) {
  if (!w || typeof w !== "object") return null;
  if (!w.whatsappSent && !w.emailSent && !w.sentAt && !w.lastAttemptAt) return null;
  return w;
}

function mapDoc(doc: any, status: string, settings: FunnelSettings) {
  const oppCount = Number(doc.oppositionCount) || 1;
  const discountPercent = Number(doc.discountPercent) || 0;
  const pricing = calculateFunnelPricing(
    oppCount,
    discountPercent,
    settings.basePricePerOpposition
  );

  const resumeToken = doc.resumeToken || doc.lastResumeToken || null;
  const magicLink = resumeToken ? buildMagicResumeUrl(resumeToken) : null;
  const waves = doc.retargeting?.waves || {};
  const w1 = sanitizeWaveRecord(waves["1"]);
  const w2 = sanitizeWaveRecord(waves["2"]);
  const w3 = sanitizeWaveRecord(waves["3"]);
  const currentWave =
    w3 ? 3 : w2 ? 2 : w1 ? 1 : Number(doc.retargeting?.currentWave) || 0;

  const clickCount = Number(doc.clickCount) || 0;
  const linkClickedAt = doc.linkClickedAt
    ? new Date(doc.linkClickedAt).toISOString()
    : null;

  const resolvedDate = resolveDocTimestamp(doc);
  const createdAtIso = resolvedDate.toISOString();
  const funnelStartedAt = doc.funnelStartedAt
    ? new Date(doc.funnelStartedAt).toISOString()
    : createdAtIso;

  const visualStep = computeVisualStep(doc, status);
  const nextWave = computeNextWaveSchedule(doc, status, settings);

  const base = {
    id: doc._id.toString(),
    name: doc.name || "Anonymous",
    phone: doc.phone || "",
    email: doc.email || "No Email",
    state: doc.state || "Not Specified",
    oppositionCount: oppCount,
    status,
    visualStep,
    createdAt: createdAtIso,
    funnelStartedAt,
    resumeToken,
    magicLink,
    discountPercent,
    discountUnlockedAt: doc.discountUnlockedAt
      ? new Date(doc.discountUnlockedAt).toISOString()
      : null,
    discountExpiresAt: doc.discountExpiresAt
      ? new Date(doc.discountExpiresAt).toISOString()
      : null,
    pricing,
    clickCount,
    linkClickedAt,
    verifiedVia: doc.verifiedVia || (status === "pending_verification" ? null : "otp"),
    currentWave,
    waves: {
      "1": w1,
      "2": w2,
      "3": w3,
    },
    nextWave,
    recoveredViaFunnel: Boolean(
      doc.recoveredViaFunnel && (currentWave > 0 || clickCount > 0 || discountPercent > 0)
    ),
    recoveredAtWave: Number(doc.recoveredAtWave) || 0,
  };

  if (status === "pending_verification") {
    return {
      ...base,
      details: {
        failedAttempts: doc.failedAttempts || 0,
        otpExpired: Boolean(doc.otpExpired),
        otpLocked: Boolean(doc.otpLocked),
        otpExpires: doc.otpExpires
          ? new Date(doc.otpExpires).toISOString()
          : null,
      },
    };
  }

  if (status === "pending_payment") {
    return {
      ...base,
      details: {
        verifiedAt: doc.verifiedAt
          ? new Date(doc.verifiedAt).toISOString()
          : null,
        txnid: doc.txnid || null,
        expectedAmount: doc.expectedAmount || pricing.totalPayable,
      },
    };
  }

  return {
    ...base,
    details: {
      amountPaid: doc.amountPaid || 0,
      originalAmount: doc.originalAmount || oppCount * 999,
      payuTxnId: doc.payuTxnId || null,
      paymentDate: doc.paymentDate
        ? new Date(doc.paymentDate).toISOString()
        : createdAtIso,
      caseId: doc.caseId || null,
      lastLoginAt: doc.lastLoginAt
        ? new Date(doc.lastLoginAt).toISOString()
        : null,
    },
  };
}

async function verifyAdminSession() {
  const session = await getServerSession(authOptions);
  if (
    !session ||
    !(session.user as any)?.id ||
    (session.user as any)?.role !== "admin"
  ) {
    return null;
  }
  return session;
}

export async function GET(req: NextRequest) {
  const session = await verifyAdminSession();
  if (!session) {
    return NextResponse.json(
      { error: "Unauthorized. Admin access required." },
      { status: 401 }
    );
  }

  try {
    const { db } = await getDbAndBucket("fs");
    const settings = await getFunnelSettings(db);

    const url = new URL(req.url);
    const page = Math.max(1, parseInt(url.searchParams.get("page") || "1"));
    const limit = Math.min(
      500,
      Math.max(1, parseInt(url.searchParams.get("limit") || "200"))
    );
    const status = url.searchParams.get("status") || "all";
    const search = (url.searchParams.get("search") || "").trim();

    const skip = (page - 1) * limit;
    const searchFilter = buildSearchFilter(search);

    // ── Global KPI summary counts ──
    const [
      pvTotal,
      ppTotal,
      compTotal,
      pvRetargeted,
      ppRetargeted,
      pvWave1,
      ppWave1,
      pvWave2,
      ppWave2,
      pvWave3,
      ppWave3,
      pvClicked,
      ppClicked,
      compClicked,
      recoveredPaidCount,
    ] = await Promise.all([
      db.collection("pending_verification").countDocuments({}),
      db.collection("pending_payment").countDocuments({}),
      db.collection("users").countDocuments({ isPaid: true }),
      db.collection("pending_verification").countDocuments({ "retargeting.currentWave": { $gte: 1 } }),
      db.collection("pending_payment").countDocuments({ "retargeting.currentWave": { $gte: 1 } }),
      db.collection("pending_verification").countDocuments({ "retargeting.waves.1": { $exists: true } }),
      db.collection("pending_payment").countDocuments({ "retargeting.waves.1": { $exists: true } }),
      db.collection("pending_verification").countDocuments({ "retargeting.waves.2": { $exists: true } }),
      db.collection("pending_payment").countDocuments({ "retargeting.waves.2": { $exists: true } }),
      db.collection("pending_verification").countDocuments({ "retargeting.waves.3": { $exists: true } }),
      db.collection("pending_payment").countDocuments({ "retargeting.waves.3": { $exists: true } }),
      db.collection("pending_verification").countDocuments({
        $or: [{ clickCount: { $gte: 1 } }, { discountPercent: { $gt: 0 } }],
      }),
      db.collection("pending_payment").countDocuments({
        $or: [{ clickCount: { $gte: 1 } }, { discountPercent: { $gt: 0 } }],
      }),
      db.collection("users").countDocuments({
        isPaid: true,
        $or: [{ clickCount: { $gte: 1 } }, { recoveredViaFunnel: true }],
      }),
      db.collection("users").countDocuments({
        isPaid: true,
        recoveredViaFunnel: true,
      }),
    ]);

    const grandTotal = pvTotal + ppTotal + compTotal;
    const summary = {
      totalSubmitted: grandTotal,
      pendingVerificationCount: pvTotal,
      pendingPaymentCount: ppTotal,
      retargetedCount: pvRetargeted + ppRetargeted + recoveredPaidCount,
      wave1SentCount: pvWave1 + ppWave1,
      wave2SentCount: pvWave2 + ppWave2,
      wave3SentCount: pvWave3 + ppWave3,
      clickedOrDiscountCount: pvClicked + ppClicked + compClicked,
      completedCount: compTotal,
      recoveredPaidCount,
      conversionRate:
        grandTotal > 0
          ? parseFloat(((compTotal / grandTotal) * 100).toFixed(2))
          : 0,
    };

    interface ColQuery {
      name: string;
      filter: Record<string, unknown>;
      statusLabel: string;
    }
    const queries: ColQuery[] = [];

    const retargetedExtraFilter =
      status === "retargeted"
        ? {
            $or: [
              { "retargeting.currentWave": { $gte: 1 } },
              { recoveredViaFunnel: true },
            ],
          }
        : status === "clicked"
        ? {
            $or: [
              { clickCount: { $gte: 1 } },
              { discountPercent: { $gt: 0 } },
              { recoveredViaFunnel: true },
            ],
          }
        : {};

    if (
      status === "all" ||
      status === "pending_verification" ||
      status === "retargeted" ||
      status === "clicked"
    ) {
      queries.push({
        name: "pending_verification",
        filter: mergeFilters(retargetedExtraFilter, searchFilter),
        statusLabel: "pending_verification",
      });
    }
    if (
      status === "all" ||
      status === "pending_payment" ||
      status === "retargeted" ||
      status === "clicked"
    ) {
      queries.push({
        name: "pending_payment",
        filter: mergeFilters(retargetedExtraFilter, searchFilter),
        statusLabel: "pending_payment",
      });
    }
    if (
      status === "all" ||
      status === "completed" ||
      status === "retargeted" ||
      status === "clicked"
    ) {
      queries.push({
        name: "users",
        filter: mergeFilters(
          { isPaid: true },
          retargetedExtraFilter,
          searchFilter
        ),
        statusLabel: "completed",
      });
    }

    // Backfill missing resumeTokens for any legacy pending records in a single bulkWrite
    const ensureTokensOnDocs = async (docs: any[], colName: string) => {
      if (colName !== "pending_verification" && colName !== "pending_payment") return;
      const missing = docs.filter((d) => !d.resumeToken);
      if (missing.length === 0) return;
      const ops = missing.map((d) => {
        const tok = generateResumeToken();
        d.resumeToken = tok;
        return {
          updateOne: {
            filter: { _id: d._id },
            update: { $set: { resumeToken: tok } },
          },
        };
      });
      try {
        await db.collection(colName).bulkWrite(ops, { ordered: false });
      } catch (bulkErr) {
        console.warn(`[Funnel API] Non-fatal bulkWrite token backfill warning on ${colName}:`, bulkErr);
      }
    };

    if (queries.length === 1) {
      const q = queries[0];
      const [totalFiltered, docs] = await Promise.all([
        db.collection(q.name).countDocuments(q.filter),
        db
          .collection(q.name)
          .find(q.filter)
          .sort({ _id: -1 })
          .skip(skip)
          .limit(limit)
          .toArray(),
      ]);

      await ensureTokensOnDocs(docs, q.name);
      const items = docs
        .map((d: any) => mapDoc(d, q.statusLabel, settings))
        .sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );

      return NextResponse.json({
        success: true,
        settings,
        summary,
        items,
        totalFiltered,
        hasMore: skip + items.length < totalFiltered,
        page,
        limit,
      });
    }

    const ceiling = skip + limit;

    const [docSets, filteredCounts] = await Promise.all([
      Promise.all(
        queries.map(async (q) => {
          const docs = await db
            .collection(q.name)
            .find(q.filter)
            .sort({ _id: -1 })
            .limit(ceiling)
            .toArray();
          await ensureTokensOnDocs(docs, q.name);
          return docs.map((d: any) => mapDoc(d, q.statusLabel, settings));
        })
      ),
      Promise.all(
        queries.map((q) => db.collection(q.name).countDocuments(q.filter))
      ),
    ]);

    const totalFiltered = filteredCounts.reduce((a, b) => a + b, 0);

    const merged = docSets
      .flat()
      .sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );

    const items = merged.slice(skip, skip + limit);

    return NextResponse.json({
      success: true,
      settings,
      summary,
      items,
      totalFiltered,
      hasMore: skip + items.length < totalFiltered,
      page,
      limit,
    });
  } catch (error: any) {
    console.error("[Funnel API GET] Error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  const session = await verifyAdminSession();
  if (!session) {
    return NextResponse.json(
      { error: "Unauthorized. Admin access required." },
      { status: 401 }
    );
  }

  try {
    const { db } = await getDbAndBucket("fs");
    const body = await req.json();
    const { action } = body;

    // 1. Update Global Funnel Settings
    if (action === "update_settings") {
      const updated = await saveFunnelSettings(db, body.settings || {});
      return NextResponse.json({
        success: true,
        settings: updated,
        message: "Funnel automation settings saved successfully.",
      });
    }

    // 2. Run Automated Retargeting Queue Now
    if (action === "run_queue_now") {
      const queueRes = await runAutomatedFunnelQueue(db, {
        forceRunWhenPaused: true,
        batchLimit: 50,
      });
      return NextResponse.json({
        success: true,
        ...queueRes,
        message: `Processed ${queueRes.processed} due leads (${queueRes.skipped} skipped).`,
      });
    }

    // 3. Unlock 15% Discount on a Lead's Link Only (Without Sending Message)
    if (action === "unlock_discount") {
      const { id, status, discountPercent = 15 } = body;
      if (!id || !ObjectId.isValid(id)) {
        return NextResponse.json({ error: "Invalid lead ID" }, { status: 400 });
      }
      const colName: LeadCollectionName =
        status === "pending_verification" ? "pending_verification" : "pending_payment";
      const lead = await db.collection(colName).findOne({ _id: new ObjectId(id) });
      if (!lead) {
        return NextResponse.json({ error: "Lead not found" }, { status: 404 });
      }

      const settings = await getFunnelSettings(db);
      const now = new Date();
      const pct = Math.max(0, Math.min(90, Number(discountPercent) || 15));
      const resumeToken = lead.resumeToken || generateResumeToken();
      const pricing = calculateFunnelPricing(
        lead.oppositionCount || 1,
        pct,
        settings.basePricePerOpposition
      );
      const expiresAt = new Date(
        now.getTime() + settings.discountExpiryHours * 60 * 60 * 1000
      );

      await db.collection(colName).updateOne(
        { _id: lead._id },
        {
          $set: {
            resumeToken,
            discountPercent: pct,
            discountUnlockedAt: now,
            discountExpiresAt: expiresAt,
            expectedAmount: pricing.totalPayable,
            originalAmount: pricing.totalOriginal,
            updatedAt: now,
          },
        }
      );

      return NextResponse.json({
        success: true,
        resumeToken,
        magicLink: buildMagicResumeUrl(resumeToken),
        pricing,
        message: `Unlocked ${pct}% discount (₹${pricing.totalPayable}) on ${lead.name}'s magic link.`,
      });
    }

    // 4. Manually Trigger Wave 1, Wave 2 (15% Off), or Wave 3 for a Specific Lead
    if (action === "send_wave") {
      const { id, status, wave = 2, discountPercent } = body;
      if (!id || !ObjectId.isValid(id)) {
        return NextResponse.json({ error: "Invalid lead ID" }, { status: 400 });
      }
      const colName: LeadCollectionName =
        status === "pending_verification" ? "pending_verification" : "pending_payment";
      const lead = await db.collection(colName).findOne({ _id: new ObjectId(id) });
      if (!lead) {
        return NextResponse.json({ error: "Lead record not found" }, { status: 404 });
      }

      const waveNum = (wave === 1 || wave === 2 || wave === 3 ? wave : 2) as 1 | 2 | 3;
      const settings = await getFunnelSettings(db);

      const result = await dispatchWaveToLead({
        db,
        collectionName: colName,
        lead,
        waveNumber: waveNum,
        settings,
        forceAllChannels: true,
        customDiscountPercent:
          typeof discountPercent === "number" ? discountPercent : undefined,
      });

      return NextResponse.json({
        success: true,
        result,
        message: `Wave ${waveNum} dispatched to ${lead.name} (WATI: ${
          result.whatsappSent ? "Sent ✅" : "Failed ❌"
        }, Email: ${result.emailSent ? "Sent ✅" : "Failed ❌"}).`,
      });
    }

    return NextResponse.json({ error: "Unknown action" }, { status: 400 });
  } catch (error: any) {
    console.error("[Funnel API POST] Error:", error);
    return NextResponse.json(
      { error: error?.message || "Failed to execute funnel action" },
      { status: 500 }
    );
  }
}
