"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const WILLFUL_DEFAULTER_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-wilful-overview", label: "OVERVIEW" },
  { id: "heading-order-digest", label: "COURT ORDERS" },
  { id: "heading-pattern-analysis", label: "PATTERN ANALYSIS" },
  { id: "heading-escalation-flow", label: "RESOLUTION RAIL" },
  { id: "heading-playbook", label: "5-STEP PLAYBOOK" },
  { id: "heading-deadlines-table", label: "STATUTORY BENCHMARKS" },
  { id: "heading-problem-picker", label: "DEFAULT SCENARIOS" },
  { id: "heading-worked-example", label: "WORKED EXAMPLE" },
  { id: "heading-evidence-checklist", label: "EVIDENCE CHECKLIST" },
  { id: "heading-faqs", label: "FAQ" },
  { id: "heading-sources", label: "STATUTORY REFS" },
];

interface WillfulDefaulterTableOfContentsProps {
  sections?: TOCSection[];
}

export default function WillfulDefaulterTableOfContents({
  sections = WILLFUL_DEFAULTER_TOC_SECTIONS,
}: WillfulDefaulterTableOfContentsProps) {
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
      const yOffset = -90; // offset for 80px fixed navbar + breathing room
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
          className="w-full flex items-center justify-between px-4 py-2.5 bg-white border border-slate-200 rounded-xl shadow-xs text-xs font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-red-500"
          aria-expanded={isOpen}
          aria-label="Table of contents menu"
        >
          <span className="flex items-center gap-2 truncate">
            <span className="w-2 h-2 rounded-full bg-red-600 shrink-0" />
            <span className="text-slate-500 uppercase tracking-wider text-[10px]">SECTION:</span>
            <span className="truncate text-slate-900">{activeSection?.label}</span>
          </span>
          <span className="text-slate-500 text-xs shrink-0 ml-2">
            {isOpen ? "▲ Close" : "▼ Contents"}
          </span>
        </button>

        {isOpen && (
          <div className="absolute left-0 right-0 top-full mt-1.5 mx-0 bg-white border border-slate-200 rounded-xl shadow-xl overflow-hidden max-h-80 overflow-y-auto z-40 divide-y divide-slate-100">
            {sections.map((section) => {
              const isActive = activeId === section.id;
              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => scrollToSection(e, section.id)}
                  className={`block px-4 py-2.5 text-xs font-semibold transition-colors ${
                    isActive
                      ? "bg-red-50 text-red-600 font-bold border-l-4 border-red-600"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  {section.label}
                </a>
              );
            })}
          </div>
        )}
      </div>

      {/* Desktop Sticky Sidebar Table of Contents */}
      <aside
        aria-label="Table of Contents"
        className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start space-y-4"
      >
        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs">
          <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100">
            <div className="w-2 h-4 bg-red-600 rounded-full" />
            <span className="text-xs font-black uppercase tracking-wider text-slate-900">
              Recovery Navigation
            </span>
          </div>

          <nav className="space-y-1">
            {sections.map((section) => {
              const isActive = activeId === section.id;
              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => scrollToSection(e, section.id)}
                  className={`group flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold transition-all duration-150 ${
                    isActive
                      ? "bg-red-50 text-red-700 font-bold shadow-xs"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  <span className="truncate">{section.label}</span>
                  <span
                    className={`text-[10px] transition-transform duration-150 ${
                      isActive
                        ? "text-red-600 translate-x-0"
                        : "text-slate-300 opacity-0 group-hover:opacity-100"
                    }`}
                  >
                    →
                  </span>
                </a>
              );
            })}
          </nav>
        </div>

        {/* Quick Contact Box for SAMB / FMC Bank Officials */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white p-4 rounded-xl border border-slate-700 text-xs space-y-2">
          <p className="font-bold text-red-400 uppercase tracking-wider text-[10px]">
            Bank Legal Cell &amp; SAMG Desk
          </p>
          <p className="text-slate-300 leading-relaxed text-[11px]">
            Need immediate advice on issuing 21-day show cause notices or filing Section 318 BNS criminal complaints against absconding promoters?
          </p>
          <a
            href="mailto:contact@legalrecovery.in"
            className="inline-block text-xs font-bold text-red-400 hover:text-red-300 hover:underline pt-1"
          >
            Connect with Banking Counsel →
          </a>
        </div>
      </aside>
    </>
  );
}
