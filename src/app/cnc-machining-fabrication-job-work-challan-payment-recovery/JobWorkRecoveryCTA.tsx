"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PaymentModal } from "@/components/PaymentModal";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";

interface JobWorkRecoveryCTAProps {
  className?: string;
}

export default function JobWorkRecoveryCTA({
  className = "",
}: JobWorkRecoveryCTAProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const basePrice = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition;

  return (
    <>
      <div className={`w-full grid grid-cols-1 lg:grid-cols-2 gap-5 ${className}`}>
        {/* Track 1: Self-Serve Single Case Test */}
        <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-7 border border-slate-800 shadow-xl flex flex-col justify-between">
          <div>
            <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-red-950/70 text-red-400 border border-red-800/60 mb-3">
              Track 1 &bull; Single Job-Work Invoice / Stalled Challan
            </span>
            <p className="text-lg sm:text-xl font-extrabold text-white mb-2">
              Test 1 Live Overdue Case Now (&rupee;{basePrice} &middot; Advocate Drafted &middot; Email + WhatsApp + Speed Post RPAD)
            </p>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
              Serve a high-impact, advocate-vetted 15-day statutory lien intimation cum legal demand notice on a defaulting principal OEM. Formally exercises your statutory Particular Lien under Indian Contract Act Section 170 on finished or in-process components, invokes CGST Section 143 1-year deemed supply tax consequences, and asserts MSMED Act Section 16 monthly compound interest at 3x RBI Bank Rate.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center justify-center px-5 py-3 rounded-xl font-bold text-sm text-white bg-[#DC2626] hover:bg-[#B91C1C] transition-colors cursor-pointer text-center shadow-lg shadow-red-900/30"
            >
              Start &rupee;{basePrice} Notice Test &rarr;
            </button>
            <Link
              href="/user/new-recovery"
              className="inline-flex items-center justify-center px-4 py-3 rounded-xl font-semibold text-xs sm:text-sm text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors text-center"
            >
              Open Self-Serve Portal
            </Link>
          </div>
        </div>

        {/* Track 2: Enterprise / Institutional Batch Desk */}
        <div className="bg-white text-slate-900 rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-xs flex flex-col justify-between">
          <div>
            <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700 border border-slate-200 mb-3">
              Track 2 &bull; Industrial Cluster &amp; Job-Work Batch Recovery Desk
            </span>
            <p className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2">
              Have 10 to 10,000+ Defaulters? Upload CSV / Activate Dedicated Institutional Desk
            </p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
              Engineered for CNC machine shops, precision turning centers, fabrication yards, heat treaters, electroplaters, and foundry units across Bhosari, Peenya, Manesar, Ambattur, Rajkot, and Ludhiana. Ingest multiple stuck job-work delivery challans, disputed burning loss debit notes, and unpaid labour billing ledgers. Features bulk statutory advocate notices, BSA Section 63 technical evidence dossiers, and commercial litigation support.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/bulk-recovery-cases-all-in-one-affordable-solutions"
              className="inline-flex items-center justify-center px-5 py-3 rounded-xl font-bold text-sm text-white bg-slate-900 hover:bg-slate-800 transition-colors text-center"
            >
              Explore Bulk CSV Desk &rarr;
            </Link>
            <Link
              href="/user/representees"
              className="inline-flex items-center justify-center px-4 py-3 rounded-xl font-semibold text-xs sm:text-sm text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 transition-colors text-center"
            >
              Institutional Enterprise Onboarding
            </Link>
          </div>
        </div>
      </div>

      <PaymentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        serviceType="demand_notice"
        amount={basePrice}
      />
    </>
  );
}
