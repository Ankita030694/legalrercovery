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
    id: "contacts-harassment",
    tabLabel: "Calling Contacts & Morphed Photos",
    title: "Recovery Agents Calling Phone Contacts, Creating WhatsApp Groups or Morphing Photos",
    cause:
      "When installing the loan app, borrowers unknowingly granted device permissions or the app deployed covert spyware to extract entire contact address books. Upon default or delay of even 24 hours, collection agents blast abusive messages to family, friends, and employers, or threaten to circulate morphed, defamatory images.",
    legalBasis:
      "This conduct is strictly illegal and constitutes cognizable criminal offences. Under Para 6.2 of the RBI Digital Lending Directions, loan apps are explicitly barred from accessing mobile phonebooks, call logs, contacts, or media storage. Furthermore, sending abusive messages violates Section 351 (Criminal Intimidation) and Section 352 of the Bharatiya Nyaya Sanhita (BNS), 2023. Circulating morphed images attracts Section 66E (privacy violation) and Section 67/67A of the Information Technology Act, 2000, along with Section 79 BNS (insulting modesty).",
    steps: [
      {
        step: "Revoke Device Permissions & Uninstall App Spyware",
        description:
          "Immediately revoke all permissions (Contacts, Media, Camera, Location) from app settings. If downloaded from outside Google Play Store, backup evidence and uninstall the APK.",
      },
      {
        step: "Preserve Unedited Digital Evidence Under BSA Section 63",
        description:
          "Take full-screen screenshots of threatening WhatsApp chats, call recordings, numbers, and agent names without cropping timestamps or caller headers.",
      },
      {
        step: "File Emergency Cyber Complaint & Send Advocate Notice",
        description:
          "Report immediately on cybercrime.gov.in (National Cyber Crime Helpline 1930) and serve a statutory advocate legal notice to the lending NBFC holding them vicariously liable.",
      },
    ],
    statutoryRule: "RBI Digital Lending Master Direction Para 6.2 & Section 67 IT Act",
  },
  {
    id: "excess-hidden-charges",
    tabLabel: "Hidden Fees & Usurious APR",
    title: "Excessive Processing Fees Deducted Upfront and Daily Penal Interest Traps",
    cause:
      "The loan app approved a loan of ₹20,000 but disbursed only ₹12,000 into the bank account, deducting ₹8,000 upfront as 'processing fees', 'risk assessment charges', or 'platform subscription'. Within 7 days, they demand ₹25,000, compounding interest at 2% to 5% per day.",
    legalBasis:
      "Under the RBI Master Direction on Digital Lending and the mandatory Key Fact Statement (KFS) directions (DOR.CRE.REC.No.66/21.04.048/2023-24), every Regulated Entity (RE) must disclose an all-inclusive Annual Percentage Rate (APR). Any fee, charge, or deduction not explicitly disclosed in the standardized KFS is strictly prohibited and unenforceable. Section 2(47) of the Consumer Protection Act, 2019 defines such undisclosed deductions as an Unfair Trade Practice.",
    steps: [
      {
        step: "Demand the Certified Key Fact Statement (KFS)",
        description:
          "Request the signed, standardized KFS provided at loan execution. Compare the disbursed amount against the net principal sanctioned.",
      },
      {
        step: "Calculate the Actual All-Inclusive APR",
        description:
          "Compute annualized percentage rate including all deductions. Lenders cannot arbitrarily levy compounding daily penal interest outside agreed terms.",
      },
      {
        step: "Escalate to NBFC Grievance Officer & RBI CMS",
        description:
          "Submit formal dispute for refund/adjustment of illegal upfront cuts. Escalate to the RBI Ombudsman CMS portal if unresolved within 30 days.",
      },
    ],
    statutoryRule: "RBI KFS Mandate (2024/2026) & Section 2(47) Consumer Protection Act, 2019",
  },
  {
    id: "illegal-loan-app",
    tabLabel: "Unregistered Chinese / Sideloaded Apps",
    title: "Extortion by Non-Regulated Entity (Chinese Micro-Loan Apps Without NBFC Partner)",
    cause:
      "The borrower downloaded a short-tenure 7-day lending app from social media ads, Telegram links, or shady APK download sites. The app does not display any RBI-registered NBFC or Bank partner and requires payments into random individual UPI handles (mule accounts).",
    legalBasis:
      "Lending without an RBI certificate of registration violates Section 45-IA of the Reserve Bank of India Act, 1934. Demanding extortionate repayments through coercion amounts to Extortion under Section 308 of the Bharatiya Nyaya Sanhita, 2023 (formerly IPC Section 384) and criminal cheating under Section 318 BNS. The Ministry of Home Affairs (I4C) and RBI have banned hundreds of such illegal Chinese lending APKs.",
    steps: [
      {
        step: "Do Not Pay Further Extortionate Demands",
        description:
          "Paying extortion money does not close the loan; rogue syndicates demand repeated top-up payments. Cease further UPI transfers immediately.",
      },
      {
        step: "Trace Beneficiary Mule Accounts & UPI IDs",
        description:
          "Collect transaction reference numbers (UTR/RRN) and UPI handles to which money was sent. These reveal mule bank accounts used for money laundering.",
      },
      {
        step: "Lodge Cyber Crime FIR & Intimate RBI Sachet",
        description:
          "File an extortion complaint under Sections 308/318 BNS on the National Cyber Crime Portal and register the app URL on the RBI Sachet portal (sachet.rbi.org.in).",
      },
    ],
    statutoryRule: "Section 45-IA RBI Act 1934 & Section 308/318 BNS 2023",
  },
  {
    id: "abusive-calls-timing",
    tabLabel: "Abusive Calls at Odd Hours",
    title: "Recovery Agents Harassing Early Morning, Late at Night, or Visiting Workplace",
    cause:
      "Collection agencies hire aggressive tele-callers who make 40 to 60 calls a day starting at 6:00 AM or late past 10:00 PM, using abusive vernacular slurs, intimidating female family members, or threatening to send musclemen to the borrower's office or home.",
    legalBasis:
      "Under the RBI Master Circular on Recovery Agents and Para 7 of Digital Lending Guidelines, recovery calls are strictly restricted to between 8:00 AM and 7:00 PM. Agents are expressly prohibited from using vulgar language, physical or mental intimidation, or disturbing the borrower's family. The lending NBFC/Bank is held strictly vicariously liable for the illegal acts of its contracted third-party agencies.",
    steps: [
      {
        step: "Enable Call Recording with Caller ID Capture",
        description:
          "Record all incoming collection calls. Do not delete call history logs showing timestamped call spamming outside permissible hours.",
      },
      {
        step: "Demand Agent Employee ID & Agency Name",
        description:
          "Ask the caller to state their full name, recovery agency name, and the lending NBFC they represent. Under RBI rules, agents must identify themselves.",
      },
      {
        step: "Serve Notice of Vicarious Liability on NBFC",
        description:
          "Send a statutory legal notice to the NBFC CEO and GRO detailing violations of the RBI Fair Practices Code and claiming compensation for mental trauma.",
      },
    ],
    statutoryRule: "RBI Fair Practices Code for Lenders & Para 7 Digital Lending Directions",
  },
  {
    id: "cibil-damage-threat",
    tabLabel: "Credit Score / CIBIL Defamation",
    title: "Wrongful Default Reporting to CIBIL / Experian Despite Disputed Charges or Settlement",
    cause:
      "After the borrower pays the legitimate principal or challenges illegal excess fees, the lender falsely reports the loan as 'Written Off', 'Post-Write Off Settled', or 'Wilful Default' to credit information bureaus, crashing their credit score by 100+ points.",
    legalBasis:
      "Under Section 21 of the Credit Information Companies (Regulation) Act, 2005 (CICRA) and RBI circulars on credit information reporting, credit institutions are legally required to maintain accurate, up-to-date data. They cannot maliciously report disputed or settled accounts as default without adhering to statutory rectification procedures within 30 days.",
    steps: [
      {
        step: "Obtain Official Credit Information Report (CIR)",
        description:
          "Download official credit reports from CIBIL, Experian, or CRIF High Mark to identify wrongful default markings and reporting dates.",
      },
      {
        step: "Raise Inaccuracy Dispute on Credit Bureau Portal",
        description:
          "File an online dispute with CIBIL attaching repayment bank receipts and account statement showing timely payment or settlement receipt.",
      },
      {
        step: "Issue Legal Demand Notice for CIBIL Rectification",
        description:
          "Serve a 15-day statutory notice requiring the NBFC to update bureau records with a 'Closed' status and demanding compensation for commercial damages.",
      },
    ],
    statutoryRule: "Section 21 CICRA Act 2005 & RBI Master Direction on Credit Reporting",
  },
];

