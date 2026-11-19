"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PaymentModal } from "@/components/PaymentModal";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";

interface PosSkimmingCTAProps {
  className?: string;
}

export default function PosSkimmingCTA({ className = "" }: PosSkimmingCTAProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const basePrice = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition;

  return (
    <>
      <div className={`w-full grid grid-cols-1 md:grid-cols-2 gap-5 ${className}`}>
        {/* Track 1: Self-Serve Single Case Test */}
        <div className="bg-gradient-to-br from-[#111827] via-[#1F2937] to-[#111827] text-white rounded-2xl p-6 border border-slate-800 shadow-xl flex flex-col justify-between">
          <div>
            <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-red-950/70 text-red-400 border border-red-800/60 mb-3">
              Track 1 &bull; Single Rogue Outlet Test
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
              Test 1 Live Overdue Case Now (&rupee;{basePrice} &middot; Advocate Drafted)
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
              Serve a forensic Input-Output Variance &amp; Contract Act s.74 Penal Royalty Demand Notice (plus PSS Act s.25 e-NACH notice if bounced) via Email + WhatsApp + Speed Post RPAD.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="flex-1 inline-flex items-center justify-center px-5 py-3 rounded-xl font-bold text-sm text-white bg-[#DC2626] hover:bg-[#B91C1C] transition-colors shadow-lg shadow-red-900/30 cursor-pointer text-center"
            >
              Launch Single Notice (&rupee;{basePrice})
            </button>
            <Link
              href="/user/new-recovery"
              className="inline-flex items-center justify-center px-4 py-3 rounded-xl font-semibold text-xs sm:text-sm text-slate-200 bg-white/10 hover:bg-white/20 border border-white/15 transition-colors text-center"
            >
              Self-Serve Intake &rarr;
            </Link>
          </div>
        </div>

        {/* Track 2: Enterprise / Institutional Batch Desk */}
        <div className="bg-white text-slate-900 rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
          <div>
            <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700 border border-slate-200 mb-3">
              Track 2 &bull; Multi-Outlet QSR / Salon / Retail Chains
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
              Have 10 to 10,000+ Defaulters? Upload CSV / Activate Institutional Desk
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
              Batch-audit underreporting franchisees across territories, dispatch synchronized 15-day audit cure notices with GST/commissary schedules, and track responses from one dashboard.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/bulk-recovery-cases-all-in-one-affordable-solutions"
              className="flex-1 inline-flex items-center justify-center px-5 py-3 rounded-xl font-bold text-sm text-white bg-slate-900 hover:bg-slate-800 transition-colors text-center"
            >
              Upload Bulk CSV &rarr;
            </Link>
            <Link
              href="/user/representees"
              className="inline-flex items-center justify-center px-4 py-3 rounded-xl font-semibold text-xs sm:text-sm text-[#DC2626] bg-red-50 hover:bg-red-100 border border-red-200 transition-colors text-center"
            >
              Institutional Desk
            </Link>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <PaymentModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          caseType="Franchisee POS Skimming & Penal Royalty Demand Notice"
          amount={basePrice}
        />
      )}
    </>
  );
}
