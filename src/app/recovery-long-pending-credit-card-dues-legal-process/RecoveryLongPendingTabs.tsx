"use client";

import React, { useState } from "react";
import Link from "next/link";

interface RecoveryTab {
  id: string;
  tabLabel: string;
  title: string;
  category: string;
  mechanism: string;
  legalBasis: string;
  strategicSteps: {
    step: string;
    description: string;
  }[];
  statutoryRule: string;
  timeline: string;
  financialYield: string;
}

const RECOVERY_TABS: RecoveryTab[] = [
  {
    id: "audit-180-dpd",
    tabLabel: "180+ DPD & Write-Off Audit",
    title: "180+ DPD Stressed Card Pool Legal Audit & Recovery Segmentation",
    category: "Portfolio Risk Stratification",
    mechanism:
      "When credit card dues exceed 180 Days Past Due (DPD), card-issuing banks prudentially write off the debt from active advances while preserving 100% legal recovery rights. This module systematically audits the pool for active skip-tracing signals, employer provident fund links, and unexpired limitation periods.",
    legalBasis:
      "Reserve Bank of India Master Directions on Credit Card Issuance (2022/2026) alongside Section 18 of the Limitation Act, 1963. Prudential accounting write-offs under RBI provisioning norms do not extinguish the borrower's underlying civil liability or the bank's title to recover.",
    strategicSteps: [
      {
        step: "Digital Footprint & Skip-Tracing Reconstruction",
        description:
          "Integrate credit bureau inquiry hits, EPFO UAN employer updates, and GST filings to uncover fresh residential and employment coordinates for delinquent cardholders.",
      },
      {
        step: "Limitation Window Classification (0-36 Months vs. 36+ Months)",
        description:
          "Segregate accounts where the 3-year clock from the last payment or billing default is still running from aged pools requiring statutory acknowledgment revival.",
      },
      {
        step: "Affluence & Income-Band Scoring",
        description:
          "Filter out destitute cases and prioritize cardholders with real estate assets, vehicle registrations, or salaried employment for formal legal recovery.",
      },
      {
        step: "Bulk Notice Preparation under Section 63 BSA",
        description:
          "Generate digitally certified statements of accounts, cardholder agreements, and itemized billing rosters ready for bulk advocate dispatch.",
      },
    ],
    statutoryRule: "RBI Prudential Norms on Write-Offs & Banking Regulation Act, 1949",
    timeline: "7 to 14 Days Portfolio Segmentation",
    financialYield: "Filters 35%–45% of Write-Offs into Immediate Recoverable Cohorts",
  },
  {
    id: "limitation-reset",
    tabLabel: "Sec 18/19 Limitation Reset",
    title: "Reviving Aged Card Debts: Section 18 & 19 Statutory Limitation Reset",
    category: "Statutory Limitation Engineering",
    mechanism:
      "Article 19 of the Limitation Act 1963 bars suits for money lent after 3 years. However, banks can legally reset the entire 3-year limitation clock by procuring an acknowledgment of debt in writing (Section 18) or a token payment toward the balance (Section 19).",
    legalBasis:
      "Section 18 Limitation Act provides that an acknowledgment of liability signed in writing (including digital acknowledgment via email, SMS, or app clickwrap) before limitation expires begins a fresh 3-year period. Section 19 provides that any part-payment starts a fresh period of limitation from payment date.",
    strategicSteps: [
      {
        step: "Digital Settlement Offer Clickwrap Logs",
        description:
          "When a cardholder logs into the mobile app, views an OTS proposal, or clicks 'Request EMI Restructuring', the server audit trail acts as a digital acknowledgment under Section 18.",
      },
      {
        step: "Hardship Letters & Waiver Request Preservation",
        description:
          "Every cardholder email pleading for waiver of interest or time to repay constitutes an explicit written admission of debt that completely resets the 3-year timer.",
      },
      {
        step: "Token Payment via Gateway (UPI/NetBanking)",
        description:
          "Acceptance of even a nominal token credit (e.g., ₹500 or ₹1,000) toward the outstanding principal creates an indisputable Section 19 limitation revival point.",
      },
      {
        step: "Banker's Books Evidence & Section 63 BSA Certification",
        description:
          "Affix statutory electronic evidence certificates to ensure the digital communications are admissible before civil courts and Lok Adalats.",
      },
    ],
    statutoryRule: "Sections 18 & 19 Limitation Act, 1963 & Section 63 Bharatiya Sakshya Adhiniyam, 2023",
    timeline: "Immediate Reset Upon Digital Acknowledgment or Token Credit",
    financialYield: "Revives Otherwise Time-Barred Claims into Enforceable Balances",
  },
  {
    id: "lok-adalat-ots",
    tabLabel: "Lok Adalat Judicial Decrees",
    title: "One-Time Settlement (OTS) via Lok Adalat: Enforceable Civil Court Decrees",
    category: "Judicial Pre-Litigation ADR",
    mechanism:
      "Informal settlement agreements negotiated by recovery agencies are frequently breached by cardholders. By executing One-Time Settlements (OTS) exclusively before the National Lok Adalat, banks transform compromises into non-appealable civil court decrees with zero court fees.",
    legalBasis:
      "Sections 19, 20 & 21 of the Legal Services Authorities Act, 1987. A Lok Adalat consent award has the exact legal effect of a final decree of a Civil Court. As ruled by the Supreme Court in State of Punjab v. Jalour Singh, no appeal lies against such awards.",
    strategicSteps: [
      {
        step: "Pre-Litigation DLSA Batch Referral",
        description:
          "The bank's legal counsel files a batch reference before the District Legal Services Authority (DLSA) with pre-approved OTS concession parameters.",
      },
      {
        step: "Formal Judicial Summons Dispatch",
        description:
          "Official court summons issued by the DLSA ensure 3x higher appearance rates compared to private recovery agency telephone calls.",
      },
      {
        step: "Execution of Structured Consent Terms",
        description:
          "The compromise memo stipulates payment terms with a default clause: if any installment bounces, the entire original balance becomes due with interest.",
      },
      {
        step: "Immediate Execution under Order XXI CPC on Default",
        description:
          "If the borrower breaches the compromise, the bank directly attaches bank accounts or salary without needing to file a fresh civil trial.",
      },
    ],
    statutoryRule: "Sections 19, 20 & 21 Legal Services Authorities Act, 1987",
    timeline: "30 to 45 Days (Single Sitting Disposal)",
    financialYield: "70% to 90% Compromise Recovery Realization Rate with Zero Litigation Cost",
  },
  {
    id: "order-37-execution",
    tabLabel: "Order 37 CPC & Execution",
    title: "Summary Suits & Order XXI CPC Decree Execution against Willful Defaulters",
    category: "High-Value Civil Enforcement",
    mechanism:
      "For delinquent card balances exceeding ₹5,00,000 where cardholders deliberately ignore Lok Adalat conciliation, banks initiate Summary Suits under Order XXXVII of the CPC in Commercial Courts, culminating in property attachment and salary garnishment under Order XXI.",
    legalBasis:
      "Order XXXVII Rules 1 & 2 of the Code of Civil Procedure, 1908 (liquidated demand on written contract) and Order XXI CPC (Execution of Decrees). Supported by High Court precedents affirming credit card statements as actionable debt.",
    strategicSteps: [
      {
        step: "Issue Formal 15-Day Advocate Demand Notice",
        description:
          "A formal statutory legal demand notice served via Speed Post and Section 63 BSA electronic mail demanding payment within 15 calendar days.",
      },
      {
        step: "Plaint Presentation under Order 37 CPC",
        description:
          "The bank files a summary suit attaching the cardholder agreement, billing statements, and proof of notice delivery. The defendant has only 10 days to enter appearance.",
      },
      {
        step: "Summary Judgment in Absence of Bona Fide Defense",
        description:
          "If the borrower fails to enter appearance or secure leave to defend, allegations in the plaint are deemed admitted, yielding a summary decree in 4 to 8 months.",
      },
      {
        step: "Warrant of Attachment & Salary Garnishee",
        description:
          "Execution filed under Order XXI CPC attaching defendant's liquid bank balances, motor vehicles, or salary accounts under Section 60 CPC.",
      },
    ],
    statutoryRule: "Order XXXVII & Order XXI Code of Civil Procedure, 1908",
    timeline: "4 to 8 Months for Summary Money Decree",
    financialYield: "100% Principal + Accrued Interest + Court Costs Decreed",
  },
];

