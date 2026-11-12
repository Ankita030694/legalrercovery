"use client";

import React, { useState } from "react";
import { PaymentModal } from "@/components/PaymentModal";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";

interface WrongUpiNoticeCTAProps {
  buttonText?: string;
  className?: string;
  variant?: "primary" | "secondary";
}

export default function WrongUpiNoticeCTA({
  buttonText = "Draft Legal Notice to Recover Wrong UPI Transfer",
  className = "",
  variant = "primary",
}: WrongUpiNoticeCTAProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const basePrice = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition;

  return (
    <>
      <div className={`w-full max-w-full overflow-hidden ${className}`}>
        {variant === "primary" ? (
          <div className="bg-gradient-to-br from-[#111827] via-[#1F2937] to-[#111827] text-white rounded-2xl p-5 sm:p-8 md:p-10 border border-slate-800 shadow-2xl w-full">
            <div className="max-w-3xl">
              <span className="inline-block px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold tracking-wide uppercase bg-slate-800 text-blue-400 border border-slate-700 mb-3 sm:mb-4">
                NPCI Dispute Framework • Section 72 Indian Contract Act • BNS 316
              </span>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-white mb-3">
                Sent Money to the Wrong UPI ID or Bank Account? Recover Your Funds Fast
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed mb-6">
                Whether the unintended recipient refuses to refund the money or the remitter / beneficiary banks are stalling the inter-bank recall, have an experienced advocate issue a formal statutory legal demand notice. Fast-track your refund under Section 72 (Contract Act), invoke bank duties under RBI mandates, and press criminal breach of trust under BNS Section 316 if they unlawfully retain your money.
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] transition-all duration-200 shadow-lg shadow-blue-900/30 hover:shadow-blue-900/50 text-sm sm:text-base cursor-pointer text-center"
                >
                  {buttonText} — ₹{basePrice}
                </button>
                <div className="text-xs text-slate-300 flex flex-wrap sm:flex-nowrap items-center gap-2 sm:gap-3">
                  <span>✓ 24h Advocate Drafting</span>
                  <span>•</span>
                  <span>✓ Email + WhatsApp</span>
                  <span>•</span>
                  <span>✓ Flat ₹{basePrice}</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 sm:p-6 text-center">
            <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
              Unintended Recipient Refusing to Return Your Wrong Transfer?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-4 max-w-xl mx-auto">
              Retaining mistakenly credited funds is illegal under Section 72 of the Indian Contract Act. Issue an advocate-drafted demand notice to compel immediate restitution.
            </p>
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] transition-colors text-xs sm:text-sm cursor-pointer"
            >
              {buttonText} — ₹{basePrice}
            </button>
          </div>
        )}
      </div>

      <PaymentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        serviceName="Wrong UPI Transfer Recovery Notice"
      />
    </>
  );
}
