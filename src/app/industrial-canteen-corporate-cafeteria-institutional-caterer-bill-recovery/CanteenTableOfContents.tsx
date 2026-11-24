"use client";

import React, { useEffect, useState } from "react";

interface TOCItem {
  id: string;
  title: string;
}

const TOC_ITEMS: TOCItem[] = [
  { id: "canteen-cashflow-crisis", title: "1. Why Mess & Canteen Bills Stall" },
  { id: "statutory-matrix", title: "2. MSMED s.15–18 & s.43B(h) Matrix" },
  { id: "decision-tree", title: "3. 5-Stage Canteen Escalation Flow" },
  { id: "canteen-scenarios", title: "4. 4 Canteen Default Scenarios" },
  { id: "worked-ledger", title: "5. Worked Math: ₹22.5L Mess Default" },
  { id: "biometric-bsa-checklist", title: "6. Biometric, FSSAI & BSA s.63 Audit" },
  { id: "s138-continuity-traps", title: "7. s.138, GSTR-2B & Continuity Traps" },
  { id: "dual-cta", title: "8. Dual-Track Caterer Legal Desk" },
  { id: "ind16-network", title: "9. IND-16 Catering & Venue Network" },
  { id: "faqs", title: "10. Canteen & Mess Recovery FAQs" },
  { id: "primary-sources", title: "11. Statutory Authorities & Bare Acts" },
];

export default function CanteenTableOfContents() {
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
          Canteen Recovery Playbook
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
          <p className="text-[11px] font-bold text-slate-800 mb-1.5">
            120-Day Mess Bill Frozen?
          </p>
          <p className="text-[11px] text-slate-500 leading-relaxed mb-3">
            Serve a Fact-verified MSMED s.15–18 &amp; s.43B(h) Demand Notice on Factory HR, CFO &amp; Hostel Trustees.
          </p>
          <a
            href="#dual-cta"
            onClick={(e) => handleClick(e, "dual-cta")}
            className="block w-full text-center py-2.5 px-3 rounded-xl bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs font-bold transition-colors shadow-sm"
          >
            Start Canteen Recovery (₹999)
          </a>
        </div>
      </aside>
    </>
  );
}
