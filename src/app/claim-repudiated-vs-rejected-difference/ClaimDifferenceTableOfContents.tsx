"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const CLAIM_DIFFERENCE_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-overview", label: "OVERVIEW" },
  { id: "heading-key-distinction", label: "REPUDIATED VS REJECTED" },
  { id: "heading-myth-vs-fact", label: "7 MYTHS VS FACTS" },
  { id: "heading-flowchart", label: "DECISION MATRIX" },
  { id: "heading-case-citations", label: "PRECEDENTS & OMBUDSMAN" },
  { id: "heading-playbook", label: "HOW TO CONTEST" },
  { id: "heading-diagnostic-tabs", label: "SCENARIO DIAGNOSTIC" },
  { id: "heading-worked-example", label: "WORKED CASE STUDY" },
  { id: "heading-evidence-checklist", label: "EVIDENCE CHECKLIST" },
  { id: "heading-faqs", label: "FREQUENT QUESTIONS" },
  { id: "heading-sources", label: "PRIMARY SOURCES" },
];

interface ClaimDifferenceTableOfContentsProps {
  sections?: TOCSection[];
}

export default function ClaimDifferenceTableOfContents({
  sections = CLAIM_DIFFERENCE_TOC_SECTIONS,
}: ClaimDifferenceTableOfContentsProps) {
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
      setActiveId(id);
      setIsOpen(false);
    }
  };

  const activeSection = sections.find((s) => s.id === activeId) || sections[0];

  return (
    <>
      {/* Mobile Sticky Bar */}
      <div className="lg:hidden sticky top-20 z-30 w-full mb-6 bg-white/95 backdrop-blur-md border border-slate-200 rounded-xl p-3 shadow-md">
        <div className="flex items-center justify-between" ref={dropdownRef}>
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase tracking-wider font-extrabold text-slate-500">Jump To:</span>
            <span className="text-xs font-bold text-red-600 truncate max-w-[190px] sm:max-w-[280px]">
              {activeSection.label}
            </span>
          </div>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="px-3 py-1.5 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
            aria-expanded={isOpen}
            aria-label="Table of Contents menu"
          >
            <span>Sections</span>
            <svg
              className={`w-3.5 h-3.5 transition-transform ${isOpen ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="mt-2.5 pt-2 border-t border-slate-100 max-h-64 overflow-y-auto space-y-1">
            {sections.map((section) => (
              <button
                key={section.id}
                type="button"
                onClick={() => scrollToSection(section.id)}
                className={`w-full text-left px-2.5 py-1.5 rounded-md text-xs font-semibold transition-colors cursor-pointer ${
                  activeId === section.id
                    ? "bg-red-50 text-red-700 font-bold"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Desktop Sticky Sidebar */}
      <aside className="hidden lg:block w-72 shrink-0">
        <div className="sticky top-28 bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
            <span className="text-xs uppercase tracking-wider font-extrabold text-slate-600">
              Table of Contents
            </span>
          </div>

          <nav className="space-y-1" aria-label="Table of contents">
            {sections.map((section) => {
              const isActive = activeId === section.id;
              return (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer flex items-center justify-between group ${
                    isActive
                      ? "bg-red-50 text-red-700 font-bold border-l-2 border-red-600 pl-2.5 shadow-xs"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  <span className="truncate">{section.label}</span>
                  <svg
                    className={`w-3 h-3 transition-transform ${
                      isActive ? "text-red-600 translate-x-0.5" : "text-slate-300 group-hover:text-slate-400"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              );
            })}
          </nav>

          <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] text-slate-500 leading-normal">
            Need an advocate notice? Our specialists draft and serve statutory insurance demand letters within 24 hours.
          </div>
        </div>
      </aside>
    </>
  );
}
