"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PaymentModal } from "@/components/PaymentModal";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";

interface ReeferFreightRecoveryCTAProps {
  buttonText?: string;
  className?: string;
  variant?: "primary" | "inline";
}

export default function ReeferFreightRecoveryCTA({
  buttonText = "Issue Statutory Reefer Freight Demand Notice",
  className = "",
  variant = "primary",
}: ReeferFreightRecoveryCTAProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const basePrice = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition;

  return (
    <>
      <div id="dual-track-cta" className={`w-full max-w-full overflow-hidden ${className}`}>
        {variant === "primary" ? (
          <div className="rounded-2xl bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white p-6 sm:p-8 md:p-10 shadow-2xl border border-slate-800">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/70 border border-red-800/70 text-red-300 text-[11px] font-bold uppercase tracking-wider">
                Cold-Chain Fleet &amp; Reefer Freight Recovery Desk
              </span>
              <span className="text-xs font-semibold text-emerald-400">
                Carriage by Road Act s.10/12 &bull; Raman Iron Foundry Rule &bull; BSA s.63 Dossier
              </span>
            </div>

            <p className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-white mb-3">
              Shipper Deducted Spoilage or Froze Your Reefer Freight Ledger?
            </p>
            <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed mb-6 max-w-3xl">
              Reefer trucks are built to maintain temperature—not to blast-chill warm-loaded cargo! Stop corporate food, pharma, and export shippers from withholding ₹15 Lakhs to ₹50 Lakhs of hard-earned transport freight. Choose between an immediate single-claim statutory demand or enterprise bulk fleet ledger onboarding.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {/* Track 1: Self-Serve Single Case Test */}
              <div className="rounded-xl bg-white/5 border border-white/15 p-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-red-400">
                      Track 01 &bull; Single Disputed Trip Notice
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-red-600/20 border border-red-500/40 text-xs font-bold text-white">
                      ₹{basePrice} / Case
                    </span>
                  </div>
                  <p className="text-base font-bold text-white mb-2">
                    Test 1 Live Overdue Case Now (₹{basePrice})
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    Advocate-drafted 15-Day Statutory Freight Demand Notice under Carriage by Road Act Section 10/12 exceptions and Supreme Court Raman Iron Foundry precedent. Served via Speed Post RPAD, WhatsApp &amp; Email with cryptographic BSA 2023 Section 63 telemetry proofs.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2.5 pt-2">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(true)}
                    className="flex-1 min-w-[150px] px-4 py-2.5 rounded-xl bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs sm:text-sm font-bold shadow-md transition-colors cursor-pointer text-center"
                  >
                    Start ₹{basePrice} Notice &rarr;
                  </button>
                  <Link
                    href="/user/new-recovery"
                    className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold transition-colors text-center"
                  >
                    Direct Form
                  </Link>
                </div>
              </div>

              {/* Track 2: Enterprise Batch Desk */}
              <div className="rounded-xl bg-white/5 border border-white/15 p-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-amber-400">
                      Track 02 &bull; Enterprise Fleet Portfolio
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 border border-amber-400/40 text-xs font-bold text-amber-200">
                      10 to 10,000+ Trips
                    </span>
                  </div>
                  <p className="text-base font-bold text-white mb-2">
                    Batch Upload Defaulting Shippers / Dedicated Fleet Recovery Desk
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    For reefer fleet operators and cold-chain logistics companies managing 20 to 500+ refrigerated trailers: TMS/telematics data reconciliation, automated debit note disallowance notices, MSMED Council arbitration, and Commercial Court Order XXXVII summary suits.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2.5 pt-2">
                  <Link
                    href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                    className="flex-1 min-w-[150px] px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs sm:text-sm font-bold shadow-md transition-colors text-center"
                  >
                    Upload Fleet CSV &rarr;
                  </Link>
                  <Link
                    href="/user/representees"
                    className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold transition-colors text-center"
                  >
                    Institutional Desk
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-emerald-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Telematics data-logger cryptographic verification included
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-emerald-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Direct legal notice service via Speed Post RPAD + WhatsApp
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-emerald-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Strict compliance with Carriage by Road Act Section 10 &amp; 16
              </span>
            </div>
          </div>
        ) : (
          /* Inline variant */
          <div className="rounded-xl bg-slate-900 text-white p-5 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-wider text-red-400 font-bold mb-1">
                Disallow Spurious Spoilage Deductions
              </p>
              <p className="text-sm font-bold text-white">
                Ready to defeat illegal debit notes and recover withheld reefer freight?
              </p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="px-4 py-2 rounded-xl bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs font-bold transition-colors cursor-pointer"
              >
                {buttonText} &rarr;
              </button>
              <Link
                href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors"
              >
                Bulk CSV (10+)
              </Link>
            </div>
          </div>
        )}
      </div>

      <PaymentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        serviceName="Reefer Freight Recovery & Spoilage Defense Legal Notice"
        amount={basePrice}
        recipientName="LegalRecovery.in Fleet Recovery Desk"
      />
    </>
  );
}
