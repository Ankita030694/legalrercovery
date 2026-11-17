"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const YARN_MILL_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-statutory-summary", label: "STATUTORY SUMMARY" },
  { id: "heading-forward-booking-crisis", label: "UNLIFTED YARN & RATE DIP CRISIS" },
  { id: "heading-sale-of-goods-s56", label: "SOGA §56 RATE DIFFERENCE SUIT" },
  { id: "heading-statutory-matrix", label: "FORUM & STATUTE MATRIX" },
  { id: "heading-decision-tree", label: "MILL RECOVERY DECISION TREE" },
  { id: "heading-scenarios", label: "COMMERCIAL FAILURE MODES" },
  { id: "heading-worked-calculation", label: "DIFFERENCE & INTEREST LEDGER" },
  { id: "heading-cai-sima-arbitration", label: "SIMA / CAI ARBITRATION VS COURT" },
  { id: "heading-evidence-checklist", label: "BSA §63 EVIDENCE CHECKLIST" },
  { id: "heading-faqs", label: "FREQUENT QUESTIONS" },
];

export default function YarnMillTableOfContents() {
  const [activeId, setActiveId] = useState<string>("heading-statutory-summary");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      const visibleEntries = entries.filter((entry) => entry.isIntersecting);
      if (visibleEntries.length > 0) {
        setActiveId(visibleEntries[0].target.id);
      }
    };

    observerRef.current = new IntersectionObserver(handleIntersect, {
      rootMargin: "-90px 0px -60% 0px",
      threshold: 0,
    });

    YARN_MILL_TOC_SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el && observerRef.current) {
        observerRef.current.observe(el);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -90;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveId(id);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Sticky Selector */}
      <div className="lg:hidden sticky top-20 z-30 bg-slate-50/95 backdrop-blur-sm border-b border-slate-200 py-3 px-4 -mx-4 sm:-mx-6 mb-6">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="w-full flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-700 bg-white border border-slate-200 px-4 py-2.5 rounded-xl shadow-sm"
          aria-expanded={isMobileMenuOpen}
        >
          <span className="flex items-center gap-2 truncate">
            <span className="w-2 h-2 rounded-full bg-[#DC2626]"></span>
            <span className="truncate">
              {YARN_MILL_TOC_SECTIONS.find((s) => s.id === activeId)?.label || "Table of Contents"}
            </span>
          </span>
          <svg
            className={`w-4 h-4 shrink-0 transition-transform ${isMobileMenuOpen ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {isMobileMenuOpen && (
          <div className="mt-2 bg-white border border-slate-200 rounded-xl p-2 shadow-lg max-h-64 overflow-y-auto space-y-1">
            {YARN_MILL_TOC_SECTIONS.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={(e) => scrollToSection(e, section.id)}
                className={`block px-3 py-2 text-xs rounded-lg font-medium transition-colors ${
                  activeId === section.id
                    ? "bg-[#DC2626] text-white font-bold"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                {section.label}
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Desktop Sticky Aside */}
      <aside className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start">
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4 pb-2 border-b border-slate-100 flex items-center justify-between">
            <span>Playbook Index</span>
            <span className="w-2 h-2 rounded-full bg-[#DC2626]"></span>
          </p>
          <nav className="space-y-1" aria-label="Table of Contents">
            {YARN_MILL_TOC_SECTIONS.map((section) => {
              const isActive = activeId === section.id;
              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => scrollToSection(e, section.id)}
                  className={`block px-3 py-2 rounded-xl text-xs transition-all ${
                    isActive
                      ? "bg-[#DC2626] text-white font-bold shadow-sm translate-x-1"
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
