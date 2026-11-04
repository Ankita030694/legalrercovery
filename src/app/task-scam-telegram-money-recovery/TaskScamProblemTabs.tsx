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
    id: "golden-hour",
    tabLabel: "First 24 Hours",
    title: "Golden Hour Window: Immediate Action to Intercept Mule Accounts",
    cause:
      "Within hours of sending funds via UPI or IMPS to Telegram 'task handlers', the money is routed through automated mule account networks (Layer 1 to Layer 4) and converted into crypto (USDT) on P2P exchanges or withdrawn via ATMs. Calling your local police station or waiting for days gives syndicates time to drain every account.",
    legalBasis:
      "Under the Ministry of Home Affairs (MHA) Indian Cyber Crime Coordination Centre (I4C) protocol, reporting immediately via the 1930 Helpline or cybercrime.gov.in triggers an automated freeze API across interconnected beneficiary banks on the Citizen Financial Cyber Fraud Reporting and Management System (CFCFRMS).",
    steps: [
      {
        step: "Dial 1930 Immediately",
        description:
          "Keep your transaction UTR numbers, debit account number, beneficiary account/UPI IDs, and mobile number ready. Insist on immediate logging of all beneficiary UTRs.",
      },
      {
        step: "Capture Complete Telegram & Bank Audit Trail",
        description:
          "Export Telegram chat history, group member lists, admin usernames, payment QR codes, and take screenshots of the fake task dashboard balance before being removed.",
      },
      {
        step: "Submit Formal Written Dispute to Remitting Bank",
        description:
          "Email your bank's Cyber Cell and Principal Nodal Officer with the NCRP Acknowledgement Number demanding that they liaise with beneficiary banks under RBI risk frameworks.",
      },
    ],
    statutoryRule: "I4C CFCFRMS SOP & RBI Master Direction on Cyber Fraud Monitoring",
  },
  {
    id: "funds-frozen-bank",
    tabLabel: "Mule Account Frozen",
    title: "Money Is Frozen in Beneficiary Account, But Bank Won't Release It",
    cause:
      "After a prompt 1930 complaint, the police or beneficiary bank freezes the mule's account balance. However, the bank informs you that they cannot simply transfer the money back to your account because multiple victims have claimed against the same mule account, or the bank requires judicial authorization.",
    legalBasis:
      "Banks cannot unilaterally debit a frozen account without statutory immunity. The legal remedy is to file an application under Section 503 of the Bharatiya Nagarik Suraksha Sanhita, 2023 (BNSS) — formerly Section 451/457 CrPC — before the jurisdictional Chief Judicial Magistrate (CJM) or Metropolitan Magistrate seeking an order directing the bank to release the seized proceeds upon furnishing an indemnity bond.",
    steps: [
      {
        step: "Obtain Freeze Certificate / Lien Confirmation",
        description:
          "Request the Cyber Crime Police Investigating Officer (IO) or the beneficiary bank's Nodal Officer to issue an official letter stating the exact amount held in debit freeze under your NCRP complaint ID.",
      },
      {
        step: "File Section 503 BNSS Petition Before Magistrate",
        description:
          "Engage an advocate to petition the jurisdictional criminal court showing bank debit proof, NCRP acknowledgment, and IO seizure memo.",
      },
      {
        step: "Execute Indemnity Bond for Bank Release",
        description:
          "Upon court verification, the Magistrate directs the bank to remit the frozen sum to your verified source account against a standard indemnity undertaking.",
      },
    ],
    statutoryRule: "Section 503 Bharatiya Nagarik Suraksha Sanhita, 2023 (BNSS)",
  },
  {
    id: "withdrawal-tax-trap",
    tabLabel: "Withdrawal Tax Trap",
    title: "Scammers Demanding 20%–30% 'Tax', 'Margin Deposit' or 'Credit Score Repair'",
    cause:
      "When you attempt to withdraw your initial deposits and promised 'commissions', the Telegram admin claims your account is locked due to 'system errors', 'negative credit scores', or 'TDS tax requirements', demanding an additional ₹50,000 to ₹5,00,000 to release your accumulated funds.",
    legalBasis:
      "This is extortion and aggravated cheating under Sections 308(2) and 318(4) of the Bharatiya Nyaya Sanhita, 2023 (BNS). No legitimate company, merchant, or tax authority charges upfront 'unfreeze fees' through personal saving accounts. Any further deposit will be stolen instantly without releasing any money.",
    steps: [
      {
        step: "Immediately Halt All Further Fund Transfers",
        description:
          "Do not pay even a single rupee regardless of threats that your existing funds will be forfeited, or false claims that they will file a police case against you.",
      },
      {
        step: "Record Extortion Demands as Digital Evidence",
        description:
          "Screenshot all demands for additional fees, threats of fund forfeiture, and bank account numbers provided for 'tax deposits' for your police complaint.",
      },
      {
        step: "Report Aggravated Cyber Cheating",
        description:
          "Update your NCRP ticket and state cyber cell complaint to include charges under Section 318(4) BNS and Section 66D IT Act for extortionate digital deception.",
      },
    ],
    statutoryRule: "Sections 308(2) & 318(4) Bharatiya Nyaya Sanhita, 2023 (BNS)",
  },
  {
    id: "secondary-scam",
    tabLabel: "Fake Recovery Scammers",
    title: "Approached by 'Ethical Hackers' or 'Cyber Recovery Specialists' Promising 100% Refund",
    cause:
      "After posting on social media, Telegram groups, or forums about losing money, you receive direct messages from 'cyber recovery experts', 'white-hat hackers', or bogus 'law firms' claiming they can hack the scammer's database or retrieve your money within 24 hours for an advance retainer fee.",
    legalBasis:
      "This is secondary cyber fraud (the 'recovery scam'). In Indian jurisprudence, only authorized statutory bodies (Cyber Police, Enforcement Directorate, Magistrates under Section 503 BNSS, and RBI regulated entities) possess the legal authority to seize and disburse funds. Private third parties claiming to 'hack' or 'retrieve' funds are fraudsters using stolen victim lists.",
    steps: [
      {
        step: "Never Pay Upfront Retainer Fees to Unverified Online Contacts",
        description:
          "No legitimate advocate or investigator guarantees 100% scam recovery or asks for payments to anonymous UPI handles or cryptocurrency wallets.",
      },
      {
        step: "Verify Bar Council Credentials",
        description:
          "If consulting a legal professional, insist on verifying their State Bar Council enrolment number and engage only through formal, documented retainers.",
      },
      {
        step: "Report Secondary Scammer Profiles to Cyber Cell",
        description:
          "Submit the contact details and payment handles of the recovery scammer to 1930 as an auxiliary syndicate targeting fraud victims.",
      },
    ],
    statutoryRule: "Section 319 BNS (Cheating by Personation) & Section 66D IT Act",
  },
];

