"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const CASHLESS_CLAIM_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-overview", label: "OVERVIEW" },
  { id: "heading-timelines-mandate", label: "1-HR & 3-HR NORMS" },
  { id: "heading-denial-vs-repudiation", label: "DENIAL VS REPUDIATION" },
  { id: "heading-statutory-table", label: "IRDAI TIMELINES TABLE" },
  { id: "heading-escalation-flow", label: "ESCALATION FLOWCHART" },
  { id: "heading-problem-picker", label: "SCENARIOS & FIXES" },
  { id: "heading-playbook", label: "5-STEP PLAYBOOK" },
  { id: "heading-worked-example", label: "WORKED EXAMPLE" },
  { id: "heading-case-digest", label: "COURT PRECEDENTS" },
  { id: "heading-evidence-checklist", label: "EVIDENCE CHECKLIST" },
  { id: "heading-scope", label: "OUR SCOPE" },
  { id: "heading-faqs", label: "FAQ" },
  { id: "heading-sources", label: "STATUTORY REFS" },
];

interface CashlessClaimTableOfContentsProps {
  sections?: TOCSection[];
}

export default function CashlessClaimTableOfContents({
  sections = CASHLESS_CLAIM_TOC_SECTIONS,
}: CashlessClaimTableOfContentsProps) {
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
            aria-label="Toggle Table of Contents"
          >
            <span>Sections</span>
            <svg
              className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="mt-3 pt-3 border-t border-slate-100 max-h-72 overflow-y-auto space-y-1">
            {sections.map((section) => (
              <button
                key={section.id}
                type="button"
                onClick={() => scrollToSection(section.id)}
                className={`w-full text-left px-2.5 py-1.5 rounded-md text-xs font-medium transition-colors ${
                  activeId === section.id
                    ? "bg-red-50 text-red-600 font-bold"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Desktop Sticky Sidebar */}
      <aside className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start space-y-4">
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
          <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100">
            <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
            <p className="text-xs uppercase tracking-widest font-black text-slate-700">Guide Index</p>
          </div>
          <nav className="space-y-1 max-h-[calc(100vh-220px)] overflow-y-auto pr-1">
            {sections.map((section, idx) => {
              const isActive = activeId === section.id;
              return (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left flex items-start gap-2.5 px-3 py-2 rounded-lg text-xs font-semibold transition-all ${
                    isActive
                      ? "bg-red-50 text-red-600 shadow-sm"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  <span
                    className={`font-mono text-[10px] mt-0.5 shrink-0 ${
                      isActive ? "text-red-500 font-bold" : "text-slate-400"
                    }`}
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="leading-snug">{section.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Quick Help Card */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-4 border border-slate-700 shadow-md">
          <p className="text-[10px] uppercase tracking-wider font-extrabold text-red-400 mb-1">Emergency Discharge?</p>
          <p className="text-xs text-slate-300 leading-relaxed mb-3">
            If the hospital or TPA delays your discharge authorization past 3 hours, IRDAI mandates that the insurer pays any room rent beyond the 3-hour mark.
          </p>
          <button
            type="button"
            onClick={() => scrollToSection("heading-playbook")}
            className="w-full py-1.5 px-2 bg-red-600 hover:bg-red-700 text-white font-bold text-xs rounded-lg transition-colors text-center cursor-pointer"
          >
            View 5-Step Escalation
          </button>
        </div>
      </aside>
    </>
  );
}
