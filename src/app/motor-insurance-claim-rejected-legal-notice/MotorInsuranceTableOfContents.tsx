"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const MOTOR_INSURANCE_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-overview", label: "OVERVIEW" },
  { id: "heading-decision-tree", label: "DECISION TREE" },
  { id: "heading-route-delay", label: "DELAY INTIMATION ROUTE" },
  { id: "heading-route-licence", label: "DRIVING LICENCE ROUTE" },
  { id: "heading-route-drunk-driving", label: "DRUNK DRIVING CLAUSE" },
  { id: "heading-route-misrepresentation", label: "MISREPRESENTATION ROUTE" },
  { id: "heading-benchmarks-table", label: "IRDAI TIMELINES" },
  { id: "heading-case-citations", label: "COURT PRECEDENTS" },
  { id: "heading-worked-example", label: "WORKED EXAMPLE" },
  { id: "heading-evidence-checklist", label: "EVIDENCE CHECKLIST" },
  { id: "heading-faqs", label: "FAQ" },
  { id: "heading-sources", label: "PRIMARY SOURCES" },
];

interface MotorInsuranceTableOfContentsProps {
  sections?: TOCSection[];
}

export default function MotorInsuranceTableOfContents({
  sections = MOTOR_INSURANCE_TOC_SECTIONS,
}: MotorInsuranceTableOfContentsProps) {
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
          >
            <span>Index</span>
            <svg
              className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="mt-3 pt-3 border-t border-slate-200 space-y-1 max-h-72 overflow-y-auto">
            {sections.map((section) => (
              <button
                key={section.id}
                type="button"
                onClick={() => scrollToSection(section.id)}
                className={`w-full text-left px-2.5 py-1.5 rounded-md text-xs font-semibold transition-colors flex items-center justify-between ${
                  activeId === section.id
                    ? "bg-red-50 text-red-600 font-bold"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                <span>{section.label}</span>
                {activeId === section.id && <span className="text-red-600 font-black">•</span>}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Desktop Sticky Sidebar */}
      <aside className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
        <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100">
          <div className="w-2 h-2 rounded-full bg-red-600" />
          <p className="text-xs uppercase tracking-wider font-extrabold text-slate-500">
            Guide Sections
          </p>
        </div>
        <nav className="space-y-1">
          {sections.map((section) => (
            <button
              key={section.id}
              type="button"
              onClick={() => scrollToSection(section.id)}
              className={`w-full text-left px-3 py-2 rounded-lg text-xs font-semibold transition-all duration-150 flex items-center justify-between cursor-pointer ${
                activeId === section.id
                  ? "bg-red-50 text-red-600 font-bold border-l-2 border-red-600 translate-x-1"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              <span className="truncate">{section.label}</span>
              {activeId === section.id && (
                <svg className="w-3.5 h-3.5 text-red-600 shrink-0 ml-1" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
          ))}
        </nav>

        <div className="mt-6 pt-5 border-t border-slate-100">
          <p className="text-[11px] text-slate-500 font-medium mb-3">
            Car or bike claim repudiated unfairly?
          </p>
          <button
            type="button"
            onClick={() => scrollToSection("heading-decision-tree")}
            className="w-full py-2 px-3 bg-slate-900 hover:bg-red-600 text-white text-xs font-bold rounded-lg transition-colors text-center cursor-pointer shadow-sm"
          >
            Find Your Reversal Route
          </button>
        </div>
      </aside>
    </>
  );
}
