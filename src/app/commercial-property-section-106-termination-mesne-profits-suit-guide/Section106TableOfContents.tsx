"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const SECTION_106_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-overview", label: "TPA S.106 STRATEGIC IMPERATIVE" },
  { id: "heading-bare-act-timelines", label: "BARE ACT TIMELINE & LIMITATION" },
  { id: "heading-decision-tree", label: "5-STAGE RECOVERY FLOWCHART" },
  { id: "heading-precedents", label: "LANDMARK PRECEDENTS & VIDYA DROLIA" },
  { id: "heading-mesne-profits-law", label: "MESNE PROFITS & PENAL HOLDOVER" },
  { id: "heading-scenario-tabs", label: "4 COMMERCIAL TENANT SCENARIOS" },
  { id: "heading-defense-matrix", label: "DEBTOR DEFENSE PRE-EMPTION" },
  { id: "heading-worked-example", label: "WORKED ₹2.13 CR RECOVERY LEDGER" },
  { id: "heading-bsa-evidence", label: "BSA S.63 NOTICE AUDIT CHECKLIST" },
  { id: "heading-cta", label: "INSTITUTIONAL B2B DESK" },
  { id: "heading-faqs", label: "FREQUENTLY ASKED QUESTIONS" },
  { id: "heading-sources", label: "STATUTORY AUTHORITIES" },
];

interface Section106TableOfContentsProps {
  sections?: TOCSection[];
}

export default function Section106TableOfContents({
  sections = SECTION_106_TOC_SECTIONS,
}: Section106TableOfContentsProps) {
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
      const yOffset = -90;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveId(id);
      setIsOpen(false);
    }
  };

  const activeSection = sections.find((s) => s.id === activeId) || sections[0];

  return (
    <>
      {/* Mobile Sticky Bar */}
      <div className="lg:hidden sticky top-20 z-30 bg-slate-50/95 backdrop-blur-sm border-b border-slate-200 py-3 px-4 -mx-4 sm:-mx-6 mb-6">
        <div className="relative" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between px-4 py-2.5 bg-white border border-slate-200 rounded-xl shadow-xs text-left"
            aria-expanded={isOpen}
            aria-label="Table of Contents navigation"
          >
            <span className="text-xs font-bold text-slate-700 truncate">
              {activeSection ? activeSection.label : "Table of Contents"}
            </span>
            <svg
              className={`w-4 h-4 text-slate-500 transition-transform ${isOpen ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isOpen && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-slate-200 rounded-xl shadow-lg py-2 z-40 max-h-72 overflow-y-auto">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => scrollToSection(e, section.id)}
                  className={`block px-4 py-2 text-xs transition-colors ${
                    activeId === section.id
                      ? "bg-red-50 text-[#DC2626] font-bold border-l-2 border-[#DC2626]"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  {section.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Desktop Sticky Aside */}
      <aside
        aria-label="Table of Contents"
        className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start bg-white border border-slate-200 rounded-2xl p-5 shadow-xs"
      >
        <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100">
          <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
          <p className="text-[11px] font-bold uppercase tracking-wider text-slate-800">
            Guide Navigation
          </p>
        </div>
        <nav className="space-y-1">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              onClick={(e) => scrollToSection(e, section.id)}
              className={`block px-3 py-2 rounded-lg text-xs transition-all ${
                activeId === section.id
                  ? "bg-[#DC2626] text-white font-bold shadow-xs translate-x-0.5"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
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
