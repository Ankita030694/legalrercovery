"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const KHAD_BEEJ_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-agri-credit-crisis", label: "खाद-बीज, मंडी व कोल्ड स्टोरेज उधार संकट" },
  { id: "heading-recovery-workflow-svg", label: "5-चरणीय कानूनी वसूली प्रक्रिया" },
  { id: "heading-statutory-matrix", label: "कृषि व मंडी कानूनी रिकवरी मैट्रिक्स" },
  { id: "heading-interactive-scenarios", label: "4 प्रमुख विवाद व तुरंत समाधान" },
  { id: "heading-cold-storage-auction-law", label: "कोल्ड स्टोरेज किराया व कानूनी नीलामी नियम" },
  { id: "heading-financial-ledger", label: "₹12 लाख बकाया व MSME 3x ब्याज गणना" },
  { id: "heading-evidence-checklist", label: "बिल्टी, लॉट रसीद व BSA 63 सबूत चेकलिस्ट" },
  { id: "heading-judicial-precedents", label: "सुप्रीम कोर्ट के प्रमुख फैसले" },
  { id: "heading-related-tools", label: "संबंधित हब, कैलकुलेटर व गाइड्स" },
  { id: "heading-faqs", label: "अक्सर पूछे जाने वाले सवाल (FAQ)" },
  { id: "heading-statutory-sources", label: "विधिक कानून व आधिकारिक पोर्टल" },
];

interface KhadBeejRecoveryTOCProps {
  sections?: TOCSection[];
}

export default function KhadBeejRecoveryTOC({
  sections = KHAD_BEEJ_TOC_SECTIONS,
}: KhadBeejRecoveryTOCProps) {
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
              width={16}
              height={16}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isOpen && (
            <div className="absolute left-0 right-0 mt-1.5 bg-white border border-slate-200 rounded-xl shadow-xl z-40 max-h-72 overflow-y-auto py-1">
              {sections.map((section, idx) => (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left px-4 py-2.5 text-xs transition-colors flex items-center gap-2 ${
                    activeId === section.id
                      ? "bg-red-50 text-[#DC2626] font-bold"
                      : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  <span className="text-[10px] font-bold opacity-70 w-4 shrink-0">{idx + 1}.</span>
                  <span className="truncate">{section.label}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Desktop Sticky Sidebar */}
      <aside className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start">
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
          <p className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500 mb-3 pb-2 border-b border-slate-100">
            इस गाइड में क्या है (विषय सूची)
          </p>
          <nav aria-label="विषय सूची">
            <ul className="space-y-1">
              {sections.map((section, idx) => {
                const isActive = activeId === section.id;
                return (
                  <li key={section.id}>
                    <button
                      type="button"
                      onClick={() => scrollToSection(section.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-xs transition-all flex items-start gap-2 ${
                        isActive
                          ? "bg-[#DC2626] text-white font-bold shadow-sm"
                          : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 font-medium"
                      }`}
                    >
                      <span
                        className={`text-[10px] font-bold mt-0.5 shrink-0 ${
                          isActive ? "text-red-100" : "text-slate-400"
                        }`}
                      >
                        {idx + 1}.
                      </span>
                      <span className="leading-snug">{section.label}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="mt-5 pt-4 border-t border-slate-100">
            <p className="text-[11px] text-slate-500 leading-relaxed mb-2.5">
              रबी या खरीफ सीज़न की उधारी फंसी है?
            </p>
            <a
              href="#heading-agri-cta-top"
              className="block w-full text-center px-3 py-2 bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs font-bold rounded-lg transition-colors"
            >
              ₹999 एडवोकेट नोटिस भेजें &rarr;
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}
