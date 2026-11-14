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
    id: "personal-loans",
    tabLabel: "Unsecured Personal Loans",
    title: "Mass Default in Unsecured Personal Loan (PL) Portfolios",
    cause:
      "Fintech partnerships, instant app disbursements, and relaxed credit underwriting have caused retail personal loan default rates to surge across Indian scheduled commercial banks and NBFCs. Borrowers frequently ignore retail calling agencies (DRAs) once loans cross 90+ DPD. Lacking tangible collateral, traditional repossession remedies are unavailable, leaving lenders facing ballooning loan-loss provisions.",
    legalBasis:
      "Unsecured personal loans are governed by the Indian Contract Act, 1872, the Limitation Act, 1963, and the Payment and Settlement Systems Act, 2007 (Section 25). Law firms utilize automated loan ingestion to dispatch simultaneous demand notices, invoke electronic mandate dishonor provisions under Section 25 PSS Act (which carries criminal penalties identical to Section 138 of the NI Act), and refer cohorts to pre-litigation National Lok Adalats.",
    steps: [
      {
        step: "Core Banking System (CBS) Batch Data Extraction",
        description:
          "Law firm ingestion desks export delinquent account ledgers, borrower mobile numbers, Aadhaar-linked mailing addresses, and digital sanction logs directly from the bank's core banking database.",
      },
      {
        step: "Automated Section 63 BSA Notice Dispatch",
        description:
          "Algorithmically generate and serve 15-day formal advocate legal demand notices via India Post Registered Post, WhatsApp business APIs, and cryptographically verified email delivery receipts.",
      },
      {
        step: "Batch Pre-Litigation Lok Adalat Filing",
        description:
          "For non-responsive borrowers, batch files are submitted to the District Legal Services Authority (DLSA) under Section 19 of the Legal Services Authorities Act, 1987, compelling appearance for conciliation.",
      },
    ],
    statutoryRule: "Section 25 PSS Act 2007, Section 19 LSAA 1987 & Section 63 BSA 2023",
  },
  {
    id: "credit-cards",
    tabLabel: "Credit Card NPA Pools",
    title: "Continuous Defaulters and Revolving Credit Card Charge-Offs",
    cause:
      "Credit card accounts present unique recovery challenges due to compounded revolving interest, high ticket churn, and borrowers changing residential addresses or employment to evade telecalling agencies. Retail collection agencies frequently violate the RBI Master Direction on Fair Practices Code, exposing issuer banks to regulatory penalties and reputational risk.",
    legalBasis:
      "Credit card cardholder agreements constitute enforceable tripartite commercial contracts under the Indian Contract Act, 1872. Under Order 37 of the Code of Civil Procedure (CPC), 1908, law firms can institute summary suits for liquidated sums based on monthly card statements. Furthermore, where auto-debit payments bounce, Section 25 of the PSS Act provides swift criminal deterrence.",
    steps: [
      {
        step: "Comprehensive Skip-Tracing & Credit Bureau Audit",
        description:
          "Law firm analytics cross-reference CIBIL and Experian inquiry logs to uncover newly active mobile numbers, current employer EPF contributions, and verified residential coordinates.",
      },
      {
        step: "Notice of Breach & Final Opportunity for Restructuring",
        description:
          "Serve advocate notices outlining statutory liability, prospective salary attachment risk under Order 21 Rule 48 CPC, and offering structured One-Time Settlement (OTS) options within 15 days.",
      },
      {
        step: "Summary Suit or Institutional Arbitration",
        description:
          "Where arbitration clauses are embedded, initiate expedited institutional arbitration seated in the bank's regional jurisdiction, obtaining binding arbitral awards enforceable as civil court decrees.",
      },
    ],
    statutoryRule: "Order 37 CPC 1908, Arbitration Act 1996 & Section 25 PSS Act",
  },
  {
    id: "msme-overdraft",
    tabLabel: "MSME Overdrafts & Loans",
    title: "Delinquent MSME Cash Credit (CC) Facilities & Business Overdrafts",
    cause:
      "Small business borrowers often divert hypothecated stock or book debts to third-party accounts, leading to sudden NPA classification of working capital limits. In many cases, primary borrowers and personal guarantors dispute liability or claim force majeure, while collateralized hypothecated inventory proves inadequate to satisfy outstanding balances.",
    legalBasis:
      "Under Section 128 of the Indian Contract Act, 1872, the liability of the personal guarantor is co-extensive with that of the principal debtor. Law firms simultaneously invoke Section 138/141 of the Negotiable Instruments Act against drawer directors, invoke personal guarantees, and file pre-institution mediation applications under Section 12A of the Commercial Courts Act, 2015.",
    steps: [
      {
        step: "Dual-Track Notice to Borrowing Entity & Personal Guarantors",
        description:
          "Issue comprehensive statutory demand notices directly to the enterprise, active directors, and personal guarantors, enforcing joint and several liability under Section 128 Contract Act.",
      },
      {
        step: "Pre-Institution Mediation & Commercial Summary Pleading",
        description:
          "File mandatory Section 12A pre-institution commercial mediation. If the borrower fails to appear, immediately initiate summary commercial recovery suits before the designated Commercial Court.",
      },
      {
        step: "Interim Asset Injunctions & Account Attachment",
        description:
          "Seek Order 38 Rule 5 CPC orders for attachment of borrower bank balances and movable commercial assets prior to judgment to prevent deliberate asset siphoning.",
      },
    ],
    statutoryRule: "Section 128 Contract Act, Section 12A Commercial Courts Act & Sec 138 NI Act",
  },
  {
    id: "auto-loans",
    tabLabel: "Vehicle & Auto Loans",
    title: "Delinquent Two-Wheeler, Commercial Vehicle & Auto Portfolios",
    cause:
      "Defaulted automobile loan portfolios suffer from rapid asset depreciation, illegal vehicle transfer without No-Objection Certificates (NOC), and borrower relocation across district and state borders. Physical repossession without judicial oversight frequently triggers police complaints and high-profile consumer commission claims under unfair trade practice norms.",
    legalBasis:
      "Automobile hypothecation agreements vest proprietary security interests under the SARFAESI Act, 2002 (for qualifying thresholds) or Section 9 of the Arbitration and Conciliation Act, 1996. Law firms secure interim court-ordered receiver appointments from civil courts or arbitral tribunals, enabling lawful police-assisted vehicle recovery with complete statutory immunity.",
    steps: [
      {
        step: "Automated Hypothecation Default Legal Notice",
        description:
          "Dispatch formal demand notices calling upon the borrower to cure the EMI default within 15 days or surrender the hypothecated motor vehicle at the bank's nearest regional repository.",
      },
      {
        step: "Section 9 Arbitration Petition for Court Receiver",
        description:
          "Petition the High Court or Principal District Court under Section 9 of the Arbitration Act for ex-parte appointment of an advocate-receiver to take lawful custody of the hypothecated asset.",
      },
      {
        step: "Public Auction Realization & Deficiency Civil Filing",
        description:
          "Execute compliant public auctions following 30-day statutory notice. If auction proceeds fail to cover total dues, immediately file a deficiency claim for the balance against the borrower.",
      },
    ],
    statutoryRule: "Section 9 Arbitration Act 1996, Section 51 Motor Vehicles Act & SARFAESI Act",
  },
];

