"use client";

import React, { useEffect, useState } from "react";

interface TOCItem {
  id: string;
  label: string;
}

const TOC_ITEMS: TOCItem[] = [
  { id: "heading-executive-statutory-architecture", label: "1. 2-Tier Tax Escalation Framework" },
  { id: "heading-interactive-template-workspace", label: "2. Interactive Workspace (Stage 1 & 2)" },
  { id: "heading-section-43bh-mechanics", label: "3. Section 43B(h) Mechanics & March 31" },
  { id: "heading-section-23-interest-disallowance", label: "4. Section 23 MSMED Interest Disallowance" },
  { id: "heading-clause-22-form-3cd", label: "5. Form 3CD Clause 22 Auditor Disclosures" },
  { id: "heading-worked-tax-interest-ledger", label: "6. Worked ₹42.5L Principal & Tax Ledger" },
  { id: "heading-bsa63-evidence-checklist", label: "7. BSA 2023 s.63 Evidence Docket" },
  { id: "heading-judicial-precedents", label: "8. High Court & ITAT Binding Precedents" },
  { id: "heading-dual-track-cta", label: "9. Single Notice Review or Bulk CSV Desk" },
  { id: "heading-faqs", label: "10. Section 43B(h) & MSME Notice FAQs" },
  { id: "heading-primary-statutes", label: "11. Statutory Authorities & Bare Acts" },
];

export default function Section43bhTOC() {
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
      {/* Mobile / Tablet Sticky Horizontal Jump Bar — strictly zero H2/H3/H4 tags */}
      <nav
        aria-label="Section 43B(h) Template Navigation"
        className="lg:hidden sticky top-16 z-30 bg-white/95 backdrop-blur border-y border-slate-200 -mx-4 sm:-mx-6 px-4 sm:px-6 py-2.5 overflow-x-auto no-scrollbar"
      >
        <div className="flex items-center gap-2 min-w-max">
          <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#DC2626] shrink-0 mr-1">
            Contents:
          </span>
          {TOC_ITEMS.map((item) => {
            const isActive = activeId === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
                  isActive
                    ? "bg-[#DC2626] text-white shadow-sm"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>
      </nav>

      {/* Desktop Sticky Left Sidebar Navigation */}
      <aside
        aria-label="Document Outline"
        className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start"
      >
        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-4">
          <div className="border-b border-slate-100 pb-3">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#DC2626] block">
              Notice Workspace
            </span>
            <p className="text-sm font-bold text-slate-900 mt-0.5">
              Escalation Table of Contents
            </p>
          </div>

          <nav className="space-y-1">
            {TOC_ITEMS.map((item) => {
              const isActive = activeId === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`block text-xs py-2 px-3 rounded-lg transition-all ${
                    isActive
                      ? "bg-[#DC2626] text-white font-bold shadow-sm translate-x-1"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <div className="pt-3 border-t border-slate-100">
            <div className="bg-slate-50 rounded-xl p-3 border border-slate-200">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                Statutory Hook
              </span>
              <p className="text-[11px] font-semibold text-slate-800 mt-1 leading-snug">
                IT Act s.43B(h) + MSMED Act s.16 &amp; s.23 (100% Non-Deductible Interest)
              </p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
