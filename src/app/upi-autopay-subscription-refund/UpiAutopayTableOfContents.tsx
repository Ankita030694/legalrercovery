"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const UPI_AUTOPAY_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-overview", label: "OVERVIEW" },
  { id: "heading-order-digest", label: "LANDMARK ORDERS" },
  { id: "heading-comparison-matrix", label: "RECOVERY MATRIX" },
  { id: "heading-which-route", label: "WHICH ROUTE FOR YOU" },
  { id: "heading-route-app-cancel", label: "ROUTE 1: APP CANCELLATION" },
  { id: "heading-route-bank-dispute", label: "ROUTE 2: BANK CHARGEBACK" },
  { id: "heading-route-dark-patterns", label: "ROUTE 3: DARK PATTERNS & CCPA" },
  { id: "heading-route-legal-notice", label: "ROUTE 4: LEGAL DEMAND NOTICE" },
  { id: "heading-benchmarks-table", label: "TAT & STATUTORY BENCHMARKS" },
  { id: "heading-playbook", label: "5-STEP RECOVERY PLAYBOOK" },
  { id: "heading-worked-example", label: "WORKED EXAMPLE" },
  { id: "heading-evidence-checklist", label: "EVIDENCE CHECKLIST" },
  { id: "heading-scenarios-tabs", label: "AUTOPAY TRAP SCENARIOS" },
  { id: "heading-faqs", label: "FAQ (HINDI & ENGLISH)" },
  { id: "heading-sources", label: "STATUTORY REFS" },
];

interface UpiAutopayTableOfContentsProps {
  sections?: TOCSection[];
}

export default function UpiAutopayTableOfContents({
  sections = UPI_AUTOPAY_TOC_SECTIONS,
}: UpiAutopayTableOfContentsProps) {
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

  const activeSection = sections.find((s) => s.id === activeId) || sections[0];

  return (
    <>
      {/* Mobile Floating Dropdown Bar */}
      <div className="lg:hidden w-full mb-6 z-30" ref={dropdownRef}>
        <div className="bg-white border border-slate-200 rounded-xl p-3 shadow-sm">
          <div className="flex items-center justify-between text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5 px-1">
            <span>On This Page (Table of Contents)</span>
            <span className="text-[#DC2626] font-bold">
              {sections.findIndex((s) => s.id === activeId) + 1} / {sections.length}
            </span>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between gap-2 px-3.5 py-2.5 bg-slate-50 hover:bg-slate-100 border border-slate-300 rounded-lg text-left text-sm font-semibold text-slate-900 transition-colors"
            aria-expanded={isOpen}
            aria-label="Table of contents selector"
          >
            <span className="truncate flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#DC2626] shrink-0" />
              <span className="truncate">{activeSection?.label}</span>
            </span>
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
            <div className="mt-2 max-h-72 overflow-y-auto divide-y divide-slate-100 rounded-lg border border-slate-200 bg-white shadow-lg">
              {sections.map((section, idx) => {
                const isActive = activeId === section.id;
                return (
                  <button
                    key={section.id}
                    type="button"
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full text-left px-3.5 py-2.5 text-xs sm:text-sm font-medium transition-colors flex items-center justify-between ${
                      isActive
                        ? "bg-red-50 text-[#DC2626] font-bold"
                        : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                    }`}
                  >
                    <span className="truncate">
                      {idx + 1}. {section.label}
                    </span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] shrink-0 ml-2" />
                    )}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Desktop Sticky Left Sidebar */}
      <aside
        aria-label="UPI AutoPay Guide Sections"
        className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start bg-white border border-slate-200 rounded-2xl p-5 shadow-xs"
      >
        <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100">
          <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
          <p className="text-xs font-black uppercase tracking-wider text-slate-500">
            Guide Navigation
          </p>
        </div>

        <nav className="space-y-1">
          {sections.map((section, idx) => {
            const isActive = activeId === section.id;
            return (
              <button
                key={section.id}
                type="button"
                onClick={() => scrollToSection(section.id)}
                className={`w-full text-left px-3 py-2 rounded-lg text-xs font-semibold transition-all duration-150 flex items-center justify-between group cursor-pointer ${
                  isActive
                    ? "bg-red-50 text-[#DC2626] font-bold shadow-xs translate-x-1"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                <span className="truncate">
                  {idx + 1}. {section.label}
                </span>
                <span
                  className={`w-1.5 h-1.5 rounded-full transition-opacity ${
                    isActive ? "bg-[#DC2626] opacity-100" : "bg-transparent opacity-0 group-hover:opacity-40 group-hover:bg-slate-400"
                  }`}
                />
              </button>
            );
          })}
        </nav>

        <div className="mt-5 pt-4 border-t border-slate-100">
          <div className="p-3 bg-red-50/70 border border-red-200/60 rounded-xl">
            <p className="text-[11px] font-bold text-red-950 uppercase tracking-wider mb-1">
              Statutory 24h Notice Rule
            </p>
            <p className="text-[11px] text-red-900 leading-snug">
              Under RBI circulars, your bank or UPI app must alert you 24 hours before any mandate debit. Debited without notice? You are entitled to an immediate refund.
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}
