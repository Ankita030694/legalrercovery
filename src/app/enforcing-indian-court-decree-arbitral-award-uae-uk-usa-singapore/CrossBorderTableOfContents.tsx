"use client";

import React, { useEffect, useState, useRef } from "react";

export interface CrossBorderTOCSection {
  id: string;
  label: string;
}

export const CROSS_BORDER_TOC_SECTIONS: CrossBorderTOCSection[] = [
  { id: "heading-statutory-summary", label: "EXECUTIVE SUMMARY" },
  { id: "heading-statutory-framework", label: "STATUTORY REGIMES" },
  { id: "heading-cross-border-matrix", label: "ENFORCEMENT MATRIX" },
  { id: "heading-reciprocity-precedents", label: "RECIPROCITY & PRECEDENTS" },
  { id: "heading-service-abroad", label: "HAGUE CONVENTION & SERVICE" },
  { id: "heading-jurisdiction-scenarios", label: "DEFAULT SCENARIOS" },
  { id: "heading-worked-cost-benefit", label: "COST-BENEFIT ANALYSIS" },
  { id: "heading-creditor-sop", label: "CROSS-BORDER RECOVERY SOP" },
  { id: "heading-faqs", label: "EXECUTIVE FAQS" },
];

interface CrossBorderTOCProps {
  sections?: CrossBorderTOCSection[];
}

export default function CrossBorderTableOfContents({
  sections = CROSS_BORDER_TOC_SECTIONS,
}: CrossBorderTOCProps) {
  const [activeId, setActiveId] = useState<string>(sections[0]?.id || "");
  const [mobileSelectOpen, setMobileSelectOpen] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      const visibleEntries = entries.filter((entry) => entry.isIntersecting);
      if (visibleEntries.length > 0) {
        setActiveId(visibleEntries[0].target.id);
      }
    };

    observerRef.current = new IntersectionObserver(handleIntersect, {
      rootMargin: "-100px 0px -60% 0px",
      threshold: 0,
    });

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        observerRef.current?.observe(element);
      }
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, [sections]);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setMobileSelectOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Sticky Bar */}
      <div className="lg:hidden sticky top-20 z-30 bg-slate-50/95 backdrop-blur-sm border-b border-slate-200 py-3 px-4 -mx-4 sm:-mx-6 mb-6">
        <button
          onClick={() => setMobileSelectOpen(!mobileSelectOpen)}
          className="w-full flex items-center justify-between px-4 py-2.5 bg-white border border-slate-300 rounded-xl text-xs font-bold text-slate-800 shadow-sm"
          aria-expanded={mobileSelectOpen}
        >
          <span className="truncate flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
            {sections.find((s) => s.id === activeId)?.label || "Table of Contents"}
          </span>
          <span className="text-slate-400 text-xs ml-2">Select Section</span>
        </button>

        {mobileSelectOpen && (
          <div className="absolute left-4 right-4 mt-2 bg-white border border-slate-200 rounded-xl shadow-xl p-2 z-40 max-h-72 overflow-y-auto">
            {sections.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`w-full text-left px-3 py-2 rounded-lg text-xs font-semibold transition-colors flex items-center justify-between ${
                  activeId === id
                    ? "bg-[#DC2626] text-white"
                    : "text-slate-700 hover:bg-slate-100"
                }`}
              >
                <span>{label}</span>
                {activeId === id && <span className="text-[10px] uppercase font-bold">Active</span>}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Desktop Sticky Aside */}
      <aside className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
        <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
          Statutory Navigation
        </p>
        <nav className="space-y-1" aria-label="Table of Contents">
          {sections.map(({ id, label }) => {
            const isActive = activeId === id;
            return (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`w-full text-left px-3 py-2 rounded-xl text-xs font-semibold transition-all flex items-center justify-between group ${
                  isActive
                    ? "bg-[#DC2626] text-white font-bold shadow-sm"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                <span className="truncate">{label}</span>
                <span
                  className={`w-1.5 h-1.5 rounded-full transition-transform ${
                    isActive ? "bg-white scale-125" : "bg-transparent group-hover:bg-slate-300"
                  }`}
                />
              </button>
            );
          })}
        </nav>

        <div className="mt-6 pt-5 border-t border-slate-100">
          <p className="text-[11px] font-medium text-slate-500 mb-2">Cross-Border Assistance</p>
          <a
            href="/user/new-recovery"
            className="block text-center w-full py-2 bg-slate-900 hover:bg-black text-white text-xs font-bold rounded-lg transition-colors shadow-sm"
          >
            Initiate Foreign Claim
          </a>
        </div>
      </aside>
    </>
  );
}
