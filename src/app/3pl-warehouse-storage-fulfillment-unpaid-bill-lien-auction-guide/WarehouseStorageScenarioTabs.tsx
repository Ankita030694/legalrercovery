"use client";

import React, { useState } from "react";

interface Scenario {
  id: string;
  tabLabel: string;
  badge: string;
  title: string;
  problem: string;
  statutoryTrap: string;
  lawfulPlaybook: string;
  remedyCode: string;
  financialRecovery: string;
}

const SCENARIOS: Scenario[] = [
  {
    id: "abandoned-d2c-inventory",
    tabLabel: "Abandoned D2C Dead Stock",
    badge: "Startup Insolvency / Ghosting",
    title: "Venture-Backed D2C Brand Shuts Operations & Abandons 500 Pallets of Slow-Moving Stock",
    problem:
      "A fast-fashion or cosmetics D2C startup burns its seed round, fires operational staff, and stops answering emails. 20,000 SKUs of unsold apparel, lipsticks, or electronics occupy 500 high-density racking pallets for over 120 days. Unpaid storage, inward/outward handling, and WMS software charges exceed ₹24 Lakhs while high-rent warehouse capacity is completely frozen.",
    statutoryTrap:
      "If the 3PL operator unilaterally discards the inventory, clears pallets to an open yard, or sells items to liquidators without rigorous valuation and statutory notice, the debtor's promoters or investors can sue for civil conversion (trover) and file criminal complaints under BNS Sections 316/318 (Criminal Breach of Trust).",
    lawfulPlaybook:
      "1. Issue formal Bailee Lien Intimation under Section 170 Indian Contract Act, locking WMS dispatch rights.\n2. Commission an independent government-registered valuer for inventory cataloging & salvage valuation.\n3. Serve a 15-Day Final Redemption & Power-of-Sale Notice via Registered Speed Post AD, WhatsApp & Email.\n4. Conduct a transparent public e-auction or sealed-bid tender with published advertisements.\n5. Adjust proceeds against storage ledger; file CPC Order 37 summary suit for the remaining deficit balance.",
    remedyCode: "Contract Act s.170 + Warehouse Power-of-Sale + Order XXXVII CPC",
    financialRecovery: "Salvage Auction Liquidation + Civil Deficit Decree for Unpaid Pallet Charges",
  },
  {
    id: "minimum-pallet-guarantee",
    tabLabel: "Minimum Pallet Commitment Breach",
    badge: "Contractual Shortfall Dispute",
    title: "Client Contracted for 1,000 Pallets Minimum Guarantee (MMG) but Utilized Only 200 Pallets",
    problem:
      "An enterprise electronics client signed a 2-year Master Service Agreement (MSA) guaranteeing minimum storage billing for 1,000 pallets at ₹650/pallet/month (₹6,50,000/month floor). After 6 months, their import volumes plummet and they only stock 200 pallets, paying only ₹1,30,000 and claiming 'frustration of contract' or 'actual usage billing'.",
    statutoryTrap:
      "Allowing the client to withdraw their 200 pallets without securing the shortfall balance extinguishes the 3PL operator's possessory lien. Once goods leave the warehouse dock, the bailee loses Section 170 possessory leverage and is relegated to an unsecured civil creditor.",
    lawfulPlaybook:
      "1. Calculate accrued minimum volume commitment (MVC) shortfall under the express liquidated damage clauses of the MSA.\n2. Exercise contractual bailee lien under Section 170/171 over the remaining 200 pallets of high-value electronics.\n3. Demand security deposit replenishment or irrevocable bank guarantee before authorizing dock dispatch.\n4. If unpaid within 15 days, invoke commercial pre-institution mediation (s.12A Commercial Courts Act) backed by Order XXXVIII Rule 5 pre-judgment attachment.",
    remedyCode: "Contract Act s.73/74 + Section 171 General Lien + CPC Order XXXVIII Rule 5",
    financialRecovery: "100% Recovery of Contractual Minimum Pallet Revenue for Full Lock-in Period",
  },
  {
    id: "wms-pick-pack-dispute",
    tabLabel: "Pick-Pack & SLA Billing Dispute",
    badge: "Pretextual SLA Deductions",
    title: "Client Manufactures Spurious SLA Penalty Claims to Withhold ₹18 Lakhs in Fulfillment Invoices",
    problem:
      "A FMCG brand facing a cash crunch fabricates retrospective claims of 'dispatch delays', 'mislabeled bar-codes', and 'inaccurate pick-pack counts'. They arbitrarily issue unilateral debit notes deducting ₹18 Lakhs from monthly fulfillment invoices and demand immediate stock handover under threat of police complaints.",
    statutoryTrap:
      "WMS activity logs and Signed Proof of Delivery (POD) trails are often held in uncertified cloud databases. If the 3PL operator cannot produce legally admissible electronic audit trails under BSA 2023 Section 63, the court may view the billing dispute as a bona fide triable issue, defeating summary recovery.",
    lawfulPlaybook:
      "1. Export complete WMS timestamp logs, CCTV dock footage, and carrier electronic manifests.\n2. Generate cryptographic BSA 2023 Section 63 electronic evidence certificates verifying that 99.4% SLA was met.\n3. Issue advocate legal notice invalidating unilateral debit notes under Indian Contract Act Section 73.\n4. Retain physical possession of sufficient inventory equal to 125% of disputed charges under statutory lien.\n5. Offer joint physical inventory audit at client expense while keeping dispatch freeze active.",
    remedyCode: "BSA 2023 s.63 + Section 170 Contract Act + Commercial Courts Act s.2(1)(c)(xviii)",
    financialRecovery: "Reversal of Unilateral Debit Notes + Full Settlement of Fulfillment Fees",
  },
  {
    id: "nclt-ibc-moratorium",
    tabLabel: "Insolvent Client / NCLT CIRP",
    badge: "IBC Section 14 vs Section 170",
    title: "Client Admitted to NCLT Insolvency (CIRP): Resolution Professional Demands Immediate Stock Release",
    problem:
      "A major retail client is admitted to Corporate Insolvency Resolution Process (CIRP) under Section 7 or 9 of the Insolvency and Bankruptcy Code, 2016 (IBC). The newly appointed Interim Resolution Professional (IRP) issues a demand letter directing the 3PL warehouse to release all stored inventory immediately, citing the IBC Section 14 moratorium.",
    statutoryTrap:
      "Under IBC Section 14, an automatic moratorium freezes recovery actions against the corporate debtor. However, the warehouse operator is a secured bailee in physical possession. Handing over stock unconditionally without formal CIRP expense recognition wipes out your storage lien entirely.",
    lawfulPlaybook:
      "1. Reply to the IRP within 7 days asserting bailee possessory lien under Section 170 Contract Act established prior to CIRP admission.\n2. File Form C as an Operational Creditor for pre-CIRP storage and handling arrears with full WMS proofs.\n3. Demand in writing that ongoing daily pallet storage post-insolvency commencement date constitutes 'Insolvency Resolution Process Costs' (IRP Costs under IBC Section 5(13)), payable in absolute priority.\n4. Condition stock release on direct advance payment of ongoing warehouse fees approved by the Committee of Creditors (CoC).",
    remedyCode: "IBC 2016 s.5(13) (IRP Costs Priority) + Section 170 Bailee Lien Defense",
    financialRecovery: "First-Priority Payment as CIRP Costs + Secured Valuation of Retained Inventory",
  },
];

