"use client";

import React, { useState } from "react";
import { PaymentModal } from "@/components/PaymentModal";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";

interface BankRecoveryNoticeCTAProps {
  buttonText?: string;
  className?: string;
  variant?: "primary" | "secondary";
}

export default function BankRecoveryNoticeCTA({
  buttonText = "Schedule Institutional Portfolio Review",
  className = "",
  variant = "primary",
}: BankRecoveryNoticeCTAProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const basePrice = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition;

  return (
    <>
      <div className={`w-full max-w-full overflow-hidden ${className}`}>
        {variant === "primary" ? (
          <div className="bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white rounded-2xl p-5 sm:p-8 md:p-10 border border-slate-800 shadow-2xl w-full">
            <div className="max-w-3xl">
              <span className="inline-block px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold tracking-wide uppercase bg-slate-800 text-blue-400 border border-slate-700 mb-3 sm:mb-4">
                Enterprise Portfolio Desk • Institutional Banking SLA
              </span>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-white mb-3">
                Achieve 3x Faster Liquidation of Delinquent Loan Pools with Our Specialized Litigation Desks
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed mb-6">
                Ingest hundreds or thousands of defaulted loan accounts into our automated Case Management System (CMS). From Section 63 BSA electronic notice dispatch to pan-India Section 25 PSS Act filings and Lok Adalat mass conciliation, our empanelled advocate network handles institutional recoveries end-to-end.
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-all duration-200 shadow-lg shadow-blue-900/30 hover:shadow-blue-900/50 text-sm sm:text-base cursor-pointer text-center"
                >
                  {buttonText} — Retainer / Notice Desk
                </button>
                <div className="text-xs text-slate-300 flex flex-wrap sm:flex-nowrap items-center gap-2 sm:gap-3">
                  <span>✓ 10,000+ Accounts/Mo Scale</span>
                  <span>•</span>
                  <span>✓ RBI Fair Practices Compliant</span>
                  <span>•</span>
                  <span>✓ Single-Notice Option ₹{basePrice}</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors cursor-pointer text-center"
          >
            {buttonText}
          </button>
        )}
      </div>

      <PaymentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
