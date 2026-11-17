"use client";

import React, { useState } from "react";
import { PaymentModal } from "@/components/PaymentModal";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";
import Link from "next/link";

interface LCNoticeCTAProps {
  buttonText?: string;
  className?: string;
  variant?: "primary" | "secondary";
}

export default function LCNoticeCTA({
  buttonText = "Issue Statutory UCP 600 Demand Notice",
  className = "",
  variant = "primary",
}: LCNoticeCTAProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const basePrice = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition;

  return (
    <>
      <div className={`w-full max-w-full overflow-hidden ${className}`}>
        {variant === "primary" ? (
          <div className="bg-gradient-to-br from-[#111827] via-[#1F2937] to-[#111827] text-white rounded-2xl p-6 sm:p-8 md:p-10 border border-slate-800 shadow-2xl w-full">
            <div className="max-w-4xl">
              <span className="inline-block px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold tracking-wide uppercase bg-slate-800 text-red-400 border border-slate-700 mb-3 sm:mb-4">
                ICC UCP 600 &bull; Article 16(f) Preclusion Demand &bull; SWIFT MT734 Audit
              </span>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-white mb-3">
                Force Delinquent Issuing Banks to Honor Wrongfully Dishonoured Letters of Credit
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed mb-6">
                When foreign buyers and Tier-3 issuing banks manufacture frivolous spelling discrepancies or exceed the strict 5-banking-day examination window under UCP 600 Article 14(b), Article 16(f) precludes them forever from claiming discrepancy. Serve a cross-border statutory advocate legal notice and regulatory complaint to recover your full drawn export value plus international interest.
              </p>

              {/* Dual-Track B2B Action Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {/* Track 1: Single Recovery Case */}
                <div className="bg-slate-900/90 border border-red-900/60 rounded-xl p-4 sm:p-5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-red-400 uppercase tracking-wider">
                        Track 1: Single LC Default
                      </span>
                      <span className="text-xs bg-red-950 text-red-300 px-2 py-0.5 rounded font-mono">
                        &rupee;{basePrice}
                      </span>
                    </div>
                    <h4 className="text-white font-semibold text-sm sm:text-base mb-1.5">
                      Statutory UCP 600 Demand Notice &amp; SWIFT Rebuttal
                    </h4>
                    <p className="text-slate-400 text-xs leading-relaxed mb-4">
                      Advocate-drafted formal legal notice citing UCP 600 Art. 14, 16(c) &amp; 16(f), served via MT799/MT799 SWIFT channels, registered airmail, and corporate diplomatic escalation to the bank&apos;s primary correspondent.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <button
                      type="button"
                      onClick={() => setIsModalOpen(true)}
                      className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg font-bold text-xs sm:text-sm text-white bg-[#DC2626] hover:bg-[#B91C1C] transition-all shadow-md cursor-pointer text-center"
                    >
                      {buttonText} &mdash; &rupee;{basePrice}
                    </button>
                    <Link
                      href="/user/new-recovery"
                      className="inline-flex items-center justify-center px-3 py-2 rounded-lg font-semibold text-xs text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors text-center"
                    >
                      Start Online Form &rarr;
                    </Link>
                  </div>
                </div>

                {/* Track 2: Enterprise / Bulk Portfolio */}
                <div className="bg-slate-800/80 border border-slate-700 rounded-xl p-4 sm:p-5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                        Track 2: Institutional Trade Desk
                      </span>
                      <span className="text-xs bg-slate-700 text-slate-200 px-2 py-0.5 rounded font-mono">
                        CSV &bull; 10&ndash;10,000+ LCs
                      </span>
                    </div>
                    <h4 className="text-white font-semibold text-sm sm:text-base mb-1.5">
                      Enterprise Cross-Border Export Dues Recovery
                    </h4>
                    <p className="text-slate-400 text-xs leading-relaxed mb-4">
                      For export houses, commodity merchant traders, textile mills, and factoring banks handling multiple defaulted LCs, CAD rejections, and EDPMS caution-listing threats.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <Link
                      href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                      className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg font-bold text-xs sm:text-sm text-slate-900 bg-white hover:bg-slate-100 transition-all shadow-md text-center"
                    >
                      Upload Bulk CSV Portfolio
                    </Link>
                    <Link
                      href="/user/representees"
                      className="inline-flex items-center justify-center px-3 py-2 rounded-lg font-semibold text-xs text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors text-center"
                    >
                      Manage Exporters &rarr;
                    </Link>
                  </div>
                </div>
              </div>

              {/* Compliance Badges */}
              <div className="text-xs text-slate-400 flex flex-wrap items-center gap-2 sm:gap-3 pt-2 border-t border-slate-800">
                <span className="text-emerald-400 font-medium">&check; Article 16(f) Absolute Bar</span>
                <span>&bull;</span>
                <span className="text-slate-300">&check; ICC Banking Commission Opinions (TA/DOCDEX)</span>
                <span>&bull;</span>
                <span className="text-slate-300">&check; SWIFT MT734 &amp; MT799 Traceable Evidence</span>
                <span>&bull;</span>
                <span className="text-slate-300">&check; RBI EDPMS Safe-Harbor Alignment</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-[#DC2626] hover:bg-[#B91C1C] transition-colors cursor-pointer text-center"
            >
              {buttonText} (&rupee;{basePrice})
            </button>
            <Link
              href="/bulk-recovery-cases-all-in-one-affordable-solutions"
              className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors text-center"
            >
              Institutional CSV Desk &rarr;
            </Link>
          </div>
        )}
      </div>

      <PaymentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
