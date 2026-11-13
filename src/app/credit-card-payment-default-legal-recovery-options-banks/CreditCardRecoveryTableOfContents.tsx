"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const CARD_RECOVERY_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-overview", label: "OVERVIEW" },
  { id: "heading-judicial-precedents", label: "JUDICIAL PRECEDENTS" },
  { id: "heading-pattern-analysis", label: "PATTERN ANALYSIS" },
  { id: "heading-escalation-rail", label: "RESOLUTION RAIL" },
  { id: "heading-b2b-playbook", label: "5-STEP PLAYBOOK" },
  { id: "heading-recovery-matrix", label: "FORUM COMPARISON" },
  { id: "heading-recovery-channels", label: "RECOVERY CHANNELS" },
  { id: "heading-worked-portfolio", label: "PORTFOLIO STUDY" },
  { id: "heading-evidence-checklist", label: "BANK EVIDENCE" },
  { id: "heading-faqs", label: "B2B FAQS" },
  { id: "heading-sources", label: "STATUTORY REFS" },
];

interface CreditCardRecoveryTableOfContentsProps {
  sections?: TOCSection[];
}

export default function CreditCardRecoveryTableOfContents({
  sections = CARD_RECOVERY_TOC_SECTIONS,
}: CreditCardRecoveryTableOfContentsProps) {
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
      const yOffset = -100;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveId(id);
      setIsOpen(false);
    }
  };

  const activeLabel = sections.find((s) => s.id === activeId)?.label || "NAVIGATION";

  return (
    <>
      {/* Mobile Sticky Dropdown Navigation */}
      <div
        ref={dropdownRef}
        className="lg:hidden sticky top-16 z-30 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 py-2.5 px-4 shadow-xs"
      >
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Table of Contents Quick Jump"
          className="w-full flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-800 bg-slate-100 hover:bg-slate-200 px-3.5 py-2 rounded-lg border border-slate-300 transition-colors"
        >
          <span className="flex items-center gap-2 truncate">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse shrink-0" />
            <span className="text-slate-500 font-semibold">SECTION:</span>
            <span className="text-slate-900 truncate">{activeLabel}</span>
          </span>
          <span className="text-slate-600 font-black text-sm shrink-0 ml-2">
            {isOpen ? "✕" : "☰"}
          </span>
        </button>

        {isOpen && (
          <div className="mt-2 bg-white rounded-xl border border-slate-200 shadow-xl max-h-72 overflow-y-auto divide-y divide-slate-100">
            {sections.map((section) => {
              const isActive = activeId === section.id;
              return (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left px-4 py-2.5 text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-between ${
                    isActive
                      ? "bg-red-50 text-red-600 font-black border-l-4 border-red-600 pl-3"
                      : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  <span>{section.label}</span>
                  {isActive && <span className="text-red-600 text-xs font-bold">●</span>}
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Desktop Sticky Sidebar Navigation */}
      <aside
        aria-label="Table of Contents Navigation"
        className="hidden lg:block w-64 shrink-0 sticky top-28 space-y-3"
      >
        <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm">
          <div className="flex items-center justify-between pb-3 mb-2 border-b border-slate-100">
            <span className="text-xs font-extrabold tracking-wider uppercase text-slate-900">
              Navigation
            </span>
            <span className="text-[10px] font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded-full uppercase tracking-wider">
              B2B Recovery
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
                  className={`w-full text-left px-3 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-between ${
                    isActive
                      ? "bg-red-600 text-white font-black shadow-xs shadow-red-600/30"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  <span className="truncate">{section.label}</span>
                  {isActive && <span className="text-white text-xs">→</span>}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Quick B2B Action Banner */}
        <div className="p-3.5 bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-xl border border-slate-700 shadow-sm">
          <p className="text-[11px] font-bold uppercase tracking-wider text-red-400 mb-1">
            Portfolio Recovery
          </p>
          <p className="text-xs text-slate-300 leading-snug mb-2.5">
            Bulk advocate legal notices &amp; Lok Adalat pre-litigation representation for bank credit card portfolios.
          </p>
          <button
            type="button"
            onClick={() => scrollToSection("heading-cta-block")}
            className="w-full py-1.5 px-3 rounded-lg bg-red-600 hover:bg-red-700 text-white font-bold text-xs transition-colors text-center"
          >
            Escalate Dues Now
          </button>
        </div>
      </aside>
    </>
  );
}
