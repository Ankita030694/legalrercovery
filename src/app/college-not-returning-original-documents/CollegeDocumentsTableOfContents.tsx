"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const COLLEGE_DOCS_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-ugc-prohibition", label: "UGC & AICTE RULES" },
  { id: "heading-court-orders", label: "COURT PRECEDENTS" },
  { id: "heading-statutory-table", label: "SANCTIONS & FORUMS" },
  { id: "heading-problem-picker", label: "DISPUTE SCENARIOS" },
  { id: "heading-escalation-protocol", label: "5-STEP ESCALATION" },
  { id: "heading-worked-example", label: "WORKED EXAMPLE" },
  { id: "heading-evidence-checklist", label: "EVIDENCE DOSSIER" },
  { id: "heading-takeaways", label: "KEY TAKEAWAYS" },
  { id: "heading-faqs", label: "FAQ" },
  { id: "heading-sources", label: "LEGAL REFERENCES" },
];

interface CollegeDocumentsTableOfContentsProps {
  sections?: TOCSection[];
}

export default function CollegeDocumentsTableOfContents({
  sections = COLLEGE_DOCS_TOC_SECTIONS,
}: CollegeDocumentsTableOfContentsProps) {
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
          aria-label="Table of Contents Quick Jump"
          className="w-full flex items-center justify-between px-4 py-2.5 bg-white border border-slate-200/90 rounded-xl shadow-xs text-xs font-semibold text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-red-500"
        >
          <div className="flex items-center gap-2 truncate">
            <span className="w-2 h-2 rounded-full bg-red-600 shrink-0" />
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
              Navigation:
            </span>
            <span className="truncate text-slate-900 font-bold">{activeSection?.label}</span>
          </div>
          <span className="text-slate-400 ml-2 text-xs font-black">{isOpen ? "▲" : "▼"}</span>
        </button>

        {isOpen && (
          <div className="absolute left-0 right-0 mt-2 bg-white border border-slate-200 rounded-xl shadow-xl z-40 max-h-72 overflow-y-auto p-2 divide-y divide-slate-100">
            {sections.map((s) => {
              const isActive = s.id === activeId;
              return (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  onClick={(e) => scrollToSection(e, s.id)}
                  className={`block px-3 py-2 text-xs font-medium rounded-lg transition-colors ${
                    isActive
                      ? "bg-red-50 text-red-600 font-bold"
                      : "text-slate-600 hover:bg-slate-50"
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
        aria-label="Table of Contents"
        className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start bg-white border border-slate-200/80 rounded-2xl p-5 shadow-xs"
      >
        <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100 text-xs font-black text-slate-900 uppercase tracking-wider">
          <span className="w-2 h-2 rounded-full bg-red-600" />
          <span>Page Table of Contents</span>
        </div>

        <nav className="space-y-1">
          {sections.map((s) => {
            const isActive = s.id === activeId;
            return (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={(e) => scrollToSection(e, s.id)}
                className={`group flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold transition-all duration-150 ${
                  isActive
                    ? "bg-red-50 text-red-700 font-bold shadow-xs border-l-4 border-red-600 pl-2.5"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                <span className="truncate">{s.label}</span>
                {isActive && <span className="text-[10px] text-red-600 font-bold ml-1">●</span>}
              </a>
            );
          })}
        </nav>

        {/* Quick Action in TOC */}
        <div className="mt-6 pt-4 border-t border-slate-100 space-y-2">
          <a
            href="#heading-ugc-prohibition"
            className="block w-full py-2 px-3 text-center rounded-lg bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 transition-colors"
          >
            Review UGC &amp; AICTE Rules
          </a>
          <p className="text-[11px] text-slate-600 text-center leading-tight">
            Retention of original certificates is strictly banned by UGC &amp; High Courts.
          </p>
        </div>
      </aside>
    </>
  );
}
