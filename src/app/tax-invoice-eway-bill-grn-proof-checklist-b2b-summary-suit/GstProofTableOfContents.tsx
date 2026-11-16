"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const GST_PROOF_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-statutory-answer", label: "STATUTORY DOCTRINE" },
  { id: "heading-remedy-matrix", label: "REMEDY MATRIX" },
  { id: "heading-evidentiary-chain", label: "DIGITAL EVIDENCE RAIL" },
  { id: "heading-scenario-matrix", label: "DISPUTE SCENARIOS" },
  { id: "heading-worked-case", label: "RECOVERY COST AUDIT" },
  { id: "heading-bsa63-checklist", label: "BSA S.63 CHECKLIST" },
  { id: "heading-court-rulings", label: "COURT PRECEDENTS" },
  { id: "heading-faqs", label: "FREQUENT QUESTIONS" },
  { id: "heading-sources", label: "STATUTORY SOURCES" },
];

interface GstProofTableOfContentsProps {
  sections?: TOCSection[];
}

export default function GstProofTableOfContents({
  sections = GST_PROOF_TOC_SECTIONS,
}: GstProofTableOfContentsProps) {
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
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveId(id);
      setIsOpen(false);
    }
  };

  const activeSection = sections.find((s) => s.id === activeId) || sections[0];

  return (
    <>
      {/* Mobile Sticky Bar */}
      <div className="lg:hidden sticky top-20 z-30 bg-slate-50/95 backdrop-blur-sm border-b border-slate-200 py-3 px-4 -mx-4 sm:-mx-6 mb-4">
        <div className="relative" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between px-4 py-2.5 bg-white border border-slate-300 rounded-xl text-xs font-bold text-slate-800 shadow-xs cursor-pointer"
            aria-expanded={isOpen}
            aria-label="Table of Contents Navigation Menu"
          >
            <span className="flex items-center gap-2 truncate">
              <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
              <span className="text-slate-500 uppercase text-[10px] tracking-wider">Jump To:</span>
              <span className="truncate">{activeSection?.label}</span>
            </span>
            <svg
              className={`w-4 h-4 text-slate-500 transition-transform duration-200 shrink-0 ${
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
            <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-slate-200 rounded-xl shadow-xl py-2 z-40 max-h-80 overflow-y-auto">
              {sections.map((section) => {
                const isActive = activeId === section.id;
                return (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    onClick={(e) => scrollToSection(e, section.id)}
                    className={`block px-4 py-2 text-xs font-semibold transition-colors ${
                      isActive
                        ? "bg-red-50 text-[#DC2626] font-bold border-l-4 border-[#DC2626]"
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
      <aside
        className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start bg-white border border-slate-200 rounded-2xl p-5 shadow-xs"
        aria-label="Table of Contents"
      >
        <p className="text-[11px] font-extrabold uppercase tracking-widest text-slate-400 mb-3 px-2">
          Page Navigation
        </p>
        <nav className="space-y-1">
          {sections.map((section) => {
            const isActive = activeId === section.id;
            return (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={(e) => scrollToSection(e, section.id)}
                className={`block px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                  isActive
                    ? "bg-[#DC2626] text-white font-bold shadow-xs translate-x-1"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                {section.label}
              </a>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
