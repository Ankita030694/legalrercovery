"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PaymentModal } from "@/components/PaymentModal";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";

interface StudyAbroadCommissionCTAProps {
  className?: string;
  variant?: "dual" | "compact";
}

export default function StudyAbroadCommissionCTA({
  className = "",
  variant = "dual",
}: StudyAbroadCommissionCTAProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const basePrice = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition;

  return (
    <>
      <div className={`w-full ${className}`}>
        {variant === "dual" ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            {/* Track 1: Self-Serve Single Case Test */}
            <div className="bg-gradient-to-br from-[#111827] via-[#1F2937] to-[#111827] text-white rounded-2xl p-6 sm:p-7 border border-slate-800 shadow-xl flex flex-col justify-between">
              <div>
                <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase bg-red-950/80 text-red-400 border border-red-800/60 mb-3">
                  Track 1 &bull; Single Aggregator Test
                </span>
                <h3 className="text-lg sm:text-xl font-black text-white leading-snug mb-2">
                  Test 1 Live Overdue Case Now (&rupee;{basePrice} &middot; Fact-Verified)
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                  Serve a Contract Act s.213 accounting &amp; Order XXXVII pre-suit demand notice on your defaulting master aggregator via Email + WhatsApp + Speed Post RPAD.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center justify-center px-5 py-3 rounded-xl font-bold text-white bg-[#DC2626] hover:bg-[#B91C1C] transition-colors shadow-lg shadow-red-900/30 text-xs sm:text-sm cursor-pointer text-center"
                >
                  Start &rupee;{basePrice} Test Notice
                </button>
                <Link
                  href="/user/new-recovery"
                  className="inline-flex items-center justify-center px-4 py-3 rounded-xl font-semibold text-slate-200 bg-white/10 hover:bg-white/15 border border-white/15 transition-colors text-xs sm:text-sm text-center"
                >
                  Open Self-Serve Portal &rarr;
                </Link>
              </div>
            </div>

            {/* Track 2: Enterprise / Institutional Batch Desk */}
            <div className="bg-white text-slate-900 rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase bg-slate-100 text-slate-700 border border-slate-200 mb-3">
                  Track 2 &bull; Multi-Intake / Multi-Branch Desk
                </span>
                <h3 className="text-lg sm:text-xl font-black text-slate-900 leading-snug mb-2">
                  Have 10 to 10,000+ Defaulters or Multi-Intake Student Ledgers?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                  Upload a CSV of stalled CAS/CoE student IDs, multi-aggregator balances, or regional branch receivables to activate a dedicated Institutional Representee Desk.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                  className="inline-flex items-center justify-center px-5 py-3 rounded-xl font-bold text-white bg-slate-900 hover:bg-slate-800 transition-colors text-xs sm:text-sm text-center"
                >
                  Explore Bulk CSV Solutions
                </Link>
                <Link
                  href="/user/representees"
                  className="inline-flex items-center justify-center px-4 py-3 rounded-xl font-bold text-[#DC2626] bg-red-50 hover:bg-red-100 border border-red-200 transition-colors text-xs sm:text-sm text-center"
                >
                  Activate Representee Desk &rarr;
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#DC2626] hover:bg-[#B91C1C] transition-colors cursor-pointer"
            >
              Send &rupee;{basePrice} Commission Demand Notice
            </button>
            <Link
              href="/bulk-recovery-cases-all-in-one-affordable-solutions"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-slate-900 bg-white border border-slate-300 hover:bg-slate-50 transition-colors"
            >
              Bulk CSV Intake Desk &rarr;
            </Link>
          </div>
        )}
      </div>

      <PaymentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
