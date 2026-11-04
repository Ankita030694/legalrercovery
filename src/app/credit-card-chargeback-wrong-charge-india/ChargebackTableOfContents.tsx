"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const CHARGEBACK_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-answer-box", label: "QUICK SUMMARY" },
  { id: "heading-scenarios", label: "SCENARIO MATRIX" },
  { id: "heading-key-facts", label: "KEY STATUTORY FACTS" },
  { id: "heading-money-flow", label: "CHARGEBACK WORKFLOW" },
  { id: "heading-legal-basis", label: "LEGAL BASIS & RBI RULES" },
  { id: "heading-step-by-step", label: "HOW TO FILE CHARGEBACK" },
  { id: "heading-remedy-playbook", label: "BANK ESCALATION RAIL" },
  { id: "heading-mistakes-to-avoid", label: "MISTAKES TO AVOID" },
  { id: "heading-worked-example", label: "REAL-LIFE CASE STUDY" },
  { id: "heading-case-citations", label: "COURT PRECEDENTS" },
  { id: "heading-evidence-checklist", label: "EVIDENCE CHECKLIST" },
  { id: "heading-dispute-template", label: "DISPUTE LETTER FORMAT" },
  { id: "heading-faqs", label: "FREQUENT QUESTIONS" },
  { id: "heading-sources", label: "LEGAL REFERENCES" },
];

interface ChargebackTableOfContentsProps {
  sections?: TOCSection[];
}

export default function ChargebackTableOfContents({
  sections = CHARGEBACK_TOC_SECTIONS,
}: ChargebackTableOfContentsProps) {
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
        const section = document.getElementById(sections[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveId(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
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

  const activeLabel = sections.find((s) => s.id === activeId)?.label || "TABLE OF CONTENTS";

  return (
    <>
      {/* Desktop Sticky Sidebar */}
      <nav
        aria-label="Table of contents"
        className="hidden lg:block sticky top-24 bg-white rounded-xl border border-slate-200 p-4 shadow-sm"
      >
        <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100">
          <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
          </svg>
          <span className="text-xs font-bold uppercase tracking-wider text-slate-700">On This Guide</span>
        </div>
        <ul className="space-y-1 text-xs">
          {sections.map((section) => {
            const isActive = activeId === section.id;
            return (
              <li key={section.id}>
                <button
                  type="button"
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left px-2.5 py-1.5 rounded transition-colors cursor-pointer ${
                    isActive
                      ? "bg-blue-50 text-blue-700 font-semibold border-l-2 border-blue-600"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  {section.label}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Mobile Floating Dropdown Pill */}
      <div className="lg:hidden fixed bottom-6 right-4 z-40" ref={dropdownRef}>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle contents menu"
          className="flex items-center gap-2 bg-slate-900 text-white text-xs font-semibold px-4 py-2.5 rounded-full shadow-lg border border-slate-700 cursor-pointer active:scale-95 transition-transform"
        >
          <svg className="w-3.5 h-3.5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
          </svg>
          <span className="max-w-[140px] truncate">{activeLabel}</span>
          <svg
            className={`w-3 h-3 text-slate-400 transition-transform ${isOpen ? "rotate-180" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {isOpen && (
          <div className="absolute bottom-12 right-0 w-64 max-h-80 overflow-y-auto bg-white rounded-xl shadow-2xl border border-slate-200 p-2 text-xs">
            <div className="px-2 py-1.5 font-bold text-slate-800 border-b border-slate-100 uppercase tracking-wider text-[11px]">
              Jump to section
            </div>
            <ul className="mt-1 space-y-0.5">
              {sections.map((section) => (
                <li key={section.id}>
                  <button
                    type="button"
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full text-left px-2 py-1.5 rounded transition-colors ${
                      activeId === section.id
                        ? "bg-blue-50 text-blue-700 font-semibold"
                        : "text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    {section.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
