"use client";

import React, { useEffect, useState } from "react";

interface TOCItem {
  id: string;
  label: string;
}

const TOC_ITEMS: TOCItem[] = [
  { id: "commercial-court-calculator", label: "Specified Value & Fee Calculator" },
  { id: "section-12-specified-value", label: "Section 12(1)(a) ₹3L+ Threshold" },
  { id: "state-wise-court-fees", label: "6-State Court-Fee Caps & Slabs" },
  { id: "worked-cfo-example", label: "Worked Example: ₹2.6L -> ₹3L+" },
  { id: "escalation-decision-flow", label: "Section 12A & Fee-Refund Flow" },
  { id: "interest-and-litigation-roi", label: "Pre-Suit Interest & Suit ROI" },
  { id: "frequently-asked-questions", label: "Frequently Asked Questions" },
  { id: "primary-statutory-sources", label: "Primary Statutory Sources" },
];

export default function CommercialCourtTOC() {
  const [activeId, setActiveId] = useState<string>("commercial-court-calculator");
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
      <div className="lg:hidden sticky top-20 z-30 bg-slate-50/95 backdrop-blur-sm border-b border-slate-200 py-3 px-4 -mx-4 sm:-mx-6 mb-4">
        <button
          type="button"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="w-full flex items-center justify-between bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-xs font-black uppercase tracking-wider text-slate-800 shadow-sm cursor-pointer"
          aria-expanded={isMobileOpen}
        >
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
            Commercial Court Calculator &amp; Guide
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
                    ? "bg-[#DC2626] text-white font-bold shadow-sm"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
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
        className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start space-y-6"
      >
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
          <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100">
            <span className="w-2 h-2 rounded-full bg-[#DC2626] animate-pulse" />
            <p className="text-xs font-black uppercase tracking-wider text-slate-800">
              Contents &amp; Tool
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
                      ? "bg-[#DC2626] text-white font-bold shadow-sm"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>
        </div>

        {/* CFO Quick Action Card */}
        <div className="bg-gradient-to-br from-[#111827] via-[#1F2937] to-[#111827] text-white rounded-2xl p-5 border border-slate-700 shadow-md">
          <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-extrabold uppercase bg-[#DC2626] text-white mb-2">
            Pre-Suit Leverage
          </span>
          <p className="text-sm font-bold text-white mb-1.5">
            Avoid Heavy Upfront Court Fees
          </p>
          <p className="text-[11px] text-slate-300 leading-relaxed mb-4">
            Serve a fact-verified Commercial Demand Notice first. Most B2B debtors settle before you ever deposit ad-valorem court fees or trigger Section 12A mediation.
          </p>
          <a
            href="#dual-track-cta"
            onClick={(e) => scrollToSection(e, "dual-track-cta")}
            className="inline-block w-full py-2.5 text-center text-xs font-bold bg-[#DC2626] hover:bg-[#B91C1C] rounded-xl text-white transition-colors shadow-sm"
          >
            Test 1 Live Case (₹999)
          </a>
        </div>
      </aside>
    </>
  );
}
