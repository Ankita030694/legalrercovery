"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const PROMISSORY_NOTE_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-overview", label: "OVERVIEW" },
  { id: "heading-annotated-sample", label: "ANNOTATED SAMPLE" },
  { id: "heading-interactive-workspace", label: "LIVE TEMPLATE WORKSPACE" },
  { id: "heading-mandatory-elements", label: "ESSENTIAL CLAUSES" },
  { id: "heading-stamp-duty-rules", label: "STAMP DUTY & SEC 35" },
  { id: "heading-common-mistakes", label: "FATAL MISTAKES" },
  { id: "heading-summary-suit-cpc", label: "ORDER 37 SUMMARY SUIT" },
  { id: "heading-worked-example", label: "WORKED CASE STUDY" },
  { id: "heading-court-precedents", label: "COURT PRECEDENTS" },
  { id: "heading-evidence-checklist", label: "EVIDENCE CHECKLIST" },
  { id: "heading-faqs", label: "FAQS" },
  { id: "heading-sources", label: "STATUTORY SOURCES" },
];

interface PromissoryNoteTableOfContentsProps {
  sections?: TOCSection[];
}

export default function PromissoryNoteTableOfContents({
  sections = PROMISSORY_NOTE_TOC_SECTIONS,
}: PromissoryNoteTableOfContentsProps) {
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
      const headerOffset = 100;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveId(id);
      setIsOpen(false);
    }
  };

  const activeLabel = sections.find((s) => s.id === activeId)?.label || "SECTIONS";

  return (
    <>
      {/* Mobile Sticky Floating Bar */}
      <div className="lg:hidden w-full sticky top-16 z-30 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 py-2.5 px-4 mb-6 shadow-md" ref={dropdownRef}>
        <div className="flex items-center justify-between">
          <span className="text-xs uppercase tracking-wider text-slate-400 font-medium">
            Jump to section:
          </span>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800 text-slate-200 text-xs font-semibold hover:bg-slate-700 transition-colors border border-slate-700 cursor-pointer"
            aria-expanded={isOpen}
            aria-label="Table of Contents Menu"
          >
            <span className="truncate max-w-[180px] text-red-400">{activeLabel}</span>
            <svg
              className={`w-3.5 h-3.5 transform transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="mt-2 py-2 bg-slate-900 border border-slate-700 rounded-xl shadow-2xl max-h-72 overflow-y-auto space-y-1">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={(e) => scrollToSection(e, section.id)}
                className={`block px-4 py-2 text-xs font-medium transition-colors ${
                  activeId === section.id
                    ? "bg-red-500/10 text-red-400 font-bold border-l-2 border-red-500"
                    : "text-slate-300 hover:bg-slate-800 hover:text-white"
                }`}
              >
                {section.label}
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Desktop Sticky Sidebar */}
      <aside
        aria-label="Promissory Note Page Navigation"
        className="hidden lg:block lg:w-64 xl:w-72 sticky top-28 shrink-0 self-start"
      >
        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
            <h3 className="text-xs uppercase tracking-wider font-extrabold text-slate-700">
              Contents &amp; Formats
            </h3>
            <span className="text-[10px] uppercase font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded-full border border-red-200">
              NI Act §4
            </span>
          </div>
          <nav className="space-y-1">
            {sections.map((section) => {
              const isActive = activeId === section.id;
              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => scrollToSection(e, section.id)}
                  className={`group flex items-center justify-between px-3 py-2 text-xs rounded-lg transition-all ${
                    isActive
                      ? "bg-slate-900 text-white font-semibold shadow-sm"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 font-medium"
                  }`}
                >
                  <span className="truncate">{section.label}</span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0 ml-2" />
                  )}
                </a>
              );
            })}
          </nav>

          <div className="mt-5 pt-4 border-t border-slate-100">
            <p className="text-[11px] text-slate-500 leading-snug">
              Need recovery of a defaulted promissory note? An advocate demand notice sets the basis for an Order 37 summary suit.
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}
