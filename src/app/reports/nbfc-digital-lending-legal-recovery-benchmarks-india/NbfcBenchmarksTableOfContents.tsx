"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const NBFC_BENCHMARK_TOC_SECTIONS: TOCSection[] = [
  { id: "executive-benchmark-gap", label: "EXECUTIVE SUMMARY" },
  { id: "dpd-bucket-matrix", label: "DPD BUCKET MATRIX" },
  { id: "wave-architecture-svg", label: "4-WAVE ARCHITECTURE" },
  { id: "channel-cure-economics", label: "EMAIL VS WHATSAPP VS RPAD" },
  { id: "interactive-dpd-playbook", label: "INTERACTIVE DPD PLAYBOOK" },
  { id: "unit-economics-roi", label: "COST-PER-RUPEE ROI" },
  { id: "bsa-evidence-compliance", label: "BSA s.63 & RBI COMPLIANCE" },
  { id: "study-methodology-scope", label: "METHODOLOGY & SCOPE" },
  { id: "dataset-download-citation", label: "DATASET & CITATION" },
  { id: "institutional-cta", label: "DEPLOY RECOVERY DESK" },
  { id: "faqs", label: "FAQS" },
  { id: "primary-sources", label: "STATUTORY SOURCES" },
];

export default function NbfcBenchmarksTableOfContents() {
  const [activeId, setActiveId] = useState<string>(NBFC_BENCHMARK_TOC_SECTIONS[0].id);
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
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;
      for (let i = NBFC_BENCHMARK_TOC_SECTIONS.length - 1; i >= 0; i--) {
        const el = document.getElementById(NBFC_BENCHMARK_TOC_SECTIONS[i].id);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY;
          if (scrollPosition >= top) {
            setActiveId(NBFC_BENCHMARK_TOC_SECTIONS[i].id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -96;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveId(id);
      setIsOpen(false);
    }
  };

  const activeSection =
    NBFC_BENCHMARK_TOC_SECTIONS.find((s) => s.id === activeId) ||
    NBFC_BENCHMARK_TOC_SECTIONS[0];

  return (
    <>
      {/* Mobile Sticky Dropdown Bar */}
      <div className="lg:hidden sticky top-20 z-30 bg-slate-50/95 backdrop-blur-sm border-b border-slate-200 py-3 px-4 -mx-4 sm:-mx-6 mb-4">
        <div className="relative" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="w-full flex items-center justify-between px-4 py-2.5 bg-white border border-slate-300 rounded-xl text-xs font-bold text-slate-900 shadow-xs cursor-pointer"
            aria-expanded={isOpen}
          >
            <span className="truncate">
              <span className="text-[#DC2626] mr-2">§</span>
              {activeSection.label}
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
            <div className="absolute left-0 right-0 mt-1.5 bg-white border border-slate-200 rounded-xl shadow-xl py-1.5 z-40 max-h-72 overflow-y-auto">
              {NBFC_BENCHMARK_TOC_SECTIONS.map((sec) => (
                <button
                  key={sec.id}
                  type="button"
                  onClick={() => scrollTo(sec.id)}
                  className={`w-full text-left px-4 py-2 text-xs font-semibold transition-colors cursor-pointer ${
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

      {/* Desktop Sticky Sidebar TOC (no headings inside) */}
      <aside
        aria-label="Report Table of Contents"
        className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start bg-white border border-slate-200 rounded-2xl p-5 shadow-sm"
      >
        <p className="text-[11px] font-black uppercase tracking-widest text-slate-400 mb-3 px-2">
          Benchmark Index
        </p>
        <nav className="space-y-1">
          {NBFC_BENCHMARK_TOC_SECTIONS.map((sec) => (
            <button
              key={sec.id}
              type="button"
              onClick={() => scrollTo(sec.id)}
              className={`w-full text-left px-3 py-2 rounded-lg text-xs transition-all cursor-pointer ${
                activeId === sec.id
                  ? "bg-[#DC2626] text-white font-bold shadow-sm"
                  : "text-slate-600 font-medium hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              {sec.label}
            </button>
          ))}
        </nav>
      </aside>
    </>
  );
}
