"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const COMMERCIAL_LEASE_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-overview", label: "OVERVIEW" },
  { id: "heading-comparison-matrix", label: "ROUTES COMPARISON" },
  { id: "heading-persona-selector", label: "WHICH ROUTE FOR YOU" },
  { id: "heading-route-notice", label: "1. LEGAL DEMAND NOTICE" },
  { id: "heading-route-order37", label: "2. ORDER 37 SUMMARY SUIT" },
  { id: "heading-route-msme", label: "3. MSME SAMADHAAN" },
  { id: "heading-route-commercial-suit", label: "4. MEDIATION & ARBITRATION" },
  { id: "heading-dilapidation-rules", label: "WEAR & TEAR VS DAMAGE" },
  { id: "heading-case-digest", label: "COURT PRECEDENTS" },
  { id: "heading-problem-picker", label: "SCENARIOS & FIXES" },
  { id: "heading-worked-example", label: "WORKED EXAMPLE" },
  { id: "heading-evidence-checklist", label: "HANDOVER CHECKLIST" },
  { id: "heading-faqs", label: "FAQ" },
  { id: "heading-sources", label: "STATUTORY REFS" },
];

interface CommercialLeaseTableOfContentsProps {
  sections?: TOCSection[];
}

export default function CommercialLeaseTableOfContents({
  sections = COMMERCIAL_LEASE_TOC_SECTIONS,
}: CommercialLeaseTableOfContentsProps) {
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

  const activeSection = sections.find((s) => s.id === activeId);

  return (
    <>
      {/* Mobile Sticky Dropdown Navigation Bar */}
      <div className="lg:hidden sticky top-20 z-30 w-full mb-6" ref={dropdownRef}>
        <div className="bg-white/95 backdrop-blur-md border border-slate-200 rounded-xl shadow-md p-2">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between px-3 py-2 text-xs font-bold uppercase tracking-wider text-slate-700 hover:text-slate-900 focus:outline-none"
            aria-expanded={isOpen}
            aria-label="Table of contents menu"
          >
            <span className="flex items-center gap-2 truncate">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse shrink-0" />
              <span className="truncate">TOC: {activeSection?.label || "JUMP TO SECTION"}</span>
            </span>
            <svg
              className={`w-4 h-4 transition-transform duration-200 shrink-0 text-slate-500 ${
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
            <div className="mt-2 pt-2 border-t border-slate-100 max-h-72 overflow-y-auto space-y-1">
              {sections.map((section) => {
                const isActive = activeId === section.id;
                return (
                  <button
                    key={section.id}
                    type="button"
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full text-left px-3 py-2 text-xs font-semibold rounded-lg transition-colors flex items-center justify-between ${
                      isActive
                        ? "bg-red-50 text-red-700 font-bold"
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                    }`}
                  >
                    <span className="truncate">{section.label}</span>
                    {isActive && <span className="text-[10px] text-red-600 font-extrabold ml-2">●</span>}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Desktop Sticky Sidebar Navigation */}
      <aside className="hidden lg:block w-72 shrink-0 sticky top-28 self-start">
        <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs">
          <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100">
            <span className="w-2 h-2 rounded-full bg-red-600 shrink-0" />
            <span className="text-xs font-black uppercase tracking-wider text-slate-800">
              Commercial Lease Roadmap
            </span>
          </div>

          <nav className="space-y-1 max-h-[calc(100vh-180px)] overflow-y-auto pr-1" aria-label="Table of contents">
            {sections.map((section) => {
              const isActive = activeId === section.id;
              return (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left px-3 py-2 text-xs font-semibold rounded-lg transition-all flex items-center justify-between text-balance ${
                    isActive
                      ? "bg-red-50 text-red-700 font-bold border-l-3 border-[#DC2626]"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  <span className="truncate">{section.label}</span>
                  {isActive && <span className="text-[10px] text-red-600 font-extrabold ml-1">●</span>}
                </button>
              );
            })}
          </nav>
        </div>
      </aside>
    </>
  );
}
