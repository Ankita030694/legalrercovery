"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PaymentModal } from "@/components/PaymentModal";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";

interface EventRecoveryNoticeCTAProps {
  buttonText?: string;
  className?: string;
  variant?: "primary" | "inline";
}

export default function EventRecoveryNoticeCTA({
  buttonText = "Issue 15-Day Post-Event Statutory Demand Notice",
  className = "",
  variant = "primary",
}: EventRecoveryNoticeCTAProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const basePrice = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition;

  return (
    <>
      <div id="dual-track-cta" className={`w-full max-w-full overflow-hidden ${className}`}>
        {variant === "primary" ? (
          <div className="rounded-2xl bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white p-6 sm:p-8 md:p-10 shadow-2xl border border-slate-800">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/70 border border-red-800/70 text-red-300 text-[11px] font-bold uppercase tracking-wider">
                Live Event &amp; Exhibition Stall Fabrication Recovery Desk
              </span>
              <span className="text-xs font-semibold text-emerald-400">
                BSA 2023 s.63 &bull; MSMED Act s.15–18 &bull; Order XXXVII CPC
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-white mb-3">
              Client Withholding Your 40% Post-Event Balance or Disputing Midnight WhatsApp Additions?
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed mb-6 max-w-3xl">
              Whether you are an exhibition stall fabricator at Pragati Maidan (IECC), Yashobhoomi (IICC), NESCO Mumbai, BIEC Bengaluru, or HITEX Hyderabad, or an experiential agency managing large corporate summits, choose between an instant single-debtor notice or enterprise portfolio onboarding.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {/* Track 1: Self-Serve Single Case Test */}
              <div className="rounded-xl bg-white/5 border border-white/15 p-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-red-400">
                      Track 01 &bull; Single Event / Stall Debtor Notice
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-red-600/20 border border-red-500/40 text-xs font-bold text-white">
                      ₹{basePrice} / Case
                    </span>
                  </div>
                  <p className="text-base font-bold text-white mb-2">
                    Test 1 Live Overdue Case Now (₹{basePrice})
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    Advocate-drafted 15-day statutory demand notice incorporating BSA 2023 Section 63 cryptographic WhatsApp approval logs, on-site completion photos, and MSMED Act 3x RBI compound interest calculation. Dispatched simultaneously via Speed Post RPAD, WhatsApp &amp; Email.
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
                      Track 02 &bull; Enterprise Event &amp; Vendor Portfolio
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 border border-amber-400/40 text-xs font-bold text-amber-200">
                      10 to 10,000+ Accounts
                    </span>
                  </div>
                  <p className="text-base font-bold text-white mb-2">
                    Batch Upload Defaulting Brands / Dedicated Agency Legal Recovery Desk
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    Institutional ledger recovery for experiential agencies, AV production houses, and nationwide exhibition fabricators: batch CSV processing, MSME Samadhaan filing, Section 43B(h) tax audit leverage, and Commercial Court litigation management across major trade hubs.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2.5 pt-2">
                  <Link
                    href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                    className="flex-1 min-w-[150px] px-4 py-2.5 rounded-xl bg-white text-slate-900 hover:bg-slate-100 text-xs sm:text-sm font-bold shadow-md transition-colors text-center"
                  >
                    Upload Bulk CSV &rarr;
                  </Link>
                  <Link
                    href="/user/representees"
                    className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold transition-colors text-center"
                  >
                    Client Desk
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-800/80 flex flex-wrap items-center justify-between text-xs text-slate-400 gap-3">
              <span>&check; BSA 2023 s.63 Compliant WhatsApp Audit Certificate</span>
              <span>&bull;</span>
              <span>&check; Bar Council of India Advocate Vetted Notice</span>
              <span>&bull;</span>
              <span>&check; Pan-India Speed Post Tracking with Delivery Confirmation</span>
            </div>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-[#DC2626] hover:bg-[#B91C1C] transition-colors cursor-pointer text-center"
          >
            {buttonText} (₹{basePrice})
          </button>
        )}
      </div>

      <PaymentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
