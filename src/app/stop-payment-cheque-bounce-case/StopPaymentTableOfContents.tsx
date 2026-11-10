"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const STOP_PAYMENT_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-138-applicability", label: "138 APPLICABILITY" },
  { id: "heading-court-rulings", label: "SUPREME COURT RULINGS" },
  { id: "heading-stop-payment-vs-bounce", label: "STOP PAYMENT VS BOUNCE" },
  { id: "heading-drawer-defences", label: "LEGAL DEFENCES ANALYSED" },
  { id: "heading-resolution-flow", label: "RESOLUTION RAIL" },
  { id: "heading-5step-playbook", label: "5-STEP PLAYBOOK" },
  { id: "heading-statutory-deadlines", label: "STATUTORY TIMELINES" },
  { id: "heading-dispute-scenarios", label: "DISPUTE SCENARIOS" },
  { id: "heading-worked-example", label: "WORKED EXAMPLE" },
  { id: "heading-evidence-checklist", label: "PRE-FLIGHT CHECKLIST" },
  { id: "heading-document-matrix", label: "EVIDENCE MATRIX" },
  { id: "heading-notice-template", label: "NOTICE TEMPLATE" },
  { id: "heading-faqs", label: "FAQ" },
  { id: "heading-primary-sources", label: "PRIMARY SOURCES" },
];

interface StopPaymentTableOfContentsProps {
  sections?: TOCSection[];
}

export default function StopPaymentTableOfContents({
  sections = STOP_PAYMENT_TOC_SECTIONS,
}: StopPaymentTableOfContentsProps) {
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
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const scrollTo = (id: string) => {
    setActiveId(id);
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -90;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const activeSection = sections.find((s) => s.id === activeId) || sections[0];

  return (
    <>
      {/* Mobile Sticky Dropdown Navigation */}
      <div className="lg:hidden w-full mb-6 sticky top-20 z-30" ref={dropdownRef}>
        <div className="bg-white border border-slate-200 rounded-xl shadow-md p-2">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between px-3 py-2 text-xs font-bold uppercase tracking-wider text-slate-700 bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors border border-slate-200"
            aria-expanded={isOpen}
          >
            <div className="flex items-center gap-2 truncate">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse shrink-0" />
              <span className="text-slate-500 font-semibold">SECTION:</span>
              <span className="text-slate-900 truncate">{activeSection?.label}</span>
            </div>
            <span
              className={`transform transition-transform duration-200 text-slate-500 ${
                isOpen ? "rotate-180" : ""
              }`}
            >
              ▼
            </span>
          </button>

          {isOpen && (
            <div className="mt-2 max-h-72 overflow-y-auto divide-y divide-slate-100 bg-white rounded-lg border border-slate-200 shadow-xl py-1">
              {sections.map((section) => {
                const isActive = activeId === section.id;
                return (
                  <button
                    key={section.id}
                    type="button"
                    onClick={() => scrollTo(section.id)}
                    className={`w-full text-left px-4 py-2.5 text-xs font-semibold flex items-center justify-between transition-colors ${
                      isActive
                        ? "text-red-700 bg-red-50/80 font-bold border-l-4 border-red-600"
                        : "text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    <span>{section.label}</span>
                    {isActive && <span className="text-red-600 font-bold">●</span>}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Desktop Sticky Sidebar */}
      <aside className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start max-h-[calc(100vh-8rem)] overflow-y-auto pr-2">
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
          <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-200">
            <span className="w-2.5 h-2.5 rounded-full bg-red-600" />
            <p className="text-xs font-black uppercase tracking-wider text-slate-900">
              Guide Navigation
            </p>
          </div>

          <nav aria-label="Table of contents" className="space-y-1">
            {sections.map((section) => {
              const isActive = activeId === section.id;
              return (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => scrollTo(section.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all flex items-center justify-between ${
                    isActive
                      ? "text-red-700 bg-red-50 font-bold border-l-3 border-red-600 shadow-xs"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  <span className="truncate">{section.label}</span>
                  {isActive && <span className="text-red-600 font-bold text-xs">→</span>}
                </button>
              );
            })}
          </nav>

          <div className="mt-5 pt-4 border-t border-slate-200 text-[11px] text-slate-500 leading-relaxed">
            <strong className="text-slate-700 block mb-1">Strict 30-Day Notice Rule:</strong>
            Section 138 demand notice must be dispatched within 30 days of receiving the bank memo.
          </div>
        </div>
      </aside>
    </>
  );
}
