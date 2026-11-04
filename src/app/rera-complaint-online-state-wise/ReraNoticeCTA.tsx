"use client";

import React, { useState } from "react";
import { PaymentModal } from "@/components/PaymentModal";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";

interface ReraNoticeCTAProps {
  variant?: "primary" | "inline";
}

export default function ReraNoticeCTA({ variant = "primary" }: ReraNoticeCTAProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const noticePrice = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition;

  if (variant === "inline") {
    return (
      <>
        <div className="my-6 p-4 sm:p-6 rounded-2xl bg-gradient-to-r from-[#111827] via-[#1F2937] to-[#111827] text-white border border-gray-800 shadow-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="inline-block text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-red-500/20 text-red-300 border border-red-500/30">
              Pre-RERA Statutory Escalation • Section 18(1) RERA
            </span>
            <h3 className="text-base sm:text-lg font-bold text-white">
              Builder Delaying Possession or Refusing Booking Refund?
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 max-w-xl">
              Before filing Form M or Form N on your state RERA portal, serve an advocate-drafted statutory demand notice invoking Section 18(1) RERA and SBI MCLR + 2% interest. Starts at ₹{noticePrice.toLocaleString("en-IN")}.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="w-full sm:w-auto shrink-0 px-5 py-3 rounded-xl bg-[#DC2626] hover:bg-red-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer"
          >
            Draft Builder Legal Notice — ₹{noticePrice.toLocaleString("en-IN")}
          </button>
        </div>

        <PaymentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </>
    );
  }

  return (
    <>
      <div className="my-8 sm:my-10 rounded-2xl bg-gradient-to-br from-[#111827] via-[#1F2937] to-[#0F172A] text-white p-5 sm:p-8 md:p-10 border border-gray-800 shadow-xl relative overflow-hidden">
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex flex-wrap items-center gap-2 px-3 py-1 rounded-full bg-red-500/15 border border-red-500/30 text-red-300 text-xs font-bold uppercase tracking-wider">
            <span>Advocate-Drafted Statutory Notice</span>
            <span>•</span>
            <span>Section 12, 13 &amp; 18 RERA 2016</span>
          </div>

          <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-white leading-snug">
            Serve a Formal Legal Notice to Your Builder Before or Alongside Your Online RERA Complaint
          </h3>

          <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed">
            Whether you are demanding a 100% unconditional refund with SBI MCLR + 2% interest for delayed possession under Section 18(1), challenging an arbitrary 10% booking forfeiture prior to agreement registration under Section 13, or putting the promoter&apos;s directors on formal notice prior to filing Form M on MahaRERA, UP RERA, HARERA, or K-RERA, a formal advocate legal notice establishes your chronological cause of action and forces senior developer management to the settlement table.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 pt-2 text-xs text-gray-200">
            <div className="flex items-center gap-2 bg-white/5 px-3 py-2.5 rounded-xl border border-white/10">
              <span className="text-emerald-400 font-bold">✓</span>
              <span>Section 18 SBI MCLR+2% Interest Computation</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 px-3 py-2.5 rounded-xl border border-white/10">
              <span className="text-emerald-400 font-bold">✓</span>
              <span>Speed Post + Registered Email Dispatch</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 px-3 py-2.5 rounded-xl border border-white/10">
              <span className="text-emerald-400 font-bold">✓</span>
              <span>Ready Annexure for Online Form M/N Filing</span>
            </div>
          </div>

          <div className="pt-3 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#DC2626] hover:bg-red-700 text-white font-extrabold text-sm sm:text-base shadow-lg shadow-red-900/30 transition-all cursor-pointer text-center"
            >
              Send Builder Legal Notice Now (₹{noticePrice.toLocaleString("en-IN")})
            </button>
            <span className="text-xs text-gray-400 text-center sm:text-left">
              Advocate review &amp; Speed Post tracking included • No hidden percentage cut
            </span>
          </div>
        </div>
      </div>

      <PaymentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
