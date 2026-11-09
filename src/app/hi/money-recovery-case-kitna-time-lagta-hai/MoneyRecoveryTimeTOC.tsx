"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const MONEY_RECOVERY_TIME_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-direct-answer", label: "सीधा जवाब (Quick Answer)" },
  { id: "heading-timeline-table", label: "समय सीमा तुलना तालिका" },
  { id: "heading-stage-breakdown", label: "केस के चरण और समय (Timeline)" },
  { id: "heading-summary-suit", label: "समरी सूट (Order 37 CPC)" },
  { id: "heading-cheque-bounce", label: "चेक बाउंस (Sec 138 NI Act)" },
  { id: "heading-consumer-forum", label: "उपभोक्ता फोरम (e-Jagriti)" },
  { id: "heading-court-delays", label: "देरी के कारण और 5 तेज़ उपाय" },
  { id: "heading-pre-litigation", label: "बिना कोर्ट जाए 4 तेज़ रास्ते" },
  { id: "heading-process-diagram", label: "रिकवरी प्रक्रिया प्रवाह (Flow)" },
  { id: "heading-case-citations", label: "अदालती फैसले और मिसालें" },
  { id: "heading-worked-example", label: "वास्तविक समय गणना उदाहरण" },
  { id: "heading-scenario-tabs", label: "विशेष परिस्थितियां व समाधान" },
  { id: "heading-evidence-checklist", label: "सबूतों और दस्तावेज़ों की सूची" },
  { id: "heading-faqs", label: "अक्सर पूछे जाने वाले सवाल (FAQs)" },
  { id: "heading-sources", label: "कानूनी संदर्भ (Primary Sources)" },
];

interface MoneyRecoveryTimeTOCProps {
  sections?: TOCSection[];
}

export default function MoneyRecoveryTimeTOC({
  sections = MONEY_RECOVERY_TIME_TOC_SECTIONS,
}: MoneyRecoveryTimeTOCProps) {
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
        const section = document.getElementById(sections[i].id);
        if (section) {
          const top = section.offsetTop;
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
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -90;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveId(id);
      setIsOpen(false);
    }
  };

  const activeLabel = sections.find((s) => s.id === activeId)?.label || "विषय सूची";

  return (
    <>
      {/* Mobile Sticky Quick Dropdown */}
      <div className="lg:hidden sticky top-20 z-30 mb-6 w-full" ref={dropdownRef}>
        <div className="bg-white/95 backdrop-blur-md border border-slate-200 rounded-xl shadow-md p-2">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between px-3 py-2 text-xs font-bold text-slate-800 rounded-lg hover:bg-slate-100 transition-colors"
            aria-expanded={isOpen}
          >
            <div className="flex items-center gap-2 truncate">
              <span className="w-2 h-2 rounded-full bg-[#DC2626] shrink-0" />
              <span className="truncate">सूची: {activeLabel}</span>
            </div>
            <svg
              className={`w-4 h-4 text-slate-500 shrink-0 transition-transform duration-200 ${
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
            <ul className="mt-2 pt-2 border-t border-slate-100 max-h-64 overflow-y-auto space-y-1">
              {sections.map((section) => (
                <li key={section.id}>
                  <button
                    type="button"
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full text-left px-3 py-1.5 rounded-md text-xs transition-colors flex items-center gap-2 ${
                      activeId === section.id
                        ? "bg-red-50 text-[#DC2626] font-bold"
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                        activeId === section.id ? "bg-[#DC2626]" : "bg-slate-300"
                      }`}
                    />
                    <span className="truncate">{section.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Desktop Sticky Sidebar */}
      <aside className="hidden lg:block w-72 shrink-0 sticky top-28 self-start">
        <nav
          aria-label="विषय सूची"
          className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-5 space-y-3"
        >
          <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
            <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
            <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-900">
              विषय सूची (On This Page)
            </h2>
          </div>

          <ul className="space-y-1 text-xs">
            {sections.map((section) => {
              const isActive = activeId === section.id;
              return (
                <li key={section.id}>
                  <button
                    type="button"
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-all flex items-center gap-2 ${
                      isActive
                        ? "bg-red-50 text-[#DC2626] font-bold shadow-sm"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-50 font-medium"
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full shrink-0 transition-colors ${
                        isActive ? "bg-[#DC2626] scale-125" : "bg-slate-300"
                      }`}
                    />
                    <span className="truncate leading-snug">{section.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="pt-3 border-t border-slate-100">
            <div className="bg-slate-50 rounded-xl p-3 text-[11px] text-slate-600 leading-relaxed border border-slate-200/60">
              <strong className="text-slate-900 block mb-1">त्वरित सलाह:</strong>
              कोर्ट केस फाइल करने से पहले 15 दिन का लीगल नोटिस भेजना और 3 साल की परिसीमा (Limitation Period) का ध्यान रखना जरूरी है।
            </div>
          </div>
        </nav>
      </aside>
    </>
  );
}
