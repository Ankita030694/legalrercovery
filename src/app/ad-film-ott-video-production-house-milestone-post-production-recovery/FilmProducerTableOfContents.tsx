"use client";

import { useEffect, useState } from "react";

interface TocItem {
  id: string;
  label: string;
}

const TOC_ITEMS: TocItem[] = [
  { id: "statutory-anchor", label: "1. Statutory Grounding (s.17)" },
  { id: "operational-bottlenecks", label: "2. The 3 Cashflow Failure Modes" },
  { id: "producer-playbook-tabs", label: "3. Interactive Recovery Decision Matrix" },
  { id: "decision-tree-flow", label: "4. Operational Escalation Workflow" },
  { id: "worked-recovery-ledger", label: "5. Production Overrun Audit Ledger" },
  { id: "bsa-evidence-checklist", label: "6. BSA 2023 s.63 Evidence Kit" },
  { id: "commercial-court-vs-guild", label: "7. Commercial Court vs Guild vs Injunction" },
  { id: "producer-faqs", label: "8. Frequently Asked Questions" },
  { id: "primary-legal-sources", label: "9. Statutes & Precedents" },
];

export default function FilmProducerTableOfContents() {
  const [activeId, setActiveId] = useState<string>("statutory-anchor");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const intersecting = entries.find((entry) => entry.isIntersecting);
        if (intersecting) {
          setActiveId(intersecting.target.id);
        }
      },
      {
        rootMargin: "-100px 0% -60% 0%",
        threshold: 0,
      }
    );

    TOC_ITEMS.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Mobile Sticky Bar */}
      <div className="lg:hidden sticky top-20 z-30 bg-slate-50/95 backdrop-blur-sm border-b border-slate-200 py-3 px-4 -mx-4 sm:-mx-6 mb-6">
        <p className="text-[10px] uppercase font-bold text-slate-500 tracking-wider mb-1">
          Navigation Index
        </p>
        <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
          {TOC_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`shrink-0 text-xs px-3 py-1.5 rounded-full transition-all whitespace-nowrap ${
                activeId === item.id
                  ? "bg-[#DC2626] text-white font-bold shadow-sm"
                  : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>

      {/* Desktop Sticky Aside */}
      <aside className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
          <p className="text-xs uppercase font-extrabold tracking-wider text-slate-500">
            Guide Sections
          </p>
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-red-50 text-[#DC2626] border border-red-200">
            Producer SOP
          </span>
        </div>
        <nav aria-label="Table of contents" className="space-y-1">
          {TOC_ITEMS.map((item) => {
            const isActive = activeId === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`block px-3 py-2 text-xs rounded-xl transition-all leading-snug ${
                  isActive
                    ? "bg-[#DC2626] text-white font-bold shadow-sm"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>
        <div className="mt-5 pt-4 border-t border-slate-100">
          <div className="bg-slate-50 rounded-xl p-3 border border-slate-200/80">
            <p className="text-[11px] font-bold text-slate-800 mb-1">
              Urgent Broadcast Aired?
            </p>
            <p className="text-[10px] text-slate-600 leading-relaxed mb-2.5">
              Serve a Commercial Division s.17 Injunction & Broadcaster/OTT takedown within 24 hours.
            </p>
            <a
              href="#worked-recovery-ledger"
              className="inline-block text-[10px] font-bold text-[#DC2626] hover:underline"
            >
              Audit Overrun Bill &rarr;
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}
