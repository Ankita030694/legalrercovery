"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const PCD_PHARMA_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-overview", label: "PCD CREDIT & MONOPOLY PARADOX" },
  { id: "heading-escalation-protocol", label: "5-STAGE ESCALATION PROTOCOL" },
  { id: "heading-statutory-matrix", label: "STATUTORY RECOVERY MATRIX" },
  { id: "heading-scenario-tabs", label: "4 CRITICAL FAILURE SCENARIOS" },
  { id: "heading-home-jurisdiction", label: "NI ACT S.142(2) HOME JURISDICTION" },
  { id: "heading-monopoly-revocation", label: "TERRITORY MONOPOLY REVOCATION" },
  { id: "heading-promotional-recovery", label: "MR BAGS & SAMPLE RECOVERY" },
  { id: "heading-worked-example", label: "WORKED ₹28.4L RECOVERY LEDGER" },
  { id: "heading-evidence-checklist", label: "BSA S.63 EVIDENCE & BILTY DOSSIER" },
  { id: "heading-cta", label: "DUAL-TRACK RECOVERY DESK" },
  { id: "heading-faqs", label: "FREQUENTLY ASKED QUESTIONS" },
  { id: "heading-sources", label: "STATUTORY PRECEDENTS & AUTHORITIES" },
];

interface PcdPharmaTableOfContentsProps {
  sections?: TOCSection[];
}

export default function PcdPharmaTableOfContents({
  sections = PCD_PHARMA_TOC_SECTIONS,
}: PcdPharmaTableOfContentsProps) {
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
      const yOffset = -100;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveId(id);
      setIsOpen(false);
    }
  };

  const activeLabel = sections.find((s) => s.id === activeId)?.label || "Table of Contents";

  return (
    <>
      {/* Mobile Sticky Bar */}
      <div className="lg:hidden sticky top-20 z-30 bg-slate-50/95 backdrop-blur-sm border-b border-slate-200 py-3 px-4 -mx-4 sm:-mx-6 mb-4">
        <div className="relative" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between px-4 py-2.5 bg-white border border-slate-200 rounded-xl shadow-xs text-xs font-bold text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-[#DC2626]"
            aria-expanded={isOpen}
          >
            <span className="flex items-center gap-2 truncate">
              <span className="w-2 h-2 rounded-full bg-[#DC2626] shrink-0" />
              <span className="truncate">{activeLabel}</span>
            </span>
            <svg
              className={`w-4 h-4 shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isOpen && (
            <div className="absolute top-full left-0 right-0 mt-1.5 bg-white border border-slate-200 rounded-xl shadow-xl max-h-80 overflow-y-auto z-40 py-2">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => scrollToSection(e, section.id)}
                  className={`block px-4 py-2 text-xs font-medium transition-colors ${
                    activeId === section.id
                      ? "bg-red-50 text-[#DC2626] font-bold"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  {section.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Desktop Sticky Aside */}
      <aside className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start">
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
          <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
            Recovery Playbook TOC
          </p>
          <nav className="space-y-1">
            {sections.map((section) => {
              const isActive = activeId === section.id;
              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => scrollToSection(e, section.id)}
                  className={`block px-3 py-2 rounded-lg text-xs transition-colors duration-150 ${
                    isActive
                      ? "bg-[#DC2626] text-white font-bold shadow-xs"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 font-medium"
                  }`}
                >
                  {section.label}
                </a>
              );
            })}
          </nav>
        </div>
      </aside>
    </>
  );
}
