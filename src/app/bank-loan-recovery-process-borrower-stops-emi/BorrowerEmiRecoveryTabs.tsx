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
    id: "nach-stopped",
    tabLabel: "NACH Stop / Revocation",
    title: "Borrower Instructs Destination Bank to Stop NACH Auto-Debits",
    cause:
      "When borrowers face cash flow crunches or seek to dispute a loan facility, they often unilaterally issue 'stop payment' instructions to their destination bank or revoke the e-NACH mandate without lending bank consent. When the lending bank presents the clearing file, the mandate bounces with remarks like 'Payment Stopped by Drawer', 'Mandate Cancelled', or 'Instruction Revoked'.",
    legalBasis:
      "Under Section 25 of the Payment and Settlement Systems Act, 2007, dishonour of an electronic funds transfer due to insufficient funds or 'exceeds arrangement' constitutes a statutory offence punishable with imprisonment up to two years, twice the debit value, or both. The Supreme Court in Meter & Instruments (P) Ltd. and subsequent High Court rulings affirm that unilateral stop instructions on valid mandates attract identical criminal liability to Section 138 of the Negotiable Instruments Act, 1881.",
    steps: [
      {
        step: "Obtain NPCI / Bank Return Clearing Memo",
        description:
          "Immediately secure the electronic return memo from the sponsor bank or NPCI clearing report establishing the return code, clearing date, and reason for NACH mandate non-execution.",
      },
      {
        step: "Serve 15-Day Statutory Cure Notice within 30 Days",
        description:
          "Under Section 25(3)(b) PSS Act, 2007, dispatch a formal statutory advocate legal notice within 30 days of receiving the return memo, demanding full payment of the bounced installment within 15 days.",
      },
      {
        step: "File Section 25 Criminal Complaint Before Judicial Magistrate",
        description:
          "If the borrower fails to cure the default within 15 days of notice receipt, file a criminal complaint under Section 25 PSS Act within one month before the jurisdictional Judicial Magistrate First Class (JMFC) or Metropolitan Magistrate.",
      },
    ],
    statutoryRule: "Section 25 Payment and Settlement Systems Act, 2007 & Section 138 NI Act",
  },
  {
    id: "partial-emi",
    tabLabel: "Partial EMI Payment",
    title: "Chronic Underpayments & Round-Tripping to Evade NPA Tagging",
    cause:
      "Delinquent borrowers frequently make sporadic token payments (e.g., ₹5,000 against a ₹35,000 monthly EMI) in an attempt to dispute default status or argue that the account is 'active'. Borrowers erroneously believe that any inward credit resets their Days Past Due (DPD) counter and insulates them from statutory enforcement.",
    legalBasis:
      "Under Reserve Bank of India (RBI) Circular on Prudential Norms on Income Recognition, Asset Classification and Provisioning (IRAC Circular 2021/2026), asset classification is automated based on Days Past Due (DPD). An account slips into SMA-0 (1-30 days), SMA-1 (31-60 days), SMA-2 (61-90 days), and turns into an NPA immediately upon crossing 90 days of continuous default. Partial payments do not roll back the DPD clock unless all overdue interest and principal arrears are completely wiped out.",
    steps: [
      {
        step: "Appropriate Credits Strictly to Oldest Overdue Arrears",
        description:
          "Apply partial inward credits strictly in accordance with contractual priority: penal interest, normal contractual interest, and overdue principal, without re-aging the loan facility.",
      },
      {
        step: "Issue Immediate SMA-1 / SMA-2 Delinquency Notice",
        description:
          "Serve a formal written warning at 31 DPD informing the borrower of their SMA classification and credit bureau reporting under RBI CIC regulations.",
      },
      {
        step: "Contractual Loan Acceleration on Recurrent Default",
        description:
          "Invoke the loan agreement's Events of Default clause to recall the entire outstanding principal if arrears are not cleared within 15 calendar days.",
      },
    ],
    statutoryRule: "RBI IRAC Master Circular & Indian Contract Act, 1872 (Sections 59-61)",
  },
  {
    id: "untraceable-borrower",
    tabLabel: "Untraceable / Absconding",
    title: "Borrower Switches Off Phone, Abandons Residence & Evades Notice",
    cause:
      "In high-risk retail loans, unsecured personal lines, or credit card debt, delinquent borrowers routinely change their mobile numbers, abandon rented premises, or relocate employers without notifying the lender, attempting to defeat communication and service of demand notices.",
    legalBasis:
      "Under Section 27 of the General Clauses Act, 1897 and Section 3 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA), dispatch of a statutory legal notice to the last recorded address specified in the loan agreement via Registered Post AD or Speed Post constitutes legally valid deemed service. The Supreme Court in C.C. Alavi Haji v. Palapetty Muhammed ruled that when a notice is properly addressed and posted, service is presumed even if the letter is returned as 'unclaimed', 'refused', or 'left without address'.",
    steps: [
      {
        step: "Dispatch to Registered Address via Speed Post with Tracking",
        description:
          "Send the notice to the permanent address, current address, and corporate office listed in the borrower's KYC dossier via India Post Speed Post.",
      },
      {
        step: "Digital Notice Serving under Section 63 BSA (WhatsApp / Email)",
        description:
          "Transmit electronic copies to the registered email and verified WhatsApp number, capturing delivery ticks and email transmission server logs.",
      },
      {
        step: "Simultaneous Statutory Notice to Co-Borrowers & Guarantors",
        description:
          "Under Section 128 of the Indian Contract Act, the liability of a surety is co-extensive with that of the principal debtor; immediately enforce demand on guarantors.",
      },
    ],
    statutoryRule: "Section 27 General Clauses Act, 1897 & Section 128 Indian Contract Act, 1872",
  },
  {
    id: "edtech-consumer-dispute",
    tabLabel: "Ed-Tech / Merchant Loans",
    title: "Borrower Stops EMI Due to Dispute with Course / Service Provider",
    cause:
      "Consumers frequently stop paying NBFC/fintech EMIs claiming that an ed-tech company, vocational coaching institute, or gym failed to deliver services or refused a refund. Borrowers assume they can withhold loan payments from the lender because they cancelled their course or membership with the merchant.",
    legalBasis:
      "A loan facility is a legally independent tripartite or bipartite contract. While the borrower may possess consumer claims against the merchant under the Consumer Protection Act, 2019, the borrower's repayment obligation to the regulated lender remains independent and binding unless a court or Lok Adalat directs a stay. However, under RBI Digital Lending Guidelines and Subvention Scheme Directives, lenders must ensure that cancellation protocols are adhered to and unlawful third-party co-lending disputes are addressed.",
    steps: [
      {
        step: "Clarify Lender Independence & Credit Score Impact",
        description:
          "Issue a targeted legal notice clarifying that non-payment directly impacts the borrower's CIBIL/Experian score and triggers Section 25 PSS Act proceedings regardless of merchant disputes.",
      },
      {
        step: "Initiate Merchant Reconciliation & Escrow Holdback",
        description:
          "Liaise with the partner merchant or ed-tech platform to offset the unutilized fee balance against the loan principal if a formal cancellation request was lodged.",
      },
      {
        step: "Offer One-Time Restructuring or Lok Adalat Pre-Litigation",
        description:
          "If the dispute is genuine, facilitate settlement before a District Legal Services Authority (DLSA) National Lok Adalat for an executable compromise decree.",
      },
    ],
    statutoryRule: "RBI Digital Lending Guidelines & Section 25 Payment and Settlement Systems Act",
  },
  {
    id: "sme-term-loan",
    tabLabel: "SME & Commercial Loans",
    title: "Commercial Mortgages & Working Capital Default Crossing 60 DPD",
    cause:
      "SME businesses, manufacturing units, and commercial borrowers frequently fail to service term loan EMIs or renew Cash Credit (CC) limits due to inventory stagnation or debtor delays. By the time the account hits SMA-2 (61-90 DPD), the danger of hard NPA classification and steep RBI provisioning (15% to 40%) becomes imminent.",
    legalBasis:
      "Before an account turns into an NPA at 90 DPD, the bank holds complete authority to recall the facility under contractual terms. Once 90 DPD is reached and the account is tagged NPA, the bank's Authorized Officer can instantly invoke Section 13(2) of the SARFAESI Act, 2002 for secured debts, demanding total repayment within 60 days, followed by physical repossession under Section 14 via District Magistrate orders.",
    steps: [
      {
        step: "Issue Pre-NPA Statutory Loan Recall Notice at 60 DPD",
        description:
          "Warn the borrower of immediate SARFAESI action, withdrawal of consortium facilities, and reporting to RBI's CRILC (Central Repository of Information on Large Credits).",
      },
      {
        step: "Initiate Immediate Asset Inspection & Hypothecation Audit",
        description:
          "Conduct site inspection of hypothecated plant, machinery, and book debts under contractual covenants to prevent asset asset stripping or alienation.",
      },
      {
        step: "Transition to SARFAESI Section 13(2) Immediately upon 90 DPD",
        description:
          "On Day 91 of continuous default, immediately issue the statutory 60-day SARFAESI demand notice to commence recovery without waiting for civil decrees.",
      },
    ],
    statutoryRule: "SARFAESI Act, 2002 (Sections 13(2) & 14) & RBI Framework for Stressed Assets",
  },
];

