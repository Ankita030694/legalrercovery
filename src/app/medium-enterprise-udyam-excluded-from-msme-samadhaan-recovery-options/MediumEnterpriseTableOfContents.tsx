"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const MEDIUM_ENTERPRISE_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-statutory-trap", label: "Section 2(n) Supplier Trap" },
  { id: "heading-section-43bh", label: "Section 43B(h) Reality" },
  { id: "heading-silpi-graduation", label: "Silpi Industries & Graduation" },
  { id: "heading-4-alternatives", label: "4 Faster Recovery Routes" },
  { id: "heading-remedy-comparison", label: "Forum Comparison Matrix" },
  { id: "heading-statutory-timeline", label: "Timelines & Limitation Stops" },
  { id: "heading-preemption-matrix", label: "Neutralizing Debtor Bluffs" },
  { id: "heading-scenario-tabs", label: "4 Recovery Scenarios" },
  { id: "heading-cta", label: "Dual-Track Recovery Desk" },
  { id: "heading-faqs", label: "Frequently Asked Questions" },
  { id: "heading-precedents", label: "Judicial Precedents & Acts" },
];

interface MediumEnterpriseTableOfContentsProps {
  sections?: TOCSection[];
}

export default function MediumEnterpriseTableOfContents({
  sections = MEDIUM_ENTERPRISE_TOC_SECTIONS,
}: MediumEnterpriseTableOfContentsProps) {
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
      <div className="lg:hidden sticky top-20 z-30 bg-slate-50/95 backdrop-blur-sm border-b border-slate-200 py-3 px-4 -mx-4 sm:-mx-6 mb-4">
        <div className="relative" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between px-4 py-2.5 bg-white border border-slate-300 rounded-xl shadow-xs text-xs font-bold text-slate-800 text-left"
            aria-expanded={isOpen}
            aria-label="Table of contents selector"
          >
            <span className="flex items-center gap-2 truncate">
              <span className="w-2 h-2 rounded-full bg-[#DC2626] shrink-0" />
              <span className="truncate">{activeSection?.label || "Table of Contents"}</span>
            </span>
            <svg
              className={`w-4 h-4 ml-2 shrink-0 text-slate-500 transition-transform ${isOpen ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isOpen && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-slate-200 rounded-xl shadow-xl max-h-72 overflow-y-auto z-40 py-1.5 divide-y divide-slate-100">
              {sections.map((section) => {
                const isActive = section.id === activeId;
                return (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    onClick={(e) => scrollToSection(e, section.id)}
                    className={`block px-4 py-2 text-xs transition-colors ${
                      isActive
                        ? "bg-[#DC2626] text-white font-bold"
                        : "text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    {section.label}
                  </a>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Desktop Sticky Aside */}
      <aside
        className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start bg-white border border-slate-200 rounded-2xl p-5 shadow-xs"
        aria-label="Table of Contents"
      >
        <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100">
          <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
          <p className="text-xs font-black uppercase tracking-wider text-slate-900">
            Contents &middot; L1 Commentary
          </p>
        </div>
        <nav className="space-y-1">
          {sections.map((section) => {
            const isActive = section.id === activeId;
            return (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={(e) => scrollToSection(e, section.id)}
                className={`block px-3 py-2 rounded-lg text-xs transition-all ${
                  isActive
                    ? "bg-[#DC2626] text-white font-bold shadow-xs"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                {section.label}
              </a>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
