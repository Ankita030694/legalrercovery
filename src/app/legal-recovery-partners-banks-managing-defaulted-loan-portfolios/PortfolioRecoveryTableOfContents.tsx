"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const PORTFOLIO_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-partnership-overview", label: "OVERVIEW" },
  { id: "heading-judicial-rulings", label: "JUDICIAL RULINGS" },
  { id: "heading-segmentation-framework", label: "SEGMENTATION RAIL" },
  { id: "heading-litigation-pathways", label: "LITIGATION PATHWAYS" },
  { id: "heading-execution-lifecycle", label: "5-STAGE LIFECYCLE" },
  { id: "heading-yield-matrix", label: "YIELD & SLA MATRIX" },
  { id: "heading-portfolio-tabs", label: "PORTFOLIO TRANCHES" },
  { id: "heading-case-study", label: "BANK CASE STUDY" },
  { id: "heading-audit-checklist", label: "ONBOARDING AUDIT" },
  { id: "heading-faqs", label: "BANK FAQs" },
  { id: "heading-sources", label: "STATUTORY REFS" },
];

interface PortfolioRecoveryTableOfContentsProps {
  sections?: TOCSection[];
}

export default function PortfolioRecoveryTableOfContents({
  sections = PORTFOLIO_TOC_SECTIONS,
}: PortfolioRecoveryTableOfContentsProps) {
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
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveId(id);
      setIsOpen(false);
    }
  };

  const activeLabel = sections.find((s) => s.id === activeId)?.label || "INDEX";

  return (
    <>
      {/* Mobile Sticky Dropdown Bar */}
      <div className="lg:hidden w-full sticky top-16 z-30 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 px-4 py-2.5 shadow-md">
        <div className="relative" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            className="w-full flex items-center justify-between px-3.5 py-2 text-xs font-bold uppercase tracking-wider text-slate-100 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            <div className="flex items-center gap-2 truncate">
              <span className="text-red-400">Jump to:</span>
              <span className="truncate">{activeLabel}</span>
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

          {isOpen && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-slate-900 border border-slate-800 rounded-xl shadow-2xl max-h-72 overflow-y-auto py-1 z-50">
              {sections.map((section) => (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left px-4 py-2.5 text-xs font-semibold tracking-wide transition-colors ${
                    activeId === section.id
                      ? "bg-red-950/80 text-red-400 border-l-2 border-red-500"
                      : "text-slate-300 hover:bg-slate-800 hover:text-white"
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Desktop Sticky Sidebar */}
      <aside
        aria-label="Table of Contents"
        className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start space-y-4"
      >
        <div className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-sm">
          <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
            <p className="text-xs font-extrabold uppercase tracking-widest text-slate-900">
              Portfolio Navigation
            </p>
          </div>

          <nav className="space-y-1">
            {sections.map((section) => {
              const isActive = activeId === section.id;
              return (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-xs font-bold tracking-wide transition-all ${
                    isActive
                      ? "bg-red-50 text-red-600 border-l-2 border-red-600 font-extrabold translate-x-1"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  {section.label}
                </button>
              );
            })}
          </nav>

          <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] text-slate-500 leading-normal">
            <p className="font-semibold text-slate-700 mb-1">Institutional Desk</p>
            <p>Direct integration with Bank Core Banking &amp; LMS APIs via encrypted SFTP/REST.</p>
          </div>
        </div>
      </aside>
    </>
  );
}
