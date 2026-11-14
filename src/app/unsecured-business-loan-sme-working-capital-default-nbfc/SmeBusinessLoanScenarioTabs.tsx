"use client";

import React, { useState } from "react";

interface SmeScenario {
  id: string;
  tabLabel: string;
  ticketBand: string;
  title: string;
  failureMechanism: string;
  dualTrackAction: string;
  statutoryHooks: string;
  executionSteps: {
    step: string;
    detail: string;
  }[];
  recoveryLeverage: string;
}

const SME_SCENARIOS: SmeScenario[] = [
  {
    id: "edi-qr-switch",
    tabLabel: "EDI / QR Switch",
    ticketBand: "₹5L – ₹35L Merchant Cash Advance",
    title: "POS / UPI Daily-Sweep (EDI) Borrower Switches QR to Another Bank",
    failureMechanism:
      "The merchant continues brisk daily retail sales but swaps out the lender-mapped POS terminal or UPI QR code for a third-party aggregator or family-owned current account, starving the daily EDI escrow sweep while claiming 'business slowdown.'",
    dualTrackAction: "Simultaneous PSS Act s.25 Criminal Notice + Commercial Court Order 38 Rule 5",
    statutoryHooks:
      "Section 25 PSS Act, 2007 (e-NACH/EDI bounce); Section 12A Commercial Courts Act (urgent interim relief); CPC Order XXXVIII Rule 5 (attachment of alternate bank & aggregator payouts); BNS s.316/s.318 (criminal breach of trust/cheating where escrow covenant is breached).",
    executionSteps: [
      {
        step: "Day 1–5 Bounce: Capture Aggregator & GST Continuity Proof",
        detail:
          "Pull NPCI e-NACH / EDI dishonour logs alongside live GSTN GSTR-1/3B filing status or physical store UPI QR evidence showing active daily turnover routed away from the designated escrow.",
      },
      {
        step: "Day 7: Dual Advocate Notice (PSS s.25 + Escrow Covenant Recall)",
        detail:
          "Serve a 15-day statutory demand under Section 25 PSS Act on the borrower and all directors/partners, simultaneously putting the payment aggregator on formal notice of the prior escrow assignment.",
      },
      {
        step: "Day 22: Urgent Commercial Suit (s.12A Bypass) + Order 38 Rule 5",
        detail:
          "File an Order XXXVII summary suit coupled with an Order XXXVIII Rule 5 application seeking urgent attachment before judgment of the newly opened current account and daily PG settlement pool.",
      },
    ],
    recoveryLeverage: "High Leverage: Threat of freezing live daily cashflow forces 48–72 hour settlement.",
  },
  {
    id: "active-gstin-default",
    tabLabel: "Active GSTIN + EMI Stop",
    ticketBand: "₹10L – ₹50L GST Working Capital Loan",
    title: "GST Turnover Active & GSTR-1 Rising, Yet Monthly EMIs Defaulted",
    failureMechanism:
      "A B2B trader or manufacturer files regular monthly GST returns and raises invoices on corporate buyers, yet stops paying the NBFC's ₹10L–₹50L unsecured working capital EMI and ignores telecalling.",
    dualTrackAction: "e-NACH s.25 Prosecution + Order XXI Rule 46 / Order 38 Garnishee on B2B Debtors",
    statutoryHooks:
      "Section 25 PSS Act / Section 138 NI Act; CPC Order XXXVII Summary Suit; CPC Order XXXVIII Rule 5 & Order XXI Rule 46 (Garnishee notice to the borrower's B2B customers / debtors).",
    executionSteps: [
      {
        step: "Cross-Verify GSTR-2B / E-Way Bill Activity & Receivables",
        detail:
          "Document active business operations via public GSTIN filing cadence and known anchor/B2B buyer relationships to defeat any borrower plea of insolvency or force majeure.",
      },
      {
        step: "Issue Composite Loan Recall + Personal Guarantee Invocation",
        detail:
          "Accelerate the entire principal + penal interest and invoke the Promoter/Director Personal Guarantee jointly, triggering 30-day CICRA bureau reporting across both entity and individual PANs.",
      },
      {
        step: "Move for Garnishee Attachment of B2B Receivables",
        detail:
          "Under Order XXXVIII Rule 5 (pre-decree) or Order XXI Rule 46 (post-award/decree), seek court restraint prohibiting identified B2B buyers from paying the borrower directly, redirecting receivables into court/lender escrow.",
      },
    ],
    recoveryLeverage: "Strong B2B Pressure: Corporate buyers halt vendor payments upon receiving garnishee notice.",
  },
  {
    id: "director-pg-corporate-veil",
    tabLabel: "Director PG + s.141",
    ticketBand: "₹15L – ₹75L Pvt Ltd / LLP Term Loan",
    title: "Pvt Ltd / LLP Borrower Cites 'Limited Liability' to Evade Repayment",
    failureMechanism:
      "Promoters of a distressed Private Limited SME or LLP abandon the entity's bank account, transfer inventory to a sister concern, and claim personal immunity behind the corporate veil.",
    dualTrackAction: "Section 141 NI Act / s.25 PSS Vicarious Director Liability + Personal Guarantee Suit",
    statutoryHooks:
      "Section 25(5) PSS Act read with Section 141 NI Act (vicarious criminal liability of signatory & managing directors); Section 128 Indian Contract Act, 1872 (co-extensive liability of surety/personal guarantor).",
    executionSteps: [
      {
        step: "Pinpoint Signatory & Key Managerial Personnel (KMP)",
        detail:
          "Extract MCA DIR-12 / board resolution and e-NACH mandate signatory records to implead the Managing Director, authorized signatory, and active directors in the Section 25 / Section 138 complaint.",
      },
      {
        step: "Invoke Co-Extensive Personal Guarantee Under Section 128 Contract Act",
        detail:
          "Serve an independent statutory demand on the personal guarantor's residential address and personal email/WhatsApp—under Section 128, the NBFC need not exhaust remedies against the company first.",
      },
      {
        step: "Seek Personal Asset Disclosure & Attachment",
        detail:
          "In Commercial Court or Arbitration s.9/s.17, seek affidavit disclosure of personal bank balances, demat holdings, and unencumbered assets of the guarantor to prevent dissipation.",
      },
    ],
    recoveryLeverage: "Personal Exposure: Non-bailable warrant risk in s.25/s.138 + personal CIBIL hit compels promoter settlement.",
  },
  {
    id: "bulk-sme-tranche",
    tabLabel: "Bulk SME Portfolio",
    ticketBand: "50 – 2,500 SME Accounts (₹5L–₹75L)",
    title: "Scaling Dual Criminal + Commercial Notices Across Delinquent SME Cohorts",
    failureMechanism:
      "Mid-market NBFCs with 200+ delinquent ₹5L–₹75L SME loans cannot manually brief local trial advocates for each account, causing 90+ DPD accounts to cross limitation or dissipate cash.",
    dualTrackAction: "CSV-Driven Tri-Channel Statutory Notices -> Selective Order 37 / s.29B Batching",
    statutoryHooks:
      "BSA 2023 s.63 electronic service certification; Section 25 PSS Act 15-day statutory notice; Section 29B Fast-Track Institutional Arbitration; Commercial Courts Act s.12A pre-institution mediation where non-urgent.",
    executionSteps: [
      {
        step: "Wave-1: Batch CSV Ingestion & Tri-Channel Advocate Dispatch",
        detail:
          "Upload defaulted SME loan master data (sanction date, disbursedAmount, e-NACH bounce date, guarantor details) to dispatch advocate-vetted Section 25 + Loan Recall notices via Email, WhatsApp, and Speed Post RPAD.",
      },
      {
        step: "Wave-2: Triage Active GSTIN & High-Propensity Accounts",
        detail:
          "Segment non-payers who remain GST-active or have bounced security PDCs for immediate Section 25 / Section 138 Magistrate filing and Commercial Court Order 37 / Order 38 Rule 5 escalation.",
      },
      {
        step: "Wave-3: Fast-Track s.29B ODR for Remaining Unsecured Cohort",
        detail:
          "Route residual accounts carrying arbitration clauses to neutral institutional ODR under Section 29B for a 90–180 day decree-equivalent Section 36 award.",
      },
    ],
    recoveryLeverage: "Portfolio ROI: Resolves 35%–55% of active SMEs at notice stage before court fees are spent.",
  },
];

