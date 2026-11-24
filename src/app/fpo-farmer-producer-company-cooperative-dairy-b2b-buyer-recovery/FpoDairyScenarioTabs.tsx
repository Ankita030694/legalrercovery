"use client";

import React, { useState } from "react";

interface ScenarioTab {
  id: string;
  tabLabel: string;
  title: string;
  buyerTactic: string;
  statutoryCounter: string;
  actionSteps: {
    step: string;
    detail: string;
  }[];
  legalProvision: string;
}

const SCENARIOS: ScenarioTab[] = [
  {
    id: "agritech-offtaker-default",
    tabLabel: "Agri-Tech / Corporate Offtaker",
    title: "Agri-Tech Platform or Corporate Offtaker Delays Bulk Produce Payout Beyond 30–60 Days",
    buyerTactic:
      "After procuring 150–500 MT of maize, soybean, onion, or horticulture produce from an FPO under a Supply / Offtake Agreement, the corporate buyer or funded agri-tech platform cites 'working capital cycle freeze', 'warehouse reconciliation pending', or 'retailer return adjustments' to stall ₹15–₹80 lakh payouts while farmer-members demand immediate settlement.",
    statutoryCounter:
      "Once produce is weighed at the collection centre or buyer warehouse and an Electronic Weighbridge Slip (Kanta Parchi), GST Invoice, and E-Way Bill are generated, title passes under Sections 19–24 of the Sale of Goods Act, 1930. If the FPO / FPC holds an Udyam Registration Certificate (Micro or Small Enterprise), Sections 15–16 of the MSMED Act, 2006 cap credit at 45 days maximum and mandate 3x RBI Bank Rate monthly compounded interest, alongside Section 43B(h) Income Tax disallowance for the corporate buyer.",
    actionSteps: [
      {
        step: "Issue 15-Day Statutory Demand + s.43B(h) Tax Warning",
        detail:
          "Serve a Fact-Verified Legal Notice to the corporate buyer's Managing Director and CFO highlighting MSMED 3x RBI compound interest and Section 43B(h) tax disallowance.",
      },
      {
        step: "Invoke Order XXXVII CPC Summary Suit",
        detail:
          "For liquidated invoice arrears backed by signed delivery receipts and ledger confirmations, file an Order XXXVII Summary Suit where the buyer cannot defend without Court leave.",
      },
      {
        step: "Escalate via MSEFC Samadhaan or Commercial Court",
        detail:
          "File online on MSME Samadhaan (for Udyam-registered FPOs) or Commercial Court (for claims ≥ ₹3 lakh) after completing Pre-Institution Mediation under Section 12A.",
      },
    ],
    legalProvision: "MSMED Act 2006 ss.15–18 | Income Tax Act s.43B(h) | CPC Order XXXVII",
  },
  {
    id: "dairy-tanker-arrears",
    tabLabel: "Dairy Chilling & Milk Tanker",
    title: "Private Dairy Processor or Bulk Milk Buyer Defaults on Chilling Plant Tanker Invoices",
    buyerTactic:
      "A Dairy Cooperative or Milk Producer Company dispatches daily insulated tankers (10,000–25,000 litres/day) to a private dairy processor or ice-cream/paneer manufacturer. After 3–4 fortnightly billing cycles, the buyer stops NEFT payouts, leaving ₹20–₹60 lakh unpaid while milk pourers threaten to halt morning collection.",
    statutoryCounter:
      "Milk tankers are accompanied by contemporaneous Lab Quality Slips (Fat % and SNF % readings signed at both dispatch and receiving docks), FSSAI batch logs, and E-Way/Gate Entry registers. Once unloaded into the processor's silos after Fat/SNF acceptance, the buyer is estopped under Section 42 of the Sale of Goods Act, 1930 from disputing quality weeks later. Security cheques or fortnightly PDCs dishonoured on presentation attract immediate criminal liability under Section 138 NI Act.",
    actionSteps: [
      {
        step: "Freeze Further Tanker Dispatch & Lock Lab Slips",
        detail:
          "Immediately halt credit supply and compile signed Fat/SNF testing slips, tanker weighment receipts, and WhatsApp rate-card confirmations.",
      },
      {
        step: "Present Security PDCs & Serve s.138 Notice in 30 Days",
        detail:
          "Present due cheques for the exact reconciled balance and dispatch a mandatory 15-day Section 138 NI Act demand notice within 30 days of the Bank Return Memo.",
      },
      {
        step: "Seek 20% Interim Compensation Under s.143A NI Act",
        detail:
          "Upon filing the criminal complaint, move an application under Section 143A NI Act for 20% interim payout and pursue BNS s.316/318 action if assets are diverted.",
      },
    ],
    legalProvision: "NI Act 1881 ss.138 & 143A | Sale of Goods Act 1930 s.42 | BSA 2023 s.63",
  },
  {
    id: "apmc-mandi-trader-bounce",
    tabLabel: "APMC Mandi Trader Default",
    title: "Licensed Mandi Trader / Arhatiya Delays Payment Beyond 24–72 Hours or Bounces Cheque",
    buyerTactic:
      "An APMC commission agent or mandi trader auctions the FPO's grain, pulses, or oilseeds, takes physical delivery via Tak-Patti / Mandi Gate Pass, issues a post-dated cheque or oral 'next week RTGS' promise, and then stalls payment for months—assuming the FPO will only chase them informally.",
    statutoryCounter:
      "Most State Agricultural Produce Marketing (APMC) Acts and Bye-Laws mandate that licensed mandi traders pay farmers/FPOs within 24 to 72 hours of auction/weighment (or on the spot for cash/electronic mandi settlements). Copying a formal Advocate Legal Notice directly to the **APMC Secretary / Market Committee Chairman** places the trader's Mandi Trading/Commission License at immediate risk of suspension or cancellation, alongside forfeiture of their APMC security deposit.",
    actionSteps: [
      {
        step: "Mark Mandatory CC to the APMC Secretary",
        detail:
          "Address the statutory demand notice to the defaulting trader AND mark a formal CC to the APMC Secretary / District Marketing Officer citing Mandi Bye-Law payment timelines.",
      },
      {
        step: "Attach e-NAM / Mandi Tak-Patti & Weighment Proof",
        detail:
          "Annex the auction Tak-Patti, Mandi Gate Pass, and Bank Return Memo (if a cheque bounced) to establish an undisputed statutory mandi trade debt.",
      },
      {
        step: "File Parallel NI s.138 + APMC License Suspension Petition",
        detail:
          "Pursue APMC Market Committee recovery/license suspension alongside criminal prosecution under Section 138 NI Act before the local Judicial Magistrate.",
      },
    ],
    legalProvision: "State APMC Act & Mandi Bye-Laws (24–72 Hr Rule) | NI Act 1881 s.138",
  },
  {
    id: "perishable-quality-deduction",
    tabLabel: "Post-Acceptance Quality Cut",
    title: "Buyer Imposes Arbitrary 'Moisture, Spoilage or Rejection' Deductions Weeks After Unloading",
    buyerTactic:
      "Weeks after accepting delivery of perishables (tomatoes, potatoes, bananas, mangoes) or grains without protest at the unloading dock, the institutional buyer sends a unilateral Debit Note deducting 20%–45% for 'transit spoilage', 'high moisture', or 'grading variance'.",
    statutoryCounter:
      "Under Sections 41 and 42 of the Sale of Goods Act, 1930, a buyer's right to examine goods must be exercised at delivery or within a commercially reasonable window—especially for perishable agricultural produce. Once the buyer signs the Goods Receipt Note (GRN), unloads the truck, or mixes the produce into their cold-room/processing line without a contemporaneous joint inspection report, the buyer is deemed to have accepted the goods in full.",
    actionSteps: [
      {
        step: "Reject Unilateral Debit Notes in Writing Within 48 Hours",
        detail:
          "Issue a formal written rebuttal rejecting the post-acceptance debit note and demanding strict proof of a joint inspection conducted at the unloading dock.",
      },
      {
        step: "Serve Quality-Estoppel & Balance Recovery Notice",
        detail:
          "Deploy an Advocate Legal Notice citing Sale of Goods Act ss.41–42, attaching clean dispatch lab/moisture reports, driver GPS logs, and signed GRNs.",
      },
      {
        step: "Recover Deducted Balance + Interest",
        detail:
          "Claim the wrongfully withheld 20%–45% balance plus contractual or MSMED statutory interest via Order XXXVII Summary Suit or MSEFC arbitration.",
      },
    ],
    legalProvision: "Sale of Goods Act 1930 ss.41 & 42 | Indian Contract Act 1872 s.73",
  },
];

