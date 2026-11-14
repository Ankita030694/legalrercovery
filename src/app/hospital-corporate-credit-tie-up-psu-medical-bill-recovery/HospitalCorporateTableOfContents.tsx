"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const CORPORATE_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-overview", label: "CREDIT BILLING BOTTLENECKS" },
  { id: "heading-decision-tree", label: "5-STAGE RECOVERY TREE" },
  { id: "heading-statutory-matrix", label: "STATUTORY MATRIX" },
  { id: "heading-scenario-tabs", label: "CREDIT FAILURE MODES" },
  { id: "heading-order-37-cpc", label: "ORDER XXXVII SUMMARY SUIT" },
  { id: "heading-section-80-psu", label: "PSU SECTION 80 CPC NOTICE" },
  { id: "heading-worked-example", label: "RECONCILIATION LEDGER" },
  { id: "heading-evidence-checklist", label: "BSA S.63 EVIDENCE CHECKLIST" },
  { id: "heading-cta", label: "INSTITUTIONAL ACTIONS" },
  { id: "heading-faqs", label: "FAQ" },
  { id: "heading-sources", label: "STATUTORY SOURCES" },
];

interface HospitalCorporateTableOfContentsProps {
  sections?: TOCSection[];
}

export default function HospitalCorporateTableOfContents({
  sections = CORPORATE_TOC_SECTIONS,
}: HospitalCorporateTableOfContentsProps) {
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
            aria-label="Table of contents selector"
          >
            <div className="flex items-center gap-2 min-w-0">
              <span className="w-2 h-2 rounded-full bg-[#DC2626] shrink-0" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 shrink-0">
                Jump To:
              </span>
              <span className="text-xs font-bold text-slate-900 truncate">
                {activeSection?.label}
              </span>
            </div>
            <svg
              className={`w-4 h-4 text-slate-500 shrink-0 transition-transform duration-200 ${
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
            <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-200 rounded-xl shadow-xl z-50 py-2 max-h-72 overflow-y-auto">
              {sections.map((section) => {
                const isActive = activeId === section.id;
                return (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    onClick={(e) => scrollToSection(e, section.id)}
                    className={`block px-4 py-2 text-xs font-semibold transition-colors ${
                      isActive
                        ? "bg-red-50 text-[#DC2626] font-bold"
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
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
      <aside className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
        <p className="text-[11px] font-black uppercase tracking-wider text-slate-400 mb-3 px-3">
          On This Page
        </p>
        <nav className="space-y-1">
          {sections.map((section) => {
            const isActive = activeId === section.id;
            return (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={(e) => scrollToSection(e, section.id)}
                className={`group flex items-center justify-between px-3 py-2 text-xs rounded-xl transition-all duration-150 ${
                  isActive
                    ? "bg-[#DC2626] text-white font-bold shadow-xs"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 font-medium"
                }`}
              >
                <span className="truncate">{section.label}</span>
                <span
                  className={`w-1.5 h-1.5 rounded-full shrink-0 transition-opacity ${
                    isActive ? "bg-white opacity-100" : "bg-slate-300 opacity-0 group-hover:opacity-100"
                  }`}
                />
              </a>
            );
          })}
        </nav>

        <div className="mt-6 pt-5 border-t border-slate-100 px-3">
          <p className="text-[10px] uppercase tracking-wider font-bold text-slate-400 mb-1">
            Institutional RCM Desk
          </p>
          <p className="text-[11px] text-slate-500 leading-relaxed">
            Order XXXVII summary suits, Section 80 notices, and credit suspension alerts for corporate tie-ups.
          </p>
        </div>
      </aside>
    </>
  );
}
