"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const COWORKING_RECOVERY_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-operator-dilemma", label: "Flex-Space Default Crisis" },
  { id: "heading-decision-tree", label: "5-Stage Operator Recovery Flow" },
  { id: "heading-statutory-matrix", label: "Statutory Recovery Matrix" },
  { id: "heading-scenario-tabs", label: "4 Enterprise Failure Modes" },
  { id: "heading-license-vs-tenancy", label: "Service License vs Tenancy" },
  { id: "heading-access-suspension", label: "Lawful RFID & Turnstile Freeze" },
  { id: "heading-abandoned-assets", label: "Abandoned Goods & IT Hardware Lien" },
  { id: "heading-capex-recovery", label: "Bespoke Fit-Out CapEx Recovery" },
  { id: "heading-worked-example", label: "Worked ₹64.8L Default Ledger" },
  { id: "heading-bsa-evidence-checklist", label: "BSA s.63 Telemetry & Dossier" },
  { id: "heading-cta", label: "Institutional Flex Desk" },
  { id: "heading-faqs", label: "Frequently Asked Questions" },
  { id: "heading-sources", label: "Statutory Precedents" },
];

interface CoworkingRecoveryTableOfContentsProps {
  sections?: TOCSection[];
}

export default function CoworkingRecoveryTableOfContents({
  sections = COWORKING_RECOVERY_TOC_SECTIONS,
}: CoworkingRecoveryTableOfContentsProps) {
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
          >
            <div className="flex items-center gap-2 min-w-0">
              <span className="w-2 h-2 rounded-full bg-[#DC2626] shrink-0" />
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider shrink-0">
                Contents:
              </span>
              <span className="text-xs font-bold text-slate-800 truncate">
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isOpen && (
            <div className="absolute top-full left-0 right-0 mt-1.5 bg-white border border-slate-200 rounded-xl shadow-xl py-2 z-50 max-h-72 overflow-y-auto">
              {sections.map((section) => {
                const isActive = activeId === section.id;
                return (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    onClick={(e) => scrollToSection(e, section.id)}
                    className={`block px-4 py-2 text-xs font-medium transition-colors ${
                      isActive
                        ? "bg-red-50 text-[#DC2626] font-bold"
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
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

      {/* Desktop Sticky Aside */}
      <aside className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start">
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
          <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100">
            <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500 m-0">
              Navigation &bull; TOC
            </p>
          </div>

          <nav className="space-y-1">
            {sections.map((section) => {
              const isActive = activeId === section.id;
              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => scrollToSection(e, section.id)}
                  className={`block px-3 py-2 text-xs rounded-lg transition-all ${
                    isActive
                      ? "bg-[#DC2626] text-white font-bold shadow-xs translate-x-1"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 font-medium"
                  }`}
                >
                  {section.label}
                </a>
              );
            })}
          </nav>

          <div className="mt-5 pt-4 border-t border-slate-100">
            <a
              href="#heading-cta"
              className="block w-full py-2.5 px-3 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl text-center transition-colors shadow-xs"
            >
              Enterprise Recovery Desk &rarr;
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}
