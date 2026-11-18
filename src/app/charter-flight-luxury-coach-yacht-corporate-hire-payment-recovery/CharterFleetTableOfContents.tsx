"use client";

import React, { useEffect, useState } from "react";

interface TOCItem {
  id: string;
  title: string;
}

const TOC_ITEMS: TOCItem[] = [
  { id: "charter-default-anatomy", title: "1. Why Charter & Fleet Bills Stall" },
  { id: "statutory-matrix", title: "2. DGCA Log & Order 37 Matrix" },
  { id: "escalation-pipeline", title: "3. 5-Step Fleet Escalation Flow" },
  { id: "charter-scenarios", title: "4. 4 Charter Default Scenarios" },
  { id: "worked-ledger", title: "5. Worked Math: ₹42.5L Heli Default" },
  { id: "dgca-bsa-checklist", title: "6. DGCA Tech-Log & BSA s.63 Audit" },
  { id: "campaign-wedding-levers", title: "7. Campaign, Wedding & Yacht Levers" },
  { id: "dual-cta", title: "8. Dual-Track Charter Legal Desk" },
  { id: "ind16-network", title: "9. IND-16 Travel & Fleet Network" },
  { id: "faqs", title: "10. Charter & Coach Recovery FAQs" },
  { id: "primary-sources", title: "11. DGCA & Statutory Authorities" },
];

export default function CharterFleetTableOfContents() {
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
          Charter & Fleet SOP Index
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
      </aside>
    </>
  );
}
