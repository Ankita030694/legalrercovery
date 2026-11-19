"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PaymentModal } from "@/components/PaymentModal";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";

interface ProfessionalFeeNoticeCTAProps {
  className?: string;
}

export default function ProfessionalFeeNoticeCTA({ className = "" }: ProfessionalFeeNoticeCTAProps) {
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
                Track 1 &bull; Single Practice Arrears Test
              </span>
              <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold tracking-tight text-white mb-2.5">
                Issue 1 Live Professional Fee Recovery Notice (&rupee;{basePrice})
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                Have senior High Court advocate counsel review your appointment mandate, reconcile Form 26AS TDS and UDIN timestamps, and dispatch an ethics-compliant statutory demand on Bar Council letterhead via Email, WhatsApp, and Speed Post RPAD with Section 63 BSA electronic evidence.
              </p>
              <ul className="space-y-1.5 text-xs text-slate-200 mb-6">
                <li>&check; Section 18 Limitation Act Form 26AS 194J debt admission clause</li>
                <li>&check; ICAI Chapter VII / Clause 8 Incoming Auditor intimation copy included</li>
                <li>&check; Architect GFC drawing license revocation under Copyright Act s.51</li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="flex-1 inline-flex items-center justify-center px-5 py-3.5 rounded-xl font-bold text-white bg-[#DC2626] hover:bg-[#B91C1C] transition-colors shadow-lg shadow-red-900/30 text-xs sm:text-sm cursor-pointer text-center"
              >
                Dispatch Notice Now (&rupee;{basePrice}) &rarr;
              </button>
              <Link
                href="/user/new-recovery"
                className="inline-flex items-center justify-center px-4 py-3.5 rounded-xl font-semibold text-slate-100 bg-white/10 hover:bg-white/15 border border-white/15 transition-colors text-xs sm:text-sm text-center"
              >
                Open Case Dashboard
              </Link>
            </div>
          </div>

          {/* Track 2: Enterprise / Bulk Firm Portfolio Desk */}
          <div className="bg-white text-slate-900 rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700 border border-slate-200 mb-3">
                Track 2 &bull; Multi-Partner Firm Portfolio Desk
              </span>
              <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold tracking-tight text-slate-900 mb-2.5">
                10 to 10,000+ Outstanding Invoices? Bulk CSV Activation
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                For mid-to-large CA partnerships, architectural conglomerates, EPC consultancies, and boutique investment banks facing chronic fee retentions, unbilled WIP, or advisory mandate breaches across corporate debtors.
              </p>
              <ul className="space-y-1.5 text-xs text-slate-700 mb-6">
                <li>&check; Automated PAN-to-Form 26AS matching across multi-entity debtor groups</li>
                <li>&check; Segmented partner billing profiles in dedicated Representees workspace</li>
                <li>&check; Institutional recovery desk with Order XXXVII &amp; IBC Section 8 filing pipelines</li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                className="flex-1 inline-flex items-center justify-center px-5 py-3.5 rounded-xl font-bold text-white bg-slate-900 hover:bg-slate-800 transition-colors shadow-sm text-xs sm:text-sm text-center"
              >
                Upload Debtor CSV Portfolio &rarr;
              </Link>
              <Link
                href="/user/representees"
                className="inline-flex items-center justify-center px-4 py-3.5 rounded-xl font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors text-xs sm:text-sm text-center"
              >
                Manage Firm Accounts
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
