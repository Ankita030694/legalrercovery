"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const REPLACEMENT_CLAUSE_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-free-credit-trap", label: "The 90-Day Credit Trap" },
  { id: "heading-decision-tree", label: "5-Stage Decision Tree" },
  { id: "heading-statutory-matrix", label: "Statutory Recovery Matrix" },
  { id: "heading-scenario-tabs", label: "4 Abuse Scenarios" },
  { id: "heading-condition-precedent", label: "Condition Precedent Doctrine" },
  { id: "heading-layoff-constructive-dismissal", label: "Layoffs & Role Changes" },
  { id: "heading-credit-note-vs-cash", label: "Credit Note vs Refund" },
  { id: "heading-model-contract-clause", label: "Model Agreement Clause" },
  { id: "heading-worked-example", label: "Worked ₹12L Ledger" },
  { id: "heading-bsa-evidence-checklist", label: "BSA s.63 Evidence Dossier" },
  { id: "heading-cta", label: "Institutional B2B Desk" },
  { id: "heading-faqs", label: "Frequently Asked Questions" },
  { id: "heading-sources", label: "Statutory Precedents" },
];

interface ReplacementClauseRecoveryTableOfContentsProps {
  sections?: TOCSection[];
}

export default function ReplacementClauseRecoveryTableOfContents({
  sections = REPLACEMENT_CLAUSE_TOC_SECTIONS,
}: ReplacementClauseRecoveryTableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>(sections[0]?.id || "");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
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

  // Track active section on scroll
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
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const activeSection = sections.find((s) => s.id === activeId) || sections[0];

  return (
    <>
      {/* Mobile Sticky Dropdown Navigation (lg:hidden) */}
      <div className="lg:hidden sticky top-20 z-30 bg-slate-50/95 backdrop-blur-sm border-b border-slate-200 py-3 px-4 -mx-4 sm:-mx-6 mb-4">
        <div className="relative" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between px-4 py-2.5 bg-white border border-slate-300 rounded-xl shadow-xs text-left text-xs font-bold text-slate-800"
            aria-expanded={isOpen}
            aria-label="Table of Contents Menu"
          >
            <span className="flex items-center gap-2 truncate">
              <span className="w-2 h-2 rounded-full bg-[#DC2626] shrink-0" />
              <span className="text-slate-500 uppercase tracking-wider text-[10px]">TOC:</span>
              <span className="truncate">{activeSection?.label}</span>
            </span>
            <svg
              className={`w-4 h-4 text-slate-500 transition-transform duration-200 shrink-0 ml-2 ${
                isOpen ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isOpen && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-200 rounded-xl shadow-xl py-2 z-50 max-h-72 overflow-y-auto">
              {sections.map((section) => {
                const isActive = section.id === activeId;
                return (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-2 text-xs font-medium transition-colors ${
                      isActive
                        ? "bg-red-50 text-[#DC2626] font-bold"
                        : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                    }`}
                  >
                    {section.label}
                  </a>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Desktop Sticky Aside Navigation (hidden lg:block) */}
      <aside className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
        <p className="text-[11px] font-black uppercase tracking-wider text-slate-400 mb-3 px-2">
          Page Navigation
        </p>
        <nav aria-label="Table of contents" className="space-y-1">
          {sections.map((section) => {
            const isActive = section.id === activeId;
            return (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={`block px-3 py-2 rounded-xl text-xs transition-all ${
                  isActive
                    ? "bg-[#DC2626] text-white font-bold shadow-xs"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 font-medium"
                }`}
              >
                {section.label}
              </a>
            );
          })}
        </nav>

        <div className="mt-6 pt-5 border-t border-slate-100">
          <p className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold px-2 mb-2">
            Target Audience
          </p>
          <p className="text-xs text-slate-700 font-bold px-2">
            Staffing Founders &amp; Executive Search CFOs
          </p>
          <div className="mt-3 px-2 py-2 bg-red-50 border border-red-100 rounded-lg">
            <span className="text-[10px] font-extrabold text-[#DC2626] block uppercase tracking-wider">
              Statutory Hook
            </span>
            <span className="text-[11px] text-slate-700 font-medium block mt-0.5">
              Contract Act s.51–54 Condition Precedent
            </span>
          </div>
        </div>
      </aside>
    </>
  );
}
