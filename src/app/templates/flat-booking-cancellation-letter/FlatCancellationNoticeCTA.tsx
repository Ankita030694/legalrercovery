"use client";

import React, { useState } from "react";
import { PaymentModal } from "@/components/PaymentModal";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";

interface FlatCancellationNoticeCTAProps {
  buttonText?: string;
  className?: string;
  variant?: "primary" | "secondary";
}

export default function FlatCancellationNoticeCTA({
  buttonText = "Send Advocate RERA Refund Notice",
  className = "",
  variant = "primary",
}: FlatCancellationNoticeCTAProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const basePrice = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition;

  return (
    <>
      <div className={`w-full max-w-full overflow-hidden ${className}`}>
        {variant === "primary" ? (
          <div className="bg-gradient-to-br from-[#111827] via-[#1F2937] to-[#111827] text-white rounded-2xl p-5 sm:p-8 md:p-10 border border-slate-800 shadow-2xl w-full">
            <div className="max-w-3xl">
              <span className="inline-block px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold tracking-wide uppercase bg-slate-800 text-red-400 border border-slate-700 mb-3 sm:mb-4">
                RERA Sections 12, 13 &amp; 18 • Advocate Legal Notice Service
              </span>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-white mb-3">
                Builder Threatening 100% Forfeiture or Ignoring Your Cancellation Letter?
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed mb-6">
                Engage a verified real-estate recovery advocate to draft and dispatch a formal 15-day statutory legal notice to the builder&apos;s Managing Director and RERA-registered office via Registered Speed Post (RPAD) and Section 63 BSA electronic mail—challenging illegal forfeiture under Section 13(1) RERA, Section 74 of the Indian Contract Act, and Supreme Court earnest-money caps.
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
                  <span>✓ RERA Sec 13 &amp; 18 Draft</span>
                  <span>•</span>
                  <span>✓ Speed Post + Email</span>
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
