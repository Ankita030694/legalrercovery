"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const VISA_AGENT_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-legal-basis", label: "LEGAL RIGHTS" },
  { id: "heading-order-digest", label: "COURT VERDICTS" },
  { id: "heading-pattern-analysis", label: "WINNING PATTERNS" },
  { id: "heading-dual-track", label: "CIVIL VS CRIMINAL" },
  { id: "heading-escalation-flow", label: "RESOLUTION RAIL" },
  { id: "heading-playbook", label: "5-STEP PLAYBOOK" },
  { id: "heading-deadlines-table", label: "STATUTORY BENCHMARKS" },
  { id: "heading-problem-picker", label: "DISPUTE TYPES" },
  { id: "heading-worked-example", label: "WORKED EXAMPLE" },
  { id: "heading-evidence-checklist", label: "EVIDENCE MATRIX" },
  { id: "heading-faqs", label: "FAQ" },
  { id: "heading-sources", label: "STATUTES & PORTALS" },
];

interface VisaAgentTableOfContentsProps {
  sections?: TOCSection[];
}

export default function VisaAgentTableOfContents({
  sections = VISA_AGENT_TOC_SECTIONS,
}: VisaAgentTableOfContentsProps) {
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

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, id: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 90; // offset for 80px fixed navbar + breathing room
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      window.history.pushState(null, "", `#${id}`);
      setActiveId(id);
    }
  };

  const activeSection = sections.find((s) => s.id === activeId) || sections[0];

  return (
    <>
      {/* Mobile Sticky Bar */}
      <div className="lg:hidden sticky top-20 z-30 w-full mb-6" ref={dropdownRef}>
        <div className="bg-white/95 backdrop-blur-md border border-slate-200/80 rounded-xl shadow-md p-2">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between px-3 py-2 text-xs font-bold text-slate-800 bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
            aria-expanded={isOpen}
            aria-label="Table of contents menu"
          >
            <span className="flex items-center gap-2 truncate">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
              <span className="text-slate-500 font-semibold uppercase tracking-wider text-[10px]">
                Contents:
              </span>
              <span className="truncate">{activeSection?.label}</span>
            </span>
            <span
              className={`transform transition-transform text-slate-500 font-bold ml-2 ${
                isOpen ? "rotate-180" : ""
              }`}
            >
              ▼
            </span>
          </button>

          {isOpen && (
            <div className="mt-2 pt-2 border-t border-slate-100 max-h-64 overflow-y-auto space-y-1">
              {sections.map((section) => {
                const isActive = activeId === section.id;
                return (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    onClick={(e) => scrollToSection(e, section.id)}
                    className={`w-full text-left px-3 py-1.5 text-xs rounded-md transition-colors flex items-center justify-between cursor-pointer ${
                      isActive
                        ? "bg-red-50 text-red-600 font-bold"
                        : "text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    <span>{section.label}</span>
                    {isActive && <span className="text-[10px] text-red-600">●</span>}
                  </a>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Desktop Sticky Sidebar Table of Contents */}
      <aside
        aria-label="Table of Contents"
        className="hidden lg:block lg:w-64 xl:w-72 shrink-0 sticky top-24 self-start z-20 bg-white rounded-2xl border border-slate-200/80 p-5 shadow-sm space-y-4 max-h-[calc(100vh-7rem)] overflow-y-auto [scrollbar-width:thin]"
      >
        <div className="border-b border-slate-100 pb-3">
          <span className="text-[11px] font-black uppercase tracking-wider text-red-600 block mb-1">
            Table of Contents
          </span>
          <p className="text-xs text-slate-600">
            Direct access to statutory frameworks, court precedents &amp; fee recovery steps
          </p>
        </div>

        <nav aria-label="Visa Agent Legal Notice Navigation" className="space-y-1">
          {sections.map((section) => {
            const isActive = activeId === section.id;
            return (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={(e) => scrollToSection(e, section.id)}
                className={`w-full text-left px-3 py-2 text-xs font-semibold rounded-lg transition-all flex items-center justify-between cursor-pointer ${
                  isActive
                    ? "bg-red-50 text-red-600 font-bold border-l-2 border-red-600 pl-2.5 shadow-xs"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                <span className="truncate">{section.label}</span>
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-red-600 shrink-0" />}
              </a>
            );
          })}
        </nav>

        <div className="pt-3 border-t border-slate-100">
          <div className="bg-slate-50 rounded-xl p-3 border border-slate-200/60">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500 block mb-1">
              Statutory Authority
            </span>
            <p className="text-[11px] text-slate-700 leading-snug">
              Consumer Protection Act 2019 · BNS Sec 318 &amp; 316 · Emigration Act 1983
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}
