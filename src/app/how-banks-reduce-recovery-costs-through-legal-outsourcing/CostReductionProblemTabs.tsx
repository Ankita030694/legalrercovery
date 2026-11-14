"use client";

import React, { useState } from "react";

interface ProblemTab {
  id: string;
  tabLabel: string;
  title: string;
  costDrain: string;
  legalBasis: string;
  steps: {
    step: string;
    description: string;
  }[];
  statutoryRule: string;
}

const PROBLEMS: ProblemTab[] = [
  {
    id: "personal-loans",
    tabLabel: "Unsecured Personal Loans",
    title: "High-Volume Unsecured Retail Loan Default Portfolios",
    costDrain:
      "Traditional bank recovery relies on fragmented local advocates charging ₹3,500 to ₹7,000 per notice plus case-filing retainers. For tickets between ₹50,000 and ₹5,00,000, high legal spend quickly outstrips potential yield, forcing banks to write off viable debts prematurely.",
    legalBasis:
      "Section 25 of the Payment and Settlement Systems Act, 2007 (PSSA) criminalizes electronic NACH mandate dishonour on par with cheque bounce. Section 63 of Bharatiya Sakshya Adhiniyam, 2023 (BSA) enables instant electronic delivery of demand notices via authenticated email and messaging, generating verifiable delivery logs that compel pre-litigation settlement.",
    steps: [
      {
        step: "Automated Core Banking Ingestion",
        description:
          "Secure SFTP or API ingestion of DPD 60–90 borrower ledgers, auto-populating loan account numbers, principal dues, penal interest, and dishonour memos.",
      },
      {
        step: "Dynamic Advocate Notice Generation",
        description:
          "Algorithmic drafting of Section 25 PSSA and Section 434 Companies Act notices customized per borrower classification within 24 hours.",
      },
      {
        step: "Hybrid Multi-Channel Dispatch",
        description:
          "Simultaneous dispatch via India Post Speed Post with bulk electronic tracking alongside Section 63 BSA compliant electronic delivery.",
      },
    ],
    statutoryRule: "Section 25 PSSA 2007, Section 63 BSA 2023 & Pre-Litigation Lok Adalat",
  },
  {
    id: "credit-cards",
    tabLabel: "Credit Card Charge-Offs",
    title: "Continuous Credit Card Default & Rolling Delinquency",
    costDrain:
      "Credit card accounts have fast charge-off cycles (180 days). Deploying tele-calling agencies incurs high commission fees (12% to 25%) with diminishing returns and acute regulatory non-compliance risks under RBI recovery guidelines.",
    legalBasis:
      "Credit card debts represent liquidated contract balances actionable under Order XXXVII of the Code of Civil Procedure, 1908 (Summary Suit) and binding arbitration clauses under the Arbitration & Conciliation Act, 1996. A formal advocate legal notice establishes pre-litigation default and triggers CIBIL/Experian risk mitigation.",
    steps: [
      {
        step: "Portfolio Segmentation by Balance Tier",
        description:
          "Categorizing accounts into micro (<₹50k), mid-tier (₹50k–₹2.5L), and high-value (>₹2.5L) for differentiated legal escalation tracks.",
      },
      {
        step: "Statutory 15-Day Demand Notice",
        description:
          "Serving advocate notices demanding settlement with clear statement of charges, eliminating usurious interest dispute allegations.",
      },
      {
        step: "Batch Pre-Litigation Settlement Desks",
        description:
          "Channeling responding cardholders to structured OTS (One-Time Settlement) portals before escalating to summary suits or sole arbitration.",
      },
    ],
    statutoryRule: "Order XXXVII CPC 1908 & RBI Master Direction on Credit Card Operations",
  },
  {
    id: "msme-business",
    tabLabel: "MSME & Business Loans",
    title: "Small Business & Enterprise Overdraft Defaults",
    costDrain:
      "SME loan defaults often involve multiple guarantors, hypothecated inventory, and post-dated cheques. Uncoordinated legal filings in multiple local courts multiply advocate fees without synchronizing security enforcement.",
    legalBasis:
      "Section 138 of the Negotiable Instruments Act, 1881 provides strict statutory timelines (15 days notice, 30 days filing window). Concurrently, Section 13(2) of the SARFAESI Act, 2002 allows scheduled banks and notified NBFCs to issue 60-day demand notices against secured assets without court intervention.",
    steps: [
      {
        step: "Dual-Track Statutory Demand",
        description:
          "Simultaneous issuance of Section 138 NI Act notices for dishonoured EMI cheques and Section 13(2) SARFAESI notices against hypothecated securities.",
      },
      {
        step: "Guarantor Impleadment Matrix",
        description:
          "Jointly notifying corporate borrowers, active directors, and personal guarantors under Section 128 Indian Contract Act (co-extensive liability).",
      },
      {
        step: "Fast-Track Section 14 CMM Filings",
        description:
          "Seamless transition to Chief Metropolitan Magistrate (CMM) applications for physical asset possession upon 60-day notice expiry.",
      },
    ],
    statutoryRule: "Section 138 NI Act 1881, Section 13(2) SARFAESI Act 2002 & Section 128 Contract Act",
  },
  {
    id: "auto-vehicle",
    tabLabel: "Vehicle & Equipment Loans",
    title: "Commercial & Private Auto Finance Delinquencies",
    costDrain:
      "Physical vehicle repossession by field agencies carries severe criminal liabilities and reputational hazards following Supreme Court judgments against strong-arm tactics. Traditional litigation in motor accident claims tribunals is painfully slow.",
    legalBasis:
      "Hypothecation agreements contain explicit arbitration and interim protection clauses under Section 9 of the Arbitration & Conciliation Act, 1996 for appointment of court receivers. Statutory demand notices establish lawful grounds before asset seizure.",
    steps: [
      {
        step: "Notice of Impending Hypothecation Enforcement",
        description:
          "Dispatched immediately upon 2 consecutive EMI defaults, formally notifying the borrower of vehicle seizure provisions under the financing contract.",
      },
      {
        step: "Digital Pan-India Delivery Proofs",
        description:
          "Ensuring verified receipt at registered borrower and co-borrower addresses, preventing claims of surprise repossession.",
      },
      {
        step: "Interim Section 9 Receiver Petitions",
        description:
          "Batch filing before commercial courts for appointment of court-authorized receivers to peacefully secure vehicular collateral.",
      },
    ],
    statutoryRule: "Section 9 Arbitration Act 1996 & Apex Court Rulings on Repossession Guidelines",
  },
  {
    id: "fintech-micro",
    tabLabel: "FinTech & Digital Lending",
    title: "App-Based Instant Micro-Loans & Buy-Now-Pay-Later (BNPL)",
    costDrain:
      "With average ticket sizes of ₹5,000 to ₹25,000 across millions of pan-India borrowers, traditional physical legal representation is mathematically impossible. Legal recovery costs would exceed the loan book principal.",
    legalBasis:
      "Digital lending defaults fall under RBI Digital Lending Guidelines 2022 and Section 25 PSSA. Fully automated legal outsourcing enables programmatic dispatch of advocate notices at sub-₹100 marginal cost via electronic communications backed by Section 63 BSA affidavits.",
    steps: [
      {
        step: "Programmatic API Notice Triggers",
        description:
          "Core digital banking engines auto-trigger bulk advocate notice workflows the moment an e-mandate returns 'Insufficient Funds'.",
      },
      {
        step: "Bulk Section 63 BSA Digital Delivery",
        description:
          "Electronic transmission via secure registered email and WhatsApp with real-time delivery audit logging and cryptographic integrity hash.",
      },
      {
        step: "Online Dispute Resolution (ODR) Batching",
        description:
          "Directing willing borrowers to institution-approved ODR conciliation portals for instant restructuring or discounted settlement.",
      },
    ],
    statutoryRule: "RBI Digital Lending Directives, Section 25 PSSA & Section 63 BSA 2023",
  },
];

