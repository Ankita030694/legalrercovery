"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { PaymentModal } from "@/components/PaymentModal";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";

export interface ClaimCategoryConfig {
  id: string;
  name: string;
  statute: string;
  article: string;
  durationYears: number;
  durationDays?: number;
  description: string;
  causeDateLabel: string;
  supportsExtension: boolean;
}

const CLAIM_CATEGORIES: ClaimCategoryConfig[] = [
  {
    id: "money_lent",
    name: "Money Lent / Friendly Loan / Personal Hand Loan",
    statute: "Limitation Act, 1963",
    article: "Article 19 & 21",
    durationYears: 3,
    description: "3 years from the date the money was lent, or when the loan was demanded if payable on demand.",
    causeDateLabel: "Date Money Was Lent / Transferred",
    supportsExtension: true,
  },
  {
    id: "goods_sold",
    name: "Goods Sold & Delivered / Vendor Invoices / B2B Dues",
    statute: "Limitation Act, 1963",
    article: "Article 14 & 15",
    durationYears: 3,
    description: "3 years from the date of goods delivery, or expiration of the agreed credit period.",
    causeDateLabel: "Invoice Due Date / Goods Delivery Date",
    supportsExtension: true,
  },
  {
    id: "services_done",
    name: "Work Done / Freelancer Fees / Contractor Dues",
    statute: "Limitation Act, 1963",
    article: "Article 18",
    durationYears: 3,
    description: "3 years from the date the work was completed or milestone invoice submitted.",
    causeDateLabel: "Date Work Completed / Final Invoice Date",
    supportsExtension: true,
  },
  {
    id: "promissory_note",
    name: "Promissory Note (Pro-Note) / Bill of Exchange",
    statute: "Limitation Act, 1963",
    article: "Article 34 & 35",
    durationYears: 3,
    description: "3 years from the date of the instrument or date of presentation/demand.",
    causeDateLabel: "Date of Promissory Note / Demand",
    supportsExtension: true,
  },
  {
    id: "contract_breach",
    name: "Breach of Contract / Security Deposit / General Recovery",
    statute: "Limitation Act, 1963",
    article: "Article 55 & Article 113 (Residuary)",
    durationYears: 3,
    description: "3 years from the date the contract was breached or debt became legally due.",
    causeDateLabel: "Date of Breach / Eviction / Demand Refusal",
    supportsExtension: true,
  },
  {
    id: "salary_dues",
    name: "Unpaid Salary / Notice Period Pay / Employment Wages",
    statute: "Limitation Act, 1963",
    article: "Article 7 (Schedule)",
    durationYears: 3,
    description: "3 years from the date wages accrued or date of resignation / termination.",
    causeDateLabel: "Date Resignation Accepted / Last Working Day",
    supportsExtension: true,
  },
  {
    id: "consumer_dispute",
    name: "Consumer Court Complaint (e-Jagriti / Commission)",
    statute: "Consumer Protection Act, 2019",
    article: "Section 69",
    durationYears: 2,
    description: "Strict 2 years from the date on which the cause of action (defect/deficiency) arose.",
    causeDateLabel: "Date Deficiency Occurred / Complaint Rejected",
    supportsExtension: false,
  },
  {
    id: "cheque_bounce",
    name: "Cheque Bounce Criminal Action (NI Act Section 138)",
    statute: "Negotiable Instruments Act, 1881",
    article: "Section 138(b) & Section 142(1)(b)",
    durationYears: 0,
    durationDays: 75,
    description: "30 days for statutory notice from return memo + 15 days cure window + 30 days court complaint.",
    causeDateLabel: "Date Bank Dishonour Memo Received",
    supportsExtension: false,
  },
];

