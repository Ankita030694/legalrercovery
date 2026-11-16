"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PaymentModal } from "@/components/PaymentModal";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";

interface ConstructionRetentionCTAProps {
  className?: string;
  projectId?: string;
}

export default function ConstructionRetentionCTA({
  className = "",
  projectId,
}: ConstructionRetentionCTAProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const basePrice = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition;

  return (
    <>
      <div className={`w-full grid grid-cols-1 lg:grid-cols-2 gap-5 ${className}`}>
        {/* Track 1: Self-Serve Single Case Test */}
        <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-7 border border-slate-800 shadow-xl flex flex-col justify-between">
          <div>
            <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-red-950/70 text-red-400 border border-red-800/60 mb-3">
              Track 1 &bull; Single Site / Single Contractor Demand
            </span>
            <p className="text-lg sm:text-xl font-extrabold text-white mb-2">
              Test 1 Live Overdue Case Now (&rupee;{basePrice} &middot; Advocate Drafted &middot; Email + WhatsApp + Speed Post RPAD)
            </p>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
              Serve a high-impact, advocate-vetted statutory demand notice on the defaulting developer, PSU, or EPC main contractor. Enforces Limitation Act Art. 113 post-DLP retention release, demands 18% commercial interest under Section 31(7) Arbitration Act and Interest Act 1978, sets a 15-day pre-arbitration deadline, and pre-empts retaliatory Bank Guarantee encashment.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center justify-center px-5 py-3 rounded-xl font-bold text-sm text-white bg-[#DC2626] hover:bg-[#B91C1C] transition-colors cursor-pointer text-center shadow-lg shadow-red-900/30"
            >
              Draft Demand Notice &mdash; &rupee;{basePrice} &rarr;
            </button>
            <Link
              href="/user/new-recovery"
              className="inline-flex items-center justify-center px-4 py-3 rounded-xl font-semibold text-xs sm:text-sm text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors text-center"
            >
              Self-Serve Recovery Portal
            </Link>
          </div>
        </div>

        {/* Track 2: Enterprise / Institutional Batch Desk */}
        <div className="bg-white text-slate-900 rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-xs flex flex-col justify-between">
          <div>
            <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700 border border-slate-200 mb-3">
              Track 2 &bull; EPC &amp; Multi-Site Contractor Batch Desk
            </span>
            <p className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2">
              Have 10 to 10,000+ Defaulters? Upload CSV / Activate Dedicated Institutional Desk
            </p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
              Purpose-built for EPC Turnkey Contractors, MEP/HVAC Contractors, Civil Subcontractors, and Project Management Units managing multiple live packages. Ingest all outstanding RA bills, expired retention tranches, and uncertified MB entries in bulk CSV. Dedicated legal team handles Section 80 CPC notices, Section 9 High Court PBG stays, and Section 11 arbitrator appointments.
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
              Manage Multi-Entity Representees
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
