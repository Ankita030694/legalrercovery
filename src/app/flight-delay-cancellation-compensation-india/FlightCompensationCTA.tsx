"use client";

import React, { useState } from "react";
import { PaymentModal } from "@/components/PaymentModal";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";

interface FlightCompensationCTAProps {
  buttonText?: string;
  className?: string;
  variant?: "primary" | "inline";
}

export default function FlightCompensationCTA({
  buttonText = "Draft Statutory Legal Notice for Flight Compensation",
  className = "",
  variant = "primary",
}: FlightCompensationCTAProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const basePrice = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition;

  return (
    <>
      <div className={className}>
        {variant === "primary" ? (
          <div className="bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white rounded-2xl p-6 sm:p-8 md:p-10 border border-slate-700/80 shadow-2xl">
            <div className="max-w-3xl">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-red-950/80 text-red-400 border border-red-800/50 mb-4">
                DGCA CAR Series M Part IV Enforcement Rail
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-3">
                Airline Refusing Your Delay, Cancellation or Denied Boarding Claim?
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                Airlines routinely cite vague &quot;operational reasons&quot; or offer expiring travel vouchers to evade DGCA compensation slabs of up to ₹20,000. Under DGCA CAR Section 3 Series M Part IV and the Consumer Protection Act 2019, statutory compensation is a non-waivable passenger right. Serve an advocate-drafted statutory demand notice delivered by email and WhatsApp. Speed Post is optional at ₹450 per party.
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
                  <span>✓ Bar Council Registered Advocate Draft</span>
                  <span className="hidden sm:inline">•</span>
                  <span>✓ Email + WhatsApp</span>
                  <span className="hidden sm:inline">•</span>
                  <span>✓ Flat ₹{basePrice} No Hidden Charges</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-[#DC2626] hover:bg-[#B91C1C] transition-colors cursor-pointer shadow-sm"
          >
            {buttonText} (₹{basePrice})
          </button>
        )}
      </div>

      <PaymentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
