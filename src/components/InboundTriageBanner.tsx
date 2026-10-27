"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { AlertTriangle, ArrowRight } from "lucide-react";

/**
 * Shows how many inbound emails could not be linked to exactly one case
 * and are waiting for an admin in /authority/inbound-triage.
 */
export default function InboundTriageBanner() {
  const [openCount, setOpenCount] = useState<number>(0);

  useEffect(() => {
    fetch(`/api/admin/inbound-emails?type=counts&_t=${Date.now()}`)
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => {
        if (d?.success) setOpenCount((d.counts?.needs_review || 0) + (d.counts?.unmatched || 0));
      })
      .catch(() => {});
  }, []);

  if (openCount <= 0) return null;

  return (
    <Link
      href="/authority/inbound-triage"
      className="flex items-center justify-between gap-3 bg-amber-50 hover:bg-amber-100 border border-amber-200 text-amber-900 rounded-2xl px-4 py-3 transition-colors"
    >
      <span className="flex items-center gap-2 text-xs sm:text-sm font-bold">
        <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
        {openCount} inbound {openCount === 1 ? "email needs" : "emails need"} to be matched to a case before the client can see {openCount === 1 ? "it" : "them"}.
      </span>
      <span className="flex items-center gap-1 text-xs font-extrabold shrink-0">
        Review <ArrowRight className="w-3.5 h-3.5" />
      </span>
    </Link>
  );
}
