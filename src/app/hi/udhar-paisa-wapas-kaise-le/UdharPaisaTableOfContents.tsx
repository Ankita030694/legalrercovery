"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const UDHAR_PAISA_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-overview", label: "सीधा जवाब" },
  { id: "heading-case-story", label: "उदाहरण कहानी" },
  { id: "heading-court-rulings", label: "अदालती फैसले" },
  { id: "heading-legal-basis", label: "कानूनी धाराएं" },
  { id: "heading-escalation-flow", label: "वसूली फ्लोचार्ट" },
  { id: "heading-playbook", label: "5-चरणीय प्रक्रिया" },
  { id: "heading-facts-table", label: "समय सीमा व फोरम" },
  { id: "heading-problem-tabs", label: "विवाद समाधान" },
  { id: "heading-evidence-checklist", label: "सबूतों की सूची" },
  { id: "heading-faqs", label: "अक्सर पूछे सवाल" },
  { id: "heading-sources", label: "कानूनी स्रोत" },
];

interface UdharPaisaTableOfContentsProps {
  sections?: TOCSection[];
}

export default function UdharPaisaTableOfContents({
  sections = UDHAR_PAISA_TOC_SECTIONS,
}: UdharPaisaTableOfContentsProps) {
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
      const yOffset = -90; // offset for navbar
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
      {/* Mobile Sticky Dropdown */}
      <div
        ref={dropdownRef}
        className="lg:hidden sticky top-20 z-30 w-full mb-6 py-2 bg-slate-50/95 backdrop-blur-sm select-none"
      >
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="विषय सूची खोलें"
          className="w-full flex items-center justify-between px-4 py-2.5 bg-white border border-slate-300 rounded-xl shadow-xs text-xs font-bold text-slate-800"
        >
          <span className="flex items-center gap-2 truncate">
            <span className="text-red-600 font-extrabold">विषय सूची:</span>
            <span className="text-slate-600 truncate">{activeSection?.label}</span>
          </span>
          <span className={`transform transition-transform duration-200 text-slate-400 shrink-0 ${isOpen ? "rotate-180" : ""}`}>
            ▼
          </span>
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-slate-200 rounded-xl shadow-lg p-2 max-h-72 overflow-y-auto z-40 space-y-1">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={(e) => scrollToSection(e, s.id)}
                className={`block px-3 py-2 rounded-lg text-xs font-semibold transition-colors ${
                  activeId === s.id
                    ? "bg-red-50 text-red-600 font-bold"
                    : "text-slate-700 hover:bg-slate-100"
                }`}
              >
                {s.label}
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Desktop Sticky Sidebar */}
      <aside
        aria-label="विषय सूची"
        className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 select-none"
      >
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
          <p className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-4 pb-2 border-b border-slate-100">
            विषय सूची (INDEX)
          </p>
          <nav className="space-y-1">
            {sections.map((s) => {
              const isActive = activeId === s.id;
              return (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  onClick={(e) => scrollToSection(e, s.id)}
                  className={`block px-3 py-2 rounded-xl text-xs font-medium transition-all ${
                    isActive
                      ? "bg-red-50 text-[#DC2626] font-bold border-l-4 border-[#DC2626] pl-2.5 shadow-2xs"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  {s.label}
                </a>
              );
            })}
          </nav>
        </div>
      </aside>
    </>
  );
}
