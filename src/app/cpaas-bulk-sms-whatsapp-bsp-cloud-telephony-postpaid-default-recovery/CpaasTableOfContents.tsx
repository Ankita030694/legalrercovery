"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const CPAAS_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-overview", label: "PASS-THROUGH MARGIN SQUEEZE" },
  { id: "heading-decision-tree", label: "5-STEP ESCALATION PIPELINE" },
  { id: "heading-statutory-matrix", label: "STATUTORY & FORUM MATRIX" },
  { id: "heading-scenario-tabs", label: "4 FAILURE PLAYBOOKS" },
  { id: "heading-worked-ledger", label: "₹40L WHATSAPP BLAST LEDGER" },
  { id: "heading-bsa-evidence", label: "BSA s.63 CDR & WEBHOOK PROOF" },
  { id: "heading-cta", label: "START RECOVERY OR CSV BATCH" },
  { id: "heading-cross-links", label: "TELECOM & B2B RESOURCES" },
  { id: "heading-faqs", label: "FREQUENTLY ASKED QUESTIONS" },
  { id: "heading-sources", label: "PRIMARY STATUTORY SOURCES" },
];

interface CpaasTableOfContentsProps {
  sections?: TOCSection[];
}

export default function CpaasTableOfContents({
  sections = CPAAS_TOC_SECTIONS,
}: CpaasTableOfContentsProps) {
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
    return () => document.removeEventListener("mousedown", handleClickOutside);
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
      {/* Mobile Sticky TOC Bar */}
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
          <div className="min-w-0">
            <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
              On This Page
            </span>
            <span className="block text-xs font-bold text-slate-900 truncate">
              {activeSection?.label}
            </span>
          </div>
          <span className="text-xs font-bold text-[#DC2626] shrink-0">
            {isOpen ? "Close ▲" : "Sections ▼"}
          </span>
        </button>

        {isOpen && (
          <nav
            aria-label="Table of contents"
            className="mt-2 bg-white border border-slate-200 rounded-xl shadow-lg p-2 max-h-72 overflow-y-auto"
          >
            {sections.map((section) => {
              const isActive = section.id === activeId;
              return (
                <a
                  key={section.id}
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
              );
            })}
          </nav>
        )}
      </div>

      {/* Desktop Sticky Sidebar TOC */}
      <aside className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start">
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
          <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-3 px-2">
            CPaaS &amp; BSP Playbook
          </p>
          <nav aria-label="Table of contents" className="space-y-1">
            {sections.map((section) => {
              const isActive = section.id === activeId;
              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => scrollToSection(e, section.id)}
                  className={`block px-3 py-2 rounded-xl text-xs transition-all ${
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
