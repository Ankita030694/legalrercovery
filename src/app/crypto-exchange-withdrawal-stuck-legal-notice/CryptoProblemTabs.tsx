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
    id: "p2p-cyber-lien",
    tabLabel: "P2P Cyber Cell Freeze",
    title: "Exchange Freezes Account Due to P2P Counterparty Police Complaint",
    cause:
      "You sold USDT or Bitcoin via Peer-to-Peer (P2P) trading. The buyer paid you INR from a bank account that had received proceeds from an unrelated online cyber scam (e.g. Telegram task scam or digital arrest fraud). When the primary scam victim lodged a complaint on the National Cyber Crime Reporting Portal (1930), the investigating officer issued a blanket requisition to freeze all downstream beneficiary accounts under Section 106 of the Bharatiya Nagarik Suraksha Sanhita, 2023 (formerly Section 102 CrPC). The exchange or your linked bank placed a lien on your entire wallet balance.",
    legalBasis:
      "Section 106 BNSS (Police seizure of property); Bombay High Court in 'Dr. S. Radhakrishnan v. State of Maharashtra' and Delhi High Court in 'Farhan v. State (NCT of Delhi)' establishing that innocent bona fide merchants cannot suffer disproportionate total wallet freezes for isolated counterparty transactions.",
    steps: [
      {
        step: "Demand Notice Copy & Acknowledgment Number",
        description:
          "Write to the exchange's Nodal Grievance Officer and linked nodal bank demanding the formal Cyber Cell Notice under Section 94 BNSS / Section 91 CrPC, including the Crime Number, Police Station, Investigating Officer (IO) name, and disputed transaction amount.",
      },
      {
        step: "Isolate the Disputed Amount Only",
        description:
          "Submit verified P2P trading order logs, chat records, and bank statements proving you are a bona fide vendor. Demand that the exchange mark a lien only on the exact disputed sum rather than freezing your entire portfolio or innocent INR balance.",
      },
      {
        step: "Serve Representation & Legal Notice",
        description:
          "Issue a formal advocate representation to the concerned Cyber Cell IO demonstrating lack of mens rea and bona fide consideration under Section 114 BNSS, alongside a statutory demand notice to the exchange for releasing non-tainted funds.",
      },
    ],
    statutoryRule:
      "Under high court directives, police freeze orders apply strictly to the specific disputed quantum. A total account freeze on an innocent crypto trader without showing complicity violates Article 19(1)(g) and Article 300A of the Constitution of India.",
  },
  {
    id: "arbitrary-aml-lock",
    tabLabel: "Arbitrary AML/KYC Lock",
    title: "Unilateral 'Under Review' or AML Withdrawal Freeze with No Police Requisition",
    cause:
      "The exchange allows deposits and trading but suddenly disables crypto or fiat withdrawals citing 'internal security risk', 'enhanced due diligence (EDD)', or automated AML algorithmic triggers. Customer support repeats canned responses for weeks without specifying the violation or citing an official law enforcement requisition.",
    legalBasis:
      "Consumer Protection Act, 2019 Section 2(11) (deficiency in service) and Section 2(47) (unfair trade practice); Prevention of Money Laundering (Maintenance of Records) Rules, 2005; Indian Contract Act, 1872 Section 73 (breach of contract).",
    steps: [
      {
        step: "Submit Statutory KYC Grievance",
        description:
          "Submit complete re-verification documents (Aadhaar, PAN, live video KYC, bank statement) and log a formal ticket with the designated Grievance Redressal Officer under Rule 3(2) of Consumer Protection (E-Commerce) Rules, 2020.",
      },
      {
        step: "Demand Section 12 PMLA Justification",
        description:
          "Demand written confirmation whether the freeze is pursuant to an official government directive or an internal platform restriction. FIU-IND registered VASPs are required to maintain transparent records and cannot indefinitely withhold settled customer property without cause.",
      },
      {
        step: "15-Day Advocate Notice & e-Jagriti Escalation",
        description:
          "Serve a 15-day statutory demand notice through an advocate. If the exchange fails to restore withdrawal capabilities, file a consumer complaint on the national e-Jagriti portal claiming full asset release plus mental agony compensation.",
      },
    ],
    statutoryRule:
      "An exchange cannot accept customer deposits and subsequently retain customer property without statutory authority. Withholding liquidated INR or digital tokens without a judicial or police freeze constitutes actionable deficiency in service.",
  },
  {
    id: "fiat-gateway-failure",
    tabLabel: "Stuck INR Bank Withdrawal",
    title: "INR Withdrawal Debited from Exchange Balance but Not Credited to Bank Account",
    cause:
      "You initiated an INR withdrawal to your registered Indian bank account. The exchange deducted the balance from your trading wallet and marked the status as 'Processing', 'Settled', or 'Success'. However, the funds never reached your bank account due to an intermediate payment aggregator (PA) nodal escrow glitch, API timeout, or bank reconciliation error.",
    legalBasis:
      "RBI Circular DPSS.CO.PD No.629/02.01.014/2019-20 on Harmonisation of Turn Around Time (TAT) and Failed Transaction Compensation; Consumer Protection Act, 2019 Section 2(11).",
    steps: [
      {
        step: "Obtain 12-Digit RRN / UTR Reference",
        description:
          "Demand the official 12-digit Unique Transaction Reference (UTR) or Acquirer Reference Number (ARN) from the exchange support team to verify the banking settlement trail.",
      },
      {
        step: "File Inward Credit Confirmation with Recipient Bank",
        description:
          "Present the UTR number to your home bank branch manager or grievance desk. If the bank confirms no inward funds were received, obtain a formal non-receipt memo or negative confirmation statement.",
      },
      {
        step: "Serve Notice for Payment Gateway Liability",
        description:
          "Issue a legal notice holding both the exchange and its acquiring payment aggregator jointly liable under RBI TAT rules for immediate refund plus statutory interest.",
      },
    ],
    statutoryRule:
      "Under Reserve Bank of India failed transaction directives, transactions debited from a user account must be reversed within prescribed timelines (T+1 to T+5). Delayed nodal settlements trigger liability for consumer compensation.",
  },
  {
    id: "hack-moratorium-dispute",
    tabLabel: "Exchange Hack / Moratorium",
    title: "Exchange Halts Withdrawals Following Cyberattack, Hack, or Foreign Restructuring",
    cause:
      "The exchange experiences a security compromise, cold-wallet theft, or operational liquidity collapse (such as the July 2024 WazirX cyberattack). The platform freezes all crypto and INR withdrawals and attempts to enforce token haircuts or offshore restructuring schemes (e.g. Singapore Scheme of Arrangement under Section 210 of the Singapore Companies Act).",
    legalBasis:
      "Indian Contract Act, 1872 (Bailment under Section 148; Duty of Bailee under Section 151 & 152); Consumer Protection Act, 2019 Section 100; Supreme Court of India precedents on the non-excludability of consumer remedies by foreign arbitration clauses.",
    steps: [
      {
        step: "Distinguish Fiat INR Balances from Digital Assets",
        description:
          "Verify whether your stuck funds are INR balances held in Indian scheduled bank nodal accounts or virtual digital assets (tokens). Fiat balances held by Indian operating entities (such as Zanmai Labs) are subject to Indian banking laws and consumer jurisdictions, distinct from offshore holding companies.",
      },
      {
        step: "Challenge Foreign Adhesion Arbitration Clauses",
        description:
          "Standard-form user agreements requiring individual users to arbitrate in foreign seats (e.g. Singapore SIAC) are unenforceable against Indian retail consumers seeking statutory relief for consumer deficiency under Section 100 of the Consumer Protection Act.",
      },
      {
        step: "Initiate Criminal & Consumer Collective Action",
        description:
          "Lodge complaints under Sections 316 (criminal breach of trust) and 318 (cheating) of the Bharatiya Nyaya Sanhita, 2023 with cyber police authorities, alongside representative consumer proceedings under Section 35(1)(c) of the Consumer Protection Act.",
      },
    ],
    statutoryRule:
      "Custodians of digital and fiat assets are statutory bailees under Indian law. They owe an ordinary prudent person standard of care (Section 151 Contract Act) and cannot shift cybersecurity negligence onto end-users through unilateral terms of service.",
  },
];

