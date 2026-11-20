"use client";

import React, { useEffect, useState } from "react";

interface TocItem {
  id: string;
  label: string;
}

const TOC_ITEMS: TocItem[] = [
  { id: "exclusivity-trap", label: "1. The Exclusivity Squatting Trap" },
  { id: "decision-tree", label: "2. Step-In & Termination Decision Tree" },
  { id: "statutory-matrix", label: "3. Statutory Enforcement Matrix" },
  { id: "judicial-precedents", label: "4. Commercial Court & Arbitration Precedents" },
  { id: "failure-scenarios", label: "5. 4 Regional Master Default Playbooks" },
  { id: "worked-ledger", label: "6. Worked ₹1.84 Cr Master Recovery Ledger" },
  { id: "evidence-dossier", label: "7. 6-Point BSA s.63 Evidence Dossier" },
  { id: "take-action", label: "8. Serve Step-In / Revocation Notice" },
  { id: "related-tools", label: "9. Hub, Calculators & Sibling Guides" },
  { id: "faqs", label: "10. Frequently Asked Questions" },
  { id: "primary-sources", label: "11. Primary Statutory Authorities" },
];

export default function MasterFranchiseeTableOfContents() {
  const [activeId, setActiveId] = useState<string>(TOC_ITEMS[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-110px 0px -65% 0px", threshold: 0.05 }
    );

    TOC_ITEMS.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (id: string) => {
    setActiveId(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      {/* Mobile Sticky Horizontal TOC */}
      <div className="lg:hidden sticky top-20 z-30 bg-slate-50/95 backdrop-blur-sm border-b border-slate-200 py-3 px-4 -mx-4 sm:-mx-6 mb-4">
        <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">
          Master Franchise Recovery Playbook
        </p>
        <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
          {TOC_ITEMS.map((item) => {
            const isActive = activeId === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleClick(item.id)}
                className={`shrink-0 px-3 py-1.5 rounded-full text-xs font-semibold transition-colors cursor-pointer ${
                  isActive
                    ? "bg-[#DC2626] text-white shadow-sm"
                    : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Desktop Sticky Sidebar TOC */}
      <aside className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
        <p className="text-[11px] font-bold uppercase tracking-widest text-[#DC2626] mb-1">
          IND-24 · B2B Playbook
        </p>
        <p className="text-sm font-extrabold text-slate-900 mb-4">
          On This Page
        </p>
        <nav aria-label="Table of contents" className="space-y-1">
          {TOC_ITEMS.map((item) => {
            const isActive = activeId === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleClick(item.id)}
                className={`w-full text-left px-3 py-2 rounded-xl text-xs transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#DC2626] text-white font-bold shadow-sm"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 font-medium"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        <div className="mt-5 pt-4 border-t border-slate-100">
          <p className="text-[11px] font-bold text-slate-800 mb-1">
            Stalled State Territory?
          </p>
          <p className="text-[11px] text-slate-500 leading-relaxed mb-3">
            Dispatch an Advocate-Drafted Cure-or-Revocation &amp; Step-In Notice across Email, WhatsApp &amp; Speed Post RPAD.
          </p>
          <button
            type="button"
            onClick={() => handleClick("take-action")}
            className="w-full py-2 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-colors cursor-pointer"
          >
            Start Step-In Action &rarr;
          </button>
        </div>
      </aside>
    </>
  );
}
