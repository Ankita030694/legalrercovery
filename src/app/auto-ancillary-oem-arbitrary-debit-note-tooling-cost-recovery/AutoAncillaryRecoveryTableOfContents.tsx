"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const AUTO_ANCILLARY_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-oem-arbitrary-debit-notes", label: "The OEM Debit Note Trap" },
  { id: "heading-statutory-lien-promissory-estoppel", label: "s.170 Lien & Estoppel" },
  { id: "heading-escalation-flowchart", label: "5-Stage Escalation SOP" },
  { id: "heading-statutory-matrix", label: "Statutory Recovery Matrix" },
  { id: "heading-scenario-tabs", label: "4 Auto Failure Scenarios" },
  { id: "heading-worked-example", label: "Worked ₹63.5L Recovery Ledger" },
  { id: "heading-bsa-evidence", label: "BSA s.63 Evidence Dossier" },
  { id: "heading-preemption-matrix", label: "Neutralizing OEM Excuses" },
  { id: "heading-advocate-sop", label: "15-Day Advocate Notice SOP" },
  { id: "heading-cta", label: "Institutional Auto Desk" },
  { id: "heading-faqs", label: "Frequently Asked Questions" },
  { id: "heading-precedents", label: "Statutory Acts & Precedents" },
];

interface AutoAncillaryRecoveryTableOfContentsProps {
  sections?: TOCSection[];
}

export default function AutoAncillaryRecoveryTableOfContents({
  sections = AUTO_ANCILLARY_TOC_SECTIONS,
}: AutoAncillaryRecoveryTableOfContentsProps) {
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
      setActiveId(id);
      setIsOpen(false);
    }
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
            className="w-full flex items-center justify-between px-4 py-2.5 bg-white border border-slate-200 rounded-xl shadow-xs text-left"
            aria-expanded={isOpen}
          >
            <div className="flex items-center gap-2 truncate">
              <span className="w-2 h-2 rounded-full bg-[#DC2626] shrink-0" />
              <span className="text-xs font-bold text-slate-900 truncate">
                {activeSection?.label || "Table of Contents"}
              </span>
            </div>
            <svg
              className={`w-4 h-4 text-slate-500 transition-transform duration-200 shrink-0 ${
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
            <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-200 rounded-xl shadow-xl py-2 z-40 max-h-72 overflow-y-auto">
              {sections.map((section) => {
                const isActive = activeId === section.id;
                return (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    onClick={(e) => scrollToSection(e, section.id)}
                    className={`block px-4 py-2 text-xs font-medium transition-colors ${
                      isActive
                        ? "bg-[#DC2626] text-white font-bold"
                        : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                    }`}
                  >
                    {section.label}
                  </a>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Desktop Sticky Aside */}
      <aside className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start">
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100">
            <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
            <p className="text-xs font-bold uppercase tracking-wider text-slate-800 m-0">
              Guide Navigation
            </p>
          </div>
          <nav className="space-y-1">
            {sections.map((section, idx) => {
              const isActive = activeId === section.id;
              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => scrollToSection(e, section.id)}
                  className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs transition-all duration-150 ${
                    isActive
                      ? "bg-[#DC2626] text-white font-bold shadow-xs translate-x-1"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 font-medium"
                  }`}
                >
                  <span
                    className={`text-[10px] tabular-nums shrink-0 ${
                      isActive ? "text-red-100" : "text-slate-400"
                    }`}
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="truncate">{section.label}</span>
                </a>
              );
            })}
          </nav>

          <div className="mt-6 pt-4 border-t border-slate-100">
            <div className="p-3 bg-red-50 rounded-xl border border-red-100">
              <p className="text-[11px] font-bold text-red-900 mb-1">
                Facing Arbitrary OEM Deductions?
              </p>
              <p className="text-[10px] text-red-700 leading-relaxed mb-2.5">
                Issue an advocate demand notice or enforce Section 170 die liens.
              </p>
              <a
                href="#heading-cta"
                className="inline-block text-[11px] font-bold text-[#DC2626] hover:underline"
              >
                Explore Legal Recovery &rarr;
              </a>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
