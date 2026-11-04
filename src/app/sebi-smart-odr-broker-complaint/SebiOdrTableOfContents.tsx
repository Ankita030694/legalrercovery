"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const SEBI_ODR_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-scores-odr-overview", label: "STATUTORY OVERVIEW" },
  { id: "heading-dispute-scenarios", label: "DISPUTE SCENARIOS" },
  { id: "heading-redressal-ladder", label: "4-TIER REDRESSAL RAIL" },
  { id: "heading-sat-precedents", label: "SAT PRECEDENTS" },
  { id: "heading-filing-playbook", label: "FILING PLAYBOOK" },
  { id: "heading-statutory-deadlines", label: "TAT & TIMELINES" },
  { id: "heading-honest-scope", label: "LEGAL SCOPE" },
  { id: "heading-worked-example", label: "WORKED EXAMPLE" },
  { id: "heading-evidence-checklist", label: "EVIDENCE CHECKLIST" },
  { id: "heading-fatal-mistakes", label: "FATAL MISTAKES" },
  { id: "heading-faqs", label: "FAQ" },
  { id: "heading-sources", label: "STATUTORY REFS" },
];

interface SebiOdrTableOfContentsProps {
  sections?: TOCSection[];
}

export default function SebiOdrTableOfContents({
  sections = SEBI_ODR_TOC_SECTIONS,
}: SebiOdrTableOfContentsProps) {
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
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
      setActiveId(id);
      setIsOpen(false);
    }
  };

  const activeSection = sections.find((s) => s.id === activeId) || sections[0];

  return (
    <>
      {/* Mobile Sticky Dropdown Header */}
      <div className="lg:hidden sticky top-16 z-30 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 px-4 py-3 shadow-xs">
        <div className="relative" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between px-4 py-2.5 bg-slate-100 hover:bg-slate-200/80 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-800 transition-colors"
            aria-expanded={isOpen}
            aria-label="Table of contents menu"
          >
            <span className="flex items-center gap-2 truncate">
              <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
              <span className="truncate">{activeSection.label}</span>
            </span>
            <svg
              className={`w-4 h-4 text-slate-600 transition-transform duration-200 ${
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
            <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl border border-slate-200 shadow-xl max-h-72 overflow-y-auto z-40 py-2">
              <div className="px-3 py-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100">
                Jump to Section
              </div>
              {sections.map((section) => (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left px-4 py-2 text-xs font-semibold tracking-wide transition-colors flex items-center justify-between ${
                    activeId === section.id
                      ? "text-[#DC2626] bg-red-50/80 font-bold"
                      : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  <span>{section.label}</span>
                  {activeId === section.id && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
                  )}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Desktop Sticky Sidebar Navigation */}
      <aside
        aria-label="SEBI SMART ODR Table of Contents"
        className="w-72 flex-shrink-0 hidden lg:block sticky top-28 self-start"
      >
        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
            <span className="text-[11px] font-black tracking-widest text-slate-500 uppercase">
              On This Page
            </span>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-red-100 text-[#DC2626]">
              SEBI Framework
            </span>
          </div>

          <nav className="space-y-1" aria-label="Sections">
            {sections.map((section) => {
              const isActive = activeId === section.id;
              return (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-xs tracking-wide transition-all flex items-center justify-between group ${
                    isActive
                      ? "bg-slate-900 text-white font-bold shadow-xs"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 font-medium"
                  }`}
                >
                  <span className="truncate">{section.label}</span>
                  <span
                    className={`w-1.5 h-1.5 rounded-full transition-all ${
                      isActive
                        ? "bg-[#DC2626] scale-125"
                        : "bg-transparent group-hover:bg-slate-300"
                    }`}
                  />
                </button>
              );
            })}
          </nav>

          <div className="mt-5 pt-4 border-t border-slate-100 space-y-3">
            <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
              <p className="text-[11px] font-bold text-slate-800">Need Immediate Broker Escalation?</p>
              <p className="text-[10px] text-slate-500 mt-0.5 leading-relaxed">
                Have a specialized advocate issue a formal legal demand notice to your stockbroker before escalating to SMART ODR.
              </p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
