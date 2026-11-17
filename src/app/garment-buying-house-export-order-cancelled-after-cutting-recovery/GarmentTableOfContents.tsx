"use client";

import React, { useEffect, useState } from "react";

interface TOCItem {
  id: string;
  title: string;
}

const TOC_ITEMS: TOCItem[] = [
  { id: "statutory-executive-summary", title: "Executive Creditor Summary" },
  { id: "air-freight-trap-analysis", title: "Deconstructing the 'Air-Freight Trap'" },
  { id: "interactive-scenarios", title: "4 Garment Export Failure Scenarios" },
  { id: "decision-tree-workflow", title: "Statutory Escalation Decision Flow" },
  { id: "contract-act-sections", title: "Contract Act s.53/54 & s.230 Protections" },
  { id: "debranding-salvage-playbook", title: "De-Branding & Salvage Sale Protocol" },
  { id: "statutory-remedy-matrix", title: "Remedy & Forum Comparison Matrix" },
  { id: "financial-loss-calculation", title: "Worked Air-Freight & Cutting Loss Ledger" },
  { id: "evidence-bsa-checklist", title: "Evidence & BSA 2023 s.63 Checklist" },
  { id: "faqs", title: "Frequently Asked Questions" },
];

export default function GarmentTableOfContents() {
  const [activeId, setActiveId] = useState<string>("");

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
            Creditor Helpline
          </p>
          <p className="text-xs text-slate-600 mb-3">
            Garment export recovery &amp; air-freight dispute triage for Noida, Gurugram &amp; Tirupur factories.
          </p>
          <button
            type="button"
            onClick={() => scrollTo("statutory-executive-summary")}
            className="w-full py-2 px-3 text-center text-xs font-bold text-[#DC2626] bg-red-50 hover:bg-red-100 border border-red-200 rounded-lg transition"
          >
            Review SOP Fast
          </button>
        </div>
      </aside>
    </>
  );
}
