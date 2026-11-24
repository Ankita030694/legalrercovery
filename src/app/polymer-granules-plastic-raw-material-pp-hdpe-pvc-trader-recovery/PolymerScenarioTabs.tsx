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
    id: "dca-bg-encashment",
    tabLabel: "DCA BG Subrogation",
    title: "Petrochemical PSU Debits DCA's Bank Guarantee After Moulding Unit Defaults",
    cause:
      "A downstream PP/HDPE/PVC processor lifts 120 MT of resin through a Del Credere Agent (DCA) / Consignment Stockist (CS) of RIL, IOCL, GAIL, HMEL, or OPAL on 30-day credit. On Day 31, the buyer defaults. The PSU immediately debits the DCA's cash-credit limit or encashes the DCA's Bank Guarantee, leaving the DCA out of pocket while the buyer's factory keeps running.",
    legalBasis:
      "Under Sections 140 and 141 of the Indian Contract Act, 1872, a surety or Del Credere Agent who pays the debt of the defaulting buyer to the Principal (the petrochemical PSU) is automatically subrogated to all rights, remedies, and securities held by the Principal against that buyer. The buyer cannot argue 'privity only with RIL/IOCL'—by operation of law, the DCA steps into the Principal's shoes and can sue for the full invoice value, contractual interest, and PSU debit notes under Order XXXVII CPC or IBC Section 8.",
    steps: [
      {
        step: "Secure Principal Payment Proof & Debit Advice",
        description:
          "Download the PSU SAP ledger statement, Bank Guarantee encashment memo, or RTGS debit advice showing the exact date and rupee amount paid by the DCA on the buyer's default.",
      },
      {
        step: "Bind Tripartite DCA Agreement + E-Way Bills",
        description:
          "Pair the signed DCA/buyer credit-limit application with GST E-Way Bill Part-A/B, Lorry Receipt (Bilty), and factory gate-inward stamp proving physical delivery of the exact resin grade.",
      },
      {
        step: "Serve Section 140 Subrogation Demand Notice",
        description:
          "Issue a fact-verified statutory notice asserting Section 140 subrogation rights alongside NI Act Section 138 warning on any post-dated security cheques held by the DCA.",
      },
    ],
    statutoryRule: "Indian Contract Act, 1872 ss.140–141 & Order XXXVII CPC",
  },
  {
    id: "mfi-virgin-excuse",
    tabLabel: "MFI / Virgin Excuse",
    title: "Buyer Feeds Granules Into Extruder, Then Claims 'MFI Variance' or 'Reprocessed Mix'",
    cause:
      "Factories in Narela, Bawana, Daman, Vapi, or Naroda receive sealed 25-kg bags of virgin PP raffia, HDPE blow-moulding, or PVC resin accompanied by the producer's Certificate of Analysis (COA). After consuming 80% of the lot over 45 days, the buyer ignores invoices and emails a sudden complaint alleging wrong Melt Flow Index (MFI), moisture, or reprocessed contamination.",
    legalBasis:
      "Under Section 42 of the Sale of Goods Act, 1930, a buyer is deemed to have conclusively accepted goods when they do any act inconsistent with the seller's ownership—such as slitting 25-kg producer-sealed bags, feeding granules into extruders or injection-moulding hoppers, and selling finished pipes, sacks, or films—or retain the stock beyond a reasonable inspection window without written rejection. Under the Supreme Court's Mobilox Innovations doctrine, an unsubstantiated quality claim raised only after payment falls due is a 'moonshine defense'.",
    steps: [
      {
        step: "Match Batch Numbers to Producer COA & Seal Photos",
        description:
          "Compile the petrochemical plant's lot-wise Certificate of Analysis (COA) stating exact MFI (g/10 min) and density, alongside loading photos of intact factory-stitched 25-kg bags.",
      },
      {
        step: "Prove Consumption via GST & Production Silence",
        description:
          "Highlight the absence of any written rejection within 48–72 hours of delivery and point to the buyer's continued E-Way Bill dispatches of finished plastic goods.",
      },
      {
        step: "Neutralize Sham Dispute Before NCLT / Commercial Court",
        description:
          "Serve a Section 42 Sale of Goods Act rebuttal notice putting the buyer to strict proof of joint NABL sampling on intact sealed bags before any further deduction.",
      },
    ],
    statutoryRule: "Sale of Goods Act, 1930 s.42 & IBC 2016 s.8 / Mobilox Standard",
  },
  {
    id: "masterbatch-custom-batch",
    tabLabel: "Masterbatch Rejection",
    title: "Custom Color / Additive Masterbatch Cancelled or Withheld After Trial Production",
    cause:
      "A masterbatch or engineering-plastic compounder manufactures 8 MT of custom Pantone-matched UV-stabilized masterbatch against a buyer's written PO. When resin prices dip, the buyer refuses the balance lot or withholds payment on delivered drums claiming 'slight shade variation' or 'dispersion speck'.",
    legalBasis:
      "Under Section 23 and Section 37/42 of the Sale of Goods Act, 1930, custom-compounded masterbatch formulated to a buyer's proprietary shade card is unconditionally appropriated to the contract upon lab sign-off and dispatch. Furthermore, if the compounder holds Udyam (Micro or Small Enterprise) registration, Section 15–16 of the MSMED Act, 2006 overrides buyer PO terms to mandate 45-day maximum credit and 3x RBI Bank Rate monthly compounded interest, while exposing the corporate buyer to tax disallowance under Income Tax Act Section 43B(h).",
    steps: [
      {
        step: "Lock Shade-Card Approval & Spectrophotometer Delta-E Log",
        description:
          "Preserve the signed lab-sample approval email/WhatsApp and spectrophotometer Delta-E (<1.0) pass report from the compounder's QC lab.",
      },
      {
        step: "Invoke MSMED s.16 Compound Interest & s.43B(h) Leverage",
        description:
          "Calculate 3x RBI Bank Rate compounded monthly interest and notify the buyer's CFO that unpaid MSE invoices past March 31 trigger Income Tax disallowance under s.43B(h).",
      },
      {
        step: "File MSEFC Conciliation or Order 37 Summary Suit",
        description:
          "Escalate admitted delivered batches to MSME Samadhaan (MSEFC) or file an Order XXXVII CPC summary suit for swift decree without prolonged trial.",
      },
    ],
    statutoryRule: "MSMED Act, 2006 ss.15–18, Income Tax Act s.43B(h) & Sale of Goods Act s.23",
  },
  {
    id: "cd-clawback-pdc",
    tabLabel: "CD Clawback & PDCs",
    title: "Buyer Misses Cash-Discount Window Yet Deducts 2% CD & Stops Security Cheques",
    cause:
      "Polymer trading runs on razor-thin DCA margins (₹350–₹800/MT) where buyers are offered a 7-day or 15-day Cash Discount (CD). Chronic defaulters pay 60 days late via partial RTGS while still deducting the 1.5%–2% CD and issuing 'stop payment' instructions on post-dated security cheques.",
    legalBasis:
      "Cash Discount is strictly conditional upon payment within the stipulated 7-day or 15-day window; late payment automatically forfeits the CD and triggers contractual credit interest. On the criminal front, under the Supreme Court's ruling in Sripati Singh v. State of Jharkhand, post-dated 'security cheques' handed over at account opening crystallize into full Section 138 NI Act criminal liability once the invoice debt becomes due and payable, empowering the magistrate to order up to 20% interim compensation under Section 143A.",
    steps: [
      {
        step: "Issue Reconciled Ledger Reversing Unauthorized CD",
        description:
          "Serve a formal ledger reconciliation disallowing unearned Cash Discounts and adding agreed delayed-payment interest from Day 1 past the CD cutoff.",
      },
      {
        step: "Present PDCs Within Validity & Serve 30-Day s.138 Notice",
        description:
          "Upon cheque return memo ('Insufficient Funds' or 'Payment Stopped by Drawer'), serve a mandatory Section 138(b) demand notice within 30 days giving 15 days to pay.",
      },
      {
        step: "Run Parallel Section 138 Criminal + Order 37 Civil Action",
        description:
          "File criminal complaint under s.138 NI Act (seeking s.143A 20% interim deposit) alongside an Order XXXVII CPC civil recovery suit for the full balance and CD clawback.",
      },
    ],
    statutoryRule: "NI Act, 1881 ss.138 & 143A (Sripati Singh) + Order XXXVII CPC",
  },
];

