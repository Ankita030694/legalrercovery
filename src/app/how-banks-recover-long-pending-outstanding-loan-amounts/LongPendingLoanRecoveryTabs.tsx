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
    id: "sec18-balance-ack",
    tabLabel: "Sec 18 Balance Ack",
    title: "Overcoming 3-Year Limitation via Electronic & Written Balance Confirmations",
    cause:
      "Under Articles 14, 15, and 55 of the Limitation Act, 1963, an ordinary unsecured suit for money recovery must be instituted within three years from the date of loan default or loan disbursement. When commercial accounts or retail personal loans remain unattended in bank ledgers for years, borrowers frequently plead statutory time-bar. However, banks routinely possess signed audited balance sheets, debit authorization emails, or annual balance confirmation letters from the borrower.",
    legalBasis:
      "Section 18 of the Limitation Act, 1963 provides that where, before the expiration of the prescribed period for a suit, an acknowledgment of liability in respect of such property or right has been made in writing signed by the party against whom such property or right is claimed, a fresh period of limitation shall be computed from the time when the acknowledgment was so signed. The Supreme Court in Laxmi Pat Surana v. Union Bank of India and Dena Bank v. C. Shivakumar Reddy reaffirmed that entries in balance sheets and revival letters constitute valid Section 18 acknowledgments.",
    steps: [
      {
        step: "Retrieve Borrower's Signed Balance Confirmations & Audited Accounts",
        description:
          "Scan credit monitoring files for annual balance confirmation slips, audited financial statements submitted for limit renewal, or written restructuring requests submitted before the 3-year expiry window.",
      },
      {
        step: "Authenticate Digital Communications under BSA Section 63",
        description:
          "Preserve emails, e-sign acknowledgments, or NetBanking balance verifications with certificates under Section 63 of Bharatiya Sakshya Adhiniyam, 2023 to establish continuous acknowledgment chains.",
      },
      {
        step: "Issue Advocate Demand Notice Asserting Fresh Limitation Run",
        description:
          "Serve a formal statutory legal notice explicitly detailing the chain of acknowledgments under Section 18, putting the borrower on notice that limitation stands renewed for 3 years from the latest signature.",
      },
    ],
    statutoryRule: "Section 18 Limitation Act 1963 & Section 63 Bharatiya Sakshya Adhiniyam 2023",
  },
  {
    id: "sec19-part-payment",
    tabLabel: "Sec 19 Part-Payment",
    title: "Debt Revival Through Token Credits, UPI Installments & Part-Payments",
    cause:
      "Borrowers facing financial stress occasionally deposit nominal token sums (e.g. ₹5,000 or ₹25,000) into overdue loan accounts, or banks credit insurance claim proceeds or dividend recoveries against the loan ledger. Stressed asset teams often fail to leverage these credits as legal resets for limitation periods.",
    legalBasis:
      "Section 19 of the Limitation Act, 1963 dictates that where payment on account of a debt or of interest on a legacy is made before the expiration of the prescribed period by the person liable to pay the debt, a fresh period of limitation shall be computed from the time when the payment was made. Provided that an acknowledgment of the payment appears in the handwriting of, or in a writing signed by, the person making the payment (including digital banking references and electronic fund transfers).",
    steps: [
      {
        step: "Extract Core Banking System (CBS) Ledger Entry & UTR Trace",
        description:
          "Pull the precise statement of account showing the borrower's inward NEFT, RTGS, IMPS, or UPI credit, along with sender account verification and transaction UTR numbers.",
      },
      {
        step: "Match Transaction Timestamp to Running 3-Year Window",
        description:
          "Verify that the part-payment was deposited prior to the expiry of the previous limitation cycle, thereby extending the recovery limitation for a fresh three-year statutory term.",
      },
      {
        step: "Incorporate Section 19 Extension into DRT / Civil Recovery Plaint",
        description:
          "Plead the specific credit date and transaction reference in the demand notice and recovery plaint, establishing that the claim is well within limitation under Section 19.",
      },
    ],
    statutoryRule: "Section 19 Limitation Act 1963 & Order VII Rule 6 Code of Civil Procedure 1908",
  },
  {
    id: "ots-default-enforcement",
    tabLabel: "OTS Agreement Default",
    title: "Enforcing Breached One-Time Settlement (OTS) & Reviving Full Original Liability",
    cause:
      "Banks frequently sanction negotiated compromise or One-Time Settlement (OTS) offers to resolve aged non-performing assets. Borrowers often pay an initial 10% or 25% upfront compromise deposit but subsequently default on the remaining tranche installments within the 90 or 180-day sanctioned period, leaving the debt in limbo.",
    legalBasis:
      "Under Indian contract law and the Reserve Bank of India Compromise Settlements Framework (RBI/2023-24/40), an OTS sanction letter is a conditional contract. If the borrower defaults on any scheduled installment, the settlement automatically stands revoked, restoring the bank's right to claim the entire original contractual dues along with unapplied compound interest. Furthermore, the borrower's written OTS application and signed sanction acceptance operate as an unambiguous acknowledgment of debt under Section 18 of the Limitation Act, 1963.",
    steps: [
      {
        step: "Issue Formal Revocation Letter for Breach of OTS Terms",
        description:
          "Formally communicate that the OTS sanction stands cancelled due to non-payment of milestone installments, appropriating the upfront deposit towards outstanding interest/charges.",
      },
      {
        step: "Invoke OTS Application as Unconditional Debt Acknowledgment",
        description:
          "Utilize the borrower's signed compromise proposal and acknowledgment of outstanding balance as binding Section 18 evidence to reset limitation across all legal forums.",
      },
      {
        step: "File Expedited Summary Action for Full Contractual Balance",
        description:
          "Initiate DRT Original Application (OA) or Commercial Summary Suit under Order 37 CPC demanding the full unreduced liability, attaching borrower assets under Order 38 Rule 5 CPC.",
      },
    ],
    statutoryRule: "RBI Compromise Settlement Framework 2023 & Section 18 Limitation Act 1963",
  },
  {
    id: "mortgage-article62",
    tabLabel: "12-Year Mortgage Recovery",
    title: "Enforcing 12-Year Limitation for Mortgaged Immovable Collateral under Article 62",
    cause:
      "Recovery officers often mistakenly assume all loan recovery actions lapse after three years. In secured term loans, home loans, or Cash Credit facilities backed by registered or equitable mortgages, loans aged 4 to 10 years remain fully enforceable against the mortgaged security.",
    legalBasis:
      "Article 62 of the Schedule to the Limitation Act, 1963 prescribes a 12-year limitation period to enforce payment of money secured by a mortgage or otherwise charged upon immovable property, commencing from the date when the money sued for becomes due. While the personal remedy against the borrower is barred after 3 years, the real remedy against the mortgaged property survives for 12 years.",
    steps: [
      {
        step: "Verify Mortgage Deed & Title Title Deposit Memo",
        description:
          "Audit the Title Deed Deposit Register (TDDR), registered memorandum of deposit of title deeds (MODTD), and ROC Form CHG-1 for corporate borrowers to verify perfected security charge.",
      },
      {
        step: "Issue Section 13(2) SARFAESI 60-Day Statutory Demand Notice",
        description:
          "Serve a 60-day demand notice under SARFAESI Act, 2002 demanding liquidation of the entire secured debt, irrespective of whether the unsecured portion is past 3 years.",
      },
      {
        step: "Take Physical Possession under Section 13(4) and Section 14 CMM",
        description:
          "Approach the Chief Metropolitan Magistrate (CMM) or District Magistrate (DM) under Section 14 SARFAESI to secure vacant physical possession of the mortgaged property for public e-auction.",
      },
    ],
    statutoryRule: "Article 62 Limitation Act 1963 & Section 13/14 SARFAESI Act 2002",
  },
  {
    id: "lok-adalat-arc",
    tabLabel: "Lok Adalat & ARC Assignment",
    title: "Pre-Litigation Lok Adalat Consent Decrees & Debt Assignment to ARCs",
    cause:
      "Litigating aged retail or MSME loans through regular civil courts can take 5 to 10 years, eroding recovery net present value (NPV). Stressed asset management verticals require fast-track pre-litigation resolution or clean balance-sheet derecognition.",
    legalBasis:
      "Under Section 21 of the Legal Services Authorities Act, 1987, an award passed by a Lok Adalat is deemed to be a decree of a Civil Court, is final and binding on all parties, and no appeal lies against it. Alternatively, under Section 5 of the SARFAESI Act, 2002 and RBI Master Directions, banks can assign aged stressed loan pools to Asset Reconstruction Companies (ARCs) on an 'as-is-where-is' basis for upfront cash or Security Receipts (SRs).",
    steps: [
      {
        step: "Refer Aged Delinquent Accounts to National Lok Adalat",
        description:
          "Issue pre-litigation Lok Adalat notices through District Legal Services Authorities (DLSA) offering structured compromise settlements with zero court fees.",
      },
      {
        step: "Obtain Final & Non-Appealable Lok Adalat Consent Decree",
        description:
          "Execute the settlement memo before the Lok Adalat bench; upon default, execute the award directly under Order 21 CPC as a formal civil court decree.",
      },
      {
        step: "Portfolio Sale & Assignment to RBI-Registered ARCs",
        description:
          "Bundle residual written-off and chronic non-performing loan pools for assignment to ARCs under Swiss Challenge auction mechanisms for liquidity recovery.",
      },
    ],
    statutoryRule: "Section 21 Legal Services Authorities Act 1987 & Section 5 SARFAESI Act 2002",
  },
];

