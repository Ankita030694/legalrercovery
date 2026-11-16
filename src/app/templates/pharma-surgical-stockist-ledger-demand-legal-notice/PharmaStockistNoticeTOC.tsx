"use client";

import React, { useEffect, useState } from "react";

interface TOCItem {
  id: string;
  label: string;
}

const TOC_ITEMS: TOCItem[] = [
  { id: "heading-pharma-credit-trap", label: "1. The Pharma Stockist Credit Trap" },
  { id: "heading-notice-workspace", label: "2. Interactive Legal Notice Workspace" },
  { id: "heading-ni-act-s20-protocol", label: "3. Section 20 NI Act Cheque Protocol" },
  { id: "heading-order-37-schedule", label: "4. Order XXXVII CPC Invoice & DL Schedule" },
  { id: "heading-expiry-breakage-bar", label: "5. Barring Unilateral Expiry & Breakage Debits" },
  { id: "heading-service-and-bsa63", label: "6. Multi-Channel Service & BSA 2023 s.63" },
  { id: "heading-worked-case-study", label: "7. Worked ₹18.45 Lakh Case Study" },
  { id: "heading-judicial-precedents", label: "8. Supreme Court Authorities & Case Laws" },
  { id: "heading-institutional-cta", label: "9. Single Notice or Bulk Batch Desk" },
  { id: "heading-faqs", label: "10. Pharma Credit & Stockist FAQs" },
  { id: "heading-primary-sources", label: "11. Statutory Authorities & Primary Sources" },
];

export default function PharmaStockistNoticeTOC() {
  const [activeId, setActiveId] = useState<string>(TOC_ITEMS[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-18% 0px -70% 0px", threshold: 0.05 }
    );

    TOC_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Mobile / Tablet Sticky Horizontal Jump Bar — strictly zero H2/H3/H4 tags */}
      <nav
        aria-label="Template Section Navigation"
        className="lg:hidden sticky top-16 z-30 bg-white/95 backdrop-blur border-y border-slate-200 -mx-4 sm:-mx-6 px-4 sm:px-6 py-2.5 overflow-x-auto no-scrollbar"
      >
        <div className="flex items-center gap-2 min-w-max">
          <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#DC2626] shrink-0 mr-1">
            Sections:
          </span>
          {TOC_ITEMS.map((item) => {
            const isActive = activeId === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors whitespace-nowrap ${
                  isActive
                    ? "bg-[#DC2626] text-white"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>
      </nav>

      {/* Desktop Sticky Left Sidebar — strictly zero H2/H3/H4 tags */}
      <aside aria-label="On this page" className="hidden lg:block w-64 shrink-0">
        <div className="sticky top-[22vh] max-h-[calc(100vh-6rem)] overflow-y-auto bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
          <p className="text-[11px] font-extrabold uppercase tracking-widest text-[#DC2626] mb-3">
            Notice Template Guide
          </p>
          <ul className="space-y-1.5">
            {TOC_ITEMS.map((item) => {
              const isActive = activeId === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={`block px-3 py-1.5 rounded-lg text-xs leading-snug transition-all ${
                      isActive
                        ? "bg-red-50 text-[#DC2626] font-bold border-l-2 border-[#DC2626]"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-50 font-medium"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="mt-6 pt-5 border-t border-slate-100">
            <p className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 mb-2">
              Statutory Levers
            </p>
            <div className="space-y-1 text-[11px] text-slate-600">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>Order XXXVII CPC Ledger Schedule</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                <span>NI Act s.20 Security PDC Notice</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                <span>Form 20B/21B Drug License Lock</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                <span>MSMED Act s.16 3x Compound Int.</span>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
