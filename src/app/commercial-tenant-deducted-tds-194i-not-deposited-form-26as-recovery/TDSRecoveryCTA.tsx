"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PaymentModal } from "@/components/PaymentModal";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";

interface TDSRecoveryCTAProps {
  buttonText?: string;
  className?: string;
  variant?: "primary" | "inline";
}

export default function TDSRecoveryCTA({
  buttonText = "Issue 194-I TDS Default Legal Notice",
  className = "",
  variant = "primary",
}: TDSRecoveryCTAProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const basePrice = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition;

  return (
    <>
      <div id="dual-track-cta" className={`w-full max-w-full overflow-hidden ${className}`}>
        {variant === "primary" ? (
          <div className="rounded-2xl bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white p-6 sm:p-8 md:p-10 shadow-2xl border border-slate-800">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/70 border border-red-800/70 text-red-300 text-[11px] font-bold uppercase tracking-wider">
                Commercial Landlord &amp; Corporate Lessor TDS Desk
              </span>
              <span className="text-xs font-semibold text-emerald-400">
                Income Tax Act s.205 Shield &bull; Section 276B Criminal Intimation
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-white mb-3">
              Tenant Deducted 10% TDS but Left Your Form 26AS Empty? Compel Immediate Deposit
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed mb-6 max-w-3xl">
              Do not let cash-strapped corporate tenants pocket your rental tax credits. Serve an Advocate Demand Notice warning of Section 201(1A) penal interest, Section 271C penalties, and a formal complaint to the Commissioner of Income Tax (TDS) under Section 276B criminal prosecution.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {/* Track 1: Self-Serve Single Case Test */}
              <div className="rounded-xl bg-white/5 border border-white/15 p-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-red-400">
                      Track 01 &bull; Single Tenant Notice
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-red-600/20 border border-red-500/40 text-xs font-bold text-white">
                      ₹{basePrice} / Notice
                    </span>
                  </div>
                  <p className="text-base font-bold text-white mb-2">
                    Test 1 Defaulting Tenant Notice (₹{basePrice})
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    High Court advocate-drafted demand notice citing Income Tax Act Section 194-I, Section 205, Section 276B, and Contract Act Section 73. Simultaneous service via Email, WhatsApp &amp; Speed Post RPAD with BSA Section 63 electronic delivery certificate.
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
                      10 &ndash; 10,000+ Defaulters
                    </span>
                  </div>
                  <p className="text-base font-bold text-white mb-2">
                    REIT &amp; Commercial Mall Bulk TDS Ledger Desk
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    For commercial developers, REIT portfolio asset managers, and IT park operators with widespread tenant Form 26AS mismatches. Bulk upload rental ledgers, automate Section 205 demand defenses to the Assessing Officer, and initiate collective CIT-TDS complaint dossiers.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2.5 pt-2">
                  <Link
                    href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                    className="flex-1 min-w-[150px] px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold shadow-md transition-colors text-center"
                  >
                    Upload CSV / Bulk Desk &rarr;
                  </Link>
                  <Link
                    href="/user/representees"
                    className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-600 text-slate-100 text-xs sm:text-sm font-semibold transition-colors text-center"
                  >
                    Manage SPVs
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#DC2626] hover:bg-[#B91C1C] transition-all duration-200 shadow-md cursor-pointer text-center"
            >
              {buttonText} (₹{basePrice})
            </button>
            <Link
              href="/bulk-recovery-cases-all-in-one-affordable-solutions"
              className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors text-center"
            >
              Upload Bulk CSV
            </Link>
          </div>
        )}
      </div>

      <PaymentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
