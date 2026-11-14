"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PaymentModal } from "@/components/PaymentModal";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";

export default function NbfcBenchmarksCTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const basePrice = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition;

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Track 1: Self-Serve Single Case Test */}
        <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-7 border border-slate-800 shadow-xl flex flex-col justify-between space-y-5">
          <div>
            <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-red-950/70 text-red-400 border border-red-800/60 mb-3">
              Track 1 &bull; Self-Serve Single Account Test
            </span>
            <p className="text-lg sm:text-xl font-black text-white mb-2">
              Test 1 Live Overdue Case Now (₹{basePrice})
            </p>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Advocate-drafted statutory demand notice (Section 25 PSS Act / Section 138 NI Act / Loan Recall) dispatched via verified Email + WhatsApp under BSA s.63. Optional Speed Post RPAD at ₹450.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center justify-center px-5 py-3 rounded-xl font-bold text-xs sm:text-sm bg-[#DC2626] hover:bg-[#B91C1C] text-white transition-colors shadow-lg shadow-red-900/30 cursor-pointer"
            >
              Launch ₹{basePrice} Notice Test →
            </button>
            <Link
              href="/user/new-recovery"
              className="inline-flex items-center justify-center px-4 py-3 rounded-xl font-bold text-xs sm:text-sm bg-slate-800 hover:bg-slate-700 text-slate-100 border border-slate-700 transition-colors"
            >
              Open Recovery Portal
            </Link>
          </div>
        </div>

        {/* Track 2: Enterprise / Institutional Batch Desk */}
        <div className="bg-white text-slate-900 rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm flex flex-col justify-between space-y-5">
          <div>
            <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700 border border-slate-300 mb-3">
              Track 2 &bull; NBFC &amp; Fintech Batch Desk
            </span>
            <p className="text-lg sm:text-xl font-black text-slate-900 mb-2">
              Have 10 to 10,000+ Defaulters? Upload CSV
            </p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Activate our dedicated institutional wave engine for SMA-0/1/2 and NPA cohorts with automated UMRN/NPCI ingestion, BSA s.63 certificates, and India Post RPAD tracking logs.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Link
              href="/bulk-recovery-cases-all-in-one-affordable-solutions"
              className="inline-flex items-center justify-center px-5 py-3 rounded-xl font-bold text-xs sm:text-sm bg-slate-900 hover:bg-slate-800 text-white transition-colors"
            >
              Bulk CSV Solutions →
            </Link>
            <Link
              href="/user/representees"
              className="inline-flex items-center justify-center px-4 py-3 rounded-xl font-bold text-xs sm:text-sm bg-slate-100 hover:bg-slate-200 text-slate-900 border border-slate-300 transition-colors"
            >
              Manage Representees
            </Link>
          </div>
        </div>
      </div>

      <PaymentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
