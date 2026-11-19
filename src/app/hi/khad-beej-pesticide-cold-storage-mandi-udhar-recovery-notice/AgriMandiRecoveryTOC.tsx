"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const AGRI_MANDI_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-agri-credit-crisis", label: "सीज़नल उधार व कोल्ड स्टोरेज संकट" },
  { id: "heading-recovery-flowchart", label: "5-चरणीय कानूनी वसूली प्रक्रिया" },
  { id: "heading-statutory-matrix", label: "प्रमुख कानून व वैधानिक धाराएं" },
  { id: "heading-interactive-scenarios", label: "4 व्यापारिक परिदृश्य व कानूनी तोड़" },
  { id: "heading-cold-storage-auction-law", label: "कोल्ड स्टोरेज नीलामी (Pre-Auction) नियम" },
  { id: "heading-financial-ledger", label: "₹14 लाख उधार व ब्याज गणना चार्ट" },
  { id: "heading-evidence-checklist", label: "दस्तावेज व BSA 2023 धारा 63 चेकलिस्ट" },
  { id: "heading-judicial-precedents", label: "सुप्रीम कोर्ट के प्रमुख फैसले" },
  { id: "heading-related-tools", label: "संबंधित हब, कैलकुलेटर व टेम्पलेट्स" },
  { id: "heading-faqs", label: "अक्सर पूछे जाने वाले सवाल (FAQ)" },
  { id: "heading-statutory-sources", label: "विधिक कानून व सरकारी पोर्टल" },
];

interface AgriMandiRecoveryTOCProps {
  sections?: TOCSection[];
}

export default function AgriMandiRecoveryTOC({
  sections = AGRI_MANDI_TOC_SECTIONS,
}: AgriMandiRecoveryTOCProps) {
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
                  <span className="text-[10px] font-mono text-slate-400 w-4">{idx + 1}.</span>
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
          <p className="text-xs font-extrabold uppercase tracking-wider text-slate-900 mb-3 pb-2 border-b border-slate-100">
            गाइड विषय सूची (Index)
          </p>
          <nav aria-label="Table of Contents" className="space-y-1">
            {sections.map((section, idx) => {
              const isActive = activeId === section.id;
              return (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-xs transition-all flex items-start gap-2 ${
                    isActive
                      ? "bg-[#DC2626] text-white font-bold shadow-sm"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 font-medium"
                  }`}
                >
                  <span
                    className={`text-[10px] font-mono mt-0.5 ${
                      isActive ? "text-red-100" : "text-slate-400"
                    }`}
                  >
                    {idx + 1}.
                  </span>
                  <span className="leading-snug">{section.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </aside>
    </>
  );
}
