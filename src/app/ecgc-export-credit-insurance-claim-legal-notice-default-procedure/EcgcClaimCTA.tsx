"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PaymentModal } from "@/components/PaymentModal";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";

interface EcgcClaimCTAProps {
  className?: string;
}

export default function EcgcClaimCTA({ className = "" }: EcgcClaimCTAProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const basePrice = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition;

  return (
    <>
      <div className={`w-full grid grid-cols-1 lg:grid-cols-2 gap-5 ${className}`}>
        {/* Track 1: Self-Serve Single Case Test */}
        <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-7 border border-slate-800 shadow-xl flex flex-col justify-between">
          <div>
            <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-red-950/70 text-red-400 border border-red-800/60 mb-3">
              Track 1 &bull; Self-Serve Single Export Default
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2.5">
              Test 1 Live Overdue Case Now (&#8377;{basePrice} &middot; Advocate Drafted)
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
              Serve an ECGC-audit-ready International Legal Demand Notice via Email + WhatsApp + Speed Post RPAD / International Courier, complete with BSA 2023 s.63 delivery proof for your ECGC claim &amp; AD Bank EDPMS file.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-3 rounded-xl font-bold text-white bg-[#DC2626] hover:bg-[#B91C1C] transition-colors text-xs sm:text-sm cursor-pointer shadow-lg shadow-red-900/30"
            >
              Start Single Notice &mdash; &#8377;{basePrice}
            </button>
            <Link
              href="/user/new-recovery"
              className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-3 rounded-xl font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors text-xs sm:text-sm text-center"
            >
              Open Self-Serve Portal &rarr;
            </Link>
          </div>
        </div>

        {/* Track 2: Enterprise / Institutional Batch Desk */}
        <div className="bg-white text-slate-900 rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm flex flex-col justify-between">
          <div>
            <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700 border border-slate-200 mb-3">
              Track 2 &bull; Export Houses &amp; Buying Desks
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2.5">
              Have 10 to 10,000+ Defaulters? Activate Institutional CSV Desk
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
              Upload multi-buyer overdue export invoices, automate Form 205 / Report of Default legal notice trails, and track AD Category-I Bank Clause C.24 EDPMS closures from one institutional dashboard.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/bulk-recovery-cases-all-in-one-affordable-solutions"
              className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-3 rounded-xl font-bold text-white bg-slate-900 hover:bg-slate-800 transition-colors text-xs sm:text-sm text-center"
            >
              Bulk CSV Recovery Desk
            </Link>
            <Link
              href="/user/representees"
              className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-3 rounded-xl font-semibold text-[#DC2626] bg-red-50 hover:bg-red-100 border border-red-200 transition-colors text-xs sm:text-sm text-center"
            >
              Manage Representees &rarr;
            </Link>
          </div>
        </div>
      </div>

      <PaymentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
