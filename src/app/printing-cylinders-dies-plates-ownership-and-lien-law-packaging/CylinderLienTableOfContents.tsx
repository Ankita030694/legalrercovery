"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const CYLINDER_LIEN_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-ownership-doctrine", label: "OWNERSHIP VS CONTRIBUTION" },
  { id: "heading-statutory-matrix", label: "STATUTORY LIEN MAP" },
  { id: "heading-bare-act-timelines", label: "STATUTORY TIMELINES" },
  { id: "heading-precedents", label: "SC & COURT PRECEDENTS" },
  { id: "heading-scenario-tabs", label: "4 DISPUTE SCENARIOS" },
  { id: "heading-copyright-vs-copper", label: "ARTWORK IP VS COPPER" },
  { id: "heading-dechroming-storage", label: "STORAGE & DE-CHROMING" },
  { id: "heading-defense-preemption", label: "DEFENSE PRE-EMPTION" },
  { id: "heading-dual-cta", label: "INITIATE LIEN NOTICE" },
  { id: "heading-faqs", label: "FAQ" },
  { id: "heading-sources", label: "STATUTORY SOURCES" },
];

interface CylinderLienTableOfContentsProps {
  sections?: TOCSection[];
}

export default function CylinderLienTableOfContents({
  sections = CYLINDER_LIEN_TOC_SECTIONS,
}: CylinderLienTableOfContentsProps) {
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
      {/* Mobile / Tablet Sticky Dropdown Bar */}
      <div
        ref={dropdownRef}
        className="lg:hidden sticky top-20 z-30 bg-slate-50/95 backdrop-blur-sm border-b border-slate-200 py-3 px-4 -mx-4 sm:-mx-6 mb-4 select-none"
      >
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between px-4 py-3 bg-white border border-slate-200 rounded-xl shadow-sm hover:border-slate-300 transition-colors"
          aria-expanded={isOpen}
          aria-label="Toggle cylinder ownership and lien law table of contents"
        >
          <div className="flex items-center gap-2.5 min-w-0">
            <span className="w-2 h-2 rounded-full bg-[#DC2626] shrink-0 animate-pulse" />
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 shrink-0">
              Section:
            </span>
            <span className="text-xs font-bold text-slate-900 truncate">
              {activeSection?.label}
            </span>
          </div>
          <svg
            width="16"
            height="16"
            className={`w-4 h-4 text-slate-500 transition-transform duration-200 shrink-0 ml-2 ${
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
          <nav
            aria-label="Mobile section navigation"
            className="mt-2 bg-white border border-slate-200 rounded-xl shadow-xl p-2 max-h-72 overflow-y-auto"
          >
            <ul className="space-y-1">
              {sections.map((sec) => {
                const isActive = sec.id === activeId;
                return (
                  <li key={sec.id}>
                    <a
                      href={`#${sec.id}`}
                      onClick={(e) => scrollToSection(e, sec.id)}
                      className={`block px-3 py-2 rounded-lg text-xs tracking-wide transition-colors ${
                        isActive
                          ? "bg-[#DC2626] text-white font-bold shadow-sm"
                          : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 font-medium"
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

      {/* Desktop Sticky Left Sidebar TOC (strictly <p>/<span>, zero h2/h3/h4) */}
      <aside className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start">
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
          <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100">
            <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
            <p className="text-[11px] font-extrabold uppercase tracking-widest text-slate-500">
              Statute &amp; Lien Index
            </p>
          </div>
          <nav aria-label="Desktop section navigation">
            <ul className="space-y-1">
              {sections.map((sec) => {
                const isActive = sec.id === activeId;
                return (
                  <li key={sec.id}>
                    <a
                      href={`#${sec.id}`}
                      onClick={(e) => scrollToSection(e, sec.id)}
                      className={`block px-3 py-2 rounded-lg text-xs tracking-wide transition-all duration-150 ${
                        isActive
                          ? "bg-[#DC2626] text-white font-bold shadow-sm"
                          : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 font-medium"
                      }`}
                    >
                      {sec.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="mt-4 pt-4 border-t border-slate-100">
            <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
              Creditor Desk (IND-22)
            </span>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              Annotated for flexible packaging converters, cylinder engravers &amp; mono-carton die makers.
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}
