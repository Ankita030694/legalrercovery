"use client";

import React, { useState } from "react";
import { PaymentModal } from "@/components/PaymentModal";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";

interface AkasaAirNoticeCTAProps {
  buttonText?: string;
  className?: string;
  variant?: "primary" | "secondary" | "aside";
}

export default function AkasaAirNoticeCTA({
  buttonText = "Draft Legal Notice to Akasa Air (SNV Aviation)",
  className = "",
  variant = "primary",
}: AkasaAirNoticeCTAProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const basePrice = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition;

  return (
    <>
      <div className={className}>
        {variant === "primary" ? (
          <div className="bg-gradient-to-br from-[#0B1E36] via-[#102A4C] to-[#0B1E36] text-white rounded-2xl p-6 sm:p-8 md:p-10 border border-orange-500/30 shadow-2xl">
            <div className="max-w-3xl">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-orange-950/80 text-orange-400 border border-orange-700/50 mb-4">
                Statutory Aviation Demand Notice • DGCA CAR Series M Compliant
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-3">
                Recover Your Withheld Akasa Air Ticket Refund
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                Have a verified advocate draft and serve an official 15-day statutory legal notice directly to SNV Aviation Private Limited (Akasa Air) and your booking travel aggregator. Dispatched via Registered Speed Post with postal tracking proof and served electronically under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023.
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
                  <span>✓ Speed Post + Email Dispatch</span>
                  <span className="hidden sm:inline">•</span>
                  <span>✓ Flat ₹{basePrice} Transparent Fee</span>
                </div>
              </div>
            </div>
          </div>
        ) : variant === "aside" ? (
          <div className="w-full">
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="w-full inline-flex items-center justify-center px-4 py-3 rounded-xl font-semibold text-white bg-[#DC2626] hover:bg-[#B91C1C] transition-all duration-200 shadow-md shadow-red-900/30 text-sm cursor-pointer"
            >
              Draft Legal Notice — ₹{basePrice}
            </button>
            <p className="text-[11px] text-slate-400 text-center mt-2">
              Includes Registered Speed Post + Electronic Dispatch under BSA 2023
            </p>
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
