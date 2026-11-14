"use client";

import React, { useState } from "react";
import Link from "next/link";

interface ProblemTab {
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

const PROBLEMS: ProblemTab[] = [
  {
    id: "unsecured-personal-loans",
    tabLabel: "Unsecured Personal Loans",
    title: "Unsecured Personal Loans & High-Velocity Digital Lending Defaults",
    cause:
      "Digital lending apps and scheduled banks disburse unsecured personal credit without physical hypothecation. When borrowers experience income shocks or willfully default after multiple EMI cycles, internal call centers and tele-calling agencies hit an impasse. Without statutory legal pressure, delinquent borrowers ignore WhatsApp reminders and email nudges, accelerating provisioning charges toward full NPA write-offs under RBI Prudential Framework norms.",
    legalBasis:
      "Under Section 73 and Section 74 of the Indian Contract Act, 1872, read with the Bankers' Books Evidence Act, 1891, lenders hold legally enforceable claims for accelerated principal, agreed contractual interest, and penal charges. Issuing an advocate statutory demand notice establishes breach of contract and triggers statutory pre-litigation conciliation or Order 37 summary proceedings.",
    steps: [
      {
        step: "Automated Portfolio Ingestion & Ledger Validation",
        description:
          "Audit loan agreements, timestamped e-signatures, repayment schedules, and certified ledger statements establishing the exact accelerated outstanding balance.",
      },
      {
        step: "Omnichannel Advocate Statutory Demand Notice",
        description:
          "Issue formal 15-day statutory notices concurrently via India Post Speed Post, WhatsApp, and registered email with Section 63 BSA audit trail certificates.",
      },
      {
        step: "Pre-Litigation Lok Adalat & Summary Suit Escalation",
        description:
          "Refer responsive borrowers to National Lok Adalat for immediate compromise decrees, or file Order 37 CPC summary suits for non-responsive willful defaulters.",
      },
    ],
    statutoryRule: "Indian Contract Act 1872 (s.73), BSA 2023 (s.63) & Order 37 CPC",
  },
  {
    id: "credit-cards",
    tabLabel: "Credit Card NPAs",
    title: "Revolving Credit Card Outstandings & Chronic Default Portfolios",
    cause:
      "Credit card cardholders frequently accumulate substantial balances across multiple billing cycles, minimum amount due (MAD) payments stall, and cards transition into 90+ DPD (Days Past Due). Borrowers exploit uncollateralized credit limits, disputing finance charges, over-limit fees, or claiming financial distress, while traditional collection agencies face regulatory scrutiny over harassment guidelines.",
    legalBasis:
      "Cardholder card agreements govern revolving credit debt under Section 2(h) of the Indian Contract Act, 1872. While banks cannot levy compounding usurious interest outside RBI guidelines, the principal balance and statutory interest are fully recoverable. A formal advocate legal notice disarms frivolous fee disputes and establishes a clean limitation trail under Article 14 of the Limitation Act, 1963.",
    steps: [
      {
        step: "Card Billing Cycle & Statement Audit",
        description:
          "Consolidate itemized monthly credit card billing statements, charge-off records, and payment reconciliation logs verifying total outstanding exposure.",
      },
      {
        step: "Advocate Notice with Structured Settlement Offers",
        description:
          "Serve formal advocate notices detailing principal liability while offering controlled one-time settlement (OTS) terms or statutory 15-day settlement demands.",
      },
      {
        step: "Institutional Arbitration or Civil Recovery Suit",
        description:
          "Invoke unilateral or institutional arbitration clauses where applicable, or initiate summary civil recovery suits before the jurisdictional commercial bench.",
      },
    ],
    statutoryRule: "Limitation Act 1963 (Art. 14), RBI Fair Practices Code & Arbitration Act 1996",
  },
  {
    id: "msme-commercial",
    tabLabel: "MSME & Business Dues",
    title: "MSME Commercial Term Loans, Working Capital & Vendor Credit Delinquencies",
    cause:
      "Enterprise borrowers and commercial entities default on working capital facilities, overdrafts, and equipment finance due to operational distress, supply chain disruptions, or diverting receivables. Fragmented recovery efforts through separate collection agents result in uncoordinated collateral tracking and missed statutory limitation deadlines.",
    legalBasis:
      "Commercial loans exceeding ₹20 Lakhs against secured collateral fall under the SARFAESI Act, 2002, and Debt Recovery Tribunals (DRT) under the RDDBFI Act, 1993. For unsecured business loans, summary commercial suits under the Commercial Courts Act, 2015, and Section 9 IBC corporate insolvency demand notices provide swift enforcement avenues.",
    steps: [
      {
        step: "Security Interest & Collateral Verification",
        description:
          "Verify CERSAI registration, corporate ROC charges, mortgage deeds, hypothecation agreements, and personal/corporate guarantee deeds.",
      },
      {
        step: "SARFAESI Section 13(2) Demand & Commercial Notices",
        description:
          "Issue formal 60-day SARFAESI statutory demand notices for secured debt, accompanied by commercial legal notices for corporate guarantors.",
      },
      {
        step: "DRT Original Application (OA) / Section 14 Physical Possession",
        description:
          "File Original Applications before DRT benches or petition Chief Metropolitan Magistrates (CMM/DM) under Section 14 SARFAESI for physical asset takeover.",
      },
    ],
    statutoryRule: "SARFAESI Act 2002 (s.13, s.14) & Recovery of Debts (RDDBFI) Act 1993",
  },
  {
    id: "cheque-nach-bounce",
    tabLabel: "NACH & Cheque Bounce",
    title: "Section 138 NI Act & Section 25 PSSA (Electronic NACH / e-Mandate Bounce)",
    cause:
      "Automated Clearing House (NACH) mandates and post-dated cheques bounce repeatedly due to 'Insufficient Funds' or 'Account Frozen'. Borrowers deliberately stop automated debits to delay debt servicing, creating systematic retail portfolio leakage across thousands of recurring loan schedules.",
    legalBasis:
      "Cheque dishonour triggers criminal liability under Section 138 of the Negotiable Instruments Act, 1881, carrying up to 2 years imprisonment and twice the cheque amount in fines. Similarly, automated NACH / e-mandate dishonour triggers statutory criminal proceedings under Section 25 of the Payment and Settlement Systems Act, 2007 (PSSA), with identical penalties.",
    steps: [
      {
        step: "Bank Return Memo & Dishonour Timestamp Verification",
        description:
          "Capture bank return memos with return codes (e.g., Code 01 Insufficient Funds) within the strict 30-day statutory limitation window.",
      },
      {
        step: "Statutory 30-Day Advocate Demand Notice Dispatch",
        description:
          "Dispatch advocate statutory notices under Section 138(b) NI Act or Section 25 PSSA demanding full payment within 15 days of notice receipt.",
      },
      {
        step: "Filing Criminal Complaint in Judicial Magistrate Court",
        description:
          "Institute Section 138 criminal complaints before the Jurisdictional Metropolitan Magistrate within 30 days of the notice cure window expiry.",
      },
    ],
    statutoryRule: "Negotiable Instruments Act (s.138) & Payment and Settlement Systems Act (s.25)",
  },
];

export default function EndToEndRecoveryProblemTabs() {
  const [activeTabId, setActiveTabId] = useState<string>(PROBLEMS[0].id);
  const activeProblem = PROBLEMS.find((p) => p.id === activeTabId) || PROBLEMS[0];

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-xs">
      {/* Tab Navigation Controls */}
      <div
        role="tablist"
        aria-label="Recovery Asset Classes"
        className="flex flex-wrap gap-2 border-b border-slate-200 pb-3 mb-5"
      >
        {PROBLEMS.map((problem) => {
          const isActive = problem.id === activeTabId;
          return (
            <button
              key={problem.id}
              role="tab"
              aria-selected={isActive}
              aria-controls={`panel-${problem.id}`}
              id={`tab-${problem.id}`}
              onClick={() => setActiveTabId(problem.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-150 cursor-pointer ${
                isActive
                  ? "bg-slate-900 text-white shadow-xs"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              {problem.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Tab Content Panel */}
      <div
        role="tabpanel"
        id={`panel-${activeProblem.id}`}
        aria-labelledby={`tab-${activeProblem.id}`}
        className="space-y-5 animate-in fade-in-50 duration-200"
      >
        <div>
          <span className="text-[11px] font-extrabold uppercase tracking-wider text-red-600 bg-red-50 border border-red-200 px-2.5 py-1 rounded-md inline-block mb-2">
            Asset Class Strategic Recovery Rail
          </span>
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
            {activeProblem.title}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-700">
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
            <strong className="text-slate-900 font-bold block text-sm flex items-center gap-1.5">
              <span className="text-red-500">⚠</span> Default Bottleneck &amp; Operational Drag:
            </strong>
            <p className="leading-relaxed">{activeProblem.cause}</p>
          </div>

          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
            <strong className="text-slate-900 font-bold block text-sm flex items-center gap-1.5">
              <span className="text-blue-500">⚖</span> Statutory Framework &amp; Judicial Clout:
            </strong>
            <p className="leading-relaxed">{activeProblem.legalBasis}</p>
          </div>
        </div>

        {/* 3 Escalation Action Steps */}
        <div className="space-y-3">
          <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900">
            End-to-End Institutional Action Sequence:
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {activeProblem.steps.map((st, idx) => (
              <div
                key={idx}
                className="p-3.5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-1.5"
              >
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-slate-900 text-white font-extrabold text-[10px] flex items-center justify-center shrink-0">
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

        {/* Bottom Rule Strip */}
        <div className="p-3 bg-slate-900 text-slate-200 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-2">
            <span className="text-red-400 font-bold">Governing Statutes:</span>
            <span className="font-mono text-white text-[11px]">{activeProblem.statutoryRule}</span>
          </div>
          <Link
            href="/bulk-recovery-cases-all-in-one-affordable-solutions"
            className="text-xs font-bold text-sky-400 hover:text-sky-300 underline inline-flex items-center gap-1 self-start sm:self-auto"
          >
            Explore bulk portfolio onboarding →
          </Link>
        </div>
      </div>
    </div>
  );
}
