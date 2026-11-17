import Link from "next/link";

interface TOCSection {
  id: string;
  title: string;
  badge?: string;
}

const SECTIONS: TOCSection[] = [
  { id: "interactive-workspace", title: "1. Notice Generator & Workspace", badge: "Interactive" },
  { id: "dual-weapon-strategy", title: "2. The Dual-Weapon Recovery Strategy", badge: "Core SOP" },
  { id: "statutory-framework", title: "3. Statutory Framework & Copyright Hooks", badge: "Bare Act" },
  { id: "precedents-case-law", title: "4. Judicial Precedents & High Court Rulings", badge: "Case Law" },
  { id: "evidence-checklist", title: "5. Evidence Checklist & BSA s.63 Certificate", badge: "Audit" },
  { id: "service-protocol", title: "6. Service Protocol (Email + Post + WhatsApp)", badge: "Compliance" },
  { id: "faqs", title: "7. Frequently Asked Questions", badge: "FAQ" },
];

export default function AgencyNoticeTOC() {
  return (
    <>
      {/* Mobile Sticky Bar */}
      <div className="lg:hidden sticky top-20 z-30 bg-slate-50/95 backdrop-blur-sm border-b border-slate-200 py-3 px-4 -mx-4 sm:-mx-6 mb-4">
        <div className="flex items-center justify-between text-xs text-slate-600 mb-1.5 font-bold uppercase tracking-wider">
          <span>Table of Contents</span>
          <span className="text-[#DC2626]">7 Sections</span>
        </div>
        <div className="flex gap-2 overflow-x-auto pb-1 text-xs no-scrollbar">
          {SECTIONS.map((sec) => (
            <a
              key={sec.id}
              href={`#${sec.id}`}
              className="shrink-0 px-3 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 hover:border-[#DC2626] hover:text-[#DC2626] transition-colors"
            >
              {sec.title}
            </a>
          ))}
        </div>
      </div>

      {/* Desktop Sticky Sidebar */}
      <aside className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start">
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-4">
          <div className="border-b border-slate-100 pb-3">
            <span className="text-xs uppercase tracking-wider font-bold text-slate-400 block mb-1">
              Template Navigation
            </span>
            <p className="text-sm font-bold text-slate-900 leading-snug">
              Agency Notice & IP Revocation SOP
            </p>
          </div>

          <nav className="space-y-1.5">
            {SECTIONS.map((sec) => (
              <a
                key={sec.id}
                href={`#${sec.id}`}
                className="group flex items-center justify-between p-2.5 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors"
              >
                <span className="truncate group-hover:text-[#DC2626] transition-colors">
                  {sec.title}
                </span>
                {sec.badge && (
                  <span className="ml-2 text-[10px] px-1.5 py-0.5 rounded font-bold uppercase tracking-wider bg-slate-100 text-slate-500 group-hover:bg-red-50 group-hover:text-[#DC2626] transition-colors">
                    {sec.badge}
                  </span>
                )}
              </a>
            ))}
          </nav>

          <div className="pt-4 border-t border-slate-100 space-y-3">
            <div className="bg-red-50 border border-red-200 rounded-xl p-3 text-[11px] text-red-900 leading-relaxed font-medium">
              <strong className="block text-red-700 font-bold mb-1">Dual-Weapon Injunction</strong>
              Combine unpaid media spend recovery with Section 51 Copyright Infringement to bypass mandatory mediation.
            </div>

            <div className="space-y-2">
              <Link
                href="/user/new-recovery"
                className="block text-center w-full py-2.5 px-3 rounded-xl bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs font-bold shadow-sm transition-all"
              >
                Serve Notice via Advocate (₹999)
              </Link>
              <Link
                href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                className="block text-center w-full py-2 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-[11px] font-semibold transition-all"
              >
                Bulk Agency Recovery (10+ Accounts)
              </Link>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
