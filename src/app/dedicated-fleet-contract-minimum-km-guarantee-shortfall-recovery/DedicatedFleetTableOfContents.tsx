"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const DEDICATED_FLEET_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-overview", label: "STATUTORY OVERVIEW" },
  { id: "heading-contract-act-damages", label: "SECTION 73/74 STANDING CHARGES" },
  { id: "heading-court-precedents", label: "LANDMARK COURT PRECEDENTS" },
  { id: "heading-decision-tree", label: "DECISION TREE FLOWCHART" },
  { id: "heading-recovery-matrix", label: "RECOVERABLE DUES MATRIX" },
  { id: "heading-failure-scenarios", label: "4 COMMERCIAL SCENARIOS" },
  { id: "heading-worked-calculation", label: "WORKED 20-TRUCK LEDGER" },
  { id: "heading-bsa-evidence", label: "BSA S.63 TELEMATICS EVIDENCE" },
  { id: "heading-judicial-remedies", label: "ORDER 37 & MSMED REMEDIES" },
  { id: "heading-faqs", label: "FREQUENTLY ASKED QUESTIONS" },
  { id: "heading-statutory-sources", label: "STATUTORY CITATIONS" },
];

interface DedicatedFleetTableOfContentsProps {
  sections?: TOCSection[];
}

export default function DedicatedFleetTableOfContents({
  sections = DEDICATED_FLEET_TOC_SECTIONS,
}: DedicatedFleetTableOfContentsProps) {
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

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
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
      {/* Mobile Sticky Bar */}
      <div className="lg:hidden sticky top-20 z-30 bg-slate-50/95 backdrop-blur-sm border-b border-slate-200 py-3 px-4 -mx-4 sm:-mx-6 mb-4">
        <div className="relative" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between gap-2 px-4 py-2.5 bg-white border border-slate-300 rounded-xl text-xs font-semibold text-slate-800 shadow-sm"
            aria-expanded={isOpen}
            aria-label="Table of Contents Navigation"
          >
            <span className="flex items-center gap-2 truncate">
              <span className="w-2 h-2 rounded-full bg-[#DC2626] shrink-0" />
              <span className="text-slate-500 font-medium">On This Page:</span>
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
            <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-200 rounded-xl shadow-xl overflow-hidden z-40 max-h-72 overflow-y-auto">
              <div className="py-1">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    type="button"
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full text-left px-4 py-2.5 text-xs transition-colors flex items-center gap-2.5 ${
                      activeId === section.id
                        ? "bg-red-50 text-[#DC2626] font-bold"
                        : "text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                        activeId === section.id ? "bg-[#DC2626]" : "bg-slate-300"
                      }`}
                    />
                    <span className="truncate">{section.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Desktop Sticky Aside */}
      <aside
        className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start"
        aria-label="Document outline"
      >
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
          <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-200">
            <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
            <p className="text-xs font-black uppercase tracking-wider text-slate-800">
              Navigation Outline
            </p>
          </div>
          <nav className="space-y-1 max-h-[calc(100vh-180px)] overflow-y-auto pr-1">
            {sections.map((section) => {
              const isActive = activeId === section.id;
              return (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-xs transition-all flex items-center gap-2 ${
                    isActive
                      ? "bg-[#DC2626] text-white font-bold shadow-sm"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                      isActive ? "bg-white" : "bg-slate-400"
                    }`}
                  />
                  <span className="truncate">{section.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </aside>
    </>
  );
}
