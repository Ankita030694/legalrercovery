"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const SOLAR_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-overview", label: "OVERVIEW" },
  { id: "heading-decision-tree", label: "DECISION FLOWCHART" },
  { id: "heading-statutory-table", label: "STATUTORY BENCHMARKS" },
  { id: "heading-legal-framework", label: "LEGAL RIGHTS & SECTIONS" },
  { id: "heading-problem-tabs", label: "DISPUTE SCENARIOS" },
  { id: "heading-escalation-playbook", label: "5-STEP RECOVERY PLAYBOOK" },
  { id: "heading-case-citations", label: "COURT ORDERS DIGEST" },
  { id: "heading-worked-example", label: "WORKED RECOVERY EXAMPLE" },
  { id: "heading-evidence-checklist", label: "EVIDENCE CHECKLIST" },
  { id: "heading-faqs", label: "FREQUENTLY ASKED QUESTIONS" },
  { id: "heading-sources", label: "STATUTORY REFERENCES" },
];

interface SolarInstallerTableOfContentsProps {
  sections?: TOCSection[];
}

export default function SolarInstallerTableOfContents({
  sections = SOLAR_TOC_SECTIONS,
}: SolarInstallerTableOfContentsProps) {
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
      const yOffset = -90; // offset for fixed navbar + breathing room
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
          aria-label="Table of contents selector"
          className="w-full flex items-center justify-between px-4 py-2.5 bg-white border border-slate-300 rounded-xl shadow-sm text-xs font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#DC2626]"
        >
          <span className="flex items-center gap-2 truncate">
            <span className="w-2 h-2 rounded-full bg-[#DC2626]"></span>
            <span className="text-slate-500 uppercase font-mono text-[10px]">SECTION:</span>
            <span className="truncate text-slate-900">{activeSection.label}</span>
          </span>
          <svg
            className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {isOpen && (
          <div className="absolute left-0 right-0 mt-1 max-h-72 overflow-y-auto bg-white border border-slate-200 rounded-xl shadow-xl z-40 py-1.5 divide-y divide-slate-100">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={(e) => scrollToSection(e, s.id)}
                className={`block px-4 py-2.5 text-xs font-semibold transition-colors ${
                  activeId === s.id
                    ? "text-[#DC2626] bg-red-50/80 font-bold"
                    : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                {s.label}
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Desktop Sticky Sidebar Navigation */}
      <aside className="hidden lg:block sticky top-28 self-start w-full bg-white rounded-2xl border border-slate-200/90 p-5 shadow-sm">
        <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100">
          <span className="w-2 h-2 rounded-full bg-[#DC2626]"></span>
          <span className="text-[11px] font-black uppercase tracking-widest text-slate-700">
            PAGE NAVIGATION
          </span>
        </div>
        <nav aria-label="Table of contents" className="space-y-1">
          {sections.map((s) => {
            const isActive = activeId === s.id;
            return (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={(e) => scrollToSection(e, s.id)}
                className={`group flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                  isActive
                    ? "bg-red-50 text-[#DC2626] font-bold shadow-xs border-l-2 border-[#DC2626]"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                <span className="truncate">{s.label}</span>
                <span
                  className={`text-[10px] font-mono transition-opacity ${
                    isActive ? "opacity-100 text-[#DC2626]" : "opacity-0 group-hover:opacity-60"
                  }`}
                >
                  →
                </span>
              </a>
            );
          })}
        </nav>

        <div className="mt-6 pt-4 border-t border-slate-100">
          <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-200/60">
            <span className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
              Need Direct Legal Action?
            </span>
            <p className="text-xs text-slate-600 mb-2.5">
              Serve a verified advocate demand notice to your solar vendor within 24 hours.
            </p>
            <a
              href="#heading-escalation-playbook"
              className="inline-flex items-center text-xs font-bold text-[#DC2626] hover:underline"
            >
              View Legal Steps &rarr;
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}
