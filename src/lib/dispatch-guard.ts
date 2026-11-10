import type { Db } from "mongodb";
import { sendLegalRecoveryEmail } from "@/lib/email";

// Zoho Mail allows 50-500 external emails per rolling hour depending on sender reputation
const MAX_NOTICES_PER_HOUR = Number(process.env.NOTICE_EMAILS_PER_HOUR) || 50;
// Zoho Mail APIs allow 30 calls per minute and a notice uses up to 3 (upload, send, client confirmation)
export const MIN_SEND_GAP_MS = 6000;
// Stops picking up new notices with enough of the 300s function limit left to finish the current one
export const RUN_TIME_BUDGET_MS = 240000;
export const EMAIL_BREAKER_THRESHOLD = 3;

// Zoho blocks a mailbox for up to an hour once a limit is hit, so retries must outlast that block
const RETRY_DELAY_MINUTES = [60, 240];
const STALE_LOCK_MS = 15 * 60 * 1000;
const EMAIL_BREAKER_PAUSE_MS = 60 * 60 * 1000;
const EMAIL_BREAKER_ID = "email_breaker";

export interface DispatchFailure {
  caseId: string;
  step: number;
  error: string;
}

export function getRetryPlan(attempt: number, now: Date): { isPermanent: boolean; retryAt: string | null } {
  const delayMinutes = RETRY_DELAY_MINUTES[attempt - 1];
  if (delayMinutes === undefined) return { isPermanent: true, retryAt: null };
  return { isPermanent: false, retryAt: new Date(now.getTime() + delayMinutes * 60 * 1000).toISOString() };
}

/** Records a failed attempt on a timeline step. Returns the failure when the step has run out of retries. */
export async function recordFailedDispatchAttempt(
  db: Db,
  caseDoc: any,
  stepIndex: number,
  status: "failed" | "partially_delivered",
  error: string,
  now: Date,
  onlyIfStatus?: string
): Promise<DispatchFailure | null> {
  const attempt = (caseDoc.timeline[stepIndex].retryCount || 0) + 1;
  const { isPermanent, retryAt } = getRetryPlan(attempt, now);

  const result = await db.collection("cases").updateOne(
    { _id: caseDoc._id, ...(onlyIfStatus ? { [`timeline.${stepIndex}.status`]: onlyIfStatus } : {}) },
    {
      $set: {
        [`timeline.${stepIndex}.status`]: isPermanent ? "failed_permanent" : status,
        [`timeline.${stepIndex}.retryCount`]: attempt,
        [`timeline.${stepIndex}.scheduledAt`]: retryAt,
        [`timeline.${stepIndex}.error`]: `${error} Attempt: ${attempt}`,
        updatedAt: now.toISOString(),
      },
    }
  );

  if (!isPermanent || result.modifiedCount === 0) return null;
  return { caseId: caseDoc.caseId, step: stepIndex + 1, error };
}

/** Releases steps left in "processing" by a run that was killed before it could finish them. */
export async function recoverInterruptedDispatches(db: Db, now: Date): Promise<DispatchFailure[]> {
  const cutoff = new Date(now.getTime() - STALE_LOCK_MS).toISOString();
  const stuckCases = await db
    .collection("cases")
    .find({ timeline: { $elemMatch: { status: "processing", lockedAt: { $lt: cutoff } } } })
    .toArray();

  const failures: DispatchFailure[] = [];
  for (const caseDoc of stuckCases) {
    for (let stepIndex = 0; stepIndex < caseDoc.timeline.length; stepIndex++) {
      const step = caseDoc.timeline[stepIndex];
      if (step.status !== "processing" || !step.lockedAt || step.lockedAt >= cutoff) continue;
      console.warn(`[Dispatch Guard] Releasing interrupted step ${stepIndex + 1} of Case ${caseDoc.caseId}`);
      const failure = await recordFailedDispatchAttempt(
        db,
        caseDoc,
        stepIndex,
        "failed",
        "Dispatch run was interrupted before this step finished.",
        now,
        "processing"
      );
      if (failure) failures.push(failure);
    }
  }
  return failures;
}

/** How many more notices can be sent before reaching the rolling hourly limit. */
export async function getHourlySendBudget(db: Db, now: Date): Promise<number> {
  const oneHourAgo = new Date(now.getTime() - 60 * 60 * 1000).toISOString();
  const sentLastHour = await db.collection("dispatch_logs").countDocuments({
    dispatchedAt: { $gte: oneHourAgo },
    "channels.email.status": "success",
    recipientTo: { $ne: "None (Skipped)" },
  });
  return Math.max(0, MAX_NOTICES_PER_HOUR - sentLastHour);
}

export async function isEmailBreakerOpen(db: Db, now: Date): Promise<boolean> {
  const breaker = await db.collection<{ _id: string; openUntil: string }>("dispatch_state").findOne({ _id: EMAIL_BREAKER_ID });
  return Boolean(breaker && breaker.openUntil > now.toISOString());
}

export async function openEmailBreaker(db: Db, now: Date): Promise<void> {
  await db.collection<{ _id: string; openUntil: string }>("dispatch_state").updateOne(
    { _id: EMAIL_BREAKER_ID },
    { $set: { openUntil: new Date(now.getTime() + EMAIL_BREAKER_PAUSE_MS).toISOString() } },
    { upsert: true }
  );
}

const escapeHtml = (value: string) => value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/** Emails the admin from the separate notify@ mailbox, so a blocked notice@ mailbox cannot silence it. */
export async function alertDispatchFailures(failures: DispatchFailure[], breakerOpened = false): Promise<void> {
  if (failures.length === 0 && !breakerOpened) return;

  const alertEmail = process.env.DISPATCH_ALERT_EMAIL || process.env.ADMIN_EMAIL;
  console.error(`[Dispatch Guard] Alert: ${failures.length} permanent failure(s), breaker opened: ${breakerOpened}`);
  if (!alertEmail) {
    console.error("[Dispatch Guard] DISPATCH_ALERT_EMAIL and ADMIN_EMAIL are not set, so no alert was emailed.");
    return;
  }

  const breakerHtml = breakerOpened
    ? `<p><strong>Notice sending is paused for 1 hour</strong> because ${EMAIL_BREAKER_THRESHOLD} notice emails failed in a row. The mailbox may have reached its Zoho sending limit. Waiting notices will go out automatically after the pause.</p>`
    : "";
  const rowsHtml = failures
    .map(f => `<tr><td>${escapeHtml(f.caseId)}</td><td>${f.step}</td><td>${escapeHtml(f.error)}</td></tr>`)
    .join("");
  const failuresHtml = failures.length
    ? `<p>These notices ran out of automatic retries and will not be sent until someone uses Force Send on them:</p>
       <table border="1" cellpadding="6" style="border-collapse:collapse"><tr><th>Case</th><th>Step</th><th>Reason</th></tr>${rowsHtml}</table>`
    : "";

  try {
    const sent = await sendLegalRecoveryEmail(
      alertEmail,
      failures.length ? `Action needed: ${failures.length} notice(s) failed permanently` : "Notice sending paused after repeated failures",
      `<div style="font-family: Arial, sans-serif; font-size: 14px;">${breakerHtml}${failuresHtml}</div>`
    );
    if (!sent) console.error("[Dispatch Guard] The failure alert email could not be sent.");
  } catch (err) {
    console.error("[Dispatch Guard] The failure alert email could not be sent:", err);
  }
}
