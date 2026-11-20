"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const PRESCHOOL_KIT_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-overview", label: "OVERVIEW & KIT MODEL" },
  { id: "heading-decision-tree", label: "AUDIT DECISION TREE" },
  { id: "heading-statutory-matrix", label: "STATUTORY MATRIX" },
  { id: "heading-piracy-scenarios", label: "4 EVASION SCENARIOS" },
  { id: "heading-worked-ledger", label: "WORKED KIT & ROYALTY LEDGER" },
  { id: "heading-evidence-checklist", label: "BSA S.63 AUDIT CHECKLIST" },
  { id: "heading-dual-cta", label: "SERVE NOTICE / BULK CSV" },
  { id: "heading-hub-spokes", label: "FRANCHISOR HUB & TOOLS" },
  { id: "heading-faqs", label: "FAQs" },
  { id: "heading-sources", label: "STATUTORY SOURCES" },
];

interface PreschoolKitTableOfContentsProps {
  sections?: TOCSection[];
}

export default function PreschoolKitTableOfContents({
  sections = PRESCHOOL_KIT_TOC_SECTIONS,
}: PreschoolKitTableOfContentsProps) {
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

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveId(id);
      setIsOpen(false);
    }
  };

  const activeLabel = sections.find((s) => s.id === activeId)?.label || sections[0]?.label;

  return (
    <>
      {/* Mobile Sticky TOC Dropdown */}
      <div
        ref={dropdownRef}
        className="lg:hidden sticky top-20 z-30 bg-slate-50/95 backdrop-blur-sm border-b border-slate-200 py-3 px-4 -mx-4 sm:-mx-6 mb-4"
      >
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl bg-white border border-slate-200 shadow-sm text-xs font-bold text-slate-900 uppercase tracking-wider"
        >
          <span className="truncate">On This Page: {activeLabel}</span>
          <span className="ml-2 text-[#DC2626] shrink-0">{isOpen ? "▲" : "▼"}</span>
        </button>

        {isOpen && (
          <nav
            aria-label="Mobile Table of Contents"
            className="mt-2 bg-white border border-slate-200 rounded-xl shadow-lg p-2 max-h-72 overflow-y-auto space-y-1"
          >
            {sections.map((sec) => {
              const isActive = activeId === sec.id;
              return (
                <button
                  key={sec.id}
                  type="button"
                  onClick={() => scrollToSection(sec.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-xs transition-colors ${
                    isActive
                      ? "bg-[#DC2626] text-white font-bold shadow-sm"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 font-medium"
                  }`}
                >
                  {sec.label}
                </button>
              );
            })}
          </nav>
        )}
      </div>

      {/* Desktop Sticky Left Sidebar TOC */}
      <aside className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start">
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
          <p className="text-[11px] font-black uppercase tracking-widest text-slate-400 mb-3 px-2">
            Franchisor Playbook Index
          </p>
          <nav aria-label="Desktop Table of Contents" className="space-y-1">
            {sections.map((sec) => {
              const isActive = activeId === sec.id;
              return (
                <button
                  key={sec.id}
                  type="button"
                  onClick={() => scrollToSection(sec.id)}
                  className={`w-full text-left px-3 py-2 rounded-xl text-xs transition-all cursor-pointer ${
                    isActive
                      ? "bg-[#DC2626] text-white font-bold shadow-sm"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 font-medium"
                  }`}
                >
                  {sec.label}
                </button>
              );
            })}
          </nav>
        </div>
      </aside>
    </>
  );
}
