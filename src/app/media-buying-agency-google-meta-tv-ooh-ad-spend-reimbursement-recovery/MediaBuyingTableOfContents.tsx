"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const MEDIA_BUYING_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-agency-cashflow-trap", label: "AGENCY AD SPEND CRISIS" },
  { id: "heading-contract-act-section-222", label: "SECTION 222 INDEMNITY LAW" },
  { id: "heading-statutory-enforcement-matrix", label: "STATUTORY RECOVERY MATRIX" },
  { id: "heading-operational-recovery-sop", label: "5-STAGE RECOVERY SOP" },
  { id: "heading-four-commercial-scenarios", label: "4 AD SPEND FAILURE MODES" },
  { id: "heading-ins-ibdf-credit-embargo", label: "INS & IBDF EMBARGO LEVER" },
  { id: "heading-tds-194c-vs-194h", label: "194C VS 194H TDS DEFENSE" },
  { id: "heading-worked-financial-ledger", label: "WORKED ₹50L RECOVERY LEDGER" },
  { id: "heading-bsa-section-63-dossier", label: "BSA S.63 EVIDENCE AUDIT" },
  { id: "heading-model-ro-indemnity-clause", label: "MODEL RO INDEMNITY CLAUSE" },
  { id: "heading-faq-media-cfos", label: "FREQUENTLY ASKED QUESTIONS" },
  { id: "heading-statutory-precedents", label: "COURT PRECEDENTS & AUTHORITIES" },
];

export default function MediaBuyingTableOfContents() {
  const [activeId, setActiveId] = useState<string>(MEDIA_BUYING_TOC_SECTIONS[0].id);
  const isClickScrolling = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isClickScrolling.current) return;

      const scrollPosition = window.scrollY + 160;

      for (let i = MEDIA_BUYING_TOC_SECTIONS.length - 1; i >= 0; i--) {
        const section = document.getElementById(MEDIA_BUYING_TOC_SECTIONS[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveId(MEDIA_BUYING_TOC_SECTIONS[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(id);
    if (!targetElement) return;

    isClickScrolling.current = true;
    setActiveId(id);

    const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - 110;
    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });

    setTimeout(() => {
      isClickScrolling.current = false;
    }, 800);
  };

  return (
    <>
      {/* Mobile Sticky Horizontal Bar */}
      <div className="lg:hidden sticky top-20 z-30 bg-slate-50/95 backdrop-blur-sm border-b border-slate-200 py-3 px-4 -mx-4 sm:-mx-6 mb-6">
        <span className="block text-[10px] font-black uppercase tracking-wider text-slate-500 mb-2">
          Page Navigation — Jump to Section
        </span>
        <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
          {MEDIA_BUYING_TOC_SECTIONS.map((sec) => (
            <a
              key={sec.id}
              href={`#${sec.id}`}
              onClick={(e) => scrollToSection(e, sec.id)}
              className={`shrink-0 text-xs px-3 py-1.5 rounded-lg font-bold transition-all ${
                activeId === sec.id
                  ? "bg-[#DC2626] text-white shadow-sm"
                  : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
              }`}
            >
              {sec.label}
            </a>
          ))}
        </div>
      </div>

      {/* Desktop Sticky Left Aside */}
      <aside className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start">
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
          <div className="border-b border-slate-100 pb-3 mb-4">
            <span className="text-[11px] font-black uppercase tracking-widest text-[#DC2626] block">
              Operational SOP
            </span>
            <span className="text-xs font-bold text-slate-900 block mt-0.5">
              Media Spend Recovery Table of Contents
            </span>
          </div>

          <nav className="space-y-1.5" aria-label="Media Spend Recovery Guide Navigation">
            {MEDIA_BUYING_TOC_SECTIONS.map((sec, idx) => {
              const isActive = activeId === sec.id;
              return (
                <a
                  key={sec.id}
                  href={`#${sec.id}`}
                  onClick={(e) => scrollToSection(e, sec.id)}
                  className={`group flex items-center justify-between text-xs px-3 py-2 rounded-xl transition-all font-medium ${
                    isActive
                      ? "bg-[#DC2626] text-white font-bold shadow-sm"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  <span className="truncate pr-2">
                    <span
                      className={`inline-block w-4 font-mono text-[10px] mr-1 ${
                        isActive ? "text-red-200" : "text-slate-400 group-hover:text-slate-600"
                      }`}
                    >
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    {sec.label}
                  </span>
                  <span
                    className={`text-[10px] shrink-0 ${
                      isActive ? "text-white" : "text-slate-300 group-hover:text-slate-500"
                    }`}
                  >
                    →
                  </span>
                </a>
              );
            })}
          </nav>

          <div className="mt-6 pt-4 border-t border-slate-100 bg-slate-50 rounded-xl p-3 text-center">
            <span className="text-[10px] font-bold text-slate-500 block uppercase tracking-wider mb-1">
              Urgent Cashflow Risk?
            </span>
            <p className="text-[11px] text-slate-600 leading-tight mb-2.5">
              Fronted ₹10L+ on Google, Meta, Print or TV networks?
            </p>
            <a
              href="#ad-spend-cta-block"
              className="inline-block w-full py-2 px-3 text-[11px] font-black text-white bg-[#DC2626] hover:bg-[#B91C1C] rounded-lg transition-colors shadow-sm"
            >
              Issue Urgent Demand Notice
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}