export default function CryptoProblemTabs() {
  const [activeTab, setActiveTab] = useState<string>(PROBLEMS[0].id);
  const current = PROBLEMS.find((p) => p.id === activeTab) || PROBLEMS[0];

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      {/* Tab Navigation Header */}
      <div
        role="tablist"
        aria-label="Crypto Withdrawal Problem Scenarios"
        className="flex flex-wrap sm:flex-nowrap border-b border-slate-200 bg-slate-50/80 p-1.5 gap-1.5 overflow-x-auto"
      >
        {PROBLEMS.map((prob) => {
          const isActive = prob.id === activeTab;
          return (
            <button
              key={prob.id}
              role="tab"
              aria-selected={isActive}
              aria-controls={`panel-${prob.id}`}
              id={`tab-${prob.id}`}
              onClick={() => setActiveTab(prob.id)}
              className={`flex-1 min-w-[130px] sm:min-w-0 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all text-center cursor-pointer ${
                isActive
                  ? "bg-white text-slate-900 shadow-sm border border-slate-200/80 font-black text-[#DC2626]"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/60"
              }`}
            >
              {prob.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Tab Content Panel */}
      <div
        id={`panel-${current.id}`}
        role="tabpanel"
        aria-labelledby={`tab-${current.id}`}
        className="p-5 sm:p-7 md:p-8 space-y-6"
      >
        <div>
          <span className="text-[11px] font-black uppercase tracking-wider text-[#DC2626] bg-red-50 border border-red-200 px-2.5 py-0.5 rounded-md inline-block mb-2">
            Dispute Scenario Diagnosis
          </span>
          <h3 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 leading-snug">
            {current.title}
          </h3>
        </div>

        {/* Why it happens */}
        <div className="space-y-2">
          <h4 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-700">
            Factual &amp; Technical Root Cause
          </h4>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-200/80">
            {current.cause}
          </p>
        </div>

        {/* Legal Basis */}
        <div className="space-y-2">
          <h4 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-700">
            Governing Legal Statutes &amp; Precedents
          </h4>
          <p className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed bg-red-50/50 p-4 rounded-xl border border-red-100">
            {current.legalBasis}
          </p>
        </div>

        {/* Step-by-Step Action */}
        <div className="space-y-3">
          <h4 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-700">
            Immediate 3-Step Legal Resolution Protocol
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {current.steps.map((st, i) => (
              <div
                key={i}
                className="bg-white border border-slate-200 p-4 rounded-xl shadow-2xs space-y-1.5"
              >
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-slate-900 text-white text-[11px] font-black flex items-center justify-center shrink-0">
                    {i + 1}
                  </span>
                  <span className="text-xs font-black text-slate-900 leading-tight">
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

        {/* Statutory Rule Banner */}
        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl text-xs leading-relaxed border-l-4 border-[#DC2626]">
          <span className="font-black text-[#EF4444] uppercase tracking-wider block mb-0.5 text-[10px]">
            Key Legal Rule
          </span>
          {current.statutoryRule}
        </div>

        {/* Quick Context Link */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-100 text-xs">
          <span className="text-slate-500 font-medium">
            Need legal intervention against an uncooperative platform?
          </span>
          <Link
            href="/legal-notice-charges"
            className="text-[#DC2626] font-bold hover:underline inline-flex items-center gap-1"
          >
            Review Legal Notice Pricing &amp; Timelines →
          </Link>
        </div>
      </div>
    </div>
  );
}
