"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const ESOP_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-esop-overview", label: "OVERVIEW" },
  { id: "heading-judicial-rulings", label: "COURT RULINGS" },
  { id: "heading-pattern-analysis", label: "PATTERN ANALYSIS" },
  { id: "heading-escalation-flow", label: "RESOLUTION RAIL" },
  { id: "heading-playbook", label: "5-STEP PLAYBOOK" },
  { id: "heading-deadlines-table", label: "STATUTORY DEADLINES" },
  { id: "heading-problem-picker", label: "ESOP DISPUTES" },
  { id: "heading-worked-example", label: "WORKED EXAMPLE" },
  { id: "heading-evidence-checklist", label: "EVIDENCE CHECKLIST" },
  { id: "heading-key-takeaways", label: "KEY TAKEAWAYS" },
  { id: "heading-faqs", label: "FAQ" },
  { id: "heading-sources", label: "STATUTORY REFS" },
];

interface EsopTableOfContentsProps {
  sections?: TOCSection[];
}

export default function EsopTableOfContents({
  sections = ESOP_TOC_SECTIONS,
}: EsopTableOfContentsProps) {
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
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between px-4 py-3 bg-white border border-slate-200/90 rounded-xl shadow-xs text-xs font-bold text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-[#DC2626]"
          aria-expanded={isOpen}
          aria-label="Table of Contents Navigation"
        >
          <div className="flex items-center gap-2 truncate">
            <span className="w-2 h-2 rounded-full bg-[#DC2626] shrink-0" />
            <span className="text-slate-500 uppercase tracking-wider text-[10px]">Jump to Section:</span>
            <span className="truncate text-slate-900">{activeSection?.label}</span>
          </div>
          <svg
            className={`w-4 h-4 text-slate-500 transition-transform duration-200 shrink-0 ${
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
          <div className="absolute left-0 right-0 mt-1 max-h-72 overflow-y-auto bg-white border border-slate-200 rounded-xl shadow-xl z-40 py-1.5 divide-y divide-slate-100">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={(e) => scrollToSection(e, section.id)}
                className={`flex items-center justify-between px-4 py-2.5 text-xs font-semibold transition-colors ${
                  activeId === section.id
                    ? "text-[#DC2626] bg-red-50/60 font-bold"
                    : "text-slate-700 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                <span>{section.label}</span>
                {activeId === section.id && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
                )}
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Desktop Sticky Sidebar Table of Contents */}
      <aside className="hidden lg:block lg:w-64 shrink-0 sticky top-28 select-none" aria-label="Table of Contents">
        <div className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-xs">
          <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100">
            <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
            <p className="text-[11px] font-black uppercase tracking-wider text-slate-500">
              Guide Navigation
            </p>
          </div>
          <nav className="space-y-1">
            {sections.map((section) => {
              const isActive = activeId === section.id;
              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => scrollToSection(e, section.id)}
                  className={`group flex items-center justify-between px-3 py-2 text-xs rounded-lg transition-all ${
                    isActive
                      ? "text-[#DC2626] bg-red-50/70 font-extrabold border-l-2 border-[#DC2626]"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50 font-medium"
                  }`}
                >
                  <span className="truncate">{section.label}</span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] shrink-0" />
                  )}
                </a>
              );
            })}
          </nav>
        </div>
      </aside>
    </>
  );
}
