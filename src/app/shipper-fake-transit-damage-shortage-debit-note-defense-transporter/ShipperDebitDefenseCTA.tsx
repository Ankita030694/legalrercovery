"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PaymentModal } from "@/components/PaymentModal";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";

interface ShipperDebitDefenseCTAProps {
  className?: string;
  variant?: "primary" | "secondary";
}

export default function ShipperDebitDefenseCTA({
  className = "",
  variant = "primary",
}: ShipperDebitDefenseCTAProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const basePrice = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition;

  return (
    <>
      <div className={`w-full grid grid-cols-1 lg:grid-cols-2 gap-5 ${className}`}>
        {/* Track 1: Self-Serve Single Case Test */}
        <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-7 border border-slate-800 shadow-xl flex flex-col justify-between">
          <div>
            <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-red-950/70 text-red-400 border border-red-800/60 mb-3">
              Track 1 &bull; Single Stalled Freight Voucher / Debit Rejection
            </span>
            <p className="text-lg sm:text-xl font-extrabold text-white mb-2">
              Test 1 Live Overdue Case Now (&rupee;{basePrice} &middot; Fact-Verified &middot; Email + WhatsApp + Speed Post RPAD)
            </p>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
              Serve a fact-verified 15-day statutory demand notice on an abusive corporate shipper or consignee. Nullify arbitrary transit damage debit notes using Clean POD estoppel under BSA Section 121, Supreme Court <em>Raman Iron Foundry</em> bar on unliquidated set-offs, Section 16 Carriage by Road Act 180-day limitation shield, and Section 43B(h) buyer tax disallowance warnings.
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
              Track 2 &bull; 3PL &amp; Fleet Institutional Recovery Desk
            </span>
            <p className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2">
              Have 10 to 10,000+ Defaulters? Upload CSV / Activate Dedicated Institutional Desk
            </p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
              Built specifically for 3PL Directors, Commercial Fleet Owners, and Logistics CFOs managing hundreds of running freight ledgers across auto, FMCG, pharma, e-commerce, and industrial corridors. Ingest bulk disputed debit notes, marine insurance double-dip deductions, and withheld detention vouchers. Includes automated multi-jurisdictional legal notices, digital BSA Section 63 evidence dossiers, MSEFC Samadhaan filings, and Order XXXVII summary suits.
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
              className="inline-flex items-center justify-center px-4 py-3 rounded-xl font-semibold text-xs sm:text-sm text-[#DC2626] bg-red-50 hover:bg-red-100 border border-red-200 transition-colors text-center"
            >
              Manage Logistics Portfolio
            </Link>
          </div>
        </div>
      </div>

      <PaymentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
