"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const IVF_DENTAL_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-why-defaults-occur", label: "SPECIALTY PACKAGE DEFAULTS" },
  { id: "heading-decision-tree", label: "CLINIC RECOVERY DECISION TREE" },
  { id: "heading-statutory-matrix", label: "STATUTORY REMEDY MATRIX" },
  { id: "heading-precedents", label: "JUDICIAL PRECEDENTS & DEFENSES" },
  { id: "heading-scenario-tabs", label: "4 SPECIALTY FAILURE MODES" },
  { id: "heading-worked-ledger", label: "₹2.45L WORKED RECOVERY LEDGER" },
  { id: "heading-documentation-pack", label: "INFORMED FINANCIAL CONSENT" },
  { id: "heading-evidence-checklist", label: "BSA s.63 EVIDENCE CHECKLIST" },
  { id: "heading-cta-desk", label: "DEPLOY RECOVERY DESK" },
  { id: "heading-faqs", label: "FAQS FOR CLINIC DIRECTORS" },
  { id: "heading-sources", label: "STATUTORY & REGULATORY SOURCES" },
];

interface IvfDentalTableOfContentsProps {
  sections?: TOCSection[];
}

export default function IvfDentalTableOfContents({
  sections = IVF_DENTAL_TOC_SECTIONS,
}: IvfDentalTableOfContentsProps) {
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
      <div className="lg:hidden sticky top-20 z-30 bg-slate-50/95 backdrop-blur-sm border-b border-slate-200 py-3 px-4 -mx-4 sm:-mx-6 mb-4">
        <div className="relative" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-800 shadow-sm"
            aria-expanded={isOpen}
          >
            <span className="truncate flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
              {activeSection.label}
            </span>
            <svg
              className={`w-4 h-4 text-slate-500 transition-transform ${isOpen ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isOpen && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-slate-200 rounded-xl shadow-xl max-h-72 overflow-y-auto z-40 py-1.5">
              {sections.map((section) => (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left px-4 py-2 text-xs font-semibold transition-colors flex items-center gap-2 ${
                    activeId === section.id
                      ? "bg-red-50 text-[#DC2626] font-bold"
                      : "text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      activeId === section.id ? "bg-[#DC2626]" : "bg-transparent"
                    }`}
                  />
                  {section.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Desktop Sticky Sidebar */}
      <aside className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start">
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
          <p className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-3 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
            Recovery Playbook Navigation
          </p>
          <nav className="space-y-1">
            {sections.map((section) => {
              const isActive = activeId === section.id;
              return (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left px-3 py-2 rounded-xl text-xs transition-all flex items-center justify-between ${
                    isActive
                      ? "bg-[#DC2626] text-white font-bold shadow-sm"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 font-medium"
                  }`}
                >
                  <span className="truncate">{section.label}</span>
                  {isActive && (
                    <span className="text-white text-xs">&rarr;</span>
                  )}
                </button>
              );
            })}
          </nav>

          <div className="mt-6 pt-4 border-t border-slate-100">
            <div className="p-3 bg-red-50/70 border border-red-100 rounded-xl">
              <span className="block text-[11px] font-bold uppercase tracking-wider text-red-700">
                Clinic RCM Support
              </span>
              <p className="text-[11px] text-slate-600 mt-1 leading-snug">
                NMC-compliant recovery notices for IVF cycles, aligners, implants &amp; elective surgery defaults.
              </p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
