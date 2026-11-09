"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const DEFECTIVE_CAR_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-overview", label: "LEMON CAR OVERVIEW" },
  { id: "heading-cpa-liability", label: "PRODUCT LIABILITY (CPA)" },
  { id: "heading-precedents", label: "COURT PRECEDENTS" },
  { id: "heading-myth-vs-fact", label: "MYTH VS FACT" },
  { id: "heading-lemon-criteria", label: "LEMON TEST CRITERIA" },
  { id: "heading-resolution-flow", label: "ESCALATION FLOWCHART" },
  { id: "heading-step-by-step", label: "5-STEP PLAYBOOK" },
  { id: "heading-key-facts", label: "STATUTORY BENCHMARKS" },
  { id: "heading-scenarios", label: "DEFECT SCENARIOS" },
  { id: "heading-worked-example", label: "WORKED EXAMPLE" },
  { id: "heading-evidence-checklist", label: "EVIDENCE CHECKLIST" },
  { id: "heading-faqs", label: "FAQS" },
  { id: "heading-sources", label: "STATUTORY REFS" },
];

interface DefectiveCarTableOfContentsProps {
  sections?: TOCSection[];
}

export default function DefectiveCarTableOfContents({
  sections = DEFECTIVE_CAR_TOC_SECTIONS,
}: DefectiveCarTableOfContentsProps) {
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

  const scrollTo = (id: string) => {
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
      {/* Mobile Sticky Selector (Below 1024px) */}
      <div className="lg:hidden sticky top-16 z-30 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 px-4 py-2.5 shadow-sm mb-6">
        <div className="relative" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-900 rounded-xl text-xs font-bold transition-colors cursor-pointer border border-slate-300"
            aria-expanded={isOpen}
            aria-haspopup="listbox"
          >
            <div className="flex items-center gap-2 truncate pr-2">
              <span className="text-[#DC2626] font-black uppercase text-[10px] tracking-wider">NAVIGATE GUIDE:</span>
              <span className="truncate text-slate-800">{activeSection.label}</span>
            </div>
            <svg
              className={`w-4 h-4 text-slate-600 transition-transform duration-200 shrink-0 ${isOpen ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isOpen && (
            <div
              role="listbox"
              className="absolute left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-slate-200 py-2 z-50 max-h-72 overflow-y-auto"
            >
              {sections.map((section) => {
                const isActive = activeId === section.id;
                return (
                  <button
                    key={section.id}
                    type="button"
                    onClick={() => scrollTo(section.id)}
                    className={`w-full text-left px-4 py-2 text-xs font-semibold transition-colors flex items-center justify-between ${
                      isActive ? "bg-red-50 text-[#DC2626] font-bold" : "text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    <span>{section.label}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Desktop Sticky Sidebar (1024px and above) */}
      <aside
        aria-label="Table of Contents"
        className="hidden lg:block lg:w-72 shrink-0 sticky top-24 self-start bg-white rounded-2xl border border-slate-200 p-5 shadow-xs"
      >
        <div className="flex items-center gap-2 pb-3 mb-4 border-b border-slate-100">
          <span className="w-2 h-2 rounded-full bg-[#DC2626] animate-pulse" />
          <h2 className="text-xs font-black uppercase tracking-wider text-slate-900">
            Guide Sections (G6)
          </h2>
        </div>

        <nav className="space-y-1">
          {sections.map((section) => {
            const isActive = activeId === section.id;
            return (
              <button
                key={section.id}
                type="button"
                onClick={() => scrollTo(section.id)}
                className={`w-full text-left px-3 py-2 rounded-lg text-xs font-bold transition-all flex items-center justify-between group cursor-pointer ${
                  isActive
                    ? "bg-red-50 text-[#DC2626] border-l-3 border-[#DC2626] pl-2.5 font-black shadow-xs"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                <span className="truncate pr-2">{section.label}</span>
                <span
                  className={`text-[10px] opacity-0 group-hover:opacity-100 transition-opacity ${
                    isActive ? "opacity-100 text-[#DC2626]" : "text-slate-400"
                  }`}
                >
                  →
                </span>
              </button>
            );
          })}
        </nav>

        <div className="mt-6 pt-4 border-t border-slate-100">
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 space-y-1">
            <span className="text-[10px] font-black uppercase tracking-wider text-slate-500 block">
              Vehicle Lemon Law
            </span>
            <p className="text-[11px] text-slate-600 leading-snug font-medium">
              Section 84 Consumer Protection Act 2019 + NCDRC mandatory replacement jurisprudence.
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}
