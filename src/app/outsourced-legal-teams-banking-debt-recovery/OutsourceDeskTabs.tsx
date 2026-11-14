"use client";

import React, { useState } from "react";
import Link from "next/link";

interface DeskTab {
  id: string;
  tabLabel: string;
  title: string;
  scope: string;
  statutoryBasis: string;
  deliverables: {
    title: string;
    description: string;
  }[];
  slaBenchmark: string;
}

const DESK_TABS: DeskTab[] = [
  {
    id: "unsecured-retail",
    tabLabel: "Unsecured Personal & FinTech",
    title: "High-Volume Unsecured Personal Loans & FinTech Digital Lending Desks",
    scope:
      "Engineered for scheduled banks and digital lending NBFCs managing 1,000 to 50,000+ delinquent accounts per quarter. Dedicated paralegals ingest loan management system (LMS) bounce webhooks, validate loan agreements and statement certificates, draft individualized statutory demand notices, and track dispatch via India Post EDI and Section 63 BSA digital rails.",
    statutoryBasis:
      "Section 25 of the Payment and Settlement Systems Act, 2007 (PSSA) for NACH mandate failures, Section 138 of the Negotiable Instruments Act, 1881 for bounced repayment cheques, and Section 84 of the Arbitration and Conciliation Act, 1996 for institutional digital arbitration.",
    deliverables: [
      {
        title: "Automated Data Validation & Notice Generation",
        description:
          "Paralegals scrub loan origination files, audit interest computations against RBI guidelines, and issue advocate-signed statutory demands within 24 hours of bounce receipt.",
      },
      {
        title: "Section 25 PSSA / Section 138 NI Act Batch Filings",
        description:
          "Pre-formatted, verified complaint dockets filed across designated Metropolitan Magistrate / Judicial Magistrate First Class (JMFC) courts with electronic filing tokens.",
      },
      {
        title: "Pre-Litigation Lok Adalat Batch Referral",
        description:
          "Preparation and institutional submission of batch compromise schedules before District Legal Services Authorities (DLSA) for instant binding settlements.",
      },
    ],
    slaBenchmark: "Batch Notice Generation < 24 Hours • Criminal Complaint Ingestion to Filing < 14 Days",
  },
  {
    id: "credit-cards",
    tabLabel: "Credit Card NPA Books",
    title: "Credit Card Charge-Off Portfolios & Continuous Default Legal Operations",
    scope:
      "Specialized recovery desks addressing revolving credit defaults, persistent 90+ DPD accounts, and charge-off pools. The cell systematically verifies cardholder KYC, itemized monthly billing statements, charge slip logs, and electronic terms acceptance before serving formal pre-litigation advocate demands.",
    statutoryBasis:
      "Order XXXVII of the Code of Civil Procedure, 1908 (Summary Suits for liquidated contractual debts), Section 63 of Bharatiya Sakshya Adhiniyam, 2023 for computerized billing statements, and Section 7 of the Commercial Courts Act, 2015.",
    deliverables: [
      {
        title: "Itemized Billing Statement & Notice Diligence",
        description:
          "Reconciliation of principal outstanding versus interest penalties, ensuring zero usurious fee disputes under RBI Master Directions on Credit Card Operations.",
      },
      {
        title: "National Lok Adalat Settlement Mobilization",
        description:
          "Targeted outreach and pre-conciliation advocacy mobilizing cardholders for structured one-time settlements (OTS) backed by DLSA consent awards.",
      },
      {
        title: "Order 37 CPC Summary Suit Preparation",
        description:
          "Drafting and pan-India filing of summary suits against high-balance card defaulters to obtain swift attachment decrees before asset dissipation.",
      },
    ],
    slaBenchmark: "Card Ledger Scrub to Notice Service < 48 Hours • OTS Terms Execution < 72 Hours",
  },
  {
    id: "sarfaesi-sme",
    tabLabel: "SARFAESI & SME Mortgages",
    title: "Secured MSME, Mortgages & SARFAESI Enforcement Litigation Cells",
    scope:
      "Dedicated senior advocate chambers managing secured asset realization under the SARFAESI Act, 2002. From drafting Section 13(2) sixty-day demand notices and handling Section 13(3A) borrower representations to filing Section 14 applications before Chief Metropolitan Magistrates (CMM) and District Magistrates (DM).",
    statutoryBasis:
      "Sections 13(2), 13(4), 14, and 17 of the Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest Act, 2002, and Debt Recovery Tribunal (DRT) Regulations under the RDB Act, 1993.",
    deliverables: [
      {
        title: "Title Diligence & Section 13(2) Notice Drafting",
        description:
          "Comprehensive mortgage deed audit, encumbrance certificate verification, and statutory notice issuance detailing schedule of secured assets.",
      },
      {
        title: "Section 13(3A) Objection Rebuttal Drafting",
        description:
          "Rigorous, advocate-vetted reasoned replies to borrower representations served within the mandatory 15-day statutory window under the SARFAESI Act.",
      },
      {
        title: "Section 14 CMM / DM Physical Possession Applications",
        description:
          "Filing and regular physical appearance to secure orders appointing court commissioners/receivers for peaceable possession of mortgaged collateral.",
      },
    ],
    slaBenchmark: "Section 13(2) Notice Dispatch < 72 Hours • Section 13(3A) Reply Served Within 10 Days",
  },
  {
    id: "auto-asset",
    tabLabel: "Asset Seizure & Commercial Vehicle",
    title: "Commercial Vehicle, Construction Equipment & Asset Seizure Recovery Desks",
    scope:
      "Engineered for retail asset finance institutions, commercial vehicle financiers, and equipment leasing arms facing borrower abscondence or asset diversion. Dedicated teams coordinate expedited Section 9 / Section 17 interim relief, arbitral tribunal appointments, and court receiver executions.",
    statutoryBasis:
      "Section 9 & Section 17 of the Arbitration and Conciliation Act, 1996 for repossession injunctions and receiver appointments; Order XL of the Code of Civil Procedure, 1908 for court receiver enforcement.",
    deliverables: [
      {
        title: "Emergency Section 9 Repossession Petitions",
        description:
          "Immediate filing in commercial or district courts to obtain ad-interim ex-parte injunctions and court receiver appointments over hypothecated vehicles.",
      },
      {
        title: "Virtual Sole Arbitrator Solemnization",
        description:
          "Standardized referral to institutional empanelled arbitrators, managing hearing diaries, statement of claims, and speedy ex-parte awards.",
      },
      {
        title: "Execution & Section 36 Asset Attachment",
        description:
          "Filing execution petitions across jurisdictional courts where assets or borrower properties are located to enforce arbitral awards as civil court decrees.",
      },
    ],
    slaBenchmark: "Section 9 Urgent Petition Filing < 5 Working Days • Section 17 Receiver Execution < 48 Hours",
  },
];

