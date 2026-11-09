"use client";

import React, { useEffect, useState } from "react";

interface TOCItem {
  id: string;
  label: string;
}

const SECTIONS: TOCItem[] = [
  { id: "heading-statutory-basis", label: "Statutory Right to Fee Refund" },
  { id: "heading-interactive-workspace", label: "Interactive Application Generator & Annotated Templates" },
  { id: "heading-ugc-slabs", label: "UGC 5-Tier Slabs & Deduction Thresholds" },
  { id: "heading-mandatory-elements", label: "Mandatory vs Optional Elements" },
  { id: "heading-common-mistakes", label: "6 Mistakes That Weaken Applications" },
  { id: "heading-escalation-rail", label: "Escalation Ladder: From Application to Court" },
  { id: "heading-worked-example", label: "Worked Case Example: ₹1,57,000 Recovery" },
  { id: "heading-case-citations", label: "Verifiable Landmark Case Digest" },
  { id: "heading-evidence-checklist", label: "Documentary Evidence Checklist" },
  { id: "heading-advocate-escalation", label: "Advocate Notice: Enforcing 15-Day Recovery" },
  { id: "heading-faqs", label: "Frequently Asked Questions" },
  { id: "heading-primary-sources", label: "Primary Sources & Statutory References" },
];

export default function FeeRefundTableOfContents() {
  const [activeId, setActiveId] = useState<string>(SECTIONS[0].id);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160;

      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const element = document.getElementById(SECTIONS[i].id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveId(SECTIONS[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({
        top: topOffset,
        behavior: "smooth",
      });
      setActiveId(id);
    }
  };

  return (
    <aside
      aria-label="Table of contents"
      className="hidden lg:block w-72 xl:w-80 shrink-0 sticky top-28 self-start bg-white border border-slate-200/90 rounded-2xl p-5 shadow-sm"
    >
      <div className="flex items-center justify-between pb-3.5 mb-3 border-b border-slate-100">
        <h3 className="text-xs font-black uppercase tracking-wider text-slate-800">
          On This Page
        </h3>
        <span className="text-[10px] font-bold text-red-600 bg-red-50 border border-red-200/60 px-2 py-0.5 rounded-full">
          Formats &amp; Rules
        </span>
      </div>

      <nav aria-label="Table of contents navigation">
        <ul className="space-y-1.5 text-xs">
          {SECTIONS.map((section) => {
            const isActive = activeId === section.id;
            return (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  onClick={(e) => scrollToSection(e, section.id)}
                  className={`block py-1.5 px-2.5 rounded-lg transition-all duration-150 leading-snug ${
                    isActive
                      ? "bg-red-50 text-red-700 font-bold border-l-2 border-red-600 translate-x-0.5"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50 font-medium"
                  }`}
                >
                  {section.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="mt-5 pt-4 border-t border-slate-100">
        <div className="bg-slate-50 rounded-xl p-3 border border-slate-200/70">
          <p className="text-[11px] font-extrabold text-slate-900 mb-1">
            Need an Advocate Demand Notice?
          </p>
          <p className="text-[10px] text-slate-600 leading-relaxed mb-2.5">
            If the institution refuses refund within 15 days, serve a formal statutory advocate legal notice on legal letterhead.
          </p>
          <a
            href="#heading-advocate-escalation"
            onClick={(e) => scrollToSection(e, "heading-advocate-escalation")}
            className="block text-center text-[11px] font-bold text-red-600 hover:text-red-700 bg-white border border-red-200 hover:border-red-300 py-1.5 px-2 rounded-lg transition-colors shadow-2xs"
          >
            Review Legal Notice Route →
          </a>
        </div>
      </div>
    </aside>
  );
}
