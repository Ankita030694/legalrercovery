"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const TDS_RECOVERY_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-overview", label: "TDS SCAM OVERVIEW" },
  { id: "heading-section-205", label: "SECTION 205 IMMUNITY" },
  { id: "heading-cbdt-circulars", label: "CBDT & YASHPAL SAHNI" },
  { id: "heading-escalation-rail", label: "5-STAGE RECOVERY RAIL" },
  { id: "heading-decision-tree", label: "DECISION TREE" },
  { id: "heading-statutory-matrix", label: "PENALTIES & PROSECUTION" },
  { id: "heading-worked-example", label: "FINANCIAL LEDGER" },
  { id: "heading-scenario-tabs", label: "TENANT DEFAULT MODES" },
  { id: "heading-evidence-checklist", label: "BSA S.63 EVIDENCE" },
  { id: "heading-precedents", label: "LANDMARK PRECEDENTS" },
  { id: "heading-faqs", label: "FAQ" },
  { id: "heading-sources", label: "STATUTORY SOURCES" },
];

interface TDSRecoveryTableOfContentsProps {
  sections?: TOCSection[];
}

export default function TDSRecoveryTableOfContents({
  sections = TDS_RECOVERY_TOC_SECTIONS,
}: TDSRecoveryTableOfContentsProps) {
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
      const targetOffset = el.getBoundingClientRect().top + window.scrollY - 110;
      window.scrollTo({
        top: targetOffset,
        behavior: "smooth",
      });
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
            className="w-full flex items-center justify-between gap-2 px-4 py-2.5 bg-white border border-slate-300 rounded-xl text-left text-xs font-bold text-slate-800 shadow-sm"
          >
            <span className="truncate">
              On This Page: <span className="text-[#DC2626] font-extrabold">{activeSection?.label}</span>
            </span>
            <svg
              className={`w-4 h-4 text-slate-500 shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isOpen && (
            <div className="absolute left-0 right-0 mt-2 bg-white border border-slate-200 rounded-xl shadow-xl z-50 max-h-80 overflow-y-auto divide-y divide-slate-100 p-1">
              {sections.map((section) => {
                const isActive = activeId === section.id;
                return (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    onClick={(e) => scrollToSection(e, section.id)}
                    className={`block px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors ${
                      isActive
                        ? "bg-[#DC2626] text-white"
                        : "text-slate-700 hover:bg-slate-100"
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
      <aside className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
        <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100">
          <div className="w-2 h-2 rounded-full bg-[#DC2626]" />
          <p className="text-[11px] font-extrabold tracking-wider text-slate-400 uppercase">
            TABLE OF CONTENTS
          </p>
        </div>

        <nav className="space-y-1">
          {sections.map((section) => {
            const isActive = activeId === section.id;
            return (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={(e) => scrollToSection(e, section.id)}
                className={`block px-3 py-2 rounded-xl text-xs transition-all duration-150 ${
                  isActive
                    ? "bg-[#DC2626] text-white font-bold shadow-sm"
                    : "text-slate-600 font-medium hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                {section.label}
              </a>
            );
          })}
        </nav>

        <div className="mt-6 pt-4 border-t border-slate-100">
          <a
            href="#dual-track-cta"
            className="block w-full py-2.5 px-3 bg-slate-900 hover:bg-slate-800 text-white text-center rounded-xl text-xs font-bold transition-colors shadow-sm"
          >
            Issue Demand Notice &rarr;
          </a>
        </div>
      </aside>
    </>
  );
}
