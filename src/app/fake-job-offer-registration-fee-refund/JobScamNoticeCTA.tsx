"use client";

import React, { useState } from "react";
import { PaymentModal } from "@/components/PaymentModal";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";

interface JobScamNoticeCTAProps {
  buttonText?: string;
  className?: string;
  variant?: "primary" | "secondary";
}

export default function JobScamNoticeCTA({
  buttonText = "Draft Legal Notice to Fraudulent Agency",
  className = "",
  variant = "primary",
}: JobScamNoticeCTAProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const basePrice = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition;

  return (
    <>
      <div className={`w-full max-w-full overflow-hidden ${className}`}>
        {variant === "primary" ? (
          <div className="bg-gradient-to-br from-[#111827] via-[#1F2937] to-[#111827] text-white rounded-2xl p-5 sm:p-8 md:p-10 border border-slate-800 shadow-2xl w-full">
            <div className="max-w-3xl">
              <span className="inline-block px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold tracking-wide uppercase bg-slate-800 text-red-400 border border-slate-700 mb-3 sm:mb-4">
                BNS 318(4) • Consumer Protection Act 2019 • Emigration Act 1983
              </span>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-white mb-3">
                Recover Registration Fees Paid to a Fake Placement Agency or Bogus Recruiter
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed mb-6">
                If you paid a registration fee, interview security deposit, or verification charge to a traceable placement consultancy or business entity that promised employment and vanished, have an advocate issue a formal 15-day statutory demand notice. Served via Registered Speed Post with tracking and digital delivery under Section 63 of Bharatiya Sakshya Adhiniyam, 2023.
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
                  <span>✓ Speed Post + Email / WhatsApp</span>
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

      <PaymentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        serviceType="consumer-complaint"
      />
    </>
  );
}
