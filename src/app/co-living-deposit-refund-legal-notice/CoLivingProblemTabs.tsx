"use client";

import React, { useState } from "react";

interface OperatorScenario {
  id: string;
  tabLabel: string;
  badge: string;
  title: string;
  legalVerdict: string;
  statutoryBasis: string;
  operatorTactic: string;
  legalRemedySteps: string[];
  keyTip: string;
}

const SCENARIOS: OperatorScenario[] = [
  {
    id: "delayed-beyond-window",
    tabLabel: "30–45 Day Delay Passed",
    badge: "Most Common Complaint",
    title: "App Shows 'Refund Approved / In Process' for Weeks After 30–45 Working Days",
    legalVerdict: "DEFICIENCY IN SERVICE (SECTION 2(11) CPA 2019)",
    statutoryBasis: "Section 2(11) Consumer Protection Act, 2019 + E-Commerce Rules, 2020",
    operatorTactic:
      "Large co-living operators (such as Stanza Living, Zolostays, and Colive) insert 30 to 45 working-day refund clauses in their clickwrap onboarding agreements, and then miss even that extended timeline—closing support tickets with generic replies like 'Forwarded to Finance Team' or 'Batch Payout Pending'.",
    legalRemedySteps: [
      "Calculate the exact calendar date on which the promised refund window expired from your room vacate date.",
      "Send a final written demand to the operator's Grievance Officer demanding the 12-digit NEFT/IMPS/UPI UTR number within 72 hours.",
      "Lodge a docket on the National Consumer Helpline (1915 / consumerhelpline.gov.in) attaching your move-out clearance.",
      "Serve a 15-day Advocate Legal Notice to the corporate entity's registered office demanding principal deposit + 18% p.a. interest.",
    ],
    keyTip:
      "A screenshot showing 'Refund Processed' inside the co-living app is not legal proof of payment unless accompanied by a verifiable bank UTR credited to your account.",
  },
  {
    id: "unfair-cleaning-painting",
    tabLabel: "Painting / Exit Charges",
    badge: "Illegal Deduction",
    title: "Operator Deducts ₹3,000–₹8,000 for 'Mandatory Exit Cleaning, Painting or Mattress Sanitization'",
    legalVerdict: "UNFAIR CONTRACT & UNLAWFUL DEDUCTION",
    statutoryBasis: "Section 2(46) & 2(47) CPA 2019 + Section 74 Indian Contract Act, 1872",
    operatorTactic:
      "Upon checkout, operators deduct flat-rate 'exit processing fees', 'repainting charges', or 'wear-and-tear refurbishment' even when you occupied a shared room for just a few months and caused zero physical damage.",
    legalRemedySteps: [
      "Compare the final settlement sheet against your onboarding agreement to verify if hidden exit fees were disclosed upfront.",
      "Rely on timestamped checkout videos and key handover sign-offs from the Property Manager / Residence Captain showing zero damage.",
      "Challenge routine wear-and-tear deductions as void under standard tenancy principles and Section 2(46) CPA 2019 (unfair contract terms).",
      "Demand immediate reversal of unsubstantiated deductions via legal notice before accepting the partial settlement as 'full and final'.",
    ],
    keyTip:
      "Routine repainting and normal depreciation of furniture between two residents is the commercial operator's operating cost—not a damage liability payable from your security deposit.",
  },
  {
    id: "lockin-notice-forfeiture",
    tabLabel: "Lock-In / Notice Forfeiture",
    badge: "Section 74 Challenge",
    title: "100% Deposit Forfeited for Early Exit During Lock-In or App Glitch on Move-Out Notice",
    legalVerdict: "PUNITIVE FORFEITURE VOID UNDER SECTION 74 CONTRACT ACT",
    statutoryBasis: "Section 74 Indian Contract Act, 1872 + Section 2(46) CPA 2019",
    operatorTactic:
      "The resident app blocks move-out requests if utility bills are pending, or requires notice strictly on the 1st of the month. If you vacate during a 6-month lock-in due to unhygienic food, broken AC, pest infestation, or job transfer, the operator forfeits 100% of your deposit.",
    legalRemedySteps: [
      "Compile all prior app tickets, photos, and WhatsApp complaints proving the operator breached fundamental service promises (AC failure, water shortage, security lapse, bad food).",
      "Invoke the doctrine of fundamental breach: when the service provider defaults on basic habitability, the resident is legally entitled to terminate the contract without lock-in penalty.",
      "Even where early exit is voluntary, cite Section 74 of the Indian Contract Act: an operator cannot forfeit the entire deposit as a penalty if the bed was re-occupied immediately.",
      "Issue a statutory demand notice challenging the unconscionable clickwrap forfeiture clause.",
    ],
    keyTip:
      "If the co-living operator failed to provide the promised amenities (Wi-Fi, AC, hygienic meals, water), the lock-in clause becomes unenforceable because the operator committed the first breach.",
  },
  {
    id: "building-owner-dispute",
    tabLabel: "Owner vs Operator Dispute",
    badge: "Tripartite Conflict",
    title: "Co-Living Company Vacates Building or Fights With Landlord, Leaving Resident Deposits Stuck",
    legalVerdict: "OPERATOR REMAINS STRICTLY LIABLE TO RESIDENT",
    statutoryBasis: "Privity of Contract (Indian Contract Act) + Section 2(11) CPA 2019",
    operatorTactic:
      "When a co-living brand terminates its master lease with the building owner or shuts down a property, residents are suddenly asked to vacate within days. The operator tells residents to 'ask the building owner', while the landlord says 'you paid the app company, not me'.",
    legalRemedySteps: [
      "Verify the recipient name on your deposit payment receipt—your privity of contract is strictly with the entity that collected your deposit.",
      "Do not hand over room keys or vacate under coercion without a written commitment from the operator acknowledging immediate deposit refund.",
      "Name the co-living corporate entity (and its directors) as Opposite Party No. 1, and if the landlord unlawfully locks your belongings, include the property owner as Opposite Party No. 2.",
      "Serve an urgent legal notice demanding 100% deposit refund plus relocation expenses and mental harassment damages.",
    ],
    keyTip:
      "An internal lease dispute between the co-living aggregator and the building owner has zero legal bearing on your right to receive your deposit back from the company you paid.",
  },
];

