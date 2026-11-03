"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const CHEQUE_BOUNCE_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-summary", label: "SUMMARY & 2025 CHANGES" },
  { id: "heading-comparison-table", label: "OLD VS NEW RULES" },
  { id: "heading-landmark-orders", label: "SUPREME COURT DIGEST" },
  { id: "heading-timeline-change", label: "TIMELINE OF REFORMS" },
  { id: "heading-grey-areas", label: "GREY AREAS & NUANCES" },
  { id: "heading-escalation-flow", label: "RESOLUTION RAIL" },
  { id: "heading-playbook", label: "5-STEP ACTION GUIDE" },
  { id: "heading-scenarios-tabs", label: "KEY DEFENSES & FIXES" },
  { id: "heading-worked-example", label: "WORKED CASE STUDY" },
  { id: "heading-evidence-checklist", label: "FILING CHECKLIST" },
  { id: "heading-faqs", label: "FAQ" },
  { id: "heading-sources", label: "STATUTORY REFS" },
];

interface ChequeBounceTableOfContentsProps {
  sections?: TOCSection[];
}

export default function ChequeBounceTableOfContents({
  sections = CHEQUE_BOUNCE_TOC_SECTIONS,
}: ChequeBounceTableOfContentsProps) {
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
          aria-expanded={isOpen}
          aria-label="Table of Contents Navigation"
          className="w-full flex items-center justify-between px-4 py-2.5 bg-white border border-slate-200 rounded-xl shadow-xs text-left"
        >
          <div className="flex items-center gap-2 overflow-hidden">
            <span className="w-2 h-2 rounded-full bg-[#DC2626] shrink-0" />
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500 shrink-0">
              Jump To:
            </span>
            <span className="text-xs sm:text-sm font-bold text-slate-900 truncate">
              {activeSection.label}
            </span>
          </div>
          <span className="text-slate-400 font-bold text-xs shrink-0 ml-2">
            {isOpen ? "▲" : "▼"}
          </span>
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-1 max-h-72 overflow-y-auto bg-white border border-slate-200 rounded-xl shadow-xl z-50 divide-y divide-slate-100">
            {sections.map((s) => {
              const isActive = s.id === activeId;
              return (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  onClick={(e) => scrollToSection(e, s.id)}
                  className={`block px-4 py-2.5 text-xs sm:text-sm font-semibold transition-colors ${
                    isActive
                      ? "bg-red-50 text-[#DC2626] font-bold"
                      : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  {s.label}
                </a>
              );
            })}
          </div>
        )}
      </div>

      {/* Desktop Sticky Sidebar Table of Contents */}
      <aside
        aria-label="Table of Contents"
        className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start bg-white border border-slate-200 rounded-2xl p-5 shadow-xs"
      >
        <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-200">
          <div className="w-1.5 h-4 bg-[#DC2626] rounded-full" />
          <h2 className="text-xs font-black uppercase tracking-wider text-slate-900">
            Contents Guide
          </h2>
        </div>

        <nav className="space-y-1">
          {sections.map((section) => {
            const isActive = section.id === activeId;
            return (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={(e) => scrollToSection(e, section.id)}
                className={`group flex items-center justify-between px-3 py-2 rounded-lg text-xs font-bold transition-all duration-150 ${
                  isActive
                    ? "bg-red-50 text-[#DC2626] shadow-xs"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                <span className="truncate">{section.label}</span>
                <span
                  className={`w-1.5 h-1.5 rounded-full transition-transform ${
                    isActive
                      ? "bg-[#DC2626] scale-125"
                      : "bg-transparent group-hover:bg-slate-300"
                  }`}
                />
              </a>
            );
          })}
        </nav>

        <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] text-slate-500 leading-relaxed">
          <p className="font-semibold text-slate-700 mb-1">Section 138 NI Act</p>
          Supreme Court Guidelines post Sanjabij Tari (2025) &amp; Expeditious Trial Directions.
        </div>
      </aside>
    </>
  );
}
