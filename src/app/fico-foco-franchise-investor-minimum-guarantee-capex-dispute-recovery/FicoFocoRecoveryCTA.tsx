"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PaymentModal } from "@/components/PaymentModal";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";

interface FicoFocoRecoveryCTAProps {
  className?: string;
}

export default function FicoFocoRecoveryCTA({ className = "" }: FicoFocoRecoveryCTAProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const basePrice = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition;

  return (
    <>
      <div className={`w-full max-w-full overflow-hidden ${className}`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* Track 1 — Self-Serve Single Case Test */}
          <div className="bg-gradient-to-br from-[#111827] via-[#1F2937] to-[#111827] text-white rounded-2xl p-6 sm:p-7 border border-slate-800 shadow-xl flex flex-col justify-between">
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-red-950/70 text-red-400 border border-red-800/60 mb-3">
                Track 1 &bull; Single Store Lockout Rescue
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug mb-2.5">
                Test 1 Live Overdue FOCO / FICO Dispute Now
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                Fact-verified BNS s.316 inventory release notice, CapEx balance demand &amp; Section 9 arbitration warning, dispatched via Email, WhatsApp &amp; Speed Post RPAD.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="flex-1 inline-flex items-center justify-center px-5 py-3.5 rounded-xl font-semibold text-white bg-[#DC2626] hover:bg-[#B91C1C] transition-colors shadow-lg shadow-red-900/30 text-sm cursor-pointer text-center"
                >
                  Start &rupee;{basePrice} Test Case
                </button>
                <Link
                  href="/user/new-recovery"
                  className="inline-flex items-center justify-center px-4 py-3.5 rounded-xl font-semibold text-slate-200 bg-white/10 hover:bg-white/15 border border-white/15 transition-colors text-xs sm:text-sm text-center"
                >
                  Open Case Portal &rarr;
                </Link>
              </div>
              <p className="text-[11px] text-slate-400">
                &check; Fact-Verified &bull; &check; Email + WhatsApp + Speed Post RPAD &bull; &check; BNS s.316 &amp; s.9 Ready
              </p>
            </div>
          </div>

          {/* Track 2 — Enterprise / Institutional Batch Desk */}
          <div className="bg-white text-slate-900 rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700 border border-slate-200 mb-3">
                Track 2 &bull; Multi-Store Retail &amp; Franchise Desk
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug mb-2.5">
                Have 10 to 10,000+ Defaulters? Upload CSV
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                Built for national apparel, jewelry, eyewear, diagnostics, and EV retail brands managing multi-city FOCO/FICO store lockouts, CapEx arrears, and MMG defaults.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                  className="flex-1 inline-flex items-center justify-center px-5 py-3.5 rounded-xl font-semibold text-white bg-slate-900 hover:bg-slate-800 transition-colors text-sm text-center"
                >
                  Upload Bulk CSV Desk
                </Link>
                <Link
                  href="/user/representees"
                  className="inline-flex items-center justify-center px-4 py-3.5 rounded-xl font-semibold text-[#DC2626] bg-red-50 hover:bg-red-100 border border-red-200 transition-colors text-xs sm:text-sm text-center"
                >
                  Manage Representees &rarr;
                </Link>
              </div>
              <p className="text-[11px] text-slate-500">
                &check; 10 to 10,000+ Outlets &bull; &check; Multi-State RPAD &bull; &check; Section 9 &amp; ODR Support
              </p>
            </div>
          </div>
        </div>
      </div>

      <PaymentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
