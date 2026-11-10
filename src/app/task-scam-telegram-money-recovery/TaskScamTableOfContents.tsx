"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const TASK_SCAM_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-overview", label: "SCAM ANATOMY" },
  { id: "heading-recoverability-matrix", label: "RECOVERABILITY ODDS" },
  { id: "heading-fund-freeze-rail", label: "1930 & MULE FREEZE" },
  { id: "heading-section-503-bnss", label: "MAGISTRATE UNFREEZE (BNSS 503)" },
  { id: "heading-bank-liability", label: "BANK MULE LIABILITY" },
  { id: "heading-secondary-scams", label: "FAKE RECOVERY WARNING" },
  { id: "heading-playbook", label: "5-STEP PLAYBOOK" },
  { id: "heading-worked-example", label: "WORKED CASE STUDY" },
  { id: "heading-evidence-checklist", label: "EVIDENCE CHECKLIST" },
  { id: "heading-problem-picker", label: "SCENARIO PICKER" },
  { id: "heading-faqs", label: "FAQ" },
  { id: "heading-sources", label: "LEGAL REFERENCES" },
];

interface TaskScamTableOfContentsProps {
  sections?: TOCSection[];
}

export default function TaskScamTableOfContents({
  sections = TASK_SCAM_TOC_SECTIONS,
}: TaskScamTableOfContentsProps) {
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

  const activeLabel = sections.find((s) => s.id === activeId)?.label || "TABLE OF CONTENTS";

  return (
    <>
      {/* Mobile Sticky Dropdown Bar */}
      <div className="lg:hidden sticky top-16 z-30 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 px-4 py-2.5 shadow-sm">
        <div className="relative" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-900 rounded-xl text-xs font-bold transition-all border border-slate-300"
            aria-expanded={isOpen}
            aria-label="Table of Contents Navigation"
          >
            <div className="flex items-center gap-2 truncate">
              <span className="w-2 h-2 rounded-full bg-[#DC2626] animate-pulse" />
              <span className="text-slate-500 uppercase tracking-wider text-[10px]">SECTION:</span>
              <span className="truncate text-slate-800">{activeLabel}</span>
            </div>
            <svg
              className={`w-4 h-4 ml-2 transition-transform duration-200 text-slate-600 ${
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
            <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-slate-200 py-2 max-h-72 overflow-y-auto z-40">
              {sections.map((section, idx) => (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left px-4 py-2 text-xs font-bold flex items-center gap-2 transition-colors ${
                    activeId === section.id
                      ? "text-[#DC2626] bg-red-50/80 font-black border-l-4 border-[#DC2626]"
                      : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  <span className="text-[10px] text-slate-500 w-4 font-mono">{idx + 1}.</span>
                  <span className="truncate">{section.label}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Desktop Sticky Left Sidebar */}
      <aside
        aria-label="Page Table of Contents"
        className="hidden lg:block lg:w-64 xl:w-72 shrink-0 sticky top-28 self-start bg-white rounded-2xl border border-slate-200/90 shadow-sm p-5"
      >
        <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-200">
          <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
          <p className="text-xs font-black uppercase tracking-wider text-slate-900">
            Navigation Index
          </p>
        </div>

        <nav className="space-y-1">
          {sections.map((section, idx) => {
            const isActive = activeId === section.id;
            return (
              <button
                key={section.id}
                type="button"
                onClick={() => scrollToSection(section.id)}
                className={`w-full text-left px-3 py-2 rounded-lg text-xs font-bold transition-all flex items-center justify-between group cursor-pointer ${
                  isActive
                    ? "bg-red-50 text-[#DC2626] font-black border-l-2 border-[#DC2626] shadow-xs"
                    : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                <div className="flex items-center gap-2 truncate">
                  <span
                    className={`text-[10px] font-mono ${
                      isActive ? "text-[#DC2626]" : "text-slate-500 group-hover:text-slate-700"
                    }`}
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="truncate">{section.label}</span>
                </div>
                {isActive && (
                  <span className="text-[#DC2626] text-xs font-bold">›</span>
                )}
              </button>
            );
          })}
        </nav>

        <div className="mt-5 pt-4 border-t border-slate-200 text-[11px] text-slate-500 space-y-2">
          <div className="flex items-center gap-1.5 text-amber-700 font-semibold">
            <svg className="w-3.5 h-3.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
            <span>Time-Sensitive</span>
          </div>
          <p className="leading-relaxed">
            Report to <strong>1930 / cybercrime.gov.in</strong> within the first 2–4 hours for peak bank freeze success.
          </p>
        </div>
      </aside>
    </>
  );
}
