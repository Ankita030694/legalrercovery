"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const WRONG_TRANSFER_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-orders-overview", label: "OVERVIEW" },
  { id: "heading-order-digest", label: "COURT ORDERS" },
  { id: "heading-pattern-analysis", label: "PATTERN ANALYSIS" },
  { id: "heading-escalation-flow", label: "RESOLUTION RAIL" },
  { id: "heading-playbook", label: "5-STEP PLAYBOOK" },
  { id: "heading-deadlines-table", label: "STATUTORY TIMELINES" },
  { id: "heading-problem-picker", label: "TRANSFER SCENARIOS" },
  { id: "heading-application-workspace", label: "APPLICATION WORKSPACE" },
  { id: "heading-clause-notes", label: "CLAUSE NOTES" },
  { id: "heading-worked-example", label: "WORKED EXAMPLE" },
  { id: "heading-evidence-checklist", label: "EVIDENCE CHECKLIST" },
  { id: "heading-faqs", label: "FAQ" },
  { id: "heading-sources", label: "STATUTORY REFS" },
];

interface WrongTransferTOCProps {
  sections?: TOCSection[];
}

export default function WrongTransferTOC({
  sections = WRONG_TRANSFER_TOC_SECTIONS,
}: WrongTransferTOCProps) {
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
      const yOffset = -90; // offset for fixed navbar + breathing room
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
        {/* Dropdown Toggle Pill */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Table of Contents Jump Menu"
          className="w-full flex items-center justify-between px-4 py-2.5 bg-white border border-slate-200 rounded-xl shadow-xs text-xs font-bold text-slate-800 hover:border-slate-300 transition-colors"
        >
          <span className="flex items-center gap-2 truncate">
            <span className="w-2 h-2 rounded-full bg-[#DC2626] animate-pulse" />
            <span className="text-[10px] uppercase tracking-wider text-slate-500 font-extrabold">Section:</span>
            <span className="text-slate-900 truncate">{activeSection?.label || "On this page"}</span>
          </span>
          <span className={`transform transition-transform duration-200 text-slate-400 ${isOpen ? "rotate-180" : ""}`}>
            ▾
          </span>
        </button>

        {/* Dropdown Menu Items */}
        {isOpen && (
          <div className="absolute left-0 right-0 mt-1.5 mx-0 bg-white border border-slate-200 rounded-xl shadow-xl max-h-72 overflow-y-auto py-1 z-40 divide-y divide-slate-100">
            {sections.map((section, idx) => {
              const isActive = activeId === section.id;
              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => scrollToSection(e, section.id)}
                  className={`flex items-center justify-between px-4 py-2.5 text-xs font-semibold transition-colors ${
                    isActive
                      ? "bg-[#404447]/10 text-[#404447] font-bold"
                      : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span className="text-[10px] text-slate-400 font-mono">0{idx + 1}</span>
                    <span>{section.label}</span>
                  </span>
                  {isActive && <span className="text-[#DC2626] text-xs">●</span>}
                </a>
              );
            })}
          </div>
        )}
      </div>

      {/* Desktop Sticky Sidebar Table of Contents */}
      <aside
        aria-label="Table of contents"
        className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start bg-white border border-slate-200 rounded-2xl p-5 shadow-xs"
      >
        <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-3">
          <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500">
            On This Page
          </span>
          <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
            {sections.length} Topics
          </span>
        </div>

        <nav className="space-y-1">
          {sections.map((section, idx) => {
            const isActive = activeId === section.id;
            return (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={(e) => scrollToSection(e, section.id)}
                className={`group flex items-center justify-between px-3 py-2 rounded-lg text-xs transition-all ${
                  isActive
                    ? "bg-[#404447] text-white font-bold shadow-xs"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900 font-medium"
                }`}
              >
                <span className="flex items-center gap-2 truncate">
                  <span
                    className={`text-[10px] font-mono ${
                      isActive ? "text-slate-300" : "text-slate-400 group-hover:text-slate-600"
                    }`}
                  >
                    {idx < 9 ? `0${idx + 1}` : idx + 1}
                  </span>
                  <span className="truncate">{section.label}</span>
                </span>
                <span
                  className={`text-[10px] ${
                    isActive ? "text-slate-300" : "text-transparent group-hover:text-slate-400"
                  }`}
                >
                  →
                </span>
              </a>
            );
          })}
        </nav>

        <div className="mt-5 pt-4 border-t border-slate-100">
          <p className="text-[11px] text-slate-500 leading-relaxed">
            Need legal counsel for wrong transfer refund or recipient refusal?
          </p>
          <a
            href="#heading-cta-block"
            onClick={(e) => scrollToSection(e, "heading-cta-block")}
            className="inline-flex items-center gap-1 text-xs font-bold text-red-600 hover:text-red-700 mt-1.5"
          >
            <span>Draft Legal Notice</span>
            <span>→</span>
          </a>
        </div>
      </aside>
    </>
  );
}
