"use client";

import React, { useEffect, useState } from "react";

interface TOCItem {
  id: string;
  title: string;
}

const TOC_ITEMS: TOCItem[] = [
  { id: "march-credit-trap", title: "1. The March–November Credit Trap" },
  { id: "statutory-matrix", title: "2. Order 37, NI s.138 & MSMED Matrix" },
  { id: "decision-tree", title: "3. Pre-Session Dec–Jan Escalation Flow" },
  { id: "publisher-scenarios", title: "4. 4 K-12 Supply Default Scenarios" },
  { id: "worked-ledger", title: "5. Worked Math: ₹25L Textbook Default" },
  { id: "bsa-evidence-checklist", title: "6. Bilty, E-Way Bill & BSA s.63 Audit" },
  { id: "unsold-returns-s80", title: "7. Unsold Book Dumps & Sec 80 CPC" },
  { id: "dual-cta", title: "8. Dual-Track Publisher Recovery Desk" },
  { id: "ind17-network", title: "9. Education & B2B Recovery Links" },
  { id: "faqs", title: "10. Publisher & Distributor FAQs" },
  { id: "primary-sources", title: "11. Statutory Authorities & Bare Acts" },
];

export default function PublisherTableOfContents() {
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
          Publisher Recovery Guide
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
            School Switching Publishers?
          </p>
          <p className="text-[11px] text-slate-500 leading-relaxed mb-3">
            Launch a Dec–Jan Pre-Session Legal Notice wave under Order 37 CPC, NI s.138 &amp; MSMED s.15 before new booklists lock.
          </p>
          <a
            href="#dual-cta"
            onClick={(e) => handleClick(e, "dual-cta")}
            className="block w-full text-center py-2.5 px-3 rounded-xl bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs font-bold transition-colors shadow-sm"
          >
            Start Publisher Recovery (₹999)
          </a>
        </div>
      </aside>
    </>
  );
}
