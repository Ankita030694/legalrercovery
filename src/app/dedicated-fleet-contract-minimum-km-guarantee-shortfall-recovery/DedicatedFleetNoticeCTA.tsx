"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PaymentModal } from "@/components/PaymentModal";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";

interface DedicatedFleetNoticeCTAProps {
  buttonText?: string;
  className?: string;
  variant?: "primary" | "inline";
}

export default function DedicatedFleetNoticeCTA({
  buttonText = "Issue 15-Day Minimum-Km Shortfall Notice",
  className = "",
  variant = "primary",
}: DedicatedFleetNoticeCTAProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const basePrice = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition;

  return (
    <>
      <div id="dual-track-cta" className={`w-full max-w-full overflow-hidden ${className}`}>
        {variant === "primary" ? (
          <div className="rounded-2xl bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white p-6 sm:p-8 md:p-10 shadow-2xl border border-slate-800">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/70 border border-red-800/70 text-red-300 text-[11px] font-bold uppercase tracking-wider">
                Fleet Operators &amp; Dedicated Carrier Recovery Desk
              </span>
              <span className="text-xs font-semibold text-emerald-400">
                Contract Act s.73/74 &bull; CPC Order 37 &bull; MSMED Act s.18
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-white mb-3">
              Shipper Cut Dedicated Fleet Routes or Withheld Minimum-Km Standing Charges?
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed mb-6 max-w-3xl">
              Whether you are an institutional fleet operator with 50 containerized trucks in Delhi-NCR, Bhiwandi, Chennai, or Bengaluru, an electric commercial vehicle (EV) fleet lessor, or an employee transport operator facing premature lock-in breaches, enforce your contracts through statutory channels.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {/* Track 1: Self-Serve Single Case Test */}
              <div className="rounded-xl bg-white/5 border border-white/15 p-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-red-400">
                      Track 01 &bull; Single Shipper Notice
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-red-600/20 border border-red-500/40 text-xs font-bold text-white">
                      ₹{basePrice} / Notice
                    </span>
                  </div>
                  <p className="text-base font-bold text-white mb-2">
                    Test 1 Live Overdue Case Now (₹{basePrice})
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    Fact-verified 15-Day Statutory Demand Notice claiming Minimum-Km Shortfall, Fixed Standing Vehicle Hire Charges, and Unamortized CapEx under Sections 73 &amp; 74 Indian Contract Act. Dispatched simultaneously via Speed Post RPAD, WhatsApp &amp; Email with cryptographic BSA 2023 Section 63 delivery certificates.
                  </p>
                </div>
                <div className="space-y-2 mt-2">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(true)}
                    className="w-full inline-flex items-center justify-center px-5 py-3 rounded-xl bg-[#DC2626] hover:bg-[#B91C1C] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-lg shadow-red-950/40"
                  >
                    {buttonText} &rarr;
                  </button>
                  <Link
                    href="/user/new-recovery"
                    className="block text-center text-[11px] text-slate-400 hover:text-white underline transition-colors"
                  >
                    Or open self-serve dispute form directly &rarr;
                  </Link>
                </div>
              </div>

              {/* Track 2: Enterprise Fleet Portfolio Batch Desk */}
              <div className="rounded-xl bg-white/10 border border-white/20 p-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-400">
                      Track 02 &bull; Enterprise Fleet Desk
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-xs font-bold text-emerald-300">
                      Multi-Route / Multi-Shipper
                    </span>
                  </div>
                  <p className="text-base font-bold text-white mb-2">
                    Have 10 to 10,000+ Defaulters or Multiple Grounded Fleets?
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    For enterprise 3PLs, logistics aggregators, and commercial vehicle leasing companies handling nationwide route cancellations, unamortized asset repudiation, or chronic corporate payment defaults. Dedicated legal case manager, automated telematics audit matching, and bulk Commercial Court filings.
                  </p>
                </div>
                <div className="space-y-2 mt-2">
                  <Link
                    href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                    className="w-full inline-flex items-center justify-center px-5 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors shadow-md"
                  >
                    Upload Fleet CSV &amp; Activate Desk &rarr;
                  </Link>
                  <Link
                    href="/user/representees"
                    className="block text-center text-[11px] text-slate-400 hover:text-white underline transition-colors"
                  >
                    Corporate legal department / multi-entity onboarding &rarr;
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 text-[11px] text-slate-400 flex flex-wrap items-center justify-between gap-3">
              <span>
                Statutory Compliance: Indian Contract Act 1872 &bull; Commercial Courts Act 2015 &bull; MSMED Act 2006 &bull; CPC Order 37
              </span>
              <span className="text-slate-300">Zero Commission on Post-Notice Direct Recoveries</span>
            </div>
          </div>
        ) : (
          <div className="rounded-xl bg-slate-900 text-white p-5 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-sm font-bold text-white">
                Facing Dedicated Fleet Route Slashing or Premature Termination?
              </p>
              <p className="text-xs text-slate-400">
                Recover minimum-km shortfall dues and unamortized vehicle loan CapEx under Section 73/74.
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="px-4 py-2 rounded-lg bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs font-bold transition-colors"
              >
                Send Notice (₹{basePrice})
              </button>
              <Link
                href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors"
              >
                Bulk Fleet Upload
              </Link>
            </div>
          </div>
        )}
      </div>

      <PaymentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        category="B2B & Institutional Recovery"
        serviceName="Dedicated Fleet Minimum-Km Shortfall Statutory Notice"
      />
    </>
  );
}
