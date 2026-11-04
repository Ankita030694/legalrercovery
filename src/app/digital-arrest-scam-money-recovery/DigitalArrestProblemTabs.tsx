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
    id: "fake-cbi-video-call",
    tabLabel: "Fake CBI / Police Call",
    title: "Psychological Isolation: Posing as Police, CBI, or ED via Video Call",
    cause:
      "Scammers initiate contact via IVR or WhatsApp claiming that a parcel containing contraband (illegal narcotics, forged passports, or SIM cards) dispatched in your name has been intercepted by Mumbai Customs or FedEx. You are immediately connected via Skype or WhatsApp video call to an operative wearing an authentic-looking police uniform in front of a synthetic police station backdrop with official logos, who threatens immediate physical arrest under non-bailable terror or money laundering charges unless you comply with 'digital custody'.",
    legalBasis:
      "There is no concept of 'Digital Arrest' under the Bharatiya Nagarik Suraksha Sanhita, 2023 (BNSS) or any statutory law in India. The Ministry of Home Affairs (MHA) and the Indian Cybercrime Coordination Centre (I4C) have issued repeated national advisories affirming that no law enforcement agency (CBI, ED, State Police, or Customs) ever arrests citizens over video calls or demands court appearance on Skype. This constitutes cognizable criminal offences under Section 204 (Impersonation of a public servant), Section 318(4) (Cheating and dishonestly inducing delivery of property), and Section 308 (Extortion) of the Bharatiya Nyaya Sanhita, 2023, read with Section 66D of the Information Technology Act, 2000.",
    steps: [
      {
        step: "Sever Communication Immediately",
        description:
          "Terminate the Skype or WhatsApp call instantly. Do not negotiate, apologize, or explain. True law enforcement officers serve physical summons under Section 35 BNSS (Section 41A CrPC); they never conduct remote custodial interrogations.",
      },
      {
        step: "Preserve Call Logs & Video Metadata",
        description:
          "Capture screenshots of the caller's profile, phone numbers, Skype handles, fake arrest warrants, and synthetic CBI letters before blocking. Export chat transcripts as primary digital evidence under Section 63 of Bharatiya Sakshya Adhiniyam, 2023.",
      },
      {
        step: "Verify Authenticity with Local Station",
        description:
          "If in doubt, visit your nearest jurisdictional police station in person. Inform the duty officer that an extortion racket is attempting an impersonation scam using fabricated police credentials.",
      },
    ],
    statutoryRule: "BNS Sections 204, 308, 318(4) & IT Act Section 66D",
  },
  {
    id: "rbi-escrow-transfer",
    tabLabel: "Forced 'RBI' Transfer",
    title: "Coerced Asset Liquidation: Sending Funds to 'Government Verification' Accounts",
    cause:
      "Under continuous camera surveillance and fabricated threats of freezing all family assets, victims are coerced into liquidating fixed deposits, mutual funds, or gold loans and transferring funds via RTGS/IMPS to a designated 'Reserve Bank of India Secret Supervisory Account' or 'Supreme Court Escrow Account' for financial clearance.",
    legalBasis:
      "The Reserve Bank of India, CBI, and judicial courts do not maintain individual citizen escrow accounts, clearance pools, or verification vaults. The accounts provided by fraudsters are commercial bank accounts belonging to 'mules'—individuals whose credentials were rented, stolen, or purchased through rogue telegram syndicates. Transferring funds under criminal intimidation creates an actionable cause for tracing under the National Cybercrime Reporting Portal (NCRP) and banking regulations.",
    steps: [
      {
        step: "Activate the 1930 Cyber Fraud Helpline Within Minutes",
        description:
          "Dial 1930 or submit an incident on cybercrime.gov.in within the 'Golden Hour'. Provide the exact 12-digit UTR number, your bank account details, beneficiary account number, and IFSC code.",
      },
      {
        step: "Demand Immediate Beneficiary Account Freeze via CFCFRMS",
        description:
          "The I4C Citizen Financial Cyber Fraud Reporting Management System sends automated API alerts to the beneficiary bank to place an immediate debit lien on the recipient mule account.",
      },
      {
        step: "Notify Your Home Branch for IMPS/RTGS Recall",
        description:
          "Submit a formal written dispute and fraud recall memo to your bank branch manager requesting emergency inter-bank communication under RBI fraud guidelines.",
      },
    ],
    statutoryRule: "I4C CFCFRMS Protocol & RBI Master Direction on Cyber Fraud",
  },
  {
    id: "frozen-mule-account",
    tabLabel: "Frozen Account Release",
    title: "Funds Frozen in Mule Bank Account: How to Compel Release to Victim",
    cause:
      "Following prompt 1930 reporting, the beneficiary bank freezes the transferred funds or puts a debit lien on the mule account. However, when the victim visits the bank or contacts the manager, the bank refuses to return the money, stating that only a formal court order or police release certificate can authorize the reversal.",
    legalBasis:
      "Under Indian banking practice and Section 106 BNSS (Section 102 CrPC), police can freeze suspect bank accounts, but banks cannot unilaterally reverse seized funds to a private complainant without judicial authorization. The established legal remedy is to file an application under Section 457 of the Bharatiya Nagarik Suraksha Sanhita, 2023 (formerly Section 457 CrPC) before the jurisdictional Judicial Magistrate / Metropolitan Magistrate, establishing rightful ownership of the seized property and requesting release against an indemnity bond.",
    steps: [
      {
        step: "Obtain Cyber Cell Freeze Acknowledgment & Seizure Report",
        description:
          "Obtain the formal acknowledgment from the Cyber Police confirming that your stolen funds have been tagged and frozen under a specific Crime Number / FIR.",
      },
      {
        step: "File Section 457 BNSS Petition Before the Magistrate",
        description:
          "Engage an advocate to petition the trial magistrate under Section 457 BNSS, placing bank statements, transaction UTR slips, and police freeze reports on record.",
      },
      {
        step: "Execute Indemnity Bond for Final Fund Transfer",
        description:
          "Upon judicial verification, the Magistrate directs the beneficiary bank to issue a banker's cheque or RTGS refund of the frozen amount to the victim against an indemnity bond.",
      },
    ],
    statutoryRule: "Section 457 BNSS 2023 (formerly Section 457 CrPC 1973)",
  },
  {
    id: "bank-negligence",
    tabLabel: "Bank KYC & AML Negligence",
    title: "Holding Remitting & Beneficiary Banks Liable for Mule Infrastructure",
    cause:
      "A significant portion of cyber fraud thrives because commercial banks violate basic RBI KYC norms—allowing dummy current accounts to receive crores in rapid transfers and disperse funds within seconds without triggering automated Anti-Money Laundering (AML) transaction alerts or verifying identity.",
    legalBasis:
      "Under the RBI Master Direction on Know Your Customer (KYC) Directions, 2016 (updated 2024/2026), banks bear strict regulatory responsibility to identify Ultimate Beneficial Owners (UBOs) and monitor atypical velocity. If a beneficiary bank failed in fundamental KYC verification or ignored internal AML red flags, and the victim's remitting bank delayed transacting recall alerts despite immediate notification, both institutions exhibit deficiency of service under Section 2(11) of the Consumer Protection Act, 2019.",
    steps: [
      {
        step: "Issue Advocate Statutory Legal Notice to Both Banks",
        description:
          "Serve a formal statutory legal notice detailing the chronology, transaction UTRs, 1930 ticket number, and specific KYC/AML failures of the beneficiary branch.",
      },
      {
        step: "File Complaint with Principal Nodal Officers",
        description:
          "Escalate the dispute to the Principal Nodal Officer (PNO) and Internal Ombudsman of both banks, seeking zero liability compensation or settlement.",
      },
      {
        step: "Escalate to RBI Integrated Ombudsman (CMS Portal)",
        description:
          "If the bank repudiates liability or fails to resolve the complaint within 30 days, lodge an online complaint on cms.rbi.org.in under the Reserve Bank - Integrated Ombudsman Scheme (RB-IOS, 2021).",
      },
    ],
    statutoryRule: "RBI Master Direction on KYC, 2016 & Consumer Protection Act 2019 s.2(11)",
  },
];

