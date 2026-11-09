"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const GYM_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-overview", label: "OVERVIEW" },
  { id: "heading-myth-vs-fact", label: "MYTH VS FACT" },
  { id: "heading-case-digest", label: "COURT PRECEDENTS" },
  { id: "heading-problem-picker", label: "DISPUTE SCENARIOS" },
  { id: "heading-escalation-flow", label: "RESOLUTION RAIL" },
  { id: "heading-playbook", label: "5-STEP PLAYBOOK" },
  { id: "heading-benchmark-table", label: "STATUTORY BENCHMARKS" },
  { id: "heading-worked-example", label: "WORKED EXAMPLE" },
  { id: "heading-evidence-checklist", label: "EVIDENCE CHECKLIST" },
  { id: "heading-notice-clauses", label: "SAMPLE CLAUSES" },
  { id: "heading-faqs", label: "FAQ" },
  { id: "heading-sources", label: "LEGAL REFERENCES" },
];

interface GymTableOfContentsProps {
  sections?: TOCSection[];
}

export default function GymTableOfContents({
  sections = GYM_TOC_SECTIONS,
}: GymTableOfContentsProps) {
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
      const offset = 90;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
      setActiveId(id);
      setIsOpen(false);
    }
  };

  const activeLabel = sections.find((s) => s.id === activeId)?.label || "NAVIGATION";

  return (
    <>
      {/* Mobile Sticky Dropdown Navigation Header */}
      <div className="lg:hidden sticky top-16 z-30 w-full bg-slate-900/95 backdrop-blur-md border-b border-slate-800 px-4 py-2.5 shadow-md">
        <div className="relative" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between px-3.5 py-2 text-xs font-semibold text-slate-200 bg-slate-800 rounded-lg border border-slate-700 active:bg-slate-750 transition-colors"
            aria-expanded={isOpen}
            aria-label="Table of Contents Navigation"
          >
            <span className="flex items-center gap-2 truncate">
              <span className="inline-block w-2 h-2 rounded-full bg-red-500 animate-pulse flex-shrink-0" />
              <span className="text-slate-400 font-normal">Jump to:</span>
              <span className="font-bold text-white truncate">{activeLabel}</span>
            </span>
            <svg
              className={`w-4 h-4 text-slate-400 transform transition-transform duration-200 ml-2 flex-shrink-0 ${
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
            <div className="absolute top-full left-0 right-0 mt-1.5 max-h-72 overflow-y-auto bg-slate-900 border border-slate-700 rounded-xl shadow-2xl py-1.5 z-40">
              {sections.map((s, idx) => {
                const isActive = activeId === s.id;
                return (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => scrollToSection(s.id)}
                    className={`w-full text-left px-4 py-2 text-xs font-medium flex items-center justify-between transition-colors ${
                      isActive
                        ? "text-red-400 bg-red-950/40 font-bold border-l-2 border-red-500"
                        : "text-slate-300 hover:bg-slate-800/80"
                    }`}
                  >
                    <span>
                      {idx + 1}. {s.label}
                    </span>
                    {isActive && (
                      <span className="text-[10px] text-red-400 uppercase tracking-wider font-mono">
                        Active
                      </span>
                    )}
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
        className="hidden lg:block w-64 xl:w-72 flex-shrink-0 sticky top-24 self-start bg-white rounded-2xl border border-slate-200 shadow-sm p-5 space-y-4"
      >
        <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
          <div className="w-2.5 h-2.5 rounded-full bg-red-600" />
          <h2 className="text-xs font-black uppercase tracking-wider text-slate-800">
            Document Roadmap
          </h2>
        </div>

        <nav className="space-y-1">
          {sections.map((s, idx) => {
            const isActive = activeId === s.id;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => scrollToSection(s.id)}
                className={`w-full text-left px-3 py-2 rounded-lg text-xs transition-all flex items-center justify-between group ${
                  isActive
                    ? "bg-red-50 text-red-700 font-bold shadow-xs border-l-3 border-red-600"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900 font-medium"
                }`}
              >
                <span className="truncate">
                  <span className="font-mono text-[10px] text-slate-400 mr-1.5 group-hover:text-red-500">
                    {String(idx + 1).padStart(2, "0")}.
                  </span>
                  {s.label}
                </span>
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600 flex-shrink-0" />
                )}
              </button>
            );
          })}
        </nav>

        <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500 space-y-2">
          <div className="flex items-center gap-1.5 text-emerald-700 font-semibold">
            <svg className="w-3.5 h-3.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span>CPA 2019 Section 2(46)</span>
          </div>
          <p className="leading-tight text-slate-400">
            Unfair one-sided contracts &amp; Dark Patterns Guidelines 2023 protected.
          </p>
        </div>
      </aside>
    </>
  );
}
