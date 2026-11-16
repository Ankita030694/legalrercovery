"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const DEALER_RECOVERY_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-dealer-credit-crisis", label: "The Industrial Dealer Credit Trap" },
  { id: "heading-statutory-matrix", label: "Statutory Recovery Matrix" },
  { id: "heading-escalation-sop", label: "5-Stage Escalation SOP" },
  { id: "heading-scenario-tabs", label: "4 Channel Failure Modes" },
  { id: "heading-bg-deposit-setoff", label: "BG & Security Deposit Set-Off" },
  { id: "heading-worked-example", label: "Worked ₹45L Ledger & Interest" },
  { id: "heading-bsa-evidence", label: "BSA s.63 Audit & Evidence" },
  { id: "heading-preemption-matrix", label: "Preempting Dealer Defenses" },
  { id: "heading-advocate-sop", label: "15-Day Advocate Notice SOP" },
  { id: "heading-cta", label: "Institutional Recovery Desk" },
  { id: "heading-faqs", label: "Frequently Asked Questions" },
  { id: "heading-precedents", label: "Judicial Precedents & Acts" },
];

interface DealerRecoveryTableOfContentsProps {
  sections?: TOCSection[];
}

export default function DealerRecoveryTableOfContents({
  sections = DEALER_RECOVERY_TOC_SECTIONS,
}: DealerRecoveryTableOfContentsProps) {
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
      const yOffset = -90;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
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
            className="w-full flex items-center justify-between px-4 py-2.5 bg-white border border-slate-200 rounded-xl shadow-xs text-left"
            aria-expanded={isOpen}
          >
            <div className="flex items-center gap-2 min-w-0">
              <span className="w-2 h-2 rounded-full bg-[#DC2626] shrink-0" />
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider shrink-0">
                Index:
              </span>
              <span className="text-xs font-bold text-slate-900 truncate">
                {activeSection?.label}
              </span>
            </div>
            <svg
              className={`w-4 h-4 text-slate-500 transition-transform shrink-0 ml-2 ${
                isOpen ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {isOpen && (
            <div className="absolute left-0 right-0 mt-2 bg-white border border-slate-200 rounded-2xl shadow-xl z-50 max-h-80 overflow-y-auto py-2">
              {sections.map((section, idx) => {
                const isActive = activeId === section.id;
                return (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    onClick={(e) => scrollToSection(e, section.id)}
                    className={`flex items-center gap-3 px-4 py-2.5 text-xs transition-colors ${
                      isActive
                        ? "bg-red-50 text-[#DC2626] font-bold"
                        : "text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    <span
                      className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] shrink-0 font-bold ${
                        isActive
                          ? "bg-[#DC2626] text-white"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      {idx + 1}
                    </span>
                    <span className="truncate">{section.label}</span>
                  </a>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Desktop Sticky Aside */}
      <aside className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start">
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
          <div className="flex items-center gap-2 pb-4 mb-4 border-b border-slate-100">
            <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
            <p className="text-xs font-black uppercase tracking-wider text-slate-900">
              Table of Contents
            </p>
          </div>
          <nav aria-label="Page Navigation" className="space-y-1">
            {sections.map((section, idx) => {
              const isActive = activeId === section.id;
              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => scrollToSection(e, section.id)}
                  className={`group flex items-center gap-3 px-3 py-2 rounded-xl text-xs transition-all ${
                    isActive
                      ? "bg-[#DC2626] text-white font-bold shadow-sm"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  <span
                    className={`w-5 h-5 rounded-md flex items-center justify-center text-[10px] shrink-0 font-bold transition-colors ${
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-slate-100 text-slate-500 group-hover:bg-slate-200 group-hover:text-slate-800"
                    }`}
                  >
                    {idx + 1}
                  </span>
                  <span className="truncate">{section.label}</span>
                </a>
              );
            })}
          </nav>

          <div className="mt-6 pt-4 border-t border-slate-100">
            <div className="bg-red-50/70 border border-red-200/60 rounded-xl p-3 text-left">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
                OEM Credit Desk
              </span>
              <p className="text-[11px] text-slate-700 leading-snug">
                Stuck with defaulting industrial dealers? Execute clean bank guarantee forfeiture and Section 138 notices.
              </p>
              <a
                href="#heading-cta"
                onClick={(e) => scrollToSection(e, "heading-cta")}
                className="mt-2 inline-flex items-center gap-1 text-[11px] font-bold text-[#DC2626] hover:underline"
              >
                Escalate Recovery &rarr;
              </a>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
