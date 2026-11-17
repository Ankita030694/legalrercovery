"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const PR_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-statutory-summary", label: "STATUTORY SUMMARY" },
  { id: "heading-legal-landscape", label: "EARNED MEDIA LAW" },
  { id: "heading-recovery-matrix", label: "RECOVERY MATRIX" },
  { id: "heading-decision-tree", label: "DECISION TREE" },
  { id: "heading-scenario-tabs", label: "DEFAULT MODES" },
  { id: "heading-notice-period-enforcement", label: "60-DAY NOTICE FEES" },
  { id: "heading-worked-calculation", label: "FINANCIAL AUDIT" },
  { id: "heading-evidence-checklist", label: "BSA S.63 DOSSIER" },
  { id: "heading-faqs", label: "EXECUTIVE FAQS" },
  { id: "heading-statutory-authorities", label: "STATUTORY SOURCES" },
];

interface PRTableOfContentsProps {
  sections?: TOCSection[];
}

export default function PRTableOfContents({
  sections = PR_TOC_SECTIONS,
}: PRTableOfContentsProps) {
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
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveId(id);
      setIsOpen(false);
    }
  };

  const activeSection = sections.find((s) => s.id === activeId) || sections[0];

  return (
    <>
      {/* Mobile Sticky Bar */}
      <div className="lg:hidden sticky top-20 z-30 bg-slate-50/95 backdrop-blur-sm border-b border-slate-200 py-3 px-4 -mx-4 sm:-mx-6 mb-4">
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between px-4 py-2.5 bg-white border border-slate-300 rounded-xl text-xs font-bold text-slate-800 shadow-sm"
            aria-expanded={isOpen}
            aria-label="Table of contents menu"
          >
            <span className="flex items-center gap-2 truncate">
              <span className="w-2 h-2 rounded-full bg-[#DC2626]"></span>
              <span className="text-slate-500 font-medium">Jump to:</span>
              <span className="truncate text-slate-900">{activeSection?.label}</span>
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
            <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-200 rounded-xl shadow-xl z-40 max-h-72 overflow-y-auto py-2">
              {sections.map((section, idx) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left px-4 py-2 text-xs transition-colors flex items-center gap-2 ${
                    activeId === section.id
                      ? "bg-red-50 text-[#DC2626] font-bold"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  <span className="text-[10px] text-slate-400 font-mono w-4">{String(idx + 1).padStart(2, "0")}</span>
                  <span className="truncate">{section.label}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Desktop Sticky Aside */}
      <aside className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start">
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-4">
          <div className="border-b border-slate-100 pb-3">
            <p className="text-[11px] font-black uppercase tracking-widest text-[#DC2626]">
              PR Retainer Recovery SOP
            </p>
            <p className="text-xs text-slate-500 font-medium mt-0.5">
              Operational Navigation
            </p>
          </div>

          <nav className="space-y-1" aria-label="PR Retainer Guide Table of Contents">
            {sections.map((section, idx) => {
              const isActive = activeId === section.id;
              return (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left px-3 py-2 rounded-xl text-xs transition-all flex items-center gap-2.5 ${
                    isActive
                      ? "bg-[#DC2626] text-white font-bold shadow-sm"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 font-medium"
                  }`}
                >
                  <span
                    className={`text-[10px] font-mono w-4 ${
                      isActive ? "text-red-100" : "text-slate-400"
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
            <div className="p-3 bg-red-50/70 border border-red-100 rounded-xl">
              <span className="block text-[10px] font-bold text-red-900 uppercase tracking-wider mb-1">
                Statutory Remedy Rail
              </span>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                Press Council norms bar pay-for-play; MSMED Act §§15–18 mandates compound interest at 3× RBI bank rate.
              </p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
