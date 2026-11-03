"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const EX_PARTNER_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-overview", label: "OVERVIEW" },
  { id: "heading-scenario-cards", label: "SCENARIO ANALYSIS" },
  { id: "heading-precedents", label: "COURT PRECEDENTS" },
  { id: "heading-loan-vs-gift", label: "LOAN VS GIFT" },
  { id: "heading-playbook", label: "5-STEP PLAYBOOK" },
  { id: "heading-limitation-table", label: "LIMITATION RULES" },
  { id: "heading-resolution-flow", label: "RESOLUTION RAIL" },
  { id: "heading-interactive-tabs", label: "DISPUTE NAVIGATOR" },
  { id: "heading-worked-example", label: "WORKED EXAMPLE" },
  { id: "heading-evidence-checklist", label: "EVIDENCE CHECKLIST" },
  { id: "heading-mistakes", label: "MISTAKES TO AVOID" },
  { id: "heading-faqs", label: "FAQ" },
  { id: "heading-sources", label: "STATUTORY REFS" },
];

interface ExPartnerTableOfContentsProps {
  sections?: TOCSection[];
}

export default function ExPartnerTableOfContents({
  sections = EX_PARTNER_TOC_SECTIONS,
}: ExPartnerTableOfContentsProps) {
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
      {/* Mobile Sticky Dropdown Bar */}
      <div className="lg:hidden sticky top-16 z-30 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 px-4 py-2.5 shadow-sm mb-4">
        <div className="relative" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between px-3.5 py-2 text-xs font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors border border-slate-300"
            aria-expanded={isOpen}
            aria-label="Table of Contents Navigation"
          >
            <span className="flex items-center gap-2 truncate">
              <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
              <span className="text-slate-500 uppercase font-mono text-[10px]">Jump to:</span>
              <span className="truncate">{activeSection?.label}</span>
            </span>
            <svg
              className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${
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
            <div className="absolute top-full left-0 right-0 mt-1.5 bg-white border border-slate-200 rounded-xl shadow-xl max-h-72 overflow-y-auto py-1 z-50">
              {sections.map((section) => {
                const isActive = activeId === section.id;
                return (
                  <button
                    key={section.id}
                    type="button"
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full text-left px-3.5 py-2 text-xs font-medium transition-colors flex items-center justify-between ${
                      isActive
                        ? "bg-red-50 text-[#DC2626] font-bold"
                        : "text-slate-700 hover:bg-slate-50"
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

      {/* Desktop Sticky Sidebar */}
      <aside className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-24 self-start">
        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <span className="text-xs font-mono font-bold tracking-wider uppercase text-slate-500">
              Contents
            </span>
            <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-red-100 text-[#DC2626]">
              13 Sections
            </span>
          </div>

          <nav aria-label="Table of contents" className="space-y-1">
            {sections.map((section, idx) => {
              const isActive = activeId === section.id;
              return (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium transition-all duration-150 flex items-center gap-2.5 ${
                    isActive
                      ? "bg-red-50 text-[#DC2626] font-bold shadow-sm border border-red-200/60"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  <span
                    className={`font-mono text-[10px] w-4 text-right ${
                      isActive ? "text-[#DC2626]" : "text-slate-500"
                    }`}
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="truncate">{section.label}</span>
                </button>
              );
            })}
          </nav>

          <div className="pt-3 border-t border-slate-100">
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-center">
              <p className="text-[11px] font-semibold text-slate-700 mb-2">
                Need an advocate demand notice?
              </p>
              <button
                type="button"
                onClick={() => {
                  const cta = document.getElementById("cta-section-primary");
                  if (cta) {
                    cta.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="w-full py-1.5 px-3 bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs font-bold rounded-lg transition-colors shadow-sm"
              >
                Draft Legal Notice
              </button>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
