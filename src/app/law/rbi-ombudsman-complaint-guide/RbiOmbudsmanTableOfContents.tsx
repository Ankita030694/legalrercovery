"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const RBI_OMBUDSMAN_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-overview", label: "RB-IOS SCHEME OVERVIEW" },
  { id: "heading-eligibility", label: "30-DAY RULE & ELIGIBILITY" },
  { id: "heading-cms-process", label: "CMS PORTAL FILING" },
  { id: "heading-compensation", label: "COMPENSATION & LIMITS" },
  { id: "heading-precedents", label: "JUDICIAL PRECEDENTS" },
  { id: "heading-problem-picker", label: "DISPUTE SCENARIOS" },
  { id: "heading-process-flow", label: "ESCALATION PIPELINE" },
  { id: "heading-maintainability", label: "MAINTAINABILITY MATRIX" },
  { id: "heading-complaint-format", label: "NOTICE & COMPLAINT FORMAT" },
  { id: "heading-worked-example", label: "WORKED CASE EXAMPLE" },
  { id: "heading-evidence-checklist", label: "EVIDENCE DOSSIER" },
  { id: "heading-faqs", label: "FREQUENT QUESTIONS" },
  { id: "heading-sources", label: "STATUTORY REFERENCES" },
];

interface RbiOmbudsmanTableOfContentsProps {
  sections?: TOCSection[];
}

export default function RbiOmbudsmanTableOfContents({
  sections = RBI_OMBUDSMAN_TOC_SECTIONS,
}: RbiOmbudsmanTableOfContentsProps) {
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
          className="w-full flex items-center justify-between p-3.5 bg-white border border-slate-300 rounded-xl shadow-sm text-left text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-red-600"
        >
          <span className="flex items-center gap-2 truncate">
            <span className="w-2 h-2 rounded-full bg-red-600 shrink-0" />
            <span className="text-slate-500 uppercase tracking-wider text-[10px]">Jump to:</span>
            <span className="font-bold text-slate-900 truncate">{activeLabel}</span>
          </span>
          <svg
            className={`w-4 h-4 text-slate-500 transition-transform duration-200 shrink-0 ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {isOpen && (
          <div
            id="mobile-toc-dropdown"
            className="absolute left-0 right-0 top-full mt-1.5 bg-white border border-slate-200 rounded-xl shadow-xl z-30 max-h-80 overflow-y-auto py-2"
          >
            {sections.map((section, idx) => {
              const isActive = activeId === section.id;
              return (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left px-4 py-2.5 text-xs transition-colors flex items-center gap-2.5 ${
                    isActive
                      ? "bg-red-50 text-red-700 font-bold border-l-4 border-red-600"
                      : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  <span
                    className={`text-[10px] w-5 text-right font-mono ${
                      isActive ? "text-red-600 font-extrabold" : "text-slate-400"
                    }`}
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="truncate">{section.label}</span>
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Desktop Sticky Sidebar */}
      <div className="hidden lg:block bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
        <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100">
          <div className="w-2 h-2 rounded-full bg-red-600" />
          <p className="text-[11px] font-extrabold uppercase tracking-wider text-slate-800">
            Guide Sections
          </p>
        </div>

        <ul className="space-y-1 text-xs">
          {sections.map((section, idx) => {
            const isActive = activeId === section.id;
            return (
              <li key={section.id}>
                <button
                  type="button"
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-150 flex items-center gap-2.5 group cursor-pointer ${
                    isActive
                      ? "bg-red-50 text-red-700 font-bold shadow-xs"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  <span
                    className={`text-[10px] font-mono shrink-0 ${
                      isActive
                        ? "text-red-600 font-extrabold"
                        : "text-slate-400 group-hover:text-slate-600"
                    }`}
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="truncate">{section.label}</span>
                </button>
              </li>
            );
          })}
        </ul>

        <div className="mt-5 pt-4 border-t border-slate-100 text-[11px] text-slate-500 leading-relaxed">
          <p className="font-semibold text-slate-700 mb-1">Mandatory Condition:</p>
          <p>
            You must wait 30 days after lodging a written grievance with your bank before the RBI Ombudsman accepts your complaint.
          </p>
        </div>
      </div>
    </nav>
  );
}
