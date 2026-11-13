"use client";

import React, { useState } from "react";
import Link from "next/link";

interface LoanDefaultTab {
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

const DEFAULT_SCENARIOS: LoanDefaultTab[] = [
  {
    id: "term-loan",
    tabLabel: "Term Loan Default",
    title: "Defaulted Commercial Term Loans & Fixed Asset Mortgages",
    cause:
      "Commercial borrowers servicing high-value Capex term loans default on quarterly or monthly amortisation schedules due to cash flow shortfalls, operational distress, or strategic non-payment. Once principal or interest overdues exceed 90 days, the account is classified as a Non-Performing Asset (NPA) under RBI IRAC prudential norms.",
    legalBasis:
      "Secured creditors possess absolute statutory powers under the SARFAESI Act, 2002. Under Section 13(2), the bank issues a mandatory 60-day demand notice. If unpaid, Section 13(4) empowers the bank to take constructive possession, seek physical eviction via the District Magistrate (DM) or Chief Metropolitan Magistrate (CMM) under Section 14, and auction the mortgaged commercial land, factory, or plant.",
    steps: [
      {
        step: "Crystallise NPA & Issue Section 13(2) Notice",
        description:
          "Verify the 90-day delinquency record, recalculate outstanding penal interest, and dispatch a statutory 60-day demand notice under Section 13(2) SARFAESI Act detailing all mortgaged immoveable properties.",
      },
      {
        step: "Dispose Section 13(3A) Objections via Speaking Order",
        description:
          "If the borrower submits representations within 60 days, examine and issue a reasoned speaking rejection within 15 days as strictly mandated by Mardia Chemicals (2004) to avoid DRT stay orders.",
      },
      {
        step: "File Section 14 Application for Physical Possession",
        description:
          "If the 60-day window expires without full clearance, file a Section 14 affidavit before the jurisdictional DM/CMM to secure police assistance and take physical possession of factory premises and machinery for public e-auction.",
      },
    ],
    statutoryRule: "SARFAESI Act 2002 (Sections 13, 14) & Security Interest Rules 2002",
  },
  {
    id: "working-capital",
    tabLabel: "Working Capital & CC",
    title: "Cash Credit (CC) / Overdraft Limits Default & Stock Hypothecation",
    cause:
      "Working capital and Cash Credit (CC) facilities default when borrowers fail to submit monthly stock statements, divert operational sales collections away from the lending consortium's escrow/current accounts, or deplete hypothecated inventory without amortising drawing power.",
    legalBasis:
      "Hypothecation agreements confer a first charge over raw materials, finished stock, and trade receivables. Banks can institute urgent proceedings under Section 19 of the Recovery of Debts and Bankruptcy (RDB) Act, 1993, before the Debt Recovery Tribunal (DRT) seeking ex-parte interim injunctions against stock liquidation under Section 19(12), or file commercial summary suits.",
    steps: [
      {
        step: "Commission Forensic Stock & Ledger Audit",
        description:
          "Deploy empanelled forensic auditors to conduct surprise godown inspections, verify book debts aged over 90 days, and establish fund siphoning or fictitious billing by the corporate borrower.",
      },
      {
        step: "Recall Limit & Issue Revocation Notice",
        description:
          "Officially recall the sanctioned limit, freeze drawing power, and serve a 15-day statutory advocate demand notice demanding immediate collateralisation or liquidation of unpaid cash credit dues.",
      },
      {
        step: "File DRT Application with Restraint on Debtors",
        description:
          "Lodge an Original Application (OA) under Section 19 of the RDB Act before the DRT, concurrently securing attachment orders on third-party trade receivables and restraining promoters from alienating hypothecated assets.",
      },
    ],
    statutoryRule: "RDB Act 1993 (Section 19), Commercial Courts Act 2015, & Indian Contract Act 1872",
  },
  {
    id: "ibc-insolvency",
    tabLabel: "Corporate Insolvency (IBC)",
    title: "NCLT Corporate Insolvency Resolution Process (CIRP) Under Section 7",
    cause:
      "Corporate debtors with institutional term debts or working capital loans exceeding the statutory default threshold of ₹1 Crore frequently stall bilaterally or offer non-viable restructuring proposals while assets depreciate.",
    legalBasis:
      "Section 7 of the Insolvency and Bankruptcy Code (IBC), 2016, permits financial creditors (sole banks or consortium members) to petition the National Company Law Tribunal (NCLT) directly. Under the landmark Innoventive Industries ruling, NCLT is solely concerned with proving the existence of financial debt and occurrence of default.",
    steps: [
      {
        step: "Collate NeSL Record of Default & Loan Sanction Deeds",
        description:
          "Extract authenticated default certificates from National E-Governance Services Limited (NeSL) Information Utility, loan agreements, sanction letters, and account ledgers.",
      },
      {
        step: "Draft and File Section 7 Petition Before NCLT Bench",
        description:
          "File Form 1 under the Insolvency and Bankruptcy (Application to Adjudicating Authority) Rules, 2016, nominating an empanelled Insolvency Resolution Professional (IRP) with written consent in Form 2.",
      },
      {
        step: "Trigger Moratorium & Displace Corporate Management",
        description:
          "Upon NCLT admission, a moratorium under Section 14 comes into force, suspending board control and vesting full corporate management in the IRP to invite resolution plans or proceed to Section 33 liquidation.",
      },
    ],
    statutoryRule: "Insolvency and Bankruptcy Code 2016 (Section 7, Section 14, Section 33)",
  },
  {
    id: "guarantor-action",
    tabLabel: "Personal Guarantees",
    title: "Promoter Personal Guarantee Enforcement & NCLT Section 95 Action",
    cause:
      "Promoters and directors routinely execute comprehensive Personal Guarantee agreements to secure enterprise loans, but attempt to shield their personal estates behind corporate veils or ongoing Corporate Insolvency Resolution Processes.",
    legalBasis:
      "Under Section 128 of the Indian Contract Act, 1872, the liability of the surety is co-extensive with that of the principal debtor. Furthermore, the Supreme Court in SBI v. V. Ramakrishnan and Lalit Kumar Jain v. Union of India confirmed that corporate moratoriums under Section 14 IBC do not shield personal guarantors, and banks can initiate insolvency against guarantors under Section 95 IBC before NCLT.",
    steps: [
      {
        step: "Invoke Personal Guarantee via Registered Advocate Notice",
        description:
          "Serve a formal Guarantee Invocation Demand Notice demanding settlement within 14 days, crystallising personal joint and several liability against all director-guarantors.",
      },
      {
        step: "File Form C Insolvency Application Under Section 95 IBC",
        description:
          "Lodge a petition under Section 95 of the IBC before the NCLT having jurisdiction over the corporate debtor, triggering an immediate interim moratorium under Section 96 on the guarantor's personal assets.",
      },
      {
        step: "Appoint Resolution Professional to Trace Personal Assets",
        description:
          "NCLT appoints an RP under Section 97 to examine the debtor's estate, uncover undisclosed properties, and formulate a repayment plan or bankruptcy order under Section 121 IBC.",
      },
    ],
    statutoryRule: "IBC 2016 (Sections 95–100), Indian Contract Act (Section 128) & SC Lalit Kumar Jain (2021)",
  },
  {
    id: "wilful-default",
    tabLabel: "Wilful Default & Fraud",
    title: "Fund Siphoning, Wilful Defaulter Classification & Criminal Action",
    cause:
      "Commercial entities intentionally divert loan proceeds to subsidiary entities, create fictitious shell-company transactions, falsify financial statements, or dispose of hypothecated assets without bank consent.",
    legalBasis:
      "Reserve Bank of India Master Directions on Wilful Defaulters permit banks to classify defaulting companies and whole-time directors as Wilful Defaulters following an Identification Committee show-cause notice and Review Committee order. This triggers debarment from institutional credit, disqualification under Section 29A IBC, and criminal complaints under Bharatiya Nyaya Sanhita (BNS) Sections 316 (criminal breach of trust) and 318 (cheating).",
    steps: [
      {
        step: "Issue Wilful Defaulter Show Cause Notice",
        description:
          "Lending bank's Identification Committee reviews forensic audit reports and serves a detailed show-cause notice granting the borrower and promoters 15 days to represent against wilful default classification.",
      },
      {
        step: "Review Committee Confirmation & CIBIL/RBI Reporting",
        description:
          "The Review Committee considers oral submissions and passes a final order publishing names on credit information bureaus (CIBIL/CRILC), stripping directors of corporate board memberships.",
      },
      {
        step: "Lodge Criminal Complaints (BNS & Section 138 NI Act)",
        description:
          "Initiate criminal proceedings under BNS Sections 316 and 318 for criminal breach of trust, alongside complaints under Section 138 Negotiable Instruments Act or Section 25 PSSA for dishonoured cheques or NACH mandates.",
      },
    ],
    statutoryRule: "RBI Master Direction on Wilful Defaulters, BNS 2023 (Sec 316, 318) & NI Act 1881 (Sec 138)",
  },
];

export default function BusinessLoanRecoveryTabs() {
  const [activeTab, setActiveTab] = useState<string>(DEFAULT_SCENARIOS[0].id);

  const currentTab = DEFAULT_SCENARIOS.find((t) => t.id === activeTab) || DEFAULT_SCENARIOS[0];

  return (
    <div className="w-full bg-white border border-slate-200 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-sm">
      {/* Tab Navigation Pill Bar */}
      <div className="flex flex-wrap gap-2 pb-4 border-b border-slate-200 mb-6">
        {DEFAULT_SCENARIOS.map((tab) => {
          const isActive = tab.id === activeTab;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-150 cursor-pointer ${
                isActive
                  ? "bg-[#DC2626] text-white shadow-md shadow-red-900/20"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              {tab.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Tab Content Display */}
      <div className="space-y-6">
        <div>
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
            <span className="text-[11px] sm:text-xs font-extrabold px-3 py-1 bg-red-50 text-[#DC2626] rounded-full uppercase tracking-wider">
              {currentTab.statutoryRule}
            </span>
            <span className="text-xs text-slate-500 font-semibold">Institutional Recovery Track</span>
          </div>
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900">
            {currentTab.title}
          </h3>
        </div>

        {/* Cause & Legal Basis Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1.5">
              Default Trigger &amp; Nature of Breach
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {currentTab.cause}
            </p>
          </div>

          <div className="p-4 bg-red-50/60 border border-red-200/80 rounded-xl">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-red-900 mb-1.5">
              Statutory Authority &amp; Judicial Power
            </h4>
            <p className="text-xs sm:text-sm text-red-950 leading-relaxed">
              {currentTab.legalBasis}
            </p>
          </div>
        </div>

        {/* 3 Actionable Enforcement Steps */}
        <div className="space-y-3">
          <h4 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-900">
            Enforcement Protocol for Banking Teams
          </h4>
          <div className="grid grid-cols-1 gap-3">
            {currentTab.steps.map((st, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-3.5 bg-white border border-slate-200 rounded-xl shadow-xs"
              >
                <span className="shrink-0 w-6 h-6 rounded-full bg-slate-900 text-white font-bold text-xs flex items-center justify-center mt-0.5">
                  {i + 1}
                </span>
                <div>
                  <strong className="text-xs sm:text-sm font-bold text-slate-900 block mb-0.5">
                    {st.step}
                  </strong>
                  <p className="text-xs text-slate-600 leading-relaxed">{st.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
