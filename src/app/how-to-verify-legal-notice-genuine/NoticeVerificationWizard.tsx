"use client";

import React, { useState } from "react";

interface VerificationCriterion {
  id: string;
  category: string;
  title: string;
  description: string;
  points: number;
  critical: boolean;
}

const CRITERIA: VerificationCriterion[] = [
  {
    id: "enrolment-no",
    category: "Advocate Credentials",
    title: "Advocate Name & State Bar Council Enrolment Number Present",
    description:
      "A valid notice strictly features the advocate's official enrolment number in the standard state format (e.g., D/1234/2018 or MAH/4567/2015), along with full chamber address, mobile number, and Bar Council affiliation.",
    points: 20,
    critical: true,
  },
  {
    id: "physical-sign",
    category: "Advocate Credentials",
    title: "Physical or DSC Signature on Formal Letterhead",
    description:
      "The document appears on distinct advocate or law firm letterhead bearing an actual wet-ink signature or a cryptographically verifiable Digital Signature Certificate (DSC) under Section 63 of Bharatiya Sakshya Adhiniyam, 2023.",
    points: 15,
    critical: false,
  },
  {
    id: "client-authority",
    category: "Sender & Authority",
    title: "Clear Client Authorization & Named Sender Details",
    description:
      "The opening paragraph explicitly states: 'Under instructions and on behalf of my client [Full Name/Company, PAN/CIN, Address]'. Notices that conceal the sender's identity or cite a vague 'Legal Department' are illegitimate.",
    points: 20,
    critical: true,
  },
  {
    id: "cause-of-action",
    category: "Legal Merits",
    title: "Concrete Facts, Transaction Chronology & Exact Rupee Claims",
    description:
      "The text itemizes exact dates, invoice or loan account numbers, cheque details, or agreement clauses. It quantifies the principal and legitimate contractual interest, rather than fabricating arbitrary penalties.",
    points: 15,
    critical: false,
  },
  {
    id: "reasonable-timeline",
    category: "Legal Merits",
    title: "Statutory 15–30 Days Response Window (No 2-Hour / 24-Hour Threats)",
    description:
      "Legitimate notices afford 15 or 30 days to comply or reply under standard civil jurisprudence. Any demand threatening 'Arrest within 2 hours' or 'Police raid today' is illegal extortion under BNS Section 308.",
    points: 15,
    critical: true,
  },
  {
    id: "speed-post-dispatch",
    category: "Dispatch Evidentiary Trail",
    title: "Physical Speed Post Tracking / Official Corporate Email",
    description:
      "Notice was delivered by Registered Post A.D. or Speed Post with an India Post tracking number (Consignment barcode), or sent from a verified domain email. Beware of anonymous WhatsApp PDFs from disposable virtual numbers.",
    points: 15,
    critical: false,
  },
];

