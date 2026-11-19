"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const ENGINEERING_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-overview", label: "OC & EC LEVERAGE GAP" },
  { id: "heading-reciprocal-promises", label: "CONTRACT ACT s.51–52" },
  { id: "heading-safety-boundaries", label: "SAFETY VS COMMERCIAL" },
  { id: "heading-decision-tree", label: "5-STEP DECISION TREE" },
  { id: "heading-statutory-matrix", label: "STATUTORY MATRIX" },
  { id: "heading-scenario-tabs", label: "4 DEFAULT SCENARIOS" },
  { id: "heading-worked-ledger", label: "WORKED ₹34.8L LEDGER" },
  { id: "heading-evidence-checklist", label: "BSA s.63 EVIDENCE" },
  { id: "heading-dual-cta", label: "START RECOVERY" },
  { id: "heading-internal-links", label: "HUB & TOOLS" },
  { id: "heading-faqs", label: "FAQS" },
  { id: "heading-sources", label: "STATUTORY SOURCES" },
];

interface EngineeringRecoveryTableOfContentsProps {
  sections?: TOCSection[];
}

export default function EngineeringRecoveryTableOfContents({
  sections = ENGINEERING_TOC_SECTIONS,
}: EngineeringRecoveryTableOfContentsProps) {
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
      const yOffset = -96;
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
      {/* Mobile / Tablet Sticky Dropdown Bar */}
      <div
        ref={dropdownRef}
        className="lg:hidden sticky top-20 z-30 bg-slate-50/95 backdrop-blur-sm border-b border-slate-200 py-3 px-4 -mx-4 sm:-mx-6 mb-4 select-none"
      >
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          className="w-full flex items-center justify-between gap-3 px-4 py-2.5 rounded-xl bg-white border border-slate-200 shadow-sm text-left"
        >
          <span className="flex flex-col min-w-0">
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
              On This Playbook
            </span>
            <span className="text-xs font-bold text-slate-900 truncate">
              {activeSection?.label}
            </span>
          </span>
          <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-slate-100 text-slate-700 text-xs font-bold shrink-0">
            {isOpen ? "−" : "+"}
          </span>
        </button>

        {isOpen && (
          <nav
            aria-label="Table of contents mobile"
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
                      className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs transition-colors ${
                        isActive
                          ? "bg-[#DC2626] text-white font-bold shadow-sm"
                          : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 font-medium"
                      }`}
                    >
                      <span className="text-[10px] opacity-80 w-4 shrink-0">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <span className="truncate">{section.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        )}
      </div>

      {/* Desktop Sticky Left Sidebar */}
      <aside
        aria-label="Table of contents"
        className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start"
      >
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
          <p className="text-[11px] font-extrabold uppercase tracking-widest text-slate-400 mb-3 pb-2 border-b border-slate-100">
            Engineering Recovery Guide
          </p>
          <nav>
            <ul className="space-y-1">
              {sections.map((section, idx) => {
                const isActive = section.id === activeId;
                return (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      onClick={(e) => scrollToSection(e, section.id)}
                      className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs transition-all ${
                        isActive
                          ? "bg-[#DC2626] text-white font-bold shadow-sm"
                          : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 font-medium"
                      }`}
                    >
                      <span
                        className={`text-[10px] font-bold w-4 shrink-0 ${
                          isActive ? "text-red-100" : "text-slate-400"
                        }`}
                      >
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <span className="truncate">{section.label}</span>
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
