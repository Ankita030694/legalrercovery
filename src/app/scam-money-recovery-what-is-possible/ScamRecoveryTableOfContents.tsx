"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const SCAM_RECOVERY_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-overview", label: "OVERVIEW" },
  { id: "heading-matrix", label: "RECOVERY MATRIX" },
  { id: "heading-personas", label: "WHO CAN RECOVER" },
  { id: "heading-bank-zero-liability", label: "BANK ZERO LIABILITY" },
  { id: "heading-cyber-portal-freeze", label: "1930 PORTAL FREEZE" },
  { id: "heading-bnss-court-restitution", label: "SEC 503 BNSS ORDER" },
  { id: "heading-sebi-smart-odr", label: "SEBI SMART ODR" },
  { id: "heading-consumer-court", label: "E-JAGRITI FORUM" },
  { id: "heading-problem-diagnostic", label: "SCAM SCENARIOS" },
  { id: "heading-precedents", label: "COURT PRECEDENTS" },
  { id: "heading-worked-example", label: "WORKED EXAMPLE" },
  { id: "heading-evidence-checklist", label: "EVIDENCE CHECKLIST" },
  { id: "heading-scope", label: "HONEST SCOPE" },
  { id: "heading-faqs", label: "FAQ" },
  { id: "heading-sources", label: "LEGAL REFERENCES" },
];

interface ScamRecoveryTableOfContentsProps {
  sections?: TOCSection[];
}

export default function ScamRecoveryTableOfContents({
  sections = SCAM_RECOVERY_TOC_SECTIONS,
}: ScamRecoveryTableOfContentsProps) {
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

  const activeSection = sections.find((s) => s.id === activeId) || sections[0];

  return (
    <>
      {/* Mobile Sticky Bar */}
      <div className="lg:hidden sticky top-20 z-30 w-full mb-6 bg-white/95 backdrop-blur-md border border-slate-200 rounded-xl p-3 shadow-md">
        <div className="flex items-center justify-between" ref={dropdownRef}>
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase tracking-wider font-extrabold text-slate-500">Jump To:</span>
            <span className="text-xs font-bold text-red-600 truncate max-w-[190px] sm:max-w-[280px]">
              {activeSection.label}
            </span>
          </div>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="px-3 py-1.5 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <span>Sections</span>
            <svg
              className={`w-3.5 h-3.5 transition-transform ${isOpen ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="mt-3 pt-3 border-t border-slate-200 max-h-64 overflow-y-auto space-y-1">
            {sections.map((section) => (
              <button
                key={section.id}
                type="button"
                onClick={() => scrollToSection(section.id)}
                className={`block w-full text-left px-2.5 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                  activeId === section.id
                    ? "bg-red-50 text-red-700 font-bold"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Desktop Sticky Sidebar */}
      <aside className="hidden lg:block w-72 shrink-0">
        <div className="sticky top-28 bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
          <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100">
            <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-800">
              Navigation Contents
            </h3>
          </div>
          <nav className="space-y-1">
            {sections.map((section) => {
              const isActive = activeId === section.id;
              return (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => scrollToSection(section.id)}
                  className={`block w-full text-left px-3 py-2 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                    isActive
                      ? "bg-red-600 text-white font-bold shadow-xs translate-x-1"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  {section.label}
                </button>
              );
            })}
          </nav>
        </div>
      </aside>
    </>
  );
}
