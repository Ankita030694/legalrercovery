"use client";

import React, { useState } from "react";

interface ScfScenario {
  id: string;
  tabLabel: string;
  productType: string;
  title: string;
  failureMechanism: string;
  primaryLeverage: string;
  statutoryHooks: string;
  executionSteps: {
    step: string;
    detail: string;
  }[];
  recoveryOutcome: string;
}

const SCF_SCENARIOS: ScfScenario[] = [
  {
    id: "dealer-diversion",
    tabLabel: "Dealer Sales Diversion",
    productType: "Anchor-Led Channel / Dealer Finance",
    title: "Dealer Diverts Stock Proceeds Instead of Repaying SCF Credit Line",
    failureMechanism:
      "The downstream dealer sells inventory financed by the NBFC's channel line to retail buyers in cash or routes proceeds into an undisclosed bank account, leaving the 60-to-90-day tranche unpaid while continuing to order from the Anchor OEM.",
    primaryLeverage: "Anchor Stop-Supply Covenant + Tripartite Lien & s.25 PSS Act",
    statutoryHooks:
      "Tripartite Anchor-Financier MOU (Stop-Supply & Credit Hold), Payment and Settlement Systems Act, 2007 s.25 (e-NACH bounce), NI Act s.138 (security PDCs), & Order XXXVII CPC.",
    executionSteps: [
      {
        step: "Day 1–7 DPD: Trigger Contractual Anchor Stop-Supply & Margin Hold",
        detail:
          "Serve formal Advocate Intimation on both the defaulting Dealer and the Anchor Corporate under the Tripartite Channel Agreement, invoking the Anchor's covenant to suspend fresh dispatches and freeze dealer trade incentives/credit notes.",
      },
      {
        step: "Day 8–22 DPD: Statutory s.25 PSS / s.138 NI Demand + Recall",
        detail:
          "Upon e-NACH or security cheque dishonour, issue a 15-day statutory demand notice to the dealer and its directors/partners, putting personal guarantees and hypothecated inventory on formal recall.",
      },
      {
        step: "Day 30+ DPD: Summary Suit (Order 37 CPC) / Institutional Arbitration",
        detail:
          "File an Order XXXVII Summary Suit or fast-track Section 29B arbitration backed by Anchor dispatch invoices, e-Way bills, and BSA s.63-certified ledger statements to attach dealer receivables.",
      },
    ],
    recoveryOutcome: "High Pre-Suit Cure: Stop-supply threat halts business continuity immediately.",
  },
  {
    id: "with-recourse-vendor",
    tabLabel: "With-Recourse Vendor",
    productType: "With-Recourse Invoice Discounting",
    title: "Corporate Buyer Delays Payment & Vendor Refuses Recourse Buyback",
    failureMechanism:
      "Under a with-recourse discounting facility, the vendor received 80%–90% upfront liquidity. When the corporate buyer delays beyond the 90-day due date citing quality/reconciliation issues, the vendor ignores the buyback obligation.",
    primaryLeverage: "Joint & Several Recourse Notice + Factoring Act s.8 Assignment",
    statutoryHooks:
      "Factoring Regulation Act, 2011 (s.8 Notice of Assignment & s.19 CERSAI registration), Indian Contract Act, 1872 s.128 (co-extensive liability), & Order XXXVII CPC.",
    executionSteps: [
      {
        step: "Step 1: Serve Section 8 Notice of Assignment on the Corporate Buyer",
        detail:
          "Under Section 8 of the Factoring Regulation Act, 2011, once written notice of assignment is served on the debtor (corporate buyer), any payment made directly to the vendor does not discharge the buyer's legal liability to the Factor/NBFC.",
      },
      {
        step: "Step 2: Concurrent Recourse Buyback Demand on the Vendor",
        detail:
          "Issue a 7-day Advocate Recourse Notice demanding immediate repurchase of the overdue receivable plus penal interest under the Master Factoring Agreement, attaching the vendor's corporate/personal guarantee.",
      },
      {
        step: "Step 3: Summary Recovery Against Both Obligors",
        detail:
          "Escalate via Order XXXVII CPC (liquidated invoice + written discounting contract) or Section 25 PSS Act where the vendor's repayment mandate dishonoured.",
      },
    ],
    recoveryOutcome: "Dual-Pocket Recovery: Preserves direct claim against Buyer and Vendor.",
  },
  {
    id: "without-recourse-treds",
    tabLabel: "Without-Recourse / TReDS",
    productType: "Without-Recourse Factoring & TReDS",
    title: "Corporate Buyer Defaults on Accepted TReDS / Factored Receivable",
    failureMechanism:
      "On TReDS or in non-recourse factoring, the NBFC/Factor bears pure buyer credit risk once the Factoring Unit (FU) is accepted. When the corporate buyer defaults on maturity, the MSME seller is shielded from recourse.",
    primaryLeverage: "CERSAI s.19 Priority + Direct Buyer Enforcement & IBC s.7/s.9",
    statutoryHooks:
      "Factoring Regulation Act, 2011 (s.19 CERSAI filing, s.8 assignment), RBI TReDS Guidelines (direct debit/settlement failure), & Commercial Courts Act, 2015 / IBC s.7 (financial debt threshold).",
    executionSteps: [
      {
        step: "Step 1: Verify CERSAI Form I Registration & TReDS Acceptance Trail",
        detail:
          "Extract the CERSAI assignment registration certificate (Section 19) and the buyer's digital acceptance log on RXIL/M1xchange/Invoicemart, establishing an indisputable liquidated debt.",
      },
      {
        step: "Step 2: Serve Direct Statutory Demand on Buyer's KMP & CFO",
        detail:
          "Deliver a formal Advocate Demand Notice citing TReDS settlement default, CERSAI charge priority, and potential RBI/credit-bureau reporting impact on the buyer's working capital lines.",
      },
      {
        step: "Step 3: Commercial Court Order 37 / IBC Financial Creditor Escalation",
        detail:
          "For large corporate defaults meeting statutory thresholds, initiate Commercial Summary Suit or NCLT proceedings supported by the BSA s.63-certified TReDS Factoring Unit audit trail.",
      },
    ],
    recoveryOutcome: "Zero-Dispute Evidentiary Base: Accepted TReDS FU defeats quality-dispute excuses.",
  },
  {
    id: "double-pledge-fraud",
    tabLabel: "Double-Pledge Fraud",
    productType: "Dual-Financing & Fake Invoice Fraud",
    title: "Vendor Discounts Same or Fabricated Invoice Across Two Lenders",
    failureMechanism:
      "A distressed vendor raises duplicate invoices or alters GST e-Invoice/e-Way bill metadata to discount the exact same receivable with two different SCF NBFCs, or discounts fictitious invoices with a colluding buyer.",
    primaryLeverage: "CERSAI Priority + BNS s.318 Criminal Notice & Asset Freeze",
    statutoryHooks:
      "Bharatiya Nyaya Sanhita (BNS), 2023 s.318 (Cheating) & s.336 (Forgery), Factoring Act s.19 CERSAI timestamp priority, & Order 38 Rule 5 CPC attachment before judgment.",
    executionSteps: [
      {
        step: "Step 1: Immediate CERSAI Timestamp Audit & GST IRN Cross-Check",
        detail:
          "Verify whether your NBFC holds the prior Section 19 CERSAI registration on the receivable and preserve GSTN e-Invoice IRN, e-Way bill, and transporter bilty discrepancies under BSA 2023 s.63.",
      },
      {
        step: "Step 2: Urgent Criminal-Civil Composite Notice (BNS s.318 / s.336)",
        detail:
          "Serve an urgent Advocate Notice on the vendor's promoters/directors detailing the dual-financing fraud, warning of EOW/police complaint under BNS s.318 (replacing IPC s.420) and s.336, and demanding 48-hour restitution.",
      },
      {
        step: "Step 3: Criminal Complaint + Order 38 Rule 5 Attachment",
        detail:
          "If restitution fails within 48–72 hours, file a criminal complaint with BSA s.63 digital dossiers while moving the Commercial Court for attachment before judgment against promoter assets.",
      },
    ],
    recoveryOutcome: "Maximum Promoter Pressure: Criminal fraud exposure forces rapid settlement.",
  },
];

