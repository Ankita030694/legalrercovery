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
    id: "wrong-account-typo",
    tabLabel: "Account Number Typo",
    title: "Accidental Single-Digit Typo in Beneficiary Account Number (IMPS/NEFT)",
    cause:
      "Under Reserve Bank of India (RBI) circular DPSS (CO) EPPD No. 863/2010-11, electronic fund transfers (NEFT, RTGS, IMPS) are processed solely based on the beneficiary account number, without matching the account holder's name. A single-digit transposition error routes your money into a complete stranger's bank account instantly.",
    legalBasis:
      "Section 72 of the Indian Contract Act, 1872 explicitly mandates that any person to whom money has been paid by mistake must repay or return it. In Mahabir Kishore v. State of MP ((1989) 4 SCC 1), the Supreme Court affirmed that accidental credits create an immediate obligation of restitution against unjust enrichment.",
    steps: [
      {
        step: "Submit Stamped Application to Home Branch",
        description:
          "Visit your home bank branch within 24 hours with our printed application, debit SMS, and bank statement. Obtain a dated, stamped receiving acknowledgment from the Branch Manager.",
      },
      {
        step: "Trigger Inter-Bank Administrative Lien",
        description:
          "Require your Branch Manager to dispatch an official inter-bank dispute message to the destination bank's Nodal Officer to place an administrative hold (lien) before the money is withdrawn.",
      },
      {
        step: "Enforce Section 72 Notice if Stalled",
        description:
          "If the destination bank confirms the recipient was contacted but refuses consent, serve an Advocate Demand Notice citing Section 72 Contract Act and Section 314 BNS.",
      },
    ],
    statutoryRule: "Section 72 Indian Contract Act, 1872 & RBI DPSS Circular 863/2010-11",
  },
  {
    id: "wrong-upi-transfer",
    tabLabel: "Wrong UPI / Phone Transfer",
    title: "Wrong UPI Remittance via PhonePe, Google Pay, Paytm, or BHIM",
    cause:
      "When transferring money via UPI, selecting an outdated contact number from your chat history or typing an incorrect Virtual Payment Address (VPA, e.g. name@oksbi) immediately debits your account and settles instantly on NPCI's instant payment switch into the wrong user's UPI-linked bank account.",
    legalBasis:
      "Under National Payments Corporation of India (NPCI) guidelines and the Unified Dispute and Issue Resolution (UDIR) framework, users can formally dispute transactions under the category 'Incorrectly Transferred to Another Account'. Destination banks are obligated to flag the credit and initiate a consent-based reversal.",
    steps: [
      {
        step: "Log In-App Dispute & Note 12-Digit RRN",
        description:
          "Open your payment app (Google Pay / PhonePe / Paytm), go to the transaction history, and select 'Dispute Transaction' > 'Wrong Beneficiary Transfer'. Record the 12-digit UPI RRN.",
      },
      {
        step: "File NPCI Dispute Portal Escalation",
        description:
          "Visit npci.org.in > Dispute Redressal Mechanism > Complaint > Transaction. Enter the 12-digit RRN and choose issue 'Incorrectly Transferred to Another Account'.",
      },
      {
        step: "Submit Physical Format to Account Branch",
        description:
          "Submit our UPI Wrong Transfer Format to your bank's branch manager so they can submit a formal inter-bank recall on the NPCI dispute management system.",
      },
    ],
    statutoryRule: "NPCI UDIR Operational Rules & RBI Digital Payment Directives",
  },
  {
    id: "recipient-refusal",
    tabLabel: "Recipient Refuses to Return",
    title: "Unintended Recipient Refuses Consent or Withdraws/Spends the Money",
    cause:
      "Under banking privacy regulations, a bank cannot unilaterally debit a beneficiary's account without their explicit consent. Some unintended recipients exploit this rule by ignoring bank phone calls, withdrawing the cash, or falsely asserting that the money was sent to them as a gift or debt payment.",
    legalBasis:
      "Knowing retention, withdrawal, or conversion of money received by mistake constitutes Dishonest Misappropriation of Property under Section 314 of the Bharatiya Nyaya Sanhita, 2023 (BNS) [formerly Section 403 IPC] and Criminal Breach of Trust under Section 316 BNS. In Kotak Mahindra Bank v. State of Maharashtra, the Bombay High Court upheld criminal FIRs against recalcitrant recipients.",
    steps: [
      {
        step: "Obtain Written Endorsement from Bank",
        description:
          "Obtain an official written communication or email from your bank or the destination branch confirming that the beneficiary was notified of the mistake but refused consent.",
      },
      {
        step: "Serve Advocate Legal Demand Notice",
        description:
          "Have an advocate dispatch a formal 15-day statutory legal notice via Registered Speed Post and WhatsApp, putting the recipient on notice for civil summary suit and criminal prosecution under BNS 314/316.",
      },
      {
        step: "Initiate Summary Suit & Police Complaint",
        description:
          "If the recipient ignores the notice, file a Summary Suit under Order XXXVII CPC for debt restitution alongside an FIR for criminal misappropriation.",
      },
    ],
    statutoryRule: "Section 314 & 316 BNS 2023 & Order XXXVII Code of Civil Procedure, 1908",
  },
  {
    id: "bank-inaction",
    tabLabel: "Bank Stalling / Inaction",
    title: "Home Bank Branch Refuses to Help or Tells You to Deal with It Privately",
    cause:
      "Branch officials often tell customers 'we cannot do anything because the other account is in a different bank' or casually instruct them to visit the recipient's branch in person. This bureaucratic buck-passing violates established banking customer service standards and RBI customer grievance directions.",
    legalBasis:
      "In State Bank of India v. District Consumer Forum, the National Consumer Disputes Redressal Commission (NCDRC) held that a bank's failure to swiftly transmit an inter-bank reversal or lien request constitutes gross deficiency in service under Section 2(11) of the Consumer Protection Act, 2019, making the bank liable to reimburse the customer with interest.",
    steps: [
      {
        step: "Escalate to Principal Nodal Officer",
        description:
          "Email the Bank's Principal Nodal Officer attaching your stamped branch application copy and noting that the local branch failed to transmit an inter-bank request.",
      },
      {
        step: "Lodge RBI Integrated Ombudsman Complaint",
        description:
          "After 30 days of bank inaction, file an online complaint on cms.rbi.org.in under the RBI Integrated Ombudsman Scheme claiming full compensation plus mental agony damages.",
      },
      {
        step: "File e-Jagriti Consumer Case for Deficiency",
        description:
          "File an online consumer complaint on e-jagriti.gov.in against your bank for deficiency in service, claiming reimbursement of the lost sum and litigation expenses.",
      },
    ],
    statutoryRule: "Section 2(11) Consumer Protection Act, 2019 & RB-Integrated Ombudsman Scheme 2021",
  },
];

