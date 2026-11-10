"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const LIFE_INSURANCE_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-overview", label: "OVERVIEW & SECTION 45" },
  { id: "heading-statute-quote", label: "STATUTORY SECTION 45" },
  { id: "heading-scenarios", label: "6 REJECTION SCENARIOS" },
  { id: "heading-timelines-table", label: "IRDAI SETTLEMENT DEADLINES" },
  { id: "heading-escalation-flow", label: "RESOLUTION PIPELINE" },
  { id: "heading-playbook", label: "5-STEP NOMINEE PLAYBOOK" },
  { id: "heading-case-digest", label: "SUPREME COURT PRECEDENTS" },
  { id: "heading-mistakes-to-avoid", label: "MISTAKES TO AVOID" },
  { id: "heading-evidence-checklist", label: "EVIDENCE CHECKLIST" },
  { id: "heading-forum-comparison", label: "FORUM COMPARISON" },
  { id: "heading-worked-example", label: "WORKED CASE STUDY" },
  { id: "heading-faqs", label: "FREQUENTLY ASKED QUESTIONS" },
  { id: "heading-sources", label: "PRIMARY LEGAL SOURCES" },
];

interface LifeInsuranceTableOfContentsProps {
  sections?: TOCSection[];
}

export default function LifeInsuranceTableOfContents({
  sections = LIFE_INSURANCE_TOC_SECTIONS,
}: LifeInsuranceTableOfContentsProps) {
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

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sections]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -90;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveId(id);
      setIsOpen(false);
    }
  };

  const activeSection = sections.find((s) => s.id === activeId) || sections[0];

  return (
    <>
      {/* Mobile Sticky Navigation Pill / Dropdown */}
      <div className="lg:hidden sticky top-16 z-30 w-full mb-6" ref={dropdownRef}>
        <div className="bg-white/95 backdrop-blur-md border border-slate-200/80 rounded-xl shadow-md p-2">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between px-3 py-2 text-xs font-bold text-slate-800 bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
            aria-expanded={isOpen}
            aria-controls="mobile-toc-dropdown"
          >
            <span className="flex items-center gap-2 truncate">
              <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
              <span className="text-slate-500 font-medium">Jump to:</span>
              <span className="text-slate-900 truncate">{activeSection?.label}</span>
            </span>
            <svg
              className={`w-4 h-4 text-slate-500 transition-transform duration-200 shrink-0 ${
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
            <div
              id="mobile-toc-dropdown"
              className="mt-2 py-1 max-h-64 overflow-y-auto border-t border-slate-100 divide-y divide-slate-50 text-left"
            >
              {sections.map((section) => {
                const isActive = activeId === section.id;
                return (
                  <button
                    key={section.id}
                    type="button"
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full text-left px-3 py-2 text-xs font-semibold flex items-center justify-between transition-colors cursor-pointer ${
                      isActive
                        ? "text-[#DC2626] bg-red-50/60 font-bold"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                    }`}
                  >
                    <span className="truncate">{section.label}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] shrink-0" />}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Desktop Sticky Sidebar Navigation */}
      <aside
        aria-label="Table of contents"
        className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-24 self-start"
      >
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
          <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100">
            <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
            <p className="text-xs font-black uppercase tracking-wider text-slate-900">
              Guide Navigation
            </p>
          </div>

          <nav className="space-y-1">
            {sections.map((section) => {
              const isActive = activeId === section.id;
              return (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-xs font-bold transition-all flex items-center justify-between cursor-pointer ${
                    isActive
                      ? "text-[#DC2626] bg-red-50/80 border-l-2 border-[#DC2626] pl-2.5 font-extrabold"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  <span className="truncate">{section.label}</span>
                  {isActive && (
                    <svg className="w-3.5 h-3.5 text-[#DC2626] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </button>
              );
            })}
          </nav>

          <div className="mt-5 pt-4 border-t border-slate-100">
            <a
              href="#heading-playbook"
              className="w-full inline-flex items-center justify-center px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-[#DC2626] hover:bg-[#B91C1C] transition-colors shadow-sm text-center"
            >
              Start Nominee Claim Escalation
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}
