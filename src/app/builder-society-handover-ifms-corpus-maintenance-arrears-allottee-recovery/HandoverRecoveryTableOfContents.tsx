"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const HANDOVER_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-statutory-mandate", label: "RERA S.19(10) MANDATE" },
  { id: "heading-investor-speculator-crisis", label: "THE POST-OC CRISIS" },
  { id: "heading-court-precedents", label: "LANDMARK PRECEDENTS" },
  { id: "heading-escalation-flow", label: "5-STAGE RECOVERY FLOW" },
  { id: "heading-decision-tree", label: "DECISION TREE FLOWCHART" },
  { id: "heading-statutory-matrix", label: "RECOVERY HEADS MATRIX" },
  { id: "heading-scenario-tabs", label: "FAILURE MODE EXPLORER" },
  { id: "heading-worked-example", label: "WORKED FINANCIAL LEDGER" },
  { id: "heading-evidence-checklist", label: "BSA S.63 AUDIT TRAIL" },
  { id: "heading-rwa-handover-protocol", label: "RWA HANDOVER AUDIT" },
  { id: "heading-faqs", label: "FAQ ACCORDIONS" },
  { id: "heading-sources", label: "STATUTORY SOURCES" },
];

interface HandoverRecoveryTableOfContentsProps {
  sections?: TOCSection[];
}

export default function HandoverRecoveryTableOfContents({
  sections = HANDOVER_TOC_SECTIONS,
}: HandoverRecoveryTableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>(sections[0]?.id || "");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close mobile dropdown on outside click
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
      <div className="lg:hidden sticky top-20 z-30 bg-slate-50/95 backdrop-blur-sm border-b border-slate-200 py-3 px-4 -mx-4 sm:-mx-6 mb-4">
        <div className="relative" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between px-4 py-2.5 bg-white border border-slate-300 rounded-xl text-xs font-bold text-slate-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#DC2626]"
            aria-expanded={isOpen}
            aria-label="Table of Contents Menu"
          >
            <span className="truncate flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
              <span className="text-slate-500 uppercase font-semibold">TOC:</span>
              <span className="text-slate-900">{activeSection?.label}</span>
            </span>
            <svg
              className={`w-4 h-4 text-slate-600 transition-transform ${isOpen ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isOpen && (
            <div className="absolute left-0 right-0 mt-1 bg-white border border-slate-200 rounded-xl shadow-xl max-h-80 overflow-y-auto z-40 py-1.5 divide-y divide-slate-100">
              {sections.map((section) => {
                const isActive = activeId === section.id;
                return (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    onClick={(e) => scrollToSection(e, section.id)}
                    className={`block px-4 py-2 text-xs transition-colors ${
                      isActive
                        ? "bg-red-50 text-[#DC2626] font-bold border-l-4 border-[#DC2626]"
                        : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
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
      <aside
        aria-label="Table of contents"
        className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start bg-white border border-slate-200 rounded-2xl p-5 shadow-sm"
      >
        <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-3 px-2">
          Page Navigation
        </p>
        <nav className="space-y-1">
          {sections.map((section) => {
            const isActive = activeId === section.id;
            return (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={(e) => scrollToSection(e, section.id)}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs transition-all ${
                  isActive
                    ? "bg-[#DC2626] text-white font-bold shadow-sm"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                    isActive ? "bg-white" : "bg-slate-300"
                  }`}
                />
                <span className="truncate">{section.label}</span>
              </a>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
