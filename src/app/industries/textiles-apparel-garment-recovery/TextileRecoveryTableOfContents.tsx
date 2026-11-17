"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TextileRecoveryTOCSection {
  id: string;
  label: string;
}

export const TEXTILE_RECOVERY_TOC_SECTIONS: TextileRecoveryTOCSection[] = [
  { id: "heading-textile-credit-crisis", label: "TEXTILE CREDIT & CASH CYCLE" },
  { id: "heading-multi-track-matrix", label: "8-TRACK ESCALATION MATRIX" },
  { id: "heading-scenario-explorer", label: "4 CLUSTER RECOVERY SCENARIOS" },
  { id: "heading-statutory-architecture", label: "STATUTORY HOOKS & PRECEDENTS" },
  { id: "heading-evidence-protocol", label: "BILTY, E-WAY & BSA S.63 SOP" },
  { id: "heading-financial-damage-ledger", label: "MSME 3X INTEREST & 43B(H) MATH" },
  { id: "heading-spokes-directory", label: "IND-13 TEXTILE SPOKES DIRECTORY" },
  { id: "heading-dual-funnel-desk", label: "DUAL RECOVERY ONBOARDING" },
  { id: "heading-textile-faqs", label: "MILL PROMOTER & CFO FAQS" },
  { id: "heading-statutory-sources", label: "LEGAL CITATIONS & SITEMAP" },
];

interface TextileRecoveryTableOfContentsProps {
  sections?: TextileRecoveryTOCSection[];
}

export default function TextileRecoveryTableOfContents({
  sections = TEXTILE_RECOVERY_TOC_SECTIONS,
}: TextileRecoveryTableOfContentsProps) {
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
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -90;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveId(id);
      setIsOpen(false);
    }
  };

  const currentSection = sections.find((s) => s.id === activeId) || sections[0];

  return (
    <>
      {/* Mobile Sticky Bar */}
      <div className="lg:hidden sticky top-20 z-30 bg-slate-50/95 backdrop-blur-sm border-b border-slate-200 py-3 px-4 -mx-4 sm:-mx-6 mb-6">
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between px-4 py-2.5 bg-white border border-slate-300 rounded-xl text-xs font-semibold text-slate-700 shadow-sm"
            aria-expanded={isOpen}
            aria-label="Table of Contents Navigation"
          >
            <span className="flex items-center gap-2 truncate">
              <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
              <span className="truncate">{currentSection?.label}</span>
            </span>
            <svg
              className={`w-4 h-4 ml-2 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isOpen && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-200 rounded-xl shadow-xl max-h-72 overflow-y-auto z-40 p-2 space-y-1">
              {sections.map((section, idx) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-xs transition-colors flex items-center gap-2 ${
                    activeId === section.id
                      ? "bg-[#DC2626] text-white font-bold"
                      : "text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  <span
                    className={`w-4 h-4 rounded text-[10px] flex items-center justify-center font-bold ${
                      activeId === section.id
                        ? "bg-white text-[#DC2626]"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    {idx + 1}
                  </span>
                  <span className="truncate">{section.label}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Desktop Sticky Sidebar */}
      <aside className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
        <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100">
          <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626] animate-pulse" />
          <p className="text-xs font-bold uppercase tracking-wider text-slate-800">
            Navigation Index
          </p>
        </div>

        <nav className="space-y-1" aria-label="Table of contents">
          {sections.map((section, idx) => {
            const isActive = activeId === section.id;
            return (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`w-full text-left px-3 py-2 rounded-lg text-xs transition-all flex items-center gap-2.5 ${
                  isActive
                    ? "bg-[#DC2626] text-white font-bold shadow-sm"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                <span
                  className={`w-5 h-5 rounded text-[10px] flex items-center justify-center font-bold shrink-0 ${
                    isActive
                      ? "bg-white/20 text-white"
                      : "bg-slate-100 text-slate-500"
                  }`}
                >
                  {idx + 1}
                </span>
                <span className="truncate">{section.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="mt-6 pt-4 border-t border-slate-100">
          <div className="bg-slate-50 rounded-xl p-3 border border-slate-200 text-center">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
              Cluster Fast Desk
            </span>
            <p className="text-xs text-slate-700 font-semibold mb-2">
              Surat · Tirupur · Bhiwandi · Ludhiana
            </p>
            <a
              href="/user/new-recovery"
              className="inline-block w-full py-1.5 px-3 bg-[#DC2626] hover:bg-[#B91C1C] text-white text-[11px] font-bold rounded-lg transition-colors shadow-sm"
            >
              Draft ₹999 Notice
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}
