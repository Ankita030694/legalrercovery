"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const SME_BUSINESS_LOAN_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-qr-diversion-gap", label: "THE DIVERTED QR & EDI TRAP" },
  { id: "heading-decision-tree", label: "DUAL-TRACK DECISION TREE" },
  { id: "heading-statutory-matrix", label: "STATUTORY REMEDY MATRIX" },
  { id: "heading-scenario-tabs", label: "4 SME FAILURE SCENARIOS" },
  { id: "heading-gst-garnishee", label: "GST & BANK GARNISHEE SOP" },
  { id: "heading-worked-ledger", label: "₹28.5L RECOVERY LEDGER" },
  { id: "heading-evidence-checklist", label: "BSA s.63 EVIDENCE CHECKLIST" },
  { id: "heading-cta-desk", label: "DEPLOY RECOVERY DESK" },
  { id: "heading-faqs", label: "FAQS" },
  { id: "heading-sources", label: "STATUTORY PORTALS" },
];

interface SmeBusinessLoanTableOfContentsProps {
  sections?: TOCSection[];
}

export default function SmeBusinessLoanTableOfContents({
  sections = SME_BUSINESS_LOAN_TOC_SECTIONS,
}: SmeBusinessLoanTableOfContentsProps) {
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
        className="lg:hidden sticky top-20 z-30 bg-slate-50/95 backdrop-blur-sm border-b border-slate-200 py-3 px-4 -mx-4 sm:-mx-6 mb-4 select-none"
      >
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          className="w-full flex items-center justify-between gap-3 px-4 py-2.5 bg-white border border-slate-200 rounded-xl shadow-sm text-left"
        >
          <div className="min-w-0">
            <span className="block text-[10px] font-bold uppercase tracking-widest text-slate-400">
              On This Page
            </span>
            <span className="block text-xs font-bold text-slate-900 truncate">
              {activeSection?.label}
            </span>
          </div>
          <span className="shrink-0 text-xs font-bold text-[#DC2626]">
            {isOpen ? "Close ▲" : "Jump ▼"}
          </span>
        </button>

        {isOpen && (
          <nav
            aria-label="Table of contents mobile"
            className="mt-2 bg-white border border-slate-200 rounded-xl shadow-lg p-2 max-h-72 overflow-y-auto"
          >
            <ul className="space-y-1">
              {sections.map((section) => {
                const isActive = section.id === activeId;
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

      {/* Desktop Sticky Sidebar TOC */}
      <aside className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start">
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
          <p className="text-[11px] font-extrabold uppercase tracking-widest text-slate-400 mb-3 px-2">
            Playbook Navigation
          </p>
          <nav aria-label="Table of contents">
            <ul className="space-y-1">
              {sections.map((section) => {
                const isActive = section.id === activeId;
                return (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      onClick={(e) => scrollToSection(e, section.id)}
                      className={`block px-3 py-2 rounded-lg text-xs transition-all ${
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
        </div>
      </aside>
    </>
  );
}