export default function BankRecoveryProblemTabs() {
  const [activeTab, setActiveTab] = useState(PROBLEMS[0].id);
  const selectedProblem = PROBLEMS.find((p) => p.id === activeTab) || PROBLEMS[0];

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm">
      {/* Tab Navigation Pill Bar */}
      <div
        role="tablist"
        aria-label="Asset Class Portfolios"
        className="flex flex-wrap gap-2 pb-4 border-b border-slate-100"
      >
        {PROBLEMS.map((problem) => {
          const isActive = activeTab === problem.id;
          return (
            <button
              key={problem.id}
              role="tab"
              aria-selected={isActive}
              aria-controls={`panel-${problem.id}`}
              id={`tab-${problem.id}`}
              onClick={() => setActiveTab(problem.id)}
              className={`px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                isActive
                  ? "bg-blue-600 text-white shadow-md shadow-blue-900/20"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {problem.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Selected Tab Content Panel */}
      <div
        role="tabpanel"
        id={`panel-${selectedProblem.id}`}
        aria-labelledby={`tab-${selectedProblem.id}`}
        className="pt-5 space-y-4"
      >
        <div>
          <span className="text-[11px] font-extrabold uppercase tracking-wider text-blue-600 block mb-1">
            Asset Class Portfolio Desk
          </span>
          <h3 className="text-lg sm:text-xl font-bold text-slate-900">
            {selectedProblem.title}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/80 space-y-1.5">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-600">
              Root Portfolio Vulnerability
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {selectedProblem.cause}
            </p>
          </div>

          <div className="p-4 bg-blue-50/60 rounded-xl border border-blue-100 space-y-1.5">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-blue-900">
              Statutory Enforcement Mechanism
            </h4>
            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
              {selectedProblem.legalBasis}
            </p>
          </div>
        </div>

        {/* 3 Step Structured Operational Actions */}
        <div className="space-y-2.5 pt-2">
          <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
            Law Firm Portfolio Playbook Actions
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {selectedProblem.steps.map((st, i) => (
              <div
                key={i}
                className="p-3.5 bg-white rounded-xl border border-slate-200 shadow-2xs space-y-1"
              >
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-blue-600 text-white text-[10px] font-black flex items-center justify-center shrink-0">
                    {i + 1}
                  </span>
                  <strong className="text-xs font-bold text-slate-900 leading-tight">
                    {st.step}
                  </strong>
                </div>
                <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed pt-1">
                  {st.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="p-3 bg-slate-900 text-white rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-2">
            <span className="text-blue-400 font-bold">Governing Statute:</span>
            <span className="text-slate-200 font-mono text-[11px]">
              {selectedProblem.statutoryRule}
            </span>
          </div>
          <Link
            href="/bulk-recovery-cases-all-in-one-affordable-solutions"
            className="text-blue-300 hover:text-white font-semibold underline text-[11px]"
          >
            Review Bulk Ingestion SLAs →
          </Link>
        </div>
      </div>
    </div>
  );
}
