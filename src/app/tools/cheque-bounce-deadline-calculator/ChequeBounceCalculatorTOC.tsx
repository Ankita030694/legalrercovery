"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const CHEQUE_BOUNCE_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-calculator", label: "STEP WIZARD" },
  { id: "heading-statutory-table", label: "DEADLINE BENCHMARKS" },
  { id: "heading-legal-basis", label: "LEGAL METHOD & RULES" },
  { id: "heading-flowchart", label: "TIMELINE FLOWCHART" },
  { id: "heading-edge-cases", label: "REASONS & EDGE CASES" },
  { id: "heading-case-study", label: "WORKED CASE STUDY" },
  { id: "heading-evidence", label: "EVIDENCE CHECKLIST" },
  { id: "heading-faqs", label: "FAQ" },
  { id: "heading-sources", label: "STATUTORY REFS" },
];

interface ChequeBounceCalculatorTOCProps {
  sections?: TOCSection[];
}

export default function ChequeBounceCalculatorTOC({
  sections = CHEQUE_BOUNCE_TOC_SECTIONS,
}: ChequeBounceCalculatorTOCProps) {
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
      const yOffset = -90;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const activeSection = sections.find((s) => s.id === activeId) || sections[0];

  return (
    <>
      {/* Mobile Sticky Dropdown Header */}
      <div className="lg:hidden w-full sticky top-16 z-30 mb-6 bg-slate-900/95 backdrop-blur-md border-y border-slate-800 py-3 px-4 shadow-lg">
        <div className="relative" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-left text-xs font-bold text-slate-100 shadow-xs cursor-pointer"
            aria-expanded={isOpen}
            aria-label="Table of Contents Menu"
          >
            <div className="flex items-center gap-2 truncate">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse shrink-0" />
              <span className="text-[10px] uppercase tracking-wider text-slate-400">Jump to:</span>
              <span className="truncate text-white">{activeSection?.label}</span>
            </div>
            <span className="text-slate-400 text-xs ml-2">▼</span>
          </button>

          {isOpen && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-slate-900 border border-slate-700 rounded-xl shadow-2xl overflow-hidden z-40 max-h-80 overflow-y-auto">
              <div className="py-1">
                {sections.map((section) => {
                  const isActive = activeId === section.id;
                  return (
                    <button
                      key={section.id}
                      type="button"
                      onClick={() => scrollToSection(section.id)}
                      className={`w-full text-left px-4 py-2.5 text-xs font-semibold flex items-center justify-between transition-colors cursor-pointer ${
                        isActive
                          ? "bg-red-950/70 text-red-400 font-bold border-l-4 border-red-500"
                          : "text-slate-300 hover:bg-slate-800 hover:text-white"
                      }`}
                    >
                      <span>{section.label}</span>
                      {isActive && <span className="text-[10px] text-red-400 font-bold">ACTIVE</span>}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Desktop Sticky Sidebar */}
      <aside
        className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start bg-white rounded-2xl border border-slate-200 p-5 shadow-sm"
        aria-label="Table of contents"
      >
        <div className="pb-3 mb-4 border-b border-slate-100 flex items-center justify-between">
          <p className="text-xs font-black uppercase tracking-wider text-slate-900 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-600" />
            Calculator Outline
          </p>
          <span className="text-[10px] font-bold text-slate-500 uppercase">§138 Guide</span>
        </div>

        <nav className="space-y-1">
          {sections.map((section) => {
            const isActive = activeId === section.id;
            return (
              <button
                key={section.id}
                type="button"
                onClick={() => scrollToSection(section.id)}
                className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition-all flex items-center justify-between cursor-pointer ${
                  isActive
                    ? "bg-red-50 text-red-700 font-bold border-l-3 border-[#DC2626]"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                <span className="truncate">{section.label}</span>
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] shrink-0 ml-2" />
                )}
              </button>
            );
          })}
        </nav>

        <div className="mt-6 pt-4 border-t border-slate-100">
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-[11px] text-slate-600 space-y-1.5">
            <p className="font-bold text-slate-900 flex items-center gap-1.5">
              <span className="text-red-600">⚠</span> 30-Day Hard Limit
            </p>
            <p className="text-[10px] leading-relaxed">
              Delay in sending the Section 138 notice beyond 30 days is fatal under Supreme Court precedent and cannot be condoned by any court.
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}
