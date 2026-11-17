"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

interface TOCSection {
  id: string;
  title: string;
  badge?: string;
}

const SECTIONS: TOCSection[] = [
  { id: "interactive-workspace", title: "1. Notice Generator & Workspace", badge: "Interactive" },
  { id: "why-domestic-drafts-fail", title: "2. Why Domestic Drafts Fail", badge: "Cross-Border" },
  { id: "edpms-ecgc-audit-trail", title: "3. EDPMS & ECGC Audit Trail", badge: "FEMA / RBI" },
  { id: "shipping-annexure-schedule", title: "4. BL, Shipping Bill & Incoterms", badge: "Schedule" },
  { id: "cross-border-service-protocol", title: "5. Service & BSA s.63 Proof", badge: "Dispatch" },
  { id: "related-export-guides", title: "6. Export Recovery Playbooks", badge: "Cluster" },
  { id: "faqs", title: "7. Frequently Asked Questions", badge: "FAQ" },
];

export default function ExportDemandNoticeTOC() {
  const [activeId, setActiveId] = useState<string>("interactive-workspace");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: 0.05 }
    );

    SECTIONS.forEach((sec) => {
      const el = document.getElementById(sec.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Mobile Sticky Bar */}
      <div className="lg:hidden sticky top-20 z-30 bg-slate-50/95 backdrop-blur-sm border-b border-slate-200 py-3 px-4 -mx-4 sm:-mx-6 mb-4">
        <div className="flex items-center justify-between text-xs text-slate-600 mb-1.5 font-bold uppercase tracking-wider">
          <span>Export Notice Sections</span>
          <span className="text-[#DC2626]">7 Parts</span>
        </div>
        <div className="flex gap-2 overflow-x-auto pb-1 text-xs no-scrollbar">
          {SECTIONS.map((sec) => {
            const isActive = activeId === sec.id;
            return (
              <a
                key={sec.id}
                href={`#${sec.id}`}
                className={`shrink-0 px-3 py-1.5 rounded-full border transition-colors ${
                  isActive
                    ? "bg-[#DC2626] border-[#DC2626] text-white font-bold shadow-sm"
                    : "bg-white border-slate-200 text-slate-700 hover:border-[#DC2626] hover:text-[#DC2626]"
                }`}
              >
                {sec.title}
              </a>
            );
          })}
        </div>
      </div>

      {/* Desktop Sticky Sidebar */}
      <aside className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start">
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-4">
          <div className="border-b border-slate-100 pb-3">
            <span className="text-xs uppercase tracking-wider font-bold text-slate-400 block mb-1">
              Template Navigation
            </span>
            <p className="text-sm font-bold text-slate-900 leading-snug">
              Export Buyer Demand Notice (FEMA &amp; ECGC)
            </p>
          </div>

          <nav className="space-y-1.5" aria-label="Page sections">
            {SECTIONS.map((sec) => {
              const isActive = activeId === sec.id;
              return (
                <a
                  key={sec.id}
                  href={`#${sec.id}`}
                  className={`group flex items-center justify-between p-2.5 rounded-xl text-xs font-semibold transition-colors ${
                    isActive
                      ? "bg-[#DC2626] text-white font-bold shadow-sm"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  <span className="truncate">{sec.title}</span>
                  {sec.badge && (
                    <span
                      className={`ml-2 text-[10px] px-1.5 py-0.5 rounded font-bold uppercase tracking-wider transition-colors ${
                        isActive
                          ? "bg-white/20 text-white"
                          : "bg-slate-100 text-slate-500 group-hover:bg-red-50 group-hover:text-[#DC2626]"
                      }`}
                    >
                      {sec.badge}
                    </span>
                  )}
                </a>
              );
            })}
          </nav>

          <div className="pt-4 border-t border-slate-100 space-y-3">
            <div className="bg-red-50 border border-red-200 rounded-xl p-3 text-[11px] text-red-900 leading-relaxed font-medium">
              <strong className="block text-red-700 font-bold mb-1">
                AD-Bank EDPMS &amp; ECGC Proof
              </strong>
              Include Shipping Bill No., IEC, AD Code, and Bill of Lading so your AD Category-I Bank accepts this notice for Para C.20 / C.24 closure.
            </div>
            <Link
              href="/user/new-recovery"
              className="w-full py-2.5 px-4 rounded-xl bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs font-bold text-center block shadow-sm transition-colors"
            >
              Send Advocate Notice (₹999)
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
}
