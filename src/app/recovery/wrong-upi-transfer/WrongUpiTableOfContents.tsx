"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const WRONG_UPI_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-answer-box", label: "INSTANT ANSWER" },
  { id: "heading-comparison-matrix", label: "RECOVERY ROUTES COMPARISON" },
  { id: "heading-user-personas", label: "WHICH ROUTE IS RIGHT FOR YOU" },
  { id: "heading-route-npci-bank", label: "ROUTE 1: NPCI & BANK DISPUTE" },
  { id: "heading-route-legal-notice", label: "ROUTE 2: LEGAL NOTICE (SEC 72)" },
  { id: "heading-route-rbi-ombudsman", label: "ROUTE 3: RBI OMBUDSMAN" },
  { id: "heading-route-police-court", label: "ROUTE 4: BNS 316 / CIVIL SUIT" },
  { id: "heading-process-flowchart", label: "VISUAL RECOVERY FLOWCHART" },
  { id: "heading-worked-example", label: "WORKED EXAMPLE (₹65,000 RECOVERED)" },
  { id: "heading-evidence-checklist", label: "EVIDENCE CHECKLIST" },
  { id: "heading-faqs", label: "FREQUENTLY ASKED QUESTIONS" },
  { id: "heading-sources", label: "PRIMARY SOURCES & LEGAL AUTHORITIES" },
];

interface WrongUpiTableOfContentsProps {
  sections?: TOCSection[];
}

export default function WrongUpiTableOfContents({
  sections = WRONG_UPI_TOC_SECTIONS,
}: WrongUpiTableOfContentsProps) {
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
        if (section) {
          const top = section.offsetTop;
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
      const yOffset = -90;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const activeLabel = sections.find((s) => s.id === activeId)?.label || "TABLE OF CONTENTS";

  return (
    <>
      {/* Mobile Sticky Dropdown Bar */}
      <div className="lg:hidden sticky top-16 z-30 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 py-2.5 px-4 shadow-sm">
        <div className="relative" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between px-4 py-2 text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 rounded-lg border border-slate-300 dark:border-slate-700 focus:outline-none"
            aria-expanded={isOpen}
            aria-label="Table of Contents menu"
          >
            <span className="truncate pr-2">Jump to: {activeLabel}</span>
            <svg
              className={`w-4 h-4 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isOpen && (
            <div className="absolute top-full left-0 right-0 mt-1.5 bg-white dark:bg-slate-900 rounded-xl shadow-xl border border-slate-200 dark:border-slate-800 py-2 max-h-72 overflow-y-auto z-40">
              {sections.map((section) => (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left px-4 py-2 text-xs uppercase tracking-wider font-medium transition-colors ${
                    activeId === section.id
                      ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50 font-bold"
                      : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800"
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Desktop Sticky Sidebar Navigation */}
      <aside
        className="hidden lg:block w-72 shrink-0 self-start sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto pr-3 py-2 text-xs"
        aria-label="Table of contents"
      >
        <div className="font-bold tracking-wider text-slate-900 dark:text-white uppercase mb-3 px-3 flex items-center gap-2">
          <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
          </svg>
          <span>Recovery Blueprint</span>
        </div>
        <nav className="space-y-1">
          {sections.map((section) => {
            const isActive = activeId === section.id;
            return (
              <button
                key={section.id}
                type="button"
                onClick={() => scrollToSection(section.id)}
                className={`w-full text-left px-3 py-2 rounded-lg font-medium tracking-wide uppercase transition-all duration-150 flex items-center justify-between text-[11px] ${
                  isActive
                    ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 font-bold shadow-xs border-l-3 border-blue-600"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-100/60 dark:hover:bg-slate-800/60"
                }`}
              >
                <span className="truncate">{section.label}</span>
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 shrink-0 ml-1"></span>
                )}
              </button>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
