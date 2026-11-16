"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const REEFER_FREIGHT_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-warm-loading-ambush", label: "THE WARM-LOADING AMBUSH" },
  { id: "heading-carriage-act-exceptions", label: "CARRIAGE BY ROAD ACT S.10/12" },
  { id: "heading-unilateral-debit-notes", label: "RAMAN IRON FOUNDRY RULE" },
  { id: "heading-court-precedents", label: "LANDMARK COURT PRECEDENTS" },
  { id: "heading-decision-tree", label: "DECISION TREE FLOWCHART" },
  { id: "heading-recoverable-heads", label: "RECOVERABLE FREIGHT HEADS" },
  { id: "heading-failure-scenarios", label: "4 COMMERCIAL SCENARIOS" },
  { id: "heading-worked-calculation", label: "WORKED LEDGER CALCULATION" },
  { id: "heading-statutory-sop", label: "7-STEP FREIGHT RECOVERY SOP" },
  { id: "heading-bsa-evidence", label: "BSA S.63 TELEMATICS DOSSIER" },
  { id: "heading-faqs", label: "FREQUENTLY ASKED QUESTIONS" },
  { id: "heading-statutory-sources", label: "STATUTORY CITATIONS" },
];

interface ReeferFreightRecoveryTableOfContentsProps {
  sections?: TOCSection[];
}

export default function ReeferFreightRecoveryTableOfContents({
  sections = REEFER_FREIGHT_TOC_SECTIONS,
}: ReeferFreightRecoveryTableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>(sections[0]?.id || "");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY;
          if (scrollPosition >= top) {
            setActiveId(sections[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -90;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveId(id);
      setIsOpen(false);
    }
  };

  const activeSection = sections.find((s) => s.id === activeId) || sections[0];

  return (
    <>
      {/* Mobile Sticky Bar */}
      <div className="lg:hidden sticky top-20 z-30 bg-slate-50/95 backdrop-blur-sm border-b border-slate-200 py-3 px-4 -mx-4 sm:-mx-6 mb-6">
        <div className="relative" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between px-4 py-2.5 bg-white border border-slate-200 rounded-xl shadow-sm text-xs font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#DC2626]"
            aria-expanded={isOpen}
          >
            <span className="truncate flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#DC2626] shrink-0" />
              <span className="text-slate-500 font-medium">Jump to:</span>
              <span className="text-slate-900">{activeSection?.label}</span>
            </span>
            <svg
              className={`w-4 h-4 text-slate-500 transition-transform ${isOpen ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isOpen && (
            <div className="absolute left-0 right-0 mt-2 bg-white border border-slate-200 rounded-xl shadow-xl z-50 max-h-72 overflow-y-auto py-2">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => scrollToSection(e, section.id)}
                  className={`block px-4 py-2.5 text-xs font-semibold transition-colors ${
                    activeId === section.id
                      ? "bg-red-50 text-[#DC2626] font-bold"
                      : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  {section.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Desktop Sticky Aside */}
      <aside className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start">
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-4">
          <div className="pb-3 border-b border-slate-100 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
            <p className="text-xs font-extrabold uppercase tracking-wider text-slate-800">
              Reefer Playbook Navigation
            </p>
          </div>
          <nav className="space-y-1">
            {sections.map((section) => {
              const isActive = activeId === section.id;
              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => scrollToSection(e, section.id)}
                  className={`block px-3 py-2 rounded-xl text-xs transition-all ${
                    isActive
                      ? "bg-[#DC2626] text-white font-bold shadow-sm translate-x-1"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 font-medium"
                  }`}
                >
                  {section.label}
                </a>
              );
            })}
          </nav>

          <div className="pt-4 border-t border-slate-100">
            <div className="p-3 bg-red-50/70 border border-red-200/70 rounded-xl">
              <p className="text-[11px] font-bold text-red-950 uppercase tracking-wider mb-1">
                Statutory Exception Notice
              </p>
              <p className="text-[11px] text-red-800 leading-relaxed">
                Carriage by Road Act s.10(1) exonerates common carriers from cargo loss caused by shipper acts, warm loading, and inherent perishability.
              </p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
