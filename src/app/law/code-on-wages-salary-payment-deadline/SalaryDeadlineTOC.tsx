"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const SALARY_DEADLINE_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-statutory-deadline", label: "THE 7TH RULE" },
  { id: "heading-court-precedents", label: "COURT RULINGS" },
  { id: "heading-delay-excuses", label: "EMPLOYER EXCUSES" },
  { id: "heading-resolution-rail", label: "RESOLUTION RAIL" },
  { id: "heading-escalation-playbook", label: "5-STEP PLAYBOOK" },
  { id: "heading-facts-table", label: "STATUTORY DEADLINES" },
  { id: "heading-scenario-tabs", label: "DELAY SCENARIOS" },
  { id: "heading-worked-example", label: "WORKED EXAMPLE" },
  { id: "heading-evidence-checklist", label: "EVIDENCE CHECKLIST" },
  { id: "heading-faqs", label: "FAQ" },
  { id: "heading-sources", label: "STATUTORY REFS" },
];

interface SalaryDeadlineTOCProps {
  sections?: TOCSection[];
}

export default function SalaryDeadlineTOC({
  sections = SALARY_DEADLINE_TOC_SECTIONS,
}: SalaryDeadlineTOCProps) {
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
      const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveId(id);
      setIsOpen(false);
    }
  };

  const activeSection = sections.find((s) => s.id === activeId) || sections[0];

  return (
    <>
      {/* Mobile Floating Dropdown Navigation */}
      <div className="lg:hidden w-full mb-6 sticky top-20 z-30" ref={dropdownRef}>
        <div className="bg-white rounded-xl shadow-md border border-slate-200 overflow-hidden">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="w-full px-4 py-3 text-left font-bold text-xs uppercase tracking-wider text-slate-800 flex items-center justify-between bg-slate-50 border-b border-slate-200"
            aria-expanded={isOpen}
          >
            <div className="flex items-center gap-2 truncate">
              <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
              <span className="text-slate-500 font-semibold">SECTION:</span>
              <span className="text-slate-900 truncate">{activeSection?.label}</span>
            </div>
            <svg
              className={`w-4 h-4 text-slate-600 transition-transform duration-200 shrink-0 ${
                isOpen ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isOpen && (
            <div className="max-h-72 overflow-y-auto divide-y divide-slate-100 bg-white">
              {sections.map((section) => {
                const isActive = activeId === section.id;
                return (
                  <button
                    key={section.id}
                    type="button"
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full text-left px-4 py-2.5 text-xs font-semibold transition-colors flex items-center justify-between ${
                      isActive
                        ? "bg-red-50 text-[#DC2626] font-bold"
                        : "text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    <span>{section.label}</span>
                    {isActive && <span className="text-[#DC2626] text-xs">●</span>}
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
        className="hidden lg:block w-64 shrink-0 sticky top-28 self-start space-y-4"
      >
        <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm">
          <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-200">
            <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
            <h3 className="text-xs font-black uppercase tracking-wider text-slate-900">
              Table of Contents
            </h3>
          </div>

          <nav className="space-y-1">
            {sections.map((section) => {
              const isActive = activeId === section.id;
              return (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-xs font-bold tracking-wide transition-all block ${
                    isActive
                      ? "bg-red-50 text-[#DC2626] border-l-4 border-[#DC2626] pl-2.5 shadow-xs"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  {section.label}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Mini Quick Fact Callout in Sidebar */}
        <div className="bg-slate-900 text-white rounded-2xl p-4 border border-slate-800 shadow-sm text-xs space-y-2">
          <div className="flex items-center gap-1.5 text-red-400 font-bold uppercase tracking-wider text-[10px]">
            <span>⚡ STATUTORY BENCHMARK</span>
          </div>
          <p className="text-slate-200 font-medium leading-relaxed">
            Section 17(1)(d) Code on Wages mandates monthly salary disbursement <strong>before the expiry of the 7th day</strong>. Even a 24-hour delay constitutes an actionable statutory default.
          </p>
        </div>
      </aside>
    </>
  );
}
