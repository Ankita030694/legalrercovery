"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const CLEARTRIP_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-overview", label: "OVERVIEW" },
  { id: "heading-grievance-sheet", label: "GRIEVANCE SHEET" },
  { id: "heading-order-digest", label: "COURT ORDERS" },
  { id: "heading-escalation-rail", label: "ESCALATION RAIL" },
  { id: "heading-resolution-flow", label: "RESOLUTION FLOW" },
  { id: "heading-deadlines-table", label: "REFUND DEADLINES" },
  { id: "heading-wallet-convenience-trap", label: "WALLET & FEE TRAP" },
  { id: "heading-worked-example", label: "WORKED EXAMPLE" },
  { id: "heading-evidence-checklist", label: "EVIDENCE CHECKLIST" },
  { id: "heading-faqs", label: "FAQ" },
  { id: "heading-sources", label: "STATUTORY REFS" },
];

interface CleartripTableOfContentsProps {
  sections?: TOCSection[];
}

export default function CleartripTableOfContents({
  sections = CLEARTRIP_TOC_SECTIONS,
}: CleartripTableOfContentsProps) {
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
      const yOffset = -90; // offset for fixed header
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
          aria-expanded={isOpen}
          aria-label="Table of Contents Navigation"
          className="w-full flex items-center justify-between px-4 py-2.5 bg-white border border-slate-200/90 rounded-xl shadow-sm text-xs font-bold text-slate-800"
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#DC2626] animate-pulse" />
            <span className="text-slate-500 uppercase tracking-wider text-[10px]">
              ON THIS PAGE:
            </span>
            <span className="truncate max-w-[190px] sm:max-w-xs text-slate-900 font-extrabold">
              {activeSection.label}
            </span>
          </div>
          <span
            className={`text-slate-400 font-black transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          >
            ▼
          </span>
        </button>

        {isOpen && (
          <div className="absolute left-0 right-0 mt-1.5 mx-0 bg-white border border-slate-200 rounded-xl shadow-xl overflow-hidden z-40 max-h-80 overflow-y-auto">
            <ul className="divide-y divide-slate-100 text-xs">
              {sections.map((section) => {
                const isActive = activeId === section.id;
                return (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      onClick={(e) => scrollToSection(e, section.id)}
                      className={`block px-4 py-2.5 font-bold transition-colors ${
                        isActive
                          ? "bg-red-50 text-[#DC2626]"
                          : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
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

      {/* Desktop Sticky Table of Contents Sidebar */}
      <aside
        aria-label="Table of Contents"
        className="hidden lg:block w-64 shrink-0 sticky top-28 select-none self-start"
      >
        <div className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-sm space-y-4">
          <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
            <p className="text-xs font-black uppercase tracking-wider text-slate-900">
              Table of Contents
            </p>
          </div>

          <nav>
            <ul className="space-y-1 text-xs">
              {sections.map((section) => {
                const isActive = activeId === section.id;
                return (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      onClick={(e) => scrollToSection(e, section.id)}
                      className={`block px-3 py-2 rounded-lg font-bold transition-all ${
                        isActive
                          ? "bg-red-50 text-[#DC2626] font-extrabold translate-x-1"
                          : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                      }`}
                    >
                      {section.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="pt-3 border-t border-slate-100">
            <a
              href="#heading-overview"
              onClick={(e) => scrollToSection(e, "heading-overview")}
              className="text-[11px] font-bold text-slate-500 hover:text-[#DC2626] transition-colors inline-flex items-center gap-1"
            >
              ↑ Back to Top
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}
