"use client";

import React, { useState } from "react";

interface CheckItem {
  id: string;
  title: string;
  detail: string;
  tag: string;
}

const CHECKLIST_ITEMS: CheckItem[] = [
  {
    id: "check-delivery-date",
    title: "Verify the Exact Policy Document Receipt Date",
    detail:
      "Your 30-day statutory free-look window begins on the day you or your family physically received the policy bond (or the email timestamp for electronic e-policies), NOT the proposal or debit date. Keep the courier delivery slip, India Post tracking consignment number, or welcome email with headers.",
    tag: "30-Day Clock",
  },
  {
    id: "check-pitch-vs-schedule",
    title: "Cross-Check the Agent's Pitch Against the Policy Schedule",
    detail:
      "Look at the 'Premium Paying Term' (PPT) versus 'Policy Term' (PT). If the agent or bank relationship manager promised a 'one-time 3-year deposit' or 'Fixed Deposit scheme' but the schedule says 'PPT: 10 Years' or 'Annual Premium: ₹1,00,000 for 12 Years', this is actionable prima facie mis-selling.",
    tag: "Discrepancy Proof",
  },
  {
    id: "check-proposal-form",
    title: "Demand Copy of the Original Signed Proposal Form",
    detail:
      "In over 70% of bancassurance mis-selling disputes, agents forge the customer's annual income, occupation, or medical history to pass automated underwriting filters. If the signature or handwriting isn't yours, the contract is void ab initio under Section 19 of the Indian Contract Act.",
    tag: "Contract Validity",
  },
  {
    id: "check-welcome-call",
    title: "Audit Pre-Issuance Verification (PIVC) Call or Audio Logs",
    detail:
      "IRDAI mandates a recorded Verification Call (PIVC). Agents often coach buyers with 'just say yes to all questions to activate your guaranteed return account'. You have the legal right to demand the raw audio transcript under IRDAI Policyholder Protection Circulars.",
    tag: "PIVC Audio",
  },
  {
    id: "check-bank-linkage",
    title: "Check for Unauthorized NACH / Auto-Debit Mandates",
    detail:
      "Log into your net banking or check your NPCI e-Mandate portal. In many mis-sold single-deposit plans, the agent stealthily activated an annual recurring NACH mandate. Cancel the standing instruction immediately to avoid bounce charges or unwanted future deductions.",
    tag: "Banking Safety",
  },
  {
    id: "check-formal-intimation",
    title: "Dispatch Written Cancellation Before the 30th Day",
    detail:
      "Do not rely solely on phone calls or verbal promises from the agent. Submit a formal written Free-Look Cancellation letter to the insurer's official customer care email and branch with physical acknowledgment, or via the insurer's registered portal.",
    tag: "Statutory Filing",
  },
];

export default function InsuranceMisSellingChecklistWizard() {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  const toggleCheck = (id: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const total = CHECKLIST_ITEMS.length;
  const completed = Object.values(checkedItems).filter(Boolean).length;
  const progressPercent = Math.round((completed / total) * 100);

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-xs space-y-6">
      {/* Header and Progress Bar */}
      <div className="space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <span className="text-[11px] font-black uppercase tracking-wider text-red-600 bg-red-50 px-2.5 py-0.5 rounded-full">
              Pre-Flight Cancellation Readiness
            </span>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-1">
              Interactive Free-Look &amp; Mis-Selling Audit Wizard
            </h3>
          </div>
          <div className="text-right">
            <span className="text-xs font-bold text-slate-500">Readiness Score</span>
            <p className="text-lg font-black text-slate-900">
              {completed} of {total} Done ({progressPercent}%)
            </p>
          </div>
        </div>

        {/* Progress Bar Track */}
        <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
          <div
            className={`h-2.5 rounded-full transition-all duration-300 ${
              progressPercent === 100
                ? "bg-emerald-500"
                : progressPercent >= 50
                ? "bg-amber-500"
                : "bg-red-500"
            }`}
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {progressPercent === 100 && (
          <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-800 font-semibold flex items-center gap-2">
            <span>✓</span>
            <span>
              Your evidence file is complete! You have established a water-tight claim for full premium refund under IRDAI regulations.
            </span>
          </div>
        )}
      </div>

      {/* Checklist items */}
      <div className="space-y-3">
        {CHECKLIST_ITEMS.map((item, idx) => {
          const isChecked = !!checkedItems[item.id];
          return (
            <label
              key={item.id}
              className={`flex items-start gap-3.5 p-3.5 sm:p-4 rounded-xl border transition-all cursor-pointer select-none ${
                isChecked
                  ? "bg-slate-50/90 border-emerald-300 shadow-xs"
                  : "bg-white border-slate-200 hover:border-slate-300"
              }`}
            >
              <input
                type="checkbox"
                checked={isChecked}
                onChange={() => toggleCheck(item.id)}
                className="mt-1 w-4 h-4 rounded text-red-600 focus:ring-red-500 border-slate-300 cursor-pointer"
              />
              <div className="space-y-1 flex-1 min-w-0">
                <div className="flex flex-wrap items-center justify-between gap-1.5">
                  <span
                    className={`text-xs sm:text-sm font-bold ${
                      isChecked ? "text-emerald-950 line-through decoration-emerald-500" : "text-slate-900"
                    }`}
                  >
                    {idx + 1}. {item.title}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                    {item.tag}
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">{item.detail}</p>
              </div>
            </label>
          );
        })}
      </div>
    </div>
  );
}
