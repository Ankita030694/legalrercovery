"use client";

import React, { useState } from "react";
import { PaymentModal } from "@/components/PaymentModal";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";

interface TextileBrokerNoticeCTAProps {
  buttonText?: string;
  className?: string;
  variant?: "primary" | "secondary";
}

export default function TextileBrokerNoticeCTA({
  buttonText = "Issue Broker & Buyer Co-Notice (₹999)",
  className = "",
  variant = "primary",
}: TextileBrokerNoticeCTAProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className={`flex flex-col sm:flex-row gap-3 ${className}`}>
        {variant === "primary" ? (
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base text-white bg-[#DC2626] hover:bg-[#B91C1C] shadow-lg shadow-red-900/30 transition-all duration-200 cursor-pointer text-center"
          >
            <span>{buttonText}</span>
          </button>
        ) : (
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base text-slate-900 bg-white hover:bg-slate-100 border border-slate-300 shadow-sm transition-all duration-200 cursor-pointer text-center"
          >
            <span>{buttonText}</span>
          </button>
        )}
      </div>

      <PaymentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultService="textile-broker-default-recovery"
        amount={DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition}
      />
    </>
  );
}
