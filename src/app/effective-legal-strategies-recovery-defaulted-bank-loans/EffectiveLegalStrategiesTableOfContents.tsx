"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const BANK_RECOVERY_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-executive-framework", label: "EXECUTIVE FRAMEWORK" },
  { id: "heading-statutory-tracks", label: "RECOVERY TRACKS" },
  { id: "heading-case-citations", label: "LANDMARK PRECEDENTS" },
  { id: "heading-process-lifecycle", label: "RECOVERY LIFECYCLE" },
  { id: "heading-category-playbook", label: "LOAN CATEGORIES" },
  { id: "heading-lok-adalat-strategy", label: "LOK ADALAT & ODR" },
  { id: "heading-matrix-table", label: "STRATEGY MATRIX" },
  { id: "heading-worked-example", label: "WORKED PORTFOLIO CASE" },
  { id: "heading-evidence-checklist", label: "EVIDENCE CHECKLIST" },
  { id: "heading-faqs", label: "FAQ" },
  { id: "heading-sources", label: "STATUTORY REFS" },
];

interface EffectiveLegalStrategiesTableOfContentsProps {
  sections?: TOCSection[];
}

export default function EffectiveLegalStrategiesTableOfContents({
  sections = BANK_RECOVERY_TOC_SECTIONS,
}: EffectiveLegalStrategiesTableOfContentsProps) {
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
      {/* Mobile Sticky Dropdown Header */}
      <div className="lg:hidden sticky top-16 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 px-4 py-3 shadow-xs">
        <div className="relative" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-xs font-bold text-slate-800 tracking-wider"
            aria-expanded={isOpen}
            aria-label="Table of Contents Menu"
          >
            <span className="flex items-center gap-2 truncate">
              <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
              <span className="text-slate-500 font-semibold text-[11px]">SECTION:</span>
              <span className="truncate">{activeSection?.label}</span>
            </span>
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
            <div className="absolute left-0 right-0 top-full mt-1.5 bg-white border border-slate-200 rounded-xl shadow-xl max-h-72 overflow-y-auto py-1 z-40">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => scrollToSection(e, section.id)}
                  className={`block px-4 py-2.5 text-xs font-semibold tracking-wider transition-colors ${
                    activeId === section.id
                      ? "text-[#DC2626] bg-red-50/80 font-bold border-l-3 border-[#DC2626]"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  {section.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Desktop Sticky Sidebar */}
      <aside
        aria-label="Table of Contents"
        className="hidden lg:block w-72 shrink-0 sticky top-24 self-start"
      >
        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs">
          <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100">
            <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
            <h2 className="text-xs font-black uppercase tracking-wider text-slate-900">
              STRATEGY OUTLINE
            </h2>
          </div>
          <nav className="space-y-1">
            {sections.map((section) => {
              const isActive = activeId === section.id;
              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => scrollToSection(e, section.id)}
                  className={`group flex items-center justify-between px-3 py-2 rounded-lg text-xs font-bold tracking-wider transition-all duration-150 ${
                    isActive
                      ? "text-[#DC2626] bg-red-50/90 font-black shadow-xs translate-x-1"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  <span className="truncate">{section.label}</span>
                  <span
                    className={`text-[10px] opacity-0 transition-opacity ${
                      isActive ? "opacity-100 text-[#DC2626]" : "group-hover:opacity-60"
                    }`}
                  >
                    →
                  </span>
                </a>
              );
            })}
          </nav>
          <div className="mt-5 pt-4 border-t border-slate-100">
            <div className="bg-slate-50 rounded-xl p-3 border border-slate-200">
              <p className="text-[11px] font-bold text-slate-900 uppercase tracking-wider">
                B2B Legal Recovery Hook
              </p>
              <p className="text-[11px] text-slate-600 mt-1 leading-snug">
                Shift 40%+ of retail &amp; MSME delinquent portfolios into Pre-Litigation Lok Adalat under LSAA 1987 before heavy DRT court fees.
              </p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
