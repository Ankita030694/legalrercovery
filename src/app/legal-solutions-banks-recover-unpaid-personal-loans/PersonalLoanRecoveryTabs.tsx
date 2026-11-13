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
    tabLabel: "NACH / E-Mandate Dishonour",
    title: "Electronic NACH Auto-Debit Mandate Bounced (Section 25 PSS Act)",
    cause:
      "Modern retail personal loans and digital fintech credit lines rely predominantly on National Automated Clearing House (NACH) e-mandates or e-NACH debit instructions for automated monthly EMI collections. When a retail borrower intentionally empties their salary account or issues stop-payment instructions, the clearing house returns the debit mandate with remarks such as 'Insufficient Funds' or 'Account Blocked/Frozen'. Because personal loans lack physical collateral, banks often mistakenly rely only on tele-calling rather than statutory criminal triggers.",
    legalBasis:
      "Under Section 25 of the Payment and Settlement Systems Act, 2007, dishonour of an electronic funds transfer mandate due to insufficiency of funds or exceeding agreed limits is a criminal offence on identical footing to Section 138 of the Negotiable Instruments Act. Conviction attracts imprisonment up to two years, a fine up to twice the dishonoured amount, or both. The bank must issue a statutory demand notice within 30 days of receiving the NACH return memo, granting the borrower a 15-day cure period.",
    steps: [
      {
        step: "Retrieve Clearing Memo & E-Mandate Log",
        description:
          "Extract the NPCI settlement return memo, transaction reference ID, clearing cycle date, and the digital NPCI mandate registration acknowledgment (UMRN number).",
      },
      {
        step: "Serve Section 25 PSS Act Demand Notice Within 30 Days",
        description:
          "Dispatch an advocate statutory demand notice via Registered Speed Post and email within 30 calendar days of the debit failure, demanding the full dishonoured instalment within 15 days.",
      },
      {
        step: "File Section 25 Criminal Complaint",
        description:
          "If the default is not purged within 15 days of notice delivery, file a Section 25 criminal complaint before the Metropolitan Magistrate or Judicial Magistrate First Class having jurisdiction over the payee bank branch within 30 days.",
      },
    ],
    statutoryRule: "Section 25, Payment and Settlement Systems Act, 2007 (Criminal Mandate Enforcement)",
  },
  {
    id: "untraceable-borrower",
    tabLabel: "Skipped / Untraceable Borrower",
    title: "Borrower Changed Address, Switched Jobs, or Vanished (Skip Tracing & Attachment)",
    cause:
      "A frequent bottleneck in retail personal loan portfolios occurs when a defaulting borrower vacates their rented residence, deactivates registered phone numbers, and moves to an undisclosed employer. Debt recovery tele-callers hit a dead end, and traditional postal notices return unserved with endorsements like 'Left Without Address' or 'Door Locked'.",
    legalBasis:
      "Under Order V Rule 20 of the Code of Civil Procedure (CPC) and Section 63 of the Bharatiya Sakshya Adhiniyam, 2023, banks can utilize electronic service via verified WhatsApp, LinkedIn, email, and substituted service via local newspaper publication. Furthermore, under Order XXI Rule 48 CPC, once a decree is secured, the civil court is empowered to attach up to one-third of the debtor's non-exempt monthly salary directly from their current or future employer.",
    steps: [
      {
        step: "Trigger Multi-Bureau Credit & EPFO Skip-Tracing",
        description:
          "Pull fresh CIBIL, Experian, and CRIF reports to detect newly applied credit cards, active utility inquiries, or updated EPFO employer remittances indicating current workplace location.",
      },
      {
        step: "Effect Multi-Channel Statutory Service",
        description:
          "Dispatch statutory notices to permanent native addresses, current known emails, and registered messaging handles, backed by an affidavit of electronic service under Section 63 BSA 2023.",
      },
      {
        step: "File for Salary Garnishee & Asset Discovery",
        description:
          "In summary suit execution, file under Order XXI Rule 41 CPC requiring the judgment debtor to declare all bank accounts, vehicles, and employer details on oath for direct garnishee attachment.",
      },
    ],
    statutoryRule: "Order V Rule 20 & Order XXI Rule 48, Code of Civil Procedure, 1908",
  },
  {
    id: "order-37-summary-suit",
    tabLabel: "Order 37 Summary Suit",
    title: "Summary Money Recovery Suit (Order XXXVII CPC) for Expedited Decrees",
    cause:
      "Because personal loans are unsecured, lenders cannot invoke the SARFAESI Act, 2002 to seize physical collateral without court intervention. Traditional regular civil money suits take 5 to 7 years due to procedural cross-examinations and dilatory borrower adjournments, destroying recovery profitability and necessitating 100% loss provisioning.",
    legalBasis:
      "Order XXXVII (Order 37) of the Code of Civil Procedure, 1908 provides a fast-track summary procedure specifically tailored for liquidated debts arising out of written loan contracts, promissory notes, and electronic sanction agreements. In an Order 37 suit, the defaulting borrower has no automatic right to defend. The defendant must enter an appearance within 10 days of summons service and obtain 'Leave to Defend' by demonstrating a bona fide, non-frivolous defense; otherwise, the bank is immediately entitled to a judgment and decree for the full claimed sum with contractual interest.",
    steps: [
      {
        step: "Establish Liquidated Contractual Debt",
        description:
          "Assemble the loan agreement, digital sanction letter, disbursement statement, and bank certified account statement under Section 2A of the Bankers' Books Evidence Act.",
      },
      {
        step: "Institute Summary Suit in Civil / Commercial Court",
        description:
          "File the plaint under Order XXXVII Form 4 Appendix B CPC, pleading a fixed liquidated sum without unliquidated damages or speculative claims.",
      },
      {
        step: "Serve Summons for Judgment (Form 4A)",
        description:
          "Upon appearance or default, issue Form 4A Summons for Judgment. If the borrower fails to deposit disputed funds or secure leave to defend, proceed straight to decree execution.",
      },
    ],
    statutoryRule: "Order XXXVII Rules 1, 2, and 3, Code of Civil Procedure, 1908",
  },
  {
    id: "limitation-acknowledgement",
    tabLabel: "Limitation Risk & Section 18",
    title: "Preventing Time-Barred Claims via Section 18 Limitation Act Debt Acknowledgement",
    cause:
      "Under Article 19 and Article 55 of the Schedule to the Limitation Act, 1963, a suit for money recovery must be instituted within three (3) years from the date the loan was made or when the loan agreement was breached (the date of first unpaid instalment). In high-volume collections, loan accounts languish in overdue buckets, and by the time legal escalation occurs, the statutory 3-year limitation clock is near expiry.",
    legalBasis:
      "Section 18 of the Limitation Act, 1963 provides that where, before the expiration of the prescribed period for a suit, an acknowledgment of liability in respect of the debt has been made in writing and signed by the debtor, a fresh period of limitation shall be computed from the time when the acknowledgment was so signed. Crucially, courts hold that part-payments (Section 19), digital WhatsApp confirmations, written requests for EMI restructuring, or signed OTS settlement proposals constitute valid acknowledgments of debt that reset the 3-year clock.",
    steps: [
      {
        step: "Audit Last Default Date vs Last Payment Credit",
        description:
          "Audit the account ledger to identify the exact date of first default and verify every subsequent partial EMI, UPI settlement, or fee payment received.",
      },
      {
        step: "Secure Written / Digital Restructuring Confirmation",
        description:
          "Utilize pre-litigation borrower outreach to elicit written email, WhatsApp, or physical settlement requests acknowledging the outstanding loan balance.",
      },
      {
        step: "Institute Pre-Institution Mediation or Plaint Before Expiry",
        description:
          "File an application for mandatory pre-institution mediation under Section 12A of the Commercial Courts Act, 2015, which statutorily excludes the mediation duration from the limitation period.",
      },
    ],
    statutoryRule: "Section 18 & Section 19, Limitation Act, 1963 & Section 12A Commercial Courts Act",
  },
  {
    id: "lok-adalat-settlement",
    tabLabel: "National Lok Adalat",
    title: "National Lok Adalat Settlement for Pre-Litigation Personal Loan Recovery",
    cause:
      "Litigating small-ticket retail personal loans (₹50,000 to ₹5,00,000) through contested court trials is often cost-inefficient relative to advocate fees and judicial stamp duties. Borrowers frequently desire debt relief from penal charges but avoid courtrooms due to fear of harassment.",
    legalBasis:
      "Under Section 19 and Section 21 of the Legal Services Authorities Act, 1987, National Lok Adalats held quarterly under NALSA have statutory jurisdiction to take up pre-litigation disputes. An award passed by a Lok Adalat is deemed to be a decree of a Civil Court, is final and binding on all parties, and no appeal lies against it. If the borrower defaults on the negotiated Lok Adalat settlement terms, the bank can directly file an execution petition under Order XXI CPC without needing a fresh trial.",
    steps: [
      {
        step: "Collate Portfolio Cohort for Pre-Litigation Reference",
        description:
          "Select delinquent personal loan accounts in 90+ DPD (Days Past Due) to 180+ DPD buckets and formulate standardized settlement grids with defined waiver ceilings.",
      },
      {
        step: "File Pre-Litigation Docket with DLSA",
        description:
          "Submit the roster of defaulting borrowers to the District Legal Services Authority (DLSA) for issuance of official judicial Lok Adalat summons.",
      },
      {
        step: "Execute Consent Award with Binding Civil Decree Power",
        description:
          "Record signed settlement terms before the Lok Adalat Bench. Secure a certified copy of the Award having the full executable force of a civil decree under Section 21 LSA Act.",
      },
    ],
    statutoryRule: "Section 21, Legal Services Authorities Act, 1987 (Deemed Civil Decree)",
  },
];

