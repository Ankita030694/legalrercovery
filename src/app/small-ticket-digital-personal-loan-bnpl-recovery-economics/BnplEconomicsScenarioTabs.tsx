"use client";

import React, { useState } from "react";

interface CohortScenario {
  id: string;
  tabLabel: string;
  ticketRange: string;
  title: string;
  unitConstraint: string;
  recommendedWave: string;
  statutoryHooks: string;
  executionSteps: {
    step: string;
    detail: string;
  }[];
  costCeiling: string;
}

const COHORT_SCENARIOS: CohortScenario[] = [
  {
    id: "bnpl-micro",
    tabLabel: "₹5K–₹15K (BNPL)",
    ticketRange: "₹5,000 – ₹15,000",
    title: "Checkout BNPL & Micro-Credit: Zero-Litigation Digital Wave",
    unitConstraint:
      "At an average ₹9,500 principal, any physical Speed Post + advocate drafting fee above ₹1,500 destroys net recovery yield unless triggered only on high-propensity accounts. Civil court filing or standalone arbitration is economically negative.",
    recommendedWave: "Wave-1 Digital Advocate Notice + 30-Day CICRA Pre-Adverse Alert",
    statutoryHooks:
      "Credit Information Companies (Regulation) Act, 2005 (CICRA) pre-reporting alert; BSA 2023 s.63 electronic service certificate; RBI Fair Practices Code.",
    executionSteps: [
      {
        step: "Day 15–30 DPD: Automated Advocate Email + WhatsApp Blue-Tick Notice",
        detail:
          "Dispatch advocate-vetted demand notice carrying a borrower-specific QR/UPI settlement link and explicit 30-day Credit Bureau (CIBIL/Experian/CRIF/Equifax) DPD reporting schedule.",
      },
      {
        step: "Day 31–45 DPD: CIC Pre-Adverse Escalation & Lok Adalat Screening",
        detail:
          "For non-payers who opened/read Wave-1 (WhatsApp double-blue-tick or email pixel/SMTP delivery), route to pre-litigation Lok Adalat camp or discounted principal-settlement link without incurring court fees.",
      },
      {
        step: "Day 60+ DPD: Cohort Write-Off / Bundled Assignment",
        detail:
          "Accounts below ₹15,000 showing zero digital engagement are quarantined from further legal spend and preserved with BSA s.63 logs for ARC/tax write-off audit.",
      },
    ],
    costCeiling: "Target Legal Cost: < 5% of Principal (Digital-First Wave-1)",
  },
  {
    id: "digital-pl-mid",
    tabLabel: "₹15K–₹50K (Digital PL)",
    ticketRange: "₹15,001 – ₹50,000",
    title: "App-Based Personal Loans: Responsive-Cohort RPAD Escalation",
    unitConstraint:
      "Traditional law firms charge ₹5,000–₹15,000 per case, consuming 20%–50% of principal. Spending physical postage and ODR filing fees indiscriminately across 10,000 accounts erodes portfolio IRR.",
    recommendedWave: "Wave-1 Digital Notice -> Wave-2 Selective Speed Post RPAD",
    statutoryHooks:
      "BSA 2023 s.63 electronic admissibility; IT Act s.10A click-wrap OTP loan contract; Section 25 PSS Act (if e-NACH / UPI AutoPay mandate bounced).",
    executionSteps: [
      {
        step: "Wave-1: Multi-Channel Digital Demand & e-NACH Dishonour Warning",
        detail:
          "Serve statutory demand citing Section 25 of the Payment and Settlement Systems Act, 2007 (where e-NACH/ECS failed) alongside 30-day CICRA bureau impact disclosure.",
      },
      {
        step: "Wave-2: Trigger Speed Post RPAD Only on High-Propensity Cohorts",
        detail:
          "Deploy physical Speed Post RPAD strictly on accounts with verified employment/salary credit signals or Wave-1 engagement that have not cleared dues within 10 days.",
      },
      {
        step: "Settlement Triage & Inbound Reply Desk",
        detail:
          "Route borrower restructuring or hardship replies into structured 2-to-3 tranche UPI auto-mandate plans rather than dropping accounts into silent 90+ DPD.",
      },
    ],
    costCeiling: "Target Legal Cost: 4%–8% of Recovered Value via Selective Wave-2",
  },
  {
    id: "consumer-durable",
    tabLabel: "₹50K–₹1L (Fintech / CD)",
    ticketRange: "₹50,001 – ₹1,00,000",
    title: "Consumer Durable & Mid-Ticket Fintech: Batch ODR s.29B",
    unitConstraint:
      "District civil suits take 3–5 years and Order 37 court fees plus advocate appearance costs exceed ₹15,000–₹25,000. Yet ₹50K–₹1L accounts are too valuable to write off at 90 DPD.",
    recommendedWave: "Wave-1 + Wave-2 RPAD -> Institutional Batch ODR (s.29B)",
    statutoryHooks:
      "Arbitration & Conciliation Act, 1996 s.21 invocation, s.29B Fast-Track & s.25(b) ex-parte award; Perkins Eastman / CORE neutral institutional panel compliance.",
    executionSteps: [
      {
        step: "Wave-1 & Wave-2: Statutory Recall + Section 21 Arbitration Notice",
        detail:
          "Combine final repayment demand with formal Section 21 invocation referencing the click-wrap arbitration clause upheld under IT Act s.10A and the 7-Judge Stamp Act Bench ruling.",
      },
      {
        step: "Batch ODR Reference to Neutral Arbitral Institution",
        detail:
          "Submit 100–5,000 non-responsive accounts in structured CSV batches to an independent ODR institution with Section 12(5) compliant neutral arbitrators.",
      },
      {
        step: "Fast-Track Section 29B Documents-Only Award",
        detail:
          "Tribunal adjudicates on digital loan ledger, KYC/OTP hash, and BSA s.63 delivery certificates within 90–180 days, producing a Section 36 decree-equivalent award.",
      },
    ],
    costCeiling: "Unit-Positive ODR Economics Above ₹50,000 Ticket Floor",
  },
  {
    id: "repeat-defaulter",
    tabLabel: "Salaried / Multi-Loan",
    ticketRange: "₹35,000 – ₹1,00,000+",
    title: "Salaried & Multi-Lender Defaulters: Execution-Screened ODR",
    unitConstraint:
      "Obtaining a paper award against a borrower with zero traceable income or bank balance creates dead legal inventory. Execution must be pre-screened before spending on Order 21.",
    recommendedWave: "Wave-1/2 -> Batch ODR -> Selective CPC Order 21 Execution",
    statutoryHooks:
      "Arbitration Act s.36(1) enforcement; CPC Order 21 Rule 41 (asset disclosure) & Rule 48 (salary attachment); PSS Act s.25 criminal parity.",
    executionSteps: [
      {
        step: "Pre-Litigation Bureau & Mandate Screening",
        detail:
          "Prioritize accounts where bureau refresh shows active credit lines, recent salaried EPFO/bank-statement footprints, or bounced e-NACH mandates.",
      },
      {
        step: "Parallel Section 25 PSS Act & ODR Leverage",
        detail:
          "For bounced e-NACH mandates, statutory 15-day notice under PSS Act s.25 creates immediate criminal-complaint parity with NI Act s.138, accelerating pre-award settlement.",
      },
      {
        step: "Targeted Order 21 Execution on High-Balance Awards",
        detail:
          "Enforce Section 36 arbitral awards selectively against verified salaried borrowers via CPC Order 21 Rule 48 employer salary attachment.",
      },
    ],
    costCeiling: "Selective Execution Preserves Positive Net Portfolio IRR",
  },
];

