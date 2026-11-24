"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PaymentModal } from "@/components/PaymentModal";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";

interface EduLoanCTAProps {
  buttonText?: string;
  className?: string;
  variant?: "primary" | "secondary";
}

export default function EduLoanCTA({
  buttonText = "Test 1 Live Overdue Case Now",
  className = "",
  variant = "primary",
}: EduLoanCTAProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const basePrice = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition; // ₹999

  return (
    <>
      <div className={`w-full max-w-full overflow-hidden ${className}`}>
        {variant === "primary" ? (
          <div className="bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white rounded-2xl p-5 sm:p-8 md:p-10 border border-slate-800 shadow-2xl w-full">
            <div className="max-w-4xl">
              <span className="inline-block px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold tracking-wide uppercase bg-slate-800 text-red-400 border border-slate-700 mb-3 sm:mb-4">
                Overseas Education Loan &amp; Co-Obligor Legal Desk &bull; CPC O.V R.25 + s.43
              </span>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-white mb-3">
                Serve Overseas NRI Students &amp; Indian Parent Co-Obligors in Under 24 Hours
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed mb-6">
                Built for PSU, Private, and Small Finance Bank Retail Loan Recovery Heads. Dispatch simultaneous Email + WATI WhatsApp notices to overseas student borrowers alongside India Post Speed Post RPAD notices to Indian co-applicants and guarantors—backed by BSA 2023 s.63 electronic service proof for CGFSEL claims, Lok Adalat, Order XXXVII suits, and SARFAESI enforcement.
              </p>

              {/* Dual-Track B2B Conversion Funnel */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-6">
                {/* Track 1: Self-Serve Single Case Test */}
                <div className="bg-slate-900 border border-slate-700/80 rounded-xl p-5 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-red-400 block mb-1">
                      Track 1 &bull; Self-Serve Single Case Test
                    </span>
                    <h4 className="text-base font-bold text-white mb-2">
                      Test 1 Live Overdue Case Now (&#8377;{basePrice} &middot; Fact-Verified)
                    </h4>
                    <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                      Send a Contract Act s.43 co-obligor recall notice + international Email/WhatsApp notice to the student abroad and Speed Post RPAD to Indian parents with full BSA s.63 tracking.
                    </p>
                  </div>
                  <div className="space-y-2.5">
                    <button
                      type="button"
                      onClick={() => setIsModalOpen(true)}
                      className="w-full inline-flex items-center justify-center px-5 py-3 rounded-xl font-bold text-white bg-[#DC2626] hover:bg-[#B91C1C] transition-all duration-200 shadow-lg shadow-red-900/40 text-sm cursor-pointer text-center"
                    >
                      {buttonText} &mdash; &#8377;{basePrice}
                    </button>
                    <div className="text-[11px] text-slate-400 text-center flex flex-wrap items-center justify-center gap-2">
                      <Link
                        href="/user/new-recovery"
                        className="text-red-300 hover:text-white underline underline-offset-2 font-semibold"
                      >
                        Or Open Self-Serve Portal (/user/new-recovery)
                      </Link>
                      <span>&bull;</span>
                      <span>&check; BSA s.63 Certificate</span>
                    </div>
                  </div>
                </div>

                {/* Track 2: Enterprise / Institutional Batch Desk */}
                <div className="bg-white border border-slate-200 rounded-xl p-5 flex flex-col justify-between text-slate-900">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
                      Track 2 &bull; Enterprise &amp; Institutional Batch Desk
                    </span>
                    <h4 className="text-base font-bold text-slate-900 mb-2">
                      Have 10 to 10,000+ Defaulters? Upload CSV / Activate Institutional Desk
                    </h4>
                    <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                      Onboard your Zonal Education Loan Recovery Desk or Retail Asset Centre via Representees. Automate dual-party CSV notice batches for CGFSEL claims, Lok Adalat drives, and SARFAESI portfolios.
                    </p>
                  </div>
                  <div className="space-y-2.5">
                    <Link
                      href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                      className="w-full inline-flex items-center justify-center px-5 py-3 rounded-xl font-bold text-white bg-slate-900 hover:bg-slate-800 transition-all duration-200 shadow-md text-sm cursor-pointer text-center"
                    >
                      Upload CSV / Activate Institutional Desk &rarr;
                    </Link>
                    <div className="text-[11px] text-slate-600 text-center flex flex-wrap items-center justify-center gap-2">
                      <Link
                        href="/user/representees"
                        className="text-[#DC2626] hover:text-[#B91C1C] font-semibold underline underline-offset-2"
                      >
                        Onboard Bank Representees
                      </Link>
                      <span>&bull;</span>
                      <span>10 to 10,000+ Education NPAs</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#DC2626]">
                Dual-Track Education Loan Recovery
              </span>
              <h3 className="text-base sm:text-lg font-black text-slate-900">
                Test 1 Education NPA Notice (&#8377;{basePrice}) or Upload a Zonal CSV Batch
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Simultaneous NRI Email/WhatsApp + Indian Co-Applicant RPAD with BSA 2023 s.63 delivery audit logs.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="px-4 py-2.5 rounded-xl bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs sm:text-sm font-bold shadow-sm transition-colors cursor-pointer"
              >
                Test 1 Case (&#8377;{basePrice})
              </button>
              <Link
                href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-bold shadow-sm transition-colors"
              >
                Bulk CSV Desk &rarr;
              </Link>
            </div>
          </div>
        )}
      </div>

      <PaymentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
