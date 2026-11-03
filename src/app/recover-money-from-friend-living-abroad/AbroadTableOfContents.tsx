"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const ABROAD_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-jurisdiction-overview", label: "JURISDICTION" },
  { id: "heading-case-precedents", label: "COURT PRECEDENTS" },
  { id: "heading-limitation-section15", label: "LIMITATION EXCLUSION" },
  { id: "heading-cross-border-flow", label: "RECOVERY TIMELINE" },
  { id: "heading-step-playbook", label: "5-STEP PLAYBOOK" },
  { id: "heading-legal-framework-table", label: "TREATIES & DEADLINES" },
  { id: "heading-problem-scenarios", label: "OVERSEAS SCENARIOS" },
  { id: "heading-worked-example", label: "WORKED EXAMPLE" },
  { id: "heading-evidence-checklist", label: "EVIDENCE CHECKLIST" },
  { id: "heading-faqs", label: "FAQ" },
  { id: "heading-sources", label: "STATUTORY REFS" },
];

interface AbroadTableOfContentsProps {
  sections?: TOCSection[];
}

export default function AbroadTableOfContents({
  sections = ABROAD_TOC_SECTIONS,
}: AbroadTableOfContentsProps) {
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
      const yOffset = -90;
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
      {/* Mobile Sticky Dropdown */}
      <div
        ref={dropdownRef}
        className="lg:hidden sticky top-20 z-30 w-full mb-6 py-2 bg-slate-50/95 backdrop-blur-sm select-none"
      >
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Table of Contents Navigation"
          className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl border border-slate-300 bg-white shadow-xs text-xs font-bold text-slate-800"
        >
          <span className="flex items-center gap-2 truncate">
            <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
            <span className="text-slate-500 uppercase tracking-wider text-[10px]">Jump To:</span>
            <span className="truncate">{activeSection.label}</span>
          </span>
          <span className={`transform transition-transform text-slate-500 ${isOpen ? "rotate-180" : ""}`}>
            ▼
          </span>
        </button>

        {isOpen && (
          <nav
            aria-label="Table of contents mobile"
            className="absolute left-0 right-0 top-full mt-1 bg-white border border-slate-200 rounded-xl shadow-xl p-2 z-40 max-h-72 overflow-y-auto space-y-1"
          >
            {sections.map((section) => {
              const isCurrent = section.id === activeId;
              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => scrollToSection(e, section.id)}
                  className={`block px-3 py-2 rounded-lg text-xs font-semibold transition-colors ${
                    isCurrent
                      ? "bg-red-50 text-[#DC2626] font-bold"
                      : "text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  {section.label}
                </a>
              );
            })}
          </nav>
        )}
      </div>

      {/* Desktop Sticky Sidebar */}
      <aside
        aria-label="Table of contents desktop"
        className="hidden lg:block w-full lg:w-64 xl:w-72 shrink-0 sticky top-28 select-none"
      >
        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-3">
          <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
            <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
            <span className="text-xs font-extrabold uppercase tracking-wider text-slate-900">
              Guide Navigation
            </span>
          </div>

          <nav className="space-y-1 text-xs">
            {sections.map((section) => {
              const isCurrent = section.id === activeId;
              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => scrollToSection(e, section.id)}
                  className={`flex items-center justify-between px-3 py-2 rounded-lg font-medium transition-colors ${
                    isCurrent
                      ? "bg-red-50 text-[#DC2626] font-bold border-l-2 border-[#DC2626]"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  <span className="truncate">{section.label}</span>
                  {isCurrent && <span className="text-[#DC2626] font-bold text-sm">→</span>}
                </a>
              );
            })}
          </nav>
        </div>
      </aside>
    </>
  );
}