export default function NoticeVerificationWizard() {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  const toggleItem = (id: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const selectAll = () => {
    const all: Record<string, boolean> = {};
    CRITERIA.forEach((c) => {
      all[c.id] = true;
    });
    setCheckedItems(all);
  };

  const resetAll = () => {
    setCheckedItems({});
  };

  const totalScore = CRITERIA.reduce((acc, curr) => {
    return checkedItems[curr.id] ? acc + curr.points : acc;
  }, 0);

  const checkedCount = Object.values(checkedItems).filter(Boolean).length;
  const criticalMissing = CRITERIA.filter((c) => c.critical && !checkedItems[c.id]);

  let statusBadge = {
    title: "High Suspicion / Likely Fake",
    color: "bg-red-50 text-red-700 border-red-200",
    barColor: "bg-red-500",
    summary:
      "This document lacks fundamental legal statutory elements. It is likely an unauthorized harassment letter issued by an illegal recovery agent or cyber scammer. Do not pay any money.",
  };

  if (totalScore >= 75 && criticalMissing.length === 0) {
    statusBadge = {
      title: "Legitimate & Valid Statutory Legal Notice",
      color: "bg-emerald-50 text-emerald-800 border-emerald-200",
      barColor: "bg-emerald-600",
      summary:
        "This notice demonstrates the necessary hallmarks of a genuine legal notice issued under advocate instruction. You must draft and serve a formal advocate reply within the statutory timeline.",
    };
  } else if (totalScore >= 45) {
    statusBadge = {
      title: "Dubious / Questionable Legal Notice",
      color: "bg-amber-50 text-amber-800 border-amber-200",
      barColor: "bg-amber-500",
      summary:
        "Certain elements are present, but critical markers (such as advocate enrolment or sender details) are ambiguous. Cross-verify the advocate on the State Bar Council directory before responding.",
    };
  }

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 md:p-8 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-5 mb-6">
        <div>
          <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-[#DC2626] bg-red-50 px-2.5 py-1 rounded-md">
            Interactive Verification Tool
          </span>
          <h3 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 mt-2">
            6-Point Authenticity Checklist Wizard
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Check the physical or digital document in your possession against each required statutory marker below.
          </p>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-center shrink-0">
          <button
            type="button"
            onClick={selectAll}
            className="text-xs font-semibold px-3 py-1.5 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 transition-colors"
          >
            Check All
          </button>
          <button
            type="button"
            onClick={resetAll}
            className="text-xs font-semibold px-3 py-1.5 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 transition-colors"
          >
            Reset
          </button>
        </div>
      </div>

      {/* Progress & Live Score Indicator */}
      <div className="mb-6 p-4 rounded-xl bg-slate-50 border border-slate-200/80">
        <div className="flex items-center justify-between gap-4 mb-2">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-600">
              Authenticity Score:
            </span>
            <span className="text-base sm:text-lg font-black text-slate-900">
              {totalScore} / 100
            </span>
          </div>
          <span className="text-xs font-semibold text-slate-500">
            {checkedCount} of {CRITERIA.length} Verified
          </span>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-slate-200 rounded-full h-2.5 overflow-hidden">
          <div
            className={`h-2.5 rounded-full transition-all duration-300 ${statusBadge.barColor}`}
            style={{ width: `${totalScore}%` }}
          />
        </div>

        {/* Dynamic Verdict Assessment */}
        <div className="mt-4 pt-3 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-700">Estimated Status:</span>
            <span
              className={`text-xs font-extrabold px-3 py-0.5 rounded-full border ${statusBadge.color}`}
            >
              {statusBadge.title}
            </span>
          </div>
          {criticalMissing.length > 0 && checkedCount > 0 && (
            <span className="text-[11px] font-bold text-red-600">
              ⚠️ Missing {criticalMissing.length} critical statutory requirement(s)
            </span>
          )}
        </div>
        <p className="text-xs text-slate-600 mt-2 leading-relaxed">{statusBadge.summary}</p>
      </div>

      {/* Checklist Grid */}
      <div className="space-y-3.5">
        {CRITERIA.map((criterion) => {
          const isChecked = !!checkedItems[criterion.id];
          return (
            <div
              key={criterion.id}
              onClick={() => toggleItem(criterion.id)}
              className={`p-4 rounded-xl border transition-all cursor-pointer select-none ${
                isChecked
                  ? "bg-slate-50/80 border-slate-300 shadow-xs"
                  : "bg-white border-slate-200 hover:border-slate-300"
              }`}
            >
              <div className="flex items-start gap-3.5">
                <input
                  type="checkbox"
                  id={`criterion-${criterion.id}`}
                  checked={isChecked}
                  onChange={() => {}} // handled by parent onClick
                  className="mt-1 h-4 w-4 rounded border-slate-300 text-[#DC2626] focus:ring-[#DC2626] cursor-pointer"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                      {criterion.category}
                    </span>
                    {criterion.critical && (
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-red-600 bg-red-50 border border-red-200 px-1.5 py-0.5 rounded">
                        Mandatory
                      </span>
                    )}
                  </div>
                  <label
                    htmlFor={`criterion-${criterion.id}`}
                    className="block text-sm sm:text-base font-bold text-slate-900 mt-1 cursor-pointer"
                  >
                    {criterion.title}
                  </label>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    {criterion.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
