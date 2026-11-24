"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PaymentModal } from "@/components/PaymentModal";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";

interface CommercialCourtCTAProps {
  className?: string;
}

export default function CommercialCourtCTA({ className = "" }: CommercialCourtCTAProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const basePrice = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition;

  return (
    <>
      <div id="dual-track-cta" className={`w-full scroll-mt-28 ${className}`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Track 1: Self-Serve Single Case Test */}
          <div className="bg-gradient-to-br from-[#111827] via-[#1F2937] to-[#111827] text-white rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-xl flex flex-col justify-between">
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-red-950/80 text-red-400 border border-red-800/70 mb-4">
                Track 1 • Self-Serve Single Case Test
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight mb-3">
                Test 1 Live Overdue Case Now (₹{basePrice})
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-5">
                Before depositing 1%–7.5% ad-valorem court fees in a Commercial Court, put the debtor&apos;s Directors on formal notice. Fact-verified demand notice citing your Section 12(1)(a) Specified Value, contractual interest, and Section 12A mediation readiness.
              </p>
              <ul className="space-y-2 text-xs text-slate-300 mb-6">
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>Fact-verified &amp; dispatched via Email + WhatsApp + Speed Post RPAD</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>Section 63 BSA electronic delivery trail preserved for Commercial Suit</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>Flat ₹{basePrice} test fee — no percentage commission on recovery</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="flex-1 inline-flex items-center justify-center px-5 py-3.5 rounded-xl font-bold text-white bg-[#DC2626] hover:bg-[#B91C1C] transition-colors shadow-lg shadow-red-900/30 text-sm cursor-pointer text-center"
              >
                Start 1 Case Now — ₹{basePrice}
              </button>
              <Link
                href="/user/new-recovery"
                className="inline-flex items-center justify-center px-4 py-3.5 rounded-xl font-semibold text-slate-200 bg-white/10 hover:bg-white/15 border border-white/15 transition-colors text-xs sm:text-sm text-center"
              >
                Open Case Form →
              </Link>
            </div>
          </div>

          {/* Track 2: Enterprise / Institutional Batch Desk */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700 border border-slate-200 mb-4">
                Track 2 • Enterprise &amp; CFO Batch Desk
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight mb-3">
                Have 10 to 10,000+ Defaulters? Upload CSV / Activate Institutional Desk
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5">
                Triage your entire AR aging ledger across the ₹3 Lakh Commercial Court floor, MSME Samadhaan, and IBC ₹1 Cr threshold. Batch-dispatch statutory notices with unified ERP/Tally reconciliation and per-case fee optimization.
              </p>
              <ul className="space-y-2 text-xs text-slate-600 mb-6">
                <li className="flex items-center gap-2">
                  <span className="text-[#DC2626] font-bold">✓</span>
                  <span>Bulk CSV upload for 10 to 10,000+ overdue B2B invoices</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#DC2626] font-bold">✓</span>
                  <span>Automated forum routing (Commercial Court vs MSME vs Order 37)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#DC2626] font-bold">✓</span>
                  <span>Dedicated institutional MIS dashboard &amp; Section 12A mediation support</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                className="flex-1 inline-flex items-center justify-center px-5 py-3.5 rounded-xl font-bold text-white bg-slate-900 hover:bg-slate-800 transition-colors text-sm text-center"
              >
                Explore Bulk CSV Solutions
              </Link>
              <Link
                href="/user/representees"
                className="inline-flex items-center justify-center px-4 py-3.5 rounded-xl font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-colors text-xs sm:text-sm text-center"
              >
                Institutional Desk →
              </Link>
            </div>
          </div>
        </div>
      </div>

      <PaymentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
