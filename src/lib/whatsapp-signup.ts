import { Db } from "mongodb";
import {
  buildMagicResumeUrl,
  calculateFunnelPricing,
  generateResumeToken,
  getFunnelSettings,
  normalizePhoneTenDigits,
  resolveEffectiveDiscount,
} from "@/lib/funnel-config";
import { normalizeRecoveryType } from "@/lib/recoveryTypes";
import { SITE_URL } from "@/lib/site";

/**
 * Sign-up from the WhatsApp chatbot.
 *
 * Registers the chat's phone number as a verified lead in `pending_payment` (the person is
 * chatting from that number, so no OTP is needed) and returns the same magic checkout link the
 * retargeting messages use. From there the normal flow takes over: /resume/{token} -> PayU -> the
 * PayU webhook creates the account.
 *
 * Callers must make sure `phone` really is the chat's number: /api/wati/claim-link reads it from
 * WATI's own chat history, /api/wati/payment-link trusts the WATI webhook secret.
 */

export const MAX_PARTIES = 5; // matches the selector on the checkout page
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const INDIAN_PHONE_PATTERN = /^[6-9]\d{9}$/;

export type WhatsAppSignupStatus =
  | "payment_link_ready"
  | "already_registered"
  | "missing_details"
  | "invalid_email"
  | "invalid_details"
  | "unsupported_number";

export interface WhatsAppSignupInput {
  phone: unknown;
  name?: unknown;
  email?: unknown;
  state?: unknown;
  oppositionCount?: unknown;
  physicalDispatch?: unknown;
  recoveryType?: unknown;
  /**
   * Chat sign-ups: party count and Speed Post must both be readable, because a wrong guess would
   * change what the person pays. The webhook path leaves them optional.
   */
  requireAllAnswers?: boolean;
}

export interface WhatsAppSignupResult {
  status: WhatsAppSignupStatus;
  /** Ready-to-send WhatsApp text for the person. */
  message: string;
  phone?: string;
  leadId?: string;
  link?: string;
  token?: string;
  amount?: number;
  amountFormatted?: string;
  originalAmount?: number;
  discountPercent?: number;
  oppositionCount?: number;
  missing?: string[];
}

