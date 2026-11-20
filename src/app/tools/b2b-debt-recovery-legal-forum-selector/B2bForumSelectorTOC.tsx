"use client";

import React, { useEffect, useState } from "react";

interface TOCItem {
  id: string;
  label: string;
}

const TOC_ITEMS: TOCItem[] = [
  { id: "forum-decision-engine", label: "Interactive Forum Selector (6 Inputs)" },
  { id: "statutory-cutoff-matrix", label: "Pecuniary & Statutory Cutoff Matrix" },
  { id: "fatal-jurisdiction-traps", label: "6 Fatal Jurisdiction Traps to Avoid" },
  { id: "parallel-remedy-stacking", label: "Stacking s.138 / PSS s.25 + Order 37" },
  { id: "timeline-cost-comparison", label: "Timeline & Court Fee Comparison" },
  { id: "notice-and-evidence-prep", label: "Pre-Litigation Notice & BSA s.63" },
  { id: "next-steps-recovery", label: "Launch Single or Bulk Recovery" },
  { id: "frequently-asked-questions", label: "Frequently Asked Questions" },
  { id: "primary-statutory-sources", label: "Primary Statutory Sources" },
];

export default function B2bForumSelectorTOC() {
  const [activeId, setActiveId] = useState<string>("forum-decision-engine");
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
            Forum Selector &amp; Matrix Guide
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
      </aside>
    </>
  );
}