export default function DigitalArrestProblemTabs() {
  const [activeTab, setActiveTab] = useState(PROBLEMS[0].id);
  const currentProblem = PROBLEMS.find((p) => p.id === activeTab) || PROBLEMS[0];

  return (
    <div className="w-full bg-white border border-slate-200 rounded-2xl p-4 sm:p-7 shadow-xs">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4 mb-6">
        <div>
          <span className="text-[11px] sm:text-xs font-black uppercase tracking-wider text-red-600">
            Emergency Scenario Navigator
          </span>
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 mt-0.5">
            Identify Your Specific Situation &amp; Immediate Countermeasures
          </h3>
        </div>
        <span className="text-xs font-medium text-slate-500">
          Click scenario below to view action path
        </span>
      </div>

      {/* Tab Navigation Buttons */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-6">
        {PROBLEMS.map((problem) => (
          <button
            key={problem.id}
            type="button"
            onClick={() => setActiveTab(problem.id)}
            className={`p-3 text-left rounded-xl border text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === problem.id
                ? "bg-slate-900 text-white border-slate-900 shadow-sm"
                : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
            }`}
          >
            <span className="block truncate">{problem.tabLabel}</span>
          </button>
        ))}
      </div>

      {/* Active Tab Panel */}
      <div className="space-y-5 bg-slate-50/70 border border-slate-200/80 rounded-xl p-4 sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h4 className="text-base sm:text-lg font-bold text-slate-900">
            {currentProblem.title}
          </h4>
          <span className="text-[11px] sm:text-xs font-extrabold px-2.5 py-1 bg-red-100 text-red-800 rounded-md">
            {currentProblem.statutoryRule}
          </span>
        </div>

        <div className="space-y-3 text-xs sm:text-sm text-slate-700">
          <div>
            <strong className="text-slate-900 font-bold block mb-1">
              Modus Operandi &amp; Threat Anatomy:
            </strong>
            <p className="leading-relaxed bg-white p-3 rounded-lg border border-slate-200">
              {currentProblem.cause}
            </p>
          </div>

          <div>
            <strong className="text-slate-900 font-bold block mb-1">
              Statutory Law &amp; Judicial Reality:
            </strong>
            <p className="leading-relaxed bg-white p-3 rounded-lg border border-slate-200 text-slate-800">
              {currentProblem.legalBasis}
            </p>
          </div>
        </div>

        <div>
          <strong className="text-slate-900 font-bold text-xs sm:text-sm block mb-2">
            Prescribed Immediate Action Protocol:
          </strong>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {currentProblem.steps.map((st, i) => (
              <div key={i} className="bg-white p-3.5 rounded-lg border border-slate-200 space-y-1">
                <span className="text-[10px] font-black uppercase text-red-600 block">
                  Action #{i + 1}
                </span>
                <p className="text-xs sm:text-sm font-bold text-slate-900">{st.step}</p>
                <p className="text-xs text-slate-600 leading-relaxed">{st.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-slate-200">
          <p className="text-xs text-slate-600">
            Need advocate assistance to issue statutory demand notice to banks or draft Section 457 BNSS petition?
          </p>
          <Link
            href="/how-to-recover-money-stuck-in-online-cyber-fraud"
            className="text-xs font-bold text-red-600 hover:text-red-700 hover:underline shrink-0"
          >
            Explore Cyber Fraud Escalation Guide →
          </Link>
        </div>
      </div>
    </div>
  );
}
