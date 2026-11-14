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
    id: "nach-bounce",
    tabLabel: "e-NACH Bounce (S.25 PSS)",
    title: "Electronic NACH Auto-Debit Mandate Dishonoured for Insufficient Funds",
    cause:
      "Modern retail unsecured personal loans rely predominantly on digital e-NACH / e-Mandate standing instructions registered via NPCI. When a borrower stops funding their operational savings or salary account, the monthly EMI clearing batch fails with return reason codes such as 'Insufficient Funds' or 'Account Frozen'.",
    legalBasis:
      "Under Section 25(1) of the Payment and Settlement Systems Act, 2007 (PSS Act), dishonour of an electronic funds transfer mandate due to lack of funds or exceeding agreed credit limits is a cognizable penal offence identical in gravity and procedure to Section 138 of the Negotiable Instruments Act. Conviction invites up to 2 years imprisonment, monetary penalty up to twice the mandate value, or both.",
    steps: [
      {
        step: "Retrieve Clearing Return Memo from NPCI / Sponsor Bank",
        description:
          "Extract the official electronic return memo specifying the NPCI mandate reference number (UMRN), presentation date, and specific dishonour reason code.",
      },
      {
        step: "Serve 30-Day Statutory Demand Notice",
        description:
          "Issue a formal advocate demand notice under Section 25(1)(b) of the PSS Act within 30 days of receiving the return memo, demanding payment within 15 days of notice receipt.",
      },
      {
        step: "File Section 25 Criminal Complaint Before Judicial Magistrate",
        description:
          "If the borrower fails to pay within 15 days, file a formal complaint under Section 25(1) before the competent Chief Judicial Magistrate (CJM) or Metropolitan Magistrate (MM) within 30 days.",
      },
    ],
    statutoryRule: "Section 25 of Payment and Settlement Systems Act, 2007",
  },
  {
    id: "cheque-bounce",
    tabLabel: "Cheque Dishonour (S.138 NI)",
    title: "Post-Dated Repayment Cheque (PDC) Dishonoured Upon Presentation",
    cause:
      "Borrowers who provide physical cheques for loan EMI repayment or full balance discharge often issue 'Stop Payment' instructions or maintain inadequate balances, attempting to evade contractual liabilities.",
    legalBasis:
      "Section 138 of the Negotiable Instruments Act, 1881 criminalises cheque dishonour for insufficiency of funds. Section 139 establishes a statutory presumption that the cheque was issued in discharge of a legally enforceable debt. Furthermore, under Section 143A inserted by amendment, courts can order the drawer to deposit up to 20% interim compensation.",
    steps: [
      {
        step: "Procure Bank Return Memo within 3 Months of Cheque Validity",
        description:
          "Present the cheque within its 3-month statutory validity period and secure the official unpaid bank memo citing insufficient funds or account closed.",
      },
      {
        step: "Dispatch Statutory Notice via Registered Speed Post",
        description:
          "Serve a mandatory 15-day demand notice under Section 138(b) within 30 days from the return memo date. Retain postal tracking receipts for court filings.",
      },
      {
        step: "Institute Summary Criminal Prosecution under Section 142",
        description:
          "File the criminal complaint before the jurisdictional Magistrate within 30 days of the expiry of the 15-day notice period, praying for recovery plus interim compensation under Section 143A.",
      },
    ],
    statutoryRule: "Sections 138, 139, 141 & 143A of Negotiable Instruments Act, 1881",
  },
  {
    id: "order-37-cpc",
    tabLabel: "Summary Suit (Order 37 CPC)",
    title: "Expedited Money Decree via Commercial Summary Suit (Order XXXVII CPC)",
    cause:
      "Ordinary civil suits take years to reach trial. For unsecured personal loans with written loan agreements, sanction letters, and verified bank disbursement statements, banks require expedited decrees without lengthy oral evidence procedures.",
    legalBasis:
      "Order XXXVII of the Code of Civil Procedure, 1908 governs Summary Suits. The borrower does not have an automatic right to defend. The defendant must enter an appearance within 10 days of summons service and file an application demonstrating a bona fide, non-frivolous defense to obtain Leave to Defend. If Leave is refused, the bank receives an immediate money decree.",
    steps: [
      {
        step: "Loan Recall Notice & Limitation Period Check",
        description:
          "Issue a formal loan recall notice accelerating the entire balance. Ensure the suit is instituted within 3 years from the date of the first unrectified default (Article 19/55 Limitation Act, 1963).",
      },
      {
        step: "Draft Plaint with Written Sanction & Ledger Excerpts",
        description:
          "File the Order 37 plaint before the competent Civil Court or Commercial Court with stamped loan agreements and certified statements under the Bankers' Books Evidence Act, 1891.",
      },
      {
        step: "Serve Form 4 Summons & Pursue Summary Execution",
        description:
          "Serve summons for judgment. Upon the defendant's failure to demonstrate substantial grounds, secure a final decree with contractual interest and execute against personal movable assets.",
      },
    ],
    statutoryRule: "Order XXXVII Rules 1 to 7 of Code of Civil Procedure, 1908",
  },
  {
    id: "lok-adalat-arbitration",
    tabLabel: "Lok Adalat & Arbitration",
    title: "Pre-Litigation National Lok Adalat or Institutional Fast-Track Arbitration",
    cause:
      "When retail borrowers show willingness to settle or when court dockets are congested, banks need fast, low-cost recovery channels with zero court fee expenditure or immediate fee refunds.",
    legalBasis:
      "Under Section 19 to 21 of the Legal Services Authorities Act, 1987, Lok Adalat awards have the status of a final civil court decree with zero appealability under Section 21(2). In parallel, under Section 7 and 11 of the Arbitration and Conciliation Act, 1996, contractual arbitration clauses allow banks to appoint a sole arbitrator and secure an enforceable award within 6 to 12 months.",
    steps: [
      {
        step: "Pre-Litigation Lok Adalat Reference via DLSA",
        description:
          "Refer delinquent personal loan accounts under ₹20 Lakhs to District Legal Services Authority (DLSA) for National Lok Adalat settlement camps held quarterly across India.",
      },
      {
        step: "Execute Consent Terms & Procure Binding Award",
        description:
          "Execute mutually agreed one-time settlement (OTS) or restructured repayment schedules. The Lok Adalat passes a non-appealable award enforceable as a court decree.",
      },
      {
        step: "Direct Execution under Section 36 Arbitration Act / Section 38 CPC",
        description:
          "If the borrower defaults on the Lok Adalat award or arbitral award, file execution petitions directly without re-litigating the underlying loan liability.",
      },
    ],
    statutoryRule: "Section 21 Legal Services Authorities Act & Section 36 Arbitration Act",
  },
];

