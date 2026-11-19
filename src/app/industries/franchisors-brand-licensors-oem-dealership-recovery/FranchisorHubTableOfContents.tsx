"use client";

import React, { useEffect, useState, useRef } from "react";

export interface FranchisorHubTOCSection {
  id: string;
  label: string;
}

export const FRANCHISOR_HUB_TOC_SECTIONS: FranchisorHubTOCSection[] = [
  { id: "heading-overview", label: "FRANCHISOR ROYALTY BLEED" },
  { id: "heading-escalation-matrix", label: "8-TRACK ESCALATION MATRIX" },
  { id: "heading-workflow-architecture", label: "AUDIT-TO-INJUNCTION PIPELINE" },
  { id: "heading-scenario-playbooks", label: "4 FRANCHISE DISPUTE PLAYBOOKS" },
  { id: "heading-bulk-csv-desk", label: "BULK MULTI-STORE BATCH DESK" },
  { id: "heading-statutory-mandates", label: "S.2(1)(c)(ix), TM & S.9 HOOKS" },
  { id: "heading-worked-economics", label: "WORKED QSR & EV DEALER LEDGERS" },
  { id: "heading-spokes-directory", label: "ALL 9 IND-24 SPOKES & PACK" },
  { id: "heading-seed-resources", label: "ODR, DEALER & BULK RESOURCES" },
  { id: "heading-faqs", label: "FRANCHISOR RECOVERY FAQS" },
  { id: "heading-sources", label: "STATUTORY AUTHORITIES & PORTALS" },
];

interface FranchisorHubTableOfContentsProps {
  sections?: FranchisorHubTOCSection[];
}

export default function FranchisorHubTableOfContents({
  sections = FRANCHISOR_HUB_TOC_SECTIONS,
}: FranchisorHubTableOfContentsProps) {
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
      <div className="lg:hidden sticky top-20 z-30 bg-slate-50/95 backdrop-blur-sm border-b border-slate-200 py-3 px-4 -mx-4 sm:-mx-6 mb-4">
        <div className="relative" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-xs font-bold text-slate-800 shadow-sm"
            aria-expanded={isOpen}
            aria-label="Table of Contents navigation"
          >
            <div className="flex items-center gap-2 truncate">
              <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
              <span className="text-slate-500 uppercase tracking-wider text-[10px]">TOC:</span>
              <span className="truncate">{activeSection?.label}</span>
            </div>
            <svg
              className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${
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
            <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-200 rounded-xl shadow-xl z-50 overflow-hidden py-1 max-h-80 overflow-y-auto">
              {sections.map((section, idx) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => scrollToSection(e, section.id)}
                  className={`block px-4 py-2.5 text-xs font-semibold transition-colors ${
                    activeId === section.id
                      ? "bg-[#DC2626] text-white"
                      : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  <span className="inline-block w-5 text-[10px] opacity-75">{idx + 1}.</span>
                  {section.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Desktop Sticky Sidebar Aside */}
      <aside className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start">
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100">
            <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
            <p className="text-[11px] font-black uppercase tracking-widest text-slate-500">
              Navigation &amp; Sections
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
                  className={`group flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-medium transition-all duration-150 ${
                    isActive
                      ? "bg-[#DC2626] text-white font-bold shadow-sm"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  <span
                    className={`inline-flex items-center justify-center w-5 h-5 rounded-full text-[10px] font-bold shrink-0 transition-colors ${
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-slate-100 text-slate-500 group-hover:bg-slate-200 group-hover:text-slate-800"
                    }`}
                  >
                    {idx + 1}
                  </span>
                  <span className="truncate">{section.label}</span>
                </a>
              );
            })}
          </nav>

          <div className="mt-6 pt-4 border-t border-slate-100">
            <div className="p-3 bg-red-50/70 border border-red-200/60 rounded-xl text-[11px] text-slate-700 leading-relaxed">
              <span className="font-bold text-[#DC2626] block mb-1">Commercial Courts Act s.2(1)(c)(ix)</span>
              Franchise agreements are statutory commercial disputes in India with accelerated commercial benches and mandatory case management.
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
