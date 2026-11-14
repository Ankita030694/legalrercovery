"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const EMPANELLED_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-overview", label: "SCHEME BILL FREEZES" },
  { id: "heading-decision-tree", label: "5-STAGE RECOVERY TREE" },
  { id: "heading-statutory-matrix", label: "STATUTORY MATRIX" },
  { id: "heading-scenario-tabs", label: "PORTAL FAILURE MODES" },
  { id: "heading-section-80-cpc", label: "SECTION 80 CPC NOTICE" },
  { id: "heading-article-226-writ", label: "ARTICLE 226 WRIT STRATEGY" },
  { id: "heading-worked-example", label: "RECONCILIATION LEDGER" },
  { id: "heading-evidence-checklist", label: "BSA S.63 EVIDENCE CHECKLIST" },
  { id: "heading-cta", label: "RECOVERY ACTIONS" },
  { id: "heading-faqs", label: "FAQ" },
  { id: "heading-sources", label: "STATUTORY SOURCES" },
];

interface HospitalEmpanelledTableOfContentsProps {
  sections?: TOCSection[];
}

export default function HospitalEmpanelledTableOfContents({
  sections = EMPANELLED_TOC_SECTIONS,
}: HospitalEmpanelledTableOfContentsProps) {
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
      const yOffset = -90; // offset for fixed 80px navbar + padding
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
      {/* Mobile Sticky Bar */}
      <div
        ref={dropdownRef}
        className="lg:hidden sticky top-20 z-30 w-full mb-6 py-2 bg-slate-50/95 backdrop-blur-sm select-none border-b border-slate-200"
      >
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Table of Contents navigation"
          className="w-full flex items-center justify-between px-4 py-2.5 bg-white border border-slate-200 rounded-xl shadow-sm text-left text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#DC2626]"
        >
          <span className="flex items-center gap-2 truncate">
            <span className="w-2 h-2 rounded-full bg-[#DC2626] shrink-0" />
            <span className="text-slate-500 font-normal">Section:</span>
            <span className="truncate text-slate-900 font-bold">{activeSection?.label}</span>
          </span>
          <svg
            className={`w-4 h-4 text-slate-500 transition-transform duration-200 shrink-0 ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {isOpen && (
          <div className="absolute left-0 right-0 mt-2 mx-1 bg-white border border-slate-200 rounded-xl shadow-xl z-40 max-h-80 overflow-y-auto divide-y divide-slate-100">
            {sections.map((section, idx) => {
              const isActive = section.id === activeId;
              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => scrollToSection(e, section.id)}
                  className={`block px-4 py-3 text-xs transition-colors ${
                    isActive
                      ? "bg-red-50 text-[#DC2626] font-bold border-l-4 border-[#DC2626]"
                      : "text-slate-700 hover:bg-slate-50 font-medium"
                  }`}
                >
                  <span className="text-[10px] text-slate-400 mr-2 font-mono">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  {section.label}
                </a>
              );
            })}
          </div>
        )}
      </div>

      {/* Desktop Sticky Aside */}
      <aside
        aria-label="Table of Contents"
        className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start"
      >
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm max-h-[calc(100vh-8rem)] overflow-y-auto">
          <div className="flex items-center gap-2 pb-3.5 mb-3.5 border-b border-slate-100">
            <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
            <p className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Hospital Dues Navigation
            </p>
          </div>

          <nav className="space-y-1">
            {sections.map((section, idx) => {
              const isActive = section.id === activeId;
              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => scrollToSection(e, section.id)}
                  className={`group flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs transition-all duration-150 ${
                    isActive
                      ? "bg-[#DC2626] text-white font-bold shadow-sm"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 font-medium"
                  }`}
                >
                  <span
                    className={`text-[10px] font-mono shrink-0 transition-colors ${
                      isActive ? "text-red-100" : "text-slate-400 group-hover:text-slate-600"
                    }`}
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="truncate">{section.label}</span>
                </a>
              );
            })}
          </nav>

          <div className="mt-5 pt-4 border-t border-slate-100 text-[11px] text-slate-500 leading-relaxed">
            <p className="font-semibold text-slate-700 mb-1">Empanelled Recovery Desk</p>
            <p>Advocate-drafted Section 80 notices and Article 226 Mandamus preparation for hospitals.</p>
          </div>
        </div>
      </aside>
    </>
  );
}
