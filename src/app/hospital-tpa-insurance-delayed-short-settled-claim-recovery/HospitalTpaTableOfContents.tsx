"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const HOSPITAL_TPA_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-rcm-crisis", label: "TPA DEDUCTION CRISIS" },
  { id: "heading-decision-tree", label: "4-STAGE ESCALATION RAIL" },
  { id: "heading-statutory-matrix", label: "IRDAI STATUTORY MATRIX" },
  { id: "heading-precedents", label: "MOU CASE PRECEDENTS" },
  { id: "heading-scenario-tabs", label: "4 DISALLOWANCE SCENARIOS" },
  { id: "heading-worked-calculation", label: "₹38.5L WORKED RECOVERY" },
  { id: "heading-evidence-checklist", label: "BSA s.63 EVIDENCE CHECKLIST" },
  { id: "heading-cta-desk", label: "DEPLOY RECOVERY DESK" },
  { id: "heading-faqs", label: "FAQS" },
  { id: "heading-sources", label: "STATUTORY SOURCES" },
];

interface HospitalTpaTableOfContentsProps {
  sections?: TOCSection[];
}

export default function HospitalTpaTableOfContents({
  sections = HOSPITAL_TPA_TOC_SECTIONS,
}: HospitalTpaTableOfContentsProps) {
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
      window.history.pushState(null, "", `#${id}`);
      setActiveId(id);
      setIsOpen(false);
    }
  };

  const activeSection = sections.find((s) => s.id === activeId) || sections[0];

  return (
    <>
      {/* Mobile / Tablet Sticky Dropdown Table of Contents */}
      <div
        ref={dropdownRef}
        className="lg:hidden sticky top-20 z-30 w-full mb-6 py-2 bg-slate-50/95 backdrop-blur-sm select-none"
      >
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-toc-dropdown"
          className="w-full flex items-center justify-between px-4 py-2.5 bg-white border border-slate-200 rounded-xl shadow-sm text-left"
        >
          <div className="flex items-center gap-2 truncate pr-2">
            <span className="w-2 h-2 rounded-full bg-[#DC2626] shrink-0" />
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider shrink-0">
              Jump To:
            </span>
            <span className="text-xs font-bold text-slate-900 truncate">
              {activeSection.label}
            </span>
          </div>
          <svg
            className={`w-4 h-4 text-slate-600 transition-transform duration-200 shrink-0 ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {isOpen && (
          <nav
            id="mobile-toc-dropdown"
            aria-label="Mobile Navigation Table of Contents"
            className="absolute left-0 right-0 mt-2 bg-white border border-slate-200 rounded-xl shadow-xl z-50 py-2 max-h-[60vh] overflow-y-auto px-1"
          >
            {sections.map((section, idx) => {
              const isActive = section.id === activeId;
              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => scrollToSection(e, section.id)}
                  className={`flex items-center gap-2.5 px-3 py-2 text-xs font-semibold rounded-lg transition-colors ${
                    isActive
                      ? "bg-red-50 text-[#DC2626] font-bold"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  <span
                    className={`w-5 h-5 flex items-center justify-center rounded text-[10px] shrink-0 font-bold ${
                      isActive ? "bg-[#DC2626] text-white" : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    {idx + 1}
                  </span>
                  <span className="truncate">{section.label}</span>
                </a>
              );
            })}
          </nav>
        )}
      </div>

      {/* Desktop Sticky Aside Table of Contents */}
      <aside
        aria-label="Table of Contents"
        className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start bg-white border border-slate-200 rounded-2xl p-5 shadow-sm"
      >
        <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100">
          <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
          <p className="text-xs font-black uppercase tracking-wider text-slate-800">
            TPA Claim Recovery Guide
          </p>
        </div>

        <nav aria-label="Page Sections" className="space-y-1">
          {sections.map((section, idx) => {
            const isActive = section.id === activeId;
            return (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={(e) => scrollToSection(e, section.id)}
                className={`group flex items-center gap-2.5 px-3 py-2 text-xs rounded-xl transition-all ${
                  isActive
                    ? "bg-[#DC2626] text-white font-bold shadow-sm"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 font-medium"
                }`}
              >
                <span
                  className={`w-5 h-5 flex items-center justify-center rounded text-[10px] shrink-0 font-bold transition-colors ${
                    isActive
                      ? "bg-white/20 text-white"
                      : "bg-slate-100 text-slate-500 group-hover:bg-slate-200 group-hover:text-slate-800"
                  }`}
                >
                  {idx + 1}
                </span>
                <span className="truncate leading-tight">{section.label}</span>
              </a>
            );
          })}
        </nav>

        <div className="mt-5 pt-4 border-t border-slate-100">
          <div className="p-3 bg-red-50/70 border border-red-100 rounded-xl">
            <p className="text-[10px] font-bold uppercase tracking-wider text-red-600 mb-1">
              IRDAI Compliance Rule
            </p>
            <p className="text-[11px] text-slate-700 leading-snug">
              Claims delayed past 30 days incur statutory penal interest at <strong>Bank Rate + 2%</strong> under IRDAI Master Circulars.
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}
