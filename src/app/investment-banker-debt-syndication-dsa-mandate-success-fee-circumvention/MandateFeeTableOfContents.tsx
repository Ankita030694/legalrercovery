"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const MANDATE_FEE_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-closing-bypass", label: "CLOSING-TABLE BYPASS" },
  { id: "heading-tail-effective-cause", label: "TAIL CLAUSE & EFFECTIVE CAUSE" },
  { id: "heading-decision-tree", label: "5-STAGE RECOVERY FLOW" },
  { id: "heading-statutory-matrix", label: "DEBT, M&A & IPC MATRIX" },
  { id: "heading-scenario-tabs", label: "4 CIRCUMVENTION PLAYBOOKS" },
  { id: "heading-precedents", label: "SUPREME COURT PRECEDENTS" },
  { id: "heading-worked-ledger", label: "₹75L & ₹2.5 CR LEDGERS" },
  { id: "heading-evidence-checklist", label: "CHG-1, PAS-3 & BSA s.63" },
  { id: "heading-dual-cta", label: "ADVOCATE NOTICE & CSV" },
  { id: "heading-related-tools", label: "TOOLS & SIBLING GUIDES" },
  { id: "heading-faqs", label: "FAQs" },
  { id: "heading-sources", label: "BARE ACTS & MCA PORTALS" },
];

interface MandateFeeTableOfContentsProps {
  sections?: TOCSection[];
}

export default function MandateFeeTableOfContents({
  sections = MANDATE_FEE_TOC_SECTIONS,
}: MandateFeeTableOfContentsProps) {
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
          aria-label="Toggle investment banker and debt syndication fee recovery table of contents"
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
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {isOpen && (
          <div className="mt-2 bg-white border border-slate-200 rounded-xl shadow-lg p-2 max-h-[60vh] overflow-y-auto">
            <nav aria-label="Mobile table of contents" className="space-y-1">
              {sections.map((section, idx) => {
                const isActive = section.id === activeId;
                return (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    onClick={(e) => scrollToSection(e, section.id)}
                    className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs transition-colors ${
                      isActive
                        ? "bg-[#DC2626] text-white font-bold shadow-sm"
                        : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 font-medium"
                    }`}
                  >
                    <span
                      className={`text-[10px] font-mono shrink-0 ${
                        isActive ? "text-red-100" : "text-slate-400"
                      }`}
                    >
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className="truncate">{section.label}</span>
                  </a>
                );
              })}
            </nav>
          </div>
        )}
      </div>

      {/* Desktop Sticky Left Sidebar TOC (strictly zero h2/h3/h4 tags inside sidebar) */}
      <aside className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start">
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100">
            <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
            <p className="text-xs font-extrabold uppercase tracking-widest text-slate-900">
              Playbook Contents
            </p>
          </div>
          <nav aria-label="Desktop table of contents" className="space-y-1">
            {sections.map((section, idx) => {
              const isActive = section.id === activeId;
              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => scrollToSection(e, section.id)}
                  className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs transition-all ${
                    isActive
                      ? "bg-[#DC2626] text-white font-bold shadow-sm"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 font-medium"
                  }`}
                >
                  <span
                    className={`text-[10px] font-mono shrink-0 ${
                      isActive ? "text-red-100" : "text-slate-400"
                    }`}
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="truncate">{section.label}</span>
                </a>
              );
            })}
          </nav>

          <div className="mt-5 pt-4 border-t border-slate-100">
            <p className="text-[11px] font-bold text-slate-800 mb-1">
              Closing Imminent?
            </p>
            <p className="text-[11px] text-slate-500 leading-relaxed mb-3">
              Serve a Tail-Clause &amp; Section 9 / Order 38 Pre-Disbursement Notice before funds move.
            </p>
            <a
              href="#heading-dual-cta"
              onClick={(e) => scrollToSection(e, "heading-dual-cta")}
              className="block w-full text-center px-3 py-2 rounded-xl text-xs font-bold bg-[#DC2626] text-white hover:bg-[#B91C1C] transition-colors shadow-sm"
            >
              Trigger Urgent Fee Notice &rarr;
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}
