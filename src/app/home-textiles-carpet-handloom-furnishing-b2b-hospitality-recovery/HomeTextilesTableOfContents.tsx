"use client";

import React, { useEffect, useState } from "react";

interface TOCItem {
  id: string;
  title: string;
}

const TOC_ITEMS: TOCItem[] = [
  { id: "soft-ffe-bottleneck", title: "Hotel Pre-Opening FF&E Bottleneck" },
  { id: "interactive-scenarios", title: "4 Home-Textile Default Scenarios" },
  { id: "escalation-decision-tree", title: "Creditor Escalation Decision Tree" },
  { id: "msmed-43bh-leverage", title: "MSMED s.15–18 & s.43B(h) Leverage" },
  { id: "contractor-vs-promoter", title: "Interior Contractor vs. Hotel Owner" },
  { id: "forum-remedy-matrix", title: "Forum & Remedy Comparison Matrix" },
  { id: "worked-claim-ledger", title: "Worked ₹32.40L Carpet & Linen Ledger" },
  { id: "bsa-evidence-checklist", title: "BSA 2023 s.63 Evidence Checklist" },
  { id: "faqs", title: "Frequently Asked Questions" },
];

export default function HomeTextilesTableOfContents() {
  const [activeId, setActiveId] = useState<string>(TOC_ITEMS[0].id);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;

      for (let i = TOC_ITEMS.length - 1; i >= 0; i--) {
        const item = TOC_ITEMS[i];
        const el = document.getElementById(item.id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveId(item.id);
          return;
        }
      }

      if (window.scrollY < 200) {
        setActiveId(TOC_ITEMS[0].id);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = el.getBoundingClientRect().top + window.pageYOffset - 110;
      window.scrollTo({ top: offset, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Mobile Sticky Bar */}
      <div className="lg:hidden sticky top-20 z-30 bg-slate-50/95 backdrop-blur-sm border-b border-slate-200 py-3 px-4 -mx-4 sm:-mx-6 mb-4">
        <label htmlFor="mobile-toc-select" className="sr-only">
          Navigate sections
        </label>
        <select
          id="mobile-toc-select"
          value={activeId}
          onChange={(e) => scrollTo(e.target.value)}
          className="w-full bg-white border border-slate-300 rounded-lg py-2 px-3 text-xs font-semibold text-slate-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#DC2626]"
        >
          {TOC_ITEMS.map((item) => (
            <option key={item.id} value={item.id}>
              {item.title}
            </option>
          ))}
        </select>
      </div>

      {/* Desktop Sticky Aside */}
      <aside className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
        <p className="text-xs uppercase tracking-wider font-bold text-slate-400 mb-3 px-2">
          Table of Contents
        </p>
        <nav className="space-y-1">
          {TOC_ITEMS.map((item) => {
            const isActive = activeId === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollTo(item.id)}
                className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#DC2626] text-white font-bold shadow-sm"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                {item.title}
              </button>
            );
          })}
        </nav>

        <div className="mt-6 pt-5 border-t border-slate-200">
          <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-2">
            Cluster Recovery Desk
          </p>
          <p className="text-xs text-slate-600 mb-3">
            Hospitality FF&amp;E &amp; home-textile recovery for Panipat, Bhadohi, Karur &amp; Solapur units.
          </p>
          <button
            type="button"
            onClick={() => scrollTo("escalation-decision-tree")}
            className="w-full py-2 px-3 text-center text-xs font-bold text-[#DC2626] bg-red-50 hover:bg-red-100 border border-red-200 rounded-lg transition cursor-pointer"
          >
            Jump to Escalation SOP
          </button>
        </div>
      </aside>
    </>
  );
}
