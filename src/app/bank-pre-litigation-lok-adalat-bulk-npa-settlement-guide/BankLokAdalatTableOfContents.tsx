"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const BANK_LOK_ADALAT_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-turnout-bottleneck", label: "THE <8% TURNOUT CRISIS" },
  { id: "heading-lok-adalat-workflow", label: "T-45 TO T+30 BULK SOP" },
  { id: "heading-statutory-matrix", label: "LSA ACT s.19, 20(2) & 21" },
  { id: "heading-scenario-tabs", label: "4 BANK NPA PLAYBOOKS" },
  { id: "heading-ots-priming", label: "WHATSAPP + RPAD OTS PRIMING" },
  { id: "heading-worked-economics", label: "2,500-ACCOUNT ZONE LEDGER" },
  { id: "heading-dlsa-checklist", label: "DLSA CSV & BSA s.63 PROOF" },
  { id: "heading-precedents", label: "SUPREME COURT PRECEDENTS" },
  { id: "heading-dual-cta", label: "ZONAL BULK NOTICE DESK" },
  { id: "heading-bank-network", label: "IND-01 BANKING NETWORK" },
  { id: "heading-faqs", label: "FREQUENTLY ASKED QUESTIONS" },
  { id: "heading-sources", label: "STATUTES & NALSA PORTALS" },
];

interface BankLokAdalatTableOfContentsProps {
  sections?: TOCSection[];
}

export default function BankLokAdalatTableOfContents({
  sections = BANK_LOK_ADALAT_TOC_SECTIONS,
}: BankLokAdalatTableOfContentsProps) {
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {isOpen && (
            <div className="absolute top-full left-0 right-0 mt-1.5 bg-white border border-slate-200 rounded-xl shadow-xl py-2 z-40 max-h-[60vh] overflow-y-auto">
              {sections.map((section, idx) => {
                const isActive = activeId === section.id;
                return (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    onClick={(e) => scrollToSection(e, section.id)}
                    className={`flex items-center gap-2.5 px-4 py-2 text-xs transition-colors ${
                      isActive
                        ? "bg-red-50 text-[#DC2626] font-bold border-l-2 border-[#DC2626]"
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                    }`}
                  >
                    <span className="text-[10px] text-slate-400 font-mono w-4">
                      {idx + 1}.
                    </span>
                    <span className="truncate">{section.label}</span>
                  </a>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Desktop Sticky Aside */}
      <aside className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start">
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
          <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100">
            <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
            <p className="text-xs font-bold uppercase tracking-wider text-slate-700">
              Lok Adalat Playbook SOP
            </p>
          </div>
          <nav className="space-y-1">
            {sections.map((section, idx) => {
              const isActive = activeId === section.id;
              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => scrollToSection(e, section.id)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs transition-all ${
                    isActive
                      ? "bg-[#DC2626] text-white font-bold shadow-sm"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 font-medium"
                  }`}
                >
                  <span
                    className={`text-[10px] font-mono w-4 shrink-0 ${
                      isActive ? "text-white/80" : "text-slate-400"
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
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-[11px] text-slate-600 space-y-1.5">
              <div className="flex items-center gap-1.5 font-bold text-slate-800">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>Statutory Anchor</span>
              </div>
              <p className="leading-snug text-slate-500">
                LSA Act 1987 ss.19, 20(2) &amp; 21: Zero court fee pre-litigation filing &amp; non-appealable Civil Court Decree status.
              </p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
