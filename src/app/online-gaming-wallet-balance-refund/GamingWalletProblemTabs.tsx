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
    id: "unutilised-deposit",
    tabLabel: "Unutilised Deposit Trapped",
    title: "Platform Refuses Withdrawal Claiming 'Deposited Money Must Be Wagered First'",
    cause:
      "Gaming platforms frequently enforce an abusive terms-of-service condition claiming that deposited cash cannot be withdrawn without 100% contest participation (wagering requirement). When a user deposits ₹20,000 or ₹50,000 and decides not to participate, the application arbitrarily locks the 'Withdraw' button for the unutilised cash ledger.",
    legalBasis:
      "Under the Indian Contract Act, 1872 (Section 148 on Bailment) and the Consumer Protection Act, 2019 (Section 2(47) Unfair Trade Practice), funds deposited into a digital wallet remain the property of the consumer until entered into an active, legally permissible contest. Platforms hold unspent balances in a fiduciary capacity. Compelling users to gamble deposited funds to regain access violates CCPA guidelines against coercive dark patterns.",
    steps: [
      {
        step: "Export Complete Ledger & Bank Statement",
        description:
          "Download the wallet passbook showing the exact inward UPI/IMPS debit and the unutilised cash balance breakdown before the app restricts access.",
      },
      {
        step: "Submit Written Request to Nodal Grievance Officer",
        description:
          "Dispatch an email invoking Rule 3(2) of the IT (Intermediary Guidelines) Rules, demanding direct reversal of unutilised principal to the source bank account within 72 hours.",
      },
      {
        step: "Serve Statutory Advocate Demand Notice",
        description:
          "If the company fails to credit the funds, serve a formal 15-day statutory demand notice seeking refund with 18% annual interest for unlawful restraint of funds.",
      },
    ],
    statutoryRule: "Consumer Protection Act 2019 s.2(47) & Indian Contract Act s.148",
  },
  {
    id: "app-banned-shutdown",
    tabLabel: "Post-Ban App Shutdown",
    title: "Real-Money Gaming App Banned or Delisted: Wallet Access Completely Severed",
    cause:
      "Following state-level prohibitions or enforcement under the Promotion & Regulation of Online Gaming Act 2025†, gaming platforms frequently shut down operations, geo-block IP addresses, or are delisted from Google Play and Apple App Stores. Users find themselves locked out of their accounts with substantial cash balances remaining inside.",
    legalBasis:
      "A statutory ban or licensing cancellation prohibits the offering of future gaming contests; it does not authorize the corporate entity to expropriate pre-existing player deposits. Under Section 65 of the Indian Contract Act, 1872, when an agreement becomes void due to statutory intervention, any party who received an advantage is legally bound to restore it. The operating corporate entity remains fully answerable in civil and consumer law.",
    steps: [
      {
        step: "Identify the Corporate Parent Entity",
        description:
          "Check the app's Terms of Use or MCA records to identify the incorporated private limited company operating the gaming brand (e.g., registered office in Bengaluru, Mumbai, or Gurugram).",
      },
      {
        step: "Collate Deposit Proofs (UTR & Aggregator Receipts)",
        description:
          "Pull out payment gateway receipts (Razorpay, Cashfree, PayU) linking your bank account debits to the gaming company's merchant ID.",
      },
      {
        step: "File Corporate Notice & e-Jagriti Consumer Complaint",
        description:
          "Serve a demand notice on the registered office address and initiate a claim on the national e-Jagriti portal under Section 35 of CPA 2019 for recovery of retained deposits.",
      },
    ],
    statutoryRule: "Indian Contract Act 1872 s.65 & Promotion & Regulation of Online Gaming Act 2025†",
  },
  {
    id: "kyc-deadlock",
    tabLabel: "KYC Withdrawal Block",
    title: "Instant KYC for Inward Deposits, But Endless 'Verification Pending' for Withdrawals",
    cause:
      "Platforms accept deposits in seconds without demanding verification. However, the moment a player requests a withdrawal, the platform triggers a loop of rejected PAN/Aadhaar uploads, selfie mismatches, or claims that 'bank details do not match profile name', effectively freezing funds indefinitely.",
    legalBasis:
      "Asymmetric verification is a recognized unfair trade practice under Section 2(47) of CPA 2019. If a merchant accepts consumer consideration without KYC verification, raising technical hurdles solely at the payout stage while retaining customer money constitutes deficiency of service under Section 2(11) and wrongful confinement of money.",
    steps: [
      {
        step: "Ensure Exact Name Match on PAN & Bank Account",
        description:
          "Verify that your registered gaming account name, Aadhaar card, PAN card, and beneficiary bank account name are identical down to initials.",
      },
      {
        step: "Create Screen Recording of Failed KYC Portal",
        description:
          "Record a timestamped video demonstrating that clear government ID PDFs are rejected with generic or automated error messages.",
      },
      {
        step: "Lodge NCH & Statutory Advocate Escalation",
        description:
          "Register a complaint on the National Consumer Helpline (1915) and dispatch an advocate notice requiring manual KYC clearance within 7 days.",
      },
    ],
    statutoryRule: "Consumer Protection Act 2019 s.2(11) & IT Intermediary Rules 2023",
  },
  {
    id: "arbitrary-suspension",
    tabLabel: "Fair-Play Suspension & TDS",
    title: "Account Banned for 'Fair Play Violation' or Wrongful 30% TDS on Deposited Capital",
    cause:
      "Upon securing significant winnings or requesting large withdrawals, accounts are frequently terminated without evidentiary proof for alleged 'collusion', 'multi-accounting', or 'bot usage'. In other cases, platforms wrongfully deduct 30% TDS under Section 194BA on the user's own unplayed principal deposits instead of net winnings.",
    legalBasis:
      "The Supreme Court of India has held that unilateral termination clauses in standard-form digital contracts that forfeit client balances without giving reasons or opportunity to be heard violate natural justice. Furthermore, Section 194BA of the Income Tax Act, 1961 mandates TDS exclusively on 'net winnings' at the end of the financial year or upon withdrawal, never on the user's unutilised principal deposit ledger.",
    steps: [
      {
        step: "Demand Detailed Audit Log & Fraud Forensics",
        description:
          "Send an email demanding specific game logs, IP logs, and contest telemetry that supposedly prove the fair-play breach.",
      },
      {
        step: "Challenge Wrongful TDS via Form 26AS Reconciliation",
        description:
          "Verify whether the deducted amount was actually remitted to NSDL/Income Tax department under Section 194BA or retained in the platform's coffers.",
      },
      {
        step: "Initiate Restitution Claim via Consumer Court or Civil Court",
        description:
          "Approach the Consumer Disputes Commission claiming refund of the principal, legitimate contest winnings, and damages for arbitrary account freezing.",
      },
    ],
    statutoryRule: "Income Tax Act s.194BA & Consumer Protection Act 2019 s.2(46)",
  },
];

