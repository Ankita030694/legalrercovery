"use client";
import { useEffect, useRef } from "react";
import { signIn } from "next-auth/react";
import { markOnce, trackMetaEvent, waitForMetaPixel } from "@/lib/metaPixel";

export type PurchaseInfo = {
  value: number;
  numItems: number;
  recoveryType: string | null;
};

/**
 * Fires the Meta Pixel `Purchase` event (once per txnid) and then, if an auto-login
 * token is present, signs the user in and redirects to the dashboard.
 * The redirect is held until the pixel has loaded (max ~2.5s) so the Purchase isn't lost.
 */
export default function AutoLogin({
  token,
  txnid,
  purchase,
}: {
  token?: string;
  txnid?: string;
  purchase?: PurchaseInfo | null;
}) {
  const attempted = useRef(false);

  useEffect(() => {
    if (attempted.current) return;
    attempted.current = true;

    (async () => {
      // ── Meta Pixel: Purchase (deduped by txnid across refreshes; eventID dedupes in Meta) ──
      if (txnid && purchase && purchase.value > 0 && markOnce(`purchase_${txnid}`)) {
        const loaded = await waitForMetaPixel(2500);
        trackMetaEvent(
          "Purchase",
          {
            value: purchase.value,
            currency: "INR",
            num_items: purchase.numItems,
            content_type: "product",
            content_name: "Legal Recovery Notice",
            ...(purchase.recoveryType ? { content_category: purchase.recoveryType } : {}),
          },
          txnid
        );
        // Give the browser a moment to flush the pixel request before navigating away
        if (loaded && token) await new Promise((r) => setTimeout(r, 600));
      }

      if (token) {
        // redirect: true automatically handles navigation to the callbackUrl if successful
        signIn("credentials", { token, callbackUrl: "/user/dashboard", redirect: true });
      }
    })();
  }, [token, txnid, purchase]);

  if (!token) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-4">
        <div className="w-8 h-8 border-4 border-emerald-600 border-t-transparent rounded-full animate-spin"></div>
        <p className="font-semibold text-emerald-800">Logging you in securely...</p>
      </div>
    </div>
  );
}
