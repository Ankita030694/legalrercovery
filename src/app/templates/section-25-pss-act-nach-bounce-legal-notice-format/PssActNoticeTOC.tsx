"use client";

import React, { useEffect, useState } from "react";

interface TOCItem {
  id: string;
  label: string;
}

const TOC_ITEMS: TOCItem[] = [
  { id: "heading-suman-sethi-trap", label: "1. The Suman Sethi Dual-Demand Trap" },
  { id: "heading-notice-workspace", label: "2. Interactive Section 25 Workspace" },
  { id: "heading-umrn-comparison-matrix", label: "3. Defective vs Court-Tested Draft" },
  { id: "heading-statutory-timeline-svg", label: "4. 30-15-30 Day s.25 Prosecution Rail" },
  { id: "heading-clause-architecture", label: "5. UMRN & NPCI Clause Architecture" },
  { id: "heading-evidence-dispatch", label: "6. BSA s.63 & NPCI Return Evidence" },
  { id: "heading-sc-precedents", label: "7. Supreme Court s.25 / s.138 Rulings" },
  { id: "heading-worked-example", label: "8. Worked ₹18,450 EMI vs ₹4.2L Recall" },
  { id: "heading-institutional-cta", label: "9. Test 1 Notice or Bulk CSV" },
  { id: "heading-faqs", label: "10. NBFC Section 25 Notice FAQs" },
  { id: "heading-statutory-sources", label: "11. PSS Act, NI Act & NPCI Sources" },
];

export default function PssActNoticeTOC() {
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
      {/* Mobile / Tablet Sticky Horizontal Jump Bar — zero H2/H3/H4 tags */}
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

      {/* Desktop Sticky Left Sidebar — zero H2/H3/H4 tags */}
      <aside aria-label="On this page" className="hidden lg:block w-64 shrink-0">
        <div className="sticky top-[22vh] max-h-[calc(100vh-6rem)] overflow-y-auto bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
          <p className="text-[11px] font-extrabold uppercase tracking-widest text-[#DC2626] mb-3">
            Section 25 Template Guide
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
          <div className="mt-5 pt-4 border-t border-slate-100 space-y-2">
            <a
              href="#heading-notice-workspace"
              className="block w-full text-center px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-colors"
            >
              Build &amp; Export Draft (.doc)
            </a>
            <a
              href="#heading-institutional-cta"
              className="block w-full text-center px-3 py-2 rounded-xl bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs font-bold transition-colors"
            >
              Advocate Dispatch (&rupee;999)
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}
