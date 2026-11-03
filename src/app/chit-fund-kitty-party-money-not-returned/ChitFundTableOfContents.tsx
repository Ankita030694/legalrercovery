"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const CHIT_FUND_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-overview", label: "OVERVIEW" },
  { id: "heading-legal-differences", label: "REG. VS UNREG. CHITS" },
  { id: "heading-order-digest", label: "COURT VERDICTS" },
  { id: "heading-pattern-analysis", label: "RECOVERY PATTERNS" },
  { id: "heading-decision-tree", label: "DECISION TREE" },
  { id: "heading-playbook", label: "5-STEP PLAYBOOK" },
  { id: "heading-deadlines-table", label: "REMEDIES & FORUMS" },
  { id: "heading-problem-picker", label: "DISPUTE SCENARIOS" },
  { id: "heading-worked-example", label: "WORKED EXAMPLE" },
  { id: "heading-evidence-checklist", label: "EVIDENCE CHECKLIST" },
  { id: "heading-faqs", label: "FAQ" },
  { id: "heading-sources", label: "LEGAL SOURCES" },
];

interface ChitFundTableOfContentsProps {
  sections?: TOCSection[];
}

export default function ChitFundTableOfContents({
  sections = CHIT_FUND_TOC_SECTIONS,
}: ChitFundTableOfContentsProps) {
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
      const yOffset = -90; // offset for fixed navbar + breathing room
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
        {/* Dropdown Toggle Pill */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-toc-dropdown"
          className="w-full flex items-center justify-between px-4 py-2.5 bg-white border border-slate-200 rounded-xl shadow-xs text-xs sm:text-sm font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-red-500 cursor-pointer"
        >
          <div className="flex items-center gap-2 truncate">
            <span className="w-2 h-2 rounded-full bg-red-600 shrink-0" />
            <span className="text-slate-400 font-semibold uppercase text-[10px] tracking-wider shrink-0">
              Jump to:
            </span>
            <span className="truncate text-slate-900">{activeSection.label}</span>
          </div>
          <svg
            className={`w-4 h-4 text-slate-500 shrink-0 transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <div
            id="mobile-toc-dropdown"
            className="absolute left-0 right-0 top-full mt-1 bg-white border border-slate-200 rounded-xl shadow-xl overflow-hidden py-1.5 z-40 max-h-80 overflow-y-auto"
          >
            {sections.map((section) => {
              const isSelected = activeId === section.id;
              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => scrollToSection(e, section.id)}
                  className={`flex items-center justify-between px-4 py-2 text-xs font-semibold transition-colors ${
                    isSelected
                      ? "bg-red-50 text-red-600 font-bold"
                      : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  <span>{section.label}</span>
                  {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-red-600" />}
                </a>
              );
            })}
          </div>
        )}
      </div>

      {/* Desktop Sticky Sidebar Table of Contents */}
      <aside
        aria-label="Table of contents"
        className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 select-none"
      >
        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-4">
          <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-red-600" />
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-900">
              Guide Navigation
            </h4>
          </div>

          <nav className="space-y-1">
            {sections.map((section) => {
              const isSelected = activeId === section.id;
              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => scrollToSection(e, section.id)}
                  className={`group flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold transition-all ${
                    isSelected
                      ? "bg-red-50 text-red-600 font-bold translate-x-1"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  <span className="truncate">{section.label}</span>
                  <span
                    className={`text-slate-400 group-hover:text-red-500 transition-colors ${
                      isSelected ? "text-red-600 font-bold" : ""
                    }`}
                  >
                    →
                  </span>
                </a>
              );
            })}
          </nav>

          <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500 leading-tight">
            Need urgent recovery? Send a statutory legal notice before limitation expires.
          </div>
        </div>
      </aside>
    </>
  );
}
