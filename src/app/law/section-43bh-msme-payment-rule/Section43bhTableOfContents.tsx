'use client';

import React, { useEffect, useState } from 'react';

export interface TocItem {
  id: string;
  label: string;
}

interface Section43bhTableOfContentsProps {
  items: TocItem[];
}

export default function Section43bhTableOfContents({ items }: Section43bhTableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>(items[0]?.id || '');
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160;
      let current = items[0]?.id || '';

      for (const item of items) {
        const element = document.getElementById(item.id);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            current = item.id;
          }
        }
      }
      setActiveId(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [items]);

  const scrollToSection = (id: string) => {
    setIsMobileOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -110;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveId(id);
    }
  };

  return (
    <>
      {/* Mobile Accordion TOC */}
      <div className="lg:hidden mb-6 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <button
          type="button"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="w-full px-4 py-3.5 flex items-center justify-between text-left bg-slate-50 hover:bg-slate-100 transition-colors"
          aria-expanded={isMobileOpen}
        >
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#C92A2A]" />
            <span className="text-xs font-extrabold uppercase tracking-wider text-slate-800">
              Section 43B(h) Rulebook Q&amp;A Index ({items.length} Sections)
            </span>
          </div>
          <span
            className={`text-slate-500 font-bold transition-transform duration-200 ${
              isMobileOpen ? 'rotate-180' : ''
            }`}
          >
            ↓
          </span>
        </button>

        {isMobileOpen && (
          <nav aria-label="Mobile Table of Contents" className="p-3 border-t border-slate-200 max-h-80 overflow-y-auto">
            <ul className="space-y-1">
              {items.map((item, idx) => {
                const isActive = activeId === item.id;
                return (
                  <li key={item.id}>
                    <button
                      type="button"
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition-colors flex items-start gap-2 ${
                        isActive
                          ? 'bg-red-50 text-[#C92A2A] font-bold'
                          : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                      }`}
                    >
                      <span className="text-[10px] font-bold text-slate-400 mt-0.5 shrink-0">
                        {String(idx + 1).padStart(2, '0')}.
                      </span>
                      <span className="leading-snug">{item.label}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>
        )}
      </div>

      {/* Desktop Sticky Sidebar TOC */}
      <aside className="hidden lg:block w-72 xl:w-80 shrink-0 sticky top-28 self-start">
        <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm">
          <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100">
            <span className="w-2 h-2 rounded-full bg-[#C92A2A]" />
            <span className="text-xs font-extrabold uppercase tracking-wider text-slate-900">
              Rulebook Q&amp;A Contents
            </span>
          </div>

          <nav aria-label="Table of Contents" className="max-h-[calc(100vh-220px)] overflow-y-auto pr-1">
            <ul className="space-y-1">
              {items.map((item, idx) => {
                const isActive = activeId === item.id;
                return (
                  <li key={item.id}>
                    <button
                      type="button"
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs transition-all flex items-start gap-2 cursor-pointer ${
                        isActive
                          ? 'bg-red-50 text-[#C92A2A] font-bold border-l-2 border-[#C92A2A]'
                          : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 font-medium'
                      }`}
                    >
                      <span
                        className={`text-[10px] font-bold mt-0.5 shrink-0 ${
                          isActive ? 'text-[#C92A2A]' : 'text-slate-400'
                        }`}
                      >
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <span className="leading-snug">{item.label}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="mt-4 pt-3 border-t border-slate-100">
            <div className="p-3 rounded-xl bg-slate-900 text-white space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-wider font-extrabold text-amber-400">
                  Tax Audit Leverage
                </span>
                <span className="text-[10px] font-semibold text-slate-400">Sec 43B(h) + Sec 16</span>
              </div>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                Put the buyer&apos;s CFO &amp; Statutory Tax Auditor on formal notice before Form 3CD Clause 22 sign-off.
              </p>
              <a
                href="#heading-cta-block"
                className="mt-1 inline-block w-full text-center py-1.5 px-3 rounded-lg bg-[#C92A2A] hover:bg-red-700 text-white font-bold text-xs transition-colors"
              >
                Draft 43B(h) Demand Notice →
              </a>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
