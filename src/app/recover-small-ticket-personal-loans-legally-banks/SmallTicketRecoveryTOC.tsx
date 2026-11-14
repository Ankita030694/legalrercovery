"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const SMALL_TICKET_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-unit-economics", label: "UNIT ECONOMICS CRISIS" },
  { id: "heading-legal-precedents", label: "JUDICIAL PRECEDENTS" },
  { id: "heading-lok-adalat-rail", label: "PRE-LITIGATION LOK ADALAT" },
  { id: "heading-odr-rail", label: "ONLINE DISPUTE RESOLUTION" },
  { id: "heading-strategy-comparison", label: "RECOVERY RAILS COMPARED" },
  { id: "heading-interactive-scenarios", label: "DEFAULT SCENARIOS" },
  { id: "heading-recovery-architecture", label: "5-TIER RECOVERY FUNNEL" },
  { id: "heading-case-study", label: "WORKED PORTFOLIO STUDY" },
  { id: "heading-statutory-notice-playbook", label: "NOTICE & SETTLEMENT PROTOCOL" },
  { id: "heading-sources", label: "STATUTORY REFERENCES" },
  { id: "heading-faqs", label: "FAQS" },
];

interface SmallTicketRecoveryTOCProps {
  sections?: TOCSection[];
}

export default function SmallTicketRecoveryTOC({
  sections = SMALL_TICKET_TOC_SECTIONS,
}: SmallTicketRecoveryTOCProps) {
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

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sections]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -100;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveId(id);
      setIsOpen(false);
    }
  };

  const activeSection = sections.find((s) => s.id === activeId) || sections[0];

  return (
    <>
      {/* Mobile Sticky Dropdown Header (< lg screens) */}
      <div className="lg:hidden w-full sticky top-16 z-30 mb-6 bg-white/95 backdrop-blur-md border border-slate-200 rounded-xl shadow-md p-3">
        <div className="relative" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-left text-xs font-bold text-slate-800 tracking-wide focus:outline-none focus:ring-2 focus:ring-red-500"
            aria-expanded={isOpen}
            aria-haspopup="listbox"
          >
            <div className="flex items-center gap-2 truncate">
              <span className="text-[10px] uppercase font-black px-1.5 py-0.5 rounded bg-red-100 text-red-700">
                JUMP TO
              </span>
              <span className="truncate">{activeSection?.label || "TABLE OF CONTENTS"}</span>
            </div>
            <span
              className={`transform transition-transform duration-200 text-slate-500 text-xs ${
                isOpen ? "rotate-180" : ""
              }`}
            >
              ▼
            </span>
          </button>

          {isOpen && (
            <div className="absolute left-0 right-0 mt-2 bg-white border border-slate-200 rounded-xl shadow-2xl py-2 z-50 max-h-80 overflow-y-auto">
              {sections.map((section, idx) => {
                const isActive = activeId === section.id;
                return (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    onClick={(e) => scrollToSection(e, section.id)}
                    className={`flex items-center justify-between px-4 py-2.5 text-xs font-semibold transition-colors ${
                      isActive
                        ? "bg-red-50 text-red-700 font-bold border-l-4 border-red-600"
                        : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                    }`}
                  >
                    <span>
                      {idx + 1}. {section.label}
                    </span>
                    {isActive && <span className="text-red-600 text-[10px] font-black">●</span>}
                  </a>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Desktop Sticky Sidebar (lg+ screens) */}
      <aside
        aria-label="Table of Contents"
        className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start bg-white border border-slate-200 rounded-2xl p-5 shadow-sm"
      >
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
          <span className="text-xs font-black uppercase tracking-wider text-slate-900">
            Table of Contents
          </span>
          <span className="text-[10px] font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded-full uppercase">
            Legal Rails
          </span>
        </div>

        <nav className="space-y-1">
          {sections.map((section, idx) => {
            const isActive = activeId === section.id;
            return (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={(e) => scrollToSection(e, section.id)}
                className={`group flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-all ${
                  isActive
                    ? "bg-red-50 text-red-700 font-bold shadow-xs border-l-2 border-red-600 pl-2.5"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                <div className="flex items-center gap-2 truncate">
                  <span
                    className={`text-[10px] font-mono shrink-0 ${
                      isActive ? "text-red-600 font-bold" : "text-slate-400 group-hover:text-slate-600"
                    }`}
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="truncate">{section.label}</span>
                </div>
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600 shrink-0" />
                )}
              </a>
            );
          })}
        </nav>

        <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] text-slate-500 leading-relaxed">
          <p className="font-semibold text-slate-700 mb-1">Small-Ticket Statutory Code</p>
          <p>
            Governed by Legal Services Authorities Act, 1987 (ss. 19-21), Section 25 PSS Act 2007, and BSA 2023 s.63 electronic evidence rules.
          </p>
        </div>
      </aside>
    </>
  );
}
