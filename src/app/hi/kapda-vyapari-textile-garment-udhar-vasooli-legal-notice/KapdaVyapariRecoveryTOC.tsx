"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const KAPDA_RECOVERY_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-textile-crisis", label: "कपड़ा मंडी उधार संकट व कानूनी अधिकार" },
  { id: "heading-statutory-weapons", label: "4 प्रमुख कानूनी हथियार: MSME व 43B(h)" },
  { id: "heading-recovery-workflow", label: "5-चरणीय कपड़ा उधार वसूली प्रक्रिया" },
  { id: "heading-scenario-tabs", label: "4 मंडी परिदृश्य: दलाल, SOR व जॉब-वर्क" },
  { id: "heading-remedy-matrix", label: "वसूली फोरम मैट्रिक्स: MSME बनाम कोर्ट" },
  { id: "heading-financial-ledger", label: "₹18.50 लाख बीजक ब्याज व टैक्स गणना" },
  { id: "heading-evidence-checklist", label: "बीजक, बिल्टी व BSA s.63 साक्ष्य चेकलिस्ट" },
  { id: "heading-judicial-precedents", label: "सुप्रीम कोर्ट के प्रमुख व्यापारिक फैसले" },
  { id: "heading-faqs", label: "कपड़ा व्यापारी FAQ (अक्सर पूछे जाने वाले सवाल)" },
  { id: "heading-statutory-sources", label: "आधिकारिक कानून व विधिक स्रोत" },
];

interface KapdaVyapariRecoveryTOCProps {
  sections?: TOCSection[];
}

export default function KapdaVyapariRecoveryTOC({
  sections = KAPDA_RECOVERY_TOC_SECTIONS,
}: KapdaVyapariRecoveryTOCProps) {
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
      <div className="lg:hidden sticky top-20 z-30 bg-slate-50/95 backdrop-blur-sm border-b border-slate-200 py-3 px-4 -mx-4 sm:-mx-6 mb-4">
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
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isOpen && (
            <div className="absolute left-0 right-0 mt-2 bg-white border border-slate-200 rounded-xl shadow-xl z-40 max-h-80 overflow-y-auto p-2 space-y-1">
              {sections.map((sec, idx) => (
                <button
                  key={sec.id}
                  type="button"
                  onClick={() => scrollToSection(sec.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-xs transition-colors flex items-center gap-2 ${
                    activeId === sec.id
                      ? "bg-[#DC2626] text-white font-bold"
                      : "text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  <span className="text-[10px] opacity-75 shrink-0">{idx + 1}.</span>
                  <span className="truncate">{sec.label}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Desktop Sticky Sidebar */}
      <aside className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start">
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100">
            <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
            <p className="text-xs font-black uppercase tracking-wider text-slate-800">
              कपड़ा वसूली गाइड अनुक्रमणिका
            </p>
          </div>
          <nav aria-label="कपड़ा व्यापारी वसूली विषय सूची" className="space-y-1">
            {sections.map((sec, idx) => {
              const isActive = activeId === sec.id;
              return (
                <button
                  key={sec.id}
                  type="button"
                  onClick={() => scrollToSection(sec.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-xs transition-all duration-150 flex items-start gap-2 cursor-pointer ${
                    isActive
                      ? "bg-[#DC2626] text-white font-bold shadow-sm"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 font-medium"
                  }`}
                >
                  <span
                    className={`text-[10px] mt-0.5 shrink-0 ${
                      isActive ? "text-red-100" : "text-slate-400"
                    }`}
                  >
                    {idx + 1}.
                  </span>
                  <span className="leading-snug">{sec.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </aside>
    </>
  );
}
