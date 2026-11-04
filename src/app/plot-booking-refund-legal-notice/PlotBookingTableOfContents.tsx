"use client";

import React, { useState, useEffect } from "react";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";
import PlotBookingNoticeCTA from "./PlotBookingNoticeCTA";

const TOC_ITEMS = [
  {
    id: "rera-plot-rules",
    label: "1. Does RERA Apply to Plots?",
  },
  {
    id: "checklist-wizard",
    label: "2. Pre-Flight Readiness Wizard (G3)",
  },
  {
    id: "forfeiture-limits",
    label: "3. Developer Forfeiture Limits (10% Cap)",
  },
  {
    id: "evidence-matrix",
    label: "4. Document & Evidence Matrix",
  },
  {
    id: "court-precedents",
    label: "5. SC & RERA Rulings on Plots",
  },
  {
    id: "escalation-flow",
    label: "6. 5-Stage Escalation Architecture",
  },
  {
    id: "recovery-timeline",
    label: "7. Dated Recovery Timeline",
  },
  {
    id: "dispute-scenarios",
    label: "8. Unapproved Layouts & Scenarios",
  },
  {
    id: "cancellation-letter-format",
    label: "9. Plot Cancellation Letter Format",
  },
  {
    id: "case-study",
    label: "10. Worked Case Study (₹9.5L Plot)",
  },
  {
    id: "honest-scope",
    label: "11. Honest Scope & Limitations",
  },
  {
    id: "faqs",
    label: "12. Frequently Asked Questions",
  },
  {
    id: "sources",
    label: "13. Primary Statutory Sources",
  },
];

export default function PlotBookingTableOfContents() {
  const [activeId, setActiveId] = useState<string>("rera-plot-rules");
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const price = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0px -65% 0px", threshold: 0.1 }
    );

    TOC_ITEMS.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleScroll = (id: string) => {
    setIsMobileOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 90;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Mobile Accordion TOC */}
      <div className="lg:hidden mb-8">
        <button
          type="button"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="w-full flex items-center justify-between bg-slate-900 text-white px-4 py-3.5 rounded-xl font-semibold text-sm shadow-md"
          aria-expanded={isMobileOpen}
        >
          <span className="flex items-center gap-2">
            <svg
              className="w-4 h-4 text-amber-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
            Plot Refund Guide Navigation (13 Sections)
          </span>
          <svg
            className={`w-4 h-4 transition-transform ${
              isMobileOpen ? "rotate-180" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {isMobileOpen && (
          <nav
            aria-label="Mobile Table of Contents"
            className="mt-2 bg-white border border-slate-200 rounded-xl p-3 shadow-lg space-y-1"
          >
            {TOC_ITEMS.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleScroll(item.id)}
                className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                  activeId === item.id
                    ? "bg-amber-50 text-amber-900 font-bold border-l-2 border-amber-600"
                    : "text-slate-600 hover:bg-slate-50"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        )}
      </div>

      {/* Desktop Sticky Sidebar */}
      <aside
        aria-label="Table of Contents and Statutory Fact Box"
        className="hidden lg:block sticky top-24 space-y-5"
      >
        <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">
          <p className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-3 px-2">
            On This Page
          </p>
          <nav className="space-y-1">
            {TOC_ITEMS.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleScroll(item.id)}
                className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs transition-all ${
                  activeId === item.id
                    ? "bg-amber-50 text-amber-900 font-bold border-l-2 border-amber-600 pl-3"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Sticky Fact Panel */}
        <div className="bg-slate-900 text-white rounded-2xl p-5 shadow-xl border border-slate-800">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400">
              Plot Refund Quick Facts
            </span>
          </div>

          <dl className="space-y-2.5 text-xs mb-4">
            <div className="flex justify-between border-b border-slate-800 pb-2">
              <dt className="text-slate-400">RERA Plot Threshold:</dt>
              <dd className="font-bold text-white text-right">
                &gt;500 sq. m. or &gt;8 Plots
              </dd>
            </div>
            <div className="flex justify-between border-b border-slate-800 pb-2">
              <dt className="text-slate-400">Max Earnest Cut:</dt>
              <dd className="font-bold text-amber-400 text-right">
                10% of Basic Plot Price
              </dd>
            </div>
            <div className="flex justify-between border-b border-slate-800 pb-2">
              <dt className="text-slate-400">Developer Default:</dt>
              <dd className="font-bold text-emerald-400 text-right">
                100% Refund + MCLR+2%
              </dd>
            </div>
            <div className="flex justify-between border-b border-slate-800 pb-2">
              <dt className="text-slate-400">Primary Forums:</dt>
              <dd className="font-bold text-white text-right">
                State RERA / e-Jagriti
              </dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-slate-400">Notice Fee:</dt>
              <dd className="font-extrabold text-amber-400 text-right">
                ₹{price.toLocaleString("en-IN")}
              </dd>
            </div>
          </dl>

          <PlotBookingNoticeCTA
            label="Send Developer Notice"
            showPrice={false}
            className="w-full !py-2.5 !text-xs"
          />
          <p className="text-[11px] text-slate-400 text-center mt-2.5 leading-relaxed">
            Drafted by real-estate advocates • Speed Post + Email service
          </p>
        </div>
      </aside>
    </>
  );
}
