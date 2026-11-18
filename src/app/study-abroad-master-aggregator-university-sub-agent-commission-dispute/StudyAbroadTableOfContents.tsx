"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const STUDY_ABROAD_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-overview", label: "OVERVIEW & GAP" },
  { id: "heading-statutory-matrix", label: "STATUTORY MATRIX" },
  { id: "heading-escalation-tree", label: "5-STAGE ESCALATION TREE" },
  { id: "heading-scenario-tabs", label: "4 FAILURE SCENARIOS" },
  { id: "heading-worked-ledger", label: "₹36L WORKED LEDGER" },
  { id: "heading-clawback-gst", label: "CLAWBACK & GST RULES" },
  { id: "heading-bsa-evidence", label: "BSA s.63 EVIDENCE" },
  { id: "heading-faqs", label: "FAQ" },
  { id: "heading-sources", label: "STATUTORY SOURCES" },
];

interface StudyAbroadTableOfContentsProps {
  sections?: TOCSection[];
}

export default function StudyAbroadTableOfContents({
  sections = STUDY_ABROAD_TOC_SECTIONS,
}: StudyAbroadTableOfContentsProps) {
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
      {/* Mobile Sticky Dropdown TOC */}
      <div
        ref={dropdownRef}
        className="lg:hidden sticky top-20 z-30 bg-slate-50/95 backdrop-blur-sm border-b border-slate-200 py-3 px-4 -mx-4 sm:-mx-6 mb-4"
      >
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between gap-3 bg-white border border-slate-200 rounded-xl px-4 py-2.5 shadow-sm text-left"
          aria-expanded={isOpen}
        >
          <div className="flex items-center gap-2 min-w-0">
            <span className="text-[10px] font-black uppercase tracking-widest text-[#DC2626] shrink-0">
              Contents
            </span>
            <span className="text-slate-300">/</span>
            <span className="text-xs font-bold text-slate-900 truncate">
              {activeSection?.label}
            </span>
          </div>
          <svg
            className={`w-4 h-4 text-slate-500 shrink-0 transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            width={16}
            height={16}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {isOpen && (
          <nav
            aria-label="Mobile Table of Contents"
            className="mt-2 bg-white border border-slate-200 rounded-xl shadow-xl p-2 max-h-72 overflow-y-auto"
          >
            <ul className="space-y-1">
              {sections.map((sec, idx) => {
                const isActive = activeId === sec.id;
                return (
                  <li key={sec.id}>
                    <a
                      href={`#${sec.id}`}
                      onClick={(e) => scrollToSection(e, sec.id)}
                      className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs transition-colors ${
                        isActive
                          ? "bg-[#DC2626] text-white font-bold shadow-sm"
                          : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 font-medium"
                      }`}
                    >
                      <span
                        className={`text-[10px] font-bold ${
                          isActive ? "text-red-100" : "text-slate-400"
                        }`}
                      >
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <span className="truncate">{sec.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        )}
      </div>

      {/* Desktop Sticky Sidebar TOC */}
      <aside className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start">
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
          <p className="text-[11px] font-black uppercase tracking-widest text-[#DC2626] mb-3 pb-2 border-b border-slate-100">
            Playbook Navigation
          </p>
          <nav aria-label="Desktop Table of Contents">
            <ul className="space-y-1">
              {sections.map((sec, idx) => {
                const isActive = activeId === sec.id;
                return (
                  <li key={sec.id}>
                    <a
                      href={`#${sec.id}`}
                      onClick={(e) => scrollToSection(e, sec.id)}
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
                      <span className="leading-snug">{sec.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
}