export default function BankRecoveryTabs() {
  const [activeTab, setActiveTab] = useState<string>("nach-bounce");
  const currentProblem = PROBLEMS.find((p) => p.id === activeTab) || PROBLEMS[0];

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 shadow-sm p-4 sm:p-6 md:p-8">
      {/* Tab Navigation Pill Bar */}
      <div className="flex flex-wrap gap-2 pb-4 sm:pb-6 border-b border-slate-200">
        {PROBLEMS.map((tab) => {
          const isActive = tab.id === activeTab;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                isActive
                  ? "bg-[#DC2626] text-white shadow-md shadow-red-900/20"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {tab.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Tab Content Display */}
      <div className="pt-6 space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-red-600 bg-red-50 px-3 py-1 rounded-full border border-red-200">
            {currentProblem.statutoryRule}
          </span>
          <span className="text-xs font-semibold text-slate-500">
            Enforceable Pan-India
          </span>
        </div>

        <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold text-slate-900">
          {currentProblem.title}
        </h3>

        <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80">
            <strong className="text-slate-900 font-bold block mb-1">
              Operational Mechanics &amp; Root Cause:
            </strong>
            <p>{currentProblem.cause}</p>
          </div>

          <div className="bg-red-50/60 p-4 rounded-xl border border-red-200/80">
            <strong className="text-red-900 font-bold block mb-1">
              Statutory Basis &amp; Enforceability:
            </strong>
            <p className="text-red-950">{currentProblem.legalBasis}</p>
          </div>
        </div>

        {/* 3 Step Action Blueprint */}
        <div className="space-y-3 pt-2">
          <h4 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-700">
            3-Step Enforcement Action:
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {currentProblem.steps.map((st, i) => (
              <div
                key={i}
                className="p-3.5 bg-white rounded-xl border border-slate-200 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="w-5 h-5 rounded-full bg-slate-900 text-white font-bold text-[10px] flex items-center justify-center shrink-0">
                      {i + 1}
                    </span>
                    <strong className="text-xs font-bold text-slate-900 leading-snug">
                      {st.step}
                    </strong>
                  </div>
                  <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">
                    {st.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
          <span>
            Need institutional advocate support for bulk retail NPA files?
          </span>
          <Link
            href="/send-a-legal-notice/for-banks-to-recover-their-unpaid-dues"
            className="text-red-600 hover:text-red-800 font-bold underline"
          >
            Bank Unpaid Dues Notice Hub →
          </Link>
        </div>
      </div>
    </div>
  );
}
