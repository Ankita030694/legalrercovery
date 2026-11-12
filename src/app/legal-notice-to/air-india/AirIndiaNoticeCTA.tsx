"use client";

import React, { useState } from "react";
import { PaymentModal } from "@/components/PaymentModal";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";

interface AirIndiaNoticeCTAProps {
  buttonText?: string;
  className?: string;
  variant?: "primary" | "secondary";
}

export default function AirIndiaNoticeCTA({
  buttonText = "Draft Legal Notice to Air India Limited",
  className = "",
  variant = "primary",
}: AirIndiaNoticeCTAProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const basePrice = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition;

  return (
    <>
      <div className={className}>
        {variant === "primary" ? (
          <div className="bg-gradient-to-br from-[#0B1E36] via-[#102A4C] to-[#0B1E36] text-white rounded-2xl p-6 sm:p-8 md:p-10 border border-blue-900/60 shadow-2xl">
            <div className="max-w-3xl">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-sky-950/80 text-sky-400 border border-sky-800/50 mb-4">
                Statutory Aviation Demand Notice • DGCA CAR Section 3 Compliant
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-3">
                Recover Your Withheld Air India Refund or Claim Statutory Flight Delay Compensation
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                Have a verified aviation recovery advocate draft and serve an official statutory legal demand notice directly to Air India Limited (Airlines House, New Delhi &amp; Gurugram HQ) and any intermediary travel portals. Served by email and WhatsApp under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023. Speed Post is optional at ₹450 per party.
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-semibold text-white bg-[#DC2626] hover:bg-[#B91C1C] transition-all duration-200 shadow-lg shadow-red-900/30 hover:shadow-red-900/50 cursor-pointer"
                >
                  {buttonText} — ₹{basePrice}
                </button>
                <div className="text-xs text-slate-300 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                  <span>✓ 24-Hour Advocate Drafting</span>
                  <span className="hidden sm:inline">•</span>
                  <span>✓ Email + WhatsApp</span>
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
