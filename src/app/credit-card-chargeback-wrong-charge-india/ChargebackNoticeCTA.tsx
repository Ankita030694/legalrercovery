"use client";

import React, { useState } from "react";
import { PaymentModal } from "@/components/PaymentModal";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";

interface ChargebackNoticeCTAProps {
  buttonText?: string;
  className?: string;
  variant?: "primary" | "secondary";
}

export default function ChargebackNoticeCTA({
  buttonText = "Issue Statutory Legal Notice to Issuing Bank",
  className = "",
  variant = "primary",
}: ChargebackNoticeCTAProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const basePrice = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition;

  return (
    <>
      <div className={`w-full max-w-full overflow-hidden ${className}`}>
        {variant === "primary" ? (
          <div className="bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white rounded-2xl p-5 sm:p-8 md:p-10 border border-slate-700 shadow-2xl w-full">
            <div className="max-w-3xl">
              <span className="inline-block px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold tracking-wide uppercase bg-slate-800 text-blue-400 border border-slate-700 mb-3 sm:mb-4">
                RBI 2017 &amp; 2019 Circulars • CPA 2019 Deficiency in Service
              </span>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-white mb-3">
                Bank Refusing Chargeback or Delaying Duplicate Debit Reversal?
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed mb-6">
                Have an advocate draft and serve a formal statutory demand notice to your credit card issuing bank and card network (Visa, Mastercard, RuPay, Amex). Enforce mandatory shadow credit, reverse wrongful late fees, and claim statutory interest and consumer compensation.
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-all duration-200 shadow-lg shadow-blue-900/30 hover:shadow-blue-900/50 text-sm sm:text-base cursor-pointer text-center"
                >
                  {buttonText} — ₹{basePrice}
                </button>
                <div className="text-xs text-slate-300 flex flex-wrap sm:flex-nowrap items-center gap-2 sm:gap-3">
                  <span>✓ 24h Advocate Drafting</span>
                  <span>•</span>
                  <span>✓ Speed Post + Email / WhatsApp</span>
                  <span>•</span>
                  <span>✓ Flat ₹{basePrice}</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 sm:p-6 text-center">
            <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
              Ready to Escalate to Bank Grievance Redressal or RBI Ombudsman?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 mb-4 max-w-xl mx-auto">
              A formal legal notice establishes deliberate deficiency in service under Section 2(11) of the Consumer Protection Act, 2019, cutting through frontline bank delays.
            </p>
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-all text-xs sm:text-sm shadow-md"
            >
              {buttonText} — ₹{basePrice}
            </button>
          </div>
        )}
      </div>

      <PaymentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        serviceName="Legal Notice for Credit Card Chargeback Dispute"
        price={basePrice}
      />
    </>
  );
}
