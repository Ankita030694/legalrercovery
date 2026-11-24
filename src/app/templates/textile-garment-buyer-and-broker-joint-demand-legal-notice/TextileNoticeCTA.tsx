"use client";

import Link from "next/link";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";

interface TextileNoticeCTAProps {
  title?: string;
  subtitle?: string;
}

export default function TextileNoticeCTA({
  title = "Serve Both the Defaulting Textile Buyer & Introducing Broker Today",
  subtitle = "Do not let outstation buyers hide behind stale quality excuses or disappear from the mandi. Dispatch a fact-verified joint demand notice with Bijak/LR schedule and Section 43B(h) tax warning.",
}: TextileNoticeCTAProps) {
  const singleCaseFee = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition;

  return (
    <section className="bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] border border-slate-800 rounded-3xl p-6 sm:p-8 md:p-10 text-white shadow-xl">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60">
            <span>Dual-Track Textile Creditor Enforcement</span>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-white leading-tight">
            {title}
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Side-by-Side Dual-Track B2B Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
          {/* Track 1: Self-Serve Single Case Test */}
          <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6 flex flex-col justify-between space-y-5 shadow-lg">
            <div className="space-y-3">
              <span className="inline-block text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-red-950/80 text-red-400 border border-red-800/60">
                Track 1 · Single Case Test
              </span>
              <h3 className="text-lg font-extrabold text-white">
                Test 1 Live Overdue Case Now
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                ₹{singleCaseFee} · Fact-Verified · Email + WhatsApp + Speed Post RPAD to Buyer (Noticee #1) &amp; Introducing Broker (Noticee #2) with Bijak/LR schedule.
              </p>
            </div>
            <Link
              href="/user/new-recovery"
              className="w-full py-3.5 px-5 rounded-xl bg-[#DC2626] hover:bg-[#B91C1C] text-white font-bold text-sm tracking-wide shadow-lg shadow-red-900/30 transition-all text-center block"
            >
              Start Single Notice (₹{singleCaseFee})
            </Link>
          </div>

          {/* Track 2: Enterprise / Institutional Batch Desk */}
          <div className="bg-white text-slate-900 border border-slate-200 rounded-2xl p-6 flex flex-col justify-between space-y-5 shadow-lg">
            <div className="space-y-3">
              <span className="inline-block text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-slate-100 text-slate-700 border border-slate-200">
                Track 2 · Mill &amp; Wholesale Batch Desk
              </span>
              <h3 className="text-lg font-extrabold text-slate-900">
                Have 10 to 10,000+ Defaulters?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Upload your overdue Bijak &amp; LR ledger CSV or activate a dedicated institutional desk for spinning mills, Surat/Bhiwandi weavers, and garment exporters.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2.5">
              <Link
                href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                className="flex-1 py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm transition-all text-center"
              >
                Upload CSV / Bulk Desk
              </Link>
              <Link
                href="/user/representees"
                className="py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs sm:text-sm border border-slate-200 transition-all text-center"
              >
                Manage Entities
              </Link>
            </div>
          </div>
        </div>

        <p className="text-[11px] text-slate-400 text-center">
          Drafted by enrolled commercial advocates experienced in Surat, Bhiwandi, Tirupur, Ludhiana, and Delhi-NCR textile trade disputes with BSA 2023 s.63 electronic service logs.
        </p>
      </div>
    </section>
  );
}
