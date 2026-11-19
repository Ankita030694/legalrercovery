"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const RIGID_PACKAGING_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-mould-lien-law", label: "S.170 & GENERAL LIEN" },
  { id: "heading-escalation-flow", label: "MOULD-HOLD FLOWCHART" },
  { id: "heading-legal-remedies", label: "STATUTORY REMEDIES" },
  { id: "heading-dispute-playbooks", label: "4 DEFAULT PLAYBOOKS" },
  { id: "heading-technical-defenses", label: "DROP-TEST & TORQUE" },
  { id: "heading-worked-example", label: "₹28L WORKED LEDGER" },
  { id: "heading-evidence-dossier", label: "MOULD & BSA S.63 PROOF" },
  { id: "heading-action-cta", label: "START RECOVERY NOTICE" },
  { id: "heading-related-cluster", label: "HUB, TOOLS & GUIDES" },
  { id: "heading-faqs", label: "MOULD LIEN FAQS" },
  { id: "heading-authorities", label: "STATUTES & PORTALS" },
];

interface RigidPackagingTableOfContentsProps {
  sections?: TOCSection[];
}

export default function RigidPackagingTableOfContents({
  sections = RIGID_PACKAGING_TOC_SECTIONS,
}: RigidPackagingTableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>(sections[0]?.id || "");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
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

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
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
      {/* Mobile / Tablet Sticky Dropdown Bar */}
      <div
        ref={dropdownRef}
        className="lg:hidden sticky top-20 z-30 bg-slate-50/95 backdrop-blur-sm border-b border-slate-200 py-3 px-4 -mx-4 sm:-mx-6 mb-4 select-none"
      >
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between px-4 py-3 bg-white border border-slate-200 rounded-xl shadow-sm hover:border-slate-300 transition-colors cursor-pointer"
          aria-expanded={isOpen}
          aria-label="Toggle rigid plastic and mould lien recovery table of contents"
        >
          <div className="flex items-center gap-2.5 min-w-0">
            <span className="w-2 h-2 rounded-full bg-[#DC2626] shrink-0 animate-pulse" />
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 shrink-0">
              Guide Section:
            </span>
            <span className="text-xs font-bold text-slate-900 truncate">
              {activeSection?.label}
            </span>
          </div>
          <svg
            width="16"
            height="16"
            className={`w-4 h-4 text-slate-500 transition-transform duration-200 shrink-0 ml-2 ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {isOpen && (
          <div className="mt-2 bg-white border border-slate-200 rounded-xl shadow-lg p-2 max-h-72 overflow-y-auto">
            <nav aria-label="Mobile table of contents">
              <ul className="space-y-1">
                {sections.map((section, idx) => {
                  const isActive = activeId === section.id;
                  return (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        onClick={(e) => scrollToSection(e, section.id)}
                        className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-semibold transition-colors ${
                          isActive
                            ? "bg-[#DC2626] text-white font-bold shadow-sm"
                            : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                        }`}
                      >
                        <span
                          className={`text-[10px] font-mono ${
                            isActive ? "text-red-100" : "text-slate-400"
                          }`}
                        >
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <span className="truncate">{section.label}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        )}
      </div>

      {/* Desktop Left Sticky Sidebar TOC (zero H2/H3/H4 tags inside sidebar) */}
      <aside
        className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start"
        aria-label="Rigid plastic and mould lien recovery guide navigation"
      >
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
          <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100">
            <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
            <p className="text-[11px] font-extrabold uppercase tracking-widest text-slate-500">
              On This Page
            </p>
          </div>

          <nav aria-label="Desktop table of contents">
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
                          : "text-slate-600 font-medium hover:bg-slate-100 hover:text-slate-900"
                      }`}
                    >
                      <span
                        className={`text-[10px] font-mono shrink-0 ${
                          isActive ? "text-red-100" : "text-slate-400"
                        }`}
                      >
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <span className="leading-snug">{section.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="mt-5 pt-4 border-t border-slate-100">
            <p className="text-[11px] font-semibold text-slate-500 mb-2">
              Buyer demanding blow-mould handover?
            </p>
            <a
              href="#heading-action-cta"
              onClick={(e) => scrollToSection(e, "heading-action-cta")}
              className="w-full inline-flex items-center justify-center px-3.5 py-2.5 rounded-xl text-xs font-bold text-white bg-slate-900 hover:bg-[#DC2626] transition-colors"
            >
              Issue Mould-Lien Notice &rarr;
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}
