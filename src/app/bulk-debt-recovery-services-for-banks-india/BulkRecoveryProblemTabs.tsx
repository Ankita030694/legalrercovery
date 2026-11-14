"use client";

import React, { useState } from "react";
import Link from "next/link";

interface AssetTab {
  id: string;
  tabLabel: string;
  title: string;
  portfolioScope: string;
  legalBasis: string;
  steps: {
    step: string;
    description: string;
  }[];
  statutoryRule: string;
}

const ASSET_TABS: AssetTab[] = [
  {
    id: "unsecured-retail",
    tabLabel: "Unsecured Retail & Cards",
    title: "High-Volume Unsecured Personal Loans, Fintech Credit & Credit Cards",
    portfolioScope:
      "Large-scale unsecured retail books (personal loans, digital consumer credit, and revolving credit card balances) often represent tens of thousands of sub-₹10 Lakh default accounts across divergent jurisdictions. Manual recovery agent harassment triggers severe RBI regulatory penalties, while fragmented local retainers cause soaring legal overheads.",
    legalBasis:
      "Section 25 of the Payment and Settlement Systems Act, 2007 (PSS Act) provides criminal prosecution rights identical to Section 138 of the Negotiable Instruments Act for bounced e-mandates and NACH auto-debits. Pre-litigation institutional legal notices, batch digital conciliation, and National Lok Adalat referrals resolve over 65% of delinquent retail files prior to trial.",
    steps: [
      {
        step: "Automated Portfolio Ingestion & Data Sanitation",
        description:
          "Integrate loan master files and core banking transaction logs. Scrub postal addresses with India Post PIN-code validation and verify mobile/email endpoints under Section 63 BSA.",
      },
      {
        step: "Simultaneous Multi-Channel Statutory Demand",
        description:
          "Dispatch advocate-signed demand notices via Registered Speed Post AD alongside verifiable WhatsApp and Registered Email notices containing unique settlement payment links.",
      },
      {
        step: "Batch Pre-Litigation Lok Adalat & Summary Action",
        description:
          "Refer responsive borrowers to institutional conciliation benches or National Lok Adalat for non-appealable recovery decrees; initiate Section 25 PSS / Order 37 summary proceedings for willful defaulters.",
      },
    ],
    statutoryRule: "Section 25 PSS Act 2007 & Section 138 Negotiable Instruments Act 1881",
  },
  {
    id: "secured-sarfaesi",
    tabLabel: "MSME & Mortgages (SARFAESI)",
    title: "Secured MSME, Commercial Lending & Housing Mortgage Default Portfolios",
    portfolioScope:
      "Secured asset portfolios with equitable mortgage of immovable property or hypothecation of plant, machinery, and inventory require rigorous procedural precision under the SARFAESI Act, 2002. Even trivial defects in Section 13(2) notices or inventory valuation invite Debts Recovery Tribunal (DRT) stay orders under Section 17.",
    legalBasis:
      "Under Sections 13(2), 13(4), and 14 of the SARFAESI Act, 2002, secured creditors can enforce their security interest without judicial intervention. Following a mandatory 60-day demand notice and statutory consideration of borrower representations under Section 13(3A), banks can take physical possession via District Magistrate / Chief Metropolitan Magistrate orders.",
    steps: [
      {
        step: "CERSAI Verification & 13(2) Demand Issuance",
        description:
          "Verify prior charge perfection on the CERSAI portal. Issue comprehensive 60-day statutory demand notice detailing itemized principal, contractual interest, and security schedules.",
      },
      {
        step: "Reasoned Reply to Objections under 13(3A)",
        description:
          "Review borrower representations within the statutory 15-day window and issue legally insulated, reasoned rejection memorandums to neutralize future Section 17 appeals before the DRT.",
      },
      {
        step: "Section 14 DM / CMM Physical Possession Filings",
        description:
          "File Section 14 applications with 9-point affidavits before the Chief Metropolitan Magistrate or District Magistrate for police assistance to take physical asset custody and conduct e-auction.",
      },
    ],
    statutoryRule: "SARFAESI Act 2002 (Sections 13 & 14) & Security Interest (Enforcement) Rules 2002",
  },
  {
    id: "drt-high-value",
    tabLabel: "DRT High-Value NPAs",
    title: "High-Value Non-Performing Assets (₹20 Lakhs and Above) Before DRT",
    portfolioScope:
      "Corporate commercial exposures, large business overdrafts, and high-ticket consortium advances exceeding ₹20 Lakhs fall within the exclusive jurisdiction of Debts Recovery Tribunals (DRT) under the Recovery of Debts and Bankruptcy Act, 1993 (RDBFI Act). Speed of adjudication directly impacts Recovery Certificate issuance.",
    legalBasis:
      "Section 19 of the RDBFI Act, 1993 empowers banks to file an Original Application (OA) for debt recovery, alongside urgent interim prayers for freezing mortgaged and unencumbered debtor assets under Section 19(12), conditional arrest warrants under Section 19(18), and appointment of receiver.",
    steps: [
      {
        step: "Exhaustive Forensic Claim Documentation",
        description:
          "Collate certified core banking statements under the Banker's Books Evidence Act / BSA Section 63, personal/corporate guarantee deeds, hypothecation agreements, and balance confirmations.",
      },
      {
        step: "Filing Original Application with Interim Injunctions",
        description:
          "Lodge e-filings across designated DRT benches pan-India within the 3-year limitation window, securing ex-parte restraint orders against asset alienation and debtor bank accounts.",
      },
      {
        step: "Recovery Officer Execution & Certificate Enforcement",
        description:
          "Expedite recovery certificate (RC) proceedings through public e-auctions, attachment of debtor receivables, and garnishee orders against corporate third parties.",
      },
    ],
    statutoryRule: "Recovery of Debts and Bankruptcy Act 1993 (Section 19) & Limitation Act 1963",
  },
  {
    id: "cheque-nach-bounces",
    tabLabel: "Cheque & NACH Bounces",
    title: "Batch Criminal Litigation for Cheque Bounce (138 NI) & NACH Mandate Fails",
    portfolioScope:
      "When borrowers issue repayment cheques or register electronic NACH / e-Mandate instructions that dishonour due to 'Insufficient Funds', 'Account Closed', or 'Payment Stopped by Drawer', the default transcends civil liability into a strict statutory criminal offence.",
    legalBasis:
      "Under Section 138 of the Negotiable Instruments Act, 1881 and Section 25 of the PSS Act, 2007, dishonour of payment instruments carries up to 2 years imprisonment and monetary fines up to twice the dishonoured amount. Strict adherence to the 30-day notice timeline and 30-day complaint filing window is mandatory.",
    steps: [
      {
        step: "30-Day Statutory Notice Trigger",
        description:
          "Extract bank dishonour memos with clearing return reason codes and dispatch formal statutory demand notices within 30 days of receiving the bank memo.",
      },
      {
        step: "Jurisdictional Court Pre-Filing Screening",
        description:
          "Upon expiry of the 15-day cure period, draft verified Section 142 complaints before the competent Judicial Magistrate / Metropolitan Magistrate at the branch maintaining the bank's account.",
      },
      {
        step: "Summons, Bailable Warrants & Interim Compensation",
        description:
          "Secure court summons and bailable warrants for non-appearance, alongside applications under Section 143A NI Act for mandatory 20% interim deposit of the cheque amount.",
      },
    ],
    statutoryRule: "Section 138/142 NI Act 1881 & Section 25 Payment and Settlement Systems Act 2007",
  },
];

