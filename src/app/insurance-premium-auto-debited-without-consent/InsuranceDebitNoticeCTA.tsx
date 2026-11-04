"use client";

import React, { useState } from "react";
import { PaymentModal } from "@/components/PaymentModal";

interface InsuranceDebitNoticeCTAProps {
  buttonText?: string;
  source?: string;
  className?: string;
}

export default function InsuranceDebitNoticeCTA({
  buttonText = "Send Legal Notice to Bank & Insurer",
  source = "insurance_auto_debit_page",
  className = "",
}: InsuranceDebitNoticeCTAProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className={className}>
        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-sm sm:text-base shadow-lg shadow-red-600/20 hover:shadow-red-600/30 transition-all cursor-pointer"
        >
          <span>{buttonText}</span>
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </button>
      </div>

      <PaymentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        category="consumer"
        serviceType="bancassurance-unauthorised-insurance-debit"
        metadata={{
          source,
          claimType: "insurance-auto-debit-refund",
        }}
      />
    </>
  );
}
