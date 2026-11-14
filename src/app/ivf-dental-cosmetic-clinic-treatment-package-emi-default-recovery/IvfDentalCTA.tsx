"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PaymentModal } from "@/components/PaymentModal";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";

interface IvfDentalCTAProps {
  className?: string;
}

export default function IvfDentalCTA({ className = "" }: IvfDentalCTAProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const basePrice = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition;

  return (
    <>
      <div className={`w-full grid grid-cols-1 lg:grid-cols-2 gap-5 ${className}`}>
        {/* Track 1: Self-Serve Single Case Test */}
        <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-7 border border-slate-800 shadow-xl flex flex-col justify-between">
          <div>
            <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-red-950/70 text-red-400 border border-red-800/60 mb-3">
              Track 1 &bull; Single Default Test Notice
            </span>
            <h3 className="text-lg sm:text-xl font-extrabold text-white mb-2">
              Test 1 Overdue Package Case Now (&rupee;{basePrice} &middot; Advocate Drafted &middot; Tri-Channel Dispatch)
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
              Serve an NMC-compliant, advocate-vetted 15-day demand notice on an unpaid IVF milestone, defaulted dental aligner/implant EMI, or patient threatening extortionate 1-star reviews. Dispatched via Email, WhatsApp, and Speed Post RPAD.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center justify-center px-5 py-3 rounded-xl font-bold text-sm text-white bg-[#DC2626] hover:bg-[#B91C1C] transition-colors cursor-pointer text-center shadow-lg shadow-red-900/30"
            >
              Start &rupee;{basePrice} Live Notice &rarr;
            </button>
            <Link
              href="/user/new-recovery"
              className="inline-flex items-center justify-center px-4 py-3 rounded-xl font-semibold text-xs sm:text-sm text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors text-center"
            >
              Open Self-Serve Desk
            </Link>
          </div>
        </div>

        {/* Track 2: Enterprise / Multi-Branch Clinic Chains */}
        <div className="bg-white text-slate-900 rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm flex flex-col justify-between">
          <div>
            <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700 border border-slate-200 mb-3">
              Track 2 &bull; Dental Chains &amp; Specialty Center Desk
            </span>
            <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2">
              Have 10 to 500+ Unpaid Packages? Upload CSV / Dedicated Legal RCM Desk
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
              Custom-built for fertility hospital chains, multi-branch dental franchises, and cosmetic clinics. Batch upload milestone defaults, stopped cheques, and failed e-NACH installments via CSV with centralized corporate billing.
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
              className="inline-flex items-center justify-center px-4 py-3 rounded-xl font-semibold text-xs sm:text-sm text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 transition-colors text-center"
            >
              Configure Clinic Branches
            </Link>
          </div>
        </div>
      </div>

      <PaymentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        category="Institutional Healthcare Package Recovery"
        price={basePrice}
      />
    </>
  );
}
