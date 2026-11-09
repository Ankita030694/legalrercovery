"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const HOSTEL_REFUND_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-overview", label: "OVERVIEW" },
  { id: "heading-court-rulings", label: "COURT RULINGS" },
  { id: "heading-pattern-analysis", label: "PATTERN ANALYSIS" },
  { id: "heading-resolution-rail", label: "RESOLUTION RAIL" },
  { id: "heading-playbook", label: "5-STEP PLAYBOOK" },
  { id: "heading-deadlines-matrix", label: "REFUND DEADLINES" },
  { id: "heading-dispute-scenarios", label: "DISPUTE SCENARIOS" },
  { id: "heading-case-study", label: "WORKED CASE STUDY" },
  { id: "heading-evidence-checklist", label: "EVIDENCE CHECKLIST" },
  { id: "heading-faqs", label: "FAQ" },
  { id: "heading-sources", label: "STATUTORY REFS" },
];

interface HostelRefundTableOfContentsProps {
  sections?: TOCSection[];
}

export default function HostelRefundTableOfContents({
  sections = HOSTEL_REFUND_TOC_SECTIONS,
}: HostelRefundTableOfContentsProps) {
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
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveId(id);
      setIsOpen(false);
    }
  };

  const activeSection = sections.find((s) => s.id === activeId) || sections[0];

  return (
    <aside className="w-full lg:w-72 shrink-0">
      {/* Mobile Sticky Dropdown Navigation (< lg) */}
      <div className="lg:hidden sticky top-20 z-30 mb-6 bg-white/95 backdrop-blur-md border border-slate-200 rounded-xl p-3 shadow-md" ref={dropdownRef}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 overflow-hidden">
            <span className="w-2 h-2 rounded-full bg-[#DC2626] shrink-0" />
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider shrink-0">
              Section:
            </span>
            <span className="text-xs font-extrabold text-slate-900 truncate">
              {activeSection?.label}
            </span>
          </div>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="px-3 py-1 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors flex items-center gap-1.5 shrink-0"
            aria-expanded={isOpen}
            aria-label="Toggle Table of Contents"
          >
            <span>Navigate</span>
            <span className={`text-[10px] transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}>
              ▼
            </span>
          </button>
        </div>

        {isOpen && (
          <div className="mt-3 pt-3 border-t border-slate-100 max-h-64 overflow-y-auto space-y-1">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={(e) => scrollToSection(e, section.id)}
                className={`block px-2.5 py-1.5 text-xs rounded-lg transition-all ${
                  activeId === section.id
                    ? "bg-red-50 text-[#DC2626] font-bold"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                {section.label}
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Desktop Sticky Sidebar (>= lg) */}
      <div className="hidden lg:block sticky top-28 bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <span className="text-xs font-extrabold text-slate-900 uppercase tracking-wider flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
            Table of Contents
          </span>
          <span className="text-[11px] font-semibold text-slate-400">
            {sections.length} Sections
          </span>
        </div>

        <nav aria-label="Table of Contents Navigation" className="space-y-1">
          {sections.map((section, idx) => {
            const isActive = activeId === section.id;
            return (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={(e) => scrollToSection(e, section.id)}
                className={`group flex items-center justify-between px-3 py-2 text-xs rounded-xl transition-all duration-150 ${
                  isActive
                    ? "bg-red-50 text-[#DC2626] font-extrabold shadow-xs"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900 font-medium"
                }`}
              >
                <div className="flex items-center gap-2.5 truncate">
                  <span
                    className={`text-[10px] font-mono shrink-0 ${
                      isActive ? "text-red-500 font-bold" : "text-slate-400 group-hover:text-slate-600"
                    }`}
                  >
                    {(idx + 1).toString().padStart(2, "0")}
                  </span>
                  <span className="truncate">{section.label}</span>
                </div>
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] shrink-0" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Quick Advocate Assistance Card */}
        <div className="pt-4 border-t border-slate-100">
          <div className="p-3.5 bg-slate-50 border border-slate-200/80 rounded-xl space-y-2">
            <div className="flex items-center gap-1.5 text-[#DC2626] font-bold text-[11px]">
              <span>⚖</span>
              <span>Hostel Recovery Desk</span>
            </div>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              Colleges cannot forfeit unearned room rent or food charges under UGC mandates and Consumer Protection Act rulings.
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}
