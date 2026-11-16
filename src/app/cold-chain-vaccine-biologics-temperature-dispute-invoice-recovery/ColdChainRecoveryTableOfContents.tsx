"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const COLD_CHAIN_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-rejection-ambush", label: "COLD-CHAIN REJECTION AMBUSH" },
  { id: "heading-5stage-protocol", label: "5-STAGE VERIFICATION PROTOCOL" },
  { id: "heading-statutory-matrix", label: "STATUTORY RECOVERY MATRIX" },
  { id: "heading-scenario-tabs", label: "4 BIOLOGICS FAILURE MODES" },
  { id: "heading-who-gdp-proof", label: "WHO GDP & EXCURSION PROOF" },
  { id: "heading-sale-of-goods-risk", label: "RISK TRANSFER (SOGA SS. 41–44)" },
  { id: "heading-named-patient-trap", label: "NAMED-PATIENT SUPPLY DEFENSE" },
  { id: "heading-worked-example", label: "WORKED RECOVERY LEDGER" },
  { id: "heading-bsa-evidence-checklist", label: "BSA S.63 DATA-LOGGER DOSSIER" },
  { id: "heading-cta", label: "INSTITUTIONAL RECOVERY DESK" },
  { id: "heading-faqs", label: "FREQUENTLY ASKED QUESTIONS" },
  { id: "heading-sources", label: "STATUTORY AUTHORITIES" },
];

interface ColdChainRecoveryTableOfContentsProps {
  sections?: TOCSection[];
}

export default function ColdChainRecoveryTableOfContents({
  sections = COLD_CHAIN_TOC_SECTIONS,
}: ColdChainRecoveryTableOfContentsProps) {
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
          >
            <div className="flex items-center gap-2 overflow-hidden">
              <span className="w-2 h-2 rounded-full bg-[#DC2626] shrink-0" />
              <span className="text-xs font-bold text-slate-800 uppercase tracking-wider truncate">
                {activeSection?.label || "Table of Contents"}
              </span>
            </div>
            <svg
              className={`w-4 h-4 text-slate-500 transition-transform ${isOpen ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isOpen && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-200 rounded-xl shadow-xl py-2 z-40 max-h-72 overflow-y-auto">
              {sections.map((section) => {
                const isActive = section.id === activeId;
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

      {/* Desktop Sticky Aside */}
      <aside className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start">
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
          <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100">
            <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
            <p className="text-xs font-black uppercase tracking-wider text-slate-900">
              Navigation Contents
            </p>
          </div>
          <nav className="space-y-1">
            {sections.map((section) => {
              const isActive = section.id === activeId;
              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => scrollToSection(e, section.id)}
                  className={`block px-3 py-2 rounded-xl text-xs font-bold transition-all ${
                    isActive
                      ? "bg-[#DC2626] text-white shadow-xs"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  {section.label}
                </a>
              );
            })}
          </nav>

          <div className="mt-6 pt-4 border-t border-slate-100">
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-[11px] text-slate-600">
              <span className="font-bold text-slate-800 block mb-1">Cold-Chain Creditor Desk:</span>
              Enforce BSA s.63 calibrated data-logger certificates and defeat post-facto 2–8°C hospital rejection claims.
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
