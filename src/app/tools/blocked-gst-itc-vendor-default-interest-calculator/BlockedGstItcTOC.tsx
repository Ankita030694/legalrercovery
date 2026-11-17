"use client";

import React, { useEffect, useState } from "react";

interface TOCItem {
  id: string;
  label: string;
}

const TOC_ITEMS: TOCItem[] = [
  { id: "gst-reconciliation-crisis", label: "Vendor Non-Filing & Blocked ITC Crisis" },
  { id: "calculator-tool", label: "Interactive Blocked ITC & Vendor Calculator" },
  { id: "statutory-mandate-s16", label: "CGST Section 16(2)(c) & Buyer Burden" },
  { id: "section-50-interest-rules", label: "Section 50(3) 18% vs 24% Interest" },
  { id: "drc01-penalties-73-74-74a", label: "DRC-01 Penalties: Sec 73, 74 & 74A" },
  { id: "worked-corporate-example", label: "Worked Example: ₹50 Lakh Vendor Ledger" },
  { id: "contract-indemnity-holdback", label: "Vendor Indemnity Clauses & Holdback" },
  { id: "statutory-escalation-roadmap", label: "7-Day Notice, Summary Suit & IBC" },
  { id: "frequently-asked-questions", label: "Frequently Asked Questions" },
  { id: "statutory-references-precedents", label: "Statutory References & Precedents" },
];

export default function BlockedGstItcTOC() {
  const [activeId, setActiveId] = useState<string>("gst-reconciliation-crisis");
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
                    ? "bg-[#DC2626] text-white font-bold"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </div>

      {/* Desktop Sticky Aside */}
      <aside
        aria-label="Table of Contents"
        className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start"
      >
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
          <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100">
            <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
            <p className="text-xs font-black uppercase tracking-wider text-slate-800">
              Navigation Index
            </p>
          </div>
          <nav className="space-y-1">
            {TOC_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => scrollToSection(e, item.id)}
                className={`block px-3 py-2 rounded-xl text-xs transition-colors ${
                  activeId === item.id
                    ? "bg-[#DC2626] text-white font-bold shadow-sm"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 font-medium"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mt-5 pt-4 border-t border-slate-100">
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
              <p className="text-[11px] font-bold text-slate-700 mb-1">
                Statutory Hook
              </p>
              <p className="text-[10px] text-slate-500 leading-relaxed">
                CGST Act s.16(2)(c), s.50(3) (18% p.a. interest) &amp; DRC-01 Penalty Indemnity.
              </p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