export default function CostReductionProblemTabs() {
  const [activeTab, setActiveTab] = useState<string>(PROBLEMS[0].id);

  const current = PROBLEMS.find((p) => p.id === activeTab) || PROBLEMS[0];

  return (
    <div className="w-full bg-white border border-slate-200 rounded-2xl p-5 sm:p-7 shadow-sm">
      {/* Tab Navigation Pill Bar */}
      <div className="flex flex-wrap gap-2 pb-4 border-b border-slate-200 mb-6">
        {PROBLEMS.map((tab) => {
          const isActive = tab.id === activeTab;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                isActive
                  ? "bg-slate-900 text-white shadow-md shadow-slate-900/20"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {tab.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Tab Content Area */}
      <div className="space-y-5">
        <div>
          <span className="text-[11px] font-extrabold uppercase tracking-wider text-red-600 bg-red-50 px-2.5 py-1 rounded-md border border-red-200">
            {current.statutoryRule}
          </span>
          <h3 className="text-base sm:text-xl font-bold text-slate-900 mt-2">
            {current.title}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
          <div className="bg-red-50/70 border border-red-200/80 rounded-xl p-4">
            <h4 className="font-extrabold text-red-950 uppercase tracking-wider text-[11px] mb-1">
              Traditional Cost Drain & Inefficiency
            </h4>
            <p className="text-red-900 leading-relaxed">{current.costDrain}</p>
          </div>

          <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-xl p-4">
            <h4 className="font-extrabold text-emerald-950 uppercase tracking-wider text-[11px] mb-1">
              Tech-Driven Outsourced Legal Basis
            </h4>
            <p className="text-emerald-900 leading-relaxed">{current.legalBasis}</p>
          </div>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
            Institutional Execution Pipeline
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {current.steps.map((st, idx) => (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 space-y-1.5"
              >
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-slate-900 text-white text-[11px] font-bold flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <span className="text-xs font-bold text-slate-900 line-clamp-1">
                    {st.step}
                  </span>
                </div>
                <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">
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
