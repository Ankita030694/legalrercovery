"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const SECTION_43BH_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-tax-weapon", label: "The March 31 Tax Leverage" },
  { id: "heading-statutory-mechanics", label: "Section 43B(h) & Form 3CD Clause 22" },
  { id: "heading-remedy-matrix", label: "Forum & Remedy Comparison Matrix" },
  { id: "heading-scenario-tabs", label: "4 Corporate Evasion Scenarios" },
  { id: "heading-worked-example", label: "Worked ₹50L Tax & Interest Ledger" },
  { id: "heading-cfo-notice-sop", label: "CFO & Statutory Auditor SOP" },
  { id: "heading-notice-template", label: "Statutory Intimation Notice Format" },
  { id: "heading-auditor-pressure", label: "Engaging the Buyer's Tax Auditor" },
  { id: "heading-preemption-matrix", label: "Neutralizing Corporate Tax Excuses" },
  { id: "heading-cta", label: "Institutional Recovery Desk" },
  { id: "heading-faqs", label: "Frequently Asked Questions" },
  { id: "heading-precedents", label: "Judicial Precedents & Authorities" },
];

interface Section43bhTableOfContentsProps {
  sections?: TOCSection[];
}

export default function Section43bhTableOfContents({
  sections = SECTION_43BH_TOC_SECTIONS,
}: Section43bhTableOfContentsProps) {
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
      setActiveId(id);
      setIsOpen(false);
    }
  };

  const activeSection = sections.find((s) => s.id === activeId) || sections[0];

  return (
    <>
      {/* Mobile Sticky Bar */}
      <div className="lg:hidden sticky top-20 z-30 bg-slate-50/95 backdrop-blur-sm border-b border-slate-200 py-3 px-4 -mx-4 sm:-mx-6 mb-4">
        <div className="relative" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between px-4 py-2.5 bg-white border border-slate-200 rounded-xl shadow-xs text-left text-xs font-semibold text-slate-800"
            aria-expanded={isOpen}
            aria-label="Table of Contents Navigation"
          >
            <span className="truncate flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
              <span className="text-slate-500 font-normal">Jump to:</span>
              <span className="font-bold text-slate-900">{activeSection.label}</span>
            </span>
            <svg
              className={`w-4 h-4 text-slate-500 transition-transform ${isOpen ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isOpen && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-slate-200 rounded-xl shadow-lg z-50 max-h-72 overflow-y-auto py-1">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => scrollToSection(e, section.id)}
                  className={`block px-4 py-2 text-xs transition-colors ${
                    activeId === section.id
                      ? "bg-red-50 text-[#DC2626] font-bold border-l-3 border-[#DC2626]"
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
      <aside className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
        <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100">
          <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
          <p className="text-xs font-bold uppercase tracking-wider text-slate-800">
            Guide Navigation
          </p>
        </div>
        <nav className="space-y-1">
          {sections.map((section) => {
            const isActive = activeId === section.id;
            return (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={(e) => scrollToSection(e, section.id)}
                className={`group flex items-center justify-between px-3 py-2 text-xs rounded-lg transition-all ${
                  isActive
                    ? "bg-[#DC2626] text-white font-bold shadow-sm"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                <span className="truncate">{section.label}</span>
                <span
                  className={`text-[10px] ml-1 transition-opacity ${
                    isActive ? "text-white opacity-100" : "text-slate-400 opacity-0 group-hover:opacity-100"
                  }`}
                >
                  &rarr;
                </span>
              </a>
            );
          })}
        </nav>

        <div className="mt-6 pt-4 border-t border-slate-100">
          <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
            <p className="text-[11px] font-bold text-slate-900 mb-1">
              March 31 Deadline Approaching?
            </p>
            <p className="text-[10px] text-slate-600 leading-relaxed mb-2">
              Deliver Section 43B(h) CFO intimation letters before year-end books close.
            </p>
            <a
              href="#heading-cta"
              onClick={(e) => scrollToSection(e, "heading-cta")}
              className="inline-block text-[11px] font-bold text-[#DC2626] hover:underline"
            >
              Issue Notice Now &rarr;
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}
