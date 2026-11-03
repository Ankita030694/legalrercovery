"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const CREDIT_SHELL_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-statutory-reality", label: "CAN YOU REFUSE?" },
  { id: "heading-myth-vs-fact", label: "MYTH VS FACT" },
  { id: "heading-order-digest", label: "COURT PRECEDENTS" },
  { id: "heading-decision-flowchart", label: "DECISION TREE" },
  { id: "heading-playbook", label: "5-STEP PLAYBOOK" },
  { id: "heading-statutory-table", label: "REFUND DEADLINES" },
  { id: "heading-problem-picker", label: "VOUCHER SCENARIOS" },
  { id: "heading-worked-example", label: "WORKED EXAMPLE" },
  { id: "heading-evidence-checklist", label: "EVIDENCE CHECKLIST" },
  { id: "heading-faqs", label: "FAQ" },
  { id: "heading-sources", label: "STATUTORY REFS" },
];

interface CreditShellTableOfContentsProps {
  sections?: TOCSection[];
}

export default function CreditShellTableOfContents({
  sections = CREDIT_SHELL_TOC_SECTIONS,
}: CreditShellTableOfContentsProps) {
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

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sections]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveId(id);
      setIsOpen(false);
    }
  };

  const activeSection = sections.find((s) => s.id === activeId) || sections[0];

  return (
    <>
      {/* Mobile Floating Dropdown Navigation */}
      <div className="lg:hidden sticky top-20 z-30 w-full mb-6" ref={dropdownRef}>
        <div className="bg-white/95 backdrop-blur-md border border-slate-200 shadow-md rounded-xl p-2.5">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between px-3 py-2 text-xs font-bold text-slate-800 bg-slate-50 border border-slate-200 rounded-lg hover:bg-slate-100 transition-colors"
            aria-expanded={isOpen}
            aria-label="Table of Contents Menu"
          >
            <div className="flex items-center gap-2 truncate">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
              <span className="text-slate-500 font-medium">ON THIS PAGE:</span>
              <span className="text-slate-900 truncate">{activeSection?.label}</span>
            </div>
            <svg
              className={`w-4 h-4 text-slate-600 transition-transform duration-200 shrink-0 ${
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
            <div className="mt-2 py-1 max-h-64 overflow-y-auto divide-y divide-slate-100 border-t border-slate-100">
              {sections.map((sec) => (
                <button
                  key={sec.id}
                  type="button"
                  onClick={() => scrollToSection(sec.id)}
                  className={`w-full text-left px-3 py-2 text-xs font-semibold transition-colors flex items-center justify-between ${
                    activeId === sec.id
                      ? "text-red-600 bg-red-50/70 font-bold"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  <span>{sec.label}</span>
                  {activeId === sec.id && <span className="text-red-600 text-xs">●</span>}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Desktop Sticky Sidebar Navigation */}
      <aside
        aria-label="Table of contents"
        className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start bg-white rounded-2xl border border-slate-200 p-5 shadow-xs"
      >
        <div className="pb-3 mb-3 border-b border-slate-100 flex items-center justify-between">
          <span className="text-xs font-black uppercase tracking-wider text-slate-800">
            Guide Navigation
          </span>
          <span className="text-[10px] font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded-full border border-red-200">
            DGCA &amp; SC Law
          </span>
        </div>

        <nav className="space-y-1">
          {sections.map((sec) => {
            const isActive = activeId === sec.id;
            return (
              <button
                key={sec.id}
                type="button"
                onClick={() => scrollToSection(sec.id)}
                className={`w-full text-left px-3 py-2 rounded-lg text-xs font-semibold transition-all flex items-center gap-2.5 cursor-pointer ${
                  isActive
                    ? "bg-slate-900 text-white font-bold shadow-xs translate-x-1"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                    isActive ? "bg-red-400" : "bg-slate-300"
                  }`}
                />
                <span className="truncate">{sec.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="mt-5 pt-4 border-t border-slate-100 text-[11px] text-slate-500 leading-snug">
          <p className="font-semibold text-slate-700 mb-1">Passenger Rights Shield:</p>
          <p>
            Under Supreme Court orders in <em>Pravasi Legal Cell</em>, airlines cannot force credit shells or travel vouchers without your voluntary consent.
          </p>
        </div>
      </aside>
    </>
  );
}
