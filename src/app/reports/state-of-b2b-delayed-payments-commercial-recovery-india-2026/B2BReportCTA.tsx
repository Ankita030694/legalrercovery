"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PaymentModal } from "@/components/PaymentModal";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";

export default function B2BReportCTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const basePrice = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition;

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 w-full">
        {/* Track 1: Self-Serve Single Case Test */}
        <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-7 border border-slate-800 shadow-xl flex flex-col justify-between space-y-5">
          <div className="space-y-3">
            <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-red-950/80 text-red-400 border border-red-800/60">
              Track 1 &bull; Self-Serve Single Case Test
            </span>
            <p className="text-xl sm:text-2xl font-black text-white leading-snug">
              Test 1 Live Overdue Case Now (₹{basePrice} &middot; Advocate Drafted)
            </p>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Benchmark our pre-litigation cure workflow on a single stuck B2B invoice: enrolled advocate drafting within 24 hours, served via Email + WhatsApp + Speed Post RPAD with BSA 2023 s.63 logs.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="px-5 py-3 rounded-xl font-bold text-xs sm:text-sm bg-[#DC2626] hover:bg-[#B91C1C] text-white transition-colors shadow-lg shadow-red-900/30 cursor-pointer"
            >
              Launch Single Notice — ₹{basePrice}
            </button>
            <Link
              href="/user/new-recovery"
              className="px-4 py-3 rounded-xl font-bold text-xs sm:text-sm bg-slate-800 hover:bg-slate-700 text-slate-100 border border-slate-700 transition-colors"
            >
              Open Self-Serve Desk &rarr;
            </Link>
          </div>
        </div>

        {/* Track 2: Enterprise / Institutional Batch Desk */}
        <div className="bg-white text-slate-900 rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm flex flex-col justify-between space-y-5">
          <div className="space-y-3">
            <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700 border border-slate-200">
              Track 2 &bull; Enterprise &amp; Institutional Batch Desk
            </span>
            <p className="text-xl sm:text-2xl font-black text-slate-900 leading-snug">
              Have 10 to 10,000+ Defaulters? Upload CSV / Activate Institutional Desk
            </p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Built for CFOs, NBFCs, SaaS billing teams, and manufacturing credit controllers: batch-ingest aging ledgers, auto-route by s.43B(h) / s.138 / IBC s.8 thresholds, and track cure rates across branches.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <Link
              href="/bulk-recovery-cases-all-in-one-affordable-solutions"
              className="px-5 py-3 rounded-xl font-bold text-xs sm:text-sm bg-slate-900 hover:bg-slate-800 text-white transition-colors"
            >
              Bulk CSV Recovery Plans
            </Link>
            <Link
              href="/user/representees"
              className="px-4 py-3 rounded-xl font-bold text-xs sm:text-sm border border-[#DC2626] text-[#DC2626] hover:bg-red-50 transition-colors"
            >
              Institutional Representee Desk &rarr;
            </Link>
          </div>
        </div>
      </div>

      <PaymentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
