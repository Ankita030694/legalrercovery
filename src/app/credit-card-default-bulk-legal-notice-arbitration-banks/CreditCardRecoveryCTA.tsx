"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PaymentModal } from "@/components/PaymentModal";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";

interface CreditCardRecoveryCTAProps {
  className?: string;
  variant?: "primary" | "compact";
}

export default function CreditCardRecoveryCTA({
  className = "",
  variant = "primary",
}: CreditCardRecoveryCTAProps) {
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
                Credit Card NPA &amp; Neutral ODR Desk
              </span>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                Scale 90–180+ DPD Card Recovery Without RBI Penalties
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Dispatch advocate-drafted pre-arbitration &amp; CICRA-compliant
                credit card notices across Email, WhatsApp, and Speed Post RPAD
                with BSA Section 63 delivery certificates.
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
          serviceName="Credit Card NPA Legal Notice & ODR Escalation"
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
              Dual-Track Institutional Card Recovery Funnel
            </span>
            <span className="text-xs text-slate-400">
              Arbitration Act s.11/s.21 &bull; Post-CORE Neutral ODR &bull; RBI
              Safe
            </span>
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-white mb-3">
              Transition Your Credit Card Collections to Audit-Proof Legal
              Escalation
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed">
              Test a single overdue credit card account in under 24 hours or
              onboard your entire 90–180+ DPD portfolio via CSV. Every notice is
              advocate-vetted, compliant with RBI Penal Charges &amp; Credit
              Card Directions, and backed by tri-channel dispatch proofs for
              neutral ODR arbitration or National Lok Adalat filing.
            </p>
          </div>

          {/* Dual-Track B2B Conversion Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            {/* Track 1: Self-Serve Single Case Test */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5 flex flex-col justify-between hover:border-red-900/50 transition-colors">
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-red-400">
                    Track 1 &bull; Self-Serve Pilot
                  </span>
                  <span className="text-sm font-extrabold text-white">
                    ₹{basePrice} / case
                  </span>
                </div>
                <h4 className="text-sm sm:text-base font-bold text-white">
                  Test 1 Live Overdue Case Now
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Advocate-drafted credit card recall &amp; neutral Section 21
                  pre-arbitration notice. Dispatched simultaneously via Email,
                  WhatsApp, and India Post Speed Post RPAD with BSA s.63
                  delivery proof.
                </p>
              </div>

              <div className="pt-4 mt-3 border-t border-slate-800 space-y-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="w-full inline-flex items-center justify-center px-4 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#DC2626] hover:bg-[#B91C1C] transition-all shadow-md shadow-red-900/40 cursor-pointer"
                >
                  Dispatch 1 Test Notice (₹{basePrice})
                </button>
                <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                  <span>&check; 24h Advocate Draft</span>
                  <Link
                    href="/user/new-recovery"
                    className="text-red-400 hover:text-red-300 underline font-semibold"
                  >
                    Open Self-Serve Portal &rarr;
                  </Link>
                </div>
              </div>
            </div>

            {/* Track 2: Enterprise / Institutional Batch Desk */}
            <div className="bg-white text-slate-900 border border-slate-200 rounded-xl p-5 flex flex-col justify-between shadow-sm">
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700">
                    Track 2 &bull; Enterprise Card Desk
                  </span>
                  <span className="text-xs font-bold text-slate-600">
                    10–10,000+ Accounts
                  </span>
                </div>
                <h4 className="text-sm sm:text-base font-bold text-slate-900">
                  Have 10 to 10,000+ Defaulters? Upload CSV
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Built for VP Credit Card Collections &amp; Unsecured Risk
                  Heads. Automated CSV ingestion, multi-wave pre-charge-off
                  notices, inbound cardholder reply triage, and neutral ODR /
                  Lok Adalat docket readiness.
                </p>
              </div>

              <div className="pt-4 mt-3 border-t border-slate-200 space-y-2">
                <Link
                  href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                  className="w-full inline-flex items-center justify-center px-4 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 transition-all shadow-sm"
                >
                  Activate Institutional Bulk Desk &rarr;
                </Link>
                <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1">
                  <span>&check; Zero Annual SaaS Lock-In</span>
                  <Link
                    href="/user/representees"
                    className="text-[#DC2626] hover:underline font-semibold"
                  >
                    Representee Onboarding &rarr;
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
        serviceName="Credit Card NPA Legal Notice & ODR Escalation"
        price={basePrice}
      />
    </>
  );
}
