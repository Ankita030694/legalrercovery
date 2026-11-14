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

const DEFAULT_PROBLEMS: ProblemTab[] = [
  {
    id: "untraceable-defaulter",
    tabLabel: "Service & Delivery Denial",
    title: "Cardholder Evading Service or Claiming Non-Receipt of Demand Notice",
    cause:
      "Defaulting cardholders frequently relocate, change employment, or refuse physical delivery of registered speed post letters, subsequently raising the defense in court that they received no formal demand notice before litigation or CIBIL adverse reporting.",
    legalBasis:
      "Under Section 27 of the General Clauses Act, 1897, dispatch to the borrower's last officially disclosed KYC address constitutes deemed service. Furthermore, under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA) and Section 65B/88A of the Information Technology Act, 2000, multi-channel electronic dispatch via registered email and verified WhatsApp with read-receipt delivery logs forms admissible, unassailable proof of service.",
    steps: [
      {
        step: "Retrieve Last KYC Records & Registered Contact Rails",
        description:
          "Pull the card application form, recent billing addresses, and registered mobile number/email address on record.",
      },
      {
        step: "Dispatch Simultaneous Dual-Mode Notice",
        description:
          "Serve the advocate demand notice via India Post Registered Speed Post with tracking and concurrently through certified digital delivery channels (email + WhatsApp).",
      },
      {
        step: "Generate BSA Section 63 Certificate",
        description:
          "Secure an electronic transmission certificate and speed post delivery confirmation report to attach directly to any Order 37 summary suit or Lok Adalat petition.",
      },
    ],
    statutoryRule: "Section 27 General Clauses Act & Section 63 Bharatiya Sakshya Adhiniyam 2023",
  },
  {
    id: "disputed-finance-charges",
    tabLabel: "APR & Interest Disputes",
    title: "Cardholder Challenges Exorbitant Compound Interest & Late Payment Fees",
    cause:
      "Cardholders often cease communication and contest legal notices by alleging usurious interest rates (exceeding 40%–45% APR), hidden charges, or compounding of penal fees, attempting to portray the bank's claim as extortionate before consumer or civil courts.",
    legalBasis:
      "Under RBI Master Direction – Credit Card and Debit Card Issuance and Conduct Directions, 2022 (updated 2026), card issuers must ensure annualized percentage rates (APR) and late payment charges are transparently disclosed in the Most Important Terms and Conditions (MITC). Under the Usurious Loans Act and Section 74 of the Contract Act, 1872, courts scrutinize unconscionable penalties. A legal notice that bifurcates legitimate principal from contractual finance charges withstands judicial scrutiny.",
    steps: [
      {
        step: "Prepare Bifurcated Debt Schedule",
        description:
          "Segregate the gross outstanding into: (1) Principal Transaction Amounts, (2) Contractual Finance Charges as per MITC, and (3) Late Payment Surcharges + GST.",
      },
      {
        step: "Highlight MITC Signed Acceptance",
        description:
          "Cite the cardholder's explicit acceptance of the Most Important Terms and Conditions and MITC schedule at the time of card activation.",
      },
      {
        step: "Extend 15-Day Waiver / Settlement Window in Notice",
        description:
          "Offer a pre-litigation settlement opportunity at a revised interest component to demonstrate bank reasonableness prior to civil court escalation.",
      },
    ],
    statutoryRule: "RBI Master Direction on Credit Cards & Section 74 Indian Contract Act 1872",
  },
  {
    id: "mad-trap-defense",
    tabLabel: "MAD Misunderstanding",
    title: "Cardholder Claims Minimum Amount Due (MAD) Confusion & Defaulted",
    cause:
      "Cardholders commonly argue that paying only the Minimum Amount Due (MAD) for multiple billing cycles led to unexpected compounding balances, resulting in sudden card deactivation and default.",
    legalBasis:
      "Under RBI guidelines, credit card statements must prominently display warnings regarding the compounding consequences of paying only MAD. Under Section 73 of the Indian Contract Act, 1872, continuing card usage after default constitutes a binding contractual breach, rendering the borrower liable for all outstanding debt.",
    steps: [
      {
        step: "Collate Monthly Statements Demonstrating MAD Warnings",
        description:
          "Extract past billing statements showing explicit statutory disclosures informing the cardholder of the interest accumulation trajectory.",
      },
      {
        step: "Establish Ongoing Purchases Despite Overdue Notice",
        description:
          "Identify transactions executed by the cardholder while in revolving credit delinquency to refute claims of involuntary default.",
      },
      {
        step: "Draft Formal 15-Day Contractual Cure Demand",
        description:
          "Issue a statutory cure notice demanding settlement of the overdue amount within 15 days under threat of immediate credit bureau reporting and civil litigation.",
      },
    ],
    statutoryRule: "RBI Card Conduct Directions & Section 73 Indian Contract Act 1872",
  },
  {
    id: "bulk-default-operations",
    tabLabel: "Portfolio Default Operations",
    title: "Institutional Management of Non-Performing Card Portfolios & Limitation Expiry",
    cause:
      "Institutional card recovery teams managing thousands of delinquent card accounts face severe limitation risks under the Limitation Act, 1963, if legal action is delayed beyond 3 years from the date of the last transaction or payment acknowledgment.",
    legalBasis:
      "Under Article 19 and 55 of the Schedule to the Limitation Act, 1963, a suit for recovery of money must be instituted within three years from the default date. A formal advocate legal notice serves as an indispensable prerequisite to establish default, interrupt informal dispute periods, and trigger pre-institution mediation under the Commercial Courts Act or Lok Adalat proceedings.",
    steps: [
      {
        step: "Audit Portfolio by Delinquency Buckets (SMA-1, SMA-2, NPA)",
        description:
          "Categorize defaulting accounts by days-past-due (DPD) to prioritize accounts approaching the 24-to-30 month threshold.",
      },
      {
        step: "Deploy Automated Advocate Notice Dispatch System",
        description:
          "Utilize verified bulk recovery notice dispatch workflows with automated India Post speed post barcode integration and electronic message receipts.",
      },
      {
        step: "Refer Unresponsive Accounts to Pre-Litigation Lok Adalat",
        description:
          "Place delinquent accounts with verified legal notice delivery proofs before the District Legal Services Authority (DLSA) for immediate conciliation awards.",
      },
    ],
    statutoryRule: "Articles 19 & 55 Limitation Act 1963 & Legal Services Authorities Act 1987",
  },
];

