"use client";

import React, { useState } from "react";
import { PaymentModal } from "@/components/PaymentModal";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";

interface RbiFraudFrameworkNoticeCTAProps {
  buttonText?: string;
  className?: string;
  variant?: "primary" | "secondary";
}

export default function RbiFraudFrameworkNoticeCTA({
  buttonText = "Send Advocate Legal Notice to Your Bank",
  className = "",
  variant = "primary",
}: RbiFraudFrameworkNoticeCTAProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const basePrice = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition;

  return (
    <>
      <div className={`w-full max-w-full overflow-hidden ${className}`}>
        {variant === "primary" ? (
          <div className="bg-gradient-to-br from-[#111827] via-[#1F2937] to-[#111827] text-white rounded-2xl p-5 sm:p-8 md:p-10 border border-slate-800 shadow-2xl w-full">
            <div className="max-w-3xl">
              <span className="inline-block px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold tracking-wide uppercase bg-slate-800 text-red-400 border border-slate-700 mb-3 sm:mb-4">
                Statutory Banking Demand Notice • RBI Zero-Liability &amp; 2027 Framework Compliant
              </span>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-white mb-3">
                Did Your Bank Reject Your Fraud Refund by Blaming &ldquo;OTP Sharing&rdquo; or &ldquo;Customer Negligence&rdquo;?
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed mb-6">
                Under RBI&apos;s Customer Protection Directions and the revised 2027 Fraud Liability Framework, the legal burden of proof lies strictly on the bank—not the customer. Have a verified advocate serve a formal 15-day statutory demand notice on your bank&apos;s Nodal Officer, Managing Director, and Branch Manager demanding 10-day shadow reversal, server audit logs, and 100% reimbursement before escalating to the RBI Integrated Ombudsman and Consumer Commission.
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-semibold text-white bg-[#DC2626] hover:bg-[#B91C1C] transition-all duration-200 shadow-lg shadow-red-900/30 hover:shadow-red-900/50 text-sm sm:text-base cursor-pointer text-center"
                >
                  {buttonText} — ₹{basePrice}
                </button>
                <div className="text-xs text-slate-300 flex flex-wrap sm:flex-nowrap items-center gap-2 sm:gap-3">
                  <span>✓ 24h Advocate Drafting</span>
                  <span>•</span>
                  <span>✓ Speed Post + BSA Sec 63 Email</span>
                  <span>•</span>
                  <span>✓ Flat ₹{basePrice}</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-[#DC2626] hover:bg-[#B91C1C] transition-colors cursor-pointer text-center"
          >
            {buttonText} (₹{basePrice})
          </button>
        )}
      </div>

      <PaymentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
