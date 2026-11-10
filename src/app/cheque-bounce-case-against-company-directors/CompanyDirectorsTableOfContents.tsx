"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const COMPANY_DIRECTORS_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-overview", label: "OVERVIEW" },
  { id: "heading-myth-vs-fact", label: "MYTH VS FACT" },
  { id: "heading-case-digest", label: "COURT PRECEDENTS" },
  { id: "heading-liability-matrix", label: "DIRECTOR ROLES" },
  { id: "heading-escalation-flow", label: "RESOLUTION RAIL" },
  { id: "heading-playbook", label: "5-STEP PLAYBOOK" },
  { id: "heading-deadlines-table", label: "STATUTORY BENCHMARKS" },
  { id: "heading-problem-picker", label: "SCENARIOS & FIXES" },
  { id: "heading-worked-example", label: "WORKED EXAMPLE" },
  { id: "heading-evidence-checklist", label: "EVIDENCE CHECKLIST" },
  { id: "heading-faqs", label: "FAQ" },
  { id: "heading-sources", label: "STATUTORY REFS" },
];

interface CompanyDirectorsTableOfContentsProps {
  sections?: TOCSection[];
}

export default function CompanyDirectorsTableOfContents({
  sections = COMPANY_DIRECTORS_TOC_SECTIONS,
}: CompanyDirectorsTableOfContentsProps) {
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
            aria-expanded={isOpen}
            aria-label="Toggle Table of Contents"
          >
            <span>Sections</span>
            <span className={`transform transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}>▼</span>
          </button>
        </div>

        {/* Mobile Dropdown Panel */}
        {isOpen && (
          <div className="mt-3 pt-3 border-t border-slate-100 grid grid-cols-2 gap-1.5 max-h-64 overflow-y-auto">
            {sections.map((sec) => (
              <button
                key={sec.id}
                type="button"
                onClick={() => scrollToSection(sec.id)}
                className={`text-left px-2.5 py-2 rounded-lg text-xs font-bold transition-colors ${
                  activeId === sec.id
                    ? "bg-red-50 text-red-700 border-l-2 border-red-600"
                    : "text-slate-600 hover:bg-slate-50"
                }`}
              >
                {sec.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Desktop Sticky Sidebar */}
      <aside
        aria-label="Table of Contents"
        className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start bg-white border border-slate-200/90 rounded-2xl p-5 shadow-xs"
      >
        <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100">
          <span className="w-2 h-2 rounded-full bg-red-600" />
          <p className="text-xs font-black uppercase tracking-wider text-slate-700">Page Navigation</p>
        </div>

        <nav className="space-y-1">
          {sections.map((sec) => {
            const isActive = activeId === sec.id;
            return (
              <button
                key={sec.id}
                type="button"
                onClick={() => scrollToSection(sec.id)}
                className={`w-full text-left px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-between cursor-pointer ${
                  isActive
                    ? "bg-red-50/80 text-red-700 font-extrabold border-l-2 border-red-600 shadow-xs"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                <span className="truncate">{sec.label}</span>
                {isActive && <span className="text-[10px] text-red-600 font-black">●</span>}
              </button>
            );
          })}
        </nav>

        <div className="mt-6 pt-4 border-t border-slate-100">
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/70 text-slate-600 text-[11px] leading-relaxed">
            <span className="font-bold text-slate-900 block mb-1">Section 141 Prerequisite:</span>
            The company must be arraigned as Accused No. 1 before directors can be held vicariously liable (SC 3-Judge Bench).
          </div>
        </div>
      </aside>
    </>
  );
}
