/**
 * Lead source tracking (UTM parameters, click IDs and referrer).
 *
 * <AttributionCapture /> in the root layout records where a visitor came from.
 * RecoveryForm sends it with the lead, and it then follows the lead through
 * pending_verification -> pending_payment -> users / transactions as `attribution`.
 *
 * The first touch is kept unless a later one is stronger (paid > organic / referral > direct),
 * so a paid click still gets the credit when the visitor had browsed the site before.
 */

export const ATTRIBUTION_CHANNELS = [
  { value: "paid_meta", label: "Meta Ads" },
  { value: "paid_google", label: "Google Ads" },
  { value: "paid_other", label: "Other Paid" },
  { value: "organic_search", label: "Organic Search" },
  { value: "organic_social", label: "Organic Social" },
  { value: "referral", label: "Referral" },
  { value: "direct", label: "Direct" },
] as const;

export type AttributionChannel = (typeof ATTRIBUTION_CHANNELS)[number]["value"];

export interface LeadAttribution {
  channel: AttributionChannel;
  utmSource: string | null;
  utmMedium: string | null;
  utmCampaign: string | null;
  utmContent: string | null;
  utmTerm: string | null;
  utmId: string | null;
  fbclid: string | null;
  gclid: string | null;
  referrerHost: string | null;
  landingPath: string | null;
  firstSeenAt: string;
}

const STORAGE_KEY = "lr_attribution";
const MAX_AGE_MS = 30 * 24 * 60 * 60 * 1000; // 30 days
const MAX_VALUE_LENGTH = 500;

// Referrers that are steps inside our own flow, not traffic sources.
const IGNORED_REFERRER_HOSTS = /(^|\.)(legalrecovery\.in|payu\.in)$/i;

const PAID_MEDIUMS = /^(paid|paid[-_ ]?social|cpc|ppc|cpm|cpv|display|retargeting)$/i;
// `an` is Meta Audience Network, `msg` is Messenger (values of Meta's {{site_source_name}} URL tag).
const META_SOURCES = /^(fb|facebook|ig|instagram|an|msg|messenger|th|threads|meta)$/i;
const GOOGLE_SOURCES = /^(google|adwords|youtube)$/i;

const SEARCH_REFERRERS =
  /^(www\.)?google\.[a-z.]+$|(^|\.)(bing|duckduckgo|ecosia|yandex)\.[a-z.]+$|(^|\.)search\.(yahoo|brave)\.com$|(^|\.)baidu\.com$|^com\.google\.android\.googlequicksearchbox$/i;
const SOCIAL_REFERRERS =
  /(^|\.)(facebook\.com|instagram\.com|threads\.(net|com)|linkedin\.com|x\.com|twitter\.com|t\.co|youtube\.com|reddit\.com)$|^com\.linkedin\.android$/i;

function deriveChannel(a: Omit<LeadAttribution, "channel" | "firstSeenAt">): AttributionChannel {
  if (a.gclid) return "paid_google";

  const source = a.utmSource || "";
  if (a.utmMedium && PAID_MEDIUMS.test(a.utmMedium)) {
    if (META_SOURCES.test(source)) return "paid_meta";
    if (GOOGLE_SOURCES.test(source)) return "paid_google";
    return "paid_other";
  }

  // fbclid alone is not proof of an ad: Meta also adds it to organic link clicks.
  if (a.fbclid || META_SOURCES.test(source)) return "organic_social";
  if (a.referrerHost && SEARCH_REFERRERS.test(a.referrerHost)) return "organic_search";
  if (a.referrerHost && SOCIAL_REFERRERS.test(a.referrerHost)) return "organic_social";
  if (a.referrerHost || source) return "referral";
  return "direct";
}

function cleanValue(value: unknown): string | null {
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  return trimmed ? trimmed.slice(0, MAX_VALUE_LENGTH) : null;
}

/** Keeps only known string fields and works out the channel. Safe for persisting client input. */
export function sanitizeAttribution(raw: unknown): LeadAttribution | null {
  if (!raw || typeof raw !== "object") return null;
  const input = raw as Record<string, unknown>;

  const fields = {
    utmSource: cleanValue(input.utmSource),
    utmMedium: cleanValue(input.utmMedium),
    utmCampaign: cleanValue(input.utmCampaign),
    utmContent: cleanValue(input.utmContent),
    utmTerm: cleanValue(input.utmTerm),
    utmId: cleanValue(input.utmId),
    fbclid: cleanValue(input.fbclid),
    gclid: cleanValue(input.gclid),
    referrerHost: cleanValue(input.referrerHost),
    landingPath: cleanValue(input.landingPath),
  };

  const seenAt = new Date(typeof input.firstSeenAt === "string" ? input.firstSeenAt : Date.now());
  return {
    ...fields,
    channel: deriveChannel(fields),
    firstSeenAt: isNaN(seenAt.getTime()) ? new Date().toISOString() : seenAt.toISOString(),
  };
}

function channelRank(channel: AttributionChannel): number {
  if (channel.startsWith("paid_")) return 2;
  return channel === "direct" ? 0 : 1;
}

/** Keeps the existing touch unless the incoming one is stronger. */
export function preferAttribution(
  existing: LeadAttribution | null | undefined,
  incoming: LeadAttribution | null | undefined
): LeadAttribution | null {
  if (!existing) return incoming ?? null;
  if (!incoming) return existing;
  return channelRank(incoming.channel) > channelRank(existing.channel) ? incoming : existing;
}

// Fallback for the current page session when storage is unavailable (private mode etc.).
let memoryAttribution: LeadAttribution | null = null;

/** Returns the visitor's stored source, or null if there is none or it is older than 30 days. */
export function getStoredAttribution(): LeadAttribution | null {
  if (typeof window === "undefined") return null;
  let stored = memoryAttribution;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw) stored = sanitizeAttribution(JSON.parse(raw));
  } catch {
    // Storage unavailable or corrupted: fall back to this session's value.
  }
  if (!stored || Date.now() - new Date(stored.firstSeenAt).getTime() > MAX_AGE_MS) return null;
  return stored;
}

function getExternalReferrerHost(): string | null {
  if (!document.referrer) return null;
  try {
    const host = new URL(document.referrer).hostname;
    return IGNORED_REFERRER_HOSTS.test(host) || host === window.location.hostname ? null : host;
  } catch {
    return null;
  }
}

/** Records the current visit's source. Call once on page load. Never throws. */
export function captureAttribution(): void {
  if (typeof window === "undefined") return;
  const params = new URLSearchParams(window.location.search);

  const current = sanitizeAttribution({
    utmSource: params.get("utm_source"),
    utmMedium: params.get("utm_medium"),
    utmCampaign: params.get("utm_campaign"),
    utmContent: params.get("utm_content"),
    utmTerm: params.get("utm_term"),
    utmId: params.get("utm_id"),
    fbclid: params.get("fbclid"),
    gclid: params.get("gclid") || params.get("gbraid") || params.get("wbraid"),
    referrerHost: getExternalReferrerHost(),
    landingPath: window.location.pathname,
    firstSeenAt: new Date().toISOString(),
  });

  memoryAttribution = preferAttribution(getStoredAttribution(), current);
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(memoryAttribution));
  } catch {
    // Storage unavailable: memoryAttribution still covers this session.
  }
}
