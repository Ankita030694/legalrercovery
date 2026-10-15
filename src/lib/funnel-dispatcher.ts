import { Db, ObjectId } from "mongodb";
import {
  FunnelSettings,
  buildMagicResumeUrl,
  calculateFunnelPricing,
  generateResumeToken,
  getFunnelSettings,
  normalizePhoneTenDigits,
} from "./funnel-config";
import { sendWatiFunnelRetargeting } from "./wati";
import { sendFunnelRetargetingEmail } from "./email";

export type LeadCollectionName = "pending_verification" | "pending_payment";

export interface WaveExecutionResult {
  leadId: string;
  collection: LeadCollectionName;
  phone: string;
  email: string;
  wave: 1 | 2 | 3;
  discountPercent: number;
  whatsappSent: boolean;
  emailSent: boolean;
  skipped?: boolean;
  skipReason?: string;
  error?: string | null;
}

function normalizeEmail(email: any): string {
  if (!email || typeof email !== "string") return "";
  const cleaned = email.trim().toLowerCase();
  if (!cleaned || cleaned === "no email" || !cleaned.includes("@")) return "";
  return cleaned;
}

/**
 * Cleans up and deduplicates `pending_verification` and `pending_payment`:
 * 1. Any entry whose 10-digit phone OR email belongs to a paid user in `users` (`isPaid: true`) is deleted.
 * 2. Among remaining truly unpaid users, deduplicates by 10-digit phone and email across both collections
 *    (keeping `pending_payment` over `pending_verification`, and newest record over older duplicates,
 *    while preserving any existing `retargeting` / `resumeToken` state).
 */
