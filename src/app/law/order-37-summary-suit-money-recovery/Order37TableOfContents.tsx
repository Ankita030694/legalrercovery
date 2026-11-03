"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const ORDER_37_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-overview", label: "OVERVIEW" },
  { id: "heading-case-citations", label: "SC PRECEDENTS" },
  { id: "heading-pattern-analysis", label: "WHAT WINS ORDER 37" },
  { id: "heading-procedure-flow", label: "PROCEDURE FLOW" },
  { id: "heading-playbook", label: "5-STEP PLAYBOOK" },
  { id: "heading-deadlines-fees", label: "DEADLINES & FEES" },
  { id: "heading-qualifying-docs", label: "QUALIFYING DEBTS" },
  { id: "heading-worked-example", label: "WORKED EXAMPLE" },
  { id: "heading-evidence-checklist", label: "PLAINT CHECKLIST" },
  { id: "heading-plaint-format", label: "FORMAT BLUEPRINT" },
  { id: "heading-faqs", label: "FAQS" },
  { id: "heading-sources", label: "STATUTORY REFS" },
];

interface Order37TableOfContentsProps {
  sections?: TOCSection[];
}

export default function Order37TableOfContents({
  sections = ORDER_37_TOC_SECTIONS,
}: Order37TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>(sections[0]?.id || "");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
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

  // Track active section on scroll
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
      const yOffset = -90; // offset for fixed navbar
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
        className="lg:hidden sticky top-20 z-30 w-full mb-6 py-2 bg-slate-50/95 backdrop-blur-sm select-none"
      >
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between px-4 py-3 bg-white border border-slate-300 rounded-xl shadow-xs text-left"
          aria-expanded={isOpen}
          aria-controls="mobile-order37-toc-menu"
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
            <span className="text-xs uppercase tracking-wider font-extrabold text-slate-500">
              Page Contents:
            </span>
            <span className="text-xs font-bold text-slate-900 truncate max-w-[200px] sm:max-w-[320px]">
              {activeSection.label}
            </span>
          </div>
          <span className={`text-slate-400 font-bold transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}>
            ▾
          </span>
        </button>

        {isOpen && (
          <div
            id="mobile-order37-toc-menu"
            className="absolute left-0 right-0 mt-1 bg-white border border-slate-200 rounded-xl shadow-xl max-h-80 overflow-y-auto z-40 p-2 divide-y divide-slate-100"
          >
            {sections.map((section) => {
              const isActive = activeId === section.id;
              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => scrollToSection(e, section.id)}
                  className={`block px-3 py-2 text-xs font-semibold rounded-lg transition-colors ${
                    isActive
                      ? "bg-red-50 text-[#DC2626] font-bold"
                      : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  {section.label}
                </a>
              );
            })}
          </div>
        )}
      </div>

      {/* Desktop Sticky Sidebar Table of Contents */}
      <aside
        className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start bg-white border border-slate-200 rounded-2xl p-5 shadow-xs"
        aria-label="Table of Contents"
      >
        <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-200">
          <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
          <h2 className="text-xs font-black uppercase tracking-wider text-slate-900">
            Order XXXVII Index
          </h2>
        </div>

        <nav className="space-y-1">
          {sections.map((section) => {
            const isActive = activeId === section.id;
            return (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={(e) => scrollToSection(e, section.id)}
                className={`group flex items-center justify-between px-3 py-2 rounded-lg text-xs transition-all ${
                  isActive
                    ? "bg-red-50 text-[#DC2626] font-extrabold border-l-3 border-[#DC2626]"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50 font-medium"
                }`}
              >
                <span className="truncate">{section.label}</span>
                <span
                  className={`text-[10px] transition-transform ${
                    isActive
                      ? "text-[#DC2626] translate-x-0.5"
                      : "text-slate-300 group-hover:text-slate-400"
                  }`}
                >
                  →
                </span>
              </a>
            );
          })}
        </nav>

        <div className="mt-6 pt-4 border-t border-slate-100">
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80">
            <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">
              Statutory Basis
            </span>
            <p className="text-[11px] text-slate-700 font-semibold leading-tight">
              Order XXXVII Rules 1–7 CPC • 10-Day Statutory Appearance Rule
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}
