/**
 * "What do you wish to recover?" heads.
 *
 * Used in two places:
 *  - Public lead form (RecoveryForm) -> stored as `recoveryType` on leads and
 *    `primaryRecoveryType` on users (segmentation / retargeting).
 *  - Each case in /user/new-recovery -> stored as `recoveryType` on the case
 *    (the source of truth, since one purchase can cover parties of different types).
 *
 * NOTE: Intentionally separate from the case `category` field
 * ("general-recovery" | "loan-recovery"), which drives dispatch timelines.
 */
export const RECOVERY_TYPES = [
  { value: "salary-employment", label: "Unpaid Salary & Employment Dues" },
  { value: "business-invoice", label: "Business Dues & Unpaid Invoices" },
  { value: "freelancer-client", label: "Freelancer & Client Payments" },
  { value: "personal-loan", label: "Money Lent to Friend / Relative" },
  { value: "cheque-bounce", label: "Cheque Bounce (Section 138)" },
  { value: "deposit-rent", label: "Security Deposit & Rent" },
  { value: "property-builder", label: "Property & Builder Refund" },
  { value: "consumer-refund", label: "Consumer Refund (Product / Service)" },
  { value: "education-fee", label: "School / College / Coaching Fee Refund" },
  { value: "travel-refund", label: "Flight, Travel & Hotel Refund" },
  { value: "insurance-claim", label: "Insurance Claim" },
  { value: "cyber-fraud-bank", label: "Cyber Fraud & Bank Disputes" },
  { value: "other", label: "Other" },
] as const;

export type RecoveryType = (typeof RECOVERY_TYPES)[number]["value"];

const VALID_VALUES = new Set<string>(RECOVERY_TYPES.map((t) => t.value));

export function isValidRecoveryType(value: unknown): value is RecoveryType {
  return typeof value === "string" && VALID_VALUES.has(value);
}

/** Returns the value if valid, otherwise null. Safe for persisting user input. */
export function normalizeRecoveryType(value: unknown): RecoveryType | null {
  return isValidRecoveryType(value) ? value : null;
}

export function getRecoveryTypeLabel(value: unknown): string {
  return RECOVERY_TYPES.find((t) => t.value === value)?.label || "—";
}
