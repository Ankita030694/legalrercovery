"use client";

import React, { useEffect, useState } from "react";

interface TOCItem {
  id: string;
  label: string;
}

const TOC_ITEMS: TOCItem[] = [
  { id: "lc-credit-gap", label: "1. 90d LC vs 180d Credit Trap" },
  { id: "decision-tree", label: "2. Recovery Decision Tree" },
  { id: "statutory-matrix", label: "3. Statutory Matrix (43B(h) & CPC)" },
  { id: "scenario-explorer", label: "4. 4 Wood-Cluster Scenarios" },
  { id: "worked-ledger", label: "5. ₹48L MSME Interest Ledger" },
  { id: "evidence-checklist", label: "6. Forest TP & BSA s.63 Proof" },
  { id: "serve-notice", label: "7. Serve Notice / Bulk CSV" },
  { id: "related-guides", label: "8. Hub, Calculators & Siblings" },
  { id: "faqs", label: "9. Frequently Asked Questions" },
  { id: "official-portals", label: "10. Official Portals" },
];

export default function TimberPlywoodTableOfContents() {
  const [activeId, setActiveId] = useState<string>("lc-credit-gap");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-110px 0px -65% 0px", threshold: 0.1 }
    );

    TOC_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveId(id);
    }
  };

  return (
    <>
      {/* Mobile Sticky Horizontal TOC */}
      <nav
        aria-label="Mobile Table of Contents"
        className="lg:hidden sticky top-20 z-30 bg-slate-50/95 backdrop-blur-sm border-b border-slate-200 py-3 px-4 -mx-4 sm:-mx-6 mb-4 overflow-x-auto"
      >
        <div className="flex items-center gap-2 min-w-max">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mr-1">
            Jump to:
          </span>
          {TOC_ITEMS.map((item) => {
            const isActive = activeId === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleScroll(item.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                  isActive
                    ? "bg-[#DC2626] text-white shadow-sm"
                    : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </nav>

      {/* Desktop Sticky Sidebar TOC */}
      <aside
        aria-label="Table of Contents"
        className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start"
      >
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
          <p className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-3">
            Playbook Navigation
          </p>
          <ul className="space-y-1">
            {TOC_ITEMS.map((item) => {
              const isActive = activeId === item.id;
              return (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => handleScroll(item.id)}
                    className={`w-full text-left px-3 py-2 rounded-xl text-xs transition-all cursor-pointer ${
                      isActive
                        ? "bg-[#DC2626] text-white font-bold shadow-sm"
                        : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 font-medium"
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>
          <div className="mt-5 pt-4 border-t border-slate-100">
            <p className="text-[11px] text-slate-500 leading-relaxed">
              Built for <strong className="text-slate-800">Gandhidham</strong> timber importers &amp;{" "}
              <strong className="text-slate-800">Yamunanagar / Perumbavoor</strong> plywood &amp; MDF mills.
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}
