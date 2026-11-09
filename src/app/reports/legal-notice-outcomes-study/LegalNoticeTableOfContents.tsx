"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const STUDY_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-key-findings", label: "KEY FINDINGS" },
  { id: "heading-methodology", label: "METHODOLOGY" },
  { id: "heading-time-windows", label: "15/30/60 DAY WINDOWS" },
  { id: "heading-dispute-breakdown", label: "BY DISPUTE TYPE" },
  { id: "heading-conversion-funnel", label: "RESOLUTION FUNNEL" },
  { id: "heading-statutory-mechanics", label: "STATUTORY LEVERAGE" },
  { id: "heading-case-digest", label: "CASE STUDIES" },
  { id: "heading-next-steps-litigation", label: "WHEN NOTICE FAILS" },
  { id: "heading-download-citation", label: "DATA & CITATION" },
  { id: "heading-press-inquiries", label: "PRESS & INQUIRIES" },
  { id: "heading-faqs", label: "FAQS" },
  { id: "heading-sources", label: "PRIMARY SOURCES" },
];

interface LegalNoticeTableOfContentsProps {
  sections?: TOCSection[];
}

export default function LegalNoticeTableOfContents({
  sections = STUDY_TOC_SECTIONS,
}: LegalNoticeTableOfContentsProps) {
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
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -90;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveId(id);
      setIsOpen(false);
    }
  };

  const activeSection = sections.find((s) => s.id === activeId) || sections[0];

  return (
    <>
      {/* Mobile Sticky Dropdown Header */}
      <div className="lg:hidden w-full sticky top-16 z-30 bg-white/95 backdrop-blur border-b border-slate-200 py-2.5 px-4 mb-6 shadow-sm">
        <div className="relative" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between px-4 py-2.5 bg-slate-100 hover:bg-slate-200/80 rounded-xl text-xs font-black text-slate-800 transition-colors border border-slate-300/80"
            aria-expanded={isOpen}
            aria-label="Table of Contents Navigation"
          >
            <span className="flex items-center gap-2 truncate">
              <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
              <span className="text-slate-500 font-bold">NAVIGATE:</span>
              <span className="truncate">{activeSection?.label}</span>
            </span>
            <svg
              className={`w-4 h-4 text-slate-600 transition-transform ${isOpen ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isOpen && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-slate-200 rounded-xl shadow-xl max-h-72 overflow-y-auto z-40 py-2">
              {sections.map((section) => {
                const isActive = activeId === section.id;
                return (
                  <button
                    key={section.id}
                    type="button"
                    onClick={() => scrollTo(section.id)}
                    className={`w-full text-left px-4 py-2 text-xs font-bold transition-colors flex items-center gap-2 ${
                      isActive
                        ? "text-[#DC2626] bg-red-50/80 font-black"
                        : "text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        isActive ? "bg-[#DC2626]" : "bg-transparent"
                      }`}
                    />
                    {section.label}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Desktop Sticky Sidebar */}
      <aside
        aria-label="Table of Contents"
        className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start bg-white rounded-2xl border border-slate-200 p-5 shadow-sm"
      >
        <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-200">
          <div className="w-2 h-2 rounded-full bg-[#DC2626] animate-pulse" />
          <h2 className="text-xs font-black tracking-wider uppercase text-slate-700">
            Study Navigation
          </h2>
        </div>
        <nav className="space-y-1">
          {sections.map((section) => {
            const isActive = activeId === section.id;
            return (
              <button
                key={section.id}
                type="button"
                onClick={() => scrollTo(section.id)}
                className={`w-full text-left px-3 py-2 rounded-lg text-xs font-bold transition-all flex items-center justify-between group ${
                  isActive
                    ? "bg-red-50 text-[#DC2626] font-black shadow-xs"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                }`}
              >
                <span className="truncate">{section.label}</span>
                <span
                  className={`text-[10px] transition-transform ${
                    isActive
                      ? "text-[#DC2626] font-black translate-x-0"
                      : "text-slate-300 opacity-0 group-hover:opacity-100 -translate-x-1"
                  }`}
                >
                  →
                </span>
              </button>
            );
          })}
        </nav>

        <div className="mt-6 pt-4 border-t border-slate-200">
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 text-[11px] text-slate-600 leading-relaxed">
            <span className="font-extrabold text-slate-900 block mb-1">
              Empirical Research Index
            </span>
            Empirical research study shell tracking statutory legal notice outcomes across Indian States (Post-May 2026 Cohort).
          </div>
        </div>
      </aside>
    </>
  );
}
