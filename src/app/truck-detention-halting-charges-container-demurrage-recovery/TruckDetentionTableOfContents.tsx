"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const TRUCK_DETENTION_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-overview", label: "THE UNSTAMPED POD TRAP" },
  { id: "heading-statutory-basis", label: "STATUTORY FRAMEWORK" },
  { id: "heading-bsa-proof", label: "BSA S.63 ELECTRONIC PROOF" },
  { id: "heading-escalation-flow", label: "DECISION TREE PROTOCOL" },
  { id: "heading-liability-matrix", label: "STATUTORY MATRIX" },
  { id: "heading-scenario-tabs", label: "COMMERCIAL SCENARIOS" },
  { id: "heading-worked-example", label: "WORKED FINANCIAL LEDGER" },
  { id: "heading-evidence-checklist", label: "EVIDENCE DOSSIER" },
  { id: "heading-carrier-lien", label: "CARRIER LIEN & SUMMARY SUIT" },
  { id: "heading-faqs", label: "FREQUENTLY ASKED QUESTIONS" },
  { id: "heading-sources", label: "STATUTORY AUTHORITIES" },
];

interface TruckDetentionTableOfContentsProps {
  sections?: TOCSection[];
}

export default function TruckDetentionTableOfContents({
  sections = TRUCK_DETENTION_TOC_SECTIONS,
}: TruckDetentionTableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>(sections[0]?.id || "");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close mobile dropdown on outside click
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

  const scrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const activeLabel = sections.find((s) => s.id === activeId)?.label || "NAVIGATION";

  return (
    <>
      {/* Mobile Sticky Bar */}
      <div className="lg:hidden sticky top-20 z-30 bg-slate-50/95 backdrop-blur-sm border-b border-slate-200 py-3 px-4 -mx-4 sm:-mx-6 mb-6">
        <div className="relative" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between px-4 py-2.5 bg-white border border-slate-300 rounded-xl text-xs font-bold text-slate-800 shadow-sm"
          >
            <span className="flex items-center gap-2 truncate">
              <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
              <span className="truncate">{activeLabel}</span>
            </span>
            <svg
              className={`w-4 h-4 text-slate-500 transition-transform ${isOpen ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              width={16}
              height={16}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isOpen && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-200 rounded-xl shadow-xl overflow-hidden z-40 max-h-80 overflow-y-auto">
              <div className="py-1">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    type="button"
                    onClick={() => scrollTo(section.id)}
                    className={`w-full text-left px-4 py-2.5 text-xs font-semibold tracking-wider transition-colors flex items-center gap-2 ${
                      activeId === section.id
                        ? "bg-red-50 text-[#DC2626] font-bold"
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        activeId === section.id ? "bg-[#DC2626]" : "bg-slate-300"
                      }`}
                    />
                    {section.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Desktop Sticky Aside */}
      <aside className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start">
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
          <div className="flex items-center gap-2 pb-4 mb-4 border-b border-slate-100">
            <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Navigation Index
            </p>
          </div>

          <nav className="space-y-1">
            {sections.map((section) => {
              const isActive = activeId === section.id;
              return (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => scrollTo(section.id)}
                  className={`w-full text-left px-3.5 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all flex items-center gap-2.5 ${
                    isActive
                      ? "bg-[#DC2626] text-white font-bold shadow-sm"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      isActive ? "bg-white" : "bg-slate-400"
                    }`}
                  />
                  <span className="truncate">{section.label}</span>
                </button>
              );
            })}
          </nav>

          <div className="mt-6 pt-5 border-t border-slate-100">
            <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
              Statutory Basis
            </p>
            <p className="text-xs text-slate-600 leading-relaxed">
              BSA 2023 s.63 electronic evidence admissible with FASTag &amp; AIS-140 GPS logs; Contract Act s.73 damages.
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}
