"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const JOB_SCAM_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-overview", label: "OVERVIEW" },
  { id: "heading-two-tracks", label: "TRACEABLE VS GHOST" },
  { id: "heading-preflight-checklist", label: "RECOVERY CHECKLIST" },
  { id: "heading-evidence-matrix", label: "EVIDENCE MATRIX" },
  { id: "heading-case-digest", label: "COURT PRECEDENTS" },
  { id: "heading-problem-tabs", label: "COMMON SCAM SCENARIOS" },
  { id: "heading-process-timeline", label: "ESCALATION TIMELINE" },
  { id: "heading-worked-example", label: "WORKED EXAMPLE" },
  { id: "heading-demand-template", label: "NOTICE TEMPLATE" },
  { id: "heading-faqs", label: "FAQS" },
  { id: "heading-sources", label: "LEGAL AUTHORITIES" },
];

interface JobScamTableOfContentsProps {
  sections?: TOCSection[];
}

export default function JobScamTableOfContents({
  sections = JOB_SCAM_TOC_SECTIONS,
}: JobScamTableOfContentsProps) {
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
            break;
          }
        }
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
      setActiveId(id);
      setIsOpen(false);
    }
  };

  const activeSection = sections.find((s) => s.id === activeId) || sections[0];

  return (
    <>
      {/* Mobile Sticky Selector */}
      <div className="lg:hidden w-full mb-6 sticky top-20 z-30" ref={dropdownRef}>
        <div className="bg-white/95 backdrop-blur-md border border-slate-200 rounded-xl shadow-md p-2">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between px-3 py-2 text-xs font-bold text-slate-800 bg-slate-50 rounded-lg border border-slate-200"
            aria-expanded={isOpen}
            aria-label="Table of Contents Menu"
          >
            <span className="flex items-center gap-2 truncate">
              <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
              <span className="text-slate-500 font-medium">Topic:</span>
              <span className="truncate">{activeSection?.label}</span>
            </span>
            <svg
              className={`w-4 h-4 text-slate-600 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isOpen && (
            <div className="mt-2 py-1 bg-white border border-slate-200 rounded-lg shadow-xl max-h-72 overflow-y-auto divide-y divide-slate-100">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => scrollToSection(e, section.id)}
                  className={`block px-3 py-2 text-xs font-semibold transition-colors ${
                    activeId === section.id
                      ? "bg-red-50 text-[#DC2626] font-bold"
                      : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  {section.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Desktop Sticky Sidebar */}
      <aside
        aria-label="Table of Contents Navigation"
        className="hidden lg:block w-72 shrink-0 sticky top-24 space-y-4"
      >
        <div className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-xs">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
            <span className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
              Navigation Index
            </span>
            <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
              11 Sections
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
                  className={`group flex items-center justify-between px-3 py-2 text-xs rounded-lg transition-all duration-150 ${
                    isActive
                      ? "bg-red-50 text-[#DC2626] font-bold shadow-xs"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50 font-medium"
                  }`}
                >
                  <span className="truncate">{section.label}</span>
                  <span
                    className={`w-1.5 h-1.5 rounded-full transition-all duration-150 ${
                      isActive ? "bg-[#DC2626] scale-125" : "bg-transparent group-hover:bg-slate-300"
                    }`}
                  />
                </a>
              );
            })}
          </nav>
        </div>

        {/* Quick Statutory Reference Card */}
        <div className="bg-slate-900 text-white rounded-2xl p-4 border border-slate-800 shadow-xs space-y-2">
          <span className="text-[10px] font-bold text-red-400 uppercase tracking-wider">
            Critical Red Flag
          </span>
          <p className="text-xs text-slate-300 leading-relaxed">
            Legitimate corporate employers (TCS, Infosys, Reliance, etc.) <strong>never</strong> charge registration, interview, or laptop security fees. Any fee demand is either an illegal placement commission or an outright cyber offence under BNS 318(4).
          </p>
        </div>
      </aside>
    </>
  );
}
