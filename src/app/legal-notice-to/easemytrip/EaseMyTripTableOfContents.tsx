"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const EASEMYTRIP_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-problem-breakdown", label: "DISPUTE TYPES" },
  { id: "heading-liability-comparison", label: "LIABILITY MATRIX" },
  { id: "heading-order-digest", label: "COURT VERDICTS" },
  { id: "heading-pattern-analysis", label: "WINNING PATTERNS" },
  { id: "heading-escalation-flow", label: "MONEY FLOW RAIL" },
  { id: "heading-playbook", label: "5-STEP ESCALATION" },
  { id: "heading-deadlines-table", label: "STATUTORY TIMELINES" },
  { id: "heading-wallet-trap", label: "EMT WALLET TRAP" },
  { id: "heading-worked-example", label: "WORKED CASE STUDY" },
  { id: "heading-evidence-checklist", label: "EVIDENCE CHECKLIST" },
  { id: "heading-faqs", label: "FREQUENT QUESTIONS" },
  { id: "heading-sources", label: "LEGAL SOURCES" },
];

interface EaseMyTripTableOfContentsProps {
  sections?: TOCSection[];
}

export default function EaseMyTripTableOfContents({
  sections = EASEMYTRIP_TOC_SECTIONS,
}: EaseMyTripTableOfContentsProps) {
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
      const yOffset = -90; // offset for 80px fixed navbar + breathing room
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
        {/* Dropdown Toggle Pill */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="w-full bg-white border border-slate-200/90 rounded-full px-5 py-3 shadow-sm flex items-center justify-between transition-all active:scale-[0.99] text-left cursor-pointer"
          aria-expanded={isOpen}
          aria-label="Table of Contents Jump Menu"
        >
          <div className="flex items-center gap-2 truncate">
            <span className="text-[11px] font-black uppercase tracking-[0.18em] text-[#DC2626] shrink-0">
              JUMP TO:
            </span>
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-900 truncate">
              {activeSection?.label || "DISPUTE TYPES"}
            </span>
          </div>
          <svg
            className={`w-4 h-4 text-slate-600 transition-transform duration-200 shrink-0 ml-2 ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* Dropdown Menu Overlay */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 z-40 bg-white rounded-3xl border border-slate-200 shadow-2xl p-3 sm:p-4 max-h-[60vh] overflow-y-auto">
            <nav className="flex flex-col space-y-1">
              {sections.map((section) => {
                const isActive = activeId === section.id;
                return (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    onClick={(e) => scrollToSection(e, section.id)}
                    className={`group relative flex items-center py-3 px-4 rounded-full text-[11px] font-bold uppercase tracking-[0.16em] transition-all select-none cursor-pointer ${
                      isActive
                        ? "bg-[#FFF1F2] text-[#DC2626] font-black shadow-sm"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                    }`}
                  >
                    {isActive && (
                      <span className="absolute left-1.5 top-1.5 bottom-1.5 w-1.5 rounded-full bg-[#DC2626]" />
                    )}
                    <span
                      className={`h-[2px] transition-all mr-3 rounded-full shrink-0 ${
                        isActive
                          ? "w-4 bg-[#DC2626]"
                          : "w-3 bg-slate-300 group-hover:bg-slate-400"
                      }`}
                      aria-hidden="true"
                    />
                    <span className="truncate">{section.label}</span>
                  </a>
                );
              })}
            </nav>
          </div>
        )}
      </div>

      {/* Desktop Sticky Vertical Table of Contents & Quick Fact Panel */}
      <aside
        aria-label="Table of contents and dispute facts"
        className="hidden lg:block sticky top-24 self-start w-64 xl:w-72 shrink-0 select-none z-20 space-y-5"
      >
        <div className="bg-white p-6 sm:p-7 rounded-3xl border border-slate-200/80 shadow-sm max-h-[calc(70vh-80px)] overflow-y-auto scrollbar-hide">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-4">
            Navigation Rails
          </p>
          <nav className="flex flex-col space-y-3.5">
            {sections.map((section) => {
              const isActive = activeId === section.id;
              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => scrollToSection(e, section.id)}
                  className={`group flex items-center text-[11px] font-bold uppercase tracking-[0.16em] transition-colors select-none cursor-pointer ${
                    isActive
                      ? "text-[#DC2626] font-black"
                      : "text-slate-500 hover:text-slate-900"
                  }`}
                >
                  <span
                    className={`h-[2px] transition-all mr-3 rounded-full shrink-0 ${
                      isActive
                        ? "w-5 bg-[#DC2626]"
                        : "w-3.5 bg-slate-300 group-hover:bg-slate-400"
                    }`}
                    aria-hidden="true"
                  />
                  <span className="truncate">{section.label}</span>
                </a>
              );
            })}
          </nav>
        </div>

        {/* Fact Panel (Archetype B2 Sticky Fact Panel) */}
        <div className="bg-[#0B1E36] text-white p-5 rounded-3xl border border-blue-900/60 shadow-lg space-y-3.5 text-xs">
          <div className="flex items-center justify-between border-b border-blue-800/80 pb-2">
            <span className="text-[10px] font-black uppercase tracking-wider text-sky-400">
              EaseMyTrip Fact Panel
            </span>
            <span className="text-[10px] font-semibold text-emerald-400">Statutory</span>
          </div>

          <div className="space-y-2.5">
            <div>
              <p className="text-[10px] text-slate-400 uppercase font-semibold">Corporate Entity</p>
              <p className="font-bold text-white text-xs">Easy Trip Planners Limited</p>
            </div>
            <div>
              <p className="text-[10px] text-slate-400 uppercase font-semibold">DGCA CAR Refund Deadline</p>
              <p className="font-bold text-sky-300 text-xs">30 Working Days (OTA Max)</p>
            </div>
            <div>
              <p className="text-[10px] text-slate-400 uppercase font-semibold">Jurisdiction & Forum</p>
              <p className="font-bold text-slate-200 text-xs">Home District DCDRC / e-Jagriti</p>
            </div>
            <div>
              <p className="text-[10px] text-slate-400 uppercase font-semibold">Typical Forum Outcome</p>
              <p className="font-bold text-emerald-400 text-xs">100% Refund + 9% p.a. + Damages</p>
            </div>
            <div>
              <p className="text-[10px] text-slate-400 uppercase font-semibold">Advocate Notice Flat Fee</p>
              <p className="font-bold text-amber-300 text-xs">₹1,499 All-Inclusive</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
