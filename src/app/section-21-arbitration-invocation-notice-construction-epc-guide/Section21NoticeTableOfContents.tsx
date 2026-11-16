"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const SECTION_21_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-demand-vs-section21", label: "DEMAND VS SECTION 21 NOTICE" },
  { id: "heading-nortel-limitation", label: "NORTEL NETWORKS LIMITATION RULES" },
  { id: "heading-multi-tier-exhaustion", label: "MULTI-TIER DISPUTE TIERS" },
  { id: "heading-statutory-timelines", label: "STATUTORY DEADLINES MATRIX" },
  { id: "heading-precedents-analysis", label: "LANDMARK CASE LAW & HOLDINGS" },
  { id: "heading-defense-preemption", label: "EMPLOYER DEFENSE PRE-EMPTION" },
  { id: "heading-drafting-anatomy", label: "SECTION 21 NOTICE ANATOMY" },
  { id: "heading-scenario-explorer", label: "DISPUTE SCENARIOS" },
  { id: "heading-service-evidence", label: "SERVICE & BSA S.63 PROOF" },
  { id: "heading-faqs", label: "FREQUENTLY ASKED QUESTIONS" },
  { id: "heading-statutory-sources", label: "STATUTORY AUTHORITIES" },
];

interface Section21NoticeTableOfContentsProps {
  sections?: TOCSection[];
}

export default function Section21NoticeTableOfContents({
  sections = SECTION_21_TOC_SECTIONS,
}: Section21NoticeTableOfContentsProps) {
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
      const yOffset = -100;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveId(id);
      setIsOpen(false);
    }
  };

  const activeSection = sections.find((s) => s.id === activeId) || sections[0];

  return (
    <>
      {/* Mobile Sticky Bar */}
      <div className="lg:hidden sticky top-20 z-30 bg-slate-50/95 backdrop-blur-sm border-b border-slate-200 py-3 px-4 -mx-4 sm:-mx-6 mb-6">
        <div className="relative" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-800 shadow-xs"
            aria-expanded={isOpen}
            aria-label="Table of Contents"
          >
            <span className="flex items-center gap-2 truncate">
              <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
              <span className="text-slate-500 font-medium">Jump to:</span>
              <span className="truncate">{activeSection?.label}</span>
            </span>
            <svg
              className={`w-4 h-4 text-slate-500 transition-transform duration-200 shrink-0 ${
                isOpen ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isOpen && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-slate-200 rounded-xl shadow-xl z-40 max-h-72 overflow-y-auto p-2">
              {sections.map((section, idx) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => scrollToSection(e, section.id)}
                  className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs transition-colors ${
                    activeId === section.id
                      ? "bg-[#DC2626] text-white font-bold"
                      : "text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  <span
                    className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] shrink-0 font-bold ${
                      activeId === section.id
                        ? "bg-white text-[#DC2626]"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    {idx + 1}
                  </span>
                  <span className="truncate">{section.label}</span>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Desktop Sticky Aside */}
      <aside className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start">
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-slate-400">
              Navigation Table
            </span>
            <span className="text-[10px] font-bold text-[#DC2626] bg-red-50 px-2 py-0.5 rounded-full border border-red-100">
              Section 21 SOP
            </span>
          </div>

          <nav className="space-y-1" aria-label="Section 21 Guide Table of Contents">
            {sections.map((section, idx) => {
              const isActive = activeId === section.id;
              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => scrollToSection(e, section.id)}
                  className={`group flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs transition-all duration-150 ${
                    isActive
                      ? "bg-[#DC2626] text-white font-bold shadow-xs translate-x-1"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  <span
                    className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] shrink-0 font-bold transition-colors ${
                      isActive
                        ? "bg-white text-[#DC2626]"
                        : "bg-slate-100 text-slate-500 group-hover:bg-slate-200 group-hover:text-slate-700"
                    }`}
                  >
                    {idx + 1}
                  </span>
                  <span className="truncate">{section.label}</span>
                </a>
              );
            })}
          </nav>

          <div className="mt-5 pt-4 border-t border-slate-100">
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
              <span className="block text-[10px] font-bold uppercase text-slate-500 tracking-wider mb-1">
                Statutory Authority
              </span>
              <p className="text-[11px] text-slate-700 font-medium leading-relaxed">
                Arbitration Act 1996 s.21 &amp; s.11(6) read with Limitation Act 1963 Art. 137.
              </p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