export default function LoanAppProblemTabs() {
  const [activeTabId, setActiveTabId] = useState<string>(PROBLEMS[0].id);
  const activeProblem = PROBLEMS.find((p) => p.id === activeTabId) || PROBLEMS[0];

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden">
      {/* Tab Navigation Pill Bar */}
      <div className="border-b border-slate-200 bg-slate-50/80 p-3 sm:p-4 overflow-x-auto">
        <div className="flex gap-2 min-w-max">
          {PROBLEMS.map((problem) => {
            const isActive = activeTabId === problem.id;
            return (
              <button
                key={problem.id}
                type="button"
                onClick={() => setActiveTabId(problem.id)}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-150 cursor-pointer ${
                  isActive
                    ? "bg-[#DC2626] text-white shadow-xs"
                    : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/90"
                }`}
              >
                {problem.tabLabel}
              </button>
            );
          })}
        </div>
      </div>

      {/* Tab Content Display */}
      <div className="p-5 sm:p-7 md:p-8 space-y-6">
        <div>
          <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-red-600 bg-red-50 border border-red-100 px-3 py-1 rounded-full inline-block mb-2">
            Dispute Scenario
          </span>
          <h3 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 leading-snug">
            {activeProblem.title}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <h4 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-800">
              The Collection Practice / Tactic
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {activeProblem.cause}
            </p>
          </div>

          <div className="p-4 sm:p-5 rounded-xl bg-red-50/60 border border-red-200 space-y-2">
            <h4 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-red-900">
              Statutory Shield &amp; Legal Remedy
            </h4>
            <p className="text-xs sm:text-sm text-red-950 leading-relaxed">
              {activeProblem.legalBasis}
            </p>
          </div>
        </div>

        {/* Action Steps */}
        <div className="space-y-3">
          <h4 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-900">
            Immediate Actionable Protocol
          </h4>
          <div className="space-y-3">
            {activeProblem.steps.map((s, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-3.5 sm:p-4 rounded-xl bg-slate-50/70 border border-slate-200/80"
              >
                <span className="w-6 h-6 rounded-full bg-slate-900 text-white font-extrabold text-xs flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <div>
                  <h5 className="text-xs sm:text-sm font-bold text-slate-900">
                    {s.step}
                  </h5>
                  <p className="text-xs sm:text-sm text-slate-600 mt-0.5 leading-relaxed">
                    {s.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Rule Strip */}
        <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div className="text-slate-600">
            <strong className="text-slate-900">Applicable Statute:</strong>{" "}
            <span className="font-semibold text-slate-800">{activeProblem.statutoryRule}</span>
          </div>
          <Link
            href="/recovery"
            className="inline-flex items-center text-[#DC2626] font-bold hover:underline"
          >
            Explore money recovery services →
          </Link>
        </div>
      </div>
    </div>
  );
}
