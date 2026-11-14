"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const BULK_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-overview", label: "OVERVIEW" },
  { id: "heading-legal-framework", label: "LEGAL FRAMEWORK" },
  { id: "heading-multi-channel", label: "TRI-CHANNEL DISPATCH" },
  { id: "heading-risk-analysis", label: "PORTFOLIO BUCKETS" },
  { id: "heading-workflow", label: "ENTERPRISE WORKFLOW" },
  { id: "heading-timelines", label: "STATUTORY TIMELINES" },
  { id: "heading-portfolio-tabs", label: "DEFAULT SCENARIOS" },
  { id: "heading-case-study", label: "RECOVERY CASE STUDY" },
  { id: "heading-evidence-checklist", label: "EVIDENCE & AUDIT" },
  { id: "heading-faqs", label: "FAQS" },
  { id: "heading-sources", label: "STATUTORY REFS" },
];

interface BulkTableOfContentsProps {
  sections?: TOCSection[];
}

export default function BulkTableOfContents({
  sections = BULK_TOC_SECTIONS,
}: BulkTableOfContentsProps) {
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

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full">
      {/* Mobile Accordion / Dropdown */}
      <div className="lg:hidden mb-6 relative" ref={dropdownRef}>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between px-4 py-3 bg-white border border-slate-200 rounded-xl shadow-sm text-left text-sm font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-red-600 cursor-pointer"
          aria-expanded={isOpen}
          aria-label="Toggle Table of Contents"
        >
          <span className="flex items-center gap-2">
            <svg
              className="w-4 h-4 text-red-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
            <span>Table of Contents</span>
          </span>
          <span className="text-xs text-red-600 font-semibold flex items-center gap-1">
            {sections.find((s) => s.id === activeId)?.label || "Menu"}
            <svg
              className={`w-4 h-4 transform transition-transform duration-200 ${
                isOpen ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </span>
        </button>

        {isOpen && (
          <div className="absolute left-0 right-0 mt-2 bg-white border border-slate-200 rounded-xl shadow-xl z-50 max-h-80 overflow-y-auto py-2">
            {sections.map((section) => {
              const isActive = activeId === section.id;
              return (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left px-4 py-2.5 text-xs font-bold transition-colors cursor-pointer flex items-center justify-between ${
                    isActive
                      ? "bg-red-50 text-red-600 border-l-4 border-red-600"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  <span>{section.label}</span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>
                  )}
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Desktop Sticky Sidebar List */}
      <nav
        aria-label="Table of Contents"
        className="hidden lg:block bg-white rounded-2xl border border-slate-200 p-5 shadow-sm"
      >
        <div className="flex items-center gap-2 pb-4 mb-3 border-b border-slate-100">
          <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></div>
          <p className="text-xs font-black tracking-wider uppercase text-slate-800">
            Quick Navigation
          </p>
        </div>

        <ul className="space-y-1">
          {sections.map((section) => {
            const isActive = activeId === section.id;
            return (
              <li key={section.id}>
                <button
                  type="button"
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all cursor-pointer flex items-center justify-between ${
                    isActive
                      ? "bg-red-50 text-red-600 font-bold"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  <span className="truncate">{section.label}</span>
                  {isActive && (
                    <svg
                      className="w-3.5 h-3.5 text-red-600 flex-shrink-0 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
