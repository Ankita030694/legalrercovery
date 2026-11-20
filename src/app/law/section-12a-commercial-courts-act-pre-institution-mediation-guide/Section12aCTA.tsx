"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PaymentModal } from "@/components/PaymentModal";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";

interface Section12aCTAProps {
  className?: string;
}

export default function Section12aCTA({ className = "" }: Section12aCTAProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const basePrice = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition;

  return (
    <>
      <section
        aria-label="Section 12A Commercial Mediation Action Desk"
        className={`w-full grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 ${className}`}
      >
        {/* Track 1: Self-Serve Single Case Test */}
        <div className="bg-gradient-to-br from-[#111827] via-[#1F2937] to-[#111827] text-white rounded-2xl p-6 sm:p-7 border border-slate-800 shadow-xl flex flex-col justify-between">
          <div>
            <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-red-950/70 text-red-400 border border-red-800/60 mb-3">
              Track 1 &bull; Single ₹3L+ B2B Case Pilot
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-2.5 leading-snug">
              Test 1 Live Overdue Case Now (&rupee;{basePrice})
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
              Advocate-drafted pre-mediation statutory demand notice + Form-1 DLSA readiness audit, Specified Value computation, and tri-channel dispatch via Email + WhatsApp + Speed Post RPAD before commercial suit escalation.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-3 rounded-xl font-bold text-sm text-white bg-[#DC2626] hover:bg-[#B91C1C] transition-colors shadow-lg shadow-red-900/30 cursor-pointer text-center"
            >
              Launch 1 Case &mdash; &rupee;{basePrice}
            </button>
            <Link
              href="/user/new-recovery"
              className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-3 rounded-xl font-semibold text-xs sm:text-sm text-slate-200 border border-slate-700 hover:bg-slate-800 transition-colors text-center"
            >
              Open Self-Serve Portal &rarr;
            </Link>
          </div>
        </div>

        {/* Track 2: Enterprise / Institutional Batch Desk */}
        <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm flex flex-col justify-between">
          <div>
            <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700 border border-slate-200 mb-3">
              Track 2 &bull; Enterprise CFO &amp; Legal Head Desk
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-2.5 leading-snug">
              Have 10 to 10,000+ Defaulters? Upload CSV / Activate Institutional Desk
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
              Triage your commercial aging ledger automatically: route &ge; &rupee;3L corporate claims for Section 12A Form-1 DLSA filing or urgent Order XXXVIII Rule 5 relief, MSME dues to Section 43B(h), and &ge; &rupee;1 Cr defaults to IBC Section 8.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <Link
              href="/bulk-recovery-cases-all-in-one-affordable-solutions"
              className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-3 rounded-xl font-bold text-sm text-white bg-slate-900 hover:bg-slate-800 transition-colors text-center"
            >
              Explore Bulk CSV Engine
            </Link>
            <Link
              href="/user/representees"
              className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-3 rounded-xl font-semibold text-xs sm:text-sm text-[#DC2626] border border-red-200 bg-red-50/50 hover:bg-red-50 transition-colors text-center"
            >
              Onboard Corporate Entity &rarr;
            </Link>
          </div>
        </div>
      </section>

      <PaymentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
