"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PaymentModal } from "@/components/PaymentModal";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";

interface Sub20LakhNoticeCTAProps {
  className?: string;
  variant?: "primary" | "compact";
}

export default function Sub20LakhNoticeCTA({
  className = "",
  variant = "primary",
}: Sub20LakhNoticeCTAProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const basePrice = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition || 999;

  if (variant === "compact") {
    return (
      <>
        <div className={`w-full bg-slate-900 text-white rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-xl ${className}`}>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <span className="inline-block px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60">
                Sub-₹20 Lakh Retail NPA Escalation Desk
              </span>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                Stuck with Retail Bank NPAs Below the ₹20 Lakh DRT Limit?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Deploy fact-verified statutory notices under Section 25 PSS Act, Order XXXVII CPC, and Section 21 Arbitration across your retail, personal, and vehicle loan portfolios.
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
                Bulk CSV Upload (10–10k+)
              </Link>
            </div>
          </div>
        </div>
        <PaymentModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          serviceName="Sub-₹20 Lakh Retail Bank Loan Recovery Notice"
          price={basePrice}
        />
      </>
    );
  }

  return (
    <>
      <div className={`w-full bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white rounded-2xl p-6 sm:p-8 md:p-10 border border-slate-800 shadow-2xl ${className}`}>
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-block px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60">
              Dual-Track Creditor Escalation Desk
            </span>
            <span className="text-xs text-slate-400">
              RDB Act s.1(4) &bull; Commercial Courts s.12A &bull; PSS Act s.25
            </span>
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-white mb-3">
              Eliminate Your Branch-Level Sub-₹20 Lakh Litigation Blind Spot
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed">
              When debt recovery tribunals reject claims under ₹20 Lakhs, retail and personal loan NPAs languish at branch level without structured legal pressure. LegalRecovery.in provides scheduled commercial banks, small finance banks, and cooperative lenders with an automated, fact-verified pre-litigation rail combining multi-channel demand notices, DLSA Lok Adalat batching, and institutional arbitration.
            </p>
          </div>

          {/* Dual-Track Conversion Funnel Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            {/* Track 1: Self-Serve Single Case */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5 flex flex-col justify-between hover:border-red-900/40 transition-colors">
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-red-400">
                    Track 1 &bull; Single Case Test
                  </span>
                  <span className="text-sm font-extrabold text-white">
                    ₹{basePrice}
                  </span>
                </div>
                <h4 className="text-sm sm:text-base font-bold text-white">
                  Test 1 Live Overdue Case Now
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Fact-verified statutory demand notice customized for retail, personal, or Mudra NPA. Served via Speed Post RPAD with India Post tracking barcode, verified corporate email, and WhatsApp delivery proof.
                </p>
              </div>

              <div className="pt-4 mt-2 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="w-full inline-flex items-center justify-center px-4 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#DC2626] hover:bg-[#B91C1C] transition-all shadow-md shadow-red-900/40 cursor-pointer"
                >
                  Initiate 1 Notice (₹{basePrice})
                </button>
                <div className="flex items-center justify-center gap-2 mt-2 text-[11px] text-slate-400">
                  <span>&check; 24h Advocate Draft</span>
                  <span>&bull;</span>
                  <span>&check; BSA s.63 Compliant</span>
                </div>
              </div>
            </div>

            {/* Track 2: Enterprise Batch CSV */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 flex flex-col justify-between hover:border-white/20 transition-colors">
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400">
                    Track 2 &bull; Portfolio Bulk Desk
                  </span>
                  <span className="text-xs font-bold text-slate-300">
                    Volume Tiered
                  </span>
                </div>
                <h4 className="text-sm sm:text-base font-bold text-white">
                  Have 10 to 10,000+ Defaulters? Upload CSV
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Bulk CSV ingestion for Retail NPA Heads & Legal VPs. Automated notice generation, real-time postal tracking aggregation, centralized debtor reply triage, and bulk National Lok Adalat DLSA filing sheets.
                </p>
              </div>

              <div className="pt-4 mt-2 border-t border-white/10">
                <Link
                  href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                  className="w-full inline-flex items-center justify-center px-4 py-3 rounded-xl text-xs sm:text-sm font-bold text-slate-900 bg-white hover:bg-slate-100 transition-all shadow-md"
                >
                  Activate Institutional Batch Desk &rarr;
                </Link>
                <div className="flex items-center justify-center gap-2 mt-2 text-[11px] text-slate-400">
                  <span>&check; Dedicated Legal Counsel</span>
                  <span>&bull;</span>
                  <span>&check; API / SFTP Sync</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <PaymentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        serviceName="Sub-₹20 Lakh Retail Bank Loan Recovery Notice"
        price={basePrice}
      />
    </>
  );
}
