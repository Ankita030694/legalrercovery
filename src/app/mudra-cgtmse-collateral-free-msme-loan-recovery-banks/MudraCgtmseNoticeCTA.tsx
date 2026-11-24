"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PaymentModal } from "@/components/PaymentModal";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";

interface MudraCgtmseNoticeCTAProps {
  className?: string;
  variant?: "primary" | "compact";
}

export default function MudraCgtmseNoticeCTA({
  className = "",
  variant = "primary",
}: MudraCgtmseNoticeCTAProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const basePrice = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition || 999;

  if (variant === "compact") {
    return (
      <>
        <div
          className={`w-full bg-slate-900 text-white rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-xl ${className}`}
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <span className="inline-block px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60">
                CGTMSE &amp; Mudra Pre-Litigation Compliance Desk
              </span>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                Need Audit-Proof Recall Notices Before CGTMSE / CGFMU Claim Lodgement?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Dispatch fact-verified Loan Recall, PSS Act s.25, and Pre-Litigation Lok Adalat notices across Shishu, Kishore, Tarun, and CGTMSE portfolios with BSA 2023 s.63 delivery certificates.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center justify-center px-5 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#DC2626] hover:bg-[#B91C1C] transition-all shadow-md shadow-red-900/30 cursor-pointer text-center"
              >
                Test 1 Live Case (₹{basePrice})
              </button>
              <Link
                href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                className="inline-flex items-center justify-center px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 hover:text-white border border-slate-700 transition-all text-center"
              >
                Bulk CSV Desk (10–10,000+)
              </Link>
            </div>
          </div>
        </div>
        <PaymentModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          serviceName="Mudra & CGTMSE Unsecured MSME Loan Recall Notice"
          price={basePrice}
        />
      </>
    );
  }

  return (
    <>
      <div
        className={`w-full bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white rounded-2xl p-6 sm:p-8 md:p-10 border border-slate-800 shadow-2xl ${className}`}
      >
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-block px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60">
              Dual-Track Institutional MSME Recovery Desk
            </span>
            <span className="text-xs text-slate-400">
              CGTMSE / NCGTC Compliant &bull; PSS Act s.25 &bull; Lok Adalat Batching
            </span>
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-white mb-3">
              Bridge CGTMSE Claim Compliance &amp; Economical Mudra NPA Recovery
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed">
              Stop losing Mudra and CGTMSE claims to missing service proofs or letting branch staff chase collateral-free NPAs with ineffective telecalling. Launch a single fact-verified notice in 24 hours or onboard your entire zonal MSME portfolio via CSV with automated Speed Post RPAD tracking, Email + WhatsApp logs, and BSA 2023 s.63 evidence certificates.
            </p>
          </div>

          {/* Dual-Track B2B Conversion Funnel */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            {/* Track 1: Self-Serve Single Case Test */}
            <div className="bg-slate-900/90 border border-slate-700/80 rounded-xl p-5 flex flex-col justify-between hover:border-red-700/60 transition-colors">
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-red-400">
                    Track 1 &bull; Self-Serve Single Case Test
                  </span>
                  <span className="text-sm font-extrabold text-white">
                    ₹{basePrice}
                  </span>
                </div>
                <p className="text-sm sm:text-base font-bold text-white">
                  Test 1 Live Overdue Case Now (₹{basePrice} &middot; Fact-Verified)
                </p>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Fact-verified Mudra / CGTMSE Loan Recall Notice (with optional PSS Act s.25 / NI s.138 demand) served via Email + WhatsApp + India Post Speed Post RPAD with CGTMSE-ready audit dossier.
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-800 space-y-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="w-full inline-flex items-center justify-center px-4 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#DC2626] hover:bg-[#B91C1C] transition-all shadow-md shadow-red-900/40 cursor-pointer"
                >
                  Start 1 Live Notice Now (₹{basePrice})
                </button>
                <Link
                  href="/user/new-recovery"
                  className="w-full inline-flex items-center justify-center px-4 py-2 rounded-lg text-[11px] font-semibold text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-800 transition-colors"
                >
                  Or Configure Directly in Creditor Portal &rarr;
                </Link>
              </div>
            </div>

            {/* Track 2: Enterprise / Institutional Batch Desk */}
            <div className="bg-white text-slate-900 border border-slate-200 rounded-xl p-5 flex flex-col justify-between shadow-lg">
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#DC2626]">
                    Track 2 &bull; Institutional Batch Desk
                  </span>
                  <span className="text-xs font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                    10–10,000+ Cases
                  </span>
                </div>
                <p className="text-sm sm:text-base font-bold text-slate-900">
                  Have 10 to 10,000+ Defaulters? Upload CSV / Activate Dedicated Desk
                </p>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Purpose-built for MSME Retail Assets Heads &amp; CGTMSE Claim Nodal Officers. Bulk CBS CSV ingestion, branch-wise RPAD tracking manifests, DLSA Lok Adalat batch sheets, and centralized Representee portal governance.
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-200 space-y-2">
                <Link
                  href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                  className="w-full inline-flex items-center justify-center px-4 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 transition-all shadow-md"
                >
                  Explore Bulk CSV Solutions (10–10,000+) &rarr;
                </Link>
                <Link
                  href="/user/representees"
                  className="w-full inline-flex items-center justify-center px-4 py-2 rounded-lg text-[11px] font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 transition-colors"
                >
                  Register Bank Panel via Representees Desk &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <PaymentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        serviceName="Mudra & CGTMSE Unsecured MSME Loan Recall Notice"
        price={basePrice}
      />
    </>
  );
}