export default function WarehouseStorageScenarioTabs() {
  const [activeTab, setActiveTab] = useState(SCENARIOS[0].id);

  const scenario = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full">
      {/* Desktop & Mobile Tab Selectors */}
      <div className="flex flex-wrap gap-2 pb-4 border-b border-slate-200">
        {SCENARIOS.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveTab(item.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all text-left cursor-pointer ${
                isActive
                  ? "bg-[#DC2626] text-white shadow-md shadow-red-900/20"
                  : "bg-slate-100 hover:bg-slate-200 text-slate-700"
              }`}
            >
              {item.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Scenario Card */}
      <div className="mt-5 rounded-2xl bg-slate-900 text-white p-5 sm:p-7 border border-slate-800 shadow-xl">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-950/80 border border-red-800 text-red-300 text-[11px] font-extrabold uppercase tracking-wide">
            {scenario.badge}
          </span>
          <span className="text-[11px] font-mono font-semibold text-emerald-400 bg-emerald-950/50 px-2.5 py-1 rounded border border-emerald-800/40">
            {scenario.remedyCode}
          </span>
        </div>

        <h3 className="text-base sm:text-lg md:text-xl font-black text-white mb-4 leading-snug">
          {scenario.title}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
          {/* Problem */}
          <div className="rounded-xl bg-white/5 border border-white/10 p-4">
            <p className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 mb-1.5 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-red-400" />
              Commercial Bottleneck
            </p>
            <p className="text-slate-200 leading-relaxed">{scenario.problem}</p>
          </div>

          {/* Statutory Trap */}
          <div className="rounded-xl bg-red-950/40 border border-red-800/50 p-4">
            <p className="text-[11px] font-extrabold uppercase tracking-wider text-red-400 mb-1.5 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-red-500" />
              Statutory Trap to Avoid
            </p>
            <p className="text-red-200/90 leading-relaxed">{scenario.statutoryTrap}</p>
          </div>
        </div>

        {/* Lawful SOP */}
        <div className="mt-4 rounded-xl bg-white/5 border border-white/10 p-4">
          <p className="text-[11px] font-extrabold uppercase tracking-wider text-amber-400 mb-2 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            Lawful SOP &amp; Auction/Recovery Playbook
          </p>
          <div className="text-slate-200 text-xs sm:text-sm leading-relaxed whitespace-pre-line space-y-1">
            {scenario.lawfulPlaybook}
          </div>
        </div>

        {/* Expected Financial Outcome */}
        <div className="mt-4 pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-xs">
          <span className="text-slate-400 font-medium">Creditor Outcome Target:</span>
          <span className="font-bold text-emerald-400 bg-emerald-950/70 px-3 py-1 rounded-full border border-emerald-800/50">
            {scenario.financialRecovery}
          </span>
        </div>
      </div>
    </div>
  );
}
