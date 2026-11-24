"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PaymentModal } from "@/components/PaymentModal";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";

interface CnfDepositRecoveryCTAProps {
  buttonText?: string;
  className?: string;
  variant?: "primary" | "inline";
}

export default function CnfDepositRecoveryCTA({
  buttonText = "Issue Statutory C&F Security Deposit Demand Notice",
  className = "",
  variant = "primary",
}: CnfDepositRecoveryCTAProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const basePrice = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition;

  return (
    <>
      <div id="dual-track-cta" className={`w-full max-w-full overflow-hidden ${className}`}>
        {variant === "primary" ? (
          <div className="rounded-2xl bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white p-6 sm:p-8 md:p-10 shadow-2xl border border-slate-800">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/70 border border-red-800/70 text-red-300 text-[11px] font-bold uppercase tracking-wider">
                C&amp;F Agent &amp; Super-Stockist Institutional Recovery Desk
              </span>
              <span className="text-xs font-semibold text-emerald-400">
                Contract Act s.222 &bull; Raman Iron Foundry Rule &bull; Order XXXVII CPC
              </span>
            </div>

            <p className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-white mb-3">
              FMCG Brand Terminated Agency and Froze Your Security Deposit &amp; Claims?
            </p>
            <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed mb-6 max-w-3xl">
              Don&apos;t wait 2+ years while corporate finance stalls on secondary scheme credit notes, reverse logistics, and your ₹25 Lakh to ₹2 Crore security deposit. Choose between an immediate single-claim advocate statutory demand or onboarding multiple agency / distributor ledgers on our institutional desk.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {/* Track 1: Self-Serve Single Case Test */}
              <div className="rounded-xl bg-white/5 border border-white/15 p-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-red-400">
                      Track 01 &bull; Single Disputed Agency Settlement
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-red-600/20 border border-red-500/40 text-xs font-bold text-white">
                      ₹{basePrice} / Notice
                    </span>
                  </div>
                  <p className="text-base font-bold text-white mb-2">
                    Test 1 Live Overdue Case Now (₹{basePrice})
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    Fact-verified 15-Day Statutory Demand Notice under Contract Act Sections 73, 217, 221, and 222 plus Supreme Court <em>Raman Iron Foundry</em> precedent. Served via Speed Post RPAD, WhatsApp &amp; Email with cryptographic BSA 2023 Section 63 ERP &amp; scheme proofs.
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
                    <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-400">
                      Track 02 &bull; Institutional Portfolio Desk
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-600/20 border border-emerald-500/40 text-xs font-bold text-white">
                      10 to 10,000+ Cases
                    </span>
                  </div>
                  <p className="text-base font-bold text-white mb-2">
                    Upload CSV / Activate Institutional Agency Desk
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    Multi-territory C&amp;F agents, multi-brand super-stockists, and logistics holding companies: upload disputed agency ledgers via batch CSV. Dedicated advocate team manages Section 12A commercial mediation, Section 9 stock freezes, and Commercial Court Order XXXVII suits.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2.5 pt-2">
                  <Link
                    href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                    className="flex-1 min-w-[150px] px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold shadow-md transition-colors text-center"
                  >
                    Bulk CSV Onboarding &rarr;
                  </Link>
                  <Link
                    href="/user/representees"
                    className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold transition-colors text-center"
                  >
                    Manage Entities
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Bar Council Compliant Notice
                </span>
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Speed Post RPAD Tracking Included
                </span>
              </div>
              <p className="text-slate-400">
                Helpline: <span className="text-white font-semibold">+91 88007 88535</span> &bull; info@legalrecovery.in
              </p>
            </div>
          </div>
        ) : (
          <div className="rounded-xl bg-slate-900 border border-slate-800 p-5 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-sm sm:text-base font-bold text-white mb-1">
                Recover Unpaid C&amp;F Deposits &amp; Trade Claims Today
              </p>
              <p className="text-xs text-slate-300">
                Serve a formal fact-verified notice under Contract Act s.73/222 for ₹{basePrice} or onboard bulk distributor ledgers.
              </p>
            </div>
            <div className="flex items-center gap-2.5 shrink-0">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="px-4 py-2 rounded-lg bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs font-bold transition-colors cursor-pointer"
              >
                {buttonText} &rarr;
              </button>
              <Link
                href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold transition-colors"
              >
                Bulk CSV
              </Link>
            </div>
          </div>
        )}
      </div>

      <PaymentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        serviceTitle="Statutory C&F Security Deposit & Trade Claims Demand Notice"
        basePrice={basePrice}
      />
    </>
  );
}
