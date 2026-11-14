"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const HEALTHCARE_TPA_TOC_SECTIONS: TOCSection[] = [
  { id: "executive-healthcare-dso-summary", label: "EXECUTIVE SUMMARY" },
  { id: "macro-payer-dso-benchmarks", label: "5-PAYER DSO BENCHMARKS" },
  { id: "bed-capacity-impact-analysis", label: "BED CAPACITY IMPACT" },
  { id: "tpa-short-settlement-deduction-anatomy", label: "TPA DEDUCTION ANATOMY" },
  { id: "cghs-echs-government-arrears-bottlenecks", label: "CGHS & ECHS ARREARS" },
  { id: "post-discharge-patient-bad-debt-crisis", label: "POST-DISCHARGE BAD DEBT" },
  { id: "interactive-healthcare-rcm-playbook", label: "INTERACTIVE RCM PLAYBOOK" },
  { id: "statutory-penal-interest-worked-example", label: "PENAL INTEREST WORKED LEDGER" },
  { id: "four-tier-legal-recovery-architecture", label: "4-TIER LEGAL FRAMEWORK" },
  { id: "study-methodology-data-scope", label: "METHODOLOGY & SCOPE" },
  { id: "dataset-download-citation", label: "DATASET & CITATION" },
  { id: "institutional-healthcare-cta", label: "DEPLOY RECOVERY DESK" },
  { id: "healthcare-rcm-faqs", label: "FAQS FOR CFOS & CEOS" },
  { id: "statutory-authorities-precedents", label: "STATUTORY SOURCES" },
];

export default function HealthcareTpaTableOfContents() {
  const [activeId, setActiveId] = useState<string>(HEALTHCARE_TPA_TOC_SECTIONS[0].id);
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
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;
      for (let i = HEALTHCARE_TPA_TOC_SECTIONS.length - 1; i >= 0; i--) {
        const el = document.getElementById(HEALTHCARE_TPA_TOC_SECTIONS[i].id);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY;
          if (scrollPosition >= top) {
            setActiveId(HEALTHCARE_TPA_TOC_SECTIONS[i].id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -96;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveId(id);
      setIsOpen(false);
    }
  };

  const activeSection =
    HEALTHCARE_TPA_TOC_SECTIONS.find((s) => s.id === activeId) ||
    HEALTHCARE_TPA_TOC_SECTIONS[0];

  return (
    <>
      {/* Mobile Sticky Dropdown Bar */}
      <div className="lg:hidden sticky top-20 z-30 bg-slate-50/95 backdrop-blur-sm border-b border-slate-200 py-3 px-4 -mx-4 sm:-mx-6 mb-4">
        <div className="relative" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between px-4 py-2.5 bg-white border border-slate-300 rounded-xl shadow-sm text-xs font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#DC2626]"
            aria-expanded={isOpen}
          >
            <div className="flex items-center gap-2 truncate">
              <span className="w-2 h-2 rounded-full bg-[#DC2626] shrink-0" />
              <span className="text-slate-500 font-medium">Section:</span>
              <span className="truncate">{activeSection.label}</span>
            </div>
            <svg
              className={`w-4 h-4 text-slate-500 transition-transform shrink-0 ${
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
            <div className="absolute left-0 right-0 mt-2 bg-white border border-slate-200 rounded-xl shadow-xl z-50 max-h-72 overflow-y-auto py-1">
              {HEALTHCARE_TPA_TOC_SECTIONS.map((section) => (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => scrollTo(section.id)}
                  className={`w-full text-left px-4 py-2 text-xs transition-colors flex items-center gap-2 ${
                    activeId === section.id
                      ? "bg-red-50 text-[#DC2626] font-bold"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                      activeId === section.id ? "bg-[#DC2626]" : "bg-transparent"
                    }`}
                  />
                  <span className="truncate">{section.label}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Desktop Sticky Aside */}
      <aside className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start">
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-4">
          <div className="border-b border-slate-100 pb-3">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
              Report Sections
            </span>
            <p className="text-xs font-black text-slate-800 mt-0.5">
              Healthcare DSO Index (2026–27)
            </p>
          </div>

          <nav className="space-y-1 max-h-[calc(100vh-14rem)] overflow-y-auto pr-1">
            {HEALTHCARE_TPA_TOC_SECTIONS.map((section) => {
              const isActive = activeId === section.id;
              return (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => scrollTo(section.id)}
                  className={`w-full text-left px-3 py-2 rounded-xl text-xs transition-all duration-150 flex items-center justify-between group ${
                    isActive
                      ? "bg-[#DC2626] text-white font-bold shadow-sm"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 font-medium"
                  }`}
                >
                  <span className="truncate">{section.label}</span>
                  <span
                    className={`text-[10px] ml-2 shrink-0 ${
                      isActive ? "text-red-200" : "text-slate-400 group-hover:text-slate-600"
                    }`}
                  >
                    →
                  </span>
                </button>
              );
            })}
          </nav>

          <div className="border-t border-slate-100 pt-3">
            <div className="p-3 bg-red-50/70 border border-red-100 rounded-xl">
              <span className="text-[10px] font-bold uppercase tracking-wider text-red-700 block mb-1">
                Fast Recovery Action
              </span>
              <p className="text-[11px] text-slate-600 leading-tight mb-2">
                Reconcile aged TPA/CGHS ledgers or demand statutory penal interest.
              </p>
              <button
                type="button"
                onClick={() => scrollTo("institutional-healthcare-cta")}
                className="w-full text-center py-1.5 px-2 bg-[#DC2626] hover:bg-[#B91C1C] text-white text-[11px] font-bold rounded-lg transition-colors cursor-pointer"
              >
                Launch Recovery Action →
              </button>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
