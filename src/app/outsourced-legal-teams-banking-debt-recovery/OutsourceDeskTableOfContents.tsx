"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const OUTSOURCE_DESK_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-desk-overview", label: "OVERVIEW" },
  { id: "heading-judicial-directives", label: "JUDICIAL DIRECTIVES" },
  { id: "heading-operational-blueprint", label: "OPERATIONAL BLUEPRINT" },
  { id: "heading-virtual-architecture", label: "CELL ARCHITECTURE" },
  { id: "heading-playbook", label: "5-STAGE PLAYBOOK" },
  { id: "heading-sla-benchmarks", label: "SLA & TAT MATRIX" },
  { id: "heading-modular-desks", label: "VERTICAL DESKS" },
  { id: "heading-worked-example", label: "INSTITUTIONAL CASE STUDY" },
  { id: "heading-compliance-checklist", label: "COMPLIANCE CHECKLIST" },
  { id: "heading-faqs", label: "B2B FAQ" },
  { id: "heading-sources", label: "STATUTORY REFS" },
];

interface OutsourceDeskTableOfContentsProps {
  sections?: TOCSection[];
}

export default function OutsourceDeskTableOfContents({
  sections = OUTSOURCE_DESK_TOC_SECTIONS,
}: OutsourceDeskTableOfContentsProps) {
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
          className="w-full flex items-center justify-between px-4 py-3 bg-white border border-slate-200 rounded-xl shadow-xs text-xs font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400"
          aria-expanded={isOpen}
          aria-label="Toggle Table of Contents"
        >
          <div className="flex items-center gap-2 truncate">
            <span className="text-slate-400 font-medium">Topic:</span>
            <span className="text-red-700 truncate">{activeSection.label}</span>
          </div>
          <span className="shrink-0 text-slate-500 font-black ml-2">
            {isOpen ? "▲" : "▼"}
          </span>
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-1 max-h-72 overflow-y-auto bg-white border border-slate-200 rounded-xl shadow-xl z-40 p-2 divide-y divide-slate-100">
            {sections.map((section) => {
              const isActive = activeId === section.id;
              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => scrollToSection(e, section.id)}
                  className={`block px-3 py-2 text-xs font-semibold rounded-lg transition-colors ${
                    isActive
                      ? "bg-slate-900 text-white"
                      : "text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  {section.label}
                </a>
              );
            })}
          </div>
        )}
      </div>

      {/* Desktop Sticky Table of Contents Sidebar */}
      <aside
        className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs"
        aria-label="Table of Contents"
      >
        <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100">
          <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
          <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-900">
            Contents Navigation
          </h2>
        </div>

        <nav className="space-y-1">
          {sections.map((section) => {
            const isActive = activeId === section.id;
            return (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={(e) => scrollToSection(e, section.id)}
                className={`group flex items-center justify-between px-3 py-2 text-xs font-bold rounded-lg transition-all ${
                  isActive
                    ? "bg-slate-900 text-white shadow-xs"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                }`}
              >
                <span className="truncate">{section.label}</span>
                <span
                  className={`text-[10px] ml-2 font-mono transition-transform ${
                    isActive ? "text-red-400 translate-x-0.5" : "text-slate-400"
                  }`}
                >
                  →
                </span>
              </a>
            );
          })}
        </nav>

        <div className="mt-5 pt-4 border-t border-slate-100 text-[11px] text-slate-500 leading-relaxed">
          <span className="font-bold text-slate-700 block mb-1">B2B Litigative Ops</span>
          Virtual legal cells dedicated to Scheduled Commercial Banks, SFBs, and institutional NBFCs.
        </div>
      </aside>
    </>
  );
}
