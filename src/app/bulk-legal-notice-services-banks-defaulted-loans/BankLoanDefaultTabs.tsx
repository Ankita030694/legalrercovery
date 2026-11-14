"use client";

import React, { useState } from "react";
import Link from "next/link";

interface LoanPortfolioTab {
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

const LOAN_PORTFOLIOS: LoanPortfolioTab[] = [
  {
    id: "unsecured-personal-loans",
    tabLabel: "Unsecured Personal Loans",
    title: "Delinquent Unsecured Personal Loans & Digital Credit (30 to 90+ DPD)",
    cause:
      "Borrowers experience job transition, medical emergencies, or intentional delinquency, knowing personal loans lack physical collateral. Unassisted collection call centers suffer diminishing returns after 60 DPD. Without an authoritative advocate demand notice, accounts quickly drift into write-offs and mandate costly 100% provisioning on the bank's books.",
    legalBasis:
      "A formal Advocate Legal Demand Notice served under Bar Council standards establishes the formal cause of action for Summary Suits under Order 37 CPC, Section 25 of the Payment and Settlement Systems Act (for bounced e-NACH mandates), and referrals to National Lok Adalat or Sole Arbitration.",
    steps: [
      {
        step: "Core Banking System Batch Ingestion",
        description:
          "Secure API or encrypted SFTP ingestion parses account statements, loan sanctions, outstanding principal, penal interest, and borrower contact coordinates.",
      },
      {
        step: "Advocate Legal Demand Generation & Tri-Channel Dispatch",
        description:
          "Notices drafted by enrolled advocates are transmitted simultaneously via India Post Registered Speed Post API, WhatsApp Business API (with blue-tick delivery logs), and registered email.",
      },
      {
        step: "15-Day Cure Period & Real-Time CIBIL Escalation Advisory",
        description:
          "Notices contain direct payment gateways, QR codes, and clear statutory advisories regarding CIBIL score impairment and imminent judicial asset attachment.",
      },
    ],
    statutoryRule: "Order 37 CPC 1908, Sec 25 PSS Act 2007 & Section 63 BSA 2023",
  },
  {
    id: "msme-business-loans",
    tabLabel: "MSME & Business Term Loans",
    title: "MSME Working Capital, Term Loans & Business Overdraft Defaults",
    cause:
      "Commercial entities face client payment delays or operational insolvencies, resulting in repeated EMI and interest servicing defaults. Enterprise promoters often divert cash flows while personal and corporate guarantors evade contractual indemnity obligations.",
    legalBasis:
      "Demand notice triggers liability under Section 138 of the Negotiable Instruments Act for bounced physical cheques, Section 25 PSS Act for ECS/NACH failures, and serves as formal pre-litigation mediation requirement under Section 12A of the Commercial Courts Act, 2015.",
    steps: [
      {
        step: "Promoter & Guarantor Joint Impleadment",
        description:
          "Notices are served jointly to the primary corporate/partnership borrower and all individual personal guarantors enforcing co-extensive liability under Section 128 Indian Contract Act.",
      },
      {
        step: "Section 63 BSA Certified Electronic Dispatch",
        description:
          "Digital proof of service compiled with forensic SMTP server logs, domain verification, and WhatsApp delivery certificates admissible before Commercial Courts.",
      },
      {
        step: "Pre-Litigation Commercial Mediation Notice",
        description:
          "Provides the mandatory 30-day window under the Commercial Courts Act to either execute a restructuring agreement or proceed directly to urgent interim relief.",
      },
    ],
    statutoryRule: "Section 12A Commercial Courts Act 2015 & Sec 138 NI Act 1881",
  },
  {
    id: "vehicle-auto-loans",
    tabLabel: "Vehicle & Asset Finance",
    title: "Commercial Vehicle, Auto & Construction Equipment Loan Defaults",
    cause:
      "Borrowers default on monthly installments and frequently relocate financed vehicles across state lines or lease them to third parties in direct breach of the hypothecation agreement, frustrating physical repossession efforts.",
    legalBasis:
      "Demand notice terminates the loan agreement, revokes borrower's license to possess the vehicle under the hire-purchase/hypothecation covenant, and serves as the statutory pre-condition for Section 9 Arbitration petitions seeking court receiver appointment.",
    steps: [
      {
        step: "Formal Loan Recall & Revocation of Possession",
        description:
          "Notice formally recalls the outstanding loan balance and demands physical surrender of the vehicle at the bank's designated yard within 7 calendar days.",
      },
      {
        step: "Multi-Address Speed Post & Regional RTO Intimation",
        description:
          "Speed Post dispatch to borrower residence, guarantor address, and registered commercial hub with concurrent statutory intimation to the concerned Regional Transport Authority (RTO).",
      },
      {
        step: "Section 9 Interim Measure Invocation",
        description:
          "Upon expiry of the cure window, the Section 63 BSA certificate enables the bank's panel advocates to immediately move the High Court or Commercial Court for ex-parte receiver orders.",
      },
    ],
    statutoryRule: "Section 9 & 17 Arbitration & Conciliation Act 1996 & Motor Vehicles Act",
  },
  {
    id: "credit-cards-microloans",
    tabLabel: "Credit Cards & Micro-Credits",
    title: "High-Volume Small-Ticket Retail Dues & Credit Card Portfolios",
    cause:
      "Thousands of low-ticket accounts (₹10,000 to ₹1,50,000) where individualized litigation is economically unviable, but aggregate delinquency represents severe capital drag and provisioning leakage.",
    legalBasis:
      "Bulk automated legal notices serve as the statutory foundation for mass referral to National Lok Adalats organized by District Legal Services Authorities (DLSA) under the Legal Services Authorities Act, 1987, creating binding, non-appealable court compromise decrees.",
    steps: [
      {
        step: "High-Throughput 50,000/Month Batch Processing",
        description:
          "Automated advocate variable population creates customized legal notices with accurate ledger interest calculations and unique postal barcodes within seconds.",
      },
      {
        step: "Tri-Channel Delivery with Barcode Tracking Webhooks",
        description:
          "Direct integration with India Post consignment tracking updates delivery status (Delivered, Refused, Left Without Address) directly into bank collections software.",
      },
      {
        step: "Automated Lok Adalat Docket Generation",
        description:
          "Unserved or unresponsive accounts are automatically grouped into pre-formatted Lok Adalat dockets for rapid bulk summons issuance by the judicial authority.",
      },
    ],
    statutoryRule: "Legal Services Authorities Act 1987 & RBI Master Directions",
  },
];

export default function BankLoanDefaultTabs() {
  const [activeTab, setActiveTab] = useState<string>(LOAN_PORTFOLIOS[0].id);
  const current =
    LOAN_PORTFOLIOS.find((tab) => tab.id === activeTab) || LOAN_PORTFOLIOS[0];

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      {/* Portfolio Selector Tabs */}
      <div className="flex border-b border-slate-200 overflow-x-auto bg-slate-50/70 p-1.5 sm:p-2 gap-1.5">
        {LOAN_PORTFOLIOS.map((tab) => {
          const isActive = tab.id === activeTab;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold tracking-tight transition-all shrink-0 cursor-pointer ${
                isActive
                  ? "bg-white text-slate-900 shadow-xs border border-slate-200/80 text-[#DC2626]"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/60"
              }`}
            >
              {tab.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Selected Portfolio Content */}
      <div className="p-4 sm:p-6 md:p-8 space-y-6">
        <div>
          <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-red-600 bg-red-50 border border-red-200 px-3 py-1 rounded-full inline-block mb-2">
            Statutory Framework: {current.statutoryRule}
          </span>
          <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold text-slate-900">
            {current.title}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs sm:text-sm text-slate-700">
          <div className="bg-slate-50 p-4 sm:p-5 rounded-xl border border-slate-200/80 space-y-2">
            <h4 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              The Recovery Bottleneck &amp; Delinquency Cause
            </h4>
            <p className="leading-relaxed text-slate-600">{current.cause}</p>
          </div>

          <div className="bg-slate-50 p-4 sm:p-5 rounded-xl border border-slate-200/80 space-y-2">
            <h4 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              Statutory Basis &amp; Judicial Impact
            </h4>
            <p className="leading-relaxed text-slate-600">{current.legalBasis}</p>
          </div>
        </div>

        {/* 3 Step Protocol */}
        <div className="space-y-3">
          <h4 className="font-bold text-slate-900 text-xs sm:text-sm uppercase tracking-wider text-slate-500">
            Standard Operating Protocol for this Portfolio:
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            {current.steps.map((st, i) => (
              <div
                key={i}
                className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs space-y-1.5"
              >
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-slate-900 text-white text-[11px] font-extrabold flex items-center justify-center shrink-0">
                    {i + 1}
                  </span>
                  <strong className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                    {st.step}
                  </strong>
                </div>
                <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed pl-8">
                  {st.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Cross-Link */}
        <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
          <span>
            Need institutional customisation for this asset class?{" "}
            <Link
              href="/send-a-legal-notice/for-banks-to-recover-their-unpaid-dues"
              className="text-blue-700 underline font-semibold hover:text-blue-900"
            >
              Review Bank Recovery Notice Specifications →
            </Link>
          </span>
          <span className="font-semibold text-slate-700">
            Cure Rate Benchmark: 62%–74%
          </span>
        </div>
      </div>
    </div>
  );
}
