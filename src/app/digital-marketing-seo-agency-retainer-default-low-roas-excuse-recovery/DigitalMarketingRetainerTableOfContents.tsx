"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const RETAINER_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-low-roas-fallacy", label: "THE LOW ROAS FALLACY" },
  { id: "heading-statutory-matrix", label: "STATUTORY RECOVERY MATRIX" },
  { id: "heading-operational-decision-tree", label: "OPERATIONAL DECISION TREE" },
  { id: "heading-commercial-scenarios", label: "4 COMMERCIAL SCENARIOS" },
  { id: "heading-copyright-takedown-weapon", label: "COPYRIGHT TAKEDOWN WEAPON" },
  { id: "heading-notice-period-enforcement", label: "NOTICE PERIOD LOCK-IN" },
  { id: "heading-worked-financial-ledger", label: "WORKED FINANCIAL LEDGER" },
  { id: "heading-landmark-precedents", label: "LANDMARK PRECEDENTS" },
  { id: "heading-debtor-defense-preemption", label: "DEFENSE PRE-EMPTION" },
  { id: "heading-bsa-evidence-dossier", label: "BSA S.63 EVIDENCE DOSSIER" },
  { id: "heading-recovery-faqs", label: "FREQUENTLY ASKED QUESTIONS" },
  { id: "heading-statutory-sources", label: "STATUTORY CITATIONS" },
];

interface DigitalMarketingRetainerTableOfContentsProps {
  sections?: TOCSection[];
}

export default function DigitalMarketingRetainerTableOfContents({
  sections = RETAINER_TOC_SECTIONS,
}: DigitalMarketingRetainerTableOfContentsProps) {
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
            return;
          }
        }
      }
      if (sections.length > 0) {
        setActiveId(sections[0].id);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveId(id);
      setIsOpen(false);
    }
  };

  const activeSection = sections.find((s) => s.id === activeId) || sections[0];

  return (
    <>
      {/* Mobile Sticky Dropdown Navigation */}
      <div className="lg:hidden sticky top-20 z-30 bg-slate-50/95 backdrop-blur-sm border-b border-slate-200 py-3 px-4 -mx-4 sm:-mx-6 mb-6">
        <div className="relative" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between px-4 py-2.5 bg-white border border-slate-300 rounded-xl shadow-xs text-xs sm:text-sm font-semibold text-slate-800 text-left cursor-pointer"
            aria-expanded={isOpen}
            aria-label="Table of Contents"
          >
            <div className="flex items-center gap-2 truncate">
              <span className="w-2 h-2 rounded-full bg-[#DC2626] shrink-0" />
              <span className="text-slate-500 font-medium">Section:</span>
              <span className="truncate text-slate-900 font-bold">{activeSection.label}</span>
            </div>
            <svg
              className={`w-4 h-4 text-slate-500 transition-transform duration-200 shrink-0 ml-2 ${
                isOpen ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              width="16"
              height="16"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isOpen && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-200 rounded-xl shadow-xl z-50 max-h-80 overflow-y-auto divide-y divide-slate-100">
              <div className="p-2">
                <span className="px-3 py-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-widest block">
                  Agency Retainer Recovery SOP
                </span>
              </div>
              <div className="p-1 space-y-0.5">
                {sections.map((section, idx) => {
                  const isActive = activeId === section.id;
                  return (
                    <button
                      key={section.id}
                      type="button"
                      onClick={() => scrollToSection(section.id)}
                      className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs text-left transition-colors cursor-pointer ${
                        isActive
                          ? "bg-red-50 text-[#DC2626] font-bold"
                          : "text-slate-700 hover:bg-slate-50 hover:text-slate-900 font-medium"
                      }`}
                    >
                      <span
                        className={`text-[10px] font-mono shrink-0 w-4 ${
                          isActive ? "text-[#DC2626] font-bold" : "text-slate-400"
                        }`}
                      >
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <span className="truncate">{section.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Desktop Sticky Aside Navigation */}
      <aside
        className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start bg-white border border-slate-200 rounded-2xl p-5 shadow-xs"
        aria-label="Table of Contents"
      >
        <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100">
          <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
          <span className="text-xs font-black uppercase tracking-wider text-slate-900">
            Agency Playbook SOP
          </span>
        </div>
        <nav className="space-y-1">
          {sections.map((section, idx) => {
            const isActive = activeId === section.id;
            return (
              <button
                key={section.id}
                type="button"
                onClick={() => scrollToSection(section.id)}
                className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs text-left transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#DC2626] text-white font-bold shadow-xs"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 font-medium"
                }`}
              >
                <span
                  className={`text-[10px] font-mono shrink-0 w-4 ${
                    isActive ? "text-white font-bold" : "text-slate-400"
                  }`}
                >
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <span className="truncate">{section.label}</span>
              </button>
            );
          })}
        </nav>
        <div className="mt-5 pt-4 border-t border-slate-100">
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
            <span className="text-[11px] font-bold text-slate-900 block mb-1">
              Need Instant Recovery?
            </span>
            <span className="text-[10px] text-slate-500 block leading-relaxed mb-2">
              Issue a fact-verified demand notice with Copyright Act s.51 takedown warning in 24 hours.
            </span>
            <button
              type="button"
              onClick={() => scrollToSection("heading-worked-financial-ledger")}
              className="text-[11px] font-bold text-[#DC2626] hover:underline cursor-pointer flex items-center gap-1"
            >
              Calculate your claim &rarr;
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
