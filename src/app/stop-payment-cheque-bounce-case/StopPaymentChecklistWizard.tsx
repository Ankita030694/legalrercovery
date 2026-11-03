"use client";

import React, { useState } from "react";

interface ChecklistItem {
  id: string;
  title: string;
  description: string;
  source: string;
  essential: boolean;
}

const CHECKLIST_ITEMS: ChecklistItem[] = [
  {
    id: "item-memo",
    title: "Original Bank Return Memo with 'Payment Stopped by Drawer'",
    description:
      "Statutory bank memo with CTS clearing stamp or official clearinghouse code. Under Section 146 NI Act, this serves as prima facie presumptive proof of dishonour.",
    source: "Your depository bank branch / clearing advice",
    essential: true,
  },
  {
    id: "item-cheque",
    title: "Original Dishonoured Cheque (Preserved in Clear Sleeve)",
    description:
      "Physical cheque showing drawer signature, payee name, date, and amount. Must have been presented within its 3-month statutory validity window.",
    source: "Returned to payee by your presenting bank",
    essential: true,
  },
  {
    id: "item-consideration",
    title: "Documentary Proof of Underlying Debt or Consideration",
    description:
      "Invoices, delivery challans, promissory notes, loan agreements, bank transfer statements, or WhatsApp debt acknowledgments establishing legal liability.",
    source: "Complainant's business records / counterparty ledger",
    essential: true,
  },
  {
    id: "item-notice",
    title: "Advocate Legal Demand Notice Copy (Dispatched ≤ 30 Days)",
    description:
      "Formal statutory notice demanding cheque amount within 15 days of receipt under Section 138(b) NI Act. Must specify cheque number, date, amount, and dishonour memo details.",
    source: "Drafted by advocate / LegalRecovery.in",
    essential: true,
  },
  {
    id: "item-speedpost",
    title: "Speed Post Receipts & Indian Post Delivery Tracking Certificate",
    description:
      "Postal booking receipt, consignee pin code, and delivery confirmation printout. Under Section 27 of General Clauses Act, proof of proper address creates presumption of service.",
    source: "India Post online portal / booking counter",
    essential: true,
  },
  {
    id: "item-electronic",
    title: "Electronic Notice Delivery Logs (Email / WhatsApp Certificate under BSA)",
    description:
      "Email delivery receipt or WhatsApp blue tick screenshots supported by Section 63 Bharatiya Sakshya Adhiniyam, 2023 certificate, in accordance with Supreme Court 2025 guidelines.",
    source: "Email server headers / messaging export + BSA Sec 63 affidavit",
    essential: false,
  },
];

export default function StopPaymentChecklistWizard() {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({
    "item-memo": true,
    "item-cheque": true,
  });

  const toggleItem = (id: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const total = CHECKLIST_ITEMS.length;
  const completed = Object.values(checkedItems).filter(Boolean).length;
  const percentage = Math.round((completed / total) * 100);

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 shadow-sm p-4 sm:p-6 md:p-8 space-y-6">
      {/* Progress Header */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs sm:text-sm font-bold">
          <span className="text-slate-900 uppercase tracking-wider">
            Pre-Filing Readiness: {completed} of {total} Documents Verified
          </span>
          <span className={`px-2.5 py-0.5 rounded-full text-xs font-black ${
            percentage === 100
              ? "bg-emerald-100 text-emerald-800"
              : percentage >= 60
              ? "bg-amber-100 text-amber-800"
              : "bg-red-100 text-red-800"
          }`}>
            {percentage}% Complete
          </span>
        </div>
        <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
          <div
            className={`h-full transition-all duration-300 ${
              percentage === 100
                ? "bg-emerald-600"
                : percentage >= 60
                ? "bg-amber-500"
                : "bg-red-600"
            }`}
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>

      {/* Interactive Checkbox List */}
      <div className="space-y-3">
        {CHECKLIST_ITEMS.map((item) => {
          const isChecked = !!checkedItems[item.id];
          return (
            <div
              key={item.id}
              onClick={() => toggleItem(item.id)}
              className={`p-3.5 sm:p-4 rounded-xl border transition-all cursor-pointer flex items-start gap-3 sm:gap-4 select-none ${
                isChecked
                  ? "bg-emerald-50/50 border-emerald-300"
                  : "bg-white border-slate-200 hover:border-slate-300"
              }`}
            >
              <input
                type="checkbox"
                id={item.id}
                checked={isChecked}
                onChange={() => toggleItem(item.id)}
                className="mt-1 h-4 w-4 rounded text-red-600 focus:ring-red-500 border-slate-300 cursor-pointer shrink-0"
              />
              <div className="space-y-1 w-full">
                <div className="flex flex-wrap items-center justify-between gap-1">
                  <label
                    htmlFor={item.id}
                    className={`text-xs sm:text-sm font-bold cursor-pointer ${
                      isChecked ? "text-emerald-950 line-through decoration-emerald-600/60" : "text-slate-900"
                    }`}
                  >
                    {item.title}
                  </label>
                  {item.essential && (
                    <span className="text-[10px] font-black uppercase tracking-wider text-red-700 bg-red-100 px-2 py-0.5 rounded">
                      Mandatory
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">{item.description}</p>
                <p className="text-[11px] text-slate-500 font-medium">
                  <strong>Where to obtain:</strong> {item.source}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Action Recommendation */}
      <div className="p-3.5 sm:p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-700 leading-relaxed flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <strong className="text-slate-900 block font-bold">
            {percentage >= 80
              ? "✓ Ready to Dispatch Statutory Demand Notice"
              : "⚠ Gather Remaining Mandatory Documents"}
          </strong>
          <span className="text-slate-600 text-xs">
            Remember: You must dispatch the Section 138 demand notice strictly within 30 days of receiving the bank memo.
          </span>
        </div>
      </div>
    </div>
  );
}
