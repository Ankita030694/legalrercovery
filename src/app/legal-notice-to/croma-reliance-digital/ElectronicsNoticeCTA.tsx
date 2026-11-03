"use client";

import React, { useState } from "react";
import { PaymentModal } from "@/components/PaymentModal";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";

interface ElectronicsNoticeCTAProps {
  buttonText?: string;
  className?: string;
  variant?: "primary" | "secondary";
}

export default function ElectronicsNoticeCTA({
  buttonText = "Draft Legal Notice to Retailer",
  className = "",
  variant = "primary",
}: ElectronicsNoticeCTAProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const basePrice = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition;

  return (
    <>
      <div className={className}>
        {variant === "primary" ? (
          <div className="bg-gradient-to-br from-[#111827] via-[#0F172A] to-[#1E293B] text-white rounded-2xl p-6 sm:p-8 md:p-10 border border-slate-700 shadow-xl">
            <div className="max-w-3xl">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-red-950/80 text-red-300 border border-red-800/60 mb-4">
                Enforceable Pre-Litigation Notice
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-3">
                Stop the Service Center Ping-Pong. Hold the Retailer Accountable.
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                When Croma or Reliance Digital denies replacement for a defective television, laptop, or appliance, serving a formal Advocate Legal Notice establishes privity of contract, cites Section 86 of the Consumer Protection Act, 2019, and triggers corporate legal desk intervention before you file on e-Jagriti.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="w-full sm:w-auto px-6 py-3.5 bg-[#DC2626] hover:bg-[#B91C1C] text-white font-semibold text-sm sm:text-base rounded-xl transition-all shadow-lg hover:shadow-red-600/30 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>{buttonText}</span>
                  <span className="text-red-200 text-xs font-normal">
                    (₹{basePrice})
                  </span>
                </button>
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <svg
                    className="w-4 h-4 text-emerald-400 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Drafted by verified Consumer Protection Advocates within 24 hours</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-center">
            <h4 className="text-lg font-semibold text-slate-900 mb-2">
              Ready to Demand Your Replacement or Full Refund?
            </h4>
            <p className="text-slate-600 text-sm mb-4 max-w-xl mx-auto">
              Serve an advocate-drafted statutory demand notice directly to Infiniti Retail Ltd or Reliance Retail Ltd corporate legal counsel for ₹{basePrice}.
            </p>
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="px-6 py-2.5 bg-[#DC2626] hover:bg-[#B91C1C] text-white text-sm font-semibold rounded-lg transition-colors cursor-pointer"
            >
              {buttonText} (₹{basePrice})
            </button>
          </div>
        )}
      </div>

      <PaymentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
