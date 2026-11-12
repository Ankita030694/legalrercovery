"use client";

import React, { useEffect, useState, useRef } from "react";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";
import NoBrokerNoticeCTA from "./NoBrokerNoticeCTA";

export interface TOCSection {
  id: string;
  label: string;
}

export const NOBROKER_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-problem-dossiers", label: "4 FAILURE POINTS" },
  { id: "heading-liability-table", label: "LIABILITY MATRIX" },
  { id: "heading-money-flow", label: "REFUND FLOW SVG" },
  { id: "heading-commission-orders", label: "COURT ORDERS" },
  { id: "heading-pattern-analysis", label: "WINNING PATTERNS" },
  { id: "heading-playbook", label: "5-STEP PLAYBOOK" },
  { id: "heading-clause-solver", label: "PLAN CLAUSE SOLVER" },
  { id: "heading-worked-example", label: "WORKED CASE STUDY" },
  { id: "heading-evidence-checklist", label: "EVIDENCE CHECKLIST" },
  { id: "heading-honest-scope", label: "OUR SCOPE" },
  { id: "heading-faqs", label: "FAQ" },
  { id: "heading-sources", label: "STATUTORY REFS" },
];

interface NoBrokerTableOfContentsProps {
  sections?: TOCSection[];
}

export default function NoBrokerTableOfContents({
  sections = NOBROKER_TOC_SECTIONS,
}: NoBrokerTableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>(sections[0]?.id || "");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const basePrice = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition;

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
        className="lg:hidden sticky top-20 z-30 w-full mb-6 py-2 bg-slate-50/95 backdrop-blur-sm select-none"
      >
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Table of Contents Jump Menu"
          className="w-full flex items-center justify-between px-4 py-2.5 bg-white border border-slate-200 rounded-xl shadow-xs text-xs font-bold text-slate-800 hover:border-slate-300 transition-colors"
        >
          <span className="flex items-center gap-2 truncate">
            <span className="w-2 h-2 rounded-full bg-[#DC2626] animate-pulse" />
            <span className="text-[10px] uppercase tracking-wider text-slate-500 font-extrabold">Section:</span>
            <span className="text-slate-900 truncate">{activeSection?.label || "On this page"}</span>
          </span>
          <span className={`transform transition-transform duration-200 text-slate-400 ${isOpen ? "rotate-180" : ""}`}>
            ▾
          </span>
        </button>

        {isOpen && (
          <div className="absolute left-0 right-0 mt-1.5 mx-0 bg-white border border-slate-200 rounded-xl shadow-xl max-h-72 overflow-y-auto py-1 z-40 divide-y divide-slate-100">
            {sections.map((section, idx) => {
              const isActive = activeId === section.id;
              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => scrollToSection(e, section.id)}
                  className={`flex items-center justify-between px-4 py-2.5 text-xs font-semibold transition-colors ${
                    isActive
                      ? "bg-[#404447]/10 text-[#404447] font-bold"
                      : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span className="text-[10px] text-slate-400 font-mono">
                      {idx < 9 ? `0${idx + 1}` : idx + 1}
                    </span>
                    <span>{section.label}</span>
                  </span>
                  {isActive && <span className="text-[#DC2626] text-xs">●</span>}
                </a>
              );
            })}
          </div>
        )}
      </div>

      {/* Desktop Sticky Sidebar: Archetype B2 Dossier Fact Panel + Table of Contents */}
      <aside
        aria-label="NoBroker Dispute Fact Panel and Table of Contents"
        className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start space-y-5"
      >
        {/* TOC Card */}
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-3">
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500">
              On This Page
            </span>
            <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
              {sections.length} Topics
            </span>
          </div>

          <nav className="space-y-1">
            {sections.map((section, idx) => {
              const isActive = activeId === section.id;
              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => scrollToSection(e, section.id)}
                  className={`group flex items-center justify-between px-3 py-2 rounded-lg text-xs transition-all ${
                    isActive
                      ? "bg-[#404447] text-white font-bold shadow-xs"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900 font-medium"
                  }`}
                >
                  <span className="flex items-center gap-2 truncate">
                    <span
                      className={`text-[10px] font-mono ${
                        isActive ? "text-slate-300" : "text-slate-400 group-hover:text-slate-600"
                      }`}
                    >
                      {idx < 9 ? `0${idx + 1}` : idx + 1}
                    </span>
                    <span className="truncate">{section.label}</span>
                  </span>
                  <span
                    className={`text-[10px] ${
                      isActive ? "text-slate-300" : "text-transparent group-hover:text-slate-400"
                    }`}
                  >
                    →
                  </span>
                </a>
              );
            })}
          </nav>
        </div>

        {/* Archetype B2 Sticky Fact Panel */}
        <div className="bg-slate-900 text-white border border-slate-800 rounded-2xl p-5 shadow-md space-y-3.5">
          <div className="border-b border-slate-800 pb-2.5">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-red-400 block">
              Statutory Fact Panel
            </span>
            <p className="text-xs font-bold text-slate-100 mt-0.5">
              NoBroker Technologies Solutions Pvt. Ltd.
            </p>
          </div>

          <dl className="space-y-2.5 text-xs">
            <div>
              <dt className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">
                Grievance Deadline
              </dt>
              <dd className="text-slate-100 font-semibold mt-0.5">
                48h Ack • 30-Day Redressal (Rule 4(4) E-Commerce Rules)
              </dd>
            </div>
            <div>
              <dt className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">
                Primary Legal Forum
              </dt>
              <dd className="text-slate-100 font-semibold mt-0.5">
                District Consumer Commission (e-Jagriti ≤ ₹50 Lakh)
              </dd>
            </div>
            <div>
              <dt className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">
                Typical Outcome
              </dt>
              <dd className="text-emerald-400 font-semibold mt-0.5">
                100% Plan / Token Refund + 9% Interest &amp; Costs
              </dd>
            </div>
            <div>
              <dt className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">
                Advocate Notice Fee
              </dt>
              <dd className="text-amber-400 font-extrabold mt-0.5">
                Flat ₹{basePrice} (Email + WhatsApp)
              </dd>
            </div>
          </dl>

          <div className="pt-2 border-t border-slate-800">
            <NoBrokerNoticeCTA
              variant="secondary"
              buttonText="Send Notice to NoBroker"
              className="w-full"
            />
          </div>
        </div>
      </aside>
    </>
  );
}
