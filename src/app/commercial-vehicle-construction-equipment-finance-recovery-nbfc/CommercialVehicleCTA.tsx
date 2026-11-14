"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PaymentModal } from "@/components/PaymentModal";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";

interface CommercialVehicleCTAProps {
  className?: string;
}

export default function CommercialVehicleCTA({
  className = "",
}: CommercialVehicleCTAProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const basePrice = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition;

  return (
    <>
      <div className={`w-full grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 ${className}`}>
        {/* Track 1: Self-Serve Single Case Test */}
        <div className="bg-slate-900 text-white rounded-2xl p-6 border border-slate-800 shadow-lg flex flex-col justify-between">
          <div>
            <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-red-950/70 text-red-400 border border-red-800/60 mb-3">
              Track 1 &bull; Self-Serve Single Case Test
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
              Test 1 Live Overdue CV / CE Case Now
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
              &#8377;{basePrice} &middot; Advocate Drafted Recall, Section 9 Pre-Filing Demand, or Post-Sale Loss-on-Sale Notice dispatched via Email + WhatsApp + Speed Post RPAD.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2.5">
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-3 rounded-xl font-semibold text-white bg-[#DC2626] hover:bg-[#B91C1C] transition-colors text-xs sm:text-sm cursor-pointer"
            >
              Launch Single Case (&rupee;{basePrice})
            </button>
            <Link
              href="/user/new-recovery"
              className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-3 rounded-xl font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors text-xs sm:text-sm"
            >
              Open Self-Serve Portal &rarr;
            </Link>
          </div>
        </div>

        {/* Track 2: Enterprise / Institutional Batch Desk */}
        <div className="bg-white text-slate-900 rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
          <div>
            <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700 border border-slate-200 mb-3">
              Track 2 &bull; Institutional &amp; Fleet Portfolio Desk
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
              Have 10 to 10,000+ Defaulters?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
              Upload CSV batches for automated Recall, Section 25 PSS Act e-NACH notices, Vahan Form 36 packs, and Section 9 Court Receiver filings across Pan-India Commercial Courts.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2.5">
            <Link
              href="/bulk-recovery-cases-all-in-one-affordable-solutions"
              className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-3 rounded-xl font-semibold text-white bg-[#DC2626] hover:bg-[#B91C1C] transition-colors text-xs sm:text-sm"
            >
              Upload CSV / Bulk Solutions
            </Link>
            <Link
              href="/user/representees"
              className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-3 rounded-xl font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-colors text-xs sm:text-sm"
            >
              Activate Institutional Desk &rarr;
            </Link>
          </div>
        </div>
      </div>

      <PaymentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
