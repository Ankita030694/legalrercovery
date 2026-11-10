"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const FOREIGN_EMPLOYER_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-jurisdiction-overview", label: "OVERVIEW" },
  { id: "heading-cross-border-rulings", label: "LEGAL PRECEDENTS" },
  { id: "heading-pattern-analysis", label: "ENFORCEMENT PATTERNS" },
  { id: "heading-escalation-flow", label: "CROSS-BORDER RAIL" },
  { id: "heading-playbook", label: "5-STAGE PLAYBOOK" },
  { id: "heading-contract-matrix", label: "ENGAGEMENT MODELS" },
  { id: "heading-problem-picker", label: "WORKER SCENARIOS" },
  { id: "heading-worked-example", label: "WORKED CASE STUDY" },
  { id: "heading-evidence-checklist", label: "EVIDENCE AUDIT" },
  { id: "heading-faqs", label: "FAQ" },
  { id: "heading-sources", label: "LEGAL REFS" },
];

interface ForeignEmployerTableOfContentsProps {
  sections?: TOCSection[];
}

export default function ForeignEmployerTableOfContents({
  sections = FOREIGN_EMPLOYER_TOC_SECTIONS,
}: ForeignEmployerTableOfContentsProps) {
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
      const yOffset = -90; // offset for fixed navbar + breathing room
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
          aria-label="Toggle Table of Contents"
          className="w-full flex items-center justify-between px-4 py-3 bg-white border border-slate-200 rounded-xl shadow-sm text-xs font-bold text-slate-800 tracking-wide uppercase"
        >
          <div className="flex items-center gap-2 overflow-hidden">
            <span className="w-2 h-2 rounded-full bg-[#DC2626] shrink-0 animate-pulse" />
            <span className="text-slate-400 font-semibold shrink-0">Section:</span>
            <span className="truncate text-slate-900 font-extrabold">{activeSection?.label}</span>
          </div>
          <svg
            className={`w-4 h-4 text-slate-500 transition-transform duration-200 shrink-0 ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {isOpen && (
          <div className="absolute left-0 right-0 mt-1 mx-2 sm:mx-0 p-2 bg-white border border-slate-200 rounded-xl shadow-xl max-h-80 overflow-y-auto z-40 space-y-1">
            {sections.map((section, idx) => {
              const isActive = activeId === section.id;
              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => scrollToSection(e, section.id)}
                  className={`flex items-center justify-between px-3 py-2 rounded-lg text-xs font-bold transition-colors ${
                    isActive
                      ? "bg-red-50 text-[#DC2626] font-black"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  <span className="truncate">
                    {idx + 1}. {section.label}
                  </span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] shrink-0" />}
                </a>
              );
            })}
          </div>
        )}
      </div>

      {/* Desktop Sticky Sidebar Table of Contents */}
      <aside
        aria-label="Table of Contents"
        className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-4"
      >
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
            <p className="text-xs font-black text-slate-900 uppercase tracking-wider">
              Navigation Index
            </p>
          </div>
          <span className="text-[10px] font-extrabold px-2 py-0.5 bg-slate-100 text-slate-600 rounded">
            11 Sections
          </span>
        </div>

        <nav className="space-y-1">
          {sections.map((section, idx) => {
            const isActive = activeId === section.id;
            return (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={(e) => scrollToSection(e, section.id)}
                className={`group flex items-center justify-between px-3 py-2 rounded-lg text-xs transition-all duration-150 ${
                  isActive
                    ? "bg-red-50 text-[#DC2626] font-black shadow-xs"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900 font-semibold"
                }`}
              >
                <div className="flex items-center gap-2.5 overflow-hidden">
                  <span
                    className={`text-[10px] font-bold ${
                      isActive ? "text-[#DC2626]" : "text-slate-400 group-hover:text-slate-600"
                    }`}
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="truncate tracking-wide">{section.label}</span>
                </div>
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] shrink-0" />
                )}
              </a>
            );
          })}
        </nav>

        <div className="pt-3 border-t border-slate-100">
          <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/70 text-[11px] text-slate-600 space-y-1.5">
            <p className="font-bold text-slate-900 flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-[#DC2626]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              Fast Cross-Border Turnaround
            </p>
            <p className="leading-relaxed">
              Dispatched via International Registered Speed Post &amp; Electronic Notice under Section 63 BSA.
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}
