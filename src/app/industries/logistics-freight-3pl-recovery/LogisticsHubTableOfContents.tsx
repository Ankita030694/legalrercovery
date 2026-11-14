"use client";

import React, { useEffect, useState, useRef } from "react";

export interface LogisticsHubTOCSection {
  id: string;
  label: string;
}

export const LOGISTICS_HUB_TOC_SECTIONS: LogisticsHubTOCSection[] = [
  { id: "heading-overview", label: "FREIGHT RECOVERY GAP" },
  { id: "heading-escalation-matrix", label: "TICKET & TRACK MATRIX" },
  { id: "heading-lien-architecture", label: "48-HOUR LIEN PIPELINE" },
  { id: "heading-operator-playbooks", label: "OPERATOR PLAYBOOKS" },
  { id: "heading-csv-dispatch", label: "BILTY CSV & TRI-CHANNEL" },
  { id: "heading-statutory-mandates", label: "CARRIER & CHA STATUTES" },
  { id: "heading-worked-freight-math", label: "WORKED HALTING & CHA MATH" },
  { id: "heading-ind09-spokes", label: "10 LOGISTICS SPOKES" },
  { id: "heading-live-guides", label: "LIVE B2B SEED GUIDES" },
  { id: "heading-faqs", label: "LOGISTICS DEBT FAQS" },
  { id: "heading-sources", label: "OFFICIAL PORTALS & ACTS" },
];

interface LogisticsHubTableOfContentsProps {
  sections?: LogisticsHubTOCSection[];
}

export default function LogisticsHubTableOfContents({
  sections = LOGISTICS_HUB_TOC_SECTIONS,
}: LogisticsHubTableOfContentsProps) {
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
      {/* Mobile / Tablet Sticky Dropdown Bar */}
      <div
        ref={dropdownRef}
        className="lg:hidden sticky top-20 z-30 bg-slate-50/95 backdrop-blur-sm border-b border-slate-200 py-3 px-4 -mx-4 sm:-mx-6 mb-4 select-none"
      >
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between px-4 py-2.5 bg-white border border-slate-200 rounded-xl shadow-sm hover:border-slate-300 transition-colors"
          aria-expanded={isOpen}
          aria-label="Toggle logistics recovery guide navigation"
        >
          <span className="flex items-center gap-2.5 min-w-0">
            <span className="w-2 h-2 rounded-full bg-[#DC2626] shrink-0 animate-pulse" />
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 shrink-0">
              Section:
            </span>
            <span className="text-xs font-bold text-slate-900 truncate">
              {activeSection?.label}
            </span>
          </span>
          <svg
            width={16}
            height={16}
            className={`w-4 h-4 text-slate-500 transition-transform duration-200 shrink-0 ml-2 ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {isOpen && (
          <div className="absolute top-full left-4 right-4 mt-1 max-h-80 overflow-y-auto bg-white border border-slate-200 rounded-xl shadow-xl py-2 z-40">
            {sections.map((section, idx) => {
              const isActive = activeId === section.id;
              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => scrollToSection(e, section.id)}
                  className={`block px-4 py-2.5 text-xs font-semibold tracking-wide transition-colors ${
                    isActive
                      ? "bg-[#DC2626] text-white font-bold"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  <span
                    className={`font-mono text-[10px] mr-2 ${
                      isActive ? "text-red-100" : "text-slate-400"
                    }`}
                  >
                    {idx < 9 ? `0${idx + 1}` : idx + 1}
                  </span>
                  {section.label}
                </a>
              );
            })}
          </div>
        )}
      </div>

      {/* Desktop Left Sticky Sidebar */}
      <aside className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start">
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
          <div className="pb-3 mb-3 border-b border-slate-100">
            <p className="text-[11px] font-black uppercase tracking-widest text-[#DC2626]">
              IND-09 Navigation
            </p>
            <p className="text-xs font-bold text-slate-900 mt-0.5">
              Logistics &amp; 3PL Recovery Hub
            </p>
          </div>
          <nav aria-label="Page Sections" className="space-y-1">
            {sections.map((section, idx) => {
              const isActive = activeId === section.id;
              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => scrollToSection(e, section.id)}
                  className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-[11px] font-semibold tracking-wide transition-all ${
                    isActive
                      ? "bg-[#DC2626] text-white font-bold shadow-sm"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  <span
                    className={`font-mono text-[10px] shrink-0 ${
                      isActive ? "text-red-100" : "text-slate-400"
                    }`}
                  >
                    {idx < 9 ? `0${idx + 1}` : idx + 1}
                  </span>
                  <span className="truncate">{section.label}</span>
                </a>
              );
            })}
          </nav>

          <div className="mt-4 pt-4 border-t border-slate-100">
            <p className="text-[11px] font-bold text-slate-900 mb-1">
              Cargo in Transit or Held?
            </p>
            <p className="text-[11px] text-slate-600 leading-relaxed mb-2.5">
              Dispatch a 48-hour Carrier Lien or Freight Demand Notice before unloading wipes leverage.
            </p>
            <a
              href="#dual-track-cta"
              className="block w-full text-center py-2 px-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-colors"
            >
              Launch Notice Track &rarr;
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}
