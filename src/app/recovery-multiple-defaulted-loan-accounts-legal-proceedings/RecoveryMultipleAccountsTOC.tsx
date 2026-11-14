"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const RECOVERY_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-portfolio-overview", label: "PORTFOLIO OVERVIEW" },
  { id: "heading-legal-framework", label: "STATUTORY BENCHMARKS" },
  { id: "heading-batch-filings", label: "BATCH LITIGATION PROTOCOLS" },
  { id: "heading-resolution-flow", label: "RESOLUTION RAIL" },
  { id: "heading-playbook", label: "5-STEP PLAYBOOK" },
  { id: "heading-comparison-table", label: "FORUM COMPARISON" },
  { id: "heading-segment-tabs", label: "LOAN SEGMENT RESOLUTION" },
  { id: "heading-institutional-case-study", label: "WORKED CASE STUDY" },
  { id: "heading-evidence-checklist", label: "EVIDENCE CHECKLIST" },
  { id: "heading-faqs", label: "PORTFOLIO FAQS" },
  { id: "heading-sources", label: "STATUTORY REFS" },
];

interface RecoveryMultipleAccountsTOCProps {
  sections?: TOCSection[];
}

export default function RecoveryMultipleAccountsTOC({
  sections = RECOVERY_TOC_SECTIONS,
}: RecoveryMultipleAccountsTOCProps) {
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
      window.history.pushState(null, "", `#${id}`);
      setActiveId(id);
      setIsOpen(false);
    }
  };

  const activeSection = sections.find((s) => s.id === activeId) || sections[0];

  return (
    <>
      {/* Mobile / Tablet Sticky Dropdown */}
      <div
        ref={dropdownRef}
        className="lg:hidden sticky top-20 z-30 w-full mb-6 py-2 bg-slate-50/95 backdrop-blur-sm select-none"
      >
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between px-4 py-3 bg-white rounded-xl border border-slate-200 shadow-sm text-left transition-colors"
          aria-expanded={isOpen}
          aria-label="Table of Contents Menu"
        >
          <div className="flex items-center gap-2 overflow-hidden">
            <span className="w-2 h-2 rounded-full bg-red-600 shrink-0" />
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider shrink-0">
              Section:
            </span>
            <span className="text-xs font-bold text-slate-900 truncate">
              {activeSection.label}
            </span>
          </div>
          <span
            className={`text-slate-400 font-black text-sm shrink-0 transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          >
            ↓
          </span>
        </button>

        {isOpen && (
          <div className="absolute left-0 right-0 top-full mt-1 bg-white rounded-xl border border-slate-200 shadow-xl overflow-hidden max-h-72 overflow-y-auto z-40">
            <div className="p-2 space-y-0.5">
              {sections.map((sec) => {
                const isActive = activeId === sec.id;
                return (
                  <a
                    key={sec.id}
                    href={`#${sec.id}`}
                    onClick={(e) => scrollToSection(e, sec.id)}
                    className={`block px-3 py-2 rounded-lg text-xs font-bold transition-all ${
                      isActive
                        ? "bg-red-50 text-red-700"
                        : "text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    {sec.label}
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Desktop Sticky Table of Contents Sidebar */}
      <aside
        aria-label="Portfolio Recovery Navigation"
        className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-4"
      >
        <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
          <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
          <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-900">
            Navigation Index
          </h2>
        </div>

        <nav className="space-y-1">
          {sections.map((sec) => {
            const isActive = activeId === sec.id;
            return (
              <a
                key={sec.id}
                href={`#${sec.id}`}
                onClick={(e) => scrollToSection(e, sec.id)}
                className={`block px-3 py-2 rounded-xl text-xs font-bold tracking-tight transition-all ${
                  isActive
                    ? "bg-red-50 text-red-700 border-l-4 border-red-600 pl-2 shadow-xs"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                {sec.label}
              </a>
            );
          })}
        </nav>

        <div className="pt-3 border-t border-slate-100">
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-[11px] text-slate-600 space-y-1">
            <span className="font-bold text-slate-800 block uppercase tracking-wider text-[10px]">
              Institutional Retainership
            </span>
            <p className="leading-relaxed">
              Consolidated legal proceedings for banks, NBFCs &amp; fintech credit desks.
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}
