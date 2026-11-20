"use client";

import React, { useState } from "react";

interface ScenarioTab {
  id: string;
  label: string;
  badge: string;
  title: string;
  summary: string;
  steps: string[];
  statutoryRisk: string;
}

const SCENARIOS: ScenarioTab[] = [
  {
    id: "non-appearing-debtor",
    label: "1. Debtor Ignores Form-2 Notice",
    badge: "Most Common B2B Outcome",
    title: "Opposite Party Refuses to Appear Before DLSA After Two Notices",
    summary:
      "Over 60% of wilful corporate defaulters ignore the first DLSA Form-2 notice expecting delay. Under Rule 3(4) and Rule 3(6) of the PIMS Rules, 2018, the Authority issues a second final 10-day notice and immediately closes the file with a Form-3 Non-Starter Report.",
    steps: [
      "Verify Registered Office & Director addresses from MCA Master Data before filing Form-1 so Form-2 service cannot be disputed as 'incomplete address'.",
      "Track both 10-day notice windows actively with the DLSA mediation cell and preserve postal/email service receipts.",
      "Collect the certified Form-3 Non-Starter Report and annex it as Document No. 1 in your Commercial Suit plaint to immunize against Order VII Rule 11 rejection.",
    ],
    statutoryRisk:
      "Never file the Commercial Suit while the second 10-day DLSA notice is still pending—wait until Form-3 is formally issued and dated.",
  },
  {
    id: "urgent-interim-relief",
    label: "2. Asset-Stripping / Urgent Relief",
    badge: "Yamini Manohar Exception",
    title: "Bypassing Section 12A for Genuine Order XXXVIII Rule 5 / Order XXXIX Relief",
    summary:
      "When a corporate buyer is actively liquidating factory machinery, diverting escrow receivables, or transferring immovable property, Section 12A(1) permits direct suit filing without mediation—provided the urgency is genuine and documented.",
    steps: [
      "Compile concrete documentary proof of dissipation (e.g., GST cancellation, factory lock-out photos, MCA charge creation, or auction listing) before filing.",
      "File a dedicated application under Order XXXVIII Rule 5 CPC (Attachment Before Judgment) or Order XXXIX Rules 1 & 2 alongside the plaint.",
      "Satisfy the Yamini Manohar standard: demonstrate that the urgency is real from the plaintiff's standpoint and not a cosmetic prayer drafted to dodge the ₹1,000 DLSA process.",
    ],
    statutoryRisk:
      "If the Commercial Court finds the interim relief prayer is a sham camouflage, it will reject the entire plaint suo motu under Patil Automation.",
  },
  {
    id: "settlement-arbitral-award",
    label: "3. Debtor Settles in Mediation",
    badge: "Section 12A(5) Decree Force",
    title: "Converting Installment Promises into an Enforceable Arbitral Award",
    summary:
      "Unlike an informal MoU or WhatsApp promise—which requires a fresh breach-of-contract suit if the debtor defaults on installment #2—a signed Section 12A Settlement Agreement carries the statutory force of an Arbitral Award u/s 30(4) of the Arbitration Act, 1996.",
    steps: [
      "Insist on a clear default-acceleration clause in the signed Settlement Agreement: if any single tranche is delayed by 7 days, the entire balance becomes immediately executable.",
      "Ensure both Authorized Signatories execute the settlement with Board Resolutions and the DLSA Mediator countersigns under Section 12A(4).",
      "If the debtor defaults on any post-dated installment, file an Execution Petition directly under Order XXI CPC / Section 36 Arbitration Act—no fresh trial required.",
    ],
    statutoryRisk:
      "Never withdraw Form-1 against an oral promise or an un-countersigned side letter; only a mediator-signed Section 12A(4) settlement carries arbitral-award finality.",
  },
  {
    id: "limitation-cliff",
    label: "4. Claim Near 3-Year Limitation",
    badge: "Proviso to Section 12A(3)",
    title: "Stopping the Limitation Clock During Pre-Institution Mediation",
    summary:
      "When invoices are approaching the 3-year Limitation Act deadline (e.g., 34–35 months past due date), CFOs worry that a 3-month mediation will render the suit time-barred. The proviso to Section 12A(3) explicitly excludes the mediation duration from limitation.",
    steps: [
      "File Form-1 with the DLSA well before the 3-year expiry date and obtain a stamped/timestamped filing receipt.",
      "Preserve the exact start date (Form-1 filing) and end date (Form-3 Non-Starter Report) to claim statutory exclusion under the Section 12A(3) proviso.",
      "Simultaneously audit whether Section 18 Limitation Act acknowledgments (signed balance confirmations, TDS Form 26AS, or audited balance sheets) independently reset the 3-year clock.",
    ],
    statutoryRisk:
      "The Section 12A(3) exclusion only protects claims that were NOT already time-barred on the date Form-1 was filed—never sit on 36-month+ arrears.",
  },
];

export default function Section12aScenarioTabs() {
  const [activeTabId, setActiveTabId] = useState<string>(SCENARIOS[0].id);
  const activeScenario = SCENARIOS.find((s) => s.id === activeTabId) || SCENARIOS[0];

  return (
    <div className="w-full">
      <div
        role="tablist"
        aria-label="Section 12A Commercial Mediation Scenarios"
        className="flex flex-wrap gap-2 mb-5 border-b border-slate-200 pb-3"
      >
        {SCENARIOS.map((scenario) => {
          const isActive = scenario.id === activeTabId;
          return (
            <button
              key={scenario.id}
              role="tab"
              type="button"
              aria-selected={isActive}
              onClick={() => setActiveTabId(scenario.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                isActive
                  ? "bg-[#DC2626] text-white shadow-sm"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {scenario.label}
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 transition-all"
      >
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <span className="inline-block px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-slate-900 text-white">
            {activeScenario.badge}
          </span>
          <span className="text-[11px] font-semibold text-slate-500">
            Commercial Courts Act, 2015 &bull; PIMS Rules, 2018
          </span>
        </div>

        <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-2">
          {activeScenario.title}
        </h3>
        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-4">
          {activeScenario.summary}
        </p>

        <div className="space-y-2.5 mb-4">
          {activeScenario.steps.map((step, index) => (
            <div
              key={index}
              className="flex items-start gap-2.5 bg-white p-3 rounded-xl border border-slate-200"
            >
              <span className="w-5 h-5 rounded-full bg-[#DC2626] text-white text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                {index + 1}
              </span>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{step}</p>
            </div>
          ))}
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-3.5 text-xs text-amber-900 leading-relaxed">
          <strong className="font-bold text-amber-950">Statutory Guardrail: </strong>
          {activeScenario.statutoryRisk}
        </div>
      </div>
    </div>
  );
}
