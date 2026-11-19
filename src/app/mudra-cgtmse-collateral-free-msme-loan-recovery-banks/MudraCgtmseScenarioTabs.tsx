"use client";

import React, { useState } from "react";

interface ScenarioItem {
  id: string;
  tabLabel: string;
  badge: string;
  title: string;
  ticketBand: string;
  failureMode: string;
  statutoryPosition: string;
  actionSteps: {
    step: string;
    detail: string;
  }[];
  claimComplianceImpact: string;
  recommendedTrack: string;
}

const MUDRA_CGTMSE_SCENARIOS: ScenarioItem[] = [
  {
    id: "mudra-grant-myth",
    tabLabel: "Mudra Shishu / Kishore",
    badge: "PMMY · CGFMU",
    title: "Mudra Shishu & Kishore NPA Where Borrower Claims 'Government Grant Waiver'",
    ticketBand: "₹50,000 – ₹5,00,000 (Collateral-Free Micro Enterprise Term Loan / Working Capital)",
    failureMode:
      "Retail shopkeeper, kirana operator, or micro-artisan stops paying EMIs after 90+ DPD and tells branch recovery staff that PMMY Mudra loans are 'government subsidies' that will be waived before elections. Because there is zero mortgaged real estate, SARFAESI s.13(2) cannot be invoked and filing a regular civil suit costs more than the recoverable balance.",
    statutoryPosition:
      "Mudra facilities are commercial bank credit governed by RBI Master Directions and the Indian Contract Act, 1872 — never non-repayable grants. Under CGFMU (NCGTC) portfolio guarantee guidelines, the Member Lending Institution (MLI) must absorb first-loss deductibles and maintain auditable recall/recovery trails. Pairing an advocate-signed statutory notice with Section 25 PSS Act (if e-NACH bounced) and Pre-Litigation Lok Adalat under Section 20(2) of the Legal Services Authorities Act, 1987 neutralizes the waiver myth at near-zero litigation cost.",
    actionSteps: [
      {
        step: "Multi-Channel Advocate Loan Recall Notice (Day 91–100)",
        detail:
          "Dispatch an advocate-drafted notice via India Post Speed Post RPAD, WhatsApp, and Email explicitly citing CIBIL/CIC adverse reporting, contractual liability, and absence of any statutory government waiver.",
      },
      {
        step: "Section 25 PSS Act / Section 138 NI Act Criminal Trigger",
        detail:
          "Where an e-NACH mandate or post-dated cheque returned unpaid within the last 30 days, embed a strict 15-day statutory demand notice to establish Magistrate prosecution leverage.",
      },
      {
        step: "Bulk DLSA Pre-Litigation National Lok Adalat Docket",
        detail:
          "Batch 100–1,500 regional Shishu/Kishore NPAs into a Pre-Litigation Lok Adalat schedule with 0% court fee to secure binding, non-appealable Section 21 consent awards executable under CPC Order XXI.",
      },
    ],
    claimComplianceImpact:
      "Creates timestamped RPAD + BSA 2023 s.63 electronic service proofs required for NCGTC CGFMU portfolio audits and internal RBI statutory inspection files.",
    recommendedTrack:
      "Bulk Advocate Recall Notice + PSS Act s.25 (if NACH bounced) + National Lok Adalat Batching",
  },
  {
    id: "cgtmse-above-10l",
    tabLabel: "CGTMSE Above ₹10 Lakh",
    badge: "CGTMSE Mandatory Legal",
    title: "CGTMSE-Covered MSE Term Loan / Cash Credit Above ₹10 Lakh Waiver Threshold",
    ticketBand: "₹10,00,001 – ₹5,00,00,000 (Collateral-Free or Hybrid Security MSE Facility)",
    failureMode:
      "A small manufacturing unit or trading firm slips into Sub-Standard NPA after 18+ months of operations. Branch officers mark NPA on the CGTMSE portal, but the CGTMSE Claim Nodal Officer flags the file because no formal legal recovery proceeding has been initiated — blocking the 75% first-installment guarantee lodgement.",
    statutoryPosition:
      "While CGTMSE guidelines permit waiver of mandatory legal-action initiation for eligible NPAs with outstanding up to ₹10 Lakh, facilities exceeding ₹10 Lakh strictly require documented initiation of legal proceedings (Civil/Commercial Suit, DRT Original Application u/s 19 for ≥ ₹20L, Arbitration, Lok Adalat / Revenue Recovery, or Hybrid SARFAESI where partial security exists) prior to invoking the 75% first tranche.",
    actionSteps: [
      {
        step: "RBI Penal-Charge Compliant Recall & Guarantee Notice",
        detail:
          "Issue an itemized Loan Recall Notice separating principal, contractual interest, and non-capitalized penal charges (per RBI Fair Lending Practice – Penal Charges Direction) to borrower and all proprietors/partners/directors.",
      },
      {
        step: "Forum-Matched Legal Initiation Within Limitation",
        detail:
          "For ₹10L–₹19.99L, initiate Commercial Court Section 12A Pre-Institution Mediation or CPC Order XXXVII Summary Suit (or Section 21 Institutional Arbitration). For ≥ ₹20L, file e-DRT Section 19 Original Application.",
      },
      {
        step: "CGTMSE Portal First-Installment Lodgement (75%)",
        detail:
          "Upload NPA date certificate, advocate recall notice with Speed Post RPAD tracking + BSA s.63 certificate, and Case Diary / CNR number on the CGTMSE portal to unlock the 75% first claim payout cleanly.",
      },
    ],
    claimComplianceImpact:
      "Prevents CGTMSE claim rejection or queries on 'defective recall' and 'non-initiation of recovery proceedings', while locking in eligibility for the balance 25% second installment.",
    recommendedTrack:
      "Itemized Advocate Recall Notice -> Commercial Court s.12A / Order 37 (₹10L–₹20L) or e-DRT OA (≥₹20L)",
  },
  {
    id: "pmegp-subsidy-lockin",
    tabLabel: "PMEGP & PM SVANidhi",
    badge: "KVIC / RRC Track",
    title: "PMEGP Margin-Money Lock-In Breach & PM SVANidhi Multi-Tranche Defaults",
    ticketBand: "₹10,000 – ₹50,000 (PM SVANidhi) | ₹2,00,000 – ₹50,00,000 (PMEGP Mfg/Service)",
    failureMode:
      "A PMEGP borrower abandons the unit before completing the mandatory 3-year KVIC/DIC physical verification lock-in period, jeopardizing the 15%–35% margin money subsidy held in the bank's Term Deposit Receipt (TDR). Meanwhile, thousands of PM SVANidhi urban street-vendor micro-loans default in clusters across municipal wards.",
    statutoryPosition:
      "Under PMEGP operational guidelines, if a unit closes or turns NPA during the 3-year lock-in period without genuine physical verification, the subsidy parked in TDR cannot be appropriated by the borrower and must be refunded to KVIC/nodal agency (or adjusted strictly per scheme circular), leaving a larger uncovered principal gap. For state-notified government-sponsored schemes, banks can also invoke State Public Moneys (Recovery of Dues) Acts via District Collector Revenue Recovery Certificates (RRC).",
    actionSteps: [
      {
        step: "Joint Physical Verification & Subsidy Preservation Notice",
        detail:
          "Serve a formal advocate notice putting the PMEGP borrower on record regarding unit closure, TDR subsidy forfeiture risk, and full unsubsidized principal liability.",
      },
      {
        step: "District Collector RRC Application (Where State Act Applies)",
        detail:
          "Forward certified NPA ledger and notice delivery proof to the District Collector / Tehsildar for issuance of a Revenue Recovery Certificate recovering dues as arrears of land revenue.",
      },
      {
        step: "High-Volume Digital Notice + Lok Adalat for PM SVANidhi",
        detail:
          "Deploy automated bilingual WhatsApp + Speed Post advocate notices across entire municipal cohorts before National Lok Adalat sittings to recover micro-tranches without exceeding ticket economics.",
      },
    ],
    claimComplianceImpact:
      "Protects the bank during KVIC/DIC subsidy reconciliation audits and establishes due-diligence recovery proof for CGFMU/CGTMSE portfolio claim settlement.",
    recommendedTrack:
      "Advocate Subsidy-Forfeiture Recall + State RRC Filing (PMEGP) | Bulk WhatsApp/RPAD + Lok Adalat (SVANidhi)",
  },
  {
    id: "cgtmse-second-tranche",
    tabLabel: "2nd Installment (25%)",
    badge: "Post-Claim Compliance",
    title: "Unlocking the Pending 25% CGTMSE Second Installment & Avoiding Clawback",
    ticketBand: "All CGTMSE Accounts Post-75% First-Installment Receipt",
    failureMode:
      "After receiving the 75% first guarantee installment from CGTMSE, branch staff treat the account as 'closed' and stop issuing follow-up legal notices or executing decrees. Three years later, CGTMSE withholds the balance 25% second installment — or demands clawback during audit — citing abandonment of recovery proceedings and unreported borrower part-payments.",
    statutoryPosition:
      "Under CGTMSE Scheme guidelines, the balance 25% second installment is payable only after conclusion of recovery proceedings OR expiry of 3 years from obtaining a recovery decree/award, whichever is earlier, coupled with continuous MLI recovery diligence. Further, every rupee recovered post-first-claim must be shared/remitted to the Trust strictly under the CGTMSE post-claim recovery sharing waterfall.",
    actionSteps: [
      {
        step: "Post-Claim Decree Execution & Asset Tracing Notices",
        detail:
          "Continue Order XXI CPC execution, Lok Adalat compliance follow-up, or CIBIL-linked OTS recall notices after receiving the 75% tranche so the account never goes dormant.",
      },
      {
        step: "Statutory 3-Year / Conclusion Closure Dossier",
        detail:
          "Compile decree copy, bailiff/execution 'nil asset' report or Lok Adalat closure memo, and updated Speed Post/digital notice audit logs for the CGTMSE Nodal Desk.",
      },
      {
        step: "Transparent Pro-Rata Recovery Remittance Ledger",
        detail:
          "Segregate any post-claim recoveries (OTS lump sums, garnishee credits, or hypothecated stock sales), deduct only permissible documented legal expenses, and remit CGTMSE's statutory share promptly.",
      },
    ],
    claimComplianceImpact:
      "Secures full 100% of eligible guaranteed payout (75% + 25%) and eliminates adverse observations from CGTMSE Claim Audit and RBI inspection teams.",
    recommendedTrack:
      "Post-Claim Execution Tracking + Annual OTS/Execution Recall Notices + Pro-Rata Remittance Reconciliation",
  },
];

