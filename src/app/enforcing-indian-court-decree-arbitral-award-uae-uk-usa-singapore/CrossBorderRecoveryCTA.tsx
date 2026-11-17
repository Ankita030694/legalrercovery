"use client";

import React, { useState } from "react";
import { PaymentModal } from "@/components/PaymentModal";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";
import Link from "next/link";

interface CrossBorderRecoveryCTAProps {
  buttonText?: string;
  className?: string;
  variant?: "primary" | "secondary";
}

export default function CrossBorderRecoveryCTA({
  buttonText = "Issue Cross-Border Legal Demand Notice (₹999)",
  className = "",
  variant = "primary",
}: CrossBorderRecoveryCTAProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const basePrice = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition;

  return (
    <>
      <div className={`w-full max-w-full overflow-hidden ${className}`}>
        {variant === "primary" ? (
          <div className="bg-gradient-to-br from-[#111827] via-[#1F2937] to-[#111827] text-white rounded-2xl p-5 sm:p-8 md:p-10 border border-slate-800 shadow-2xl w-full">
            <div className="max-w-3xl">
              <span className="inline-block px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-3 sm:mb-4">
                Dual Institutional Recovery Channels
              </span>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white leading-tight mb-2 sm:mb-3">
                Recover Unpaid Cross-Border Invoices & Enforce Decrees Abroad
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed mb-6 sm:mb-8">
                Whether enforcing an existing Commercial Court decree in Dubai or issuing a formal pre-arbitration statutory demand to a delinquent buyer in the US, UK, or Singapore, deploy institutional legal rails vetted by international commercial litigators.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="px-6 py-3.5 bg-[#DC2626] hover:bg-[#B91C1C] text-white font-bold text-sm rounded-xl shadow-lg shadow-red-900/40 transition-all flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <span>{buttonText}</span>
                  <svg
                    className="w-4 h-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>

                <Link
                  href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                  className="px-6 py-3.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold text-sm rounded-xl transition-all flex items-center justify-center text-center"
                >
                  Bulk Cross-Border Portfolios (10–10,000+ Cases)
                </Link>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-800/80 flex flex-wrap items-center gap-4 sm:gap-6 text-[11px] sm:text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Hague Service Convention Compliance
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  CPC s.44A Certified Decrees
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  New York Convention 172 Nations
                </span>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 sm:p-6 text-center">
            <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
              Need Multi-Jurisdiction Foreign Buyer Recovery?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 mb-4 max-w-xl mx-auto">
              Test our single-case cross-border statutory demand notice for ₹{basePrice}, or upload an entire unpaid international ledger for institutional overseas enforcement.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="px-5 py-2.5 bg-[#DC2626] hover:bg-[#B91C1C] text-white font-bold text-xs sm:text-sm rounded-lg transition-colors cursor-pointer"
              >
                Send Demand Notice (₹{basePrice})
              </button>
              <Link
                href="/user/representees"
                className="px-5 py-2.5 bg-white border border-slate-300 hover:bg-slate-100 text-slate-800 font-bold text-xs sm:text-sm rounded-lg transition-colors"
              >
                Corporate Exporter Dashboard
              </Link>
            </div>
          </div>
        )}
      </div>

      <PaymentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultService="international-export-legal-notice"
      />
    </>
  );
}
