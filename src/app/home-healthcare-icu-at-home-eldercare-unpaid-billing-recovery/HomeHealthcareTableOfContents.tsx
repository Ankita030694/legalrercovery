"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const HEALTHCARE_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-overview", label: "HOME-ICU BAD DEBT CRISIS" },
  { id: "heading-decision-tree", label: "5-STAGE RECOVERY TREE" },
  { id: "heading-statutory-matrix", label: "STATUTORY MATRIX" },
  { id: "heading-scenario-tabs", label: "4 RECOVERY SCENARIOS" },
  { id: "heading-equipment-recovery", label: "VENTILATOR & ASSET RECOVERY" },
  { id: "heading-nri-enforcement", label: "OVERSEAS NRI NOTICE SERVICE" },
  { id: "heading-worked-example", label: "WORKED RECOVERY LEDGER" },
  { id: "heading-evidence-checklist", label: "BSA S.63 EVIDENCE AUDIT" },
  { id: "heading-cta", label: "INSTITUTIONAL DESK" },
  { id: "heading-faqs", label: "FREQUENTLY ASKED QUESTIONS" },
  { id: "heading-sources", label: "STATUTORY PRECEDENTS" },
];

interface HomeHealthcareTableOfContentsProps {
  sections?: TOCSection[];
}

export default function HomeHealthcareTableOfContents({
  sections = HEALTHCARE_TOC_SECTIONS,
}: HomeHealthcareTableOfContentsProps) {
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

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
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
      {/* Mobile Sticky Bar */}
      <div className="lg:hidden sticky top-20 z-30 bg-slate-50/95 backdrop-blur-sm border-b border-slate-200 py-3 px-4 -mx-4 sm:-mx-6 mb-6">
        <div className="relative" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between px-4 py-2.5 bg-white border border-slate-200 rounded-xl shadow-xs text-left"
            aria-expanded={isOpen}
          >
            <div className="flex items-center gap-2 truncate">
              <span className="w-2 h-2 rounded-full bg-[#DC2626] shrink-0" />
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                Table of Contents:
              </span>
              <span className="text-xs font-semibold text-slate-900 truncate">
                {activeSection?.label}
              </span>
            </div>
            <svg
              className={`w-4 h-4 text-slate-500 transition-transform duration-200 shrink-0 ml-2 ${
                isOpen ? "rotate-180" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isOpen && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-200 rounded-xl shadow-xl z-50 max-h-80 overflow-y-auto py-2">
              {sections.map((section, idx) => {
                const isActive = activeId === section.id;
                return (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    onClick={(e) => scrollToSection(e, section.id)}
                    className={`flex items-center gap-3 px-4 py-2.5 text-xs transition-colors ${
                      isActive
                        ? "bg-red-50 text-[#DC2626] font-bold border-l-4 border-[#DC2626]"
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                    }`}
                  >
                    <span
                      className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] shrink-0 ${
                        isActive
                          ? "bg-[#DC2626] text-white font-bold"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      {idx + 1}
                    </span>
                    <span className="truncate">{section.label}</span>
                  </a>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Desktop Sticky Sidebar */}
      <aside className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
        <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100">
          <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
          <p className="text-xs font-black uppercase tracking-wider text-slate-800">
            Navigation Protocol
          </p>
        </div>
        <nav aria-label="Table of Contents">
          <ul className="space-y-1">
            {sections.map((section, idx) => {
              const isActive = activeId === section.id;
              return (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    onClick={(e) => scrollToSection(e, section.id)}
                    className={`group flex items-center gap-3 px-3 py-2 rounded-xl text-xs transition-all ${
                      isActive
                        ? "bg-[#DC2626] text-white font-bold shadow-xs"
                        : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 font-medium"
                    }`}
                  >
                    <span
                      className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] shrink-0 transition-colors ${
                        isActive
                          ? "bg-white text-[#DC2626] font-extrabold"
                          : "bg-slate-100 text-slate-500 group-hover:bg-slate-200 group-hover:text-slate-800"
                      }`}
                    >
                      {idx + 1}
                    </span>
                    <span className="truncate">{section.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
    </>
  );
}
