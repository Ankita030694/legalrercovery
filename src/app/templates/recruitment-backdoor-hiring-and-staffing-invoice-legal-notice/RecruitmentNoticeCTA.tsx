"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PaymentModal } from "@/components/PaymentModal";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";

interface RecruitmentNoticeCTAProps {
  buttonText?: string;
  className?: string;
  variant?: "primary" | "secondary";
}

export default function RecruitmentNoticeCTA({
  buttonText = "Test 1 Live Overdue Case Now",
  className = "",
  variant = "primary",
}: RecruitmentNoticeCTAProps) {
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
                  Track 1 &bull; Single Overdue Mandate Test
                </div>
                <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white mb-3">
                  Test 1 Live Overdue Case Now
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                  Have our High Court commercial advocates audit your candidate submission timestamps, verify client interview logs, draft an airtight legal notice, and dispatch via Speed Post RPAD, WhatsApp, and Corporate Email with BSA 2023 Section 63 electronic certificates.
                </p>
                <div className="space-y-2 mb-6 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-400 font-bold">&check;</span>
                    <span>Fact-Verified &amp; Dispatched on Bar Council Letterhead</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-400 font-bold">&check;</span>
                    <span>Includes Formatted ATS Timestamp Proof &amp; Contract Act s.8 Pleading</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-400 font-bold">&check;</span>
                    <span>Pre-empts 90-Day Probation &amp; Secret Onboarding Excuses</span>
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
                  Track 2 &bull; Enterprise &amp; Institutional Agency Portfolio
                </div>
                <h3 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 mb-3">
                  Have 10 to 10,000+ Defaulters?
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                  For staffing agencies, executive search consultancies, and facility management contractors managing bulk unpaid monthly invoices or repeated candidate circumventions across multi-city client portfolios.
                </p>
                <div className="space-y-2 mb-6 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <span className="text-[#DC2626] font-bold">&check;</span>
                    <span>Automated CSV / ATS Ingestion for Hundreds of Defaulting Clients</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#DC2626] font-bold">&check;</span>
                    <span>Dedicated Senior Advocate Recovery Panel &amp; Pre-Litigation Desk</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#DC2626] font-bold">&check;</span>
                    <span>Direct Integration with MSME Samadhaan &amp; Commercial Courts</span>
                  </div>
                </div>
              </div>
              <div className="space-y-3 pt-4 border-t border-slate-200">
                <Link
                  href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                  className="w-full inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-bold text-white bg-slate-900 hover:bg-slate-800 transition-all text-sm sm:text-base text-center"
                >
                  Upload CSV &amp; Activate Institutional Desk &rarr;
                </Link>
                <div className="text-center">
                  <Link
                    href="/user/representees"
                    className="text-[11px] text-slate-500 hover:text-slate-800 underline font-medium transition-colors"
                  >
                    Manage active enterprise claims &amp; representees &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Secondary Compact Variant */
          <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-xl">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-red-950/80 text-red-400 border border-red-800/60 mb-2">
                Fact-Verified Notice Dispatch Protocol
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                Need a Fact-Verified Notice Served on Bar Council Letterhead?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Get your backdoor hiring or unpaid staffing invoice notice reviewed, customized with cryptographic ATS timestamps, and formally served via Speed Post RPAD, WhatsApp, and Email.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="px-6 py-3 rounded-xl font-bold text-white bg-[#DC2626] hover:bg-[#B91C1C] transition-all text-xs sm:text-sm text-center shadow-lg shadow-red-900/30 cursor-pointer"
              >
                Send Notice &mdash; &rupee;{basePrice}
              </button>
              <Link
                href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                className="px-6 py-3 rounded-xl font-bold text-slate-200 bg-slate-800 hover:bg-slate-700 transition-all text-xs sm:text-sm text-center border border-slate-700"
              >
                Bulk Agency Desk &rarr;
              </Link>
            </div>
          </div>
        )}
      </div>

      <PaymentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        category="B2B & Institutional Recovery"
      />
    </>
  );
}
