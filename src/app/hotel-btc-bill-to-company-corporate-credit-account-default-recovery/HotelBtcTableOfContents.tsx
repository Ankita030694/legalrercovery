"use client";

import React, { useEffect, useState } from "react";

interface TOCItem {
  id: string;
  title: string;
}

const TOC_ITEMS: TOCItem[] = [
  { id: "city-ledger-anatomy", title: "1. Why 90+ Day Hotel BTC Ledgers Stall" },
  { id: "statutory-matrix", title: "2. Order 37 CPC & GSTR-2B Matrix" },
  { id: "decision-tree", title: "3. 5-Stage City-Ledger Escalation Flow" },
  { id: "btc-scenarios", title: "4. 4 Corporate BTC Dispute Scenarios" },
  { id: "worked-ledger", title: "5. Worked Math: ₹18.4L 80-Night Default" },
  { id: "pms-bsa-checklist", title: "6. PMS Folio, GRC & BSA s.63 Checklist" },
  { id: "fhrai-43bh-levers", title: "7. FHRAI Alerts, s.43B(h) & s.138 Levers" },
  { id: "dual-cta", title: "8. Dual-Track Hospitality Legal Desk" },
  { id: "hospitality-network", title: "9. IND-16 Hospitality Recovery Network" },
  { id: "faqs", title: "10. Hotel BTC Recovery FAQs" },
  { id: "primary-sources", title: "11. Statutory Authorities & Bare Acts" },
];

export default function HotelBtcTableOfContents() {
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

      {/* Desktop Sticky Aside — strictly <p> and <a>, zero heading tags */}
      <aside className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
        <p className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-3">
          City-Ledger SOP Index
        </p>
        <nav className="space-y-1" aria-label="Table of Contents">
          {TOC_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleClick(e, item.id)}
              className={`block text-xs py-2 px-3 rounded-lg transition-colors leading-relaxed ${
                activeId === item.id
                  ? "bg-[#DC2626] text-white font-bold shadow-sm"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              {item.title}
            </a>
          ))}
        </nav>

        <div className="mt-6 pt-5 border-t border-slate-100">
          <p className="text-[11px] font-semibold text-slate-800 uppercase tracking-wide mb-2">
            Hotel Credit Desk Hotline
          </p>
          <p className="text-xs text-slate-600 mb-3 leading-normal">
            Convert 90–180+ DPD Corporate BTC folios into Advocate Demand Notices via Email, WhatsApp & Speed Post RPAD within 24 hours.
          </p>
          <a
            href="/user/new-recovery"
            className="block text-center text-xs font-bold bg-[#DC2626] text-white py-2.5 px-3 rounded-lg hover:bg-[#B91C1C] transition-colors shadow-sm"
          >
            Test 1 Overdue BTC Folio (₹999)
          </a>
        </div>
      </aside>
    </>
  );
}
