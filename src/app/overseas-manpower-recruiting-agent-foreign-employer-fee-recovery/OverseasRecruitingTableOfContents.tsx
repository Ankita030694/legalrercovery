"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const OVERSEAS_RECRUITING_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-overseas-recruitment-crisis", label: "OVERSEAS RECRUITMENT CRISIS" },
  { id: "heading-emigrate-statutory-anchor", label: "EMIGRATE ATTESTED DEMAND ANCHOR" },
  { id: "heading-cross-border-enforcement-framework", label: "CPC S.44A & PGE LEGAL MATRIX" },
  { id: "heading-operational-decision-tree", label: "OPERATIONAL DECISION TREE" },
  { id: "heading-commercial-default-scenarios", label: "OVERSEAS DEFAULT SCENARIOS" },
  { id: "heading-worked-recovery-ledger", label: "WORKED FINANCIAL RECOVERY LEDGER" },
  { id: "heading-fema-services-export-compliance", label: "FEMA SERVICES EXPORT RULES" },
  { id: "heading-bsa-evidence-dossier", label: "BSA S.63 CROSS-BORDER EVIDENCE" },
  { id: "heading-foreign-debtor-defense-preemption", label: "FOREIGN DEBTOR PRE-EMPTION" },
  { id: "heading-recruiting-agent-faqs", label: "FREQUENTLY ASKED QUESTIONS" },
  { id: "heading-statutory-authorities", label: "STATUTORY CITATIONS" },
];

interface OverseasRecruitingTableOfContentsProps {
  sections?: TOCSection[];
}

export default function OverseasRecruitingTableOfContents({
  sections = OVERSEAS_RECRUITING_TOC_SECTIONS,
}: OverseasRecruitingTableOfContentsProps) {
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
      if (sections.length > 0) {
        setActiveId(sections[0].id);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveId(id);
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Sticky Bar */}
      <div className="lg:hidden sticky top-20 z-30 bg-slate-50/95 backdrop-blur-sm border-b border-slate-200 py-3 px-4 -mx-4 sm:-mx-6 mb-6">
        <div className="relative" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between px-4 py-2.5 bg-white border border-slate-300 rounded-xl text-xs font-semibold text-slate-800 shadow-xs active:bg-slate-100"
            aria-expanded={isOpen}
          >
            <span className="truncate">
              {sections.find((s) => s.id === activeId)?.label || "Table of Contents"}
            </span>
            <svg
              className={`w-4 h-4 ml-2 transition-transform duration-200 shrink-0 text-slate-500 ${
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
            <div className="absolute left-0 right-0 mt-1.5 max-h-72 overflow-y-auto bg-white border border-slate-200 rounded-xl shadow-xl z-50 py-1.5">
              {sections.map((section) => (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left px-4 py-2 text-xs font-medium transition-colors ${
                    activeId === section.id
                      ? "bg-[#DC2626] text-white font-bold"
                      : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Desktop Sticky Aside */}
      <aside className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start">
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
          <p className="text-[11px] font-black uppercase tracking-wider text-slate-400 mb-3 px-2">
            Navigation Index
          </p>
          <nav className="space-y-1" aria-label="Table of Contents">
            {sections.map((section) => {
              const isActive = activeId === section.id;
              return (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-xs transition-all duration-150 flex items-center justify-between ${
                    isActive
                      ? "bg-[#DC2626] text-white font-bold shadow-xs translate-x-1"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  <span className="truncate">{section.label}</span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-white ml-2 shrink-0 animate-pulse" />
                  )}
                </button>
              );
            })}
          </nav>

          <div className="mt-6 pt-5 border-t border-slate-200">
            <div className="p-3 bg-red-50 rounded-xl border border-red-100">
              <span className="block text-[10px] font-bold uppercase tracking-wider text-red-700 mb-1">
                Foreign Recovery Desk
              </span>
              <p className="text-[11px] text-slate-600 leading-snug">
                Cross-border legal notices &amp; eMigrate blacklisting petitions for MEA-registered RAs.
              </p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
