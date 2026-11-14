"use client";

import React, { useState } from "react";

interface HfcScenario {
  id: string;
  tabLabel: string;
  segment: string;
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

const HFC_SCENARIOS: HfcScenario[] = [
  {
    id: "stalled-builder-subvention",
    tabLabel: "Stalled Builder / Subvention",
    segment: "Under-Construction Subvention & Tripartite Loans",
    title: "Builder Halts Construction; Homebuyer Stops Paying EMIs Blaming Developer",
    failureMechanism:
      "Under a subvention or construction-linked plan, the developer misses possession milestones or stops paying pre-EMI interest. The homebuyer unilaterally halts EMIs to the HFC, claiming 'frustration of contract' or consumer deficiency against the builder.",
    primaryLeverage: "Independent Loan Covenant + Tripartite Builder Buyback / Escrow Lien",
    statutoryHooks:
      "Tripartite Agreement (independent borrower repayment covenant), SARFAESI Act 2002 s.13(2) & s.13(4) (on allotted unit/undivided share), PSS Act 2007 s.25 (e-NACH bounce), & RERA s.11(4)/s.19(6) builder-project tracking.",
    executionSteps: [
      {
        step: "Step 1: Separate Borrower Liability from Builder Delay via Advocate Notice",
        detail:
          "Serve a formal Tripartite Demand Notice on BOTH the Borrower and the Builder citing the non-abatement clause: the HFC disbursed loan funds at the borrower's request, so builder construction delays do not extinguish the borrower's unconditional EMI obligation.",
      },
      {
        step: "Step 2: Invoke Builder Cancellation & Refund-to-HFC Clause",
        detail:
          "Simultaneously enforce the Tripartite Agreement's cancellation/buyback covenant requiring the builder to remit any refunded booking amount, subvention shortfall, or alternate-allotment proceeds directly to the HFC loan account—never to the borrower.",
      },
      {
        step: "Step 3: Parallel s.25 PSS Act + CERSAI-Backed SARFAESI / Arbitration",
        detail:
          "Trigger Section 25 PSS Act / s.138 NI Act proceedings on bounced e-NACH mandates while preserving CERSAI s.26D priority over the allotted flat or invoking NCLT/RERA creditor impleadment if the developer enters CIRP.",
      },
    ],
    recoveryOutcome: "Prevents Strategic EMI Boycotts & Secures Dual-Obligor Cashflow.",
  },
  {
    id: "informal-income-tier2",
    tabLabel: "Informal Income (Tier-2/3)",
    segment: "Self-Employed / Cash-Flow Affordable Housing (₹3L–₹18L)",
    title: "Tier-2/3 Self-Employed Borrower Ignores Telecallers Past 90+ DPD",
    failureMechanism:
      "Informal-sector borrowers (kirana owners, small fabricators, transport operators) with ₹4L–₹15L home loans treat collection calls and SMS reminders as negotiable noise, prioritizing local trade creditors until physical property enforcement is visibly initiated.",
    primaryLeverage: "₹1 Lakh SARFAESI Floor + 60-Day Section 13(2) & Gate-Pasting Symbolic Possession",
    statutoryHooks:
      "SARFAESI Act 2002 s.2(1)(m)(iv) & MoF HFC Notification (₹1 Lakh floor), s.13(2) 60-day statutory demand, Rule 8(1)/(2) Security Interest (Enforcement) Rules 2002 (gate-affixture & newspaper publication), & s.14 DM/CMM order.",
    executionSteps: [
      {
        step: "Day 61–90 DPD: Pre-NPA Advocate Recall + s.25 PSS Act Warning",
        detail:
          "Replace repeated telecalling with a BSA 2023 s.63-logged tri-channel Advocate Notice (Email + WhatsApp + Speed Post RPAD) warning of imminent NPA tagging, CIBIL reporting, and SARFAESI Section 13(2) invocation.",
      },
      {
        step: "Day 91+ DPD: Issue Statutory Section 13(2) 60-Day Demand Notice",
        detail:
          "Immediately upon RBI 90-DPD NPA classification, the Authorised Officer serves the mandatory 60-day Section 13(2) notice detailing the secured asset, exact principal + uncompounded interest, and CERSAI registration ID.",
      },
      {
        step: "Day 152+ DPD: Section 13(4) Symbolic Possession + Rule 8(1) Gate Affixture",
        detail:
          "Once 60 days expire without full cure or valid s.13(3A) objection, take symbolic possession under s.13(4), affix Possession Notice on the property gate, and publish in two newspapers—triggering immediate family-level settlement.",
      },
    ],
    recoveryOutcome: "High Cure Velocity: Gate-affixture & s.14 filing unlock Tier-2/3 settlements.",
  },
  {
    id: "under-construction-no-sale-deed",
    tabLabel: "Under-Construction / No Sale Deed",
    segment: "Allotment Letter & Builder NOC Mortgages",
    title: "Borrower Defaults Before Conveyance / Sale Deed Execution",
    failureMechanism:
      "The HFC financed an under-construction unit based on an Allotment Letter, Builder-Buyer Agreement, and Tripartite Builder NOC creating a charge on allotment rights—before a registered Sale Deed or physical title deed deposit occurred.",
    primaryLeverage: "Tripartite Lien Enforcement + Equitable Assignment of Allotment Rights",
    statutoryHooks:
      "Transfer of Property Act, 1882 s.58(f) & s.130 (actionable claim/allotment assignment), SARFAESI Act s.2(1)(zf) security interest, Tripartite Builder NOC, & Arbitration Act s.9 interim restraint.",
    executionSteps: [
      {
        step: "Step 1: Freeze Transfer / Resale with the Developer & Society",
        detail:
          "Serve formal Advocate Restraint Intimation on the Builder's CRM/Legal desk under the Tripartite NOC prohibiting any unit cancellation, transfer, or NOC issuance to a third-party buyer without HFC written release.",
      },
      {
        step: "Step 2: Enforce Tripartite Cancellation & Substitution Right",
        detail:
          "Exercise the HFC's contractual right under the Tripartite Agreement to cancel the defaulting allottee's booking and either compel builder refund of disbursed principal or substitute an eligible purchaser.",
      },
      {
        step: "Step 3: Section 9 Arbitration / Civil Injunction + s.25 PSS Prosecution",
        detail:
          "Where the developer is non-cooperative or the unit is near completion, obtain an urgent Section 9 Arbitration interim order restraining third-party alienation while prosecuting bounced e-NACH mandates under s.25 PSS Act.",
      },
    ],
    recoveryOutcome: "Blocks Secret Resale & Preserves HFC First-Charge Recovery.",
  },
  {
    id: "title-deed-cersai-defect",
    tabLabel: "Title Deed / CERSAI Defect",
    segment: "Equitable Mortgage & Perfection Cure",
    title: "Borrower Challenges SARFAESI Citing Missing MOE, Unregistered Charge, or Boundary Mismatch",
    failureMechanism:
      "During pre-SARFAESI audit or DRT Section 17 challenge, the HFC discovers a defective Memorandum of Entry (MOE), missing CERSAI registration (barred under s.26D), or mismatched khasra/plot boundaries in Tier-2/3 revenue records.",
    primaryLeverage: "s.26D CERSAI Cure + Dual-Track Order 34 CPC / Arbitration Fallback",
    statutoryHooks:
      "SARFAESI Act s.26D (CERSAI registration prerequisite), Transfer of Property Act s.58(f) (Equitable Mortgage by deposit of title deeds), Registration Act s.17(1)(c) (state MOE stamp/registration rules), & Order XXXIV CPC.",
    executionSteps: [
      {
        step: "Step 1: Immediate Pre-13(2) CERSAI & MOE Audit",
        detail:
          "Never issue a Section 13(2) notice without verifying CERSAI Security Interest ID under Section 26D—an unregistered charge renders SARFAESI enforcement legally barred and invites instant DRT s.17 quashing.",
      },
      {
        step: "Step 2: Cure CERSAI Filing & Re-Execute / Validate Title Chain",
        detail:
          "Complete CERSAI filing immediately (noting priority runs from filing date) and verify whether the state requires mandatory registration of the Memorandum of Entry (e.g., Maharashtra/Karnataka) or accepts an unregistered oral deposit record.",
      },
      {
        step: "Step 3: Pivot to Order 34 CPC / Personal Guarantee & s.25 PSS if Title Fails",
        detail:
          "If the underlying title chain has an incurable defect (e.g., forged patta or prior undisclosed bank mortgage), immediately pivot from SARFAESI to an Order XXXIV/XXXVII civil recovery suit, personal guarantee enforcement, and BNS s.318 criminal complaint.",
      },
    ],
    recoveryOutcome: "Zero DRT Section 17 Reversals & Clean Priority Perfection.",
  },
];

export default function HfcScenarioTabs() {
  const [activeId, setActiveId] = useState<string>(HFC_SCENARIOS[0].id);
  const activeScenario =
    HFC_SCENARIOS.find((s) => s.id === activeId) || HFC_SCENARIOS[0];

  return (
    <div className="w-full space-y-5">
      {/* Tab Buttons */}
      <div className="flex flex-wrap gap-2">
        {HFC_SCENARIOS.map((scenario) => {
          const isActive = scenario.id === activeId;
          return (
            <button
              key={scenario.id}
              type="button"
              onClick={() => setActiveId(scenario.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer border ${
                isActive
                  ? "bg-[#DC2626] text-white border-[#DC2626] shadow-md"
                  : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:border-slate-300"
              }`}
            >
              {scenario.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Scenario Card */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-slate-200 pb-4">
          <div>
            <span className="inline-block text-[10px] sm:text-xs font-extrabold uppercase tracking-wider text-[#DC2626] mb-1">
              {activeScenario.segment}
            </span>
            <h3 className="text-base sm:text-lg font-black text-slate-900">
              {activeScenario.title}
            </h3>
          </div>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 shrink-0 self-start sm:self-center">
            {activeScenario.recoveryOutcome}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white border border-slate-200 rounded-xl p-4">
            <p className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 mb-1.5">
              Default &amp; Bottleneck Mechanism
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {activeScenario.failureMechanism}
            </p>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl p-4 space-y-2">
            <div>
              <p className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-700 mb-1">
                Primary Creditor Leverage
              </p>
              <p className="text-xs sm:text-sm font-bold text-slate-900">
                {activeScenario.primaryLeverage}
              </p>
            </div>
            <div>
              <p className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 mb-1">
                Statutory &amp; Contractual Hooks
              </p>
              <p className="text-xs text-slate-600 leading-relaxed">
                {activeScenario.statutoryHooks}
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
            HFC Legal &amp; SARFAESI Execution Protocol
          </p>
          <div className="grid grid-cols-1 gap-3">
            {activeScenario.executionSteps.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-xl p-4 flex items-start gap-3"
              >
                <span className="w-6 h-6 rounded-full bg-slate-900 text-white text-xs font-extrabold flex items-center justify-center shrink-0 mt-0.5">
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
      </div>
    </div>
  );
}
