"use client";

import React, { useState } from "react";

interface ScenarioTab {
  id: string;
  tabLabel: string;
  title: string;
  trigger: string;
  statutoryMandate: string;
  steps: {
    step: string;
    detail: string;
  }[];
  complianceRule: string;
}

const SCENARIOS: ScenarioTab[] = [
  {
    id: "ltv-margin-call",
    tabLabel: "75% LTV Breach",
    title: "Bullion Price Drop Triggers 75% LTV Breach & Margin Call Default",
    trigger:
      "When 22-carat gold prices fall or accrued interest pushes the outstanding loan balance above the RBI-mandated 75% Loan-to-Value (LTV) ceiling, the NBFC cannot immediately auction the ornament without a formal margin-call cure window.",
    statutoryMandate:
      "Under the RBI Master Direction on Gold Loans (NBFC Scale Based Regulations) read with Section 176 of the Indian Contract Act, 1872, an NBFC must issue a formal Margin Call Notice granting the borrower a defined cure window to either deposit top-up gold ornaments or make a partial principal repayment to restore LTV at or below 75% before initiating sale.",
    steps: [
      {
        step: "1. Daily IBJA Mark-to-Market Valuation",
        detail:
          "Compute collateral value using the 30-day average closing price of 22-carat gold published by the India Bullion and Jewellers Association (IBJA) or SEBI-regulated commodity exchange.",
      },
      {
        step: "2. 7-to-15 Day Margin Call Notice",
        detail:
          "Dispatch a timestamped LTV Breach Notice via SMS, WhatsApp, Email, and Speed Post specifying the exact shortfall amount required to bring LTV back to 75%.",
      },
      {
        step: "3. Transition to Section 176 Pre-Auction Notice",
        detail:
          "If the borrower fails to cure the LTV deficit within the margin-call window, issue a separate, unambiguous Section 176 Contract Act statutory notice fixing the auction date, time, and taluka venue.",
      },
    ],
    complianceRule: "RBI NBFC Master Direction (75% LTV Cap) & Indian Contract Act, 1872 s.176",
  },
  {
    id: "unclaimed-notice",
    tabLabel: "Refused / Unclaimed Notice",
    title: "Borrower Refuses Registered Post or Shifts Residence Before Auction",
    trigger:
      "A common ground in NCDRC/SCDRC gold-restoration orders is that the NBFC relied on an undelivered ordinary post letter or an ambiguous SMS without proof of statutory service under Section 176.",
    statutoryMandate:
      "Under Section 27 of the General Clauses Act, 1897 and Section 176 of the Indian Contract Act, 1872, a registered post notice sent to the borrower's last known KYC address that returns with postal endorsement 'Refused' or 'Intimation Served / Unclaimed' constitutes valid deemed service — provided the NBFC preserves the unopened returned envelope and pairs it with electronic delivery logs certified under Section 63 of the Bharatiya Sakshya Adhiniyam (BSA), 2023.",
    steps: [
      {
        step: "1. Tri-Channel Registered Dispatch",
        detail:
          "Send the Section 176 notice in the borrower's vernacular language + English simultaneously via Speed Post (RPAD), verified WhatsApp API, and registered Email.",
      },
      {
        step: "2. Preserve Postal Endorsement & BSA s.63 Hash",
        detail:
          "Scan the India Post tracking history and unopened returned cover; generate a Section 63 BSA certificate covering WhatsApp delivery ticks and email SMTP headers.",
      },
      {
        step: "3. Two-Newspaper Vernacular Publication",
        detail:
          "Publish the public auction advertisement at least 14 days prior in one leading local vernacular daily and one national/English daily circulating in the branch taluka.",
      },
    ],
    complianceRule: "Contract Act s.176, General Clauses Act s.27 & BSA 2023 s.63",
  },
  {
    id: "surplus-vs-deficit",
    tabLabel: "Surplus & Deficit Math",
    title: "Post-Auction Surplus Refund Mandate vs. Deficit Recovery Suit",
    trigger:
      "After auctioning pledged ornaments, NBFCs face two opposite compliance risks: delaying refund of excess auction proceeds (attracting RBI penalties and 9%–12% consumer-court interest) or failing to legally recover a genuine shortfall.",
    statutoryMandate:
      "Section 176 of the Indian Contract Act explicitly mandates that if the proceeds of the sale are less than the amount due, the pawnor remains liable to pay the balance; if the proceeds exceed the amount due, the pawnee MUST pay over the surplus to the pawnor. Under RBI Fair Practices Code, surplus must be credited promptly to the borrower's verified bank account.",
    steps: [
      {
        step: "1. Transparent Settlement Ledger",
        detail:
          "Deduct only verified principal, contracted interest, uncompounded penal charges (per RBI 2023 Penal Charges Circular), and actual documented auction/newspaper expenses.",
      },
      {
        step: "2. Immediate Surplus Remittance (If Realization > Dues)",
        detail:
          "Credit the net surplus via NEFT/RTGS to the borrower's KYC bank account within 7–15 days and issue an itemized Post-Auction Settlement Statement.",
      },
      {
        step: "3. Deficit Demand Notice & Order 37 / Arbitration (If Realization < Dues)",
        detail:
          "Issue a formal Post-Auction Deficit Recovery Notice under Section 176 claiming the balance shortfall, enforceable via institutional arbitration or Order XXXVII CPC summary suit within 3 years.",
      },
    ],
    complianceRule: "Indian Contract Act s.176 (Surplus/Deficit), CPC Order 37 & RBI Penal Charges Circular",
  },
  {
    id: "spurious-stolen-gold",
    tabLabel: "Spurious / Stolen Gold",
    title: "Spurious, Fake-Plated, or Stolen Pledged Gold Police Seizure",
    trigger:
      "During internal re-appraisal or pre-auction assaying, the NBFC discovers tungsten-filled/gold-plated spurious ornaments, or local police serve a notice to seize pledged gold linked to an FIR for theft.",
    statutoryMandate:
      "When pledged gold is spurious or stolen, the NBFC loses physical collateral security. However, the underlying loan debt remains legally recoverable under Section 65/73 of the Contract Act, and the NBFC can pursue criminal remedies for cheating/criminal breach of trust under Bharatiya Nyaya Sanhita (BNS), 2023 Sections 316 and 318 (corresponding to IPC ss.406/420) alongside Section 25 PSS Act (e-NACH bounce) or Section 138 NI Act.",
    steps: [
      {
        step: "1. Independent Dual-Assayer Report & Video Sealing",
        detail:
          "Conduct non-destructive XRF/touchstone re-appraisal in the presence of two independent witnesses/auditors and record continuous CCTV footage before sealing.",
      },
      {
        step: "2. Police FIR / BNSS s.173 & Collateral Preservation",
        detail:
          "For spurious gold, lodge an immediate criminal complaint under BNS s.318 (cheating). For stolen gold, cooperate with police under BNSS while filing a superdari/creditor claim before the Magistrate.",
      },
      {
        step: "3. Parallel Civil & e-NACH Recovery",
        detail:
          "Immediately recall the facility, present e-NACH/cheque mandates (triggering PSS Act s.25 / NI Act s.138), and file an Order 37 summary suit for the full unsecured principal.",
      },
    ],
    complianceRule: "BNS 2023 ss.316/318, Contract Act s.176 & PSS Act 2007 s.25",
  },
];