export default function CoLivingProblemTabs() {
  const [activeTab, setActiveTab] = useState(SCENARIOS[0].id);
  const current = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 shadow-sm p-4 sm:p-6 md:p-8 space-y-6">
      {/* Horizontal Tab Buttons */}
      <div className="flex overflow-x-auto gap-2 pb-2 border-b border-slate-200 no-scrollbar" role="tablist" aria-label="Co-living dispute scenarios">
        {SCENARIOS.map((tab) => {
          const isActive = tab.id === activeTab;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                isActive
                  ? "bg-slate-900 text-white shadow-sm"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {tab.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Tab Content Card */}
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-red-100 text-red-800">
            {current.badge}
          </span>
          <span className="text-xs font-semibold text-slate-500">
            {current.statutoryBasis}
          </span>
        </div>

        <div>
          <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 mb-1.5">
            {current.title}
          </h3>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 border border-emerald-200 rounded-lg text-xs font-bold text-emerald-800">
            <span>Legal Standing:</span>
            <span>{current.legalVerdict}</span>
          </div>
        </div>

        <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-700 leading-relaxed">
          <strong className="text-slate-900 font-bold block mb-1">How Operators Delay or Deduct:</strong>
          {current.operatorTactic}
        </div>

        <div className="space-y-2">
          <h4 className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wider">
            Actionable Recovery Steps for Residents:
          </h4>
          <ul className="space-y-2">
            {current.legalRemedySteps.map((step, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                  ✓
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-3.5 bg-amber-50 border border-amber-200 rounded-xl text-xs sm:text-sm text-amber-950 leading-relaxed">
          <strong className="font-bold text-amber-900 block mb-0.5">Crucial Legal Insight:</strong>
          {current.keyTip}
        </div>
      </div>
    </div>
  );
}
