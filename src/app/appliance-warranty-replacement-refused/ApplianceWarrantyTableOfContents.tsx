"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const APPLIANCE_WARRANTY_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-quick-summary", label: "STATUTORY SUMMARY" },
  { id: "heading-key-benchmarks", label: "KEY FACTS TABLE" },
  { id: "heading-statutory-rights", label: "WARRANTY LAW & CPA" },
  { id: "heading-rejection-tactics", label: "REJECTION TACTICS" },
  { id: "heading-problem-tabs", label: "SCENARIO PICKER" },
  { id: "heading-svg-escalation", label: "REPLACEMENT PIPELINE" },
  { id: "heading-escalation-playbook", label: "5-STEP PLAYBOOK" },
  { id: "heading-case-citations", label: "JUDICIAL PRECEDENTS" },
  { id: "heading-worked-example", label: "WORKED CASE STUDY" },
  { id: "heading-evidence-checklist", label: "EVIDENCE CHECKLIST" },
  { id: "heading-key-takeaways", label: "KEY TAKEAWAYS" },
  { id: "heading-faqs", label: "FAQS" },
  { id: "heading-sources", label: "LEGAL REFERENCES" },
];

interface ApplianceWarrantyTableOfContentsProps {
  sections?: TOCSection[];
}

export default function ApplianceWarrantyTableOfContents({
  sections = APPLIANCE_WARRANTY_TOC_SECTIONS,
}: ApplianceWarrantyTableOfContentsProps) {
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
      const offset = 90;
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
      {/* Mobile Sticky Dropdown Navigation */}
      <div className="lg:hidden sticky top-16 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 px-4 py-2.5 shadow-sm">
        <div className="relative" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between px-3.5 py-2 text-xs font-bold text-slate-800 bg-slate-100 rounded-lg border border-slate-200"
            aria-expanded={isOpen}
          >
            <span className="truncate flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
              {activeSection?.label || "Table of Contents"}
            </span>
            <svg
              className={`w-4 h-4 ml-2 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isOpen && (
            <div className="absolute left-0 right-0 mt-1.5 bg-white border border-slate-200 rounded-xl shadow-xl max-h-72 overflow-y-auto py-1 z-40">
              {sections.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => scrollToSection(s.id)}
                  className={`w-full text-left px-4 py-2 text-xs font-semibold tracking-wide transition-colors ${
                    activeId === s.id
                      ? "text-[#DC2626] bg-red-50 font-bold"
                      : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Desktop Sticky Sidebar Navigation */}
      <aside className="hidden lg:block w-full">
        <div className="sticky top-24 bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
          <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100">
            <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
            <p className="text-xs font-black tracking-widest text-slate-900 uppercase">
              Table of Contents
            </p>
          </div>
          <nav className="space-y-1" aria-label="Table of contents">
            {sections.map((section) => {
              const isActive = activeId === section.id;
              return (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left text-xs px-3 py-2 rounded-lg font-bold transition-all duration-150 flex items-center justify-between group cursor-pointer ${
                    isActive
                      ? "bg-red-50 text-[#DC2626] border border-red-100 shadow-xs"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  <span className="truncate">{section.label}</span>
                  <span
                    className={`text-[10px] opacity-0 group-hover:opacity-100 transition-opacity ${
                      isActive ? "opacity-100 text-[#DC2626]" : "text-slate-400"
                    }`}
                  >
                    →
                  </span>
                </button>
              );
            })}
          </nav>
        </div>
      </aside>
    </>
  );
}
