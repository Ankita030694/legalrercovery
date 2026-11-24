"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const BACKDOOR_HIRING_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-backdoor-hiring-crisis", label: "THE BACKDOOR HIRING CRISIS" },
  { id: "heading-detection-audit-trail", label: "DIGITAL DETECTION AUDIT" },
  { id: "heading-statutory-enforcement-matrix", label: "STATUTORY RECOVERY MATRIX" },
  { id: "heading-operational-decision-tree", label: "OPERATIONAL DECISION TREE" },
  { id: "heading-commercial-circumvention-scenarios", label: "CIRCUMVENTION SCENARIOS" },
  { id: "heading-48hr-duplicate-rule", label: "48-HOUR DUPLICATE RULE" },
  { id: "heading-fee-and-penalty-math", label: "FEE & PENALTY CALCULATION" },
  { id: "heading-landmark-court-precedents", label: "LANDMARK COURT PRECEDENTS" },
  { id: "heading-client-defense-preemption", label: "CLIENT DEFENSE PRE-EMPTION" },
  { id: "heading-bsa-evidentiary-dossier", label: "BSA S.63 EVIDENCE DOSSIER" },
  { id: "heading-recovery-faqs", label: "FREQUENTLY ASKED QUESTIONS" },
  { id: "heading-statutory-sources", label: "STATUTORY CITATIONS" },
];

interface BackdoorHiringTableOfContentsProps {
  sections?: TOCSection[];
}

export default function BackdoorHiringTableOfContents({
  sections = BACKDOOR_HIRING_TOC_SECTIONS,
}: BackdoorHiringTableOfContentsProps) {
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

  return (
    <>
      {/* Mobile Sticky Bar */}
      <div className="lg:hidden sticky top-20 z-30 bg-slate-50/95 backdrop-blur-sm border-b border-slate-200 py-3 px-4 -mx-4 sm:-mx-6 mb-6">
        <div className="relative" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between px-4 py-2.5 bg-white border border-slate-300 rounded-xl text-xs font-semibold text-slate-800 shadow-xs active:bg-slate-100"
            aria-expanded={isOpen}
          >
            <span className="truncate">
              TOC: {sections.find((s) => s.id === activeId)?.label || "NAVIGATION"}
            </span>
            <svg
              className={`w-4 h-4 ml-2 transition-transform duration-200 shrink-0 text-slate-500 ${
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
            <div className="absolute left-0 right-0 mt-2 bg-white border border-slate-200 rounded-xl shadow-xl z-50 max-h-80 overflow-y-auto p-1.5 space-y-1">
              {sections.map((section) => (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                    activeId === section.id
                      ? "bg-[#DC2626] text-white font-bold"
                      : "text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Desktop Sticky Sidebar */}
      <aside className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start">
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
          <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-3">
            Navigation Index
          </p>
          <nav className="space-y-1">
            {sections.map((section) => (
              <button
                key={section.id}
                type="button"
                onClick={() => scrollToSection(section.id)}
                className={`w-full text-left px-3 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all duration-150 truncate block ${
                  activeId === section.id
                    ? "bg-[#DC2626] text-white shadow-xs"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                {section.label}
              </button>
            ))}
          </nav>
          <div className="mt-6 pt-4 border-t border-slate-100">
            <span className="block text-[11px] font-semibold text-slate-500 mb-1">
              Need Direct Legal Guidance?
            </span>
            <p className="text-[11px] text-slate-400 leading-normal">
              Fact-verified notice served with electronic delivery certificates under BSA 2023.
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}
