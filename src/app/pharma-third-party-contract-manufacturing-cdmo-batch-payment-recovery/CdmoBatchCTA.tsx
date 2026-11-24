"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PaymentModal } from "@/components/PaymentModal";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";

interface CdmoBatchCTAProps {
  className?: string;
}

export default function CdmoBatchCTA({ className = "" }: CdmoBatchCTAProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const basePrice = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition;

  return (
    <>
      <div className={`grid grid-cols-1 md:grid-cols-2 gap-5 w-full ${className}`}>
        {/* Track 1: Self-Serve Single Case Test */}
        <div className="bg-gradient-to-br from-[#111827] via-[#1F2937] to-[#111827] text-white rounded-2xl p-6 border border-slate-800 shadow-xl flex flex-col justify-between">
          <div>
            <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-red-950/70 text-red-400 border border-red-800/60 mb-3">
              Track 1 &bull; Single Batch / PCD Default
            </span>
            <h3 className="text-lg sm:text-xl font-extrabold text-white mb-2 leading-snug">
              Test 1 Live Overdue Case Now (&rupee;{basePrice} &middot; Fact-Verified)
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
              Serve a Fact-verified 15-day statutory demand notice combining Sale of Goods Act
              s.44 storage charges, MSMED Act s.16 3x RBI compound interest, and Income Tax s.43B(h)
              disallowance warnings via Email + WhatsApp + Speed Post RPAD.
            </p>
          </div>
          <div className="space-y-2.5">
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="w-full inline-flex items-center justify-center px-5 py-3 rounded-xl font-bold text-sm text-white bg-[#DC2626] hover:bg-[#B91C1C] transition-colors shadow-lg shadow-red-900/30 cursor-pointer"
            >
              Send Single CDMO Notice &mdash; &rupee;{basePrice}
            </button>
            <Link
              href="/user/new-recovery"
              className="block text-center text-xs font-semibold text-slate-300 hover:text-white underline underline-offset-4"
            >
              Or start directly in Self-Serve Recovery Portal &rarr;
            </Link>
          </div>
        </div>

        {/* Track 2: Enterprise / Institutional Batch Desk */}
        <div className="bg-white text-slate-900 rounded-2xl p-6 border-2 border-slate-200 shadow-sm flex flex-col justify-between">
          <div>
            <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700 border border-slate-200 mb-3">
              Track 2 &bull; Multi-Party CDMO &amp; Plant Desk
            </span>
            <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2 leading-snug">
              Have 10 to 10,000+ Defaulters? Upload CSV / Activate Institutional Desk
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
              Built for formulation plants in Baddi, Haridwar, Paonta Sahib, Ahmedabad &amp;
              Hyderabad managing dozens of defaulting PCD/marketing clients, aged ledger balances,
              and unlifted custom-printed batches simultaneously.
            </p>
          </div>
          <div className="space-y-2.5">
            <Link
              href="/bulk-recovery-cases-all-in-one-affordable-solutions"
              className="w-full inline-flex items-center justify-center px-5 py-3 rounded-xl font-bold text-sm text-white bg-slate-900 hover:bg-slate-800 transition-colors"
            >
              Explore Bulk CSV Recovery Desk &rarr;
            </Link>
            <Link
              href="/user/representees"
              className="block text-center text-xs font-semibold text-[#DC2626] hover:text-[#B91C1C] underline underline-offset-4"
            >
              Onboard Company / Plant Representees &rarr;
            </Link>
          </div>
        </div>
      </div>

      <PaymentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
