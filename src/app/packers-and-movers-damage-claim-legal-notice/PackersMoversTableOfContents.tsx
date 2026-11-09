"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const PACKERS_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-carrier-liability", label: "CARRIER LIABILITY" },
  { id: "heading-court-orders", label: "COURT PRECEDENTS" },
  { id: "heading-pattern-analysis", label: "WHAT WINS CLAIMS" },
  { id: "heading-escalation-flow", label: "RESOLUTION RAIL" },
  { id: "heading-playbook", label: "5-STEP PLAYBOOK" },
  { id: "heading-deadlines-table", label: "LIABILITY & DEADLINES" },
  { id: "heading-problem-picker", label: "DISPUTE SCENARIOS" },
  { id: "heading-worked-example", label: "WORKED EXAMPLE" },
  { id: "heading-evidence-checklist", label: "EVIDENCE CHECKLIST" },
  { id: "heading-key-takeaways", label: "KEY TAKEAWAYS" },
  { id: "heading-faqs", label: "FAQ" },
  { id: "heading-sources", label: "LEGAL SOURCES" },
];

interface PackersMoversTableOfContentsProps {
  sections?: TOCSection[];
}

export default function PackersMoversTableOfContents({
  sections = PACKERS_TOC_SECTIONS,
}: PackersMoversTableOfContentsProps) {
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
      const yOffset = -90; // offset for fixed navbar + breathing room
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
          className="w-full flex items-center justify-between px-4 py-2.5 bg-white border border-slate-200 rounded-xl shadow-xs text-xs font-bold text-slate-800"
          aria-expanded={isOpen}
        >
          <div className="flex items-center gap-2 truncate">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse shrink-0" />
            <span className="text-slate-400 font-medium">TABLE OF CONTENTS:</span>
            <span className="text-slate-900 truncate">{activeSection?.label}</span>
          </div>
          <span
            className={`text-slate-500 transition-transform duration-200 shrink-0 ml-2 ${
              isOpen ? "rotate-180" : ""
            }`}
          >
            ▼
          </span>
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-slate-200 rounded-xl shadow-xl py-2 max-h-72 overflow-y-auto z-40">
            {sections.map((sec) => (
              <a
                key={sec.id}
                href={`#${sec.id}`}
                onClick={(e) => scrollToSection(e, sec.id)}
                className={`block px-4 py-2 text-xs font-semibold tracking-wide transition-colors ${
                  activeId === sec.id
                    ? "bg-red-50 text-red-600 font-bold border-l-4 border-red-600"
                    : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                {sec.label}
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Desktop Sticky Table of Contents Sidebar */}
      <aside className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 select-none">
        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400">
              Contents
            </span>
            <span className="text-[11px] font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded-full">
              Carriage Act &amp; CPA
            </span>
          </div>

          <nav className="space-y-1" aria-label="Table of Contents">
            {sections.map((sec) => {
              const isActive = activeId === sec.id;
              return (
                <a
                  key={sec.id}
                  href={`#${sec.id}`}
                  onClick={(e) => scrollToSection(e, sec.id)}
                  className={`block px-3 py-2 rounded-lg text-xs font-bold tracking-wide transition-all ${
                    isActive
                      ? "bg-slate-900 text-white shadow-xs translate-x-1"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  {sec.label}
                </a>
              );
            })}
          </nav>

          <div className="pt-3 border-t border-slate-100">
            <div className="text-[11px] text-slate-500 leading-snug">
              <span className="font-bold text-slate-700">Notice Rule:</span> Under Section 10 of Carriage by Road Act 2007, notice of damage must be served within 180 days of delivery.
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
