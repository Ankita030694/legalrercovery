"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const EVENT_TICKET_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-quick-summary", label: "STATUTORY SUMMARY" },
  { id: "heading-key-benchmarks", label: "KEY FACTS TABLE" },
  { id: "heading-legal-framework", label: "LEGAL LIABILITIES" },
  { id: "heading-myth-vs-fact", label: "MYTH VS FACT" },
  { id: "heading-problem-tabs", label: "SCENARIO PICKER" },
  { id: "heading-svg-escalation", label: "RECOVERY WORKFLOW" },
  { id: "heading-resolution-playbook", label: "5-STEP PLAYBOOK" },
  { id: "heading-case-citations", label: "JUDICIAL PRECEDENTS" },
  { id: "heading-worked-example", label: "WORKED EXAMPLE" },
  { id: "heading-evidence-checklist", label: "EVIDENCE CHECKLIST" },
  { id: "heading-faqs", label: "FAQS" },
  { id: "heading-sources", label: "LEGAL REFERENCES" },
];

interface EventTicketTableOfContentsProps {
  sections?: TOCSection[];
}

export default function EventTicketTableOfContents({
  sections = EVENT_TICKET_TOC_SECTIONS,
}: EventTicketTableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>(sections[0]?.id || "");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

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
      const yOffset = -100;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveId(id);
      setIsOpen(false);
    }
  };

  const activeSection = sections.find((s) => s.id === activeId) || sections[0];

  return (
    <>
      {/* Mobile Sticky Dropdown Header */}
      <div className="lg:hidden sticky top-20 z-40 mb-6" ref={dropdownRef}>
        <div className="bg-slate-900 border border-slate-700/80 rounded-xl shadow-xl overflow-hidden backdrop-blur-md">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="w-full px-4 py-3 flex items-center justify-between text-left text-sm font-semibold text-slate-100 bg-slate-900/90"
            aria-expanded={isOpen}
          >
            <div className="flex items-center gap-2 truncate pr-2">
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse flex-shrink-0" />
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider flex-shrink-0">
                ON THIS PAGE:
              </span>
              <span className="text-slate-100 truncate text-xs font-semibold">
                {activeSection?.label}
              </span>
            </div>
            <svg
              className={`w-4 h-4 text-slate-400 transition-transform duration-200 flex-shrink-0 ${
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
            <div className="border-t border-slate-800 max-h-64 overflow-y-auto divide-y divide-slate-800/60 bg-slate-950/95">
              {sections.map((section) => {
                const isActive = activeId === section.id;
                return (
                  <button
                    key={section.id}
                    type="button"
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full text-left px-4 py-2.5 text-xs font-medium transition-colors flex items-center justify-between ${
                      isActive
                        ? "bg-rose-950/60 text-rose-300 font-bold"
                        : "text-slate-300 hover:bg-slate-800/50 hover:text-white"
                    }`}
                  >
                    <span>{section.label}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Desktop Sticky Sidebar Navigation */}
      <nav
        aria-label="Table of contents"
        className="hidden lg:block sticky top-28 bg-white border border-slate-200/90 rounded-2xl p-5 shadow-sm"
      >
        <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100">
          <span className="w-2 h-2 rounded-full bg-rose-600" />
          <p className="text-xs font-black uppercase tracking-wider text-slate-900">
            Page Navigation
          </p>
        </div>

        <ul className="space-y-1">
          {sections.map((section) => {
            const isActive = activeId === section.id;
            return (
              <li key={section.id}>
                <button
                  type="button"
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-xs font-semibold transition-all duration-150 flex items-center justify-between ${
                    isActive
                      ? "bg-rose-50 text-rose-700 font-bold border-l-2 border-rose-600 pl-2.5"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  <span className="truncate">{section.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-rose-600 flex-shrink-0" />}
                </button>
              </li>
            );
          })}
        </ul>

        <div className="mt-5 pt-4 border-t border-slate-100">
          <p className="text-[11px] text-slate-500 font-medium leading-relaxed">
            Statutory redressal under Section 2(11) CPA 2019 &amp; E-Commerce Rules 2020.
          </p>
        </div>
      </nav>
    </>
  );
}
