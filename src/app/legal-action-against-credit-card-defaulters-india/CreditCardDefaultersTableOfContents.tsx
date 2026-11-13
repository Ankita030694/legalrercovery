"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const CREDIT_CARD_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-legal-framework-overview", label: "OVERVIEW" },
  { id: "heading-judicial-rulings", label: "COURT PRECEDENTS" },
  { id: "heading-compliance-patterns", label: "RBI COMPLIANCE" },
  { id: "heading-recovery-rail", label: "ENFORCEMENT RAIL" },
  { id: "heading-playbook", label: "5-STEP PLAYBOOK" },
  { id: "heading-statutory-deadlines", label: "RECOVERY TIMELINES" },
  { id: "heading-problem-picker", label: "DEFAULTER SCENARIOS" },
  { id: "heading-case-study", label: "BANK CASE STUDY" },
  { id: "heading-evidence-checklist", label: "EVIDENCE DOSSIER" },
  { id: "heading-faqs", label: "FAQS" },
  { id: "heading-sources", label: "STATUTORY REFS" },
];

interface CreditCardDefaultersTableOfContentsProps {
  sections?: TOCSection[];
}

export default function CreditCardDefaultersTableOfContents({
  sections = CREDIT_CARD_TOC_SECTIONS,
}: CreditCardDefaultersTableOfContentsProps) {
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
          onClick={() => setIsOpen((prev) => !prev)}
          className="w-full flex items-center justify-between px-4 py-2.5 bg-white border border-slate-200/90 rounded-xl shadow-xs text-xs font-bold text-slate-800 tracking-wide focus:outline-none focus:ring-2 focus:ring-red-500/20"
          aria-expanded={isOpen}
          aria-label="Table of Contents Menu"
        >
          <div className="flex items-center gap-2 truncate">
            <span className="w-2 h-2 rounded-full bg-[#DC2626] shrink-0" />
            <span className="text-[10px] uppercase font-black tracking-wider text-slate-600">
              Navigation:
            </span>
            <span className="truncate text-slate-900">{activeSection?.label}</span>
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
          <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-slate-200 rounded-xl shadow-xl overflow-hidden py-1 z-40 max-h-72 overflow-y-auto">
            {sections.map((sec, idx) => {
              const isCurrent = sec.id === activeId;
              return (
                <a
                  key={sec.id}
                  href={`#${sec.id}`}
                  onClick={(e) => scrollToSection(e, sec.id)}
                  className={`flex items-center gap-2.5 px-4 py-2 text-xs font-semibold tracking-wide transition-colors ${
                    isCurrent
                      ? "bg-red-50 text-[#DC2626] font-bold"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  <span
                    className={`text-[10px] font-mono shrink-0 ${
                      isCurrent ? "text-red-500 font-bold" : "text-slate-400"
                    }`}
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="truncate">{sec.label}</span>
                </a>
              );
            })}
          </div>
        )}
      </div>

      {/* Desktop Sticky Sidebar Navigation */}
      <aside
        aria-label="Table of Contents"
        className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 space-y-3"
      >
        <div className="bg-white rounded-2xl border border-slate-200/90 p-4 xl:p-5 shadow-xs">
          <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100">
            <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
            <span className="text-[11px] font-black uppercase tracking-wider text-slate-700">
              Navigation Index
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
                  className={`group flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all ${
                    isCurrent
                      ? "bg-red-50/90 text-[#DC2626] font-bold shadow-xs"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  <div className="flex items-center gap-2.5 truncate">
                    <span
                      className={`text-[10px] font-mono shrink-0 transition-colors ${
                        isCurrent ? "text-[#DC2626] font-bold" : "text-slate-400 group-hover:text-slate-600"
                      }`}
                    >
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className="truncate">{sec.label}</span>
                  </div>
                  {isCurrent && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] shrink-0" />
                  )}
                </a>
              );
            })}
          </nav>
        </div>

        {/* Quick Contact / Help Badge */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-4 border border-slate-700/80 shadow-xs">
          <span className="text-[10px] uppercase font-bold tracking-wider text-red-400 block mb-1">
            Institutional Card Recovery
          </span>
          <p className="text-xs text-slate-300 leading-snug mb-3">
            Need high-volume compliant legal notice service for defaulting card portfolios?
          </p>
          <a
            href="#heading-cta-block"
            onClick={(e) => scrollToSection(e, "heading-cta-block")}
            className="inline-flex items-center justify-center w-full px-3 py-2 rounded-lg text-xs font-bold text-white bg-[#DC2626] hover:bg-[#B91C1C] transition-colors"
          >
            Consult Recovery Counsel →
          </a>
        </div>
      </aside>
    </>
  );
}
