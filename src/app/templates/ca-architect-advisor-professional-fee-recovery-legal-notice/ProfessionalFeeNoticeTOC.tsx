"use client";

import React, { useEffect, useState } from "react";

interface TOCItem {
  id: string;
  label: string;
}

const TOC_ITEMS: TOCItem[] = [
  { id: "heading-tds-accounting-checkmate", label: "1. The Section 18 TDS Checkmate" },
  { id: "heading-notice-workspace", label: "2. Interactive Notice Workspace" },
  { id: "heading-notice-matrix-comparison", label: "3. Council-Verified vs Generic Notices" },
  { id: "heading-statutory-clause-architecture", label: "4. Statutory Clause Architecture" },
  { id: "heading-professional-workflow-svg", label: "5. Fee Recovery Escalation Map" },
  { id: "heading-evidence-audit-checklist", label: "6. Evidentiary Audit Trail Checklist" },
  { id: "heading-judicial-precedents", label: "7. Landmark Judicial Precedents" },
  { id: "heading-worked-recovery-ledger", label: "8. Worked Professional Recovery Ledger" },
  { id: "heading-dual-track-cta", label: "9. Test 1 Notice or Bulk CSV" },
  { id: "heading-professional-faqs", label: "10. Professional Practice FAQs" },
  { id: "heading-statutory-authorities", label: "11. Acts, Rules & Council Codes" },
];

export default function ProfessionalFeeNoticeTOC() {
  const [activeId, setActiveId] = useState<string>(TOC_ITEMS[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-18% 0px -70% 0px", threshold: 0.05 }
    );

    TOC_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Mobile / Tablet Sticky Horizontal Jump Bar — zero H2/H3/H4 tags */}
      <nav
        aria-label="Professional Fee Template Section Navigation"
        className="lg:hidden sticky top-16 z-30 bg-white/95 backdrop-blur border-y border-slate-200 -mx-4 sm:-mx-6 px-4 sm:px-6 py-2.5 overflow-x-auto no-scrollbar"
      >
        <div className="flex items-center gap-2 min-w-max">
          <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#DC2626] shrink-0 mr-1">
            Jump To:
          </span>
          {TOC_ITEMS.map((item) => {
            const isActive = activeId === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`text-xs px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors font-semibold ${
                  isActive
                    ? "bg-[#DC2626] text-white shadow-sm"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>
      </nav>

      {/* Desktop Sticky Vertical Sidebar — zero H2/H3/H4 tags */}
      <aside
        aria-label="Table of Contents"
        className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start bg-white border border-slate-200 rounded-2xl p-5 shadow-sm"
      >
        <p className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 mb-3.5">
          Workspace Directory
        </p>
        <nav className="space-y-1">
          {TOC_ITEMS.map((item) => {
            const isActive = activeId === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`block text-xs py-2 px-3 rounded-xl transition-all leading-snug font-medium ${
                  isActive
                    ? "bg-[#DC2626] text-white font-bold shadow-sm translate-x-0.5"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="mt-6 pt-5 border-t border-slate-100">
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-[11px] text-slate-600 space-y-1.5">
            <div className="flex items-center gap-1.5 font-bold text-slate-800">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Statutory Admission
            </div>
            <p className="leading-relaxed">
              Form 26AS 194J TDS + Balance Sheet provisions qualify as written acknowledgment u/s 18 Limitation Act.
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}
