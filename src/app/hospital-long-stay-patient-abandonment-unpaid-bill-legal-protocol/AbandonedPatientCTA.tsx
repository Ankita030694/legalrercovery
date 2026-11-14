"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PaymentModal } from "@/components/PaymentModal";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";

interface AbandonedPatientCTAProps {
  className?: string;
}

export default function AbandonedPatientCTA({ className = "" }: AbandonedPatientCTAProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const basePrice = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition;

  return (
    <>
      <div className={`w-full grid grid-cols-1 lg:grid-cols-2 gap-5 ${className}`}>
        {/* Track 1: Self-Serve Single Case Test */}
        <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-7 border border-slate-800 shadow-xl flex flex-col justify-between">
          <div>
            <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-red-950/70 text-red-400 border border-red-800/60 mb-3">
              Track 1 &bull; Single Abandoned Patient Legal Escalation
            </span>
            <h3 className="text-lg sm:text-xl font-extrabold text-white mb-2">
              Test 1 Overdue Kin Case Now (&rupee;{basePrice} &middot; Advocate Drafted &middot; Speed Post + Police/DM Copy)
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
              Serve a high-leverage statutory notice on absconding relatives and admission guarantors under Section 128 of the Indian Contract Act and Section 24 of the Senior Citizens Act, accompanied by formal Police/DM intimation copies to unblock beds.
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
        <div className="bg-white text-slate-900 rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm flex flex-col justify-between">
          <div>
            <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700 border border-slate-200 mb-3">
              Track 2 &bull; Hospital Chain, Neuro &amp; Geriatric Legal Desk
            </span>
            <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2">
              Have 10 to 10,000+ Defaulters? Upload CSV / Activate Dedicated Institutional Desk
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
              Built for Medical Superintendents, Medico-Legal Officers, and Healthcare RCM Directors. Upload multiple aged inpatient ledgers, untraceable attendant records, and bounced discharge cheques for automated legal tracking and Order XXXVII suit filings.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/bulk-recovery-cases-all-in-one-affordable-solutions"
              className="inline-flex items-center justify-center px-5 py-3 rounded-xl font-bold text-sm text-white bg-slate-900 hover:bg-slate-800 transition-colors text-center"
            >
              Deploy Institutional Desk &rarr;
            </Link>
            <Link
              href="/user/representees"
              className="inline-flex items-center justify-center px-4 py-3 rounded-xl font-semibold text-xs sm:text-sm text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-colors text-center"
            >
              Manage Representees
            </Link>
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
