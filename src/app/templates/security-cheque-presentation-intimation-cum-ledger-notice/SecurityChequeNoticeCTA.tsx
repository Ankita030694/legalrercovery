"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PaymentModal } from "@/components/PaymentModal";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";

interface SecurityChequeNoticeCTAProps {
  buttonText?: string;
  className?: string;
  variant?: "primary" | "secondary";
}

export default function SecurityChequeNoticeCTA({
  buttonText = "Test 1 Live Overdue Case Now",
  className = "",
  variant = "primary",
}: SecurityChequeNoticeCTAProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const basePrice = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition;

  return (
    <>
      <div className={`w-full max-w-full overflow-hidden ${className}`}>
        {variant === "primary" ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
            {/* Track 1: Self-Serve Single Case Test */}
            <div className="bg-gradient-to-br from-[#111827] via-[#1F2937] to-[#111827] text-white rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-xl flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-red-950/70 text-red-400 border border-red-800/60 mb-4">
                  Track 1 &bull; Single Channel Partner Test
                </div>
                <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white mb-3">
                  Test 1 Live Overdue Case Now
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                  Have our High Court commercial advocates audit your dealer ledger, compute interest, draft an airtight 7-Day Pre-Deposit Notice, and serve it via Email, WhatsApp, and Speed Post RPAD with BSA Section 63 electronic certificates.
                </p>
                <div className="space-y-2 mb-6 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-400 font-bold">&check;</span>
                    <span>Fact-Verified &amp; Dispatched on Bar Council Letterhead</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-400 font-bold">&check;</span>
                    <span>Crystallizes Outstanding Balance Under Section 20 NI Act</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-400 font-bold">&check;</span>
                    <span>Lays Unbreakable Foundation for Section 138 + Section 143A</span>
                  </div>
                </div>
              </div>
              <div className="space-y-3 pt-4 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="w-full inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-bold text-white bg-[#DC2626] hover:bg-[#B91C1C] transition-all shadow-lg shadow-red-900/40 text-sm sm:text-base cursor-pointer text-center"
                >
                  {buttonText} &mdash; &rupee;{basePrice}
                </button>
                <div className="text-center">
                  <Link
                    href="/user/new-recovery"
                    className="text-[11px] text-slate-400 hover:text-slate-200 underline font-medium transition-colors"
                  >
                    Or initiate via client portal direct submission &rarr;
                  </Link>
                </div>
              </div>
            </div>

            {/* Track 2: Enterprise / Institutional Batch Desk */}
            <div className="bg-white border-2 border-slate-200 hover:border-slate-300 rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col justify-between transition-colors">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700 border border-slate-300 mb-4">
                  Track 2 &bull; Enterprise &amp; Institutional Portfolio Desk
                </div>
                <h3 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 mb-3">
                  Have 10 to 10,000+ Defaulters?
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                  For FMCG, Consumer Durables, Pharma, Cement, and Electronics manufacturers managing nationwide distribution networks. Upload your ERP balance aging sheet via CSV for synchronized ledger crystallization across hundreds of distributors.
                </p>
                <div className="space-y-2 mb-6 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-600 font-bold">&check;</span>
                    <span>Bulk CSV ERP Ingestion (SAP, Tally, Zoho, Oracle, Marg)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-600 font-bold">&check;</span>
                    <span>Automated Speed Post RPAD Tracking &amp; Delivery Proof Extraction</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-600 font-bold">&check;</span>
                    <span>Dedicated Credit Control Key Account Advocate &amp; MIS Dashboard</span>
                  </div>
                </div>
              </div>
              <div className="space-y-3 pt-4 border-t border-slate-100">
                <Link
                  href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                  className="w-full inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-bold text-white bg-slate-900 hover:bg-slate-800 transition-all text-sm sm:text-base text-center shadow-md"
                >
                  Upload CSV / Activate Institutional Desk
                </Link>
                <div className="text-center">
                  <Link
                    href="/user/representees"
                    className="text-[11px] text-slate-500 hover:text-slate-800 underline font-medium transition-colors"
                  >
                    Manage corporate entities &amp; authorized signatories &rarr;
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
              className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-sm font-bold text-white bg-[#DC2626] hover:bg-[#B91C1C] transition-colors cursor-pointer text-center shadow-sm"
            >
              Test 1 Overdue Notice (&rupee;{basePrice})
            </button>
            <Link
              href="/bulk-recovery-cases-all-in-one-affordable-solutions"
              className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-sm font-bold text-slate-900 bg-slate-100 hover:bg-slate-200 border border-slate-300 transition-colors text-center"
            >
              Bulk Enterprise CSV Desk &rarr;
            </Link>
          </div>
        )}
      </div>

      <PaymentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