export default function CreditCardDefaultProblemTabs() {
  const [activeTab, setActiveTab] = useState<string>(DEFAULT_PROBLEMS[0].id);
  const currentProblem = DEFAULT_PROBLEMS.find((p) => p.id === activeTab) || DEFAULT_PROBLEMS[0];

  return (
    <div className="w-full bg-white border border-slate-200 rounded-2xl p-4 sm:p-6 shadow-sm space-y-6">
      {/* Tab Navigation Pill Bar */}
      <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-3">
        {DEFAULT_PROBLEMS.map((prob) => {
          const isActive = prob.id === activeTab;
          return (
            <button
              key={prob.id}
              type="button"
              onClick={() => setActiveTab(prob.id)}
              className={`px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                isActive
                  ? "bg-[#111827] text-white shadow-md shadow-slate-900/20"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {prob.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Tab Content Panel */}
      <div className="space-y-5">
        <div>
          <span className="inline-block px-2.5 py-1 rounded-md text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider bg-red-50 text-[#DC2626] border border-red-200 mb-2">
            Statutory Rule: {currentProblem.statutoryRule}
          </span>
          <h3 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 tracking-tight">
            {currentProblem.title}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5">
            <h4 className="font-bold text-slate-900 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              The Recovery Obstacle / Defaulter Argument:
            </h4>
            <p className="text-slate-600 leading-relaxed">{currentProblem.cause}</p>
          </div>

          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5">
            <h4 className="font-bold text-slate-900 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-600" />
              The Statutory Countermeasure &amp; Legal Stance:
            </h4>
            <p className="text-slate-600 leading-relaxed">{currentProblem.legalBasis}</p>
          </div>
        </div>

        {/* Step-by-Step Strategic Roadmap */}
        <div className="space-y-3 pt-2">
          <h4 className="text-xs sm:text-sm font-black uppercase tracking-wider text-slate-800">
            Recommended Advocate Escalation Roadmap:
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {currentProblem.steps.map((st, idx) => (
              <div
                key={idx}
                className="p-3.5 bg-white border border-slate-200/90 rounded-xl shadow-xs space-y-1"
              >
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-slate-900 text-white text-[10px] font-black flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <h5 className="font-bold text-xs text-slate-900">{st.step}</h5>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed pl-7">{st.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <p className="text-slate-500">
            Need automated batch notice dispatch for credit default portfolios?
          </p>
          <Link
            href="/bulk-recovery-notice-send-through-email-whatsapp-speedpost-solution"
            className="text-[#DC2626] font-bold hover:underline inline-flex items-center gap-1"
          >
            Explore Enterprise Bulk Recovery Notices →
          </Link>
        </div>
      </div>
    </div>
  );
}