export default function FpoDairyScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(SCENARIOS[0].id);
  const current = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full">
      <div className="flex flex-wrap gap-2 mb-6" role="tablist" aria-label="FPO and Dairy Buyer Default Scenarios">
        {SCENARIOS.map((tab) => {
          const isSelected = tab.id === activeTab;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={isSelected}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer border ${
                isSelected
                  ? "bg-[#DC2626] text-white border-[#DC2626] shadow-md shadow-red-900/20"
                  : "bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200 hover:text-slate-900"
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
        <div className="border-b border-slate-200 pb-4">
          <span className="inline-block px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-red-50 text-[#DC2626] border border-red-200 mb-2">
            {current.legalProvision}
          </span>
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
            {current.title}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
            <p className="text-xs font-extrabold uppercase tracking-wider text-amber-800 mb-1.5">
              Defaulting Buyer Tactic
            </p>
            <p className="text-xs sm:text-sm text-amber-950 leading-relaxed">
              {current.buyerTactic}
            </p>
          </div>
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-800 mb-1.5">
              FPO / Dairy Statutory Counter-Strike
            </p>
            <p className="text-xs sm:text-sm text-emerald-950 leading-relaxed">
              {current.statutoryCounter}
            </p>
          </div>
        </div>

        <div>
          <p className="text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-3">
            3-Step Execution Checklist
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {current.actionSteps.map((item, idx) => (
              <div
                key={item.step}
                className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <p className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                    {item.step}
                  </p>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
