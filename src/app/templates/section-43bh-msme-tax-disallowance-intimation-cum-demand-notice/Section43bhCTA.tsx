"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PaymentModal } from "@/components/PaymentModal";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";

interface Section43bhCTAProps {
  className?: string;
}

export default function Section43bhCTA({ className = "" }: Section43bhCTAProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const basePrice = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition;

  return (
    <>
      <div className={`w-full ${className}`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* Track 1: Single Section 43B(h) Advocate Notice Test */}
          <div className="bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white rounded-2xl p-6 sm:p-7 border border-slate-800 shadow-xl flex flex-col justify-between">
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-red-950/70 text-red-300 border border-red-800/60 mb-3">
                Track 1 &bull; Single Overdue Invoice Notice Test
              </span>
              <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold tracking-tight text-white mb-2.5">
                Issue 1 Formal Section 43B(h) Advocate Notice (&rupee;{basePrice})
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                Have an empanelled commercial recovery advocate review your purchase orders, tax invoices, and e-way bills. We dispatch a customized legal demand under Section 15 &amp; 16 of the MSMED Act, 2006 coupled with Section 43B(h) Form 3CD Clause 22 audit intimation within 24 hours.
              </p>
              <ul className="space-y-1.5 text-xs text-slate-200 mb-6">
                <li>&check; Mandatory 3x RBI compound interest calculation with monthly rests</li>
                <li>&check; Form 3CD Clause 22 tax audit disclosure warning marked to corporate CFO</li>
                <li>&check; Multi-channel legal service: Registered Email + WhatsApp + Speed Post RPAD with BSA s.63 certificate</li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="flex-1 inline-flex items-center justify-center px-5 py-3.5 rounded-xl font-bold text-white bg-[#DC2626] hover:bg-[#B91C1C] transition-colors shadow-lg shadow-red-900/30 text-xs sm:text-sm cursor-pointer text-center"
              >
                Dispatch 1 Advocate Notice (&rupee;{basePrice}) &rarr;
              </button>
              <Link
                href="/user/new-recovery"
                className="inline-flex items-center justify-center px-4 py-3.5 rounded-xl font-semibold text-slate-100 bg-white/10 hover:bg-white/15 border border-white/15 transition-colors text-xs sm:text-sm text-center"
              >
                Open Case Dashboard
              </Link>
            </div>
          </div>

          {/* Track 2: Enterprise Bulk MSME Batch Desk */}
          <div className="bg-white text-slate-900 rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700 border border-slate-200 mb-3">
                Track 2 &bull; Enterprise &amp; Factory Batch Desk
              </span>
              <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold tracking-tight text-slate-900 mb-2.5">
                Have 10 to 10,000+ Unpaid Debtor Invoices?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                For manufacturing plants, auto-ancillary clusters, and industrial distributors entering Q4 with multi-crore overdue books. Upload your debtors ledger via CSV for automated 45-day calculation, Form 3CD intimation letters, and bulk legal dispatch.
              </p>
              <ul className="space-y-1.5 text-xs text-slate-700 mb-6">
                <li>&check; Bulk ledger ingestion (Tally, Busy, SAP, Zoho Books, Oracle)</li>
                <li>&check; Staggered Stage-1 advisory emails followed by automated Stage-2 advocate notices</li>
                <li>&check; Dedicated enterprise case manager &amp; direct MSME Samadhaan batch filing integration</li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                className="flex-1 inline-flex items-center justify-center px-5 py-3.5 rounded-xl font-bold text-white bg-slate-900 hover:bg-slate-800 transition-colors shadow-sm text-xs sm:text-sm text-center"
              >
                Upload Debtor CSV for Bulk Triage &rarr;
              </Link>
              <Link
                href="/user/representees"
                className="inline-flex items-center justify-center px-4 py-3.5 rounded-xl font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-colors text-xs sm:text-sm text-center"
              >
                Institutional Desk
              </Link>
            </div>
          </div>
        </div>
      </div>

      <PaymentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
