"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const DIAGNOSTIC_LAB_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-b2b-lab-dues", label: "PCC & OUTSOURCE BAD DEBTS" },
  { id: "heading-decision-tree", label: "RECOVERY DECISION TREE" },
  { id: "heading-statutory-matrix", label: "STATUTORY REMEDY MATRIX" },
  { id: "heading-scenario-tabs", label: "4 B2B DEFAULT MODES" },
  { id: "heading-brand-protection", label: "TRADEMARK & SIGNBOARD MISUSE" },
  { id: "heading-worked-ledger", label: "₹14.6L RECOVERY LEDGER" },
  { id: "heading-evidence-checklist", label: "LIMS & BSA s.63 CHECKLIST" },
  { id: "heading-cta-desk", label: "DEPLOY RECOVERY DESK" },
  { id: "heading-faqs", label: "FAQS" },
  { id: "heading-sources", label: "STATUTORY PRECEDENTS" },
];

interface DiagnosticLabTableOfContentsProps {
  sections?: TOCSection[];
}

export default function DiagnosticLabTableOfContents({
  sections = DIAGNOSTIC_LAB_TOC_SECTIONS,
}: DiagnosticLabTableOfContentsProps) {
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
      {/* Mobile / Tablet Sticky Dropdown Table of Contents */}
      <div
        ref={dropdownRef}
        className="lg:hidden sticky top-20 z-30 bg-slate-50/95 backdrop-blur-sm border-b border-slate-200 py-3 px-4 -mx-4 sm:-mx-6 mb-4 select-none"
      >
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between px-4 py-3 bg-white border border-slate-200 rounded-xl shadow-sm hover:border-slate-300 transition-colors"
          aria-expanded={isOpen}
          aria-label="Table of contents menu"
        >
          <div className="flex items-center gap-2 overflow-hidden text-left">
            <span className="w-2 h-2 rounded-full bg-[#DC2626] shrink-0" />
            <span className="text-xs font-bold text-slate-500 shrink-0 uppercase tracking-wider">
              Sections:
            </span>
            <span className="text-xs font-extrabold text-slate-900 truncate">
              {activeSection.label}
            </span>
          </div>
          <svg
            className={`w-4 h-4 text-slate-500 shrink-0 transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            width={16}
            height={16}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {isOpen && (
          <div className="mt-2 bg-white border border-slate-200 rounded-xl shadow-xl overflow-hidden py-1.5 max-h-72 overflow-y-auto">
            {sections.map((section, idx) => {
              const isActive = section.id === activeId;
              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => scrollToSection(e, section.id)}
                  className={`flex items-center gap-3 px-4 py-2 text-xs transition-colors ${
                    isActive
                      ? "bg-[#DC2626] text-white font-bold"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 font-medium"
                  }`}
                >
                  <span
                    className={`text-[10px] tabular-nums ${
                      isActive ? "text-red-100" : "text-slate-400"
                    }`}
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="truncate">{section.label}</span>
                </a>
              );
            })}
          </div>
        )}
      </div>

      {/* Desktop Sticky Aside Sidebar */}
      <aside className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start">
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100">
            <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
            <p className="text-xs font-black uppercase tracking-wider text-slate-700">
              Diagnostic Lab Playbook
            </p>
          </div>
          <nav aria-label="Table of Contents">
            <div className="space-y-1">
              {sections.map((section, idx) => {
                const isActive = section.id === activeId;
                return (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    onClick={(e) => scrollToSection(e, section.id)}
                    className={`group flex items-center justify-between px-3 py-2 rounded-xl text-xs transition-all ${
                      isActive
                        ? "bg-[#DC2626] text-white font-bold shadow-sm"
                        : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 font-medium"
                    }`}
                  >
                    <span className="flex items-center gap-2.5 truncate">
                      <span
                        className={`text-[10px] tabular-nums font-mono ${
                          isActive ? "text-red-100 font-bold" : "text-slate-400 group-hover:text-slate-700"
                        }`}
                      >
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <span className="truncate">{section.label}</span>
                    </span>
                    <span
                      aria-hidden="true"
                      className={`text-xs transition-transform ${
                        isActive
                          ? "text-white translate-x-0.5"
                          : "text-slate-300 group-hover:text-slate-500"
                      }`}
                    >
                      &rarr;
                    </span>
                  </a>
                );
              })}
            </div>
          </nav>

          <div className="mt-5 pt-4 border-t border-slate-100">
            <div className="rounded-xl bg-slate-50 border border-slate-200/80 p-3">
              <span className="block text-[10px] font-black uppercase tracking-wider text-[#DC2626] mb-1">
                PCC Credit Freeze
              </span>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                Wallet overdraft crossed? Freeze LIMS sample accessioning and serve 15-day Section 138 / Section 2(1)(c)(ix) legal demand.
              </p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
