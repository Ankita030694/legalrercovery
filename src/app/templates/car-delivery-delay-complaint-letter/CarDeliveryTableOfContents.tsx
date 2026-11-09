"use client";

import React, { useEffect, useState } from "react";

interface TOCItem {
  id: string;
  label: string;
}

const SECTIONS: TOCItem[] = [
  { id: "heading-statutory-basis", label: "Statutory Rights on Vehicle Delivery Delay" },
  { id: "heading-interactive-workspace", label: "Interactive Letter Generator & Complaint Templates" },
  { id: "heading-legal-clauses-annotation", label: "Clause-by-Clause Legal Annotations" },
  { id: "heading-cancellation-fee-myth", label: "Cancellation Fee Myth: Why Deductions are Illegal" },
  { id: "heading-price-hike-protection", label: "Price Hike Protection During Dealer Delay" },
  { id: "heading-worked-example", label: "Worked Case Example: ₹16.5L SUV Delivery Delay" },
  { id: "heading-escalation-ladder", label: "4-Stage Escalation Ladder to Consumer Court" },
  { id: "heading-case-citations", label: "Consumer Commission Orders on Vehicle Delivery Delays" },
  { id: "heading-evidence-checklist", label: "Pre-Delivery & Evidentiary Records Checklist" },
  { id: "heading-advocate-escalation", label: "Advocate Legal Notice: 15-Day Resolution" },
  { id: "heading-faqs", label: "Frequently Asked Questions" },
  { id: "heading-primary-sources", label: "Primary Sources & Statutory References" },
];

export default function CarDeliveryTableOfContents() {
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
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      aria-label="Table of contents"
      className="hidden lg:block sticky top-24 bg-white border border-slate-200 rounded-xl p-5 shadow-xs"
    >
      <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100">
        <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
        <span className="text-xs font-bold tracking-wider text-slate-800 uppercase">
          On This Page
        </span>
      </div>
      <ul className="space-y-1.5 text-xs text-slate-600">
        {SECTIONS.map((section) => {
          const isActive = activeId === section.id;
          return (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                onClick={(e) => scrollToSection(e, section.id)}
                className={`block py-1.5 px-2.5 rounded-md transition-colors text-left leading-snug ${
                  isActive
                    ? "bg-red-50 text-red-700 font-semibold border-l-2 border-red-600"
                    : "hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                {section.label}
              </a>
            </li>
          );
        })}
      </ul>
      <div className="mt-5 pt-4 border-t border-slate-100">
        <a
          href="#heading-interactive-workspace"
          className="block w-full py-2 px-3 text-center text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors"
        >
          Draft Letter Now →
        </a>
      </div>
    </nav>
  );
}
