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
    id: "unilateral-appointment",
    tabLabel: "Unilateral Appointment",
    title: "Overcoming Unilateral Arbitrator Objections Post-Perkins Eastman",
    cause:
      "Following landmark Supreme Court rulings, clauses in standard bank loan agreements that empower the lender alone to nominate a sole arbitrator are rendered legally invalid under Section 12(5) read with the Seventh Schedule of the Arbitration Act. Defaulters frequently challenge awards on this technical ground in Section 34 petitions.",
    legalBasis:
      "Under Perkins Eastman Architects DPC v. HSCC (India) Ltd. (2020) and TRF Ltd. v. Energo Engineering Projects Ltd. (2017), an interested party cannot unilaterally appoint a sole arbitrator. However, institutional arbitration panels, agreed candidate slates, or applications under Section 11(6) to the High Court fully insulate proceedings from jurisdictional disqualification.",
    steps: [
      {
        step: "Incorporate Institutional Arbitration / Neutral Panel Rules",
        description:
          "Route arbitration through recognized arbitral institutions (e.g., DIAC, MCIA, ICA, or accredited Online Dispute Resolution platforms) where the arbitral institution independently appoints the neutral arbitrator from an empanelled roster.",
      },
      {
        step: "Issue Section 21 Notice with 3-Name Neutral Candidate Panel",
        description:
          "In the statutory invocation notice, propose a panel of 3 independent retired judicial officers or accredited advocates, requesting the borrower's concurrence within 30 days.",
      },
      {
        step: "File Section 11(6) Petition upon Failure of Consensus",
        description:
          "If the borrower refuses to concur within 30 days of receiving the Section 21 notice, immediately move the High Court under Section 11(6) for judicial appointment of an independent arbitrator.",
      },
    ],
    statutoryRule: "Section 11(6) & Section 12(5), Arbitration and Conciliation Act, 1996",
  },
  {
    id: "ex-parte-award",
    tabLabel: "Ex-Parte Awards",
    title: "Securing Binding Ex-Parte Arbitral Awards When Defaulters Evade Notice",
    cause:
      "Delinquent retail borrowers frequently refuse physical speed posts, change residences, or ignore hearing summons in the belief that an arbitral tribunal cannot proceed without their personal presence.",
    legalBasis:
      "Section 25(b) of the Arbitration Act explicitly empowers the arbitral tribunal to continue proceedings and pass an award on the evidence before it if the respondent fails to communicate their statement of defence or appear without showing sufficient cause. Section 3 of the Act confirms service is deemed complete when sent to the last known address.",
    steps: [
      {
        step: "Serve via Multiple Modes Under Section 63 BSA",
        description:
          "Dispatch the Section 21 invocation notice and subsequent hearing notices via Registered Speed Post, registered email address, and WhatsApp with delivery/read receipt certification.",
      },
      {
        step: "File Affidavit of Substituted / Electronic Service",
        description:
          "Submit a formal Section 63 Bharatiya Sakshya Adhiniyam certificate with postal tracking consignment sheets showing 'refused' or 'door locked' along with email delivery logs.",
      },
      {
        step: "Obtain Reasoned Section 25(b) Award on Merits",
        description:
          "Lead documentary proof including the loan sanction letter, disbursed bank statement, e-NACH bounce memos, and interest ledger to secure a binding monetary award with post-award interest.",
      },
    ],
    statutoryRule: "Section 25(b) & Section 3, Arbitration Act read with Section 63 BSA 2023",
  },
  {
    id: "section-34-challenge",
    tabLabel: "Section 34 Defense",
    title: "Defending the Arbitral Award Against Section 34 Setting-Aside Petitions",
    cause:
      "Defaulters often file frivolous applications under Section 34 of the Arbitration Act in Commercial Courts, alleging lack of due process or patent illegality to delay the recovery of money.",
    legalBasis:
      "The Supreme Court in Ssangyong Engineering & Construction Co. Ltd. v. NHAI (2019) and Associate Builders v. DDA (2015) ruled that courts cannot review an arbitral award on merits or substitute findings of fact. Under Section 34(3), there is an unextendable 120-day absolute limitation bar, and under Section 36(2), filing a Section 34 petition does not automatically stay execution.",
    steps: [
      {
        step: "Establish Strict Adherence to Equal Treatment (Section 18)",
        description:
          "Ensure the arbitral record reflects that reasonable opportunities, adequate notice periods (at least 15–21 days per hearing), and document copies were consistently provided.",
      },
      {
        step: "Enforce Section 36(2) Pre-Deposit Mandate",
        description:
          "Highlight to the Commercial Court that no stay on the award can be granted without substantial financial pre-deposit, citing Supreme Court directives on commercial money decrees.",
      },
      {
        step: "Invoke Section 34(3) Limitation Dismissal",
        description:
          "If the borrower files after 3 months (+ 30 discretionary days), demand summary dismissal with punitive costs as courts lack jurisdiction to condone delays beyond 120 days.",
      },
    ],
    statutoryRule: "Section 34 & Section 36(2), Arbitration and Conciliation Act, 1996",
  },
  {
    id: "execution-order-21",
    tabLabel: "Order XXI Execution",
    title: "Executing the Arbitral Award as a Civil Court Decree (Section 36 & Order XXI)",
    cause:
      "Once an award is passed, institutional lenders must convert the paper award into liquid cash recovery by attaching the judgment-debtor's salary, frozen bank accounts, or unencumbered assets.",
    legalBasis:
      "Under Section 36(1) of the Arbitration Act, upon the expiry of 90 days from the receipt of the arbitral award, the award becomes directly enforceable in the same manner as if it were a decree of the Civil Court under Order XXI of the Code of Civil Procedure, 1908.",
    steps: [
      {
        step: "File Execution Petition in Competent District Court",
        description:
          "Lodge an Execution Petition under Order XXI Rule 11 CPC before the Principal District Court having jurisdiction over the borrower's assets or residence, enclosing certified award copy.",
      },
      {
        step: "Seek Garnishee Orders on Debtor's Bank Accounts & Salary",
        description:
          "Under Order XXI Rule 46 CPC, seek attachment of the debtor's active bank accounts and salary attachments through the borrower's current corporate employer.",
      },
      {
        step: "Move for Attachment & Sale of Immovable / Movable Property",
        description:
          "Under Order XXI Rule 54 CPC, issue warrants of attachment on commercial or residential properties owned by the borrower to satisfy the principal and accrued interest.",
      },
    ],
    statutoryRule: "Section 36(1) Arbitration Act & Order XXI Code of Civil Procedure, 1908",
  },
];

