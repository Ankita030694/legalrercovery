"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const JOB_WORK_RECOVERY_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-bailee-lien-doctrine", label: "Police Threats vs Particular Lien" },
  { id: "heading-section-170-vs-171", label: "Section 170 vs Section 171 Lien" },
  { id: "heading-decision-tree", label: "5-Stage Job-Work Recovery SOP" },
  { id: "heading-statutory-matrix", label: "Statutory Recovery Matrix" },
  { id: "heading-scenario-tabs", label: "4 Industrial Default Scenarios" },
  { id: "heading-gst-itc04-trap", label: "CGST Section 143 & ITC-04 Trap" },
  { id: "heading-scrap-deduction-dispute", label: "Scrap & Burning Loss Disputes" },
  { id: "heading-worked-example", label: "Worked ₹14.8L CNC Default Ledger" },
  { id: "heading-bsa-evidence", label: "BSA s.63 CAD, CMM & Challan Evidence" },
  { id: "heading-advocate-sop", label: "15-Day Advocate Notice SOP" },
  { id: "heading-cta", label: "Dual-Track Recovery Desk" },
  { id: "heading-faqs", label: "Frequently Asked Questions" },
  { id: "heading-precedents", label: "Judicial Precedents & Acts" },
];

interface JobWorkRecoveryTableOfContentsProps {
  sections?: TOCSection[];
}

export default function JobWorkRecoveryTableOfContents({
  sections = JOB_WORK_RECOVERY_TOC_SECTIONS,
}: JobWorkRecoveryTableOfContentsProps) {
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
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
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
            className="w-full flex items-center justify-between px-4 py-2.5 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm font-semibold text-slate-800 shadow-xs active:bg-slate-100"
            aria-expanded={isOpen}
            aria-label="Table of Contents"
          >
            <span className="flex items-center gap-2 truncate">
              <span className="w-2 h-2 rounded-full bg-[#DC2626] shrink-0" />
              <span className="truncate">{activeSection?.label || "Navigation"}</span>
            </span>
            <svg
              className={`w-4 h-4 text-slate-500 transition-transform shrink-0 ${isOpen ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isOpen && (
            <div className="absolute left-0 right-0 mt-2 bg-white border border-slate-200 rounded-2xl shadow-xl max-h-72 overflow-y-auto py-2 z-40">
              {sections.map((section) => {
                const isActive = section.id === activeId;
                return (
                  <button
                    key={section.id}
                    type="button"
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full text-left px-4 py-2 text-xs font-medium transition-colors flex items-center gap-2 ${
                      isActive
                        ? "bg-red-50 text-[#DC2626] font-bold"
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                        isActive ? "bg-[#DC2626]" : "bg-slate-300"
                      }`}
                    />
                    <span className="truncate">{section.label}</span>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Desktop Sticky Aside */}
      <aside
        className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start bg-white border border-slate-200 rounded-2xl p-5 shadow-xs"
        aria-label="Table of Contents"
      >
        <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100">
          <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Guide Sections
          </p>
        </div>

        <nav className="space-y-1">
          {sections.map((section, idx) => {
            const isActive = section.id === activeId;
            return (
              <button
                key={section.id}
                type="button"
                onClick={() => scrollToSection(section.id)}
                className={`w-full text-left px-3 py-2 rounded-xl text-xs transition-all flex items-start gap-2.5 ${
                  isActive
                    ? "bg-[#DC2626] text-white font-bold shadow-xs"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 font-medium"
                }`}
              >
                <span
                  className={`text-[10px] font-mono mt-0.5 shrink-0 ${
                    isActive ? "text-red-100" : "text-slate-400"
                  }`}
                >
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <span className="leading-snug">{section.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="mt-6 pt-4 border-t border-slate-100">
          <div className="bg-slate-50 rounded-xl p-3 border border-slate-200 text-[11px] text-slate-600 space-y-1.5">
            <div className="font-bold text-slate-800 flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-[#DC2626]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              Statutory Lien Note
            </div>
            <p className="leading-relaxed">
              Section 170 Particular Lien applies strictly to goods upon which skill and labour have been expended, pending payment for those specific goods.
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}
