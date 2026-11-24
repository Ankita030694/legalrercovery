"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PaymentModal } from "@/components/PaymentModal";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";

interface CommercialLeaseTerminationCTAProps {
  className?: string;
  variant?: "primary" | "secondary";
  buttonText?: string;
}

export default function CommercialLeaseTerminationCTA({
  className = "",
  variant = "primary",
  buttonText = "Draft Lease Termination Notice",
}: CommercialLeaseTerminationCTAProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const basePrice = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition;

  return (
    <>
      {variant === "secondary" ? (
        <div className={`w-full flex items-center justify-start gap-4 ${className}`}>
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
            Bulk Portfolio Desk (10+ Tenants) &rarr;
          </Link>
        </div>
      ) : (
        <div className={`w-full grid grid-cols-1 lg:grid-cols-2 gap-5 ${className}`}>
          {/* Track 1: Self-Serve Single Case Test */}
          <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-7 border border-slate-800 shadow-xl flex flex-col justify-between">
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-red-950/70 text-red-400 border border-red-800/60 mb-3">
                Track 1 &bull; Single Tenant Termination &amp; Arrears Notice
              </span>
              <p className="text-lg sm:text-xl font-extrabold text-white mb-2">
                Test 1 Live Overdue Case Now (&rupee;{basePrice} &middot; Fact-Verified &middot; Email + WhatsApp + Speed Post RPAD)
              </p>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                Serve a rigorous, court-tested Section 106 TPA termination notice on a defaulting corporate tenant, retail occupant, or warehouse lessee. Itemizes unpaid lease rent, 18% GST liability, uncredited Section 194-I TDS under Section 205 IT Act, unamortized fit-out CapEx clawbacks under Contract Act Section 74, and triggers CPC Order XV-A striking of defense warnings.
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
                Track 2 &bull; Landlords, REITs, Mall Owners &amp; Co-Working Operators
              </span>
              <p className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2">
                Have 10 to 10,000+ Defaulters? Upload CSV / Activate Dedicated Institutional Desk
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                Engineered for Commercial Asset Managers, Real Estate Developers, Tech Parks, Shopping Malls, and Co-Working Chains. Batch ingest overdue corporate tenant ledgers across Mumbai, Bengaluru, Delhi-NCR, Hyderabad, and Pune. Automated tri-channel notice generation, BSA 2023 Section 63 electronic delivery certificates, and Commercial Court Order XV-A eviction bundles.
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
                Manage Representees
              </Link>
            </div>
          </div>
        </div>
      )}

      <PaymentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
