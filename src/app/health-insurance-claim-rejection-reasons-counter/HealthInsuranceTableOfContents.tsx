"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const HEALTH_INSURANCE_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-rejection-matrix", label: "REJECTION MATRIX" },
  { id: "heading-rejection-breakdown", label: "TOP REASONS & COUNTERS" },
  { id: "heading-court-orders", label: "PRECEDENT ORDERS" },
  { id: "heading-escalation-flow", label: "ESCALATION PIPELINE" },
  { id: "heading-playbook", label: "5-STEP PLAYBOOK" },
  { id: "heading-forum-comparison", label: "FORUM COMPARISON" },
  { id: "heading-interactive-diagnostic", label: "DIAGNOSTIC TABS" },
  { id: "heading-worked-example", label: "WORKED CASE STUDY" },
  { id: "heading-evidence-checklist", label: "EVIDENCE CHECKLIST" },
  { id: "heading-faqs", label: "FAQ" },
  { id: "heading-sources", label: "STATUTORY REFS" },
];

interface HealthInsuranceTableOfContentsProps {
  sections?: TOCSection[];
}

export default function HealthInsuranceTableOfContents({
  sections = HEALTH_INSURANCE_TOC_SECTIONS,
}: HealthInsuranceTableOfContentsProps) {
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
      const yOffset = -90; // offset for fixed navbar + breathing room
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
          aria-label="Table of Contents Menu"
          className="w-full flex items-center justify-between px-4 py-2.5 bg-white border border-slate-200 rounded-xl shadow-xs text-xs font-bold text-slate-800"
        >
          <div className="flex items-center gap-2 truncate">
            <span className="text-red-600 font-extrabold text-sm">§</span>
            <span className="text-slate-500 uppercase tracking-wider text-[10px]">Jump to Section:</span>
            <span className="text-slate-900 truncate font-black">{activeSection?.label}</span>
          </div>
          <span
            className={`text-slate-500 transition-transform duration-200 text-xs shrink-0 ml-2 ${
              isOpen ? "rotate-180" : ""
            }`}
          >
            ▼
          </span>
        </button>

        {isOpen && (
          <div className="absolute left-0 right-0 mt-1.5 mx-0 bg-white border border-slate-200 rounded-xl shadow-xl max-h-[60vh] overflow-y-auto z-40 p-2 divide-y divide-slate-100">
            {sections.map((section) => {
              const isActive = activeId === section.id;
              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => scrollToSection(e, section.id)}
                  className={`block px-3 py-2 text-xs rounded-lg transition-colors font-semibold ${
                    isActive
                      ? "bg-red-50 text-red-700 font-black"
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

      {/* Desktop Sticky Sidebar Table of Contents */}
      <aside
        aria-label="Table of Contents"
        className="hidden lg:block w-64 shrink-0 sticky top-24 space-y-4"
      >
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
          <div className="flex items-center gap-2 pb-3 border-b border-slate-100 mb-3">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
            <p className="text-xs font-black uppercase tracking-wider text-slate-700">
              Guide Navigation
            </p>
          </div>
          <nav className="space-y-1">
            {sections.map((section) => {
              const isActive = activeId === section.id;
              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => scrollToSection(e, section.id)}
                  className={`group flex items-center justify-between px-3 py-2 text-xs rounded-lg transition-all font-semibold ${
                    isActive
                      ? "bg-red-50 text-red-700 font-bold border-l-3 border-red-600 pl-2.5"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  <span className="truncate">{section.label}</span>
                  <span
                    className={`text-[10px] transition-transform ${
                      isActive
                        ? "text-red-600 font-black translate-x-0.5"
                        : "text-slate-400 group-hover:text-slate-600"
                    }`}
                  >
                    →
                  </span>
                </a>
              );
            })}
          </nav>
        </div>

        {/* Mini CTA in TOC Sidebar */}
        <div className="bg-slate-900 text-white rounded-2xl p-4 border border-slate-800 shadow-sm space-y-2.5">
          <div className="inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-red-950 text-red-400 border border-red-800/80">
            Advocate Assistance
          </div>
          <p className="text-xs text-slate-300 leading-snug">
            Need an advocate to draft your formal legal notice or Ombudsman petition?
          </p>
          <a
            href="#heading-cta-block"
            className="inline-block w-full text-center px-3 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-xs font-bold transition-colors"
          >
            Draft Demand Notice — ₹1,499
          </a>
        </div>
      </aside>
    </>
  );
}
