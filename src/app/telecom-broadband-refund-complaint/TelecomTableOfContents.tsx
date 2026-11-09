"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const TELECOM_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-routes-comparison", label: "COMPARISON MATRIX" },
  { id: "heading-persona-fit", label: "WHICH ROUTE FOR YOU" },
  { id: "heading-appellate-deepdive", label: "TRAI APPELLATE ROUTE" },
  { id: "heading-legal-notice-deepdive", label: "ADVOCATE NOTICE" },
  { id: "heading-consumer-court-deepdive", label: "CONSUMER COURT (E-JAGRITI)" },
  { id: "heading-tdsat-civil-deepdive", label: "TDSAT & CIVIL FORUMS" },
  { id: "heading-court-orders", label: "VERIFIED ORDERS" },
  { id: "heading-pattern-analysis", label: "WINNING PATTERNS" },
  { id: "heading-deadlines-table", label: "TRAI RULES & DEADLINES" },
  { id: "heading-problem-picker", label: "DISPUTE PLAYBOOKS" },
  { id: "heading-worked-example", label: "WORKED CASE STUDY" },
  { id: "heading-evidence-checklist", label: "EVIDENCE CHECKLIST" },
  { id: "heading-faqs", label: "FAQ" },
  { id: "heading-sources", label: "STATUTORY REFS" },
];

interface TelecomTableOfContentsProps {
  sections?: TOCSection[];
}

export default function TelecomTableOfContents({
  sections = TELECOM_TOC_SECTIONS,
}: TelecomTableOfContentsProps) {
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
      const yOffset = -90; // offset for fixed navbar + breathing room
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
        {/* Dropdown Toggle Pill */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-toc-list"
          className="w-full flex items-center justify-between px-4 py-2.5 bg-white border border-slate-300 rounded-xl shadow-xs text-left"
        >
          <div className="flex items-center gap-2 min-w-0">
            <span className="w-2 h-2 rounded-full bg-[#DC2626] shrink-0" />
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider shrink-0">
              Jump to:
            </span>
            <span className="text-xs font-semibold text-slate-900 truncate">
              {activeSection.label}
            </span>
          </div>
          <svg
            className={`w-4 h-4 text-slate-500 shrink-0 transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* Dropdown Menu Panel */}
        {isOpen && (
          <div
            id="mobile-toc-list"
            className="absolute left-0 right-0 top-full mt-1 bg-white border border-slate-200 rounded-xl shadow-xl overflow-hidden max-h-72 overflow-y-auto z-40"
          >
            <div className="py-1">
              {sections.map((section) => {
                const isCurrent = activeId === section.id;
                return (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    onClick={(e) => scrollToSection(e, section.id)}
                    className={`block px-4 py-2 text-xs font-medium transition-colors ${
                      isCurrent
                        ? "bg-red-50 text-[#DC2626] font-bold border-l-4 border-[#DC2626]"
                        : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                    }`}
                  >
                    {section.label}
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Desktop Sticky Sidebar Table of Contents */}
      <aside
        aria-label="Table of Contents"
        className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start bg-white rounded-2xl border border-slate-200 p-5 shadow-xs"
      >
        <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100">
          <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
          <h3 className="text-xs font-black uppercase tracking-wider text-slate-900">
            Guide Navigation
          </h3>
        </div>

        <nav className="space-y-1">
          {sections.map((section) => {
            const isCurrent = activeId === section.id;
            return (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={(e) => scrollToSection(e, section.id)}
                className={`group flex items-center justify-between px-3 py-2 text-xs rounded-lg transition-all ${
                  isCurrent
                    ? "bg-red-50 text-[#DC2626] font-bold border-l-4 border-[#DC2626]"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                <span className="truncate">{section.label}</span>
                {isCurrent && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] shrink-0 ml-2" />
                )}
              </a>
            );
          })}
        </nav>

        <div className="mt-6 pt-4 border-t border-slate-100">
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 text-[11px] text-slate-600 leading-relaxed">
            <strong className="text-slate-900 block font-bold mb-1">TRAI Protection Clause</strong>
            Regulation 14 requires service providers to refund security deposits within 60 days with 10% annual penal interest.
          </div>
        </div>
      </aside>
    </>
  );
}
