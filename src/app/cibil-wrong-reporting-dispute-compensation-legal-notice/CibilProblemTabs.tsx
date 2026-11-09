"use client";

import React, { useState } from "react";

interface ProblemScenario {
  id: string;
  tabLabel: string;
  badge: string;
  title: string;
  odds: string;
  cause: string;
  legalBasis: string;
  statutoryRule: string;
  steps: {
    step: string;
    description: string;
  }[];
}

const PROBLEMS: ProblemScenario[] = [
  {
    id: "phantom-loan-identity-theft",
    tabLabel: "Phantom Loan / Fraud",
    badge: "Identity Theft & Fake Loans",
    title: "Unknown Loan or Credit Card Tagged to Your PAN (Impersonation / Synthetic ID)",
    odds: "95% Rectification Success with Police GD / Cyber Complaint",
    cause:
      "Fraudulent fintech instant lending apps or compromised KYC documents were used by an unauthorized third party to open a credit facility in your name. You discover an active loan with unpaid EMIs or default status on your CIBIL report that you never applied for, signed, or received disbursement for.",
    legalBasis:
      "Section 21 of the Credit Information Companies (Regulation) Act, 2005 (CICRA 2005) mandates that credit institutions must ensure accuracy and fidelity of credit information. Lending without strict biometric or paperless KYC compliance under RBI Master Directions on KYC renders the lending bank strictly liable for unauthorized data reporting.",
    statutoryRule: "CICRA 2005 §21 + RBI Master Direction on KYC & Digital Lending",
    steps: [
      {
        step: "Download Full CCR & Log Cyber Complaint",
        description:
          "Download your full official Credit Information Report (CIR) from CIBIL/Experian showing the lending member, account number, opening date, and disbursed amount. File an immediate complaint on cybercrime.gov.in (National Cyber Crime Portal) or at the local cyber cell for identity impersonation.",
      },
      {
        step: "Raise Dual Dispute with Bureau and Lending Bank",
        description:
          "Raise an online dispute ticket on CIBIL Consumer Portal quoting the Account Number and select 'Account Does Not Belong to Me'. Simultaneously email the Principal Nodal Officer (PNO) of the reporting bank attaching the Cyber Complaint acknowledgement and stating that you never maintained an account with them.",
      },
      {
        step: "Serve Advocate Statutory Demand Notice",
        description:
          "If the bank fails to purge the account within 21 days or requests endless physical branch visits, serve a formal advocate legal demand notice demanding deletion of the tradeline and statutory ₹100/day compensation under RBI Circular DoR.FIN.REC.48/20.16.003/2023-24.",
      },
    ],
  },
  {
    id: "closed-loan-reported-overdue",
    tabLabel: "Closed Loan Overdue",
    badge: "Clerical Bank Inaction",
    title: "Loan Fully Repaid or Card Closed with NOC, but Still Reported as Overdue",
    odds: "99% Success When Backed by Bank NOC / Repayment Statement",
    cause:
      "You repaid your personal loan, home loan, or vehicle loan in full and received a formal No Objection Certificate (NOC) / No Dues Certificate (NDC). However, the bank's central operations failed to upload the updated monthly Member Data File (MDF) to CIBIL, leaving the loan open with escalating overdue amounts and ballooning DPD counts.",
    legalBasis:
      "Under RBI Master Direction - Credit Information Companies (Amendment) Directions, 2023, banks must update credit records with bureaus at least on a monthly basis, or at shorter intervals not exceeding 15 days. Failing to record closure after full realization of dues constitutes gross deficiency of service under Section 2(11) of the Consumer Protection Act, 2019.",
    statutoryRule: "RBI CIC Directions 2023 §7 + Section 2(11) CPA 2019",
    steps: [
      {
        step: "Collate Repayment Proofs and Bank NOC",
        description:
          "Gather your stamped No Dues Certificate (NDC), closure letter, and bank account statement highlighting the final payoff transaction and clearance.",
      },
      {
        step: "Lodge Formal Grievance with Bank Grievance Redressal Officer (GRO)",
        description:
          "Submit a written grievance to the bank's GRO. Explicitly state the account number, closure date, and attach the NDC. Demand immediate transmission of a correction file to all four CICs (CIBIL, Experian, Equifax, CRIF).",
      },
      {
        step: "Clock the 30-Day RBI Deadline for ₹100/Day Penalty",
        description:
          "From the date of your grievance, the bank has 21 days to update the bureau, and the bureau has 9 days to reflect the correction. If unrectified on day 31, issue an advocate notice claiming accrued daily penalties and damages for tarnished credit rating.",
      },
    ],
  },
  {
    id: "wrong-dpd-late-payment",
    tabLabel: "Wrong Late Payment / DPD",
    badge: "Erroneous Days Past Due",
    title: "Timely Paid EMI / Bill Erroneously Reported as 30+ / 60+ / 90+ DPD Overdue",
    odds: "92% Success with Bank Clearance Statement & Timestamped Receipts",
    cause:
      "You cleared your monthly EMI or credit card bill on or before the due date via UPI, Net Banking, or NACH. Due to a technical failure or gateway reconciliation delay on the bank's side, the payment was credited 2 days late. The automated CBS system penalized you and reported a 30+ DPD (Days Past Due) flag to CIBIL, causing an immediate 40–80 point credit score drop.",
    legalBasis:
      "RBI guidelines on harmonisation of turnaround times mandate that if a debit occurs on or before the due date, the merchant/bank cannot penalize the customer for back-office settlement lags. Reporting a timely-paid borrower as delinquent violates the fidelity principles under Section 21(1) CICRA 2005.",
    statutoryRule: "CICRA 2005 §21(1) & RBI Fair Practices Code for Lenders",
    steps: [
      {
        step: "Secure Bank Debiting Proof and Payment Reference",
        description:
          "Obtain an official bank account statement showing the exact date and time your payment was debited, along with the UTR or IMPS reference number.",
      },
      {
        step: "Initiate Bureau Dispute with Payment Reference",
        description:
          "Log a dispute on CIBIL under 'Payment History / DPD'. Enter the specific month where '030' or '060' is wrongly recorded and attach the payment proof.",
      },
      {
        step: "Demand Score Restoration & Reversal Notice",
        description:
          "Instruct counsel to dispatch an advocate legal notice requiring the bank to roll back the erroneous DPD flag, furnish an updated MDF to CIBIL, and compensate for wrongful credit impairment.",
      },
    ],
  },
  {
    id: "settled-marked-written-off",
    tabLabel: "Settled vs Written-Off",
    badge: "Settlement Discrepancy",
    title: "One-Time Settlement (OTS) Completed, but Reported as 'Written Off' or 'Suit Filed'",
    odds: "88% Success Requiring Enforcement of Written OTS Sanction Terms",
    cause:
      "You entered into a negotiated One-Time Settlement (OTS) with the bank or asset reconstruction company (ARC), paid the agreed compromise amount, and received a settlement letter. Yet, the bank reported the remaining balance as 'Written Off' or 'Post-Write-Off Settled' without indicating the agreed compromise, or left derogatory 'Suit Filed' remarks intact.",
    legalBasis:
      "While an OTS does permit a remark of 'Settled', the bank cannot maliciously maintain 'Willful Default', 'Suit Filed', or ongoing overdue balances after executing a mutual compromise agreement. Breach of OTS covenants gives rise to actionable claims under contract law and the Consumer Protection Act.",
    statutoryRule: "Indian Contract Act §63 & Section 2(47) CPA 2019 Unfair Trade Practice",
    steps: [
      {
        step: "Verify Sanction Letter Terms & Payment Slips",
        description:
          "Review the written OTS approval letter issued by the competent bank authority. Ensure all agreed tranches were paid within the stipulated deadline and retain counterfoils.",
      },
      {
        step: "Challenge Incorrect Tradeline Classification",
        description:
          "Serve a demand calling upon the bank to expunge 'Suit Filed' or active overdue balances, ensuring the status strictly reflects the agreed OTS terms.",
      },
      {
        step: "Escalate to Banking Ombudsman / DCDRC",
        description:
          "If the bank refuses to modify derogatory remarks that contradict the written OTS terms, escalate to the RBI Ombudsman under the Integrated Ombudsman Scheme 2021 for deficiency in credit reporting.",
      },
    ],
  },
  {
    id: "clerical-pan-mixup",
    tabLabel: "Clerical PAN Mix-Up",
    badge: "Typographical Identity Clashing",
    title: "Another Individual's Default Tagged to Your File Due to Common Name or PAN Typo",
    odds: "96% Rectification Success Through Demographic Verification",
    cause:
      "Due to a manual data-entry error by branch clerical staff when onboarding a borrower with a similar name, another person's PAN or Aadhaar was punched incorrectly, linking their NPA loan or default history to your CIBIL control file.",
    legalBasis:
      "Section 21(3) of CICRA 2005 expressly obligates both the credit institution and credit information company to segregate and correct misattributed records upon being notified of the identity clash.",
    statutoryRule: "CICRA 2005 §21(3) & RBI Master Direction - CIC (Amendment) Directions",
    steps: [
      {
        step: "Cross-Check Demographic Data in Credit Report",
        description:
          "Examine the 'Personal Information' section of your CIR. Look for unfamiliar phone numbers, mismatched dates of birth, or foreign residential addresses tied to the delinquent account.",
      },
      {
        step: "File Bureau Dispute Highlighting Demographic Clash",
        description:
          "File an official dispute with CIBIL and Experian providing a certified copy of your PAN card, Aadhaar, and passport to prove you are not the borrower who availed the loan.",
      },
      {
        step: "Enforce Legal Notice with RBI ₹100/Day Penalty Clause",
        description:
          "Issue a legal notice holding both the originating bank and CIBIL accountable for reckless demographic cross-contamination, demanding immediate file de-linking and statutory compensation.",
      },
    ],
  },
];

