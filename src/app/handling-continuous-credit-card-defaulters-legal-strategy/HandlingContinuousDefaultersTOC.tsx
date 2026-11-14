"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const DEFAULTERS_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-overview", label: "OVERVIEW" },
  { id: "heading-legal-framework", label: "STATUTORY GROUNDS" },
  { id: "heading-court-precedents", label: "JUDICIAL RULINGS" },
  { id: "heading-recovery-strategy", label: "RECOVERY HIERARCHY" },
  { id: "heading-bank-playbook", label: "5-STEP PLAYBOOK" },
  { id: "heading-benchmarks-table", label: "STATUTORY BENCHMARKS" },
  { id: "heading-strategy-picker", label: "DEFAULT TYPOLOGIES" },
  { id: "heading-worked-example", label: "CASE STUDY" },
  { id: "heading-evidence-checklist", label: "EVIDENCE CHECKLIST" },
  { id: "heading-faqs", label: "FAQ" },
  { id: "heading-sources", label: "STATUTORY REFS" },
];

interface HandlingContinuousDefaultersTOCProps {
  sections?: TOCSection[];
}

export default function HandlingContinuousDefaultersTOC({
  sections = DEFAULTERS_TOC_SECTIONS,
}: HandlingContinuousDefaultersTOCProps) {
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
      const yOffset = -90; // offset for 80px fixed navbar
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
      {/* Mobile / Tablet Sticky Dropdown Table of Contents */}
      <div
        ref={dropdownRef}
        className="lg:hidden sticky top-20 z-30 w-full mb-6 py-2 bg-slate-50/95 backdrop-blur-sm select-none"
      >
        {/* Dropdown Toggle Pill */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          className="w-full flex items-center justify-between px-4 py-3 bg-white rounded-xl border border-slate-200 shadow-sm text-left font-bold text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          <div className="flex items-center gap-2 overflow-hidden">
            <span className="shrink-0 w-2 h-2 rounded-full bg-red-600 animate-pulse" />
            <span className="text-slate-500 uppercase text-[10px] tracking-wider shrink-0">Section:</span>
            <span className="truncate text-slate-900 font-extrabold">{activeSection.label}</span>
          </div>
          <svg
            className={`w-4 h-4 text-slate-500 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* Dropdown List */}
        {isOpen && (
          <div className="mt-2 bg-white rounded-xl border border-slate-200 shadow-xl overflow-hidden py-1 max-h-72 overflow-y-auto">
            {sections.map((sec, idx) => {
              const isCurrent = sec.id === activeId;
              return (
                <a
                  key={sec.id}
                  href={`#${sec.id}`}
                  onClick={(e) => scrollToSection(e, sec.id)}
                  className={`flex items-center justify-between px-4 py-2.5 text-xs font-semibold transition-colors ${
                    isCurrent
                      ? "bg-red-50 text-red-700 font-bold border-l-4 border-red-600"
                      : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  <span>
                    <span className="text-slate-400 mr-2 font-mono">{String(idx + 1).padStart(2, "0")}</span>
                    {sec.label}
                  </span>
                  {isCurrent && <span className="text-red-600 text-xs font-bold">●</span>}
                </a>
              );
            })}
          </div>
        )}
      </div>

      {/* Desktop Sticky Sidebar */}
      <aside className="hidden lg:block w-72 shrink-0 sticky top-28 self-start">
        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
            <h2 className="text-xs font-black uppercase tracking-wider text-slate-900 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-600" />
              Navigation Index
            </h2>
            <span className="text-[10px] font-bold text-slate-400 font-mono">
              {sections.length} SECTIONS
            </span>
          </div>

          <nav className="space-y-1">
            {sections.map((sec, idx) => {
              const isCurrent = sec.id === activeId;
              return (
                <a
                  key={sec.id}
                  href={`#${sec.id}`}
                  onClick={(e) => scrollToSection(e, sec.id)}
                  className={`group flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold transition-all ${
                    isCurrent
                      ? "bg-red-50 text-red-700 font-bold shadow-xs border border-red-200/60"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  <span className="flex items-center gap-2.5 truncate">
                    <span
                      className={`font-mono text-[10px] ${
                        isCurrent ? "text-red-600 font-bold" : "text-slate-400 group-hover:text-slate-600"
                      }`}
                    >
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className="truncate">{sec.label}</span>
                  </span>
                  {isCurrent && (
                    <span className="w-1.5 h-1.5 rounded-full bg-red-600 shrink-0 ml-2" />
                  )}
                </a>
              );
            })}
          </nav>

          <div className="mt-5 pt-4 border-t border-slate-100">
            <p className="text-[11px] text-slate-500 leading-normal">
              Statutory guidance for Banking Risk, Fraud Control &amp; Legal Recovery Teams under CICRA, Order 37 CPC &amp; BNS.
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}
