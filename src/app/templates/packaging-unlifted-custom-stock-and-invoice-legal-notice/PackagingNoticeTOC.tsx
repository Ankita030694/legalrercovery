"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const PACKAGING_NOTICE_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-notice-overview", label: "NOTICE OVERVIEW" },
  { id: "heading-notice-workspace", label: "INTERACTIVE BUILDER" },
  { id: "heading-ready-schedules", label: "INVOICE & WIP/FG TABLES" },
  { id: "heading-statutory-clauses", label: "5 STATUTORY CLAUSES" },
  { id: "heading-lift-or-scrap", label: "15-DAY LIFT / SCRAP SOP" },
  { id: "heading-evidence-dossier", label: "EVIDENCE & BSA s.63" },
  { id: "heading-dispatch-matrix", label: "RPAD & SERVICE MATRIX" },
  { id: "heading-dual-cta", label: "ADVOCATE DISPATCH" },
  { id: "heading-related-links", label: "RELATED GUIDES & TOOLS" },
  { id: "heading-faqs", label: "FAQ" },
  { id: "heading-sources", label: "STATUTORY SOURCES" },
];

interface PackagingNoticeTOCProps {
  sections?: TOCSection[];
}

export default function PackagingNoticeTOC({
  sections = PACKAGING_NOTICE_TOC_SECTIONS,
}: PackagingNoticeTOCProps) {
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
      const yOffset = -96;
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
      {/* Mobile Sticky Dropdown Bar */}
      <div
        ref={dropdownRef}
        className="lg:hidden sticky top-20 z-30 bg-slate-50/95 backdrop-blur-sm border-b border-slate-200 py-3 px-4 -mx-4 sm:-mx-6 mb-4 select-none"
      >
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          className="w-full flex items-center justify-between bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-left shadow-sm"
        >
          <div className="flex items-center gap-2 min-w-0">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#DC2626] shrink-0">
              Section:
            </span>
            <span className="text-xs font-bold text-slate-900 truncate">
              {activeSection?.label}
            </span>
          </div>
          <svg
            className={`w-4 h-4 text-slate-500 transition-transform shrink-0 ${
              isOpen ? "rotate-180" : ""
            }`}
            width={16}
            height={16}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {isOpen && (
          <nav
            aria-label="Template sections"
            className="mt-2 bg-white border border-slate-200 rounded-xl shadow-lg p-2 max-h-72 overflow-y-auto"
          >
            <ul className="space-y-1">
              {sections.map((sec) => {
                const isActive = activeId === sec.id;
                return (
                  <li key={sec.id}>
                    <a
                      href={`#${sec.id}`}
                      onClick={(e) => scrollToSection(e, sec.id)}
                      className={`block px-3 py-2 rounded-lg text-xs transition-colors ${
                        isActive
                          ? "bg-[#DC2626] text-white font-bold shadow-sm"
                          : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                      }`}
                    >
                      {sec.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        )}
      </div>

      {/* Desktop Sticky Sidebar TOC */}
      <aside className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start">
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
          <p className="text-[11px] font-extrabold uppercase tracking-widest text-slate-400 mb-3">
            Template Workspace Guide
          </p>
          <nav aria-label="On this page">
            <ul className="space-y-1.5">
              {sections.map((sec) => {
                const isActive = activeId === sec.id;
                return (
                  <li key={sec.id}>
                    <a
                      href={`#${sec.id}`}
                      onClick={(e) => scrollToSection(e, sec.id)}
                      className={`block px-3 py-2 rounded-xl text-xs transition-all ${
                        isActive
                          ? "bg-[#DC2626] text-white font-bold shadow-sm"
                          : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                      }`}
                    >
                      {sec.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
}
