"use client";

import React, { useState } from "react";

interface ScenarioItem {
  id: string;
  shortLabel: string;
  badge: string;
  title: string;
  buyerTactic: string;
  statutoryCounter: string;
  immediateSteps: string[];
  evidenceNeeded: string;
  outcomeWindow: string;
}

const RIGID_PACKAGING_SCENARIOS: ScenarioItem[] = [
  {
    id: "mould-pickup-ambush",
    shortLabel: "1. Mould Pickup Ambush",
    badge: "Contract Act s.170 + General Lien",
    title: "Buyer Sends a Tempo to Pull Its Custom Blow-Mould While Owing ₹28 Lakh",
    buyerTactic:
      "An edible-oil, beverage, or agrochemical brand stops clearing 90-day HDPE jerrycan or PET bottle invoices, quietly finalizes a cheaper converter ₹1.50/unit lower, and dispatches a pick-up truck with a gate-pass email demanding immediate release of its custom embossed blow-mould—threatening a police complaint for 'criminal breach of trust' if your plant manager refuses handover.",
    statutoryCounter:
      "First, audit your Mould Custody Receipt, Purchase Order terms, and Tax Invoice fine print for a Contractual General Lien clause plus any unpaid mould-development, cavity-polishing, hot-runner repair, or preventive maintenance dues (which trigger direct Particular Lien under Section 170 of the Indian Contract Act, 1872). Issue an immediate Advocate Mould-Lien & Conditional Release Intimation offering instant handover against RTGS clearance or Bank Guarantee—neutralizing any false BNS s.316 criminal threat into a documented civil commercial lien.",
    immediateSteps: [
      "Log the exact serial number, cavity count, weight, and condition of the blow/injection mould with timestamped factory-floor photos and CCTV backup.",
      "Itemize unpaid mould-specific refurbishment/hot-runner/neck-ring charges (s.170 Particular Lien) separately from unpaid bottle invoices (Contractual General Lien).",
      "Dispatch an Advocate Conditional Release Notice via Email + WhatsApp + Speed Post RPAD copying the buyer's Managing Director and Procurement Head.",
      "File an urgent MSME Samadhaan MSEFC reference and pre-emptively lodge a civil commercial suit or Section 9 interim custody application if the mould value exceeds ₹10 Lakh.",
    ],
    evidenceNeeded:
      "Mould Custody / Bailment Receipt, Tooling Development Tax Invoices, Mould Maintenance & Polishing Job Cards, PO General-Lien Clause, Overdue Bottle Ledger & GSTR-1/2B Proof.",
    outcomeWindow:
      "7–14 days to force negotiated ledger clearance before buyer loses peak seasonal bottling line output.",
  },
  {
    id: "drop-test-torque",
    shortLabel: "2. Drop-Test & Torque Blame",
    badge: "Sale of Goods s.42 + BIS IS 6312",
    title: "Agrochemical / Lube Brand Deducts 20% Citing 'Drop-Test Leakage' After Filling",
    buyerTactic:
      "Forty days after filling 1-litre pesticide bottles or 20-litre HM-HDPE drums and shipping them across states, the buyer slaps a 20% debit note alleging 'cap-area leakage and drop-test failure'—conveniently withholding payment right as the 45-day MSME statutory deadline approaches.",
    statutoryCounter:
      "Under Section 42 of the Sale of Goods Act, 1930, filling, induction-sealing, labelling, and shipping rigid containers into the market is irrevocable commercial acceptance. Moreover, field leakage in rigid plastic containers is overwhelmingly caused by improper chuck-capper torque (over-torquing strips thread crests; under-torquing breaks induction-wad seals), incompatible chemical formulations causing ESCR, or rough transit stacking—NOT parison weight or neck-finish variance. Reject the debit note within 72 hours and demand joint CIPET / NABL testing against BIS IS 6312 / IS 14537 tolerances.",
    immediateSteps: [
      "Never raise a GST Credit Note under CGST s.34—issue a formal written rejection of the debit note citing Sale of Goods Act s.42 and MSMED s.2(b) (15-day objection bar).",
      "Compile dispatch-day QC sheets: top-load test, 1.2m drop-test pass logs, Go/No-Go neck-finish gauge checks, parison weight charts, and polymer resin COA (Certificate of Analysis).",
      "Challenge the buyer to produce its filling-line torque-meter calibration logs, induction-sealer dwell-time records, and untouched sealed control samples from the same batch.",
      "Trigger Section 43B(h) tax-disallowance intimation to the buyer's CFO and Statutory Auditor alongside a 15-day Fact-Verified Demand Notice.",
    ],
    evidenceNeeded:
      "Resin Batch COA (RIL/IOCL/OPAL), Pre-Dispatch Drop-Test & Neck-Gauge QC Register, Signed Clean GRNs, E-Way Bills, and WhatsApp/Email dispatch approvals (BSA s.63).",
    outcomeWindow:
      "15–30 days to defeat sham QC deductions via CFO & Statutory Auditor escalation.",
  },
  {
    id: "abandoned-embossed-stock",
    shortLabel: "3. Abandoned Embossed Stock",
    badge: "Sale of Goods ss.44 & 55",
    title: "Brand Changes Bottle Silhouette or Kills SKU, Leaving 2.5 Lakh Embossed Bottles Unlifted",
    buyerTactic:
      "A cosmetic, liquor, or D2C beverage buyer confirms an annual rolling schedule for custom-embossed PET bottles, colour-matched injection-moulded flip-top caps, or flint glass bottles. Halfway through the run, it relaunches packaging or loses distributor funding and refuses to lift 2.5 lakh finished containers sitting in your warehouse.",
    statutoryCounter:
      "Unlike generic stock containers, brand-embossed PET/HDPE bottles, custom pantone closures, and proprietary glass bottles bear the buyer's trademark and design registration—making open-market resale legally barred and commercially impossible except as nominal plastic regrind or glass cullet scrap. Under Sections 55 and 44 of the Sale of Goods Act, 1930 read with Section 73 of the Indian Contract Act, you are entitled to 100% of the contract price (minus nominal scrap credit) PLUS monthly godown storage and handling demurrage.",
    immediateSteps: [
      "Send a formal Ready-for-Dispatch (RFD) Intimation attaching pallet-wise batch counts, embossing photos, and warehouse space occupied (in sq. ft.).",
      "Serve a 15-Day Statutory Notice to Lift Custom-Embossed Inventory invoking Sale of Goods Act s.44 (storage & care charges) and s.55 (action for full price).",
      "State an objective scrap/regrind mitigation valuation (e.g., ₹28–₹35/kg PET/HDPE regrind or ₹4/kg glass cullet) so the buyer cannot later plead failure to mitigate loss.",
      "Combine the unlifted FG claim with overdue supplied-batch ledgers in a single MSEFC / Commercial Court Order XXXVII proceeding.",
    ],
    evidenceNeeded:
      "Approved 2D/3D Bottle & Neck-Finish Drawings, Pantone Masterbatch Shade Approval, Rolling PO / Forecast Emails, RFD Intimations, and Godown Rent/Pallet Ledger.",
    outcomeWindow:
      "15–45 days to compel staged lifting or full price + storage settlement.",
  },
  {
    id: "resin-hike-tooling-balance",
    shortLabel: "4. Resin Hike & Tooling Default",
    badge: "Contract Act s.70 + MSMED s.16",
    title: "Unpaid 40% Mould-Development Balance & Polymer Price-Index Revision Dispute",
    buyerTactic:
      "You fabricated a 16-cavity PET preform hot-runner mould or 4-cavity extrusion blow-mould for ₹14 Lakh, collecting only ₹6 Lakh advance with the ₹8 Lakh balance linked to 'commercial production start'—or supplied drums during a ₹14/kg HDPE granule surge after WhatsApp rate approval, only for accounts payable to short-pay at old PO prices.",
    statutoryCounter:
      "Where the buyer paid only a partial tooling development contribution, absolute title in the steel/aluminium mould NEVER passes to the buyer until 100% of the agreed tooling cost and amortized MOQ commitment are fulfilled. Simultaneously, for polymer price-index revisions approved on email/WhatsApp and billed via GST Tax Invoices on which the buyer availed GSTR-2B ITC, Section 70 of the Contract Act and estoppel bar retrospective rate rollbacks.",
    immediateSteps: [
      "Assert ownership retention (not merely a bailee lien) over partially paid moulds—documenting the unpaid tooling invoice balance and unfulfilled MOQ amortization schedule.",
      "Authenticate WhatsApp/email polymer price-revision confirmations and RIL/IOCL fortnightly price circulars with a BSA 2023 Section 63 Hash Certificate.",
      "Show GSTR-1 / GSTR-2B matching proof establishing that the buyer availed full Input Tax Credit on the revised-rate GST Tax Invoices.",
      "Quantify 3x RBI Bank Rate compound interest under MSMED s.16 from Day 46 on every short-paid invoice and unpaid tooling milestone.",
    ],
    evidenceNeeded:
      "Tooling Quotation & Partial Payment Ledger, Steel/Hot-Runner Vendor Bills, Fortnightly Polymer Price Circulars, WhatsApp Rate Approvals (BSA s.63), and GSTR-2B ITC Proof.",
    outcomeWindow:
      "10–25 days to recover balance tooling capital and withheld resin-rate differentials.",
  },
];

