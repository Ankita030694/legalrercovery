/** Production domain (no protocol, no www). */
export const SITE_DOMAIN = "legalrecovery.in";

/** Canonical production origin (no trailing slash). */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.SITE_URL ||
  `https://www.${SITE_DOMAIN}`
).replace(/\/$/, "");
