"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PaymentModal } from "@/components/PaymentModal";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";

interface UncertifiedRABillRecoveryCTAProps {
  className?: string;
}

export default function UncertifiedRABillRecoveryCTA({
  className = "",
}: UncertifiedRABillRecoveryCTAProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const basePrice = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition;

  return (
    <>
      <div className={`w-full grid grid-cols-1 lg:grid-cols-2 gap-5 ${className}`}>
        {/* Track 1: Self-Serve Single Case Test */}
        <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-7 border border-slate-800 shadow-xl flex flex-col justify-between">
          <div>
            <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-red-950/70 text-red-400 border border-red-800/60 mb-3">
              Track 1 &bull; Single Stalled RA Bill / Final Bill Recovery Notice
            </span>
            <p className="text-lg sm:text-xl font-extrabold text-white mb-2">
              Test 1 Live Overdue Case Now (&rupee;{basePrice} &middot; Advocate Drafted &middot; Email + WhatsApp + Speed Post RPAD)
            </p>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
              Serve a high-impact, advocate-vetted statutory demand notice citing Supreme Court precedents (<em>Ambica Construction</em> and <em>R.L. Kalathia</em>). Overcomes PMC measurement stalling, triggers deemed certification clauses, repudiates coerced No-Claim Certificates (NDCs) signed under financial duress, establishes suspension rights under Contract Act Section 53/54 without Liquidated Damages (LD) liability, and demands 18% commercial interest.
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
              Track 2 &bull; EPC & Construction Contractor Institutional Desk
            </span>
            <p className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2">
              Have 10 to 10,000+ Defaulters? Upload CSV / Activate Dedicated Institutional Desk
            </p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
              Built for Managing Directors, Heads of Billing, and Commercial Directors of Civil, Structural, Turnkey MEP, and EPC contracting firms handling multi-crore infrastructure packages. Ingest dozens of stalled RA bills, delayed final accounts, uncertified extra-item variations, and withheld defect liability retention across private developers, municipal corporations, and PSUs. Includes BSA Section 63 electronic evidence dossiers, Bank Guarantee injunction defense, and Section 21 Arbitration invocation.
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
              Manage Contractor Ledgers
            </Link>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <PaymentModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          defaultPrice={basePrice}
        />
      )}
    </>
  );
}
