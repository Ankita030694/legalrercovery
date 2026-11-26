/**
 * "Chat on WhatsApp" button: opens a chat with the Legal Recovery WhatsApp number with a message
 * already typed. In WATI, a rule that exactly matches WHATSAPP_START_MESSAGE starts the chatbot,
 * so the two must stay identical (WATI's matching ignores upper/lower case).
 */

export const WHATSAPP_NUMBER = "919818683380";

export const WHATSAPP_START_MESSAGE = "Hi LegalRecovery, I want to recover my money";

export const WHATSAPP_CHAT_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export function buildWhatsAppStartUrl(message = WHATSAPP_START_MESSAGE): string {
  return `${WHATSAPP_CHAT_URL}?text=${encodeURIComponent(message)}`;
}

/**
 * Pages that show the floating button: the 20 pages with the most Google search clicks,
 * 27 Oct – 24 Nov 2026 (Search Console). Add or remove paths here.
 */
export const WHATSAPP_BUTTON_PATHS: readonly string[] = [
  "/",
  "/how-to-recover-full-and-final-settlement-from-employer",
  "/legal-notice-to-vendor-for-refund-of-advance-payment",
  "/legal-notice-charges",
  "/recovery/fraud-transaction-amount",
  "/time-limit-to-file-money-recovery-case-india",
  "/what-to-do-if-legal-notice-is-ignored-india",
  "/blog/employer-not-paying-fnf-legal-recovery",
  "/legal-notice-for-full-and-final-settlement-delay",
  "/legal-notice-to-interior-designer-contractor-refund",
  "/legal-notice-to-retailer-wrong-damaged-product-delivery",
  "/legal-notice-for-salary-withheld-during-notice-period",
  "/blog/recovery-money-legal-heirs-guide",
  "/flipkart-return-refund-complaint",
  "/builder-booking-cancellation-refund-legal-notice",
  "/marriage-hall-banquet-booking-cancellation-refund",
  "/legal-notice-to-bank-unauthorized-ecs-nach-debit-reversal",
  "/employer-withholding-relieving-letter-legal-action",
  "/legal-notice-to-car-dealer-delayed-delivery-defective-vehicle",
  "/what-are-the-legal-steps-to-recover-unpaid-salary-from-an-employer-in-india",
];

export function showsWhatsAppButton(pathname: string | null): boolean {
  if (!pathname) return false;
  const path = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
  return WHATSAPP_BUTTON_PATHS.includes(path);
}
