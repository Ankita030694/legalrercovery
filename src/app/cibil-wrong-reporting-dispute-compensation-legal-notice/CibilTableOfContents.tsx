"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const CIBIL_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-overview", label: "STATUTORY SUMMARY" },
  { id: "heading-scenarios", label: "DISPUTE SCENARIOS" },
  { id: "heading-rbi-penalty", label: "₹100/DAY PENALTY" },
  { id: "heading-legal-basis", label: "LEGAL BASIS (CICRA)" },
  { id: "heading-step-by-step", label: "5-STEP PLAYBOOK" },
  { id: "heading-flowchart", label: "DISPUTE LIFECYCLE" },
  { id: "heading-worked-example", label: "WORKED EXAMPLE" },
  { id: "heading-case-citations", label: "COURT & OMBUDSMAN ORDERS" },
  { id: "heading-evidence-checklist", label: "EVIDENCE CHECKLIST" },
  { id: "heading-mistakes-to-avoid", label: "MISTAKES TO AVOID" },
  { id: "heading-faqs", label: "FAQS" },
  { id: "heading-sources", label: "STATUTORY REFS" },
];

interface CibilTableOfContentsProps {
  sections?: TOCSection[];
}

export default function CibilTableOfContents({
  sections = CIBIL_TOC_SECTIONS,
}: CibilTableOfContentsProps) {
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
      const yOffset = -90; // offset for fixed navbar
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      window.history.pushState(null, "", `#${id}`);
      setActiveId(id);
      setIsOpen(false);
    }
  };

  const activeSection = sections.find((s) => s.id === activeId) || sections[0];

  return (
    <>
      {/* Mobile / Tablet Sticky Dropdown Table of Contents */}
      <div
        ref={dropdownRef}
        className="lg:hidden sticky top-20 z-30 w-full mb-6 py-2 bg-slate-50/95 backdrop-blur-sm select-none"
      >
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-toc-dropdown"
          className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-white border border-slate-200/80 shadow-sm text-left transition-all hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-red-500/20"
        >
          <div className="flex items-center gap-2.5 truncate">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse shrink-0" />
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 shrink-0">
              JUMP TO:
            </span>
            <span className="text-xs sm:text-sm font-semibold text-slate-800 truncate">
              {activeSection?.label}
            </span>
          </div>
          <svg
            className={`w-4 h-4 text-slate-500 transition-transform duration-200 shrink-0 ${
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
          <div
            id="mobile-toc-dropdown"
            className="absolute left-0 right-0 mt-2 mx-4 max-h-[60vh] overflow-y-auto rounded-xl bg-white border border-slate-200 shadow-xl py-2 z-40 divide-y divide-slate-100"
          >
            {sections.map((section) => {
              const isActive = activeId === section.id;
              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => scrollToSection(e, section.id)}
                  className={`flex items-center gap-2.5 px-4 py-2.5 text-xs transition-colors ${
                    isActive
                      ? "bg-red-50 text-red-700 font-bold"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                      isActive ? "bg-red-600" : "bg-slate-300"
                    }`}
                  />
                  <span className="truncate">{section.label}</span>
                </a>
              );
            })}
          </div>
        )}
      </div>

      {/* Desktop Sticky Sidebar Table of Contents */}
      <aside
        aria-label="Table of contents"
        className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 select-none"
      >
        <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-sm">
          <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100">
            <span className="w-2 h-2 rounded-full bg-red-600" />
            <p className="text-[11px] font-black uppercase tracking-wider text-slate-400">
              TABLE OF CONTENTS
            </p>
          </div>

          <nav className="space-y-1">
            {sections.map((section) => {
              const isActive = activeId === section.id;
              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => scrollToSection(e, section.id)}
                  className={`group flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs transition-all duration-150 ${
                    isActive
                      ? "bg-red-50 text-red-700 font-bold shadow-xs"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900 font-medium"
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full transition-colors shrink-0 ${
                      isActive ? "bg-red-600" : "bg-slate-300 group-hover:bg-slate-400"
                    }`}
                  />
                  <span className="truncate">{section.label}</span>
                </a>
              );
            })}
          </nav>

          <div className="mt-5 pt-4 border-t border-slate-100">
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-[11px] text-slate-500 leading-snug">
              <span className="font-bold text-slate-700 block mb-1">RBI 30-Day Rule</span>
              Banks &amp; credit bureaus must rectify data within 30 days or pay ₹100/day penalty.
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