export default function SmeBusinessLoanScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(SME_SCENARIOS[0].id);
  const current = SME_SCENARIOS.find((s) => s.id === activeTab) || SME_SCENARIOS[0];

  return (
    <div className="w-full">
      {/* Tab Buttons */}
      <div
        role="tablist"
        aria-label="SME and Merchant Cash Advance default scenarios"
        className="flex flex-wrap gap-2 mb-5 border-b border-slate-200 pb-3"
      >
        {SME_SCENARIOS.map((scenario) => {
          const isSelected = scenario.id === activeTab;
          return (
            <button
              key={scenario.id}
              type="button"
              role="tab"
              aria-selected={isSelected}
              onClick={() => setActiveTab(scenario.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                isSelected
                  ? "bg-[#DC2626] text-white shadow-sm"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {scenario.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Panel */}
      <div
        role="tabpanel"
        className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-5"
      >
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-slate-900 text-white">
            {current.ticketBand}
          </span>
          <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
            {current.recoveryLeverage}
          </span>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2">
            {current.title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            <strong className="text-slate-900">Operational Bottleneck: </strong>
            {current.failureMechanism}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white border border-slate-200 rounded-xl p-4">
            <p className="text-[11px] font-bold uppercase tracking-wider text-[#DC2626] mb-1">
              Recommended Dual-Track Action
            </p>
            <p className="text-xs sm:text-sm font-bold text-slate-900">
              {current.dualTrackAction}
            </p>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl p-4">
            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
              Statutory &amp; Procedural Hooks
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {current.statutoryHooks}
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
            Step-by-Step NBFC Execution Protocol
          </p>
          <div className="space-y-2.5">
            {current.executionSteps.map((item, idx) => (
              <div
                key={item.step}
                className="flex items-start gap-3 bg-white border border-slate-200 rounded-xl p-3.5"
              >
                <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <div>
                  <p className="text-xs sm:text-sm font-bold text-slate-900">
                    {item.step}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 mt-0.5 leading-relaxed">
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
