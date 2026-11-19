"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PaymentModal } from "@/components/PaymentModal";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";

interface SarfaesiSection14CTAProps {
  buttonText?: string;
  className?: string;
  variant?: "primary" | "secondary";
}

export default function SarfaesiSection14CTA({
  buttonText = "Test 1 Bank Recovery Case Now",
  className = "",
  variant = "primary",
}: SarfaesiSection14CTAProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const basePrice = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition; // ₹999

  return (
    <>
      <div className={`w-full max-w-full overflow-hidden ${className}`}>
        {variant === "primary" ? (
          <div className="bg-gradient-to-br from-[#111827] via-[#1F2937] to-[#111827] text-white rounded-2xl p-5 sm:p-8 md:p-10 border border-slate-800 shadow-2xl w-full">
            <div className="max-w-4xl">
              <span className="inline-block px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold tracking-wide uppercase bg-slate-800 text-red-400 border border-slate-700 mb-3 sm:mb-4">
                Institutional Bank & NBFC SARFAESI Desk &bull; Defect-Free Section 14 Filings &bull; High Court Writs
              </span>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-white mb-3">
                Accelerate Physical Possession & Eliminate DM / CMM Execution Delays
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed mb-6">
                Equip your Stressed Asset Recovery Branch (SARB) and legal panel with ironclad 9-point statutory affidavits, CERSAI verification audit trails, Section 65A tenancy rebuttal packets, and instant Article 226 High Court writ escalations for delayed orders.
              </p>

              {/* Dual B2B Conversion Tracks */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-6">
                {/* Track 1: Single Case Test */}
                <div className="bg-slate-900/90 border border-slate-700/80 rounded-xl p-5 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-red-400 block mb-1">
                      Track 1 &bull; Single NPA Account Test
                    </span>
                    <h4 className="text-base font-bold text-white mb-2">
                      Test 1 Live Overdue Case Now
                    </h4>
                    <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                      Draft a statutory demand notice or Section 13/14 compliance review. Includes Advocate vetting, Speed Post RPAD dispatch, and BSA 2023 s.63 electronic proof.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <button
                      type="button"
                      onClick={() => setIsModalOpen(true)}
                      className="w-full inline-flex items-center justify-center px-5 py-3 rounded-xl font-bold text-white bg-[#DC2626] hover:bg-[#B91C1C] transition-all duration-200 shadow-lg shadow-red-900/40 text-sm cursor-pointer text-center"
                    >
                      {buttonText} &mdash; &#8377;{basePrice}
                    </button>
                    <div className="text-[11px] text-slate-400 text-center flex items-center justify-center gap-2">
                      <span>&check; 24h Advocate Review</span>
                      <span>&bull;</span>
                      <span>&check; Tri-Channel Notice</span>
                    </div>
                  </div>
                </div>

                {/* Track 2: Enterprise Batch Desk */}
                <div className="bg-white/5 border border-white/10 rounded-xl p-5 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 block mb-1">
                      Track 2 &bull; Enterprise & Bulk Bank Desk
                    </span>
                    <h4 className="text-base font-bold text-white mb-2">
                      Bulk CSV Portfolio Escalation (10 to 10,000+ Defaulters)
                    </h4>
                    <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                      Upload your NPA / SMA-2 portfolio spreadsheet. Batch generate Section 13(2) notices, Section 14 affidavit packs, and automated CERSAI charge audits with dedicated legal panel representation.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <Link
                      href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                      className="w-full inline-flex items-center justify-center px-5 py-3 rounded-xl font-bold text-slate-900 bg-white hover:bg-slate-100 transition-all duration-200 shadow-md text-sm cursor-pointer text-center"
                    >
                      Upload CSV / Activate Institutional Desk &rarr;
                    </Link>
                    <div className="text-[11px] text-slate-400 text-center flex items-center justify-center gap-2">
                      <Link
                        href="/user/representees"
                        className="text-slate-300 hover:text-white underline underline-offset-2"
                      >
                        Manage Bank Representees
                      </Link>
                      <span>&bull;</span>
                      <span>Pan-India Panel Advocates</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-[#DC2626] hover:bg-[#B91C1C] transition-colors cursor-pointer text-center"
            >
              {buttonText} (&#8377;{basePrice})
            </button>
            <Link
              href="/bulk-recovery-cases-all-in-one-affordable-solutions"
              className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors text-center"
            >
              Enterprise Bulk CSV Desk &rarr;
            </Link>
          </div>
        )}
      </div>

      <PaymentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
