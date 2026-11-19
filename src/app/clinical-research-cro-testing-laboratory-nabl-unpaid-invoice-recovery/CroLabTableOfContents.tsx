"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const CRO_LAB_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-why-sponsors-abandon", label: "SCIENTIFIC ABANDONMENT" },
  { id: "heading-escalation-workflow", label: "5-STAGE RECOVERY RAIL" },
  { id: "heading-statutory-matrix", label: "STATUTORY REMEDY MATRIX" },
  { id: "heading-scenario-tabs", label: "COMMERCIAL SCENARIOS" },
  { id: "heading-worked-ledger", label: "WORKED ₹21.24L LEDGER" },
  { id: "heading-evidence-checklist", label: "GLP & BSA 2023 EVIDENCE" },
  { id: "heading-cta-section", label: "INSTITUTIONAL CTA" },
  { id: "heading-network-directory", label: "IND-23 ADVISORY NETWORK" },
  { id: "heading-faqs", label: "FREQUENT QUESTIONS" },
  { id: "heading-statutory-sources", label: "STATUTORY AUTHORITIES" },
];

interface CroLabTableOfContentsProps {
  sections?: TOCSection[];
}

export default function CroLabTableOfContents({
  sections = CRO_LAB_TOC_SECTIONS,
}: CroLabTableOfContentsProps) {
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
      const yOffset = -90; // offset for navbar
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
          aria-controls="mobile-cro-toc-list"
          className="w-full flex items-center justify-between px-4 py-3 bg-white border border-slate-200 rounded-xl shadow-sm text-left font-bold text-slate-800 text-xs sm:text-sm cursor-pointer"
        >
          <span className="flex items-center gap-2 truncate">
            <span className="w-2 h-2 rounded-full bg-[#DC2626] shrink-0" />
            <span className="text-slate-500 font-medium">Navigating:</span>
            <span className="truncate text-slate-900">{activeSection?.label}</span>
          </span>
          <svg
            className={`w-4 h-4 text-slate-500 transition-transform duration-200 shrink-0 ${
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
          <div
            id="mobile-cro-toc-list"
            className="absolute left-0 right-0 mt-2 bg-white border border-slate-200 rounded-xl shadow-xl max-h-80 overflow-y-auto p-2 z-40 space-y-1"
          >
            {sections.map((section, idx) => {
              const isActive = activeId === section.id;
              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => scrollToSection(e, section.id)}
                  className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-semibold transition-colors ${
                    isActive
                      ? "bg-[#DC2626] text-white shadow-sm"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  <span
                    className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                      isActive ? "bg-white/20 text-white" : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    {idx + 1}
                  </span>
                  <span className="truncate">{section.label}</span>
                </a>
              );
            })}
          </div>
        )}
      </div>

      {/* Desktop Sticky Left Sidebar Aside */}
      <aside
        aria-label="Table of Contents"
        className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-3"
      >
        <div className="pb-3 border-b border-slate-100 flex items-center justify-between">
          <p className="text-xs font-extrabold uppercase tracking-widest text-slate-900 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
            Recovery Playbook
          </p>
          <span className="text-[10px] font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-full">
            10 Stages
          </span>
        </div>

        <nav aria-label="CRO & NABL Recovery Sections" className="space-y-1">
          {sections.map((section, idx) => {
            const isActive = activeId === section.id;
            return (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={(e) => scrollToSection(e, section.id)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-medium transition-all group ${
                  isActive
                    ? "bg-[#DC2626] text-white font-bold shadow-sm"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                <span
                  className={`w-5 h-5 rounded-md flex items-center justify-center text-[10px] font-bold shrink-0 transition-colors ${
                    isActive
                      ? "bg-white/25 text-white"
                      : "bg-slate-100 text-slate-500 group-hover:bg-slate-200 group-hover:text-slate-800"
                  }`}
                >
                  {idx + 1}
                </span>
                <span className="truncate">{section.label}</span>
              </a>
            );
          })}
        </nav>

        <div className="pt-3 border-t border-slate-100">
          <p className="text-[11px] text-slate-500 leading-tight">
            ISO 17025 &middot; GLP Anti-Contingency &middot; CPC Order 37
          </p>
        </div>
      </aside>
    </>
  );
}
