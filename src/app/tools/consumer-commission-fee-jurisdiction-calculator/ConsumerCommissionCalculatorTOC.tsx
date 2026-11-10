"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const CONSUMER_CALCULATOR_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-calculator", label: "FEE CALCULATOR" },
  { id: "heading-how-calculated", label: "HOW IT'S CALCULATED" },
  { id: "heading-fee-matrix", label: "FEE SLAB TABLE" },
  { id: "heading-pecuniary-evolution", label: "2021 LIMIT REFORMS" },
  { id: "heading-territorial-rules", label: "TERRITORIAL JURISDICTION" },
  { id: "heading-flowchart", label: "FORUM FLOWCHART" },
  { id: "heading-worked-examples", label: "WORKED EXAMPLES" },
  { id: "heading-evidence-checklist", label: "E-JAGRITI CHECKLIST" },
  { id: "heading-case-citations", label: "CASE CITATIONS" },
  { id: "heading-faqs", label: "FAQS" },
  { id: "heading-sources", label: "LEGAL REFERENCES" },
];

interface ConsumerCommissionCalculatorTOCProps {
  sections?: TOCSection[];
}

export default function ConsumerCommissionCalculatorTOC({
  sections = CONSUMER_CALCULATOR_TOC_SECTIONS,
}: ConsumerCommissionCalculatorTOCProps) {
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
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -100;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveId(id);
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Sticky Dropdown Navigation */}
      <div className="lg:hidden sticky top-20 z-40 w-full mb-6" ref={dropdownRef}>
        <div className="bg-slate-900 border border-slate-700/80 rounded-xl shadow-xl overflow-hidden backdrop-blur-md">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="w-full px-4 py-3 flex items-center justify-between text-left text-sm font-semibold text-white focus:outline-none focus:ring-2 focus:ring-red-500/50"
            aria-expanded={isOpen}
            aria-label="Toggle table of contents"
          >
            <div className="flex items-center gap-2 truncate">
              <span className="w-2 h-2 rounded-full bg-red-500 flex-shrink-0 animate-pulse" />
              <span className="text-xs uppercase text-slate-400 tracking-wider font-bold">
                Jump to:
              </span>
              <span className="text-white truncate font-medium">
                {sections.find((s) => s.id === activeId)?.label || "Select Section"}
              </span>
            </div>
            <svg
              className={`w-4 h-4 text-slate-300 transition-transform duration-200 flex-shrink-0 ${
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
            <div className="border-t border-slate-700/80 max-h-72 overflow-y-auto py-2 bg-slate-900/95 divide-y divide-slate-800/60">
              {sections.map((section) => {
                const isActive = activeId === section.id;
                return (
                  <button
                    key={section.id}
                    type="button"
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full text-left px-4 py-2.5 text-xs transition-colors flex items-center gap-2.5 ${
                      isActive
                        ? "text-red-400 font-bold bg-red-950/40"
                        : "text-slate-300 hover:text-white hover:bg-slate-800/60"
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                        isActive ? "bg-red-400" : "bg-slate-600"
                      }`}
                    />
                    <span className="truncate">{section.label}</span>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Desktop Sticky Sidebar Navigation */}
      <aside
        aria-label="Table of contents"
        className="hidden lg:block w-64 xl:w-72 flex-shrink-0 sticky top-28 self-start"
      >
        <div className="rounded-2xl border border-slate-200/90 bg-white p-5 shadow-sm">
          <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100">
            <span className="w-2.5 h-2.5 rounded-full bg-red-600" />
            <p className="text-xs font-black uppercase tracking-wider text-slate-900">
              Page Contents
            </p>
          </div>
          <nav className="space-y-1">
            {sections.map((section) => {
              const isActive = activeId === section.id;
              return (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-xs font-semibold transition-all duration-150 flex items-center gap-2.5 cursor-pointer ${
                    isActive
                      ? "text-red-600 bg-red-50 font-bold border-l-2 border-red-600 shadow-xs"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full flex-shrink-0 transition-colors ${
                      isActive ? "bg-red-600" : "bg-slate-300"
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
