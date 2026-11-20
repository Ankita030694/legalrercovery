"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PaymentModal } from "@/components/PaymentModal";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";

interface B2bForumSelectorCTAProps {
  className?: string;
}

export default function B2bForumSelectorCTA({ className = "" }: B2bForumSelectorCTAProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const basePrice = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition;

  return (
    <>
      <div className={`w-full grid grid-cols-1 lg:grid-cols-2 gap-5 ${className}`}>
        {/* Track 1: Self-Serve Single Case Test */}
        <div className="bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white rounded-2xl p-6 sm:p-7 border border-slate-800 shadow-xl flex flex-col justify-between">
          <div>
            <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-red-950/70 text-red-300 border border-red-800/60 mb-3">
              Track 1 • Self-Serve Single Case Test
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2.5 leading-snug">
              Test 1 Live Overdue Case Now (₹{basePrice} · Advocate Drafted)
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-5">
              Turn your selected statutory track into an advocate-vetted Pre-Litigation Legal Notice (MSME s.15/43B(h), IBC Form 3/4, NI s.138, PSS s.25, or Order 37 Demand) dispatched via Email + WhatsApp + Speed Post RPAD.
            </p>
          </div>
          <div className="space-y-3">
            <div className="flex flex-col sm:flex-row gap-2.5">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="flex-1 inline-flex items-center justify-center px-5 py-3 rounded-xl font-semibold text-white bg-[#DC2626] hover:bg-[#B91C1C] transition-colors text-xs sm:text-sm cursor-pointer shadow-lg shadow-red-900/30"
              >
                Draft &amp; Send Notice — ₹{basePrice}
              </button>
              <Link
                href="/user/new-recovery"
                className="inline-flex items-center justify-center px-4 py-3 rounded-xl font-semibold text-slate-200 bg-white/10 hover:bg-white/15 border border-white/15 transition-colors text-xs sm:text-sm text-center"
              >
                Open Case Intake →
              </Link>
            </div>
            <p className="text-[11px] text-slate-400">
              ✓ Forum-matched statutory draft • ✓ BSA s.63 dispatch log • ✓ Flat ₹{basePrice}
            </p>
          </div>
        </div>

        {/* Track 2: Enterprise / Institutional Batch Desk */}
        <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm flex flex-col justify-between">
          <div>
            <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700 border border-slate-200 mb-3">
              Track 2 • Enterprise &amp; Institutional Desk
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2.5 leading-snug">
              Have 10 to 10,000+ Defaulters? Upload CSV / Activate Institutional Desk
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5">
              Built for CFOs, NBFC collection heads, and credit controllers. Automatically segment debtors by ticket tier (₹1L / ₹3L / ₹20L / ₹1Cr), dispatch bulk statutory notices, and track RPAD + WhatsApp delivery proofs in one dashboard.
            </p>
          </div>
          <div className="space-y-3">
            <div className="flex flex-col sm:flex-row gap-2.5">
              <Link
                href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                className="flex-1 inline-flex items-center justify-center px-5 py-3 rounded-xl font-semibold text-white bg-slate-900 hover:bg-slate-800 transition-colors text-xs sm:text-sm text-center"
              >
                Explore Bulk CSV Recovery →
              </Link>
              <Link
                href="/user/representees"
                className="inline-flex items-center justify-center px-4 py-3 rounded-xl font-semibold text-[#DC2626] bg-red-50 hover:bg-red-100 border border-red-200 transition-colors text-xs sm:text-sm text-center"
              >
                Enterprise Onboarding
              </Link>
            </div>
            <p className="text-[11px] text-slate-500">
              ✓ CSV batch upload • ✓ Multi-forum routing • ✓ Dedicated advocate review
            </p>
          </div>
        </div>
      </div>

      <PaymentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
