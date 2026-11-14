"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const MEDICAL_EQUIPMENT_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-overview", label: "MEDTECH RECEIVABLES CRISIS" },
  { id: "heading-decision-tree", label: "5-STAGE RECOVERY TREE" },
  { id: "heading-statutory-matrix", label: "STATUTORY REMEDIES MATRIX" },
  { id: "heading-scenario-tabs", label: "4 COMMERCIAL FAILURE MODES" },
  { id: "heading-reagent-rental-trap", label: "REAGENT-RENTAL SHORTFALLS" },
  { id: "heading-pcpndt-repossession", label: "PCPNDT ULTRASOUND SEIZURE RULES" },
  { id: "heading-radiology-milestones", label: "FAT MILESTONES & MRI/CT SUITS" },
  { id: "heading-amc-cmc-spares", label: "BIOMEDICAL AMC/CMC REMEDIES" },
  { id: "heading-worked-calculation", label: "WORKED ₹48L RECOVERY LEDGER" },
  { id: "heading-bsa-evidence", label: "BSA S.63 EVIDENCE CHECKLIST" },
  { id: "heading-recovery-cta", label: "DEPLOY RECOVERY DESK" },
  { id: "heading-faqs", label: "FREQUENTLY ASKED QUESTIONS" },
  { id: "heading-primary-sources", label: "STATUTORY CITATIONS" },
];

export default function MedicalEquipmentTableOfContents() {
  const [activeId, setActiveId] = useState<string>("heading-overview");
  const isClickScrolling = useRef<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isClickScrolling.current) return;
      const scrollPosition = window.scrollY + 160;

      for (let i = MEDICAL_EQUIPMENT_TOC_SECTIONS.length - 1; i >= 0; i--) {
        const section = document.getElementById(MEDICAL_EQUIPMENT_TOC_SECTIONS[i].id);
        if (section) {
          const top = section.offsetTop;
          if (scrollPosition >= top) {
            setActiveId(MEDICAL_EQUIPMENT_TOC_SECTIONS[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (!target) return;

    isClickScrolling.current = true;
    setActiveId(id);

    const yOffset = -100;
    const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });

    setTimeout(() => {
      isClickScrolling.current = false;
    }, 700);
  };

  return (
    <>
      {/* Mobile Sticky Horizontal Bar */}
      <div className="lg:hidden sticky top-20 z-30 bg-slate-50/95 backdrop-blur-sm border-b border-slate-200 py-3 px-4 -mx-4 sm:-mx-6 mb-4">
        <div className="text-[10px] font-black tracking-widest text-slate-500 uppercase mb-2">
          Page Navigation &bull; MedTech Recovery Playbook
        </div>
        <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar text-xs">
          {MEDICAL_EQUIPMENT_TOC_SECTIONS.map((sec) => {
            const isActive = activeId === sec.id;
            return (
              <a
                key={sec.id}
                href={`#${sec.id}`}
                onClick={(e) => scrollToSection(e, sec.id)}
                className={`whitespace-nowrap px-3 py-1.5 rounded-full font-bold transition-all text-xs ${
                  isActive
                    ? "bg-[#DC2626] text-white shadow-sm"
                    : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
                }`}
              >
                {sec.label}
              </a>
            );
          })}
        </div>
      </div>

      {/* Desktop Sticky Aside */}
      <aside className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start">
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
          <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100">
            <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626] animate-pulse" />
            <p className="text-xs font-black uppercase tracking-wider text-slate-800">
              Navigation Playbook
            </p>
          </div>
          <nav className="space-y-1 text-xs">
            {MEDICAL_EQUIPMENT_TOC_SECTIONS.map((sec) => {
              const isActive = activeId === sec.id;
              return (
                <a
                  key={sec.id}
                  href={`#${sec.id}`}
                  onClick={(e) => scrollToSection(e, sec.id)}
                  className={`block px-3 py-2 rounded-xl transition-all font-semibold ${
                    isActive
                      ? "bg-[#DC2626] text-white font-bold shadow-sm"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  {sec.label}
                </a>
              );
            })}
          </nav>
        </div>
      </aside>
    </>
  );
}