export default function BorrowerEmiRecoveryTabs() {
  const [activeTab, setActiveTab] = useState<string>(PROBLEMS[0].id);

  const current = PROBLEMS.find((p) => p.id === activeTab) || PROBLEMS[0];

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 shadow-sm p-4 sm:p-6 md:p-8 space-y-6">
      {/* Horizontal Tabs Navigation */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-slate-100 no-scrollbar">
        {PROBLEMS.map((tab) => {
          const isActive = tab.id === activeTab;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`shrink-0 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                isActive
                  ? "bg-[#111827] text-white shadow-sm"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              {tab.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Tab Content Display */}
      <div className="space-y-5">
        <div>
          <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-wider text-red-600 bg-red-50 px-2.5 py-1 rounded-full">
            {current.statutoryRule}
          </span>
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 mt-2">
            {current.title}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 text-xs sm:text-sm text-slate-700 leading-relaxed">
          <div className="bg-slate-50 p-4 sm:p-5 rounded-xl border border-slate-200/80 space-y-2">
            <strong className="text-slate-900 font-bold block text-sm">
              Root Cause &amp; Delinquency Risk:
            </strong>
            <p>{current.cause}</p>
          </div>

          <div className="bg-slate-50 p-4 sm:p-5 rounded-xl border border-slate-200/80 space-y-2">
            <strong className="text-slate-900 font-bold block text-sm">
              Statutory Basis &amp; Bank Legal Authority:
            </strong>
            <p>{current.legalBasis}</p>
          </div>
        </div>

        {/* Action Steps */}
        <div className="space-y-3 pt-2">
          <h4 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-900">
            Recommended Bank Escalation Protocol:
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {current.steps.map((st, idx) => (
              <div
                key={idx}
                className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-black uppercase text-red-600 tracking-wider block mb-1">
                    Step {idx + 1}
                  </span>
                  <h5 className="font-bold text-xs sm:text-sm text-slate-900 mb-1.5">
                    {st.step}
                  </h5>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {st.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer note linking to internal resources */}
        <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
          <span>
            Need bulk statutory legal notice generation for delinquent loan portfolios?
          </span>
          <Link
            href="/send-a-legal-notice/for-banks-to-recover-their-unpaid-dues"
            className="font-bold text-red-600 hover:text-red-700 underline"
          >
            Bank Legal Notice Services →
          </Link>
        </div>
      </div>
    </div>
  );
}
