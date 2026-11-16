"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const PBG_INVOCATION_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-retaliatory-trap", label: "The Retaliatory PBG Trap" },
  { id: "heading-conditional-vs-unconditional", label: "Conditional vs Unconditional BGs" },
  { id: "heading-section-9-standards", label: "Section 9 Arbitration Act Standards" },
  { id: "heading-fraud-special-equities", label: "Egregious Fraud & Special Equities" },
  { id: "heading-interactive-scenarios", label: "4 Live Commercial Scenarios" },
  { id: "heading-emergency-timeline", label: "72-Hour Emergency Action Timeline" },
  { id: "heading-post-encashment-restitution", label: "Post-Encashment Restitution Strategy" },
  { id: "heading-worked-financial-ledger", label: "Worked Restitution Ledger (₹50L PBG)" },
  { id: "heading-evidence-bsa63", label: "BSA 2023 s.63 Evidence Checklist" },
  { id: "heading-defense-preemption", label: "Pre-Emption of Buyer & Bank Defenses" },
  { id: "heading-judicial-precedents", label: "Verified Supreme Court Precedents" },
  { id: "heading-faqs", label: "Frequently Asked Questions" },
  { id: "heading-statutory-sources", label: "Bare Acts & Statutory Authorities" },
];

interface PbgInvocationTableOfContentsProps {
  sections?: TOCSection[];
}

export default function PbgInvocationTableOfContents({
  sections = PBG_INVOCATION_TOC_SECTIONS,
}: PbgInvocationTableOfContentsProps) {
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
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sections]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -90;
      const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveId(id);
      setIsOpen(false);
    }
  };

  const activeSection = sections.find((s) => s.id === activeId) || sections[0];

  return (
    <>
      {/* Mobile Sticky Bar */}
      <div className="lg:hidden sticky top-20 z-30 bg-slate-50/95 backdrop-blur-sm border-b border-slate-200 py-3 px-4 -mx-4 sm:-mx-6 mb-6">
        <div className="relative" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm font-semibold text-slate-800 shadow-xs"
            aria-expanded={isOpen}
            aria-label="Table of Contents Navigation"
          >
            <span className="truncate pr-2">
              <span className="text-slate-400 font-normal mr-2">Jump to:</span>
              {activeSection.label}
            </span>
            <svg
              className={`w-4 h-4 text-slate-500 transition-transform ${isOpen ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isOpen && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-200 rounded-xl shadow-xl max-h-72 overflow-y-auto z-40 py-2">
              {sections.map((sec, idx) => (
                <button
                  key={sec.id}
                  type="button"
                  onClick={() => scrollToSection(sec.id)}
                  className={`w-full text-left px-4 py-2 text-xs sm:text-sm transition-colors flex items-center gap-2 ${
                    activeId === sec.id
                      ? "bg-red-50 text-[#DC2626] font-bold"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  <span className="text-[10px] w-5 text-slate-400 font-mono">{idx + 1}.</span>
                  <span className="truncate">{sec.label}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Desktop Sticky Aside */}
      <aside className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start">
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
          <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100">
            <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
            <p className="text-xs font-bold uppercase tracking-wider text-slate-700">
              Navigation &bull; Sections
            </p>
          </div>
          <nav className="space-y-1">
            {sections.map((sec, idx) => {
              const isActive = activeId === sec.id;
              return (
                <button
                  key={sec.id}
                  type="button"
                  onClick={() => scrollToSection(sec.id)}
                  className={`w-full text-left px-3 py-2 rounded-xl text-xs transition-all flex items-center gap-2.5 ${
                    isActive
                      ? "bg-[#DC2626] text-white font-bold shadow-xs translate-x-1"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  <span
                    className={`text-[10px] font-mono shrink-0 w-4 ${
                      isActive ? "text-red-200" : "text-slate-400"
                    }`}
                  >
                    {idx + 1}.
                  </span>
                  <span className="truncate">{sec.label}</span>
                </button>
              );
            })}
          </nav>

          <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] text-slate-500">
            <p className="font-semibold text-slate-700 mb-1">Emergency Consultation</p>
            <p className="leading-relaxed">
              Facing imminent encashment within 24–48 hours? Section 9 urgent listing requires verified draft petitions.
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}
