"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const CYBER_FRAUD_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-overview", label: "सीधा जवाब (OVERVIEW)" },
  { id: "heading-liability-matrix", label: "जिम्मेदारी तालिका (LIABILITY MATRIX)" },
  { id: "heading-myth-vs-fact", label: "भ्रम बनाम सच (MYTH VS FACT)" },
  { id: "heading-case-digest", label: "कोर्ट व लोकपाल फैसले (PRECEDENTS)" },
  { id: "heading-problem-picker", label: "फ्रॉड प्रकार व समाधान (SCENARIOS)" },
  { id: "heading-process-rail", label: "रिकवरी रोडमैप (RECOVERY RAIL)" },
  { id: "heading-playbook", label: "5-कदम प्लेबुक (PLAYBOOK)" },
  { id: "heading-rbi-rules", label: "आरबीआई जीरो लायबिलिटी (RBI RULES)" },
  { id: "heading-worked-example", label: "केस स्टडी (WORKED EXAMPLE)" },
  { id: "heading-evidence-checklist", label: "साक्ष्य चेकलिस्ट (CHECKLIST)" },
  { id: "heading-scope", label: "विधिक सीमाएं (SCOPE)" },
  { id: "heading-faqs", label: "सवाल-जवाब (FAQS)" },
  { id: "heading-sources", label: "कानूनी स्रोत (SOURCES)" },
];

interface CyberFraudHindiTOCProps {
  sections?: TOCSection[];
}

export default function CyberFraudHindiTOC({
  sections = CYBER_FRAUD_TOC_SECTIONS,
}: CyberFraudHindiTOCProps) {
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
    const element = document.getElementById(id);
    if (element) {
      const offset = 90;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
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
      {/* Mobile Sticky Dropdown Bar */}
      <div className="lg:hidden sticky top-16 z-30 bg-slate-900/95 backdrop-blur-md border-y border-slate-800 px-4 py-3 shadow-md mb-6">
        <div className="relative" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between px-4 py-2.5 bg-slate-800 text-white rounded-xl text-xs sm:text-sm font-semibold border border-slate-700 focus:outline-none focus:ring-2 focus:ring-red-500 cursor-pointer"
            aria-expanded={isOpen}
            aria-label="विषय सूची खोलें या बंद करें"
          >
            <span className="flex items-center gap-2 truncate">
              <span className="text-red-400 font-bold">विषय सूची:</span>
              <span className="truncate text-slate-200">{activeSection.label}</span>
            </span>
            <svg
              className={`w-4 h-4 text-slate-400 transition-transform duration-200 flex-shrink-0 ${
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
            <div className="absolute left-0 right-0 mt-2 bg-slate-900 border border-slate-700 rounded-xl shadow-2xl max-h-80 overflow-y-auto py-2 z-50">
              {sections.map((section) => (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left px-4 py-2.5 text-xs sm:text-sm transition-colors cursor-pointer ${
                    activeId === section.id
                      ? "bg-red-950/60 text-red-400 font-bold border-l-4 border-red-500"
                      : "text-slate-300 hover:bg-slate-800 hover:text-white"
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Desktop Sticky Sidebar TOC */}
      <aside className="hidden lg:block w-72 flex-shrink-0 sticky top-24 self-start">
        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs">
          <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100">
            <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse" />
            <p className="text-xs uppercase tracking-wider font-extrabold text-slate-900">
              पृष्ठ विषय सूची (Table of Contents)
            </p>
          </div>

          <nav className="space-y-1" aria-label="साइबर फ्रॉड रिकवरी विषय सूची">
            {sections.map((section) => {
              const isActive = activeId === section.id;
              return (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition-all duration-150 cursor-pointer truncate block ${
                    isActive
                      ? "bg-red-50 text-red-700 font-bold border-l-4 border-[#DC2626]"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  {section.label}
                </button>
              );
            })}
          </nav>

          <div className="mt-6 pt-4 border-t border-slate-100">
            <div className="bg-red-50/60 border border-red-200/70 rounded-xl p-3 text-center">
              <span className="text-[11px] font-bold text-red-800 block mb-1">
                तत्काल विधिक सहायता
              </span>
              <p className="text-[11px] text-slate-600 mb-2.5 leading-snug">
                बैंक टालमटोल कर रहा है? अधिवक्ता से लीगल नोटिस भेजें।
              </p>
              <a
                href="#heading-cta"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("heading-cta");
                }}
                className="inline-block w-full py-1.5 px-3 bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs font-semibold rounded-lg shadow-sm transition-colors text-center"
              >
                लीगल नोटिस ड्राफ्ट करें →
              </a>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
