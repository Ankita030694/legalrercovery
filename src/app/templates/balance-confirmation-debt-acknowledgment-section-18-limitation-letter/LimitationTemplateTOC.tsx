"use client";

import React, { useEffect, useState } from "react";

interface TOCItem {
  id: string;
  label: string;
}

const TOC_ITEMS: TOCItem[] = [
  { id: "heading-limitation-cliff-risk", label: "1. The 3-Year Limitation Cliff" },
  { id: "heading-interactive-limitation-pack", label: "2. Interactive s.18 & s.25(3) Pack" },
  { id: "heading-s18-s19-s25-matrix", label: "3. s.18 vs s.19 vs s.25(3) Matrix" },
  { id: "heading-section-25-3-revival", label: "4. Reviving Time-Barred Debt" },
  { id: "heading-email-whatsapp-bsa63", label: "5. Email, WhatsApp & BSA s.63" },
  { id: "heading-worked-limitation-timeline", label: "6. Worked 3-Year Clock Reset" },
  { id: "heading-annexure-audit-checklist", label: "7. Audit & Service Checklist" },
  { id: "heading-dual-track-cta", label: "8. Fact Verification or Bulk CSV" },
  { id: "heading-faqs", label: "9. Limitation & Confirmation FAQs" },
  { id: "heading-statutory-authorities", label: "10. Bare Acts & Related Guides" },
];

export default function LimitationTemplateTOC() {
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
        aria-label="Limitation Templates Navigation"
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
              Limitation Act &amp; Contract Act
            </span>
            <p className="text-sm font-bold text-slate-900 mt-0.5">
              Template Table of Contents
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
            <a
              href="#heading-interactive-limitation-pack"
              className="block w-full text-center py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-colors"
            >
              Open Live Word Templates &rarr;
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}
