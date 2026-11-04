"use client";

import React, { useState } from "react";

interface ChecklistItem {
  id: string;
  title: string;
  detail: string;
  category: string;
}

const CHECKLIST_ITEMS: ChecklistItem[] = [
  {
    id: "step-1",
    title: "1. Capture Full Bank & UPI Transaction Records",
    detail: "Download PDF bank statement showing debited amount, beneficiary account or UPI VPA, and the 12-digit UTR/RRN number.",
    category: "Financial Proof",
  },
  {
    id: "step-2",
    title: "2. Save Job Offer Letter, Emails & Full Message Logs",
    detail: "Export unedited WhatsApp / Telegram / SMS chat transcripts, call logs, and the original PDF job offer letter with full email headers.",
    category: "Communication Proof",
  },
  {
    id: "step-3",
    title: "3. Identify & Verify the Opposing Entity",
    detail: "Determine if the entity is an operational placement consultancy (search MCA CIN or GSTIN portal) or an untraceable online profile.",
    category: "Entity Profiling",
  },
  {
    id: "step-4",
    title: "4. Report to National Cyber Crime Helpline 1930 / Portal",
    detail: "Dial 1930 within the golden hour (or lodge at cybercrime.gov.in) to trigger automatic lien marking on the recipient bank account.",
    category: "Immediate Inter-Bank Action",
  },
  {
    id: "step-5",
    title: "5. Send Formal Written Refund Demand Notice",
    detail: "Deliver a formal 7-day refund notice to the agency via email and registered post demanding return of funds under Section 2(47) CPA 2019.",
    category: "Pre-Litigation Demand",
  },
  {
    id: "step-6",
    title: "6. Draft Advocate Legal Notice or File on e-Jagriti",
    detail: "If the agency refuses refund, serve a statutory advocate legal notice or file a consumer petition on e-Jagriti for full refund with interest.",
    category: "Legal Escalation",
  },
];

export default function JobScamChecklist() {
  const [completed, setCompleted] = useState<Record<string, boolean>>({});

  const toggleItem = (id: string) => {
    setCompleted((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const completedCount = Object.values(completed).filter(Boolean).length;
  const totalCount = CHECKLIST_ITEMS.length;
  const percent = Math.round((completedCount / totalCount) * 100);

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-sm space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
        <div>
          <h3 className="text-base sm:text-lg font-black text-slate-900">
            Interactive Pre-Flight Recovery Readiness Tracker
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Check off each action step as you complete it to prepare your recovery case.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-right">
            <span className="text-xs font-bold text-slate-700 block">
              {completedCount} of {totalCount} Steps Completed
            </span>
            <span className="text-[11px] font-semibold text-[#DC2626]">
              {percent}% Readiness
            </span>
          </div>
          <div className="w-16 h-2.5 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
            <div
              className="h-full bg-[#DC2626] transition-all duration-300"
              style={{ width: `${percent}%` }}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        {CHECKLIST_ITEMS.map((item) => {
          const isDone = !!completed[item.id];
          return (
            <div
              key={item.id}
              onClick={() => toggleItem(item.id)}
              className={`p-3.5 rounded-xl border transition-all duration-150 cursor-pointer flex items-start gap-3 select-none ${
                isDone
                  ? "bg-red-50/60 border-red-200 shadow-xs"
                  : "bg-slate-50/50 hover:bg-slate-50 border-slate-200/80"
              }`}
            >
              <input
                type="checkbox"
                checked={isDone}
                onChange={() => {}} // handled by parent div click
                className="mt-1 w-4 h-4 rounded text-[#DC2626] focus:ring-red-500 border-slate-300 cursor-pointer shrink-0"
                aria-label={item.title}
              />
              <div className="min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-white px-2 py-0.5 rounded border border-slate-200">
                    {item.category}
                  </span>
                </div>
                <h4
                  className={`text-xs sm:text-sm font-bold leading-snug transition-colors ${
                    isDone ? "text-slate-900 line-through decoration-slate-400" : "text-slate-900"
                  }`}
                >
                  {item.title}
                </h4>
                <p className="text-[11px] sm:text-xs text-slate-600 mt-1 leading-relaxed">
                  {item.detail}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
