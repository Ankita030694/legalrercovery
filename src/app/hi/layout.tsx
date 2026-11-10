import type { ReactNode } from "react";

/**
 * Layout wrapping all Hindi pages under /hi/*
 * Injects a synchronous inline script that executes before DOM render
 * to guarantee that document.documentElement.lang is immediately set to "hi-IN",
 * matching the reciprocal hreflang="hi-IN" annotations for search engine crawlers (Googlebot, Screaming Frog).
 */
export default function HindiLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <script
        id="hi-lang-init"
        dangerouslySetInnerHTML={{
          __html:
            "document.documentElement.lang='hi-IN';document.documentElement.setAttribute('lang','hi-IN');",
        }}
      />
      {children}
    </>
  );
}
