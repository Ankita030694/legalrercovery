"use client";

import React, { useState } from "react";
import MsmedNoticeCTA from "./MsmedNoticeCTA";

interface ScenarioItem {
  id: string;
  tabLabel: string;
  title: string;
  statutoryRule: string;
  buyerExcuse: string;
  legalReality: string;
  steps: string[];
}

const SCENARIOS: ScenarioItem[] = [
  {
    id: "quality-objection-after-15-days",
    tabLabel: "Late Quality Dispute",
    title: "Buyer Raises 'Defective Goods' or Quality Objections After 45 Days",
    statutoryRule: "Section 2(b) & Section 15, MSMED Act 2006 ('Deemed Acceptance' Rule)",
    buyerExcuse:
      "\"Your consignment had dimensional defects / service issues, so we are holding back payment or deducting 30% from your invoice.\"",
    legalReality:
      "Under Section 2(b)(i) of the MSMED Act, a buyer must raise any written objection regarding defects in goods or deficiency in services within strictly 15 days of delivery. If no written objection is communicated within 15 days, the law enforces automatic 'Deemed Acceptance' on Day 16. Any quality complaint raised on Day 45 or after receiving a demand notice is legally barred before the MSEFC and ODR tribunal.",
    steps: [
      "Retrieve your signed Delivery Challan, e-Way Bill, GRN (Goods Receipt Note), or service completion email proving the exact delivery date.",
      "Verify that no written quality defect email or rejection note was sent by the buyer within 15 calendar days of that delivery timestamp.",
      "Serve an Advocate Statutory Notice citing Section 2(b) Explanation (Deemed Acceptance) and demanding 100% principal plus 3× RBI Bank Rate monthly-compounded interest.",
    ],
  },
  {
    id: "90-day-po-credit-clause",
    tabLabel: "90-Day PO Terms",
    title: "Purchase Order Specifies '60 to 90 Days Credit Period' or 'Pay When Paid'",
    statutoryRule: "Section 15 Proviso & Section 24 Overriding Effect, MSMED Act",
    buyerExcuse:
      "\"You signed our Purchase Order which clearly states 90 days credit from bill submission (or back-to-back payment after our end-client pays us).\"",
    legalReality:
      "The proviso to Section 15 of the MSMED Act expressly mandates that in no case shall the period agreed between the supplier and buyer in writing exceed 45 days from the day of acceptance or deemed acceptance. Any clause in a Purchase Order, Vendor Agreement, or Work Order stipulating 60, 90, or 120 days is void ab initio to the extent it exceeds 45 days. Statutory compound interest begins ticking automatically on Day 46.",
    steps: [
      "Calculate the 'Appointed Day' as Day 46 from delivery (if a written agreement/PO exists) or Day 16 from delivery (if there is no written credit period).",
      "Compute accrued monthly-compounded interest at 3× the RBI Bank Rate (currently 3 × 6.75% = 20.25% p.a.) from Day 46.",
      "Put the buyer's CFO and Statutory Auditor on formal notice that unpaid dues beyond 45 days trigger mandatory disallowance under Section 43B(h) of the Income Tax Act and disclosure in Form MSME-1.",
    ],
  },
  {
    id: "private-arbitration-clause",
    tabLabel: "Private Arbitration Trap",
    title: "Buyer Invokes Private Arbitration Clause in Distant City to Stall Recovery",
    statutoryRule: "Section 18(1) & (4) MSMED Act + Gujarat State Civil Supplies v. Mahakali Foods (SC)",
    buyerExcuse:
      "\"Our Master Service Agreement states that all disputes must go to a sole arbitrator appointed by us in Mumbai/Delhi under the Arbitration Act.\"",
    legalReality:
      "In Gujarat State Civil Supplies Corp. Ltd. v. Mahakali Foods Pvt. Ltd. (2023), the Supreme Court authoritatively ruled that Chapter V of the MSMED Act is a special statute enacted to protect Micro and Small Enterprises and overrides private arbitration agreements under Section 24. Under Section 18(4), the MSEFC / ODR portal where the supplier (seller) is located has exclusive non-derogable jurisdiction, regardless of any 'exclusive jurisdiction' clause in the buyer's PO.",
    steps: [
      "Reject the buyer's attempt to drag you into an expensive private arbitration in their city.",
      "Issue a pre-ODR statutory legal notice from your local jurisdiction invoking Mahakali Foods (2023) 6 SCC 401 and Section 18(4) of the MSMED Act.",
      "If unpaid within 15 days, file an online reference on the MSME ODR Portal anchored to the MSEFC of the district where your Udyam unit is registered.",
    ],
  },
  {
    id: "unregistered-at-contract-date",
    tabLabel: "Post-Supply Udyam",
    title: "Supplier Registered on Udyam After Entering the Contract or Delivering Goods",
    statutoryRule: "Silpi Industries (2021) vs NBCC (India) Ltd. v. State of West Bengal (SC 2025 Reference)",
    buyerExcuse:
      "\"You took Udyam Registration after our Purchase Order date, so your claim before the MSME Council is not maintainable.\"",
    legalReality:
      "While Silpi Industries (2021) held that Udyam registration prior to contract/supply was required for Section 18 MSEFC arbitration, the Supreme Court in NBCC (India) Ltd. v. State of West Bengal (January 2025) questioned this restriction—noting Section 18 uses the phrase 'any party to a dispute'—and referred the issue to a 3-Judge Bench. Furthermore, even where Udyam was obtained later, the supplier's right to recover principal + 18% commercial interest via an Advocate Demand Notice, Order XXXVII Summary Suit, or Commercial Courts Act Section 12A mediation remains 100% intact.",
    steps: [
      "Verify the exact date on your Udyam Registration Certificate against each individual tax invoice and delivery challan (subsequent supplies after Udyam date are indisputably covered).",
      "For invoices pre-dating Udyam registration, serve a combined statutory legal notice invoking the Indian Contract Act (Section 73), Sale of Goods Act (Section 61 interest), and Order XXXVII CPC.",
      "Leverage Section 43B(h) tax disallowance for all supplies made after your Udyam registration was active.",
    ],
  },
];

