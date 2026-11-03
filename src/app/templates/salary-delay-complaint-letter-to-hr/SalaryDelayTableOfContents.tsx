"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const SALARY_DELAY_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-salary-rights-overview", label: "STATUTORY WAGE RIGHTS" },
  { id: "heading-key-facts", label: "KEY FACTS TABLE" },
  { id: "heading-templates-workspace", label: "LETTER TEMPLATES & TOOL" },
  { id: "heading-tone-matrix", label: "CHOOSING TONE" },
  { id: "heading-subject-lines", label: "SUBJECT LINE BANK" },
  { id: "heading-escalation-flow", label: "ESCALATION PATHWAY" },
  { id: "heading-sending-protocol", label: "SENDING & BSA 2023 RULES" },
  { id: "heading-case-citations", label: "LABOUR COURT ORDERS" },
  { id: "heading-evidence-checklist", label: "EVIDENCE CHECKLIST" },
  { id: "heading-scope-limitations", label: "LEGAL SCOPE" },
  { id: "heading-faqs", label: "FAQ" },
  { id: "heading-sources", label: "PRIMARY SOURCES" },
];

interface SalaryDelayTableOfContentsProps {
  sections?: TOCSection[];
}

export default function SalaryDelayTableOfContents({
  sections = SALARY_DELAY_TOC_SECTIONS,
}: SalaryDelayTableOfContentsProps) {
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
        const el = document.getElementById(sections[i].id);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY;
          if (scrollPosition >= top) {
            setActiveId(sections[i].id);
            return;
          }
        }
      }

      if (sections[0]) {
        setActiveId(sections[0].id);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -90;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      window.history.pushState(null, "", `#${id}`);
      setActiveId(id);
      setIsOpen(false);
    }
  };

  const activeSection = sections.find((s) => s.id === activeId) || sections[0];

  return (
    <>
      {/* Mobile Sticky Dropdown */}
      <div
        ref={dropdownRef}
        className="lg:hidden sticky top-20 z-30 w-full mb-6 py-2 bg-slate-50/95 backdrop-blur-sm select-none"
      >
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between px-4 py-2.5 bg-white border border-slate-200 rounded-xl shadow-sm text-xs font-bold uppercase tracking-wider text-slate-800"
          aria-expanded={isOpen}
        >
          <div className="flex items-center gap-2 truncate">
            <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
            <span className="truncate">Jump to: {activeSection?.label}</span>
          </div>
          <svg
            className={`w-4 h-4 ml-2 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {isOpen && (
          <div className="absolute left-0 right-0 mt-2 bg-white border border-slate-200 rounded-xl shadow-xl overflow-hidden py-1.5 z-40 max-h-72 overflow-y-auto">
            {sections.map((section) => {
              const isSelected = activeId === section.id;
              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => scrollToSection(e, section.id)}
                  className={`block px-4 py-2 text-xs font-semibold tracking-wide transition-colors ${
                    isSelected
                      ? "bg-red-50 text-[#DC2626] font-bold"
                      : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  {section.label}
                </a>
              );
            })}
          </div>
        )}
      </div>

      {/* Desktop Sticky Sidebar */}
      <aside
        aria-label="Table of Contents"
        className="hidden lg:block lg:w-72 xl:w-80 shrink-0 sticky top-28 space-y-4"
      >
        <div className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-sm">
          <div className="flex items-center justify-between pb-3.5 mb-3 border-b border-slate-100">
            <h3 className="text-xs font-black uppercase tracking-wider text-slate-800 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
              Navigation Guide
            </h3>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 uppercase">
              12 Sections
            </span>
          </div>

          <nav className="space-y-1">
            {sections.map((section, idx) => {
              const isSelected = activeId === section.id;
              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => scrollToSection(e, section.id)}
                  className={`group flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                    isSelected
                      ? "bg-red-50 text-[#DC2626] font-bold shadow-xs"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  <span className="flex items-center gap-2.5 truncate">
                    <span
                      className={`text-[10px] font-mono tabular-nums ${
                        isSelected ? "text-[#DC2626]" : "text-slate-500 group-hover:text-slate-600"
                      }`}
                    >
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className="truncate">{section.label}</span>
                  </span>
                  {isSelected && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] shrink-0" />
                  )}
                </a>
              );
            })}
          </nav>

          <div className="mt-5 pt-4 border-t border-slate-100 space-y-2.5">
            <div className="p-3 bg-red-50/70 border border-red-100 rounded-xl">
              <p className="text-[11px] font-bold text-red-950 uppercase tracking-wider mb-1">
                Statutory Wage Rule
              </p>
              <p className="text-[11px] text-red-900 leading-snug">
                Code on Wages §17(1) mandates salary payment on or before the 7th of every month. Delay beyond this constitutes wage withholding.
              </p>
            </div>
            <a
              href="#heading-templates-workspace"
              className="block w-full text-center py-2 px-3 rounded-lg bg-slate-900 hover:bg-black text-white text-xs font-bold transition-colors"
            >
              Generate Complaint Letter ↓
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}
