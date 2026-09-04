'use client';

import { useEffect, useState, useRef } from 'react';

interface Section {
  id: string;
  title: string;
}

interface TableOfContentsProps {
  sections: Section[];
  orientation?: 'horizontal' | 'vertical';
}

export default function TableOfContents({ sections, orientation = 'horizontal' }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting);
        if (visibleEntry) {
          setActiveId(visibleEntry.target.id);
        }
      },
      { rootMargin: '-100px 0px -40% 0px', threshold: 0 }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((section) => {
        const el = document.getElementById(section.id);
        if (el) observer.unobserve(el);
      });
    };
  }, [sections]);

  // Auto-scroll the active horizontal item into view on mobile
  useEffect(() => {
    if (activeId && containerRef.current) {
      const activeEl = containerRef.current.querySelector(`[data-id="${activeId}"]`) as HTMLElement;
      if (activeEl) {
        activeEl.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center',
        });
      }
    }
  }, [activeId]);

  if (sections.length === 0) return null;

  if (orientation === 'vertical') {
    return (
      <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
        <p className="text-xs font-black text-gray-400 uppercase tracking-wider mb-4">Table of Contents</p>
        <nav className="space-y-2.5">
          {sections.map((section) => {
            const isActive = activeId === section.id;
            return (
              <a
                key={section.id}
                href={`#${section.id}`}
                data-id={section.id}
                className={`block text-xs font-extrabold leading-relaxed transition-all border-l-2 pl-3 ${
                  isActive
                    ? 'border-[#DC2626] text-[#DC2626] font-black'
                    : 'border-transparent text-gray-400 hover:text-gray-900 hover:border-gray-200'
                }`}
              >
                {section.title}
              </a>
            );
          })}
        </nav>
      </div>
    );
  }

  // Mobile / Horizontal layout
  return (
    <div className="bg-white p-4 sm:p-5 rounded-2xl border border-gray-100 shadow-sm select-none">
      <div className="flex items-center justify-between mb-3">
        <p className="text-xs font-black text-gray-400 uppercase tracking-wider flex items-center">
          <span className="w-1.5 h-3 bg-[#DC2626] rounded-full mr-2"></span>
          Table of Contents
        </p>
        <span className="text-[9px] font-extrabold text-slate-400 uppercase tracking-wider">
          Swipe →
        </span>
      </div>
      <div 
        ref={containerRef}
        className="flex flex-row gap-2 overflow-x-auto scrollbar-hide -mx-4 px-4 pb-1"
      >
        {sections.map((section) => {
          const isActive = activeId === section.id;
          return (
            <a
              key={section.id}
              href={`#${section.id}`}
              data-id={section.id}
              className={`px-3 py-1.5 text-xs font-bold rounded-xl border transition-all inline-block whitespace-nowrap flex-shrink-0 ${
                isActive
                  ? 'bg-[#DC2626]/10 border-[#DC2626] text-[#DC2626] font-black'
                  : 'bg-gray-50 border-gray-100 text-gray-500 hover:bg-gray-100 hover:text-gray-900'
              }`}
            >
              {section.title}
            </a>
          );
        })}
      </div>
    </div>
  );
}
