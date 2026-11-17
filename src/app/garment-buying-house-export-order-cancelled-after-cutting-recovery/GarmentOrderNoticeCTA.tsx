"use client";

import React, { useState } from "react";
import { PaymentModal } from "@/components/PaymentModal";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";
import Link from "next/link";

interface GarmentOrderNoticeCTAProps {
  buttonText?: string;
  className?: string;
  variant?: "primary" | "secondary";
}

export default function GarmentOrderNoticeCTA({
  buttonText = "Test 1 Live Overdue Case Now",
  className = "",
  variant = "primary",
}: GarmentOrderNoticeCTAProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const basePrice = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition;

  return (
    <>
      <div className={`w-full max-w-full overflow-hidden ${className}`}>
        {variant === "primary" ? (
          <div className="bg-gradient-to-br from-[#111827] via-[#1F2937] to-[#111827] text-white rounded-2xl p-5 sm:p-8 md:p-10 border border-slate-800 shadow-2xl w-full">
            <div className="max-w-3xl">
              <span className="inline-block px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold tracking-wide uppercase bg-slate-800 text-red-400 border border-slate-700 mb-3 sm:mb-4">
                Dual B2B Creditor Track &bull; Contract Act s.53/54 &bull; De-Branding Salvage
              </span>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-white mb-3">
                Recover Stuck CMT Costs, Cancelled Export Garment Lots & Bar Illegal Air-Freight Debits
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed mb-6">
                Did your buying house or overseas brand delay trim tech-packs and then slap a ₹15–30 Lakh air-freight debit note on your factory? Or cancel a custom cut order mid-line? Issue an advocate-vetted statutory demand notice holding the Indian buying agency and foreign principal jointly liable under Section 230 Indian Contract Act, invoking Section 53/54 to excuse delivery dates, and serving a 15-day De-branding Salvage Sale notice.
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-semibold text-white bg-[#DC2626] hover:bg-[#B91C1C] transition-all duration-200 shadow-lg shadow-red-900/30 hover:shadow-red-900/50 text-sm sm:text-base cursor-pointer text-center"
                >
                  {buttonText} &mdash; &#8377;{basePrice}
                </button>
                <Link
                  href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 hover:text-white border border-slate-700 transition-all duration-200 text-sm sm:text-base text-center"
                >
                  Bulk CSV (10–10,000+ Cases)
                </Link>
              </div>
              <div className="mt-4 text-xs text-slate-300 flex flex-wrap sm:flex-nowrap items-center gap-2 sm:gap-3">
                <span>&#10003; Tri-Channel Dispatch (WhatsApp + Email + Speed Post RPAD)</span>
                <span>&bull;</span>
                <span>&#10003; BSA 2023 s.63 Hash Evidence</span>
                <span>&bull;</span>
                <span>&#10003; Section 43B(h) MSME Leverage</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white border-2 border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
            <span className="inline-block px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold tracking-wide uppercase bg-red-50 text-red-700 border border-red-200 mb-3">
              Institutional Garment Exporter Recovery Desk
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
              Have Multiple Cancelled POs or Coerced Air-Freight Deductions?
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              Upload your buyer communications, POs, tech-pack approval logs, and cutting bills. Our senior commercial recovery advocates serve joint statutory demand notices on the liaison buying office in India and the overseas brand, enforce Section 43B(h) disallowances, and initiate arbitration or MSEFC proceedings.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto px-6 py-3 bg-[#DC2626] hover:bg-[#B91C1C] text-white text-sm font-semibold rounded-xl transition cursor-pointer text-center"
              >
                Send Statutory Demand Notice &mdash; &#8377;{basePrice}
              </button>
              <Link
                href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                className="w-full sm:w-auto px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold rounded-xl transition text-center"
              >
                Bulk Enterprise Portfolio Intake
              </Link>
            </div>
          </div>
        )}
      </div>

      <PaymentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        serviceName="Garment Export Order Cancellation & Air-Freight Penalty Demand Notice"
        amount={basePrice}
      />
    </>
  );
}
