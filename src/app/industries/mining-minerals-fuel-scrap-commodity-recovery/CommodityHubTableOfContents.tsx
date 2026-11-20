"use client";

import React, { useEffect, useState, useRef } from "react";

export interface CommodityHubTOCSection {
  id: string;
  label: string;
}

export const COMMODITY_HUB_TOC_SECTIONS: CommodityHubTOCSection[] = [
  { id: "heading-margin-risk-gap", label: "2–4% MARGIN RISK" },
  { id: "heading-escalation-matrix", label: "ESCALATION MATRIX" },
  { id: "heading-sampling-to-ibc-rail", label: "SAMPLING TO IBC RAIL" },
  { id: "heading-scenario-tabs", label: "4 SECTOR PLAYBOOKS" },
  { id: "heading-dual-desk", label: "TEST & BULK DESK" },
  { id: "heading-precedents", label: "APEX PRECEDENTS" },
  { id: "heading-worked-math", label: "WORKED LEDGER MATH" },
  { id: "heading-ind25-directory", label: "IND-25 SPOKE MAP" },
  { id: "heading-live-seed-guides", label: "CORE B2B GUIDES" },
  { id: "heading-faqs", label: "COMMODITY FAQS" },
  { id: "heading-sources", label: "STATUTES & PORTALS" },
];

interface CommodityHubTableOfContentsProps {
  sections?: CommodityHubTOCSection[];
}

export default function CommodityHubTableOfContents({
  sections = COMMODITY_HUB_TOC_SECTIONS,
}: CommodityHubTableOfContentsProps) {
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
          <div className="mt-2 bg-white border border-slate-200 rounded-xl shadow-xl p-2 max-h-[60vh] overflow-y-auto">
            <ul className="space-y-1">
              {sections.map((section) => {
                const isActive = activeId === section.id;
                return (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      onClick={(e) => scrollToSection(e, section.id)}
                      className={`block px-3 py-2 rounded-lg text-xs font-semibold transition-colors ${
                        isActive
                          ? "bg-[#DC2626] text-white font-bold"
                          : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                      }`}
                    >
                      {section.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>

      {/* Desktop Sticky Sidebar */}
      <aside className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start">
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
          <p className="text-[11px] font-extrabold uppercase tracking-widest text-slate-400 mb-3 px-2">
            IND-25 Recovery Index
          </p>
          <nav aria-label="Table of contents">
            <ul className="space-y-1">
              {sections.map((section) => {
                const isActive = activeId === section.id;
                return (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      onClick={(e) => scrollToSection(e, section.id)}
                      className={`block px-3 py-2 rounded-lg text-xs tracking-wide transition-all ${
                        isActive
                          ? "bg-[#DC2626] text-white font-bold shadow-sm"
                          : "text-slate-600 font-semibold hover:bg-slate-100 hover:text-slate-900"
                      }`}
                    >
                      {section.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="mt-5 pt-4 border-t border-slate-100 px-2">
            <p className="text-[11px] font-bold text-slate-800 mb-1">
              Need Urgent Asset Freeze?
            </p>
            <p className="text-[11px] text-slate-500 leading-relaxed mb-3">
              Lock Sale of Goods s.42 acceptance &amp; Order 38 Rule 5 attachment before factory assets move.
            </p>
            <a
              href="#heading-dual-desk"
              onClick={(e) => scrollToSection(e, "heading-dual-desk")}
              className="inline-flex items-center justify-center w-full px-3 py-2 rounded-lg text-xs font-bold text-white bg-slate-900 hover:bg-[#DC2626] transition-colors"
            >
              Launch Recovery Desk &rarr;
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}