export function cleanText(value: unknown, maxLength = 120): string {
  if (typeof value !== "string" && typeof value !== "number") return "";
  const text = String(value)
    .replace(/[\u0000-\u001f\u007f]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  // Guards against a chatbot variable that was never filled being sent as "{{placeholder}}"/"@var"
  if (!text || /\{\{.*\}\}/.test(text) || /^@[a-z_]+$/i.test(text)) return "";
  return text.slice(0, maxLength);
}

/** Chat answers arrive as text, so "2" and "2 parties" both mean 2. */
export function parsePartyCount(value: unknown): number | null {
  const match = cleanText(value).match(/\d+/);
  if (!match) return null;
  return Math.max(1, Math.min(MAX_PARTIES, Number(match[0])));
}

/** Matches on the first word, so button text like "Yes, add Speed Post" / "No, skip it" works. */
export function parseYesNo(value: unknown): boolean | null {
  if (typeof value === "boolean") return value;
  const text = cleanText(value).toLowerCase();
  if (/^(yes|y|true|1)\b/.test(text)) return true;
  if (/^(no|n|false|0)\b/.test(text)) return false;
  return null;
}

/** Ten-digit Indian mobile, or "" when the value is not one. */
export function toIndianMobile(value: unknown): string {
  const phone = normalizePhoneTenDigits(cleanText(value, 30));
  return INDIAN_PHONE_PATTERN.test(phone) ? phone : "";
}

export function maskPhone(phone: string): string {
  return phone ? `******${phone.slice(-4)}` : "(none)";
}

export async function createWhatsAppLead(
  db: Db,
  input: WhatsAppSignupInput
): Promise<WhatsAppSignupResult> {
  const phone = toIndianMobile(input.phone);
  if (!phone) {
    // The website sign-up takes Indian numbers only too, so there is nowhere else to send them
    return {
      status: "unsupported_number",
      message: "Sorry, sign-up is currently available only for Indian mobile numbers (+91).",
    };
  }

  // The site stores phones as typed: 10 digits, or 11 with a leading 0
  const phoneVariants = [phone, `0${phone}`];

  const paidUser = await db
    .collection("users")
    .findOne({ phone: { $in: phoneVariants }, isPaid: true }, { projection: { _id: 1 } });
  if (paidUser) {
    // A plain login link, never an auto-login one
    const loginUrl = `${SITE_URL}/login`;
    return {
      status: "already_registered",
      phone,
      link: loginUrl,
      message: `This number already has a Legal Recovery account. Log in here to manage your cases: ${loginUrl}`,
    };
  }

  const [existingPayment, existingVerification] = await Promise.all([
    db.collection("pending_payment").findOne({ phone: { $in: phoneVariants } }),
    db.collection("pending_verification").findOne({ phone: { $in: phoneVariants } }),
  ]);
  const prior = existingPayment || existingVerification;

  const name = cleanText(input.name, 60) || cleanText(prior?.name, 60);
  const email = (cleanText(input.email, 254) || cleanText(prior?.email, 254)).toLowerCase();
  const state = cleanText(input.state, 40) || cleanText(prior?.state, 40);

  const missing = [!name && "full name", !email && "email address", !state && "state"].filter(
    Boolean
  ) as string[];
  if (missing.length > 0) {
    const list =
      missing.length > 1
        ? `${missing.slice(0, -1).join(", ")} and ${missing[missing.length - 1]}`
        : missing[0];
    return {
      status: "missing_details",
      phone,
      missing,
      message: `I still need your ${list} to create your payment link. Please type *menu* and choose Get started.`,
    };
  }
  // Catches answers that landed in the wrong field, e.g. an email typed as the state
  const looksLikeWords = (text: string) => /\p{L}/u.test(text) && !text.includes("@");
  const partyCount = parsePartyCount(input.oppositionCount);
  const speedPostAnswer = parseYesNo(input.physicalDispatch);
  if (
    !looksLikeWords(name) ||
    !looksLikeWords(state) ||
    /\d/.test(state) ||
    (input.requireAllAnswers && (partyCount === null || speedPostAnswer === null))
  ) {
    return {
      status: "invalid_details",
      phone,
      message:
        "Some of your details look mixed up (for example an email address where your state should be). " +
        "Please type *menu*, choose Get started and enter them again.",
    };
  }
  if (!EMAIL_PATTERN.test(email)) {
    return {
      status: "invalid_email",
      phone,
      message:
        "That email address does not look right. Please type *menu*, choose Get started and enter a valid email address.",
    };
  }

  const now = new Date();
  const oppositionCount =
    partyCount ?? Math.max(1, Math.min(MAX_PARTIES, Number(prior?.oppositionCount) || 1));
  const physicalDispatch: boolean | undefined =
    speedPostAnswer ??
    (typeof existingPayment?.physicalDispatch === "boolean" ? existingPayment.physicalDispatch : undefined);

  // Keep any funnel state this number already earned on the site (same merge as verify-otp)
  const discountPercent = Math.max(
    Number(existingVerification?.discountPercent) || 0,
    Number(existingPayment?.discountPercent) || 0
  );
  const discountExpiresAt =
    existingVerification?.discountExpiresAt || existingPayment?.discountExpiresAt || null;
  const resumeToken =
    existingPayment?.resumeToken || existingVerification?.resumeToken || generateResumeToken();

  const lead: Record<string, unknown> = {
    name,
    email,
    phone: existingPayment?.phone || phone,
    state,
    recoveryType: normalizeRecoveryType(input.recoveryType) || prior?.recoveryType || null,
    attribution: existingPayment?.attribution || existingVerification?.attribution || null,
    oppositionCount,
    verified: true,
    verifiedVia: "whatsapp",
    verifiedAt: now,
    resumeToken,
    funnelStartedAt:
      existingPayment?.funnelStartedAt ||
      existingVerification?.funnelStartedAt ||
      prior?.createdAt ||
      now,
    discountPercent,
    discountUnlockedAt:
      existingVerification?.discountUnlockedAt || existingPayment?.discountUnlockedAt || null,
    discountExpiresAt,
    retargeting: existingPayment?.retargeting ||
      existingVerification?.retargeting || { currentWave: 0, waves: {} },
    clickCount: Math.max(
      Number(existingVerification?.clickCount) || 0,
      Number(existingPayment?.clickCount) || 0
    ),
    linkClickedAt: existingPayment?.linkClickedAt || existingVerification?.linkClickedAt || null,
    createdAt: prior?.createdAt || now,
    updatedAt: now,
  };
  // Written only once answered, so an unanswered Speed Post question is still asked at checkout
  if (typeof physicalDispatch === "boolean") {
    lead.physicalDispatch = physicalDispatch;
  }

  const saved = await db
    .collection("pending_payment")
    .findOneAndUpdate(
      { phone: lead.phone },
      { $set: lead },
      { upsert: true, returnDocument: "after", projection: { _id: 1 } }
    );
  // The number is verified now, so its unfinished OTP record is superseded
  await db.collection("pending_verification").deleteMany({ phone: { $in: phoneVariants } });

  const funnelSettings = await getFunnelSettings(db);
  const { effectiveDiscountPercent } = resolveEffectiveDiscount(
    { discountPercent, discountExpiresAt },
    funnelSettings
  );
  const pricing = calculateFunnelPricing(
    oppositionCount,
    effectiveDiscountPercent,
    funnelSettings.basePricePerOpposition,
    physicalDispatch === true
  );

  const link = buildMagicResumeUrl(resumeToken);
  const amountFormatted = pricing.totalPayable.toLocaleString("en-IN");
  const parties = `${oppositionCount} opposite ${oppositionCount === 1 ? "party" : "parties"}`;
  const speedPost = pricing.physicalDispatchFee > 0 ? ", including Speed Post" : "";

  return {
    status: "payment_link_ready",
    phone,
    leadId: saved?._id?.toString(),
    link,
    token: resumeToken,
    amount: pricing.totalPayable,
    amountFormatted,
    originalAmount: pricing.totalOriginal,
    discountPercent: pricing.discountPercent,
    oppositionCount,
    message:
      `Thanks ${name}! Here is your secure Legal Recovery payment link:\n${link}\n\n` +
      `Amount: ₹${amountFormatted} for ${parties}${speedPost}. ` +
      `Your account is activated as soon as the payment goes through.`,
  };
}
