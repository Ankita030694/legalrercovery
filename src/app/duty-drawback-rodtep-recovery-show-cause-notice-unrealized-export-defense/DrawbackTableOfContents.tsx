"use client";

import { useEffect, useState } from "react";

interface NavItem {
  id: string;
  label: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: "statutory-framework", label: "1. Section 75 & Rule 18 Framework" },
  { id: "double-jeopardy", label: "2. The Exporter Double-Jeopardy Dilemma" },
  { id: "rule-18-2-exemptions", label: "3. Rule 18(2) RBI & ECGC Safe Harbors" },
  { id: "rodtep-recovery-rules", label: "4. RoDTEP Surrender & E-Scrip Nuance" },
  { id: "statutory-timelines", label: "5. SCN Limitation & Statutory Stops" },
  { id: "legal-precedents", label: "6. Judicial Holdings & High Court Precedents" },
  { id: "defense-playbook", label: "7. SCN Reply Strategy & Evidence Matrix" },
  { id: "interactive-scenarios", label: "8. Real-World Recovery Scenarios" },
  { id: "faqs", label: "9. Frequently Asked Questions" },
];

export default function DrawbackTableOfContents() {
  const [activeId, setActiveId] = useState<string>(NAV_ITEMS[0].id);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160;

      for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
        const item = NAV_ITEMS[i];
        const element = document.getElementById(item.id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveId(item.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
      setActiveId(id);
    }
  };

  return (
    <>
      {/* Mobile Sticky Dropdown/Bar */}
      <div className="lg:hidden sticky top-20 z-30 bg-slate-50/95 backdrop-blur-sm border-b border-slate-200 py-3 px-4 -mx-4 sm:-mx-6 mb-6 shadow-sm">
        <label htmlFor="mobile-toc-select" className="sr-only">
          Navigate statutory defense sections
        </label>
        <select
          id="mobile-toc-select"
          value={activeId}
          onChange={(e) => {
            const id = e.target.value;
            const element = document.getElementById(id);
            if (element) {
              const offsetTop = element.getBoundingClientRect().top + window.scrollY - 100;
              window.scrollTo({ top: offsetTop, behavior: "smooth" });
              setActiveId(id);
            }
          }}
          className="w-full text-xs font-bold text-slate-800 bg-white border border-slate-300 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-[#DC2626]"
        >
          {NAV_ITEMS.map((item) => (
            <option key={item.id} value={item.id}>
              {item.label}
            </option>
          ))}
        </select>
      </div>

      {/* Desktop Sticky Sidebar */}
      <aside className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
        <p className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-4">
          Statutory Defense Index
        </p>
        <nav aria-label="Table of contents">
          <ul className="space-y-1.5 text-xs">
            {NAV_ITEMS.map((item) => {
              const isActive = activeId === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => handleClick(e, item.id)}
                    className={`block px-3 py-2 rounded-lg transition-colors font-medium ${
                      isActive
                        ? "bg-[#DC2626] text-white font-bold shadow-sm"
                        : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="mt-6 pt-5 border-t border-slate-100">
          <div className="bg-red-50 border border-red-200 rounded-xl p-3.5">
            <span className="block text-[11px] font-bold text-[#DC2626] uppercase tracking-wider mb-1">
              Customs SCN Deadline
            </span>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              Section 75 demand requires reply within 30 days. Non-appearance triggers ex-parte drawback cancellation + 15% interest under Section 75A.
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}
