"use client";

import React, { useState } from "react";

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
    id: "p2p-crypto",
    tabLabel: "P2P Crypto Traders",
    title: "Bank Account Debit Frozen Due to P2P Crypto (USDT) Sale on Binance or Bybit",
    cause:
      "You sold USDT or cryptocurrency on a P2P exchange (Binance, Bybit, KuCoin, or Bitget). The buyer transferred Indian Rupees (INR) to your bank account via UPI or IMPS. Unknown to you, the buyer was using defrauded money or acting as an intermediary for a cyber scam (such as a task scam, digital arrest scam, or illegal betting racket). When the original scam victim lodged an NCRP complaint on 1930, the police automated trace flagged every account that received the funds across Layers 2, 3, and 4, triggering an immediate debit freeze on your account.",
    legalBasis:
      "Under High Court jurisprudence (Tarun Kumar v. State of Gujarat 2024; Madras High Court in Dr. S. Radhakrishnan), innocent bona fide third-party sellers who gave valuable consideration (crypto assets) without knowledge of fraud cannot be treated as accused persons. Furthermore, police powers under Section 106 BNSS (Section 102 CrPC) do not permit freezing legitimate unrelated funds in the account beyond the specific credited sum.",
    steps: [
      {
        step: "Extract Complete P2P Order Receipt & Chat Logs",
        description:
          "Download the Binance/Bybit P2P order slip showing Order Number, buyer username, registered phone number, timestamp, USDT release proof, and escrow verification hash.",
      },
      {
        step: "Obtain Transaction Memo & NCRP Details from Bank",
        description:
          "Visit your home branch and obtain the official Freeze Notice or Requisition email containing the Cyber Police Station name, State, FIR or NCRP Acknowledgement Number, and Investigating Officer (IO) details.",
      },
      {
        step: "Submit Bona Fide Representation to the Cyber Crime IO",
        description:
          "Send a verified legal representation attaching your KYC, crypto ledger, order execution log, and bank statement demonstrating that you are an innocent merchant who provided market value in exchange for the credit.",
      },
    ],
    statutoryRule: "BNSS Section 106 / CrPC Section 102 & Gujarat HC Tarun Kumar Ruling",
  },
  {
    id: "freelancer-merchant",
    tabLabel: "Freelancers & Merchants",
    title: "Account Frozen After Receiving Client Inward Payment for Services Rendered",
    cause:
      "A freelance software developer, digital agency, graphic designer, or vendor received an invoice settlement or advance payment via UPI/NEFT. Days or weeks later, the bank placed a complete debit hold on the entire current or savings account. This occurs when the client's payer account was compromised or received tainted funds from an earlier fraudulent layer, pulling all subsequent legitimate commercial transactions into the police nodal freeze net.",
    legalBasis:
      "Under Section 106 BNSS, property can only be seized if there is a direct, proximate nexus between the property and the commission of an alleged offence. Genuine business consideration documented by GST invoices, client contracts, and service deliverables refutes any criminal mens rea. The police have no statutory power to stall legitimate commercial enterprise when commercial consideration is proven.",
    steps: [
      {
        step: "Compile Commercial Deliverables & Service Contracts",
        description:
          "Collate the original work agreement, purchase order, email correspondence, GST invoices, and deliverables (source code, designs, or project handover certificates).",
      },
      {
        step: "Demand Section 94 BNSS / Section 91 CrPC Clarification",
        description:
          "Have an advocate respond formally to the Cyber Cell, clarifying the transaction origin under Section 94 BNSS and requesting immediate removal of the business freeze.",
      },
      {
        step: "Serve Bank Nodal Officer for Commercial Hardship",
        description:
          "Issue a legal notice to the bank's Nodal Officer highlighting that halting payroll or statutory tax payments due to an unadjudicated third-party complaint exposes the bank to deficiency liability under the Consumer Protection Act, 2019.",
      },
    ],
    statutoryRule: "Section 94 BNSS (Section 91 CrPC) & Article 19(1)(g) Constitution of India",
  },
  {
    id: "total-vs-disputed",
    tabLabel: "Full Freeze vs Lien",
    title: "Bank Froze ₹10 Lakhs Balance Over a Minor ₹15,000 Disputed Transaction",
    cause:
      "Cyber cells routinely send automated omnibus requisition emails to banks instructing them to 'freeze the account'. Banks take the easiest administrative path and apply a blanket 'Total Debit Freeze' on the entire account balance, blocking lakhs or crores of rupees over a tiny disputed transaction (e.g., ₹5,000 to ₹50,000), paralyzing EMIs, rent, family medical expenses, and daily living.",
    legalBasis:
      "The Supreme Court of India in State of Maharashtra v. Tapas D. Neogy (1999) and various High Courts (Madras, Delhi, Bombay, and Telangana) have consistently held that freezing an entire bank account when the disputed fraud amount is only a fraction is disproportionate, arbitrary, and violates Article 21 (right to livelihood) and Article 300A (right to property). The freeze must be confined strictly to a 'Lien' on the disputed amount.",
    steps: [
      {
        step: "Verify Disputed Amount from Bank Operations",
        description:
          "Demand a written statement from the branch operations manager stating the exact disputed figure mentioned in the cyber cell requisition email.",
      },
      {
        step: "Serve Legal Notice Demanding Conversion to Lien-Only Hold",
        description:
          "Issue an advocate notice to the Bank Branch Manager and Cyber Cell demanding immediate unfreezing of non-disputed funds and placing a lien only on the disputed quantum.",
      },
      {
        step: "File Magistrate Application under Section 503 BNSS / 457 CrPC",
        description:
          "If the bank or IO refuses, approach the jurisdictional Magistrate offering an indemnity bond or fixed deposit lien for the disputed sum, compelling full release of the account.",
      },
    ],
    statutoryRule: "Article 21 & 300A Constitution of India & Delhi HC Lien Precedents",
  },
  {
    id: "inter-state-police",
    tabLabel: "Inter-State Cyber Cell",
    title: "Notice Issued by Cyber Police in Another State (Gujarat, Telangana, Kerala, etc.)",
    cause:
      "Victims of cyber scams typically lodge complaints in their home police station (e.g., Cyberabad in Telangana, Ahmedabad in Gujarat, or Kozhikode in Kerala). The cyber police issue freezing orders pan-India. Account holders in Maharashtra, Delhi, Uttar Pradesh, or Karnataka suddenly discover their accounts blocked by an out-of-state police department, making in-person visits cost-prohibitive and impractical.",
    legalBasis:
      "Section 106(3) BNSS explicitly mandates that every police officer seizing property must report the seizure forthwith to the jurisdictional Magistrate. Police cannot force innocent citizens from other states to appear physically for preliminary preliminary inquiries when electronic records can be submitted via email or through an authorized legal representative.",
    steps: [
      {
        step: "Verify Official Police Station Email & IO Contact",
        description:
          "Confirm the genuine cyber crime station email ID from the official state police directory (avoiding impersonation or phishing contacts).",
      },
      {
        step: "Submit Representation Electronically via Advocate",
        description:
          "Submit a sworn affidavit and documented evidentiary dossier electronically under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA).",
      },
      {
        step: "Secure Formal No Objection Certificate (NOC)",
        description:
          "Follow up for an official closure letter or de-freeze NOC issued directly from the Cyber Cell's official police domain to the bank's central law enforcement portal.",
      },
    ],
    statutoryRule: "Section 106(3) BNSS, Section 63 BSA 2023 & Section 457 CrPC",
  },
];

