"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PaymentModal } from "@/components/PaymentModal";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";

interface RmcSteelChemicalNoticeCTAProps {
  className?: string;
  variant?: "primary" | "secondary";
  buttonText?: string;
}

export default function RmcSteelChemicalNoticeCTA({
  className = "",
  variant = "primary",
  buttonText = "Send Advocate-Vetted Supply Notice",
}: RmcSteelChemicalNoticeCTAProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const basePrice = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition;

  return (
    <>
      {variant === "secondary" ? (
        <div className={`w-full flex flex-wrap items-center justify-start gap-4 ${className}`}>
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-bold text-sm text-white bg-[#DC2626] hover:bg-[#B91C1C] transition-colors cursor-pointer text-center shadow-lg shadow-red-900/30"
          >
            {buttonText} &mdash; &rupee;{basePrice}
          </button>
          <Link
            href="/bulk-recovery-cases-all-in-one-affordable-solutions"
            className="inline-flex items-center justify-center px-5 py-3 rounded-xl font-bold text-sm text-slate-800 bg-white hover:bg-slate-100 border border-slate-300 transition-colors text-center"
          >
            Bulk Plant &amp; Dealer Desk (10+ Debtors) &rarr;
          </Link>
        </div>
      ) : (
        <div className={`w-full grid grid-cols-1 lg:grid-cols-2 gap-5 ${className}`}>
          {/* Track 1: Self-Serve Single Case Test */}
          <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-7 border border-slate-800 shadow-xl flex flex-col justify-between">
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-red-950/70 text-red-400 border border-red-800/60 mb-3">
                Track 1 &bull; Single Defaulting Builder / Buyer Notice
              </span>
              <p className="text-lg sm:text-xl font-extrabold text-white mb-2">
                Test 1 Live Overdue Case Now (&rupee;{basePrice} &middot; Advocate Drafted &middot; Email + WhatsApp + Speed Post RPAD)
              </p>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                Issue a litigation-ready demand notice backed by your 6-column E-Way Bill, Dharamkanta weighbridge, and MTC/Batch COA schedule. Locks statutory acceptance under Sale of Goods Act s.42, rejects belated cube-test or purity excuses, and establishes a Pre-Section 8 IBC &amp; Order XXXVII CPC record.
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
                Track 2 &bull; RMC Plants, Steel Mills, Chemical Distributors &amp; DCAs
              </span>
              <p className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2">
                Have 10 to 10,000+ Defaulters? Upload CSV / Activate Dedicated Institutional Desk
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                Built for multi-plant credit controllers managing overdue builder, EPC contractor, and downstream factory ledgers. Batch-ingest Tax Invoices, E-Way numbers, and weighbridge logs for automated Advocate-signed notices, MSMED Samadhaan filings, and Order XXXVII / IBC escalation tracking.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                className="inline-flex items-center justify-center px-5 py-3 rounded-xl font-bold text-sm text-white bg-slate-900 hover:bg-slate-800 transition-colors text-center"
              >
                Activate Bulk Recovery Desk &rarr;
              </Link>
              <Link
                href="/user/representees"
                className="inline-flex items-center justify-center px-4 py-3 rounded-xl font-semibold text-xs sm:text-sm text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 transition-colors text-center"
              >
                Manage Multi-Entity Ledger
              </Link>
            </div>
          </div>
        </div>
      )}

      {isModalOpen && (
        <PaymentModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
}
