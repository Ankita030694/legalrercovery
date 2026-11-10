"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const EPF_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-overview", label: "OVERVIEW" },
  { id: "heading-court-orders", label: "COURT PRECEDENTS" },
  { id: "heading-pattern-analysis", label: "PATTERN ANALYSIS" },
  { id: "heading-escalation-flow", label: "RESOLUTION RAIL" },
  { id: "heading-playbook", label: "5-STEP PLAYBOOK" },
  { id: "heading-comparison-deadlines", label: "2026 TIMELINES" },
  { id: "heading-rejection-bottlenecks", label: "REJECTION CAUSES" },
  { id: "heading-worked-example", label: "WORKED EXAMPLE" },
  { id: "heading-evidence-checklist", label: "EVIDENCE CHECKLIST" },
  { id: "heading-faqs", label: "FAQ" },
  { id: "heading-sources", label: "STATUTORY REFS" },
];

interface EpfTableOfContentsProps {
  sections?: TOCSection[];
}

export default function EpfTableOfContents({
  sections = EPF_TOC_SECTIONS,
}: EpfTableOfContentsProps) {
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
      const yOffset = -90; // offset for 80px fixed navbar + padding
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
          aria-label="Table of Contents Navigation"
          className="w-full flex items-center justify-between px-4 py-3 bg-white border border-slate-300 rounded-xl shadow-sm text-left transition-colors hover:border-slate-400"
        >
          <div className="flex items-center gap-2.5 truncate">
            <span className="w-2 h-2 rounded-full bg-[#DC2626] shrink-0" />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Jump to Section:
            </span>
            <span className="text-xs font-extrabold text-slate-900 truncate">
              {activeSection.label}
            </span>
          </div>
          <svg
            className={`w-4 h-4 text-slate-500 transition-transform duration-200 shrink-0 ml-2 ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {isOpen && (
          <div className="absolute left-0 right-0 mt-2 bg-white border border-slate-200 rounded-xl shadow-xl overflow-hidden z-40 max-h-80 overflow-y-auto divide-y divide-slate-100">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={(e) => scrollToSection(e, section.id)}
                className={`flex items-center justify-between px-4 py-3 text-xs font-bold transition-colors ${
                  activeId === section.id
                    ? "bg-red-50 text-[#DC2626]"
                    : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                <span>{section.label}</span>
                {activeId === section.id && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
                )}
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Desktop Sticky Sidebar Table of Contents */}
      <aside
        aria-label="Table of contents"
        className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start max-h-[calc(100vh-8rem)] overflow-y-auto pr-2"
      >
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
          <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100">
            <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
            <p className="text-xs font-black uppercase tracking-wider text-slate-900">
              On This Page
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
                  className={`group flex items-center justify-between px-3 py-2 rounded-lg text-xs font-bold transition-all ${
                    isActive
                      ? "bg-red-50 text-[#DC2626] font-black"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  <span className="truncate">{section.label}</span>
                  <span
                    className={`w-1.5 h-1.5 rounded-full transition-all shrink-0 ml-2 ${
                      isActive
                        ? "bg-[#DC2626] scale-125"
                        : "bg-transparent group-hover:bg-slate-300"
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          <div className="mt-6 pt-4 border-t border-slate-100 text-center">
            <p className="text-[11px] text-slate-500 font-medium leading-relaxed">
              Statutory legal remedy for stuck PF withdrawals, rejected Form 19/10C claims, and employer defaults.
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}
