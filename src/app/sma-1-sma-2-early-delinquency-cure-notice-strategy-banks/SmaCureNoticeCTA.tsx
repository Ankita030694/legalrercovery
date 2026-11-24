"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PaymentModal } from "@/components/PaymentModal";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";

interface SmaCureNoticeCTAProps {
  className?: string;
  variant?: "primary" | "compact";
}

export default function SmaCureNoticeCTA({
  className = "",
  variant = "primary",
}: SmaCureNoticeCTAProps) {
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
                Day-62 SMA-2 Cure Notice Desk
              </span>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                Arrest SMA-2 Slippage Before Day-90 NPA Stamping
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Deploy fact-verified Soft Legal Cure Notices via Email, WhatsApp, and Speed Post RPAD across 61–85 DPD retail and SME cohorts.
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
          serviceName="Day-62 SMA-2 Fact-Verified Cure Notice"
          price={basePrice}
        />
      </>
    );
  }

  return (
    <>
      <div
        id="cta-desk"
        className={`scroll-mt-28 w-full bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white rounded-2xl p-6 sm:p-8 md:p-10 border border-slate-800 shadow-2xl ${className}`}
      >
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-block px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60">
              Dual-Track Early Delinquency Desk
            </span>
            <span className="text-xs text-slate-400">
              RBI IRACP Compliant &bull; Day-62 Batch Dispatch &bull; BSA 2023 s.63 Audit Trail
            </span>
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-white mb-3">
              Stop Paying 15% NPA Provisioning on Preventable SMA-2 Accounts
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed">
              Once an SMA-2 account crosses 90 DPD at day-end, partial payments cannot restore Standard status. LegalRecovery.in equips bank CROs and Retail Early-Warning Heads with automated, fact-verified cure notices delivered within 24 hours across Email, WhatsApp, and Speed Post RPAD.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            {/* Track 1: Self-Serve Single Case Test */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5 flex flex-col justify-between hover:border-red-900/40 transition-colors">
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-red-400">
                    Track 1 &bull; Single Case Pilot
                  </span>
                  <span className="text-sm font-extrabold text-white">
                    ₹{basePrice}
                  </span>
                </div>
                <h4 className="text-sm sm:text-base font-bold text-white">
                  Test 1 Live Overdue Case Now
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Fact-verified SMA-1/SMA-2 Cure Notice with exact FIFO arrears breakup and Day-90 NPA warning. Dispatched via Email, WhatsApp, and Speed Post RPAD.
                </p>
              </div>

              <div className="pt-4 mt-2 border-t border-slate-800 space-y-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="w-full inline-flex items-center justify-center px-4 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#DC2626] hover:bg-[#B91C1C] transition-all shadow-md shadow-red-900/40 cursor-pointer"
                >
                  Initiate 1 Cure Notice (₹{basePrice})
                </button>
                <div className="flex items-center justify-between text-[11px] text-slate-400 px-1">
                  <span>&check; 24h Advocate Draft</span>
                  <Link
                    href="/user/new-recovery"
                    className="text-red-400 hover:text-red-300 underline"
                  >
                    Self-Serve Portal &rarr;
                  </Link>
                </div>
              </div>
            </div>

            {/* Track 2: Enterprise Batch CSV */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 flex flex-col justify-between hover:border-white/20 transition-colors">
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400">
                    Track 2 &bull; Institutional Batch Desk
                  </span>
                  <span className="text-xs font-bold text-slate-300">
                    10 to 10,000+ Cases
                  </span>
                </div>
                <h4 className="text-sm sm:text-base font-bold text-white">
                  Upload SMA-1 / SMA-2 CSV Cohort
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Automated Day-62 batch dispatch for Commercial Banks, SFBs, and Cooperative Banks. Includes vernacular templates, India Post tracking sync, and Day-85 escalation handoff.
                </p>
              </div>

              <div className="pt-4 mt-2 border-t border-white/10 space-y-2">
                <Link
                  href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                  className="w-full inline-flex items-center justify-center px-4 py-3 rounded-xl text-xs sm:text-sm font-bold text-slate-900 bg-white hover:bg-slate-100 transition-all shadow-md"
                >
                  Activate Institutional Batch Desk &rarr;
                </Link>
                <div className="flex items-center justify-between text-[11px] text-slate-400 px-1">
                  <span>&check; SFTP / CSV Ingestion</span>
                  <Link
                    href="/user/representees"
                    className="text-emerald-400 hover:text-emerald-300 underline"
                  >
                    Manage Representees &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <PaymentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        serviceName="Day-62 SMA-2 Fact-Verified Cure Notice"
        price={basePrice}
      />
    </>
  );
}
