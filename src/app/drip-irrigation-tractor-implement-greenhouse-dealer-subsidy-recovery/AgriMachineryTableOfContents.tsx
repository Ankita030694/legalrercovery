"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const AGRI_MACHINERY_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-overview", label: "DEALER & SUBSIDY SQUEEZE" },
  { id: "heading-cpc80-writ", label: "CPC s.80 & WRIT REMEDIES" },
  { id: "heading-decision-tree", label: "5-STAGE RECOVERY FLOW" },
  { id: "heading-statutory-matrix", label: "STATUTORY REMEDY MATRIX" },
  { id: "heading-scenario-tabs", label: "4 FAILURE MODES & PLAYBOOKS" },
  { id: "heading-worked-ledger", label: "₹32L RECOVERY LEDGER" },
  { id: "heading-evidence-checklist", label: "GPS & BSA s.63 DOSSIER" },
  { id: "heading-cta", label: "SINGLE OR BULK NOTICE" },
  { id: "heading-related", label: "TOOLS & RELATED GUIDES" },
  { id: "heading-faqs", label: "FAQS" },
  { id: "heading-sources", label: "STATUTORY SOURCES" },
];

interface AgriMachineryTableOfContentsProps {
  sections?: TOCSection[];
}

export default function AgriMachineryTableOfContents({
  sections = AGRI_MACHINERY_TOC_SECTIONS,
}: AgriMachineryTableOfContentsProps) {
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
      {/* Mobile Sticky Dropdown TOC */}
      <div
        ref={dropdownRef}
        className="lg:hidden sticky top-20 z-30 w-full mb-4 bg-slate-50/95 backdrop-blur-sm border-b border-slate-200 py-3 px-4 -mx-4 sm:-mx-6 select-none"
      >
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          className="w-full flex items-center justify-between px-4 py-2.5 bg-white border border-slate-300 rounded-xl shadow-sm text-xs font-bold text-slate-900"
        >
          <span className="truncate">
            <span className="text-[#DC2626] mr-1.5">SECTION:</span>
            {activeSection?.label}
          </span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            className={`shrink-0 ml-2 transition-transform ${isOpen ? "rotate-180" : ""}`}
            aria-hidden="true"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>

        {isOpen && (
          <nav
            aria-label="Mobile Table of Contents"
            className="mt-2 bg-white border border-slate-200 rounded-xl shadow-lg p-2 max-h-72 overflow-y-auto"
          >
            <ul className="space-y-1">
              {sections.map((section, idx) => {
                const isActive = section.id === activeId;
                return (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      onClick={(e) => scrollToSection(e, section.id)}
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs transition-colors ${
                        isActive
                          ? "bg-[#DC2626] text-white font-bold shadow-sm"
                          : "text-slate-700 hover:bg-slate-100"
                      }`}
                    >
                      <span className="opacity-75 font-mono">{String(idx + 1).padStart(2, "0")}</span>
                      <span className="truncate">{section.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        )}
      </div>

      {/* Desktop Sticky Sidebar TOC */}
      <aside className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start">
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
          <p className="text-[11px] font-black uppercase tracking-widest text-[#DC2626] mb-1">
            Creditor Playbook Index
          </p>
          <p className="text-xs text-slate-500 mb-4">
            Navigate dealer credit, PMKSY subsidy writs &amp; PDC recovery
          </p>
          <nav aria-label="Table of Contents">
            <ul className="space-y-1">
              {sections.map((section, idx) => {
                const isActive = section.id === activeId;
                return (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      onClick={(e) => scrollToSection(e, section.id)}
                      className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs transition-all ${
                        isActive
                          ? "bg-[#DC2626] text-white font-bold shadow-sm"
                          : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 font-medium"
                      }`}
                    >
                      <span
                        className={`text-[10px] font-mono ${
                          isActive ? "text-red-100" : "text-slate-400"
                        }`}
                      >
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <span className="leading-snug">{section.label}</span>
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
