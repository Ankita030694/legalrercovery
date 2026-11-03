"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const CAB_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-overview", label: "OVERVIEW" },
  { id: "heading-order-digest", label: "COURT ORDERS" },
  { id: "heading-why-liable", label: "LEGAL BASIS" },
  { id: "heading-pattern-analysis", label: "WHAT WINS" },
  { id: "heading-escalation-flow", label: "RESOLUTION RAIL" },
  { id: "heading-playbook", label: "5-STEP PLAYBOOK" },
  { id: "heading-fact-sheet", label: "GRIEVANCE OFFICERS" },
  { id: "heading-deadlines-table", label: "DEADLINES & RULES" },
  { id: "heading-problem-picker", label: "DISPUTE SCENARIOS" },
  { id: "heading-worked-example", label: "WORKED EXAMPLE" },
  { id: "heading-evidence-checklist", label: "EVIDENCE CHECKLIST" },
  { id: "heading-faqs", label: "FAQ" },
  { id: "heading-sources", label: "STATUTORY REFS" },
];

interface CabTableOfContentsProps {
  sections?: TOCSection[];
}

export default function CabTableOfContents({
  sections = CAB_TOC_SECTIONS,
}: CabTableOfContentsProps) {
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
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -90;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const activeSection = sections.find((s) => s.id === activeId) || sections[0];

  return (
    <>
      {/* Mobile Sticky Dropdown Header (< lg) */}
      <div className="lg:hidden w-full sticky top-[64px] z-30 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 shadow-md py-2.5 px-4 mb-6 rounded-xl">
        <div className="relative" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-lg text-white font-medium text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
            aria-expanded={isOpen}
            aria-label="Table of contents selector"
          >
            <div className="flex items-center gap-2 overflow-hidden truncate">
              <span className="text-[10px] font-black uppercase tracking-wider text-red-400 bg-red-950/80 px-2 py-0.5 rounded border border-red-800/80 shrink-0">
                JUMP TO
              </span>
              <span className="truncate font-bold text-slate-200">
                {activeSection?.label || "Table of Contents"}
              </span>
            </div>
            <svg
              className={`w-4 h-4 text-slate-400 transition-transform duration-200 shrink-0 ${
                isOpen ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Mobile Dropdown Menu */}
          {isOpen && (
            <div className="absolute top-full left-0 right-0 mt-1.5 max-h-72 overflow-y-auto bg-slate-900 border border-slate-700 rounded-xl shadow-2xl z-50 py-1.5 divide-y divide-slate-800">
              {sections.map((section, idx) => {
                const isSelected = activeId === section.id;
                return (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    onClick={(e) => scrollToSection(e, section.id)}
                    className={`flex items-center justify-between px-4 py-2.5 text-xs transition-colors ${
                      isSelected
                        ? "bg-red-950/70 text-red-300 font-bold border-l-4 border-red-500 pl-3"
                        : "text-slate-300 hover:bg-slate-800 hover:text-white"
                    }`}
                  >
                    <span className="truncate">
                      {idx + 1}. {section.label}
                    </span>
                    {isSelected && (
                      <span className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />
                    )}
                  </a>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Desktop Sticky Sidebar (>= lg) */}
      <aside
        aria-label="Table of contents"
        className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-24 self-start bg-white rounded-2xl border border-slate-200 p-5 shadow-sm max-h-[calc(100vh-7rem)] overflow-y-auto"
      >
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-200">
          <h2 className="text-xs font-black uppercase tracking-wider text-slate-900">
            Navigation Index
          </h2>
          <span className="text-[10px] font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded-full">
            Ola / Uber / Rapido
          </span>
        </div>

        <nav aria-label="Sections index" className="space-y-1">
          {sections.map((section, idx) => {
            const isActive = activeId === section.id;
            return (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={(e) => scrollToSection(e, section.id)}
                className={`group flex items-center justify-between text-xs py-2 px-3 rounded-lg transition-all ${
                  isActive
                    ? "bg-red-50 text-[#DC2626] font-bold border-l-3 border-[#DC2626]"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900 font-medium"
                }`}
              >
                <span className="truncate">
                  {idx + 1}. {section.label}
                </span>
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] shrink-0" />
                )}
              </a>
            );
          })}
        </nav>

        <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] text-slate-500 leading-relaxed">
          <p className="font-semibold text-slate-700 mb-1">Facing an unaddressed cab dispute?</p>
          <p>
            Serve a verified statutory advocate legal notice directly to the platform&apos;s corporate legal cell before consumer court filing.
          </p>
        </div>
      </aside>
    </>
  );
}