export default function PersonalLoanRecoveryTabs() {
  const [activeTab, setActiveTab] = useState<string>(PROBLEMS[0].id);
  const currentProblem = PROBLEMS.find((p) => p.id === activeTab) || PROBLEMS[0];

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 shadow-sm p-4 sm:p-6 md:p-8 space-y-6">
      {/* Scrollable Tab Buttons */}
      <div className="flex overflow-x-auto gap-2 pb-2 border-b border-slate-200 scrollbar-thin">
        {PROBLEMS.map((problem) => {
          const isActive = activeTab === problem.id;
          return (
            <button
              key={problem.id}
              type="button"
              onClick={() => setActiveTab(problem.id)}
              className={`shrink-0 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all cursor-pointer ${
                isActive
                  ? "bg-[#DC2626] text-white shadow-md shadow-red-950/20"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              {problem.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Tab Content Display */}
      <div className="space-y-5 animate-fadeIn">
        <div>
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-600 bg-red-50 border border-red-200 px-2.5 py-1 rounded-full">
            {currentProblem.statutoryRule}
          </span>
          <h3 className="text-base sm:text-xl font-bold text-slate-900 mt-2 mb-1">
            {currentProblem.title}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-700">
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/80 space-y-1.5">
            <strong className="text-slate-900 font-bold block">Root Cause of Portfolio Failure:</strong>
            <p className="leading-relaxed">{currentProblem.cause}</p>
          </div>
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/80 space-y-1.5">
            <strong className="text-slate-900 font-bold block">Statutory Legal Remedy:</strong>
            <p className="leading-relaxed">{currentProblem.legalBasis}</p>
          </div>
        </div>

        {/* Actionable Steps */}
        <div className="space-y-3 pt-2">
          <h4 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-900">
            Action Protocol for Bank &amp; NBFC Recovery Teams:
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {currentProblem.steps.map((item, idx) => (
              <div
                key={idx}
                className="p-3.5 bg-white rounded-xl border border-slate-200 shadow-xs space-y-1"
              >
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#111827] text-white font-bold text-[10px] flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <span className="text-xs font-bold text-slate-900 leading-tight">
                    {item.step}
                  </span>
                </div>
                <p className="text-[11px] text-slate-600 leading-relaxed pt-1">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Note */}
        <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs border-t border-slate-100">
          <span className="text-slate-500">
            Need institutional bulk legal notices drafted for your retail NPA ledger?
          </span>
          <Link
            href="/send-a-legal-notice/for-banks-to-recover-their-unpaid-dues"
            className="text-red-700 hover:text-red-800 font-bold underline shrink-0"
          >
            Explore Bank Legal Notice Services →
          </Link>
        </div>
      </div>
    </div>
  );
}
