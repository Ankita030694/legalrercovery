"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const FACTORY_RECOVERY_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-vyapar-problem", label: "कारखाना पेमेंट संकट और कानून" },
  { id: "heading-msme-45-days-rule", label: "MSME 45-दिन भुगतान नियम" },
  { id: "heading-income-tax-43bh", label: "इनकम टैक्स सेक्शन 43B(h)" },
  { id: "heading-legal-notice-power", label: "एडवोकेट लीगल नोटिस का प्रभाव" },
  { id: "heading-recovery-rail-svg", label: "5-चरणीय कानूनी रिकवरी प्रक्रिया" },
  { id: "heading-interactive-scenarios", label: "व्यापारिक परिदृश्य व समाधान" },
  { id: "heading-interest-calculation", label: "3x बैंक ब्याज का गणना चार्ट" },
  { id: "heading-evidence-checklist", label: "दस्तावेज व E-Way Bill चेकलिस्ट" },
  { id: "heading-legal-precedents", label: "सुप्रीम कोर्ट के ऐतिहासिक फैसले" },
  { id: "heading-faqs", label: "अक्सर पूछे जाने वाले सवाल (FAQ)" },
  { id: "heading-statutory-sources", label: "विधिक कानून व आधिकारिक स्रोत" },
];

interface FactoryMsmeRecoveryTOCProps {
  sections?: TOCSection[];
}

export default function FactoryMsmeRecoveryTOC({
  sections = FACTORY_RECOVERY_TOC_SECTIONS,
}: FactoryMsmeRecoveryTOCProps) {
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
      {/* Mobile / Tablet Sticky Dropdown Table of Contents */}
      <div
        ref={dropdownRef}
        className="lg:hidden sticky top-20 z-30 w-full mb-6 py-2 bg-slate-50/95 backdrop-blur-sm select-none"
      >
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between px-4 py-3 bg-white border border-slate-200 rounded-xl shadow-sm hover:border-slate-300 transition-colors"
          aria-expanded={isOpen}
          aria-label="Toggle table of contents"
        >
          <div className="flex items-center gap-2.5 min-w-0">
            <span className="w-2 h-2 rounded-full bg-[#DC2626] shrink-0 animate-pulse" />
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 shrink-0">
              विषय सूची:
            </span>
            <span className="text-xs font-bold text-slate-900 truncate">
              {activeSection?.label}
            </span>
          </div>
          <svg
            className={`w-4 h-4 text-slate-500 transition-transform duration-200 shrink-0 ml-2 ${
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
          <div className="absolute top-full left-0 right-0 mt-1 max-h-80 overflow-y-auto bg-white border border-slate-200 rounded-xl shadow-xl py-2 z-40">
            {sections.map((section, idx) => {
              const isActive = activeId === section.id;
              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => scrollToSection(e, section.id)}
                  className={`block px-4 py-2.5 text-xs font-semibold tracking-wide transition-colors ${
                    isActive
                      ? "bg-red-50 text-[#DC2626] font-bold border-l-4 border-[#DC2626]"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  <span className="font-mono text-[10px] mr-2 text-slate-400">
                    {idx < 9 ? `0${idx + 1}` : idx + 1}
                  </span>
                  {section.label}
                </a>
              );
            })}
          </div>
        )}
      </div>

      {/* Desktop Sticky Aside */}
      <aside className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
        <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100">
          <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
          <span className="text-xs font-black uppercase tracking-wider text-slate-800">
            गाइड नेविगेशन (विषय सूची)
          </span>
        </div>
        <nav aria-label="Table of contents">
          <ul className="space-y-1">
            {sections.map((section, idx) => {
              const isActive = activeId === section.id;
              return (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    onClick={(e) => scrollToSection(e, section.id)}
                    className={`flex items-start gap-2 px-3 py-2 rounded-lg text-xs leading-snug transition-all ${
                      isActive
                        ? "bg-[#DC2626] text-white font-bold shadow-sm"
                        : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 font-medium"
                    }`}
                  >
                    <span
                      className={`font-mono text-[10px] mt-0.5 shrink-0 ${
                        isActive ? "text-red-100" : "text-slate-400"
                      }`}
                    >
                      {idx < 9 ? `0${idx + 1}` : idx + 1}
                    </span>
                    <span>{section.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
    </>
  );
}
