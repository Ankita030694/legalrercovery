"use client";

import React, { useState } from "react";

interface EdpmsScenario {
  id: string;
  tabLabel: string;
  title: string;
  trigger: string;
  statutoryRule: string;
  legalBasis: string;
  steps: {
    step: string;
    detail: string;
  }[];
  adBankOutcome: string;
}

const SCENARIOS: EdpmsScenario[] = [
  {
    id: "bankrupt-buyer",
    tabLabel: "Insolvent Foreign Buyer",
    title: "Foreign Buyer Bankrupt or Absconding: Qualifying for AD-Bank Self Write-Off",
    trigger:
      "An overseas buyer in the US, EU, UK, or UAE shuts operations, enters Chapter 7 / administration, or stops responding after taking delivery against DA/Open Account terms, leaving Shipping Bills open in RBI EDPMS past 9 months.",
    statutoryRule:
      "RBI Master Direction No. 16/2015-16 (Para C.23(i)-(iii)) — Self Write-Off (5% / 10%) & AD-Bank Write-Off",
    legalBasis:
      "Under Para C.23 of the RBI Master Direction on Export of Goods and Services, an AD Category-I Bank cannot close an unrealized Shipping Bill merely on an exporter's internal email or ledger write-off. The exporter must submit documentary evidence of bonafide recovery efforts—specifically a formal Advocate Legal Demand Notice served on the foreign buyer plus an Advocate's Legal Opinion establishing that foreign litigation in the buyer's jurisdiction would cost more than the unrealized export proceeds (disproportionate cost / futile recovery).",
    steps: [
      {
        step: "1. Serve Cross-Border Advocate Legal Demand Notice",
        detail:
          "Issue a formal 15-day Advocate Demand Notice citing the Commercial Invoice, Bill of Lading/AWB, and Shipping Bill numbers via tracked international courier (DHL/FedEx) and official buyer email, preserving BSA 2023 s.63 delivery logs.",
      },
      {
        step: "2. Obtain Disproportionate Foreign Litigation Cost Opinion",
        detail:
          "If unpaid after 15 days (or courier returns undelivered/refused), obtain a reasoned Advocate Legal Opinion comparing foreign court filing fees, local counsel retainers (e.g., USD 8,000–25,000), and asset-recovery prospects against the stuck invoice value.",
      },
      {
        step: "3. File AD-Bank Write-Off Dossier & Surrender Incentives",
        detail:
          "Submit the Advocate Notice, courier/email proof, Legal Opinion, CA Certificate, and proof of proportionate RoDTEP/Duty Drawback surrender to your AD Category-I Bank for EDPMS closure.",
      },
    ],
    adBankOutcome:
      "AD-Bank records 'Write-Off' closure in EDPMS under Para C.23 without requiring RBI Regional Office escalation (within 5% / 10% annual FOB limits).",
  },
  {
    id: "caution-list-removal",
    tabLabel: "EDPMS Caution-Listing",
    title: "Exporter Auto-Caution-Listed (>24 Months Open Bills) & Packing Credit Frozen",
    trigger:
      "One or more Shipping Bills remain unrealized in EDPMS beyond 24 months from the date of shipment without an active AD-Bank extension, triggering automated RBI EDPMS Caution-Listing and blocking new e-BRCs and PCFC/EPC limits.",
    statutoryRule:
      "RBI Master Direction Para C.25 (Caution-Listing of Exporters) & A.P. (DIR Series) Circulars",
    legalBasis:
      "Once an exporter is flagged on the RBI EDPMS Caution List, AD Category-I Banks are barred from handling fresh export documents except against 100% advance payment or an irrevocable Letter of Credit, paralyzing working capital. De-cautioning requires the AD Bank to regularize every aged Shipping Bill either through realization, RBI/AD-Bank approved extension (Form ETX), or formal Para C.23 write-off backed by legal action proof.",
    steps: [
      {
        step: "1. Segregate Open Shipping Bills by Aging & Value",
        detail:
          "Download the full EDPMS XOS / Outstanding Export Bills dump from the AD Bank and classify bills into <5%/10% AD-Bank write-off eligible vs. >10% RBI Regional Office approval buckets.",
      },
      {
        step: "2. Issue Consolidated Advocate Notices & Legal Opinions",
        detail:
          "Serve batch Advocate Legal Demand Notices across every defaulting overseas buyer and compile individual Shipping-Bill-linked Legal Opinions demonstrating recovery steps or buyer insolvency.",
      },
      {
        step: "3. Submit De-Cautioning Representation via AD Bank",
        detail:
          "File the consolidated compliance dossier with the AD Bank's Trade Finance / Forex Compliance Cell requesting EDPMS regularization and immediate removal from the Caution List.",
      },
    ],
    adBankOutcome:
      "AD Bank updates EDPMS status upon write-off/extension approval, restoring normal DA/DP export document handling and PCFC/EPC credit limits.",
  },
  {
    id: "quality-short-payment",
    tabLabel: "Buyer Short-Payment / Dispute",
    title: "Foreign Buyer Deducts 15%–40% Alleging Quality Defect or Market Drop",
    trigger:
      "The foreign buyer remits 60%–85% of the invoice value and unilaterally issues a debit note for alleged quality defects, late shipment penalties, or spoilage, leaving a partial open balance in EDPMS.",
    statutoryRule:
      "RBI Master Direction Para C.20 (Reduction in Invoice Value) & Para C.23 (Write-Off)",
    legalBasis:
      "AD Category-I Banks scrutinize invoice reductions and short-payments strictly to prevent unauthorized capital flight or FEMA Section 8 contraventions. Where the exporter contests the buyer's arbitrary deduction or settles commercially after failed negotiation, the AD Bank requires formal correspondence, third-party inspection/survey reports (if any), and an Advocate Legal Notice establishing that the balance is genuinely irrecoverable or settled to mitigate larger losses.",
    steps: [
      {
        step: "1. Rebut Arbitrary Debit Note via Formal Advocate Notice",
        detail:
          "Serve a formal legal rebuttal citing clean Bill of Lading, pre-shipment inspection certificates, and Sale of Goods / Incoterms 2020 risk-transfer clauses, demanding the withheld balance within 15 days.",
      },
      {
        step: "2. Document Commercial Settlement or Futile Recovery",
        detail:
          "If the buyer refuses to pay the disputed balance, document the failed demand and obtain a Legal Opinion confirming that foreign litigation for the residual 15%–40% is commercially unviable.",
      },
      {
        step: "3. Close Partial Balance Under Para C.20 / C.23",
        detail:
          "Submit the remittance FIRC/e-BRC for the realized portion plus the Advocate Notice & Legal Opinion to close the residual short-realized balance in EDPMS.",
      },
    ],
    adBankOutcome:
      "Prevents partial-balance Shipping Bills from aging past 9/24 months and unlocks full e-BRC issuance for DGFT compliance.",
  },
  {
    id: "ed-fema-notice",
    tabLabel: "ED FEMA Show Cause",
    title: "Enforcement Directorate (ED) Notice Under FEMA Sections 7, 8 & 13",
    trigger:
      "Aged unrealized Shipping Bills trigger an Enforcement Directorate (ED) inquiry or Show Cause Notice alleging contravention of FEMA Section 7 (duty to furnish export particulars) and Section 8 (duty to take all reasonable steps to realize and repatriate forex).",
    statutoryRule:
      "FEMA 1999 Sections 7, 8 & 13(1) + Regulation 9 & 15 of FEMA (Export of Goods & Services) Regulations, 2015",
    legalBasis:
      "FEMA Section 8 does not impose strict criminal liability for buyer default alone—it mandates that the exporter 'take all reasonable steps to realize and repatriate' the foreign exchange within the prescribed period. Under Section 13, penalties (up to 3x the sum involved) are triggered when an exporter sits idle without legal follow-up or AD-Bank extensions. A contemporaneous paper trail of Advocate Legal Notices, Form ETX extension filings, and ECGC/embassy escalations proves statutory due diligence.",
    steps: [
      {
        step: "1. Immediate Form ETX Extension & Legal Notice Deployment",
        detail:
          "Before or immediately upon crossing the 9-month mark, file Form ETX with the AD Bank citing pending legal recovery and serve an Advocate Demand Notice on the foreign importer.",
      },
      {
        step: "2. Assemble Statutory 'Reasonable Steps' Defense Dossier",
        detail:
          "Compile Advocate Notices, international courier receipts, Indian Embassy / Trade Commissioner complaints, ECGC default filings, and foreign counsel cost quotes.",
      },
      {
        step: "3. File Structured Reply to ED / AD-Bank Compliance Query",
        detail:
          "Demonstrate bonafide commercial export, zero hawala/under-invoicing intent, and active FEMA Section 8 compliance to seek closure or compounding without Section 13 penalty.",
      },
    ],
    adBankOutcome:
      "Establishes verifiable 'all reasonable steps' under FEMA Section 8, insulating directors and treasury officers from Section 13 penalty exposure.",
  },
];

