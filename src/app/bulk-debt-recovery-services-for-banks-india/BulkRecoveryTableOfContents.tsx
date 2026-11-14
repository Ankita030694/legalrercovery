"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const BULK_RECOVERY_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-institutional-overview", label: "OVERVIEW" },
  { id: "heading-precedent-digest", label: "LEGAL PRECEDENTS" },
  { id: "heading-systemic-challenges", label: "PORTFOLIO BOTTLENECK" },
  { id: "heading-recovery-rail", label: "RECOVERY RAIL" },
  { id: "heading-institutional-playbook", label: "5-STEP PLAYBOOK" },
  { id: "heading-statutory-timelines", label: "STATUTORY TIMELINES" },
  { id: "heading-asset-class-picker", label: "ASSET CLASS SOLUTIONS" },
  { id: "heading-enterprise-case-study", label: "ENTERPRISE CASE STUDY" },
  { id: "heading-document-checklist", label: "EVIDENCE CHECKLIST" },
  { id: "heading-faqs", label: "CLO & GM FAQS" },
  { id: "heading-statutory-sources", label: "STATUTORY REFS" },
];

interface BulkRecoveryTableOfContentsProps {
  sections?: TOCSection[];
}

export default function BulkRecoveryTableOfContents({
  sections = BULK_RECOVERY_TOC_SECTIONS,
}: BulkRecoveryTableOfContentsProps) {
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
      const yOffset = -90; // offset for navbar
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
          aria-label="Table of Contents Toggle"
          className="w-full flex items-center justify-between px-4 py-2.5 bg-white border border-slate-300 rounded-xl shadow-sm text-xs font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          <div className="flex items-center gap-2 truncate">
            <span className="w-2 h-2 rounded-full bg-red-600 shrink-0"></span>
            <span className="text-slate-500 font-medium">Jump to Section:</span>
            <span className="truncate text-slate-900 font-bold">{activeSection.label}</span>
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
          <div className="absolute left-0 right-0 mt-1.5 mx-4 max-h-72 overflow-y-auto bg-white border border-slate-200 rounded-xl shadow-xl z-40 py-1 divide-y divide-slate-100">
            {sections.map((sec) => {
              const isActive = sec.id === activeId;
              return (
                <a
                  key={sec.id}
                  href={`#${sec.id}`}
                  onClick={(e) => scrollToSection(e, sec.id)}
                  className={`block px-4 py-2.5 text-xs font-medium transition-colors ${
                    isActive
                      ? "bg-red-50 text-red-700 font-bold"
                      : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  {sec.label}
                </a>
              );
            })}
          </div>
        )}
      </div>

      {/* Desktop Sticky Sidebar Table of Contents */}
      <aside
        aria-label="Table of Contents"
        className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-24 self-start bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-4"
      >
        <div className="border-b border-slate-100 pb-3">
          <p className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400">
            Institutional Navigation
          </p>
          <h3 className="text-sm font-black text-slate-900 mt-0.5">Recovery Architecture</h3>
        </div>

        <nav className="space-y-1">
          {sections.map((sec) => {
            const isActive = sec.id === activeId;
            return (
              <a
                key={sec.id}
                href={`#${sec.id}`}
                onClick={(e) => scrollToSection(e, sec.id)}
                className={`group flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs transition-all ${
                  isActive
                    ? "bg-red-50 text-red-700 font-bold border-l-2 border-red-600 pl-2.5"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50 font-medium"
                }`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                    isActive ? "bg-red-600" : "bg-slate-300 group-hover:bg-slate-400"
                  }`}
                />
                <span className="truncate">{sec.label}</span>
              </a>
            );
          })}
        </nav>

        <div className="pt-3 border-t border-slate-100">
          <div className="p-3 bg-slate-900 text-white rounded-xl">
            <p className="text-[10px] font-bold text-red-400 uppercase tracking-wider">
              Bank Retainership SLA
            </p>
            <p className="text-xs font-semibold text-slate-200 mt-1">
              Pan-India Execution • SARFAESI, DRT, &amp; Sec 138/25 PSS
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}
