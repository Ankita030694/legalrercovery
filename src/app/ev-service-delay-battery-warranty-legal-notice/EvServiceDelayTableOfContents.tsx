"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const EV_SERVICE_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-overview", label: "OVERVIEW" },
  { id: "heading-checklist-wizard", label: "READINESS CHECKLIST" },
  { id: "heading-warranty-rules", label: "BATTERY WARRANTY RULES" },
  { id: "heading-problem-tabs", label: "EV SERVICE SCENARIOS" },
  { id: "heading-precedents", label: "COURT PRECEDENTS" },
  { id: "heading-evidence-matrix", label: "DOCUMENT MATRIX" },
  { id: "heading-timeline-rail", label: "ESCALATION TIMELINE" },
  { id: "heading-worked-example", label: "WORKED EXAMPLE" },
  { id: "heading-notice-draft", label: "NOTICE TEMPLATE" },
  { id: "heading-faqs", label: "FAQ" },
  { id: "heading-sources", label: "LEGAL REFERENCES" },
];

interface EvServiceDelayTableOfContentsProps {
  sections?: TOCSection[];
}

export default function EvServiceDelayTableOfContents({
  sections = EV_SERVICE_TOC_SECTIONS,
}: EvServiceDelayTableOfContentsProps) {
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
            aria-label="Toggle Table of Contents"
          >
            <span>Sections</span>
            <svg
              className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="mt-3 pt-3 border-t border-slate-100 max-h-72 overflow-y-auto space-y-1">
            {sections.map((section) => (
              <button
                key={section.id}
                type="button"
                onClick={() => scrollToSection(section.id)}
                className={`w-full text-left px-3 py-2 text-xs font-semibold rounded-md transition-colors flex items-center justify-between ${
                  activeId === section.id
                    ? "bg-red-50 text-red-700 font-bold border-l-4 border-red-600"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                <span>{section.label}</span>
                {activeId === section.id && (
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>
                )}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Desktop Sticky Sidebar */}
      <aside
        aria-label="Table of Contents"
        className="hidden lg:block w-64 xl:w-72 flex-shrink-0 sticky top-28 self-start bg-white rounded-2xl border border-slate-200/80 p-5 shadow-sm"
      >
        <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100">
          <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
          </svg>
          <span className="text-xs font-extrabold uppercase tracking-wider text-slate-900">
            Guide Sections
          </span>
        </div>

        <nav className="space-y-1 max-h-[calc(100vh-200px)] overflow-y-auto pr-1">
          {sections.map((section) => {
            const isActive = activeId === section.id;
            return (
              <button
                key={section.id}
                type="button"
                onClick={() => scrollToSection(section.id)}
                className={`w-full text-left px-3 py-2 text-xs font-medium rounded-lg transition-all flex items-center justify-between group ${
                  isActive
                    ? "bg-red-50 text-red-700 font-bold shadow-xs border-l-4 border-red-600"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                <span className="truncate">{section.label}</span>
                <span
                  className={`w-1.5 h-1.5 rounded-full transition-transform ${
                    isActive ? "bg-red-600 scale-100" : "bg-transparent group-hover:bg-slate-300 scale-75"
                  }`}
                />
              </button>
            );
          })}
        </nav>

        <div className="mt-6 pt-4 border-t border-slate-100">
          <p className="text-[11px] text-slate-500 font-medium leading-relaxed">
            Statutory notice drafted by verified advocates under Section 2(10), 2(11) &amp; Chapter VI of CPA 2019.
          </p>
        </div>
      </aside>
    </>
  );
}
