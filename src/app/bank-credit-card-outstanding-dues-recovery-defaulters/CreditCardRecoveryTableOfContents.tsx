"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const CREDIT_CARD_RECOVERY_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-statutory-overview", label: "OVERVIEW" },
  { id: "heading-judicial-rulings", label: "COURT RULINGS" },
  { id: "heading-revolving-credit-nature", label: "REVOLVING DEBT ANALYSIS" },
  { id: "heading-statutory-channels", label: "RECOVERY CHANNELS" },
  { id: "heading-bsa-digital-evidence", label: "BSA 2023 DIGITAL EVIDENCE" },
  { id: "heading-escalation-playbook", label: "5-STAGE PLAYBOOK" },
  { id: "heading-remedy-comparison", label: "REMEDY MATRIX" },
  { id: "heading-worked-example", label: "WORKED RECOVERY CASE" },
  { id: "heading-evidence-checklist", label: "EVIDENCE CHECKLIST" },
  { id: "heading-faqs", label: "FAQS" },
  { id: "heading-sources", label: "PRIMARY SOURCES" },
];

interface CreditCardRecoveryTableOfContentsProps {
  sections?: TOCSection[];
}

export default function CreditCardRecoveryTableOfContents({
  sections = CREDIT_CARD_RECOVERY_TOC_SECTIONS,
}: CreditCardRecoveryTableOfContentsProps) {
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
      const yOffset = -100;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveId(id);
      setIsOpen(false);
    }
  };

  const activeSection = sections.find((s) => s.id === activeId) || sections[0];

  return (
    <>
      {/* Mobile Sticky Dropdown Bar */}
      <div className="lg:hidden sticky top-16 z-30 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 px-4 py-3 shadow-xs">
        <div className="relative" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-left text-xs font-bold text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-red-500"
            aria-expanded={isOpen}
            aria-label="Table of Contents"
          >
            <span className="flex items-center gap-2 truncate">
              <span className="w-2 h-2 rounded-full bg-red-600 shrink-0" />
              <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider shrink-0">
                Index:
              </span>
              <span className="truncate">{activeSection?.label}</span>
            </span>
            <svg
              className={`w-4 h-4 text-slate-500 transition-transform duration-200 shrink-0 ${
                isOpen ? "transform rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isOpen && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-slate-200 rounded-xl shadow-xl max-h-72 overflow-y-auto z-40 py-1.5 divide-y divide-slate-100">
              {sections.map((section) => {
                const isActive = activeId === section.id;
                return (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    onClick={(e) => scrollToSection(e, section.id)}
                    className={`block px-4 py-2.5 text-xs font-bold transition-colors ${
                      isActive
                        ? "bg-red-50 text-red-600 font-extrabold border-l-4 border-red-600"
                        : "text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    {section.label}
                  </a>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Desktop Sticky Sidebar */}
      <aside
        className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 space-y-4 select-none"
        aria-label="Table of Contents"
      >
        <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
            <span className="text-xs font-extrabold uppercase tracking-wider text-slate-900 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-600" />
              Navigation Index
            </span>
            <span className="text-[11px] font-semibold text-slate-600">
              {sections.length} Sections
            </span>
          </div>

          <nav className="space-y-1">
            {sections.map((section) => {
              const isActive = activeId === section.id;
              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => scrollToSection(e, section.id)}
                  className={`group flex items-center px-3 py-2 text-xs rounded-xl font-bold transition-all duration-150 ${
                    isActive
                      ? "bg-red-600 text-white shadow-xs shadow-red-200"
                      : "text-slate-600 hover:text-slate-950 hover:bg-slate-100/80"
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full mr-2.5 transition-colors ${
                      isActive ? "bg-white" : "bg-slate-300 group-hover:bg-slate-400"
                    }`}
                  />
                  <span className="truncate">{section.label}</span>
                </a>
              );
            })}
          </nav>
        </div>

        {/* Quick B2B Trust Box */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-4 border border-slate-700/60 shadow-xs text-xs space-y-2">
          <div className="flex items-center gap-1.5 text-red-400 font-extrabold text-[11px] uppercase tracking-wider">
            <span>⚖️ Section 63 BSA 2023 Ready</span>
          </div>
          <p className="text-slate-300 text-[11px] leading-relaxed">
            All credit card recovery notices are paired with electronic statements, digital hash audit logs, and speed post barcodes admissible before commercial courts.
          </p>
        </div>
      </aside>
    </>
  );
}
