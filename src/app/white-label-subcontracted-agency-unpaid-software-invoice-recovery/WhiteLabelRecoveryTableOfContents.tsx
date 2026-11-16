"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const WHITE_LABEL_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-white-label-trap", label: "The White-Label Margin Squeeze" },
  { id: "heading-decision-tree", label: "5-Stage Escalation Protocol" },
  { id: "heading-statutory-matrix", label: "Statutory Enforcement Matrix" },
  { id: "heading-scenario-tabs", label: "4 Subcontractor Failure Modes" },
  { id: "heading-copyright-ip-warranty", label: "Copyright s.19 IP Warranty Void" },
  { id: "heading-piercing-nda-shield", label: "Piercing the NDA Shield Lawfully" },
  { id: "heading-back-to-back-defense", label: "Defeating 'Paid-When-Paid' Traps" },
  { id: "heading-worked-example", label: "Worked ₹28.5L Settlement Ledger" },
  { id: "heading-bsa-evidence-checklist", label: "BSA s.63 Git & Telemetry Dossier" },
  { id: "heading-cta", label: "Dev Shop Recovery Desk" },
  { id: "heading-faqs", label: "Frequently Asked Questions" },
  { id: "heading-sources", label: "Statutory References & Authorities" },
];

interface WhiteLabelRecoveryTableOfContentsProps {
  sections?: TOCSection[];
}

export default function WhiteLabelRecoveryTableOfContents({
  sections = WHITE_LABEL_TOC_SECTIONS,
}: WhiteLabelRecoveryTableOfContentsProps) {
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

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
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

  const activeSection = sections.find((s) => s.id === activeId) || sections[0];

  return (
    <>
      {/* Mobile Sticky Bar */}
      <div className="lg:hidden sticky top-20 z-30 bg-slate-50/95 backdrop-blur-sm border-b border-slate-200 py-3 px-4 -mx-4 sm:-mx-6 mb-4">
        <div className="relative" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between px-4 py-2.5 bg-white border border-slate-300 rounded-xl text-xs font-semibold text-slate-800 shadow-xs active:bg-slate-100"
            aria-expanded={isOpen}
            aria-label="Table of contents selector"
          >
            <span className="truncate pr-2">
              <span className="text-slate-400 mr-2 uppercase tracking-wider text-[10px]">Jump to:</span>
              {activeSection?.label}
            </span>
            <svg
              className={`w-4 h-4 text-slate-500 transition-transform duration-200 shrink-0 ${isOpen ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isOpen && (
            <div className="absolute left-0 right-0 mt-2 bg-white border border-slate-200 rounded-xl shadow-xl max-h-80 overflow-y-auto z-40 py-2 divide-y divide-slate-100">
              {sections.map((section, idx) => {
                const isActive = activeId === section.id;
                return (
                  <button
                    key={section.id}
                    type="button"
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full text-left px-4 py-2.5 text-xs transition-colors flex items-center gap-2 ${
                      isActive ? "bg-red-50 text-[#DC2626] font-bold" : "text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    <span className="text-[10px] text-slate-400 font-mono w-5">{idx + 1}.</span>
                    <span className="truncate">{section.label}</span>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Desktop Sticky Aside */}
      <aside className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start">
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
          <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-3 px-1 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
            Table of Contents
          </p>
          <nav className="space-y-1" aria-label="Page navigation">
            {sections.map((section, idx) => {
              const isActive = activeId === section.id;
              return (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left px-3 py-2 rounded-xl text-xs transition-all flex items-center gap-2 cursor-pointer ${
                    isActive
                      ? "bg-[#DC2626] text-white font-bold shadow-xs translate-x-1"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  <span className={`text-[10px] font-mono shrink-0 ${isActive ? "text-red-200" : "text-slate-400"}`}>
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="truncate">{section.label}</span>
                </button>
              );
            })}
          </nav>

          <div className="mt-6 pt-4 border-t border-slate-100">
            <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
              <p className="text-[11px] font-bold text-slate-900 mb-1">Subcontractor IP Advisory</p>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                White-label contracts without full payment retain copyright under Section 19 of the Copyright Act.
              </p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
