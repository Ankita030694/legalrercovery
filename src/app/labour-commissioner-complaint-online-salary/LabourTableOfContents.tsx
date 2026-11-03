"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const LABOUR_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-overview", label: "LEGAL OVERVIEW" },
  { id: "heading-order-digest", label: "COURT PRECEDENTS" },
  { id: "heading-pattern-analysis", label: "WINNING EVIDENCE" },
  { id: "heading-escalation-flow", label: "ESCALATION FLOW" },
  { id: "heading-playbook", label: "5-STEP PLAYBOOK" },
  { id: "heading-deadlines-table", label: "HELPLINES & RULES" },
  { id: "heading-state-portals", label: "STATE PORTAL SELECTOR" },
  { id: "heading-worked-example", label: "WORKED CASE STUDY" },
  { id: "heading-evidence-checklist", label: "DOCUMENT CHECKLIST" },
  { id: "heading-faqs", label: "FAQ" },
  { id: "heading-sources", label: "STATUTORY SOURCES" },
];

interface LabourTableOfContentsProps {
  sections?: TOCSection[];
}

export default function LabourTableOfContents({
  sections = LABOUR_TOC_SECTIONS,
}: LabourTableOfContentsProps) {
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
          className="w-full flex items-center justify-between px-4 py-3 bg-white border border-slate-200 rounded-xl shadow-xs text-left"
          aria-expanded={isOpen}
          aria-label="Toggle Table of Contents"
        >
          <div className="flex items-center gap-2 overflow-hidden">
            <span className="w-2 h-2 rounded-full bg-red-600 shrink-0" />
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider shrink-0">
              Jump To Section:
            </span>
            <span className="text-xs font-bold text-slate-900 truncate">
              {activeSection.label}
            </span>
          </div>
          <span className={`text-slate-400 font-bold transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}>
            ▼
          </span>
        </button>

        {isOpen && (
          <div className="absolute left-0 right-0 mt-1 max-h-72 overflow-y-auto bg-white border border-slate-200 rounded-xl shadow-xl z-40 py-2 divide-y divide-slate-100">
            {sections.map((s) => {
              const isActive = activeId === s.id;
              return (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  onClick={(e) => scrollToSection(e, s.id)}
                  className={`block px-4 py-2.5 text-xs font-medium transition-colors ${
                    isActive
                      ? "text-red-600 bg-red-50/70 font-bold"
                      : "text-slate-700 hover:text-red-600 hover:bg-slate-50"
                  }`}
                >
                  {s.label}
                </a>
              );
            })}
          </div>
        )}
      </div>

      {/* Desktop Sticky Sidebar Table of Contents */}
      <aside
        className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-24 self-start bg-white border border-slate-200 rounded-2xl p-5 shadow-xs"
        aria-label="Table of Contents"
      >
        <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100">
          <span className="w-2 h-2 rounded-full bg-red-600" />
          <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-800">
            Guide Navigation
          </h2>
        </div>
        <nav>
          <ul className="space-y-1 text-xs">
            {sections.map((s) => {
              const isActive = activeId === s.id;
              return (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    onClick={(e) => scrollToSection(e, s.id)}
                    className={`block py-2 px-3 rounded-lg transition-all duration-150 font-semibold ${
                      isActive
                        ? "text-red-600 bg-red-50 font-bold translate-x-1"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                    }`}
                  >
                    {s.label}
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
