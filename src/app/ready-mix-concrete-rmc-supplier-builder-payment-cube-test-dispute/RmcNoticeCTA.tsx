"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PaymentModal } from "@/components/PaymentModal";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";

interface RmcNoticeCTAProps {
  buttonText?: string;
  className?: string;
  variant?: "dual" | "inline";
}

export default function RmcNoticeCTA({
  buttonText = "Test 1 Live Overdue Case Now",
  className = "",
  variant = "dual",
}: RmcNoticeCTAProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const basePrice = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition;

  return (
    <>
      {variant === "inline" ? (
        <div className={`flex flex-wrap items-center gap-3 ${className}`}>
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center justify-center px-5 py-3 rounded-xl font-bold text-sm text-white bg-[#DC2626] hover:bg-[#B91C1C] shadow-lg shadow-red-900/25 transition-all cursor-pointer"
          >
            {buttonText} (&rupee;{basePrice})
          </button>
          <Link
            href="/bulk-recovery-cases-all-in-one-affordable-solutions"
            className="inline-flex items-center justify-center px-5 py-3 rounded-xl font-bold text-sm text-slate-900 bg-white hover:bg-slate-100 border border-slate-300 shadow-sm transition-all"
          >
            Bulk CSV Desk (10–10,000+ Cases) &rarr;
          </Link>
        </div>
      ) : (
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-5 ${className}`}>
          {/* Track 1: Self-Serve Single Case Test */}
          <div className="bg-gradient-to-br from-[#111827] via-[#1F2937] to-[#111827] text-white rounded-2xl p-6 sm:p-7 border border-slate-800 shadow-xl flex flex-col justify-between">
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-red-950/70 text-red-400 border border-red-800/60 mb-3">
                Track 1 &bull; Self-Serve Single Case Test
              </span>
              <h3 className="text-lg sm:text-xl font-black text-white mb-2">
                Test 1 Live Overdue RMC Case Now (&rupee;{basePrice})
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                Fact-verified statutory notice annexing batching-plant printouts, pour slips, IS 456/IS 516 curing rebuttal, and Sale of Goods Act s.42 acceptance proof &mdash; dispatched via Email + WhatsApp + Speed Post RPAD.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="flex-1 inline-flex items-center justify-center px-5 py-3 rounded-xl font-bold text-sm text-white bg-[#DC2626] hover:bg-[#B91C1C] shadow-lg shadow-red-900/30 transition-all cursor-pointer text-center"
              >
                Start &rupee;{basePrice} Notice Test
              </button>
              <Link
                href="/user/new-recovery"
                className="inline-flex items-center justify-center px-4 py-3 rounded-xl font-bold text-xs sm:text-sm text-slate-200 bg-white/10 hover:bg-white/15 border border-white/15 transition-all text-center"
              >
                Portal Intake &rarr;
              </Link>
            </div>
          </div>

          {/* Track 2: Enterprise / Institutional Batch Desk */}
          <div className="bg-white text-slate-900 rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-md flex flex-col justify-between">
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700 border border-slate-200 mb-3">
                Track 2 &bull; Commercial Concrete &amp; Plant CFO Desk
              </span>
              <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-2">
                Have 10 to 10,000+ Defaulters? Activate Institutional Desk
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                Upload your aged builder &amp; infra-contractor ledger via CSV, standardize Section 63 BSA evidence across multiple batching plants, and track IBC s.8, Order XXXVII &amp; NI Act s.138 escalations from one dashboard.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                className="flex-1 inline-flex items-center justify-center px-5 py-3 rounded-xl font-bold text-sm text-white bg-slate-900 hover:bg-slate-800 transition-all text-center"
              >
                Upload Bulk CSV Ledger
              </Link>
              <Link
                href="/user/representees"
                className="inline-flex items-center justify-center px-4 py-3 rounded-xl font-bold text-xs sm:text-sm text-[#DC2626] bg-red-50 hover:bg-red-100 border border-red-200 transition-all text-center"
              >
                Institutional Desk &rarr;
              </Link>
            </div>
          </div>
        </div>
      )}

      <PaymentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultService="rmc-concrete-cube-dispute-recovery"
        amount={basePrice}
      />
    </>
  );
}
