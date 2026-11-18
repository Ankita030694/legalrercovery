"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const ISP_LOCKIN_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-capex-trap", label: "CAPEX VS. PENALTY" },
  { id: "heading-decision-tree", label: "5-STAGE ESCALATION" },
  { id: "heading-statutory-matrix", label: "STATUTORY MATRIX" },
  { id: "heading-scenario-tabs", label: "4 DEFAULT SCENARIOS" },
  { id: "heading-worked-ledger", label: "WORKED CAPEX LEDGER" },
  { id: "heading-evidence-checklist", label: "CAF & BSA S.63 PROOF" },
  { id: "heading-dual-cta", label: "LEGAL RECOVERY DESK" },
  { id: "heading-related-spokes", label: "TELECOM & B2B LINKS" },
  { id: "heading-faqs", label: "FAQ" },
  { id: "heading-sources", label: "STATUTORY SOURCES" },
];

interface IspLockInTableOfContentsProps {
  sections?: TOCSection[];
}

export default function IspLockInTableOfContents({
  sections = ISP_LOCKIN_TOC_SECTIONS,
}: IspLockInTableOfContentsProps) {
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
      const yOffset = -96;
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
        className="lg:hidden sticky top-20 z-30 bg-slate-50/95 backdrop-blur-sm border-b border-slate-200 py-3 px-4 -mx-4 sm:-mx-6 mb-4 select-none"
      >
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          className="w-full flex items-center justify-between px-4 py-2.5 bg-white border border-slate-200 rounded-xl shadow-sm text-xs font-bold text-slate-800 uppercase tracking-wider cursor-pointer"
        >
          <span className="truncate">
            Section: <span className="text-[#DC2626]">{activeSection?.label}</span>
          </span>
          <span className="ml-2 text-slate-500 text-xs">{isOpen ? "▲" : "▼"}</span>
        </button>

        {isOpen && (
          <nav
            aria-label="Mobile Table of Contents"
            className="mt-2 bg-white border border-slate-200 rounded-xl shadow-lg p-2 max-h-72 overflow-y-auto space-y-1"
          >
            {sections.map((sec) => {
              const isActive = sec.id === activeId;
              return (
                <a
                  key={sec.id}
                  href={`#${sec.id}`}
                  onClick={(e) => scrollToSection(e, sec.id)}
                  className={`block px-3 py-2 rounded-lg text-xs font-semibold transition-colors ${
                    isActive
                      ? "bg-[#DC2626] text-white font-bold shadow-sm"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  {sec.label}
                </a>
              );
            })}
          </nav>
        )}
      </div>

      {/* Desktop Sticky Sidebar TOC (no heading tags inside TOC) */}
      <aside className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start">
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
          <p className="text-[11px] font-extrabold uppercase tracking-widest text-slate-400 mb-3">
            ISP Recovery Playbook
          </p>
          <nav aria-label="Table of Contents" className="space-y-1">
            {sections.map((sec) => {
              const isActive = sec.id === activeId;
              return (
                <a
                  key={sec.id}
                  href={`#${sec.id}`}
                  onClick={(e) => scrollToSection(e, sec.id)}
                  className={`block px-3 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                    isActive
                      ? "bg-[#DC2626] text-white font-bold shadow-sm"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  {sec.label}
                </a>
              );
            })}
          </nav>
        </div>
      </aside>
    </>
  );
}
