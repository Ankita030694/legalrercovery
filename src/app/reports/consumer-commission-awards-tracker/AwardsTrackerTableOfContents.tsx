"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const AWARDS_TRACKER_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-tracker-overview", label: "TRACKER OVERVIEW" },
  { id: "heading-awards-table", label: "FILTERABLE DATABASE" },
  { id: "heading-monthly-highlights", label: "LANDMARK ORDERS" },
  { id: "heading-pattern-analysis", label: "WINNING FACTORS" },
  { id: "heading-enforcement-flow", label: "EXECUTION RAIL" },
  { id: "heading-sector-analysis", label: "SECTOR BENCHMARKS" },
  { id: "heading-jurisdiction-table", label: "FORUM JURISDICTION" },
  { id: "heading-worked-example", label: "WORKED CASE EXAMPLE" },
  { id: "heading-methodology", label: "DATA METHODOLOGY" },
  { id: "heading-subscribe-cite", label: "CITE & DOWNLOAD" },
  { id: "heading-faqs", label: "FAQ" },
  { id: "heading-sources", label: "STATUTORY SOURCES" },
];

interface AwardsTrackerTableOfContentsProps {
  sections?: TOCSection[];
}

export default function AwardsTrackerTableOfContents({
  sections = AWARDS_TRACKER_TOC_SECTIONS,
}: AwardsTrackerTableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>(sections[0]?.id || "");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
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

  // Track active section on scroll
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

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -90;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveId(id);
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Sticky Bar */}
      <div className="lg:hidden sticky top-16 z-30 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 py-2.5 px-4 shadow-xs">
        <div className="relative" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between px-3.5 py-2 text-xs font-semibold text-slate-800 bg-slate-100 rounded-lg border border-slate-300"
            aria-expanded={isOpen}
            aria-label="Table of Contents"
          >
            <span className="truncate">
              Index: <span className="text-[#DC2626] font-bold">{sections.find((s) => s.id === activeId)?.label || "Menu"}</span>
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
            <div className="absolute left-0 right-0 mt-1 max-h-72 overflow-y-auto bg-white rounded-lg border border-slate-200 shadow-xl py-1 z-40">
              {sections.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => scrollToSection(s.id)}
                  className={`w-full text-left px-4 py-2 text-xs font-semibold transition-colors ${
                    activeId === s.id
                      ? "bg-red-50 text-[#DC2626] border-l-2 border-[#DC2626]"
                      : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Desktop Sticky Sidebar */}
      <aside
        aria-label="Table of contents"
        className="hidden lg:block lg:w-72 xl:w-80 shrink-0 sticky top-28 self-start bg-white rounded-2xl border border-slate-200 p-5 shadow-xs"
      >
        <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100">
          <div className="w-2 h-2 rounded-full bg-[#DC2626] animate-pulse" />
          <span className="text-xs font-black uppercase tracking-wider text-slate-900">
            Report Navigator
          </span>
        </div>

        <nav className="space-y-1">
          {sections.map((s) => {
            const isActive = activeId === s.id;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => scrollToSection(s.id)}
                className={`w-full text-left px-3 py-2 rounded-lg text-xs font-bold transition-all flex items-center justify-between ${
                  isActive
                    ? "bg-red-50 text-[#DC2626] border-l-4 border-[#DC2626] pl-2 font-extrabold shadow-2xs"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50 font-medium"
                }`}
              >
                <span className="truncate">{s.label}</span>
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] shrink-0" />
                )}
              </button>
            );
          })}
        </nav>

        <div className="mt-6 pt-4 border-t border-slate-100 space-y-2">
          <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
            Dataset Status
          </p>
          <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-2.5 text-[11px] text-emerald-900">
            <span className="font-extrabold block">● Active Continuous Index</span>
            <span className="text-[10px] text-emerald-800">Tracking DCDRC, SCDRC & NCDRC orders</span>
          </div>
        </div>
      </aside>
    </>
  );
}
