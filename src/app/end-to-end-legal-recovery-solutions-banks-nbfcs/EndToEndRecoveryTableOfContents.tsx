"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const RECOVERY_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-executive-overview", label: "EXECUTIVE OVERVIEW" },
  { id: "heading-judicial-precedents", label: "LANDMARK PRECEDENTS" },
  { id: "heading-evidentiary-factors", label: "SUCCESS PATTERNS" },
  { id: "heading-lifecycle-flow", label: "RECOVERY RAIL" },
  { id: "heading-operational-playbook", label: "5-STEP PLAYBOOK" },
  { id: "heading-statutory-benchmarks", label: "STATUTORY BENCHMARKS" },
  { id: "heading-asset-class-matrix", label: "PORTFOLIO SOLUTIONS" },
  { id: "heading-worked-case-study", label: "ENTERPRISE CASE STUDY" },
  { id: "heading-evidence-checklist", label: "EVIDENCE CHECKLIST" },
  { id: "heading-faqs", label: "ENTERPRISE FAQ" },
  { id: "heading-statutory-sources", label: "PRIMARY STATUTES" },
];

interface EndToEndRecoveryTableOfContentsProps {
  sections?: TOCSection[];
}

export default function EndToEndRecoveryTableOfContents({
  sections = RECOVERY_TOC_SECTIONS,
}: EndToEndRecoveryTableOfContentsProps) {
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
      const yOffset = -90; // offset for fixed navbar
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
          aria-controls="mobile-toc-dropdown"
          className="w-full flex items-center justify-between px-4 py-3 bg-white border border-slate-300 rounded-xl shadow-xs text-xs font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400"
        >
          <span className="flex items-center gap-2 truncate">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
            <span className="text-slate-500 font-semibold uppercase tracking-wider text-[10px]">
              Jump to Section:
            </span>
            <span className="text-slate-900 truncate">{activeSection.label}</span>
          </span>
          <span className="text-slate-500 text-xs ml-2">
            {isOpen ? "▲ Close" : "▼ Contents"}
          </span>
        </button>

        {isOpen && (
          <div
            id="mobile-toc-dropdown"
            className="absolute left-0 right-0 top-full mt-1 bg-white border border-slate-200 rounded-xl shadow-xl p-2 max-h-72 overflow-y-auto space-y-1 z-40"
          >
            {sections.map((s) => {
              const isActive = s.id === activeId;
              return (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  onClick={(e) => scrollToSection(e, s.id)}
                  className={`block px-3 py-2 rounded-lg text-xs font-bold transition-colors ${
                    isActive
                      ? "bg-slate-900 text-white"
                      : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  {s.label}
                </a>
              );
            })}
          </div>
        )}
      </div>

      {/* Desktop Sticky Sidebar Table of Contents */}
      <aside
        aria-label="Table of contents"
        className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-24 self-start bg-white border border-slate-200 rounded-2xl p-5 shadow-xs"
      >
        <div className="pb-3 mb-3 border-b border-slate-100">
          <p className="text-[11px] font-extrabold uppercase tracking-widest text-slate-400">
            Navigation Index
          </p>
          <h2 className="text-sm font-black text-slate-900 mt-0.5">
            Institutional Lifecycle
          </h2>
        </div>

        <nav className="space-y-1">
          {sections.map((s) => {
            const isActive = s.id === activeId;
            return (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={(e) => scrollToSection(e, s.id)}
                className={`group flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-bold transition-all duration-150 ${
                  isActive
                    ? "bg-slate-900 text-white shadow-xs"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full transition-transform ${
                    isActive
                      ? "bg-red-500 scale-125"
                      : "bg-slate-300 group-hover:bg-slate-400"
                  }`}
                />
                <span className="truncate">{s.label}</span>
              </a>
            );
          })}
        </nav>

        <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] text-slate-500 space-y-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="font-semibold text-slate-700">RBI Master Direction Aligned</span>
          </div>
          <p className="text-[10px] leading-relaxed text-slate-400">
            Statutory pre-litigation notices, Lok Adalat filings, summary suits &amp; DRT recovery.
          </p>
        </div>
      </aside>
    </>
  );
}
