"use client";

import React, { useState } from "react";

interface ScenarioTab {
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

const SCENARIOS: ScenarioTab[] = [
  {
    id: "mandi-crash-abandonment",
    tabLabel: "Mandi Crash & Abandonment",
    title: "Spot Potato / Chilli Price Drops Below Rent — Trader Vanishes",
    cause:
      "In bumper-crop seasons across Agra, Farrukhabad, Hooghly, Deesa, and Guntur, mandi spot prices fall below ₹350–₹400/bag while accrued cold-storage rent, unloading, and electricity surcharges exceed ₹125–₹160/bag. Speculative traders switch off phones and abandon stock, blocking chambers needed for the incoming harvest.",
    legalBasis:
      "Under Section 170 of the Indian Contract Act, 1872, a bailee who renders refrigeration and preservation services acquires a Particular Lien over the stored bags until full rent is paid. However, a lien alone does not confer an automatic right of private sale without notice. Serving a formal 15-day Registered Statutory Notice (and 7-day final auction intimation) under Section 176 of the Contract Act and applicable State Cold Storage Regulation Acts (UP Act 1976 / WB Act 1966) converts passive custody into an enforceable power of public auction.",
    steps: [
      {
        step: "1. Lot-Wise Rent & Electricity Ledger Audit",
        description:
          "Compile Lot Number, Chamber Number, Gate-In Date, Bag Count, Agreed Seasonal Rent Rate, and Over-Season Surcharge from signed Bond/Lot Receipts.",
      },
      {
        step: "2. 15-Day Registered Speed Post (RPAD) + Digital Service",
        description:
          "Dispatch a Fact-verified Pre-Auction Notice under Contract Act s.176 & State Cold Storage Act to the trader's registered address, WhatsApp, and email demanding lifting within 15 days.",
      },
      {
        step: "3. Newspaper Public Auction Notice & 3-Bid Panchnama",
        description:
          "Upon expiry of the cure window, publish an auction notice in one local vernacular and one English daily, conduct a transparent auction with videography and independent witnesses, and issue a post-auction statement.",
      },
    ],
    statutoryRule: "Indian Contract Act ss.170 & 176 + State Cold Storage Acts",
  },
  {
    id: "bank-pledge-tripartite",
    tabLabel: "Bank Pledge / WHR Lien",
    title: "Stock Pledged to Bank Under Warehouse Receipt — Both Parties Stall",
    cause:
      "Traders frequently pledge stored potato, turmeric, red chilli, or dry-fruit lots to nationalized or cooperative banks against Warehouse Receipts (WHRs) or KCC/pledge limits. When prices crash, the trader stops paying EMIs and storage rent, while the lending bank refuses to clear rent arrears or lift the collateral.",
    legalBasis:
      "Under Section 170 of the Indian Contract Act, 1872, the cold storage's Particular Lien for preservation and refrigeration charges attaches directly to the goods and takes operational priority for unpaid storage rent incurred to keep the bank's collateral alive. However, selling pledged stock without notifying the pledgee bank invites injunctions and conversion claims. A tripartite statutory notice naming both the Borrower-Trader and the Pledgee Bank Branch Manager forces the bank either to clear rent and take delivery or consent to a joint public auction.",
    steps: [
      {
        step: "1. Tripartite Lien & Rent Demand Notice",
        description:
          "Serve the 15-day Registered Notice simultaneously on the trader and the pledgee bank's Regional/Branch Manager, attaching the Tripartite Agreement or Lien Endorsement.",
      },
      {
        step: "2. Invoke Preservation-Cost Priority",
        description:
          "Put the bank on formal notice that continued refrigeration incurs daily power charges and that failure to redeem within 15 days will trigger public auction with rent deducted first.",
      },
      {
        step: "3. Escrow Surplus / Joint Deficit Accounting",
        description:
          "Adjust accrued rent and auction expenses first from gross auction proceeds; remit any surplus to the pledgee bank or demand the shortfall from the trader.",
      },
    ],
    statutoryRule: "Contract Act ss.170 & 176 + WDRA / Tripartite Pledge Terms",
  },
  {
    id: "consumer-court-ambush",
    tabLabel: "Consumer Court Defense",
    title: "Trader Files Consumer Case Alleging Illegal Sale or Spoilage",
    cause:
      "Traders who abandon rotting stock often retaliate by filing a District Consumer Commission complaint claiming the cold storage sold goods without notice or caused spoilage through temperature fluctuation, seeking inflated market-rate damages.",
    legalBasis:
      "Two statutory shields defeat such retaliatory complaints. First, under Section 2(7) of the Consumer Protection Act, 2019 (affirmed in Laxmi Engineering Works v. P.S.G. Industrial Institute), a commercial trader storing thousands of bags for wholesale resale is NOT a 'consumer'. Second, maintaining continuous automated temperature/humidity logs certified under Section 63 of the Bharatiya Sakshya Adhiniyam (BSA), 2023 alongside RPAD delivery proofs and a videographed auction panchnama proves strict compliance with bailee duty of care under Contract Act ss.151–152.",
    steps: [
      {
        step: "1. Preliminary Maintainability Objection (s.2(7) CPA)",
        description:
          "Challenge jurisdiction immediately using GSTIN, APMC Mandi License, and commercial bag volume to establish commercial purpose exclusion.",
      },
      {
        step: "2. Produce BSA 2023 s.63 Chamber Logbooks",
        description:
          "Submit hourly SCADA/digital temperature logs, DG-set backup records, and Licensing Authority inspection reports proving zero negligence.",
      },
      {
        step: "3. Prove Strict s.176 Notice & Valuation",
        description:
          "File RPAD postal tracking, newspaper cuttings, mandi rate certificate of the auction date, and panchnama video to establish bona fide fair-market realization.",
      },
    ],
    statutoryRule: "Consumer Protection Act 2019 s.2(7) + BSA 2023 s.63 + Contract Act s.151",
  },
  {
    id: "deficit-rent-suit",
    tabLabel: "Deficit-Rent Recovery",
    title: "Auction Proceeds Fall Short of Rent & Power Bill — Recovering Deficit",
    cause:
      "When rotten or crashed potato/chilli stock fetches only ₹60–₹85/bag in distress auction against ₹130–₹160/bag in accrued rent, electricity surcharges, sorting, and disposal costs, the cold storage is left with a ₹4–₹25 Lakh net deficit.",
    legalBasis:
      "Under Section 176 of the Indian Contract Act, 1872, if the proceeds of a lawful sale after reasonable notice are less than the amount due, the bailor/pledgor remains personally liable to pay the balance. Preserving this deficit claim requires proving that the auction was conducted transparently at prevailing mandi rates after due statutory notice, followed by a post-auction Deficit Demand Notice and an Order XXXVII CPC Summary Suit (or Commercial Court suit if ≥ ₹3 Lakh).",
    steps: [
      {
        step: "1. Issue Post-Auction Final Statement of Account",
        description:
          "Within 7 days of auction, serve a registered Post-Auction Accounting Notice detailing gross bids, auction expenses, rent appropriation, and exact net deficit.",
      },
      {
        step: "2. Present Security Cheques (If Held) Under NI s.138",
        description:
          "If the trader issued an advance security cheque for rent, present it for the crystallized deficit after prior intimation to trigger NI Act s.138 criminal leverage.",
      },
      {
        step: "3. File Order XXXVII CPC / Commercial Suit",
        description:
          "Sue for the crystallized deficit plus contractual interest within the 3-year limitation period using signed Lot Receipts and the auction panchnama.",
      },
    ],
    statutoryRule: "Contract Act s.176 Balance Claim + Order XXXVII CPC / NI Act s.138",
  },
];

export default function ColdStorageScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(SCENARIOS[0].id);
  const current = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full">
      <div
        role="tablist"
        aria-label="Cold storage auction and recovery scenarios"
        className="flex flex-wrap gap-2 mb-6"
      >
        {SCENARIOS.map((tab) => {
          const isActive = tab.id === activeTab;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer border ${
                isActive
                  ? "bg-[#DC2626] text-white border-[#DC2626] shadow-md shadow-red-900/20"
                  : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              {tab.tabLabel}
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-5"
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pb-4 border-b border-slate-200">
          <h3 className="text-base sm:text-lg font-bold text-slate-900">
            {current.title}
          </h3>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold bg-red-50 text-[#DC2626] border border-red-200 shrink-0 self-start">
            {current.statutoryRule}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white border border-slate-200 rounded-xl p-4">
            <p className="text-[11px] font-bold uppercase tracking-wider text-amber-700 mb-1.5">
              Commercial Bottleneck
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {current.cause}
            </p>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl p-4">
            <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 mb-1.5">
              Creditor Statutory Remedy
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {current.legalBasis}
            </p>
          </div>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
            3-Step Execution Protocol
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {current.steps.map((item) => (
              <div
                key={item.step}
                className="bg-white border border-slate-200 rounded-xl p-4"
              >
                <p className="text-xs font-bold text-[#DC2626] mb-1">
                  {item.step}
                </p>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
