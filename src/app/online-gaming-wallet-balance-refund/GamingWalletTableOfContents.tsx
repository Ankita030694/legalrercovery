"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const GAMING_WALLET_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-comparison-matrix", label: "ROUTE MATRIX" },
  { id: "heading-personas", label: "WHICH ROUTE FOR YOU" },
  { id: "heading-route-notice", label: "ROUTE 1: LEGAL NOTICE" },
  { id: "heading-route-consumer", label: "ROUTE 2: CONSUMER FORUM" },
  { id: "heading-route-cyber", label: "ROUTE 3: CYBER / MEITY" },
  { id: "heading-route-civil", label: "ROUTE 4: CIVIL SUIT" },
  { id: "heading-legal-framework", label: "2025 GAMING ACT & RULES" },
  { id: "heading-principal-vs-winnings", label: "PRINCIPAL VS TDS" },
  { id: "heading-problem-tabs", label: "SCENARIO DIAGNOSTIC" },
  { id: "heading-case-digest", label: "COURT PRECEDENTS" },
  { id: "heading-recovery-pipeline", label: "RECOVERY FLOWCHART" },
  { id: "heading-worked-example", label: "WORKED EXAMPLE" },
  { id: "heading-myth-vs-fact", label: "MYTH VS FACT" },
  { id: "heading-evidence-checklist", label: "EVIDENCE CHECKLIST" },
  { id: "heading-scope-honesty", label: "HONEST SCOPE" },
  { id: "heading-faqs", label: "FAQS" },
  { id: "heading-sources", label: "PRIMARY SOURCES" },
];

interface GamingWalletTableOfContentsProps {
  sections?: TOCSection[];
}

export default function GamingWalletTableOfContents({
  sections = GAMING_WALLET_TOC_SECTIONS,
}: GamingWalletTableOfContentsProps) {
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
      const offset = 90;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

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
      {/* Mobile Sticky Floating Dropdown Header */}
      <div className="lg:hidden sticky top-16 z-30 w-full mb-6" ref={dropdownRef}>
        <div className="bg-white/95 backdrop-blur-md border border-slate-200 rounded-xl shadow-lg p-2.5">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between px-3 py-2 text-xs font-bold text-slate-800 bg-slate-50 hover:bg-slate-100 rounded-lg border border-slate-200 transition-colors"
            aria-expanded={isOpen}
            aria-controls="mobile-toc-dropdown"
          >
            <div className="flex items-center gap-2 truncate">
              <span className="w-2 h-2 rounded-full bg-[#DC2626] shrink-0" />
              <span className="text-slate-500 font-semibold uppercase text-[10px] tracking-wider">
                Section:
              </span>
              <span className="truncate text-slate-900">{activeSection?.label}</span>
            </div>
            <svg
              className={`w-4 h-4 text-slate-600 transition-transform duration-200 shrink-0 ml-2 ${
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
            <div
              id="mobile-toc-dropdown"
              className="mt-2 max-h-72 overflow-y-auto divide-y divide-slate-100 bg-white rounded-lg border border-slate-200 shadow-xl py-1 text-xs"
            >
              {sections.map((section, idx) => {
                const isActive = activeId === section.id;
                return (
                  <button
                    key={section.id}
                    type="button"
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full text-left px-3 py-2.5 flex items-center gap-2.5 transition-colors ${
                      isActive
                        ? "bg-red-50 text-[#DC2626] font-bold"
                        : "text-slate-700 hover:bg-slate-50 font-medium"
                    }`}
                  >
                    <span className="text-[10px] font-mono text-slate-400 w-4 shrink-0">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className="truncate">{section.label}</span>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Desktop Sticky Sidebar */}
      <aside
        aria-label="Table of contents"
        className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-24 self-start space-y-4"
      >
        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
          <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100">
            <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
            <p className="text-xs font-black uppercase tracking-wider text-slate-900">
              Contents Navigation
            </p>
          </div>
          <nav className="space-y-1 max-h-[calc(100vh-180px)] overflow-y-auto pr-1 text-xs">
            {sections.map((section, idx) => {
              const isActive = activeId === section.id;
              return (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg flex items-center gap-2.5 transition-all text-xs ${
                    isActive
                      ? "bg-red-50 text-[#DC2626] font-bold shadow-xs border-l-3 border-[#DC2626]"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900 font-medium"
                  }`}
                >
                  <span className="font-mono text-[10px] text-slate-400 w-4 shrink-0">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="truncate">{section.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Quick Legal Notice Promo in Sidebar */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-4 shadow-sm border border-slate-700">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2 py-0.5 bg-red-600/90 text-white text-[10px] font-bold rounded uppercase">
              Advocate Drafting
            </span>
          </div>
          <p className="text-xs font-bold text-white mb-1.5 leading-snug">
            Wallet Balance Stuck on a Gaming App?
          </p>
          <p className="text-[11px] text-slate-300 mb-3 leading-relaxed">
            Issue a formal 15-day statutory demand notice directly to the platform&apos;s registered entity under CPA 2019.
          </p>
          <a
            href="#heading-cta-block"
            className="block text-center w-full py-2 px-3 bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs font-bold rounded-lg transition-colors shadow-sm"
          >
            Draft Demand Notice — ₹999
          </a>
        </div>
      </aside>
    </>
  );
}