export default function WrongTransferProblemTabs() {
  const [activeTab, setActiveTab] = useState<string>(PROBLEMS[0].id);

  const selectedProblem = PROBLEMS.find((p) => p.id === activeTab) || PROBLEMS[0];

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 shadow-sm p-4 sm:p-6 md:p-8 space-y-6">
      {/* Header */}
      <div>
        <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-slate-800 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
          Archetype B3 Problem Selector
        </span>
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 mt-2">
          Select Your Specific Wrong Transfer Dispute Scenario
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 mt-1">
          Click any common banking or UPI transfer bottleneck below to see the operational cause, statutory rule, and immediate 3-step legal fix:
        </p>
      </div>

      {/* ARIA Tablist */}
      <div
        role="tablist"
        aria-label="Wrong Account Money Transfer Scenarios"
        className="flex flex-wrap gap-2 border-b border-slate-200 pb-3"
      >
        {PROBLEMS.map((problem) => {
          const isSelected = activeTab === problem.id;
          return (
            <button
              key={problem.id}
              role="tab"
              id={`tab-${problem.id}`}
              aria-selected={isSelected}
              aria-controls={`panel-${problem.id}`}
              onClick={() => setActiveTab(problem.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                isSelected
                  ? "bg-[#404447] text-white shadow-xs"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              {problem.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Tab Panel */}
      <div
        role="tabpanel"
        id={`panel-${selectedProblem.id}`}
        aria-labelledby={`tab-${selectedProblem.id}`}
        className="space-y-5 focus:outline-none"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
          <h4 className="text-base sm:text-lg md:text-xl font-extrabold text-slate-900">
            {selectedProblem.title}
          </h4>
          <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200 shrink-0">
            {selectedProblem.statutoryRule}
          </span>
        </div>

        {/* Cause & Legal Basis Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500 block mb-1">
              Operational Bottleneck &amp; Cause
            </span>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {selectedProblem.cause}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-700 block mb-1">
              Statutory Legal Grounds &amp; Precedent
            </span>
            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
              {selectedProblem.legalBasis}
            </p>
          </div>
        </div>

        {/* 3-Step Action Plan */}
        <div className="space-y-3 pt-2">
          <h5 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-800">
            3-Step Practical Fix For This Scenario
          </h5>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {selectedProblem.steps.map((s, idx) => (
              <div
                key={idx}
                className="p-3.5 bg-white rounded-xl border border-slate-200 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-red-600 block mb-1">
                    Step {idx + 1}
                  </span>
                  <strong className="text-xs sm:text-sm font-bold text-slate-900 block mb-1">
                    {s.step}
                  </strong>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {s.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
