"use client";

import React, { useState } from "react";
import { PaymentModal } from "@/components/PaymentModal";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";

interface PlotBookingNoticeCTAProps {
  label?: string;
  className?: string;
  variant?: "primary" | "secondary" | "inline";
  showPrice?: boolean;
}

export default function PlotBookingNoticeCTA({
  label = "Draft Plot Booking Refund Legal Notice",
  className = "",
  variant = "primary",
  showPrice = true,
}: PlotBookingNoticeCTAProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const price = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition;

  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-bold transition-all duration-200 rounded-xl cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variantStyles = {
    primary:
      "bg-amber-600 hover:bg-amber-500 text-white shadow-lg shadow-amber-900/20 px-6 py-3.5 text-sm sm:text-base focus:ring-amber-500",
    secondary:
      "bg-slate-900 hover:bg-slate-800 text-white shadow-md px-5 py-3 text-sm focus:ring-slate-900",
    inline:
      "bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-300 px-4 py-2 text-xs sm:text-sm focus:ring-amber-500",
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setIsModalOpen(true)}
        className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      >
        <span>{label}</span>
        {showPrice && (
          <span className="ml-1 px-2 py-0.5 text-xs font-extrabold rounded-md bg-black/20 text-white">
            ₹{price.toLocaleString("en-IN")}
          </span>
        )}
        <svg
          className="w-4 h-4 shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </button>

      <PaymentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialCategory="Builder / Property Delay"
      />
    </>
  );
}
