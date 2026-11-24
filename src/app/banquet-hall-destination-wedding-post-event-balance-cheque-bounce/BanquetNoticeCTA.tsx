"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Building2 } from "lucide-react";

export default function BanquetNoticeCTA() {
  return (
    <div className="w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-slate-700/80 rounded-2xl p-6 sm:p-8 md:p-10 text-white shadow-xl relative overflow-hidden">
      <div className="absolute -right-16 -top-16 w-64 h-64 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider text-red-400 bg-red-950/80 border border-red-800/80 mb-4">
          <Building2 className="w-3.5 h-3.5" /> Hospitality, Banquet &amp; Resort Recovery Desk
        </div>

        <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight mb-3">
          Host Stopped Payment on Your Wedding Balance Cheque? Trigger the 15-Day Clock Now.
        </h3>

        <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8 max-w-3xl">
          Under Section 138 of the Negotiable Instruments Act, you have strictly <strong>30 days</strong> from the Bank Return Memo to dispatch a statutory demand notice. Do not let a wedding host stall your cash flow with post-event excuses—serve a Fact-verified notice today.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          {/* Track 1: Self-Serve ₹999 */}
          <div className="bg-slate-800/90 border border-slate-700 rounded-xl p-5 sm:p-6 flex flex-col justify-between hover:border-red-500/50 transition-colors">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 px-2.5 py-1 rounded">
                  Track 1 — Self-Serve Single Case Test
                </span>
                <span className="text-xl font-black text-white">₹999</span>
              </div>
              <h4 className="text-base font-bold text-white mb-2">
                Test 1 Live Overdue Case Now (Fact-Verified s.138 Notice)
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Serve an enforceable NI Act s.138 + Contract Act s.74 statutory demand notice citing signed BEOs, extra-pax slips, and bar tallies—dispatched via Email, WhatsApp &amp; Speed Post RPAD.
              </p>
              <ul className="space-y-1.5 text-xs text-slate-300 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  Pre-empts post-event &quot;cold food&quot; / service excuses
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  Triggers strict 15-day criminal prosecution window
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  Claims 20% interim compensation right under s.143A
                </li>
              </ul>
            </div>
            <Link
              href="/user/new-recovery"
              className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs sm:text-sm font-bold transition-all shadow-md text-center"
            >
              Start ₹999 Single Notice Now <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Track 2: Bulk CSV Institutional */}
          <div className="bg-slate-800/90 border border-slate-700 rounded-xl p-5 sm:p-6 flex flex-col justify-between hover:border-slate-500 transition-colors">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-950/60 px-2.5 py-1 rounded">
                  Track 2 — Hotel Chain &amp; Venue Group Desk
                </span>
                <span className="text-xs font-bold text-slate-400">10–10,000+ Cases</span>
              </div>
              <h4 className="text-base font-bold text-white mb-2">
                Have 10 to 10,000+ Defaulters? Upload CSV / Activate Dedicated Desk
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Built for luxury wedding resort chains, convention centres, and multi-city banquet groups clearing seasonal shaadi bounced cheques, corporate BTC arrears, and MICE attrition dues.
              </p>
              <ul className="space-y-1.5 text-xs text-slate-300 mb-6">
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                  Bulk CSV upload of dishonoured cheques &amp; event folios
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                  Automated Email + WhatsApp + Speed Post RPAD tracking
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                  Representee dashboard for Finance Controllers &amp; GMs
                </li>
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <Link
                href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                className="inline-flex items-center justify-center gap-2 flex-1 py-3 px-3 rounded-xl bg-slate-700 hover:bg-slate-600 text-white text-xs font-bold transition-all text-center"
              >
                Bulk CSV Solutions <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/user/representees"
                className="inline-flex items-center justify-center gap-2 flex-1 py-3 px-3 rounded-xl bg-white text-slate-900 hover:bg-slate-100 text-xs font-bold transition-all text-center"
              >
                Institutional Portal <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
