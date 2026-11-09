"use client";

import React, { useState } from "react";

interface ChecklistItem {
  id: string;
  title: string;
  detail: string;
  tip: string;
}

const CHECKLIST_ITEMS: ChecklistItem[] = [
  {
    id: "check-jobcard",
    title: "1. Authorized Service Center Job Card with Date Stamp",
    detail:
      "Physical or digital job sheet showing exact intake date, vehicle odometer reading, reported issues (e.g. range drop, shutdown, charger fault), and battery charge level upon drop-off.",
    tip: "Critical: Proves the vehicle has been in the dealer's possession and establishes the delay duration.",
  },
  {
    id: "check-invoice",
    title: "2. Vehicle Tax Invoice & VAHAN Registration Certificate",
    detail:
      "Retail sales invoice showing chassis number, motor number, battery serial number, ex-showroom price, and dealer details alongside the VAHAN RC copy.",
    tip: "Required to establish consumer status under Section 2(7) CPA 2019.",
  },
  {
    id: "check-warranty",
    title: "3. Manufacturer Warranty Handbook & Battery Coverage Terms",
    detail:
      "Owner's handbook or digital warranty certificate detailing battery degradation threshold (typically ≥ 70% or 80% SOH) and warranty validity (e.g., 3 years / 8 years / 80,000 km).",
    tip: "Destroys dealer's claim that battery or controller is an excluded wear-and-tear item.",
  },
  {
    id: "check-telematics",
    title: "4. EV Mobile App Screenshots & Dashboard Diagnostics",
    detail:
      "Screenshots of the OEM mobile application displaying sudden percentage drops, charging errors, battery state of health (SOH), and GPS location history showing the vehicle stationed at the workshop.",
    tip: "Admissible electronic record under Section 63 Bharatiya Sakshya Adhiniyam, 2023.",
  },
  {
    id: "check-grievances",
    title: "5. Escalation Email Thread & Customer Support Ticket IDs",
    detail:
      "All written communications sent to customer care, nodal grievance officer, and regional service managers demanding completion timelines or courtesy vehicles.",
    tip: "Establishes prior notice and persistent failure to resolve before legal escalation.",
  },
  {
    id: "check-written-rejection",
    title: "6. Written Warranty Refusal or Unfair Estimate Quotation",
    detail:
      "Email, WhatsApp message, or repair estimate stating warranty is denied due to 'water ingress', 'ambient moisture', or 'normal wear', or charging customer for battery replacement.",
    tip: "Proves repudiation of statutory warranty without ARAI/ICAT certified testing.",
  },
  {
    id: "check-expenses",
    title: "7. Daily Alternative Commute Expense Receipts (Cabs / Autos / Fuel)",
    detail:
      "Uber/Ola trip receipts, metro cards, or fuel slips for the duration your primary electric commuter vehicle was held hostage at the service center.",
    tip: "Enables claiming actual financial loss & conveyance compensation (₹300–₹500/day) in notice.",
  },
];

export default function EvServiceDelayChecklist() {
  const [checkedIds, setCheckedIds] = useState<Record<string, boolean>>({});

  const toggleItem = (id: string) => {
    setCheckedIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const total = CHECKLIST_ITEMS.length;
  const completed = Object.values(checkedIds).filter(Boolean).length;
  const percentage = Math.round((completed / total) * 100);

  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 p-5 sm:p-7 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-200">
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-slate-900">
            Interactive EV Dispute Readiness Checklist (Pre-Notice Audit)
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Tick off the documents and telematics evidence in your possession before drafting your legal notice.
          </p>
        </div>
        <div className="flex items-center gap-3 self-start sm:self-auto">
          <div className="text-right">
            <span className="text-xs font-semibold text-slate-500 uppercase">Readiness</span>
            <p className="text-lg font-black text-slate-900">{percentage}%</p>
          </div>
          <div className="w-14 h-14 relative flex items-center justify-center">
            <svg className="w-12 h-12 transform -rotate-90" viewBox="0 0 36 36">
              <path
                className="text-slate-100"
                strokeWidth="3.5"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className="text-emerald-500 transition-all duration-300 ease-out"
                strokeDasharray={`${percentage}, 100`}
                strokeWidth="3.5"
                strokeLinecap="round"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>
            <span className="absolute text-[11px] font-bold text-slate-700">{completed}/{total}</span>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-slate-100 h-2.5 rounded-full mb-6 overflow-hidden">
        <div
          className={`h-full transition-all duration-300 ease-out ${
            percentage === 100
              ? "bg-emerald-500"
              : percentage >= 50
              ? "bg-blue-600"
              : "bg-amber-500"
          }`}
          style={{ width: `${percentage}%` }}
        />
      </div>

      {/* Checklist items */}
      <div className="space-y-3.5">
        {CHECKLIST_ITEMS.map((item) => {
          const isChecked = !!checkedIds[item.id];
          return (
            <div
              key={item.id}
              onClick={() => toggleItem(item.id)}
              className={`p-3.5 sm:p-4 rounded-xl border transition-all cursor-pointer flex items-start gap-3.5 ${
                isChecked
                  ? "bg-emerald-50/60 border-emerald-300 shadow-xs"
                  : "bg-slate-50/80 border-slate-200 hover:bg-slate-100/70"
              }`}
            >
              <input
                type="checkbox"
                checked={isChecked}
                onChange={() => toggleItem(item.id)}
                className="mt-1 w-4 h-4 text-emerald-600 rounded border-slate-300 focus:ring-emerald-500 cursor-pointer"
                aria-label={item.title}
              />
              <div className="flex-1">
                <h4
                  className={`text-xs sm:text-sm font-bold ${
                    isChecked ? "text-emerald-950 line-through decoration-emerald-600" : "text-slate-900"
                  }`}
                >
                  {item.title}
                </h4>
                <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                  {item.detail}
                </p>
                <p className="text-[11px] text-amber-800 font-medium mt-1 bg-amber-50/80 px-2 py-0.5 rounded border border-amber-200/60 inline-block">
                  💡 {item.tip}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-5 p-3 rounded-xl bg-slate-100 text-xs text-slate-700 flex items-center justify-between">
        <span>
          {percentage >= 70
            ? "✅ Your evidence profile is complete. You have sufficient documentary proof to serve an airtight legal notice."
            : "⚠️ Aim to gather at least 4-5 items (especially the Job Card, Invoice, and Email thread) to ensure the OEM cannot evade liability."}
        </span>
      </div>
    </div>
  );
}
