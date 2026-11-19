"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PaymentModal } from "@/components/PaymentModal";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";

interface OtsRevocationCTAProps {
  buttonText?: string;
  className?: string;
  variant?: "primary" | "secondary";
}

export default function OtsRevocationCTA({
  buttonText = "Test 1 Live OTS Revocation Notice",
  className = "",
  variant = "primary",
}: OtsRevocationCTAProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const basePrice = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition; // ₹999

  return (
    <>
      <div className={`w-full max-w-full overflow-hidden ${className}`}>
        {variant === "primary" ? (
          <div className="bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white rounded-2xl p-5 sm:p-8 md:p-10 border border-slate-800 shadow-2xl w-full">
            <div className="max-w-4xl">
              <span className="inline-block px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold tracking-wide uppercase bg-slate-800 text-red-400 border border-slate-700 mb-3 sm:mb-4">
                Institutional NPA Settlement Desk &bull; Arvindra Electronics Compliant &bull; Tri-Channel Dispatch
              </span>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-white mb-3">
                Revoke Broken OTS Sanctions &amp; Restore Full Contractual Liability Without Writ Delays
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed mb-6">
                Equip your NPA Settlement Committee, Stressed Asset Recovery Branch (SARB), and panel advocates with court-vetted OTS Revocation &amp; Debt Revival Notices, No-Lien deposit appropriation intimations, and BSA 2023 s.63 delivery dossiers.
              </p>

              {/* Dual-Track B2B Conversion Funnel */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-6">
                {/* Track 1: Self-Serve Single Case Test */}
                <div className="bg-slate-900/95 border border-slate-700/80 rounded-xl p-5 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-red-400 block mb-1">
                      Track 1 &bull; Self-Serve Single NPA Account
                    </span>
                    <h4 className="text-base font-bold text-white mb-2">
                      Test 1 Live Overdue Case Now
                    </h4>
                    <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                      Advocate-drafted OTS Revocation &amp; Full Liability Revival Notice dispatched via Email + WhatsApp + Speed Post RPAD with BSA 2023 s.63 audit proof.
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
                    <div className="text-[11px] text-slate-400 text-center flex items-center justify-center gap-2 flex-wrap">
                      <Link
                        href="/user/new-recovery"
                        className="text-slate-200 hover:text-white underline underline-offset-2"
                      >
                        Direct Self-Serve Filing Portal
                      </Link>
                      <span>&bull;</span>
                      <span>24h Advocate Vetting</span>
                    </div>
                  </div>
                </div>

                {/* Track 2: Enterprise Institutional Batch Desk */}
                <div className="bg-white border border-slate-200 rounded-xl p-5 flex flex-col justify-between text-slate-900">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
                      Track 2 &bull; Zonal / Bank-Wide Batch Desk
                    </span>
                    <h4 className="text-base font-bold text-slate-900 mb-2">
                      Have 10 to 10,000+ Broken OTS or NPA Defaulters?
                    </h4>
                    <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                      Upload your failed OTS &amp; NPA CSV ledger for bulk revocation notices, SARFAESI Rule 9(1) re-auction intimations, and centralized branch reply triage.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <Link
                      href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                      className="w-full inline-flex items-center justify-center px-5 py-3 rounded-xl font-bold text-white bg-slate-900 hover:bg-slate-800 transition-all duration-200 shadow-md text-sm cursor-pointer text-center"
                    >
                      Upload CSV / Activate Institutional Desk &rarr;
                    </Link>
                    <div className="text-[11px] text-slate-600 text-center flex items-center justify-center gap-2 flex-wrap">
                      <Link
                        href="/user/representees"
                        className="text-[#DC2626] hover:text-red-800 font-semibold underline underline-offset-2"
                      >
                        Configure Bank Representees
                      </Link>
                      <span>&bull;</span>
                      <span>Zero Annual SaaS Lock-In</span>
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
              Bulk CSV Institutional Desk (10–10,000+ Cases) &rarr;
            </Link>
          </div>
        )}
      </div>

      <PaymentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
