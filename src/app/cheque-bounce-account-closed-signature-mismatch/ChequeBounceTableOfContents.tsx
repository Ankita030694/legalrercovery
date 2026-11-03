"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const CHEQUE_BOUNCE_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-matrix", label: "RETURN REASONS MATRIX" },
  { id: "heading-personas", label: "WHO THIS APPLIES TO" },
  { id: "heading-account-closed", label: "ACCOUNT CLOSED" },
  { id: "heading-signature-mismatch", label: "SIGNATURE MISMATCH" },
  { id: "heading-refer-stop", label: "REFER / STOP PAYMENT" },
  { id: "heading-non-138", label: "NON-138 REASONS" },
  { id: "heading-escalation-flow", label: "STATUTORY RAIL" },
  { id: "heading-problem-picker", label: "REASON EXPLORER" },
  { id: "heading-worked-example", label: "WORKED CASE STUDY" },
  { id: "heading-evidence-checklist", label: "EVIDENCE CHECKLIST" },
  { id: "heading-faqs", label: "FAQ" },
  { id: "heading-sources", label: "STATUTORY REFERENCES" },
];

interface ChequeBounceTableOfContentsProps {
  sections?: TOCSection[];
}

export default function ChequeBounceTableOfContents({
  sections = CHEQUE_BOUNCE_TOC_SECTIONS,
}: ChequeBounceTableOfContentsProps) {
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
      {/* Mobile / Tablet Sticky Dropdown Table of Contents */}
      <div
        ref={dropdownRef}
        className="lg:hidden sticky top-20 z-30 w-full mb-6 py-2 bg-slate-50/95 backdrop-blur-sm select-none"
      >
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Table of contents selector"
          className="w-full flex items-center justify-between px-4 py-3 bg-white border border-slate-300 rounded-xl shadow-sm text-left text-xs font-bold text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-red-500"
        >
          <div className="flex items-center gap-2 truncate">
            <span className="text-[10px] uppercase font-black tracking-wider text-red-600 bg-red-50 px-2 py-0.5 rounded-sm">
              Section
            </span>
            <span className="truncate text-slate-900">{activeSection?.label}</span>
          </div>
          <span
            className={`text-slate-500 transition-transform duration-200 text-base shrink-0 ml-2 ${
              isOpen ? "rotate-180" : ""
            }`}
          >
            ▼
          </span>
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-1 max-h-72 overflow-y-auto bg-white border border-slate-200 rounded-xl shadow-xl z-40 py-1.5 divide-y divide-slate-100">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={(e) => scrollToSection(e, section.id)}
                className={`block px-4 py-2.5 text-xs font-semibold transition-colors ${
                  activeId === section.id
                    ? "bg-red-50 text-red-700 font-bold"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                {section.label}
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Desktop Sticky Sidebar Table of Contents */}
      <aside
        aria-label="Page Table of Contents"
        className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start bg-white border border-slate-200 rounded-2xl p-5 shadow-xs"
      >
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
          <span className="text-xs font-black uppercase tracking-wider text-slate-900">
            On This Page
          </span>
          <span className="text-[10px] font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded-full">
            Section 138 NI Act
          </span>
        </div>

        <nav aria-label="Table of contents navigation">
          <ul className="space-y-1 text-xs">
            {sections.map((section) => {
              const isActive = activeId === section.id;
              return (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    onClick={(e) => scrollToSection(e, section.id)}
                    className={`block px-3 py-2 rounded-lg font-medium transition-all ${
                      isActive
                        ? "bg-red-50 text-red-700 font-bold border-l-2 border-red-600 pl-2.5"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
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
          <a
            href="#heading-cta-block"
            className="w-full inline-flex items-center justify-center px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-red-600 hover:bg-red-700 shadow-sm transition-colors text-center"
          >
            Draft Section 138 Notice →
          </a>
        </div>
      </aside>
    </>
  );
}
