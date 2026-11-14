"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const GOLD_LOAN_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-overview", label: "OVERVIEW & RBI CRACKDOWN" },
  { id: "heading-statutory-matrix", label: "STATUTORY & RBI MATRIX" },
  { id: "heading-auction-pipeline", label: "5-STAGE AUCTION RAIL" },
  { id: "heading-scenario-tabs", label: "4 AUCTION FAILURE MODES" },
  { id: "heading-ltv-margin-call", label: "75% LTV & MARGIN CALL" },
  { id: "heading-notice-vernacular", label: "S.176 & VERNACULAR NOTICE" },
  { id: "heading-taluka-reserve-price", label: "TALUKA VENUE & RESERVE PRICE" },
  { id: "heading-worked-ledger", label: "SURPLUS & DEFICIT MATH" },
  { id: "heading-precedents", label: "SUPREME COURT PRECEDENTS" },
  { id: "heading-bsa-checklist", label: "BSA S.63 AUDIT CHECKLIST" },
  { id: "heading-faqs", label: "COMPLIANCE FAQS" },
  { id: "heading-sources", label: "STATUTES & RBI CIRCULARS" },
];

interface GoldLoanTableOfContentsProps {
  sections?: TOCSection[];
}

export default function GoldLoanTableOfContents({
  sections = GOLD_LOAN_TOC_SECTIONS,
}: GoldLoanTableOfContentsProps) {
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
      {/* Mobile / Tablet Sticky Dropdown Table of Contents */}
      <div
        ref={dropdownRef}
        className="lg:hidden sticky top-20 z-30 bg-slate-50/95 backdrop-blur-sm border-b border-slate-200 py-3 px-4 -mx-4 sm:-mx-6 mb-4 select-none"
      >
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          className="w-full flex items-center justify-between gap-2 px-4 py-2.5 rounded-xl bg-white border border-slate-300 shadow-sm text-left text-xs font-bold text-slate-900"
        >
          <span className="truncate">
            <span className="text-[#DC2626] uppercase tracking-wider mr-2">Section:</span>
            {activeSection?.label}
          </span>
          <span className="text-slate-500 text-xs shrink-0">{isOpen ? "▲" : "▼"}</span>
        </button>

        {isOpen && (
          <div className="mt-2 bg-white border border-slate-200 rounded-xl shadow-lg max-h-72 overflow-y-auto p-2 space-y-1">
            {sections.map((sec) => {
              const isActive = sec.id === activeId;
              return (
                <a
                  key={sec.id}
                  href={`#${sec.id}`}
                  onClick={(e) => scrollToSection(e, sec.id)}
                  className={`block px-3 py-2 rounded-lg text-xs transition-colors ${
                    isActive
                      ? "bg-[#DC2626] text-white font-bold shadow-sm"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 font-medium"
                  }`}
                >
                  {sec.label}
                </a>
              );
            })}
          </div>
        )}
      </div>

      {/* Desktop Sticky Sidebar TOC */}
      <aside className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start">
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
          <p className="text-[11px] font-bold uppercase tracking-widest text-slate-500 mb-3 pb-2 border-b border-slate-100">
            Auction Compliance Index
          </p>
          <nav aria-label="Page sections" className="space-y-1">
            {sections.map((sec) => {
              const isActive = sec.id === activeId;
              return (
                <a
                  key={sec.id}
                  href={`#${sec.id}`}
                  onClick={(e) => scrollToSection(e, sec.id)}
                  className={`block px-3 py-2 rounded-lg text-xs transition-all ${
                    isActive
                      ? "bg-[#DC2626] text-white font-bold shadow-sm"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 font-medium"
                  }`}
                >
                  {sec.label}
                </a>
              );
            })}
          </nav>
        </div>
      </aside>
    </>
  );
}
