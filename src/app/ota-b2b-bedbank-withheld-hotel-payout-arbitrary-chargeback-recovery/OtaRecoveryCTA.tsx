"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PaymentModal } from "@/components/PaymentModal";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";

export default function OtaRecoveryCTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const basePrice = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition;

  return (
    <>
      <div className="w-full bg-gradient-to-br from-[#111827] via-[#1F2937] to-[#111827] border border-slate-800 rounded-2xl p-6 sm:p-8 md:p-10 text-white shadow-2xl relative overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider text-red-400 bg-red-950/70 border border-red-800/70 mb-4">
            IND-16 Hospitality Creditor Desk &bull; MSMED Act s.15–18 &amp; Order XXXVII
          </span>

          <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight mb-3">
            Unblock Frozen OTA Extranet Payouts &amp; Defaulting B2B Bed-Bank Ledgers
          </h3>

          <p className="text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed mb-7 max-w-3xl">
            Stop absorbing unilateral chargebacks, expired Virtual Credit Cards (VCCs), and arbitrary guest-relocation penalties. Serve a fact-verified statutory demand notice backed by your PMS folios, Udyam certificate, and BSA 2023 s.63 electronic audit trail.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Track 1: Self-Serve Single Case Test */}
            <div className="bg-slate-800/90 border border-slate-700 rounded-xl p-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-red-400 bg-red-950/70 px-2.5 py-1 rounded">
                    Track 1 &mdash; Single Property Test
                  </span>
                  <span className="text-xl font-black text-white">&#8377;{basePrice}</span>
                </div>
                <h4 className="text-base font-bold text-white mb-2">
                  Test 1 Live Overdue Case Now (&#8377;{basePrice} &middot; Fact-Verified)
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  Dispatch a fact-verified Extranet Reconciliation &amp; MSMED Demand Notice via Email, WhatsApp, and Speed Post RPAD to the OTA Nodal Officer or defaulting B2B wholesaler.
                </p>
                <ul className="space-y-1.5 text-xs text-slate-300 mb-5">
                  <li>&#10003; Includes MSMED s.16 3x RBI interest calculation</li>
                  <li>&#10003; Challenges unproved s.74 relocation deductions</li>
                  <li>&#10003; Email + WhatsApp + Speed Post RPAD proof</li>
                </ul>
              </div>
              <div className="flex flex-col sm:flex-row gap-2.5">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="flex-1 py-3 px-4 rounded-xl bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs sm:text-sm font-bold transition-colors cursor-pointer text-center"
                >
                  Start 1 Case (&#8377;{basePrice})
                </button>
                <Link
                  href="/user/new-recovery"
                  className="py-3 px-4 rounded-xl bg-slate-700 hover:bg-slate-600 text-white text-xs font-semibold transition-colors text-center"
                >
                  Self-Serve Form &rarr;
                </Link>
              </div>
            </div>

            {/* Track 2: Enterprise / Hotel Chain Bulk CSV */}
            <div className="bg-white text-slate-900 border border-slate-200 rounded-xl p-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-700 bg-slate-100 px-2.5 py-1 rounded">
                    Track 2 &mdash; Hotel Chains &amp; Multi-Property
                  </span>
                  <span className="text-xs font-bold text-slate-500">10&ndash;10,000+ Cases</span>
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-2">
                  Have 10 to 10,000+ Defaulters? Upload CSV / Activate Institutional Desk
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Built for boutique hotel groups, resort chains, and villa portfolio operators managing dozens of unpaid OTA booking IDs, declined VCC batches, and delinquent DMC/BTC accounts.
                </p>
                <ul className="space-y-1.5 text-xs text-slate-700 mb-5">
                  <li>&#10003; Bulk CSV upload of booking IDs &amp; DMC ledgers</li>
                  <li>&#10003; Automated tri-channel dispatch &amp; RPAD tracking</li>
                  <li>&#10003; Dedicated MSEFC &amp; Commercial Court escalation</li>
                </ul>
              </div>
              <div className="flex flex-col sm:flex-row gap-2.5">
                <Link
                  href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                  className="flex-1 py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-bold transition-colors text-center"
                >
                  Bulk CSV Solutions &rarr;
                </Link>
                <Link
                  href="/user/representees"
                  className="py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 text-xs font-semibold transition-colors text-center"
                >
                  Institutional Desk
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <PaymentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
