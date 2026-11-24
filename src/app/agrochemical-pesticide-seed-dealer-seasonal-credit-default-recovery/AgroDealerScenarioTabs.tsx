"use client";

import React, { useState } from "react";

interface ScenarioTab {
  id: string;
  tabLabel: string;
  title: string;
  dealerTactic: string;
  statutoryCounter: string;
  actionSteps: {
    step: string;
    detail: string;
  }[];
  legalProvision: string;
}

const SCENARIOS: ScenarioTab[] = [
  {
    id: "oral-crop-failure",
    tabLabel: "Oral 'Crop Failure' Excuse",
    title: "Dealer Claims 'Poor Seed Germination / Low Pesticide Efficacy' 5 Months After Sale",
    dealerTactic:
      "After collecting full cash from farmers during Kharif or Rabi peak, the Krishi Seva Kendra proprietor refuses to clear the 90–120 day credit ledger, orally alleging that 'farmers complained of zero germination' or 'bollworm/fungicide failure'—without ever raising a written complaint during the sowing or spraying window.",
    statutoryCounter:
      "Under the Seeds Act, 1966 (Sections 14–16) and the Insecticides Act, 1968 (Sections 21–24), any allegation of sub-standard seed or misbranded/ineffective pesticide requires contemporaneous sampling by a notified Government Seed Inspector or Insecticide Inspector in the presence of witnesses (joint panchnama) and an adverse test report from a notified Government Laboratory for that specific batch/lot. Under Section 42 of the Sale of Goods Act, 1930, retaining and reselling stock without written rejection within a reasonable time constitutes deemed acceptance.",
    actionSteps: [
      {
        step: "Serve Statutory Quality-Defense Estoppel Notice",
        detail:
          "Issue a Fact-Verified Legal Notice demanding the dealer produce a notified Seed Inspector / Insecticide Analyst Government Lab Report and joint panchnama within 7 days—failing which the defense stands estopped.",
      },
      {
        step: "Attach Lot-Wise COA & GST E-Way Delivery Trail",
        detail:
          "Annex your internal Quality Control Certificate of Analysis (COA) for the exact batch numbers printed on the GST Tax Invoices, E-Way Bills, and signed Lorry Receipts (Bilty).",
      },
      {
        step: "Invoke Summary Recovery + MSMED 3x RBI Interest",
        detail:
          "Escalate to Order XXXVII Summary Suit or MSEFC Samadhaan (if Udyam-registered) as a liquidated debt with zero 'pre-existing genuine dispute'.",
      },
    ],
    legalProvision: "Seeds Act 1966 ss.14–16 | Insecticides Act 1968 ss.21–24 | Sale of Goods Act s.42",
  },
  {
    id: "pdc-bounce-seasonal",
    tabLabel: "Seasonal PDC Bounce",
    title: "Kharif/Rabi Security Cheques Return 'Funds Insufficient' or 'Payment Stopped'",
    dealerTactic:
      "Dealers furnish undated or post-dated security cheques at the time of dealership onboarding. When the regional credit manager presents the cheque after harvest reconciliation, the dealer issues 'Stop Payment' instructions or leaves the account unfunded, claiming 'security cheques cannot be prosecuted'.",
    statutoryCounter:
      "The Supreme Court in Sripati Singh v. State of Jharkhand (2021) and Sampelly Satyanarayana Rao v. Indian Renewable Energy Development Agency (2016) settled that once a debt becomes due and payable on the date of presentation, a cheque originally issued as 'security' attracts full criminal prosecution under Section 138 of the Negotiable Instruments Act, 1881. Stopping payment or closing the account post-supply triggers identical penal liability.",
    actionSteps: [
      {
        step: "Issue Mandatory 30-Day Section 138 Demand Notice",
        detail:
          "Within 30 days of receiving the Bank Cheque Return Memo, serve a statutory Section 138 NI Act demand notice giving 15 days to pay the cheque amount.",
      },
      {
        step: "Prepare Ledger Reconciliation Statement",
        detail:
          "Ensure the presented cheque amount does not exceed the actual unpaid ledger balance after adjusting credit notes, rebates, or returned stock (per Dashrathbhai Trikambhai Patel).",
      },
      {
        step: "File Criminal Complaint Within 30 Days of Cause",
        detail:
          "If unpaid after 15 days of notice receipt, file Section 138 complaint before the Judicial Magistrate and seek 20% interim compensation under Section 143A NI Act.",
      },
    ],
    legalProvision: "NI Act 1881 ss.138, 139 & 143A | Sripati Singh v. State of Jharkhand (2021)",
  },
  {
    id: "license-transfer-fraud",
    tabLabel: "License / Shop Name Fraud",
    title: "Dealer Transfers Fertilizer/Pesticide License or Opens New Firm to Dodge Dues",
    dealerTactic:
      "To evade ₹15–₹40 lakh arrears with your company, the proprietor shuts down 'Kisan Agro Agency', transfers the retail shop lease and Stockist counter to a brother or spouse under 'New Bharat Krishi Kendra', obtains a fresh Fertilizer/Insecticide Retail License, and continues selling competing brands.",
    statutoryCounter:
      "Fraudulently transferring assets or diverting business to defeat creditors is actionable under Section 318 (Cheating) and Section 316 (Criminal Breach of Trust) of the Bharatiya Nyaya Sanhita (BNS), 2023, alongside civil attachment before judgment under CPC Order XXXVIII Rule 5. Additionally, filing a formal written representation with the District Agriculture Officer (Licensing Authority) flagging unpaid trade defaults and misrepresentation can trigger license scrutiny under the Fertilizer (Control) Order, 1985 and Insecticides Rules, 1971.",
    actionSteps: [
      {
        step: "Freeze Sole Proprietor Personal Liability",
        detail:
          "In a sole proprietorship, the firm and proprietor are legally identical—proceed directly against the proprietor's personal bank accounts, agricultural/commercial land, and vehicles.",
      },
      {
        step: "Copy District Agriculture Officer on Legal Notice",
        detail:
          "Mark a formal copy of the statutory demand notice to the District Agriculture Officer / Licensing Authority documenting the fraudulent license migration.",
      },
      {
        step: "Seek Order XXXVIII Rule 5 Attachment",
        detail:
          "File for urgent attachment before judgment in Commercial/Civil Court to prevent further dissipation of shop inventory and receivables.",
      },
    ],
    legalProvision: "BNS 2023 ss.316 & 318 | CPC Order XXXVIII Rule 5 | Fertilizer Control Order 1985",
  },
  {
    id: "batch-pre-sowing-drive",
    tabLabel: "Pre-Sowing Batch Drive",
    title: "100+ Retail Krishi Kendras Defaulting Across Multiple Districts Before Next Season",
    dealerTactic:
      "Across Jalna, Indore, Karnal, Guntur, or Rajkot belts, dozens of sub-dealers withhold 20–30% of seasonal dues simultaneously, betting that the agrochemical or seed company's ZSM/RSM team cannot litigate 150 separate ₹3–₹25 lakh accounts in distant taluka courts.",
    statutoryCounter:
      "A synchronized Pre-Sowing Batch Legal Notice Drive—dispatched simultaneously via Advocate Email, WhatsApp (with BSA 2023 s.63 delivery logs), and Speed Post RPAD 45 days before Kharif/Rabi bookings open—compels dealers to clear overdue ledgers to restore credit lines and avoid blacklisting across industry peers.",
    actionSteps: [
      {
        step: "Segment Aging Ledger by Ticket & PDC Status",
        detail:
          "Export overdue dealer CSVs grouped into: (a) Active PDC/RTGS cases, (b) Oral quality-excuse cases, and (c) Closed-shop/absconding proprietors.",
      },
      {
        step: "Trigger 15-Day Dual-Language Batch Notices",
        detail:
          "Dispatch statutory English/Hindi legal notices simultaneously across all defaulting talukas before seasonal dealer meets and credit-limit renewals.",
      },
      {
        step: "Escalate Top 15% Stubborn Accounts to Filing",
        detail:
          "Convert non-paying top-tier accounts into NI Act s.138 complaints, MSEFC references, or Order XXXVII summary suits to establish immediate regional deterrence.",
      },
    ],
    legalProvision: "BSA 2023 s.63 | CPC Order XXXVII | MSMED Act s.15–18 | NI Act s.138",
  },
];

