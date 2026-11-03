"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const LIMITATION_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-overview", label: "OVERVIEW" },
  { id: "heading-myths-facts", label: "MYTH VS FACT" },
  { id: "heading-case-citations", label: "COURT PRECEDENTS" },
  { id: "heading-resolution-flow", label: "RESOLUTION RAIL" },
  { id: "heading-playbook", label: "5-STEP PLAYBOOK" },
  { id: "heading-statutory-table", label: "LIMITATION MATRIX" },
  { id: "heading-scenario-tabs", label: "EXTENSION SCENARIOS" },
  { id: "heading-worked-example", label: "WORKED EXAMPLE" },
  { id: "heading-evidence-checklist", label: "EVIDENCE CHECKLIST" },
  { id: "heading-faqs", label: "FAQ" },
  { id: "heading-sources", label: "STATUTORY REFS" },
];

interface LimitationTableOfContentsProps {
  sections?: TOCSection[];
}

export default function LimitationTableOfContents({
  sections = LIMITATION_TOC_SECTIONS,
}: LimitationTableOfContentsProps) {
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
          aria-controls="mobile-toc-dropdown"
          className="w-full flex items-center justify-between px-4 py-3 bg-white border border-slate-300 rounded-xl shadow-xs text-left"
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Jump to Section:
            </span>
            <span className="text-xs font-extrabold text-slate-900 truncate max-w-[200px] sm:max-w-xs">
              {activeSection?.label}
            </span>
          </div>
          <svg
            className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${
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
          <div
            id="mobile-toc-dropdown"
            className="absolute top-full left-0 right-0 mt-1 max-h-72 overflow-y-auto bg-white border border-slate-200 rounded-xl shadow-xl z-50 p-2 space-y-1"
          >
            {sections.map((sec) => (
              <a
                key={sec.id}
                href={`#${sec.id}`}
                onClick={(e) => scrollToSection(e, sec.id)}
                className={`block px-3 py-2 rounded-lg text-xs font-bold transition-colors ${
                  activeId === sec.id
                    ? "bg-red-50 text-[#DC2626]"
                    : "text-slate-600 hover:bg-slate-50"
                }`}
              >
                {sec.label}
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Desktop Sticky Sidebar Table of Contents */}
      <aside className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start">
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
          <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100">
            <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-900">
              Table of Contents
            </h3>
          </div>
          <nav aria-label="Table of Contents">
            <ul className="space-y-1 text-xs font-semibold">
              {sections.map((sec) => (
                <li key={sec.id}>
                  <a
                    href={`#${sec.id}`}
                    onClick={(e) => scrollToSection(e, sec.id)}
                    className={`block px-3 py-2 rounded-lg transition-all ${
                      activeId === sec.id
                        ? "bg-red-50 text-[#DC2626] font-extrabold border-l-3 border-[#DC2626]"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                    }`}
                  >
                    {sec.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-6 pt-4 border-t border-slate-100">
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
              <span className="text-[10px] font-black uppercase tracking-wider text-slate-500 block mb-1">
                Statutory Benchmark
              </span>
              <p className="text-[11px] text-slate-700 leading-relaxed">
                Section 18 &amp; 19 reset the 3-year limitation clock if triggered before the original limitation expires.
              </p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