export default function BnplEconomicsScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(COHORT_SCENARIOS[0].id);
  const current = COHORT_SCENARIOS.find((s) => s.id === activeTab) || COHORT_SCENARIOS[0];

  return (
    <div className="w-full">
      <div
        role="tablist"
        aria-label="Small-ticket loan cohort scenarios"
        className="flex flex-wrap gap-2 mb-5 border-b border-slate-200 pb-3"
      >
        {COHORT_SCENARIOS.map((item) => {
          const isSelected = item.id === activeTab;
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={isSelected}
              onClick={() => setActiveTab(item.id)}
              className={`px-3.5 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                isSelected
                  ? "bg-[#DC2626] text-white shadow-sm"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {item.tabLabel}
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4 sm:p-6 space-y-5"
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-slate-200 pb-4">
          <div>
            <span className="inline-block text-[11px] font-extrabold uppercase tracking-wider text-[#DC2626] mb-1">
              Ticket Cohort: {current.ticketRange}
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900">{current.title}</h3>
          </div>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 shrink-0">
            {current.costCeiling}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded-xl border border-slate-200 p-4">
            <p className="text-xs font-extrabold uppercase tracking-wider text-slate-500 mb-1.5">
              Unit-Economics Constraint
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {current.unitConstraint}
            </p>
          </div>
          <div className="bg-white rounded-xl border border-slate-200 p-4">
            <p className="text-xs font-extrabold uppercase tracking-wider text-slate-500 mb-1.5">
              Recommended Escalation Track
            </p>
            <p className="text-xs sm:text-sm font-bold text-slate-900 mb-2">
              {current.recommendedWave}
            </p>
            <p className="text-xs text-slate-600 leading-relaxed">
              <strong className="text-slate-800">Statutory Hooks:</strong> {current.statutoryHooks}
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
            3-Step Cohort Execution Sequence
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {current.executionSteps.map((st, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-slate-200 p-4 flex flex-col gap-1.5"
              >
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">{st.step}</h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">{st.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
