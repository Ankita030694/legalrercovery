"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const HORECA_TOC_SECTIONS: TOCSection[] = [
  { id: "horeca-outlet-mortality", label: "RESTAURANT & QSR DEFAULT RISK" },
  { id: "day-35-escalation-tree", label: "5-STAGE DAY-35 RECOVERY TREE" },
  { id: "horeca-statutory-matrix", label: "STATUTORY REMEDY MATRIX" },
  { id: "horeca-default-scenarios", label: "4 F&B FAILURE PLAYBOOKS" },
  { id: "worked-horeca-ledger", label: "₹15L HORECA RECOVERY LEDGER" },
  { id: "chef-challan-bsa-checklist", label: "CHEF CHALLAN & BSA s.63" },
  { id: "phoenix-llp-piercing", label: "STOPPING PHOENIX RESTAURATEURS" },
  { id: "horeca-dual-cta", label: "SINGLE OR BULK NOTICE" },
  { id: "horeca-related-resources", label: "TOOLS, TEMPLATES & GUIDES" },
  { id: "horeca-faqs", label: "FAQS" },
  { id: "horeca-primary-sources", label: "PRIMARY STATUTES" },
];

interface HorecaRecoveryTableOfContentsProps {
  sections?: TOCSection[];
}

export default function HorecaRecoveryTableOfContents({
  sections = HORECA_TOC_SECTIONS,
}: HorecaRecoveryTableOfContentsProps) {
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
      {/* Mobile Sticky Dropdown TOC */}
      <div
        ref={dropdownRef}
        className="lg:hidden sticky top-20 z-30 w-full mb-4 bg-slate-50/95 backdrop-blur-sm border-b border-slate-200 py-3 px-4 -mx-4 sm:-mx-6 select-none"
      >
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          className="w-full flex items-center justify-between px-4 py-2.5 bg-white border border-slate-300 rounded-xl shadow-sm text-xs font-bold text-slate-900"
        >
          <span className="truncate">
            <span className="text-[#DC2626] mr-2 uppercase tracking-wider">Jump to:</span>
            {activeSection?.label}
          </span>
          <svg
            className={`w-4 h-4 text-slate-500 shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
            width={16}
            height={16}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {isOpen && (
          <div className="mt-2 bg-white border border-slate-200 rounded-xl shadow-lg max-h-72 overflow-y-auto divide-y divide-slate-100">
            {sections.map((section) => {
              const isActive = section.id === activeId;
              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => scrollToSection(e, section.id)}
                  className={`block px-4 py-2.5 text-xs font-semibold transition-colors ${
                    isActive
                      ? "bg-[#DC2626] text-white"
                      : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  {section.label}
                </a>
              );
            })}
          </div>
        )}
      </div>

      {/* Desktop Sticky Sidebar TOC (no heading tags inside TOC) */}
      <aside
        aria-label="Table of Contents"
        className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start"
      >
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
          <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-3">
            HoReCa Recovery Playbook
          </p>
          <nav className="space-y-1">
            {sections.map((section) => {
              const isActive = section.id === activeId;
              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => scrollToSection(e, section.id)}
                  className={`block px-3 py-2 rounded-lg text-xs transition-all ${
                    isActive
                      ? "bg-[#DC2626] text-white font-bold shadow-sm"
                      : "text-slate-600 font-medium hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  {section.label}
                </a>
              );
            })}
          </nav>

          <div className="mt-5 pt-4 border-t border-slate-100">
            <p className="text-[11px] font-semibold text-slate-500 mb-2">
              Restaurant Stretching Past Day 35?
            </p>
            <a
              href="#horeca-dual-cta"
              onClick={(e) => scrollToSection(e, "horeca-dual-cta")}
              className="block w-full text-center px-3 py-2 rounded-lg text-xs font-bold bg-slate-900 text-white hover:bg-slate-800 transition-colors"
            >
              Send Day-35 Notice Now &rarr;
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}
