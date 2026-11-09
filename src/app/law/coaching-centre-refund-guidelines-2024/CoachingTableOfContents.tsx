"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const COACHING_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-overview", label: "OVERVIEW" },
  { id: "heading-before-after", label: "BEFORE VS AFTER" },
  { id: "heading-timeline", label: "CHANGE TIMELINE" },
  { id: "heading-pro-rata-formula", label: "PRO-RATA FORMULA" },
  { id: "heading-problem-picker", label: "SCENARIO DRILLDOWN" },
  { id: "heading-grey-areas", label: "REGULATORY GREY AREAS" },
  { id: "heading-how-to-use", label: "HOW TO CLAIM" },
  { id: "heading-worked-example", label: "WORKED EXAMPLE" },
  { id: "heading-court-orders", label: "COURT ORDERS" },
  { id: "heading-evidence-checklist", label: "EVIDENCE CHECKLIST" },
  { id: "heading-scope", label: "PLATFORM SCOPE" },
  { id: "heading-faqs", label: "FAQS" },
  { id: "heading-sources", label: "STATUTORY REFS" },
];

interface CoachingTableOfContentsProps {
  sections?: TOCSection[];
}

export default function CoachingTableOfContents({
  sections = COACHING_TOC_SECTIONS,
}: CoachingTableOfContentsProps) {
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
          className="w-full flex items-center justify-between px-4 py-3 bg-white border border-slate-200 rounded-xl shadow-xs text-left"
        >
          <div className="flex items-center gap-2 truncate">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse flex-shrink-0" />
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Jump to Section:
            </span>
            <span className="text-xs font-semibold text-slate-900 truncate">
              {activeSection.label}
            </span>
          </div>
          <svg
            className={`w-4 h-4 text-slate-500 transition-transform duration-200 flex-shrink-0 ml-2 ${
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
            className="absolute left-0 right-0 mt-2 bg-white border border-slate-200 rounded-xl shadow-xl z-40 max-h-80 overflow-y-auto divide-y divide-slate-100"
          >
            {sections.map((section) => {
              const isSelected = activeId === section.id;
              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => scrollToSection(e, section.id)}
                  className={`block px-4 py-3 text-xs font-medium transition-colors ${
                    isSelected
                      ? "bg-red-50 text-red-700 font-bold border-l-4 border-red-600 pl-3"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  {section.label}
                </a>
              );
            })}
          </div>
        )}
      </div>

      {/* Desktop Sticky Sidebar Table of Contents */}
      <aside
        aria-label="Table of contents"
        className="hidden lg:block w-64 xl:w-72 flex-shrink-0 sticky top-28 self-start bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs"
      >
        <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100">
          <svg
            className="w-4 h-4 text-red-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
          <span className="text-xs font-extrabold uppercase tracking-wider text-slate-900">
            Contents Guide
          </span>
        </div>

        <nav className="space-y-1">
          {sections.map((section) => {
            const isSelected = activeId === section.id;
            return (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={(e) => scrollToSection(e, section.id)}
                className={`group flex items-center justify-between px-3 py-2 rounded-lg text-xs transition-all duration-150 ${
                  isSelected
                    ? "bg-red-50 text-red-700 font-bold shadow-xs"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900 font-medium"
                }`}
              >
                <span className="truncate">{section.label}</span>
                <span
                  className={`w-1.5 h-1.5 rounded-full transition-all ${
                    isSelected ? "bg-red-600 scale-125" : "bg-transparent group-hover:bg-slate-300"
                  }`}
                />
              </a>
            );
          })}
        </nav>

        <div className="mt-6 pt-4 border-t border-slate-100">
          <div className="rounded-xl bg-slate-50 p-3 border border-slate-200/60">
            <p className="text-[11px] font-bold text-slate-800 uppercase tracking-wider mb-1">
              Need Direct Recourse?
            </p>
            <p className="text-[11px] text-slate-600 leading-snug mb-3">
              Serve a legal demand notice under the MoE 2024 Guidelines and CPA 2019.
            </p>
            <a
              href="#heading-how-to-use"
              className="inline-flex items-center text-[11px] font-bold text-red-600 hover:text-red-700 hover:underline"
            >
              View step-by-step path →
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}
