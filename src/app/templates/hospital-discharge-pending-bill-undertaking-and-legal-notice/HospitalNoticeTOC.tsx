"use client";

import React, { useEffect, useState } from "react";

interface TOCItem {
  id: string;
  label: string;
}

const TOC_ITEMS: TOCItem[] = [
  { id: "heading-article-21-crisis", label: "1. The Article 21 Discharge Dilemma" },
  { id: "heading-workspace", label: "2. 2-in-1 RCM Legal Pack Workspace" },
  { id: "heading-comparison-matrix", label: "3. Defective Receipt vs Court-Tested Undertaking" },
  { id: "heading-statutory-sop", label: "4. 4-Stage Post-Discharge Recovery SOP" },
  { id: "heading-mandatory-clauses", label: "5. Key Statutory Clause Architecture" },
  { id: "heading-evidence-checklist", label: "6. Medico-Legal Evidentiary Checklist" },
  { id: "heading-judicial-precedents", label: "7. High Court & Supreme Court Precedents" },
  { id: "heading-financial-case-study", label: "8. Worked ₹1,65,000 Discharge Case Study" },
  { id: "heading-institutional-cta", label: "9. Test 1 Notice or Bulk Hospital Desk" },
  { id: "heading-faqs", label: "10. Hospital Billing & Legal Cell FAQs" },
  { id: "heading-statutory-sources", label: "11. Statutory Authorities & Primary Sources" },
];

export default function HospitalNoticeTOC() {
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
            Hospital Legal Pack Guide
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

          <div className="mt-6 pt-5 border-t border-slate-200">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
              Industry Vertical Hub
            </span>
            <a
              href="/industries/hospitals-doctors-healthcare-recovery"
              className="text-xs font-bold text-slate-800 hover:text-[#DC2626] flex items-center gap-1 group"
            >
              <span>Healthcare RCM Hub</span>
              <span className="group-hover:translate-x-0.5 transition-transform">&rarr;</span>
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}
