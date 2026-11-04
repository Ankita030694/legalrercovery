"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const CHEQUE_HINDI_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-overview", label: "अवलोकन (OVERVIEW)" },
  { id: "heading-key-facts", label: "मुख्य कानूनी तथ्य" },
  { id: "heading-statutory-rules", label: "धारा 138 के नियम" },
  { id: "heading-interactive-template", label: "नोटिस प्रारूप व ड्राफ्टिंग" },
  { id: "heading-clause-breakdown", label: "क्लॉज-दर-क्लॉज व्याख्या" },
  { id: "heading-timeline-diagram", label: "30 व 15 दिन समय सीमा" },
  { id: "heading-sending-guide", label: "नोटिस भेजने की विधि" },
  { id: "heading-worked-example", label: "केस उदाहरण (उदाहरणात्मक)" },
  { id: "heading-court-orders", label: "सुप्रीम कोर्ट फैसले" },
  { id: "heading-evidence-checklist", label: "सबूतों की चेकलिस्ट" },
  { id: "heading-next-steps", label: "भुगतान न मिलने पर कदम" },
  { id: "heading-faqs", label: "अक्सर पूछे जाने वाले सवाल" },
  { id: "heading-sources", label: "प्राथमिक कानूनी स्रोत" },
];

interface ChequeBounceHindiTOCProps {
  sections?: TOCSection[];
}

export default function ChequeBounceHindiTOC({
  sections = CHEQUE_HINDI_TOC_SECTIONS,
}: ChequeBounceHindiTOCProps) {
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
          className="w-full flex items-center justify-between px-4 py-3 bg-white border border-slate-200 rounded-xl shadow-xs text-left"
          aria-expanded={isOpen}
          aria-label="विषय सूची खोलें"
        >
          <div className="flex items-center gap-2.5 min-w-0">
            <span className="flex h-2 w-2 rounded-full bg-red-600 shrink-0" />
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider shrink-0">
              विषय सूची:
            </span>
            <span className="text-sm font-medium text-slate-900 truncate">
              {activeSection.label}
            </span>
          </div>
          <svg
            className={`w-4 h-4 text-slate-500 transition-transform duration-200 shrink-0 ml-2 ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {isOpen && (
          <div className="absolute left-0 right-0 mt-2 bg-white border border-slate-200 rounded-xl shadow-xl overflow-hidden z-40 max-h-[60vh] overflow-y-auto">
            <nav className="p-2 space-y-1">
              {sections.map((section) => {
                const isActive = section.id === activeId;
                return (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    onClick={(e) => scrollToSection(e, section.id)}
                    className={`block px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                      isActive
                        ? "bg-red-50 text-red-700 font-semibold"
                        : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                    }`}
                  >
                    {section.label}
                  </a>
                );
              })}
            </nav>
          </div>
        )}
      </div>

      {/* Desktop Sticky Sidebar Table of Contents */}
      <aside className="hidden lg:block w-64 shrink-0">
        <div className="sticky top-28 bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
          <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100">
            <span className="flex h-2 w-2 rounded-full bg-red-600" />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-900">
              सामग्री रूपरेखा
            </span>
          </div>
          <nav className="space-y-1">
            {sections.map((section) => {
              const isActive = section.id === activeId;
              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => scrollToSection(e, section.id)}
                  className={`block px-3 py-2 rounded-lg text-xs transition-all duration-150 ${
                    isActive
                      ? "bg-red-50 text-red-700 font-semibold border-l-2 border-red-600 pl-2.5"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  {section.label}
                </a>
              );
            })}
          </nav>
        </div>
      </aside>
    </>
  );
}