export default function CibilProblemTabs() {
  const [activeTab, setActiveTab] = useState<string>(PROBLEMS[0].id);
  const currentProblem = PROBLEMS.find((p) => p.id === activeTab) || PROBLEMS[0];

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden">
      {/* Tabs Header */}
      <div className="border-b border-slate-200 bg-slate-50/70 p-2 sm:p-3 overflow-x-auto scrollbar-none">
        <div className="flex gap-2 min-w-max">
          {PROBLEMS.map((problem) => {
            const isSelected = problem.id === activeTab;
            return (
              <button
                key={problem.id}
                type="button"
                onClick={() => setActiveTab(problem.id)}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-150 cursor-pointer ${
                  isSelected
                    ? "bg-red-600 text-white shadow-md shadow-red-600/20"
                    : "bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-900 border border-slate-200/60"
                }`}
              >
                {problem.tabLabel}
              </button>
            );
          })}
        </div>
      </div>

      {/* Tab Content Body */}
      <div className="p-5 sm:p-7 md:p-8 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-red-100 text-red-800 border border-red-200">
            {currentProblem.badge}
          </span>
          <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
            {currentProblem.odds}
          </span>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 mb-2">
            {currentProblem.title}
          </h3>
          <p className="text-xs font-mono text-slate-500">{currentProblem.statutoryRule}</p>
        </div>

        {/* Problem Breakdown Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              Why This Happened (Root Cause)
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {currentProblem.cause}
            </p>
          </div>
          <div className="p-4 rounded-xl bg-red-50/50 border border-red-100">
            <h4 className="text-xs font-bold uppercase tracking-wider text-red-800 mb-2">
              Legal Protection &amp; Bank Liability
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {currentProblem.legalBasis}
            </p>
          </div>
        </div>

        {/* Action Steps */}
        <div className="space-y-3 pt-2">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600">
            Actionable Resolution Protocol (3 Steps)
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {currentProblem.steps.map((item, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl border border-slate-200/80 bg-white hover:border-slate-300 transition-colors"
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="w-5 h-5 rounded-full bg-red-600 text-white text-[11px] font-bold flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <span className="text-xs font-bold text-slate-800 line-clamp-1">
                    {item.step}
                  </span>
                </div>
                <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
