"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const CHEQUE_CIVIL_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-doctrine-overview", label: "DUAL REMEDY DOCTRINE" },
  { id: "heading-comparison-matrix", label: "COMPARISON MATRIX" },
  { id: "heading-creditor-personas", label: "WHICH ROUTE FOR YOU" },
  { id: "heading-section-138-deepdive", label: "SECTION 138 NI ACT" },
  { id: "heading-order-37-deepdive", label: "ORDER 37 SUMMARY SUIT" },
  { id: "heading-double-recovery", label: "DOUBLE RECOVERY RULES" },
  { id: "heading-simultaneous-flow", label: "DUAL-TRACK FLOWCHART" },
  { id: "heading-route-explorer", label: "ROUTE EXPLORER" },
  { id: "heading-order-digest", label: "SUPREME COURT RULINGS" },
  { id: "heading-worked-example", label: "WORKED CASE STUDY" },
  { id: "heading-evidence-checklist", label: "EVIDENCE CHECKLIST" },
  { id: "heading-faqs", label: "FAQS" },
  { id: "heading-sources", label: "STATUTORY REFERENCES" },
];

interface CivilSuitChequeTOCProps {
  sections?: TOCSection[];
}

export default function CivilSuitChequeTOC({
  sections = CHEQUE_CIVIL_TOC_SECTIONS,
}: CivilSuitChequeTOCProps) {
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
      const yOffset = -90; // offset for navbar
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
          aria-label="Table of contents menu"
          className="w-full flex items-center justify-between px-4 py-3 bg-white border border-slate-300 rounded-xl shadow-xs text-left"
        >
          <div className="flex items-center gap-2 overflow-hidden">
            <span className="w-2 h-2 rounded-full bg-[#DC2626] shrink-0" />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Jump to:</span>
            <span className="text-xs font-bold text-slate-900 truncate">
              {activeSection?.label}
            </span>
          </div>
          <span className="text-slate-500 text-xs font-bold ml-2 shrink-0">
            {isOpen ? "▲" : "▼"}
          </span>
        </button>

        {isOpen && (
          <div className="absolute left-0 right-0 mt-1 max-h-80 overflow-y-auto bg-white border border-slate-200 rounded-xl shadow-xl z-40 py-2 divide-y divide-slate-100">
            {sections.map((section) => {
              const isActive = section.id === activeId;
              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => scrollToSection(e, section.id)}
                  className={`block px-4 py-2.5 text-xs font-medium transition-colors ${
                    isActive
                      ? "text-[#DC2626] font-bold bg-red-50/60"
                      : "text-slate-700 hover:text-slate-900 hover:bg-slate-50"
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
        className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start bg-white border border-slate-200 rounded-2xl p-5 shadow-xs"
      >
        <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100">
          <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
          <p className="text-xs font-extrabold uppercase tracking-wider text-slate-900">
            Navigation Index
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
                className={`group flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold transition-all ${
                  isActive
                    ? "bg-red-50 text-[#DC2626] font-bold shadow-xs border-l-2 border-[#DC2626]"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                <span className="truncate">{section.label}</span>
                {isActive && (
                  <span className="text-[10px] text-[#DC2626] font-bold shrink-0 ml-1">●</span>
                )}
              </a>
            );
          })}
        </nav>

        <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] text-slate-500 leading-relaxed">
          <p>
            <strong className="text-slate-700 block mb-0.5">Dual-Track Recovery:</strong>
            Simultaneous criminal &amp; civil enforcement is recognized by the Supreme Court of India.
          </p>
        </div>
      </aside>
    </>
  );
}
