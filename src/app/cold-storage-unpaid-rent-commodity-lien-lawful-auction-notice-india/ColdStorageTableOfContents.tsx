"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const COLD_STORAGE_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-statutory-architecture", label: "STATUTORY FRAMEWORK" },
  { id: "heading-timeline-stops", label: "15/7-DAY NOTICE TIMELINE" },
  { id: "heading-precedents", label: "JUDICIAL PRECEDENTS" },
  { id: "heading-defense-preemption", label: "DEFENSE PRE-EMPTION" },
  { id: "heading-scenario-tabs", label: "4 AUCTION SCENARIOS" },
  { id: "heading-tripartite-lien", label: "BANK PLEDGE PRIORITY" },
  { id: "heading-deficit-ledger", label: "WORKED DEFICIT LEDGER" },
  { id: "heading-evidence-checklist", label: "BSA s.63 CHECKLIST" },
  { id: "heading-cta-desk", label: "SERVE AUCTION NOTICE" },
  { id: "heading-cluster-links", label: "IND-21 RECOVERY NETWORK" },
  { id: "heading-faqs", label: "FAQ" },
  { id: "heading-sources", label: "STATUTORY SOURCES" },
];

interface ColdStorageTableOfContentsProps {
  sections?: TOCSection[];
}

export default function ColdStorageTableOfContents({
  sections = COLD_STORAGE_TOC_SECTIONS,
}: ColdStorageTableOfContentsProps) {
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
      const yOffset = -100;
      const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveId(id);
      setIsOpen(false);
    }
  };

  const activeSection = sections.find((s) => s.id === activeId) || sections[0];

  return (
    <>
      {/* Mobile Sticky TOC Bar */}
      <div
        ref={dropdownRef}
        className="lg:hidden sticky top-20 z-30 bg-slate-50/95 backdrop-blur-sm border-b border-slate-200 py-3 px-4 -mx-4 sm:-mx-6 mb-4"
      >
        <div className="relative">
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="w-full flex items-center justify-between gap-2 bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-left shadow-sm"
            aria-expanded={isOpen}
            aria-label="Toggle table of contents"
          >
            <div className="min-w-0">
              <span className="block text-[10px] font-bold uppercase tracking-wider text-[#DC2626]">
                On This Page
              </span>
              <span className="block text-xs font-bold text-slate-900 truncate">
                {activeSection?.label}
              </span>
            </div>
            <svg
              className={`w-4 h-4 text-slate-500 shrink-0 transition-transform ${
                isOpen ? "rotate-180" : ""
              }`}
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {isOpen && (
            <nav
              aria-label="Mobile table of contents"
              className="absolute left-0 right-0 mt-2 bg-white border border-slate-200 rounded-xl shadow-xl p-2 max-h-72 overflow-y-auto z-40"
            >
              <ul className="space-y-1">
                {sections.map((section) => {
                  const isActive = activeId === section.id;
                  return (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        onClick={(e) => scrollToSection(e, section.id)}
                        className={`block px-3 py-2 rounded-lg text-xs transition-colors ${
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
          )}
        </div>
      </div>

      {/* Desktop Sticky Sidebar TOC */}
      <aside className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start">
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
          <p className="text-[11px] font-bold uppercase tracking-widest text-[#DC2626] mb-1">
            Statute Navigation
          </p>
          <p className="text-sm font-bold text-slate-900 mb-4 pb-3 border-b border-slate-100">
            Cold Storage Lien &amp; Auction
          </p>
          <nav aria-label="Table of contents">
            <ul className="space-y-1">
              {sections.map((section) => {
                const isActive = activeId === section.id;
                return (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      onClick={(e) => scrollToSection(e, section.id)}
                      className={`block px-3 py-2 rounded-lg text-xs transition-all ${
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
        </div>
      </aside>
    </>
  );
}
