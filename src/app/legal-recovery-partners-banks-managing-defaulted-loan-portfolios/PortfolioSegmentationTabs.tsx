"use client";

import React, { useState } from "react";

interface PortfolioTranche {
  id: string;
  tabLabel: string;
  badge: string;
  title: string;
  description: string;
  statutoryRail: string;
  actionItems: {
    title: string;
    description: string;
  }[];
  metrics: {
    label: string;
    value: string;
  }[];
}

const PORTFOLIO_TRANCHES: PortfolioTranche[] = [
  {
    id: "unsecured-retail",
    tabLabel: "Retail & FinTech Unsecured",
    badge: "Volume Tier: 5,000 – 50,000+ Accounts / Quarter",
    title: "High-Velocity Legal Processing for Unsecured Personal Loans, BNPL & Micro-Credit Books",
    description:
      "Delinquent retail pools suffer rapid recovery decay when handled through standard calling agencies. Our legal partnership model deploys programmatic statutory legal notices under Section 25 PSSA and Section 138 NI Act, supported by batch Pre-Litigation Lok Adalat referrals through District Legal Services Authorities (DLSA) to secure court-backed consent awards.",
    statutoryRail:
      "Section 25 of Payment & Settlement Systems Act, 2007 (NACH bounce) • Section 138 Negotiable Instruments Act • National Lok Adalat (Section 19-21 Legal Services Authorities Act, 1987) • Online Dispute Resolution (ODR)",
    actionItems: [
      {
        title: "Automated Bounce Webhook Ingestion & Notice Dispatch",
        description:
          "Nightly ingestion of NACH/e-Mandate bounce data from Bank LMS. Generation of advocate-signed statutory legal demand notices with Section 65B/BSA Section 63 digitally verifiable proof.",
      },
      {
        title: "Batch Pre-Litigation Lok Adalat Summons",
        description:
          "Institutional batching of sub-₹5 Lakh default accounts for upcoming National Lok Adalat sittings, achieving statutory binding compromise awards with zero court fees.",
      },
      {
        title: "Section 25 PSSA Criminal Complaints Docketing",
        description:
          "Where borrowers intentionally cancel mandates without clearing balances, digital preparation and filing of Section 25 criminal complaints across designated JMFC courts.",
      },
    ],
    metrics: [
      { label: "Notice SLA", value: "< 24 Hours" },
      { label: "Lok Adalat Conversion", value: "34% - 48%" },
      { label: "Cost Per Account", value: "Fixed Scale Fee" },
      { label: "Compliance Risk", value: "Zero (No Non-Judicial Harassment)" },
    ],
  },
  {
    id: "secured-msme",
    tabLabel: "Secured MSME & Mortgages",
    badge: "Asset Tier: ₹20 Lakhs – ₹10 Crores (Mortgage-Backed)",
    title: "End-to-End SARFAESI Act Enforcement & Fast-Track Physical Asset Possession",
    description:
      "Mortgage-backed MSME and LAP defaults require precision enforcement without procedural missteps that borrowers routinely exploit in DRTs. Our specialized banking desk drives the complete statutory lifecycle: issuing valid Section 13(2) notices, drafting airtight rejoinders to 13(3A) borrower representations, and executing Section 14 CMM/DM physical possession orders.",
    statutoryRail:
      "Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest Act, 2002 (SARFAESI Act — Sections 13(2), 13(3A), 13(4) and 14) • Recovery of Debts and Bankruptcy Act, 1993 (RDB Act)",
    actionItems: [
      {
        title: "Flawless Section 13(2) Demand Formulation",
        description:
          "Verification of loan agreements, registered simple mortgage deeds, CERSAI security interest registrations, and statement of accounts under Banker's Books Evidence Act.",
      },
      {
        title: "Statutory Section 13(3A) Representation Replies",
        description:
          "Drafting reasoned speaking orders within the mandatory 15-day statutory window to completely foreclose borrower grounds for Securitization Applications before the DRT.",
      },
      {
        title: "Section 14 CMM / DM Applications & Warrant Execution",
        description:
          "Preparation and institutional filing of Section 14 affidavits, securing advocate commissioner appointments, and executing seamless physical possession of mortgaged collateral.",
      },
    ],
    metrics: [
      { label: "13(2) Issuance SLA", value: "Within 48 Hours of NPA" },
      { label: "13(3A) Response TAT", value: "< 10 Calendar Days" },
      { label: "Sec. 14 Order Realization", value: "45 - 90 Days" },
      { label: "DRT SA Invalidation Rate", value: "> 92% Upheld" },
    ],
  },
  {
    id: "credit-card-pools",
    tabLabel: "Credit Card Charge-Offs",
    badge: "Revolving Debt Tier: 90+ DPD & Written-Off Card Books",
    title: "Recovery of Aged Revolving Card Portfolios via Summary Litigation & Institutional OTS",
    description:
      "Written-off and aged credit card portfolios represent lost balance-sheet liquidity. We mobilize institutional recovery through automated ledger audits (scrubbing usurious late fees to comply with RBI credit card master directions), structured One-Time Settlement (OTS) conciliation desks, and high-value Order 37 CPC summary suits.",
    statutoryRail:
      "Order XXXVII of Code of Civil Procedure, 1908 (Summary Suits for liquidated debt) • Section 63 Bharatiya Sakshya Adhiniyam, 2023 (Digital statement authentication) • Commercial Courts Act, 2015",
    actionItems: [
      {
        title: "Contractual Ledger Audit & Interest Scrubbing",
        description:
          "Audit cardholder agreements and monthly billing statements to insulate claims against usury challenges under the RBI Master Direction on Credit Card Operations.",
      },
      {
        title: "Structured OTS Conciliation & Binding Settlements",
        description:
          "Institutional outbound legal desk engaging cardholders under advocate auspices, drafting legally binding settlement agreements that convert defaults to immediate cash settlements.",
      },
      {
        title: "Summary Commercial Decrees for High-Ticket Default",
        description:
          "Filing expedited summary suits for card balances exceeding ₹2 Lakhs, preventing debtor asset transfers through interim attachment applications.",
      },
    ],
    metrics: [
      { label: "Portfolio Audit TAT", value: "< 72 Hours / 10K Accounts" },
      { label: "OTS Cash Realization", value: "22% - 38% of Book" },
      { label: "Pre-Decree Settlement", value: "65% of Filed Suits" },
      { label: "Audit Defense", value: "100% RBI Circular Aligned" },
    ],
  },
  {
    id: "commercial-corporate",
    tabLabel: "Corporate & Commercial Loans",
    badge: "Corporate Tier: ₹1 Crore – ₹100+ Crores",
    title: "Multi-Pronged Legal Enforcement for Mid-Market & Corporate Defaulters",
    description:
      "For delinquent corporate exposures, corporate directors and personal guarantors must be targeted across multiple legal fronts simultaneously. We orchestrate parallel litigation involving Section 19 DRT applications, personal guarantor SARFAESI enforcement, Section 7 IBC insolvency triggers, and corporate summary suits.",
    statutoryRail:
      "Insolvency and Bankruptcy Code, 2016 (IBC Section 7 & Section 95 Personal Guarantors) • Recovery of Debts and Bankruptcy Act, 1993 (DRT Section 19) • Commercial Courts Act, 2015",
    actionItems: [
      {
        title: "Personal Guarantor Bankruptcy (Section 95 IBC)",
        description:
          "Invoking Section 95 before the NCLT against promoter and director personal guarantors, triggering an automatic interim moratorium on personal asset flight.",
      },
      {
        title: "Debt Recovery Tribunal (DRT) Original Application",
        description:
          "Expedited drafting of Section 19 OAs, securing urgent ad-interim ex-parte orders of injunction against mortgaged and hypothecated asset disposals.",
      },
      {
        title: "Commercial Suit Attachment Before Judgment (Order 38 CPC)",
        description:
          "Freezing borrower and guarantor non-hypothecated bank accounts and commercial receivables through targeted attachment orders before trial.",
      },
    ],
    metrics: [
      { label: "Asset Freezing Window", value: "Within 14 Days" },
      { label: "DRT OA Filing SLA", value: "< 21 Days of Retainer" },
      { label: "NCLT Section 95 Yield", value: "High Settlement Velocity" },
      { label: "Promoter Accountability", value: "Direct Personal Liability" },
    ],
  },
];

