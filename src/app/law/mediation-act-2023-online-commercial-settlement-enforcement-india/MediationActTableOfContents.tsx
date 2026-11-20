"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const MEDIATION_ACT_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-informal-mou-trap", label: "INFORMAL MOU TRAP" },
  { id: "heading-section-27-30-framework", label: "SEC 27 & 30 FRAMEWORK" },
  { id: "heading-120-day-timeline", label: "120-DAY CLOCK & SEC 29" },
  { id: "heading-msa-vs-mou-conciliation", label: "MOU VS CONCILIATION VS MSA" },
  { id: "heading-online-odr-workflow", label: "ONLINE ODR WORKFLOW" },
  { id: "heading-scenario-tabs", label: "4 CREDITOR SCENARIOS" },
  { id: "heading-precedents-and-12a", label: "PRECEDENTS & SEC 12A" },
  { id: "heading-sec28-preemption", label: "SEC 28 DEFENSE SHIELD" },
  { id: "heading-msa-checklist", label: "10-POINT MSA CHECKLIST" },
  { id: "heading-faqs", label: "FAQ" },
  { id: "heading-sources", label: "STATUTORY SOURCES" },
];

interface MediationActTableOfContentsProps {
  sections?: TOCSection[];
}

export default function MediationActTableOfContents({
  sections = MEDIATION_ACT_TOC_SECTIONS,
}: MediationActTableOfContentsProps) {
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
      window.history.pushState(null, "", `#${id}`);
      setActiveId(id);
      setIsOpen(false);
    }
  };

  const activeSection = sections.find((s) => s.id === activeId) || sections[0];

  return (
    <>
      {/* Mobile / Tablet Sticky Dropdown TOC */}
      <div
        ref={dropdownRef}
        className="lg:hidden sticky top-20 z-30 bg-slate-50/95 backdrop-blur-sm border-b border-slate-200 py-3 px-4 -mx-4 sm:-mx-6 mb-4 select-none"
      >
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          className="w-full flex items-center justify-between gap-2 px-4 py-2.5 rounded-xl bg-white border border-slate-200 shadow-sm text-xs font-bold uppercase tracking-wider text-slate-800"
        >
          <span className="truncate">
            <span className="text-[#DC2626] mr-1.5">Section:</span>
            {activeSection?.label}
          </span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            className={`shrink-0 text-slate-500 transition-transform ${isOpen ? "rotate-180" : ""}`}
            aria-hidden="true"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>

        {isOpen && (
          <nav
            aria-label="Mobile table of contents"
            className="mt-2 bg-white border border-slate-200 rounded-xl shadow-lg p-2 max-h-72 overflow-y-auto space-y-1"
          >
            {sections.map((section) => {
              const isActive = activeId === section.id;
              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => scrollToSection(e, section.id)}
                  className={`block px-3 py-2 rounded-lg text-xs font-semibold transition-colors ${
                    isActive
                      ? "bg-[#DC2626] text-white font-bold shadow-sm"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  {section.label}
                </a>
              );
            })}
          </nav>
        )}
      </div>

      {/* Desktop Sticky Sidebar TOC */}
      <aside
        aria-label="Table of contents"
        className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start bg-white border border-slate-200 rounded-2xl p-5 shadow-sm"
      >
        <p className="text-[11px] font-extrabold uppercase tracking-widest text-slate-400 mb-3 px-2">
          Mediation Act 2023 Guide
        </p>
        <nav className="space-y-1">
          {sections.map((section) => {
            const isActive = activeId === section.id;
            return (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={(e) => scrollToSection(e, section.id)}
                className={`block px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                  isActive
                    ? "bg-[#DC2626] text-white font-bold shadow-sm"
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