export default function EdpmsScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(SCENARIOS[0].id);
  const current = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full">
      {/* Tab Buttons */}
      <div
        className="flex flex-wrap gap-2 mb-6"
        role="tablist"
        aria-label="RBI EDPMS & FEMA Compliance Scenarios"
      >
        {SCENARIOS.map((scenario) => {
          const isActive = scenario.id === activeTab;
          return (
            <button
              key={scenario.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveTab(scenario.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer border ${
                isActive
                  ? "bg-[#DC2626] text-white border-[#DC2626] shadow-md shadow-red-900/15"
                  : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              {scenario.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Scenario Panel */}
      <div
        role="tabpanel"
        className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 md:p-7 space-y-5"
      >
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 border-b border-slate-200 pb-4">
          <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 leading-snug">
            {current.title}
          </h3>
          <span className="inline-block shrink-0 px-3 py-1 rounded-full text-[11px] font-bold bg-slate-900 text-red-400 border border-slate-700">
            {current.statutoryRule}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white border border-slate-200 rounded-xl p-4">
            <p className="text-[11px] font-extrabold uppercase tracking-wider text-[#DC2626] mb-1.5">
              Compliance Trigger
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {current.trigger}
            </p>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl p-4">
            <p className="text-[11px] font-extrabold uppercase tracking-wider text-slate-900 mb-1.5">
              Statutory &amp; RBI Mechanism
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {current.legalBasis}
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
            3-Step Execution Protocol
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {current.steps.map((item) => (
              <div
                key={item.step}
                className="bg-white border border-slate-200 rounded-xl p-4 flex flex-col gap-1.5"
              >
                <p className="text-xs sm:text-sm font-bold text-slate-900">
                  {item.step}
                </p>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 flex items-start gap-3">
          <span className="w-6 h-6 rounded-full bg-emerald-600 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
            &#10003;
          </span>
          <div>
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-800 mb-0.5">
              AD-Bank &amp; EDPMS Resolution Outcome
            </p>
            <p className="text-xs sm:text-sm text-emerald-900 font-medium leading-relaxed">
              {current.adBankOutcome}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
