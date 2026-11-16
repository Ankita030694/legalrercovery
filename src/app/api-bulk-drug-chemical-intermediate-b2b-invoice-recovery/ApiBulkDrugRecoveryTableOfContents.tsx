"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const API_BULK_DRUG_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-credit-traps", label: "BULK DRUG CREDIT TRAPS" },
  { id: "heading-decision-tree", label: "5-STAGE ESCALATION RAIL" },
  { id: "heading-statutory-matrix", label: "STATUTORY RECOVERY MATRIX" },
  { id: "heading-scenario-tabs", label: "4 COMMERCIAL SCENARIOS" },
  { id: "heading-mobilox-defense", label: "DEFEATING MOBILOX DEFENSES" },
  { id: "heading-retention-samples", label: "RETENTION SAMPLES & S.42" },
  { id: "heading-usance-lc", label: "USANCE LC & BILLS OF EXCHANGE" },
  { id: "heading-worked-example", label: "WORKED ₹2.85 CR LEDGER" },
  { id: "heading-bsa-evidence-checklist", label: "BSA S.63 AUDIT CHECKLIST" },
  { id: "heading-cta", label: "INSTITUTIONAL B2B DESK" },
  { id: "heading-faqs", label: "FREQUENTLY ASKED QUESTIONS" },
  { id: "heading-sources", label: "STATUTORY PRECEDENTS" },
];

interface ApiBulkDrugRecoveryTableOfContentsProps {
  sections?: TOCSection[];
}

export default function ApiBulkDrugRecoveryTableOfContents({
  sections = API_BULK_DRUG_TOC_SECTIONS,
}: ApiBulkDrugRecoveryTableOfContentsProps) {
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
      <div className="lg:hidden sticky top-20 z-30 bg-slate-50/95 backdrop-blur-sm border-b border-slate-200 py-3 px-4 -mx-4 sm:-mx-6 mb-6">
        <div className="relative" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between px-4 py-2.5 bg-white border border-slate-200 rounded-xl shadow-xs text-left"
            aria-expanded={isOpen}
            aria-label="Table of contents selector"
          >
            <span className="text-xs font-bold text-slate-700 truncate pr-2">
              <span className="text-slate-400 font-medium mr-1.5">Section:</span>
              {activeSection?.label}
            </span>
            <svg
              className={`w-4 h-4 text-slate-500 shrink-0 transition-transform duration-200 ${
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
            <div className="absolute left-0 right-0 mt-1 bg-white border border-slate-200 rounded-xl shadow-xl py-1 z-40 max-h-72 overflow-y-auto">
              {sections.map((section) => {
                const isActive = activeId === section.id;
                return (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    onClick={(e) => scrollToSection(e, section.id)}
                    className={`block px-4 py-2.5 text-xs font-semibold tracking-wide transition-colors ${
                      isActive
                        ? "bg-[#DC2626] text-white"
                        : "text-slate-700 hover:bg-slate-50 hover:text-[#DC2626]"
                    }`}
                  >
                    {section.label}
                  </a>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Desktop Sticky Aside */}
      <aside className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start">
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
          <p className="text-[11px] font-extrabold uppercase tracking-widest text-[#DC2626] mb-3">
            On This Page &bull; API Playbook
          </p>
          <nav className="space-y-1">
            {sections.map((section) => {
              const isActive = activeId === section.id;
              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => scrollToSection(e, section.id)}
                  className={`block px-3 py-2 rounded-xl text-xs font-semibold tracking-tight transition-all duration-150 ${
                    isActive
                      ? "bg-[#DC2626] text-white shadow-xs"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  {section.label}
                </a>
              );
            })}
          </nav>
        </div>
      </aside>
    </>
  );
}
