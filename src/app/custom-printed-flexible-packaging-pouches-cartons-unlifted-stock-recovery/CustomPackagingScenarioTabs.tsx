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
    id: "fssai-artwork-revision",
    tabLabel: "FSSAI / Artwork Change",
    title: "Buyer Revises FSSAI Label, MRP or Brand Artwork Mid-MOQ & Abandons 3.5 Tons",
    buyerTactic:
      "An FMCG, spice, namkeen, or pharma buyer places a 5-ton MOQ purchase order to lock a low per-pouch conversion rate. After lifting 1.5 tons, they tweak front-of-pack nutritional disclosures, FSSAI license copy, or promotional artwork—or discontinue the SKU—and instruct your plant to 'hold the remaining 3.5 tons of printed BOPP/PET laminate rolls indefinitely.'",
    statutoryCounter:
      "Once the buyer approves the Digital Shade Card / Artwork PDF (Chromalin/PDF sign-off) and production runs against a firm PO, subsequent regulatory artwork edits or brand relaunches are purely the buyer's commercial risk—not a Force Majeure discharge under Section 56 of the Indian Contract Act. Because trademarked and FSSAI-coded pouches cannot lawfully be resold to third parties, Sale of Goods Act Section 55/56 and Contract Act Section 73 entitle the converter to 100% of the contract price plus Section 44 storage rent, less nominal plastic/paper scrap realization.",
    actionSteps: [
      {
        step: "Serve Formal 'Ready-for-Dispatch' & 15-Day Lifting Intimation",
        detail:
          "Send a batch-wise FG Stock Inspection Sheet (roll numbers, net kg, pouch count, warehouse rack photos) fixing a strict 15-day final lifting window.",
      },
      {
        step: "Start Statutory Godown Demurrage Under Sale of Goods Act s.44",
        detail:
          "Notify the buyer in writing that failure to take delivery triggers monthly palletized storage, insurance, and care charges under Section 44 alongside the unpaid contract price.",
      },
      {
        step: "Quantify Zero-Resale Scrap Credit & Demand 100% Balance",
        detail:
          "Obtain two local polymer/paper recycler quotes (typically ₹8–₹14/kg for multi-layer laminate scrap) to prove market resale is commercially impossible without infringing the buyer's trademark.",
      },
    ],
    legalProvision: "Sale of Goods Act ss.44, 55 & 56 | Contract Act s.73 | Trade Marks Act s.29",
  },
  {
    id: "cylinder-development-unpaid",
    tabLabel: "Unpaid Gravure Cylinders",
    title: "Buyer Demands Handover of 8-Colour Copper Cylinders Without Clearing Pouch Bills",
    buyerTactic:
      "After leaving ₹18–₹35 lakh unpaid across lifted cartons and unlifted laminate reels, the FMCG or D2C brand switches to a cheaper converter in Baddi, Daman, or Silvassa and emails a legal threat demanding immediate handover of its 8-colour engraved copper rotogravure cylinders, flexo photopolymer plates, or mono-carton punching dies.",
    statutoryCounter:
      "Payment of a subsidized 'Cylinder Development / Engraving Contribution' does not automatically convey unencumbered title unless full tool ownership was expressly contracted and paid—and even where cylinders belong to the buyer, a converter holding a Contractual General Lien clause (or unpaid-seller / artisan lien on tool work under Contract Act ss.170–171) cannot be forced to release tooling while linked conversion invoices, cylinder balances, and Section 44 storage dues remain unpaid.",
    actionSteps: [
      {
        step: "Audit Cylinder Invoice Wording (Development Fee vs Asset Sale)",
        detail:
          "Pull your PO, quotation, and cylinder debit note to verify whether the buyer paid a one-time 'cylinder amortization/development charge' (converter retains physical custody/lien) or outright capital purchase.",
      },
      {
        step: "Issue Written General Lien & Storage Intimation Notice",
        detail:
          "Reply formally through an advocate asserting physical retention over all engraved cylinders, flexo plates, and die-cutters until 100% of lifted invoices, unlifted FG stock, and storage arrears clear.",
      },
      {
        step: "Serve Pre-Dechroming Notice for Abandoned Idle Cylinders",
        detail:
          "For cylinders lying idle past 12–24 months despite unpaid dues, issue a final 30-day statutory notice before de-chroming/base-shell salvage to extinguish future bailee liability claims.",
      },
    ],
    legalProvision: "Contract Act ss.170 & 171 | Sale of Goods Act s.47 | Contractual General Lien",
  },
  {
    id: "shade-gsm-pretext-discount",
    tabLabel: "Shade / GSM Discount Trap",
    title: "Buyer Cites Minor Ink Shade or GSM Pretext Weeks Later to Force 15–25% Haircut",
    buyerTactic:
      "Knowing that a converter cannot sell brand-printed mono-cartons or zipper stand-up pouches anywhere else, procurement managers wait 30–60 days after delivery—or after 40% of pouches are already packed and dispatched to retail—and suddenly raise a 15–25% debit note citing 'slight Delta-E colour variation', 'seal strength variance', or 'board GSM tolerance'.",
    statutoryCounter:
      "Under Sections 41 and 42 of the Sale of Goods Act, 1930, once the buyer's QC department signs the Delivery Challan/GRN, approves the press-pass shade card, or starts filling pouches/cartons on their FFS (Form-Fill-Seal) packing line, the consignment is legally deemed accepted. Further, under Section 15 of the MSMED Act, 2006, if no written objection is communicated within 15 days of delivery, the buyer is statutorily estopped from disputing quality to withhold payment.",
    actionSteps: [
      {
        step: "Match Approved Shade Card & In-House COA Lab Sheet",
        detail:
          "Attach the buyer-signed Artwork Proof, approved Delta-E tolerance shade card, COF/dart-impact/seal-strength COA, and BIS/IS GSM tolerance certificates.",
      },
      {
        step: "Invoke MSMED Act 15-Day Written Objection Bar & s.43B(h)",
        detail:
          "Point out that no written rejection occurred within 15 days of receipt—locking deemed acceptance and exposing the buyer's corporate accounts to Income Tax Section 43B(h) expense disallowance.",
      },
      {
        step: "Reject Unilateral Debit Note & Trigger 3x RBI Compound Interest",
        detail:
          "Formally refute the fabricated debit note via Advocate Notice and quantify monthly compounded interest at 3x RBI Bank Rate (~18%–19.5% p.a.) under Section 16 MSMED Act.",
      },
    ],
    legalProvision: "Sale of Goods Act ss.41 & 42 | MSMED Act ss.15–16 | Income Tax Act s.43B(h)",
  },
  {
    id: "d2c-pharma-sku-shutdown",
    tabLabel: "SKU Shutdown / D2C Default",
    title: "Funded D2C Brand or Pharma Marketer Kills SKU & Ignores 90-Day Credit Ledger",
    buyerTactic:
      "A fast-scaling D2C snack/cosmetic startup or pharma marketing company orders custom metallic-PET pouches, foil blister laminates, or UV-embossed mono-cartons on 60-day credit. When the SKU flops on quick-commerce or funding dries up, finance stops replying to calls while your Udyam plant sits on ₹22 Lakh in lifted overdue bills + ₹14 Lakh in custom printed FG stock.",
    statutoryCounter:
      "Over 92% of Indian flexible laminate, label, and mono-carton converters qualify as Micro or Small Enterprises under Udyam Registration. Combining a Section 43B(h) tax-disallowance notice (which hits the buyer's statutory audit and P&L directly), MSEFC Samadhaan reference for 3x RBI compound interest, and a Section 138 NI Act prosecution on bounced security cheques forces promoters and investors to settle before March 31 audit sign-off.",
    actionSteps: [
      {
        step: "Split Claim into Lifted Invoices (MSEFC/Order 37) + Unlifted FG (s.55)",
        detail:
          "Keep undisputed lifted-invoice receivables clean for rapid Order XXXVII CPC / MSME Samadhaan recovery while claiming unlifted custom stock & storage rent as a linked schedule.",
      },
      {
        step: "Serve Section 43B(h) Audit-Alert Notice to CFO & Statutory Auditor",
        detail:
          "Highlight that unpaid invoices due to a Micro/Small Udyam packaging manufacturer past 15/45 days cannot be deducted as business expenditure in FY tax computation.",
      },
      {
        step: "Present Security PDCs & Enforce s.138/141 Personal Director Liability",
        detail:
          "Deposit post-dated cheques against lifted invoices; on dishonour, issue a 15-day statutory notice within 30 days naming active Directors under Section 141 NI Act.",
      },
    ],
    legalProvision: "MSMED Act ss.15–18 | Income Tax Act s.43B(h) | NI Act ss.138 & 141 | CPC Order XXXVII",
  },
];