// Helper to format date in standard Indian format: DD Mon YYYY
function formatDate(date: Date): string {
  if (isNaN(date.getTime())) return "Invalid Date";
  return date.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

// Add years to a date
function addYears(date: Date, years: number): Date {
  const result = new Date(date);
  result.setFullYear(result.getFullYear() + years);
  return result;
}

// Add days to a date
function addDays(date: Date, days: number): Date {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

export default function LimitationCalculatorClient() {
  // Preset defaults (1.5 years ago)
  const defaultDate = useMemo(() => {
    const d = new Date();
    d.setFullYear(d.getFullYear() - 1);
    d.setMonth(d.getMonth() - 6);
    return d.toISOString().split("T")[0];
  }, []);

  const [claimTypeId, setClaimTypeId] = useState<string>("money_lent");
  const [causeDateStr, setCauseDateStr] = useState<string>(defaultDate);
  const [claimAmount, setClaimAmount] = useState<string>("250000");
  const [hasWrittenAck, setHasWrittenAck] = useState<boolean>(false);
  const [ackDateStr, setAckDateStr] = useState<string>("");
  const [hasPartPayment, setHasPartPayment] = useState<boolean>(false);
  const [partPaymentDateStr, setPartPaymentDateStr] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const basePrice = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition;
  const currentCategory = CLAIM_CATEGORIES.find((c) => c.id === claimTypeId) || CLAIM_CATEGORIES[0];

  // Calculation Logic
  const calculationResult = useMemo(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const causeDate = new Date(causeDateStr);
    causeDate.setHours(0, 0, 0, 0);

    if (isNaN(causeDate.getTime())) {
      return null;
    }

    // Original Expiry Date
    let originalExpiryDate: Date;
    if (currentCategory.durationYears > 0) {
      originalExpiryDate = addYears(causeDate, currentCategory.durationYears);
    } else {
      originalExpiryDate = addDays(causeDate, currentCategory.durationDays || 75);
    }

    let finalExpiryDate = new Date(originalExpiryDate);
    const extensionDetails: string[] = [];
    let isRevivedByExtension = false;
    let invalidExtensionNotice = "";

    if (currentCategory.supportsExtension) {
      // Evaluate Written Acknowledgment under Section 18 Limitation Act
      if (hasWrittenAck && ackDateStr) {
        const ackDate = new Date(ackDateStr);
        ackDate.setHours(0, 0, 0, 0);

        if (!isNaN(ackDate.getTime())) {
          if (ackDate > causeDate && ackDate <= originalExpiryDate) {
            // Valid Section 18 acknowledgment
            const ackExpiry = addYears(ackDate, currentCategory.durationYears);
            if (ackExpiry > finalExpiryDate) {
              finalExpiryDate = ackExpiry;
              isRevivedByExtension = true;
              extensionDetails.push(
                `Section 18 Limitation Act: Valid written acknowledgment on ${formatDate(
                  ackDate
                )} restarted a fresh 3-year limitation clock extending to ${formatDate(ackExpiry)}.`
              );
            }
          } else if (ackDate > originalExpiryDate) {
            invalidExtensionNotice = `Written acknowledgment occurred on ${formatDate(
              ackDate
            )}, which was AFTER the original 3-year limitation expired on ${formatDate(
              originalExpiryDate
            )}. Under Supreme Court precedent (Sampuran Singh v. Niranjan Kaur), Section 18 cannot revive a debt that was already time-barred when acknowledged. (Only a fresh written promise to pay under Section 25(3) Indian Contract Act can revive it).`;
          }
        }
      }

      // Evaluate Part Payment under Section 19 Limitation Act
      if (hasPartPayment && partPaymentDateStr) {
        const payDate = new Date(partPaymentDateStr);
        payDate.setHours(0, 0, 0, 0);

        if (!isNaN(payDate.getTime())) {
          if (payDate > causeDate && payDate <= originalExpiryDate) {
            const payExpiry = addYears(payDate, currentCategory.durationYears);
            if (payExpiry > finalExpiryDate) {
              finalExpiryDate = payExpiry;
              isRevivedByExtension = true;
              extensionDetails.push(
                `Section 19 Limitation Act: Part-payment received on ${formatDate(
                  payDate
                )} reset the limitation clock, creating a fresh 3-year expiry date of ${formatDate(
                  payExpiry
                )}.`
              );
            }
          } else if (payDate > originalExpiryDate && !isRevivedByExtension) {
            if (!invalidExtensionNotice) {
              invalidExtensionNotice = `Part-payment on ${formatDate(
                payDate
              )} occurred after the limitation expired on ${formatDate(
                originalExpiryDate
              )}. Part-payment under Section 19 must occur prior to the expiry of the prescribed period.`;
            }
          }
        }
      }
    }

    // Difference in days relative to today
    const diffTime = finalExpiryDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    const isTimeBarred = diffDays < 0;
    const isUrgent = diffDays >= 0 && diffDays <= 60;

    return {
      causeDate,
      originalExpiryDate,
      finalExpiryDate,
      diffDays,
      isTimeBarred,
      isUrgent,
      isRevivedByExtension,
      extensionDetails,
      invalidExtensionNotice,
      statute: currentCategory.statute,
      article: currentCategory.article,
    };
  }, [
    claimTypeId,
    causeDateStr,
    hasWrittenAck,
    ackDateStr,
    hasPartPayment,
    partPaymentDateStr,
    currentCategory,
  ]);

  // Preset Handlers
  const applyPreset = (presetKey: string) => {
    const today = new Date();
    if (presetKey === "friendly_loan") {
      setClaimTypeId("money_lent");
      const d = new Date();
      d.setFullYear(today.getFullYear() - 2);
      d.setMonth(today.getMonth() - 3);
      setCauseDateStr(d.toISOString().split("T")[0]);
      setClaimAmount("350000");
      setHasWrittenAck(false);
      setAckDateStr("");
      setHasPartPayment(false);
      setPartPaymentDateStr("");
    } else if (presetKey === "vendor_ack") {
      setClaimTypeId("goods_sold");
      const d = new Date();
      d.setFullYear(today.getFullYear() - 2);
      d.setMonth(today.getMonth() - 8);
      setCauseDateStr(d.toISOString().split("T")[0]);
      setClaimAmount("520000");
      setHasWrittenAck(true);
      const ackD = new Date();
      ackD.setMonth(today.getMonth() - 4);
      setAckDateStr(ackD.toISOString().split("T")[0]);
      setHasPartPayment(false);
      setPartPaymentDateStr("");
    } else if (presetKey === "consumer_dispute") {
      setClaimTypeId("consumer_dispute");
      const d = new Date();
      d.setFullYear(today.getFullYear() - 1);
      d.setMonth(today.getMonth() - 2);
      setCauseDateStr(d.toISOString().split("T")[0]);
      setClaimAmount("85000");
      setHasWrittenAck(false);
      setAckDateStr("");
      setHasPartPayment(false);
      setPartPaymentDateStr("");
    } else if (presetKey === "salary_expired") {
      setClaimTypeId("salary_dues");
      const d = new Date();
      d.setFullYear(today.getFullYear() - 3);
      d.setMonth(today.getMonth() - 6);
      setCauseDateStr(d.toISOString().split("T")[0]);
      setClaimAmount("420000");
      setHasWrittenAck(false);
      setAckDateStr("");
      setHasPartPayment(false);
      setPartPaymentDateStr("");
    }
  };

  return (
    <div className="w-full bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden mb-12">
      {/* Header bar */}
      <div className="bg-slate-900 text-white px-5 sm:px-8 py-5 border-b border-slate-800 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <span className="text-[11px] sm:text-xs font-bold text-red-400 uppercase tracking-wider block mb-1">
            Indian Limitation Act, 1963 • Section 18 &amp; 19 Revival Engine
          </span>
          <h2 className="text-lg sm:text-xl md:text-2xl font-black text-white">
            Limitation Period &amp; Time-Barred Debt Calculator
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-950/80 text-emerald-400 border border-emerald-800/80">
            ● 2026 Ready
          </span>
        </div>
      </div>

      {/* Quick Presets */}
      <div className="px-5 sm:px-8 py-3 bg-slate-50 border-b border-slate-200/80 flex flex-wrap items-center gap-2 text-xs">
        <span className="text-slate-500 font-bold uppercase tracking-wider text-[11px] mr-1">
          Quick Scenarios:
        </span>
        <button
          type="button"
          onClick={() => applyPreset("friendly_loan")}
          className="px-2.5 py-1 rounded-lg bg-white hover:bg-slate-100 text-slate-700 font-medium border border-slate-200 shadow-2xs transition-colors cursor-pointer"
        >
          Hand Loan (2.2 Yrs Ago)
        </button>
        <button
          type="button"
          onClick={() => applyPreset("vendor_ack")}
          className="px-2.5 py-1 rounded-lg bg-white hover:bg-slate-100 text-slate-700 font-medium border border-slate-200 shadow-2xs transition-colors cursor-pointer"
        >
          Invoice + WhatsApp Ack
        </button>
        <button
          type="button"
          onClick={() => applyPreset("consumer_dispute")}
          className="px-2.5 py-1 rounded-lg bg-white hover:bg-slate-100 text-slate-700 font-medium border border-slate-200 shadow-2xs transition-colors cursor-pointer"
        >
          Consumer Defect (14 Mo)
        </button>
        <button
          type="button"
          onClick={() => applyPreset("salary_expired")}
          className="px-2.5 py-1 rounded-lg bg-white hover:bg-slate-100 text-slate-700 font-medium border border-slate-200 shadow-2xs transition-colors cursor-pointer"
        >
          Salary &gt; 3 Yrs (Time-Barred)
        </button>
      </div>

      {/* Two-Pane Calculator Grid */}
      <div className="p-5 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Pane: Interactive Form Inputs */}
        <form
          className="lg:col-span-7 space-y-6"
          onSubmit={(e) => e.preventDefault()}
          aria-label="Limitation Period Inputs"
        >
          {/* Claim Type Selection */}
          <div>
            <label
              htmlFor="claim-type-select"
              className="block text-xs sm:text-sm font-black text-slate-900 uppercase tracking-wider mb-2"
            >
              1. Select Claim or Debt Category
            </label>
            <div className="relative">
              <select
                id="claim-type-select"
                value={claimTypeId}
                onChange={(e) => setClaimTypeId(e.target.value)}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-900 font-semibold focus:outline-none focus:ring-2 focus:ring-[#DC2626] focus:border-transparent transition-all cursor-pointer"
              >
                {CLAIM_CATEGORIES.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name} ({cat.durationYears > 0 ? `${cat.durationYears} Years` : "75 Days"} — {cat.article})
                  </option>
                ))}
              </select>
            </div>
            <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
              Statutory Basis: <strong className="text-slate-800">{currentCategory.statute}</strong> ({currentCategory.article}). {currentCategory.description}
            </p>
          </div>

          {/* Cause of Action Date Input */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="cause-date-input"
                className="block text-xs sm:text-sm font-black text-slate-900 uppercase tracking-wider mb-2"
              >
                2. {currentCategory.causeDateLabel}
              </label>
              <input
                id="cause-date-input"
                type="date"
                value={causeDateStr}
                onChange={(e) => setCauseDateStr(e.target.value)}
                max={new Date().toISOString().split("T")[0]}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-900 font-semibold focus:outline-none focus:ring-2 focus:ring-[#DC2626] focus:border-transparent transition-all"
                required
              />
              <span className="text-[11px] text-slate-500 mt-1 block">
                The date debt or right to sue first accrued.
              </span>
            </div>

            <div>
              <label
                htmlFor="claim-amount-input"
                className="block text-xs sm:text-sm font-black text-slate-900 uppercase tracking-wider mb-2"
              >
                Claim Amount (₹ INR) <span className="text-slate-400 font-normal">(Optional)</span>
              </label>
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-sm">
                  ₹
                </span>
                <input
                  id="claim-amount-input"
                  type="number"
                  min="0"
                  step="1000"
                  value={claimAmount}
                  onChange={(e) => setClaimAmount(e.target.value)}
                  placeholder="e.g. 250000"
                  className="w-full pl-8 pr-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-900 font-semibold focus:outline-none focus:ring-2 focus:ring-[#DC2626] focus:border-transparent transition-all"
                />
              </div>
              <span className="text-[11px] text-slate-500 mt-1 block">
                Helps determine civil court vs summary suit pecuniary threshold.
              </span>
            </div>
          </div>

          {/* Extension Options: Section 18 and Section 19 (Only for civil recovery) */}
          {currentCategory.supportsExtension && (
            <div className="p-4 sm:p-5 bg-red-50/60 border border-red-200/80 rounded-2xl space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
                <h3 className="text-xs sm:text-sm font-black text-slate-900 uppercase tracking-wider">
                  Statutory Extensions (Sections 18 &amp; 19 Limitation Act)
                </h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Has the debtor admitted the liability in writing, or paid any partial amount? These actions reset the 3-year clock from the date of admission or payment.
              </p>

              {/* Section 18 Written Acknowledgment */}
              <div className="space-y-2 pt-2 border-t border-red-200/60">
                <label className="flex items-center gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={hasWrittenAck}
                    onChange={(e) => setHasWrittenAck(e.target.checked)}
                    className="w-4 h-4 rounded text-[#DC2626] focus:ring-[#DC2626] border-slate-300"
                  />
                  <span className="text-xs sm:text-sm font-bold text-slate-800">
                    Debtor acknowledged debt in writing (Email, WhatsApp, Signed Letter, Balance Confirmation)
                  </span>
                </label>

                {hasWrittenAck && (
                  <div className="pl-6 pt-1">
                    <label
                      htmlFor="ack-date-input"
                      className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1"
                    >
                      Date of Written Acknowledgment:
                    </label>
                    <input
                      id="ack-date-input"
                      type="date"
                      value={ackDateStr}
                      onChange={(e) => setAckDateStr(e.target.value)}
                      max={new Date().toISOString().split("T")[0]}
                      className="w-full sm:w-64 px-3 py-2 bg-white border border-slate-300 rounded-lg text-xs font-semibold text-slate-900 focus:ring-2 focus:ring-[#DC2626] focus:outline-none"
                    />
                    <span className="text-[10px] text-slate-500 mt-1 block">
                      Must be before the original 3-year expiry date to legally trigger Section 18.
                    </span>
                  </div>
                )}
              </div>

              {/* Section 19 Part-Payment */}
              <div className="space-y-2 pt-2 border-t border-red-200/60">
                <label className="flex items-center gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={hasPartPayment}
                    onChange={(e) => setHasPartPayment(e.target.checked)}
                    className="w-4 h-4 rounded text-[#DC2626] focus:ring-[#DC2626] border-slate-300"
                  />
                  <span className="text-xs sm:text-sm font-bold text-slate-800">
                    Debtor made partial payment on account of debt (Bank / UPI / Cheque)
                  </span>
                </label>

                {hasPartPayment && (
                  <div className="pl-6 pt-1">
                    <label
                      htmlFor="part-payment-date-input"
                      className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1"
                    >
                      Date of Latest Part-Payment:
                    </label>
                    <input
                      id="part-payment-date-input"
                      type="date"
                      value={partPaymentDateStr}
                      onChange={(e) => setPartPaymentDateStr(e.target.value)}
                      max={new Date().toISOString().split("T")[0]}
                      className="w-full sm:w-64 px-3 py-2 bg-white border border-slate-300 rounded-lg text-xs font-semibold text-slate-900 focus:ring-2 focus:ring-[#DC2626] focus:outline-none"
                    />
                    <span className="text-[10px] text-slate-500 mt-1 block">
                      Restarts a fresh 3-year limitation clock from the payment credit date (Section 19).
                    </span>
                  </div>
                )}
              </div>
            </div>
          )}
        </form>

        {/* Right Pane: Live Calculation Output */}
        <div className="lg:col-span-5 w-full">
          <output
            aria-live="polite"
            className="block w-full bg-slate-900 text-white rounded-2xl p-5 sm:p-7 shadow-xl border border-slate-800 relative overflow-hidden space-y-6"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 rounded-full blur-2xl pointer-events-none" />

            {/* Top Status Card */}
            <div>
              <span className="text-[10px] sm:text-[11px] font-black tracking-wider uppercase text-slate-400 block mb-1.5">
                Statutory Limitation Status
              </span>

              {calculationResult ? (
                calculationResult.isTimeBarred ? (
                  <div className="p-3.5 bg-red-950/80 border border-red-700/80 rounded-xl text-red-200">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
                      <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-red-400">
                        TIME-BARRED UNDER SECTION 3
                      </span>
                    </div>
                    <p className="text-xs text-red-200 leading-snug">
                      Prescribed limitation expired{" "}
                      <strong className="text-white font-bold">
                        {Math.abs(calculationResult.diffDays)} days ago
                      </strong>{" "}
                      on {formatDate(calculationResult.finalExpiryDate)}.
                    </p>
                  </div>
                ) : calculationResult.isUrgent ? (
                  <div className="p-3.5 bg-amber-950/80 border border-amber-600/80 rounded-xl text-amber-200">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
                      <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-amber-400">
                        URGENT: EXPIRING IN {calculationResult.diffDays} DAYS
                      </span>
                    </div>
                    <p className="text-xs text-amber-100 leading-snug">
                      Expires on <strong className="text-white font-bold">{formatDate(calculationResult.finalExpiryDate)}</strong>. Issue statutory legal demand notice or file suit immediately.
                    </p>
                  </div>
                ) : (
                  <div className="p-3.5 bg-emerald-950/80 border border-emerald-700/80 rounded-xl text-emerald-200">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                      <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-emerald-300">
                        WITHIN LIMITATION — {calculationResult.diffDays} DAYS REMAINING
                      </span>
                    </div>
                    <p className="text-xs text-emerald-100 leading-snug">
                      Claim is legally active and enforceable until{" "}
                      <strong className="text-white font-bold">{formatDate(calculationResult.finalExpiryDate)}</strong>.
                    </p>
                  </div>
                )
              ) : (
                <p className="text-xs text-slate-400">Please provide a valid cause date.</p>
              )}
            </div>

            {/* Timeline Breakdown */}
            {calculationResult && (
              <div className="space-y-3 pt-4 border-t border-slate-800 text-xs">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800/80">
                  <span className="text-slate-400">Cause of Action Accrued:</span>
                  <span className="font-bold text-slate-200">{formatDate(calculationResult.causeDate)}</span>
                </div>

                <div className="flex items-center justify-between pb-2 border-b border-slate-800/80">
                  <span className="text-slate-400">Prescribed Period:</span>
                  <span className="font-bold text-slate-200">
                    {currentCategory.durationYears > 0 ? `${currentCategory.durationYears} Years` : "75 Days"} ({calculationResult.article})
                  </span>
                </div>

                <div className="flex items-center justify-between pb-2 border-b border-slate-800/80">
                  <span className="text-slate-400">Original Expiry Date:</span>
                  <span className="font-bold text-slate-200">{formatDate(calculationResult.originalExpiryDate)}</span>
                </div>

                {calculationResult.isRevivedByExtension && (
                  <div className="flex items-center justify-between pb-2 border-b border-slate-800/80 text-emerald-400">
                    <span className="font-medium">Extended Expiry Date:</span>
                    <span className="font-black text-sm">{formatDate(calculationResult.finalExpiryDate)}</span>
                  </div>
                )}

                <div className="flex items-center justify-between text-slate-300">
                  <span className="text-slate-400">Governing Statute:</span>
                  <span className="font-medium text-right max-w-[200px] truncate">{calculationResult.statute}</span>
                </div>
              </div>
            )}

            {/* Extension Feedback Box */}
            {calculationResult && calculationResult.extensionDetails.length > 0 && (
              <div className="p-3 bg-emerald-950/40 border border-emerald-800/60 rounded-xl space-y-1.5 text-xs text-emerald-300">
                <span className="text-[10px] font-black uppercase tracking-wider text-emerald-400 block">
                  ✓ Statutory Clock Reset Active
                </span>
                {calculationResult.extensionDetails.map((detail, idx) => (
                  <p key={idx} className="leading-relaxed">
                    {detail}
                  </p>
                ))}
              </div>
            )}

            {/* Invalid Extension Notice if any */}
            {calculationResult && calculationResult.invalidExtensionNotice && (
              <div className="p-3 bg-red-950/60 border border-red-800/80 rounded-xl space-y-1 text-xs text-red-300">
                <span className="text-[10px] font-black uppercase tracking-wider text-red-400 block">
                  ⚠️ Limitation Extension Inapplicable
                </span>
                <p className="leading-relaxed">{calculationResult.invalidExtensionNotice}</p>
              </div>
            )}

            {/* Action CTA within Output */}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="w-full inline-flex items-center justify-center px-4 py-3 rounded-xl font-bold text-white bg-[#DC2626] hover:bg-[#B91C1C] transition-colors shadow-lg shadow-red-900/30 text-xs sm:text-sm cursor-pointer text-center"
              >
                Send Advocate Legal Demand Notice — ₹{basePrice}
              </button>
              <p className="text-[10px] text-slate-400 text-center mt-2">
                Statutory legal notice dispatched within 24h via Speed Post + BSA Section 63 Email.
              </p>
            </div>
          </output>
        </div>
      </div>

      <PaymentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
