"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const LIMITATION_CALCULATOR_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-calculator", label: "CALCULATOR" },
  { id: "heading-legal-basis", label: "LEGAL METHOD & RULES" },
  { id: "heading-statutory-schedule", label: "STATUTORY SCHEDULE" },
  { id: "heading-revival-rules", label: "SEC 18 & 19 EXTENSIONS" },
  { id: "heading-flowchart", label: "CALCULATION FLOWCHART" },
  { id: "heading-worked-examples", label: "WORKED SCENARIOS" },
  { id: "heading-statutory-exceptions", label: "EXCEPTIONS & EXCLUSIONS" },
  { id: "heading-next-steps", label: "PRE-EXPIRY ACTION PLAN" },
  { id: "heading-case-law", label: "COURT PRECEDENTS" },
  { id: "heading-evidence", label: "EVIDENCE CHECKLIST" },
  { id: "heading-faqs", label: "FAQS" },
  { id: "heading-sources", label: "LEGAL REFERENCES" },
];

interface LimitationCalculatorTOCProps {
  sections?: TOCSection[];
}

export default function LimitationCalculatorTOC({
  sections = LIMITATION_CALCULATOR_TOC_SECTIONS,
}: LimitationCalculatorTOCProps) {
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
      const yOffset = -90;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveId(id);
      setIsOpen(false);
    }
  };

  const activeSection = sections.find((s) => s.id === activeId) || sections[0];

  return (
    <>
      {/* Mobile Sticky Dropdown Navigation */}
      <div className="lg:hidden w-full sticky top-16 z-30 bg-white/95 backdrop-blur-md border-y border-slate-200 shadow-sm py-2.5 px-4 mb-6">
        <div className="relative" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between px-4 py-2.5 bg-slate-100 hover:bg-slate-200/80 rounded-xl text-xs font-bold text-slate-800 transition-colors border border-slate-300/80"
            aria-expanded={isOpen}
            aria-label="Table of contents menu"
          >
            <span className="flex items-center gap-2 truncate">
              <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
              <span className="text-slate-500 uppercase text-[10px] tracking-wider">Navigate:</span>
              <span className="truncate">{activeSection?.label}</span>
            </span>
            <svg
              className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${
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
            <div className="absolute top-full left-0 right-0 mt-1.5 bg-white rounded-xl shadow-xl border border-slate-200 py-1.5 z-40 max-h-72 overflow-y-auto">
              {sections.map((section, idx) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left px-4 py-2.5 text-xs transition-colors flex items-center gap-2.5 ${
                    activeId === section.id
                      ? "bg-red-50 text-[#DC2626] font-extrabold"
                      : "text-slate-600 hover:bg-slate-50 font-medium"
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      activeId === section.id ? "bg-[#DC2626]" : "bg-slate-300"
                    }`}
                  />
                  <span>
                    {idx + 1}. {section.label}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Desktop Sticky Sidebar */}
      <aside
        aria-label="Table of Contents"
        className="hidden lg:block w-72 shrink-0 sticky top-24 self-start bg-white rounded-2xl border border-slate-200 p-5 shadow-xs"
      >
        <div className="flex items-center justify-between pb-3.5 mb-3 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
            <h3 className="text-xs font-black uppercase tracking-wider text-slate-900">
              Page Navigation
            </h3>
          </div>
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
            {sections.length} Sections
          </span>
        </div>

        <nav className="space-y-1">
          {sections.map((section, idx) => {
            const isActive = activeId === section.id;
            return (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`w-full text-left px-3 py-2 rounded-lg text-xs font-semibold transition-all duration-150 flex items-center justify-between group cursor-pointer ${
                  isActive
                    ? "bg-red-50 text-[#DC2626] font-bold shadow-xs translate-x-1"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                <span className="truncate pr-2">
                  <span className="text-slate-500 mr-1.5 font-bold">{idx + 1}.</span>
                  {section.label}
                </span>
                <span
                  className={`w-1.5 h-1.5 rounded-full shrink-0 transition-opacity ${
                    isActive ? "bg-[#DC2626] opacity-100" : "opacity-0 group-hover:opacity-40 bg-slate-400"
                  }`}
                />
              </button>
            );
          })}
        </nav>

        <div className="mt-5 pt-4 border-t border-slate-100">
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80">
            <p className="text-[11px] font-bold text-slate-900 mb-1">Section 3 Alert</p>
            <p className="text-[10px] text-slate-600 leading-relaxed">
              Every recovery suit filed after limitation expires is statutorily rejected by courts even if the debtor never files a written statement.
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}
