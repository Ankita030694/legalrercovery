"use client";

import React, { useState } from "react";
import Link from "next/link";

interface StrategyCategoryTab {
  id: string;
  tabLabel: string;
  title: string;
  portfolioProfile: string;
  statutoryLevers: string;
  recommendedPlaybook: {
    stage: string;
    action: string;
    statutoryRef: string;
  }[];
  costAdvantage: string;
}

const CATEGORIES: StrategyCategoryTab[] = [
  {
    id: "unsecured-retail",
    tabLabel: "Unsecured Retail & Credit Cards",
    title: "Unsecured Personal Loans, Credit Card Receivables & Digital Lending",
    portfolioProfile:
      "Ticket sizes from ₹25,000 to ₹10,00,000 without collateral security. High delinquency volume, borrower relocation risks, and disproportionate formal court litigation costs relative to debt value.",
    statutoryLevers:
      "Pre-Litigation Lok Adalat (LSAA 1987 Section 19/20), Section 25 Payment and Settlement Systems Act 2007 (NACH Mandate Dishonour), Section 138 Negotiable Instruments Act 1881, and Order 37 CPC Summary Suits.",
    recommendedPlaybook: [
      {
        stage: "Day 31–60 (SMA-1)",
        action: "Deploy automated multi-channel advocate legal notice via Speed Post and WhatsApp/Email under BSA 2023 Section 63 with 15-day cure demand.",
        statutoryRef: "Section 25 PSS Act & RBI Master Direction on Advances",
      },
      {
        stage: "Day 61–90 (SMA-2)",
        action: "Batch-file pre-litigation dispute notices for the upcoming National Lok Adalat through District Legal Services Authorities (DLSA) with zero court fee.",
        statutoryRef: "Section 19(5) Legal Services Authorities Act, 1987",
      },
      {
        stage: "Day 91+ (NPA Execution)",
        action: "Obtain binding Lok Adalat Award having the full statutory force of a Civil Court Decree under Section 21 LSAA 1987, executable via bank account attachment.",
        statutoryRef: "Section 21 LSAA 1987 & Order 21 CPC Execution",
      },
    ],
    costAdvantage:
      "Reduces legal recovery operational cost by 78% compared to individual civil suits, while securing non-appealable civil court execution decrees within 45 to 60 days.",
  },
  {
    id: "secured-mortgages",
    tabLabel: "Secured Mortgages & Asset Loans",
    title: "Housing Loans, Commercial Real Estate & Secured LAP Portfolios",
    portfolioProfile:
      "Collateral-backed exposures exceeding ₹1,00,000 where equitable mortgage or hypothecation is registered with CERSAI. Primary objective is rapid physical repossession and public auction.",
    statutoryLevers:
      "Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest (SARFAESI) Act, 2002 (Sections 13(2), 13(4), 13(8), and 14).",
    recommendedPlaybook: [
      {
        stage: "NPA Classification (Day 90+)",
        action: "Serve formal 60-day demand notice under Section 13(2) SARFAESI Act detailing itemized outstanding debt and registered mortgaged assets.",
        statutoryRef: "Section 13(2) SARFAESI Act, 2002",
      },
      {
        stage: "Borrower Representation (Day 150)",
        action: "Furnish statutory reasoned reply within 15 days under Section 13(3A) rejecting frivolous borrower representations before taking enforcement steps.",
        statutoryRef: "Section 13(3A) SARFAESI Act & Mardia Chemicals Ruling",
      },
      {
        stage: "Physical Possession (Day 180)",
        action: "Lodge Section 14 application before the Chief Metropolitan Magistrate (CMM) or District Magistrate (DM) for appointment of an advocate commissioner to secure vacant possession.",
        statutoryRef: "Section 14 SARFAESI Act, 2002 (30-day statutory TAT)",
      },
    ],
    costAdvantage:
      "Bypasses civil court delays entirely, allowing scheduled commercial banks to realize 85%+ of distressed collateral value via electronic public auction without prior court decree.",
  },
  {
    id: "msme-working-capital",
    tabLabel: "MSME & Commercial Loans",
    title: "MSME Working Capital Limits, Term Loans & Trade Overdrafts",
    portfolioProfile:
      "Exposures between ₹10 Lakhs and ₹5 Crores with partial collateral, hypothecated stocks, book debts, and personal guarantees of business promoters.",
    statutoryLevers:
      "Pre-Litigation Commercial Mediation (Commercial Courts Act 2015 Section 12A), Online Dispute Resolution (ODR) Institutional Arbitration, and Section 138 NI Act criminal prosecution.",
    recommendedPlaybook: [
      {
        stage: "Delinquency Inception",
        action: "Issue advocate statutory loan recall notice invoking personal guarantees and demanding inspection of hypothecated inventory and debtor book debts.",
        statutoryRef: "Indian Contract Act 1872 Sections 126–128",
      },
      {
        stage: "Pre-Litigation Mediation",
        action: "Initiate institutional mediation via Legal Services Authority or designated ODR platforms to structure enforceable structured settlement agreements.",
        statutoryRef: "Section 12A Commercial Courts Act, 2015",
      },
      {
        stage: "Dual-Track Escalation",
        action: "Simultaneously file Section 138 criminal complaints for dishonoured repayment cheques and invoke fast-track arbitration under Section 29B of the Arbitration Act.",
        statutoryRef: "Transcore Supreme Court Benchmark & Sec 138 NI Act",
      },
    ],
    costAdvantage:
      "Secures enforceable settlement terms or arbitral awards within 90 to 120 days, avoiding 3- to 5-year civil trial backlogs while maintaining business continuity pressure.",
  },
  {
    id: "corporate-consortium",
    tabLabel: "High-Value DRT & Insolvency",
    title: "Corporate Consortium Loans, Stressed Assets & Debt Recovery Tribunals",
    portfolioProfile:
      "High-value delinquent exposures exceeding ₹20,00,000 (DRT threshold) or ₹1 Crore (IBC Section 4 threshold) against corporate entities, LLPs, and corporate guarantors.",
    statutoryLevers:
      "Section 19 Recovery of Debts and Bankruptcy (RDB) Act 1993, Section 7 Insolvency and Bankruptcy Code (IBC) 2016, and Section 95 Personal Insolvency against Corporate Guarantors.",
    recommendedPlaybook: [
      {
        stage: "Pre-Filing Stage",
        action: "Collate certified accounts under Banker's Books Evidence Act 1891 / BSA Section 63 and issue comprehensive advocate final recall demand.",
        statutoryRef: "Section 19(1) RDB Act, 1993",
      },
      {
        stage: "DRT Original Application (OA)",
        action: "File Section 19 OA before jurisdictional DRT claiming interim injunctions against asset alienations and seeking immediate attachment before judgment.",
        statutoryRef: "Section 19(4) & 19(12) RDB Act, 1993",
      },
      {
        stage: "Insolvency / Personal Guarantor Action",
        action: "File Section 95 application against promoter-guarantors before NCLT, triggering an immediate interim moratorium under Section 96 to prevent promoter asset dissipation.",
        statutoryRef: "Section 95 & Section 96 IBC, 2016",
      },
    ],
    costAdvantage:
      "Brings immense psychological and legal pressure on corporate promoters, leading to high-recovery one-time settlements (OTS) or liquidation via DRT Recovery Officer certificates.",
  },
];

