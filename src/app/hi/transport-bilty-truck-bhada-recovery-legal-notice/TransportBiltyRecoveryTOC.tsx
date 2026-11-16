"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const TRANSPORT_RECOVERY_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-transport-crisis", label: "ट्रांसपोर्ट भाड़ा संकट और कानूनी अधिकार" },
  { id: "heading-statutory-protections", label: "कैरिज एक्ट व कॉन्ट्रैक्ट एक्ट सुरक्षा" },
  { id: "heading-carrier-lien-rules", label: "कैरियर लियन (माल रोकने का अधिकार)" },
  { id: "heading-recovery-workflow-svg", label: "5-चरणीय कानूनी रिकवरी प्रक्रिया" },
  { id: "heading-statutory-matrix", label: "वैधानिक रिकवरी मैट्रिक्स व दंड प्रावधान" },
  { id: "heading-interactive-scenarios", label: "4 व्यापारिक परिदृश्य व समाधान" },
  { id: "heading-financial-ledger", label: "भाड़ा व हॉल्टिंग का वित्तीय लेज़र चार्ट" },
  { id: "heading-evidence-checklist", label: "BSA 2023 इलेक्ट्रॉनिक साक्ष्य चेकलिस्ट" },
  { id: "heading-judicial-precedents", label: "सुप्रीम कोर्ट व हाई कोर्ट के फैसले" },
  { id: "heading-summary-suit-msme", label: "ऑर्डर 37 सीपीसी व MSME समाधान" },
  { id: "heading-faqs", label: "अक्सर पूछे जाने वाले सवाल (FAQ)" },
  { id: "heading-statutory-sources", label: "विधिक कानून व आधिकारिक स्रोत" },
];

interface TransportBiltyRecoveryTOCProps {
  sections?: TOCSection[];
}

export default function TransportBiltyRecoveryTOC({
  sections = TRANSPORT_RECOVERY_TOC_SECTIONS,
}: TransportBiltyRecoveryTOCProps) {
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
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 110;
      window.scrollTo({ top, behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Sticky Bar */}
      <div className="lg:hidden sticky top-20 z-30 bg-slate-50/95 backdrop-blur-sm border-b border-slate-200 py-3 px-4 -mx-4 sm:-mx-6 mb-6">
        <div className="relative" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between px-4 py-2.5 bg-white border border-slate-300 rounded-xl shadow-sm text-xs font-bold text-slate-800"
            aria-expanded={isOpen}
          >
            <span className="truncate">
              विषय सूची: {sections.find((s) => s.id === activeId)?.label || "अनुभाग चुनें"}
            </span>
            <svg
              className={`w-4 h-4 ml-2 transition-transform duration-200 shrink-0 ${
                isOpen ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isOpen && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-slate-200 rounded-xl shadow-xl py-2 z-40 max-h-80 overflow-y-auto">
              {sections.map((section, idx) => (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left px-4 py-2 text-xs transition-colors flex items-center gap-2 ${
                    activeId === section.id
                      ? "bg-red-50 text-[#DC2626] font-bold"
                      : "text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  <span className="w-5 h-5 rounded-full bg-slate-100 text-slate-500 text-[10px] flex items-center justify-center font-bold shrink-0">
                    {idx + 1}
                  </span>
                  <span className="truncate">{section.label}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Desktop Sticky Sidebar */}
      <aside className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start">
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <span className="text-xs font-extrabold uppercase tracking-wider text-slate-900">
              गाइड विषय सूची
            </span>
            <span className="text-[10px] bg-red-100 text-[#DC2626] font-bold px-2 py-0.5 rounded-full">
              कानूनी धाराएं
            </span>
          </div>

          <nav className="space-y-1">
            {sections.map((section, idx) => {
              const isActive = activeId === section.id;
              return (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-xs transition-all flex items-center gap-2.5 ${
                    isActive
                      ? "bg-[#DC2626] text-white font-bold shadow-sm"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  <span
                    className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 ${
                      isActive
                        ? "bg-white text-[#DC2626]"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    {idx + 1}
                  </span>
                  <span className="truncate">{section.label}</span>
                </button>
              );
            })}
          </nav>

          <div className="pt-4 border-t border-slate-100 text-[11px] text-slate-500 space-y-2">
            <div className="flex items-center gap-1.5 text-emerald-700 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
              <span>Carriage Act s.10 &amp; s.13</span>
            </div>
            <p className="text-[10px] text-slate-400 leading-snug">
              बिल्टी हस्ताक्षर व E-Way Bill क्लोजर के बाद भाड़ा रोकना गैर-कानूनी है।
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}
