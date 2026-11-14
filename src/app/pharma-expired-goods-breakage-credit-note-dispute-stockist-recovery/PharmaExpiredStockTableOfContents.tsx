"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const PHARMA_EXPIRED_STOCK_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-expiry-breakage-trap", label: "EXPIRY DEDUCTION TRAP" },
  { id: "heading-decision-tree", label: "5-STAGE RECOVERY TREE" },
  { id: "heading-statutory-matrix", label: "STATUTORY FRAMEWORK" },
  { id: "heading-scenario-tabs", label: "4 RECOVERY SCENARIOS" },
  { id: "heading-cbic-circular-72", label: "CBIC CIRCULAR 72 & CGST S.34" },
  { id: "heading-contract-cap-enforcement", label: "CONTRACT CAPS VS AIOCD" },
  { id: "heading-drugs-cosmetics-rule65", label: "DRUGS ACT RULE 65 AUDIT" },
  { id: "heading-worked-example", label: "WORKED RECOVERY LEDGER" },
  { id: "heading-bsa-evidence-checklist", label: "BSA S.63 AUDIT CHECKLIST" },
  { id: "heading-cta", label: "INSTITUTIONAL B2B DESK" },
  { id: "heading-faqs", label: "FREQUENTLY ASKED QUESTIONS" },
  { id: "heading-sources", label: "STATUTORY AUTHORITIES" },
];

interface PharmaExpiredStockTableOfContentsProps {
  sections?: TOCSection[];
}

export default function PharmaExpiredStockTableOfContents({
  sections = PHARMA_EXPIRED_STOCK_TOC_SECTIONS,
}: PharmaExpiredStockTableOfContentsProps) {
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
            <div className="flex items-center gap-2 truncate">
              <span className="w-2 h-2 rounded-full bg-[#DC2626] shrink-0" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Contents:
              </span>
              <span className="text-xs font-extrabold text-slate-900 truncate">
                {activeSection?.label}
              </span>
            </div>
            <svg
              className={`w-4 h-4 text-slate-500 transition-transform shrink-0 ${
                isOpen ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              width={16}
              height={16}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isOpen && (
            <div className="absolute left-0 right-0 mt-2 bg-white border border-slate-200 rounded-xl shadow-xl z-50 max-h-72 overflow-y-auto py-1">
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  onClick={(e) => scrollToSection(e, s.id)}
                  className={`block px-4 py-2.5 text-xs font-semibold tracking-wide transition-colors ${
                    activeId === s.id
                      ? "bg-[#DC2626] text-white font-bold"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  {s.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Desktop Sticky Aside */}
      <aside className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start">
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
          <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100">
            <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
            <p className="text-xs font-black uppercase tracking-wider text-slate-900">
              Recovery Navigation
            </p>
          </div>
          <nav className="space-y-1">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={(e) => scrollToSection(e, s.id)}
                className={`block px-3 py-2 rounded-xl text-xs font-medium tracking-wide transition-all ${
                  activeId === s.id
                    ? "bg-[#DC2626] text-white font-bold shadow-xs translate-x-0.5"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                {s.label}
              </a>
            ))}
          </nav>

          <div className="mt-6 pt-4 border-t border-slate-100">
            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
              Statutory Basis
            </p>
            <p className="text-xs text-slate-600 leading-relaxed">
              CBIC Circular 72/46/2018-GST &bull; CGST Act s.34 &bull; Contract Act s.73 &bull; MSMED Act s.15-18 &bull; Drugs Rules 1945 r.65
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}
