"use client";

import React, { useEffect, useState } from "react";

interface TOCItem {
  id: string;
  label: string;
}

const TOC_ITEMS: TOCItem[] = [
  { id: "liquidity-crisis", label: "Construction Retention & RA Bill Crisis" },
  { id: "calculator-tool", label: "Interactive Retention, DLP & Limitation Calculator" },
  { id: "split-limitation-clocks", label: "Split Limitation Clocks (Art. 18 vs 113)" },
  { id: "dlp-mechanics", label: "DLP Mechanics & Virtual Completion" },
  { id: "accrued-interest-rules", label: "18% Interest: Sec 31(7) & Interest Act" },
  { id: "worked-financial-example", label: "Worked Example: ₹8.5 Cr EPC Ledger" },
  { id: "employer-traps-ld-ndc", label: "Defeating Wrongful LD & Coerced NDC" },
  { id: "statutory-escalation-roadmap", label: "Escalation: Sec 80 CPC, Sec 21 to Court" },
  { id: "frequently-asked-questions", label: "Frequently Asked Questions" },
  { id: "statutory-references-precedents", label: "Statutory References & Precedents" },
];

export default function ConstructionRetentionTOC() {
  const [activeId, setActiveId] = useState<string>("liquidity-crisis");
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
            Calculator &amp; Statutory Guide Index
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
        className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start space-y-4"
      >
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
          <p className="text-xs font-black tracking-widest text-slate-400 uppercase mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
            Table of Contents
          </p>
          <nav className="space-y-1">
            {TOC_ITEMS.map((item) => {
              const isActive = activeId === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => scrollToSection(e, item.id)}
                  className={`block px-3 py-2 rounded-xl text-xs transition-all ${
                    isActive
                      ? "bg-[#DC2626] text-white font-bold shadow-sm"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 font-medium"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>
        </div>

        {/* Quick Statutory Help Pill */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-4 border border-slate-700 text-xs">
          <p className="font-bold text-red-400 mb-1">Limitation Clock Alert</p>
          <p className="text-slate-300 leading-relaxed mb-3">
            Final bill claims expire in <strong>3 years</strong> under Art. 18. Retention claims expire <strong>3 years from DLP end</strong> under Art. 113. Never treat both clocks as one.
          </p>
          <a
            href="#calculator-tool"
            onClick={(e) => scrollToSection(e, "calculator-tool")}
            className="inline-block font-semibold text-white bg-[#DC2626] hover:bg-[#B91C1C] px-3 py-1.5 rounded-lg text-center w-full transition-colors"
          >
            Launch Calculator &rarr;
          </a>
        </div>
      </aside>
    </>
  );
}
