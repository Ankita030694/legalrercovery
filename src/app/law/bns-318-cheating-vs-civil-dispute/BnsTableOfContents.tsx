"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const BNS_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-statute-overview", label: "STATUTE OVERVIEW" },
  { id: "heading-clauses-annotation", label: "CLAUSE ANNOTATIONS" },
  { id: "heading-bns-vs-civil", label: "CHEATING VS CIVIL" },
  { id: "heading-court-rulings", label: "APEX COURT PRECEDENTS" },
  { id: "heading-police-pattern", label: "WHEN POLICE ACT" },
  { id: "heading-decision-flow", label: "DECISION TREE" },
  { id: "heading-playbook", label: "5-STEP ENFORCEMENT" },
  { id: "heading-deadlines-table", label: "LIMITATION & PENALTIES" },
  { id: "heading-scenario-tabs", label: "DISPUTE SCENARIOS" },
  { id: "heading-worked-example", label: "WORKED CASE STUDY" },
  { id: "heading-evidence-checklist", label: "EVIDENCE CHECKLIST" },
  { id: "heading-faqs", label: "FAQ" },
  { id: "heading-sources", label: "STATUTORY REFS" },
];

interface BnsTableOfContentsProps {
  sections?: TOCSection[];
}

export default function BnsTableOfContents({
  sections = BNS_TOC_SECTIONS,
}: BnsTableOfContentsProps) {
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
      const top = el.getBoundingClientRect().top + window.scrollY - 110;
      window.scrollTo({ top, behavior: "smooth" });
      setActiveId(id);
      setIsOpen(false);
    }
  };

  const currentActiveSection = sections.find((s) => s.id === activeId) || sections[0];

  return (
    <>
      {/* Mobile Sticky Dropdown Navigation (lg:hidden) */}
      <div className="lg:hidden w-full sticky top-20 z-30 mb-6" ref={dropdownRef}>
        <div className="bg-white/95 backdrop-blur-md border border-slate-200 rounded-xl shadow-md p-2">
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-expanded={isOpen}
            aria-label="Table of Contents Navigation"
            className="w-full flex items-center justify-between px-3 py-2 text-xs font-bold text-slate-800 bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <div className="flex items-center gap-2 truncate">
              <span className="w-2 h-2 rounded-full bg-red-600 shrink-0" />
              <span className="text-slate-500 uppercase tracking-wider text-[10px]">Jump to:</span>
              <span className="truncate text-slate-900">{currentActiveSection?.label}</span>
            </div>
            <span
              className={`transform transition-transform duration-200 text-slate-500 font-bold ml-2 ${
                isOpen ? "rotate-180" : ""
              }`}
            >
              ▼
            </span>
          </button>

          {isOpen && (
            <div className="mt-2 py-1 max-h-72 overflow-y-auto divide-y divide-slate-100 bg-white rounded-lg border border-slate-200 shadow-xl">
              {sections.map((section, idx) => {
                const isActive = activeId === section.id;
                return (
                  <button
                    key={section.id}
                    type="button"
                    onClick={() => scrollTo(section.id)}
                    className={`w-full text-left px-3.5 py-2.5 text-xs font-semibold flex items-center justify-between transition-colors ${
                      isActive
                        ? "bg-red-50 text-red-600 font-bold"
                        : "text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    <span>
                      <span className="text-slate-400 mr-2 font-mono text-[10px]">{idx + 1}.</span>
                      {section.label}
                    </span>
                    {isActive && <span className="text-red-600 font-black text-xs">●</span>}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Desktop Sticky Sidebar Navigation (Hidden on Mobile) */}
      <aside
        aria-label="Article Table of Contents"
        className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start bg-white border border-slate-200 rounded-2xl p-4 shadow-sm"
      >
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
          <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-600">
            Contents Navigation
          </span>
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-red-50 text-red-600 border border-red-100">
            BNS 318 Guide
          </span>
        </div>

        <nav className="space-y-1">
          {sections.map((section, idx) => {
            const isActive = activeId === section.id;
            return (
              <button
                key={section.id}
                type="button"
                onClick={() => scrollTo(section.id)}
                className={`w-full text-left px-3 py-2 rounded-lg text-xs font-bold transition-all flex items-center justify-between ${
                  isActive
                    ? "bg-[#111827] text-white shadow-xs"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                <span className="truncate">
                  <span
                    className={`mr-2 font-mono text-[10px] ${
                      isActive ? "text-red-400" : "text-slate-400"
                    }`}
                  >
                    {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}.
                  </span>
                  {section.label}
                </span>
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0 ml-1" />}
              </button>
            );
          })}
        </nav>

        <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500 space-y-2">
          <p className="font-semibold text-slate-700">Need statutory legal recovery?</p>
          <p className="leading-relaxed">
            Legal notices preserve civil limitation under Limitation Act s.18 while compiling digital proof under Section 63 BSA.
          </p>
          <button
            type="button"
            onClick={() => scrollTo("heading-cta-block")}
            className="w-full text-center py-2 px-3 bg-red-50 text-[#DC2626] hover:bg-red-100 font-bold rounded-lg transition-colors cursor-pointer text-xs"
          >
            Start Legal Notice →
          </button>
        </div>
      </aside>
    </>
  );
}
