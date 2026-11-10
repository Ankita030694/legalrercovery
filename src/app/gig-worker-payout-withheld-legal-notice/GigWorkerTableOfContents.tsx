"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const GIG_WORKER_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-rights-overview", label: "OVERVIEW" },
  { id: "heading-scenario-cards", label: "SCENARIO CARDS" },
  { id: "heading-legal-basis", label: "STATUTORY BASIS" },
  { id: "heading-escalation-rail", label: "RESOLUTION RAIL" },
  { id: "heading-playbook", label: "5-STEP PLAYBOOK" },
  { id: "heading-deductions-table", label: "PAYOUT DEADLINES" },
  { id: "heading-mistakes-to-avoid", label: "MISTAKES TO AVOID" },
  { id: "heading-worked-example", label: "WORKED EXAMPLE" },
  { id: "heading-evidence-checklist", label: "EVIDENCE CHECKLIST" },
  { id: "heading-faqs", label: "FAQS" },
  { id: "heading-sources", label: "STATUTORY REFS" },
];

interface GigWorkerTableOfContentsProps {
  sections?: TOCSection[];
}

export default function GigWorkerTableOfContents({
  sections = GIG_WORKER_TOC_SECTIONS,
}: GigWorkerTableOfContentsProps) {
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
          aria-controls="mobile-toc-dropdown"
          className="w-full flex items-center justify-between px-4 py-2.5 bg-white border border-slate-300 rounded-xl shadow-xs text-xs font-bold text-slate-800"
        >
          <div className="flex items-center gap-2 truncate">
            <span className="w-2 h-2 rounded-full bg-red-600 shrink-0" />
            <span className="text-slate-500 font-semibold uppercase tracking-wider text-[10px]">
              ON THIS PAGE:
            </span>
            <span className="text-slate-900 truncate">{activeSection?.label}</span>
          </div>
          <svg
            className={`w-4 h-4 text-slate-500 transition-transform duration-200 shrink-0 ${
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
            className="absolute left-0 right-0 mt-2 bg-white border border-slate-200 rounded-2xl shadow-xl p-2 z-40 max-h-72 overflow-y-auto"
          >
            {sections.map((section) => {
              const isActive = activeId === section.id;
              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => scrollToSection(e, section.id)}
                  className={`block px-3 py-2 rounded-lg text-xs font-bold transition-colors ${
                    isActive
                      ? "bg-red-50 text-red-600 border border-red-200"
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

      {/* Desktop Sticky Sidebar Table of Contents */}
      <aside className="hidden lg:block w-64 shrink-0 sticky top-28 select-none" aria-label="Table of Contents">
        <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-xs">
          <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100">
            <div className="w-2 h-2 rounded-full bg-red-600" />
            <p className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500">
              Guide Navigation
            </p>
          </div>
          <nav className="space-y-1">
            {sections.map((section) => {
              const isActive = activeId === section.id;
              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => scrollToSection(e, section.id)}
                  className={`flex items-center justify-between px-3 py-2 rounded-lg text-xs font-bold transition-all ${
                    isActive
                      ? "bg-red-50 text-red-600 font-extrabold shadow-xs"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  <span className="truncate">{section.label}</span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-red-600 shrink-0 ml-2" />
                  )}
                </a>
              );
            })}
          </nav>
        </div>
      </aside>
    </>
  );
}
