"use client";

import React, { useEffect, useState } from "react";

interface SectionLink {
  id: string;
  label: string;
}

const SECTIONS: SectionLink[] = [
  { id: "heading-checklist-wizard", label: "Pre-Flight Checklist" },
  { id: "heading-statutory-framework", label: "RBI & IRDAI Legal Rules" },
  { id: "heading-evidence-matrix", label: "Document & Evidence Matrix" },
  { id: "heading-process-timeline", label: "5-Step Recovery Timeline" },
  { id: "heading-worked-example", label: "Worked Refund Audit" },
  { id: "heading-court-precedents", label: "Landmark Court Precedents" },
  { id: "heading-workflow-diagram", label: "Bancassurance Money Flow" },
  { id: "heading-myth-fact", label: "Common Myths vs Legal Facts" },
  { id: "heading-legal-notice-format", label: "Legal Notice Demand Format" },
  { id: "heading-faqs", label: "Frequently Asked Questions" },
  { id: "heading-primary-sources", label: "Primary Statutory Sources" },
];

export default function InsuranceDebitTableOfContents() {
  const [activeId, setActiveId] = useState<string>(SECTIONS[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-80px 0px -60% 0px" }
    );

    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <aside
      aria-label="Table of Contents"
      className="hidden lg:block w-72 shrink-0 sticky top-28 space-y-6"
    >
      <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-sm">
        <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100">
          <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
            Guide Navigation
          </h3>
        </div>
        <nav>
          <ul className="space-y-1.5 text-xs">
            {SECTIONS.map((section) => {
              const isActive = activeId === section.id;
              return (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className={`block py-1.5 px-3 rounded-lg transition-colors font-medium ${
                      isActive
                        ? "bg-red-50 text-red-700 font-bold border-l-2 border-red-600 pl-2.5"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                    }`}
                  >
                    {section.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-5 shadow-md border border-slate-700">
        <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-amber-400 mb-1">
          Bancassurance Alert
        </span>
        <h4 className="text-sm font-bold text-white mb-2">
          Debited Without Written Consent?
        </h4>
        <p className="text-xs text-slate-300 leading-relaxed mb-4">
          Under IRDAI Master Circular 2024, auto-debiting an insurance premium without signed consent or OTP authorisation is an illegal unfair trade practice.
        </p>
        <a
          href="#heading-legal-notice-format"
          className="inline-flex items-center justify-center w-full py-2.5 px-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs transition-colors shadow-sm"
        >
          Draft Reversal Notice
        </a>
      </div>
    </aside>
  );
}
