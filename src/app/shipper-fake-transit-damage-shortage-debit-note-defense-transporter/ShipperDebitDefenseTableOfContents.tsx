"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const SHIPPER_DEBIT_DEFENSE_TOC: TOCSection[] = [
  { id: "heading-double-dip-crisis", label: "THE DOUBLE-DIP CRISIS" },
  { id: "heading-statutory-precedents", label: "LANDMARK PRECEDENTS" },
  { id: "heading-statutory-matrix", label: "STATUTORY DEFENSE MATRIX" },
  { id: "heading-escalation-flow", label: "5-STAGE RECOVERY PROTOCOL" },
  { id: "heading-decision-tree", label: "DECISION TREE FLOWCHART" },
  { id: "heading-scenario-tabs", label: "FAILURE MODE SCENARIOS" },
  { id: "heading-financial-ledger", label: "WORKED FINANCIAL LEDGER" },
  { id: "heading-evidence-checklist", label: "BSA 2023 EVIDENCE DOSSIER" },
  { id: "heading-counter-offensive", label: "CARRIER LIEN & SUMMARY SUIT" },
  { id: "heading-faqs", label: "FREQUENTLY ASKED QUESTIONS" },
  { id: "heading-sources", label: "STATUTORY SOURCES" },
];

interface ShipperDebitDefenseTableOfContentsProps {
  sections?: TOCSection[];
}

export default function ShipperDebitDefenseTableOfContents({
  sections = SHIPPER_DEBIT_DEFENSE_TOC,
}: ShipperDebitDefenseTableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>(sections[0]?.id || "");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close mobile dropdown on outside click
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
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const activeSection = sections.find((s) => s.id === activeId) || sections[0];

  return (
    <>
      {/* Mobile Sticky Dropdown Navigation */}
      <div className="lg:hidden sticky top-20 z-30 bg-slate-50/95 backdrop-blur-sm border-b border-slate-200 py-3 px-4 -mx-4 sm:-mx-6 mb-6">
        <div className="relative" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between px-4 py-2.5 bg-white border border-slate-300 rounded-xl text-xs font-bold text-slate-800 shadow-xs"
            aria-expanded={isOpen}
            aria-label="Table of Contents"
          >
            <span className="flex items-center gap-2 truncate">
              <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
              <span className="text-slate-500 uppercase text-[10px] tracking-wider">Jump to:</span>
              <span className="truncate text-slate-900">{activeSection?.label}</span>
            </span>
            <span className={`transform transition-transform duration-200 text-slate-400 ${isOpen ? "rotate-180" : ""}`}>
              &darr;
            </span>
          </button>

          {isOpen && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-200 rounded-xl shadow-xl max-h-80 overflow-y-auto z-40 p-2 divide-y divide-slate-100">
              {sections.map((section) => {
                const isActive = activeId === section.id;
                return (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    onClick={() => setIsOpen(false)}
                    className={`block px-3 py-2 text-xs font-semibold rounded-lg transition-colors ${
                      isActive
                        ? "bg-[#DC2626] text-white font-bold"
                        : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                    }`}
                  >
                    {section.label}
                  </a>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Desktop Sticky Sidebar TOC */}
      <aside className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start">
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
          <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100">
            <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
            <p className="text-xs font-black uppercase tracking-wider text-slate-800">
              Defense &amp; Playbook Index
            </p>
          </div>
          <nav aria-label="Table of Contents Navigation" className="space-y-1">
            {sections.map((section, idx) => {
              const isActive = activeId === section.id;
              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className={`group flex items-center justify-between px-3 py-2 rounded-xl text-xs transition-all duration-150 ${
                    isActive
                      ? "bg-[#DC2626] text-white font-bold shadow-xs"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 font-medium"
                  }`}
                >
                  <span className="truncate">{section.label}</span>
                  <span
                    className={`text-[10px] ml-2 font-mono shrink-0 ${
                      isActive ? "text-red-100 font-bold" : "text-slate-400 group-hover:text-slate-600"
                    }`}
                  >
                    0{idx + 1}
                  </span>
                </a>
              );
            })}
          </nav>

          <div className="mt-5 pt-4 border-t border-slate-100">
            <div className="p-3 bg-red-50 rounded-xl border border-red-100 text-[11px] text-red-900 leading-relaxed font-medium">
              <span className="font-bold text-[#DC2626] block mb-1">Commercial Rule of Law:</span>
              Disputed unliquidated damage claims cannot be unilaterally debited from admitted freight bills without court adjudication.
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
