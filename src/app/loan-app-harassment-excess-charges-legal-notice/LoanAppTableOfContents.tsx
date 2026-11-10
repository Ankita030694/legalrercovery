"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const LOAN_APP_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-overview", label: "OVERVIEW" },
  { id: "heading-myth-vs-fact", label: "MYTH VS FACT" },
  { id: "heading-case-digest", label: "COURT PRECEDENTS" },
  { id: "heading-rbi-rules", label: "RBI GUIDELINES" },
  { id: "heading-escalation-flow", label: "RESOLUTION RAIL" },
  { id: "heading-playbook", label: "5-STEP PLAYBOOK" },
  { id: "heading-benchmarks-table", label: "STATUTORY BENCHMARKS" },
  { id: "heading-problem-picker", label: "SCENARIOS & FIXES" },
  { id: "heading-worked-example", label: "WORKED EXAMPLE" },
  { id: "heading-evidence-checklist", label: "EVIDENCE CHECKLIST" },
  { id: "heading-faqs", label: "FAQ" },
  { id: "heading-sources", label: "STATUTORY REFS" },
];

interface LoanAppTableOfContentsProps {
  sections?: TOCSection[];
}

export default function LoanAppTableOfContents({
  sections = LOAN_APP_TOC_SECTIONS,
}: LoanAppTableOfContentsProps) {
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

  const activeLabel = sections.find((s) => s.id === activeId)?.label || "NAVIGATION";

  return (
    <>
      {/* Mobile Top Bar / Dropdown (Visible on < lg screens) */}
      <div className="lg:hidden w-full sticky top-[68px] z-30 mb-6 bg-slate-900/95 backdrop-blur-md border border-slate-800 rounded-xl p-3 shadow-md" ref={dropdownRef}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#DC2626] animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
              On this page:
            </span>
            <span className="text-xs font-extrabold text-white truncate max-w-[170px] sm:max-w-xs">
              {activeLabel}
            </span>
          </div>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="px-3 py-1 text-xs font-bold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-md transition-colors cursor-pointer"
            aria-expanded={isOpen}
            aria-label="Toggle Table of Contents"
          >
            {isOpen ? "Close" : "Jump to"}
          </button>
        </div>

        {isOpen && (
          <div className="mt-3 pt-3 border-t border-slate-800 grid grid-cols-2 gap-1.5 max-h-60 overflow-y-auto">
            {sections.map((section) => {
              const isActive = activeId === section.id;
              return (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => scrollToSection(section.id)}
                  className={`text-left text-[11px] px-2.5 py-1.5 rounded font-medium transition-colors cursor-pointer truncate ${
                    isActive
                      ? "bg-[#DC2626] text-white font-bold"
                      : "text-slate-300 hover:bg-slate-800 hover:text-white"
                  }`}
                >
                  {section.label}
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Desktop Sticky Sidebar (Visible on lg+ screens) */}
      <aside
        aria-label="Page Table of Contents"
        className="hidden lg:block w-64 shrink-0 sticky top-28 self-start bg-white border border-slate-200/90 rounded-2xl p-5 shadow-xs"
      >
        <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100">
          <div className="w-2 h-2 rounded-full bg-[#DC2626]" />
          <p className="text-xs font-extrabold text-slate-900 tracking-wider uppercase">
            Guide Sections
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
                className={`w-full text-left text-xs px-3 py-2 rounded-lg transition-all duration-150 flex items-center justify-between group cursor-pointer ${
                  isActive
                    ? "bg-slate-900 text-white font-bold shadow-xs"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900 font-medium"
                }`}
              >
                <span className="truncate">{section.label}</span>
                <span
                  className={`text-[10px] ml-1.5 opacity-0 group-hover:opacity-100 transition-opacity ${
                    isActive ? "opacity-100 text-red-400 font-black" : "text-slate-400"
                  }`}
                >
                  →
                </span>
              </button>
            );
          })}
        </nav>

        <div className="mt-6 pt-4 border-t border-slate-100">
          <div className="p-3 bg-red-50/70 border border-red-100 rounded-xl">
            <p className="text-[11px] font-bold text-red-900 mb-1">Facing Ongoing Threat Calls?</p>
            <p className="text-[10px] text-red-700 leading-snug">
              Notice served to NBFC GRO halts agent calls within 48–72 hours under RBI Fair Practices Code.
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}
