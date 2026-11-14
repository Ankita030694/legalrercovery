"use client";

import React, { useEffect, useState, useRef } from "react";

export interface HospitalTpaTOCSection {
  id: string;
  label: string;
}

export const HOSPITAL_TPA_TOC_SECTIONS: HospitalTpaTOCSection[] = [
  { id: "calculator-tool", label: "INTERACTIVE CALCULATOR" },
  { id: "irdai-statutory-tat", label: "IRDAI SETTLEMENT STATUTE" },
  { id: "bank-rate-formula", label: "BANK RATE + 2% FORMULA" },
  { id: "wrongful-tpa-disallowances", label: "ARBITRARY DEDUCTIONS & MOU" },
  { id: "worked-rcm-claim-ledger", label: "WORKED RECOVERY LEDGER" },
  { id: "legal-escalation-matrix", label: "MULTI-FORUM ESCALATION" },
  { id: "bsa-63-rcm-evidence", label: "BSA S.63 AUDIT CHECKLIST" },
  { id: "hospital-rcm-resources", label: "HEALTHCARE RCM DIRECTORY" },
  { id: "hospital-batch-cta", label: "DUAL-TRACK RECOVERY DESK" },
  { id: "tpa-calculator-faqs", label: "HOSPITAL RCM FAQS" },
  { id: "statutory-authorities", label: "STATUTES & CIRCULARS" },
];

interface HospitalTpaCalculatorTOCProps {
  sections?: HospitalTpaTOCSection[];
}

export default function HospitalTpaCalculatorTOC({
  sections = HOSPITAL_TPA_TOC_SECTIONS,
}: HospitalTpaCalculatorTOCProps) {
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
      {/* Mobile / Tablet Sticky Bar */}
      <div
        ref={dropdownRef}
        className="lg:hidden sticky top-20 z-30 bg-slate-50/95 backdrop-blur-sm border-b border-slate-200 py-3 px-4 -mx-4 sm:-mx-6 mb-4 select-none"
      >
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between px-4 py-2.5 bg-white border border-slate-200 rounded-xl shadow-sm hover:border-slate-300 transition-colors"
          aria-expanded={isOpen}
          aria-controls="mobile-toc-dropdown"
        >
          <div className="flex items-center gap-2.5 min-w-0">
            <span className="w-2 h-2 rounded-full bg-[#DC2626] shrink-0" />
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider shrink-0">
              Jump to Section:
            </span>
            <span className="text-xs font-bold text-slate-900 truncate">
              {activeSection?.label}
            </span>
          </div>
          <svg
            className={`w-4 h-4 text-slate-500 transition-transform duration-200 shrink-0 ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {isOpen && (
          <div
            id="mobile-toc-dropdown"
            className="absolute left-4 right-4 mt-2 bg-white border border-slate-200 rounded-2xl shadow-xl overflow-hidden z-40 max-h-80 overflow-y-auto divide-y divide-slate-100"
          >
            {sections.map((section, idx) => {
              const isActive = activeId === section.id;
              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => scrollToSection(e, section.id)}
                  className={`flex items-center justify-between px-4 py-3 text-xs transition-colors ${
                    isActive
                      ? "bg-red-50 text-[#DC2626] font-bold"
                      : "text-slate-700 hover:bg-slate-50 font-medium"
                  }`}
                >
                  <div className="flex items-center gap-2.5 truncate">
                    <span
                      className={`text-[10px] font-mono shrink-0 ${
                        isActive ? "text-[#DC2626]" : "text-slate-400"
                      }`}
                    >
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className="truncate">{section.label}</span>
                  </div>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] shrink-0" />}
                </a>
              );
            })}
          </div>
        )}
      </div>

      {/* Desktop Sticky Aside */}
      <aside
        aria-label="Table of Contents"
        className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start"
      >
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
              IRDAI Calculator Nav
            </span>
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-red-50 text-[#DC2626] border border-red-100">
              Bank Rate + 2%
            </span>
          </div>

          <nav className="space-y-1">
            {sections.map((section, idx) => {
              const isActive = activeId === section.id;
              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => scrollToSection(e, section.id)}
                  className={`group flex items-center justify-between px-3 py-2 rounded-xl text-xs transition-all ${
                    isActive
                      ? "bg-[#DC2626] text-white font-bold shadow-sm"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 font-medium"
                  }`}
                >
                  <div className="flex items-center gap-2 truncate">
                    <span
                      className={`text-[10px] font-mono shrink-0 ${
                        isActive ? "text-red-100 font-bold" : "text-slate-400 group-hover:text-slate-600"
                      }`}
                    >
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className="truncate">{section.label}</span>
                  </div>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0 ml-1.5" />
                  )}
                </a>
              );
            })}
          </nav>

          <div className="pt-3 border-t border-slate-100">
            <div className="bg-slate-50 rounded-xl p-3 border border-slate-200/80">
              <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                Parent Industry Hub
              </span>
              <a
                href="/industries/hospitals-doctors-healthcare-recovery"
                className="text-xs font-bold text-slate-800 hover:text-[#DC2626] transition-colors line-clamp-2"
              >
                &larr; IND-03 Healthcare Recovery Hub
              </a>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
