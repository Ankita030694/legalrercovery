/**
 * Notice Dispatch eligibility.
 *
 * Only notices that were already delivered through BOTH Email and WhatsApp
 * (timeline step status === "completed") can be dispatched from the Notice
 * Dispatch console. Everything else is excluded:
 *  - pending / scheduled / locked steps (not sent yet)
 *  - "partially_delivered" / "failed" steps (Email or WhatsApp missing)
 *  - the Police Complaint step (sent to the SHO, not via Email + WhatsApp to the defaulter)
 */

export type NoticeNumber = 1 | 2 | 3;

/** Step number of the Police Complaint for a given case category. */
export function getPoliceComplaintStep(category?: string): number {
  return category === "loan-recovery" ? 2 : 4;
}

/**
 * Maps a raw 4-step timeline step (1..4) to a physical Notice Number (1 | 2 | 3),
 * or null if the step is a Police Complaint (which is never sent to the dispatcher).
 *
 * - loan-recovery:    step 1 → Notice 1, step 2 → Police Complaint (null), step 3 → Notice 2, step 4 → Notice 3
 * - general-recovery: step 1 → Notice 1, step 2 → Notice 2, step 3 → Notice 3, step 4 → Police Complaint (null)
 */
export function timelineStepToNoticeNumber(step: number, category?: string): NoticeNumber | null {
  const s = Number(step);
  if (category === "loan-recovery") {
    if (s === 1) return 1;
    if (s === 3) return 2;
    if (s === 4) return 3;
    return null; // step 2 is Police Complaint
  }
  if (s === 1) return 1;
  if (s === 2) return 2;
  if (s === 3) return 3;
  return null; // step 4 is Police Complaint
}

/**
 * Maps a physical Notice Number (1 | 2 | 3) back to the raw timeline step (1..4)
 * required by the PDF generator for the case's category.
 *
 * - loan-recovery:    Notice 1 → step 1, Notice 2 → step 3, Notice 3 → step 4
 * - general-recovery: Notice 1 → step 1, Notice 2 → step 2, Notice 3 → step 3
 */
export function noticeNumberToTimelineStep(noticeNumber: number, category?: string): number | null {
  const n = Number(noticeNumber);
  if (category === "loan-recovery") {
    if (n === 1) return 1;
    if (n === 2) return 3;
    if (n === 3) return 4;
    return null;
  }
  if (n === 1) return 1;
  if (n === 2) return 2;
  if (n === 3) return 3;
  return null;
}

/**
 * Returns all physical Notice Numbers (1, 2, 3) that have already been delivered
 * via Email & WhatsApp (timeline entry status === "completed") for a case.
 * Police Complaint steps are always excluded.
 */
export function getCompletedNoticeNumbers(c: any): NoticeNumber[] {
  const timeline = Array.isArray(c?.timeline) ? c.timeline : [];
  const completed = new Set<NoticeNumber>();
  timeline.forEach((t: any, idx: number) => {
    if (!t || t.status !== "completed") return;
    const stepNo = Number(t.step) || idx + 1;
    const noticeNum = timelineStepToNoticeNumber(stepNo, c?.category);
    if (noticeNum !== null) {
      completed.add(noticeNum);
    }
  });
  return Array.from(completed).sort((a, b) => a - b);
}

/**
 * Returns the latest physical Notice Number (1, 2, or 3) that was delivered via Email & WhatsApp,
 * or null if the case has no eligible notice.
 */
export function getEligibleDispatchStep(c: any): NoticeNumber | null {
  const completed = getCompletedNoticeNumbers(c);
  if (completed.length === 0) return null;
  return completed[completed.length - 1];
}