export default function MsmedScenariosTabs() {
  const [activeTab, setActiveTab] = useState<string>(SCENARIOS[0].id);

  return (
    <div className="w-full space-y-5">
      {/* Accessible Tab List */}
      <div
        role="tablist"
        aria-label="Common Buyer Defenses in MSME Delayed Payment Disputes"
        className="flex flex-wrap gap-2 p-1.5 bg-slate-200/80 rounded-2xl border border-slate-300/80"
      >
        {SCENARIOS.map((item) => {
          const isSelected = activeTab === item.id;
          return (
            <button
              key={item.id}
              role="tab"
              id={`tab-${item.id}`}
              aria-selected={isSelected}
              aria-controls={`panel-${item.id}`}
              type="button"
              onClick={() => setActiveTab(item.id)}
              className={`flex-1 min-w-[140px] px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer text-center ${
                isSelected
                  ? "bg-[#404447] text-white shadow-sm"
                  : "text-slate-700 hover:bg-white/60 hover:text-slate-900"
              }`}
            >
              {item.tabLabel}
            </button>
          );
        })}
      </div>

      {/* All Tab Panels Rendered in DOM for Crawlers; Hidden Attribute Toggles Visibility */}
      {SCENARIOS.map((item) => {
        const isSelected = activeTab === item.id;
        return (
          <div
            key={item.id}
            role="tabpanel"
            id={`panel-${item.id}`}
            aria-labelledby={`tab-${item.id}`}
            hidden={!isSelected}
            className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-sm space-y-5"
          >
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-red-50 text-[#DC2626] border border-red-200">
                {item.statutoryRule}
              </span>
              <span className="text-xs font-semibold text-slate-500">
                MSMED Act Counter-Strategy
              </span>
            </div>

            <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">
              {item.title}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-red-50/70 border border-red-200/80 space-y-1.5">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-red-800 block">
                  Typical Buyer Excuse / Tactic
                </span>
                <p className="text-xs sm:text-sm text-red-950 italic leading-relaxed">
                  {item.buyerExcuse}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200/80 space-y-1.5">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-800 block">
                  Statutory Legal Reality (2026 Position)
                </span>
                <p className="text-xs sm:text-sm text-emerald-950 leading-relaxed font-medium">
                  {item.legalReality}
                </p>
              </div>
            </div>

            <div className="space-y-2.5 pt-1">
              <h4 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-700">
                3-Step Supplier Enforcement Action:
              </h4>
              <ol className="space-y-2 text-xs sm:text-sm text-slate-700 list-decimal list-inside">
                {item.steps.map((step, i) => (
                  <li key={i} className="leading-relaxed pl-1">
                    {step}
                  </li>
                ))}
              </ol>
            </div>

            <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <p className="text-xs text-slate-600 font-medium">
                Want an advocate to dismantle this excuse with a formal MSMED Act &amp; Section 43B(h) demand notice?
              </p>
              <MsmedNoticeCTA
                variant="secondary"
                buttonText="Serve MSME Legal Notice"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
