"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const NOTICE_CALCULATOR_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-overview", label: "LEGAL BASELINE" },
  { id: "heading-calculator", label: "SPLIT CALCULATOR" },
  { id: "heading-formula", label: "FORMULA & DIVISORS" },
  { id: "heading-contract-matrix", label: "CONTRACT MATRIX" },
  { id: "heading-court-rulings", label: "COURT PRECEDENTS" },
  { id: "heading-worked-example", label: "WORKED CASE STUDY" },
  { id: "heading-limits", label: "STATUTORY LIMITS" },
  { id: "heading-escalation", label: "ESCALATION PLAYBOOK" },
  { id: "heading-evidence", label: "EVIDENCE CHECKLIST" },
  { id: "heading-faqs", label: "FAQ" },
  { id: "heading-sources", label: "PRIMARY SOURCES" },
];

interface NoticePeriodCalculatorTOCProps {
  sections?: TOCSection[];
}

export default function NoticePeriodCalculatorTOC({
  sections = NOTICE_CALCULATOR_TOC_SECTIONS,
}: NoticePeriodCalculatorTOCProps) {
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
      const offset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

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
      {/* Mobile Sticky Dropdown Header */}
      <div className="lg:hidden sticky top-16 z-30 w-full mb-6" ref={dropdownRef}>
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-2.5 shadow-xl">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between px-3 py-2 text-xs font-bold text-slate-200 bg-slate-800/80 rounded-lg hover:bg-slate-800 transition-colors"
            aria-expanded={isOpen}
          >
            <span className="flex items-center gap-2 truncate">
              <span className="w-2 h-2 rounded-full bg-[#DC2626] animate-pulse shrink-0" />
              <span className="text-slate-400 font-normal uppercase text-[10px] tracking-wider">
                Section:
              </span>
              <span className="truncate text-white">{activeSection?.label}</span>
            </span>
            <span className="text-slate-400 text-xs ml-2">
              {isOpen ? "▲" : "▼"}
            </span>
          </button>

          {isOpen && (
            <div className="mt-2 pt-2 border-t border-slate-800 max-h-64 overflow-y-auto space-y-1">
              {sections.map((section) => {
                const isActive = activeId === section.id;
                return (
                  <button
                    key={section.id}
                    type="button"
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-xs font-semibold transition-colors flex items-center justify-between ${
                      isActive
                        ? "bg-[#DC2626] text-white"
                        : "text-slate-300 hover:bg-slate-800/60"
                    }`}
                  >
                    <span>{section.label}</span>
                    {isActive && <span className="text-[10px] font-black">●</span>}
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
        className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start space-y-4"
      >
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
          <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100">
            <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-800">
              Page Navigation
            </h3>
          </div>

          <nav className="space-y-1" aria-label="Sections list">
            {sections.map((section) => {
              const isActive = activeId === section.id;
              return (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left px-3 py-2 rounded-xl text-xs font-bold transition-all duration-150 flex items-center justify-between group cursor-pointer ${
                    isActive
                      ? "bg-slate-900 text-white shadow-xs"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  <span className="truncate">{section.label}</span>
                  <span
                    className={`text-[10px] transition-transform ${
                      isActive
                        ? "text-[#DC2626] font-black"
                        : "text-slate-300 group-hover:text-slate-500"
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
        <div className="bg-slate-900 text-white rounded-2xl p-4 border border-slate-800 shadow-md">
          <p className="text-[11px] font-extrabold uppercase tracking-wider text-red-400 mb-1">
            Facing Unjust Recovery?
          </p>
          <p className="text-xs text-slate-300 leading-relaxed mb-3">
            If HR has withheld your experience letter or deducted notice pay on Gross CTC, send a formal advocate notice.
          </p>
          <button
            type="button"
            onClick={() => scrollToSection("heading-cta-block")}
            className="w-full text-center py-2 px-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-bold text-xs transition-colors cursor-pointer"
          >
            Review Legal Notice Process
          </button>
        </div>
      </aside>
    </>
  );
}
