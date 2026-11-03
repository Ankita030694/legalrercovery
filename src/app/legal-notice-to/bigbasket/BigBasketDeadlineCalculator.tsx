"use client";

import React, { useState } from "react";

interface Milestone {
  label: string;
  dayOffset: number;
  badge: string;
  badgeColor: string;
  rule: string;
  description: string;
}

export default function BigBasketDeadlineCalculator() {
  const todayStr = new Date().toISOString().split("T")[0];
  const [initiationDate, setInitiationDate] = useState<string>(todayStr);
  const [paymentMode, setPaymentMode] = useState<"upi" | "card" | "netbanking" | "cod">("upi");

  const getBankingDays = () => {
    switch (paymentMode) {
      case "upi":
        return { days: 2, label: "24–48 Hours (UPI VPA / Instant)" };
      case "card":
        return { days: 5, label: "3–5 Banking Days (Credit/Debit Card)" };
      case "netbanking":
        return { days: 4, label: "2–4 Banking Days (IMPS/NEFT)" };
      case "cod":
        return { days: 7, label: "5–7 Working Days (Bank Account Transfer)" };
      default:
        return { days: 3, label: "3–5 Days" };
    }
  };

  const calculateDate = (baseDateStr: string, daysToAdd: number) => {
    if (!baseDateStr) return "--";
    const date = new Date(baseDateStr);
    if (isNaN(date.getTime())) return "--";
    date.setDate(date.getDate() + daysToAdd);
    return date.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  const bankingInfo = getBankingDays();

  const milestones: Milestone[] = [
    {
      label: "Grievance Officer Acknowledgement Window",
      dayOffset: 2,
      badge: "48 Hours",
      badgeColor: "bg-blue-100 text-blue-800 border-blue-200",
      rule: "Rule 4(5), E-Commerce Rules 2020",
      description:
        "Innovative Retail Concepts must formally acknowledge your written grievance and issue an official ticket reference.",
    },
    {
      label: "Standard Banking Reconciliation Window",
      dayOffset: bankingInfo.days,
      badge: bankingInfo.label,
      badgeColor: "bg-amber-100 text-amber-800 border-amber-200",
      rule: "RBI Turnaround Time (TAT) Framework 2019",
      description:
        "Payment aggregator must transmit the 12-digit ARN or UTR to your issuing bank. Lack of credit past this point indicates reconciliation failure.",
    },
    {
      label: "Advocate Legal Notice Demand Window",
      dayOffset: 15,
      badge: "15 Days Statutory",
      badgeColor: "bg-rose-100 text-rose-800 border-rose-200",
      rule: "Section 35, Consumer Protection Act 2019",
      description:
        "Formal pre-litigation demand served upon Innovative Retail Concepts & Supermarket Grocery Supplies demanding principal refund, statutory interest, and legal costs.",
    },
    {
      label: "Mandatory Grievance Redressal / e-Jagriti Filing",
      dayOffset: 30,
      badge: "Day 30 Redressal",
      badgeColor: "bg-purple-100 text-purple-800 border-purple-200",
      rule: "Rule 5(3), E-Commerce Rules 2020",
      description:
        "Final statutory threshold for dispute resolution. If refund remains unpaid, you are entitled to file a consumer complaint on e-Jagriti with no further delay.",
    },
  ];

  return (
    <div className="bg-white border-2 border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-100 gap-4">
        <div>
          <span className="inline-block text-[11px] font-black uppercase tracking-wider text-[#DC2626] bg-red-50 border border-red-200/60 px-2.5 py-0.5 rounded-full mb-2">
            Interactive Legal Tool
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
            BigBasket Statutory Refund Deadline Calculator
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Compute mandatory escalation windows under Consumer Protection (E-Commerce) Rules and RBI banking turnaround timelines.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-6">
        <div>
          <label htmlFor="bb-init-date" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
            Date Refund Initiated / Order Cancelled
          </label>
          <input
            id="bb-init-date"
            type="date"
            value={initiationDate}
            onChange={(e) => setInitiationDate(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-slate-900 font-semibold focus:outline-none focus:ring-2 focus:ring-[#DC2626] focus:border-transparent text-sm"
          />
          <span className="block text-[11px] text-slate-500 mt-1">
            Select the date BigBasket marked the return, cancellation, or refund initiation.
          </span>
        </div>

        <div>
          <label htmlFor="bb-pay-mode" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
            Original Payment Method
          </label>
          <select
            id="bb-pay-mode"
            value={paymentMode}
            onChange={(e) => setPaymentMode(e.target.value as "upi" | "card" | "netbanking" | "cod")}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-slate-900 font-semibold focus:outline-none focus:ring-2 focus:ring-[#DC2626] focus:border-transparent text-sm bg-white"
          >
            <option value="upi">UPI (GPay, PhonePe, Paytm VPA)</option>
            <option value="card">Credit Card / Debit Card (Visa, Mastercard, RuPay)</option>
            <option value="netbanking">NetBanking (IMPS / NEFT)</option>
            <option value="cod">Cash on Delivery (Bank Transfer Details Provided)</option>
          </select>
          <span className="block text-[11px] text-slate-500 mt-1">
            Statutory turnaround times vary by banking clearing channel.
          </span>
        </div>
      </div>

      {/* Output Milestones */}
      <div className="space-y-3 pt-2">
        {milestones.map((m, idx) => {
          const targetDate = calculateDate(initiationDate, m.dayOffset);
          return (
            <div
              key={idx}
              className="p-4 rounded-xl border border-slate-200 bg-slate-50/70 hover:bg-slate-50 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2 flex-wrap mb-1">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md border ${m.badgeColor}`}>
                    {m.badge}
                  </span>
                  <span className="text-xs font-mono text-slate-500">{m.rule}</span>
                </div>
                <h4 className="text-sm font-bold text-slate-900">{m.label}</h4>
                <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">{m.description}</p>
              </div>
              <div className="sm:text-right shrink-0 border-t sm:border-t-0 pt-2 sm:pt-0 border-slate-200">
                <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500 block">
                  Action Threshold
                </span>
                <span className="text-base sm:text-lg font-black text-[#DC2626]">{targetDate}</span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 p-4 rounded-xl bg-amber-50 border border-amber-200/80 text-amber-950 text-xs leading-relaxed flex items-start gap-2.5">
        <span className="text-base leading-none">⚠️</span>
        <div>
          <strong className="font-bold">Dark Pattern Alert:</strong> If BigBasket credited this amount to your
          closed-loop &quot;bb wallet&quot; without explicit prior consent, that action violates the Central Consumer
          Protection Authority (CCPA) Dark Patterns Guidelines 2023. You retain the absolute statutory right to demand
          a complete transfer back to your original source account.
        </div>
      </div>
    </div>
  );
}
