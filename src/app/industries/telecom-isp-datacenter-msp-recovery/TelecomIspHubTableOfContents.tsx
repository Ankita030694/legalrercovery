"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TelecomIspHubTOCSection {
  id: string;
  label: string;
}

export const TELECOM_ISP_HUB_TOC_SECTIONS: TelecomIspHubTOCSection[] = [
  { id: "heading-overview", label: "TELECOM & CLOUD CREDIT GAP" },
  { id: "heading-escalation-matrix", label: "8-TRACK ESCALATION MATRIX" },
  { id: "heading-workflow-architecture", label: "DPDP-SAFE & TDSAT PIPELINE" },
  { id: "heading-scenario-playbooks", label: "4 SECTOR RECOVERY PLAYBOOKS" },
  { id: "heading-bulk-csv-desk", label: "ENTERPRISE CSV & CPE DESK" },
  { id: "heading-statutory-mandates", label: "TRAI s.14, DPDP & BNS s.316" },
  { id: "heading-worked-economics", label: "WORKED LOCK-IN & RACK LEDGER" },
  { id: "heading-spokes-directory", label: "ALL 10 IND-18 SPOKES & PACK" },
  { id: "heading-seed-resources", label: "ORDER 37, VENDOR & BULK TOOLS" },
  { id: "heading-faqs", label: "ISP, DATA CENTER & MSP FAQS" },
  { id: "heading-sources", label: "TRAI, TDSAT & STATUTE PORTALS" },
];

interface TelecomIspHubTableOfContentsProps {
  sections?: TelecomIspHubTOCSection[];
}

export default function TelecomIspHubTableOfContents({
  sections = TELECOM_ISP_HUB_TOC_SECTIONS,
}: TelecomIspHubTableOfContentsProps) {
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
        >
          <div className="flex items-center gap-2.5 overflow-hidden">
            <span className="w-2 h-2 rounded-full bg-[#DC2626] shrink-0" />
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 shrink-0">
              Section:
            </span>
            <span className="text-xs font-bold text-slate-800 truncate">
              {activeSection?.label}
            </span>
          </div>
          <svg
            className={`w-4 h-4 text-slate-500 shrink-0 transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {isOpen && (
          <div className="absolute left-4 right-4 mt-2 bg-white border border-slate-200 rounded-xl shadow-xl py-2 max-h-[65vh] overflow-y-auto z-40">
            {sections.map((section) => {
              const isActive = section.id === activeId;
              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => scrollToSection(e, section.id)}
                  className={`block px-4 py-2.5 text-xs tracking-wide transition-colors ${
                    isActive
                      ? "bg-[#DC2626] text-white font-bold"
                      : "text-slate-700 hover:bg-slate-100 font-medium"
                  }`}
                >
                  {section.label}
                </a>
              );
            })}
          </div>
        )}
      </div>

      {/* Desktop Left Sticky Sidebar TOC (no heading tags inside TOC) */}
      <aside className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start">
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
          <p className="text-[11px] font-extrabold uppercase tracking-widest text-slate-400 mb-3 px-2">
            IND-18 Hub Navigation
          </p>
          <nav aria-label="Page Table of Contents" className="space-y-1">
            {sections.map((section) => {
              const isActive = section.id === activeId;
              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => scrollToSection(e, section.id)}
                  className={`block px-3 py-2 rounded-lg text-[11px] leading-snug tracking-wide transition-all ${
                    isActive
                      ? "bg-[#DC2626] text-white font-bold shadow-sm"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 font-medium"
                  }`}
                >
                  {section.label}
                </a>
              );
            })}
          </nav>
        </div>
      </aside>
    </>
  );
}