export default function BulkRecoveryProblemTabs() {
  const [activeTab, setActiveTab] = useState<string>("unsecured-retail");
  const current = ASSET_TABS.find((t) => t.id === activeTab) || ASSET_TABS[0];

  return (
    <div className="w-full bg-white border border-slate-200 rounded-2xl p-4 sm:p-6 shadow-sm">
      <div className="border-b border-slate-200 pb-3 mb-4">
        <span className="text-[11px] font-bold uppercase tracking-wider text-red-600 block mb-1">
          Portfolio-Specific Legal Protocols
        </span>
        <h3 className="text-lg sm:text-xl font-bold text-slate-900">
          Institutional Workflows Across Bank Asset Classes
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 mt-1">
          Select an asset portfolio to inspect the statutory enforcement rail, compliance mandates, and judicial escalation playbook.
        </p>
      </div>

      {/* Tabs Switcher */}
      <div className="flex flex-wrap gap-2 pb-2 border-b border-slate-100">
        {ASSET_TABS.map((tab) => {
          const isActive = tab.id === activeTab;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                isActive
                  ? "bg-slate-900 text-white shadow-md"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              {tab.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Tab Content Body */}
      <div className="mt-5 space-y-4">
        <div>
          <span className="inline-block px-2.5 py-1 bg-red-50 text-red-700 border border-red-200 rounded-md text-[10px] font-bold uppercase tracking-wider mb-2">
            Statutory Framework: {current.statutoryRule}
          </span>
          <h4 className="text-base sm:text-lg font-bold text-slate-900">{current.title}</h4>
        </div>

        <div className="bg-slate-50 p-3.5 sm:p-4 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-700 space-y-2">
          <p>
            <strong className="text-slate-900 font-semibold">Institutional Bottleneck: </strong>
            {current.portfolioScope}
          </p>
          <p>
            <strong className="text-slate-900 font-semibold">Legal Enforcement Anchor: </strong>
            {current.legalBasis}
          </p>
        </div>

        <div>
          <h5 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900 mb-2.5">
            Operational 3-Stage SLA Protocol:
          </h5>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {current.steps.map((st, idx) => (
              <div
                key={idx}
                className="p-3 bg-white border border-slate-200 rounded-xl shadow-xs space-y-1"
              >
                <div className="flex items-center gap-1.5 text-red-600 font-bold text-[11px]">
                  <span className="w-4 h-4 rounded-full bg-red-100 flex items-center justify-center text-[10px]">
                    {idx + 1}
                  </span>
                  <span>{st.step}</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">{st.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-slate-900 text-white p-3.5 rounded-xl">
          <div className="text-xs">
            <span className="text-red-400 font-bold">Standard Bank Retainer SLA: </span>
            <span className="text-slate-300">
              Notice dispatch within 48h of data ingestion • Live pan-India court tracking
            </span>
          </div>
          <Link
            href="/bulk-recovery-cases-all-in-one-affordable-solutions"
            className="text-xs font-bold text-red-400 hover:text-red-300 underline shrink-0"
          >
            Explore Enterprise Retainer Models →
          </Link>
        </div>
      </div>
    </div>
  );
}
