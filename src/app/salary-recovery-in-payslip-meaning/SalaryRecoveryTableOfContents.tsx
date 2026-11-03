"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const SALARY_RECOVERY_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-meaning-overview", label: "MEANING & OVERVIEW" },
  { id: "heading-comparison-matrix", label: "COMPARISON MATRIX" },
  { id: "heading-personas", label: "WHICH APPLIES TO YOU" },
  { id: "heading-unlawful-recovery", label: "ILLEGAL DEDUCTIONS LAW" },
  { id: "heading-notice-pay-rule", label: "BASIC VS GROSS NOTICE" },
  { id: "heading-training-bond-rule", label: "TRAINING BONDS & S.74" },
  { id: "heading-order-digest", label: "COURT PRECEDENTS" },
  { id: "heading-escalation-flow", label: "RESOLUTION RAIL" },
  { id: "heading-playbook", label: "5-STEP PLAYBOOK" },
  { id: "heading-problem-picker", label: "SCENARIO DRILLDOWN" },
  { id: "heading-worked-example", label: "WORKED CASE STUDY" },
  { id: "heading-evidence-checklist", label: "EVIDENCE CHECKLIST" },
  { id: "heading-faqs", label: "FAQ" },
  { id: "heading-sources", label: "STATUTORY REFS" },
];

interface SalaryRecoveryTableOfContentsProps {
  sections?: TOCSection[];
}

export default function SalaryRecoveryTableOfContents({
  sections = SALARY_RECOVERY_TOC_SECTIONS,
}: SalaryRecoveryTableOfContentsProps) {
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
      const yOffset = -90; // offset for fixed header
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
          onClick={() => setIsOpen((prev) => !prev)}
          className="w-full flex items-center justify-between px-4 py-2.5 bg-white border border-slate-300 rounded-xl shadow-xs text-xs font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-red-500"
          aria-expanded={isOpen}
          aria-label="Table of Contents Menu"
        >
          <span className="flex items-center gap-2 truncate">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse shrink-0" />
            <span className="text-slate-500 uppercase tracking-wider text-[10px]">Jump To:</span>
            <span className="truncate text-slate-900">{activeSection.label}</span>
          </span>
          <span className={`transform transition-transform text-slate-400 ${isOpen ? "rotate-180" : ""}`}>
            ▼
          </span>
        </button>

        {isOpen && (
          <div className="absolute left-0 right-0 mt-1 max-h-72 overflow-y-auto bg-white border border-slate-200 rounded-xl shadow-xl z-40 py-1.5 divide-y divide-slate-100">
            {sections.map((section) => {
              const isActive = section.id === activeId;
              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => scrollToSection(e, section.id)}
                  className={`block px-4 py-2.5 text-xs font-semibold tracking-wide transition-colors ${
                    isActive
                      ? "text-red-700 bg-red-50 font-bold"
                      : "text-slate-700 hover:text-red-600 hover:bg-slate-50"
                  }`}
                >
                  {section.label}
                </a>
              );
            })}
          </div>
        )}
      </div>

      {/* Desktop Sticky Sidebar Table of Contents */}
      <aside
        aria-label="Table of Contents"
        className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start bg-white border border-slate-200/90 rounded-2xl p-5 shadow-xs"
      >
        <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100">
          <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
          <h3 className="text-xs font-black uppercase tracking-wider text-slate-900">
            Guide Index
          </h3>
        </div>
        <nav className="space-y-1">
          {sections.map((section) => {
            const isActive = section.id === activeId;
            return (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={(e) => scrollToSection(e, section.id)}
                className={`group flex items-center justify-between px-3 py-2 text-xs font-medium rounded-lg transition-all ${
                  isActive
                    ? "bg-red-50 text-red-700 font-bold border-l-3 border-red-600 pl-2.5"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                <span className="truncate">{section.label}</span>
                {isActive && (
                  <span className="text-[10px] text-red-600 font-bold shrink-0 ml-1">●</span>
                )}
              </a>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
