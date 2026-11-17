"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const LABOUR_CONTRACTOR_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-overview", label: "FACTORY BILL WITHHOLDING CRISIS" },
  { id: "heading-tarapore-principle", label: "STATUTORY WAGE PASS-THROUGH" },
  { id: "heading-attendance-disputes", label: "BIOMETRIC VS GATE LOG DISPUTES" },
  { id: "heading-decision-tree", label: "RECOVERY DECISION TREE" },
  { id: "heading-statutory-matrix", label: "STATUTORY FORUMS MATRIX" },
  { id: "heading-scenario-tabs", label: "4 COMMERCIAL FAILURE MODES" },
  { id: "heading-worked-example", label: "WORKED ARREARS LEDGER (₹24.8L)" },
  { id: "heading-operational-sop", label: "7-STEP RECOVERY PLAYBOOK" },
  { id: "heading-evidence-checklist", label: "BSA S.63 EVIDENCE DOSSIER" },
  { id: "heading-faq", label: "FREQUENTLY ASKED QUESTIONS" },
  { id: "heading-references", label: "LEGISLATIVE REFERENCES" },
];

export default function LabourContractorTableOfContents() {
  const [activeId, setActiveId] = useState<string>("heading-overview");
  const isUserClick = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isUserClick.current) return;

      const scrollPosition = window.scrollY + 160;

      for (let i = LABOUR_CONTRACTOR_TOC_SECTIONS.length - 1; i >= 0; i--) {
        const section = document.getElementById(LABOUR_CONTRACTOR_TOC_SECTIONS[i].id);
        if (section) {
          const top = section.offsetTop;
          if (scrollPosition >= top) {
            setActiveId(LABOUR_CONTRACTOR_TOC_SECTIONS[i].id);
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
    isUserClick.current = true;
    setActiveId(id);

    const target = document.getElementById(id);
    if (target) {
      const topOffset = 110;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }

    setTimeout(() => {
      isUserClick.current = false;
    }, 800);
  };

  return (
    <>
      {/* Mobile Sticky Bar */}
      <div className="lg:hidden sticky top-20 z-30 bg-slate-50/95 backdrop-blur-sm border-b border-slate-200 py-3 px-4 -mx-4 sm:-mx-6 mb-4">
        <div className="flex items-center justify-between text-xs font-semibold text-slate-700 mb-1.5">
          <span className="uppercase tracking-wider text-[11px] text-red-600 font-bold">
            Table of Contents
          </span>
          <span className="text-[10px] text-slate-600">Quick Navigation</span>
        </div>
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-thin no-scrollbar">
          {LABOUR_CONTRACTOR_TOC_SECTIONS.map((sec) => {
            const isActive = activeId === sec.id;
            return (
              <a
                key={sec.id}
                href={`#${sec.id}`}
                onClick={(e) => scrollToSection(e, sec.id)}
                className={`whitespace-nowrap px-3 py-1.5 rounded-lg text-xs font-medium transition-colors shrink-0 ${
                  isActive
                    ? "bg-[#DC2626] text-white font-bold shadow-sm"
                    : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-100"
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
          <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
            <p className="text-xs uppercase tracking-widest font-black text-slate-800">
              Navigation Index
            </p>
            <span className="text-[10px] font-bold text-red-600 uppercase tracking-wider bg-red-50 px-2 py-0.5 rounded">
              Contractor SOP
            </span>
          </div>

          <nav aria-label="Table of Contents" className="space-y-1">
            {LABOUR_CONTRACTOR_TOC_SECTIONS.map((sec, idx) => {
              const isActive = activeId === sec.id;
              return (
                <a
                  key={sec.id}
                  href={`#${sec.id}`}
                  onClick={(e) => scrollToSection(e, sec.id)}
                  className={`group flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-medium transition-all ${
                    isActive
                      ? "bg-[#DC2626] text-white font-bold shadow-sm pl-4"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  <span
                    className={`text-[10px] font-bold tabular-nums shrink-0 ${
                      isActive ? "text-red-200" : "text-slate-400 group-hover:text-slate-600"
                    }`}
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="truncate">{sec.label}</span>
                </a>
              );
            })}
          </nav>

          <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] text-slate-500 leading-relaxed">
            <p className="font-semibold text-slate-700 mb-1">Manpower Statutory Rights</p>
            <p>
              Under MSMED s.15–18 and the *Tarapore* doctrine, factories cannot retain statutory wage revisions or withhold billing for ECR-compliant deployments.
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}
