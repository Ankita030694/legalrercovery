"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const EXPERIENCE_LETTER_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-comparison-matrix", label: "COMPARISON MATRIX" },
  { id: "heading-persona-fit", label: "WHICH ROUTE FOR YOU" },
  { id: "heading-distinction", label: "EXPERIENCE VS RELIEVING" },
  { id: "heading-escalation-flow", label: "RESOLUTION RAIL" },
  { id: "heading-route-notice", label: "ROUTE 1: LEGAL NOTICE" },
  { id: "heading-route-labour", label: "ROUTE 2: LABOUR OFFICER" },
  { id: "heading-route-court", label: "ROUTE 3: WRIT / INJUNCTION" },
  { id: "heading-route-criminal", label: "ROUTE 4: CRIMINAL / BNS" },
  { id: "heading-statutory-table", label: "STATUTORY BENCHMARKS" },
  { id: "heading-scenarios", label: "DISPUTE SCENARIOS" },
  { id: "heading-court-digest", label: "CASE PRECEDENTS" },
  { id: "heading-worked-example", label: "WORKED CASE STUDY" },
  { id: "heading-evidence-checklist", label: "EVIDENCE CHECKLIST" },
  { id: "heading-faqs", label: "FAQ" },
  { id: "heading-sources", label: "PRIMARY SOURCES" },
];

interface ExperienceLetterTableOfContentsProps {
  sections?: TOCSection[];
}

export default function ExperienceLetterTableOfContents({
  sections = EXPERIENCE_LETTER_TOC_SECTIONS,
}: ExperienceLetterTableOfContentsProps) {
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
      const yOffset = -90; // offset for 80px fixed navbar + breathing room
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
      {/* Mobile / Tablet Sticky Dropdown Table of Contents */}
      <div
        ref={dropdownRef}
        className="lg:hidden sticky top-20 z-30 w-full mb-6 py-2 bg-slate-50/95 backdrop-blur-sm select-none"
      >
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-toc-dropdown"
          className="w-full flex items-center justify-between px-4 py-3 bg-white border border-slate-200 rounded-xl shadow-sm text-left focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          <div className="flex items-center gap-2.5 truncate">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse shrink-0" />
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Jump To Section:
            </span>
            <span className="text-xs sm:text-sm font-bold text-slate-900 truncate">
              {activeSection.label}
            </span>
          </div>
          <svg
            className={`w-4 h-4 text-slate-500 transition-transform duration-200 shrink-0 ml-2 ${
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
          <div
            id="mobile-toc-dropdown"
            className="absolute left-0 right-0 mt-2 bg-white border border-slate-200 rounded-xl shadow-xl py-2 max-h-[60vh] overflow-y-auto z-40"
          >
            {sections.map((section, idx) => {
              const isActive = activeId === section.id;
              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => scrollToSection(e, section.id)}
                  className={`flex items-center justify-between px-4 py-2.5 text-xs sm:text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-red-50 text-red-700 font-bold border-l-4 border-red-600 pl-3"
                      : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  <span className="truncate">
                    {idx + 1}. {section.label}
                  </span>
                  {isActive && <span className="text-red-600 text-xs font-bold ml-2">Active</span>}
                </a>
              );
            })}
          </div>
        )}
      </div>

      {/* Desktop Sticky Sidebar Table of Contents */}
      <aside
        aria-label="Table of contents"
        className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-24 self-start select-none"
      >
        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-4">
          <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
            <span className="w-2.5 h-2.5 rounded-full bg-red-600" />
            <h3 className="text-xs font-black uppercase tracking-wider text-slate-800">
              Table of Contents
            </h3>
          </div>

          <nav className="space-y-1 max-h-[calc(100vh-180px)] overflow-y-auto pr-1">
            {sections.map((section, idx) => {
              const isActive = activeId === section.id;
              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => scrollToSection(e, section.id)}
                  className={`group flex items-start gap-2.5 px-3 py-2 rounded-lg text-xs transition-all duration-150 ${
                    isActive
                      ? "bg-red-50 text-red-700 font-bold shadow-2xs"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900 font-medium"
                  }`}
                >
                  <span
                    className={`shrink-0 font-mono text-[10px] mt-0.5 ${
                      isActive ? "text-red-600 font-bold" : "text-slate-400 group-hover:text-slate-600"
                    }`}
                  >
                    {(idx + 1).toString().padStart(2, "0")}
                  </span>
                  <span className="leading-snug">{section.label}</span>
                </a>
              );
            })}
          </nav>
        </div>
      </aside>
    </>
  );
}
