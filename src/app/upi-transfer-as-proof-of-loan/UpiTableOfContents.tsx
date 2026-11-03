"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const UPI_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-overview", label: "OVERVIEW" },
  { id: "heading-case-digest", label: "COURT PRECEDENTS" },
  { id: "heading-three-pillars", label: "3 EVIDENCE PILLARS" },
  { id: "heading-decision-tree", label: "DECISION TREE" },
  { id: "heading-route-1", label: "ROUTE 1: ORDER 37" },
  { id: "heading-route-2", label: "ROUTE 2: MONEY SUIT" },
  { id: "heading-route-3", label: "ROUTE 3: GIFT DEFENSE" },
  { id: "heading-route-4", label: "ROUTE 4: BNS 318 FRAUD" },
  { id: "heading-statutory-table", label: "LEGAL BENCHMARKS" },
  { id: "heading-evidence-tabs", label: "EVIDENCE ANALYZER" },
  { id: "heading-case-study", label: "WORKED CASE STUDY" },
  { id: "heading-checklist", label: "EVIDENCE CHECKLIST" },
  { id: "heading-faqs", label: "FAQ" },
  { id: "heading-sources", label: "STATUTORY SOURCES" },
];

interface UpiTableOfContentsProps {
  sections?: TOCSection[];
}

export default function UpiTableOfContents({
  sections = UPI_TOC_SECTIONS,
}: UpiTableOfContentsProps) {
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
      const top = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top, behavior: "smooth" });
      setActiveId(id);
      setIsOpen(false);
    }
  };

  const activeSection = sections.find((s) => s.id === activeId) || sections[0];

  return (
    <>
      {/* Mobile Floating Action Button & Dropdown */}
      <div className="lg:hidden fixed bottom-6 right-4 z-40" ref={dropdownRef}>
        {isOpen && (
          <div className="absolute bottom-14 right-0 w-72 max-h-[70vh] overflow-y-auto bg-white rounded-2xl shadow-2xl border border-slate-200 p-2 space-y-1 backdrop-blur-lg bg-white/95 animate-in fade-in slide-in-from-bottom-3 duration-200">
            <div className="px-3 py-2 text-[11px] font-extrabold uppercase tracking-wider text-slate-400 border-b border-slate-100">
              Jump to Section
            </div>
            {sections.map((section) => {
              const isActive = activeId === section.id;
              return (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left px-3 py-2 rounded-xl text-xs font-semibold transition-all flex items-center justify-between ${
                    isActive
                      ? "bg-red-50 text-[#DC2626] font-bold"
                      : "text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  <span className="truncate">{section.label}</span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] shrink-0" />
                  )}
                </button>
              );
            })}
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Table of Contents Menu"
          className="flex items-center gap-2 px-4 py-3 bg-slate-900 text-white rounded-full shadow-xl hover:bg-slate-800 transition-all border border-slate-700 text-xs font-bold"
        >
          <svg
            className="w-4 h-4 text-red-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
          <span>{activeSection?.label || "Contents"}</span>
          <svg
            className={`w-3.5 h-3.5 transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>

      {/* Desktop Sticky Sidebar */}
      <aside
        aria-label="Table of Contents"
        className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 space-y-4"
      >
        <div className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-xs">
          <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100">
            <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-900">
              Guide Navigation
            </h3>
          </div>

          <nav className="space-y-1 max-h-[calc(100vh-220px)] overflow-y-auto pr-1">
            {sections.map((section) => {
              const isActive = activeId === section.id;
              return (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left px-3 py-2 rounded-xl text-xs transition-all flex items-center justify-between group ${
                    isActive
                      ? "bg-red-50 text-[#DC2626] font-bold shadow-xs"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50 font-medium"
                  }`}
                >
                  <span className="truncate">{section.label}</span>
                  <span
                    className={`text-[10px] opacity-0 group-hover:opacity-100 transition-opacity ${
                      isActive ? "opacity-100 text-[#DC2626]" : "text-slate-400"
                    }`}
                  >
                    →
                  </span>
                </button>
              );
            })}
          </nav>
        </div>

        <div className="p-4 bg-slate-900 text-white rounded-2xl text-xs space-y-2 border border-slate-800 shadow-md">
          <div className="flex items-center gap-1.5 text-red-400 font-bold text-[11px] uppercase tracking-wider">
            <span>⚖️ Section 63 BSA Mandate</span>
          </div>
          <p className="text-slate-300 leading-relaxed text-[11px]">
            UPI transfers prove transmission of money. To prove a loan, WhatsApp messages or emails must be backed by a Section 63 BSA electronic evidence certificate.
          </p>
        </div>
      </aside>
    </>
  );
}