export default function ArbitrationLoanTabs() {
  const [activeTab, setActiveTab] = useState<string>(PROBLEMS[0].id);

  const currentProblem = PROBLEMS.find((p) => p.id === activeTab) || PROBLEMS[0];

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 shadow-sm p-4 sm:p-6 md:p-8 space-y-6">
      {/* Tab Navigation Pill Bar */}
      <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-4">
        {PROBLEMS.map((tab) => {
          const isActive = tab.id === activeTab;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                isActive
                  ? "bg-slate-900 text-white shadow-sm"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {tab.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Tab Content Display */}
      <div className="space-y-5">
        <div>
          <span className="inline-block px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-red-100 text-red-800 mb-2">
            Statutory Focus: {currentProblem.statutoryRule}
          </span>
          <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold text-slate-900">
            {currentProblem.title}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/80">
            <h4 className="font-bold text-slate-900 mb-1.5 uppercase tracking-wider text-[11px] text-slate-500">
              The Operational Bottleneck:
            </h4>
            <p className="text-slate-700 leading-relaxed">{currentProblem.cause}</p>
          </div>

          <div className="p-4 bg-red-50/60 rounded-xl border border-red-100">
            <h4 className="font-bold text-red-900 mb-1.5 uppercase tracking-wider text-[11px] text-red-700">
              Judicial Benchmark &amp; Statutory Authority:
            </h4>
            <p className="text-slate-800 leading-relaxed">{currentProblem.legalBasis}</p>
          </div>
        </div>

        {/* 3 Step Action Grid */}
        <div className="space-y-3 pt-2">
          <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            Mandatory Action Pipeline for Institutional Lenders:
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {currentProblem.steps.map((st, idx) => (
              <div
                key={idx}
                className="p-3.5 bg-white border border-slate-200 rounded-xl shadow-2xs space-y-1.5"
              >
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-slate-900 text-white text-[10px] font-bold flex items-center justify-center">
                    {idx + 1}
                  </span>
                  <span className="font-bold text-xs text-slate-900 line-clamp-1">
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
