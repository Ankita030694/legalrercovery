"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const RELIEVING_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-overview", label: "OVERVIEW" },
  { id: "heading-email-workspace", label: "EMAIL WORKSPACE" },
  { id: "heading-clause-breakdown", label: "CLAUSE NOTES" },
  { id: "heading-resolution-flow", label: "RESOLUTION RAIL" },
  { id: "heading-escalation-ladder", label: "ESCALATION LADDER" },
  { id: "heading-deadlines-table", label: "STATUTORY BENCHMARKS" },
  { id: "heading-worked-example", label: "WORKED CASE" },
  { id: "heading-evidence-checklist", label: "EVIDENCE CHECKLIST" },
  { id: "heading-faqs", label: "FAQS" },
  { id: "heading-sources", label: "STATUTORY REFS" },
];

interface RelievingLetterTableOfContentsProps {
  sections?: TOCSection[];
}

export default function RelievingLetterTableOfContents({
  sections = RELIEVING_TOC_SECTIONS,
}: RelievingLetterTableOfContentsProps) {
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
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -90;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveId(id);
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Desktop Sticky Sidebar Navigation */}
      <aside
        aria-label="Table of Contents"
        className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start max-h-[calc(100vh-8rem)] overflow-y-auto pr-3 py-2 scrollbar-thin"
      >
        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs">
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100">
            <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
            <p className="text-xs font-black uppercase tracking-wider text-slate-800">
              Page Navigation
            </p>
          </div>

          <nav className="space-y-1">
            {sections.map((s) => {
              const isActive = activeId === s.id;
              return (
                <button
                  key={s.id}
                  onClick={() => scrollToSection(s.id)}
                  className={`w-full text-left px-3 py-2 rounded-xl text-xs font-semibold transition-all flex items-center justify-between ${
                    isActive
                      ? "bg-slate-900 text-white font-bold shadow-xs"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                  }`}
                >
                  <span className="truncate">{s.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />}
                </button>
              );
            })}
          </nav>
        </div>
      </aside>

      {/* Mobile Sticky Top Dropdown Menu */}
      <div
        ref={dropdownRef}
        className="lg:hidden sticky top-16 z-30 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 px-4 py-3 shadow-xs mb-6"
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between px-4 py-2.5 bg-slate-100 rounded-xl border border-slate-200 text-xs font-bold text-slate-800"
          aria-expanded={isOpen}
          aria-label="Table of Contents Navigation"
        >
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
            <span>
              {sections.find((s) => s.id === activeId)?.label || "Page Navigation"}
            </span>
          </span>
          <span className="text-slate-500">{isOpen ? "▲" : "▼"}</span>
        </button>

        {isOpen && (
          <div className="mt-2 bg-white rounded-xl border border-slate-200 p-2 shadow-xl space-y-1 max-h-64 overflow-y-auto">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollToSection(s.id)}
                className={`w-full text-left px-3 py-2 rounded-lg text-xs font-semibold ${
                  activeId === s.id
                    ? "bg-slate-900 text-white font-bold"
                    : "text-slate-700 hover:bg-slate-100"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
