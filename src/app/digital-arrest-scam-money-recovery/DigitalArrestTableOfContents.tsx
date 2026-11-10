"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const DIGITAL_ARREST_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-overview", label: "OVERVIEW" },
  { id: "heading-myth-vs-fact", label: "MYTH VS FACT" },
  { id: "heading-first-24-hours", label: "FIRST 24 HOURS" },
  { id: "heading-case-digest", label: "COURT PRECEDENTS" },
  { id: "heading-problem-picker", label: "SCENARIOS & TRAPS" },
  { id: "heading-recovery-pipeline", label: "RECOVERY RAIL" },
  { id: "heading-bank-liability", label: "BANK LIABILITY" },
  { id: "heading-bnss-457", label: "COURT DE-FREEZE" },
  { id: "heading-worked-example", label: "WORKED EXAMPLE" },
  { id: "heading-evidence-checklist", label: "EVIDENCE CHECKLIST" },
  { id: "heading-honest-scope", label: "HONEST SCOPE" },
  { id: "heading-faqs", label: "FAQ" },
  { id: "heading-sources", label: "PRIMARY SOURCES" },
];

interface DigitalArrestTableOfContentsProps {
  sections?: TOCSection[];
}

export default function DigitalArrestTableOfContents({
  sections = DIGITAL_ARREST_TOC_SECTIONS,
}: DigitalArrestTableOfContentsProps) {
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
          <div className="mt-3 pt-3 border-t border-slate-100 flex flex-col gap-1 max-h-72 overflow-y-auto">
            {sections.map((section) => (
              <button
                key={section.id}
                type="button"
                onClick={() => scrollToSection(section.id)}
                className={`text-left px-3 py-2 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                  activeId === section.id
                    ? "bg-red-50 text-red-700 font-bold border-l-2 border-red-600"
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
      <aside className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
        <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100">
          <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
          <p className="text-xs uppercase tracking-wider font-extrabold text-slate-800">
            Navigation Index
          </p>
        </div>
        <nav className="flex flex-col gap-1" aria-label="Table of Contents">
          {sections.map((section) => (
            <button
              key={section.id}
              type="button"
              onClick={() => scrollToSection(section.id)}
              className={`text-left px-3 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer flex items-center justify-between group ${
                activeId === section.id
                  ? "bg-red-50 text-red-700 font-bold border-l-4 border-red-600 shadow-xs"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              <span className="truncate">{section.label}</span>
              <svg
                className={`w-3 h-3 text-slate-400 group-hover:text-red-500 transition-colors ${
                  activeId === section.id ? "text-red-600 opacity-100" : "opacity-0 group-hover:opacity-100"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          ))}
        </nav>
      </aside>
    </>
  );
}