export async function cleanupAndDeduplicateUnpaidLeads(db: Db): Promise<{
  removedPaidDuplicates: number;
  removedUnpaidDuplicates: number;
  uniqueTrulyUnpaidCount: number;
}> {
  const [paidUsers, ppDocs, pvDocs] = await Promise.all([
    db
      .collection("users")
      .find({ isPaid: true }, { projection: { phone: 1, email: 1 } })
      .toArray(),
    db.collection("pending_payment").find({}).sort({ _id: -1 }).toArray(),
    db.collection("pending_verification").find({}).sort({ _id: -1 }).toArray(),
  ]);

  const paidPhones = new Set<string>();
  const paidEmails = new Set<string>();

  for (const u of paidUsers) {
    const p = normalizePhoneTenDigits(u.phone || "");
    if (p) paidPhones.add(p);
    const e = normalizeEmail(u.email);
    if (e) paidEmails.add(e);
  }

  const seenUnpaidPhones = new Set<string>();
  const seenUnpaidEmails = new Set<string>();
  const keptByPhone = new Map<string, { col: LeadCollectionName; doc: any }>();
  const keptByEmail = new Map<string, { col: LeadCollectionName; doc: any }>();

  const ppDeleteIds: ObjectId[] = [];
  const pvDeleteIds: ObjectId[] = [];
  let removedPaidDuplicates = 0;
  let removedUnpaidDuplicates = 0;
  let uniqueTrulyUnpaidCount = 0;

  const mergeMetadataIfMissing = async (
    targetCol: LeadCollectionName,
    targetDoc: any,
    dupDoc: any
  ) => {
    const updates: Record<string, any> = {};
    if (!targetDoc.resumeToken && dupDoc.resumeToken) {
      targetDoc.resumeToken = dupDoc.resumeToken;
      updates.resumeToken = dupDoc.resumeToken;
    }
    if (
      (!targetDoc.retargeting?.currentWave || targetDoc.retargeting.currentWave === 0) &&
      dupDoc.retargeting?.currentWave > 0
    ) {
      targetDoc.retargeting = dupDoc.retargeting;
      updates.retargeting = dupDoc.retargeting;
    }
    if ((!targetDoc.clickCount || targetDoc.clickCount === 0) && dupDoc.clickCount > 0) {
      targetDoc.clickCount = dupDoc.clickCount;
      updates.clickCount = dupDoc.clickCount;
      updates.linkClickedAt = dupDoc.linkClickedAt || new Date();
    }
    if (
      (!targetDoc.discountPercent || targetDoc.discountPercent === 0) &&
      dupDoc.discountPercent > 0
    ) {
      targetDoc.discountPercent = dupDoc.discountPercent;
      updates.discountPercent = dupDoc.discountPercent;
      updates.discountUnlockedAt = dupDoc.discountUnlockedAt || new Date();
      updates.discountExpiresAt = dupDoc.discountExpiresAt || null;
    }
    if (Object.keys(updates).length > 0) {
      await db
        .collection(targetCol)
        .updateOne({ _id: targetDoc._id }, { $set: updates });
    }
  };

  // Process pending_payment first (higher funnel stage takes priority over pending_verification)
  for (const doc of ppDocs) {
    const p = normalizePhoneTenDigits(doc.phone || "");
    const e = normalizeEmail(doc.email);

    // 1. Check if this user is ALREADY PAID in `users`
    if ((p && paidPhones.has(p)) || (e && paidEmails.has(e))) {
      ppDeleteIds.push(doc._id);
      removedPaidDuplicates++;
      continue;
    }

    // 2. Check if duplicate of another unpaid user already kept
    const existingKept =
      (p && keptByPhone.get(p)) || (e && keptByEmail.get(e)) || null;
    if (existingKept) {
      await mergeMetadataIfMissing(existingKept.col, existingKept.doc, doc);
      ppDeleteIds.push(doc._id);
      removedUnpaidDuplicates++;
      continue;
    }

    // 3. Keep this unique truly unpaid user
    const entry = { col: "pending_payment" as const, doc };
    if (p) {
      seenUnpaidPhones.add(p);
      keptByPhone.set(p, entry);
    }
    if (e) {
      seenUnpaidEmails.add(e);
      keptByEmail.set(e, entry);
    }
    uniqueTrulyUnpaidCount++;
  }

  // Process pending_verification next
  for (const doc of pvDocs) {
    const p = normalizePhoneTenDigits(doc.phone || "");
    const e = normalizeEmail(doc.email);

    // 1. Check if this user is ALREADY PAID in `users`
    if ((p && paidPhones.has(p)) || (e && paidEmails.has(e))) {
      pvDeleteIds.push(doc._id);
      removedPaidDuplicates++;
      continue;
    }

    // 2. Check if duplicate of a `pending_payment` or newer `pending_verification` record
    const existingKept =
      (p && keptByPhone.get(p)) || (e && keptByEmail.get(e)) || null;
    if (existingKept) {
      await mergeMetadataIfMissing(existingKept.col, existingKept.doc, doc);
      pvDeleteIds.push(doc._id);
      removedUnpaidDuplicates++;
      continue;
    }

    // 3. Keep this unique truly unpaid user
    const entry = { col: "pending_verification" as const, doc };
    if (p) {
      seenUnpaidPhones.add(p);
      keptByPhone.set(p, entry);
    }
    if (e) {
      seenUnpaidEmails.add(e);
      keptByEmail.set(e, entry);
    }
    uniqueTrulyUnpaidCount++;
  }

  if (ppDeleteIds.length > 0) {
    await db
      .collection("pending_payment")
      .deleteMany({ _id: { $in: ppDeleteIds } });
  }
  if (pvDeleteIds.length > 0) {
    await db
      .collection("pending_verification")
      .deleteMany({ _id: { $in: pvDeleteIds } });
  }

  return {
    removedPaidDuplicates,
    removedUnpaidDuplicates,
    uniqueTrulyUnpaidCount,
  };
}

/**
 * Checks whether a lead should be excluded from automated retargeting.
 * Strictly skips any user who already exists in `users` (`isPaid: true`) by phone OR email.
 */
