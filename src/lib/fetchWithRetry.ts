/**
 * Resilient fetch wrapper for serverless form submissions.
 * Automatically retries once on transient server errors (500, 502, 503, 504)
 * or network drops, seamlessly absorbing cold starts and container unfreezes.
 */
export async function fetchWithRetry(
  url: string,
  options: RequestInit = {},
  retries: number = 1,
  delayMs: number = 1200
): Promise<Response> {
  try {
    const res = await fetch(url, options);
    if (res.status >= 500 && retries > 0) {
      console.warn(`[fetchWithRetry] Received HTTP ${res.status} from ${url}. Retrying in ${delayMs}ms...`);
      await new Promise((resolve) => setTimeout(resolve, delayMs));
      return fetchWithRetry(url, options, retries - 1, delayMs);
    }
    return res;
  } catch (error) {
    if (retries > 0) {
      console.warn(`[fetchWithRetry] Network error requesting ${url}. Retrying in ${delayMs}ms...`, error);
      await new Promise((resolve) => setTimeout(resolve, delayMs));
      return fetchWithRetry(url, options, retries - 1, delayMs);
    }
    throw error;
  }
}
