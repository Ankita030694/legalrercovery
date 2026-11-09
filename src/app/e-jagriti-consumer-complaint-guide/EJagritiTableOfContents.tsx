"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const E_JAGRITI_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-quick-summary", label: "QUICK SUMMARY" },
  { id: "heading-what-is-ejagriti", label: "E-JAGRITI VS E-DAAKHIL" },
  { id: "heading-preflight-checklist", label: "FILING CHECKLIST" },
  { id: "heading-pecuniary-jurisdiction", label: "JURISDICTION & FEES" },
  { id: "heading-evidence-matrix", label: "EVIDENCE MATRIX" },
  { id: "heading-filing-workflow", label: "FILING WORKFLOW" },
  { id: "heading-step-by-step", label: "STEP-BY-STEP STEPS" },
  { id: "heading-court-orders", label: "LANDMARK ORDERS" },
  { id: "heading-worked-example", label: "WORKED EXAMPLE" },
  { id: "heading-complaint-template", label: "COMPLAINT TEMPLATE" },
  { id: "heading-scope-boundaries", label: "SCOPE & LIMITS" },
  { id: "heading-faqs", label: "FAQS" },
  { id: "heading-sources", label: "STATUTORY SOURCES" },
];

interface EJagritiTableOfContentsProps {
  sections?: TOCSection[];
}

export default function EJagritiTableOfContents({
  sections = E_JAGRITI_TOC_SECTIONS,
}: EJagritiTableOfContentsProps) {
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
      const yOffset = -90; // offset for 80px fixed navbar
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
      {/* Mobile / Tablet Sticky Dropdown */}
      <div
        ref={dropdownRef}
        className="lg:hidden sticky top-20 z-30 w-full mb-6 py-2 bg-slate-50/95 backdrop-blur-sm select-none"
      >
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Table of contents table navigation"
          className="w-full flex items-center justify-between px-4 py-2.5 bg-white border border-slate-300 rounded-xl shadow-sm text-xs font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          <div className="flex items-center gap-2 truncate">
            <span className="w-2 h-2 rounded-full bg-[#DC2626] shrink-0" />
            <span className="text-slate-500 uppercase tracking-wider text-[10px] shrink-0">
              Jump To:
            </span>
            <span className="text-slate-900 truncate font-semibold">
              {activeSection?.label}
            </span>
          </div>
          <svg
            className={`w-4 h-4 text-slate-500 transition-transform duration-200 shrink-0 ml-2 ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {isOpen && (
          <div className="absolute left-0 right-0 mt-1 max-h-72 overflow-y-auto bg-white border border-slate-200 rounded-xl shadow-xl z-40 divide-y divide-slate-100 py-1">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={(e) => scrollToSection(e, section.id)}
                className={`flex items-center px-4 py-2 text-xs font-medium transition-colors ${
                  activeId === section.id
                    ? "text-[#DC2626] bg-red-50/80 font-bold"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full mr-2.5 shrink-0 ${
                    activeId === section.id ? "bg-[#DC2626]" : "bg-transparent"
                  }`}
                />
                <span className="truncate">{section.label}</span>
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Desktop Sticky Sidebar */}
      <aside
        aria-label="Table of contents"
        className="hidden lg:block lg:w-72 xl:w-80 shrink-0 sticky top-28 self-start max-h-[calc(100vh-8rem)] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-slate-300"
      >
        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
          <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100">
            <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-800">
              Guide Navigation
            </h3>
          </div>

          <nav className="space-y-1">
            {sections.map((section) => {
              const isActive = activeId === section.id;
              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => scrollToSection(e, section.id)}
                  className={`group flex items-center justify-between px-3 py-2 rounded-lg text-xs transition-all duration-150 ${
                    isActive
                      ? "bg-red-50 text-[#DC2626] font-bold border-l-2 border-[#DC2626]"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50 font-medium"
                  }`}
                >
                  <span className="truncate">{section.label}</span>
                  <span
                    className={`text-[10px] opacity-0 group-hover:opacity-100 transition-opacity ${
                      isActive ? "opacity-100 text-[#DC2626]" : "text-slate-400"
                    }`}
                  >
                    →
                  </span>
                </a>
              );
            })}
          </nav>

          <div className="mt-5 pt-4 border-t border-slate-100">
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/70 text-slate-600 text-[11px] leading-relaxed">
              <strong className="text-slate-900 font-bold block mb-1">
                Filing Tip:
              </strong>
              Consumer courts mandate that a formal 15-day legal notice is served prior to filing on e-Jagriti to establish pre-litigation default.
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
