"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const PERSONAL_LOAN_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-overview", label: "OVERVIEW" },
  { id: "heading-court-rulings", label: "COURT PRECEDENTS" },
  { id: "heading-pattern-analysis", label: "WINNING PATTERNS" },
  { id: "heading-escalation-flow", label: "RESOLUTION RAIL" },
  { id: "heading-playbook", label: "5-STEP PLAYBOOK" },
  { id: "heading-statutory-table", label: "STATUTORY BENCHMARKS" },
  { id: "heading-problem-picker", label: "RECOVERY SCENARIOS" },
  { id: "heading-worked-example", label: "WORKED EXAMPLE" },
  { id: "heading-evidence-checklist", label: "EVIDENCE CHECKLIST" },
  { id: "heading-faqs", label: "FAQ" },
  { id: "heading-sources", label: "LEGAL REFERENCES" },
];

interface PersonalLoanRecoveryTableOfContentsProps {
  sections?: TOCSection[];
}

export default function PersonalLoanRecoveryTableOfContents({
  sections = PERSONAL_LOAN_TOC_SECTIONS,
}: PersonalLoanRecoveryTableOfContentsProps) {
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

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const topOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveId(id);
      setIsOpen(false);
    }
  };

  const activeLabel = sections.find((s) => s.id === activeId)?.label || "SECTIONS";

  return (
    <>
      {/* Mobile Sticky Bar */}
      <div className="lg:hidden sticky top-16 z-30 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 py-2.5 px-4 mb-6 shadow-xs">
        <div className="relative" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between gap-2 px-3.5 py-2 text-xs font-bold uppercase tracking-wider text-slate-800 bg-slate-100 rounded-lg border border-slate-300 hover:bg-slate-200 transition-colors"
            aria-expanded={isOpen}
            aria-label="Table of contents navigation menu"
          >
            <div className="flex items-center gap-2 truncate">
              <span className="w-2 h-2 rounded-full bg-[#DC2626] animate-pulse shrink-0" />
              <span className="truncate">Jump to: {activeLabel}</span>
            </div>
            <svg
              className={`w-4 h-4 text-slate-600 transition-transform duration-200 shrink-0 ${
                isOpen ? "rotate-180" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isOpen && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-slate-200 rounded-xl shadow-xl z-50 overflow-hidden max-h-[60vh] overflow-y-auto">
              <ul className="py-1 divide-y divide-slate-100">
                {sections.map((section, idx) => {
                  const isActive = activeId === section.id;
                  return (
                    <li key={section.id}>
                      <button
                        type="button"
                        onClick={() => scrollToSection(section.id)}
                        className={`w-full text-left px-4 py-2.5 text-xs font-semibold tracking-wide flex items-center justify-between transition-colors ${
                          isActive
                            ? "bg-red-50 text-[#DC2626] font-bold"
                            : "text-slate-700 hover:bg-slate-50"
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <span className="text-[10px] text-slate-400 font-mono w-4">
                            {String(idx + 1).padStart(2, "0")}
                          </span>
                          <span>{section.label}</span>
                        </span>
                        {isActive && <span className="text-[#DC2626] text-xs font-bold">●</span>}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Desktop Sticky Sidebar */}
      <nav
        aria-label="Table of Contents"
        className="hidden lg:block sticky top-28 w-60 xl:w-64 shrink-0 bg-white rounded-2xl border border-slate-200 p-4 shadow-sm"
      >
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-200">
          <span className="text-xs font-extrabold uppercase tracking-wider text-slate-900">
            Navigation Index
          </span>
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
            {sections.length} Topics
          </span>
        </div>

        <ul className="space-y-1">
          {sections.map((section, idx) => {
            const isActive = activeId === section.id;
            return (
              <li key={section.id}>
                <button
                  type="button"
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium tracking-wide transition-all duration-150 flex items-center justify-between group ${
                    isActive
                      ? "bg-red-50 text-[#DC2626] font-bold border-l-4 border-[#DC2626] pl-2"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  <span className="flex items-center gap-2 truncate">
                    <span
                      className={`text-[10px] font-mono shrink-0 ${
                        isActive ? "text-[#DC2626]" : "text-slate-400 group-hover:text-slate-600"
                      }`}
                    >
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className="truncate">{section.label}</span>
                  </span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] shrink-0" />
                  )}
                </button>
              </li>
            );
          })}
        </ul>

        <div className="mt-5 pt-4 border-t border-slate-200">
          <div className="bg-slate-50 rounded-xl p-3 border border-slate-200/80">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
              Need Institutional Drafting?
            </span>
            <p className="text-[11px] text-slate-700 leading-snug mb-2">
              Send advocate legal notices under Section 25 PSS Act &amp; Order 37 CPC.
            </p>
            <button
              type="button"
              onClick={() => scrollToSection("heading-cta-block")}
              className="text-[11px] font-bold text-[#DC2626] hover:text-[#B91C1C] flex items-center gap-1 cursor-pointer"
            >
              Draft Legal Notice →
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
