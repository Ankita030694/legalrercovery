"use client";

import React, { useEffect, useState, useRef } from "react";

export interface ReportTOCSection {
  id: string;
  label: string;
}

export const B2B_REPORT_TOC_SECTIONS: ReportTOCSection[] = [
  { id: "heading-executive-findings", label: "EXECUTIVE FINDINGS" },
  { id: "heading-methodology-scope", label: "METHODOLOGY & SCOPE" },
  { id: "heading-25-industry-index", label: "25-INDUSTRY DSO INDEX" },
  { id: "heading-section-43bh-impact", label: "SECTION 43B(H) IMPACT" },
  { id: "heading-forum-resolution-matrix", label: "FORUM RESOLUTION DATA" },
  { id: "heading-pre-litigation-mechanics", label: "LEGAL NOTICE CURE DATA" },
  { id: "heading-evidence-bsa-s63", label: "BSA S.63 EVIDENCE AUDIT" },
  { id: "heading-worked-dso-economics", label: "CFO DSO & COST MODEL" },
  { id: "heading-dataset-citation", label: "DATASET & CITATION" },
  { id: "heading-faqs", label: "FAQS" },
  { id: "heading-sources", label: "STATUTORY SOURCES" },
];

export default function B2BReportTableOfContents({
  sections = B2B_REPORT_TOC_SECTIONS,
}: {
  sections?: ReportTOCSection[];
}) {
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
      const scrollPosition = window.scrollY + 150;
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
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveId(id);
      setIsOpen(false);
    }
  };

  const activeSection = sections.find((s) => s.id === activeId) || sections[0];

  return (
    <>
      {/* Mobile Sticky Dropdown Bar */}
      <div className="lg:hidden sticky top-20 z-30 bg-slate-50/95 backdrop-blur-sm border-b border-slate-200 py-3 px-4 -mx-4 sm:-mx-6 mb-4">
        <div className="relative" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between px-4 py-2.5 bg-white hover:bg-slate-100 rounded-xl text-xs font-black text-slate-800 transition-colors border border-slate-300 shadow-xs cursor-pointer"
            aria-expanded={isOpen}
            aria-label="Report Table of Contents"
          >
            <span className="flex items-center gap-2 truncate">
              <span className="w-2 h-2 rounded-full bg-[#DC2626] shrink-0" />
              <span className="text-slate-500 font-bold">SECTION:</span>
              <span className="truncate">{activeSection?.label}</span>
            </span>
            <svg
              className={`w-4 h-4 text-slate-500 transition-transform ${isOpen ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isOpen && (
            <div className="absolute left-0 right-0 mt-2 bg-white border border-slate-200 rounded-xl shadow-xl p-2 z-40 max-h-80 overflow-y-auto">
              {sections.map((sec) => (
                <button
                  key={sec.id}
                  type="button"
                  onClick={() => scrollTo(sec.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                    activeId === sec.id
                      ? "bg-[#DC2626] text-white font-bold"
                      : "text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  {sec.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Desktop Sticky Sidebar TOC (no headings inside TOC) */}
      <aside className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start">
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
          <p className="text-[11px] font-black uppercase tracking-widest text-[#DC2626] mb-3">
            2026–27 Report Index
          </p>
          <nav aria-label="Report Sections" className="space-y-1">
            {sections.map((sec) => (
              <button
                key={sec.id}
                type="button"
                onClick={() => scrollTo(sec.id)}
                className={`w-full text-left px-3 py-2 rounded-xl text-xs transition-all cursor-pointer ${
                  activeId === sec.id
                    ? "bg-[#DC2626] text-white font-bold shadow-sm"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 font-medium"
                }`}
              >
                {sec.label}
              </button>
            ))}
          </nav>
          <div className="mt-5 pt-4 border-t border-slate-200 space-y-2">
            <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
              Quick Actions
            </p>
            <button
              type="button"
              onClick={() => scrollTo("heading-dataset-citation")}
              className="w-full px-3 py-2 rounded-lg text-xs font-bold bg-slate-900 text-white hover:bg-slate-800 transition-colors cursor-pointer text-center"
            >
              Download CSV / JSON Data
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
