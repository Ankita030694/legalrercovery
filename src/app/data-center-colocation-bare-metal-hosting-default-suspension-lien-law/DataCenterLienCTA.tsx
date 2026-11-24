"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PaymentModal } from "@/components/PaymentModal";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";

interface DataCenterLienCTAProps {
  className?: string;
}

export default function DataCenterLienCTA({ className = "" }: DataCenterLienCTAProps) {
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
                Track 1 &bull; Single Defaulting Tenant
              </span>
              <h3 className="text-lg sm:text-xl font-black text-white mb-2">
                Test 1 Live Overdue Case Now (&#8377;{basePrice})
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                Fact-verified Gate-Pass Lien &amp; 7-Day DPDP-Safe Export Notice dispatched via
                Email + WhatsApp + Speed Post RPAD with BSA 2023 s.63 delivery proof.
              </p>
            </div>
            <div className="space-y-2.5">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="w-full inline-flex items-center justify-center px-5 py-3 rounded-xl font-bold text-white bg-[#DC2626] hover:bg-[#B91C1C] transition-colors shadow-lg shadow-red-900/30 text-sm cursor-pointer"
              >
                Dispatch Advocate Lien Notice &mdash; &#8377;{basePrice}
              </button>
              <Link
                href="/user/new-recovery"
                className="block text-center text-xs font-semibold text-slate-300 hover:text-white underline underline-offset-2"
              >
                Or submit full rack &amp; kWh ledger via /user/new-recovery &rarr;
              </Link>
            </div>
          </div>

          {/* Track 2 — Enterprise / Institutional Batch Desk */}
          <div className="bg-white text-slate-900 rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700 border border-slate-200 mb-3">
                Track 2 &bull; Tier-3/4 Data Centers &amp; Cloud Hosts
              </span>
              <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-2">
                Have 10 to 10,000+ Defaulters? Upload CSV / Activate Institutional Desk
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                Onboard your colocation, bare-metal GPU, or managed MSP billing portfolio onto a
                dedicated Representees desk for automated pre-suspension cure &amp; Order XXXVII
                escalation.
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
