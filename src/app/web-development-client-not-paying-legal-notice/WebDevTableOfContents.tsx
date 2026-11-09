"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const WEB_DEV_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-statutory-basis", label: "LEGAL FOUNDATION" },
  { id: "heading-checklist-wizard", label: "PRE-FLIGHT CHECKLIST" },
  { id: "heading-evidence-matrix", label: "EVIDENCE MATRIX" },
  { id: "heading-copyright-lever", label: "SECTION 19 IP LEVER" },
  { id: "heading-problem-scenarios", label: "DISPUTE SCENARIOS" },
  { id: "heading-process-timeline", label: "RECOVERY TIMELINE" },
  { id: "heading-worked-example", label: "WORKED EXAMPLE" },
  { id: "heading-court-precedents", label: "COURT PRECEDENTS" },
  { id: "heading-template-block", label: "NOTICE TEMPLATE" },
  { id: "heading-faqs", label: "FAQS" },
  { id: "heading-sources", label: "STATUTORY REFS" },
];

interface WebDevTableOfContentsProps {
  sections?: TOCSection[];
}

export default function WebDevTableOfContents({
  sections = WEB_DEV_TOC_SECTIONS,
}: WebDevTableOfContentsProps) {
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
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const activeSection = sections.find((s) => s.id === activeId) || sections[0];

  return (
    <>
      {/* Mobile Sticky Dropdown Navigation */}
      <div className="lg:hidden sticky top-20 z-30 w-full mb-6" ref={dropdownRef}>
        <div className="bg-white/95 backdrop-blur-md border border-slate-200 rounded-xl shadow-md p-2">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between px-3 py-2 text-xs font-bold text-slate-800 uppercase tracking-wider rounded-lg bg-slate-50 border border-slate-200"
            aria-expanded={isOpen}
            aria-controls="mobile-toc-menu"
          >
            <span className="flex items-center gap-2 truncate">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
              <span className="truncate">Jump to: {activeSection?.label}</span>
            </span>
            <svg
              className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isOpen && (
            <div
              id="mobile-toc-menu"
              className="mt-2 py-1 max-h-60 overflow-y-auto divide-y divide-slate-100 bg-white rounded-lg border border-slate-200 shadow-xl"
            >
              {sections.map((section, idx) => {
                const isActive = activeId === section.id;
                return (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    onClick={() => setIsOpen(false)}
                    className={`block px-3 py-2 text-xs font-semibold transition-colors ${
                      isActive
                        ? "text-red-600 bg-red-50/70 font-bold"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                    }`}
                  >
                    <span className="text-[10px] text-slate-400 mr-2">{String(idx + 1).padStart(2, "0")}</span>
                    {section.label}
                  </a>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Desktop Sticky Sidebar Navigation */}
      <aside
        className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start space-y-4"
        aria-label="Table of Contents"
      >
        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
            <span className="text-xs font-extrabold uppercase tracking-wider text-slate-900">
              Page Contents
            </span>
            <span className="text-[11px] font-semibold text-red-600 bg-red-50 px-2 py-0.5 rounded-full border border-red-100">
              {sections.length} Topics
            </span>
          </div>

          <nav className="space-y-1" aria-label="Sections">
            {sections.map((section, idx) => {
              const isActive = activeId === section.id;
              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className={`group flex items-center justify-between px-3 py-2 text-xs rounded-xl transition-all duration-150 ${
                    isActive
                      ? "bg-gradient-to-r from-red-50 to-orange-50 text-red-700 font-bold shadow-xs border-l-3 border-red-600 pl-2.5"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50 font-medium"
                  }`}
                >
                  <span className="truncate">{section.label}</span>
                  <span
                    className={`text-[10px] transition-colors ml-2 ${
                      isActive ? "text-red-500 font-bold" : "text-slate-400 group-hover:text-slate-600"
                    }`}
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </a>
              );
            })}
          </nav>

          <div className="mt-5 pt-4 border-t border-slate-100">
            <div className="p-3 bg-slate-900 text-white rounded-xl text-xs space-y-2">
              <p className="font-bold text-slate-100 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                Need Fast Recovery?
              </p>
              <p className="text-[11px] text-slate-300 leading-snug">
                Send an advocate legal notice citing Section 19 Copyright Act and MSME delayed payment laws within 24 hours.
              </p>
              <a
                href="#heading-template-block"
                className="inline-block text-[11px] font-semibold text-red-400 hover:text-red-300 underline"
              >
                View Demand Notice Draft &darr;
              </a>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
