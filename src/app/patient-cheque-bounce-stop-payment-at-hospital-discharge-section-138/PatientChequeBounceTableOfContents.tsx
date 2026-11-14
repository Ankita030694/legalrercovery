"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const PATIENT_CHEQUE_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-overview", label: "DISCHARGE CHEQUE CRISIS" },
  { id: "heading-decision-tree", label: "5-STAGE RECOVERY TREE" },
  { id: "heading-statutory-matrix", label: "STATUTORY MATRIX" },
  { id: "heading-third-party-liability", label: "THIRD-PARTY CHEQUE LAW" },
  { id: "heading-coercion-counter", label: "COERCION DEFENSE SHIELD" },
  { id: "heading-scenario-tabs", label: "DISCHARGE FAILURE MODES" },
  { id: "heading-worked-example", label: "WORKED RECOVERY LEDGER" },
  { id: "heading-evidence-checklist", label: "BSA S.63 EVIDENCE CHECKLIST" },
  { id: "heading-cta", label: "INSTITUTIONAL ACTIONS" },
  { id: "heading-faqs", label: "FAQ" },
  { id: "heading-sources", label: "STATUTORY SOURCES" },
];

interface PatientChequeBounceTableOfContentsProps {
  sections?: TOCSection[];
}

export default function PatientChequeBounceTableOfContents({
  sections = PATIENT_CHEQUE_TOC_SECTIONS,
}: PatientChequeBounceTableOfContentsProps) {
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
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between px-4 py-3 bg-white border border-slate-200 rounded-xl shadow-xs text-left"
          aria-expanded={isOpen}
          aria-label="Toggle Table of Contents"
        >
          <div className="flex items-center gap-2 min-w-0">
            <span className="w-2 h-2 rounded-full bg-[#DC2626] shrink-0" />
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 shrink-0">
              Contents:
            </span>
            <span className="text-xs font-semibold text-slate-800 truncate">
              {activeSection?.label}
            </span>
          </div>
          <svg
            className={`w-4 h-4 text-slate-500 shrink-0 transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {isOpen && (
          <div className="absolute left-0 right-0 mt-2 bg-white border border-slate-200 rounded-xl shadow-xl overflow-hidden max-h-80 overflow-y-auto z-40 p-2">
            {sections.map((section, idx) => {
              const isActive = activeId === section.id;
              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => scrollToSection(e, section.id)}
                  className={`flex items-center gap-2.5 px-3 py-2 text-xs rounded-lg transition-colors ${
                    isActive
                      ? "bg-[#DC2626] text-white font-bold"
                      : "text-slate-700 hover:bg-slate-100 font-medium"
                  }`}
                >
                  <span
                    className={`text-[10px] w-5 text-right shrink-0 ${
                      isActive ? "text-white/80" : "text-slate-400"
                    }`}
                  >
                    {idx + 1}.
                  </span>
                  <span className="truncate">{section.label}</span>
                </a>
              );
            })}
          </div>
        )}
      </div>

      {/* Desktop Sticky Left Rail Table of Contents */}
      <aside className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start">
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
          <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100">
            <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
            <p className="text-xs font-bold uppercase tracking-wider text-slate-800">
              SOP Navigation
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
                  className={`group flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs transition-all ${
                    isActive
                      ? "bg-[#DC2626] text-white font-bold shadow-xs translate-x-1"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 font-medium"
                  }`}
                >
                  <span
                    className={`text-[10px] w-5 text-right shrink-0 ${
                      isActive ? "text-white/90" : "text-slate-400 group-hover:text-slate-600"
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
            <div className="bg-slate-50 rounded-xl p-3 border border-slate-200/80">
              <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                Statutory Benchmark
              </span>
              <p className="text-[11px] text-slate-700 leading-snug font-medium">
                SC: <em className="italic">ICDS v. Beena Shabeer</em> &bull; Third-party relative cheques 100% enforceable under s.138.
              </p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
