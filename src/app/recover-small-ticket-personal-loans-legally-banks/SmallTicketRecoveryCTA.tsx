"use client";

import React, { useState } from "react";
import { PaymentModal } from "@/components/PaymentModal";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";

interface SmallTicketRecoveryCTAProps {
  buttonText?: string;
  className?: string;
  variant?: "primary" | "secondary" | "b2b";
}

export default function SmallTicketRecoveryCTA({
  buttonText = "Initiate Bulk Small-Ticket Notice & Lok Adalat Rail",
  className = "",
  variant = "primary",
}: SmallTicketRecoveryCTAProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const basePrice = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition;

  return (
    <>
      <div className={`w-full max-w-full overflow-hidden ${className}`}>
        {variant === "primary" ? (
          <div className="bg-gradient-to-br from-[#111827] via-[#1F2937] to-[#111827] text-white rounded-2xl p-5 sm:p-8 md:p-10 border border-slate-800 shadow-2xl w-full">
            <div className="max-w-3xl">
              <span className="inline-block px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold tracking-wide uppercase bg-slate-800 text-red-400 border border-slate-700 mb-3 sm:mb-4">
                Statutory Bank Recovery • Pre-Litigation Lok Adalat &amp; Section 25 PSS Act
              </span>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-white mb-3">
                Make Small-Ticket Loan Recovery Profitable: Deploy Our Flat-Fee Bulk Notice &amp; Mass Lok Adalat Rail
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed mb-6">
                Are you a Retail Credit Head, FinTech Collection Director, or Microfinance Recovery Lead trapped by the unit economics of small loans under ₹2 Lakhs? Traditional litigation drains your balance sheet. Our institutional legal network serves compliant digital demand notices via Speed Post API and WhatsApp with Section 63 BSA electronic certificates, and files bulk pre-litigation Lok Adalat petitions across District Legal Services Authorities (DLSAs) for enforceable, non-appealable civil decrees at zero court fees.
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
                  <span>✓ Flat-Fee Bulk Notice Pricing</span>
                  <span>•</span>
                  <span>✓ DLSA Pre-Litigation Lok Adalat</span>
                  <span>•</span>
                  <span>✓ Zero Ad-Valorem Court Fees</span>
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
