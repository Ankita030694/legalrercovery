"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PaymentModal } from "@/components/PaymentModal";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";

interface CoopBankCTAProps {
  buttonText?: string;
  className?: string;
  variant?: "primary" | "secondary";
}

export default function CoopBankCTA({
  buttonText = "Test 1 Live Overdue Case Now",
  className = "",
  variant = "primary",
}: CoopBankCTAProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const basePrice = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition; // ₹999

  return (
    <>
      <div className={`w-full max-w-full overflow-hidden ${className}`}>
        {variant === "primary" ? (
          <div className="bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white rounded-2xl p-5 sm:p-8 md:p-10 border border-slate-800 shadow-2xl w-full">
            <div className="max-w-4xl">
              <span className="inline-block px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold tracking-wide uppercase bg-slate-800 text-red-400 border border-slate-700 mb-3 sm:mb-4">
                UCB, DCCB &amp; Credit Society Legal Recovery Engine &bull; s.84, s.101 &amp; SARFAESI
              </span>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-white mb-3">
                Dispatch Defect-Free Borrower + Two-Surety Notices in Under 24 Hours
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed mb-6">
                Built for Urban Co-operative Banks, District Central Co-operative Banks, and Credit Co-operative Societies. Automate simultaneous Email, WhatsApp, and India Post Speed Post RPAD notices to borrowers and both sureties with BSA 2023 s.63 proof—ready for Registrar Recovery Certificates, MSCS s.84 arbitration, or SARFAESI s.13(2) enforcement.
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
                      Test 1 Live Overdue Case Now (&#8377;{basePrice} &middot; Advocate Drafted)
                    </h4>
                    <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                      Send a statutory pre-arbitration (MSCS s.84 / State s.101-s.70), surety invocation, or SARFAESI recall notice via Email + WhatsApp + Speed Post RPAD with complete tracking evidence.
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
                      Onboard your Co-operative Bank branches or Credit Society Head Office via Representees. Batch-dispatch borrower + two-surety notices, salary-deduction requisitions, and Lok Adalat dockets from one CSV manifest.
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
                        Onboard Bank / Society Representees
                      </Link>
                      <span>&bull;</span>
                      <span>Multi-Branch Audit Trail</span>
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
              className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-semibold text-slate-900 bg-white border border-slate-300 hover:bg-slate-100 transition-colors text-center"
            >
              Bulk CSV Desk (10–10,000+ Cases) &rarr;
            </Link>
          </div>
        )}
      </div>

      <PaymentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
