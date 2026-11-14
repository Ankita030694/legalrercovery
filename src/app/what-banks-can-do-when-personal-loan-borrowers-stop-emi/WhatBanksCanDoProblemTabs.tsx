"use client";

import React, { useState } from "react";
import Link from "next/link";

interface ScenarioTab {
  id: string;
  tabLabel: string;
  title: string;
  stage: string;
  situation: string;
  legalBasis: string;
  remedialActions: {
    step: string;
    description: string;
  }[];
  statutoryRule: string;
}

const SCENARIOS: ScenarioTab[] = [
  {
    id: "first-second-bounce",
    tabLabel: "1st & 2nd Bounce (SMA-0/1)",
    title: "Consecutive NACH / Auto-Debit Mandate Bounce (Days 1–60)",
    stage: "Special Mention Account (SMA-0 & SMA-1)",
    situation:
      "A retail personal loan borrower defaults on the scheduled monthly EMI. The automated NACH mandate returns unpaid with reason codes such as 'Insufficient Funds' (Code 01) or 'Account Blocked / Frozen' (Code 06). The borrower fails to pay voluntarily within 10 days of the due date.",
    legalBasis:
      "Section 25 of the Payment and Settlement Systems Act, 2007 (PSS Act) provides that dishonour of an electronic funds transfer mandate due to lack of funds attracts criminal penal liability equivalent to Section 138 of the Negotiable Instruments Act. Lenders possess the statutory power to serve an advocate demand notice within 30 days of the bank return memo.",
    remedialActions: [
      {
        step: "Preserve Electronic Return Memo & NPCI Settlement Record",
        description:
          "Download the digitally signed NACH dishonour return memo and bank statement showing the debit presentation and return code. Ensure the NPCI Mandate Reference Number (UMRN) is fully logged.",
      },
      {
        step: "Dispatch Statutory Advocate Demand Notice Within 30 Days",
        description:
          "Serve a formal legal demand notice under Section 25 PSS Act via Speed Post and registered digital channels giving the borrower 15 mandatory statutory days to cure the default.",
      },
      {
        step: "CIBIL / Credit Bureau Real-Time Reporting",
        description:
          "Report the 30+ DPD status to TransUnion CIBIL, Experian, CRIF High Mark, and Equifax to freeze credit line expansion across competing retail lenders.",
      },
    ],
    statutoryRule: "Section 25(1)(b) PSS Act, 2007 & RBI Master Directions on Prudential Norms",
  },
  {
    id: "npa-loan-recall",
    tabLabel: "90+ DPD & Loan Recall (NPA)",
    title: "Account Enters NPA & Complete Facility Recall (Day 90+)",
    stage: "Non-Performing Asset (NPA) Classification",
    situation:
      "The borrower has defaulted on three consecutive EMIs (90 days overdue). The loan account automatically slips into Sub-Standard NPA category under RBI prudential income recognition and asset classification (IRAC) norms.",
    legalBasis:
      "Under the contractual terms of the loan agreement and the Indian Contract Act, 1872, the bank is legally entitled to terminate the repayment schedule, declare an Event of Default, and accelerate the entire outstanding loan principal, accumulated interest, and penal charges through a formal Loan Recall Notice.",
    remedialActions: [
      {
        step: "Issue Formal Advocate Loan Recall Notice",
        description:
          "Terminate the EMI facility and demand repayment of the aggregate outstanding balance within 7 to 15 days, citing breach of loan covenants and asset classification as NPA.",
      },
      {
        step: "Revoke Repayment Concessions & Apply Default Interest",
        description:
          "Crystallize the aggregate debt amount, including contractual penal interest, and freeze any linked accounts or offset credit balances under banker's general lien (Section 171 Indian Contract Act).",
      },
      {
        step: "Dual-Track Criminal Prosecution & Civil Decrees",
        description:
          "Simultaneously initiate criminal proceedings for NACH dishonour under Section 25 PSS Act while drafting civil recovery suits or arbitration petitions.",
      },
    ],
    statutoryRule: "Indian Contract Act, 1872 (Section 73 & 171) & RBI IRAC Master Directions",
  },
  {
    id: "arbitration-enforcement",
    tabLabel: "Sole Arbitration & Award",
    title: "Sole Arbitrator Appointment & Fast-Track Execution (Arbitration Act)",
    stage: "Binding Dispute Resolution (Sections 11, 29B & 36)",
    situation:
      "The borrower ignores pre-litigation notices and continues to refuse payment. Personal loans lack physical mortgage security (SARFAESI Act is inapplicable), making conventional civil suits too slow for retail unsecured books.",
    legalBasis:
      "Section 7 & Section 29B of the Arbitration and Conciliation Act, 1996 provide an expedited institutional mechanism. Where personal loan contracts contain an arbitration clause, the lender can appoint a sole arbitrator, conduct documentary hearings, and obtain an enforceable arbitral award within 6 months.",
    remedialActions: [
      {
        step: "Invoke Contractual Arbitration Clause via Legal Notice",
        description:
          "Issue a formal Section 21 Arbitration Invocation Notice proposing an independent sole arbitrator or institutional arbitration council per the loan agreement.",
      },
      {
        step: "Obtain Ex-Parte Fast-Track Money Award",
        description:
          "If the borrower fails to submit a defence statement, the arbitral tribunal passes a binding money award with interest up to the date of actual recovery.",
      },
      {
        step: "Execute as Civil Court Decree Under Section 36",
        description:
          "File execution proceedings under Order XXI CPC before the District Court to attach the borrower's bank accounts, salary, and unencumbered assets.",
      },
    ],
    statutoryRule: "Arbitration & Conciliation Act, 1996 (Sections 21, 29B, 34 & 36)",
  },
  {
    id: "summary-suit-order37",
    tabLabel: "Summary Suit (Order 37 CPC)",
    title: "Expedited Commercial Summary Suit in Civil Court (Order XXXVII CPC)",
    stage: "Fast-Track Judicial Decree for Liquidated Personal Debt",
    situation:
      "For high-ticket unsecured personal loans (₹5 Lakh to ₹50 Lakh+) where arbitration is contested or missing, lenders face protracted 5-year civil trials unless summary procedure is invoked.",
    legalBasis:
      "Order XXXVII (Order 37) of the Code of Civil Procedure, 1908 applies specifically to suits for liquidated debts arising on written contracts and promissory notes. The borrower has no automatic right to defend the suit and must prove substantial grounds within 10 days to obtain leave to defend.",
    remedialActions: [
      {
        step: "File Plaint Under Order XXXVII Rule 2 CPC",
        description:
          "File the summary plaint before the competent Civil Court accompanied by the loan agreement, sanction letter, e-mandates, and certified statement of accounts under Section 65B Evidence Act / Section 63 BSA.",
      },
      {
        step: "Serve Summons for Judgment (Rule 3)",
        description:
          "Serve summons in Form No. 4 in Appendix B. The borrower must file an affidavit for leave to defend within 10 days, failing which the court enters an immediate money decree.",
      },
      {
        step: "Immediate Decree & Asset Attachment",
        description:
          "Upon entry of decree, move for salary garnishee orders and bank account attachments without enduring years of evidentiary trials.",
      },
    ],
    statutoryRule: "Code of Civil Procedure, 1908 (Order XXXVII Rules 1, 2 & 3)",
  },
  {
    id: "lok-adalat-settlement",
    tabLabel: "National Lok Adalat Settlement",
    title: "Pre-Litigation Settlement & OTS Decrees via National Lok Adalat",
    stage: "Pre-Litigation Statutory Conciliation & Non-Appealable Decree",
    situation:
      "Borrowers facing genuine cash-flow distress, job transitions, or medical emergencies who are willing to enter a structured One-Time Settlement (OTS) or EMI restructuring without hostile court battles.",
    legalBasis:
      "Under Section 19 and Section 21 of the Legal Services Authorities Act, 1987, matters referred to National Lok Adalats result in an award deemed to be a decree of a Civil Court. Lok Adalat awards are final, legally binding on both parties, and cannot be appealed in any court.",
    remedialActions: [
      {
        step: "Lodge Pre-Litigation Batch Referral with DLSA / SLSA",
        description:
          "Submit list of delinquent personal loan accounts to the District Legal Services Authority (DLSA) for pre-litigation conciliation notices.",
      },
      {
        step: "Execute Consent Terms & Structured Settlement / OTS",
        description:
          "Negotiate waiver of penal charges in exchange for upfront payment (25–40%) and structured post-dated cheques/NACH mandates for the remaining balance.",
      },
      {
        step: "Execute Non-Appealable Court Award",
        description:
          "Obtain the signed Lok Adalat Award. If the borrower defaults on the settlement schedule, the bank directly executes the award under Section 36 of CPC without re-proving the original debt.",
      },
    ],
    statutoryRule: "Legal Services Authorities Act, 1987 (Sections 19, 20 & 21)",
  },
];