export default function MudraCgtmseScenarioTabs() {
  const [activeId, setActiveId] = useState<string>(MUDRA_CGTMSE_SCENARIOS[0].id);

  const activeScenario =
    MUDRA_CGTMSE_SCENARIOS.find((s) => s.id === activeId) ||
    MUDRA_CGTMSE_SCENARIOS[0];

  return (
    <div className="space-y-5">
      {/* Tab Selector Strip */}
      <div
        role="tablist"
        aria-label="Mudra and CGTMSE default recovery scenarios"
        className="flex flex-wrap gap-2"
      >
        {MUDRA_CGTMSE_SCENARIOS.map((scenario) => {
          const isActive = scenario.id === activeId;
          return (
            <button
              key={scenario.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveId(scenario.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer border ${
                isActive
                  ? "bg-[#DC2626] text-white border-[#DC2626] shadow-md shadow-red-900/20"
                  : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              {scenario.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Scenario Panel */}
      <div
        role="tabpanel"
        className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5 sm:p-6 space-y-5"
      >
        <div className="flex flex-wrap items-start justify-between gap-3 border-b border-slate-200 pb-4">
          <div className="space-y-1">
            <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-red-50 text-[#DC2626] border border-red-200">
              {activeScenario.badge}
            </span>
            <h3 className="text-base sm:text-lg font-extrabold text-slate-900 leading-snug">
              {activeScenario.title}
            </h3>
          </div>
          <span className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-slate-900 text-slate-100">
            {activeScenario.ticketBand}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded-xl border border-slate-200 p-4 space-y-1.5">
            <p className="text-[11px] font-bold uppercase tracking-wider text-red-700">
              Operational Failure Mode
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {activeScenario.failureMode}
            </p>
          </div>
          <div className="bg-white rounded-xl border border-slate-200 p-4 space-y-1.5">
            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-900">
              Statutory &amp; Trust Scheme Position
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {activeScenario.statutoryPosition}
            </p>
          </div>
        </div>

        {/* 3-Step Execution Sequence */}
        <div className="space-y-3">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Recommended Bank Escalation Sequence
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {activeScenario.actionSteps.map((item, idx) => (
              <div
                key={item.step}
                className="bg-white rounded-xl border border-slate-200 p-4 space-y-2"
              >
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <span className="text-xs font-bold text-slate-900 leading-tight">
                    {item.step}
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Summary Strip */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
          <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-3.5">
            <p className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 mb-1">
              Guarantee Claim Audit Impact
            </p>
            <p className="text-xs text-emerald-900 font-medium leading-relaxed">
              {activeScenario.claimComplianceImpact}
            </p>
          </div>
          <div className="rounded-xl bg-slate-900 text-white p-3.5">
            <p className="text-[10px] font-bold uppercase tracking-wider text-red-400 mb-1">
              Primary Legal Track
            </p>
            <p className="text-xs text-slate-100 font-semibold leading-relaxed">
              {activeScenario.recommendedTrack}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
