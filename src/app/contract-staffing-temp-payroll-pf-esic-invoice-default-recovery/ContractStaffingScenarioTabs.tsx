"use client";

import React, { useState } from "react";

interface ScenarioTab {
  id: string;
  tabLabel: string;
  title: string;
  cause: string;
  legalBasis: string;
  steps: {
    step: string;
    description: string;
  }[];
  statutoryRule: string;
}

const SCENARIOS: ScenarioTab[] = [
  {
    id: "fabricated-sla-penalties",
    tabLabel: "Fabricated SLA Penalties",
    title: "Client Arbitrarily Debits Invoices Citing Staff Attrition or Headcount Shortfall",
    cause:
      "Enterprise clients facing quarterly budget crunches invent post-facto SLA deductions (e.g., deducting 25% of the total monthly invoice for a temporary 2-day attrition gap), withholding the entire ₹40L–₹80L payroll invoice even though 95% of deployed staff clocked biometric attendance without complaint.",
    legalBasis:
      "Under Sections 73 and 74 of the Indian Contract Act, 1872, liquidated damages or penalty clauses cannot be levied arbitrarily without establishing actual, quantifiable financial loss. Under CLRA Section 21 and the Code on Wages, statutory salary and PF pass-through liabilities are ring-fenced and cannot be set off against disputed performance penalties without mutual written reconciliation.",
    steps: [
      {
        step: "Biometric & Timesheet Freeze",
        description:
          "Extract authenticated client biometric logs, punch records, and supervisor sign-offs under BSA 2023 Section 63 to conclusively refute generalized headcount shortfall allegations.",
      },
      {
        step: "Issuance of Pre-Emptive Rebuttal Notice",
        description:
          "Serve an advocate notice establishing that disputed service markup penalties cannot be applied to wipe out statutory pass-through wage and statutory compliance reimbursements.",
      },
      {
        step: "Statutory Segregation & Demand",
        description:
          "Segregate the undisputed statutory pass-through amount (92% of the bill) and demand immediate release within 7 days, reserving the 8% service markup for commercial mediation.",
      },
    ],
    statutoryRule: "Sections 73 & 74 Indian Contract Act, 1872 & CLRA Section 21",
  },
  {
    id: "pass-through-reimbursement-denial",
    tabLabel: "Pass-Through Default",
    title: "Agency Paid Wages, EPF & ESIC Out-of-Pocket; Client Refuses Statutory Reimbursement",
    cause:
      "The staffing agency disbursed employee wages via NEFT on the 7th, filed EPFO ECR and paid PF on the 15th, and remitted ESIC on the 15th out of its own bank overdraft limit. The client defaults on the composite invoice, leaving the contractor trapped with mounting bank interest and acute cash starvation.",
    legalBasis:
      "Section 21(4) of the Contract Labour (Regulation and Abolition) Act, 1970 expressly fixes ultimate responsibility for employee wages on the Principal Employer. When an agency fulfills this duty, it holds a statutory right of subrogation and indemnity under Section 69 and 70 of the Indian Contract Act, 1872, entitling it to full reimbursement from the principal who enjoyed the benefit of the deployed labour.",
    steps: [
      {
        step: "Statutory Proof Compilation",
        description:
          "Compile EPFO TRRN payment challans, ESIC contribution statements, and bank NEFT payroll transaction audit trails demonstrating out-of-pocket statutory disbursement.",
      },
      {
        step: "Principal Employer Liability Notice",
        description:
          "Serve a formal statutory legal notice directly citing CLRA s.21(4), notifying the client's Board of Directors that failure to reimburse constitutes unjust enrichment and statutory violation.",
      },
      {
        step: "Simultaneous MSMED & Criminal Notice",
        description:
          "File under MSMED Act Section 18 for mandatory 3x RBI compound interest and notify directors under Section 405 IPC / Section 316 BNS for criminal breach of trust regarding deducted statutory amounts.",
      },
    ],
    statutoryRule: "CLRA s.21(4), Contract Act ss.69/70 & MSMED Act s.16",
  },
  {
    id: "staff-withdrawal-demobilization",
    tabLabel: "Demobilization & Walkout",
    title: "Agency Demobilizes Deployed Staff; Client Threatens Retaliatory Damages Suit",
    cause:
      "After 60 days of unpaid payroll bills, the staffing agency halts deployment or withdraws contract personnel from the client's factory or IT facility. The defaulting client threatens a counter-suit for business interruption, project abandonment, and breach of agreement.",
    legalBasis:
      "Under Section 51, 52, and 54 of the Indian Contract Act, 1872 (reciprocal promises), a party cannot demand performance when it has fundamentally breached its primary condition precedent of timely payroll advance/reimbursement. High Courts have repeatedly held that commercial contractors cannot be forced into bonded labour or forced capital financing when the principal employer is in payment default.",
    steps: [
      {
        step: "Contractual Cure Period Notice",
        description:
          "Serve a formal 7-day cure notice explicitly conditioning continued staffing deployment on immediate clearance of overdue payroll arrears and statutory escrows.",
      },
      {
        step: "Structured Demobilization Protocol",
        description:
          "Execute orderly staff withdrawal with documented handover reports, device returns, and security clearance certificates to prevent false allegations of intellectual property theft or site damage.",
      },
      {
        step: "Immediate Section 9 / Commercial Suit Action",
        description:
          "Simultaneously initiate urgent pre-institution mediation under Section 12A of the Commercial Courts Act or file for an interim injunction restraining the client from invoking performance bank guarantees.",
      },
    ],
    statutoryRule: "Sections 51, 52 & 54 Indian Contract Act, 1872 & Commercial Courts Act",
  },
  {
    id: "ibc-insolvency-preemption",
    tabLabel: "Impending Insolvency",
    title: "Client Approaching Default / Asset Stripping & 10-Day IBC Section 8 Pre-Emption",
    cause:
      "The corporate client is defaulting across multiple vendors, showing signs of financial distress, restructuring, or promoter asset-siphoning. The staffing agency's overdue payroll bill exceeds ₹1 Crore, creating an immediate risk of uncollectible debt if another creditor drags the client into CIRP first.",
    legalBasis:
      "Staffing fees and reimbursed payroll outlays constitute an indisputable 'Operational Debt' under Section 5(21) of the Insolvency and Bankruptcy Code, 2016. Under IBC Section 8, the staffing company can serve a statutory 10-day Demand Notice (Form 3/4). If the corporate debtor fails to prove a pre-existing dispute or clear dues within 10 days, a Section 9 CIRP petition can be filed before the NCLT.",
    steps: [
      {
        step: "Pre-Existing Dispute Audit",
        description:
          "Screen all client correspondence to verify there are zero valid written quality disputes raised prior to the invoice due date, satisfying the strict Mobilox Innovations threshold.",
      },
      {
        step: "Service of Statutory Form 3 Notice",
        description:
          "Serve statutory Demand Notice in Form 3 under Section 8 of the IBC with itemized unpaid payroll invoices, timesheet proofs, and EPFO payment vouchers.",
      },
      {
        step: "Corporate Settlement or NCLT Section 9 Filing",
        description:
          "Corporate debtors almost always prioritize settlement of staffing payroll notices within the 10-day window to avoid losing management control and boardroom dissolution at the NCLT.",
      },
    ],
    statutoryRule: "Sections 8 & 9 Insolvency and Bankruptcy Code (IBC), 2016",
  },
];