export default function WhatBanksCanDoProblemTabs() {
  const [activeTabId, setActiveTabId] = useState<string>(SCENARIOS[0].id);

  const activeScenario = SCENARIOS.find((s) => s.id === activeTabId) || SCENARIOS[0];

  return (
    <div className="w-full bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
      {/* Tab Navigation Buttons */}
      <div className="flex border-b border-slate-200 overflow-x-auto bg-slate-50/70 p-1.5 gap-1.5 scrollbar-thin">
        {SCENARIOS.map((scenario) => {
          const isActive = activeTabId === scenario.id;
          return (
            <button
              key={scenario.id}
              type="button"
              onClick={() => setActiveTabId(scenario.id)}
              className={`shrink-0 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all duration-150 cursor-pointer text-left ${
                isActive
                  ? "bg-white text-red-600 shadow-sm border border-slate-200"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              {scenario.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Tab Body */}
      <div className="p-5 sm:p-7 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-red-600 bg-red-50 px-2 py-0.5 rounded border border-red-200 inline-block mb-1">
              {activeScenario.stage}
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900">
              {activeScenario.title}
            </h3>
          </div>
          <div className="text-right shrink-0">
            <span className="text-[11px] font-mono text-slate-400">
              {activeScenario.statutoryRule}
            </span>
          </div>
        </div>

        {/* Situation & Legal Basis Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/70">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Default Situation &amp; Trigger
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {activeScenario.situation}
            </p>
          </div>

          <div className="p-4 bg-red-50/50 rounded-xl border border-red-200/60">
            <h4 className="text-xs font-bold uppercase tracking-wider text-red-800 mb-1.5">
              Statutory Power &amp; Legal Framework
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {activeScenario.legalBasis}
            </p>
          </div>
        </div>

        {/* 3 Step Remedial Action Roadmap */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-3">
            Delinquency Remedial Unit Action Checklist
          </h4>
          <div className="space-y-3">
            {activeScenario.remedialActions.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-3.5 rounded-xl border border-slate-200/80 bg-white hover:border-slate-300 transition-colors"
              >
                <div className="w-6 h-6 rounded-lg bg-red-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                  {idx + 1}
                </div>
                <div>
                  <h5 className="text-xs sm:text-sm font-bold text-slate-900">
                    {item.step}
                  </h5>
                  <p className="text-xs text-slate-600 leading-relaxed mt-0.5">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Internal Cross Links */}
        <div className="pt-2 flex flex-wrap items-center justify-between text-xs text-slate-500 gap-3 border-t border-slate-100">
          <span>
            Related legal procedure:{" "}
            <Link
              href="/send-a-legal-notice/for-banks-to-recover-their-unpaid-dues"
              className="text-red-600 font-bold hover:underline"
            >
              Legal Notice for Bank Dues Recovery
            </Link>{" "}
            &bull;{" "}
            <Link
              href="/cheque-bounce-notice-timeline-section-138"
              className="text-red-600 font-bold hover:underline"
            >
              Section 138 NI Notice Timelines
            </Link>
          </span>
          <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
            RBI &amp; PSS Act Compliant
          </span>
        </div>
      </div>
    </div>
  );
}