export async function shouldSkipLeadForRetargeting(
  db: Db,
  lead: any
): Promise<{ skip: boolean; reason?: string }> {
  const cleanPhone = normalizePhoneTenDigits(lead.phone || "");
  const cleanEmail = normalizeEmail(lead.email);

  if (!cleanPhone && !cleanEmail) {
    return { skip: true, reason: "missing_contact_info" };
  }

  const orConditions: any[] = [];
  if (lead.phone) orConditions.push({ phone: lead.phone });
  if (cleanPhone) {
    orConditions.push({ phone: cleanPhone });
    orConditions.push({ phone: `+91${cleanPhone}` });
    orConditions.push({ phone: `91${cleanPhone}` });
  }
  if (cleanEmail) {
    orConditions.push({
      email: {
        $regex: `^${cleanEmail.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}$`,
        $options: "i",
      },
    });
  }

  const paidUser = await db.collection("users").findOne({
    $or: orConditions,
    isPaid: true,
  });

  if (paidUser) {
    return { skip: true, reason: "already_paid_user" };
  }

  return { skip: false };
}

/**
 * Dispatches a specific wave (1, 2, or 3) to a single lead in pending_verification or pending_payment.
 * Supports independent channel retries (only retries failed channel if one already succeeded).
 */
export async function dispatchWaveToLead({
  db,
  collectionName,
  lead,
  waveNumber,
  settings,
  forceAllChannels = false,
  customDiscountPercent,
  resetFunnelStartForWave1 = false,
}: {
  db: Db;
  collectionName: LeadCollectionName;
  lead: any;
  waveNumber: 1 | 2 | 3;
  settings?: FunnelSettings;
  forceAllChannels?: boolean;
  customDiscountPercent?: number;
  resetFunnelStartForWave1?: boolean;
}): Promise<WaveExecutionResult> {
  const activeSettings = settings || (await getFunnelSettings(db));
  const waveConfig =
    activeSettings.waves.find((w) => w.wave === waveNumber) ||
    activeSettings.waves[waveNumber - 1];

  const now = new Date();
  const resumeToken: string = lead.resumeToken || generateResumeToken();
  const magicUrl = buildMagicResumeUrl(resumeToken);

  // Determine discount percent to unlock & apply
  const waveDiscount =
    typeof customDiscountPercent === "number"
      ? customDiscountPercent
      : waveConfig.discountPercent;
  const effectiveDiscountPercent = Math.max(
    Number(lead.discountPercent) || 0,
    Number(waveDiscount) || 0
  );

  const oppositionCount = Math.max(1, Number(lead.oppositionCount) || 1);
  const pricing = calculateFunnelPricing(
    oppositionCount,
    effectiveDiscountPercent,
    activeSettings.basePricePerOpposition
  );

  const priorWaveState = lead.retargeting?.waves?.[String(waveNumber)] || {};
  const priorWhatsappSent = forceAllChannels ? false : Boolean(priorWaveState.whatsappSent);
  const priorEmailSent = forceAllChannels ? false : Boolean(priorWaveState.emailSent);
  const attempts = (Number(priorWaveState.attempts) || 0) + 1;

  let whatsappSent = priorWhatsappSent;
  let emailSent = priorEmailSent;
  const errors: string[] = [];

  // Dispatch WATI WhatsApp (only if not yet sent on this wave)
  if (!whatsappSent && lead.phone) {
    const watiRes = await sendWatiFunnelRetargeting({
      phone: lead.phone,
      wave: waveNumber,
      templateName: waveConfig.watiTemplate,
      userName: lead.name || "there",
      discountPercent: effectiveDiscountPercent || 15,
      originalAmount: pricing.totalOriginal,
      discountedAmount: pricing.totalPayable,
      resumeToken,
      magicUrl,
    });
    whatsappSent = watiRes.ok;
    if (!watiRes.ok && watiRes.error) {
      errors.push(`WATI: ${watiRes.error}`);
    }
  }

  // Dispatch Zoho HTML Email (only if not yet sent on this wave)
  if (!emailSent && normalizeEmail(lead.email)) {
    const emailRes = await sendFunnelRetargetingEmail({
      toEmail: lead.email,
      userName: lead.name || "there",
      wave: waveNumber,
      discountPercent: effectiveDiscountPercent || 15,
      originalAmount: pricing.totalOriginal,
      discountedAmount: pricing.totalPayable,
      oppositionCount,
      magicUrl,
    });
    emailSent = emailRes.ok;
    if (!emailRes.ok && emailRes.error) {
      errors.push(`Email: ${emailRes.error}`);
    }
  }

  const discountUnlockedAt =
    effectiveDiscountPercent > 0
      ? lead.discountUnlockedAt
        ? new Date(lead.discountUnlockedAt)
        : now
      : lead.discountUnlockedAt || null;

  const discountExpiresAt =
    effectiveDiscountPercent > 0
      ? lead.discountExpiresAt
        ? new Date(lead.discountExpiresAt)
        : new Date(now.getTime() + activeSettings.discountExpiryHours * 60 * 60 * 1000)
      : lead.discountExpiresAt || null;

  const currentWave = Math.max(Number(lead.retargeting?.currentWave) || 0, waveNumber);
  const updatedWaveRecord = {
    wave: waveNumber,
    sentAt: priorWaveState.sentAt || now.toISOString(),
    lastAttemptAt: now.toISOString(),
    whatsappSent,
    emailSent,
    attempts,
    discountPercent: effectiveDiscountPercent,
    templateName: waveConfig.watiTemplate,
    lastError: errors.length > 0 ? errors.join(" | ") : null,
  };

  // When enrolling existing unpaid leads into Wave 1, anchor funnelStartedAt to (now - wave1.delayMinutes)
  // so Wave 2 and Wave 3 automatically follow on their proper 6h / 24h schedule!
  const computedFunnelStartedAt = resetFunnelStartForWave1
    ? new Date(now.getTime() - waveConfig.delayMinutes * 60 * 1000)
    : lead.funnelStartedAt || lead.createdAt || now;

  await db.collection(collectionName).updateOne(
    { _id: new ObjectId(lead._id) },
    {
      $set: {
        resumeToken,
        funnelStartedAt: computedFunnelStartedAt,
        discountPercent: effectiveDiscountPercent,
        discountUnlockedAt,
        discountExpiresAt,
        expectedAmount: pricing.totalPayable,
        originalAmount: pricing.totalOriginal,
        "retargeting.currentWave": currentWave,
        "retargeting.lastDispatchedAt": now.toISOString(),
        [`retargeting.waves.${waveNumber}`]: updatedWaveRecord,
        updatedAt: now,
      },
    }
  );

  // Record audit entry in funnel_dispatch_logs
  try {
    await db.collection("funnel_dispatch_logs").insertOne({
      leadId: lead._id.toString(),
      collection: collectionName,
      phone: lead.phone,
      email: lead.email,
      name: lead.name,
      wave: waveNumber,
      discountPercent: effectiveDiscountPercent,
      originalAmount: pricing.totalOriginal,
      discountedAmount: pricing.totalPayable,
      whatsappSent,
      emailSent,
      attempts,
      error: errors.length > 0 ? errors.join(" | ") : null,
      dispatchedAt: now,
    });
  } catch (logErr) {
    console.error("[FunnelDispatcher] Error writing funnel_dispatch_logs:", logErr);
  }

  return {
    leadId: lead._id.toString(),
    collection: collectionName,
    phone: lead.phone,
    email: lead.email,
    wave: waveNumber,
    discountPercent: effectiveDiscountPercent,
    whatsappSent,
    emailSent,
    error: errors.length > 0 ? errors.join(" | ") : null,
  };
}

