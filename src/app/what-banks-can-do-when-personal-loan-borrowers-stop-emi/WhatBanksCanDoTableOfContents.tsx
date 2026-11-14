"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const BANK_EMI_DEFAULT_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-overview", label: "OVERVIEW" },
  { id: "heading-legal-framework", label: "STATUTORY REMEDIES" },
  { id: "heading-escalation-flow", label: "RECOVERY RAIL" },
  { id: "heading-playbook", label: "5-STEP PLAYBOOK" },
  { id: "heading-remedies-table", label: "REMEDY MATRIX" },
  { id: "heading-scenario-tabs", label: "DEFAULT SCENARIOS" },
  { id: "heading-case-citations", label: "COURT PRECEDENTS" },
  { id: "heading-worked-example", label: "WORKED CASE" },
  { id: "heading-evidence-checklist", label: "EVIDENCE AUDIT" },
  { id: "heading-faqs", label: "FAQ" },
  { id: "heading-sources", label: "STATUTORY REFS" },
];

interface WhatBanksCanDoTableOfContentsProps {
  sections?: TOCSection[];
}

export default function WhatBanksCanDoTableOfContents({
  sections = BANK_EMI_DEFAULT_TOC_SECTIONS,
}: WhatBanksCanDoTableOfContentsProps) {
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
          aria-expanded={isOpen}
          className="w-full flex items-center justify-between px-4 py-3 bg-white border border-slate-300 rounded-xl shadow-sm text-left text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          <div className="flex items-center gap-2 truncate">
            <span className="text-[10px] font-bold uppercase tracking-wider text-red-600 bg-red-50 px-2 py-0.5 rounded border border-red-200">
              Index
            </span>
            <span className="truncate">{activeSection?.label || "Table of Contents"}</span>
          </div>
          <svg
            className={`w-4 h-4 text-slate-500 transition-transform duration-200 flex-shrink-0 ${
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
          <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-slate-200 rounded-xl shadow-xl overflow-hidden z-40 max-h-72 overflow-y-auto">
            <ul className="py-2 divide-y divide-slate-100">
              {sections.map((section, idx) => {
                const isActive = activeId === section.id;
                return (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      onClick={(e) => scrollToSection(e, section.id)}
                      className={`block px-4 py-2.5 text-xs font-medium transition-colors ${
                        isActive
                          ? "bg-red-50 text-red-700 font-bold border-l-4 border-red-600 pl-3"
                          : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                      }`}
                    >
                      <span className="text-slate-400 mr-2 text-[10px]">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      {section.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>

      {/* Desktop Sticky Sidebar */}
      <aside className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
          <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
            Navigation Rail
          </p>
          <span className="text-[10px] font-extrabold text-red-600 bg-red-50 px-2 py-0.5 rounded border border-red-200">
            Lender Manual
          </span>
        </div>

        <nav aria-label="Table of Contents">
          <ul className="space-y-1">
            {sections.map((section, idx) => {
              const isActive = activeId === section.id;
              return (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    onClick={(e) => scrollToSection(e, section.id)}
                    className={`group flex items-center justify-between px-3 py-2 rounded-lg text-xs transition-all duration-150 ${
                      isActive
                        ? "bg-red-600 text-white font-bold shadow-sm shadow-red-500/20"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-100 font-medium"
                    }`}
                  >
                    <div className="flex items-center gap-2 truncate">
                      <span
                        className={`text-[10px] font-mono shrink-0 ${
                          isActive ? "text-red-200" : "text-slate-400 group-hover:text-slate-600"
                        }`}
                      >
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <span className="truncate">{section.label}</span>
                    </div>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0 ml-2" />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="mt-6 pt-4 border-t border-slate-100">
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/60">
            <p className="text-[11px] font-semibold text-slate-800 mb-1">
              Delinquency Remedial Unit
            </p>
            <p className="text-[11px] text-slate-600 leading-normal mb-2">
              Statutory 30-day notice rule applies under Section 25 PSS Act from NACH bounce memo.
            </p>
            <a
              href="#heading-escalation-flow"
              className="text-[11px] font-bold text-red-600 hover:text-red-700 inline-flex items-center gap-1"
            >
              View notice timelines &rarr;
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}
