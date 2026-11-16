"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const COMMERCIAL_LEASE_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-statutory-overview", label: "STATUTORY OVERVIEW" },
  { id: "heading-interactive-workspace", label: "NOTICE WORKSPACE" },
  { id: "heading-rent-cam-tds-matrix", label: "RENT, CAM & TDS MATRIX" },
  { id: "heading-lock-in-damages-capex", label: "LOCK-IN BREACH & CAPEX" },
  { id: "heading-holdover-mesne-profits", label: "HOLD-OVER & MESNE PROFITS" },
  { id: "heading-service-evidence-bsa", label: "SERVICE & BSA S.63 PROOF" },
  { id: "heading-court-precedents", label: "JUDICIAL PRECEDENTS" },
  { id: "heading-commercial-faqs", label: "COMMERCIAL FAQS" },
  { id: "heading-primary-sources", label: "STATUTORY ACTS" },
];

interface CommercialLeaseTerminationTOCProps {
  sections?: TOCSection[];
}

export default function CommercialLeaseTerminationTOC({
  sections = COMMERCIAL_LEASE_TOC_SECTIONS,
}: CommercialLeaseTerminationTOCProps) {
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
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -100;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveId(id);
      setIsOpen(false);
    }
  };

  const activeLabel = sections.find((s) => s.id === activeId)?.label || "INDEX";

  return (
    <>
      {/* Mobile Sticky Bar */}
      <div className="lg:hidden sticky top-20 z-30 bg-slate-50/95 backdrop-blur-sm border-b border-slate-200 py-3 px-4 -mx-4 sm:-mx-6 mb-6">
        <div className="relative" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between px-4 py-2.5 bg-white border border-slate-200 rounded-xl shadow-xs text-xs font-bold text-slate-800"
            aria-expanded={isOpen}
          >
            <span className="flex items-center gap-2 truncate">
              <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
              <span className="text-slate-500 uppercase text-[10px] tracking-wider">Navigate:</span>
              <span className="truncate">{activeLabel}</span>
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
            <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-200 rounded-xl shadow-xl py-2 z-40 max-h-72 overflow-y-auto">
              {sections.map((section) => {
                const isActive = activeId === section.id;
                return (
                  <button
                    key={section.id}
                    type="button"
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full text-left px-4 py-2 text-xs font-medium transition-colors flex items-center gap-2 ${
                      isActive
                        ? "bg-red-50 text-[#DC2626] font-bold"
                        : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                    }`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${isActive ? "bg-[#DC2626]" : "bg-transparent"}`} />
                    <span>{section.label}</span>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Desktop Sticky Sidebar (No h2/h3 tags inside TOC sidebar) */}
      <aside className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start">
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
          <div className="flex items-center gap-2 pb-4 mb-3 border-b border-slate-100">
            <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
            <p className="text-xs font-extrabold uppercase tracking-widest text-slate-800">
              Notice Framework Index
            </p>
          </div>
          <nav className="space-y-1" aria-label="Table of contents">
            {sections.map((section) => {
              const isActive = activeId === section.id;
              return (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-xs transition-all duration-150 flex items-center justify-between ${
                    isActive
                      ? "bg-[#DC2626] text-white font-bold shadow-xs translate-x-1"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 font-medium"
                  }`}
                >
                  <span className="truncate">{section.label}</span>
                  {isActive && <span className="text-[10px] tracking-widest">&rarr;</span>}
                </button>
              );
            })}
          </nav>

          <div className="mt-6 pt-4 border-t border-slate-100">
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80">
              <span className="block text-[10px] font-bold uppercase tracking-wider text-red-700 mb-1">
                Statutory Hook
              </span>
              <p className="text-[11px] text-slate-600 leading-snug">
                TPA s.106 &bull; IT Act s.194-I/205 &bull; Contract Act s.74 &bull; CPC Order XV-A
              </p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
