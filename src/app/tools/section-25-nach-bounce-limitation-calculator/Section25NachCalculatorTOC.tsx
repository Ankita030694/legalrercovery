"use client";

import React, { useEffect, useState, useRef } from "react";

export interface Section25CalcTOCSection {
  id: string;
  label: string;
}

export const SECTION25_CALC_TOC_SECTIONS: Section25CalcTOCSection[] = [
  { id: "calculator-tool", label: "S.25 NACH CALCULATOR" },
  { id: "pss-act-section-25-framework", label: "PSS S.25 & 28 TIMELINE" },
  { id: "day-exclusion-computation-rules", label: "DAY-EXCLUSION RULES" },
  { id: "electronic-vs-rpad-service", label: "ELECTRONIC VS RPAD" },
  { id: "worked-enach-examples", label: "WORKED NACH EXAMPLES" },
  { id: "condonation-and-jurisdiction", label: "CONDONATION & VENUE" },
  { id: "institutional-dispatch-cta", label: "DUAL-TRACK DISPATCH" },
  { id: "nbfc-recovery-resources", label: "NBFC LEGAL RESOURCES" },
  { id: "calculator-faqs", label: "LITIGATION DESK FAQS" },
  { id: "statutory-sources", label: "STATUTES & PORTALS" },
];

interface Section25NachCalculatorTOCProps {
  sections?: Section25CalcTOCSection[];
}

export default function Section25NachCalculatorTOC({
  sections = SECTION25_CALC_TOC_SECTIONS,
}: Section25NachCalculatorTOCProps) {
  const [activeId, setActiveId] = useState<string>(sections[0]?.id || "");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY;
          if (scrollPosition >= top) {
            setActiveId(sections[i].id);
            return;
          }
        }
      }

      if (sections[0]) {
        setActiveId(sections[0].id);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -90;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      window.history.pushState(null, "", `#${id}`);
      setActiveId(id);
      setIsOpen(false);
    }
  };

  const activeSection = sections.find((s) => s.id === activeId) || sections[0];

  return (
    <>
      {/* Mobile / Tablet Sticky Bar */}
      <div
        ref={dropdownRef}
        className="lg:hidden sticky top-20 z-30 bg-slate-50/95 backdrop-blur-sm border-b border-slate-200 py-3 px-4 -mx-4 sm:-mx-6 mb-4 select-none"
      >
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between px-4 py-2.5 bg-white border border-slate-200 rounded-xl shadow-sm hover:border-slate-300 transition-colors"
          aria-expanded={isOpen}
          aria-label="Toggle Section 25 e-NACH calculator navigation"
        >
          <span className="flex items-center gap-2.5 min-w-0">
            <span className="w-2 h-2 rounded-full bg-[#DC2626] shrink-0 animate-pulse" />
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 shrink-0">
              Section:
            </span>
            <span className="text-xs font-bold text-slate-900 truncate">
              {activeSection?.label}
            </span>
          </span>
          <svg
            width={16}
            height={16}
            className={`w-4 h-4 text-slate-500 transition-transform duration-200 shrink-0 ml-2 ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {isOpen && (
          <div className="absolute top-full left-4 right-4 mt-1 max-h-80 overflow-y-auto bg-white border border-slate-200 rounded-xl shadow-xl py-2 z-40">
            {sections.map((section, idx) => {
              const isActive = activeId === section.id;
              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => scrollToSection(e, section.id)}
                  className={`block px-4 py-2.5 text-xs font-semibold tracking-wide transition-colors ${
                    isActive
                      ? "bg-[#DC2626] text-white font-bold"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  <span className={`font-mono text-[10px] mr-2 ${isActive ? "text-red-100" : "text-slate-400"}`}>
                    {idx < 9 ? `0${idx + 1}` : idx + 1}
                  </span>
                  {section.label}
                </a>
              );
            })}
          </div>
        )}
      </div>

      {/* Desktop Sticky Sidebar — Zero heading tags (h2/h3/h4) per SEO protocol */}
      <aside
        aria-label="Section 25 e-NACH calculator sections"
        className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start bg-white border border-slate-200 rounded-2xl p-5 shadow-sm max-h-[calc(100vh-8rem)] overflow-y-auto"
      >
        <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-3">
          <p className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500">
            IND-02 e-NACH Tool
          </p>
          <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
            {sections.length} Sections
          </span>
        </div>

        <nav className="space-y-1">
          {sections.map((section, idx) => {
            const isActive = activeId === section.id;
            return (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={(e) => scrollToSection(e, section.id)}
                className={`group flex items-center justify-between px-3 py-2 rounded-lg text-xs transition-all ${
                  isActive
                    ? "bg-[#DC2626] text-white font-bold shadow-sm"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 font-medium"
                }`}
              >
                <span className="flex items-center gap-2 truncate">
                  <span
                    className={`text-[10px] font-mono ${
                      isActive ? "text-red-100" : "text-slate-400 group-hover:text-slate-600"
                    }`}
                  >
                    {idx < 9 ? `0${idx + 1}` : idx + 1}
                  </span>
                  <span className="truncate">{section.label}</span>
                </span>
                <span
                  className={`text-[10px] ${
                    isActive ? "text-red-100" : "text-transparent group-hover:text-slate-400"
                  }`}
                >
                  &rarr;
                </span>
              </a>
            );
          })}
        </nav>

        <div className="mt-5 pt-4 border-t border-slate-100 space-y-2">
          <LinkQuickCard />
        </div>
      </aside>
    </>
  );
}

function LinkQuickCard() {
  return (
    <div className="rounded-xl bg-slate-900 text-white p-3.5 space-y-2">
      <p className="text-[10px] font-bold uppercase tracking-wider text-red-400">
        30-Day Clock Active?
      </p>
      <p className="text-[11px] text-slate-300 leading-relaxed">
        Serve advocate-signed PSS s.25 notices via Email, WhatsApp &amp; Speed Post RPAD before Day 30 expires.
      </p>
      <a
        href="#institutional-dispatch-cta"
        className="inline-flex items-center justify-center w-full px-3 py-2 rounded-lg bg-[#DC2626] hover:bg-[#B91C1C] text-white text-[11px] font-bold transition-colors"
      >
        Dispatch Notices &rarr;
      </a>
    </div>
  );
}
