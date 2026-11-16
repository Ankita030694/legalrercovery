"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const PROLONGATION_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-overview", label: "STATUTORY OVERVIEW" },
  { id: "heading-fatal-gap", label: "SECTION 55 STATUTORY TRAP" },
  { id: "heading-no-damage-clauses", label: "DEFEATING NO-DAMAGE CLAUSES" },
  { id: "heading-statutory-matrix", label: "PROLONGATION STATUTE MATRIX" },
  { id: "heading-decision-flow", label: "DELAY ESCALATION WORKFLOW" },
  { id: "heading-scenario-tabs", label: "4 PROLONGATION SCENARIOS" },
  { id: "heading-overheads-formula", label: "HUDSON & EICHLEAY FORMULAS" },
  { id: "heading-financial-calculation", label: "WORKED ₹8.09 CR CLAIM LEDGER" },
  { id: "heading-court-precedents", label: "SUPREME COURT PRECEDENTS" },
  { id: "heading-extra-items", label: "EXTRA ITEMS & BOQ DEVIATIONS" },
  { id: "heading-evidence-checklist", label: "BSA 2023 S.63 EVIDENCE AUDIT" },
  { id: "heading-faqs", label: "FREQUENTLY ASKED QUESTIONS" },
  { id: "heading-sources", label: "STATUTORY SOURCES" },
];

interface ProlongationClaimTableOfContentsProps {
  sections?: TOCSection[];
}

export default function ProlongationClaimTableOfContents({
  sections = PROLONGATION_TOC_SECTIONS,
}: ProlongationClaimTableOfContentsProps) {
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
          aria-expanded={isOpen}
          className="w-full flex items-center justify-between px-4 py-3 bg-white border border-slate-200 rounded-xl shadow-xs text-left"
        >
          <div className="flex items-center gap-2 overflow-hidden">
            <span className="w-2 h-2 rounded-full bg-[#DC2626] shrink-0" />
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider shrink-0">
              Jump to Section:
            </span>
            <span className="text-xs font-bold text-slate-900 truncate">
              {activeSection?.label}
            </span>
          </div>
          <svg
            className={`w-4 h-4 text-slate-500 transition-transform duration-200 shrink-0 ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {isOpen && (
          <div className="absolute left-0 right-0 mt-2 bg-white border border-slate-200 rounded-xl shadow-xl z-50 max-h-80 overflow-y-auto py-2">
            {sections.map((section, idx) => {
              const isActive = activeId === section.id;
              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => scrollToSection(e, section.id)}
                  className={`flex items-center gap-3 px-4 py-2.5 text-xs font-semibold transition-colors ${
                    isActive
                      ? "bg-red-50 text-[#DC2626] font-bold border-l-4 border-[#DC2626]"
                      : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  <span className="text-[10px] text-slate-400 font-mono w-4">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span>{section.label}</span>
                </a>
              );
            })}
          </div>
        )}
      </div>

      {/* Desktop Sticky Aside Table of Contents */}
      <aside className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start">
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
          <div className="flex items-center gap-2 pb-4 mb-4 border-b border-slate-100">
            <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626] animate-pulse" />
            <p className="text-xs font-black uppercase tracking-wider text-slate-900">
              EPC Prolongation Claim TOC
            </p>
          </div>
          <nav aria-label="Table of Contents" className="space-y-1">
            {sections.map((section, idx) => {
              const isActive = activeId === section.id;
              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => scrollToSection(e, section.id)}
                  className={`group flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                    isActive
                      ? "bg-[#DC2626] text-white font-bold shadow-sm"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  <span className="truncate pr-2">{section.label}</span>
                  <span
                    className={`text-[10px] font-mono shrink-0 ${
                      isActive ? "text-red-100" : "text-slate-400 group-hover:text-slate-600"
                    }`}
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </a>
              );
            })}
          </nav>
          <div className="mt-5 pt-4 border-t border-slate-100 text-[11px] text-slate-500 leading-snug">
            <p className="font-semibold text-slate-700 mb-1">Contractor Claims Desk</p>
            <p>Mandatory Section 55 ICA notice, Hudson formula overheads &amp; defeating exclusionary delay clauses.</p>
          </div>
        </div>
      </aside>
    </>
  );
}
