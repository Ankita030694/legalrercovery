"use client";

import React, { useEffect, useState } from "react";

interface TOCItem {
  id: string;
  title: string;
}

const TOC_ITEMS: TOCItem[] = [
  { id: "stop-payment-law", title: "1. Stop-Payment = s.138 Dishonour" },
  { id: "decision-tree", title: "2. 72-Hour Venue Recovery Decision Tree" },
  { id: "statutory-matrix", title: "3. Statutory & Precedent Matrix" },
  { id: "failure-modes", title: "4. Wedding Billing & Bar Dispute Modes" },
  { id: "evidence-checklist", title: "5. BSA 2023 s.63 & Banquet Proof SOP" },
  { id: "financial-ledger", title: "6. Worked ₹12 Lakh Recovery Ledger" },
  { id: "dual-cta", title: "7. Serve s.138 Notice / Bulk Venue Desk" },
  { id: "hub-network", title: "8. IND-16 Hospitality Recovery Network" },
  { id: "faqs", title: "9. Frequently Asked Questions" },
  { id: "primary-sources", title: "10. Bare Acts & Official Portals" },
];

export default function BanquetTableOfContents() {
  const [activeId, setActiveId] = useState<string>(TOC_ITEMS[0].id);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160;
      for (let i = TOC_ITEMS.length - 1; i >= 0; i--) {
        const item = TOC_ITEMS[i];
        const el = document.getElementById(item.id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveId(item.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -110;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Mobile Sticky Bar */}
      <div className="lg:hidden sticky top-20 z-30 bg-slate-50/95 backdrop-blur-sm border-b border-slate-200 py-3 px-4 -mx-4 sm:-mx-6 mb-4">
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
          {TOC_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleClick(e, item.id)}
              className={`shrink-0 text-xs px-3 py-1.5 rounded-full transition-all whitespace-nowrap ${
                activeId === item.id
                  ? "bg-[#DC2626] text-white font-bold shadow-sm"
                  : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
              }`}
            >
              {item.title}
            </a>
          ))}
        </div>
      </div>

      {/* Desktop Sticky Aside */}
      <aside className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
        <p className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-3">
          Venue Recovery SOP
        </p>
        <nav aria-label="Table of Contents" className="space-y-1">
          {TOC_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleClick(e, item.id)}
              className={`block text-xs px-3 py-2 rounded-lg transition-colors leading-snug ${
                activeId === item.id
                  ? "bg-[#DC2626] text-white font-bold shadow-sm"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 font-medium"
              }`}
            >
              {item.title}
            </a>
          ))}
        </nav>
      </aside>
    </>
  );
}
