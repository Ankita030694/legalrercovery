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

/** Step number of the Police Complaint for a given case category. */
export function getPoliceComplaintStep(category?: string): number {
  return category === "loan-recovery" ? 2 : 4;
}

/**
 * Returns the latest notice step (1-based) that was delivered via Email & WhatsApp,
 * or null if the case has no eligible notice.
 */
export function getEligibleDispatchStep(c: any): number | null {
  const timeline = Array.isArray(c?.timeline) ? c.timeline : [];
  const policeStep = getPoliceComplaintStep(c?.category);

  let latest: number | null = null;
  timeline.forEach((t: any, idx: number) => {
    if (!t || t.status !== "completed") return;
    const stepNo = Number(t.step) || idx + 1;
    if (stepNo === policeStep) return;
    if (latest === null || stepNo > latest) latest = stepNo;
  });
  return latest;
}
