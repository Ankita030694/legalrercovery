"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const FURNITURE_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-overview", label: "OVERVIEW" },
  { id: "heading-scenarios", label: "SCENARIO MATRIX" },
  { id: "heading-statutory-table", label: "BENCHMARKS TABLE" },
  { id: "heading-legal-basis", label: "STATUTORY GROUNDS" },
  { id: "heading-resolution-rail", label: "5-STEP ESCALATION" },
  { id: "heading-process-flow", label: "REFUND WORKFLOW" },
  { id: "heading-case-digest", label: "COURT PRECEDENTS" },
  { id: "heading-problem-picker", label: "ISSUE RESOLVER" },
  { id: "heading-worked-example", label: "WORKED EXAMPLE" },
  { id: "heading-mistakes-to-avoid", label: "MISTAKES TO AVOID" },
  { id: "heading-evidence-checklist", label: "EVIDENCE CHECKLIST" },
  { id: "heading-faqs", label: "FAQ" },
  { id: "heading-sources", label: "STATUTORY REFS" },
];

interface FurnitureTableOfContentsProps {
  sections?: TOCSection[];
}

export default function FurnitureTableOfContents({
  sections = FURNITURE_TOC_SECTIONS,
}: FurnitureTableOfContentsProps) {
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
      const yOffset = -100;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveId(id);
      setIsOpen(false);
    }
  };

  const activeSection = sections.find((s) => s.id === activeId) || sections[0];

  return (
    <>
      {/* Mobile Sticky Floating Bar with Dropdown */}
      <div className="lg:hidden sticky top-16 z-30 w-full mb-6" ref={dropdownRef}>
        <div className="bg-slate-900/95 backdrop-blur-md border border-slate-800 rounded-xl shadow-xl p-2.5 mx-auto max-w-full">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 min-w-0">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse shrink-0" />
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 shrink-0">
                ON THIS PAGE:
              </span>
              <span className="text-xs font-semibold text-slate-100 truncate">
                {activeSection?.label}
              </span>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors shrink-0 flex items-center gap-1.5"
              aria-expanded={isOpen}
              aria-label="Toggle table of contents menu"
            >
              <span>Contents</span>
              <svg
                className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          {/* Mobile Accordion Dropdown Content */}
          {isOpen && (
            <div className="mt-2.5 pt-2.5 border-t border-slate-800/80 max-h-72 overflow-y-auto space-y-1">
              {sections.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => scrollTo(s.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition-colors flex items-center justify-between ${
                    activeId === s.id
                      ? "bg-[#DC2626] text-white font-bold"
                      : "text-slate-300 hover:bg-slate-800/60 hover:text-white"
                  }`}
                >
                  <span>{s.label}</span>
                  {activeId === s.id && (
                    <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                  )}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Desktop Sticky Sidebar */}
      <aside
        aria-label="Table of Contents"
        className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start space-y-4"
      >
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100">
            <span className="w-2 h-2 rounded-full bg-red-600" />
            <p className="text-xs font-black uppercase tracking-wider text-slate-800">
              Guide Navigation
            </p>
          </div>

          <nav className="space-y-1" aria-label="Sections list">
            {sections.map((s) => {
              const isActive = activeId === s.id;
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => scrollTo(s.id)}
                  className={`w-full text-left px-3 py-2 rounded-xl text-xs transition-all duration-150 flex items-center justify-between group ${
                    isActive
                      ? "bg-slate-900 text-white font-bold shadow-sm"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 font-medium"
                  }`}
                >
                  <span className="truncate">{s.label}</span>
                  <span
                    className={`text-[10px] opacity-0 group-hover:opacity-100 transition-opacity ${
                      isActive ? "opacity-100 text-red-400" : "text-slate-400"
                    }`}
                  >
                    →
                  </span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Quick Help Card */}
        <div className="bg-slate-900 text-white rounded-2xl p-4 border border-slate-800 text-xs space-y-2">
          <p className="font-bold text-red-400 uppercase tracking-wider text-[10px]">
            Statutory Escalation
          </p>
          <p className="text-slate-300 leading-relaxed text-[11px]">
            Delivery delayed over 14 days or received damaged? Indian consumer courts award 100% refund with 9–12% interest and mental harassment damages under Section 2(11) CPA 2019.
          </p>
        </div>
      </aside>
    </>
  );
}
