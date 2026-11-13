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
    id: "nach-dishonour",
    tabLabel: "Bounced NACH / Mandate",
    title: "Non-Paying Customer with Repeated Electronic NACH Auto-Debit Dishonour",
    cause:
      "The borrower obtains an unsecured personal loan or consumer durable loan but revokes the NACH e-mandate or deliberately maintains inadequate balance on the designated billing date. Telecalling and collection agent reminders fail to elicit payment, and the borrower ignores informal follow-ups while continuing to earn salary or run business transactions through secondary banking accounts.",
    legalBasis:
      "Under Section 25 of the Payment and Settlement Systems Act, 2007, dishonour of an electronic funds transfer mandate due to insufficiency of funds attracts identical criminal liability as Section 138 of the Negotiable Instruments Act, 1881. The statutory penalty includes criminal conviction, imprisonment for up to two years, and monetary compensation up to twice the dishonoured installment sum.",
    steps: [
      {
        step: "Generate NACH Dishonour Bank Memo & Audit Trail",
        description:
          "Extract the official electronic Return Memo and transaction reference from NPCI or the sponsor bank gateway establishing clear reason code (e.g., 'insufficient funds' or 'mandate revoked').",
      },
      {
        step: "Serve Statutory 30-Day Legal Demand Notice",
        description:
          "Issue a formal advocate-drafted statutory notice under Section 25 PSS Act within 30 days of receiving the return memo, demanding payment within 15 days of notice receipt.",
      },
      {
        step: "File Criminal Complaint Before Metropolitan Magistrate",
        description:
          "If the borrower fails to settle within the 15-day demand window, institute a criminal complaint under Section 25 PSS Act within 30 days before the jurisdictional court to secure summons/warrants.",
      },
    ],
    statutoryRule: "Section 25 PSS Act, 2007 read with Section 138 Negotiable Instruments Act, 1881",
  },
  {
    id: "business-loan",
    tabLabel: "Unsecured Business Loan",
    title: "Unsecured Working Capital / MSME Loan Default Exceeding Thresholds",
    cause:
      "An enterprise or proprietary firm draws down an unsecured business loan or revolving credit facility without pledging immovable property. Post-disbursal, the entity diverts sales collections to unmonitored bank accounts, ceases servicing monthly interest or EMIs, and claims business failure to evade contractual liabilities.",
    legalBasis:
      "When loan agreements incorporate clean liquidation clauses and clear debt acknowledgment, lending institutions can bypass lengthy ordinary civil trials by instituting a Summary Suit under Order XXXVII of the Code of Civil Procedure, 1908. Borrowers are precluded from defending unless they prove substantial defence or deposit disputed sums in court under Order 37 Rule 3(5) CPC.",
    steps: [
      {
        step: "Recall Facility via Comprehensive Advocate Demand Notice",
        description:
          "Issue a formal facility termination and loan acceleration notice quantifying outstanding principal, contractual interest, and penal charges with 15-day cure duration.",
      },
      {
        step: "Institute Summary Suit under Order XXXVII CPC",
        description:
          "File an Order 37 Commercial Summary Suit in the designated Commercial Court supported by signed loan agreements, sanction letters, and certified statements of account under Section 63 BSA.",
      },
      {
        step: "Enforce Default Decree via Salary & Account Garnishee",
        description:
          "Upon obtaining an expedited summary decree, initiate execution under Order XXI Rule 46 CPC to attach trade receivables, enterprise bank accounts, and personal assets.",
      },
    ],
    statutoryRule: "Order XXXVII Rules 1–3 Code of Civil Procedure, 1908 & Commercial Courts Act, 2015",
  },
  {
    id: "asset-stripping",
    tabLabel: "Asset Concealment / Flight",
    title: "Willful Defaulter Liquidating or Transferring Assets to Frustrate Recovery",
    cause:
      "The defaulting borrower actively sells off personal vehicles, vacates leased premises, assigns trade receivables to shell entities, or attempts to transfer real estate to family members to ensure the lending bank is left with a paper decree with zero executable assets.",
    legalBasis:
      "Under Order XXXVIII Rule 5 of the Code of Civil Procedure, 1908, where the court is satisfied that the defendant is about to dispose of or remove property from the local limits of the court's jurisdiction with intent to obstruct execution of any decree, the court may direct the borrower to furnish security or order immediate attachment before judgment.",
    steps: [
      {
        step: "File Emergency Interlocutory Application Under Order 38 Rule 5",
        description:
          "Draft an interim application accompanied by a rigorous affidavit detailing concrete evidence of imminent asset dissipation, property sale listings, or fund diversion.",
      },
      {
        step: "Obtain Ex-Parte Conditional Attachment Order",
        description:
          "Secure an ad-interim judicial injunction restraining the borrower from alienating identifiable movable or immovable assets pending furnishing of bank guarantee or judicial deposit.",
      },
      {
        step: "Garnishee Notices to Third-Party Institutions",
        description:
          "Serve the court's attachment order on the borrower's secondary bankers, employers, and asset registrars to lock liquid funds prior to final decree.",
      },
    ],
    statutoryRule: "Order XXXVIII Rules 5–12 Code of Civil Procedure, 1908 (Attachment Before Judgment)",
  },
  {
    id: "fintech-digital-loan",
    tabLabel: "FinTech & e-Sign Default",
    title: "Default on Digital App-Based Personal Loan with Aadhaar e-Sign",
    cause:
      "Tech-savvy retail borrowers take instant personal loans via FinTech mobile applications and subsequently uninstall the app, block recovery emails, and repudiate the debt alleging lack of physical documentation or unverified digital click-wrap signatures.",
    legalBasis:
      "Under Section 10A and Section 65B/65A of the Information Technology Act, 2000, read with Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA), contracts executed via Aadhaar e-Sign, electronic OTP verification, and system logs constitute legally binding primary evidence. Summary courts and institutional digital arbitral tribunals enforce digital loan contracts identically to stamped paper deeds.",
    steps: [
      {
        step: "Compile BSA Section 63 Digital Evidentiary Certificate",
        description:
          "Generate the tamper-evident cryptographic hash, IP address log, Aadhaar e-Sign audit trail, and timestamped loan disbursement UPI/NEFT transaction report.",
      },
      {
        step: "Dispatch Electronic & Speed Post Advocate Legal Notice",
        description:
          "Serve formal notice to borrower's registered email, WhatsApp, and residential address with full legal disclosure of penal interest, CIBIL reporting impact, and litigation costs.",
      },
      {
        step: "Trigger Institutional Online Dispute Resolution (ODR) / Summary Claim",
        description:
          "Invoke the designated institutional arbitration or conciliation clause under the Arbitration and Conciliation Act, 1996 for fast-track digital award enforceable as a court decree.",
      },
    ],
    statutoryRule: "Section 63 Bharatiya Sakshya Adhiniyam, 2023 & Section 10A Information Technology Act, 2000",
  },
];

