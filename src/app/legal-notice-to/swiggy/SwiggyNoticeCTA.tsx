"use client";

import React, { useState } from "react";
import { PaymentModal } from "@/components/PaymentModal";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";

interface SwiggyNoticeCTAProps {
  variant?: "primary" | "aside" | "banner";
  buttonText?: string;
  className?: string;
}

export default function SwiggyNoticeCTA({
  variant = "primary",
  buttonText,
  className = "",
}: SwiggyNoticeCTAProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const basePrice = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition;

  if (variant === "aside") {
    return (
      <>
        <div className={`mt-5 pt-5 border-t border-slate-700/80 ${className}`}>
          <div className="flex items-baseline justify-between mb-3">
            <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
              Advocate Notice Fee
            </span>
            <span className="text-2xl font-black text-white">
              ₹{basePrice}
            </span>
          </div>
          <p className="text-[11px] text-slate-300 leading-relaxed mb-4">
            Dispatched in 24 hours. Includes drafting by an enrolled advocate, formal service to Swiggy Limited via Registered Speed Post with postal tracking, and digital escalation.
          </p>
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="w-full inline-flex items-center justify-center py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#DC2626] hover:bg-[#B91C1C] transition-all duration-150 shadow-md shadow-red-950/40 cursor-pointer"
          >
            {buttonText || `Draft Notice to Swiggy — ₹${basePrice}`}
          </button>
          <div className="mt-3 flex items-center justify-center gap-2 text-[10px] text-slate-400">
            <span>✓ Enrolled Advocate Letterhead</span>
            <span>•</span>
            <span>✓ 15-Day Cure Window</span>
          </div>
        </div>

        <PaymentModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </>
    );
  }

  if (variant === "banner") {
    return (
      <>
        <div className={`bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-slate-700/80 rounded-3xl p-6 sm:p-10 text-white shadow-xl ${className}`}>
          <div className="max-w-3xl">
            <span className="inline-block text-[11px] font-black uppercase tracking-widest text-[#DC2626] bg-red-950/80 border border-red-800/60 px-3 py-1 rounded-full mb-3">
              Fast Legal Escalation
            </span>
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white mb-3">
              Did Swiggy or Instamart Deny Your Rightful Refund?
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 font-normal">
              Stop arguing with automated chatbots. Under the Consumer Protection Act, 2019 and E-Commerce Rules, delivery aggregators face strict fallback liability. Serve a formal advocate legal notice to Swiggy Limited demanding your full principal refund, statutory interest, and harassment damages.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center justify-center py-3.5 px-6 rounded-xl text-sm font-black text-white bg-[#DC2626] hover:bg-[#B91C1C] transition-all duration-150 shadow-lg shadow-red-950/50 cursor-pointer"
              >
                {buttonText || `Send Legal Notice to Swiggy — ₹${basePrice}`}
              </button>
              <div className="text-xs text-slate-400 font-medium sm:pl-2">
                <span className="block text-slate-200 font-bold">Flat ₹{basePrice} • No Hidden Commissions</span>
                <span>Dispatched within 24 hours via Speed Post & Email</span>
              </div>
            </div>
          </div>
        </div>

        <PaymentModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </>
    );
  }

  return (
    <>
      <div className={`my-6 ${className}`}>
        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center justify-center py-3 px-6 rounded-xl text-sm font-bold text-white bg-[#DC2626] hover:bg-[#B91C1C] transition-all duration-150 shadow-md cursor-pointer"
        >
          {buttonText || `Draft Advocate Notice to Swiggy — ₹${basePrice}`}
        </button>
      </div>

      <PaymentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
