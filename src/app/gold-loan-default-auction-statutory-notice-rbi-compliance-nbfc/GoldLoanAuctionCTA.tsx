"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PaymentModal } from "@/components/PaymentModal";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";

interface GoldLoanAuctionCTAProps {
  className?: string;
}

export default function GoldLoanAuctionCTA({ className = "" }: GoldLoanAuctionCTAProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const basePrice = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition;

  return (
    <>
      <div className={`w-full grid grid-cols-1 lg:grid-cols-2 gap-5 ${className}`}>
        {/* Track 1 — Self-Serve Single Case Test */}
        <div className="bg-gradient-to-br from-[#111827] via-[#1F2937] to-[#111827] text-white rounded-2xl p-6 sm:p-7 border border-slate-800 shadow-xl flex flex-col justify-between">
          <div>
            <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-red-950/70 text-red-400 border border-red-800/60 mb-3">
              Track 1 &bull; Single-Account Compliance Pilot
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2.5 leading-snug">
              Test 1 Live Overdue Case Now
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-5">
              &#8377;{basePrice} &middot; Advocate Drafted &middot; Email + WhatsApp + Speed Post RPAD. Issue an audit-proof Section 176 pre-auction notice or post-auction deficit recovery demand with BSA 2023 s.63 delivery logs.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center justify-center px-5 py-3 rounded-xl font-semibold text-white bg-[#DC2626] hover:bg-[#B91C1C] transition-colors text-xs sm:text-sm cursor-pointer shadow-lg shadow-red-900/30"
            >
              Dispatch 1 Test Notice (&rupee;{basePrice})
            </button>
            <Link
              href="/user/new-recovery"
              className="inline-flex items-center justify-center px-4 py-3 rounded-xl font-semibold text-slate-200 bg-white/10 hover:bg-white/15 border border-white/15 transition-colors text-xs sm:text-sm"
            >
              Open Self-Serve Portal &rarr;
            </Link>
          </div>
        </div>

        {/* Track 2 — Enterprise / Institutional Batch Desk */}
        <div className="bg-white text-slate-900 rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm flex flex-col justify-between">
          <div>
            <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-slate-100 text-slate-800 border border-slate-200 mb-3">
              Track 2 &bull; NBFC &amp; Bank Auction Desk
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2.5 leading-snug">
              Have 10 to 10,000+ Defaulters?
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5">
              Upload CSV / Activate Dedicated Institutional Desk. Automate multi-branch vernacular Section 176 pre-auction notices, LTV margin-call batches, and post-auction deficit recovery across talukas under one Representee billing desk.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/bulk-recovery-cases-all-in-one-affordable-solutions"
              className="inline-flex items-center justify-center px-5 py-3 rounded-xl font-semibold text-white bg-slate-900 hover:bg-slate-800 transition-colors text-xs sm:text-sm text-center"
            >
              Explore Bulk CSV Engine
            </Link>
            <Link
              href="/user/representees"
              className="inline-flex items-center justify-center px-4 py-3 rounded-xl font-semibold text-[#DC2626] bg-red-50 hover:bg-red-100 border border-red-200 transition-colors text-xs sm:text-sm text-center"
            >
              Activate Representee Desk &rarr;
            </Link>
          </div>
        </div>
      </div>

      <PaymentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
