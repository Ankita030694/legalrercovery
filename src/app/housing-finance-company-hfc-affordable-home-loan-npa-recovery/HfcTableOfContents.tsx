"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const HFC_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-sarfaesi-floor", label: "₹1L SARFAESI FLOOR" },
  { id: "heading-decision-tree", label: "ESCALATION TREE" },
  { id: "heading-statutory-matrix", label: "STATUTORY MATRIX" },
  { id: "heading-scenario-tabs", label: "4 FAILURE MODES" },
  { id: "heading-tripartite-builder", label: "TRIPARTITE DEFAULTS" },
  { id: "heading-informal-mortgage", label: "INFORMAL & TITLE CURE" },
  { id: "heading-worked-ledger", label: "WORKED ₹8.4L LEDGER" },
  { id: "heading-evidence-checklist", label: "BSA s.63 & CERSAI" },
  { id: "heading-deploy-cta", label: "DEPLOY RECOVERY" },
  { id: "heading-faqs", label: "FAQ" },
  { id: "heading-sources", label: "STATUTORY PORTALS" },
];

interface HfcTableOfContentsProps {
  sections?: TOCSection[];
}

export default function HfcTableOfContents({
  sections = HFC_TOC_SECTIONS,
}: HfcTableOfContentsProps) {
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
            <nav
              aria-label="Mobile Table of Contents"
              className="absolute left-0 right-0 mt-2 bg-white border border-slate-200 rounded-xl shadow-xl p-2 max-h-72 overflow-y-auto z-40"
            >
              {sections.map((section) => {
                const isActive = activeId === section.id;
                return (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    onClick={(e) => scrollToSection(e, section.id)}
                    className={`block px-3 py-2 rounded-lg text-xs uppercase tracking-wide transition-colors ${
                      isActive
                        ? "bg-[#DC2626] text-white font-bold"
                        : "text-slate-700 hover:bg-slate-100"
                    }`}
                  >
                    {section.label}
                  </a>
                );
              })}
            </nav>
          )}
        </div>
      </div>

      {/* Desktop Sticky Sidebar TOC */}
      <aside className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start">
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
          <p className="text-[11px] font-extrabold uppercase tracking-widest text-slate-400 mb-3 px-2">
            HFC SARFAESI Playbook
          </p>
          <nav aria-label="Table of Contents" className="space-y-1">
            {sections.map((section) => {
              const isActive = activeId === section.id;
              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => scrollToSection(e, section.id)}
                  className={`block px-3 py-2 rounded-lg text-xs tracking-wide transition-colors ${
                    isActive
                      ? "bg-[#DC2626] text-white font-bold shadow-sm"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 font-medium"
                  }`}
                >
                  {section.label}
                </a>
              );
            })}
          </nav>
        </div>
      </aside>
    </>
  );
}
