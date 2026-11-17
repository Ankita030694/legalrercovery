"use client";

import React, { useEffect, useState } from "react";

interface TOCItem {
  id: string;
  title: string;
}

const TOC_ITEMS: TOCItem[] = [
  { id: "statutory-foundation", title: "1. Section 7 Arbitration Act & The Printed Bijak Clause" },
  { id: "high-court-split", title: "2. The High Court Split: Delhi, Bombay & Gujarat Rulings" },
  { id: "unilateral-appointment-perkins", title: "3. Unilateral Panch Nominations vs Perkins Eastman Rule" },
  { id: "section-36-execution", title: "4. Execution in Civil Court: Section 36 CPC Order XXI SOP" },
  { id: "statutory-comparison-table", title: "5. Forum Comparison: Mahajan Panch vs MSME ODR vs Order 37" },
  { id: "court-precedents", title: "6. Landmark Precedents & High Court Jurisprudence" },
  { id: "pre-emption-defenses", title: "7. Outstation Buyer Defense Pre-Emption Matrix" },
  { id: "bsa-evidence-checklist", title: "8. Mandatory BSA 2023 §63 Evidentiary Audit" },
  { id: "faqs", title: "9. Frequently Asked Questions" },
];

export default function MahajanArbitrationTableOfContents() {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
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

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -100;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Mobile Sticky Bar */}
      <div className="lg:hidden sticky top-20 z-30 bg-slate-50/95 backdrop-blur-sm border-b border-slate-200 py-3 px-4 -mx-4 sm:-mx-6 mb-6">
        <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
          Table of Contents
        </p>
        <select
          value={activeId}
          onChange={(e) => {
            const id = e.target.value;
            const el = document.getElementById(id);
            if (el) {
              const yOffset = -100;
              const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
              window.scrollTo({ top: y, behavior: "smooth" });
            }
          }}
          className="w-full text-xs font-medium bg-white border border-slate-300 rounded-lg p-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#DC2626]"
          aria-label="Table of Contents Navigation"
        >
          {TOC_ITEMS.map((item) => (
            <option key={item.id} value={item.id}>
              {item.title}
            </option>
          ))}
        </select>
      </div>

      {/* Desktop Sticky Aside */}
      <aside className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
        <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4 pb-2 border-b border-slate-100">
          Contents & Navigation
        </p>
        <nav className="space-y-1">
          {TOC_ITEMS.map((item) => {
            const isActive = activeId === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleClick(e, item.id)}
                className={`block px-3 py-2 text-xs rounded-lg transition-colors leading-relaxed ${
                  isActive
                    ? "bg-[#DC2626] text-white font-bold shadow-sm"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                {item.title}
              </a>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
