"use client";

import React, { useEffect, useState } from "react";

interface SectionItem {
  id: string;
  title: string;
}

interface TableOfContentsProps {
  sections: SectionItem[];
}

export default function SponsorshipRecoveryTableOfContents({
  sections,
}: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>(sections[0]?.id || "");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i].id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveId(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Mobile Sticky Bar */}
      <div className="lg:hidden sticky top-20 z-30 bg-slate-50/95 backdrop-blur-sm border-b border-slate-200 py-3 px-4 -mx-4 sm:-mx-6 mb-4">
        <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
          Table of Contents
        </p>
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-thin">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              onClick={(e) => scrollToSection(e, section.id)}
              className={`text-xs whitespace-nowrap px-3 py-1.5 rounded-lg transition-colors font-medium shrink-0 ${
                activeId === section.id
                  ? "bg-[#DC2626] text-white font-bold shadow-sm"
                  : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
              }`}
            >
              {section.title}
            </a>
          ))}
        </div>
      </div>

      {/* Desktop Sticky Aside */}
      <aside className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
        <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4 pb-2 border-b border-slate-100">
          On This Page (Recovery SOP)
        </p>
        <nav className="space-y-1">
          {sections.map((section, idx) => {
            const isActive = activeId === section.id;
            return (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={(e) => scrollToSection(e, section.id)}
                className={`group flex items-start gap-2 text-xs py-2 px-2.5 rounded-lg transition-all ${
                  isActive
                    ? "bg-[#DC2626] text-white font-bold shadow-sm"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                <span
                  className={`shrink-0 w-4 text-[10px] font-bold text-center mt-0.5 ${
                    isActive ? "text-white" : "text-slate-400 group-hover:text-slate-600"
                  }`}
                >
                  {idx + 1}.
                </span>
                <span className="leading-snug">{section.title}</span>
              </a>
            );
          })}
        </nav>

        <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] text-slate-500 space-y-2">
          <p className="font-semibold text-slate-700">Legal Recovery Desk</p>
          <p>
            Summary Suit CPC Order 37 + MSMED Act s.16 compound interest mechanism for event & sports IP organizers.
          </p>
        </div>
      </aside>
    </>
  );
}
