"use client";

import React, { useEffect, useState } from "react";

interface TOCItem {
  id: string;
  label: string;
}

const TOC_ITEMS: TOCItem[] = [
  { id: "heading-telecom-notice-gap", label: "1. Telecom & Cloud Notice Trap" },
  { id: "heading-notice-workspace", label: "2. Interactive Notice Workspace" },
  { id: "heading-dpdp-suspension-protocol", label: "3. 7-Day DPDP Suspension Protocol" },
  { id: "heading-lock-in-capex-matrix", label: "4. Lock-In CapEx & OTC Matrix" },
  { id: "heading-cpe-bns316-lien", label: "5. BNS s.316 CPE & s.170 Rack Lien" },
  { id: "heading-bsa63-technical-schedule", label: "6. CAF, AT & BSA s.63 Annexures" },
  { id: "heading-worked-ill-ledger", label: "7. Worked ₹38.40L Arrears Ledger" },
  { id: "heading-telecom-precedents", label: "8. Binding Judicial Precedents" },
  { id: "heading-institutional-cta", label: "9. Single Notice or Bulk CSV Desk" },
  { id: "heading-faqs", label: "10. Telecom & Cloud Notice FAQs" },
  { id: "heading-primary-sources", label: "11. Bare Acts & Official Portals" },
];

export default function IspTelecomNoticeTOC() {
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
        className="lg:hidden sticky top-20 z-30 bg-slate-50/95 backdrop-blur-sm border-b border-slate-200 py-3 px-4 -mx-4 sm:-mx-6 mb-4 overflow-x-auto no-scrollbar"
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
                    ? "bg-[#DC2626] text-white font-bold shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>
      </nav>

      {/* Desktop Sticky Left Sidebar — zero H2/H3/H4 tags */}
      <aside aria-label="On this page" className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start">
        <div className="max-h-[calc(100vh-8rem)] overflow-y-auto bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
          <p className="text-[11px] font-extrabold uppercase tracking-widest text-[#DC2626] mb-3">
            Telecom Notice Workspace
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
                        ? "bg-[#DC2626] text-white font-bold shadow-sm"
                        : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 font-medium"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="mt-6 pt-5 border-t border-slate-100">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
              Statutory Basis
            </span>
            <p className="text-xs text-slate-600 leading-relaxed">
              Commercial Courts Act 2015, DPDP Act 2023 s.8, Indian Contract Act ss.74 &amp; 170, and BNS 2023 s.316.
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}
