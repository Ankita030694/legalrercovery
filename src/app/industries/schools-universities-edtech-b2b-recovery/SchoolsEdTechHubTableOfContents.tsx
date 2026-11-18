"use client";

import React, { useEffect, useState, useRef } from "react";

export interface SchoolsEdTechHubTOCSection {
  id: string;
  label: string;
}

export const SCHOOLS_EDTECH_HUB_TOC_SECTIONS: SchoolsEdTechHubTOCSection[] = [
  { id: "heading-overview", label: "EDUCATION & EDTECH CREDIT GAP" },
  { id: "heading-escalation-matrix", label: "8-TRACK ESCALATION MATRIX" },
  { id: "heading-workflow-architecture", label: "RTE-SAFE & TRUST PIPELINE" },
  { id: "heading-scenario-playbooks", label: "4 SECTOR RECOVERY PLAYBOOKS" },
  { id: "heading-bulk-csv-desk", label: "PARENT BATCHES & TRUST DESK" },
  { id: "heading-statutory-mandates", label: "RTE s.5(3), SOCIETIES & NI LAW" },
  { id: "heading-worked-economics", label: "WORKED FEE & B2B LEDGER" },
  { id: "heading-spokes-directory", label: "ALL 10 IND-17 SPOKES & PACK" },
  { id: "heading-seed-resources", label: "LIVE B2B, s.80 & CHEQUE GUIDES" },
  { id: "heading-faqs", label: "SCHOOL, UNI & EDTECH FAQS" },
  { id: "heading-sources", label: "STATUTES & EDUCATION PORTALS" },
];

interface SchoolsEdTechHubTableOfContentsProps {
  sections?: SchoolsEdTechHubTOCSection[];
}

export default function SchoolsEdTechHubTableOfContents({
  sections = SCHOOLS_EDTECH_HUB_TOC_SECTIONS,
}: SchoolsEdTechHubTableOfContentsProps) {
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
      {/* Mobile / Tablet Sticky Bar */}
      <div
        ref={dropdownRef}
        className="lg:hidden sticky top-20 z-30 bg-slate-50/95 backdrop-blur-sm border-b border-slate-200 py-3 px-4 -mx-4 sm:-mx-6 mb-4 select-none"
      >
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between px-4 py-2.5 bg-white border border-slate-200 rounded-xl shadow-sm hover:border-slate-300 transition-colors cursor-pointer"
          aria-expanded={isOpen}
          aria-label="Toggle education and EdTech B2B recovery navigation"
        >
          <span className="flex items-center gap-2.5 min-w-0">
            <span className="w-2 h-2 rounded-full bg-[#DC2626] shrink-0 animate-pulse" />
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 shrink-0">
              Section:
            </span>
            <span className="text-xs font-bold text-slate-900 truncate">
              {activeSection?.label}
            </span>
          </span>
          <svg
            width={16}
            height={16}
            className={`w-4 h-4 text-slate-500 transition-transform duration-200 shrink-0 ml-2 ${
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
          <div className="mt-2 bg-white border border-slate-200 rounded-xl shadow-xl p-2 max-h-[60vh] overflow-y-auto">
            {sections.map((section) => {
              const isActive = activeId === section.id;
              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => scrollToSection(e, section.id)}
                  className={`block px-3.5 py-2.5 rounded-lg text-xs transition-colors ${
                    isActive
                      ? "bg-[#DC2626] text-white font-bold"
                      : "text-slate-700 hover:bg-slate-100 font-medium"
                  }`}
                >
                  {section.label}
                </a>
              );
            })}
          </div>
        )}
      </div>

      {/* Desktop Sticky Sidebar TOC */}
      <aside className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start">
        <nav
          aria-label="Page contents"
          className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm"
        >
          <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-3 px-2">
            On This Hub
          </p>
          <ul className="space-y-1">
            {sections.map((section) => {
              const isActive = activeId === section.id;
              return (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    onClick={(e) => scrollToSection(e, section.id)}
                    className={`block px-3 py-2 rounded-lg text-xs transition-all duration-150 ${
                      isActive
                        ? "bg-[#DC2626] text-white font-bold shadow-sm"
                        : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 font-medium"
                    }`}
                  >
                    {section.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
    </>
  );
}
