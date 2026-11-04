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
    id: "chk-onboarding",
    title: "Digital Resident Agreement / App Onboarding Contract PDF",
    description:
      "Captures your refundable security deposit amount, lock-in period duration, move-out notice requirement (usually 30 days), and promised refund turnaround window (7–45 working days).",
    source: "Operator mobile app (Stanza Living / Zolo / Colive / Housr) or onboarding email",
    essential: true,
  },
  {
    id: "chk-receipt",
    title: "Security Deposit Payment Receipt & Bank / UPI UTR Proof",
    description:
      "Proves the exact sum transferred to the operator's corporate entity (e.g., DTwelve Spaces Pvt. Ltd. or Zolostays Property Solutions Pvt. Ltd.), separating refundable deposit from advance rent.",
    source: "App payment ledger + Bank statement / UPI 12-digit UTR number",
    essential: true,
  },
  {
    id: "chk-notice",
    title: "Timestamped Move-Out / Exit Intimation Screenshot",
    description:
      "Demonstrates that you raised the move-out request on the resident portal or via email before the notice deadline, defeating arbitrary 'short-notice forfeiture' deductions.",
    source: "Resident app 'Move-Out / Exit' ticket screen or sent email log",
    essential: true,
  },
  {
    id: "chk-handover",
    title: "Room Handover Checklist, Key Return Sign-Off & Move-Out Photos",
    description:
      "Establishes that the bed/room, mattress, AC, and access card were handed back to the Residence Captain or Property Manager in undamaged condition on your exit date.",
    source: "WhatsApp confirmation with Residence Captain + timestamped room video/photos",
    essential: true,
  },
  {
    id: "chk-settlement",
    title: "Final Settlement Statement (FnF) or Arbitrary Deduction Breakdown",
    description:
      "Shows the exact line-item deductions (e.g., ₹3,000–₹8,000 'mandatory painting/deep cleaning', inflated electricity bills, or unverified damage charges) for legal challenge under Section 74 Contract Act.",
    source: "App refund breakdown screen or automated settlement email",
    essential: true,
  },
  {
    id: "chk-grievance",
    title: "Unresolved Support Ticket IDs & Grievance Officer Escalation Mail",
    description:
      "Proves the operator breached the 48-hour acknowledgment and 30-day resolution mandate under the Consumer Protection (E-Commerce) Rules, 2020.",
    source: "In-app support ticket history + sent email headers (BSA Section 63)",
    essential: false,
  },
];

export default function CoLivingChecklistWizard() {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({
    "chk-onboarding": true,
    "chk-receipt": true,
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
            Refund Claim Readiness: {completed} of {total} Proofs Assembled
          </span>
          <span
            className={`px-2.5 py-0.5 rounded-full text-xs font-black ${
              percentage === 100
                ? "bg-emerald-100 text-emerald-800"
                : percentage >= 60
                ? "bg-amber-100 text-amber-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {percentage}% Ready
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
                onClick={(e) => e.stopPropagation()}
                className="mt-1 h-4 w-4 rounded text-red-600 focus:ring-red-500 border-slate-300 cursor-pointer shrink-0"
              />
              <div className="space-y-1 w-full">
                <div className="flex flex-wrap items-center justify-between gap-1">
                  <label
                    htmlFor={item.id}
                    onClick={(e) => e.stopPropagation()}
                    className={`text-xs sm:text-sm font-bold cursor-pointer ${
                      isChecked ? "text-emerald-950 line-through decoration-emerald-600/60" : "text-slate-900"
                    }`}
                  >
                    {item.title}
                  </label>
                  {item.essential && (
                    <span className="text-[10px] font-black uppercase tracking-wider text-red-700 bg-red-100 px-2 py-0.5 rounded">
                      Essential
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">{item.description}</p>
                <p className="text-[11px] text-slate-500 font-medium">
                  <strong>Where to extract:</strong> {item.source}
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
            {percentage >= 65
              ? "✓ Sufficient Evidence to Serve a 15-Day Statutory Legal Notice"
              : "⚠ Tip: Export App Screenshots Before the Operator Deactivates Your Resident Login"}
          </strong>
          <span className="text-slate-600 text-xs">
            Co-living apps routinely revoke former residents&apos; login access 15–30 days after checkout. Save PDFs and screenshots immediately.
          </span>
        </div>
      </div>
    </div>
  );
}