export default function EffectiveLegalStrategiesTabs() {
  const [activeTab, setActiveTab] = useState<string>(CATEGORIES[0].id);
  const currentCategory = CATEGORIES.find((c) => c.id === activeTab) || CATEGORIES[0];

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-xs">
      <div className="border-b border-slate-200 pb-4 mb-6">
        <h3 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 tracking-tight">
          Portfolio-Specific Statutory Recovery Playbooks
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 mt-1">
          Select a delinquent portfolio category to examine statutory recovery levers, operational escalation timelines, and institutional cost advantages.
        </p>
      </div>

      {/* Category Tab Buttons */}
      <div className="flex flex-wrap gap-2 mb-6">
        {CATEGORIES.map((cat) => {
          const isActive = cat.id === activeTab;
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveTab(cat.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold tracking-tight transition-all duration-150 cursor-pointer ${
                isActive
                  ? "bg-[#DC2626] text-white shadow-md shadow-red-900/20"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              {cat.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Tab Content Card */}
      <div className="bg-slate-50 rounded-xl p-5 sm:p-6 border border-slate-200 space-y-5">
        <div>
          <span className="text-[11px] font-black uppercase tracking-wider text-red-600 bg-red-100/70 px-2.5 py-1 rounded-md">
            Portfolio Profile &amp; Recovery Objective
          </span>
          <h4 className="text-base sm:text-lg font-bold text-slate-900 mt-2">
            {currentCategory.title}
          </h4>
          <p className="text-xs sm:text-sm text-slate-700 mt-1 leading-relaxed">
            {currentCategory.portfolioProfile}
          </p>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
            Governing Statutory Levers
          </p>
          <p className="text-xs sm:text-sm font-semibold text-slate-800">
            {currentCategory.statutoryLevers}
          </p>
        </div>

        <div>
          <p className="text-xs font-black uppercase tracking-wider text-slate-700 mb-3">
            Recommended Operational Playbook
          </p>
          <div className="space-y-3">
            {currentCategory.recommendedPlaybook.map((step, idx) => (
              <div
                key={idx}
                className="bg-white p-3.5 sm:p-4 rounded-xl border border-slate-200 flex flex-col sm:flex-row sm:items-start justify-between gap-3"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-slate-900 text-white text-[11px] font-black flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-slate-900">
                      {step.stage}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 pl-7 leading-relaxed">
                    {step.action}
                  </p>
                </div>
                <div className="sm:text-right shrink-0 pl-7 sm:pl-0">
                  <span className="inline-block text-[10px] sm:text-[11px] font-bold text-red-700 bg-red-50 border border-red-200 px-2 py-0.5 rounded-md">
                    {step.statutoryRef}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-xl flex items-start gap-3">
          <div className="w-2 h-2 rounded-full bg-emerald-600 mt-1.5 shrink-0" />
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-emerald-900">
              Institutional Economic Impact
            </p>
            <p className="text-xs sm:text-sm text-emerald-800 mt-0.5 leading-relaxed font-medium">
              {currentCategory.costAdvantage}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
