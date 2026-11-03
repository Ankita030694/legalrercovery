"use client";

import React, { useState } from "react";
import { PaymentModal } from "@/components/PaymentModal";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";

interface ZomatoNoticeCTAProps {
  buttonText?: string;
  className?: string;
  variant?: "primary" | "secondary";
}

export default function ZomatoNoticeCTA({
  buttonText = "Draft Legal Notice to Zomato",
  className = "",
  variant = "primary",
}: ZomatoNoticeCTAProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const basePrice = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition;

  return (
    <>
      <div className={className}>
        {variant === "primary" ? (
          <div className="bg-gradient-to-br from-[#111827] via-[#0F172A] to-[#1E293B] text-white rounded-2xl p-6 sm:p-8 md:p-10 border border-slate-700 shadow-xl">
            <div className="max-w-3xl">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-red-950/80 text-red-400 border border-red-800/50 mb-4">
                Statutory Consumer Demand Notice
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-3">
                Recover Your Withheld Zomato Refund or Dispute False Delivery
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                Serve a formal advocate-drafted legal notice directly to Zomato Limited and the partner restaurant merchant. Dispatched via Registered Speed Post with postal tracking plus digital service under Section 63 of Bharatiya Sakshya Adhiniyam, 2023.
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-semibold text-white bg-[#DC2626] hover:bg-[#B91C1C] transition-all duration-200 shadow-lg shadow-red-900/30 hover:shadow-red-900/50 cursor-pointer text-base"
                >
                  {buttonText} — ₹{basePrice}
                </button>
                <div className="text-xs text-slate-400 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                  <span>✓ Bar-Enrolled Advocate Drafting</span>
                  <span className="hidden sm:inline">•</span>
                  <span>✓ 24-Hour Dispatch via Speed Post</span>
                  <span className="hidden sm:inline">•</span>
                  <span>✓ Flat ₹{basePrice} Transparent Fee</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-[#DC2626] hover:bg-[#B91C1C] transition-colors cursor-pointer"
          >
            {buttonText} (₹{basePrice})
          </button>
        )}
      </div>

      <PaymentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
