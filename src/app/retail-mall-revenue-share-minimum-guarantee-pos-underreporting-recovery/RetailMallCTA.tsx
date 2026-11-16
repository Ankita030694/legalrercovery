"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PaymentModal } from "@/components/PaymentModal";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";

interface RetailMallCTAProps {
  buttonText?: string;
  className?: string;
  variant?: "primary" | "inline";
}

export default function RetailMallCTA({
  buttonText = "Issue Statutory Mall Default Demand Notice",
  className = "",
  variant = "primary",
}: RetailMallCTAProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const basePrice = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition;

  return (
    <>
      <div id="dual-track-cta" className={`w-full max-w-full overflow-hidden ${className}`}>
        {variant === "primary" ? (
          <div className="rounded-2xl bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white p-6 sm:p-8 md:p-10 shadow-2xl border border-slate-800">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/70 border border-red-800/80">
                <span className="w-2 h-2 rounded-full bg-[#DC2626] animate-pulse" />
                Institutional Mall &amp; Retail Recovery Desk
              </span>
              <span className="text-xs text-slate-400">
                CPC Order XXXVII &bull; Easements Act s.52 &bull; Commercial Courts Act 2015
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight leading-snug">
                  Recover Underreported Revenue Share &amp; Unpaid MMG Arrears
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Serve advocate-drafted statutory demand notices on defaulting retail tenants, kiosk brands, and F&amp;B outlets diverting UPI sales off-POS. Enforce 48-hour POS audit compliance, utility shut-off protocols, and commercial summary decrees with high-court backed legal speed.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-emerald-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>BSA s.63 POS Logs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-emerald-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>15-Day Cure Notice</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-emerald-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Order 37 Pre-Deposit</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 bg-slate-900/90 p-5 sm:p-6 rounded-2xl border border-slate-700/80 space-y-4">
                <div className="border-b border-slate-700 pb-3">
                  <p className="text-xs font-bold text-red-400 uppercase tracking-wider">
                    Dual Recovery Track
                  </p>
                  <p className="text-lg font-black text-white mt-1">
                    Choose Your Enforcement Channel
                  </p>
                </div>

                {/* Track 1: Single Notice */}
                <div className="space-y-2">
                  <div className="flex justify-between items-baseline">
                    <span className="text-xs font-bold text-slate-200">Track 1: Single Tenant Demand Notice</span>
                    <span className="text-base font-black text-emerald-400">₹{basePrice}</span>
                  </div>
                  <p className="text-[11px] text-slate-400">
                    Advocate-vetted Section 106 / Easements Act demand notice with registered post delivery &amp; tracking.
                  </p>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => setIsModalOpen(true)}
                      className="flex-1 py-2.5 px-4 bg-[#DC2626] hover:bg-red-700 text-white rounded-xl text-xs font-bold transition-all text-center shadow-lg shadow-red-950/50 cursor-pointer"
                    >
                      {buttonText}
                    </button>
                    <Link
                      href="/user/new-recovery"
                      className="py-2.5 px-3 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-semibold transition-all border border-slate-700 text-center"
                    >
                      Self-Serve
                    </Link>
                  </div>
                </div>

                <div className="relative py-1 flex items-center justify-center">
                  <div className="border-t border-slate-700 w-full" />
                  <span className="bg-slate-900 px-2 text-[10px] uppercase tracking-wider text-slate-400 font-bold absolute">
                    OR
                  </span>
                </div>

                {/* Track 2: Enterprise Bulk */}
                <div className="space-y-2">
                  <div className="flex justify-between items-baseline">
                    <span className="text-xs font-bold text-slate-200">Track 2: Mall Bulk Arrears Recovery (CSV)</span>
                    <span className="text-[11px] font-bold text-amber-400">10 to 1,000+ Tenants</span>
                  </div>
                  <p className="text-[11px] text-slate-400">
                    Dedicated account manager for leasing directors, airport concourses, and shopping mall portfolios.
                  </p>
                  <div className="flex gap-2">
                    <Link
                      href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                      className="flex-1 py-2.5 px-4 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-xs font-bold transition-all border border-slate-700 text-center flex items-center justify-center gap-1.5"
                    >
                      <span>Upload Bulk Excel / CSV</span>
                      <svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                    <Link
                      href="/user/representees"
                      className="py-2.5 px-3 bg-slate-800/80 hover:bg-slate-700 text-slate-300 rounded-xl text-xs font-medium transition-all border border-slate-700 text-center"
                    >
                      Manage
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="rounded-xl bg-slate-900 p-4 sm:p-5 border border-slate-800 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-sm font-bold text-white">Defaulting Mall or Food-Court Tenant?</p>
              <p className="text-xs text-slate-400 mt-0.5">
                Issue advocate-drafted MMG cure &amp; POS audit notices with statutory evidence preservation.
              </p>
            </div>
            <div className="flex items-center gap-2.5 shrink-0 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="flex-1 sm:flex-none py-2 px-4 bg-[#DC2626] hover:bg-red-700 text-white rounded-lg text-xs font-bold transition-all text-center"
              >
                Send ₹{basePrice} Notice
              </button>
              <Link
                href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                className="flex-1 sm:flex-none py-2 px-3 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs font-semibold transition-all border border-slate-700 text-center"
              >
                Bulk Onboarding
              </Link>
            </div>
          </div>
        )}
      </div>

      <PaymentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        category="B2B Commercial Recovery"
      />
    </>
  );
}
