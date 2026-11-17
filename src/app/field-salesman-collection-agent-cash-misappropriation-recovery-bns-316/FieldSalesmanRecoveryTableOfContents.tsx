"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const SALESMAN_RECOVERY_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-overview", label: "EXECUTIVE SUMMARY" },
  { id: "heading-bns-316", label: "BNS S.316(4) STATUTE" },
  { id: "heading-action-flow", label: "48-HOUR ACTION PROTOCOL" },
  { id: "heading-retailer-liability", label: "RETAILER LIABILITY S.237" },
  { id: "heading-statutory-matrix", label: "STATUTORY RECOVERY MATRIX" },
  { id: "heading-scenarios", label: "FRAUD SCENARIOS" },
  { id: "heading-worked-example", label: "WORKED CASE LEDGER" },
  { id: "heading-evidence-checklist", label: "BSA S.63 EVIDENCE" },
  { id: "heading-fidelity-insurance", label: "FIDELITY INSURANCE CLAIM" },
  { id: "heading-faqs", label: "FREQUENTLY ASKED QUESTIONS" },
  { id: "heading-sources", label: "PRIMARY SOURCES" },
];

interface FieldSalesmanRecoveryTableOfContentsProps {
  sections?: TOCSection[];
}

export default function FieldSalesmanRecoveryTableOfContents({
  sections = SALESMAN_RECOVERY_TOC_SECTIONS,
}: FieldSalesmanRecoveryTableOfContentsProps) {
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
      {/* Mobile Sticky Dropdown Bar */}
      <div
        ref={dropdownRef}
        className="lg:hidden sticky top-20 z-30 w-full mb-6 py-2.5 px-4 bg-slate-50/95 backdrop-blur-sm border-b border-slate-200 select-none -mx-4 sm:-mx-6"
      >
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between px-4 py-2.5 bg-white border border-slate-300 rounded-xl text-xs font-bold text-slate-800 shadow-xs cursor-pointer"
          aria-expanded={isOpen}
          aria-controls="mobile-toc-dropdown"
        >
          <span className="flex items-center gap-2 truncate">
            <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
            <span className="text-slate-500 uppercase tracking-wider text-[10px]">TOC:</span>
            <span className="truncate">{activeSection.label}</span>
          </span>
          <svg
            className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {isOpen && (
          <div
            id="mobile-toc-dropdown"
            className="absolute left-4 right-4 mt-2 bg-white border border-slate-200 rounded-xl shadow-xl z-40 max-h-72 overflow-y-auto py-2"
          >
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={(e) => scrollToSection(e, section.id)}
                className={`block px-4 py-2 text-xs font-medium transition-colors ${
                  activeId === section.id
                    ? "bg-red-50 text-[#DC2626] font-bold"
                    : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                {section.label}
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Desktop Sticky Sidebar TOC */}
      <aside
        aria-label="Table of Contents"
        className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start bg-white border border-slate-200 rounded-2xl p-5 shadow-xs"
      >
        <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100">
          <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
          <span className="text-xs font-bold uppercase tracking-wider text-slate-900">
            Guide Navigation
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
                className={`flex items-center px-3 py-2 text-xs rounded-lg transition-all duration-150 ${
                  isActive
                    ? "bg-[#DC2626] text-white font-bold shadow-xs translate-x-0.5"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 font-medium"
                }`}
              >
                <span className="truncate">{section.label}</span>
              </a>
            );
          })}
        </nav>

        <div className="mt-5 pt-4 border-t border-slate-100">
          <p className="text-[11px] font-semibold text-slate-700 uppercase tracking-wider mb-2">
            Institutional Desk
          </p>
          <p className="text-xs text-slate-500 leading-relaxed mb-3">
            FMCG, beverage, and super-stockist distribution fraud legal desk.
          </p>
          <a
            href="#heading-faqs"
            onClick={(e) => scrollToSection(e, "heading-faqs")}
            className="inline-flex items-center text-xs font-bold text-[#DC2626] hover:text-[#B91C1C]"
          >
            Review Embezzlement FAQs &rarr;
          </a>
        </div>
      </aside>
    </>
  );
}