export default function CyberCellFreezeProblemTabs() {
  const [activeTab, setActiveTab] = useState<string>(PROBLEMS[0].id);
  const currentProblem = PROBLEMS.find((p) => p.id === activeTab) || PROBLEMS[0];

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden">
      {/* Tab Navigation Header */}
      <div className="flex border-b border-slate-200 overflow-x-auto bg-slate-50/70 p-2 gap-1.5 scrollbar-thin">
        {PROBLEMS.map((tab) => {
          const isActive = tab.id === activeTab;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                isActive
                  ? "bg-white text-red-600 shadow-xs border border-slate-200/80 font-extrabold"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              {tab.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Tab Content */}
      <div className="p-5 sm:p-7 md:p-8 space-y-6">
        <div>
          <span className="text-[11px] font-extrabold px-3 py-1 bg-red-50 text-red-600 rounded-full uppercase tracking-wider inline-block mb-2">
            Scenario Adjudication
          </span>
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 leading-snug">
            {currentProblem.title}
          </h3>
        </div>

        {/* Cause & Legal Basis Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70 space-y-2">
            <h4 className="text-xs uppercase font-extrabold text-slate-500 tracking-wider flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              Root Trigger &amp; Mechanism
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {currentProblem.cause}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70 space-y-2">
            <h4 className="text-xs uppercase font-extrabold text-slate-500 tracking-wider flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
              Statutory Protection &amp; Legal Stand
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {currentProblem.legalBasis}
            </p>
          </div>
        </div>

        {/* Actionable Steps */}
        <div className="space-y-3">
          <h4 className="text-xs uppercase font-extrabold text-slate-500 tracking-wider">
            Mandatory Legal Action Plan:
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {currentProblem.steps.map((st, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl border border-slate-200 bg-white shadow-2xs space-y-1.5"
              >
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-red-100 text-red-700 text-[11px] font-black flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <span className="text-xs font-bold text-slate-900 leading-tight">
                    {st.step}
                  </span>
                </div>
                <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">
                  {st.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Rule Strip */}
        <div className="p-3 bg-red-50/60 border border-red-100 rounded-xl flex items-center justify-between text-xs text-red-900">
          <span className="font-semibold">Governing Statutory Authority:</span>
          <span className="font-black text-red-700">{currentProblem.statutoryRule}</span>
        </div>
      </div>
    </div>
  );
}
