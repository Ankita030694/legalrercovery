"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PaymentModal } from "@/components/PaymentModal";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";

interface OdrClauseCTAProps {
  className?: string;
}

export default function OdrClauseCTA({ className = "" }: OdrClauseCTAProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const basePrice = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition;

  return (
    <>
      <div className={`w-full grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 ${className}`}>
        {/* Track 1 — Self-Serve Single Case Test */}
        <div className="bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white rounded-2xl p-5 sm:p-6 border border-slate-800 shadow-lg flex flex-col justify-between">
          <div>
            <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-red-950/80 text-red-400 border border-red-800/60 mb-3">
              Track 1 &bull; Single Case Pilot
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
              Test 1 Live Overdue Case Now (&rupee;{basePrice})
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
              Advocate-Drafted Loan Recall, Section 21 ODR Invocation, or Section 25 PSS Notice &middot; Dispatched via Email + WhatsApp + Speed Post RPAD with BSA s.63 delivery log.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2.5">
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="flex-1 inline-flex items-center justify-center px-4 py-3 rounded-xl font-bold text-sm text-white bg-[#DC2626] hover:bg-[#B91C1C] transition-colors shadow-md cursor-pointer text-center"
            >
              Start 1 Case (&rupee;{basePrice})
            </button>
            <Link
              href="/user/new-recovery"
              className="inline-flex items-center justify-center px-4 py-3 rounded-xl font-semibold text-xs sm:text-sm text-slate-200 bg-white/10 hover:bg-white/20 border border-white/15 transition-colors text-center"
            >
              Self-Serve Form &rarr;
            </Link>
          </div>
        </div>

        {/* Track 2 — Enterprise / Institutional Batch Desk */}
        <div className="bg-white text-slate-900 rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
          <div>
            <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700 border border-slate-200 mb-3">
              Track 2 &bull; Institutional CSV Desk
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
              Have 10 to 10,000+ Defaulters? Upload CSV
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
              Audit legacy unilateral clauses, trigger post-CORE compliant Section 21 ODR notices in bulk, and track borrower replies inside a centralized institutional representee desk.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2.5">
            <Link
              href="/bulk-recovery-cases-all-in-one-affordable-solutions"
              className="flex-1 inline-flex items-center justify-center px-4 py-3 rounded-xl font-bold text-sm text-white bg-slate-900 hover:bg-slate-800 transition-colors text-center"
            >
              Bulk CSV Solutions
            </Link>
            <Link
              href="/user/representees"
              className="inline-flex items-center justify-center px-4 py-3 rounded-xl font-semibold text-xs sm:text-sm text-[#DC2626] bg-red-50 hover:bg-red-100 border border-red-200 transition-colors text-center"
            >
              Representees Desk &rarr;
            </Link>
          </div>
        </div>
      </div>

      <PaymentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