/**
 * Evaluates which wave (1, 2, or 3) a lead is currently due for based on elapsed time,
 * sequential wave spacing (Wave 1 -> Wave 2 -> Wave 3), and retry state.
 */
export function determineDueWaveForLead(
  lead: any,
  settings: FunnelSettings,
  now: Date = new Date()
): 1 | 2 | 3 | null {
  const startRaw = lead.funnelStartedAt || lead.createdAt;
  const startTime = startRaw ? new Date(startRaw).getTime() : 0;
  const elapsedMinutes =
    startTime > 0 && !isNaN(startTime)
      ? (now.getTime() - startTime) / (1000 * 60)
      : 0;

  const wavesState = lead.retargeting?.waves || {};
  const w1Cfg = settings.waves.find((w) => w.wave === 1) || settings.waves[0];
  const w2Cfg = settings.waves.find((w) => w.wave === 2) || settings.waves[1];

  for (const waveCfg of settings.waves) {
    if (!waveCfg.enabled) continue;
    const wNum = waveCfg.wave;
    const wState = wavesState[String(wNum)];

    const bothSucceeded = Boolean(wState?.whatsappSent && wState?.emailSent);
    const maxedOutAttempts = (Number(wState?.attempts) || 0) >= 3;

    if (bothSucceeded || maxedOutAttempts) {
      // Wave is finished; check next wave
      continue;
    }

    // Enforce at least 8 minutes between retry attempts on the same wave
    if (wState?.lastAttemptAt) {
      const minsSinceLastAttempt =
        (now.getTime() - new Date(wState.lastAttemptAt).getTime()) / (1000 * 60);
      if (minsSinceLastAttempt < 8) {
        return null;
      }
    }

    if (wNum === 1) {
      if (elapsedMinutes >= waveCfg.delayMinutes) {
        return 1;
      }
      return null;
    }

    if (wNum === 2) {
      const w1State = wavesState["1"];
      const w1SentAt = w1State?.sentAt || w1State?.lastAttemptAt;
      if (w1Cfg?.enabled) {
        // Wave 2 can only fire AFTER Wave 1 was sent + the inter-wave gap (e.g. 360 - 30 = 330m)
        if (!w1SentAt) return null;
        const minsSinceW1 = (now.getTime() - new Date(w1SentAt).getTime()) / (1000 * 60);
        const requiredGapAfterW1 = Math.max(30, waveCfg.delayMinutes - (w1Cfg.delayMinutes || 30));
        if (minsSinceW1 >= requiredGapAfterW1) {
          return 2;
        }
        return null;
      } else if (elapsedMinutes >= waveCfg.delayMinutes) {
        return 2;
      }
      return null;
    }

    if (wNum === 3) {
      const w2State = wavesState["2"];
      const w2SentAt = w2State?.sentAt || w2State?.lastAttemptAt;
      if (w2Cfg?.enabled) {
        // Wave 3 can only fire AFTER Wave 2 was sent + the inter-wave gap (e.g. 1440 - 360 = 1080m)
        if (!w2SentAt) return null;
        const minsSinceW2 = (now.getTime() - new Date(w2SentAt).getTime()) / (1000 * 60);
        const requiredGapAfterW2 = Math.max(60, waveCfg.delayMinutes - (w2Cfg.delayMinutes || 360));
        if (minsSinceW2 >= requiredGapAfterW2) {
          return 3;
        }
        return null;
      } else if (elapsedMinutes >= waveCfg.delayMinutes) {
        return 3;
      }
      return null;
    }
  }

  return null;
}

