"use client";

import React, { useState } from "react";
import { PaymentModal } from "@/components/PaymentModal";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";

interface ModelTenancyNoticeCTAProps {
  buttonText?: string;
  className?: string;
  variant?: "primary" | "secondary";
}

export default function ModelTenancyNoticeCTA({
  buttonText = "Send Advocate Legal Notice to Landlord for Deposit Refund",
  className = "",
  variant = "primary",
}: ModelTenancyNoticeCTAProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const basePrice = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition;

  return (
    <>
      <div className={`w-full max-w-full overflow-hidden ${className}`}>
        {variant === "primary" ? (
          <div className="bg-gradient-to-br from-[#111827] via-[#1F2937] to-[#111827] text-white rounded-2xl p-5 sm:p-8 md:p-10 border border-slate-800 shadow-2xl w-full">
            <div className="max-w-3xl">
              <span className="inline-block px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold tracking-wide uppercase bg-slate-800 text-red-400 border border-slate-700 mb-3 sm:mb-4">
                Statutory Tenant Demand Notice • Section 11 MTA &amp; Section 108 TPA Compliant
              </span>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-white mb-3">
                Landlord Withholding Your Security Deposit or Making Illegal Painting Deductions?
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed mb-6">
                Have a verified advocate draft and dispatch a formal 15-day statutory demand notice to your landlord, property manager, or PG/co-living operator. We cite the exact applicable law for your city—whether Section 11 of the State Tenancy Act (in adopted states like UP, Tamil Nadu, AP &amp; Assam) or Section 108 of the Transfer of Property Act and Section 73/74 of the Indian Contract Act (in Bengaluru, Mumbai, Pune, Delhi &amp; Gurugram)—served via Registered Speed Post and Section 63 BSA electronic delivery.
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
                  <span>✓ Speed Post + Email/WhatsApp</span>
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
