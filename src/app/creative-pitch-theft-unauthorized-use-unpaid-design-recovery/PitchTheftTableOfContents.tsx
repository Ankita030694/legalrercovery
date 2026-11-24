"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const PITCH_THEFT_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-statutory-summary", label: "STATUTORY SUMMARY" },
  { id: "heading-idea-expression-dichotomy", label: "IDEA VS EXPRESSION (R.G. ANAND)" },
  { id: "heading-breach-of-confidence", label: "BREACH OF CONFIDENCE (ZEE TELEFILMS)" },
  { id: "heading-springboard-doctrine", label: "SPRINGBOARD DOCTRINE" },
  { id: "heading-statutory-matrix", label: "STATUTORY REMEDY MATRIX" },
  { id: "heading-interactive-scenarios", label: "PITCH THEFT SCENARIOS" },
  { id: "heading-worked-damage-assessment", label: "WORKED DAMAGE ASSESSMENT" },
  { id: "heading-evidence-bsa-checklist", label: "EVIDENCE & BSA S.63 CHECKLIST" },
  { id: "heading-debtor-defense-preemption", label: "DEFENSE PRE-EMPTION TABLE" },
  { id: "heading-faqs", label: "FREQUENTLY ASKED QUESTIONS" },
];

interface PitchTheftTableOfContentsProps {
  sections?: TOCSection[];
}

export default function PitchTheftTableOfContents({
  sections = PITCH_THEFT_TOC_SECTIONS,
}: PitchTheftTableOfContentsProps) {
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

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -90;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveId(id);
      setIsOpen(false);
    }
  };

  const activeSection = sections.find((s) => s.id === activeId) || sections[0];

  return (
    <>
      {/* Mobile Sticky Selector */}
      <div className="lg:hidden sticky top-20 z-30 bg-slate-50/95 backdrop-blur-sm border-b border-slate-200 py-3 px-4 -mx-4 sm:-mx-6 mb-4">
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between px-4 py-2.5 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm font-semibold text-slate-800 shadow-sm"
            aria-expanded={isOpen}
            type="button"
          >
            <span className="flex items-center gap-2 truncate">
              <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
              <span className="text-slate-500 font-normal">Jump to:</span>
              <span className="truncate">{activeSection?.label}</span>
            </span>
            <svg
              className={`w-4 h-4 shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isOpen && (
            <div className="absolute left-0 right-0 mt-2 bg-white border border-slate-200 rounded-xl shadow-xl max-h-72 overflow-y-auto z-40 py-2">
              {sections.map((section) => {
                const isActive = activeId === section.id;
                return (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full text-left px-4 py-2 text-xs font-medium transition-colors ${
                      isActive
                        ? "bg-red-50 text-[#DC2626] font-bold"
                        : "text-slate-700 hover:bg-slate-100"
                    }`}
                  >
                    {section.label}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Desktop Sticky Sidebar */}
      <aside className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
        <p className="text-[10px] uppercase font-bold tracking-widest text-slate-400 mb-4 px-2">
          Table of Contents
        </p>
        <nav className="space-y-1" aria-label="Table of contents">
          {sections.map((section) => {
            const isActive = activeId === section.id;
            return (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`w-full text-left px-3 py-2 text-xs font-semibold rounded-lg transition-all ${
                  isActive
                    ? "bg-[#DC2626] text-white shadow-sm font-bold"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                {section.label}
              </button>
            );
          })}
        </nav>

        <div className="mt-6 pt-5 border-t border-slate-200">
          <p className="text-[11px] font-bold text-slate-900 mb-1">Facing Creative Pitch Theft?</p>
          <p className="text-[11px] text-slate-500 mb-3 leading-relaxed">
            Issue a high-priority fact-verified notice demanding copyright injunction, account of profits, and kill fees.
          </p>
          <a
            href="/user/new-recovery"
            className="block text-center w-full py-2 bg-[#DC2626] hover:bg-[#B91C1C] text-white rounded-lg text-xs font-bold transition-colors"
          >
            Draft Pitch Theft Notice (₹999)
          </a>
        </div>
      </aside>
    </>
  );
}
