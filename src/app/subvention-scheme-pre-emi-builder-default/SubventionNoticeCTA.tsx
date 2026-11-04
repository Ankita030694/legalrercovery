"use client";

import React, { useState } from "react";
import { PaymentModal } from "@/components/PaymentModal";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";

interface SubventionNoticeCTAProps {
  buttonText?: string;
  className?: string;
  variant?: "primary" | "secondary";
}

export default function SubventionNoticeCTA({
  buttonText = "Send Joint Legal Notice to Builder & Bank",
  className = "",
  variant = "primary",
}: SubventionNoticeCTAProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const basePrice = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition;

  return (
    <>
      <div className={`w-full max-w-full overflow-hidden ${className}`}>
        {variant === "primary" ? (
          <div className="bg-gradient-to-br from-[#111827] via-[#1F2937] to-[#111827] text-white rounded-2xl p-5 sm:p-8 md:p-10 border border-slate-800 shadow-2xl w-full">
            <div className="max-w-3xl">
              <span className="inline-block px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold tracking-wide uppercase bg-slate-800 text-red-400 border border-slate-700 mb-3 sm:mb-4">
                RERA Section 18 • RBI Circular 2013 &amp; NHB 2019 • Tripartite Default
              </span>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-white mb-3">
                Stop Unfair Pre-EMI Demands &amp; Recover Your Stuck Booking Money
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed mb-6">
                Have a verified real-estate recovery advocate draft and serve a formal statutory notice to the defaulting builder (demanding Pre-EMI clearance, indemnity, or 100% RERA Section 18 refund with SBI MCLR + 2% interest) and a formal regulatory representation to the lending bank/HFC citing RBI upfront-disbursal violations and Supreme Court protection orders.
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
                  <span>✓ Speed Post + Email / WhatsApp</span>
                  <span>•</span>
                  <span>✓ ₹{basePrice} per Opposite Party</span>
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
