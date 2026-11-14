"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const ARBITRATION_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-overview", label: "STATUTORY OVERVIEW" },
  { id: "heading-court-rulings", label: "JUDICIAL PRECEDENTS" },
  { id: "heading-enforceability-rules", label: "ENFORCEABILITY MANDATES" },
  { id: "heading-arbitration-flowchart", label: "STATUTORY PIPELINE" },
  { id: "heading-notice-to-award-playbook", label: "5-STEP PLAYBOOK" },
  { id: "heading-statutory-table", label: "ARBITRATION TIMELINES" },
  { id: "heading-arbitration-tabs", label: "BOTTLENECKS & REMEDIES" },
  { id: "heading-worked-case", label: "PORTFOLIO CASE STUDY" },
  { id: "heading-evidence-checklist", label: "EVIDENTIARY AUDIT" },
  { id: "heading-faqs", label: "ARBITRATION FAQS" },
  { id: "heading-sources", label: "STATUTORY SOURCES" },
];

interface ArbitrationLoanTOCProps {
  sections?: TOCSection[];
}

export default function ArbitrationLoanTOC({
  sections = ARBITRATION_TOC_SECTIONS,
}: ArbitrationLoanTOCProps) {
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
          aria-label="Table of Contents Navigation"
          className="w-full flex items-center justify-between px-4 py-2.5 bg-white border border-slate-300 rounded-xl shadow-xs text-xs font-bold text-slate-800 tracking-wide cursor-pointer"
        >
          <span className="flex items-center gap-2 truncate">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse shrink-0" />
            <span className="text-slate-500 font-normal">Section:</span>
            <span className="truncate">{activeSection.label}</span>
          </span>
          <span className={`transform transition-transform duration-200 text-slate-400 font-bold ml-2 shrink-0 ${isOpen ? "rotate-180" : ""}`}>
            ▼
          </span>
        </button>

        {isOpen && (
          <div className="absolute left-0 right-0 top-full mt-1.5 bg-white border border-slate-200 rounded-xl shadow-xl overflow-hidden max-h-[60vh] overflow-y-auto divide-y divide-slate-100 z-40">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={(e) => scrollToSection(e, section.id)}
                className={`block px-4 py-3 text-xs font-semibold transition-colors ${
                  activeId === section.id
                    ? "bg-red-50 text-red-600 font-bold"
                    : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                {section.label}
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Desktop Sticky Sidebar Table of Contents */}
      <aside
        aria-label="Table of Contents"
        className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start bg-white rounded-2xl border border-slate-200 p-5 shadow-sm"
      >
        <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-200">
          <span className="w-2.5 h-2.5 rounded-full bg-red-600" />
          <h2 className="text-xs font-black uppercase tracking-wider text-slate-900">
            Navigation Index
          </h2>
        </div>
        <nav className="space-y-1">
          {sections.map((section) => {
            const isActive = activeId === section.id;
            return (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={(e) => scrollToSection(e, section.id)}
                className={`group flex items-center justify-between px-3 py-2 text-xs font-semibold rounded-lg transition-all ${
                  isActive
                    ? "bg-red-50 text-[#DC2626] font-bold border-l-2 border-[#DC2626]"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                <span className="truncate">{section.label}</span>
                <span
                  className={`text-[10px] font-mono transition-opacity ${
                    isActive ? "opacity-100 text-[#DC2626]" : "opacity-0 group-hover:opacity-100 text-slate-400"
                  }`}
                >
                  →
                </span>
              </a>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