/**
 * Runs a full retargeting pass across pending_verification and pending_payment.
 * Automatically cleans up paid duplicates and deduplicates unpaid users first.
 */
export async function runAutomatedFunnelQueue(
  db: Db,
  options?: { forceRunWhenPaused?: boolean; batchLimit?: number }
): Promise<{
  processed: number;
  skipped: number;
  removedPaidDuplicates: number;
  removedUnpaidDuplicates: number;
  results: WaveExecutionResult[];
}> {
  const settings = await getFunnelSettings(db);
  if (!settings.enabled && !options?.forceRunWhenPaused) {
    return {
      processed: 0,
      skipped: 0,
      removedPaidDuplicates: 0,
      removedUnpaidDuplicates: 0,
      results: [],
    };
  }

  // 1. Clean up any paid users' stale pending entries & deduplicate unpaid entries
  const cleanupStats = await cleanupAndDeduplicateUnpaidLeads(db);

  const batchLimit = options?.batchLimit || 50;
  const now = new Date();
  const cutoffDate = new Date(now.getTime() - 14 * 24 * 60 * 60 * 1000);

  // Include recent leads OR any lead currently active in Wave 1 or Wave 2
  const activeQuery = {
    $or: [
      { funnelStartedAt: { $gte: cutoffDate } },
      { createdAt: { $gte: cutoffDate } },
      { "retargeting.currentWave": { $in: [1, 2] } },
    ],
  };

  const [pvLeads, ppLeads] = await Promise.all([
    db
      .collection("pending_verification")
      .find(activeQuery)
      .sort({ _id: -1 })
      .limit(300)
      .toArray(),
    db
      .collection("pending_payment")
      .find(activeQuery)
      .sort({ _id: -1 })
      .limit(300)
      .toArray(),
  ]);

  const ppPhones = new Set(ppLeads.map((d) => normalizePhoneTenDigits(d.phone || "")));
  const candidates: Array<{ collection: LeadCollectionName; doc: any }> = [
    ...ppLeads.map((doc) => ({ collection: "pending_payment" as const, doc })),
    ...pvLeads
      .filter((doc) => !ppPhones.has(normalizePhoneTenDigits(doc.phone || "")))
      .map((doc) => ({ collection: "pending_verification" as const, doc })),
  ];

  const results: WaveExecutionResult[] = [];
  let processed = 0;
  let skipped = 0;

  for (const item of candidates) {
    if (processed >= batchLimit) break;

    const dueWave = determineDueWaveForLead(item.doc, settings, now);
    if (!dueWave) continue;

    const skipCheck = await shouldSkipLeadForRetargeting(db, item.doc);
    if (skipCheck.skip) {
      skipped++;
      continue;
    }

    const execResult = await dispatchWaveToLead({
      db,
      collectionName: item.collection,
      lead: item.doc,
      waveNumber: dueWave,
      settings,
    });

    results.push(execResult);
    processed++;
  }

  return {
    processed,
    skipped,
    removedPaidDuplicates: cleanupStats.removedPaidDuplicates,
    removedUnpaidDuplicates: cleanupStats.removedUnpaidDuplicates,
    results,
  };
}

