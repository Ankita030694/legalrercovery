"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PaymentModal } from "@/components/PaymentModal";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";

interface HospitalTpaCalculatorCTAProps {
  className?: string;
}

export default function HospitalTpaCalculatorCTA({
  className = "",
}: HospitalTpaCalculatorCTAProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const basePrice = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition;

  return (
    <>
      <div className={`w-full ${className}`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* Track 1: Self-Serve Single Case Test */}
          <div className="bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white rounded-2xl p-6 sm:p-7 border border-slate-800 shadow-xl flex flex-col justify-between">
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-red-950/70 text-red-300 border border-red-800/60 mb-3">
                Track 1 &bull; Single TPA Claim Statutory Demand Test
              </span>
              <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold tracking-tight text-white mb-2.5">
                Test 1 Live Overdue TPA Claim Now (&rupee;{basePrice})
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                Lock statutory penal interest (Bank Rate + 2%) on an aged or short-settled cashless claim without bureaucratic delay. Advocate-drafted formal legal demand notice served directly on the Third Party Administrator (TPA) and the Health Insurer&apos;s Chief Compliance Officer (CCO) with an IRDAI Master Circular audit ledger.
              </p>
              <ul className="space-y-1.5 text-xs text-slate-200 mb-6">
                <li>&check; Itemized disallowance rebuttals (MOU package tariffs vs unauthorized cuts)</li>
                <li>&check; Statutory 30-day TAT computation citing IRDAI Master Circular Clause 19</li>
                <li>&check; Simultaneous dual dispatch: Insurer CCO Email + Registered Speed Post RPAD</li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="flex-1 inline-flex items-center justify-center px-5 py-3.5 rounded-xl font-bold text-white bg-[#DC2626] hover:bg-[#B91C1C] transition-colors shadow-lg shadow-red-900/30 text-xs sm:text-sm cursor-pointer text-center"
              >
                Test 1 Live Claim (&rupee;{basePrice}) &rarr;
              </button>
              <Link
                href="/user/new-recovery"
                className="inline-flex items-center justify-center px-4 py-3.5 rounded-xl font-semibold text-slate-100 bg-white/10 hover:bg-white/15 border border-white/15 transition-colors text-xs sm:text-sm text-center"
              >
                Open Case Portal
              </Link>
            </div>
          </div>

          {/* Track 2: Enterprise / Institutional Batch Desk */}
          <div className="bg-white text-slate-900 rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700 border border-slate-200 mb-3">
                Track 2 &bull; Hospital RCM &amp; CFO Bulk Ingestion Desk
              </span>
              <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold tracking-tight text-slate-900 mb-2.5">
                Have 10 to 10,000+ Aged Claims? Upload CSV
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                Transform aged TPA receivables into enforceable institutional recoveries. Bulk upload your hospital MIS/HIS aging dump to generate insurer-wise demand schedules, compute accrued IRDAI penal interest across all TPAs, and trigger unified multi-claim institutional legal notices.
              </p>
              <ul className="space-y-1.5 text-xs text-slate-700 mb-6">
                <li>&check; Automated parsing of multi-TPA aging sheets (&gt;30, &gt;60, &gt;90, &gt;180 days)</li>
                <li>&check; Pre-litigation reconciliation desk handling TPA queries &amp; settlements</li>
                <li>&check; Commercial Courts Act Section 12-A pre-institution mediation packaging</li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                className="flex-1 inline-flex items-center justify-center px-5 py-3.5 rounded-xl font-bold text-white bg-slate-900 hover:bg-slate-800 transition-colors shadow-sm text-xs sm:text-sm text-center"
              >
                Bulk CSV Recovery Solutions &rarr;
              </Link>
              <Link
                href="/user/representees"
                className="inline-flex items-center justify-center px-4 py-3.5 rounded-xl font-bold text-[#DC2626] bg-red-50 hover:bg-red-100 border border-red-200 transition-colors text-xs sm:text-sm text-center"
              >
                Activate Hospital Desk
              </Link>
            </div>
          </div>
        </div>
      </div>

      <PaymentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
