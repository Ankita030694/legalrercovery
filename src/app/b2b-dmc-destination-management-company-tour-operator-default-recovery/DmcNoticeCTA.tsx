"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PaymentModal } from "@/components/PaymentModal";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";

interface DmcNoticeCTAProps {
  className?: string;
  variant?: "dual" | "compact";
}

export default function DmcNoticeCTA({
  className = "",
  variant = "dual",
}: DmcNoticeCTAProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const basePrice = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition;

  return (
    <>
      <div className={`w-full ${className}`}>
        {variant === "dual" ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {/* Track 1: Self-Serve Single Case Test */}
            <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-7 border border-slate-800 shadow-xl flex flex-col justify-between">
              <div>
                <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-red-950/70 text-red-400 border border-red-800/60 mb-3">
                  Track 1 &bull; Single Travel Agent / FTO Defaulter
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                  Test 1 Live Overdue Case Now (&rupee;{basePrice} &bull; Advocate Drafted)
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                  Send an Advocate-drafted statutory &amp; criminal-forgery demand notice via Email, WhatsApp, and Speed Post RPAD citing BNS 2023 s.318 &amp; s.336/340, NI Act s.138, and Order XXXVII CPC.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="flex-1 inline-flex items-center justify-center px-5 py-3 rounded-xl font-bold text-white bg-[#DC2626] hover:bg-[#B91C1C] transition-colors text-xs sm:text-sm cursor-pointer shadow-lg shadow-red-950/40"
                >
                  Start &rupee;{basePrice} Advocate Notice &rarr;
                </button>
                <Link
                  href="/user/new-recovery"
                  className="inline-flex items-center justify-center px-4 py-3 rounded-xl font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors text-xs sm:text-sm text-center"
                >
                  File Case Online
                </Link>
              </div>
            </div>

            {/* Track 2: Enterprise / Institutional Batch Desk */}
            <div className="bg-white text-slate-900 rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700 border border-slate-200 mb-3">
                  Track 2 &bull; DMC &amp; Tour Operator Ledger Desk
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                  Have 10 to 10,000+ Defaulters? Upload CSV / Activate Institutional Desk
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                  Closing peak-season ledgers across Goa, Kerala, Rajasthan, Kashmir, Dubai, or Thailand? Upload your overdue sub-agent and FTO ledger in bulk and trigger automated multi-channel advocate notices.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                  className="flex-1 inline-flex items-center justify-center px-5 py-3 rounded-xl font-bold text-white bg-[#DC2626] hover:bg-[#B91C1C] transition-colors text-xs sm:text-sm text-center"
                >
                  Explore Bulk CSV Recovery &rarr;
                </Link>
                <Link
                  href="/user/representees"
                  className="inline-flex items-center justify-center px-4 py-3 rounded-xl font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-300 transition-colors text-xs sm:text-sm text-center"
                >
                  Institutional Desk
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
              Send &rupee;{basePrice} DMC Recovery Notice
            </button>
            <Link
              href="/bulk-recovery-cases-all-in-one-affordable-solutions"
              className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-800 bg-white border border-slate-300 hover:bg-slate-100 transition-colors"
            >
              Bulk CSV Desk (10–10,000+ Cases)
            </Link>
          </div>
        )}
      </div>

      <PaymentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialCaseType="B2B DMC & Tour Operator Default"
      />
    </>
  );
}
