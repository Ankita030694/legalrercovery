"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const DMC_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-friday-utr-scam", label: "FRIDAY 6 PM UTR SCAM" },
  { id: "heading-dmc-statutory-matrix", label: "STATUTORY MATRIX" },
  { id: "heading-arrival-escalation-tree", label: "5-STAGE ESCALATION" },
  { id: "heading-dmc-scenario-tabs", label: "DMC DEFAULT SCENARIOS" },
  { id: "heading-dmc-worked-ledger", label: "₹18.5L WORKED LEDGER" },
  { id: "heading-utr-bsa-evidence", label: "UTR & BSA S.63 PROOF" },
  { id: "heading-tafi-taai-iato", label: "TAFI / TAAI / IATO VS LAW" },
  { id: "heading-dmc-faqs", label: "DMC RECOVERY FAQS" },
  { id: "heading-dmc-sources", label: "STATUTORY SOURCES" },
];

interface DmcTableOfContentsProps {
  sections?: TOCSection[];
}

export default function DmcTableOfContents({
  sections = DMC_TOC_SECTIONS,
}: DmcTableOfContentsProps) {
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
        className="lg:hidden sticky top-20 z-30 w-full mb-4 py-3 px-4 -mx-4 sm:-mx-6 bg-slate-50/95 backdrop-blur-sm border-b border-slate-200 select-none"
      >
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl bg-white border border-slate-300 shadow-sm text-left text-xs font-bold uppercase tracking-wider text-slate-800 cursor-pointer"
        >
          <span className="truncate pr-2">
            <span className="text-[#DC2626] mr-2">Section:</span>
            {activeSection?.label}
          </span>
          <svg
            className={`w-4 h-4 text-slate-500 shrink-0 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {isOpen && (
          <nav
            aria-label="DMC Guide Sections"
            className="mt-2 bg-white border border-slate-200 rounded-xl shadow-lg p-2 max-h-72 overflow-y-auto"
          >
            <ul className="space-y-1">
              {sections.map((section) => {
                const isActive = section.id === activeId;
                return (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      onClick={(e) => scrollToSection(e, section.id)}
                      className={`block px-3 py-2 rounded-lg text-xs font-semibold transition-colors ${
                        isActive
                          ? "bg-[#DC2626] text-white font-bold shadow-sm"
                          : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
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

      {/* Desktop Sticky Sidebar TOC (no headings inside sidebar) */}
      <aside className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start">
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
          <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-3 px-2">
            DMC Recovery Playbook
          </p>
          <nav aria-label="Table of Contents">
            <ul className="space-y-1">
              {sections.map((section) => {
                const isActive = section.id === activeId;
                return (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      onClick={(e) => scrollToSection(e, section.id)}
                      className={`block px-3 py-2 rounded-lg text-xs tracking-wide transition-colors ${
                        isActive
                          ? "bg-[#DC2626] text-white font-bold shadow-sm"
                          : "text-slate-600 font-medium hover:bg-slate-100 hover:text-slate-900"
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