export default function CustomPackagingScenarioTabs() {
  const [activeTabId, setActiveTabId] = useState<string>(SCENARIOS[0].id);
  const activeScenario = SCENARIOS.find((s) => s.id === activeTabId) || SCENARIOS[0];

  return (
    <div className="w-full max-w-full">
      {/* Tab Buttons */}
      <div
        role="tablist"
        aria-label="Custom Packaging Unlifted Stock and Cylinder Recovery Scenarios"
        className="flex flex-wrap gap-2 mb-6"
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
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer border ${
                isActive
                  ? "bg-[#DC2626] text-white border-[#DC2626] shadow-md"
                  : "bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              {scenario.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Scenario Card */}
      <div
        role="tabpanel"
        className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 md:p-7 space-y-5"
      >
        <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-slate-200">
          <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 leading-snug">
            {activeScenario.title}
          </h3>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold bg-slate-900 text-white">
            {activeScenario.legalProvision}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
            <p className="text-[11px] font-bold uppercase tracking-wider text-amber-800 mb-1.5">
              FMCG / Brand Buyer&apos;s Exploitation Tactic
            </p>
            <p className="text-xs sm:text-sm text-amber-950 leading-relaxed">
              {activeScenario.buyerTactic}
            </p>
          </div>

          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
            <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 mb-1.5">
              Converter&apos;s Statutory Counter-Strike
            </p>
            <p className="text-xs sm:text-sm text-emerald-950 leading-relaxed">
              {activeScenario.statutoryCounter}
            </p>
          </div>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
            3-Step Plant &amp; Legal Execution
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {activeScenario.actionSteps.map((item, idx) => (
              <div
                key={item.step}
                className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <p className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
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
