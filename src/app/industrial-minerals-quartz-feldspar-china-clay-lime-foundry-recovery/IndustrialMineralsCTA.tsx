"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PaymentModal } from "@/components/PaymentModal";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";

interface IndustrialMineralsCTAProps {
  className?: string;
}

export default function IndustrialMineralsCTA({ className = "" }: IndustrialMineralsCTAProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const basePrice = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition;

  return (
    <>
      <div className={`w-full grid grid-cols-1 lg:grid-cols-2 gap-5 ${className}`}>
        {/* Track 1 — Self-Serve Single Case Test */}
        <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-7 border border-slate-800 shadow-xl flex flex-col justify-between">
          <div>
            <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-red-950/70 text-red-400 border border-red-800/60 mb-3">
              Track 1 &bull; Self-Serve Single Defaulter
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
              Test 1 Live Overdue Case Now (&#8377;{basePrice})
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
              Advocate-drafted MSMED s.15–18 + Section 43B(h) &amp; Order XXXVII mineral supply demand notice, dispatched via Email + WhatsApp + Speed Post RPAD.
            </p>
          </div>
          <div className="space-y-3">
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="flex-1 inline-flex items-center justify-center px-5 py-3 rounded-xl font-bold text-white bg-[#DC2626] hover:bg-[#B91C1C] transition-colors text-xs sm:text-sm shadow-lg shadow-red-900/30 cursor-pointer"
              >
                Start &#8377;{basePrice} Notice Test
              </button>
              <Link
                href="/user/new-recovery"
                className="inline-flex items-center justify-center px-4 py-3 rounded-xl font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors text-xs sm:text-sm text-center"
              >
                Open Recovery Portal &rarr;
              </Link>
            </div>
            <p className="text-[11px] text-slate-400">
              &#10003; Advocate Drafted &bull; &#10003; Email + WhatsApp + Speed Post RPAD
            </p>
          </div>
        </div>

        {/* Track 2 — Enterprise / Institutional Batch Desk */}
        <div className="bg-white text-slate-900 rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm flex flex-col justify-between">
          <div>
            <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700 border border-slate-200 mb-3">
              Track 2 &bull; Grinding Plant &amp; Mineral Cluster Batch Desk
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
              Have 10 to 10,000+ Defaulters Stretching Credit?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
              Upload your buyer-aging CSV ledger (ceramic/glass/steel GSTINs, e-Ravanna passes, pending invoices &amp; disputed debit notes) to activate a dedicated institutional desk.
            </p>
          </div>
          <div className="space-y-3">
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                className="flex-1 inline-flex items-center justify-center px-5 py-3 rounded-xl font-bold text-white bg-slate-900 hover:bg-slate-800 transition-colors text-xs sm:text-sm text-center"
              >
                Upload CSV / Bulk Recovery
              </Link>
              <Link
                href="/user/representees"
                className="inline-flex items-center justify-center px-4 py-3 rounded-xl font-semibold text-[#DC2626] bg-red-50 hover:bg-red-100 border border-red-200 transition-colors text-xs sm:text-sm text-center"
              >
                Institutional Desk &rarr;
              </Link>
            </div>
            <p className="text-[11px] text-slate-500">
              &#10003; Multi-Plant Ledger Triage &bull; &#10003; MSEFC + s.43B(h) + Order 37 Escalation
            </p>
          </div>
        </div>
      </div>

      <PaymentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
