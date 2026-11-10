"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const LEGAL_NOTICE_REPLY_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-reply-overview", label: "OVERVIEW" },
  { id: "heading-reply-workspace", label: "REPLY TEMPLATES" },
  { id: "heading-timelines-table", label: "TIME LIMITS" },
  { id: "heading-mandatory-elements", label: "MANDATORY ELEMENTS" },
  { id: "heading-common-mistakes", label: "COMMON MISTAKES" },
  { id: "heading-escalation-flow", label: "DEFENSE WORKFLOW" },
  { id: "heading-precedents-digest", label: "COURT PRECEDENTS" },
  { id: "heading-worked-example", label: "WORKED CASE STUDY" },
  { id: "heading-evidence-checklist", label: "EVIDENCE CHECKLIST" },
  { id: "heading-faqs", label: "FAQ" },
  { id: "heading-sources", label: "STATUTORY REFS" },
];

interface LegalNoticeReplyTOCProps {
  sections?: TOCSection[];
}

export default function LegalNoticeReplyTOC({
  sections = LEGAL_NOTICE_REPLY_TOC_SECTIONS,
}: LegalNoticeReplyTOCProps) {
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
          className="w-full flex items-center justify-between px-4 py-3 bg-white border border-slate-200 rounded-xl shadow-sm text-xs font-bold text-slate-800 focus:outline-hidden"
          aria-expanded={isOpen}
          aria-label="Table of Contents Navigation"
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
            <span className="uppercase tracking-wider text-slate-500 text-[10px]">On this page:</span>
            <span className="text-slate-900 font-extrabold truncate max-w-[200px]">
              {activeSection.label}
            </span>
          </div>
          <span className={`text-slate-500 text-sm transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}>
            ▾
          </span>
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-1 max-h-80 overflow-y-auto bg-white border border-slate-200 rounded-xl shadow-xl py-2 z-40">
            {sections.map((section) => {
              const isCurrent = activeId === section.id;
              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => scrollToSection(e, section.id)}
                  className={`block px-4 py-2 text-xs font-bold transition-colors ${
                    isCurrent
                      ? "text-[#DC2626] bg-red-50/70 border-l-4 border-[#DC2626]"
                      : "text-slate-700 hover:text-slate-900 hover:bg-slate-50"
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
        aria-label="Table of contents"
        className="hidden lg:block w-64 shrink-0 sticky top-24 self-start rounded-2xl bg-white border border-slate-200 p-5 shadow-sm"
      >
        <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100">
          <div className="w-2 h-2 rounded-full bg-[#DC2626]" />
          <p className="text-xs font-extrabold uppercase tracking-wider text-slate-900">
            Guide Sections
          </p>
        </div>
        <nav aria-label="Table of contents navigation">
          <ul className="space-y-1 text-xs">
            {sections.map((section) => {
              const isCurrent = activeId === section.id;
              return (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    onClick={(e) => scrollToSection(e, section.id)}
                    className={`block px-3 py-2 rounded-lg font-bold tracking-tight transition-all duration-150 ${
                      isCurrent
                        ? "bg-red-50 text-[#DC2626] font-extrabold shadow-xs"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                    }`}
                  >
                    {section.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
    </>
  );
}
