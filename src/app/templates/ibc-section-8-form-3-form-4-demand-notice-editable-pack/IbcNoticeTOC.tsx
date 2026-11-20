"use client";

import React, { useEffect, useState } from "react";

interface TOCItem {
  id: string;
  label: string;
}

const TOC_ITEMS: TOCItem[] = [
  { id: "heading-nclt-rejection-risks", label: "1. Why NCLT Rejects Form 3/4" },
  { id: "heading-interactive-rule5-pack", label: "2. Interactive Rule 5 Pack" },
  { id: "heading-form3-vs-form4-rule5", label: "3. Form 3 vs Form 4 (Rule 5)" },
  { id: "heading-computation-of-default", label: "4. Default Computation Sheet" },
  { id: "heading-board-resolution-execution", label: "5. Board Resolution & Signatory" },
  { id: "heading-rule5-service-matrix", label: "6. Rule 5(2) Service Matrix" },
  { id: "heading-worked-default-ledger", label: "7. Worked ₹1.48 Cr Ledger" },
  { id: "heading-dual-track-cta", label: "8. Advocate Review or Bulk CSV" },
  { id: "heading-faqs", label: "9. IBC Form 3 & Form 4 FAQs" },
  { id: "heading-statutory-authorities", label: "10. Bare Acts & Related Guides" },
];

export default function IbcNoticeTOC() {
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
        aria-label="IBC Section 8 Pack Navigation"
        className="lg:hidden sticky top-20 z-30 bg-slate-50/95 backdrop-blur-sm border-b border-slate-200 py-3 px-4 -mx-4 sm:-mx-6 mb-4 overflow-x-auto no-scrollbar"
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
              IBC Rule 5 Workspace
            </span>
            <p className="text-sm font-bold text-slate-900 mt-0.5">
              Pack Table of Contents
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
                      ? "bg-[#DC2626] text-white font-bold shadow-sm"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 font-medium"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <div className="pt-3 border-t border-slate-100">
            <p className="text-[11px] text-slate-500 leading-relaxed">
              Statutory Floor:{" "}
              <strong className="text-slate-800">&ge; ₹1,00,00,000</strong>{" "}
              (Section 4 IBC). Response window:{" "}
              <strong className="text-slate-800">10 Days</strong> (Section 8(2)).
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}
