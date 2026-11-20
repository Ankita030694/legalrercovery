"use client";

import Link from "next/link";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";

interface FranchisorNoticeCTAProps {
  title?: string;
  subtitle?: string;
}

export default function FranchisorNoticeCTA({
  title = "Enforce Royalty Recovery & Signboard De-Branding Across Your Franchise Network",
  subtitle = "Stop rogue or defaulting franchisees from eroding brand equity and skimming store revenues. Deploy advocate-issued Stage 1 Cure and Stage 2 Termination + IP Takedown notices with BSA s.63 delivery proof.",
}: FranchisorNoticeCTAProps) {
  const singleNoticePrice = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition;

  return (
    <section className="bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] border border-slate-800 rounded-3xl p-6 sm:p-8 md:p-10 text-white shadow-xl">
      <div className="max-w-4xl mx-auto space-y-6 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60">
          <span>Dual-Track Franchisor & OEM Enforcement Desk</span>
        </div>

        <h2 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-white leading-tight">
          {title}
        </h2>

        <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>

        {/* Dual-Track B2B Conversion Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left pt-2">
          {/* Track 1: Self-Serve Single Case Test */}
          <div className="bg-slate-900/90 border border-red-800/50 rounded-2xl p-5 flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <div className="inline-block px-2.5 py-0.5 rounded bg-red-950 text-red-400 text-[10px] font-bold uppercase tracking-wider">
                Track 1 · Single Outlet / Dealer
              </div>
              <p className="text-base font-bold text-white">
                Test 1 Live Overdue Case Now (₹{singleNoticePrice} · Advocate Drafted)
              </p>
              <p className="text-xs text-slate-300 leading-relaxed">
                Issue an advocate-signed Stage 1 Cure Notice or Stage 2 Termination &amp; Signboard De-Branding Notice via Email, WhatsApp &amp; Speed Post RPAD with tracked delivery logs.
              </p>
            </div>
            <Link
              href="/user/new-recovery"
              className="block w-full py-3 px-4 rounded-xl bg-[#DC2626] hover:bg-[#B91C1C] text-white font-bold text-xs sm:text-sm tracking-wide shadow-lg shadow-red-900/30 transition-all text-center"
            >
              Draft &amp; Serve Notice (₹{singleNoticePrice} Test)
            </Link>
          </div>

          {/* Track 2: Enterprise / Institutional Batch Desk */}
          <div className="bg-white text-slate-900 border border-slate-200 rounded-2xl p-5 flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <div className="inline-block px-2.5 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-bold uppercase tracking-wider">
                Track 2 · Multi-City Franchise &amp; Dealer Chains
              </div>
              <p className="text-base font-bold text-slate-900">
                Have 10 to 10,000+ Defaulters? Upload CSV / Activate Institutional Desk
              </p>
              <p className="text-xs text-slate-600 leading-relaxed">
                Centralize royalty, MMG, commissary, and post-termination IP takedowns across QSR, salon, preschool, or EV dealership networks with unified reply triage and Section 9/21 escalation.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <Link
                href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                className="flex-1 py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs tracking-wide transition-all text-center"
              >
                Bulk CSV Recovery Desk
              </Link>
              <Link
                href="/user/representees"
                className="py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs tracking-wide transition-all text-center"
              >
                Entity Portal
              </Link>
            </div>
          </div>
        </div>

        <p className="text-[11px] text-slate-400 text-center">
          Drafted and dispatched by enrolled commercial advocates under the Advocates Act, 1961 with Section 63 BSA 2023 electronic service certificates and General Clauses Act s.27 RPAD tracking.
        </p>
      </div>
    </section>
  );
}
