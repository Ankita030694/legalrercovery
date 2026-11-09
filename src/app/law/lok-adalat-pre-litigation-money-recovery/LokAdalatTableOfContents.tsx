"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const LOK_ADALAT_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-overview", label: "OVERVIEW & STATUTORY BASIS" },
  { id: "heading-case-citations", label: "LANDMARK RULINGS" },
  { id: "heading-lok-vs-suit", label: "LOK ADALAT VS. MONEY SUIT" },
  { id: "heading-resolution-flow", label: "RESOLUTION RAIL" },
  { id: "heading-playbook", label: "5-STEP DLSA PLAYBOOK" },
  { id: "heading-eligibility", label: "ELIGIBLE CLAIMS MATRIX" },
  { id: "heading-dispute-types", label: "DISPUTE NAVIGATOR" },
  { id: "heading-worked-example", label: "WORKED CASE STUDY" },
  { id: "heading-evidence-checklist", label: "EVIDENCE CHECKLIST" },
  { id: "heading-faqs", label: "FAQS & LEGAL BENCHMARKS" },
  { id: "heading-sources", label: "STATUTORY REFS" },
];

interface LokAdalatTableOfContentsProps {
  sections?: TOCSection[];
}

export default function LokAdalatTableOfContents({
  sections = LOK_ADALAT_TOC_SECTIONS,
}: LokAdalatTableOfContentsProps) {
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
        const element = document.getElementById(sections[i].id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveId(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sections]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveId(id);
      setIsOpen(false);
    }
  };

  const activeSection = sections.find((s) => s.id === activeId) || sections[0];

  return (
    <>
      {/* Mobile Sticky Bar & Dropdown */}
      <div className="lg:hidden sticky top-16 z-30 w-full mb-6" ref={dropdownRef}>
        <div className="bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-xl shadow-md p-2 flex items-center justify-between">
          <div className="flex items-center gap-2 px-2 overflow-hidden">
            <span className="text-[10px] font-black uppercase tracking-wider text-red-600 bg-red-50 px-2 py-0.5 rounded">
              Navigate
            </span>
            <span className="text-xs font-bold text-slate-800 truncate">
              {activeSection?.label}
            </span>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-lg transition-colors"
            aria-expanded={isOpen}
            aria-label="Toggle Table of Contents"
          >
            <span>Sections</span>
            <svg
              className={`w-3.5 h-3.5 transition-transform duration-200 ${
                isOpen ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="absolute left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-slate-200 py-2 max-h-72 overflow-y-auto z-40">
            {sections.map((section) => {
              const isActive = activeId === section.id;
              return (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left px-4 py-2 text-xs font-semibold flex items-center justify-between transition-colors ${
                    isActive
                      ? "text-red-600 bg-red-50/80 font-bold border-l-2 border-red-600"
                      : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  <span className="truncate">{section.label}</span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-red-600 shrink-0 ml-2" />
                  )}
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Desktop Sticky Sidebar */}
      <aside
        aria-label="Table of contents"
        className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start max-h-[calc(100vh-8rem)] overflow-y-auto pr-2"
      >
        <div className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-xs">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
            <span className="text-[11px] font-black uppercase tracking-widest text-slate-500">
              Contents Outline
            </span>
            <span className="text-[10px] font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded-full">
              LSA Act 1987
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
                  className={`group w-full text-left px-3 py-2 rounded-xl text-xs transition-all flex items-start gap-2.5 ${
                    isActive
                      ? "bg-slate-900 text-white font-bold shadow-xs"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50 font-medium"
                  }`}
                >
                  <span
                    className={`shrink-0 w-4 text-[10px] font-bold mt-0.5 ${
                      isActive ? "text-red-400" : "text-slate-400 group-hover:text-slate-600"
                    }`}
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="leading-snug">{section.label}</span>
                </button>
              );
            })}
          </nav>

          <div className="mt-5 pt-4 border-t border-slate-100">
            <div className="bg-slate-50 rounded-xl p-3 border border-slate-200/70 text-[11px] text-slate-600 leading-relaxed">
              <span className="font-bold text-slate-900 block mb-1">
                Zero Court Fee Settlement
              </span>
              Under Section 19(5) of the Legal Services Authorities Act, 1987, pre-litigation claims carry ₹0 court fees with civil decree finality under Section 21.
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
