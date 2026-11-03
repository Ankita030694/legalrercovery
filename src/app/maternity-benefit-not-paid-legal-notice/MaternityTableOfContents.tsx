"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const MATERNITY_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-statutory-overview", label: "STATUTORY RIGHTS" },
  { id: "heading-order-digest", label: "COURT RULINGS" },
  { id: "heading-pattern-analysis", label: "PATTERN ANALYSIS" },
  { id: "heading-decision-tree", label: "DECISION TREE" },
  { id: "heading-playbook", label: "5-STEP PLAYBOOK" },
  { id: "heading-deadlines-table", label: "STATUTORY MANDATES" },
  { id: "heading-problem-picker", label: "DISPUTE SCENARIOS" },
  { id: "heading-worked-example", label: "WORKED EXAMPLE" },
  { id: "heading-evidence-checklist", label: "EVIDENCE CHECKLIST" },
  { id: "heading-faqs", label: "FAQ" },
  { id: "heading-sources", label: "STATUTORY REFS" },
];

interface MaternityTableOfContentsProps {
  sections?: TOCSection[];
}

export default function MaternityTableOfContents({
  sections = MATERNITY_TOC_SECTIONS,
}: MaternityTableOfContentsProps) {
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
      const yOffset = -90; // offset for 80px fixed navbar + breathing room
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
          className="w-full flex items-center justify-between px-4 py-2.5 bg-white border border-slate-300 rounded-xl shadow-xs text-xs font-bold text-slate-800 transition-colors"
        >
          <div className="flex items-center gap-2 truncate">
            <span className="w-2 h-2 rounded-full bg-red-600 shrink-0" />
            <span className="text-slate-500 uppercase tracking-wider text-[10px]">Jump to:</span>
            <span className="truncate text-slate-900">{activeSection.label}</span>
          </div>
          <span
            className={`text-slate-400 text-xs transition-transform duration-200 ml-2 shrink-0 ${
              isOpen ? "rotate-180" : ""
            }`}
          >
            ▼
          </span>
        </button>

        {isOpen && (
          <div className="absolute left-0 right-0 mt-1 max-h-72 overflow-y-auto bg-white border border-slate-200 rounded-xl shadow-xl z-40 p-1.5 space-y-0.5">
            {sections.map((section) => {
              const isSelected = activeId === section.id;
              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => scrollToSection(e, section.id)}
                  className={`block px-3 py-2 rounded-lg text-xs font-semibold transition-colors ${
                    isSelected
                      ? "bg-red-50 text-red-700 font-bold"
                      : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
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
        aria-label="Table of Contents"
        className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start bg-white border border-slate-200 rounded-2xl p-5 shadow-xs"
      >
        <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100">
          <span className="w-2 h-2 rounded-full bg-red-600" />
          <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
            On This Page
          </h2>
        </div>
        <nav className="space-y-1">
          {sections.map((section) => {
            const isSelected = activeId === section.id;
            return (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={(e) => scrollToSection(e, section.id)}
                className={`group flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold transition-all ${
                  isSelected
                    ? "bg-red-50 text-red-700 font-bold border-l-2 border-red-600 pl-2.5"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                <span className="truncate">{section.label}</span>
                <span
                  className={`text-[10px] opacity-0 group-hover:opacity-100 transition-opacity ${
                    isSelected ? "opacity-100 text-red-600" : "text-slate-400"
                  }`}
                >
                  →
                </span>
              </a>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
