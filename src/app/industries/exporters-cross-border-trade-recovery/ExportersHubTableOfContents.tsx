"use client";

import React, { useEffect, useState, useRef } from "react";

export interface ExportersHubTOCSection {
  id: string;
  label: string;
}

export const EXPORTERS_HUB_TOC_SECTIONS: ExportersHubTOCSection[] = [
  { id: "heading-exporter-trilemma", label: "3 EXPORTER PRESSURES" },
  { id: "heading-escalation-matrix", label: "CROSS-BORDER MATRIX" },
  { id: "heading-edpms-workflow-svg", label: "EDPMS & ECGC FLOW" },
  { id: "heading-scenario-tabs", label: "4 TRADE SCENARIOS" },
  { id: "heading-dual-desk", label: "₹999 & BULK CSV DESK" },
  { id: "heading-statutory-framework", label: "FEMA, UCP 600 & CPC 44A" },
  { id: "heading-worked-ledger", label: "WORKED USD 180K MATH" },
  { id: "heading-ind15-directory", label: "10 IND-15 SPOKES" },
  { id: "heading-faqs", label: "EXPORTER & CFO FAQS" },
  { id: "heading-sources", label: "STATUTES & PORTALS" },
];

interface ExportersHubTableOfContentsProps {
  sections?: ExportersHubTOCSection[];
}

export default function ExportersHubTableOfContents({
  sections = EXPORTERS_HUB_TOC_SECTIONS,
}: ExportersHubTableOfContentsProps) {
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
          className="w-full flex items-center justify-between px-4 py-2.5 bg-white border border-slate-200 rounded-xl shadow-sm hover:border-slate-300 transition-colors"
          aria-expanded={isOpen}
          aria-label="Toggle table of contents"
        >
          <span className="flex items-center gap-2 min-w-0">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#DC2626] shrink-0">
              Contents
            </span>
            <span className="text-slate-300">|</span>
            <span className="text-xs font-bold text-slate-900 truncate">
              {activeSection?.label}
            </span>
          </span>
          <span
            className={`text-slate-400 text-xs transition-transform duration-200 shrink-0 ml-2 ${
              isOpen ? "rotate-180" : ""
            }`}
          >
            &#9660;
          </span>
        </button>

        {isOpen && (
          <div className="absolute left-4 right-4 top-full mt-1 bg-white border border-slate-200 rounded-xl shadow-xl z-40 max-h-80 overflow-y-auto py-2">
            {sections.map((section, idx) => {
              const isActive = activeId === section.id;
              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => scrollToSection(e, section.id)}
                  className={`flex items-center gap-3 px-4 py-2.5 text-xs transition-colors ${
                    isActive
                      ? "bg-red-50 text-[#DC2626] font-bold"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900 font-medium"
                  }`}
                >
                  <span
                    className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 ${
                      isActive ? "bg-[#DC2626] text-white" : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    {idx + 1}
                  </span>
                  <span className="truncate">{section.label}</span>
                </a>
              );
            })}
          </div>
        )}
      </div>

      {/* Desktop Sticky Left Sidebar */}
      <aside className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start">
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
            <p className="text-[11px] font-extrabold uppercase tracking-widest text-slate-500">
              Exporter Recovery Index
            </p>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-red-50 text-[#DC2626]">
              IND-15 Hub
            </span>
          </div>

          <nav aria-label="Page sections" className="space-y-1">
            {sections.map((section, idx) => {
              const isActive = activeId === section.id;
              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => scrollToSection(e, section.id)}
                  className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-[11px] tracking-wide transition-all ${
                    isActive
                      ? "bg-[#DC2626] text-white font-bold shadow-sm"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 font-semibold"
                  }`}
                >
                  <span
                    className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 ${
                      isActive ? "bg-white/20 text-white" : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    {idx + 1}
                  </span>
                  <span className="truncate">{section.label}</span>
                </a>
              );
            })}
          </nav>

          <div className="mt-5 pt-4 border-t border-slate-100">
            <p className="text-[11px] font-bold text-slate-800 mb-2">
              Need EDPMS / ECGC Notice Proof?
            </p>
            <a
              href="#heading-dual-desk"
              onClick={(e) => scrollToSection(e, "heading-dual-desk")}
              className="block w-full text-center py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-[#DC2626] text-white text-xs font-bold transition-colors"
            >
              Launch Notice or Bulk CSV &rarr;
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}
