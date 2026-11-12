/**
 * Meta (Facebook) Pixel helpers.
 * The base pixel (init + PageView) is loaded globally by <MetaPixel /> in the root layout.
 */

export const META_PIXEL_ID = "1145334704620534";

type FbqFn = ((...args: unknown[]) => void) & { callMethod?: unknown };

function getFbq(): FbqFn | undefined {
  if (typeof window === "undefined") return undefined;
  return (window as unknown as { fbq?: FbqFn }).fbq;
}

/**
 * Fires a standard Meta event. `eventID` lets Meta deduplicate the event
 * (e.g. against a future Conversions API server event with the same ID).
 * Safe no-op when the pixel is unavailable (SSR / blocked).
 */
export function trackMetaEvent(
  eventName: string,
  params: Record<string, unknown> = {},
  eventID?: string
): void {
  const fbq = getFbq();
  if (!fbq) return;
  try {
    if (eventID) {
      fbq("track", eventName, params, { eventID });
    } else {
      fbq("track", eventName, params);
    }
  } catch (err) {
    console.error(`[MetaPixel] Failed to track ${eventName}:`, err);
  }
}

/**
 * Resolves once fbevents.js has fully loaded (so queued events are actually sent),
 * or after `timeoutMs` (e.g. pixel blocked by an ad blocker). Never rejects.
 */
export function waitForMetaPixel(timeoutMs = 2500): Promise<boolean> {
  return new Promise((resolve) => {
    const start = Date.now();
    const check = () => {
      const fbq = getFbq();
      if (fbq && typeof fbq.callMethod === "function") return resolve(true);
      if (Date.now() - start >= timeoutMs) return resolve(false);
      setTimeout(check, 100);
    };
    check();
  });
}

/** Returns true only the first time it is called for a given key (per browser). */
export function markOnce(key: string): boolean {
  try {
    const storageKey = `meta_evt_${key}`;
    if (window.localStorage.getItem(storageKey)) return false;
    window.localStorage.setItem(storageKey, String(Date.now()));
    return true;
  } catch {
    // Storage unavailable (private mode etc.) — allow the event; eventID still dedupes in Meta.
    return true;
  }
}
