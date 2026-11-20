export const IMPLANTIUM_REPRESENTEE_ID = "6a2bd00334fb9ef52be738ef";

export const IMPLANTIUM_DENTAL_COUNCIL_CLAUSE =
  "Initiation of appropriate proceedings and complaints before the competent regulatory and professional authorities, including the State Dental Council and/or Dental Council of India, as applicable, which may have consequences for your professional registration, including its validity, renewal and continuation, subject to applicable laws and regulations.";

export interface ImplantiumCheckParams {
  representeeId?: string | null;
  isSpecialUser?: boolean;
  clientEmail?: string | null;
  clientName?: string | null;
}

/**
 * Strict identity gate for Implantium-only legal notice clauses:
 * 1. Blocks 100% of normal/retail users (`isSpecialUser` must be true).
 * 2. Matches Implantium's MongoDB Representee ID (`6a2bd00334fb9ef52be738ef`).
 * 3. Rejects any other explicit `representeeId` (e.g. ACTOLOAN, "self", "direct").
 * 4. Safe fallback (only when `isSpecialUser` is already true and no `representeeId` was passed)
 *    matching Implantium's verified email (`order.india@dentium.com`) or organization name.
 */
export function isImplantiumNotice(params: ImplantiumCheckParams): boolean {
  if (!params.isSpecialUser) return false;

  const repId = params.representeeId ? String(params.representeeId).trim() : "";
  if (repId === IMPLANTIUM_REPRESENTEE_ID) {
    return true;
  }
  if (repId !== "") {
    return false;
  }

  const email = (params.clientEmail || "").trim().toLowerCase();
  const name = (params.clientName || "").trim().toLowerCase();
  return email === "order.india@dentium.com" || name.includes("implantium");
}
