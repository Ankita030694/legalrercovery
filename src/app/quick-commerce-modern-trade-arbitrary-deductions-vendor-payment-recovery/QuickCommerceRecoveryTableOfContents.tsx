"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const QC_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-quick-commerce-trap", label: "The 28% Deduction Trap" },
  { id: "heading-msmed-section-2b", label: "MSMED s.2(b) 15-Day Rule" },
  { id: "heading-decision-flowchart", label: "5-Stage Decision SOP" },
  { id: "heading-statutory-matrix", label: "Statutory Protection Matrix" },
  { id: "heading-commercial-scenarios", label: "4 Platform Dispute Scenarios" },
  { id: "heading-financial-ledger", label: "Worked ₹48.5L Audit Ledger" },
  { id: "heading-bsa-evidence", label: "BSA s.63 Evidence Dossier" },
  { id: "heading-preemption-matrix", label: "Neutralizing Portal Excuses" },
  { id: "heading-advocate-sop", label: "15-Day Statutory Notice SOP" },
  { id: "heading-cta", label: "Dual Recovery Desk" },
  { id: "heading-faqs", label: "Frequently Asked Questions" },
  { id: "heading-statutory-sources", label: "Statutory Acts & Authorities" },
];

interface QuickCommerceRecoveryTableOfContentsProps {
  sections?: TOCSection[];
}

export default function QuickCommerceRecoveryTableOfContents({
  sections = QC_TOC_SECTIONS,
}: QuickCommerceRecoveryTableOfContentsProps) {
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
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveId(id);
      setIsOpen(false);
    }
  };

  const activeSection = sections.find((s) => s.id === activeId) || sections[0];

  return (
    <>
      {/* Mobile Sticky Dropdown Navigation */}
      <div className="lg:hidden sticky top-20 z-30 bg-slate-50/95 backdrop-blur-sm border-b border-slate-200 py-3 px-4 -mx-4 sm:-mx-6 mb-6">
        <div className="relative" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between px-4 py-2.5 bg-white border border-slate-300 rounded-xl shadow-xs text-xs sm:text-sm font-semibold text-slate-800 text-left cursor-pointer"
            aria-expanded={isOpen}
            aria-label="Table of contents menu"
          >
            <span className="truncate pr-2">
              <span className="text-slate-400 font-normal mr-2">Jump to:</span>
              {activeSection?.label}
            </span>
            <svg
              className={`w-4 h-4 text-slate-500 transition-transform duration-200 shrink-0 ${
                isOpen ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              width={16}
              height={16}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isOpen && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-200 rounded-xl shadow-xl max-h-[60vh] overflow-y-auto py-2 z-50">
              {sections.map((section, idx) => {
                const isActive = activeId === section.id;
                return (
                  <button
                    key={section.id}
                    type="button"
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full text-left px-4 py-2.5 text-xs transition-colors flex items-center gap-2 cursor-pointer ${
                      isActive
                        ? "bg-red-50 text-[#DC2626] font-bold"
                        : "text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    <span
                      className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] shrink-0 font-bold ${
                        isActive
                          ? "bg-[#DC2626] text-white"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      {idx + 1}
                    </span>
                    <span className="truncate">{section.label}</span>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Desktop Sticky Aside Navigation */}
      <aside className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
        <p className="text-xs uppercase tracking-wider font-extrabold text-slate-400 mb-4 pb-2 border-b border-slate-100">
          Table of Contents
        </p>
        <nav aria-label="Quick-Commerce Recovery Guide Navigation" className="space-y-1">
          {sections.map((section, idx) => {
            const isActive = activeId === section.id;
            return (
              <button
                key={section.id}
                type="button"
                onClick={() => scrollToSection(section.id)}
                className={`w-full text-left px-3 py-2 rounded-xl text-xs transition-all flex items-center gap-2.5 cursor-pointer ${
                  isActive
                    ? "bg-[#DC2626] text-white font-bold shadow-xs"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                <span
                  className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] shrink-0 font-bold ${
                    isActive
                      ? "bg-white text-[#DC2626]"
                      : "bg-slate-100 text-slate-500"
                  }`}
                >
                  {idx + 1}
                </span>
                <span className="truncate leading-relaxed">{section.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Quick Help Pill */}
        <div className="mt-6 pt-4 border-t border-slate-100 bg-slate-50 rounded-xl p-3">
          <p className="text-[11px] font-bold text-slate-800 mb-1">
            Facing Unilateral GRN Deductions?
          </p>
          <p className="text-[10px] text-slate-600 leading-normal mb-2">
            MSMED Act s.2(b) bars dark stores from raising objections beyond 15 days of sealed POD delivery.
          </p>
          <a
            href="#heading-advocate-sop"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("heading-advocate-sop");
            }}
            className="text-[10px] font-bold text-[#DC2626] hover:underline inline-flex items-center gap-1"
          >
            Review Legal SOP &rarr;
          </a>
        </div>
      </aside>
    </>
  );
}