/**
 * Cleans up paid/duplicate entries across pending_payment & pending_verification,
 * and starts the retargeting funnel with Wave 1 (Message 1) for all unique truly unpaid users
 * who have not yet received Wave 1. Subsequent Wave 2 and Wave 3 messages will then
 * automatically be dispatched by the scheduled queue.
 */
export async function startWave1ForAllUnpaidLeads(
  db: Db,
  options?: { batchLimit?: number }
): Promise<{
  removedPaidDuplicates: number;
  removedUnpaidDuplicates: number;
  uniqueTrulyUnpaidCount: number;
  wave1DispatchedCount: number;
  alreadyStartedCount: number;
  results: WaveExecutionResult[];
}> {
  const settings = await getFunnelSettings(db);
  const cleanupStats = await cleanupAndDeduplicateUnpaidLeads(db);
  const batchLimit = options?.batchLimit || 500;

  const [ppLeads, pvLeads] = await Promise.all([
    db.collection("pending_payment").find({}).sort({ _id: -1 }).toArray(),
    db.collection("pending_verification").find({}).sort({ _id: -1 }).toArray(),
  ]);

  const candidates: Array<{ collection: LeadCollectionName; doc: any }> = [
    ...ppLeads.map((doc) => ({ collection: "pending_payment" as const, doc })),
    ...pvLeads.map((doc) => ({ collection: "pending_verification" as const, doc })),
  ];

  const results: WaveExecutionResult[] = [];
  let wave1DispatchedCount = 0;
  let alreadyStartedCount = 0;

  for (const item of candidates) {
    if (wave1DispatchedCount >= batchLimit) break;

    const w1 = item.doc.retargeting?.waves?.["1"];
    const alreadySentW1 = Boolean(w1?.whatsappSent && w1?.emailSent);
    const alreadyOnLaterWave = (Number(item.doc.retargeting?.currentWave) || 0) >= 2;

    if (alreadySentW1 || alreadyOnLaterWave) {
      alreadyStartedCount++;
      continue;
    }

    const skipCheck = await shouldSkipLeadForRetargeting(db, item.doc);
    if (skipCheck.skip) {
      continue;
    }

    const execResult = await dispatchWaveToLead({
      db,
      collectionName: item.collection,
      lead: item.doc,
      waveNumber: 1,
      settings,
      resetFunnelStartForWave1: true,
    });

    results.push(execResult);
    wave1DispatchedCount++;
  }

  return {
    ...cleanupStats,
    wave1DispatchedCount,
    alreadyStartedCount,
    results,
  };
}
