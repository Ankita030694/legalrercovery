"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PaymentModal } from "@/components/PaymentModal";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";

export default function HealthcareTpaRecoveryCTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const basePrice = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition;

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Track 1: Self-Serve Single Case Test */}
        <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-7 border border-slate-800 shadow-xl flex flex-col justify-between space-y-5">
          <div>
            <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-red-950/70 text-red-400 border border-red-800/60 mb-3">
              Track 1 &bull; Single Claim or Defaulter Test
            </span>
            <p className="text-lg sm:text-xl font-black text-white mb-2">
              Test 1 Live Overdue Case Now (₹{basePrice})
            </p>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Advocate-drafted statutory demand notice for delayed TPA cashless settlement, wrongful consumable cuts, or defaulting post-discharge patient. Dispatched via Email + WhatsApp under BSA 2023 s.63 with optional ₹450 Speed Post RPAD.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center justify-center px-5 py-3 rounded-xl font-bold text-xs sm:text-sm bg-[#DC2626] hover:bg-[#B91C1C] text-white transition-colors shadow-lg shadow-red-900/30 cursor-pointer"
            >
              Launch ₹{basePrice} Notice Test →
            </button>
            <Link
              href="/user/new-recovery"
              className="inline-flex items-center justify-center px-4 py-3 rounded-xl font-bold text-xs sm:text-sm bg-slate-800 hover:bg-slate-700 text-slate-100 border border-slate-700 transition-colors"
            >
              Open Recovery Portal
            </Link>
          </div>
        </div>

        {/* Track 2: Enterprise / Institutional Batch Desk */}
        <div className="bg-white text-slate-900 rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm flex flex-col justify-between space-y-5">
          <div>
            <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700 border border-slate-300 mb-3">
              Track 2 &bull; Hospital RCM Institutional Batch Desk
            </span>
            <p className="text-lg sm:text-xl font-black text-slate-900 mb-2">
              Have 10 to 10,000+ Claims? Upload CSV
            </p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Automated institutional recovery engine for hospital networks, nursing homes, and diagnostic chains: bulk TPA short-settlement reconciliations, CGHS/ECHS Section 80 CPC batches, and multi-patient discharge debt ledgers.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Link
              href="/bulk-recovery-cases-all-in-one-affordable-solutions"
              className="inline-flex items-center justify-center px-5 py-3 rounded-xl font-bold text-xs sm:text-sm bg-slate-900 hover:bg-slate-800 text-white transition-colors"
            >
              Bulk CSV Solutions →
            </Link>
            <Link
              href="/user/representees"
              className="inline-flex items-center justify-center px-4 py-3 rounded-xl font-bold text-xs sm:text-sm bg-slate-100 hover:bg-slate-200 text-slate-900 border border-slate-300 transition-colors"
            >
              Manage Representees
            </Link>
          </div>
        </div>
      </div>

      <PaymentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
