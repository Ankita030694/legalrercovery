"use client";

import React, { useState } from "react";
import { PaymentModal } from "@/components/PaymentModal";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";

interface CryptoNoticeCTAProps {
  buttonText?: string;
  className?: string;
  variant?: "primary" | "secondary";
}

export default function CryptoNoticeCTA({
  buttonText = "Issue Statutory Legal Notice to Crypto Exchange",
  className = "",
  variant = "primary",
}: CryptoNoticeCTAProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const basePrice = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition;

  return (
    <>
      <div className={`w-full max-w-full overflow-hidden ${className}`}>
        {variant === "primary" ? (
          <div className="bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white rounded-2xl p-5 sm:p-8 md:p-10 border border-slate-800 shadow-2xl w-full">
            <div className="max-w-3xl">
              <span className="inline-block text-[11px] font-extrabold uppercase tracking-widest text-[#EF4444] bg-red-950/70 border border-red-800/80 px-3 py-1 rounded-full mb-3 sm:mb-4">
                Enforce FIU-IND &amp; Consumer Rights
              </span>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight leading-tight mb-2 sm:mb-3">
                Exchange Holding Your Crypto or INR Withdrawals?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 sm:mb-8 font-normal">
                Virtual Asset Service Providers (VASPs) registered with FIU-IND cannot arbitrarily withhold user fiat balances or digital tokens. Have an experienced recovery advocate draft and serve a formal 15-day statutory legal notice under the Consumer Protection Act, 2019 and Contract Act.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6 sm:mb-8 text-xs text-slate-300">
                <div className="flex items-start gap-2 bg-slate-800/60 p-3 rounded-xl border border-slate-700/60">
                  <span className="text-[#EF4444] font-bold text-sm">✓</span>
                  <span>Direct Service on Nodal Officers &amp; Directors</span>
                </div>
                <div className="flex items-start gap-2 bg-slate-800/60 p-3 rounded-xl border border-slate-700/60">
                  <span className="text-[#EF4444] font-bold text-sm">✓</span>
                  <span>Overcomes Adhesion Arbitration Clauses</span>
                </div>
                <div className="flex items-start gap-2 bg-slate-800/60 p-3 rounded-xl border border-slate-700/60">
                  <span className="text-[#EF4444] font-bold text-sm">✓</span>
                  <span>Registered Speed Post + Email Dispatch Audit</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="w-full sm:w-auto px-6 sm:px-8 py-3.5 bg-[#DC2626] hover:bg-[#B91C1C] active:bg-[#991B1B] text-white font-extrabold text-sm sm:text-base rounded-xl transition-all shadow-lg hover:shadow-red-900/30 flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <span>{buttonText}</span>
                  <span
                    aria-hidden="true"
                    className="group-hover:translate-x-0.5 transition-transform"
                  >
                    →
                  </span>
                </button>
                <div className="text-center sm:text-left">
                  <p className="text-xs font-semibold text-slate-200">
                    Advocate Notice from ₹{basePrice}
                  </p>
                  <p className="text-[11px] text-slate-400">
                    Drafted &amp; dispatched within 24–48 working hours
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-red-50 border border-red-200 rounded-2xl p-5 sm:p-6 text-slate-900 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest text-[#DC2626] block mb-1">
                Take Statutory Legal Action
              </span>
              <h4 className="text-base sm:text-lg font-black text-slate-900 leading-snug">
                Break the Support Ticket Loop with a Formal Legal Notice
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
                Cryptocurrency platforms routinely ignore customer support tickets. An advocate demand notice places the exchange management on notice under the Consumer Protection Act and Bharatiya Nagarik Suraksha Sanhita.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="shrink-0 w-full md:w-auto px-5 py-3 bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs sm:text-sm font-black rounded-xl transition-colors shadow-md cursor-pointer text-center"
            >
              {buttonText} (₹{basePrice})
            </button>
          </div>
        )}
      </div>

      <PaymentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        serviceTitle="Legal Notice to Crypto Exchange for Withheld Funds"
        serviceType="crypto_withdrawal_notice"
        amount={basePrice}
      />
    </>
  );
}
