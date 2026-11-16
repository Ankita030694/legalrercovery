"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const SOURCE_CODE_WITHHOLDING_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-statutory-dilemma", label: "IP Lien vs Cyber Crime Dilemma" },
  { id: "heading-it-act-killswitch", label: "IT Act s.43/66 Kill-Switch Perils" },
  { id: "heading-contract-act-reciprocal", label: "Contract Act s.51–54 Reciprocal Rules" },
  { id: "heading-copyright-conditional", label: "Copyright Act s.19 Conditional IP" },
  { id: "heading-escrow-architecture", label: "Source Code Escrow Triggers" },
  { id: "heading-staging-vs-production", label: "Staging vs Production Infrastructure" },
  { id: "heading-interactive-scenarios", label: "4 Operational Code Scenarios" },
  { id: "heading-timeline-limitation", label: "Statutory Escalation Timeline" },
  { id: "heading-judicial-precedents", label: "High Court Holdings & Precedents" },
  { id: "heading-defense-preemption", label: "Debtor Defense Pre-Emption Matrix" },
  { id: "heading-cure-cum-suspension-sop", label: "Advocate Cure-Cum-Suspension SOP" },
  { id: "heading-faqs", label: "Frequently Asked Questions" },
  { id: "heading-statutory-sources", label: "Statutes & Bare Act Citations" },
];

interface SourceCodeWithholdingTableOfContentsProps {
  sections?: TOCSection[];
}

export default function SourceCodeWithholdingTableOfContents({
  sections = SOURCE_CODE_WITHHOLDING_TOC_SECTIONS,
}: SourceCodeWithholdingTableOfContentsProps) {
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
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sections]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -90;
      const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
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
            className="w-full flex items-center justify-between px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm font-semibold text-slate-800 shadow-xs"
            aria-expanded={isOpen}
            aria-label="Table of Contents Navigation"
          >
            <span className="flex items-center gap-2 truncate">
              <span className="w-2 h-2 rounded-full bg-[#DC2626] shrink-0" />
              <span className="text-slate-500 font-normal">Jump to:</span>
              <span className="truncate">{activeSection?.label}</span>
            </span>
            <svg
              className={`w-4 h-4 text-slate-500 transition-transform duration-200 shrink-0 ${isOpen ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isOpen && (
            <div className="absolute top-full left-0 right-0 mt-1.5 bg-white border border-slate-200 rounded-xl shadow-xl z-50 max-h-72 overflow-y-auto py-1.5">
              {sections.map((section) => {
                const isActive = section.id === activeId;
                return (
                  <button
                    key={section.id}
                    type="button"
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full text-left px-4 py-2 text-xs font-medium transition-colors flex items-center gap-2 ${
                      isActive ? "bg-red-50 text-[#DC2626] font-bold" : "text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full shrink-0 ${isActive ? "bg-[#DC2626]" : "bg-slate-300"}`}
                    />
                    <span className="truncate">{section.label}</span>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Desktop Sticky Aside */}
      <aside className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start">
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
            <span className="w-1.5 h-3.5 bg-[#DC2626] rounded-xs" />
            Statutory Navigation
          </p>
          <nav className="space-y-1" aria-label="Table of contents">
            {sections.map((section) => {
              const isActive = section.id === activeId;
              return (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-xs transition-colors flex items-center gap-2.5 ${
                    isActive
                      ? "bg-[#DC2626] text-white font-bold shadow-xs"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 font-medium"
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full shrink-0 ${isActive ? "bg-white" : "bg-slate-300"}`}
                  />
                  <span className="truncate">{section.label}</span>
                </button>
              );
            })}
          </nav>

          <div className="mt-6 pt-5 border-t border-slate-100 space-y-3">
            <div className="bg-red-50 border border-red-200 rounded-xl p-3 text-red-900 text-[11px] leading-relaxed">
              <strong className="block font-bold text-red-700 uppercase tracking-wider mb-1">
                IT Act Cautionary Alert
              </strong>
              Never trigger automated code logic bombs or wipe client server databases. Exercise strictly lawful IP withholding.
            </div>
            <a
              href="#heading-cure-cum-suspension-sop"
              className="block w-full py-2.5 px-3 text-center bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl transition-colors"
            >
              Draft Legal Notice &rarr;
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}
