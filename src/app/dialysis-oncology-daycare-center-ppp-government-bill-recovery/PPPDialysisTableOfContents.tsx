"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const PPP_DIALYSIS_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-overview", label: "HEALTHCARE PPP BILL CRISIS" },
  { id: "heading-decision-tree", label: "5-STAGE RECOVERY TREE" },
  { id: "heading-statutory-matrix", label: "STATUTORY REMEDIES" },
  { id: "heading-scenario-tabs", label: "4 PPP FAILURE MODES" },
  { id: "heading-msme-applicability", label: "MSME SAMADHAAN ELIGIBILITY" },
  { id: "heading-concession-arbitration", label: "CONCESSION ARBITRATION" },
  { id: "heading-section-80-cpc", label: "SECTION 80 CPC STATUTORY NOTICE" },
  { id: "heading-writ-mandamus", label: "HIGH COURT ARTICLE 226 WRIT" },
  { id: "heading-worked-calculation", label: "WORKED NHM ARREARS LEDGER" },
  { id: "heading-bsa-evidence", label: "BSA S.63 AUDIT CHECKLIST" },
  { id: "heading-recovery-cta", label: "DEPLOY RECOVERY DESK" },
  { id: "heading-faqs", label: "FREQUENTLY ASKED QUESTIONS" },
  { id: "heading-primary-sources", label: "STATUTORY CITATIONS" },
];

export default function PPPDialysisTableOfContents() {
  const [activeId, setActiveId] = useState<string>("heading-overview");
  const isClickScrolling = useRef<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isClickScrolling.current) return;
      const scrollPosition = window.scrollY + 160;

      for (let i = PPP_DIALYSIS_TOC_SECTIONS.length - 1; i >= 0; i--) {
        const section = document.getElementById(PPP_DIALYSIS_TOC_SECTIONS[i].id);
        if (section) {
          const top = section.offsetTop;
          if (scrollPosition >= top) {
            setActiveId(PPP_DIALYSIS_TOC_SECTIONS[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (!target) return;

    isClickScrolling.current = true;
    setActiveId(id);

    const yOffset = -100;
    const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });

    setTimeout(() => {
      isClickScrolling.current = false;
    }, 700);
  };

  return (
    <>
      {/* Mobile Sticky Horizontal Bar */}
      <div className="lg:hidden sticky top-20 z-30 bg-slate-50/95 backdrop-blur-sm border-b border-slate-200 py-3 px-4 -mx-4 sm:-mx-6 mb-4">
        <div className="text-[10px] font-black tracking-widest text-slate-500 uppercase mb-2">
          Page Navigation &bull; Operational Playbook
        </div>
        <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar text-xs">
          {PPP_DIALYSIS_TOC_SECTIONS.map((sec) => {
            const isActive = activeId === sec.id;
            return (
              <a
                key={sec.id}
                href={`#${sec.id}`}
                onClick={(e) => scrollToSection(e, sec.id)}
                className={`whitespace-nowrap px-3 py-1.5 rounded-full font-bold transition-all text-xs ${
                  isActive
                    ? "bg-[#DC2626] text-white shadow-sm"
                    : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
                }`}
              >
                {sec.label}
              </a>
            );
          })}
        </div>
      </div>

      {/* Desktop Sticky Aside */}
      <aside className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start">
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
          <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100">
            <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626] animate-pulse" />
            <span className="text-xs font-black uppercase tracking-wider text-slate-800">
              Navigation Table
            </span>
          </div>
          <nav className="space-y-1">
            {PPP_DIALYSIS_TOC_SECTIONS.map((sec) => {
              const isActive = activeId === sec.id;
              return (
                <a
                  key={sec.id}
                  href={`#${sec.id}`}
                  onClick={(e) => scrollToSection(e, sec.id)}
                  className={`block text-xs font-semibold px-3 py-2 rounded-lg transition-all ${
                    isActive
                      ? "bg-[#DC2626] text-white font-bold shadow-sm"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  {sec.label}
                </a>
              );
            })}
          </nav>

          <div className="mt-5 pt-4 border-t border-slate-100">
            <div className="bg-slate-50 rounded-xl p-3 border border-slate-200/80">
              <span className="block text-[10px] uppercase font-bold text-slate-500 mb-1">
                Operator Support Desk
              </span>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                Facing frozen NHM disbursements or PBG encashment threats? Fast-track Advocate Legal Notice and Section 9 emergency protection.
              </p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