export default function RecoveryLongPendingTabs() {
  const [activeTab, setActiveTab] = useState<string>(RECOVERY_TABS[0].id);
  const currentTab = RECOVERY_TABS.find((t) => t.id === activeTab) || RECOVERY_TABS[0];

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200/90 shadow-xs overflow-hidden">
      {/* Tab Navigation Buttons */}
      <div className="flex border-b border-slate-200 bg-slate-50/80 overflow-x-auto no-scrollbar">
        {RECOVERY_TABS.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 sm:px-6 py-3.5 text-xs sm:text-sm font-bold tracking-tight whitespace-nowrap transition-colors border-b-2 cursor-pointer ${
                isActive
                  ? "border-red-600 text-red-600 bg-white"
                  : "border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100/60"
              }`}
            >
              {tab.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Tab Content Display */}
      <div className="p-5 sm:p-7 space-y-6">
        <div>
          <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider text-red-600 bg-red-50 px-2.5 py-1 rounded-md">
            {currentTab.category}
          </span>
          <h3 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 mt-2 tracking-tight">
            {currentTab.title}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-700">
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/70">
            <strong className="text-slate-900 block mb-1 font-bold">Operational Mechanism:</strong>
            <p className="leading-relaxed">{currentTab.mechanism}</p>
          </div>
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/70">
            <strong className="text-slate-900 block mb-1 font-bold">Statutory &amp; Judicial Basis:</strong>
            <p className="leading-relaxed">{currentTab.legalBasis}</p>
          </div>
        </div>

        {/* 4 Strategic Steps */}
        <div className="space-y-3">
          <h4 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-900">
            Strategic Institutional Execution Steps:
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {currentTab.strategicSteps.map((s, idx) => (
              <div
                key={idx}
                className="p-3.5 bg-white rounded-xl border border-slate-200/90 shadow-2xs space-y-1"
              >
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-red-600 text-white text-[10px] font-bold flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <strong className="text-xs sm:text-sm text-slate-900 font-bold">{s.step}</strong>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed pl-7">{s.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Metrics Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-slate-200 text-xs">
          <div className="p-3 bg-slate-50 rounded-lg border border-slate-200/60">
            <span className="text-[10px] font-bold text-slate-500 uppercase block">Governing Rule</span>
            <span className="font-bold text-slate-900 mt-0.5 block">{currentTab.statutoryRule}</span>
          </div>
          <div className="p-3 bg-slate-50 rounded-lg border border-slate-200/60">
            <span className="text-[10px] font-bold text-slate-500 uppercase block">Turnaround Benchmark</span>
            <span className="font-bold text-blue-700 mt-0.5 block">{currentTab.timeline}</span>
          </div>
          <div className="p-3 bg-slate-50 rounded-lg border border-slate-200/60">
            <span className="text-[10px] font-bold text-slate-500 uppercase block">Recovery Efficiency</span>
            <span className="font-bold text-emerald-700 mt-0.5 block">{currentTab.financialYield}</span>
          </div>
        </div>

        <div className="pt-2 text-xs text-slate-600 flex flex-wrap items-center gap-2">
          <span>Learn more about limitation timelines:</span>
          <Link
            href="/time-limit-to-file-money-recovery-case-india"
            className="text-red-600 hover:text-red-800 underline font-semibold"
          >
            Time Limit to File Money Recovery Case in India →
          </Link>
          <span className="text-slate-300">•</span>
          <Link
            href="/limitation-extended-by-acknowledgment-part-payment"
            className="text-red-600 hover:text-red-800 underline font-semibold"
          >
            Limitation Extension by Acknowledgment →
          </Link>
        </div>
      </div>
    </div>
  );
}
