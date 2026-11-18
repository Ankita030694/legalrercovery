"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PaymentModal } from "@/components/PaymentModal";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";

interface LesseeSaleCTAProps {
  className?: string;
}

export default function LesseeSaleCTA({ className = "" }: LesseeSaleCTAProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const basePrice = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition;

  return (
    <>
      <div className={`w-full max-w-full ${className}`}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Track 1 — Self-Serve Single Case Test */}
          <div className="bg-gradient-to-br from-[#111827] via-[#1F2937] to-[#111827] text-white rounded-2xl p-6 border border-slate-800 shadow-xl flex flex-col justify-between">
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-red-950/70 text-red-400 border border-red-800/60 mb-3">
                Track 1 &bull; Single Stranded / Sold Asset
              </span>
              <h3 className="text-lg sm:text-xl font-black text-white mb-2">
                Test 1 Live Overdue Case Now (&#8377;{basePrice})
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                Advocate-drafted <em>Nemo Dat</em> s.27 / BNS s.316 Police-CC or IBC s.18
                Explanation(a) RP Demand Notice dispatched via Email + WhatsApp + Speed Post RPAD.
              </p>
            </div>
            <div className="space-y-2.5">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="w-full inline-flex items-center justify-center px-5 py-3 rounded-xl font-bold text-white bg-[#DC2626] hover:bg-[#B91C1C] transition-colors shadow-lg shadow-red-900/30 text-sm cursor-pointer"
              >
                Dispatch Advocate Asset Recovery Notice &mdash; &#8377;{basePrice}
              </button>
              <Link
                href="/user/new-recovery"
                className="block text-center text-xs font-semibold text-slate-300 hover:text-white underline underline-offset-2"
              >
                Or submit asset serial &amp; police station details via /user/new-recovery &rarr;
              </Link>
            </div>
          </div>

          {/* Track 2 — Enterprise / Institutional Batch Desk */}
          <div className="bg-white text-slate-900 rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700 border border-slate-200 mb-3">
                Track 2 &bull; Fleet Lessors, Operating Lease NBFCs &amp; Rental Cos
              </span>
              <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-2">
                Have 10 to 10,000+ Defaulters? Upload CSV / Activate Institutional Desk
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                Onboard your crane, scaffolding, DG set, or IT DaaS lease portfolio onto a dedicated
                Representees desk for batch BNS s.316 notices, Court Receiver filings &amp; NCLT
                s.60(5) exclusion.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2.5">
              <Link
                href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                className="flex-1 inline-flex items-center justify-center px-4 py-3 rounded-xl font-bold text-white bg-slate-900 hover:bg-[#DC2626] transition-colors text-xs sm:text-sm text-center"
              >
                Bulk CSV Recovery Desk
              </Link>
              <Link
                href="/user/representees"
                className="flex-1 inline-flex items-center justify-center px-4 py-3 rounded-xl font-bold text-slate-900 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-colors text-xs sm:text-sm text-center"
              >
                Activate Representees
              </Link>
            </div>
          </div>
        </div>
      </div>

      <PaymentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