export default function TaskScamProblemTabs() {
  const [activeTab, setActiveTab] = useState<string>(PROBLEMS[0].id);
  const currentProblem = PROBLEMS.find((p) => p.id === activeTab) || PROBLEMS[0];

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200/90 shadow-sm p-4 sm:p-6 md:p-8 space-y-6">
      <div>
        <span className="text-[11px] font-black uppercase tracking-wider text-[#DC2626] block mb-1">
          Interactive Scenario Diagnostic
        </span>
        <h3 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 tracking-tight">
          Where Are You in the Telegram Scam Escalation Cycle?
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 mt-1">
          Select your current situation below to see the precise statutory route, risks, and next steps:
        </p>
      </div>

      {/* Tabs navigation */}
      <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-3" role="tablist">
        {PROBLEMS.map((prob) => {
          const isSelected = activeTab === prob.id;
          return (
            <button
              key={prob.id}
              role="tab"
              type="button"
              aria-selected={isSelected}
              onClick={() => setActiveTab(prob.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                isSelected
                  ? "bg-[#111827] text-white shadow-md shadow-slate-900/20"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              {prob.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Tab panel content */}
      <div className="space-y-5 animate-fadeIn">
        <div className="border-l-4 border-[#DC2626] pl-4 py-1">
          <h4 className="text-base sm:text-lg font-black text-slate-900">
            {currentProblem.title}
          </h4>
          <span className="text-[11px] font-bold text-red-600 uppercase tracking-wide">
            Statutory Governing Authority: {currentProblem.statutoryRule}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-red-50/60 border border-red-200/70 p-4 rounded-xl">
            <h5 className="text-xs font-black uppercase tracking-wider text-red-800 mb-1.5 flex items-center gap-1.5">
              <span>⚠</span> Critical Bottleneck / Trap
            </h5>
            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
              {currentProblem.cause}
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl">
            <h5 className="text-xs font-black uppercase tracking-wider text-slate-800 mb-1.5 flex items-center gap-1.5">
              <span>⚖</span> Legal Authority &amp; Jurisprudence
            </h5>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {currentProblem.legalBasis}
            </p>
          </div>
        </div>

        <div className="space-y-3 pt-2">
          <h5 className="text-xs font-black uppercase tracking-wider text-slate-900">
            Immediate Recommended Action Steps:
          </h5>
          <div className="space-y-2.5">
            {currentProblem.steps.map((st, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-3 bg-white rounded-xl border border-slate-200 shadow-2xs"
              >
                <span className="shrink-0 w-6 h-6 rounded-full bg-red-100 text-[#DC2626] font-black text-xs flex items-center justify-center">
                  {i + 1}
                </span>
                <div className="text-xs sm:text-sm">
                  <strong className="text-slate-900 block font-bold mb-0.5">
                    {st.step}
                  </strong>
                  <span className="text-slate-600 leading-relaxed">
                    {st.description}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
