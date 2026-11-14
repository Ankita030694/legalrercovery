"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const BANK_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-bank-overview", label: "OVERVIEW" },
  { id: "heading-landmark-rulings", label: "JUDICIAL RULINGS" },
  { id: "heading-dispatch-patterns", label: "DISPATCH PATTERNS" },
  { id: "heading-multi-channel-rail", label: "MULTI-CHANNEL RAIL" },
  { id: "heading-playbook", label: "5-STEP PLAYBOOK" },
  { id: "heading-loan-matrix", label: "STATUTORY BENCHMARKS" },
  { id: "heading-portfolio-tabs", label: "PORTFOLIO BUCKETS" },
  { id: "heading-worked-example", label: "BANK CASE STUDY" },
  { id: "heading-compliance-checklist", label: "COMPLIANCE AUDIT" },
  { id: "heading-faqs", label: "FAQ" },
  { id: "heading-sources", label: "STATUTORY REFS" },
];

interface BankTableOfContentsProps {
  sections?: TOCSection[];
}

export default function BankTableOfContents({
  sections = BANK_TOC_SECTIONS,
}: BankTableOfContentsProps) {
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

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -100;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveId(id);
      setIsOpen(false);
    }
  };

  const currentLabel =
    sections.find((s) => s.id === activeId)?.label || "TABLE OF CONTENTS";

  return (
    <>
      {/* Mobile Dropdown (sticky under site navbar) */}
      <div className="lg:hidden w-full sticky top-16 z-30 mb-6 bg-white/95 backdrop-blur-md border border-slate-200 rounded-xl shadow-xs">
        <div ref={dropdownRef} className="relative">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between px-4 py-3 text-xs font-bold text-slate-800 tracking-wider uppercase"
            aria-expanded={isOpen}
          >
            <span className="flex items-center gap-2 truncate">
              <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
              <span className="truncate">TOC: {currentLabel}</span>
            </span>
            <span className="text-slate-400 font-extrabold text-sm ml-2">
              {isOpen ? "▲" : "▼"}
            </span>
          </button>

          {isOpen && (
            <div className="absolute top-full left-0 right-0 mt-1 max-h-72 overflow-y-auto bg-white border border-slate-200 rounded-xl shadow-xl py-1 z-40">
              {sections.map((s) => {
                const isActive = activeId === s.id;
                return (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => scrollTo(s.id)}
                    className={`w-full text-left px-4 py-2.5 text-xs font-bold transition-colors flex items-center justify-between ${
                      isActive
                        ? "bg-red-50 text-[#DC2626]"
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                    }`}
                  >
                    <span>{s.label}</span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
                    )}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Desktop Sticky Sidebar */}
      <aside
        aria-label="Table of Contents"
        className="hidden lg:block w-64 shrink-0 sticky top-24 self-start bg-white rounded-2xl border border-slate-200 p-5 shadow-xs"
      >
        <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100">
          <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
          <h2 className="text-xs font-extrabold text-slate-900 tracking-wider uppercase">
            Contents
          </h2>
        </div>

        <nav className="space-y-1">
          {sections.map((s) => {
            const isActive = activeId === s.id;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => scrollTo(s.id)}
                className={`w-full text-left px-3 py-2 rounded-lg text-xs font-bold transition-all flex items-center justify-between ${
                  isActive
                    ? "bg-red-50 text-[#DC2626] shadow-2xs font-extrabold"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                <span className="truncate">{s.label}</span>
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] shrink-0 ml-2" />
                )}
              </button>
            );
          })}
        </nav>

        <div className="mt-6 pt-4 border-t border-slate-100">
          <p className="text-[11px] text-slate-500 font-semibold mb-2">
            Section 63 BSA 2023 &amp; Speed Post API Ready
          </p>
          <div className="p-2.5 bg-slate-50 rounded-lg text-[10px] text-slate-600 leading-relaxed font-medium">
            High-throughput enterprise legal dispatch for Commercial Banks, Small Finance Banks &amp; NBFCs.
          </div>
        </div>
      </aside>
    </>
  );
}
