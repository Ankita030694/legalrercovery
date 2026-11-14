"use client";

import React, { useState } from "react";

interface ProblemTab {
  id: string;
  tabLabel: string;
  title: string;
  complianceRisk: string;
  legalRemedy: string;
  steps: {
    step: string;
    description: string;
  }[];
  statutoryRule: string;
}

const PROBLEMS: ProblemTab[] = [
  {
    id: "fintech-micro",
    tabLabel: "FinTech & Micro-Lending",
    title: "Digital Personal Loans & Small-Ticket FinTech Delinquency",
    complianceRisk:
      "Digital lenders deploying non-licensed tele-callers face catastrophic risks of WhatsApp spam, privacy violations under the Digital Personal Data Protection (DPDP) Act 2023, and public outcry over aggressive dunning, often triggering regulatory audits or license revocation by the Reserve Bank of India.",
    legalRemedy:
      "All dunning is transitioned to formal advocate demand notices dispatched via verified email, registered WhatsApp under Section 63 of Bharatiya Sakshya Adhiniyam 2023 (BSA), and India Post Speed Post. Delinquent borrowers are offered structured pre-litigation conciliation via National Lok Adalat or Online Dispute Resolution (ODR).",
    steps: [
      {
        step: "Core Ledger API Ingestion",
        description:
          "Automated, encrypted synchronization of DPD 60+ borrower portfolios, verifying KYC, loan agreements, and payment gateway transaction failure memos.",
      },
      {
        step: "Advocate Legal Demand Generation",
        description:
          "Algorithmic drafting of statutory demand notices invoking Section 25 of the Payment and Settlement Systems Act, 2007 (PSSA) for NACH/e-mandate dishonor.",
      },
      {
        step: "Institutional Pre-Litigation Conciliation",
        description:
          "Directing responding borrowers to an authorized advocate settlement desk, securing structured payment plans or One-Time Settlement (OTS) without harassment.",
      },
    ],
    statutoryRule: "Section 25 PSSA 2007, DPDP Act 2023 & RBI Digital Lending Guidelines",
  },
  {
    id: "nbfc-msme",
    tabLabel: "NBFC Secured Assets",
    title: "Secured Mortgages, LAP & MSME NPA Portfolio Recovery",
    complianceRisk:
      "When borrowers default on secured business credit or property loans, amateur third-party agents often bungle statutory timelines, issue legally flawed notices, or attempt unauthorized physical repossessions that lead to severe High Court writ stays and criminal counter-complaints.",
    legalRemedy:
      "Licensed advocates execute precise Section 13(2) demand notices under the SARFAESI Act, 2002, adhering to mandatory 60-day borrower cure periods. Qualified legal teams handle Section 13(3A) representations within 15 days, securing Section 14 Chief Metropolitan Magistrate (CMM) orders for peaceful physical possession.",
    steps: [
      {
        step: "Title & Security Verification",
        description:
          "Comprehensive legal scrutiny of mortgage deeds, CERSAI registration certificates, and Section 90 NPA classification audit logs.",
      },
      {
        step: "SARFAESI Section 13(2) Demand Service",
        description:
          "Service of certified advocate statutory demand notices via Registered Post with Acknowledgment Due (RPAD) and local newspaper publication if necessary.",
      },
      {
        step: "Section 14 Possession & DRT Representation",
        description:
          "Filing Section 14 CMM/DM petitions for physical asset takeover, while actively defending against Section 17 DRT borrower challenges.",
      },
    ],
    statutoryRule: "SARFAESI Act 2002 (Sections 13, 14 & 17) & Security Interest Rules",
  },
  {
    id: "bank-cards",
    tabLabel: "Credit Card Defaults",
    title: "Revolving Credit Card Charge-Offs & Chronic Defaulters",
    complianceRisk:
      "Deploying unregulated third-party collection agencies for credit card charge-offs frequently results in calls at unearthly hours, contacts to borrower relatives, and abusive intimidation—violating the RBI Master Direction on Credit Card Operations and triggering massive reputational damage.",
    legalRemedy:
      "Third-party legal recovery treats card balances as formal liquidated debts. Licensed advocates serve 15-day pre-litigation legal notices with precise statements of principal dues, eliminating usurious interest contentions and initiating summary suits or institutional arbitration.",
    steps: [
      {
        step: "Audit & Elimination of Disputed Penalties",
        description:
          "Recalibrating ledger statements to clearly delineate principal spend from finance charges in strict compliance with RBI usury caps.",
      },
      {
        step: "Formal Advocate Demand Dispatch",
        description:
          "Dispatching formal legal notices demanding settlement within 15 calendar days, creating an unimpeachable legal foundation for judicial recovery.",
      },
      {
        step: "Summary Suit / Sole Arbitration Filing",
        description:
          "Instituting Order XXXVII CPC Summary Suits in competent commercial courts or activating institutional sole arbitration under the Arbitration & Conciliation Act, 1996.",
      },
    ],
    statutoryRule: "Order XXXVII CPC 1908, Arbitration & Conciliation Act 1996 & RBI Credit Card Master Direction",
  },
  {
    id: "corporate-b2b",
    tabLabel: "Corporate & Wholesale NPA",
    title: "Large Corporate Working Capital & B2B Loan Defaults",
    complianceRisk:
      "Enterprise and wholesale borrower defaults often involve intricate corporate shells, personal guarantor asset-stripping, and complex multi-banking consortium arrangements that non-legal recovery intermediaries are fundamentally incompetent to handle.",
    legalRemedy:
      "Specialized banking advocates initiate coordinated insolvency petitions under Section 7 of the Insolvency and Bankruptcy Code (IBC), 2016 before the NCLT, enforce personal guarantees under Section 95 IBC, and invoke civil recovery decrees under commercial court jurisdictions.",
    steps: [
      {
        step: "Forensic Audit & Personal Guarantor Mapping",
        description:
          "Tracking promoter personal assets, corporate filings on MCA21, and executing Section 95 IBC demand notices against personal guarantors.",
      },
      {
        step: "NCLT Section 7 Corporate Insolvency Petitions",
        description:
          "Drafting and filing IBC Section 7 petitions before the National Company Law Tribunal for defaults exceeding the ₹1 Crore threshold.",
      },
      {
        step: "DRT Original Application (OA) Enforcement",
        description:
          "Simultaneous filing of Recovery Petitions before the Debt Recovery Tribunal (DRT) to freeze borrower hypothecations and secure interim injunctions.",
      },
    ],
    statutoryRule: "Insolvency and Bankruptcy Code 2016 (Sections 7 & 95) & RDB Act 1993",
  },
];

