"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const FNF_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-statute-overview", label: "STATUTE OVERVIEW" },
  { id: "heading-clause-annotation", label: "CLAUSE ANNOTATIONS" },
  { id: "heading-covered-components", label: "WAGES VS EXCLUSIONS" },
  { id: "heading-deadlines-penalties", label: "DEADLINES & FINES" },
  { id: "heading-order-digest", label: "COURT PRECEDENTS" },
  { id: "heading-pattern-analysis", label: "WINNING EVIDENCE" },
  { id: "heading-dispute-scenarios", label: "EXIT SCENARIOS" },
  { id: "heading-timeline-flow", label: "48H TIMELINE FLOW" },
  { id: "heading-escalation-playbook", label: "5-STEP PLAYBOOK" },
  { id: "heading-worked-example", label: "WORKED CALCULATION" },
  { id: "heading-evidence-checklist", label: "EVIDENCE CHECKLIST" },
  { id: "heading-hr-email-template", label: "HR DEMAND EMAIL" },
  { id: "heading-faqs", label: "FAQ" },
  { id: "heading-sources", label: "PRIMARY SOURCES" },
];

interface FnfTableOfContentsProps {
  sections?: TOCSection[];
}

export default function FnfTableOfContents({
  sections = FNF_TOC_SECTIONS,
}: FnfTableOfContentsProps) {
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
      const yOffset = -100;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveId(id);
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Sticky Dropdown Navigation */}
      <div className="lg:hidden sticky top-20 z-40 w-full mb-6" ref={dropdownRef}>
        <div className="bg-white/95 backdrop-blur-md border border-slate-200 rounded-xl shadow-md p-2">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between px-3 py-2 text-xs font-bold text-slate-800 bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
            aria-expanded={isOpen}
          >
            <span className="flex items-center gap-2 truncate">
              <span className="w-2 h-2 rounded-full bg-red-600 shrink-0" />
              <span className="text-slate-500 uppercase tracking-wider text-[10px]">Jump to:</span>
              <span className="truncate">
                {sections.find((s) => s.id === activeId)?.label || "Select Section"}
              </span>
            </span>
            <span className={`transform transition-transform text-slate-400 font-bold ml-2 ${isOpen ? "rotate-180" : ""}`}>
              ▼
            </span>
          </button>

          {isOpen && (
            <div className="mt-2 py-1 max-h-60 overflow-y-auto border-t border-slate-100 divide-y divide-slate-50">
              {sections.map((section) => (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left px-3 py-2 text-xs font-medium transition-colors flex items-center justify-between cursor-pointer ${
                    activeId === section.id
                      ? "text-red-600 bg-red-50/50 font-bold"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  <span>{section.label}</span>
                  {activeId === section.id && <span className="text-red-600 text-xs">●</span>}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Desktop Sticky Sidebar Navigation */}
      <aside
        aria-label="Table of Contents"
        className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start space-y-4"
      >
        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs">
          <div className="flex items-center gap-2 pb-3 border-b border-slate-100 mb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
            <p className="text-xs font-extrabold uppercase tracking-wider text-slate-900">
              Statutory Roadmap
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
                  className={`w-full text-left px-3 py-2 rounded-lg text-xs font-semibold transition-all duration-150 flex items-center justify-between group cursor-pointer ${
                    isActive
                      ? "text-white bg-[#1E293B] shadow-xs"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                  }`}
                >
                  <span className="truncate">{section.label}</span>
                  <span
                    className={`text-[10px] transform transition-transform ${
                      isActive ? "text-red-400 translate-x-0.5" : "text-transparent group-hover:text-slate-400"
                    }`}
                  >
                    →
                  </span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Quick Statutory Help Box in Sidebar */}
        <div className="bg-slate-900 text-white rounded-2xl p-4 border border-slate-800 shadow-xs space-y-2">
          <span className="text-[10px] uppercase font-extrabold tracking-wider text-red-400 block">
            Statutory Guarantee
          </span>
          <p className="text-xs text-slate-300 leading-relaxed">
            Section 17(2) of Code on Wages supersedes all corporate HR policies, 45-day exit cycles, and internal clearance bottlenecks.
          </p>
          <div className="pt-2 border-t border-slate-800">
            <p className="text-[11px] font-bold text-slate-200">Need immediate notice?</p>
            <p className="text-[10px] text-slate-400">Verified advocate draft delivered in 24h.</p>
          </div>
        </div>
      </aside>
    </>
  );
}
