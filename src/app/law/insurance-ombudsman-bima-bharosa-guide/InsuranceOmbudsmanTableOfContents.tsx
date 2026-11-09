"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const INSURANCE_OMBUDSMAN_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-overview", label: "COMPARISON: OMBUDSMAN VS BIMA BHAROSA" },
  { id: "heading-statutory-limits", label: "₹50 LAKH MONETARY LIMIT" },
  { id: "heading-30-day-rule", label: "30-DAY GRO PRE-CONDITION" },
  { id: "heading-7-day-rule", label: "IRDAI 7-DAY EX-PARTE DIRECTIVE" },
  { id: "heading-adjudicable-disputes", label: "RULE 13 DISPUTE GROUNDS" },
  { id: "heading-bima-bharosa-process", label: "BIMA BHAROSA ESCALATION" },
  { id: "heading-ombudsman-filing-steps", label: "CIO PORTAL ONLINE FILING" },
  { id: "heading-problem-scenarios", label: "COMMON DISPUTE STRATEGIES" },
  { id: "heading-process-flow", label: "ESCALATION PIPELINE DIAGRAM" },
  { id: "heading-maintainability-matrix", label: "ELIGIBILITY CHECKER (RULE 14)" },
  { id: "heading-binding-awards", label: "BINDING AWARDS & PENAL INTEREST" },
  { id: "heading-worked-example", label: "WORKED ₹8.4L CASE EXAMPLE" },
  { id: "heading-precedents", label: "JUDICIAL PRECEDENTS" },
  { id: "heading-evidence-checklist", label: "EVIDENCE & CLAIMS DOSSIER" },
  { id: "heading-complaint-format", label: "NOTICE & PETITION FORMAT" },
  { id: "heading-faqs", label: "FREQUENT QUESTIONS" },
  { id: "heading-sources", label: "STATUTORY SOURCES" },
];

interface InsuranceOmbudsmanTableOfContentsProps {
  sections?: TOCSection[];
}

export default function InsuranceOmbudsmanTableOfContents({
  sections = INSURANCE_OMBUDSMAN_TOC_SECTIONS,
}: InsuranceOmbudsmanTableOfContentsProps) {
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
      const yOffset = -90;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const activeLabel = sections.find((s) => s.id === activeId)?.label || "SECTIONS";

  return (
    <nav
      aria-label="Table of contents"
      className="w-full lg:w-72 xl:w-80 lg:shrink-0 lg:sticky lg:top-24 mb-6 lg:mb-0"
    >
      {/* Mobile Accordion / Dropdown */}
      <div className="lg:hidden w-full relative mb-4" ref={dropdownRef}>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-toc-dropdown"
          className="w-full flex items-center justify-between px-4 py-3 bg-white border border-slate-200 rounded-xl shadow-xs text-left"
        >
          <div className="flex items-center space-x-2 truncate">
            <span className="w-2 h-2 rounded-full bg-blue-600 shrink-0" />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Navigate Section:
            </span>
            <span className="text-xs font-semibold text-slate-800 truncate">
              {activeLabel}
            </span>
          </div>
          <svg
            className={`w-4 h-4 text-slate-500 transition-transform duration-200 shrink-0 ml-2 ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {isOpen && (
          <div
            id="mobile-toc-dropdown"
            className="absolute z-30 left-0 right-0 mt-1 max-h-80 overflow-y-auto bg-white border border-slate-200 rounded-xl shadow-lg p-2 space-y-1"
          >
            {sections.map((section) => {
              const isActive = activeId === section.id;
              return (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                    isActive
                      ? "bg-blue-50 text-blue-700 font-semibold"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  {section.label}
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Desktop Sticky Sidebar */}
      <div className="hidden lg:block bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
        <div className="flex items-center space-x-2 pb-3 mb-3 border-b border-slate-100">
          <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 10h16M4 14h16M4 18h16"
            />
          </svg>
          <h2 className="text-xs font-bold uppercase tracking-wider text-slate-700">
            Guide Index &amp; Rules
          </h2>
        </div>
        <ul className="space-y-1 text-xs">
          {sections.map((section) => {
            const isActive = activeId === section.id;
            return (
              <li key={section.id}>
                <button
                  type="button"
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-all flex items-center justify-between group ${
                    isActive
                      ? "bg-blue-50 text-blue-700 font-semibold border-l-2 border-blue-600 pl-2.5"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  <span className="truncate">{section.label}</span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0 ml-1.5" />
                  )}
                </button>
              </li>
            );
          })}
        </ul>

        <div className="mt-5 pt-4 border-t border-slate-100">
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-[11px] text-amber-900 leading-relaxed">
            <span className="font-bold block mb-1">⚖️ Statutory Authority</span>
            Insurance Ombudsman Rules 2017 (amended 2023) &amp; IRDAI Master Circular 2024. Awards up to ₹50 Lakh are fully binding on the insurer.
          </div>
        </div>
      </div>
    </nav>
  );
}

