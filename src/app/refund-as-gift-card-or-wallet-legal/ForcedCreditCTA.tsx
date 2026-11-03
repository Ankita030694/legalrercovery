"use client";

import React, { useState } from "react";
import { PaymentModal } from "@/components/PaymentModal";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";

interface ForcedCreditCTAProps {
  buttonText?: string;
  className?: string;
  variant?: "primary" | "secondary";
}

export default function ForcedCreditCTA({
  buttonText = "Demand Bank Refund via Legal Notice",
  className = "",
  variant = "primary",
}: ForcedCreditCTAProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const basePrice = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition;

  return (
    <>
      <div className={className}>
        {variant === "primary" ? (
          <div className="rounded-2xl border border-slate-700 bg-gradient-to-br from-[#111827] via-[#0F172A] to-[#1E293B] p-6 text-white shadow-xl sm:p-8 md:p-10">
            <div className="max-w-3xl">
              <span className="inline-block rounded-full bg-red-950/80 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-red-300 border border-red-800/60">
                Statutory Consumer Demand
              </span>
              <h3 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl text-white">
                Compel the Platform to Remit Trapped Wallet Credits to Your Bank
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
                Under the Consumer Protection Act 2019 and RBI PPI Master Directions, e-commerce platforms cannot lock your money inside closed wallets or non-transferable gift cards without affirmative consent. An advocate legal notice establishes unfair trade practice under Section 2(47) and mandates immediate outward bank remittance.
              </p>

              <div className="mt-6 flex flex-wrap items-baseline gap-3">
                <span className="text-3xl font-extrabold text-white">
                  ₹{basePrice}
                </span>
                <span className="text-xs text-slate-400">
                  all-inclusive fixed fee · advocate drafted · delivered via speed post &amp; digital dispatch
                </span>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-3 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>Drafted by experienced consumer lawyers</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>Cites CCPA Dark Patterns &amp; RBI Rules</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>Dispatched with official tracking &amp; acknowledgment</span>
                </div>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center justify-center rounded-xl bg-[#DC2626] px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:bg-[#B91C1C] focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-slate-900 cursor-pointer"
                >
                  {buttonText}
                </button>
                <a
                  href="#myth-fact-matrix"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-600 bg-slate-800/80 px-5 py-3.5 text-sm font-medium text-slate-200 transition hover:bg-slate-700 focus:outline-none text-center"
                >
                  Inspect Myth vs. Fact Matrix
                </a>
              </div>
            </div>
          </div>
        ) : (
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 text-center shadow-sm">
            <h4 className="text-lg font-bold text-slate-900">
              Trap-Free Refund: Insist on Your Original Payment Source
            </h4>
            <p className="mt-1 text-xs text-slate-600">
              Send a lawyer-drafted statutory demand to release wallet credits directly to your bank account for ₹{basePrice}.
            </p>
            <div className="mt-4">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center justify-center rounded-lg bg-[#DC2626] px-5 py-2.5 text-xs font-semibold text-white shadow hover:bg-[#B91C1C] transition cursor-pointer"
              >
                {buttonText}
              </button>
            </div>
          </div>
        )}
      </div>

      <PaymentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
