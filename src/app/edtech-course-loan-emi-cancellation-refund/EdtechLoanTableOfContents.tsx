"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const EDTECH_LOAN_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-comparison-matrix", label: "REMEDY MATRIX" },
  { id: "heading-personas", label: "CHOOSE YOUR ROUTE" },
  { id: "heading-orders-overview", label: "COMMISSION AWARDS" },
  { id: "heading-order-digest", label: "VERIFIED CASE DIGEST" },
  { id: "heading-pattern-analysis", label: "WINNING PATTERNS" },
  { id: "heading-escalation-flow", label: "RESOLUTION RAIL" },
  { id: "heading-playbook", label: "5-STEP PLAYBOOK" },
  { id: "heading-deadlines-table", label: "STATUTORY DEADLINES" },
  { id: "heading-problem-picker", label: "DISPUTE SOLUTIONS" },
  { id: "heading-worked-example", label: "WORKED CASE STUDY" },
  { id: "heading-evidence-checklist", label: "EVIDENCE CHECKLIST" },
  { id: "heading-faqs", label: "FAQ" },
  { id: "heading-sources", label: "STATUTORY REFS" },
];

interface EdtechLoanTableOfContentsProps {
  sections?: TOCSection[];
}

export default function EdtechLoanTableOfContents({
  sections = EDTECH_LOAN_TOC_SECTIONS,
}: EdtechLoanTableOfContentsProps) {
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

  const activeSection = sections.find((s) => s.id === activeId) || sections[0];

  return (
    <>
      {/* Mobile Sticky Floating Navigation Bar */}
      <div className="lg:hidden sticky top-16 z-30 w-full bg-white/95 backdrop-blur-md border-y border-slate-200 shadow-sm px-4 py-2.5 mb-6">
        <div className="relative" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between gap-2 px-3.5 py-2 text-xs font-bold text-slate-800 bg-slate-100 hover:bg-slate-200/70 rounded-xl transition-colors border border-slate-200"
            aria-expanded={isOpen}
            aria-label="Toggle Table of Contents"
          >
            <div className="flex items-center gap-2 truncate">
              <span className="w-2 h-2 rounded-full bg-red-600 shrink-0" />
              <span className="text-[11px] uppercase tracking-wider text-slate-500 font-extrabold">Section:</span>
              <span className="truncate text-slate-900 font-semibold">{activeSection?.label}</span>
            </div>
            <span className="text-slate-500 text-xs shrink-0 font-black">{isOpen ? "▲" : "▼"}</span>
          </button>

          {isOpen && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-slate-200 rounded-xl shadow-xl max-h-72 overflow-y-auto py-1 z-50">
              {sections.map((section) => {
                const isActive = activeId === section.id;
                return (
                  <button
                    key={section.id}
                    type="button"
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full text-left px-4 py-2.5 text-xs font-semibold flex items-center justify-between transition-colors ${
                      isActive
                        ? "bg-red-50 text-[#DC2626] font-bold"
                        : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                    }`}
                  >
                    <span>{section.label}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Desktop Sticky Table of Contents Sidebar */}
      <aside
        className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start max-h-[calc(100vh-8rem)] overflow-y-auto pr-2 pb-6"
        aria-label="Table of Contents"
      >
        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h2 className="text-xs font-black uppercase tracking-wider text-slate-900 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
              Table of Contents
            </h2>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
              {sections.length} Parts
            </span>
          </div>

          <nav className="space-y-1">
            {sections.map((section, idx) => {
              const isActive = activeId === section.id;
              return (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left text-xs px-3 py-2 rounded-xl transition-all duration-150 flex items-center justify-between group cursor-pointer ${
                    isActive
                      ? "bg-red-50 text-[#DC2626] font-extrabold shadow-xs"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900 font-medium"
                  }`}
                >
                  <span className="flex items-center gap-2 truncate">
                    <span
                      className={`text-[10px] font-mono shrink-0 ${
                        isActive ? "text-[#DC2626]" : "text-slate-400 group-hover:text-slate-600"
                      }`}
                    >
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className="truncate">{section.label}</span>
                  </span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] shrink-0" />}
                </button>
              );
            })}
          </nav>

          <div className="pt-3 border-t border-slate-100">
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/70 text-[11px] text-slate-600 leading-relaxed">
              <strong className="text-slate-900 font-bold block mb-1">RBI &amp; CPA Protection:</strong>
              Under RBI Digital Lending norms and CPA 2019, students cannot be forced into continuing EMIs for cancelled courses.
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
