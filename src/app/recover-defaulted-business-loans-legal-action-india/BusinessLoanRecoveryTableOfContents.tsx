"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const BUSINESS_LOAN_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-statutory-overview", label: "OVERVIEW" },
  { id: "heading-case-citations", label: "LANDMARK PRECEDENTS" },
  { id: "heading-pattern-analysis", label: "WINNING PATTERNS" },
  { id: "heading-enforcement-rail", label: "MULTI-TRACK RAIL" },
  { id: "heading-step-playbook", label: "5-STEP PLAYBOOK" },
  { id: "heading-statutory-matrix", label: "STATUTORY MATRIX" },
  { id: "heading-business-loan-types", label: "LOAN TYPE REMEDIES" },
  { id: "heading-worked-example", label: "WORKED SIMULATION" },
  { id: "heading-evidence-checklist", label: "EVIDENCE CHECKLIST" },
  { id: "heading-faqs", label: "FAQ" },
  { id: "heading-sources", label: "PRIMARY SOURCES" },
];

interface BusinessLoanRecoveryTableOfContentsProps {
  sections?: TOCSection[];
}

export default function BusinessLoanRecoveryTableOfContents({
  sections = BUSINESS_LOAN_TOC_SECTIONS,
}: BusinessLoanRecoveryTableOfContentsProps) {
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
          className="w-full flex items-center justify-between px-4 py-2.5 bg-white border border-slate-300 rounded-xl shadow-xs text-xs font-bold text-slate-800 focus:outline-hidden"
        >
          <div className="flex items-center gap-2 truncate">
            <span className="w-2 h-2 rounded-full bg-[#DC2626] animate-pulse shrink-0" />
            <span className="text-slate-500 font-semibold uppercase tracking-wider text-[10px]">
              TOC Section:
            </span>
            <span className="truncate text-slate-900">{activeSection?.label}</span>
          </div>
          <svg
            className={`w-4 h-4 text-slate-500 transition-transform duration-200 shrink-0 ml-2 ${
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
          <div className="absolute left-0 right-0 mt-1 mx-0 bg-white border border-slate-200 rounded-xl shadow-xl overflow-hidden z-40 max-h-80 overflow-y-auto">
            <ul className="py-1 divide-y divide-slate-100">
              {sections.map((sec, idx) => (
                <li key={sec.id}>
                  <a
                    href={`#${sec.id}`}
                    onClick={(e) => scrollToSection(e, sec.id)}
                    className={`block px-4 py-2 text-xs font-medium transition-colors ${
                      activeId === sec.id
                        ? "bg-red-50 text-[#DC2626] font-bold"
                        : "text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    <span className="text-[10px] text-slate-400 font-mono mr-2">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    {sec.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Desktop Sticky Sidebar Table of Contents */}
      <aside
        aria-label="Table of Contents"
        className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start bg-white border border-slate-200 rounded-2xl p-5 shadow-sm"
      >
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-200">
          <span className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
            Table of Contents
          </span>
          <span className="text-[10px] font-bold text-slate-400 font-mono">
            {sections.length} SECTIONS
          </span>
        </div>

        <nav>
          <ul className="space-y-1">
            {sections.map((sec, idx) => {
              const isActive = activeId === sec.id;
              return (
                <li key={sec.id}>
                  <a
                    href={`#${sec.id}`}
                    onClick={(e) => scrollToSection(e, sec.id)}
                    className={`group flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold transition-all duration-150 ${
                      isActive
                        ? "bg-red-50 text-[#DC2626] font-bold shadow-xs border-l-2 border-[#DC2626]"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                    }`}
                  >
                    <div className="flex items-center gap-2 truncate">
                      <span
                        className={`text-[10px] font-mono shrink-0 ${
                          isActive ? "text-[#DC2626]" : "text-slate-400 group-hover:text-slate-600"
                        }`}
                      >
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <span className="truncate">{sec.label}</span>
                    </div>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] shrink-0" />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Quick Statutory Help Box in Sidebar */}
        <div className="mt-6 pt-4 border-t border-slate-200 text-xs">
          <p className="font-bold text-slate-900 mb-1">Corporate Recovery Desk</p>
          <p className="text-slate-600 leading-relaxed text-[11px] mb-3">
            Institutional recovery support for commercial banks, NBFCs, and financial creditors.
          </p>
          <a
            href="tel:+919289669527"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#DC2626] hover:text-[#B91C1C]"
          >
            <span>Direct Desk: +91 92896 69527</span>
          </a>
        </div>
      </aside>
    </>
  );
}
