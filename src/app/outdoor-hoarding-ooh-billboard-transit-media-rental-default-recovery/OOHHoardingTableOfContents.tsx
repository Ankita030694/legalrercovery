"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const OOH_HOARDING_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-ooh-concessionaire-crisis", label: "OOH CASHFLOW CRISIS" },
  { id: "heading-geo-tagged-monitoring-proof", label: "BSA S.63 GEO-TAG PROOF" },
  { id: "heading-statutory-enforcement-matrix", label: "STATUTORY RECOVERY MATRIX" },
  { id: "heading-operational-decision-tree", label: "DECISION TREE & FLEX REMOVAL" },
  { id: "heading-commercial-scenarios", label: "DEFAULT SCENARIOS & PREVENTIONS" },
  { id: "heading-worked-financial-ledger", label: "RENTAL & INTEREST CALCULATION" },
  { id: "heading-court-precedents", label: "LANDMARK CASE PRECEDENTS" },
  { id: "heading-frequently-asked-questions", label: "FREQUENTLY ASKED QUESTIONS" },
];

export default function OOHHoardingTableOfContents() {
  const [activeSection, setActiveSection] = useState<string>(
    OOH_HOARDING_TOC_SECTIONS[0]?.id || ""
  );
  const isUserClicking = useRef<boolean>(false);
  const clickTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (isUserClicking.current) return;

      const scrollPosition = window.scrollY + 160;

      for (let i = OOH_HOARDING_TOC_SECTIONS.length - 1; i >= 0; i--) {
        const sectionId = OOH_HOARDING_TOC_SECTIONS[i].id;
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (clickTimeoutRef.current) {
        clearTimeout(clickTimeoutRef.current);
      }
    };
  }, []);

  const handleLinkClick = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    isUserClicking.current = true;
    setActiveSection(id);

    const targetElement = document.getElementById(id);
    if (targetElement) {
      const targetOffset = targetElement.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({
        top: targetOffset,
        behavior: "smooth",
      });
    }

    if (clickTimeoutRef.current) {
      clearTimeout(clickTimeoutRef.current);
    }
    clickTimeoutRef.current = setTimeout(() => {
      isUserClicking.current = false;
    }, 800);
  };

  return (
    <>
      {/* Mobile Sticky Bar */}
      <div className="lg:hidden sticky top-20 z-30 bg-slate-50/95 backdrop-blur-sm border-b border-slate-200 py-3 px-4 -mx-4 sm:-mx-6 mb-6">
        <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2">
          Page Navigation — OOH Recovery SOP
        </p>
        <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
          {OOH_HOARDING_TOC_SECTIONS.map((sec) => {
            const isActive = activeSection === sec.id;
            return (
              <a
                key={sec.id}
                href={`#${sec.id}`}
                onClick={(e) => handleLinkClick(sec.id, e)}
                className={`whitespace-nowrap px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors duration-200 ${
                  isActive
                    ? "bg-[#DC2626] text-white shadow-sm"
                    : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
                }`}
              >
                {sec.label}
              </a>
            );
          })}
        </div>
      </div>

      {/* Desktop Sticky Aside */}
      <aside className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start">
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100">
            <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626] animate-pulse" />
            <p className="text-xs font-bold uppercase tracking-wider text-slate-800">
              Contents &amp; Action SOP
            </p>
          </div>
          <nav className="flex flex-col gap-1.5" aria-label="Table of Contents">
            {OOH_HOARDING_TOC_SECTIONS.map((sec, idx) => {
              const isActive = activeSection === sec.id;
              return (
                <a
                  key={sec.id}
                  href={`#${sec.id}`}
                  onClick={(e) => handleLinkClick(sec.id, e)}
                  className={`text-xs font-semibold px-3 py-2 rounded-xl transition-all duration-200 flex items-center justify-between group ${
                    isActive
                      ? "bg-[#DC2626] text-white font-bold shadow-sm translate-x-1"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  <span className="truncate">
                    {idx + 1}. {sec.label}
                  </span>
                  <span
                    className={`text-[10px] ml-1 transition-opacity ${
                      isActive ? "text-white opacity-100" : "text-slate-400 opacity-0 group-hover:opacity-100"
                    }`}
                  >
                    &rarr;
                  </span>
                </a>
              );
            })}
          </nav>

          <div className="mt-6 pt-4 border-t border-slate-100">
            <div className="p-3 bg-red-50 rounded-xl border border-red-100 text-center">
              <span className="text-[10px] font-bold uppercase tracking-wider text-red-600 block mb-1">
                Concessionaire Escalation
              </span>
              <p className="text-[11px] text-slate-700 leading-snug mb-2 font-medium">
                Issue time-bound Demand Notice under BSA s.63 &amp; Order 37 CPC.
              </p>
              <a
                href="/user/new-recovery"
                className="inline-block w-full py-1.5 px-2 bg-[#DC2626] hover:bg-[#B91C1C] text-white text-[11px] font-bold rounded-lg transition-colors shadow-sm"
              >
                Send Legal Notice &rarr;
              </a>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
