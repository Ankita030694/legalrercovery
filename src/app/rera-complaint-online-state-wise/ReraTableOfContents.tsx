"use client";

import React, { useState, useEffect } from "react";

interface TocItem {
  id: string;
  label: string;
}

interface ReraTableOfContentsProps {
  items: TocItem[];
}

export default function ReraTableOfContents({ items }: ReraTableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>(items[0]?.id || "");
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160;
      let current = items[0]?.id || "";

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

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [items]);

  const scrollToSection = (id: string) => {
    setIsMobileOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveId(id);
    }
  };

  return (
    <>
      {/* Mobile Sticky Collapsible Header */}
      <div className="lg:hidden sticky top-[60px] z-30 w-full bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-xs mb-6 rounded-xl overflow-hidden">
        <button
          type="button"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="w-full px-4 py-3 text-left flex items-center justify-between text-xs font-bold uppercase tracking-wider text-gray-800 bg-gray-50/80"
          aria-expanded={isMobileOpen}
        >
          <span className="flex items-center gap-2 truncate pr-2">
            <span className="w-2 h-2 rounded-full bg-[#DC2626] shrink-0"></span>
            <span className="truncate">
              Jump to Section: {items.find((i) => i.id === activeId)?.label || "Overview"}
            </span>
          </span>
          <span className="text-gray-500 font-extrabold text-sm shrink-0">
            {isMobileOpen ? "▲" : "▼"}
          </span>
        </button>

        {isMobileOpen && (
          <nav
            aria-label="Mobile Table of Contents"
            className="max-h-72 overflow-y-auto bg-white border-t border-gray-100 p-2 divide-y divide-gray-50"
          >
            {items.map((item, idx) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className={`w-full text-left px-3 py-2.5 text-xs rounded-lg transition-colors flex items-start gap-2.5 ${
                  activeId === item.id
                    ? "bg-red-50 text-[#DC2626] font-bold"
                    : "text-gray-600 hover:bg-gray-50 font-medium"
                }`}
              >
                <span className="text-[10px] font-mono text-gray-400 mt-0.5 shrink-0">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <span className="leading-snug">{item.label}</span>
              </button>
            ))}
          </nav>
        )}
      </div>

      {/* Desktop Sticky Sidebar */}
      <aside
        aria-label="Desktop Table of Contents"
        className="hidden lg:block sticky top-28 bg-white rounded-2xl border border-gray-200/90 shadow-xs p-5"
      >
        <div className="flex items-center gap-2 pb-3 mb-3 border-b border-gray-100">
          <span className="w-2 h-2 rounded-full bg-[#DC2626]"></span>
          <h2 className="text-xs font-extrabold uppercase tracking-wider text-gray-900">
            On This Page
          </h2>
        </div>

        <nav className="space-y-1 max-h-[calc(100vh-200px)] overflow-y-auto pr-1">
          {items.map((item, idx) => {
            const isActive = activeId === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className={`w-full text-left px-3 py-2 rounded-xl text-xs transition-all flex items-start gap-2.5 group cursor-pointer ${
                  isActive
                    ? "bg-red-50/90 text-[#DC2626] font-bold border-l-2 border-[#DC2626]"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50 font-medium"
                }`}
              >
                <span
                  className={`text-[10px] font-mono mt-0.5 shrink-0 ${
                    isActive ? "text-[#DC2626] font-bold" : "text-gray-400 group-hover:text-gray-600"
                  }`}
                >
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <span className="leading-snug">{item.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="mt-5 pt-4 border-t border-gray-100">
          <div className="p-3 rounded-xl bg-gray-900 text-white text-xs space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] uppercase tracking-wider font-bold text-red-400">
                Section 18 / 31 RERA
              </span>
              <span className="text-[10px] text-gray-300 font-semibold">Advocate Drafted</span>
            </div>
            <p className="font-bold text-white leading-snug">
              Builder Delaying Possession or Refund? Serve a Statutory Notice First
            </p>
            <a
              href="#heading-cta-block"
              className="block w-full text-center py-2 px-3 rounded-lg bg-[#DC2626] hover:bg-red-700 text-white font-bold text-xs transition-colors"
            >
              Draft Builder Notice →
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}
