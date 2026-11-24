"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const SMA_CURE_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-roi-window", label: "DAY 61–85 CURE WINDOW" },
  { id: "heading-rbi-iracp", label: "RBI IRACP & NPA RULES" },
  { id: "heading-comparison-matrix", label: "TELECALLING VS ADVOCATE" },
  { id: "heading-decision-tree", label: "DAY-62 BATCH WORKFLOW" },
  { id: "heading-scenario-tabs", label: "SMA-2 SLIPPAGE SCENARIOS" },
  { id: "heading-cure-economics", label: "PROVISIONING COST MODEL" },
  { id: "heading-compliance-checklist", label: "RBI & BSA S.63 AUDIT" },
  { id: "heading-faqs", label: "PRACTITIONER FAQS" },
  { id: "heading-sources", label: "RBI & STATUTORY SOURCES" },
];

interface SmaCureTableOfContentsProps {
  sections?: TOCSection[];
}

export default function SmaCureTableOfContents({
  sections = SMA_CURE_TOC_SECTIONS,
}: SmaCureTableOfContentsProps) {
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

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.getElementById(id);
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - 104;
      window.scrollTo({ top, behavior: "smooth" });
      setActiveId(id);
    }
  };

  const activeSection = sections.find((s) => s.id === activeId) || sections[0];

  return (
    <>
      {/* Mobile Sticky TOC Bar */}
      <div
        ref={dropdownRef}
        className="lg:hidden sticky top-20 z-30 bg-slate-50/95 backdrop-blur-sm border-b border-slate-200 py-3 px-4 -mx-4 sm:-mx-6 mb-4"
      >
        <div className="relative">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Toggle Table of Contents"
            className="w-full flex items-center justify-between gap-2 bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-left shadow-sm"
          >
            <div className="flex items-center gap-2 min-w-0">
              <span className="w-2 h-2 rounded-full bg-[#DC2626] shrink-0" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 shrink-0">
                Section:
              </span>
              <span className="text-xs font-bold text-slate-900 truncate">
                {activeSection?.label}
              </span>
            </div>
            <svg
              className={`w-4 h-4 text-slate-500 transition-transform shrink-0 ${
                isOpen ? "rotate-180" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              width={16}
              height={16}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {isOpen && (
            <nav
              aria-label="Mobile Table of Contents"
              className="absolute left-0 right-0 mt-2 bg-white border border-slate-200 rounded-xl shadow-xl p-2 max-h-[65vh] overflow-y-auto z-40"
            >
              <ul className="space-y-1">
                {sections.map((section, idx) => {
                  const isActive = activeId === section.id;
                  return (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        onClick={(e) => handleLinkClick(e, section.id)}
                        className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs transition-colors ${
                          isActive
                            ? "bg-[#DC2626] text-white font-bold shadow-sm"
                            : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 font-medium"
                        }`}
                      >
                        <span
                          className={`text-[10px] font-bold w-5 ${
                            isActive ? "text-red-100" : "text-slate-400"
                          }`}
                        >
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <span className="truncate">{section.label}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          )}
        </div>
      </div>

      {/* Desktop Sticky Sidebar TOC */}
      <aside className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start">
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
          <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100">
            <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
            <p className="text-[11px] font-extrabold uppercase tracking-wider text-slate-900">
              SMA-2 Cure Strategy Index
            </p>
          </div>
          <nav aria-label="Table of Contents">
            <ul className="space-y-1">
              {sections.map((section, idx) => {
                const isActive = activeId === section.id;
                return (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      onClick={(e) => handleLinkClick(e, section.id)}
                      className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs transition-all ${
                        isActive
                          ? "bg-[#DC2626] text-white font-bold shadow-sm"
                          : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 font-medium"
                      }`}
                    >
                      <span
                        className={`text-[10px] font-bold shrink-0 ${
                          isActive ? "text-red-100" : "text-slate-400"
                        }`}
                      >
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <span className="leading-snug">{section.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="mt-5 pt-4 border-t border-slate-100">
            <p className="text-[11px] font-bold text-slate-700 mb-1.5">
              Need Day-62 Batch Dispatch?
            </p>
            <p className="text-[11px] text-slate-500 leading-relaxed mb-3">
              Upload SMA-1/SMA-2 CSV cohorts for fact-verified multi-channel cure notices.
            </p>
            <a
              href="#cta-desk"
              onClick={(e) => handleLinkClick(e, "cta-desk")}
              className="w-full inline-flex items-center justify-center px-3 py-2 rounded-lg text-xs font-bold text-white bg-slate-900 hover:bg-[#DC2626] transition-colors"
            >
              Launch SMA-2 Desk &rarr;
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}
