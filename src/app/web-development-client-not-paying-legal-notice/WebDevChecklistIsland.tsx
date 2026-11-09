"use client";

import React, { useState } from "react";

interface ChecklistItem {
  id: string;
  title: string;
  description: string;
  category: "Contract" | "Code Delivery" | "Invoicing" | "Communications";
}

const CHECKLIST_ITEMS: ChecklistItem[] = [
  {
    id: "check-1",
    title: "Written Agreement, SOW, or Detailed Email/WhatsApp Scope",
    description: "Proof of agreed deliverables, milestone pricing, timeline, and payment terms.",
    category: "Contract",
  },
  {
    id: "check-2",
    title: "Version Control Logs (Git Commits, PR Merges & Staging URLs)",
    description: "Cryptographic commit timestamps proving authoring, feature completion, and deployment.",
    category: "Code Delivery",
  },
  {
    id: "check-3",
    title: "Client Approvals or Acceptance Trails (Slack / Email / WhatsApp)",
    description: "Written messages from the client approving design mockups, staging demos, or milestone releases.",
    category: "Communications",
  },
  {
    id: "check-4",
    title: "Tax Invoices with Due Dates & Bank Transfer Details",
    description: "Itemized invoices referencing milestone numbers, payment due dates, and PAN/GST credentials.",
    category: "Invoicing",
  },
  {
    id: "check-5",
    title: "Udyam Registration Certificate (For MSME 3× Interest)",
    description: "Valid MSME certificate active during service provision to invoke Sections 15 & 16 of the MSMED Act.",
    category: "Invoicing",
  },
  {
    id: "check-6",
    title: "Production Deployment or Domain Live Evidence",
    description: "Screenshots, Wayback Machine archives, or DNS records showing the client actively operating your code.",
    category: "Code Delivery",
  },
  {
    id: "check-7",
    title: "Written Demands and Payment Reminders Sent",
    description: "At least 2-3 prior payment reminders via email or messaging with read receipts or reply timestamps.",
    category: "Communications",
  },
  {
    id: "check-8",
    title: "Section 63 BSA Digital Admissibility Certificate Ready",
    description: "Hash-verified digital electronic evidence certificate ready for court and police cognizance.",
    category: "Contract",
  },
];

export default function WebDevChecklistIsland() {
  const [checkedIds, setCheckedIds] = useState<Record<string, boolean>>({
    "check-1": true,
    "check-2": true,
    "check-4": true,
  });

  const toggleItem = (id: string) => {
    setCheckedIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const total = CHECKLIST_ITEMS.length;
  const completed = Object.values(checkedIds).filter(Boolean).length;
  const progressPercent = Math.round((completed / total) * 100);

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden p-5 sm:p-7 md:p-8 space-y-6">
      {/* Interactive Progress Bar Island */}
      <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-4 sm:p-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2.5">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
              Evidence Readiness Score
            </span>
            <p className="text-sm sm:text-base font-bold text-slate-900">
              {completed} of {total} Key Evidentiary Pillars Collected ({progressPercent}%)
            </p>
          </div>
          <span
            className={`px-3 py-1 rounded-full text-xs font-black self-start sm:self-auto ${
              progressPercent >= 75
                ? "bg-emerald-100 text-emerald-800"
                : progressPercent >= 50
                ? "bg-amber-100 text-amber-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {progressPercent >= 75
              ? "Strong Legal Standing"
              : progressPercent >= 50
              ? "Moderate — Collect More Logs"
              : "Incomplete Evidence"}
          </span>
        </div>

        {/* Progress Bar Track */}
        <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden">
          <div
            className={`h-full transition-all duration-300 rounded-full ${
              progressPercent >= 75
                ? "bg-emerald-500"
                : progressPercent >= 50
                ? "bg-amber-500"
                : "bg-red-500"
            }`}
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Checkbox List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
        {CHECKLIST_ITEMS.map((item) => {
          const isChecked = !!checkedIds[item.id];
          return (
            <label
              key={item.id}
              className={`flex items-start gap-3 p-3.5 sm:p-4 rounded-xl border transition-all cursor-pointer select-none ${
                isChecked
                  ? "bg-slate-50/70 border-slate-300 shadow-xs"
                  : "bg-white border-slate-200 hover:border-slate-300"
              }`}
            >
              <input
                type="checkbox"
                checked={isChecked}
                onChange={() => toggleItem(item.id)}
                className="mt-1 w-4 h-4 rounded border-slate-300 text-red-600 focus:ring-red-500 cursor-pointer shrink-0"
              />
              <div className="space-y-0.5 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] uppercase font-extrabold tracking-wider text-slate-400">
                    {item.category}
                  </span>
                </div>
                <p
                  className={`text-xs sm:text-sm font-bold leading-snug ${
                    isChecked ? "text-slate-900" : "text-slate-700"
                  }`}
                >
                  {item.title}
                </p>
                <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </label>
          );
        })}
      </div>
    </div>
  );
}
