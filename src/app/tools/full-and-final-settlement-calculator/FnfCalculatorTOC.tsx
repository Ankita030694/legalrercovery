"use client";

import React, { useEffect, useState } from "react";

interface TOCItem {
  id: string;
  label: string;
}

const TOC_ITEMS: TOCItem[] = [
  { id: "calculator-tool", label: "Interactive FnF Calculator" },
  { id: "how-fnf-is-calculated", label: "How FnF is Calculated" },
  { id: "statutory-components-breakdown", label: "Statutory Line Components" },
  { id: "facts-deadlines-table", label: "Statutory Rules & Deadlines Table" },
  { id: "worked-example", label: "Worked Step-by-Step Example" },
  { id: "statutory-flow-diagram", label: "Settlement Flow Diagram" },
  { id: "assumptions-and-limits", label: "Assumptions & Unlawful Deductions" },
  { id: "what-to-do-delay", label: "What to Do If FnF Is Delayed" },
  { id: "court-precedents", label: "Court Case Precedents" },
  { id: "evidence-checklist", label: "Exit Evidence Checklist" },
  { id: "frequently-asked-questions", label: "Frequently Asked Questions" },
  { id: "legal-references", label: "Primary Sources & Law" },
];

export default function FnfCalculatorTOC() {
  const [activeId, setActiveId] = useState<string>("calculator-tool");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;

      for (let i = TOC_ITEMS.length - 1; i >= 0; i--) {
        const item = TOC_ITEMS[i];
        const element = document.getElementById(item.id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveId(item.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -90;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <aside
      aria-label="Table of Contents"
      className="hidden lg:block w-72 xl:w-80 shrink-0 sticky top-28 space-y-6"
    >
      <div className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-sm">
        <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100">
          <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
          <p className="text-xs font-black uppercase tracking-wider text-slate-800">
            Page Contents &amp; Tool
          </p>
        </div>

        <nav aria-label="Quick links" className="space-y-1 text-xs">
          {TOC_ITEMS.map((item) => {
            const isActive = activeId === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => scrollToSection(e, item.id)}
                className={`block px-3 py-2 rounded-lg font-medium transition-colors ${
                  isActive
                    ? "bg-red-50 text-red-600 font-bold border-l-2 border-red-600"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>
      </div>

      {/* Quick Legal Help Callout in Sidebar */}
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-4 border border-slate-700 shadow-md">
        <span className="inline-block px-2 py-0.5 rounded text-[10px] font-extrabold uppercase bg-red-600 text-white mb-2">
          Section 17(2) Mandate
        </span>
        <p className="text-xs font-bold text-white mb-1">
          Settlement Due in 2 Working Days
        </p>
        <p className="text-[11px] text-slate-300 leading-relaxed mb-3">
          If your company has delayed your FnF beyond 2 days or imposed arbitrary deductions, a statutory advocate legal notice can enforce payment with 18% penal interest.
        </p>
        <a
          href="#statutory-cta"
          className="inline-block w-full py-2 text-center text-xs font-bold bg-[#DC2626] hover:bg-[#B91C1C] rounded-lg text-white transition-colors"
        >
          Draft Legal Notice (₹999)
        </a>
      </div>
    </aside>
  );
}
