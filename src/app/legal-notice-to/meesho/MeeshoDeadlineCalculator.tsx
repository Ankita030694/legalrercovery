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

export default function MeeshoDeadlineCalculator() {
  // Default to today's date in YYYY-MM-DD
  const todayStr = new Date().toISOString().split("T")[0];
  const [initiationDate, setInitiationDate] = useState<string>(todayStr);
  const [paymentMode, setPaymentMode] = useState<"upi" | "card" | "cod">("upi");

  const getBankingDays = () => {
    switch (paymentMode) {
      case "upi":
        return { days: 2, label: "24–48 Hours (UPI VPA)" };
      case "card":
        return { days: 5, label: "3–5 Banking Days (Card/NetBanking)" };
      case "cod":
        return { days: 7, label: "5–7 Working Days (COD via Bank Account)" };
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
      label: "Grievance Officer Acknowledgement",
      dayOffset: 2,
      badge: "48 Hours",
      badgeColor: "bg-blue-100 text-blue-800 border-blue-200",
      rule: "Rule 4(4), E-Commerce Rules 2020",
      description: "Meesho's Resident Grievance Officer must formally acknowledge your written complaint and provide a tracking ticket ID.",
    },
    {
      label: "Normal Banking Settlement Window",
      dayOffset: bankingInfo.days,
      badge: bankingInfo.label,
      badgeColor: "bg-amber-100 text-amber-800 border-amber-200",
      rule: "RBI Turnaround Time (TAT) Framework",
      description: "The payment gateway must transmit the UTR/RRN to your receiving bank. If funds are not credited by this date, the refund is officially delayed.",
    },
    {
      label: "Advocate Legal Notice Demand Window",
      dayOffset: 15,
      badge: "15 Days Statutory",
      badgeColor: "bg-rose-100 text-rose-800 border-rose-200",
      rule: "Section 35, Consumer Protection Act 2019",
      description: "Statutory cure window served upon Meesho Limited & merchant. Demands full refund, interest, and legal costs before approaching court.",
    },
    {
      label: "Mandatory Grievance Redressal / e-Jagriti Filing",
      dayOffset: 30,
      badge: "Day 30 Redressal",
      badgeColor: "bg-purple-100 text-purple-800 border-purple-200",
      rule: "Rule 5(3), E-Commerce Rules 2020",
      description: "Maximum statutory window for Meesho to resolve disputes. After this date, you are entitled to file a consumer complaint on e-Jagriti.",
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
            Meesho Statutory Refund Deadline Calculator
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Calculate exact statutory deadlines under the Consumer Protection (E-Commerce) Rules and RBI banking turnaround limits.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-6">
        <div>
          <label
            htmlFor="initiation-date"
            className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
          >
            Date Refund Initiated / Return Collected
          </label>
          <input
            id="initiation-date"
            type="date"
            value={initiationDate}
            onChange={(e) => setInitiationDate(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-slate-900 font-medium focus:ring-2 focus:ring-[#DC2626] focus:border-transparent outline-none transition"
          />
          <span className="text-[11px] text-slate-500 mt-1 block">
            Select the date shown as &quot;Return Picked Up&quot; or &quot;Refund Initiated&quot; in your Meesho app.
          </span>
        </div>

        <div>
          <label
            htmlFor="payment-mode"
            className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
          >
            Original Payment Method
          </label>
          <select
            id="payment-mode"
            value={paymentMode}
            onChange={(e) => setPaymentMode(e.target.value as "upi" | "card" | "cod")}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-slate-900 font-medium focus:ring-2 focus:ring-[#DC2626] focus:border-transparent outline-none transition bg-white"
          >
            <option value="upi">UPI (PhonePe, Google Pay, Paytm, UPI ID)</option>
            <option value="card">Debit Card / Credit Card / NetBanking</option>
            <option value="cod">Cash on Delivery (Bank Account Added in App)</option>
          </select>
          <span className="text-[11px] text-slate-500 mt-1 block">
            COD refunds require verifying your beneficiary bank details inside Meesho profile settings.
          </span>
        </div>
      </div>

      <div className="mt-8 space-y-4">
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">
          Your Statutory Dispute Milestones
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {milestones.map((m, idx) => {
            const calculatedTarget = calculateDate(initiationDate, m.dayOffset);
            return (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200/90 rounded-xl p-4 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${m.badgeColor}`}
                    >
                      {m.badge}
                    </span>
                    <span className="text-xs font-bold text-slate-900">
                      {calculatedTarget}
                    </span>
                  </div>
                  <h5 className="text-sm font-extrabold text-slate-900 mb-1">
                    {m.label}
                  </h5>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {m.description}
                  </p>
                </div>
                <div className="mt-3 pt-2.5 border-t border-slate-200/60 flex items-center justify-between text-[11px]">
                  <span className="text-slate-500 font-medium">Legal Basis:</span>
                  <span className="font-semibold text-slate-700">{m.rule}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-6 p-4 rounded-xl bg-red-50/70 border border-red-200/60 flex items-start gap-3 text-xs text-slate-700">
        <span className="text-[#DC2626] font-bold text-base leading-none mt-0.5">ℹ</span>
        <p className="leading-relaxed">
          <strong>Limitation Alert:</strong> Under Section 69 of the Consumer Protection Act, 2019, you have exactly <strong>2 years</strong> from the date of cause of action (the date of failed delivery or rejected refund) to file a formal complaint before the District Consumer Commission.
        </p>
      </div>
    </div>
  );
}
