"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const LOAN_ECS_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-overview", label: "OVERVIEW" },
  { id: "heading-why-active", label: "WHY ECS REMAINS ACTIVE" },
  { id: "heading-legal-framework", label: "RBI & STATUTORY LAWS" },
  { id: "heading-resolution-flow", label: "MANDATE CANCELLATION FLOW" },
  { id: "heading-case-digest", label: "COURT & OMBUDSMAN ORDERS" },
  { id: "heading-dispute-matrix", label: "MANDATE SCENARIOS" },
  { id: "heading-playbook", label: "5-STEP RECOVERY PLAYBOOK" },
  { id: "heading-deadlines-table", label: "STATUTORY BENCHMARKS" },
  { id: "heading-worked-example", label: "WORKED EXAMPLE" },
  { id: "heading-evidence-checklist", label: "EVIDENCE CHECKLIST" },
  { id: "heading-faqs", label: "FAQS" },
  { id: "heading-sources", label: "PRIMARY SOURCES" },
];

interface LoanEcsTableOfContentsProps {
  sections?: TOCSection[];
}

export default function LoanEcsTableOfContents({
  sections = LOAN_ECS_TOC_SECTIONS,
}: LoanEcsTableOfContentsProps) {
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
          <div className="mt-3 pt-3 border-t border-slate-200 max-h-64 overflow-y-auto space-y-1">
            {sections.map((section) => (
              <button
                key={section.id}
                type="button"
                onClick={() => scrollToSection(section.id)}
                className={`w-full text-left px-2.5 py-1.5 rounded text-xs font-semibold block transition-colors cursor-pointer ${
                  activeId === section.id
                    ? "bg-red-50 text-red-700 font-bold border-l-2 border-red-600"
                    : "text-slate-600 hover:bg-slate-50"
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Desktop Sticky Sidebar */}
      <aside className="hidden lg:block w-72 shrink-0">
        <div className="sticky top-28 bg-white border border-slate-200/90 rounded-2xl p-5 shadow-xs">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-600"></span>
              On This Page
            </p>
            <span className="text-[11px] text-slate-500 font-mono font-medium">{sections.length} Parts</span>
          </div>
          <nav aria-label="Table of contents" className="space-y-1">
            {sections.map((section) => {
              const isActive = activeId === section.id;
              return (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition-all duration-150 flex items-center justify-between group cursor-pointer ${
                    isActive
                      ? "bg-red-50 text-red-700 font-bold shadow-xs border-l-2 border-red-600 pl-2.5"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  <span className="truncate">{section.label}</span>
                  <span
                    className={`text-[10px] font-mono transition-opacity ${
                      isActive ? "text-red-600 opacity-100 font-semibold" : "text-slate-300 opacity-0 group-hover:opacity-100"
                    }`}
                  >
                    →
                  </span>
                </button>
              );
            })}
          </nav>
        </div>
      </aside>
    </>
  );
}
