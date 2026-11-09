"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const ELECTRICITY_BILL_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-overview", label: "OVERVIEW" },
  { id: "heading-templates", label: "APPLICATION FORMATS" },
  { id: "heading-tone-matrix", label: "TONE & AUTHORITY MATRIX" },
  { id: "heading-subject-lines", label: "SUBJECT LINES" },
  { id: "heading-causes", label: "COMMON CAUSES" },
  { id: "heading-legal-rights", label: "LEGAL RIGHTS" },
  { id: "heading-escalation", label: "ESCALATION RAIL" },
  { id: "heading-orders", label: "CGRF & COURT ORDERS" },
  { id: "heading-worked-example", label: "WORKED EXAMPLE" },
  { id: "heading-sending-tips", label: "SENDING TIPS & EVIDENCE" },
  { id: "heading-checklist", label: "DOCUMENT CHECKLIST" },
  { id: "heading-scope", label: "LEGAL SCOPE" },
  { id: "heading-faqs", label: "FAQ" },
  { id: "heading-sources", label: "STATUTORY REFS" },
];

interface ElectricityBillTOCProps {
  sections?: TOCSection[];
}

export default function ElectricityBillTOC({
  sections = ELECTRICITY_BILL_TOC_SECTIONS,
}: ElectricityBillTOCProps) {
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
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -90;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const activeLabel = sections.find((s) => s.id === activeId)?.label || "NAVIGATION";

  return (
    <aside aria-label="Table of contents" className="w-full lg:w-64 xl:w-72 shrink-0">
      {/* Mobile Sticky Dropdown Header */}
      <div className="lg:hidden sticky top-20 z-30 mb-4 bg-white/95 backdrop-blur-md border border-slate-200 rounded-xl shadow-sm p-3">
        <div className="relative" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between gap-2 px-3.5 py-2.5 bg-slate-50 hover:bg-slate-100 rounded-lg border border-slate-300 text-xs font-bold text-slate-800 transition-colors"
            aria-expanded={isOpen}
            aria-haspopup="true"
          >
            <span className="flex items-center gap-2 truncate">
              <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
              <span className="text-slate-500 font-semibold">ON THIS PAGE:</span>
              <span className="text-slate-900 truncate">{activeLabel}</span>
            </span>
            <svg
              className={`w-4 h-4 text-slate-600 transition-transform duration-200 shrink-0 ${
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
            <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-slate-200 py-2 max-h-72 overflow-y-auto z-40">
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

      {/* Desktop Sticky Sidebar */}
      <div className="hidden lg:block sticky top-28 bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
        <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100">
          <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
          <h2 className="text-xs font-black uppercase tracking-wider text-slate-800">
            Guide Navigation
          </h2>
        </div>

        <nav aria-label="Table of contents navigation" className="space-y-1">
          {sections.map((section) => {
            const isActive = activeId === section.id;
            return (
              <button
                key={section.id}
                type="button"
                onClick={() => scrollToSection(section.id)}
                className={`w-full text-left px-3 py-2 rounded-lg text-xs font-semibold transition-all duration-150 flex items-center justify-between ${
                  isActive
                    ? "bg-red-50 text-[#DC2626] font-bold border-l-2 border-[#DC2626] pl-2.5 shadow-xs"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                <span className="truncate">{section.label}</span>
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] shrink-0 ml-1.5" />
                )}
              </button>
            );
          })}
        </nav>

        <div className="mt-5 pt-4 border-t border-slate-100">
          <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/70 text-[11px] text-slate-600 space-y-1">
            <p className="font-bold text-slate-800">Statutory Notice</p>
            <p>Section 56(1) Electricity Act bars disconnection when a bona fide dispute is raised.</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
