/** Production domain (no protocol, no www). */
export const SITE_DOMAIN = "legalrecovery.in";

/** Canonical production origin (no trailing slash). */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.SITE_URL ||
  `https://www.${SITE_DOMAIN}`
).replace(/\/$/, "");

/**
 * Templated location pages (/legal-recovery-by-city/[slug], /legal-notice-services/[slug]).
 * They are near-identical apart from the place name, so they are kept out of the sitemap and
 * served with noindex,follow. Flip to true only once pages carry genuinely local content.
 */
export const INDEX_LOCATION_PAGES = false;

/**
 * Normalizes and shortens image alt text to comply with SEO best practices
 * and prevent Screaming Frog "Alt Text Over 100 Characters" flags.
 * Truncates cleanly at word boundaries and strips dangling punctuation/stop-words.
 */
export function formatAltText(text: string, maxLength = 90): string {
  if (!text) return "";
  const cleaned = text.replace(/\s+/g, " ").trim();
  if (cleaned.length <= maxLength) return cleaned;
  const truncated = cleaned.slice(0, maxLength);
  const lastSpace = truncated.lastIndexOf(" ");
  let result = lastSpace > 30 ? truncated.slice(0, lastSpace) : truncated;
  result = result.replace(/[,;:\-\s]+$/, "");
  result = result.replace(/\b(to|the|a|an|for|of|in|and|or|with|on|at|by|from|about)\b$/i, "").trim();
  return result.replace(/[,;:\-\s]+$/, "");
}
