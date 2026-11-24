"use client";

import React, { useState } from "react";
import { PaymentModal } from "@/components/PaymentModal";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";
import Link from "next/link";

interface HomeTextilesNoticeCTAProps {
  buttonText?: string;
  className?: string;
  variant?: "primary" | "secondary";
}

export default function HomeTextilesNoticeCTA({
  buttonText = "Test 1 Live Overdue Case Now",
  className = "",
  variant = "primary",
}: HomeTextilesNoticeCTAProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const basePrice = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition;

  return (
    <>
      <div className={`w-full max-w-full overflow-hidden ${className}`}>
        {variant === "primary" ? (
          <div className="bg-gradient-to-br from-[#111827] via-[#1F2937] to-[#111827] text-white rounded-2xl p-5 sm:p-8 md:p-10 border border-slate-800 shadow-2xl w-full">
            <div className="max-w-3xl">
              <span className="inline-block px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold tracking-wide uppercase bg-slate-800 text-red-400 border border-slate-700 mb-3 sm:mb-4">
                Dual B2B Creditor Track &bull; MSMED s.15–18 &bull; Section 43B(h)
              </span>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-white mb-3">
                Recover Stuck Hotel FF&amp;E, Carpet, Curtain &amp; Hospitality Linen Arrears
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed mb-6">
                Supplied custom banquet carpets, blackout curtains, mattresses, or 300-TC linen to a hotel pre-opening project or turnkey interior firm that stopped paying? Serve a fact-verified statutory demand notice invoking MSMED Act s.15–18 (3x RBI compound interest), Income Tax s.43B(h) disallowance, and Order XXXVII CPC summary recovery—or upload your entire dealer ledger for institutional recovery.
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
                <span>&#10003; Fact-Verified &bull; Email + WhatsApp + Speed Post RPAD</span>
                <span>&bull;</span>
                <span>&#10003; BSA 2023 s.63 Hash Proof</span>
                <span>&bull;</span>
                <Link href="/user/representees" className="underline hover:text-white">
                  Institutional Desk (/user/representees)
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white border-2 border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
            <span className="inline-block px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold tracking-wide uppercase bg-red-50 text-red-700 border border-red-200 mb-3">
              Panipat, Bhadohi, Karur &amp; Solapur Recovery Desk
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
              Have Multiple Unpaid Hotel Projects or Furnishing Dealer Ledgers?
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              Upload your POs, E-Way bills, site handover checklists, and Udyam certificate. Our commercial recovery advocates serve joint statutory notices on hotel promoters and turnkey interior contractors, trigger Section 43B(h) tax-audit pressure, and initiate MSEFC Samadhaan or Order XXXVII summary suits.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto px-6 py-3 bg-[#DC2626] hover:bg-[#B91C1C] text-white text-sm font-semibold rounded-xl transition cursor-pointer text-center"
              >
                Test 1 Live Case &mdash; &#8377;{basePrice}
              </button>
              <Link
                href="/user/new-recovery"
                className="w-full sm:w-auto px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-900 text-sm font-semibold rounded-xl transition text-center border border-slate-300"
              >
                Self-Serve Intake
              </Link>
              <Link
                href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                className="w-full sm:w-auto px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold rounded-xl transition text-center"
              >
                Bulk CSV (10–10,000+ Cases)
              </Link>
            </div>
          </div>
        )}
      </div>

      <PaymentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        serviceName="Home-Textile, Carpet & Hospitality Linen B2B Recovery Notice"
        amount={basePrice}
      />
    </>
  );
}