export default function PortfolioSegmentationTabs() {
  const [activeTab, setActiveTab] = useState(PORTFOLIO_TRANCHES[0].id);
  const currentTranche = PORTFOLIO_TRANCHES.find((t) => t.id === activeTab) || PORTFOLIO_TRANCHES[0];

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-sm">
      {/* Tab Navigation Pill Bar */}
      <div className="flex flex-wrap gap-2 pb-4 border-b border-slate-100">
        {PORTFOLIO_TRANCHES.map((tranche) => {
          const isActive = activeTab === tranche.id;
          return (
            <button
              key={tranche.id}
              type="button"
              onClick={() => setActiveTab(tranche.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold tracking-tight transition-all cursor-pointer ${
                isActive
                  ? "bg-slate-900 text-white shadow-md shadow-slate-900/20"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              {tranche.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Tab Panel */}
      <div className="mt-5 space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-[11px] sm:text-xs font-extrabold px-3 py-1 bg-red-50 text-red-700 rounded-full uppercase tracking-wider">
            {currentTranche.badge}
          </span>
          <span className="text-xs text-slate-500 font-semibold">
            Institutional Litigation Blueprint
          </span>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight mb-2">
            {currentTranche.title}
          </h3>
          <p className="text-sm text-slate-700 leading-relaxed">
            {currentTranche.description}
          </p>
        </div>

        {/* Statutory Rail Callout */}
        <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3.5 sm:p-4 text-xs sm:text-sm text-slate-800 font-medium">
          <span className="font-bold text-red-600 uppercase text-[11px] tracking-wider block mb-1">
            Governing Legal Machinery &amp; Regulatory Jurisdiction
          </span>
          {currentTranche.statutoryRail}
        </div>

        {/* Key Action Deliverables */}
        <div className="space-y-3">
          <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-800">
            Tranche Deliverables &amp; Advocate Operations
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {currentTranche.actionItems.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-50/70 border border-slate-200 rounded-xl p-3.5 hover:border-slate-300 transition-colors"
              >
                <p className="text-xs font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
                  {item.title}
                </p>
                <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Performance & SLA Metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2">
          {currentTranche.metrics.map((m, idx) => (
            <div key={idx} className="bg-slate-900 text-white rounded-xl p-3 text-center">
              <p className="text-xs text-slate-400 font-medium mb-0.5">{m.label}</p>
              <p className="text-sm sm:text-base font-black text-red-400">{m.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