export default function ScfRecoveryScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(SCF_SCENARIOS[0].id);
  const current = SCF_SCENARIOS.find((s) => s.id === activeTab) || SCF_SCENARIOS[0];

  return (
    <div className="w-full space-y-5">
      {/* Tab Buttons */}
      <div
        role="tablist"
        aria-label="SCF Failure Mode Scenarios"
        className="flex flex-wrap gap-2 border-b border-slate-200 pb-3"
      >
        {SCF_SCENARIOS.map((scenario) => {
          const isActive = scenario.id === activeTab;
          return (
            <button
              key={scenario.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveTab(scenario.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                isActive
                  ? "bg-[#DC2626] text-white shadow-sm"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
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
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-slate-200 pb-4">
          <div>
            <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-[#DC2626] mb-1">
              {current.productType}
            </span>
            <h3 className="text-lg sm:text-xl font-black text-slate-900">
              {current.title}
            </h3>
          </div>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 shrink-0">
            {current.primaryLeverage}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded-xl border border-slate-200 p-4">
            <p className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 mb-1.5">
              Commercial Failure Mechanism
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {current.failureMechanism}
            </p>
          </div>
          <div className="bg-white rounded-xl border border-slate-200 p-4">
            <p className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 mb-1.5">
              Applicable Statutory Hooks
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {current.statutoryHooks}
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
            Creditor Execution Sequence
          </p>
          <div className="grid grid-cols-1 gap-3">
            {current.executionSteps.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-slate-200 p-4 flex items-start gap-3"
              >
                <span className="w-6 h-6 rounded-full bg-slate-900 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <div>
                  <p className="text-xs sm:text-sm font-bold text-slate-900 mb-1">
                    {item.step}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl bg-slate-900 text-slate-100 px-4 py-3 text-xs sm:text-sm font-semibold flex items-center justify-between gap-2">
          <span className="text-red-400 uppercase tracking-wider text-[11px] font-bold">
            Strategic Outcome:
          </span>
          <span>{current.recoveryOutcome}</span>
        </div>
      </div>
    </div>
  );
}
