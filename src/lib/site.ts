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
