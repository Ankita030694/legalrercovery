"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const BANK_RECOVERY_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-framework-overview", label: "OVERVIEW & LAW" },
  { id: "heading-case-digest", label: "COURT RULINGS" },
  { id: "heading-pattern-analysis", label: "WHAT WINS RECOVERY" },
  { id: "heading-escalation-flow", label: "RESOLUTION RAIL" },
  { id: "heading-playbook", label: "5-STEP PLAYBOOK" },
  { id: "heading-benchmarks-table", label: "STATUTORY BENCHMARKS" },
  { id: "heading-problem-picker", label: "LOAN CATEGORIES" },
  { id: "heading-worked-example", label: "WORKED CASE STUDY" },
  { id: "heading-evidence-checklist", label: "BANK EVIDENCE DOSSIER" },
  { id: "heading-faqs", label: "FAQ" },
  { id: "heading-sources", label: "STATUTORY REFS" },
];

interface BankLoanRecoveryTableOfContentsProps {
  sections?: TOCSection[];
}

export default function BankLoanRecoveryTableOfContents({
  sections = BANK_RECOVERY_TOC_SECTIONS,
}: BankLoanRecoveryTableOfContentsProps) {
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
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-toc-list"
          className="w-full flex items-center justify-between px-4 py-3 bg-white border border-slate-200/90 rounded-xl shadow-xs text-xs font-bold text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-red-500 transition-colors"
        >
          <div className="flex items-center gap-2 truncate">
            <span className="w-2 h-2 rounded-full bg-red-600 shrink-0" />
            <span className="text-slate-400 font-medium">INDEX:</span>
            <span className="truncate text-slate-900">{activeSection?.label}</span>
          </div>
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
          <div
            id="mobile-toc-list"
            className="absolute left-0 right-0 top-full mt-1.5 bg-white border border-slate-200 rounded-xl shadow-xl max-h-80 overflow-y-auto z-40 p-2 divide-y divide-slate-100"
          >
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={(e) => scrollToSection(e, section.id)}
                className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-semibold transition-colors ${
                  activeId === section.id
                    ? "bg-red-50 text-red-700 font-bold"
                    : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                <span>{section.label}</span>
                {activeId === section.id && <span className="text-red-600 font-bold">●</span>}
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Desktop Sticky Table of Contents Sidebar */}
      <aside
        aria-label="Table of Contents"
        className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start bg-white rounded-2xl border border-slate-200/90 p-5 shadow-xs"
      >
        <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100">
          <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse" />
          <h2 className="text-xs font-black tracking-wider uppercase text-slate-800">
            Recovery Roadmap
          </h2>
        </div>
        <nav className="space-y-1">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              onClick={(e) => scrollToSection(e, section.id)}
              className={`block px-3 py-2 rounded-lg text-xs font-semibold transition-all ${
                activeId === section.id
                  ? "bg-red-50 text-red-700 font-bold border-l-2 border-red-600 translate-x-0.5"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
              }`}
            >
              {section.label}
            </a>
          ))}
        </nav>
      </aside>
    </>
  );
}
