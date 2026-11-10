"use client";

import { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const HELPLINE_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-answer-box", label: "QUICK ANSWER" },
  { id: "heading-scenarios", label: "SCENARIO CARDS" },
  { id: "heading-orders-overview", label: "WHY DOCKET MATTERS" },
  { id: "heading-order-digest", label: "COURT ORDERS" },
  { id: "heading-escalation-flow", label: "RESOLUTION RAIL" },
  { id: "heading-playbook", label: "5-STEP PLAYBOOK" },
  { id: "heading-deadlines-table", label: "TIMELINES & FEES" },
  { id: "heading-problem-picker", label: "SECTOR DISPUTES" },
  { id: "heading-worked-example", label: "WORKED EXAMPLE" },
  { id: "heading-mistakes", label: "MISTAKES TO AVOID" },
  { id: "heading-evidence-checklist", label: "EVIDENCE CHECKLIST" },
  { id: "heading-notice-template", label: "NOTICE DRAFT" },
  { id: "heading-scope", label: "HONEST SCOPE" },
  { id: "heading-faqs", label: "FAQS" },
  { id: "heading-sources", label: "LEGAL REFERENCES" },
];

interface ConsumerHelplineTableOfContentsProps {
  sections?: TOCSection[];
}

export default function ConsumerHelplineTableOfContents({
  sections = HELPLINE_TOC_SECTIONS,
}: ConsumerHelplineTableOfContentsProps) {
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
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Mobile Floating Sticky Dropdown */}
      <div className="lg:hidden sticky top-20 z-30 w-full mb-6" ref={dropdownRef}>
        <div className="bg-slate-900/95 backdrop-blur-md border border-slate-700 rounded-xl shadow-xl p-2.5">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between px-3 py-2 text-xs font-bold text-slate-200 uppercase tracking-wider bg-slate-800 rounded-lg hover:bg-slate-750 transition-colors"
            aria-expanded={isOpen}
          >
            <span className="flex items-center gap-2 truncate">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span className="truncate">
                {sections.find((s) => s.id === activeId)?.label || "TABLE OF CONTENTS"}
              </span>
            </span>
            <span className="text-slate-400 text-sm ml-2">{isOpen ? "▲" : "▼"}</span>
          </button>

          {isOpen && (
            <nav className="mt-2 max-h-72 overflow-y-auto space-y-1 py-1 border-t border-slate-800">
              {sections.map((section) => {
                const isActive = activeId === section.id;
                return (
                  <button
                    key={section.id}
                    type="button"
                    onClick={() => scrollTo(section.id)}
                    className={`w-full text-left px-3 py-2 rounded-md text-xs font-semibold tracking-wide transition-colors flex items-center justify-between ${
                      isActive
                        ? "bg-[#DC2626] text-white"
                        : "text-slate-300 hover:bg-slate-800 hover:text-white"
                    }`}
                  >
                    <span>{section.label}</span>
                    {isActive && <span className="text-[10px]">●</span>}
                  </button>
                );
              })}
            </nav>
          )}
        </div>
      </div>

      {/* Desktop Sticky Sidebar */}
      <aside className="hidden lg:block w-72 shrink-0 sticky top-28 self-start">
        <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-sm">
          <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100">
            <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
            <p className="text-xs font-extrabold uppercase tracking-wider text-slate-900">
              Guide Navigation
            </p>
          </div>
          <nav className="space-y-1" aria-label="Table of contents">
            {sections.map((section) => {
              const isActive = activeId === section.id;
              return (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => scrollTo(section.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition-all duration-150 flex items-center justify-between group cursor-pointer ${
                    isActive
                      ? "bg-red-50 text-[#DC2626] font-bold border-l-4 border-[#DC2626]"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
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
          <div className="mt-5 pt-4 border-t border-slate-100">
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/60 text-[11px] text-slate-600 leading-snug">
              <strong className="text-slate-900 font-bold block mb-1">Pre-Notice Strategy:</strong>
              An NCH 1915 docket proves you offered the company a 45-day conciliation chance before legal action.
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
