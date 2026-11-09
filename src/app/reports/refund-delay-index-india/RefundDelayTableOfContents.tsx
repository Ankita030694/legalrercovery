"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const REFUND_DELAY_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-headline-findings", label: "KEY FINDINGS" },
  { id: "heading-methodology", label: "METHODOLOGY" },
  { id: "heading-comparative-charts", label: "SECTOR COMPARISONS" },
  { id: "heading-sector-deepdive", label: "SECTOR BREAKDOWN" },
  { id: "heading-company-league", label: "COMPANY LEAGUE TABLE" },
  { id: "heading-statutory-deadlines", label: "STATUTORY TIMELINES" },
  { id: "heading-worked-case-study", label: "WORKED CASE STUDY" },
  { id: "heading-escalation-framework", label: "LEGAL ESCALATION" },
  { id: "heading-download-citation", label: "DATA & CITATION" },
  { id: "heading-press-inquiries", label: "RESEARCH TEAM" },
  { id: "heading-faqs", label: "FAQS" },
  { id: "heading-sources", label: "LEGAL REFERENCES" },
];

interface RefundDelayTableOfContentsProps {
  sections?: TOCSection[];
}

export default function RefundDelayTableOfContents({
  sections = REFUND_DELAY_TOC_SECTIONS,
}: RefundDelayTableOfContentsProps) {
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
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -90;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Sticky Dropdown Header */}
      <div className="lg:hidden w-full sticky top-16 z-30 bg-white/95 backdrop-blur-md border-y border-slate-200 shadow-sm py-2.5 px-4 mb-6">
        <div className="relative" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between px-4 py-2.5 bg-slate-100 hover:bg-slate-200/80 rounded-xl text-left font-bold text-xs sm:text-sm text-slate-800 transition-colors border border-slate-300/80"
            aria-expanded={isOpen}
            aria-haspopup="listbox"
          >
            <span className="flex items-center gap-2 truncate">
              <span className="w-2 h-2 rounded-full bg-[#DC2626] animate-pulse" />
              <span className="text-slate-500 font-medium">Jump to:</span>
              <span className="truncate">
                {sections.find((s) => s.id === activeId)?.label || "Select Section"}
              </span>
            </span>
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
            <div className="absolute left-0 right-0 mt-1.5 bg-white border border-slate-200 rounded-xl shadow-xl max-h-72 overflow-y-auto py-1 z-50 divide-y divide-slate-100">
              {sections.map((section) => {
                const isActive = activeId === section.id;
                return (
                  <button
                    key={section.id}
                    type="button"
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full text-left px-4 py-2.5 text-xs sm:text-sm flex items-center justify-between transition-colors ${
                      isActive
                        ? "bg-red-50 text-[#DC2626] font-bold"
                        : "text-slate-700 hover:bg-slate-50 font-medium"
                    }`}
                  >
                    <span>{section.label}</span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
                    )}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Desktop Sticky Left Sidebar */}
      <aside
        aria-label="Table of contents"
        className="hidden lg:block w-72 xl:w-80 shrink-0 sticky top-28 self-start bg-white border border-slate-200/90 rounded-2xl p-5 shadow-sm"
      >
        <div className="flex items-center justify-between pb-3.5 mb-3 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
            <h2 className="text-xs font-black uppercase tracking-wider text-slate-900">
              Report Sections
            </h2>
          </div>
          <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
            {sections.length} Topics
          </span>
        </div>

        <nav className="space-y-1">
          {sections.map((section, idx) => {
            const isActive = activeId === section.id;
            return (
              <button
                key={section.id}
                type="button"
                onClick={() => scrollToSection(section.id)}
                className={`w-full text-left px-3 py-2 rounded-lg text-xs font-bold transition-all flex items-center justify-between group cursor-pointer ${
                  isActive
                    ? "bg-red-50 text-[#DC2626] translate-x-1 shadow-xs"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                <span className="truncate pr-2">
                  <span className="text-slate-400 font-mono text-[10px] mr-2">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  {section.label}
                </span>
                <span
                  className={`w-1.5 h-1.5 rounded-full shrink-0 transition-opacity ${
                    isActive ? "bg-[#DC2626] opacity-100" : "opacity-0 group-hover:opacity-40 bg-slate-400"
                  }`}
                />
              </button>
            );
          })}
        </nav>

        {/* Quick Report Meta Box */}
        <div className="mt-5 pt-4 border-t border-slate-100 bg-slate-50/70 -mx-2 -mb-2 p-3 rounded-xl text-[11px] text-slate-600 space-y-1.5">
          <div className="flex justify-between">
            <span className="text-slate-500">Dataset ID:</span>
            <span className="font-mono font-bold text-slate-800">LR-165 (R1)</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500">Sample Size:</span>
            <span className="font-bold text-slate-800">4,820 Cases</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500">Reporting Cadence:</span>
            <span className="font-bold text-emerald-700">Quarterly (2026)</span>
          </div>
        </div>
      </aside>
    </>
  );
}
