"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const ARBITRAL_AWARD_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-overview", label: "EXECUTIVE SUMMARY" },
  { id: "heading-remedy-matrix", label: "4-RAIL COMPARISON MATRIX" },
  { id: "heading-statutory-hooks", label: "STATUTORY FRAMEWORK" },
  { id: "heading-court-precedents", label: "SUPREME COURT RULINGS" },
  { id: "heading-decision-flow", label: "ESCALATION WORKFLOW" },
  { id: "heading-scenario-tabs", label: "4 ENFORCEMENT SCENARIOS" },
  { id: "heading-worked-example", label: "WORKED ₹12.5 CR LEDGER" },
  { id: "heading-garnishee-order21", label: "ORDER XXI GARNISHEE FREEZE" },
  { id: "heading-evidence-checklist", label: "BSA S.63 DOCKET CHECKLIST" },
  { id: "heading-faqs", label: "FREQUENTLY ASKED QUESTIONS" },
  { id: "heading-sources", label: "STATUTORY SOURCES" },
];

interface ArbitralAwardExecutionTableOfContentsProps {
  sections?: TOCSection[];
}

export default function ArbitralAwardExecutionTableOfContents({
  sections = ARBITRAL_AWARD_TOC_SECTIONS,
}: ArbitralAwardExecutionTableOfContentsProps) {
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

      if (sections[0]) {
        setActiveId(sections[0].id);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -90;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveId(id);
      setIsOpen(false);
    }
  };

  const activeLabel = sections.find((s) => s.id === activeId)?.label || "TABLE OF CONTENTS";

  return (
    <>
      {/* Mobile Sticky Bar */}
      <div className="lg:hidden sticky top-20 z-30 bg-slate-50/95 backdrop-blur-sm border-b border-slate-200 py-3 px-4 -mx-4 sm:-mx-6 mb-6">
        <div className="relative" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-800 shadow-xs"
            aria-expanded={isOpen}
            aria-label="Toggle Table of Contents"
          >
            <span className="flex items-center gap-2 truncate">
              <span className="w-2 h-2 rounded-full bg-[#DC2626] shrink-0" />
              <span className="text-slate-500 uppercase font-semibold text-[10px]">TOC:</span>
              <span className="truncate">{activeLabel}</span>
            </span>
            <span
              className={`transform transition-transform duration-200 text-slate-400 font-black ${
                isOpen ? "rotate-180" : ""
              }`}
            >
              &darr;
            </span>
          </button>

          {isOpen && (
            <div className="absolute top-full left-0 right-0 mt-1.5 bg-white border border-slate-200 rounded-2xl shadow-xl py-2 max-h-72 overflow-y-auto z-40">
              {sections.map((section) => {
                const isActive = activeId === section.id;
                return (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    onClick={(e) => scrollToSection(e, section.id)}
                    className={`block px-4 py-2.5 text-xs transition-colors ${
                      isActive
                        ? "bg-red-50 text-[#DC2626] font-bold border-l-4 border-[#DC2626]"
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
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

      {/* Desktop Sticky Aside */}
      <aside
        aria-label="Table of contents"
        className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start"
      >
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
          <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100">
            <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
            <p className="text-[11px] font-black tracking-wider uppercase text-slate-400">
              NAVIGATION &bull; SECTION 36
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
                      ? "bg-[#DC2626] text-white font-bold shadow-xs translate-x-1"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 font-medium"
                  }`}
                >
                  {section.label}
                </a>
              );
            })}
          </nav>

          <div className="mt-5 pt-4 border-t border-slate-100">
            <a
              href="#heading-cta-block"
              className="block w-full py-2.5 text-center text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-colors shadow-xs"
            >
              Fast-Track Execution &rarr;
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}
