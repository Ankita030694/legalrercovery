"use client";

import React, { useState } from "react";
import { PaymentModal } from "@/components/PaymentModal";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";

interface RbiZeroLiabilityNoticeCTAProps {
  buttonText?: string;
  className?: string;
  variant?: "primary" | "secondary";
}

export default function RbiZeroLiabilityNoticeCTA({
  buttonText = "Serve RBI Zero-Liability Legal Notice to Bank",
  className = "",
  variant = "primary",
}: RbiZeroLiabilityNoticeCTAProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const basePrice = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition;

  return (
    <>
      <div className={`w-full max-w-full overflow-hidden ${className}`}>
        {variant === "primary" ? (
          <div className="bg-gradient-to-br from-[#111827] via-[#1F2937] to-[#111827] text-white rounded-2xl p-5 sm:p-8 md:p-10 border border-slate-800 shadow-2xl w-full">
            <div className="max-w-3xl">
              <span className="inline-block px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold tracking-wide uppercase bg-slate-800 text-red-400 border border-slate-700 mb-3 sm:mb-4">
                RBI Circular DBR.No.Leg.BC.78/09.07.005/2017-18 • Statutory Bank Demand Notice
              </span>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-white mb-3">
                Bank Refusing Your 10-Day Shadow Reversal or Unfairly Blaming You for Cyber Fraud?
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed mb-6">
                Have a verified banking recovery advocate draft and serve a formal statutory legal demand notice on your bank&apos;s Nodal Officer, Managing Director, and Branch Manager. We invoke Clauses 6, 7, 9, and 12 of the RBI Customer Liability Circular and the Supreme Court&apos;s 2025 <em>Pallabh Bhowmick</em> precedent—demanding value-dated reversal before escalating to the RBI Integrated Ombudsman (CMS) and Consumer Commission.
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
                  <span>✓ Email + WhatsApp</span>
                  <span>•</span>
                  <span>✓ Flat ₹{basePrice}</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="my-4 p-4 sm:p-5 rounded-2xl bg-slate-900 text-white border border-slate-800 shadow-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-red-400 block">
                Paragraph 9 &amp; 12 RBI Enforcement • 10-Working-Day Shadow Credit Mandate
              </span>
              <p className="text-sm sm:text-base font-bold text-white">
                Reported Within 3–7 Working Days Still Waiting for Bank Refund?
              </p>
              <p className="text-xs text-slate-300 max-w-xl">
                Force your bank to discharge its statutory burden of proof under Clause 12 and credit value-dated shadow reversal with a formal advocate legal notice.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#DC2626] hover:bg-[#B91C1C] transition-colors cursor-pointer text-center"
            >
              {buttonText} (₹{basePrice}) →
            </button>
          </div>
        )}
      </div>

      <PaymentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
