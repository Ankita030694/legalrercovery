"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const INSURANCE_MIS_SELLING_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-overview", label: "OVERVIEW" },
  { id: "heading-checklist-wizard", label: "FREE-LOOK WIZARD" },
  { id: "heading-evidence-matrix", label: "EVIDENCE MATRIX" },
  { id: "heading-myth-vs-fact", label: "MYTH VS FACT" },
  { id: "heading-case-digest", label: "OMBUDSMAN PRECEDENTS" },
  { id: "heading-escalation-flow", label: "RESOLUTION RAIL" },
  { id: "heading-playbook", label: "5-STEP PLAYBOOK" },
  { id: "heading-deadlines-table", label: "STATUTORY BENCHMARKS" },
  { id: "heading-problem-picker", label: "SCENARIOS & FIXES" },
  { id: "heading-worked-example", label: "WORKED EXAMPLE" },
  { id: "heading-template-download", label: "NOTICE TEMPLATE" },
  { id: "heading-faqs", label: "FAQ" },
  { id: "heading-sources", label: "STATUTORY REFS" },
];

interface InsuranceMisSellingTableOfContentsProps {
  sections?: TOCSection[];
}

export default function InsuranceMisSellingTableOfContents({
  sections = INSURANCE_MIS_SELLING_TOC_SECTIONS,
}: InsuranceMisSellingTableOfContentsProps) {
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
    }
    setIsOpen(false);
  };

  const activeSection = sections.find((s) => s.id === activeId) || sections[0];

  return (
    <>
      {/* Mobile Top Bar Dropdown (Sticky on Small Screens) */}
      <div className="lg:hidden sticky top-16 z-30 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 px-4 py-2.5 shadow-sm">
        <div className="relative" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between px-3.5 py-2 text-xs font-bold text-slate-800 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            aria-expanded={isOpen}
            aria-label="Table of contents selector"
          >
            <span className="flex items-center gap-2 truncate">
              <span className="text-[10px] font-black uppercase tracking-wider text-red-600 bg-red-50 px-1.5 py-0.5 rounded">
                Section
              </span>
              <span className="truncate">{activeSection?.label}</span>
            </span>
            <span className="text-slate-400 text-xs shrink-0 ml-2">
              {isOpen ? "▲" : "▼"}
            </span>
          </button>

          {isOpen && (
            <div className="absolute top-full left-0 right-0 mt-1 max-h-72 overflow-y-auto bg-white border border-slate-200 rounded-xl shadow-xl z-50 py-1.5 divide-y divide-slate-100">
              {sections.map((section) => (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left px-3.5 py-2 text-xs transition-colors flex items-center justify-between ${
                    activeId === section.id
                      ? "bg-red-50 text-red-700 font-bold"
                      : "text-slate-700 hover:bg-slate-50 font-medium"
                  }`}
                >
                  <span>{section.label}</span>
                  {activeId === section.id && (
                    <span className="w-1.5 h-1.5 rounded-full bg-red-600 shrink-0 ml-2" />
                  )}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Desktop Sticky Sidebar */}
      <aside
        aria-label="Table of Contents"
        className="hidden lg:block w-64 shrink-0 sticky top-24 self-start bg-white border border-slate-200 rounded-2xl p-4 shadow-xs"
      >
        <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
          <span className="text-[11px] font-black uppercase tracking-wider text-slate-400">
            Guide Roadmap
          </span>
          <span className="text-[10px] font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded-full">
            13 Sections
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
                className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs transition-all flex items-center justify-between group cursor-pointer ${
                  isActive
                    ? "bg-red-50 text-red-700 font-bold shadow-xs"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50 font-medium"
                }`}
              >
                <span className="truncate">{section.label}</span>
                <span
                  className={`w-1.5 h-1.5 rounded-full transition-all shrink-0 ml-2 ${
                    isActive
                      ? "bg-red-600 scale-125"
                      : "bg-transparent group-hover:bg-slate-300"
                  }`}
                />
              </button>
            );
          })}
        </nav>

        <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500 leading-snug">
          Need urgent help? <br />
          <a href="#heading-cta-block" className="text-red-600 font-bold hover:underline">
            Serve Notice — ₹1,499 →
          </a>
        </div>
      </aside>
    </>
  );
}
