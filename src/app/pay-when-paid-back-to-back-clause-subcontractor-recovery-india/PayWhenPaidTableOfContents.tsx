"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const PAY_WHEN_PAID_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-validity-status", label: "Legal Validity in India" },
  { id: "heading-timing-vs-condition", label: "Pay-When-Paid vs Pay-If-Paid" },
  { id: "heading-precedents", label: "High Court Precedents" },
  { id: "heading-prevention-principle", label: "The Prevention Principle" },
  { id: "heading-privity-garnishee", label: "Direct Garnishee on Employer" },
  { id: "heading-statutory-timelines", label: "Limitation & Demand Timelines" },
  { id: "heading-preemption-matrix", label: "Neutralizing Debtor Excuses" },
  { id: "heading-scenario-tabs", label: "4 Subcontractor Scenarios" },
  { id: "heading-worked-example", label: "Worked ₹3.65 Cr Claim Ledger" },
  { id: "heading-evidence-checklist", label: "Subcontractor Evidence Audit" },
  { id: "heading-cta", label: "Dual-Track Recovery Desk" },
  { id: "heading-faqs", label: "Frequently Asked Questions" },
  { id: "heading-sources", label: "Statutes & Precedents" },
];

interface PayWhenPaidTableOfContentsProps {
  sections?: TOCSection[];
}

export default function PayWhenPaidTableOfContents({
  sections = PAY_WHEN_PAID_TOC_SECTIONS,
}: PayWhenPaidTableOfContentsProps) {
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

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const topOffset = 110;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - topOffset,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* Mobile Sticky Dropdown Navigation */}
      <div className="lg:hidden sticky top-20 z-30 bg-slate-50/95 backdrop-blur-sm border-b border-slate-200 py-3 px-4 -mx-4 sm:-mx-6 mb-6">
        <div className="relative" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between px-4 py-2.5 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm font-semibold text-slate-800 shadow-xs"
            aria-expanded={isOpen}
            aria-label="Toggle Table of Contents"
          >
            <span className="flex items-center gap-2 truncate">
              <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
              <span className="truncate">
                {sections.find((s) => s.id === activeId)?.label || "Table of Contents"}
              </span>
            </span>
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
            <div className="absolute left-0 right-0 mt-2 bg-white border border-slate-200 rounded-xl shadow-xl max-h-80 overflow-y-auto z-40 py-2">
              {sections.map((section) => (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left px-4 py-2 text-xs font-medium transition-colors ${
                    activeId === section.id
                      ? "text-[#DC2626] font-bold bg-red-50"
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

      {/* Desktop Sticky Sidebar Navigation */}
      <aside className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
        <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100">
          <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
          <p className="text-xs font-bold uppercase tracking-wider text-slate-900">
            Navigation Index
          </p>
        </div>

        <nav aria-label="Table of Contents" className="space-y-1">
          {sections.map((section) => {
            const isActive = activeId === section.id;
            return (
              <button
                key={section.id}
                type="button"
                onClick={() => scrollToSection(section.id)}
                className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition-all flex items-center justify-between ${
                  isActive
                    ? "bg-[#DC2626] text-white font-bold shadow-xs"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                <span className="truncate">{section.label}</span>
                {isActive && (
                  <span className="text-white text-xs ml-1 shrink-0">&rarr;</span>
                )}
              </button>
            );
          })}
        </nav>

        <div className="mt-5 pt-4 border-t border-slate-100">
          <div className="bg-red-50 border border-red-200 rounded-xl p-3 text-[11px] text-red-900">
            <p className="font-bold text-red-950 mb-1">Contract Act s.23/s.46</p>
            <p className="text-slate-600 leading-tight">
              Pay-when-paid clauses only grant a reasonable delay—never an indefinite forfeiture of subcontractor payment.
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}
