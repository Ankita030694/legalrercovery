"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const CRYPTO_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-quick-answer", label: "OVERVIEW" },
  { id: "heading-decision-tree", label: "DECISION TREE" },
  { id: "heading-route-cyber-lien", label: "ROUTE 1: CYBER LIEN" },
  { id: "heading-route-aml-arbitrary", label: "ROUTE 2: ARBITRARY LOCK" },
  { id: "heading-route-fiat-stuck", label: "ROUTE 3: INR SETTLEMENT" },
  { id: "heading-route-exchange-moratorium", label: "ROUTE 4: HACK / MORATORIUM" },
  { id: "heading-statutory-table", label: "FACTS & BENCHMARKS" },
  { id: "heading-crypto-status-myths", label: "LEGAL STATUS IN INDIA" },
  { id: "heading-problem-scenarios", label: "DIAGNOSTIC TABS" },
  { id: "heading-worked-example", label: "WORKED EXAMPLE" },
  { id: "heading-evidence-checklist", label: "EVIDENCE CHECKLIST" },
  { id: "heading-arbitration-clause", label: "ARBITRATION CLAUSES" },
  { id: "heading-escalation-playbook", label: "5-STEP PLAYBOOK" },
  { id: "heading-scope-matrix", label: "OUR SCOPE" },
  { id: "heading-court-precedents", label: "COURT PRECEDENTS" },
  { id: "heading-faqs", label: "FAQ" },
  { id: "heading-sources", label: "LEGAL SOURCES" },
];

interface CryptoTableOfContentsProps {
  sections?: TOCSection[];
}

export default function CryptoTableOfContents({
  sections = CRYPTO_TOC_SECTIONS,
}: CryptoTableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>(sections[0]?.id || "");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      const visibleEntries = entries.filter((entry) => entry.isIntersecting);
      if (visibleEntries.length > 0) {
        setActiveId(visibleEntries[0].target.id);
      }
    };

    observerRef.current = new IntersectionObserver(handleIntersect, {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    });

    sections.forEach(({ id }) => {
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
  }, [sections]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const topOffset = 90;
      const elPos = el.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elPos - topOffset,
        behavior: "smooth",
      });
    }
  };

  return (
    <aside
      aria-label="Table of Contents Navigation"
      className="hidden lg:block w-64 shrink-0 sticky top-28 self-start bg-white border border-slate-200/90 rounded-2xl p-4 shadow-xs"
    >
      <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100">
        <span className="w-2 h-2 rounded-full bg-[#DC2626] animate-pulse" />
        <span className="text-[11px] font-black uppercase tracking-wider text-slate-800">
          Navigation Index
        </span>
      </div>

      <nav aria-label="Article Outline" className="space-y-0.5 max-h-[calc(100vh-200px)] overflow-y-auto pr-1">
        {sections.map(({ id, label }) => {
          const isActive = activeId === id;
          return (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`w-full text-left px-2.5 py-1.5 rounded-lg text-[11px] font-bold tracking-tight transition-all cursor-pointer flex items-center justify-between ${
                isActive
                  ? "bg-red-50 text-[#DC2626] font-black border-l-3 border-[#DC2626] pl-2"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
              }`}
            >
              <span className="truncate">{label}</span>
              {isActive && (
                <span className="text-[#DC2626] text-[10px] shrink-0 font-extrabold ml-1">
                  ●
                </span>
              )}
            </button>
          );
        })}
      </nav>

      <div className="mt-4 pt-3 border-t border-slate-100">
        <p className="text-[10px] text-slate-500 font-medium leading-relaxed">
          Statutory remedies under PMLA, CPA 2019 &amp; BNSS 2023.
        </p>
      </div>
    </aside>
  );
}
