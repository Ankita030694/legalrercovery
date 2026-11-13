"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const EMI_RECOVERY_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-framework-overview", label: "SMA & NPA TIMELINES" },
  { id: "heading-case-digest", label: "LANDMARK RULINGS" },
  { id: "heading-pattern-analysis", label: "ARRESTING SLIPPAGE" },
  { id: "heading-escalation-flow", label: "RESOLUTION RAIL" },
  { id: "heading-playbook", label: "5-STEP PLAYBOOK" },
  { id: "heading-deadlines-table", label: "STATUTORY BENCHMARKS" },
  { id: "heading-problem-picker", label: "DELINQUENCY SCENARIOS" },
  { id: "heading-worked-example", label: "WORKED CASE STUDY" },
  { id: "heading-evidence-checklist", label: "EVIDENCE DOSSIER" },
  { id: "heading-faqs", label: "FAQ" },
  { id: "heading-sources", label: "STATUTORY REFS" },
];

interface BorrowerEmiRecoveryTableOfContentsProps {
  sections?: TOCSection[];
}

export default function BorrowerEmiRecoveryTableOfContents({
  sections = EMI_RECOVERY_TOC_SECTIONS,
}: BorrowerEmiRecoveryTableOfContentsProps) {
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
      const yOffset = -90; // offset for 80px fixed navbar + breathing room
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
          aria-label="Table of contents selector"
          className="w-full flex items-center justify-between px-4 py-3 bg-white border border-slate-200 rounded-xl shadow-xs text-left"
        >
          <div className="flex items-center gap-2.5 min-w-0">
            <span className="w-2 h-2 rounded-full bg-red-600 shrink-0" />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 shrink-0">
              On this page:
            </span>
            <span className="text-xs font-semibold text-slate-900 truncate">
              {activeSection?.label}
            </span>
          </div>
          <svg
            className={`w-4 h-4 text-slate-500 transition-transform duration-200 shrink-0 ml-2 ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {isOpen && (
          <div className="absolute left-0 right-0 mt-1 max-h-72 overflow-y-auto bg-white border border-slate-200 rounded-xl shadow-xl z-40 py-1 divide-y divide-slate-100">
            {sections.map((sec, idx) => {
              const isCurrent = sec.id === activeId;
              return (
                <a
                  key={sec.id}
                  href={`#${sec.id}`}
                  onClick={(e) => scrollToSection(e, sec.id)}
                  className={`flex items-center justify-between px-4 py-2.5 text-xs transition-colors ${
                    isCurrent
                      ? "bg-red-50 text-red-600 font-bold"
                      : "text-slate-700 hover:bg-slate-50 hover:text-slate-900 font-medium"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span className="text-[10px] text-slate-400 font-mono w-4">
                      {(idx + 1).toString().padStart(2, "0")}
                    </span>
                    <span>{sec.label}</span>
                  </span>
                  {isCurrent && <span className="text-red-600 text-[10px]">●</span>}
                </a>
              );
            })}
          </div>
        )}
      </div>

      {/* Desktop Sticky Sidebar Table of Contents */}
      <aside
        aria-label="Table of contents"
        className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 select-none"
      >
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <span className="text-xs font-extrabold uppercase tracking-wider text-slate-900">
              Table of Contents
            </span>
            <span className="text-[10px] font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded-full">
              Legal Guide
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
                  className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs transition-all ${
                    isCurrent
                      ? "bg-red-50 text-red-600 font-bold translate-x-1"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900 font-medium"
                  }`}
                >
                  <span
                    className={`text-[10px] font-mono shrink-0 ${
                      isCurrent ? "text-red-500 font-bold" : "text-slate-400"
                    }`}
                  >
                    {(idx + 1).toString().padStart(2, "0")}
                  </span>
                  <span className="truncate">{sec.label}</span>
                </a>
              );
            })}
          </nav>
        </div>
      </aside>
    </>
  );
}
