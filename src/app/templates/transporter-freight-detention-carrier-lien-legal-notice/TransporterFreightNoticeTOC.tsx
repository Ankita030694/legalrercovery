"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const TRANSPORTER_FREIGHT_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-statutory-overview", label: "STATUTORY OVERVIEW" },
  { id: "heading-interactive-workspace", label: "NOTICE WORKSPACE" },
  { id: "heading-bilty-pod-schedule", label: "BILTY & POD SCHEDULE" },
  { id: "heading-gps-halting-detention", label: "GPS HALTING CLAIMS" },
  { id: "heading-carrier-lien-procedure", label: "CARRIER-LIEN PROTOCOL" },
  { id: "heading-raman-iron-rebuttal", label: "DAMAGE DEBIT REBUTTAL" },
  { id: "heading-judicial-precedents", label: "JUDICIAL PRECEDENTS" },
  { id: "heading-logistics-faqs", label: "LOGISTICS FAQS" },
  { id: "heading-primary-sources", label: "STATUTORY ACTS" },
];

interface TransporterFreightNoticeTOCProps {
  sections?: TOCSection[];
}

export default function TransporterFreightNoticeTOC({
  sections = TRANSPORTER_FREIGHT_TOC_SECTIONS,
}: TransporterFreightNoticeTOCProps) {
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
      const yOffset = -90;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const activeSection = sections.find((s) => s.id === activeId) || sections[0];

  return (
    <>
      {/* Mobile Sticky Bar */}
      <div className="lg:hidden sticky top-20 z-30 bg-slate-50/95 backdrop-blur-sm border-b border-slate-200 py-3 px-4 -mx-4 sm:-mx-6 mb-4">
        <div className="relative" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between px-4 py-2.5 bg-white border border-slate-200 rounded-xl shadow-xs text-left"
          >
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Navigation:{" "}
              <span className="text-slate-900 font-extrabold normal-case">
                {activeSection?.label}
              </span>
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
            <div className="absolute top-full left-0 right-0 mt-1.5 bg-white border border-slate-200 rounded-xl shadow-lg z-50 max-h-80 overflow-y-auto p-1.5 space-y-1">
              {sections.map((section) => {
                const isActive = activeId === section.id;
                return (
                  <button
                    key={section.id}
                    type="button"
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                      isActive
                        ? "bg-[#DC2626] text-white font-bold"
                        : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                    }`}
                  >
                    {section.label}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Desktop Sticky Aside */}
      <aside className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start">
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
          <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-3 px-2">
            Table of Contents
          </p>
          <nav className="space-y-1">
            {sections.map((section) => {
              const isActive = activeId === section.id;
              return (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left px-3 py-2 rounded-xl text-xs transition-all flex items-center justify-between ${
                    isActive
                      ? "bg-[#DC2626] text-white font-bold shadow-xs"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 font-medium"
                  }`}
                >
                  <span className="truncate">{section.label}</span>
                  {isActive && <span className="text-white text-xs">&rarr;</span>}
                </button>
              );
            })}
          </nav>

          <div className="mt-6 pt-5 border-t border-slate-100">
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
              <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                Statutory Ground
              </span>
              <p className="text-xs font-semibold text-slate-700 leading-snug">
                Carriage by Road Act 2007, Contract Act ss. 170/171 &amp; Order 37 CPC
              </p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