export default function AgroDealerScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(SCENARIOS[0].id);
  const current = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full">
      {/* Tab Buttons */}
      <div
        role="tablist"
        aria-label="Agrochemical and Seed Dealer Default Scenarios"
        className="flex flex-wrap gap-2 mb-6 border-b border-slate-200 pb-4"
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
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                isActive
                  ? "bg-[#DC2626] text-white shadow-sm"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
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
        className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-5"
      >
        <div>
          <span className="inline-block text-[10px] font-black uppercase tracking-widest text-[#DC2626] bg-red-50 border border-red-200 px-2.5 py-1 rounded-full mb-2">
            {current.legalProvision}
          </span>
          <h3 className="text-lg sm:text-xl font-black text-slate-900 leading-snug">
            {current.title}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
            <p className="text-[11px] font-black uppercase tracking-wider text-amber-800 mb-1.5">
              Dealer&apos;s Excuse / Tactic
            </p>
            <p className="text-xs sm:text-sm text-amber-950 leading-relaxed">
              {current.dealerTactic}
            </p>
          </div>
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
            <p className="text-[11px] font-black uppercase tracking-wider text-emerald-800 mb-1.5">
              Statutory Creditor Counter-Strike
            </p>
            <p className="text-xs sm:text-sm text-emerald-950 leading-relaxed">
              {current.statutoryCounter}
            </p>
          </div>
        </div>

        <div>
          <p className="text-xs font-black uppercase tracking-wider text-slate-700 mb-3">
            3-Step ZSM &amp; Credit Legal Action Plan
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {current.actionSteps.map((item, idx) => (
              <div
                key={item.step}
                className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs"
              >
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#DC2626] text-white text-xs font-bold mb-2">
                  {idx + 1}
                </span>
                <p className="text-xs sm:text-sm font-bold text-slate-900 mb-1">
                  {item.step}
                </p>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
