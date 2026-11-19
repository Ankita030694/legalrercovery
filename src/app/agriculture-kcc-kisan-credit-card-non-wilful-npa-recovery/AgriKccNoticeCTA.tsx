"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PaymentModal } from "@/components/PaymentModal";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";

interface AgriKccNoticeCTAProps {
  className?: string;
  variant?: "primary" | "compact";
}

export default function AgriKccNoticeCTA({
  className = "",
  variant = "primary",
}: AgriKccNoticeCTAProps) {
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
                Rural &amp; Agri Banking Pre-Litigation Desk
              </span>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                Break Waiver Rumours &amp; False Section 31(i) Defenses Before NPA Ageing
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Dispatch advocate-signed bilingual KCC recall notices, Blue Coast commercial-use SARFAESI triggers, and State RRC / Lok Adalat pre-litigation dockets with BSA 2023 s.63 delivery certificates.
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
          serviceName="Agriculture & KCC NPA Legal Recall Notice (RRB / Bank Desk)"
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
              Dual-Track Institutional Agri &amp; KCC Recovery Desk
            </span>
            <span className="text-xs text-slate-400">
              Blue Coast s.31(i) Screening &bull; State RRC Ready &bull; Lok Adalat Batching
            </span>
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-white mb-3">
              Accelerate KCC, Allied-Agri &amp; Tractor NPA Recovery Across Rural Branches
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed">
              Separate genuine crop-stress KCC accounts for 0%-fee harvest Lok Adalat settlements from high-value commercial poultry, cold-storage, and farmhouse defaulters eligible for SARFAESI and State RRC execution. Test one live high-value notice in 24 hours or onboard entire Regional Rural Bank (RRB) and zonal agri portfolios via CSV with Email + WhatsApp + India Post Speed Post RPAD manifests.
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
                  Test 1 Live Overdue Case Now (₹{basePrice} &middot; Advocate Drafted)
                </p>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Advocate-drafted Agriculture / KCC Recall Notice, tractor hypothecation surrender notice, or pre-RRC demand served via Email + WhatsApp + Speed Post RPAD with BSA 2023 s.63 admissibility proof.
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
                  Engineered for RRB General Managers, Zonal Agri-Banking Heads, and DCCB Recovery Desks. Bulk CBS CSV ingestion, district-wise RPAD tracking manifests, Taluka Lok Adalat schedules, and Representees portal access.
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
                  Register Bank / RRB Panel via Representees &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <PaymentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        serviceName="Agriculture & KCC NPA Legal Recall Notice (RRB / Bank Desk)"
        price={basePrice}
      />
    </>
  );
}