export default function ThirdPartyRecoveryProblemTabs() {
  const [activeTab, setActiveTab] = useState<string>(PROBLEMS[0].id);

  const selected = PROBLEMS.find((p) => p.id === activeTab) || PROBLEMS[0];

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm space-y-6">
      {/* Tab Navigation Pill Bar */}
      <div className="flex flex-wrap gap-2 p-1.5 bg-slate-100 rounded-xl">
        {PROBLEMS.map((problem) => {
          const isActive = activeTab === problem.id;
          return (
            <button
              key={problem.id}
              type="button"
              onClick={() => setActiveTab(problem.id)}
              className={`flex-1 min-w-[130px] sm:min-w-[150px] py-2.5 px-3 rounded-lg text-xs sm:text-sm font-bold transition-all duration-200 text-center cursor-pointer ${
                isActive
                  ? "bg-white text-[#DC2626] shadow-sm border border-slate-200"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/60"
              }`}
            >
              {problem.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Tab Content Card */}
      <div className="space-y-5">
        <div>
          <span className="text-[11px] font-extrabold uppercase tracking-wider text-red-600 bg-red-50 px-2.5 py-1 rounded-md border border-red-200 inline-block mb-2">
            Institutional Portfolio Focus
          </span>
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
            {selected.title}
          </h3>
        </div>

        {/* Compliance Risk vs Legal Remedy Box */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-red-50/70 border border-red-200 space-y-1.5">
            <span className="text-[11px] font-bold text-red-700 uppercase tracking-wider block">
              ⚠️ Inherent Risk in Traditional Collection Agencies
            </span>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {selected.complianceRisk}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200 space-y-1.5">
            <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider block">
              🛡️ Licensed Law-Firm Third-Party Solution
            </span>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {selected.legalRemedy}
            </p>
          </div>
        </div>

        {/* 3 Step Execution Sequence */}
        <div className="space-y-3 pt-2">
          <h4 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-600">
            Automated Legal Execution Pipeline:
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {selected.steps.map((st, i) => (
              <div
                key={i}
                className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/90 space-y-1"
              >
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#111827] text-white text-[10px] font-bold flex items-center justify-center shrink-0">
                    {i + 1}
                  </span>
                  <span className="text-xs font-bold text-slate-900">{st.step}</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed pl-7">
                  {st.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Governing Rule Banner */}
        <div className="p-3 bg-slate-100 rounded-xl border border-slate-200 text-xs text-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <span>
            <strong>Primary Statutory Framework:</strong> {selected.statutoryRule}
          </span>
          <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded-md shrink-0">
            100% Bar Council &amp; RBI Protected
          </span>
        </div>
      </div>
    </div>
  );
}
