"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const SURGICAL_CONSUMABLES_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-hospital-credit-trap", label: "THE 180-DAY HOSPITAL CREDIT TRAP" },
  { id: "heading-decision-tree", label: "5-STAGE RECOVERY PROTOCOL" },
  { id: "heading-statutory-matrix", label: "STATUTORY ENFORCEMENT MATRIX" },
  { id: "heading-scenario-tabs", label: "4 CRITICAL HOSPITAL FAILURE MODES" },
  { id: "heading-section-43bh-leverage", label: "SECTION 43B(H) TAX DISALLOWANCE" },
  { id: "heading-medical-gas-oxygen", label: "MEDICAL GAS & ESSENTIAL SUPPLIES" },
  { id: "heading-rate-contract-emd", label: "SECURITY DEPOSITS & RATE CONTRACTS" },
  { id: "heading-worked-example", label: "WORKED ₹28.4L RECOVERY LEDGER" },
  { id: "heading-bsa-evidence-checklist", label: "BSA 2023 S.63 EVIDENCE DOSSIER" },
  { id: "heading-cta", label: "INSTITUTIONAL B2B DESK" },
  { id: "heading-faqs", label: "FREQUENTLY ASKED QUESTIONS" },
  { id: "heading-sources", label: "STATUTES & JUDICIAL PRECEDENTS" },
];

interface SurgicalConsumablesTableOfContentsProps {
  sections?: TOCSection[];
}

export default function SurgicalConsumablesTableOfContents({
  sections = SURGICAL_CONSUMABLES_TOC_SECTIONS,
}: SurgicalConsumablesTableOfContentsProps) {
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
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -90;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveId(id);
      setIsOpen(false);
    }
  };

  const activeLabel = sections.find((s) => s.id === activeId)?.label || "Table of Contents";

  return (
    <>
      {/* Mobile Sticky Bar */}
      <div className="lg:hidden sticky top-20 z-30 bg-slate-50/95 backdrop-blur-sm border-b border-slate-200 py-3 px-4 -mx-4 sm:-mx-6 mb-4">
        <div className="relative" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between px-4 py-2.5 bg-white border border-slate-300 rounded-xl shadow-xs text-xs font-bold text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-[#DC2626]"
            aria-expanded={isOpen}
            aria-label="Table of Contents menu"
          >
            <div className="flex items-center space-x-2 truncate">
              <span className="w-2 h-2 rounded-full bg-[#DC2626] shrink-0" />
              <span className="truncate uppercase tracking-wider">{activeLabel}</span>
            </div>
            <svg
              className={`w-4 h-4 ml-2 transition-transform duration-200 shrink-0 ${isOpen ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isOpen && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-200 rounded-xl shadow-xl max-h-72 overflow-y-auto z-40 p-2 space-y-1">
              {sections.map((section) => {
                const isActive = activeId === section.id;
                return (
                  <button
                    key={section.id}
                    type="button"
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                      isActive
                        ? "bg-[#DC2626] text-white font-bold"
                        : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                    }`}
                  >
                    {section.label}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Desktop Sticky Aside */}
      <aside className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
          <p className="text-xs font-extrabold uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
            Recovery Playbook
          </p>
          <span className="text-[10px] font-bold text-slate-400">12 Sections</span>
        </div>

        <nav aria-label="Table of Contents">
          <ul className="space-y-1 text-xs">
            {sections.map((section) => {
              const isActive = activeId === section.id;
              return (
                <li key={section.id}>
                  <button
                    type="button"
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg font-medium transition-colors truncate block ${
                      isActive
                        ? "bg-[#DC2626] text-white font-bold shadow-xs"
                        : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                    }`}
                  >
                    {section.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="mt-5 pt-4 border-t border-slate-100">
          <div className="bg-red-50/70 border border-red-200/60 rounded-xl p-3">
            <p className="text-[11px] font-bold text-red-900 mb-1">
              MSME Statutory Priority
            </p>
            <p className="text-[10px] text-red-700 leading-relaxed">
              Section 43B(h) disallowance forces corporate hospitals to settle Udyam surgical vendors before March 31st.
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}
