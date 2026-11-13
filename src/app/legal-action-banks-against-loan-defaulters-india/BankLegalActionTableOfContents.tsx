"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const BANK_LEGAL_ACTION_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-statutory-overview", label: "OVERVIEW" },
  { id: "heading-judicial-rulings", label: "COURT RULINGS" },
  { id: "heading-strategic-analysis", label: "STRATEGIC MATRIX" },
  { id: "heading-escalation-flow", label: "RESOLUTION RAIL" },
  { id: "heading-playbook", label: "5-STEP PLAYBOOK" },
  { id: "heading-remedy-comparison", label: "REMEDY MATRIX" },
  { id: "heading-remedy-picker", label: "CHANNEL SELECTOR" },
  { id: "heading-worked-example", label: "WORKED EXAMPLE" },
  { id: "heading-evidence-checklist", label: "EVIDENCE CHECKLIST" },
  { id: "heading-faqs", label: "FAQ" },
  { id: "heading-sources", label: "STATUTORY REFS" },
];

interface BankLegalActionTableOfContentsProps {
  sections?: TOCSection[];
}

export default function BankLegalActionTableOfContents({
  sections = BANK_LEGAL_ACTION_TOC_SECTIONS,
}: BankLegalActionTableOfContentsProps) {
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
      const top = el.getBoundingClientRect().top + window.scrollY - 110;
      window.scrollTo({ top, behavior: "smooth" });
      setActiveId(id);
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Sticky Dropdown Navigation */}
      <div className="lg:hidden w-full sticky top-16 z-30 bg-slate-900 border-b border-slate-800 px-4 py-2.5 shadow-md">
        <div className="relative" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between px-3.5 py-2 text-xs font-semibold text-slate-200 bg-slate-800 rounded-lg border border-slate-700 hover:bg-slate-750 transition-colors"
            aria-expanded={isOpen}
          >
            <span className="truncate">
              Jump to:{" "}
              <strong className="text-white">
                {sections.find((s) => s.id === activeId)?.label || "Sections"}
              </strong>
            </span>
            <span
              className={`transform transition-transform text-slate-400 text-xs ${
                isOpen ? "rotate-180" : ""
              }`}
            >
              ▼
            </span>
          </button>

          {isOpen && (
            <div className="absolute left-0 right-0 mt-1.5 bg-slate-900 border border-slate-700 rounded-xl shadow-2xl overflow-hidden max-h-72 overflow-y-auto z-40">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => scrollToSection(e, section.id)}
                  className={`block px-4 py-2.5 text-xs font-medium border-b border-slate-800 last:border-b-0 transition-colors ${
                    activeId === section.id
                      ? "bg-red-950/70 text-red-400 font-bold"
                      : "text-slate-300 hover:bg-slate-800 hover:text-white"
                  }`}
                >
                  {section.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Desktop Sticky Sidebar Navigation */}
      <aside
        aria-label="Table of Contents"
        className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start bg-white border border-slate-200 rounded-2xl p-5 shadow-sm"
      >
        <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100">
          <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
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
                  className={`text-[10px] tracking-tight ${
                    isActive ? "text-[#DC2626]" : "text-slate-400 group-hover:text-slate-600"
                  }`}
                >
                  →
                </span>
              </a>
            );
          })}
        </nav>

        <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] text-slate-500 leading-relaxed">
          <strong className="text-slate-700 block mb-1">Bank Strategy Desk</strong>
          Comparative matrix across SARFAESI, DRT, Section 138 NI, Order 37 CPC &amp; Arbitration.
        </div>
      </aside>
    </>
  );
}
