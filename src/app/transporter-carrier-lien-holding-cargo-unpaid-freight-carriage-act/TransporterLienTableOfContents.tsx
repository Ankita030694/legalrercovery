"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const TRANSPORTER_LIEN_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-particular-vs-general-lien", label: "PARTICULAR VS GENERAL LIEN" },
  { id: "heading-statutory-carriage-framework", label: "CARRIAGE BY ROAD ACT 2007" },
  { id: "heading-bilty-clause-drafting", label: "ENFORCEABLE BILTY CLAUSES" },
  { id: "heading-pre-detention-decision-tree", label: "PRE-DETENTION PROTOCOL" },
  { id: "heading-scenario-tabs", label: "4 COMMERCIAL SCENARIOS" },
  { id: "heading-judicial-precedents", label: "SUPREME COURT PRECEDENTS" },
  { id: "heading-fir-shield-bns-defense", label: "DEFEATING BNS THEFT FIRS" },
  { id: "heading-worked-financial-ledger", label: "DETENTION COST LEDGER" },
  { id: "heading-evidence-bsa-checklist", label: "BSA s.63 EVIDENCE PACK" },
  { id: "heading-cta-desk", label: "DEPLOY RECOVERY DESK" },
  { id: "heading-faqs", label: "FAQS" },
  { id: "heading-sources", label: "STATUTES & SITEMAP" },
];

interface TransporterLienTableOfContentsProps {
  sections?: TOCSection[];
}

export default function TransporterLienTableOfContents({
  sections = TRANSPORTER_LIEN_TOC_SECTIONS,
}: TransporterLienTableOfContentsProps) {
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
          const top = el.offsetTop;
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
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
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
            className="w-full flex items-center justify-between px-4 py-2.5 bg-white border border-slate-200 rounded-xl shadow-sm text-xs font-bold text-slate-800"
            aria-expanded={isOpen}
            aria-label="Table of Contents"
          >
            <span className="flex items-center gap-2 truncate">
              <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
              <span className="text-slate-500 uppercase tracking-wider text-[10px]">TOC:</span>
              <span className="truncate">{activeSection?.label}</span>
            </span>
            <svg
              className={`w-4 h-4 text-slate-500 transition-transform ${isOpen ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isOpen && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-200 rounded-xl shadow-xl z-50 max-h-80 overflow-y-auto p-2 space-y-1">
              {sections.map((section) => {
                const isActive = activeId === section.id;
                return (
                  <button
                    key={section.id}
                    type="button"
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-xs font-semibold transition-colors flex items-center gap-2 ${
                      isActive
                        ? "bg-[#DC2626] text-white"
                        : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        isActive ? "bg-white" : "bg-slate-300"
                      }`}
                    />
                    <span className="truncate">{section.label}</span>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Desktop Sticky Aside */}
      <aside className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
        <p className="text-[11px] font-black uppercase tracking-widest text-slate-400 mb-4 pb-2 border-b border-slate-100">
          Contents &middot; Carrier Lien
        </p>
        <nav className="space-y-1" aria-label="Table of Contents">
          {sections.map((section) => {
            const isActive = activeId === section.id;
            return (
              <button
                key={section.id}
                type="button"
                onClick={() => scrollToSection(section.id)}
                className={`w-full text-left px-3 py-2 rounded-xl text-xs transition-all flex items-center gap-2.5 ${
                  isActive
                    ? "bg-[#DC2626] text-white font-bold shadow-sm"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 font-medium"
                }`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full shrink-0 transition-colors ${
                    isActive ? "bg-white" : "bg-slate-300"
                  }`}
                />
                <span className="truncate">{section.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="mt-6 pt-4 border-t border-slate-100">
          <div className="bg-red-50 rounded-xl p-3 border border-red-100">
            <span className="text-[10px] font-black uppercase tracking-wider text-[#DC2626] block mb-1">
              Urgent Bilty Advice
            </span>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              Consignment held at godown or interstate checkpost? Issue a formal 48-hour Lien Notice before the consignee lodges a police complaint.
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}
