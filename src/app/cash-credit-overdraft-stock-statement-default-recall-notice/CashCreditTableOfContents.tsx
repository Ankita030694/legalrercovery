"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const CASH_CREDIT_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-dp-crisis", label: "PRE-DAY 90 CC/OD LEAKAGE" },
  { id: "heading-rbi-iracp", label: "RBI IRACP & 180-DAY RULE" },
  { id: "heading-decision-tree", label: "RECALL DECISION TREE" },
  { id: "heading-scenario-tabs", label: "4 DIVERSION PLAYBOOKS" },
  { id: "heading-book-debts", label: "BOOK-DEBT GARNISHEE SOP" },
  { id: "heading-worked-ledger", label: "₹1.80 CR DP SHORTFALL LEDGER" },
  { id: "heading-evidence-checklist", label: "STOCK AUDIT & BSA s.63" },
  { id: "heading-criminal-fraud", label: "BNS s.316/318 & RBI RFA" },
  { id: "heading-precedents", label: "SUPREME COURT PRECEDENTS" },
  { id: "heading-dual-cta", label: "SINGLE OR ZONAL CC DESK" },
  { id: "heading-bank-network", label: "IND-01 BANKING NETWORK" },
  { id: "heading-faqs", label: "FREQUENTLY ASKED QUESTIONS" },
  { id: "heading-sources", label: "RBI CIRCULARS & STATUTES" },
];

interface CashCreditTableOfContentsProps {
  sections?: TOCSection[];
}

export default function CashCreditTableOfContents({
  sections = CASH_CREDIT_TOC_SECTIONS,
}: CashCreditTableOfContentsProps) {
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
      const yOffset = -96;
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
      <div className="lg:hidden sticky top-20 z-30 bg-slate-50/95 backdrop-blur-sm border-b border-slate-200 py-3 px-4 -mx-4 sm:-mx-6 mb-4">
        <div className="relative" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between px-4 py-2.5 bg-white border border-slate-300 rounded-xl text-left shadow-sm focus:outline-none focus:ring-2 focus:ring-[#DC2626]"
            aria-expanded={isOpen}
            aria-label="Table of Contents Menu"
          >
            <div className="flex items-center gap-2 truncate pr-2">
              <span className="w-2 h-2 rounded-full bg-[#DC2626] shrink-0" />
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 shrink-0">
                TOC:
              </span>
              <span className="text-xs font-semibold text-slate-800 truncate">
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
              width={16}
              height={16}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isOpen && (
            <nav
              aria-label="Mobile Table of Contents"
              className="absolute left-0 right-0 mt-2 bg-white border border-slate-200 rounded-xl shadow-xl py-2 max-h-72 overflow-y-auto z-40"
            >
              {sections.map((section) => {
                const isActive = activeId === section.id;
                return (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    onClick={(e) => scrollToSection(e, section.id)}
                    className={`block px-4 py-2 text-xs transition-colors ${
                      isActive
                        ? "bg-[#DC2626] text-white font-bold"
                        : "text-slate-700 hover:bg-slate-100"
                    }`}
                  >
                    {section.label}
                  </a>
                );
              })}
            </nav>
          )}
        </div>
      </div>

      {/* Desktop Sticky Sidebar (No h2/h3/h4 tags inside TOC) */}
      <aside
        aria-label="Table of Contents"
        className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start"
      >
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
          <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100">
            <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
            <p className="text-[11px] font-extrabold uppercase tracking-widest text-slate-800">
              CC / OD Recall Playbook
            </p>
          </div>
          <nav className="space-y-1 max-h-[calc(100vh-14rem)] overflow-y-auto pr-1">
            {sections.map((section) => {
              const isActive = activeId === section.id;
              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => scrollToSection(e, section.id)}
                  className={`block px-3 py-2 rounded-lg text-[11px] tracking-wide transition-all ${
                    isActive
                      ? "bg-[#DC2626] text-white font-bold shadow-sm"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 font-medium"
                  }`}
                >
                  {section.label}
                </a>
              );
            })}
          </nav>
        </div>
      </aside>
    </>
  );
}
