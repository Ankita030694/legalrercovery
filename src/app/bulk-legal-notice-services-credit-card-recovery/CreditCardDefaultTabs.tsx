"use client";

import React, { useState } from "react";
import Link from "next/link";

interface PortfolioBucketTab {
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

const PORTFOLIO_BUCKETS: PortfolioBucketTab[] = [
  {
    id: "bucket-30-90-dpd",
    tabLabel: "30–90 DPD Early Stage",
    title: "Early Delinquency Portfolios (30 to 90 Days Past Due)",
    cause:
      "Borrowers experience temporary cash-flow mismatches, disputed merchant charges, or negligence in reviewing statements. Without an authoritative formal legal intervention, early delinquency rapidly metastasizes into permanent Non-Performing Assets (NPAs), incurring compounding finance charges and escalating recovery provisioning costs for lending institutions.",
    legalBasis:
      "Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA) and the Reserve Bank of India (RBI) Master Direction on Credit Card Issuance and Conduct (2022/2026), banks are empowered to issue structured statutory demand notices providing a standard 15-day cure window prior to initiation of formal judicial recourse.",
    steps: [
      {
        step: "Automated Data Ingestion & Ledger Reconciliation",
        description:
          "Secure API or encrypted batch ingestion reconciles outstanding principal, permissible finance charges, and interest accrued under the original cardholder agreement.",
      },
      {
        step: "Advocate Legal Notice Drafting & Multi-Channel Blast",
        description:
          "Vetted advocate notice is delivered concurrently via India Post Speed Post, WhatsApp Business API (with read receipts), and registered email.",
      },
      {
        step: "Direct Borrower Cure & Structured Settlement Window",
        description:
          "Delivers instant online payment links, settlement restructuring terms, and clear advisory regarding CIBIL credit rating downgrades and statutory liability.",
      },
    ],
    statutoryRule: "RBI Master Direction (Credit Card Conduct) & Section 63 BSA 2023",
  },
  {
    id: "bucket-90-plus-npa",
    tabLabel: "90+ DPD NPA & Charge-Offs",
    title: "NPA Portfolios & Written-Off Credit Card Balances (90+ DPD)",
    cause:
      "Cardholder accounts classified as NPAs where internal collections agencies and tele-calling channels have hit dead ends. Borrowers routinely ignore telephonic follow-ups, relying on the assumption that unsecured credit card balances cannot be judicially pursued or enforced in court.",
    legalBasis:
      "A formal Advocate Legal Demand Notice signed under Bar Council rules forms the indisputable foundational cause of action under Order 37 of the Code of Civil Procedure, 1908 (Summary Suits for debt recovery) and establishes formal proof of default for pre-litigation Lok Adalat referrals.",
    steps: [
      {
        step: "Statutory 15-Day Final Demand for Immediate Liquidation",
        description:
          "Explicit legal notice served demanding complete discharge of dues within 15 statutory business days or referral to National Lok Adalat for immediate compromise decree.",
      },
      {
        step: "Generation of Section 63 BSA Tamper-Proof Certificate",
        description:
          "Digital proof of service, India Post tracking delivery POD, and WhatsApp delivery logs compiled into an automated BSA Section 63 evidentiary certificate.",
      },
      {
        step: "Fast-Track Lok Adalat & Summary Court Docket Filing",
        description:
          "Seamless export of verified notice packs directly into National Lok Adalat registers or Section 19 DRT applications for actionable execution.",
      },
    ],
    statutoryRule: "Order 37 CPC 1908 & Legal Services Authorities Act 1987",
  },
  {
    id: "willful-defaulters",
    tabLabel: "Skip-Traced & Defaulters",
    title: "Willful Defaulters, Address Skips & Ghost Borrowers",
    cause:
      "Borrowers who deliberately change addresses, abandon registered phone numbers, or refuse physical delivery of demand notices. Traditional physical courier attempts return unserved with endorsements such as 'Left Without Address' or 'Door Locked', blocking conventional recovery channels.",
    legalBasis:
      "Supreme Court precedents in Indian Bank Association and Neeraj Sharma v. State establish that electronic service through verified WhatsApp and email constitutes valid legal service. Combined with India Post RTS (Return to Sender) postal endorsements under Section 27 of the General Clauses Act, 1897, service is deemed legally complete.",
    steps: [
      {
        step: "Multi-Source Skip Tracing & Digital Contact Enrichment",
        description:
          "Integration with updated KYC data pools, alternate registered email IDs, employer domains, and verified phone numbers to pinpoint active channels.",
      },
      {
        step: "Multi-Channel Simultaneous Dispatch with Geotagged Delivery",
        description:
          "Notices dispatched to last known physical addresses via Speed Post while concurrently delivered to active WhatsApp and email endpoints.",
      },
      {
        step: "Deemed Service Affidavit & Ex-Parte Legal Enforcement",
        description:
          "Comprehensive postal track reports combined with electronic read receipts generate court-ready affidavits of service, enabling swift ex-parte court proceedings.",
      },
    ],
    statutoryRule: "Section 27 General Clauses Act 1897 & IT Act 2000",
  },
  {
    id: "nach-cheque-bounce",
    tabLabel: "NACH / ECS Dishonour",
    title: "NACH e-Mandate & Cheque Bounces (Sec 25 PSS & Sec 138 NI Act)",
    cause:
      "Cardholders who set up auto-debit NACH / ECS mandates or issued post-dated cheques to clear credit card statements, which return dishonoured with remarks like 'Insufficient Funds' or 'Account Closed'.",
    legalBasis:
      "Dishonour of electronic funds transfer instructions is a criminal offence under Section 25 of the Payments and Settlement Systems Act, 2007, carrying penalties identical to Section 138 of the Negotiable Instruments Act, 1881 (up to 2 years imprisonment and double the default amount). Statutory demand notice within 30 days of bounce memo is mandatory.",
    steps: [
      {
        step: "Statutory 30-Day Demand Notice Dispatch from Bounce Date",
        description:
          "Advocate notice served strictly within the non-extendable 30-day statutory limitation window from receipt of bank return memo.",
      },
      {
        step: "Mandatory 15-Day Cure Period Notification",
        description:
          "Defaulter is notified of the 15-day cure window to discharge the cheque or NACH debit amount before criminal complaint registration.",
      },
      {
        step: "Automated Drafting of Criminal Complaint Docket",
        description:
          "Upon expiry of 15 days without settlement, automated complaint dockets under Section 25 PSS Act or Section 138 NI Act are prepared for jurisdictional Magistrate Court filing.",
      },
    ],
    statutoryRule: "Section 25 PSS Act 2007 & Section 138 Negotiable Instruments Act 1881",
  },
  {
    id: "high-ticket-unsecured",
    tabLabel: "High-Ticket > ₹10 Lakhs",
    title: "High-Net-Worth / Commercial Credit Card Balances (> ₹10–20 Lakhs)",
    cause:
      "Corporate credit cards, business credit facilities, and premium credit limits exceeding ₹10 Lakhs to ₹20 Lakhs with severe accumulated liability. Borrowers attempt to shelter personal assets or leverage corporate entity structures to evade liability.",
    legalBasis:
      "Where cumulative exposure to an individual or corporate borrower exceeds statutory thresholds, financial institutions can institute recovery proceedings before the Debt Recovery Tribunal (DRT) under the Recovery of Debts and Bankruptcy Act, 1993, or execute commercial summary suits with asset attachment before judgment under Order 38 Rule 5 CPC.",
    steps: [
      {
        step: "Comprehensive Asset Profiling & Corporate Exposure Audit",
        description:
          "Identification of borrower's corporate directorships, GST filings, real estate assets, and banking relationships.",
      },
      {
        step: "Urgent Advocate Demand Notice with Asset Disclosure Mandate",
        description:
          "Formal notice putting borrower on alert regarding criminal breach of trust (Section 316 BNS 2023) and impending DRT attachment motions.",
      },
      {
        step: "Filing DRT Original Application (OA) / Commercial Civil Suit",
        description:
          "Instant transition from notice expiry to formal DRT / Commercial Court proceedings for freezing bank accounts and impounding assets.",
      },
    ],
    statutoryRule: "Recovery of Debts and Bankruptcy Act 1993 & Order 38 Rule 5 CPC",
  },
];

export default function CreditCardDefaultTabs() {
  const [activeTabId, setActiveTabId] = useState<string>(PORTFOLIO_BUCKETS[0].id);

  const activeTab =
    PORTFOLIO_BUCKETS.find((b) => b.id === activeTabId) || PORTFOLIO_BUCKETS[0];

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 p-5 sm:p-8 shadow-sm">
      <div className="mb-6">
        <span className="inline-block px-3 py-1 rounded-full text-[11px] sm:text-xs font-bold tracking-wide uppercase bg-red-100 text-red-700 border border-red-200 mb-2">
          Portfolio Segmentation Engine
        </span>
        <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
          Tailored Legal Escalation Rails by Delinquency Bucket
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 mt-1">
          Select an asset portfolio category below to inspect the statutory basis, automated multi-channel workflow, and judicial enforcement path.
        </p>
      </div>

      {/* Tab Navigation Pill Bar */}
      <div className="flex flex-wrap gap-2 pb-4 border-b border-slate-100 mb-6">
        {PORTFOLIO_BUCKETS.map((tab) => {
          const isActive = activeTabId === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTabId(tab.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                isActive
                  ? "bg-slate-900 text-white shadow-md shadow-slate-900/20"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              {tab.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Tab Content Area */}
      <div className="space-y-6">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-red-600 bg-red-50 px-2.5 py-1 rounded-md border border-red-200">
            {activeTab.statutoryRule}
          </span>
          <h4 className="text-lg sm:text-xl font-extrabold text-slate-900 mt-3 mb-2">
            {activeTab.title}
          </h4>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
            <h5 className="text-xs font-black uppercase tracking-wider text-slate-700 mb-1 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-500"></span>
              Delinquency Root Cause & Impact
            </h5>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {activeTab.cause}
            </p>
          </div>

          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
            <h5 className="text-xs font-black uppercase tracking-wider text-slate-700 mb-1 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
              Statutory Basis & Legal Recourse
            </h5>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {activeTab.legalBasis}
            </p>
          </div>
        </div>

        <div>
          <h5 className="text-xs font-black uppercase tracking-wider text-slate-800 mb-3">
            Standardised 3-Step Legal Notice Execution Protocol:
          </h5>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {activeTab.steps.map((s, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs relative"
              >
                <div className="w-6 h-6 rounded-full bg-red-600 text-white font-bold text-xs flex items-center justify-center mb-2">
                  {index + 1}
                </div>
                <p className="text-xs font-bold text-slate-900 mb-1">{s.step}</p>
                <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-100">
          <p className="text-xs text-slate-500">
            Need high-volume bulk dispatch for this specific portfolio segment?
          </p>
          <Link
            href="/bulk-recovery-notice-send-through-email-whatsapp-speedpost-solution"
            className="text-xs font-bold text-red-600 hover:text-red-700 underline inline-flex items-center gap-1"
          >
            Explore API Integration & Delivery SLAs →
          </Link>
        </div>
      </div>
    </div>
  );
}
