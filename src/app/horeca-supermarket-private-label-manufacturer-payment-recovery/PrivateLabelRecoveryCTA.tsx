"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PaymentModal } from "@/components/PaymentModal";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";

interface PrivateLabelRecoveryCTAProps {
  buttonText?: string;
  className?: string;
  variant?: "primary" | "inline";
}

export default function PrivateLabelRecoveryCTA({
  buttonText = "Issue Statutory Private-Label Batch Recovery Notice",
  className = "",
  variant = "primary",
}: PrivateLabelRecoveryCTAProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const basePrice = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition;

  return (
    <>
      <div id="dual-track-cta" className={`w-full max-w-full overflow-hidden ${className}`}>
        {variant === "primary" ? (
          <div className="rounded-2xl bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white p-6 sm:p-8 md:p-10 shadow-2xl border border-slate-800">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/70 border border-red-800/70 text-red-300 text-[11px] font-bold uppercase tracking-wider">
                Third-Party &amp; Contract Manufacturer Institutional Recovery Desk
              </span>
              <span className="text-xs font-semibold text-emerald-400">
                Sale of Goods Act s.55 &bull; MSMED Act s.15–18 &bull; Personal Director Liability
              </span>
            </div>

            <p className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-white mb-3">
              D2C Brand Abandoned Custom Batches or Froze OEM Manufacturing Payments?
            </p>
            <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed mb-6 max-w-3xl">
              Do not let undercapitalized D2C startups leave you holding ₹20L to ₹1Cr+ of branded serums, bespoke packaging, or perishable food formulations. Choose between an immediate single-claim advocate statutory demand or onboarding multiple defaulting client brands onto our enterprise recovery desk.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {/* Track 1: Self-Serve Single Case Test */}
              <div className="rounded-xl bg-white/5 border border-white/15 p-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-red-400">
                      Track 01 &bull; Single Disputed Batch Settlement
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-red-600/20 border border-red-500/40 text-xs font-bold text-white">
                      ₹{basePrice} / Notice
                    </span>
                  </div>
                  <p className="text-base font-bold text-white mb-2">
                    Test 1 Live Overdue Case Now (₹{basePrice})
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    Advocate-drafted 15-Day Statutory Demand Notice under Sale of Goods Act Section 55 (Action for Full Price of Custom Goods) and MSMED Act Section 15. Served via Speed Post RPAD, WhatsApp &amp; Email with cryptographic BSA 2023 Section 63 Certificate of Analysis &amp; Purchase Order proofs.
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
                      10 to 10,000+ Batches
                    </span>
                  </div>
                  <p className="text-base font-bold text-white mb-2">
                    Upload CSV / Activate Institutional OEM Plant Desk
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    Contract manufacturers, loan-license bottling units, and food processing plants: bulk-upload defaulted D2C and HoReCa debtor accounts via CSV. Dedicated advocates initiate simultaneous Section 12A commercial mediation, marketplace payout attachments, and MSEFC filings.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2.5 pt-2">
                  <Link
                    href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                    className="flex-1 min-w-[150px] px-4 py-2.5 rounded-xl bg-white text-slate-900 hover:bg-slate-100 text-xs sm:text-sm font-bold shadow-md transition-colors text-center"
                  >
                    Upload CSV Portfolio &rarr;
                  </Link>
                  <Link
                    href="/user/representees"
                    className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold transition-colors text-center"
                  >
                    Manage Multi-Brands
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between text-[11px] text-slate-400 gap-2">
              <span>
                &bull; Zero Legal Retainers &bull; Transparent Fixed Pricing &bull; Bar Council of India Compliant
              </span>
              <span className="text-emerald-400 font-medium">
                Pan-India Delivery &bull; Real-time Postal Tracking &bull; Court-Admissible Proof of Delivery
              </span>
            </div>
          </div>
        ) : (
          <div className="rounded-xl bg-slate-900 text-white p-5 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-sm font-bold text-white mb-1">
                Need to Recover From a Defaulting D2C Brand Immediately?
              </p>
              <p className="text-xs text-slate-300">
                Serve a legally vetted statutory demand notice under Sale of Goods Act s.55 &amp; MSMED Act s.15 for ₹{basePrice}.
              </p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="px-4 py-2 rounded-xl bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs font-bold transition-colors cursor-pointer"
              >
                Send Notice &rarr;
              </button>
              <Link
                href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-medium transition-colors"
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
        serviceType="B2B_RECOVERY"
      />
    </>
  );
}
