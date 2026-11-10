/**
 * Optional Speed Post dispatch for retail (non-AMA) users.
 *
 * Charged at cost per notice, so funnel discounts never apply to it. Only the
 * 3 legal notices are posted; the Police Complaint is never sent physically.
 */

export const PHYSICAL_DISPATCH_FEE_PER_NOTICE = 150;
export const PHYSICAL_NOTICES_PER_PARTY = 3;
export const PHYSICAL_DISPATCH_FEE_PER_PARTY =
  PHYSICAL_DISPATCH_FEE_PER_NOTICE * PHYSICAL_NOTICES_PER_PARTY;

export function calculatePhysicalDispatchFee(oppositionCount: number, optedIn: boolean): number {
  return optedIn ? Math.max(1, Number(oppositionCount) || 1) * PHYSICAL_DISPATCH_FEE_PER_PARTY : 0;
}

/** Returns the user's Yes/No answer, or null when the request didn't include one. */
export function parsePhysicalDispatchChoice(value: unknown): boolean | null {
  return typeof value === "boolean" ? value : null;
}