export default function PolymerScenarioTabs() {
  const [activeId, setActiveId] = useState<string>(SCENARIOS[0].id);
  const current = SCENARIOS.find((s) => s.id === activeId) || SCENARIOS[0];

  return (
    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-6">
      <div
        role="tablist"
        aria-label="Polymer and DCA default scenarios"
        className="flex flex-wrap gap-2 mb-6"
      >
        {SCENARIOS.map((tab) => {
          const isActive = tab.id === activeId;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveId(tab.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                isActive
                  ? "bg-[#DC2626] text-white shadow-md shadow-red-900/20"
                  : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
              }`}
            >
              {tab.tabLabel}
            </button>
          );
        })}
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-5 sm:p-6 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <span className="inline-block px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-red-50 text-[#DC2626] border border-red-200">
            {current.statutoryRule}
          </span>
        </div>

        <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-3">
          {current.title}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
          <div className="bg-amber-50/70 border border-amber-200 rounded-xl p-4">
            <p className="text-[11px] font-bold uppercase tracking-wider text-amber-800 mb-1">
              Commercial Failure Mode
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {current.cause}
            </p>
          </div>
          <div className="bg-emerald-50/70 border border-emerald-200 rounded-xl p-4">
            <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 mb-1">
              Creditor Statutory Counter-Strike
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {current.legalBasis}
            </p>
          </div>
        </div>

        <p className="text-xs font-extrabold uppercase tracking-wider text-slate-500 mb-3">
          3-Step Execution Protocol
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {current.steps.map((item, idx) => (
            <div
              key={item.step}
              className="bg-slate-50 border border-slate-200 rounded-xl p-4"
            >
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  {idx + 1}
                </span>
                <p className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                  {item.step}
                </p>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