export default function RigidPackagingScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(
    RIGID_PACKAGING_SCENARIOS[0].id
  );

  const current =
    RIGID_PACKAGING_SCENARIOS.find((item) => item.id === activeTab) ||
    RIGID_PACKAGING_SCENARIOS[0];

  return (
    <div className="w-full">
      {/* Interactive Tab Bar */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 mb-6"
        role="tablist"
        aria-label="Rigid plastic and glass packaging default scenarios"
      >
        {RIGID_PACKAGING_SCENARIOS.map((item) => {
          const isSelected = item.id === activeTab;
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={isSelected}
              onClick={() => setActiveTab(item.id)}
              className={`px-3.5 py-3 rounded-xl text-left text-xs font-bold border transition-all cursor-pointer ${
                isSelected
                  ? "bg-[#DC2626] text-white border-[#DC2626] shadow-md shadow-red-900/15"
                  : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:border-slate-300"
              }`}
            >
              <span className="block truncate">{item.shortLabel}</span>
              <span
                className={`block text-[10px] font-medium mt-0.5 truncate ${
                  isSelected ? "text-red-100" : "text-slate-500"
                }`}
              >
                {item.badge}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Scenario Panel */}
      <div
        role="tabpanel"
        className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6"
      >
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-200">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-slate-900 text-white">
            {current.badge}
          </span>
          <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
            Target Window: {current.outcomeWindow}
          </span>
        </div>

        <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-4 leading-snug">
          {current.title}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
          <div className="bg-red-50/70 border border-red-200 rounded-xl p-4">
            <p className="text-[11px] font-extrabold uppercase tracking-wider text-[#DC2626] mb-1.5">
              Debtor&apos;s Commercial Ploy
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {current.buyerTactic}
            </p>
          </div>

          <div className="bg-emerald-50/70 border border-emerald-200 rounded-xl p-4">
            <p className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-700 mb-1.5">
              Creditor&apos;s Statutory Counter-Move
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {current.statutoryCounter}
            </p>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-4 mb-4">
          <p className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500 mb-2.5">
            4-Step Operational Action Checklist
          </p>
          <ol className="space-y-2">
            {current.immediateSteps.map((step, index) => (
              <li
                key={index}
                className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed"
              >
                <span className="w-5 h-5 rounded-full bg-[#DC2626] text-white text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {index + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="bg-slate-900 text-slate-100 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
          <span className="text-[11px] font-extrabold uppercase tracking-wider text-amber-400 shrink-0">
            Mandatory Proof Pack:
          </span>
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
            {current.evidenceNeeded}
          </p>
        </div>
      </div>
    </div>
  );
}
