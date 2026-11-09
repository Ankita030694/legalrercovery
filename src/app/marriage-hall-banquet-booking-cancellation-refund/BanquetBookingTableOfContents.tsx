"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const BANQUET_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-overview", label: "OVERVIEW" },
  { id: "heading-scenarios", label: "SCENARIOS & ODDS" },
  { id: "heading-legal-basis", label: "SECTION 74 & CPA" },
  { id: "heading-facts-table", label: "KEY FACTS TABLE" },
  { id: "heading-process-flow", label: "RECOVERY WORKFLOW" },
  { id: "heading-case-digest", label: "COURT PRECEDENTS" },
  { id: "heading-problem-tabs", label: "DISPUTE RESOLUTION" },
  { id: "heading-step-by-step", label: "4-STEP PLAYBOOK" },
  { id: "heading-worked-example", label: "WORKED EXAMPLE" },
  { id: "heading-mistakes", label: "MISTAKES TO AVOID" },
  { id: "heading-evidence-checklist", label: "EVIDENCE CHECKLIST" },
  { id: "heading-notice-template", label: "NOTICE DRAFT" },
  { id: "heading-scope", label: "OUR SCOPE" },
  { id: "heading-faqs", label: "FAQ" },
  { id: "heading-sources", label: "STATUTORY REFS" },
];

interface BanquetBookingTableOfContentsProps {
  sections?: TOCSection[];
}

export default function BanquetBookingTableOfContents({
  sections = BANQUET_TOC_SECTIONS,
}: BanquetBookingTableOfContentsProps) {
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
            <span>Sections</span>
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
          <div className="mt-2 pt-2 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-1 max-h-72 overflow-y-auto">
            {sections.map((section) => (
              <button
                key={section.id}
                type="button"
                onClick={() => scrollToSection(section.id)}
                className={`text-left px-3 py-2 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
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
      <aside className="hidden lg:block w-72 shrink-0 sticky top-28 space-y-6">
        <nav
          aria-label="Table of Contents"
          className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-3"
        >
          <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
            <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Quick Navigation</p>
          </div>

          <ul className="space-y-1 text-xs">
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  type="button"
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-150 flex items-center justify-between cursor-pointer ${
                    activeId === section.id
                      ? "bg-red-50 text-red-700 font-bold border-l-2 border-red-600 pl-2.5"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  <span className="truncate">{section.label}</span>
                  {activeId === section.id && (
                    <span className="w-1.5 h-1.5 rounded-full bg-red-600 shrink-0 ml-2" />
                  )}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Small Notice Assistance Box */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-5 border border-slate-700 shadow-md space-y-3">
          <p className="text-[11px] font-bold text-red-400 uppercase tracking-wider">Fast Notice Service</p>
          <h4 className="text-sm font-bold leading-snug">
            Marriage Hall Refusing to Return Advance?
          </h4>
          <p className="text-xs text-slate-300 leading-relaxed">
            Get an advocate-drafted statutory demand notice under Section 74 Contract Act sent via Speed Post in 24 hours.
          </p>
          <button
            type="button"
            onClick={() => scrollToSection("heading-notice-template")}
            className="w-full py-2 px-3 text-xs font-bold text-white bg-red-600 hover:bg-red-700 rounded-lg text-center transition-colors cursor-pointer"
          >
            Review Legal Notice Rails
          </button>
        </div>
      </aside>
    </>
  );
}