export default function OutsourceDeskTabs() {
  const [activeTabId, setActiveTabId] = useState<string>(DESK_TABS[0].id);

  const activeTab = DESK_TABS.find((t) => t.id === activeTabId) || DESK_TABS[0];

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
      {/* Tab Navigation Pill Bar */}
      <div className="flex flex-wrap border-b border-slate-200 bg-slate-50/80 p-2 gap-1.5 sm:gap-2">
        {DESK_TABS.map((tab) => {
          const isActive = tab.id === activeTabId;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTabId(tab.id)}
              className={`px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer select-none ${
                isActive
                  ? "bg-slate-900 text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/70"
              }`}
            >
              {tab.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Tab Content Display Area */}
      <div className="p-5 sm:p-7 md:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900">
            {activeTab.title}
          </h3>
          <span className="inline-block px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-red-50 text-red-700 border border-red-200 shrink-0">
            Dedicated Bank Cell
          </span>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
          <div>
            <strong className="text-slate-900 font-bold block mb-1">Operational Scope &amp; Purpose:</strong>
            <p>{activeTab.scope}</p>
          </div>

          <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/80">
            <strong className="text-slate-900 font-bold text-xs uppercase tracking-wider block mb-1">
              Statutory Basis &amp; Applicable Laws:
            </strong>
            <p className="font-mono text-xs text-slate-800">{activeTab.statutoryBasis}</p>
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-900">
            Core Desk Deliverables Handled by Dedicated Paralegals &amp; Advocates
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
            {activeTab.deliverables.map((deliv, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between"
              >
                <div>
                  <span className="w-5 h-5 rounded-full bg-slate-900 text-white text-[10px] font-bold flex items-center justify-center mb-2">
                    {idx + 1}
                  </span>
                  <h5 className="font-bold text-xs sm:text-sm text-slate-900 mb-1">
                    {deliv.title}
                  </h5>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {deliv.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-3.5 bg-emerald-50 border border-emerald-200 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse shrink-0" />
            <strong className="text-emerald-950 font-bold">Standard SLA Benchmark:</strong>
            <span className="text-emerald-900 font-medium">{activeTab.slaBenchmark}</span>
          </div>
          <Link
            href="/bulk-recovery-cases-all-in-one-affordable-solutions"
            className="text-emerald-800 font-bold underline hover:text-emerald-950 shrink-0"
          >
            Explore Volume Pricing →
          </Link>
        </div>
      </div>
    </div>
  );
}
