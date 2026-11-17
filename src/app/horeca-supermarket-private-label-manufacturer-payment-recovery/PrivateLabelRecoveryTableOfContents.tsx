"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const PRIVATE_LABEL_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-orphaned-batch-crisis", label: "THE ORPHANED BATCH CRISIS" },
  { id: "heading-sale-of-goods-act", label: "SALE OF GOODS ACT S.55 & S.44" },
  { id: "heading-msmed-act-protection", label: "MSMED ACT S.15–18 RECOVERY" },
  { id: "heading-regulatory-compliance", label: "DRUGS & COSMETICS / FSSAI RULES" },
  { id: "heading-landmark-precedents", label: "LANDMARK COURT PRECEDENTS" },
  { id: "heading-decision-tree", label: "OPERATIONAL DECISION TREE" },
  { id: "heading-statutory-matrix", label: "STATUTORY CLAIMS MATRIX" },
  { id: "heading-failure-modes", label: "4 COMMERCIAL DISPUTE PLAYBOOKS" },
  { id: "heading-worked-calculation", label: "WORKED FINANCIAL LEDGER" },
  { id: "heading-step-by-step-sop", label: "7-STEP OPERATIONAL SOP" },
  { id: "heading-bsa-evidence", label: "BSA S.63 EVIDENCE DOSSIER" },
  { id: "heading-faqs", label: "FREQUENTLY ASKED QUESTIONS" },
  { id: "heading-statutory-citations", label: "STATUTORY ACTS & CITATIONS" },
];

interface PrivateLabelRecoveryTableOfContentsProps {
  sections?: TOCSection[];
}

export default function PrivateLabelRecoveryTableOfContents({
  sections = PRIVATE_LABEL_TOC_SECTIONS,
}: PrivateLabelRecoveryTableOfContentsProps) {
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
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -90;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveId(id);
      setIsOpen(false);
    }
  };

  const activeLabel = sections.find((s) => s.id === activeId)?.label || "Table of Contents";

  return (
    <>
      {/* Mobile Sticky Bar */}
      <div className="lg:hidden sticky top-20 z-30 bg-slate-50/95 backdrop-blur-sm border-b border-slate-200 py-3 px-4 -mx-4 sm:-mx-6 mb-6">
        <div className="relative" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between px-4 py-2.5 bg-white border border-slate-200 rounded-xl shadow-sm text-xs font-bold text-slate-800"
            aria-expanded={isOpen}
          >
            <span className="flex items-center gap-2 truncate">
              <span className="w-2 h-2 rounded-full bg-[#DC2626] shrink-0" />
              <span className="truncate">{activeLabel}</span>
            </span>
            <svg
              className={`w-4 h-4 text-slate-500 transition-transform shrink-0 ${
                isOpen ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isOpen && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-200 rounded-xl shadow-xl py-2 z-40 max-h-80 overflow-y-auto">
              {sections.map((section) => (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left px-4 py-2.5 text-xs font-semibold transition-colors flex items-center gap-2 ${
                    activeId === section.id
                      ? "bg-red-50 text-[#DC2626] font-bold border-l-4 border-[#DC2626]"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                      activeId === section.id ? "bg-[#DC2626]" : "bg-slate-300"
                    }`}
                  />
                  <span className="truncate">{section.label}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Desktop Sticky Aside */}
      <aside className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start">
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
          <div className="flex items-center gap-2.5 pb-4 border-b border-slate-100 mb-4">
            <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Contract Manufacturer SOP
            </span>
          </div>

          <nav className="space-y-1">
            {sections.map((section) => {
              const isActive = activeId === section.id;
              return (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left px-3 py-2 rounded-xl text-xs transition-all flex items-center gap-2.5 cursor-pointer ${
                    isActive
                      ? "bg-[#DC2626] text-white font-bold shadow-sm"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 font-medium"
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                      isActive ? "bg-white" : "bg-slate-300"
                    }`}
                  />
                  <span className="truncate">{section.label}</span>
                </button>
              );
            })}
          </nav>

          <div className="mt-6 pt-4 border-t border-slate-100">
            <div className="rounded-xl bg-slate-50 border border-slate-200/80 p-3 text-[11px] leading-relaxed text-slate-600">
              <span className="font-bold text-slate-900 block mb-1">
                Statutory Remedy Note:
              </span>
              Under Sale of Goods Act s.55 &amp; MSMED Act s.15, custom-labeled goods cannot be treated as ordinary inventory. The manufacturer is entitled to the full contract price plus 3x RBI compound interest.
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
