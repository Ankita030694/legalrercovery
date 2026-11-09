"use client";

import React, { useState } from "react";
import { PaymentModal } from "@/components/PaymentModal";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";

interface CarDeliveryNoticeCTAProps {
  buttonText?: string;
  className?: string;
  variant?: "primary" | "secondary";
}

export default function CarDeliveryNoticeCTA({
  buttonText = "Draft Statutory Legal Notice to Car Dealer",
  className = "",
  variant = "primary",
}: CarDeliveryNoticeCTAProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const basePrice = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition;

  return (
    <>
      <div className={`w-full max-w-full overflow-hidden ${className}`}>
        {variant === "primary" ? (
          <div className="bg-gradient-to-br from-[#111827] via-[#1F2937] to-[#111827] text-white rounded-2xl p-5 sm:p-8 md:p-10 border border-slate-800 shadow-2xl w-full">
            <div className="max-w-3xl">
              <span className="inline-block px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold tracking-wide uppercase bg-slate-800 text-red-400 border border-slate-700 mb-3 sm:mb-4">
                Statutory Pre-Litigation Recovery • CPA 2019 &amp; Sale of Goods Act Compliant
              </span>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-white mb-3">
                Dealership Delaying Your Vehicle or Refusing 100% Refund? Serve a Formal Legal Notice
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed mb-6">
                Have a verified advocate draft and serve an official 15-day statutory demand notice directly to the Dealer Principal and the OEM Automobile Manufacturer (e.g. Tata, Hyundai, Mahindra, Maruti, Kia). Dispatched via Registered Speed Post with tracking evidence admissible under Section 63 of Bharatiya Sakshya Adhiniyam, 2023. Demand immediate priority delivery, zero-deduction booking refund, 12% annual interest, and alternative commute compensation before approaching the District Consumer Commission.
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
                  <span>✓ Speed Post + Email Dispatch</span>
                  <span>•</span>
                  <span>✓ Flat ₹{basePrice}</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 sm:p-6">
            <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
              Dealer Refused to Refund Your Booking Advance or Honor Committed Date?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 mb-4">
              Do not let dealerships illegally hold your hard-earned funds or deduct ₹2,000–₹10,000 cancellation charges when the delivery delay is entirely their breach of contract. A formal advocate legal notice establishes breach of contract and deficiency in service under Section 2(11) of the Consumer Protection Act, 2019.
            </p>
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-[#DC2626] hover:bg-[#B91C1C] transition-colors cursor-pointer"
            >
              Send Advocate Notice — ₹{basePrice}
            </button>
          </div>
        )}
      </div>

      <PaymentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        serviceName="Legal Notice to Automobile Dealership for Delivery Delay & Refund"
        amount={basePrice}
        category="consumer"
      />
    </>
  );
}
