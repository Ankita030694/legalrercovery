"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const SALARY_FNF_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-overview", label: "OVERVIEW & HEADLINES" },
  { id: "heading-methodology", label: "METHODOLOGY" },
  { id: "heading-data-charts", label: "DATA CHARTS" },
  { id: "heading-sector-benchmarks", label: "SECTOR BENCHMARKS" },
  { id: "heading-dispute-causes", label: "DISPUTE REASONS" },
  { id: "heading-problem-picker", label: "SCENARIOS & FIXES" },
  { id: "heading-myth-vs-fact", label: "MYTH VS FACT" },
  { id: "heading-case-digest", label: "LEGAL PRECEDENTS" },
  { id: "heading-statutory-rules", label: "WAGES CODE RULES" },
  { id: "heading-playbook", label: "5-STEP NOTICE PLAYBOOK" },
  { id: "heading-checklist", label: "EVIDENCE CHECKLIST" },
  { id: "heading-faqs", label: "FAQ" },
  { id: "heading-download-citation", label: "CITE & DOWNLOAD" },
  { id: "heading-sources", label: "PRIMARY SOURCES" },
];

interface SalaryFnFReportTableOfContentsProps {
  sections?: TOCSection[];
}

export default function SalaryFnFReportTableOfContents({
  sections = SALARY_FNF_TOC_SECTIONS,
}: SalaryFnFReportTableOfContentsProps) {
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

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -90;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveId(id);
      setIsOpen(false);
    }
  };

  const activeSection = sections.find((s) => s.id === activeId) || sections[0];

  return (
    <>
      {/* Mobile Sticky Navigation Pill / Dropdown */}
      <div className="lg:hidden sticky top-20 z-30 w-full mb-6" ref={dropdownRef}>
        <div className="bg-white/95 backdrop-blur-md border border-slate-200 rounded-xl shadow-md p-2">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between px-3 py-2 text-xs font-bold text-slate-800 bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors border border-slate-200"
            aria-expanded={isOpen}
            aria-label="Table of contents menu"
          >
            <span className="flex items-center gap-2 truncate">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse flex-shrink-0" />
              <span className="text-slate-500 uppercase tracking-wider text-[10px]">Jump to:</span>
              <span className="truncate text-slate-900 font-extrabold">{activeSection?.label}</span>
            </span>
            <svg
              className={`w-4 h-4 text-slate-500 transition-transform duration-200 flex-shrink-0 ml-2 ${
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
            <div className="mt-2 py-1 max-h-72 overflow-y-auto border-t border-slate-100 divide-y divide-slate-50">
              {sections.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => scrollTo(s.id)}
                  className={`w-full text-left px-3 py-2 text-xs font-semibold transition-colors flex items-center justify-between ${
                    activeId === s.id
                      ? "bg-red-50 text-red-700 font-bold"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  <span className="truncate">{s.label}</span>
                  {activeId === s.id && (
                    <span className="w-1.5 h-1.5 rounded-full bg-red-600 ml-2 flex-shrink-0" />
                  )}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Desktop Sticky Sidebar */}
      <aside
        aria-label="Table of contents"
        className="hidden lg:block w-64 xl:w-72 flex-shrink-0 sticky top-28 self-start space-y-4"
      >
        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
          <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100">
            <span className="w-2 h-2 rounded-full bg-red-600" />
            <h2 className="text-xs font-black uppercase tracking-wider text-slate-900">
              Report Index
            </h2>
          </div>

          <nav className="space-y-1">
            {sections.map((s) => {
              const isActive = activeId === s.id;
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => scrollTo(s.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-xs font-semibold transition-all duration-150 flex items-center justify-between group ${
                    isActive
                      ? "bg-red-50 text-red-700 font-bold border-l-2 border-red-600 shadow-xs"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  <span className="truncate">{s.label}</span>
                  <svg
                    className={`w-3.5 h-3.5 transition-transform ${
                      isActive
                        ? "text-red-600 translate-x-0"
                        : "text-slate-300 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              );
            })}
          </nav>

          <div className="mt-5 pt-4 border-t border-slate-100">
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80">
              <span className="text-[10px] font-black uppercase tracking-wider text-slate-500 block mb-1">
                Data Verification
              </span>
              <p className="text-[11px] text-slate-600 leading-normal">
                Based on 3,420 legal notice recoveries under Section 17(2) Code on Wages (2025–2026).
              </p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
