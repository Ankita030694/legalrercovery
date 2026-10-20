import { google } from "googleapis";

/**
 * Returns an authenticated Google Search Console API client using the Service Account credentials.
 */
export function getSearchConsoleClient() {
  const clientEmail = process.env.GSC_CLIENT_EMAIL;
  const privateKey = process.env.GSC_PRIVATE_KEY?.replace(/\\n/g, "\n");

  if (!clientEmail || !privateKey) {
    throw new Error(
      "Missing GSC_CLIENT_EMAIL or GSC_PRIVATE_KEY environment variables."
    );
  }

  const auth = new google.auth.JWT({
    email: clientEmail,
    key: privateKey,
    scopes: [
      "https://www.googleapis.com/auth/webmasters.readonly", // Query search analytics & site status
      "https://www.googleapis.com/auth/webmasters",          // Manage sitemaps & inspection
    ],
  });

  return google.searchconsole({ version: "v1", auth });
}

export interface SearchAnalyticsOptions {
  startDate?: string; // Format: YYYY-MM-DD
  endDate?: string;   // Format: YYYY-MM-DD
  dimensions?: Array<"query" | "page" | "device" | "country" | "date">;
  rowLimit?: number;
  startRow?: number;
  siteUrl?: string;
}

/**
 * Fetch top queries, pages, clicks, impressions, CTR, and average position from Google Search Console.
 */
export async function getSearchPerformance(options?: SearchAnalyticsOptions) {
  const searchconsole = getSearchConsoleClient();
  const siteUrl = options?.siteUrl || process.env.GSC_SITE_URL || "sc-domain:legalrecovery.in";

  // Default to the last 28 days
  const today = new Date();
  const prior28Days = new Date();
  prior28Days.setDate(today.getDate() - 28);

  const defaultEnd = today.toISOString().split("T")[0];
  const defaultStart = prior28Days.toISOString().split("T")[0];

  const response = await searchconsole.searchanalytics.query({
    siteUrl,
    requestBody: {
      startDate: options?.startDate || defaultStart,
      endDate: options?.endDate || defaultEnd,
      dimensions: options?.dimensions || ["query", "page"],
      rowLimit: options?.rowLimit || 25,
      startRow: options?.startRow || 0,
      type: "web",
    },
  });

  return response.data.rows || [];
}

/**
 * Inspect indexing status of a specific URL (URL Inspection API).
 */
export async function inspectUrl(targetUrl: string, customSiteUrl?: string) {
  const searchconsole = getSearchConsoleClient();
  const siteUrl = customSiteUrl || process.env.GSC_SITE_URL || "sc-domain:legalrecovery.in";

  const response = await searchconsole.urlInspection.index.inspect({
    requestBody: {
      inspectionUrl: targetUrl,
      siteUrl,
    },
  });

  return response.data.inspectionResult;
}

/**
 * List verified sites accessible to this service account.
 */
export async function listAccessibleSites() {
  const searchconsole = getSearchConsoleClient();
  const response = await searchconsole.sites.list();
  return response.data.siteEntry || [];
}

/**
 * Submit or check status of sitemaps.
 */
export async function listSitemaps(customSiteUrl?: string) {
  const searchconsole = getSearchConsoleClient();
  const siteUrl = customSiteUrl || process.env.GSC_SITE_URL || "sc-domain:legalrecovery.in";

  const response = await searchconsole.sitemaps.list({ siteUrl });
  return response.data.sitemap || [];
}
