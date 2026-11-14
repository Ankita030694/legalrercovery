"use client";

import React, { useEffect, useState } from "react";

export interface TocItem {
  id: string;
  label: string;
  badge: string;
}

export const BUILDERS_TOC_ITEMS: TocItem[] = [
  { id: "heading-overview", label: "Creditor Recovery Gap", badge: "01" },
  { id: "heading-escalation-matrix", label: "6-Format Escalation Matrix", badge: "02" },
  { id: "heading-pipeline-architecture", label: "4-Stage Enforcement Pipeline", badge: "03" },
  { id: "heading-vertical-playbooks", label: "Interactive Sector Playbooks", badge: "04" },
  { id: "heading-rera-commercial-desk", label: "RERA Cure & Bulk CSV Desk", badge: "05" },
  { id: "heading-judicial-mandates", label: "SC, HC & CBDT Mandates", badge: "06" },
  { id: "heading-worked-math", label: "Lock-In vs RERA Math", badge: "07" },
  { id: "heading-ind08-directory", label: "All 11 IND-08 Spokes", badge: "08" },
  { id: "heading-seed-guides", label: "Live Property & Bulk Links", badge: "09" },
  { id: "heading-faqs", label: "Creditor FAQs (7)", badge: "10" },
  { id: "heading-sources", label: "Statutes & Official Portals", badge: "11" },
];

export default function BuildersHubTableOfContents() {
  const [activeId, setActiveId] = useState<string>(BUILDERS_TOC_ITEMS[0].id);
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0 && visible[0].target.id) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-110px 0px -65% 0px",
        threshold: [0.05, 0.25],
      }
    );

    BUILDERS_TOC_ITEMS.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleSelect = (id: string) => {
    setActiveId(id);
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const activeItem =
    BUILDERS_TOC_ITEMS.find((item) => item.id === activeId) ?? BUILDERS_TOC_ITEMS[0];

  return (
    <>
      {/* Mobile Sticky TOC Bar */}
      <div className="lg:hidden sticky top-20 z-30 bg-slate-50/95 backdrop-blur-sm border-b border-slate-200 py-3 px-4 -mx-4 sm:-mx-6 mb-4">
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-expanded={mobileOpen}
          className="w-full flex items-center justify-between gap-3 bg-white border border-slate-200 rounded-xl px-4 py-2.5 shadow-sm text-left"
        >
          <span className="flex items-center gap-2 min-w-0">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#DC2626] text-white text-[11px] font-bold shrink-0">
              {activeItem.badge}
            </span>
            <span className="text-xs font-bold text-slate-900 truncate">
              {activeItem.label}
            </span>
          </span>
          <span className="text-[11px] font-semibold text-[#DC2626] shrink-0">
            {mobileOpen ? "Close ▲" : "Sections ▼"}
          </span>
        </button>

        {mobileOpen && (
          <nav
            aria-label="IND-08 Real Estate Hub Sections"
            className="mt-2 bg-white border border-slate-200 rounded-xl shadow-lg p-2 max-h-72 overflow-y-auto space-y-1"
          >
            {BUILDERS_TOC_ITEMS.map((item) => {
              const isActive = item.id === activeId;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleSelect(item.id)}
                  className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs transition-colors text-left ${
                    isActive
                      ? "bg-[#DC2626] text-white font-bold shadow-sm"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 font-medium"
                  }`}
                >
                  <span
                    className={`inline-flex items-center justify-center w-5 h-5 rounded-full text-[10px] font-bold shrink-0 ${
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-slate-100 text-slate-700"
                    }`}
                  >
                    {item.badge}
                  </span>
                  <span className="truncate">{item.label}</span>
                </button>
              );
            })}
          </nav>
        )}
      </div>

      {/* Desktop Sticky Sidebar TOC (Never uses heading tags) */}
      <aside
        aria-label="Table of Contents"
        className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start"
      >
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-3">
            <p className="text-xs font-extrabold uppercase tracking-wider text-slate-900">
              IND-08 Playbook Index
            </p>
            <span className="px-2 py-0.5 rounded-full bg-red-50 border border-red-200 text-[10px] font-bold text-[#DC2626]">
              11 Spokes
            </span>
          </div>

          <nav aria-label="On-page section navigation" className="space-y-1">
            {BUILDERS_TOC_ITEMS.map((item) => {
              const isActive = item.id === activeId;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleSelect(item.id);
                  }}
                  className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs transition-all ${
                    isActive
                      ? "bg-[#DC2626] text-white font-bold shadow-sm"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 font-medium"
                  }`}
                >
                  <span
                    className={`inline-flex items-center justify-center w-5 h-5 rounded-full text-[10px] font-bold shrink-0 ${
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-slate-100 text-slate-700"
                    }`}
                  >
                    {item.badge}
                  </span>
                  <span className="leading-snug">{item.label}</span>
                </a>
              );
            })}
          </nav>

          <div className="mt-5 pt-4 border-t border-slate-100 space-y-2">
            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
              Instant Creditor Action
            </p>
            <a
              href="#dual-track-cta"
              onClick={(e) => {
                e.preventDefault();
                handleSelect("dual-track-cta");
              }}
              className="block w-full text-center px-3 py-2.5 rounded-xl bg-slate-900 hover:bg-[#DC2626] text-white text-xs font-bold transition-colors"
            >
              Launch ₹999 Test or CSV Batch →
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}
