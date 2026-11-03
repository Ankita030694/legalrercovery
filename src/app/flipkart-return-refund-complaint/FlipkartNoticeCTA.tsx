"use client";

import React, { useState } from "react";
import { PaymentModal } from "@/components/PaymentModal";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";

interface FlipkartNoticeCTAProps {
  variant?: "primary" | "aside";
  buttonText?: string;
  className?: string;
}

export default function FlipkartNoticeCTA({
  variant = "primary",
  buttonText,
  className = "",
}: FlipkartNoticeCTAProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const basePrice = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition;

  if (variant === "aside") {
    return (
      <>
        <div className={`mt-5 pt-5 border-t border-slate-700/80 ${className}`}>
          <div className="flex items-baseline justify-between mb-3">
            <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
              Advocate Notice Fee
            </span>
            <span className="text-2xl font-black text-white">
              ₹{basePrice}
            </span>
          </div>
          <p className="text-[11px] text-slate-300 leading-relaxed mb-4">
            Delivered in 24 hours. Includes drafting, Speed Post dispatch with tracking, and Section 63 BSA digital evidence bundle.
          </p>
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="w-full inline-flex items-center justify-center py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#DC2626] hover:bg-[#B91C1C] transition-all duration-150 shadow-md shadow-red-950/40 cursor-pointer"
          >
            {buttonText || `Draft Notice to Flipkart — ₹${basePrice}`}
          </button>
          <div className="mt-3 flex items-center justify-center gap-2 text-[10px] text-slate-400">
            <span>✓ Verified Advocate Draft</span>
            <span>•</span>
            <span>✓ 15-Day Cure Window</span>
          </div>
        </div>

        <PaymentModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </>
    );
  }

  return (
    <>
      <div className={`bg-gradient-to-br from-[#111827] via-[#0F172A] to-[#1E293B] text-white rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-700 shadow-xl ${className}`}>
        <div className="max-w-3xl">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-red-950/80 text-red-400 border border-red-800/50 mb-4">
            Statutory Consumer Remedy
          </span>
          <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white mb-3">
            Hold Flipkart and the Merchant Legally Accountable
          </h3>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
            Bypass scripted customer care bots. Have an experienced recovery advocate draft and serve a formal demand notice to Flipkart Internet Private Limited’s registered corporate office and the third-party seller, citing fallback liability under Rule 5(3) of the E-Commerce Rules, 2020.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-bold text-white bg-[#DC2626] hover:bg-[#B91C1C] transition-all duration-200 shadow-lg shadow-red-900/30 hover:shadow-red-900/50 cursor-pointer text-sm sm:text-base"
            >
              {buttonText || `Draft Legal Notice to Flipkart — ₹${basePrice}`}
            </button>
            <div className="text-xs text-slate-400 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
              <span>✓ 24-Hour Delivery</span>
              <span className="hidden sm:inline">•</span>
              <span>✓ Registered Post & Email</span>
              <span className="hidden sm:inline">•</span>
              <span>✓ Flat ₹{basePrice} Transparent Fee</span>
            </div>
          </div>
        </div>
      </div>

      <PaymentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
