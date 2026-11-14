"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const AMBULANCE_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-air-ambulance-bottleneck", label: "MEDEVAC CREDIT EXPOSURE" },
  { id: "heading-decision-tree", label: "RECOVERY DECISION TREE" },
  { id: "heading-statutory-matrix", label: "STATUTORY REMEDY MATRIX" },
  { id: "heading-scenario-tabs", label: "4 MEDEVAC DEFAULT MODES" },
  { id: "heading-digital-consent-bsa", label: "WHATSAPP & BSA s.63 ENFORCEMENT" },
  { id: "heading-worked-ledger", label: "₹18.5L SORTIE RECOVERY LEDGER" },
  { id: "heading-evidence-checklist", label: "ATC & FLIGHT EVIDENCE CHECKLIST" },
  { id: "heading-cta-desk", label: "DEPLOY RECOVERY DESK" },
  { id: "heading-faqs", label: "FAQS" },
  { id: "heading-sources", label: "STATUTORY PRECEDENTS" },
];

interface AmbulanceTableOfContentsProps {
  sections?: TOCSection[];
}

export default function AmbulanceTableOfContents({
  sections = AMBULANCE_TOC_SECTIONS,
}: AmbulanceTableOfContentsProps) {
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
          className="w-full flex items-center justify-between px-4 py-3 bg-white border border-slate-200 rounded-xl shadow-xs text-left"
          aria-expanded={isOpen}
        >
          <div className="flex items-center gap-2 min-w-0">
            <span className="w-2 h-2 rounded-full bg-[#DC2626] shrink-0" />
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 shrink-0">
              Jump To Section:
            </span>
            <span className="text-xs sm:text-sm font-semibold text-slate-800 truncate">
              {activeSection.label}
            </span>
          </div>
          <svg
            className={`w-4 h-4 text-slate-500 transition-transform duration-200 shrink-0 ml-2 ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {isOpen && (
          <div className="absolute left-0 right-0 mt-2 bg-white border border-slate-200 rounded-xl shadow-xl overflow-hidden z-40 max-h-80 overflow-y-auto divide-y divide-slate-100">
            {sections.map((section, idx) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={(e) => scrollToSection(e, section.id)}
                className={`flex items-center gap-3 px-4 py-2.5 text-xs transition-colors ${
                  activeId === section.id
                    ? "bg-red-50 text-[#DC2626] font-bold"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                <span className="w-5 text-right font-mono text-[10px] text-slate-400">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <span className="truncate">{section.label}</span>
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Desktop Sticky Aside Navigation */}
      <aside className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start">
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
          <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100">
            <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
            <p className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Navigation Contents
            </p>
          </div>
          <nav className="space-y-1">
            {sections.map((section, idx) => {
              const isActive = activeId === section.id;
              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => scrollToSection(e, section.id)}
                  className={`group flex items-center justify-between px-3 py-2 rounded-lg text-xs transition-all ${
                    isActive
                      ? "bg-[#DC2626] text-white font-bold shadow-xs"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  <span className="flex items-center gap-2 truncate">
                    <span
                      className={`font-mono text-[10px] ${
                        isActive ? "text-red-200" : "text-slate-400 group-hover:text-slate-600"
                      }`}
                    >
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className="truncate">{section.label}</span>
                  </span>
                  {isActive && (
                    <svg
                      className="w-3.5 h-3.5 text-white shrink-0 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  )}
                </a>
              );
            })}
          </nav>
        </div>
      </aside>
    </>
  );
}
