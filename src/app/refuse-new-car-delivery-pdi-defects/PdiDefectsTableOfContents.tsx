"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const PDI_DEFECTS_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-overview", label: "OVERVIEW & LEGAL BASIS" },
  { id: "heading-decision-tree", label: "PDI DECISION TREE" },
  { id: "heading-pre-vs-post-reg", label: "PRE VS POST RTO" },
  { id: "heading-myth-vs-fact", label: "MYTH VS FACT" },
  { id: "heading-case-digest", label: "COURT PRECEDENTS" },
  { id: "heading-defect-matrix", label: "DEFECT SEVERITY MATRIX" },
  { id: "heading-escalation-flow", label: "LEGAL ESCALATION RAIL" },
  { id: "heading-playbook", label: "5-STEP REFUSAL PLAYBOOK" },
  { id: "heading-deadlines-table", label: "STATUTORY BENCHMARKS" },
  { id: "heading-problem-picker", label: "SCENARIOS & REMEDIES" },
  { id: "heading-worked-example", label: "WORKED CASE EXAMPLE" },
  { id: "heading-evidence-checklist", label: "EVIDENCE & PDI CHECKLIST" },
  { id: "heading-faqs", label: "FAQ" },
  { id: "heading-sources", label: "STATUTORY REFS" },
];

interface PdiDefectsTableOfContentsProps {
  sections?: TOCSection[];
}

export default function PdiDefectsTableOfContents({
  sections = PDI_DEFECTS_TOC_SECTIONS,
}: PdiDefectsTableOfContentsProps) {
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
            aria-label="Toggle Table of Contents Menu"
          >
            <span>Sections</span>
            <svg
              className={`w-3.5 h-3.5 transition-transform ${isOpen ? "rotate-180" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="mt-3 pt-3 border-t border-slate-200 max-h-60 overflow-y-auto space-y-1">
            {sections.map((section) => (
              <button
                key={section.id}
                type="button"
                onClick={() => scrollToSection(section.id)}
                className={`w-full text-left px-2.5 py-1.5 rounded text-xs font-semibold transition-colors block ${
                  activeId === section.id
                    ? "bg-red-50 text-red-700 font-bold"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Desktop Sticky Sidebar */}
      <nav
        aria-label="Table of contents"
        className="hidden lg:block bg-white border border-slate-200 rounded-2xl p-5 shadow-sm sticky top-28"
      >
        <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100">
          <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
          <h2 className="text-xs font-black uppercase tracking-wider text-slate-900">
            Guide Navigation
          </h2>
        </div>
        <ul className="space-y-1 text-xs">
          {sections.map((section) => {
            const isActive = activeId === section.id;
            return (
              <li key={section.id}>
                <button
                  type="button"
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg font-medium transition-all duration-150 flex items-center justify-between group cursor-pointer ${
                    isActive
                      ? "bg-red-50 text-red-700 font-bold border-l-4 border-red-600 pl-2 shadow-xs"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  <span className="truncate">{section.label}</span>
                  <svg
                    className={`w-3 h-3 transition-transform ${
                      isActive
                        ? "text-red-600 translate-x-0.5"
                        : "text-slate-300 group-hover:text-slate-500 group-hover:translate-x-0.5"
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </li>
            );
          })}
        </ul>

        {/* Quick Action Footer in Sidebar */}
        <div className="mt-5 pt-4 border-t border-slate-100">
          <div className="bg-slate-50 rounded-xl p-3 border border-slate-200/80">
            <p className="text-[11px] font-semibold text-slate-700 leading-snug">
              Dealer refusing booking refund or forcing defective car acceptance?
            </p>
            <p className="text-[10px] text-slate-500 mt-1">
              Serve a statutory notice under Sale of Goods Act &amp; CPA 2019.
            </p>
          </div>
        </div>
      </nav>
    </>
  );
}
