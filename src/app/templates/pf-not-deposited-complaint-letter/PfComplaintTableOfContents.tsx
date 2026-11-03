"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const PF_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-overview", label: "OVERVIEW" },
  { id: "heading-complaint-workspace", label: "COMPLAINT GENERATOR" },
  { id: "heading-annotated-sample", label: "ANNOTATED SAMPLE" },
  { id: "heading-elements-table", label: "MANDATORY VS OPTIONAL" },
  { id: "heading-common-mistakes", label: "COMMON MISTAKES" },
  { id: "heading-employer-penalties", label: "STATUTORY PENALTIES" },
  { id: "heading-escalation-flow", label: "RESOLUTION RAIL" },
  { id: "heading-playbook", label: "5-STEP PLAYBOOK" },
  { id: "heading-worked-example", label: "WORKED CASE" },
  { id: "heading-evidence-checklist", label: "EVIDENCE CHECKLIST" },
  { id: "heading-case-citations", label: "COURT PRECEDENTS" },
  { id: "heading-faqs", label: "FAQS" },
  { id: "heading-sources", label: "STATUTORY REFS" },
];

interface PfComplaintTableOfContentsProps {
  sections?: TOCSection[];
}

export default function PfComplaintTableOfContents({
  sections = PF_TOC_SECTIONS,
}: PfComplaintTableOfContentsProps) {
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

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -90;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const activeSection = sections.find((s) => s.id === activeId) || sections[0];

  return (
    <>
      {/* Mobile Sticky Bar */}
      <div className="lg:hidden sticky top-16 z-30 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 px-4 py-3 shadow-xs">
        <div className="relative" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200/70 text-slate-900 text-xs font-bold transition-colors cursor-pointer"
            aria-expanded={isOpen}
            aria-haspopup="true"
          >
            <span className="flex items-center gap-2 truncate">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
              <span className="text-slate-500 uppercase tracking-wider text-[10px]">On this page:</span>
              <span className="truncate text-slate-900">{activeSection.label}</span>
            </span>
            <span
              className={`transform transition-transform text-slate-500 text-xs ml-2 ${
                isOpen ? "rotate-180" : ""
              }`}
            >
              ▼
            </span>
          </button>

          {isOpen && (
            <div className="absolute left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-slate-200 py-2 max-h-[60vh] overflow-y-auto z-40">
              {sections.map((section) => {
                const isActive = activeId === section.id;
                return (
                  <button
                    key={section.id}
                    type="button"
                    onClick={() => scrollTo(section.id)}
                    className={`w-full text-left px-4 py-2.5 text-xs font-semibold flex items-center justify-between transition-colors ${
                      isActive
                        ? "bg-red-50 text-red-700 font-bold border-l-4 border-red-600"
                        : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                    }`}
                  >
                    <span>{section.label}</span>
                    {isActive && <span className="text-red-600 font-bold">✓</span>}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Desktop Sticky Sidebar */}
      <aside
        aria-label="Table of Contents"
        className="hidden lg:block lg:w-64 xl:w-72 shrink-0 sticky top-28 space-y-4"
      >
        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs">
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
            <span className="text-xs font-black uppercase tracking-wider text-slate-900 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-600" />
              On This Page
            </span>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
              {sections.length} Sections
            </span>
          </div>

          <nav className="space-y-1">
            {sections.map((section) => {
              const isActive = activeId === section.id;
              return (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => scrollTo(section.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-xs font-semibold transition-all duration-150 flex items-center justify-between cursor-pointer ${
                    isActive
                      ? "bg-red-50 text-red-700 font-bold shadow-2xs border-l-3 border-red-600"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  <span className="truncate">{section.label}</span>
                  {isActive && <span className="text-red-600 text-xs">●</span>}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Quick Statutory Help Box */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-4 border border-slate-700 text-xs space-y-2 shadow-xs">
          <p className="font-bold text-red-400 uppercase tracking-wider text-[10px]">
            EPFO Statutory Fact
          </p>
          <p className="text-slate-300 leading-relaxed text-[11px]">
            Deducting PF from wages but withholding deposit is deemed Criminal Breach of Trust under <strong>Section 316 BNS</strong>. Employer faces mandatory <strong>12% p.a. interest</strong> under s.7Q and up to <strong>100% damages</strong> under s.14B.
          </p>
        </div>
      </aside>
    </>
  );
}
