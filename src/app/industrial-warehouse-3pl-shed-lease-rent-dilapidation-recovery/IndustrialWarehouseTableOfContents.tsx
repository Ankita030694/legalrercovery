"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const WAREHOUSE_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-overview", label: "STATUTORY OVERVIEW" },
  { id: "heading-order-15a", label: "ORDER XV-A CPC DEPOSIT" },
  { id: "heading-court-precedents", label: "LANDMARK COURT PRECEDENTS" },
  { id: "heading-decision-flow", label: "DECISION TREE FLOWCHART" },
  { id: "heading-statutory-matrix", label: "RECOVERABLE HEADS MATRIX" },
  { id: "heading-scenarios", label: "4 DEFAULT SCENARIOS" },
  { id: "heading-worked-example", label: "WORKED DILAPIDATION LEDGER" },
  { id: "heading-recovery-sop", label: "STEP-BY-STEP RECOVERY SOP" },
  { id: "heading-evidence-checklist", label: "BSA S.63 EVIDENCE CHECKLIST" },
  { id: "heading-faqs", label: "FREQUENTLY ASKED QUESTIONS" },
  { id: "heading-statutes", label: "STATUTORY CITATIONS" },
];

interface IndustrialWarehouseTableOfContentsProps {
  sections?: TOCSection[];
}

export default function IndustrialWarehouseTableOfContents({
  sections = WAREHOUSE_TOC_SECTIONS,
}: IndustrialWarehouseTableOfContentsProps) {
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
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setIsOpen(false);
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
            className="w-full flex items-center justify-between px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-800 shadow-sm transition-colors hover:bg-slate-50"
            aria-expanded={isOpen}
            aria-label="Table of Contents"
          >
            <span className="flex items-center gap-2 truncate">
              <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
              <span className="truncate">{activeSection?.label || "TABLE OF CONTENTS"}</span>
            </span>
            <svg
              className={`w-4 h-4 text-slate-500 transition-transform ${isOpen ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isOpen && (
            <div className="absolute left-0 right-0 mt-2 bg-white border border-slate-200 rounded-xl shadow-xl z-40 max-h-72 overflow-y-auto py-2">
              {sections.map((section) => (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left px-4 py-2.5 text-xs transition-colors flex items-center justify-between ${
                    activeId === section.id
                      ? "bg-red-50 text-[#DC2626] font-bold"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Desktop Sticky Aside */}
      <aside
        aria-label="Table of Contents"
        className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start"
      >
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100">
            <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Navigation Playbook
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
                  className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition-all duration-150 flex items-center justify-between ${
                    isActive
                      ? "bg-[#DC2626] text-white font-bold shadow-sm"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  <span className="truncate">{section.label}</span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0 ml-2" />
                  )}
                </button>
              );
            })}
          </nav>

          <div className="mt-6 pt-4 border-t border-slate-100">
            <div className="rounded-xl bg-slate-50 p-3 border border-slate-200/70 text-[11px] text-slate-600 space-y-1">
              <p className="font-semibold text-slate-800">Commercial Court &amp; Landlord Bench</p>
              <p className="text-[10px] leading-relaxed text-slate-500">
                Order XV-A CPC &bull; TPA s.106/108(m) &bull; Commercial Courts s.2(1)(c)(vii) &bull; Electricity Act s.56
              </p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
