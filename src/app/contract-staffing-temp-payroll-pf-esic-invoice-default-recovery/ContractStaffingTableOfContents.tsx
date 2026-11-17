"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const STAFFING_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-overview", label: "THE BRUTAL MATH OF STAFFING" },
  { id: "heading-clra-liability", label: "CLRA S.21(4) & PRINCIPAL LIABILITY" },
  { id: "heading-epf-esic-gst", label: "EPFO, ESIC & GST EXPOSURE" },
  { id: "heading-precedents", label: "LANDMARK PRECEDENTS" },
  { id: "heading-decision-tree", label: "RECOVERY DECISION TREE" },
  { id: "heading-statutory-matrix", label: "STATUTORY CLAIMS MATRIX" },
  { id: "heading-scenario-tabs", label: "4 COMMERCIAL FAILURE MODES" },
  { id: "heading-worked-example", label: "WORKED RECOVERY LEDGER (₹63.6L)" },
  { id: "heading-operational-sop", label: "7-STEP RECOVERY PLAYBOOK" },
  { id: "heading-evidence-checklist", label: "BSA S.63 EVIDENCE DOSSIER" },
  { id: "heading-faqs", label: "FREQUENTLY ASKED QUESTIONS" },
  { id: "heading-sources", label: "STATUTORY FRAMEWORK" },
];

interface ContractStaffingTableOfContentsProps {
  sections?: TOCSection[];
}

export default function ContractStaffingTableOfContents({
  sections = STAFFING_TOC_SECTIONS,
}: ContractStaffingTableOfContentsProps) {
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
      {/* Mobile Sticky Dropdown Table of Contents */}
      <div
        ref={dropdownRef}
        className="lg:hidden sticky top-20 z-30 w-full mb-6 py-2 bg-slate-50/95 backdrop-blur-sm select-none"
      >
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-toc-list"
          className="w-full flex items-center justify-between px-4 py-3 bg-white border border-slate-200 rounded-xl shadow-sm text-left text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#DC2626]"
        >
          <span className="flex items-center gap-2 truncate">
            <span className="w-2 h-2 rounded-full bg-[#DC2626] shrink-0" />
            <span className="text-xs uppercase tracking-wider text-slate-500 font-bold">On this page:</span>
            <span className="truncate text-slate-900 font-bold">{activeSection?.label}</span>
          </span>
          <svg
            className={`w-4 h-4 text-slate-500 transition-transform duration-200 shrink-0 ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {isOpen && (
          <nav
            id="mobile-toc-list"
            className="absolute left-0 right-0 mt-2 bg-white border border-slate-200 rounded-xl shadow-xl max-h-[60vh] overflow-y-auto p-2 z-40 space-y-1"
          >
            {sections.map((section) => {
              const isActive = activeId === section.id;
              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => scrollToSection(e, section.id)}
                  className={`block px-3 py-2 rounded-lg text-xs font-semibold transition-colors ${
                    isActive
                      ? "bg-[#DC2626] text-white font-bold"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  {section.label}
                </a>
              );
            })}
          </nav>
        )}
      </div>

      {/* Desktop Sticky Aside */}
      <aside
        aria-label="Table of Contents"
        className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start bg-white border border-slate-200 rounded-2xl p-5 shadow-sm"
      >
        <p className="text-[11px] font-black uppercase tracking-wider text-slate-400 mb-3 px-1">
          OPERATIONAL NAVIGATION
        </p>
        <nav className="space-y-1 max-h-[calc(100vh-10rem)] overflow-y-auto pr-1">
          {sections.map((section) => {
            const isActive = activeId === section.id;
            return (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={(e) => scrollToSection(e, section.id)}
                className={`block px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                  isActive
                    ? "bg-[#DC2626] text-white font-bold shadow-sm"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                {section.label}
              </a>
            );
          })}
        </nav>

        <div className="mt-6 pt-5 border-t border-slate-100">
          <div className="p-3 bg-red-50 rounded-xl border border-red-100">
            <span className="block text-[10px] font-bold uppercase tracking-wider text-red-700 mb-1">
              Urgent Recovery Hotline
            </span>
            <p className="text-xs text-slate-700 leading-snug">
              Recover unpaid staff payroll bills before the next statutory PF/ESIC deposit cycle.
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}
