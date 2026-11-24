"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PaymentModal } from "@/components/PaymentModal";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";

interface CaAuditFeeCTAProps {
  className?: string;
}

export default function CaAuditFeeCTA({ className = "" }: CaAuditFeeCTAProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const basePrice = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition;

  return (
    <>
      <div className={`w-full max-w-full ${className}`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* Track 1 — Self-Serve Single Case Test */}
          <div className="bg-gradient-to-br from-[#111827] via-[#1F2937] to-[#111827] text-white rounded-2xl p-6 sm:p-7 border border-slate-800 shadow-xl flex flex-col justify-between">
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-red-950/70 text-red-400 border border-red-800/60 mb-3">
                Track 1 &middot; Single Defaulting Client Claim
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                Test 1 Live Overdue Case Now (&#8377;{basePrice} &middot; Fact-Verified &middot; Email + WhatsApp + Speed Post RPAD)
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                Enter your unpaid SAC 998221/998231 invoice details, audit-fee schedule, Form 26AS 194J entry, UDIN log, or bounced cheque details in our online form. Our team verifies the facts and prepares and sends an ICAI-ethics-safe Order XXXVII CPC / NI Act s.138 / CGST s.16(2) demand notice—keeping your COP and dignity completely protected.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="flex-1 inline-flex items-center justify-center px-5 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#DC2626] hover:bg-[#B91C1C] transition-colors shadow-lg shadow-red-900/30 cursor-pointer text-center"
              >
                Send &#8377;{basePrice} ICAI-Safe Fee Notice
              </button>
              <Link
                href="/user/new-recovery"
                className="inline-flex items-center justify-center px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold text-slate-200 bg-white/10 hover:bg-white/15 border border-white/15 transition-colors text-center"
              >
                Self-Serve Portal &rarr;
              </Link>
            </div>
          </div>

          {/* Track 2 — Multi-Partner CA Firm & Institutional Client Desk */}
          <div className="bg-white text-slate-900 rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700 border border-slate-200 mb-3">
                Track 2 &middot; Multi-Partner CA Firm &amp; Client Portfolio Desk
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                Have 10 to 10,000+ Defaulters? Upload CSV / Activate Dedicated Institutional Desk
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                Clear your CA firm&rsquo;s entire aged debtor ledger (audit, tax, ROC &amp; Virtual-CFO arrears) in one structured batch—and onboard your MSME &amp; corporate audit clients&rsquo; overdue receivables via a dedicated representee workspace with centralized tracking.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                className="flex-1 inline-flex items-center justify-center px-5 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 transition-colors text-center"
              >
                Upload Bulk Defaulter CSV
              </Link>
              <Link
                href="/user/representees"
                className="inline-flex items-center justify-center px-4 py-3 rounded-xl text-xs sm:text-sm font-bold text-[#DC2626] bg-red-50 hover:bg-red-100 border border-red-200 transition-colors text-center"
              >
                Manage Representees &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>

      <PaymentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
