"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const SCHOOL_FEE_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-overview", label: "OVERVIEW & HC RULE" },
  { id: "heading-statutory-matrix", label: "STATUTORY MATRIX" },
  { id: "heading-decision-tree", label: "5-STAGE RECOVERY RAIL" },
  { id: "heading-scenario-tabs", label: "4 PARENT SCENARIOS" },
  { id: "heading-worked-math", label: "WORKED ₹3.96L LEDGER" },
  { id: "heading-evidence-checklist", label: "ADMISSION & BSA s.63" },
  { id: "heading-ncpcr-guardrails", label: "NCPCR & CBSE SAFE SOP" },
  { id: "heading-cta-desk", label: "SERVE PARENT NOTICE" },
  { id: "heading-ind17-spokes", label: "IND-17 EDUCATION LINKS" },
  { id: "heading-faqs", label: "FAQ" },
  { id: "heading-sources", label: "STATUTORY SOURCES" },
];

interface SchoolFeeTableOfContentsProps {
  sections?: TOCSection[];
}

export default function SchoolFeeTableOfContents({
  sections = SCHOOL_FEE_TOC_SECTIONS,
}: SchoolFeeTableOfContentsProps) {
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
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -100;
      const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const activeSection = sections.find((s) => s.id === activeId) || sections[0];

  return (
    <>
      {/* Mobile Sticky Dropdown */}
      <div className="lg:hidden sticky top-20 z-30 bg-slate-50/95 backdrop-blur-sm border-b border-slate-200 py-3 px-4 -mx-4 sm:-mx-6 mb-4">
        <div className="relative" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Toggle Table of Contents"
            className="w-full flex items-center justify-between bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-xs font-bold text-slate-900 shadow-sm cursor-pointer"
          >
            <span className="flex items-center gap-2 truncate">
              <span className="w-2 h-2 rounded-full bg-[#DC2626] shrink-0" />
              <span className="uppercase tracking-wider text-slate-500">Jump to:</span>
              <span className="text-slate-900 truncate">{activeSection?.label}</span>
            </span>
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
            <div className="absolute left-0 right-0 mt-2 bg-white border border-slate-200 rounded-xl shadow-xl py-2 max-h-72 overflow-y-auto z-40">
              {sections.map((section) => {
                const isActive = activeId === section.id;
                return (
                  <button
                    key={section.id}
                    type="button"
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full text-left px-4 py-2 text-xs transition-colors cursor-pointer ${
                      isActive
                        ? "bg-[#DC2626] text-white font-bold"
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
      <aside className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start">
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
          <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-3 px-2">
            School Recovery Playbook
          </p>
          <nav aria-label="Table of Contents" className="space-y-1">
            {sections.map((section) => {
              const isActive = activeId === section.id;
              return (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-xs transition-all cursor-pointer ${
                    isActive
                      ? "bg-[#DC2626] text-white font-bold shadow-sm"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 font-medium"
                  }`}
                >
                  {section.label}
                </button>
              );
            })}
          </nav>
        </div>
      </aside>
    </>
  );
}
