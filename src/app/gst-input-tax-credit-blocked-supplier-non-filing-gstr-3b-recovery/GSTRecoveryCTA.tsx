"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PaymentModal } from "@/components/PaymentModal";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";

interface GSTRecoveryCTAProps {
  buttonText?: string;
  className?: string;
  variant?: "primary" | "inline";
}

export default function GSTRecoveryCTA({
  buttonText = "Issue Vendor Tax-Indemnity Legal Notice",
  className = "",
  variant = "primary",
}: GSTRecoveryCTAProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const basePrice = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition;

  return (
    <>
      <div id="dual-track-cta" className={`w-full max-w-full overflow-hidden ${className}`}>
        {variant === "primary" ? (
          <div className="rounded-2xl bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white p-6 sm:p-8 md:p-10 shadow-2xl border border-slate-800">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/70 border border-red-800/70 text-red-300 text-[11px] font-bold uppercase tracking-wider">
                Corporate Indirect Tax &amp; CFO Recovery Desk
              </span>
              <span className="text-xs font-semibold text-emerald-400">
                CGST Act s.76 Anti-Evasion &bull; Contract Act s.124 Tax Indemnity
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-white mb-3">
              Vendor Pocketed 18% GST &amp; Skipped GSTR-3B? Trigger Immediate Tax Deposit or Cash Refund
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed mb-6 max-w-3xl">
              Do not let defaulting suppliers destroy your working capital and trigger DRC-01 audit demands. Serve a Fact-Verified Demand Notice warning of CGST Section 76 statutory deposit, Section 122 penalties, Section 132 criminal prosecution, and contractual indemnity recovery under Section 124 of the Indian Contract Act.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {/* Track 1: Self-Serve Single Case Test */}
              <div className="rounded-xl bg-white/5 border border-white/15 p-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-red-400">
                      Track 01 &bull; Single Vendor Notice
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-red-600/20 border border-red-500/40 text-xs font-bold text-white">
                      ₹{basePrice} / Notice
                    </span>
                  </div>
                  <p className="text-base font-bold text-white mb-2">
                    Test 1 Defaulting Vendor Notice (₹{basePrice})
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    High Court fact-verified demand notice citing CGST Act Section 76, Section 16(2)(c), Section 122, and Contract Act Section 124 indemnity. Simultaneous service via Email, WhatsApp &amp; Speed Post RPAD with BSA Section 63 electronic delivery certificate.
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
                    className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-600 text-slate-100 text-xs sm:text-sm font-semibold transition-colors text-center"
                  >
                    Quick Intake Form
                  </Link>
                </div>
              </div>

              {/* Track 2: Enterprise CSV Batch */}
              <div className="rounded-xl bg-white/5 border border-emerald-500/30 p-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-400">
                      Track 02 &bull; Institutional Batch Desk
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-600/20 border border-emerald-500/40 text-xs font-bold text-emerald-300">
                      10 &ndash; 10,000+ Vendors
                    </span>
                  </div>
                  <p className="text-base font-bold text-white mb-2">
                    Enterprise GSTR-2B Mismatch &amp; ITC Ledger Recovery Desk
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    For enterprise CFOs, FMCG manufacturers, retail chains, and EPC contractors facing multi-crore GSTR-2B mismatches. Bulk upload vendor ledgers, automate statutory indemnity notices nationwide, and initiate collective DGGI Anti-Evasion complaints.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2.5 pt-2">
                  <Link
                    href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                    className="flex-1 min-w-[150px] px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold shadow-md transition-colors text-center"
                  >
                    Bulk CSV Upload &rarr;
                  </Link>
                  <Link
                    href="/user/representees"
                    className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-600 text-slate-100 text-xs sm:text-sm font-semibold transition-colors text-center"
                  >
                    Institutional Desk
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-800/80 flex flex-wrap items-center justify-between text-xs text-slate-400 gap-3">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                Verified Delivery Tracking with Speed Post RPAD &amp; Email Delivery Logs
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
                Bharatiya Sakshya Adhiniyam (BSA 2023) §63 Electronic Admissibility Certificate
              </span>
              <span>Fast 24-48h Dispatch</span>
            </div>
          </div>
        ) : (
          <div className="rounded-xl bg-slate-900 text-white p-5 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <p className="text-sm font-bold text-white mb-1">
                Facing GSTR-2B Mismatches or DRC-01 SCN for Vendor Default?
              </p>
              <p className="text-xs text-slate-300">
                Serve a formal High Court fact-verified legal notice citing CGST Section 76 &amp; Contract Act indemnity.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2.5 shrink-0">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="px-4 py-2 rounded-xl bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs font-bold transition-colors cursor-pointer"
              >
                {buttonText} (₹{basePrice})
              </button>
              <Link
                href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 text-xs font-semibold transition-colors"
              >
                Bulk CSV Desk
              </Link>
            </div>
          </div>
        )}
      </div>

      <PaymentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        serviceName="Vendor GST Non-Filing Tax Indemnity Legal Notice"
        amount={basePrice}
      />
    </>
  );
}
