"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const RERA_DELAY_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-overview", label: "OVERVIEW" },
  { id: "heading-matrix", label: "REMEDY MATRIX" },
  { id: "heading-personas", label: "WHICH ROUTE FITS" },
  { id: "heading-sec18-rules", label: "SECTION 18 RULES" },
  { id: "heading-interest-calc", label: "MCLR+2% FORMULA" },
  { id: "heading-sc-precedents", label: "COURT PRECEDENTS" },
  { id: "heading-resolution-rail", label: "RESOLUTION RAIL" },
  { id: "heading-myth-vs-fact", label: "MYTH VS FACT" },
  { id: "heading-scenarios", label: "SCENARIOS & FIXES" },
  { id: "heading-worked-example", label: "WORKED EXAMPLE" },
  { id: "heading-evidence", label: "EVIDENCE CHECKLIST" },
  { id: "heading-faqs", label: "FAQ" },
  { id: "heading-sources", label: "STATUTORY REFS" },
];

interface ReraDelayTableOfContentsProps {
  sections?: TOCSection[];
}

export default function ReraDelayTableOfContents({
  sections = RERA_DELAY_TOC_SECTIONS,
}: ReraDelayTableOfContentsProps) {
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

  return (
    <>
      {/* Mobile Sticky Dropdown Navigation */}
      <div className="lg:hidden sticky top-20 z-30 w-full mb-6" ref={dropdownRef}>
        <div className="bg-slate-900 border border-slate-700/80 rounded-xl shadow-lg p-2.5 backdrop-blur-md">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between px-3 py-2 text-xs font-semibold text-slate-200 hover:text-white transition-colors"
            aria-expanded={isOpen}
            aria-label="Table of Contents Jump Menu"
          >
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span>
                NAVIGATE:{" "}
                <strong className="text-amber-400 font-bold">
                  {sections.find((s) => s.id === activeId)?.label || "SECTIONS"}
                </strong>
              </span>
            </span>
            <svg
              className={`w-4 h-4 transform transition-transform duration-200 ${
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
            <div className="mt-2 pt-2 border-t border-slate-700/60 max-h-60 overflow-y-auto space-y-1">
              {sections.map((section) => (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                    activeId === section.id
                      ? "bg-amber-500/20 text-amber-300 font-bold"
                      : "text-slate-300 hover:bg-slate-800 hover:text-slate-100"
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Desktop Sticky Sidebar Navigation */}
      <aside
        aria-label="Table of Contents"
        className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start"
      >
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100">
            <p className="text-xs font-extrabold uppercase tracking-wider text-slate-900 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              <span>Guide Navigation</span>
            </p>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
              {sections.length} Topics
            </span>
          </div>

          <nav className="space-y-1">
            {sections.map((section) => {
              const isActive = activeId === section.id;
              return (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition-all duration-150 ${
                    isActive
                      ? "bg-amber-50 text-amber-800 border-l-4 border-amber-600 font-bold pl-2 shadow-xs"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  <span className="truncate">{section.label}</span>
                  {isActive && (
                    <span className="text-amber-600 ml-1">
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          <div className="mt-6 pt-4 border-t border-slate-100">
            <div className="bg-amber-50/70 border border-amber-200/60 rounded-xl p-3">
              <p className="text-[11px] font-bold text-amber-900 mb-1">Facing Builder Delay?</p>
              <p className="text-[10px] text-amber-800 leading-relaxed mb-2.5">
                Calculate your exact SBI MCLR+2% delay interest per month before issuing legal notice.
              </p>
              <button
                type="button"
                onClick={() => scrollToSection("heading-interest-calc")}
                className="w-full py-1.5 px-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg text-[10px] font-bold text-center block transition-colors"
              >
                View Interest Formula
              </button>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
