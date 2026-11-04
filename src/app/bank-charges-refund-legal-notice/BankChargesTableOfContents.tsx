"use client";

import React, { useEffect, useState } from "react";

interface BankChargesTableOfContentsProps {
  items: {
    id: string;
    title: string;
  }[];
}

export default function BankChargesTableOfContents({
  items,
}: BankChargesTableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0% -60% 0%" }
    );

    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [items]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -90;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <nav className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 my-6 sm:my-8">
      <div className="flex items-center gap-2 mb-3">
        <svg
          className="w-5 h-5 text-red-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h7"
          />
        </svg>
        <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
          Table of Contents (Jump to Guide Section)
        </h3>
      </div>
      <ol className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 text-xs sm:text-sm">
        {items.map((item, index) => {
          const isActive = activeId === item.id;
          return (
            <li key={item.id} className="flex items-start">
              <span className="text-slate-400 font-mono mr-2 select-none">
                {String(index + 1).padStart(2, "0")}.
              </span>
              <a
                href={`#${item.id}`}
                onClick={(e) => handleClick(e, item.id)}
                className={`transition-colors duration-150 leading-snug ${
                  isActive
                    ? "text-red-600 font-semibold underline decoration-2 underline-offset-4"
                    : "text-slate-700 hover:text-red-600"
                }`}
              >
                {item.title}
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
