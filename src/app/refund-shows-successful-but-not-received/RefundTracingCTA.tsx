"use client";

import React, { useState } from "react";
import { PaymentModal } from "@/components/PaymentModal";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";

interface RefundTracingCTAProps {
  buttonText?: string;
  className?: string;
  variant?: "primary" | "secondary";
}

export default function RefundTracingCTA({
  buttonText = "Issue Pre-Litigation Legal Demand",
  className = "",
  variant = "primary",
}: RefundTracingCTAProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const basePrice = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition;

  return (
    <>
      <div className={className}>
        {variant === "primary" ? (
          <div className="rounded-2xl border border-slate-700 bg-gradient-to-br from-[#111827] via-[#0F172A] to-[#1E293B] p-6 text-white shadow-xl sm:p-8 md:p-10">
            <div className="max-w-3xl">
              <span className="inline-block rounded-full bg-red-950/80 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-red-300 border border-red-800/60">
                Statutory Pre-Litigation Notice
              </span>
              <h3 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl text-white">
                Break the Bank vs Platform Deadlock with an Advocate Notice
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
                Stop waiting in customer care loops while the platform points to the bank and the bank points to the platform. An advocate legal notice establishes joint statutory liability across the merchant, payment aggregator, and issuing bank under RBI TAT guidelines and the Consumer Protection Act.
              </p>

              <div className="mt-6 flex flex-wrap items-baseline gap-3">
                <span className="text-3xl font-extrabold text-white">
                  ₹{basePrice}
                </span>
                <span className="text-xs text-slate-400">
                  fixed transparent fee · no hidden charges · drafting + digital delivery
                </span>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-3 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>Drafted by verified advocates</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>Delivered via Email, WhatsApp & Speed Post</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>Includes formal UTR & ARN tracking demand</span>
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
                  href="#faq"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-600 bg-slate-800/80 px-5 py-3.5 text-sm font-medium text-slate-200 transition hover:bg-slate-700 focus:outline-none text-center"
                >
                  Read Tracing FAQs
                </a>
              </div>
            </div>
          </div>
        ) : (
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 text-center shadow-sm">
            <h4 className="text-lg font-bold text-slate-900">
              Need Legal Escalation for an Uncredited Refund?
            </h4>
            <p className="mt-1 text-xs text-slate-600">
              Serve a formal pre-litigation demand on the platform and bank for ₹{basePrice}.
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
