"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const LEGAL_NOTICE_CHARGES_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-answer-box", label: "QUICK ANSWER" },
  { id: "heading-comparison-matrix", label: "COST MATRIX" },
  { id: "heading-persona-selector", label: "WHICH ROUTE FOR YOU" },
  { id: "heading-cost-factors", label: "WHAT DRIVES FEES" },
  { id: "heading-recovery-slabs", label: "RECOVERY SLABS" },
  { id: "heading-city-charges", label: "CITY-WISE PRICING" },
  { id: "heading-dispatch-charges", label: "SPEED POST COSTS" },
  { id: "heading-legalrecovery-pricing", label: "OUR ₹999 FEE" },
  { id: "heading-recovery-of-costs", label: "CLAIMING COSTS BACK" },
  { id: "heading-interactive-calculator", label: "FEE ESTIMATOR" },
  { id: "heading-worked-examples", label: "WORKED EXAMPLES" },
  { id: "heading-checklist", label: "PRE-NOTICE CHECKLIST" },
  { id: "heading-faqs", label: "FAQ" },
  { id: "heading-sources", label: "LEGAL REFERENCES" },
];

interface LegalNoticeChargesTableOfContentsProps {
  sections?: TOCSection[];
}

export default function LegalNoticeChargesTableOfContents({
  sections = LEGAL_NOTICE_CHARGES_TOC_SECTIONS,
}: LegalNoticeChargesTableOfContentsProps) {
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
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -90;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const activeSection = sections.find((s) => s.id === activeId) || sections[0];

  return (
    <>
      {/* Mobile Sticky Dropdown Bar */}
      <div className="lg:hidden sticky top-16 z-30 w-full bg-white/95 backdrop-blur-md border-y border-slate-200 shadow-sm py-2.5 px-4 mb-6">
        <div className="relative" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between px-3.5 py-2 text-xs font-bold text-slate-800 bg-slate-100 hover:bg-slate-200/80 rounded-lg border border-slate-200 transition-colors"
            aria-expanded={isOpen}
            aria-label="Table of Contents Navigation"
          >
            <span className="flex items-center gap-2 truncate">
              <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
              <span className="text-slate-500 font-medium">Jump to:</span>
              <span className="truncate text-slate-900">{activeSection?.label}</span>
            </span>
            <svg
              className={`w-4 h-4 text-slate-500 transition-transform duration-200 shrink-0 ${
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
            <div className="absolute top-full left-0 right-0 mt-1.5 bg-white rounded-xl shadow-xl border border-slate-200 py-2 max-h-72 overflow-y-auto z-50">
              {sections.map((section) => {
                const isActive = activeId === section.id;
                return (
                  <button
                    key={section.id}
                    type="button"
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full text-left px-4 py-2 text-xs font-semibold flex items-center gap-2 transition-colors ${
                      isActive
                        ? "text-[#DC2626] bg-red-50/70 border-l-4 border-[#DC2626]"
                        : "text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    <span className="truncate">{section.label}</span>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Desktop Sticky Sidebar */}
      <aside
        aria-label="Table of contents"
        className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-24 self-start"
      >
        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
          <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100">
            <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
            <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-900">
              Pricing Navigation
            </h2>
          </div>

          <nav className="space-y-1">
            {sections.map((section) => {
              const isActive = activeId === section.id;
              return (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-xs font-semibold transition-all flex items-center justify-between group ${
                    isActive
                      ? "text-[#DC2626] bg-red-50 font-bold border-l-2 border-[#DC2626]"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  <span className="truncate">{section.label}</span>
                  <span
                    className={`text-[10px] font-mono transition-opacity ${
                      isActive ? "text-[#DC2626] opacity-100" : "text-slate-400 opacity-0 group-hover:opacity-100"
                    }`}
                  >
                    →
                  </span>
                </button>
              );
            })}
          </nav>

          <div className="mt-6 pt-4 border-t border-slate-100">
            <div className="rounded-xl bg-slate-50 p-3 border border-slate-100">
              <p className="text-[11px] font-bold text-slate-800">Need quick legal advice?</p>
              <p className="text-[10px] text-slate-500 mt-0.5 leading-relaxed">
                Flat ₹999 notice service with advocate drafting and email + WhatsApp delivery. Speed Post optional.
              </p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
