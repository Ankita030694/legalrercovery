"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const OMBUDSMAN_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-template-workspace", label: "ANNEXURE VI-A TEMPLATE" },
  { id: "heading-field-breakdown", label: "FIELD-BY-FIELD GUIDE" },
  { id: "heading-complaint-grounds", label: "DISPUTE GROUNDS MATRIX" },
  { id: "heading-pre-conditions", label: "RULE 14 PRE-CONDITIONS" },
  { id: "heading-filing-flow", label: "FILING FLOWCHART" },
  { id: "heading-documents-checklist", label: "MANDATORY ENCLOSURES" },
  { id: "heading-worked-sample", label: "WORKED COMPLAINT SAMPLE" },
  { id: "heading-ombudsman-awards", label: "CASE LAW & AWARDS" },
  { id: "heading-honest-scope", label: "OUR SCOPE" },
  { id: "heading-faqs", label: "FAQS" },
  { id: "heading-sources", label: "STATUTORY REFS" },
];

interface InsuranceOmbudsmanTOCProps {
  sections?: TOCSection[];
}

export default function InsuranceOmbudsmanTOC({
  sections = OMBUDSMAN_TOC_SECTIONS,
}: InsuranceOmbudsmanTOCProps) {
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

  return (
    <div className="w-full">
      {/* Mobile Accordion / Dropdown */}
      <div className="lg:hidden w-full mb-6" ref={dropdownRef}>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-toc-list"
          className="w-full flex items-center justify-between px-4 py-3 bg-slate-900 text-white rounded-xl text-xs font-bold uppercase tracking-wider shadow-md border border-slate-800"
        >
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            TABLE OF CONTENTS: {sections.find((s) => s.id === activeId)?.label || "INDEX"}
          </span>
          <svg
            className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {isOpen && (
          <div
            id="mobile-toc-list"
            className="mt-2 bg-white rounded-xl shadow-xl border border-slate-200 py-2 max-h-80 overflow-y-auto z-30 relative"
          >
            {sections.map((section, idx) => {
              const isActive = activeId === section.id;
              return (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left px-4 py-2 text-xs flex items-center gap-2.5 transition-colors ${
                    isActive
                      ? "text-red-700 font-bold bg-red-50 border-l-4 border-red-600"
                      : "text-slate-600 hover:text-slate-950 hover:bg-slate-50"
                  }`}
                >
                  <span className="text-[10px] text-slate-400 font-mono">0{idx + 1}</span>
                  <span>{section.label}</span>
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Desktop Sticky Sidebar TOC */}
      <div className="hidden lg:block bg-white rounded-2xl p-5 border border-slate-200 shadow-sm sticky top-28">
        <h3 className="text-xs font-black uppercase tracking-wider text-slate-500 mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-red-600" />
          Page Sections Guide
        </h3>
        <nav aria-label="Table of Contents">
          <ul className="space-y-1.5 text-xs">
            {sections.map((section, idx) => {
              const isActive = activeId === section.id;
              return (
                <li key={section.id}>
                  <button
                    type="button"
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full text-left py-1.5 px-2.5 rounded-lg transition-all flex items-center gap-2.5 ${
                      isActive
                        ? "text-red-700 font-bold bg-red-50 text-xs border-l-2 border-red-600 translate-x-1"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                    }`}
                  >
                    <span className="text-[10px] text-slate-400 font-mono">0{idx + 1}</span>
                    <span className="truncate">{section.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
}
