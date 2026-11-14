"use client";

import React, { useEffect, useState, useRef } from "react";

export interface HotelsTravelHubTOCSection {
  id: string;
  label: string;
}

export const HOTELS_TRAVEL_HUB_TOC_SECTIONS: HotelsTravelHubTOCSection[] = [
  { id: "heading-overview", label: "HOSPITALITY & TMC CREDIT GAP" },
  { id: "heading-escalation-matrix", label: "8-TRACK ESCALATION MATRIX" },
  { id: "heading-workflow-architecture", label: "7-DAY BSP & FOLIO PIPELINE" },
  { id: "heading-scenario-playbooks", label: "4 SECTOR RECOVERY PLAYBOOKS" },
  { id: "heading-ledger-engine", label: "FOLIO, PNR & BULK CSV DESK" },
  { id: "heading-statutory-precedents", label: "ORDER 37, s.138 & s.74 LAW" },
  { id: "heading-worked-economics", label: "WORKED PNR & MICE MATH" },
  { id: "heading-spokes-directory", label: "ALL 9 IND-16 SPOKES & PACK" },
  { id: "heading-seed-resources", label: "LIVE B2B & CHEQUE GUIDES" },
  { id: "heading-faqs", label: "HOTEL, TMC & BANQUET FAQS" },
  { id: "heading-sources", label: "STATUTES & AVIATION PORTALS" },
];

interface HotelsTravelHubTableOfContentsProps {
  sections?: HotelsTravelHubTOCSection[];
}

export default function HotelsTravelHubTableOfContents({
  sections = HOTELS_TRAVEL_HUB_TOC_SECTIONS,
}: HotelsTravelHubTableOfContentsProps) {
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
      {/* Mobile / Tablet Sticky Bar */}
      <div
        ref={dropdownRef}
        className="lg:hidden sticky top-20 z-30 bg-slate-50/95 backdrop-blur-sm border-b border-slate-200 py-3 px-4 -mx-4 sm:-mx-6 mb-4 select-none"
      >
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between px-4 py-2.5 bg-white border border-slate-200 rounded-xl shadow-sm hover:border-slate-300 transition-colors cursor-pointer"
          aria-expanded={isOpen}
          aria-label="Toggle hospitality, banquet and corporate travel recovery navigation"
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
                  <span className={`font-mono text-[10px] mr-2 ${isActive ? "text-red-100" : "text-slate-400"}`}>
                    {idx < 9 ? `0${idx + 1}` : idx + 1}
                  </span>
                  {section.label}
                </a>
              );
            })}
          </div>
        )}
      </div>

      {/* Desktop Left Sticky Aside (Zero Heading Tags Inside Sidebar) */}
      <aside
        aria-label="Hotels, Banquets and Corporate Travel Hub Table of Contents"
        className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start"
      >
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-3">
            <p className="text-[11px] font-black uppercase tracking-widest text-slate-900">
              IND-16 Hub Navigation
            </p>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-red-50 text-[#DC2626] border border-red-200">
              11 Sections
            </span>
          </div>

          <nav aria-label="Page sections">
            <ul className="space-y-1">
              {sections.map((section, idx) => {
                const isActive = activeId === section.id;
                return (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      onClick={(e) => scrollToSection(e, section.id)}
                      className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs transition-all ${
                        isActive
                          ? "bg-[#DC2626] text-white font-bold shadow-sm"
                          : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 font-medium"
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
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="mt-5 pt-4 border-t border-slate-100 space-y-2.5">
            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
              Hotel, TMC &amp; Banquet Desk
            </p>
            <p className="text-xs text-slate-600 leading-relaxed">
              Convert aged BTC City Ledgers, Flown-PNR BSP tickets, or stopped banquet cheques into advocate notices.
            </p>
            <a
              href="#heading-cta-block"
              onClick={(e) => scrollToSection(e, "heading-cta-block")}
              className="block w-full text-center px-3.5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-colors"
            >
              Launch Notice / CSV Desk &rarr;
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}
