"use client";

import { useState } from "react";
import { PaymentModal } from "@/components/PaymentModal";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";

export default function ChargesCTA({
  buttonText = "Send a Legal Notice",
  variant = "primary",
}: {
  buttonText?: string;
  variant?: "primary" | "secondary";
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const basePrice = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition;

  return (
    <>
      {variant === "primary" ? (
        <div className="bg-gradient-to-br from-[#111827] via-[#1F2937] to-[#111827] text-white rounded-2xl p-5 sm:p-8 border border-slate-800 shadow-2xl w-full">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight mb-3">
            One flat fee: ₹{basePrice} per opposite party
          </h3>
          <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed mb-6">
            An advocate drafts your notice and it is sent by Registered Speed Post, email and WhatsApp, with tracking. No consultation, typing or postage charges on top.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-semibold text-white bg-[#DC2626] hover:bg-[#B91C1C] transition-colors shadow-lg text-sm sm:text-base cursor-pointer"
            >
              {buttonText}: ₹{basePrice}
            </button>
            <div className="text-xs text-slate-300 flex flex-wrap items-center gap-2">
              <span>✓ Advocate drafting</span>
              <span>•</span>
              <span>✓ Speed Post + digital delivery</span>
              <span>•</span>
              <span>✓ Tracking</span>
            </div>
          </div>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-[#DC2626] hover:bg-[#B91C1C] transition-colors cursor-pointer"
        >
          {buttonText} (₹{basePrice})
        </button>
      )}
      <PaymentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