export default function LongPendingLoanRecoveryTabs() {
  const [activeTab, setActiveTab] = useState<string>(PROBLEMS[0].id);
  const currentProblem = PROBLEMS.find((p) => p.id === activeTab) || PROBLEMS[0];

  return (
    <div className="w-full bg-white border border-slate-200 rounded-2xl p-4 sm:p-6 shadow-sm">
      {/* Tab Navigation Pill Bar */}
      <div className="flex flex-wrap gap-2 pb-4 border-b border-slate-100">
        {PROBLEMS.map((prob) => {
          const isActive = prob.id === activeTab;
          return (
            <button
              key={prob.id}
              type="button"
              onClick={() => setActiveTab(prob.id)}
              className={`px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-150 cursor-pointer ${
                isActive
                  ? "bg-[#DC2626] text-white shadow-md shadow-red-900/20"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {prob.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Tab Content Display */}
      <div className="pt-5 space-y-5">
        <div>
          <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-wider text-[#DC2626] bg-red-50 px-2.5 py-1 rounded-md border border-red-100 inline-block mb-2">
            {currentProblem.statutoryRule}
          </span>
          <h3 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 tracking-tight">
            {currentProblem.title}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5">
            <strong className="text-slate-900 font-bold block text-xs uppercase tracking-wider">
              The Legal Problem &amp; Limitation Hurdle:
            </strong>
            <p className="text-slate-600 leading-relaxed">{currentProblem.cause}</p>
          </div>

          <div className="p-4 bg-blue-50/60 border border-blue-200 rounded-xl space-y-1.5">
            <strong className="text-blue-950 font-bold block text-xs uppercase tracking-wider">
              Statutory Remedy &amp; Judicial Authority:
            </strong>
            <p className="text-blue-900 leading-relaxed">{currentProblem.legalBasis}</p>
          </div>
        </div>

        <div className="space-y-3 pt-2">
          <h4 className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wider">
            Standard Operating Procedure for Recovery Officers:
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {currentProblem.steps.map((st, idx) => (
              <div
                key={idx}
                className="p-3.5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-1"
              >
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-slate-900 text-white font-bold text-[10px] flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <strong className="text-xs font-bold text-slate-900 leading-tight">
                    {st.step}
                  </strong>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed pl-7">
                  {st.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="p-3 bg-amber-50/80 border border-amber-200 rounded-xl text-xs text-amber-950 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <span>
            Explore pre-litigation Lok Adalat recovery frameworks on our{" "}
            <Link href="/law/lok-adalat-pre-litigation-money-recovery" className="font-bold underline text-blue-700">
              Lok Adalat recovery guide
            </Link>{" "}
            or analyze debt extension rules on{" "}
            <Link href="/limitation-extended-by-acknowledgment-part-payment" className="font-bold underline text-blue-700">
              limitation extension by acknowledgment
            </Link>.
          </span>
        </div>
      </div>
    </div>
  );
}
