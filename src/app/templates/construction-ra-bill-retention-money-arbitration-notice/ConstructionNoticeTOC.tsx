"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const CONSTRUCTION_NOTICE_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-statutory-overview", label: "STATUTORY OVERVIEW" },
  { id: "heading-notice-workspace", label: "NOTICE WORKSPACE" },
  { id: "heading-mb-ra-schedule", label: "RA BILL & MB LEDGER" },
  { id: "heading-dlp-retention-protocol", label: "RETENTION & PBG PROTOCOL" },
  { id: "heading-ndc-duress-letter", label: "SIGNING NDC UNDER DURESS" },
  { id: "heading-section-21-arbitration", label: "SECTION 21 ARBITRATION" },
  { id: "heading-service-bsa-protocol", label: "SERVICE & BSA 2023" },
  { id: "heading-judicial-precedents", label: "JUDICIAL PRECEDENTS" },
  { id: "heading-evidence-checklist", label: "EVIDENCE DOSSIER" },
  { id: "heading-faqs", label: "FREQUENTLY ASKED QUESTIONS" },
  { id: "heading-primary-sources", label: "STATUTORY SOURCES" },
];

interface ConstructionNoticeTOCProps {
  sections?: TOCSection[];
}

export default function ConstructionNoticeTOC({
  sections = CONSTRUCTION_NOTICE_TOC_SECTIONS,
}: ConstructionNoticeTOCProps) {
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
      {/* Mobile Sticky Bar */}
      <div
        ref={dropdownRef}
        className="lg:hidden sticky top-20 z-30 w-full mb-6 py-2 bg-slate-50/95 backdrop-blur-sm select-none"
      >
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between px-4 py-3 bg-white border border-slate-200 rounded-xl shadow-sm text-xs font-bold text-slate-800 focus:outline-hidden"
          aria-expanded={isOpen}
          aria-label="Table of Contents Navigation"
        >
          <div className="flex items-center gap-2 truncate pr-2">
            <span className="w-2 h-2 rounded-full bg-[#DC2626] shrink-0" />
            <span className="text-[10px] text-slate-400 uppercase tracking-widest shrink-0">SECTION:</span>
            <span className="truncate text-slate-900">{activeSection?.label}</span>
          </div>
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
          <div className="absolute left-0 right-0 mt-1 mx-0 bg-white border border-slate-200 rounded-xl shadow-xl z-50 max-h-72 overflow-y-auto divide-y divide-slate-100 p-1">
            {sections.map((section, idx) => {
              const isActive = activeId === section.id;
              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => scrollToSection(e, section.id)}
                  className={`flex items-center justify-between px-3 py-2 text-xs font-medium rounded-lg transition-colors ${
                    isActive
                      ? "bg-red-50 text-[#DC2626] font-bold"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  <span className="truncate">
                    {idx + 1}. {section.label}
                  </span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] shrink-0 ml-2" />}
                </a>
              );
            })}
          </div>
        )}
      </div>

      {/* Desktop Sticky Aside */}
      <aside className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start">
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <span className="text-[11px] font-black uppercase tracking-wider text-slate-800">
              Notice Navigation
            </span>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-red-100 text-[#DC2626]">
              P1 Workspace
            </span>
          </div>

          <nav className="space-y-1" aria-label="Table of contents">
            {sections.map((section, idx) => {
              const isActive = activeId === section.id;
              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => scrollToSection(e, section.id)}
                  className={`group flex items-center justify-between px-3 py-2 rounded-xl text-xs transition-all duration-150 ${
                    isActive
                      ? "bg-[#DC2626] text-white font-bold shadow-sm"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 font-medium"
                  }`}
                >
                  <div className="flex items-center gap-2.5 truncate">
                    <span
                      className={`text-[10px] tabular-nums font-bold ${
                        isActive ? "text-white/80" : "text-slate-400 group-hover:text-slate-600"
                      }`}
                    >
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className="truncate">{section.label}</span>
                  </div>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0 ml-2" />}
                </a>
              );
            })}
          </nav>

          <div className="pt-3 border-t border-slate-100">
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/80">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                Statutory Hook
              </span>
              <p className="text-[11px] text-slate-700 leading-relaxed font-semibold">
                Commercial Courts Act s.2(1)(c)(vi) &bull; Contract Act s.55/73 &bull; Arbitration Act s.21
              </p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
