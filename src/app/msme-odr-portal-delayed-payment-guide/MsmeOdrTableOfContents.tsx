"use client";

import React, { useEffect, useState } from "react";

export interface TocItem {
  id: string;
  title: string;
}

interface MsmeOdrTableOfContentsProps {
  items: TocItem[];
}

export default function MsmeOdrTableOfContents({ items }: MsmeOdrTableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>(items[0]?.id || "");
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0px -65% 0px", threshold: 0 }
    );

    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  const handleScroll = (id: string) => {
    setActiveId(id);
    setIsMobileOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      {/* Mobile Accordion TOC */}
      <div className="lg:hidden mb-6 bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
        <button
          type="button"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="w-full px-4 py-3.5 text-left font-bold text-slate-900 text-xs sm:text-sm flex items-center justify-between bg-slate-50 cursor-pointer"
          aria-expanded={isMobileOpen}
        >
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
            On This Page: MSME ODR Portal Guide
          </span>
          <span className="text-slate-500 font-extrabold text-sm">
            {isMobileOpen ? "−" : "+"}
          </span>
        </button>
        {isMobileOpen && (
          <nav aria-label="Mobile Table of Contents" className="p-3 border-t border-slate-200">
            <ul className="space-y-1.5 text-xs">
              {items.map((item, index) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => handleScroll(item.id)}
                    className={`w-full text-left px-2.5 py-1.5 rounded-lg transition-colors cursor-pointer ${
                      activeId === item.id
                        ? "bg-red-50 text-[#DC2626] font-bold"
                        : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                    }`}
                  >
                    {index + 1}. {item.title}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>

      {/* Desktop Sticky Sidebar TOC */}
      <aside className="hidden lg:block sticky top-24 bg-white rounded-2xl border border-slate-200 p-5 shadow-xs">
        <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100">
          <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
          <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-900">
            MSME ODR Guide Contents
          </h2>
        </div>
        <nav aria-label="Table of Contents">
          <ul className="space-y-1.5 text-xs">
            {items.map((item, index) => {
              const isActive = activeId === item.id;
              return (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => handleScroll(item.id)}
                    className={`w-full text-left px-2.5 py-2 rounded-lg transition-all leading-snug cursor-pointer ${
                      isActive
                        ? "bg-red-50 text-[#DC2626] font-bold border-l-2 border-[#DC2626]"
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                    }`}
                  >
                    <span className="text-slate-400 mr-1.5 font-mono">{index + 1}.</span>
                    {item.title}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
    </>
  );
}