export default function ContractStaffingScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(SCENARIOS[0].id);

  const currentScenario = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full">
      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-2 pb-4 border-b border-slate-200">
        {SCENARIOS.map((tab) => {
          const isActive = tab.id === activeTab;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                isActive
                  ? "bg-[#DC2626] text-white shadow-md shadow-red-900/20"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              {tab.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Tab Content Box */}
      <div className="mt-5 p-5 sm:p-6 bg-slate-50 border border-slate-200 rounded-2xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-200">
          <h3 className="text-base sm:text-lg font-bold text-slate-900">
            {currentScenario.title}
          </h3>
          <span className="inline-block px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-red-100 text-red-800 self-start sm:self-auto">
            {currentScenario.statutoryRule}
          </span>
        </div>

        {/* Commercial Failure Cause */}
        <div className="mb-4">
          <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
            Commercial Failure Mode &amp; Debtor Tactic
          </p>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            {currentScenario.cause}
          </p>
        </div>

        {/* Statutory Legal Basis */}
        <div className="mb-5 p-3.5 bg-white border border-slate-200 rounded-xl">
          <p className="text-[11px] font-bold uppercase tracking-wider text-[#DC2626] mb-1">
            Statutory Legal Foundation &amp; Creditor Advantage
          </p>
          <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
            {currentScenario.legalBasis}
          </p>
        </div>

        {/* 3 Action Steps */}
        <div>
          <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2">
            Standard Operating Recovery Steps
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {currentScenario.steps.map((st, idx) => (
              <div
                key={idx}
                className="bg-white p-3.5 rounded-xl border border-slate-200 flex flex-col justify-start"
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="w-5 h-5 rounded-full bg-[#DC2626] text-white text-[11px] font-bold flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <span className="text-xs font-bold text-slate-900 line-clamp-1">
                    {st.step}
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {st.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