export default function GamingWalletProblemTabs() {
  const [activeTab, setActiveTab] = useState(PROBLEMS[0].id);
  const currentProblem = PROBLEMS.find((p) => p.id === activeTab) || PROBLEMS[0];

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      {/* Tab Navigation */}
      <div className="flex border-b border-slate-200 overflow-x-auto bg-slate-50/80 scrollbar-none">
        {PROBLEMS.map((problem) => {
          const isActive = problem.id === activeTab;
          return (
            <button
              key={problem.id}
              type="button"
              onClick={() => setActiveTab(problem.id)}
              className={`px-4 sm:px-6 py-3.5 sm:py-4 text-xs sm:text-sm font-bold whitespace-nowrap transition-all border-b-2 cursor-pointer ${
                isActive
                  ? "border-[#DC2626] text-[#DC2626] bg-white shadow-xs"
                  : "border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100/50"
              }`}
            >
              {problem.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Tab Content */}
      <div className="p-5 sm:p-7 md:p-8 space-y-6">
        <div>
          <span className="inline-block px-2.5 py-1 rounded text-[11px] font-extrabold uppercase tracking-wider bg-red-100 text-[#DC2626] mb-2">
            {currentProblem.statutoryRule}
          </span>
          <h3 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 leading-snug">
            {currentProblem.title}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 bg-slate-50 p-4 sm:p-5 rounded-xl border border-slate-200/80">
          <div>
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">
              The Commercial Reality
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {currentProblem.cause}
            </p>
          </div>
          <div>
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">
              The Legal Position &amp; Statutory Protection
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {currentProblem.legalBasis}
            </p>
          </div>
        </div>

        <div>
          <h4 className="text-xs sm:text-sm font-extrabold text-slate-900 uppercase tracking-wider mb-3">
            Recommended Statutory Action Sequence:
          </h4>
          <div className="space-y-3">
            {currentProblem.steps.map((st, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs"
              >
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-red-50 text-[#DC2626] font-black text-xs shrink-0 mt-0.5 border border-red-200">
                  {idx + 1}
                </span>
                <div>
                  <h5 className="text-xs sm:text-sm font-bold text-slate-900">{st.step}</h5>
                  <p className="text-xs sm:text-sm text-slate-600 mt-0.5 leading-relaxed">
                    {st.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100">
          <p className="text-xs text-slate-500 text-center sm:text-left">
            Need an advocate to draft your formal withdrawal demand notice?
          </p>
          <Link
            href="/legal-notice-charges"
            className="text-xs font-bold text-red-600 hover:text-red-700 underline flex items-center gap-1"
          >
            View Advocate Notice Pricing &amp; Timeline →
          </Link>
        </div>
      </div>
    </div>
  );
}
