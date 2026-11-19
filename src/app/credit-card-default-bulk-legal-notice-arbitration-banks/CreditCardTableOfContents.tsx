"use client";

import React, { useEffect, useState, useRef } from "react";

export interface CreditCardTOCSection {
  id: string;
  label: string;
}

export const CREDIT_CARD_TOC_SECTIONS: CreditCardTOCSection[] = [
  { id: "heading-perkins-crisis", label: "PERKINS & CORE INVALIDATION" },
  { id: "heading-recovery-workflow", label: "4-STAGE 60–180+ DPD PIPELINE" },
  { id: "heading-forum-matrix", label: "NEUTRAL ODR VS LEGACY PANELS" },
  { id: "heading-sc-precedents", label: "SUPREME COURT PRECEDENTS" },
  { id: "heading-rbi-cicra", label: "RBI RULES & CICRA REPORTING" },
  { id: "heading-scenario-tabs", label: "PORTFOLIO FAILURE PLAYBOOKS" },
  { id: "heading-worked-ledger", label: "500-CARD YIELD MODEL" },
  { id: "heading-bsa-evidence", label: "CMS & BSA s.63 CHECKLIST" },
  { id: "heading-faqs", label: "ISSUER PRACTITIONER FAQS" },
  { id: "heading-sources", label: "STATUTORY & RBI SOURCES" },
];

interface CreditCardTableOfContentsProps {
  sections?: CreditCardTOCSection[];
}

export default function CreditCardTableOfContents({
  sections = CREDIT_CARD_TOC_SECTIONS,
}: CreditCardTableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>(sections[0]?.id || "");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
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

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -96;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      window.history.pushState(null, "", `#${id}`);
      setActiveId(id);
      setIsOpen(false);
    }
  };

  const activeSection =
    sections.find((s) => s.id === activeId) || sections[0];

  return (
    <>
      {/* Mobile / Tablet Sticky Dropdown TOC */}
      <div
        ref={dropdownRef}
        className="lg:hidden sticky top-20 z-30 bg-slate-50/95 backdrop-blur-sm border-b border-slate-200 py-3 px-4 -mx-4 sm:-mx-6 mb-4 select-none"
      >
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Table of contents navigation"
          className="w-full flex items-center justify-between px-4 py-3 bg-white border border-slate-200 rounded-xl shadow-sm text-left focus:outline-none focus:ring-2 focus:ring-[#DC2626]/20"
        >
          <div className="flex items-center gap-2 truncate pr-2">
            <span className="w-2 h-2 rounded-full bg-[#DC2626] shrink-0 animate-pulse" />
            <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 shrink-0">
              Section:
            </span>
            <span className="text-xs sm:text-sm font-bold text-slate-900 truncate">
              {activeSection.label}
            </span>
          </div>
          <svg
            width={16}
            height={16}
            className={`w-4 h-4 text-slate-600 shrink-0 transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {isOpen && (
          <div className="absolute top-full left-4 right-4 sm:left-6 sm:right-6 mt-2 bg-white border border-slate-200 rounded-xl shadow-xl py-2 px-1.5 max-h-80 overflow-y-auto z-40">
            {sections.map((section, idx) => {
              const isActive = activeId === section.id;
              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => scrollToSection(e, section.id)}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-medium transition-colors ${
                    isActive
                      ? "bg-[#DC2626] text-white font-semibold"
                      : "text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  <span
                    className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 ${
                      isActive
                        ? "bg-white text-[#DC2626]"
                        : "bg-slate-100 text-slate-600"
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

      {/* Desktop Sticky Sidebar TOC (zero heading tags inside sidebar) */}
      <aside className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start">
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <span className="text-[11px] font-bold tracking-wider text-slate-400 uppercase">
              On This Playbook
            </span>
            <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-red-50 text-red-700 border border-red-200">
              IND-01 &bull; G1
            </span>
          </div>

          <nav className="space-y-1" aria-label="Table of contents">
            {sections.map((section, idx) => {
              const isActive = activeId === section.id;
              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => scrollToSection(e, section.id)}
                  className={`group flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs transition-all duration-150 ${
                    isActive
                      ? "bg-[#DC2626] text-white font-bold shadow-sm"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  <span
                    className={`w-5 h-5 rounded-lg flex items-center justify-center text-[10px] font-bold shrink-0 transition-colors ${
                      isActive
                        ? "bg-white/20 text-white"
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

          <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500 space-y-1.5">
            <div className="flex items-center justify-between text-slate-600">
              <span>NPA / Write-Off Window:</span>
              <span className="font-semibold text-slate-900">90–180+ DPD</span>
            </div>
            <div className="flex items-center justify-between text-slate-600">
              <span>Arbitrator Rule:</span>
              <span className="font-semibold text-red-700">Neutral ODR Only</span>
            </div>
            <div className="flex items-center justify-between text-slate-600">
              <span>Fast-Track Award:</span>
              <span className="font-semibold text-emerald-700">s.29B (&le; 6 Mo)</span>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
