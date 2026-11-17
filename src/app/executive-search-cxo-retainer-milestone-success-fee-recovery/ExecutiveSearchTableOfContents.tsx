"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const EXECUTIVE_SEARCH_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-retained-mandate-crisis", label: "RETAINED SEARCH DEFAULT CRISIS" },
  { id: "heading-tranche-mechanics", label: "1/3–1/3–1/3 TRANCHE LAW" },
  { id: "heading-statutory-enforcement-matrix", label: "STATUTORY RECOVERY MATRIX" },
  { id: "heading-operational-decision-tree", label: "5-STAGE RECOVERY PROTOCOL" },
  { id: "heading-commercial-failure-scenarios", label: "4 COMMON DEFAULT SCENARIOS" },
  { id: "heading-kill-fee-enforceability", label: "CANCELLED SEARCH KILL FEES" },
  { id: "heading-ctc-esop-audit-disclosure", label: "CTC, BONUS & ESOP AUDITS" },
  { id: "heading-model-search-mandate-clauses", label: "MODEL MANDATE CLAUSES" },
  { id: "heading-worked-search-fee-ledger", label: "FINANCIAL SIMULATION LEDGER" },
  { id: "heading-bsa-electronic-evidence", label: "BSA 2023 S.63 AUDIT TRAIL" },
  { id: "heading-executive-search-faq", label: "FREQUENTLY ASKED QUESTIONS" },
  { id: "heading-statutory-authorities", label: "STATUTORY PRECEDENTS" },
];

export default function ExecutiveSearchTableOfContents() {
  const [activeId, setActiveId] = useState<string>(EXECUTIVE_SEARCH_TOC_SECTIONS[0].id);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      const visibleEntries = entries.filter((entry) => entry.isIntersecting);
      if (visibleEntries.length > 0) {
        // Sort by distance to top of viewport
        visibleEntries.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        setActiveId(visibleEntries[0].target.id);
      }
    };

    observerRef.current = new IntersectionObserver(handleIntersect, {
      root: null,
      rootMargin: "-100px 0px -60% 0px",
      threshold: [0, 0.2, 0.5],
    });

    EXECUTIVE_SEARCH_TOC_SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observerRef.current?.observe(el);
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  const scrollToSection = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      const yOffset = -90;
      const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveId(id);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Sticky Bar */}
      <div className="lg:hidden sticky top-20 z-30 bg-slate-50/95 backdrop-blur-sm border-b border-slate-200 py-3 px-4 -mx-4 sm:-mx-6 mb-6">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 min-w-0">
            <span className="w-2 h-2 rounded-full bg-[#DC2626] shrink-0" />
            <span className="text-xs font-bold text-slate-700 truncate">
              {EXECUTIVE_SEARCH_TOC_SECTIONS.find((s) => s.id === activeId)?.label || "TOC Navigation"}
            </span>
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="px-3 py-1.5 rounded-lg bg-white border border-slate-300 text-xs font-semibold text-slate-800 shadow-sm shrink-0 flex items-center gap-1.5"
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            <span>Sections</span>
            <svg
              className={`w-3.5 h-3.5 transition-transform ${isMobileMenuOpen ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="mt-3 p-3 bg-white border border-slate-200 rounded-xl shadow-lg space-y-1 max-h-72 overflow-y-auto">
            {EXECUTIVE_SEARCH_TOC_SECTIONS.map((section) => {
              const isActive = activeId === section.id;
              return (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-xs transition-colors flex items-center justify-between ${
                    isActive
                      ? "bg-[#DC2626] text-white font-bold"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  <span className="truncate">{section.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-white ml-2 shrink-0" />}
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Desktop Sticky Aside */}
      <aside className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
        <div className="flex items-center gap-2 pb-4 mb-4 border-b border-slate-100">
          <div className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
          <p className="text-xs font-bold uppercase tracking-wider text-slate-900">
            Retained Search Playbook
          </p>
        </div>
        <nav className="space-y-1 max-h-[calc(100vh-200px)] overflow-y-auto pr-1">
          {EXECUTIVE_SEARCH_TOC_SECTIONS.map((section) => {
            const isActive = activeId === section.id;
            return (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`w-full text-left px-3 py-2.5 rounded-xl text-xs transition-all flex items-center justify-between group ${
                  isActive
                    ? "bg-[#DC2626] text-white font-bold shadow-sm"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                <span className="truncate">{section.label}</span>
                <span
                  className={`text-[10px] opacity-0 group-hover:opacity-100 transition-opacity ${
                    isActive ? "opacity-100 text-white" : "text-slate-400"
                  }`}
                >
                  &rarr;
                </span>
              </button>
            );
          })}
        </nav>

        <div className="mt-6 pt-4 border-t border-slate-100">
          <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/60">
            <span className="block text-[11px] font-bold text-slate-900 mb-1">
              Need Instant Counsel?
            </span>
            <p className="text-[11px] text-slate-600 leading-relaxed mb-2.5">
              Recover unpaid CXO retainer milestones and disguised sign-on bonuses.
            </p>
            <a
              href="#heading-operational-decision-tree"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("heading-operational-decision-tree");
              }}
              className="block text-center py-1.5 px-2 bg-slate-900 text-white rounded-lg text-[11px] font-semibold hover:bg-slate-800 transition-colors"
            >
              View Escalation SOP
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}
