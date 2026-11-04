"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const ATM_COMPENSATION_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-overview", label: "OVERVIEW" },
  { id: "heading-myth-vs-fact", label: "MYTH VS FACT" },
  { id: "heading-case-digest", label: "COURT PRECEDENTS" },
  { id: "heading-resolution-matrix", label: "ON-US VS OFF-US" },
  { id: "heading-escalation-flow", label: "RESOLUTION RAIL" },
  { id: "heading-playbook", label: "4-STEP PLAYBOOK" },
  { id: "heading-deadlines-table", label: "STATUTORY BENCHMARKS" },
  { id: "heading-problem-picker", label: "SCENARIOS & FIXES" },
  { id: "heading-worked-example", label: "WORKED EXAMPLE" },
  { id: "heading-evidence-checklist", label: "EVIDENCE CHECKLIST" },
  { id: "heading-faqs", label: "FAQ" },
  { id: "heading-sources", label: "STATUTORY REFS" },
];

interface AtmTableOfContentsProps {
  sections?: TOCSection[];
}

export default function AtmTableOfContents({
  sections = ATM_COMPENSATION_TOC_SECTIONS,
}: AtmTableOfContentsProps) {
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
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const activeLabel = sections.find((s) => s.id === activeId)?.label || "NAVIGATION";

  return (
    <>
      {/* Mobile Sticky Dropdown Navigation Bar */}
      <div className="lg:hidden sticky top-16 z-30 w-full bg-slate-900/95 backdrop-blur-md border-b border-slate-800 px-4 py-3 shadow-md">
        <div className="relative" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-left text-xs font-bold text-slate-100 shadow-sm transition-colors cursor-pointer"
            aria-expanded={isOpen}
            aria-label="Table of Contents Navigation"
          >
            <div className="flex items-center gap-2 truncate">
              <span className="text-[10px] uppercase font-black tracking-wider text-red-400 bg-red-950/70 border border-red-800/60 px-2 py-0.5 rounded">
                Section
              </span>
              <span className="truncate">{activeLabel}</span>
            </div>
            <svg
              className={`w-4 h-4 text-slate-400 transition-transform duration-200 shrink-0 ${isOpen ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isOpen && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-slate-900 border border-slate-700 rounded-xl shadow-2xl overflow-hidden max-h-[65vh] overflow-y-auto z-50 divide-y divide-slate-800">
              {sections.map((section) => {
                const isActive = activeId === section.id;
                return (
                  <button
                    key={section.id}
                    type="button"
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full text-left px-4 py-3 text-xs font-semibold flex items-center justify-between transition-colors ${
                      isActive
                        ? "bg-red-950/60 text-red-300 font-bold border-l-4 border-red-500"
                        : "text-slate-300 hover:bg-slate-800 hover:text-white"
                    }`}
                  >
                    <span>{section.label}</span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Desktop Sticky Sidebar Navigation */}
      <aside className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start">
        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
            <h3 className="text-xs font-black tracking-wider text-slate-900 uppercase">
              Page Navigation
            </h3>
            <span className="text-[10px] font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-full">
              RBI Rules
            </span>
          </div>

          <nav className="space-y-1" aria-label="Table of Contents">
            {sections.map((section) => {
              const isActive = activeId === section.id;
              return (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-xs font-semibold transition-all duration-150 flex items-center justify-between group cursor-pointer ${
                    isActive
                      ? "bg-red-50 text-red-700 font-bold border-l-2 border-[#DC2626]"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  <span className="truncate">{section.label}</span>
                  <span
                    className={`w-1.5 h-1.5 rounded-full transition-opacity ${
                      isActive ? "bg-red-600 opacity-100" : "opacity-0 group-hover:opacity-40 bg-slate-400"
                    }`}
                  />
                </button>
              );
            })}
          </nav>

          <div className="mt-5 pt-4 border-t border-slate-100">
            <div className="bg-slate-50 rounded-xl p-3 border border-slate-200">
              <p className="text-[11px] font-bold text-slate-800">
                Auto-Reversal Statutory TAT:
              </p>
              <p className="text-xs text-slate-600 mt-0.5 font-medium">
                T + 5 Days • ₹100/Day Penalty Beyond TAT
              </p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
