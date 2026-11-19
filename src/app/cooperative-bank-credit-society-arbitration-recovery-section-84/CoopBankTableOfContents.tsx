"use client";

import React, { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

export const COOP_BANK_TOC_SECTIONS: TOCSection[] = [
  { id: "heading-cooperative-npa-gap", label: "CO-OP RECOVERY GAP" },
  { id: "heading-decision-tree", label: "FORUM DECISION TREE" },
  { id: "heading-pandurang-sarfaesi", label: "PANDURANG SC & SARFAESI" },
  { id: "heading-statutory-matrix", label: "STATUTORY MATRIX" },
  { id: "heading-scenario-tabs", label: "4 RECOVERY PLAYBOOKS" },
  { id: "heading-two-surety-notice", label: "BORROWER + 2 SURETIES" },
  { id: "heading-salary-certificate", label: "SALARY & SHARE LIEN" },
  { id: "heading-worked-ledger", label: "WORKED RECOVERY LEDGER" },
  { id: "heading-evidence-checklist", label: "DOSSIER & BSA s.63" },
  { id: "heading-cta-desk", label: "BULK & TEST DESK" },
  { id: "heading-internal-network", label: "BANKING HUB & TOOLS" },
  { id: "heading-faq", label: "FAQ" },
  { id: "heading-primary-sources", label: "STATUTES & PRECEDENTS" },
];

interface CoopBankTableOfContentsProps {
  sections?: TOCSection[];
}

export default function CoopBankTableOfContents({
  sections = COOP_BANK_TOC_SECTIONS,
}: CoopBankTableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>(sections[0]?.id || "");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY;
          if (scrollPosition >= top) {
            setActiveId(sections[i].id);
            return;
          }
        }
      }

      if (sections[0]) {
        setActiveId(sections[0].id);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -90;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      window.history.pushState(null, "", `#${id}`);
      setActiveId(id);
      setIsOpen(false);
    }
  };

  const activeSection = sections.find((s) => s.id === activeId) || sections[0];

  return (
    <>
      {/* Mobile / Tablet Sticky Dropdown Table of Contents */}
      <div
        ref={dropdownRef}
        className="lg:hidden sticky top-20 z-30 w-full mb-4 py-3 px-4 -mx-4 sm:-mx-6 bg-slate-50/95 backdrop-blur-sm border-b border-slate-200 select-none"
      >
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Table of Contents Menu"
          className="w-full flex items-center justify-between px-4 py-3 bg-white border border-slate-200 rounded-xl shadow-sm text-left transition-all active:scale-[0.99]"
        >
          <div className="flex items-center gap-2.5 min-w-0">
            <span className="w-2 h-2 rounded-full bg-[#DC2626] shrink-0 animate-pulse" />
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 shrink-0">
              Jump To:
            </span>
            <span className="text-xs font-bold text-slate-900 truncate">
              {activeSection.label}
            </span>
          </div>
          <svg
            className={`w-4 h-4 text-slate-500 transition-transform duration-200 shrink-0 ml-2 ${
              isOpen ? "rotate-180" : ""
            }`}
            width={16}
            height={16}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {isOpen && (
          <nav
            aria-label="Table of contents navigation menu"
            className="absolute top-full left-4 right-4 mt-1 bg-white border border-slate-200 rounded-xl shadow-xl overflow-hidden max-h-80 overflow-y-auto divide-y divide-slate-100 z-50"
          >
            {sections.map((section, idx) => {
              const isActive = section.id === activeId;
              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => scrollToSection(e, section.id)}
                  className={`flex items-center gap-3 px-4 py-3 text-xs font-semibold transition-colors ${
                    isActive
                      ? "bg-red-50 text-[#DC2626] font-bold"
                      : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  <span
                    className={`text-[10px] font-mono shrink-0 w-5 h-5 rounded flex items-center justify-center ${
                      isActive
                        ? "bg-[#DC2626] text-white font-bold"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="truncate">{section.label}</span>
                </a>
              );
            })}
          </nav>
        )}
      </div>

      {/* Desktop Sticky Aside Table of Contents (Strictly Zero Heading Tags Inside) */}
      <aside
        aria-label="Table of Contents"
        className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start"
      >
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-4">
          <div className="border-b border-slate-100 pb-3">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#DC2626] block">
              IND-01 Co-op Playbook
            </span>
            <p className="text-sm font-black text-slate-900 tracking-tight mt-0.5">
              s.84, Registrar &amp; SARFAESI
            </p>
          </div>

          <nav
            aria-label="Table of contents links"
            className="space-y-1 max-h-[calc(100vh-14rem)] overflow-y-auto pr-1"
          >
            {sections.map((section, idx) => {
              const isActive = section.id === activeId;
              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => scrollToSection(e, section.id)}
                  className={`group flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs transition-all duration-150 ${
                    isActive
                      ? "bg-[#DC2626] text-white font-bold shadow-sm"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  <span
                    className={`text-[10px] font-mono w-4 shrink-0 transition-colors ${
                      isActive
                        ? "text-red-100"
                        : "text-slate-400 group-hover:text-slate-600"
                    }`}
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="truncate">{section.label}</span>
                </a>
              );
            })}
          </nav>

          <div className="pt-3 border-t border-slate-100">
            <div className="bg-slate-50 rounded-xl p-3 border border-slate-100 text-[11px] text-slate-600 space-y-1">
              <span className="font-bold text-slate-800 block">
                5-Judge SC Rule (2020)
              </span>
              <p className="text-[10px] leading-relaxed text-slate-500">
                RBI-licensed UCBs, DCCBs &amp; Multi-State Co-op Banks can invoke SARFAESI directly; credit societies use s.84 / State Registrar Recovery Certificates.
              </p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
