"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const CIC_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-penalty-trap", label: "₹100/DAY TRAP & LEVERAGE" },
  { id: "heading-decision-tree", label: "PRE-REPORTING TREE" },
  { id: "heading-statutory-matrix", label: "STATUTORY MATRIX" },
  { id: "heading-scenario-tabs", label: "4 REPORTING MODES" },
  { id: "heading-cmr-leverage", label: "SME CMR RANK LEVERAGE" },
  { id: "heading-wilful-tat", label: "WILFUL & 30-DAY TAT" },
  { id: "heading-worked-ledger", label: "WORKED ₹12.5L LEDGER" },
  { id: "heading-evidence-checklist", label: "BSA s.63 & NODAL AUDIT" },
  { id: "heading-deploy-cta", label: "DEPLOY CIC NOTICES" },
  { id: "heading-faqs", label: "FAQ" },
  { id: "heading-sources", label: "RBI & CIC PORTALS" },
];

interface CicPreReportingTableOfContentsProps {
  sections?: TOCSection[];
}

export default function CicPreReportingTableOfContents({
  sections = CIC_TOC_SECTIONS,
}: CicPreReportingTableOfContentsProps) {
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

  const activeLabel = sections.find((s) => s.id === activeId)?.label || "JUMP TO SECTION";

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
            className="w-full flex items-center justify-between px-4 py-2.5 bg-white border border-slate-300 rounded-xl shadow-sm text-xs font-bold uppercase tracking-wider text-slate-800 cursor-pointer"
          >
            <span className="truncate">Section: {activeLabel}</span>
            <span className="text-[#DC2626] ml-2 text-sm">{isOpen ? "▲" : "▼"}</span>
          </button>

          {isOpen && (
            <div className="absolute left-0 right-0 mt-2 bg-white border border-slate-200 rounded-xl shadow-xl z-40 max-h-80 overflow-y-auto p-2 space-y-1">
              {sections.map((section, idx) => {
                const isActive = activeId === section.id;
                return (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    onClick={(e) => scrollToSection(e, section.id)}
                    className={`block px-3 py-2 rounded-lg text-xs font-semibold transition-colors ${
                      isActive
                        ? "bg-[#DC2626] text-white font-bold"
                        : "text-slate-700 hover:bg-slate-100"
                    }`}
                  >
                    {idx + 1}. {section.label}
                  </a>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Desktop Sticky Sidebar TOC */}
      <aside className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
        <p className="text-[11px] font-extrabold uppercase tracking-widest text-slate-400 mb-3 px-2">
          CIC Compliance Playbook
        </p>
        <nav aria-label="Table of Contents" className="space-y-1">
          {sections.map((section, idx) => {
            const isActive = activeId === section.id;
            return (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={(e) => scrollToSection(e, section.id)}
                className={`block px-3 py-2 rounded-xl text-xs transition-all ${
                  isActive
                    ? "bg-[#DC2626] text-white font-bold shadow-sm"
                    : "text-slate-600 font-semibold hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                {idx + 1}. {section.label}
              </a>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
