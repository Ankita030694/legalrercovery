"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const LEGAL_NOTICE_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-overview", label: "सीधा जवाब" },
  { id: "heading-case-story", label: "उदाहरण कहानी" },
  { id: "heading-court-rulings", label: "अदालती नज़ीरें" },
  { id: "heading-legal-basis", label: "कानूनी धाराएं" },
  { id: "heading-escalation-flow", label: "नोटिस फ्लोचार्ट" },
  { id: "heading-step-by-step", label: "चरण-दर-चरण प्रक्रिया" },
  { id: "heading-facts-table", label: "माध्यम व खर्च" },
  { id: "heading-problem-tabs", label: "विवाद समाधान" },
  { id: "heading-evidence-checklist", label: "सबूतों की सूची" },
  { id: "heading-faqs", label: "अक्सर पूछे सवाल" },
  { id: "heading-sources", label: "कानूनी स्रोत" },
];

interface LegalNoticeKaiseBhejeTOCProps {
  sections?: TOCSection[];
}

export default function LegalNoticeKaiseBhejeTOC({
  sections = LEGAL_NOTICE_TOC_SECTIONS,
}: LegalNoticeKaiseBhejeTOCProps) {
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
      {/* Mobile Sticky Dropdown Navigation */}
      <div className="lg:hidden w-full sticky top-16 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 py-2.5 px-4 mb-6 shadow-xs">
        <div className="relative" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between px-4 py-2.5 bg-slate-100 hover:bg-slate-200/80 rounded-xl text-xs sm:text-sm font-semibold text-slate-800 transition-colors border border-slate-300/70"
            aria-expanded={isOpen}
          >
            <span className="flex items-center gap-2 truncate">
              <span className="w-2 h-2 rounded-full bg-red-600 shrink-0" />
              <span className="text-slate-500 font-normal">विषय सूची:</span>
              <span className="truncate">{activeSection.label}</span>
            </span>
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
            <div className="absolute top-full left-0 right-0 mt-1.5 bg-white rounded-xl shadow-xl border border-slate-200 py-2 max-h-72 overflow-y-auto z-40">
              {sections.map((section, idx) => (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left px-4 py-2 text-xs sm:text-sm transition-colors flex items-center gap-2.5 ${
                    activeId === section.id
                      ? "bg-red-50 text-red-600 font-bold"
                      : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  <span className="text-[10px] font-mono text-slate-400 w-4 text-right">
                    {idx + 1}.
                  </span>
                  <span>{section.label}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Desktop Sticky Sidebar Navigation */}
      <aside className="hidden lg:block w-72 shrink-0 sticky top-24 self-start">
        <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs">
          <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100">
            <span className="w-2 h-2 rounded-full bg-red-600" />
            <h2 className="text-xs uppercase tracking-wider font-extrabold text-slate-900">
              इस गाइड के मुख्य भाग
            </h2>
          </div>

          <nav aria-label="Table of contents">
            <ul className="space-y-1">
              {sections.map((section, idx) => {
                const isActive = activeId === section.id;
                return (
                  <li key={section.id}>
                    <button
                      type="button"
                      onClick={() => scrollToSection(section.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-xs font-semibold transition-all duration-150 flex items-center gap-2.5 ${
                        isActive
                          ? "bg-red-50 text-red-700 shadow-2xs font-bold"
                          : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                      }`}
                    >
                      <span
                        className={`text-[10px] font-mono w-4 text-right shrink-0 ${
                          isActive ? "text-red-500 font-bold" : "text-slate-400"
                        }`}
                      >
                        {idx + 1}.
                      </span>
                      <span className="truncate">{section.label}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="mt-5 pt-4 border-t border-slate-100">
            <div className="p-3 bg-red-50/70 rounded-xl border border-red-100 text-[11px] text-red-900 leading-relaxed">
              <span className="font-bold block mb-1">विधिक सलाह सहायता:</span>
              स्पीड पोस्ट और ई-मेल दोनों से नोटिस भेजना अदालती दृष्टि से सबसे सुरक्षित माना जाता है।
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
