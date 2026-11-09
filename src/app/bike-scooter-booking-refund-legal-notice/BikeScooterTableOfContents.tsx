"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const BIKE_SCOOTER_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-overview", label: "OVERVIEW" },
  { id: "heading-scenarios", label: "SCENARIO CARDS" },
  { id: "heading-legal-basis", label: "LEGAL BASIS" },
  { id: "heading-cancellation-disputes", label: "DISPUTE PATTERNS" },
  { id: "heading-escalation-flow", label: "RESOLUTION RAIL" },
  { id: "heading-step-by-step", label: "5-STEP PLAYBOOK" },
  { id: "heading-mistakes-to-avoid", label: "MISTAKES TO AVOID" },
  { id: "heading-benchmarks", label: "STATUTORY BENCHMARKS" },
  { id: "heading-case-digest", label: "COURT PRECEDENTS" },
  { id: "heading-problem-picker", label: "DISPUTE EXPLORER" },
  { id: "heading-worked-example", label: "WORKED EXAMPLE" },
  { id: "heading-evidence-checklist", label: "EVIDENCE CHECKLIST" },
  { id: "heading-faqs", label: "FAQ" },
  { id: "heading-sources", label: "STATUTORY REFS" },
];

interface BikeScooterTableOfContentsProps {
  sections?: TOCSection[];
}

export default function BikeScooterTableOfContents({
  sections = BIKE_SCOOTER_TOC_SECTIONS,
}: BikeScooterTableOfContentsProps) {
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0.1,
      }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -90;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const activeSection = sections.find((s) => s.id === activeId) || sections[0];

  return (
    <>
      {/* Mobile Floating Dropdown Pill */}
      <div className="lg:hidden sticky top-20 z-40 mb-6" ref={dropdownRef}>
        <div className="bg-slate-900/95 backdrop-blur-md border border-slate-700 rounded-xl shadow-xl p-2">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between px-3 py-2 text-left text-xs font-semibold text-slate-200 hover:text-white"
            aria-expanded={isOpen}
          >
            <div className="flex items-center gap-2 truncate">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse shrink-0" />
              <span className="text-[10px] uppercase tracking-wider text-slate-400">Jump to:</span>
              <span className="text-red-400 font-bold truncate">{activeSection?.label}</span>
            </div>
            <svg
              className={`w-4 h-4 text-slate-400 transition-transform duration-200 shrink-0 ${
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
            <div className="mt-2 pt-2 border-t border-slate-800 max-h-60 overflow-y-auto space-y-1">
              {sections.map((section) => {
                const isActive = activeId === section.id;
                return (
                  <button
                    key={section.id}
                    type="button"
                    onClick={() => scrollTo(section.id)}
                    className={`w-full text-left px-3 py-1.5 rounded text-xs transition-colors ${
                      isActive
                        ? "bg-red-950/60 text-red-400 font-bold border-l-2 border-red-500"
                        : "text-slate-300 hover:bg-slate-800/60 hover:text-white"
                    }`}
                  >
                    {section.label}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Desktop Sticky Sidebar */}
      <aside className="hidden lg:block w-64 shrink-0">
        <div className="sticky top-28 bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
          <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100">
            <span className="w-2 h-2 rounded-full bg-red-600" />
            <h3 className="text-xs font-black uppercase tracking-wider text-slate-900">
              Contents Guide
            </h3>
          </div>
          <nav className="space-y-1 text-xs font-medium">
            {sections.map((section) => {
              const isActive = activeId === section.id;
              return (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => scrollTo(section.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-150 flex items-center justify-between text-[11px] leading-snug ${
                    isActive
                      ? "bg-red-50 text-red-700 font-bold border-l-4 border-red-600 shadow-sm"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  <span className="truncate">{section.label}</span>
                  {isActive && <span className="text-red-600 text-xs">→</span>}
                </button>
              );
            })}
          </nav>
        </div>
      </aside>
    </>
  );
}
