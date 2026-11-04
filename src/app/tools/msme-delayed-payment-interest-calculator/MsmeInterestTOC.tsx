"use client";

import React, { useEffect, useState } from "react";

interface TOCItem {
  id: string;
  label: string;
}

const TOC_ITEMS: TOCItem[] = [
  { id: "msme-calculator-tool", label: "3× Bank Rate Interest Calculator" },
  { id: "how-msme-interest-is-calculated", label: "Section 16 Compound Formula & Excel" },
  { id: "statutory-rules-table", label: "MSMED Act Deadlines & Tax Rules" },
  { id: "worked-example", label: "Worked Example (₹5,00,000 Invoice)" },
  { id: "escalation-flow-diagram", label: "Appointed Day to MSME ODR Flow" },
  { id: "assumptions-and-limits", label: "Statutory Eligibility & Limits" },
  { id: "supreme-court-precedents", label: "Supreme Court MSME Rulings" },
  { id: "next-steps-recovery", label: "Demand Notice & ODR Filing" },
  { id: "frequently-asked-questions", label: "Frequently Asked Questions" },
  { id: "primary-statutory-sources", label: "Primary Sources & RBI Rates" },
];

export default function MsmeInterestTOC() {
  const [activeId, setActiveId] = useState<string>("msme-calculator-tool");
  const [isMobileOpen, setIsMobileOpen] = useState<boolean>(false);

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
    setIsMobileOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -90;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Mobile Collapsible TOC */}
      <div className="lg:hidden mb-6">
        <button
          type="button"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="w-full flex items-center justify-between bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs font-black uppercase tracking-wider text-slate-800 shadow-sm cursor-pointer"
          aria-expanded={isMobileOpen}
        >
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
            Calculator &amp; MSMED Act Guide
          </span>
          <span className="text-slate-500">{isMobileOpen ? "▲ Hide" : "▼ Jump to Section"}</span>
        </button>
        {isMobileOpen && (
          <nav
            aria-label="Mobile Table of Contents"
            className="mt-2 bg-white border border-slate-200 rounded-xl p-3 shadow-md space-y-1 text-xs"
          >
            {TOC_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => scrollToSection(e, item.id)}
                className={`block px-3 py-2 rounded-lg font-medium transition-colors ${
                  activeId === item.id
                    ? "bg-red-50 text-[#DC2626] font-bold border-l-2 border-[#DC2626]"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </div>

      {/* Desktop Sticky Sidebar */}
      <aside
        aria-label="Table of Contents"
        className="hidden lg:block w-72 xl:w-80 shrink-0 sticky top-28 space-y-6"
      >
        <div className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-sm">
          <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100">
            <span className="w-2 h-2 rounded-full bg-[#DC2626] animate-pulse" />
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
                      ? "bg-red-50 text-[#DC2626] font-bold border-l-2 border-[#DC2626]"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>
        </div>

        {/* Statutory Leverage Sidebar Card */}
        <div className="bg-gradient-to-br from-[#111827] via-[#1F2937] to-[#111827] text-white rounded-2xl p-5 border border-slate-700 shadow-md">
          <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-extrabold uppercase bg-[#DC2626] text-white mb-2">
            Section 16 + Sec 43B(h)
          </span>
          <h4 className="text-sm font-bold text-white mb-1.5">
            Buyer Stalling Your B2B Invoice?
          </h4>
          <p className="text-[11px] text-slate-300 leading-relaxed mb-4">
            Attach your month-by-month 3× RBI Bank Rate interest schedule to an advocate legal demand notice warning the buyer of 30% Income Tax disallowance under Section 43B(h).
          </p>
          <a
            href="#statutory-cta"
            onClick={(e) => scrollToSection(e, "statutory-cta")}
            className="inline-block w-full py-2.5 text-center text-xs font-bold bg-[#DC2626] hover:bg-[#B91C1C] rounded-xl text-white transition-colors shadow-sm"
          >
            Serve MSME Demand Notice
          </a>
        </div>
      </aside>
    </>
  );
}