export default function UnsecuredLoanRecoveryTabs() {
  const [activeTab, setActiveTab] = useState(PROBLEMS[0].id);
  const currentProblem = PROBLEMS.find((p) => p.id === activeTab) || PROBLEMS[0];

  return (
    <div className="w-full bg-white border border-slate-200 rounded-2xl p-5 sm:p-7 shadow-sm">
      <div className="border-b border-slate-200 pb-3 mb-5">
        <h3 className="text-lg sm:text-xl font-bold text-slate-900">
          Targeted Recovery Protocols by Unsecured Default Category
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 mt-1">
          Select the specific default scenario to view statutory triggers, judicial authority, and recommended bank enforcement steps:
        </p>
      </div>

      {/* Tab Navigation Pill Bar */}
      <div className="flex flex-wrap gap-2 mb-6">
        {PROBLEMS.map((prob) => {
          const isActive = prob.id === activeTab;
          return (
            <button
              key={prob.id}
              type="button"
              onClick={() => setActiveTab(prob.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                isActive
                  ? "bg-[#DC2626] text-white shadow-md shadow-red-900/20"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              {prob.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Tab Panel */}
      <div className="space-y-5">
        <div>
          <span className="text-[11px] font-extrabold uppercase tracking-wider text-red-600 bg-red-50 px-2.5 py-1 rounded-md">
            Statutory Rule: {currentProblem.statutoryRule}
          </span>
          <h4 className="text-base sm:text-lg font-bold text-slate-900 mt-2">
            {currentProblem.title}
          </h4>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
            <strong className="text-slate-900 font-bold block mb-1">Default Trigger &amp; Borrower Tactic:</strong>
            <p className="text-slate-700 leading-relaxed">{currentProblem.cause}</p>
          </div>
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
            <strong className="text-slate-900 font-bold block mb-1">Statutory &amp; Judicial Authority:</strong>
            <p className="text-slate-700 leading-relaxed">{currentProblem.legalBasis}</p>
          </div>
        </div>

        <div>
          <h5 className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
            Recommended Bank Action Plan:
          </h5>
          <div className="space-y-3">
            {currentProblem.steps.map((st, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-3 bg-white border border-slate-200/90 rounded-xl shadow-xs"
              >
                <span className="shrink-0 w-6 h-6 rounded-full bg-red-100 text-red-800 font-black text-xs flex items-center justify-center mt-0.5">
                  {i + 1}
                </span>
                <div>
                  <strong className="text-xs sm:text-sm font-bold text-slate-900 block">
                    {st.step}
                  </strong>
                  <p className="text-xs text-slate-600 leading-relaxed mt-0.5">
                    {st.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs border-t border-slate-100">
          <span className="text-slate-500 font-medium">
            Standard recovery cycle for this path: <strong className="text-slate-800">45 to 90 Days</strong>
          </span>
          <Link
            href="/law/order-37-summary-suit-money-recovery"
            className="text-[#DC2626] font-bold hover:underline inline-flex items-center gap-1"
          >
            Learn more about Order 37 Summary Suit Procedure →
          </Link>
        </div>
      </div>
    </div>
  );
}
