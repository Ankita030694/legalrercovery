"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const INSTITUTIONAL_DEFAULTS_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-cro-overview", label: "CRO OVERVIEW" },
  { id: "heading-judicial-rulings", label: "LEGAL PRECEDENTS" },
  { id: "heading-recovery-levers", label: "RECOVERY LEVERS" },
  { id: "heading-deterrence-flow", label: "DETERRENCE RAIL" },
  { id: "heading-early-intervention-playbook", label: "5-STEP PLAYBOOK" },
  { id: "heading-dpd-timelines-table", label: "DPD & DEADLINES" },
  { id: "heading-delinquency-strategies", label: "PORTFOLIO TABS" },
  { id: "heading-institutional-case-study", label: "PORTFOLIO STUDY" },
  { id: "heading-evidence-checklist", label: "EVIDENCE CHECKLIST" },
  { id: "heading-faqs", label: "FAQ" },
  { id: "heading-sources", label: "STATUTORY REFS" },
];

interface InstitutionalDefaultsTableOfContentsProps {
  sections?: TOCSection[];
}

export default function InstitutionalDefaultsTableOfContents({
  sections = INSTITUTIONAL_DEFAULTS_TOC_SECTIONS,
}: InstitutionalDefaultsTableOfContentsProps) {
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
          aria-haspopup="true"
          className="w-full flex items-center justify-between px-4 py-3 bg-white border border-slate-300 rounded-xl shadow-xs text-left cursor-pointer transition-colors hover:border-slate-400"
        >
          <div className="flex items-center gap-2.5 min-w-0">
            <span className="shrink-0 w-2 h-2 rounded-full bg-red-600 animate-pulse" />
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500 shrink-0">
              Navigation:
            </span>
            <span className="text-xs sm:text-sm font-bold text-slate-900 truncate">
              {activeSection.label}
            </span>
          </div>
          <span
            className={`text-slate-500 font-bold text-xs shrink-0 transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          >
            ▼
          </span>
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-200 rounded-2xl shadow-xl p-2 z-40 max-h-80 overflow-y-auto">
            <ul className="space-y-1">
              {sections.map((section) => {
                const isSelected = section.id === activeId;
                return (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      onClick={(e) => scrollToSection(e, section.id)}
                      className={`block px-3 py-2 rounded-lg text-xs font-semibold transition-colors ${
                        isSelected
                          ? "bg-red-50 text-red-700 font-bold"
                          : "text-slate-700 hover:bg-slate-100"
                      }`}
                    >
                      {section.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>

      {/* Desktop Sticky Table of Contents Sidebar */}
      <aside className="w-64 shrink-0 hidden lg:block sticky top-28 self-start bg-white border border-slate-200 rounded-2xl p-4 shadow-xs">
        <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100">
          <span className="w-2 h-2 rounded-full bg-red-600" />
          <h3 className="text-xs font-black uppercase tracking-wider text-slate-900">
            Risk & Legal Guide
          </h3>
        </div>
        <nav aria-label="Table of Contents">
          <ul className="space-y-1">
            {sections.map((section) => {
              const isSelected = section.id === activeId;
              return (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    onClick={(e) => scrollToSection(e, section.id)}
                    className={`block px-3 py-2 rounded-lg text-xs transition-all ${
                      isSelected
                        ? "bg-red-50 text-red-700 font-bold border-l-2 border-red-600 pl-2.5"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-50 font-medium"
                    }`}
                  >
                    {section.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
    </>
  );
}
