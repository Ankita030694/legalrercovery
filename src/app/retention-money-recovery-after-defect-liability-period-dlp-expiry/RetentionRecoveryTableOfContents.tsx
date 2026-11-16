"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const RETENTION_RECOVERY_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-retention-crisis", label: "The Post-DLP Retention Trap" },
  { id: "heading-virtual-completion", label: "Virtual Completion vs OC" },
  { id: "heading-statutory-matrix", label: "Statutory Recovery Matrix" },
  { id: "heading-decision-tree", label: "Recovery Decision Tree" },
  { id: "heading-scenario-tabs", label: "4 Commercial Dispute Modes" },
  { id: "heading-worked-example", label: "Worked ₹75L Ledger & Interest" },
  { id: "heading-bsa-evidence", label: "BSA s.63 Evidence Docket" },
  { id: "heading-preemption-matrix", label: "Preempting Developer Excuses" },
  { id: "heading-advocate-sop", label: "15-Day Advocate Notice SOP" },
  { id: "heading-cta", label: "Dual-Track Recovery Desk" },
  { id: "heading-faqs", label: "Frequently Asked Questions" },
  { id: "heading-precedents", label: "Judicial Precedents & Acts" },
];

interface RetentionRecoveryTableOfContentsProps {
  sections?: TOCSection[];
}

export default function RetentionRecoveryTableOfContents({
  sections = RETENTION_RECOVERY_TOC_SECTIONS,
}: RetentionRecoveryTableOfContentsProps) {
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
      if (sections.length > 0) {
        setActiveId(sections[0].id);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 110;
      window.scrollTo({ top, behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const activeSection = sections.find((s) => s.id === activeId) || sections[0];

  return (
    <>
      {/* Mobile Sticky Bar */}
      <div className="lg:hidden sticky top-20 z-30 bg-slate-50/95 backdrop-blur-sm border-b border-slate-200 py-3 px-4 -mx-4 sm:-mx-6 mb-6">
        <div className="relative" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between px-4 py-2.5 bg-white border border-slate-300 rounded-xl shadow-xs text-xs font-semibold text-slate-800"
            aria-expanded={isOpen}
          >
            <span className="truncate flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
              <span className="text-slate-500 font-normal">Section:</span>
              <span className="text-slate-900 font-bold">{activeSection?.label}</span>
            </span>
            <svg
              className={`w-4 h-4 text-slate-500 transition-transform ${isOpen ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isOpen && (
            <div className="absolute left-0 right-0 mt-1.5 bg-white border border-slate-200 rounded-xl shadow-xl z-50 max-h-80 overflow-y-auto divide-y divide-slate-100">
              {sections.map((section) => {
                const isActive = section.id === activeId;
                return (
                  <button
                    key={section.id}
                    type="button"
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full text-left px-4 py-2.5 text-xs transition-colors flex items-center justify-between ${
                      isActive
                        ? "bg-red-50 text-[#DC2626] font-bold"
                        : "text-slate-700 hover:bg-slate-50 font-medium"
                    }`}
                  >
                    <span>{section.label}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Desktop Sticky Aside */}
      <aside className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
        <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100">
          <div className="w-2 h-2 rounded-full bg-[#DC2626]" />
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Guide Navigation
          </p>
        </div>
        <nav aria-label="Table of contents" className="space-y-1">
          {sections.map((section) => {
            const isActive = section.id === activeId;
            return (
              <button
                key={section.id}
                type="button"
                onClick={() => scrollToSection(section.id)}
                className={`w-full text-left px-3 py-2 rounded-xl text-xs transition-all flex items-center justify-between ${
                  isActive
                    ? "bg-[#DC2626] text-white font-bold shadow-xs translate-x-1"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 font-medium"
                }`}
              >
                <span className="truncate">{section.label}</span>
                {isActive && (
                  <svg className="w-3.5 h-3.5 text-white shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
            );
          })}
        </nav>

        {/* Rapid Stat Box */}
        <div className="mt-6 pt-4 border-t border-slate-100 bg-slate-50 rounded-xl p-3">
          <p className="text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
            Statutory Rule
          </p>
          <p className="text-[11px] text-slate-600 leading-relaxed">
            Employer cannot forfeit retention without proving actual unrectified defects notified <em>during</em> DLP and proved actual costs under Contract Act s.73/74.
          </p>
        </div>
      </aside>
    </>
  );
}