export default function GoldLoanScenarioTabs() {
  const [activeTabId, setActiveTabId] = useState<string>(SCENARIOS[0].id);
  const activeScenario = SCENARIOS.find((s) => s.id === activeTabId) || SCENARIOS[0];

  return (
    <div className="w-full">
      <div
        role="tablist"
        aria-label="Gold loan auction failure scenarios"
        className="flex flex-wrap gap-2 mb-6 border-b border-slate-200 pb-3"
      >
        {SCENARIOS.map((scenario) => {
          const isActive = scenario.id === activeTabId;
          return (
            <button
              key={scenario.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveTabId(scenario.id)}
              className={`px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
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

      <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <h3 className="text-lg sm:text-xl font-bold text-slate-900">
            {activeScenario.title}
          </h3>
          <span className="inline-block px-2.5 py-1 rounded-md text-[11px] font-bold bg-slate-900 text-white">
            {activeScenario.complianceRule}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
          <div className="bg-white border border-slate-200 rounded-lg p-4">
            <p className="text-[11px] font-bold uppercase tracking-wider text-amber-700 mb-1">
              Operational Trigger &amp; Audit Risk
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {activeScenario.trigger}
            </p>
          </div>
          <div className="bg-white border border-slate-200 rounded-lg p-4">
            <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 mb-1">
              Statutory Mandate &amp; Defense Shield
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {activeScenario.statutoryMandate}
            </p>
          </div>
        </div>

        <div className="space-y-3">
          {activeScenario.steps.map((item) => (
            <div
              key={item.step}
              className="flex items-start gap-3 bg-white border border-slate-200 rounded-lg p-3.5"
            >
              <span className="w-2 h-2 rounded-full bg-[#DC2626] mt-1.5 shrink-0" />
              <div>
                <p className="text-xs sm:text-sm font-bold text-slate-900">{item.step}</p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-0.5">
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
