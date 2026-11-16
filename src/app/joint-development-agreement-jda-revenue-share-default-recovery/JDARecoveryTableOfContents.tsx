"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const JDA_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-overview", label: "EXECUTIVE SUMMARY" },
  { id: "heading-statutory-hooks", label: "RERA ESCROW ARCHITECTURE" },
  { id: "heading-section-9-freeze", label: "SECTION 9 INVENTORY FREEZE" },
  { id: "heading-precedents", label: "JUDICIAL PRECEDENTS" },
  { id: "heading-decision-tree", label: "RECOVERY DECISION TREE" },
  { id: "heading-statutory-matrix", label: "STATUTORY REMEDY MATRIX" },
  { id: "heading-scenarios", label: "DEFAULT SCENARIOS EXPLORER" },
  { id: "heading-worked-example", label: "WORKED FINANCIAL LEDGER" },
  { id: "heading-sop-rail", label: "5-STAGE RECOVERY SOP" },
  { id: "heading-evidence-checklist", label: "BSA 2023 EVIDENCE DOSSIER" },
  { id: "heading-faqs", label: "FREQUENTLY ASKED QUESTIONS" },
  { id: "heading-sources", label: "STATUTORY REPOSITORIES" },
];

interface JDARecoveryTableOfContentsProps {
  sections?: TOCSection[];
}

export default function JDARecoveryTableOfContents({
  sections = JDA_TOC_SECTIONS,
}: JDARecoveryTableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>(sections[0]?.id || "");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
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

  // Track active section on scroll
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
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveId(id);
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Sticky Bar */}
      <div
        ref={dropdownRef}
        className="lg:hidden sticky top-20 z-30 bg-slate-50/95 backdrop-blur-sm border-b border-slate-200 py-3 px-4 -mx-4 sm:-mx-6 mb-6"
      >
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            Table of Contents
          </span>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700 bg-white border border-slate-300 shadow-sm active:bg-slate-100"
            aria-expanded={isOpen}
            aria-controls="mobile-toc-list"
          >
            <span>Navigate</span>
            <svg
              className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {isOpen && (
          <div
            id="mobile-toc-list"
            className="mt-3 py-2 bg-white rounded-xl border border-slate-200 shadow-xl max-h-72 overflow-y-auto"
          >
            <div className="flex flex-col">
              {sections.map((sec) => {
                const isActive = activeId === sec.id;
                return (
                  <a
                    key={sec.id}
                    href={`#${sec.id}`}
                    onClick={(e) => scrollToSection(e, sec.id)}
                    className={`px-4 py-2 text-xs transition-colors ${
                      isActive
                        ? "bg-[#DC2626] text-white font-bold"
                        : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                    }`}
                  >
                    {sec.label}
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Desktop Sticky Aside */}
      <aside
        aria-label="Table of Contents"
        className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start bg-white border border-slate-200 rounded-2xl p-5 shadow-sm"
      >
        <p className="text-[11px] font-black uppercase tracking-widest text-[#DC2626] mb-3">
          Navigation Architecture
        </p>
        <nav aria-label="JDA Recovery Playbook Sections">
          <ul className="space-y-1">
            {sections.map((sec) => {
              const isActive = activeId === sec.id;
              return (
                <li key={sec.id}>
                  <a
                    href={`#${sec.id}`}
                    onClick={(e) => scrollToSection(e, sec.id)}
                    className={`block px-3 py-2 rounded-xl text-xs transition-all ${
                      isActive
                        ? "bg-[#DC2626] text-white font-bold shadow-sm translate-x-1"
                        : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 font-medium"
                    }`}
                  >
                    {sec.label}
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
