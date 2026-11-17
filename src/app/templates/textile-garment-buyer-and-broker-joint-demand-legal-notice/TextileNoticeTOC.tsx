"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

interface TOCSection {
  id: string;
  title: string;
  badge?: string;
}

const SECTIONS: TOCSection[] = [
  { id: "interactive-workspace", title: "1. Notice Generator & Workspace", badge: "Interactive" },
  { id: "broker-co-noticee-catalyst", title: "2. Co-Noticee Broker Catalyst", badge: "72h Lever" },
  { id: "statutory-framework", title: "3. Statutory Matrix (SOGA / MSME)", badge: "Bare Act" },
  { id: "annexure-checklist", title: "4. Bijak, LR & BSA s.63 Checklist", badge: "Evidence" },
  { id: "service-protocol", title: "5. Multi-Party Dispatch Protocol", badge: "Service" },
  { id: "related-spokes", title: "6. Textile Recovery Playbooks", badge: "Cluster" },
  { id: "faqs", title: "7. Frequently Asked Questions", badge: "FAQ" },
];

export default function TextileNoticeTOC() {
  const [activeId, setActiveId] = useState<string>("interactive-workspace");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: 0.05 }
    );

    SECTIONS.forEach((sec) => {
      const el = document.getElementById(sec.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Mobile Sticky Bar */}
      <div className="lg:hidden sticky top-20 z-30 bg-slate-50/95 backdrop-blur-sm border-b border-slate-200 py-3 px-4 -mx-4 sm:-mx-6 mb-4">
        <div className="flex items-center justify-between text-xs text-slate-600 mb-1.5 font-bold uppercase tracking-wider">
          <span>Notice Sections</span>
          <span className="text-[#DC2626]">7 Parts</span>
        </div>
        <div className="flex gap-2 overflow-x-auto pb-1 text-xs no-scrollbar">
          {SECTIONS.map((sec) => {
            const isActive = activeId === sec.id;
            return (
              <a
                key={sec.id}
                href={`#${sec.id}`}
                className={`shrink-0 px-3 py-1.5 rounded-full border transition-colors ${
                  isActive
                    ? "bg-[#DC2626] border-[#DC2626] text-white font-bold shadow-sm"
                    : "bg-white border-slate-200 text-slate-700 hover:border-[#DC2626] hover:text-[#DC2626]"
                }`}
              >
                {sec.title}
              </a>
            );
          })}
        </div>
      </div>

      {/* Desktop Sticky Sidebar */}
      <aside className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start">
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-4">
          <div className="border-b border-slate-100 pb-3">
            <span className="text-xs uppercase tracking-wider font-bold text-slate-400 block mb-1">
              Template Navigation
            </span>
            <p className="text-sm font-bold text-slate-900 leading-snug">
              Textile Buyer &amp; Broker Joint Notice
            </p>
          </div>

          <nav className="space-y-1.5" aria-label="Page sections">
            {SECTIONS.map((sec) => {
              const isActive = activeId === sec.id;
              return (
                <a
                  key={sec.id}
                  href={`#${sec.id}`}
                  className={`group flex items-center justify-between p-2.5 rounded-xl text-xs font-semibold transition-colors ${
                    isActive
                      ? "bg-[#DC2626] text-white font-bold shadow-sm"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  <span className="truncate">{sec.title}</span>
                  {sec.badge && (
                    <span
                      className={`ml-2 text-[10px] px-1.5 py-0.5 rounded font-bold uppercase tracking-wider transition-colors ${
                        isActive
                          ? "bg-white/20 text-white"
                          : "bg-slate-100 text-slate-500 group-hover:bg-red-50 group-hover:text-[#DC2626]"
                      }`}
                    >
                      {sec.badge}
                    </span>
                  )}
                </a>
              );
            })}
          </nav>

          <div className="pt-4 border-t border-slate-100 space-y-3">
            <div className="bg-red-50 border border-red-200 rounded-xl p-3 text-[11px] text-red-900 leading-relaxed font-medium">
              <strong className="block text-red-700 font-bold mb-1">
                72-Hour Market Pressure
              </strong>
              Serving Noticee #2 (Introducing Broker / Adatiya) alongside the Buyer prevents quiet outstation defaults.
            </div>

            <div className="space-y-2">
              <Link
                href="/user/new-recovery"
                className="block text-center w-full py-2.5 px-3 rounded-xl bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs font-bold shadow-sm transition-all"
              >
                Serve Notice via Advocate (₹999)
              </Link>
              <Link
                href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                className="block text-center w-full py-2 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-[11px] font-semibold transition-all"
              >
                Bulk Mill Recovery (10–10,000+ Cases)
              </Link>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
