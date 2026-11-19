"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PaymentModal } from "@/components/PaymentModal";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";

interface CourierWalletCTAProps {
  className?: string;
}

export default function CourierWalletCTA({ className = "" }: CourierWalletCTAProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const basePrice = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition;

  return (
    <>
      <div className={`w-full grid grid-cols-1 lg:grid-cols-2 gap-5 ${className}`}>
        {/* Track 1 — Self-Serve Single Case Test */}
        <div className="bg-gradient-to-br from-[#111827] via-[#1F2937] to-[#111827] text-white rounded-2xl p-6 sm:p-7 border border-slate-800 shadow-xl flex flex-col justify-between">
          <div>
            <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-red-950/70 text-red-400 border border-red-800/60 mb-3">
              Track 1 • Single-Account Pilot Test
            </span>
            <h3 className="text-lg sm:text-xl font-black tracking-tight text-white mb-2.5">
              Test 1 Live Negative Seller Wallet Case Now
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-5">
              Upload one high-value negative seller ledger (-₹15,000 to -₹5,00,000+) with clickwrap T&amp;Cs and AWB/weight-audit logs. Advocate-drafted statutory notice dispatched via Email, WhatsApp &amp; Speed Post RPAD.
            </p>
          </div>
          <div className="space-y-3">
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="flex-1 inline-flex items-center justify-center px-5 py-3.5 rounded-xl font-bold text-white bg-[#DC2626] hover:bg-[#B91C1C] transition-all shadow-lg shadow-red-900/30 text-xs sm:text-sm cursor-pointer text-center"
              >
                Start Single Case — &rupee;{basePrice}
              </button>
              <Link
                href="/user/new-recovery"
                className="inline-flex items-center justify-center px-4 py-3.5 rounded-xl font-semibold text-slate-200 bg-white/10 hover:bg-white/15 border border-white/15 transition-colors text-xs sm:text-sm text-center"
              >
                Self-Serve Portal →
              </Link>
            </div>
            <p className="text-[11px] text-slate-400">
              ✓ Advocate Signed • ✓ IT Act s.10A &amp; BSA s.63 Compliant • ✓ 15-Day Cure Window
            </p>
          </div>
        </div>

        {/* Track 2 — Enterprise / Institutional Batch CSV Desk */}
        <div className="bg-white text-slate-900 rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-lg flex flex-col justify-between">
          <div>
            <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700 border border-slate-200 mb-3">
              Track 2 • Enterprise Aggregator Batch Desk
            </span>
            <h3 className="text-lg sm:text-xl font-black tracking-tight text-slate-900 mb-2.5">
              Have 10 to 10,000+ Negative Seller Wallets?
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5">
              Onboard your D2C shipping aggregator or hyperlocal fleet receivables via CSV/API. Automate 1,000+ monthly advocate notices, track RPAD/WhatsApp delivery proofs, and escalate non-payers to ODR or Order 37 CPC.
            </p>
          </div>
          <div className="space-y-3">
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                className="flex-1 inline-flex items-center justify-center px-5 py-3.5 rounded-xl font-bold text-white bg-slate-900 hover:bg-slate-800 transition-colors text-xs sm:text-sm text-center"
              >
                Upload CSV / Bulk Recovery Desk
              </Link>
              <Link
                href="/user/representees"
                className="inline-flex items-center justify-center px-4 py-3.5 rounded-xl font-bold text-[#DC2626] bg-red-50 hover:bg-red-100 border border-red-200 transition-colors text-xs sm:text-sm text-center"
              >
                Enterprise Representees →
              </Link>
            </div>
            <p className="text-[11px] text-slate-500">
              ✓ Dedicated Account Counsel • ✓ 1,000+ Notices/Month • ✓ Zero Upfront Litigation Lock-In
            </p>
          </div>
        </div>
      </div>

      <PaymentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
