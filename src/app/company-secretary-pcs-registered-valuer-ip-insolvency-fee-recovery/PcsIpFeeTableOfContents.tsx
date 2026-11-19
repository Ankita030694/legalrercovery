"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const PCS_IP_FEE_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-out-of-pocket-trap", label: "MCA & CIRP FEE TRAP" },
  { id: "heading-icsi-ethics", label: "ICSI CLAUSE (8) & LIEN" },
  { id: "heading-ibbi-cirp-cost", label: "IBBI s.5(13) & CoC PRIORITY" },
  { id: "heading-decision-tree", label: "5-STEP RECOVERY FLOW" },
  { id: "heading-statutory-matrix", label: "PCS, VALUER & IP MATRIX" },
  { id: "heading-scenario-tabs", label: "4 DEFAULT FLASHPOINTS" },
  { id: "heading-precedents", label: "LANDMARK AUTHORITIES" },
  { id: "heading-worked-ledger", label: "WORKED ₹11.85L LEDGER" },
  { id: "heading-evidence-checklist", label: "SRN, CoC & BSA s.63 PROOF" },
  { id: "heading-dual-cta", label: "ADVOCATE NOTICE & CSV" },
  { id: "heading-faqs", label: "FAQs" },
  { id: "heading-sources", label: "IBBI, ICSI & MCA SOURCES" },
];

interface PcsIpFeeTableOfContentsProps {
  sections?: TOCSection[];
}

export default function PcsIpFeeTableOfContents({
  sections = PCS_IP_FEE_TOC_SECTIONS,
}: PcsIpFeeTableOfContentsProps) {
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
      window.history.pushState(null, "", `#${id}`);
      setActiveId(id);
      setIsOpen(false);
    }
  };

  const activeSection = sections.find((s) => s.id === activeId) || sections[0];

  return (
    <>
      {/* Mobile Sticky TOC Bar */}
      <div
        ref={dropdownRef}
        className="lg:hidden sticky top-20 z-30 bg-slate-50/95 backdrop-blur-sm border-b border-slate-200 py-3 px-4 -mx-4 sm:-mx-6 mb-4 select-none"
      >
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between px-4 py-3 bg-white border border-slate-200 rounded-xl shadow-sm hover:border-slate-300 transition-colors cursor-pointer"
          aria-expanded={isOpen}
          aria-label="Toggle PCS, Valuer and Insolvency RP fee recovery table of contents"
        >
          <div className="flex items-center gap-2.5 min-w-0">
            <span className="w-2 h-2 rounded-full bg-[#DC2626] shrink-0 animate-pulse" />
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 shrink-0">
              Contents:
            </span>
            <span className="text-xs font-bold text-slate-900 truncate">
              {activeSection?.label}
            </span>
          </div>
          <svg
            width="16"
            height="16"
            className={`w-4 h-4 text-slate-500 transition-transform duration-200 shrink-0 ml-2 ${
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
          <div className="absolute top-full left-4 right-4 sm:left-6 sm:right-6 mt-1 max-h-80 overflow-y-auto bg-white border border-slate-200 rounded-xl shadow-xl py-2 z-40">
            {sections.map((section, idx) => {
              const isActive = activeId === section.id;
              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => scrollToSection(e, section.id)}
                  className={`block px-4 py-2.5 text-xs font-semibold tracking-wide transition-colors ${
                    isActive
                      ? "bg-red-50 text-[#DC2626] font-bold border-l-4 border-[#DC2626]"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  <span className="font-mono text-[10px] mr-2 text-slate-400">
                    {idx < 9 ? `0${idx + 1}` : idx + 1}
                  </span>
                  {section.label}
                </a>
              );
            })}
          </div>
        )}
      </div>

      {/* Desktop Left Sticky Sidebar TOC (zero h2/h3/h4 headings inside aside) */}
      <aside
        aria-label="Table of contents"
        className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start"
      >
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
          <p className="text-[11px] font-extrabold uppercase tracking-widest text-slate-400 mb-3 pb-2 border-b border-slate-100">
            On This Page
          </p>
          <nav className="space-y-1">
            {sections.map((section, idx) => {
              const isActive = activeId === section.id;
              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => scrollToSection(e, section.id)}
                  className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs transition-all ${
                    isActive
                      ? "bg-[#DC2626] text-white font-bold shadow-sm"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 font-medium"
                  }`}
                >
                  <span
                    className={`font-mono text-[10px] shrink-0 ${
                      isActive ? "text-red-100" : "text-slate-400"
                    }`}
                  >
                    {idx < 9 ? `0${idx + 1}` : idx + 1}
                  </span>
                  <span className="truncate">{section.label}</span>
                </a>
              );
            })}
          </nav>

          <div className="mt-5 pt-4 border-t border-slate-100">
            <a
              href="#heading-dual-cta"
              onClick={(e) => scrollToSection(e, "heading-dual-cta")}
              className="block w-full text-center px-3.5 py-2.5 rounded-xl bg-slate-900 hover:bg-[#DC2626] text-white text-xs font-bold transition-colors"
            >
              Recover PCS / IP Fees &rarr;
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}
