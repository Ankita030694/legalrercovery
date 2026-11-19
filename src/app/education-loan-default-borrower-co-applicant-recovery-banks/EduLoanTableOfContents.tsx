"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const EDU_LOAN_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-edu-npa-crisis", label: "OVERSEAS NPA GAP" },
  { id: "heading-decision-tree", label: "DECISION TREE" },
  { id: "heading-co-obligor-s43", label: "CO-OBLIGOR s.43" },
  { id: "heading-nri-electronic-service", label: "NRI SERVICE (CPC O.V R.25)" },
  { id: "heading-statutory-matrix", label: "STATUTORY MATRIX" },
  { id: "heading-scenario-tabs", label: "4 NPA PLAYBOOKS" },
  { id: "heading-csis-cgfsel", label: "CSIS & CGFSEL 75%" },
  { id: "heading-garnishee-foreign", label: "GARNISHEE & s.44A" },
  { id: "heading-worked-ledger", label: "WORKED LEDGER" },
  { id: "heading-evidence-checklist", label: "DOSSIER & BSA s.63" },
  { id: "heading-cta-desk", label: "TEST & BULK CSV DESK" },
  { id: "heading-internal-network", label: "BANKING HUB & TOOLS" },
  { id: "heading-faq", label: "FAQ" },
  { id: "heading-primary-sources", label: "STATUTES & PORTALS" },
];

interface EduLoanTableOfContentsProps {
  sections?: TOCSection[];
}

export default function EduLoanTableOfContents({
  sections = EDU_LOAN_TOC_SECTIONS,
}: EduLoanTableOfContentsProps) {
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
        className="lg:hidden sticky top-20 z-30 w-full mb-4 py-3 px-4 -mx-4 sm:-mx-6 bg-slate-50/95 backdrop-blur-sm border-b border-slate-200 select-none"
      >
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          className="w-full flex items-center justify-between gap-3 px-4 py-2.5 bg-white border border-slate-200 rounded-xl shadow-sm text-left cursor-pointer"
        >
          <div className="flex items-center gap-2.5 min-w-0">
            <span className="w-2 h-2 rounded-full bg-[#DC2626] shrink-0" />
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 shrink-0">
              Jump To:
            </span>
            <span className="text-xs font-extrabold text-slate-900 truncate">
              {activeSection?.label}
            </span>
          </div>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`text-slate-500 shrink-0 transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
            aria-hidden="true"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>

        {isOpen && (
          <nav
            aria-label="Mobile Table of Contents"
            className="mt-2 bg-white border border-slate-200 rounded-xl shadow-xl p-2 max-h-72 overflow-y-auto"
          >
            <ul className="space-y-1">
              {sections.map((section) => {
                const isActive = activeId === section.id;
                return (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      onClick={(e) => scrollToSection(e, section.id)}
                      className={`block px-3 py-2 rounded-lg text-xs transition-colors ${
                        isActive
                          ? "bg-[#DC2626] text-white font-bold shadow-sm"
                          : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 font-medium"
                      }`}
                    >
                      {section.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        )}
      </div>

      {/* Desktop Sticky Left Sidebar Table of Contents */}
      <aside className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start">
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
          <p className="text-[11px] font-black uppercase tracking-widest text-slate-400 mb-3 px-2">
            Education Loan SOP
          </p>
          <nav aria-label="Table of Contents">
            <ul className="space-y-1">
              {sections.map((section) => {
                const isActive = activeId === section.id;
                return (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      onClick={(e) => scrollToSection(e, section.id)}
                      className={`block px-3 py-2 rounded-xl text-xs transition-all ${
                        isActive
                          ? "bg-[#DC2626] text-white font-bold shadow-sm"
                          : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 font-medium"
                      }`}
                    >
                      {section.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="mt-5 pt-4 border-t border-slate-100">
            <p className="text-[11px] font-bold text-slate-900 mb-1.5">
              Overseas Education NPA Desk
            </p>
            <p className="text-[11px] text-slate-500 leading-relaxed mb-3">
              Serve NRI borrowers via Email + WhatsApp + Indian RPAD to co-applicants with BSA s.63 logs.
            </p>
            <a
              href="#heading-cta-desk"
              onClick={(e) => scrollToSection(e, "heading-cta-desk")}
              className="block w-full text-center px-3 py-2 rounded-xl bg-slate-900 hover:bg-[#DC2626] text-white text-xs font-bold transition-colors"
            >
              Launch Notice / Bulk CSV &rarr;
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}
