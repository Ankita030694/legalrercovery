"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const COURIER_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-carrier-law-overview", label: "CARRIER LAW & CAPS" },
  { id: "heading-order-digest", label: "COURT ORDERS" },
  { id: "heading-liability-matrix", label: "LIABILITY MATRIX" },
  { id: "heading-escalation-rail", label: "ESCALATION RAIL" },
  { id: "heading-playbook", label: "5-STEP PLAYBOOK" },
  { id: "heading-statutory-deadlines", label: "LEGAL DEADLINES" },
  { id: "heading-problem-picker", label: "CARRIER ISSUES" },
  { id: "heading-worked-example", label: "WORKED EXAMPLE" },
  { id: "heading-evidence-checklist", label: "EVIDENCE CHECKLIST" },
  { id: "heading-honest-scope", label: "SERVICE SCOPE" },
  { id: "heading-faqs", label: "FAQ" },
  { id: "heading-sources", label: "STATUTORY REFS" },
];

interface CourierParcelTableOfContentsProps {
  sections?: TOCSection[];
}

export default function CourierParcelTableOfContents({
  sections = COURIER_TOC_SECTIONS,
}: CourierParcelTableOfContentsProps) {
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

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -90;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveId(id);
      setIsOpen(false);
    }
  };

  const activeSection = sections.find((s) => s.id === activeId) || sections[0];

  return (
    <>
      {/* Mobile Sticky Dropdown Navigation */}
      <div className="lg:hidden sticky top-20 z-30 w-full mb-6" ref={dropdownRef}>
        <div className="bg-slate-900/95 backdrop-blur-md border border-slate-800 rounded-xl p-3 shadow-xl">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between text-left text-xs font-bold uppercase tracking-wider text-slate-200"
            aria-expanded={isOpen}
            aria-controls="mobile-toc-dropdown"
          >
            <span className="flex items-center gap-2 truncate">
              <span className="w-2 h-2 rounded-full bg-[#DC2626] animate-pulse shrink-0" />
              <span className="truncate">Navigating: {activeSection?.label}</span>
            </span>
            <svg
              className={`w-4 h-4 text-slate-400 transition-transform duration-200 shrink-0 ${
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
            <div
              id="mobile-toc-dropdown"
              className="mt-3 pt-3 border-t border-slate-800 max-h-64 overflow-y-auto space-y-1.5"
            >
              {sections.map((section) => {
                const isActive = activeId === section.id;
                return (
                  <button
                    key={section.id}
                    type="button"
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                      isActive
                        ? "bg-[#DC2626] text-white font-bold"
                        : "text-slate-300 hover:bg-slate-800 hover:text-white"
                    }`}
                  >
                    {section.label}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Desktop Sticky Sidebar Navigation */}
      <aside className="hidden lg:block w-72 shrink-0 sticky top-28 self-start">
        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
          <div className="flex items-center gap-2 pb-4 mb-4 border-b border-slate-100">
            <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
            <p className="text-xs font-extrabold uppercase tracking-wider text-slate-900">
              Page Navigation
            </p>
          </div>

          <nav aria-label="Table of contents" className="space-y-1">
            {sections.map((section) => {
              const isActive = activeId === section.id;
              return (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left px-3 py-2 rounded-xl text-xs transition-all duration-150 flex items-center justify-between ${
                    isActive
                      ? "bg-slate-900 text-white font-bold shadow-sm translate-x-1"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900 font-medium"
                  }`}
                >
                  <span className="truncate">{section.label}</span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] ml-2 shrink-0" />
                  )}
                </button>
              );
            })}
          </nav>

          <div className="mt-6 pt-4 border-t border-slate-100">
            <div className="p-3 bg-red-50 rounded-xl border border-red-100 text-[11px] text-red-900 font-medium leading-relaxed">
              <span className="font-bold block mb-1">Carrier Liability Rule:</span>
              Carriage by Road Act 2007 s.10 mandates written notice of loss within 180 days. CPA s.2(46) strikes down ₹100 liability caps.
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
