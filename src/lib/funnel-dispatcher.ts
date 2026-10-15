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

/**
 * Checks whether a lead should be excluded from automated retargeting
 * (Decision #9: Paid users with remaining slots; Decision #10: Dashboard BuyCreditsModal drop-offs).
 */
export async function shouldSkipLeadForRetargeting(
  db: Db,
  lead: any
): Promise<{ skip: boolean; reason?: string }> {
  // Decision #10: Never retarget existing users who opened "Buy More Credits" inside dashboard
  if (lead.isReturningUser === true && lead.reSubmittedFromPublicForm !== true) {
    return { skip: true, reason: "dashboard_buy_credits_dropoff" };
  }

  const cleanPhone = normalizePhoneTenDigits(lead.phone || "");
  if (!cleanPhone) {
    return { skip: true, reason: "invalid_phone" };
  }

  const paidUser = await db.collection("users").findOne({
    $or: [{ phone: lead.phone }, { phone: cleanPhone }],
    isPaid: true,
  });

  if (paidUser) {
    // Decision #9: If existing paid user still has unused case slots, do not retarget
    const PRICE_PER_OPPOSITION = 999;
    const amountPaid = paidUser.amountPaid || 0;
    const limitFromAmountPaid = Math.floor(amountPaid / PRICE_PER_OPPOSITION);
    const allowedLimit = Math.max(limitFromAmountPaid, paidUser.oppositionCount || 1);
    const hasUnlimitedCases = paidUser.hasUnlimitedCases === true;

    const currentCreatedCount = await db
      .collection("cases")
      .countDocuments({ userId: paidUser._id });

    if (hasUnlimitedCases || currentCreatedCount < allowedLimit) {
      return { skip: true, reason: "already_paid_with_remaining_quota" };
    }
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
}: {
  db: Db;
  collectionName: LeadCollectionName;
  lead: any;
  waveNumber: 1 | 2 | 3;
  settings?: FunnelSettings;
  forceAllChannels?: boolean;
  customDiscountPercent?: number;
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
  if (!emailSent && lead.email) {
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

  await db.collection(collectionName).updateOne(
    { _id: new ObjectId(lead._id) },
    {
      $set: {
        resumeToken,
        funnelStartedAt: lead.funnelStartedAt || lead.createdAt || now,
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
 * Evaluates which wave (1, 2, or 3) a lead is currently due for based on elapsed time and retry state.
 */
export function determineDueWaveForLead(
  lead: any,
  settings: FunnelSettings,
  now: Date = new Date()
): 1 | 2 | 3 | null {
  const startRaw = lead.funnelStartedAt || lead.createdAt;
  if (!startRaw) return null;

  const startTime = new Date(startRaw).getTime();
  if (isNaN(startTime)) return null;

  const elapsedMinutes = (now.getTime() - startTime) / (1000 * 60);
  const wavesState = lead.retargeting?.waves || {};

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

    // If this wave hasn't finished yet, check if enough time has elapsed since funnelStartedAt
    if (elapsedMinutes >= waveCfg.delayMinutes) {
      // Also enforce at least 8 minutes between retry attempts on the same wave
      if (wState?.lastAttemptAt) {
        const minsSinceLastAttempt =
          (now.getTime() - new Date(wState.lastAttemptAt).getTime()) / (1000 * 60);
        if (minsSinceLastAttempt < 8) {
          return null;
        }
      }
      return wNum;
    } else {
      // Since waves are sequential (Wave 1 -> Wave 2 -> Wave 3), if Wave N isn't due yet, stop checking
      return null;
    }
  }

  return null;
}

/**
 * Runs a full retargeting pass across pending_verification and pending_payment.
 */
export async function runAutomatedFunnelQueue(
  db: Db,
  options?: { forceRunWhenPaused?: boolean; batchLimit?: number }
): Promise<{
  processed: number;
  skipped: number;
  results: WaveExecutionResult[];
}> {
  const settings = await getFunnelSettings(db);
  if (!settings.enabled && !options?.forceRunWhenPaused) {
    return { processed: 0, skipped: 0, results: [] };
  }

  const batchLimit = options?.batchLimit || 50;
  const now = new Date();

  // Only inspect leads created within the last 14 days so ancient records aren't spammed
  const cutoffDate = new Date(now.getTime() - 14 * 24 * 60 * 60 * 1000);

  const [pvLeads, ppLeads] = await Promise.all([
    db
      .collection("pending_verification")
      .find({ createdAt: { $gte: cutoffDate } })
      .sort({ createdAt: -1 })
      .limit(200)
      .toArray(),
    db
      .collection("pending_payment")
      .find({ createdAt: { $gte: cutoffDate } })
      .sort({ createdAt: -1 })
      .limit(200)
      .toArray(),
  ]);

  // Deduplicate by phone: if a phone exists in both pending_payment and pending_verification, prioritize pending_payment
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

  return { processed, skipped, results };
}
