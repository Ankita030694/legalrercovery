"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Dynamically synchronizes the <html lang="..."> attribute on client-side route transitions.
 * Ensures that Hindi routes (/hi/*) declare lang="hi-IN" matching their hreflang="hi-IN" self-reference,
 * while all standard routes declare lang="en".
 */
export default function HtmlLangUpdater() {
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname) return;

    const isHindiRoute =
      pathname === "/hi" ||
      pathname.startsWith("/hi/") ||
      pathname === "/templates/cheque-bounce-notice-format-hindi";

    const targetLang = isHindiRoute ? "hi-IN" : "en";

    if (document.documentElement.lang !== targetLang) {
      document.documentElement.lang = targetLang;
      document.documentElement.setAttribute("lang", targetLang);
    }
  }, [pathname]);

  return null;
}
