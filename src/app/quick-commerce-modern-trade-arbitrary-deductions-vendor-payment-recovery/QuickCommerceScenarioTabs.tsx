"use client";

import React, { useState } from "react";

interface Scenario {
  id: string;
  tabLabel: string;
  title: string;
  badge: string;
  vendorProfile: string;
  platformTactic: string;
  legalReality: string;
  statutoryHook: string;
  actionProtocol: string[];
}

const SCENARIOS: Scenario[] = [
  {
    id: "dark-store-grn-shortage",
    tabLabel: "1. Delayed Dark-Store GRN Cuts",
    title: "Platform Issues 22% 'Short-GRN' Deductions 45 Days After Stamped Delivery Gate Pass",
    badge: "MSMED Act s.2(b) 15-Day Objection Bar",
    vendorProfile:
      "D2C food, beverage, personal care, and gourmet brands supplying central fulfillment centers (FCs) and mother hubs across Bengaluru, Mumbai MMR, Delhi NCR, Hyderabad, and Pune.",
    platformTactic:
      "Your logistics team delivers 500 sealed master cartons with stamped lorry receipts (LR), e-way bills, and security gate entry passes. 45 to 60 days later, when payment matures, the platform's vendor portal reflects a 'Short-GRN' debit note deducting ₹8.5 Lakh for alleged missing units inside cartons, backed only by an internal ERP screenshot with zero unboxing video or joint survey.",
    legalReality:
      "Under Section 2(b) of the MSMED Act, 2006, the 'day of acceptance' is strictly fixed: if the buyer raises no written objection within 15 days from physical delivery, the goods are deemed accepted by operation of statute. Section 42 of the Sale of Goods Act, 1930 reinforces that retaining goods beyond a reasonable time without rejection constitutes irrevocable acceptance. Unilateral shortage claims raised past 15 days are legally barred and cannot justify invoice withholdings.",
    statutoryHook:
      "MSMED Act 2006 s.2(b) & s.15 + Sale of Goods Act 1930 s.41/42 + Indian Contract Act 1872 s.73 + Supreme Court Raman Iron Foundry Doctrine",
    actionProtocol: [
      "Collate security-stamped delivery challans, physical gate passes, and transporter vehicle weight slips proving gross shipment weight delivered.",
      "Issue formal statutory repudiation within 7 days of the portal debit note, citing the Section 2(b) MSMED 15-day objection limitation bar.",
      "Deny platform consent for ERP ledger adjustment; refuse to accept credit note requests on GST portal.",
      "Serve 15-Day Advocate Notice demanding immediate reversal of unauthorized deductions plus 3x RBI compound interest under Section 16 MSMED Act.",
    ],
  },
  {
    id: "fill-rate-sla-penalties",
    tabLabel: "2. Fill-Rate & SLA Penalties",
    title: "Platform Deducts 12% Penalty for 94% PO Fill-Rate Despite Warehouse Slot Delays",
    badge: "Contract Act s.74 Unliquidated Damages Bar",
    vendorProfile:
      "Packaged consumer goods, organic staples, home cleaning, and cosmetics suppliers operating on fast replenishment purchase orders (POs) with 24-to-48-hour delivery windows.",
    platformTactic:
      "The quick-commerce algorithm places an automated PO for 10,000 units. You fulfill 9,400 units within 24 hours. Because the delivery fell 6% short of algorithmic demand, or because the platform's own receiving dock delayed vehicle unloading by 6 hours, the platform's automated billing system slaps an arbitrary 10%–15% 'Fill-Rate SLA Breach Penalty' across the entire invoice value.",
    legalReality:
      "Under Section 74 of the Indian Contract Act, 1872 and the landmark Supreme Court ruling in Kailash Nath Associates v. DDA (2015), liquidated damages cannot be claimed or deducted without proving actual, demonstrable financial damage resulting directly from the breach. Quick-commerce platforms cannot unilaterally deduct liquidated penalties without proving customer cancellations or quantifiable monetary loss. Unilateral penalty clauses in standard click-wrap vendor agreements are unconscionable and legally unenforceable.",
    statutoryHook:
      "Indian Contract Act 1872 ss.73–74 + Kailash Nath Associates v. DDA (2015) 4 SCC 136 + Competition Act 2002 s.4 (Abuse of Dominant Position)",
    actionProtocol: [
      "Extract timestamped Advanced Shipping Notices (ASN), dock appointment booking confirmations, and vehicle gate-in / gate-out logs.",
      "Demonstrate platform dock congestion: prove that supplier vehicles were queued outside the mother hub, causing technical SLA breaches.",
      "Formally notify the platform that unilateral SLA penalties violate Section 74 Contract Act and constitute unauthorized debt withholding under MSMED Act.",
      "Re-credit the deducted amount to your active statement of accounts and escalate to institutional pre-litigation recovery.",
    ],
  },
  {
    id: "promo-rtv-dump",
    tabLabel: "3. Promo Margins & RTV Stock Dump",
    title: "Retail Chain Forces Unagreed Festival Discounts & Dumps Damaged Expired Inventory as RTV",
    badge: "Sale of Goods Act s.42 & CGST s.34",
    vendorProfile:
      "FMCG, dairy, health snacks, confectionery, and personal care brands selling through national modern-trade supermarket chains and quick-delivery dark-store networks.",
    platformTactic:
      "During festive sales or flash promotions, modern-trade retail chains or quick-delivery platforms run aggressive 'Buy 1 Get 1' or 25% consumer markdowns. At month-end, the buyer unilaterally debits the vendor's ledger for 'Visibility Margin', 'Co-Op Ad Spend', and 'App Listing Charges' without written commercial approval. Months later, they dump crushed, water-damaged, or expired inventory back on the vendor as 'Return to Vendor' (RTV) debits.",
    legalReality:
      "Commercial terms require bilateral written consensus; click-through portal terms cannot override signed Master Services Agreements (MSAs). Once inventory is accepted and stored in dark stores, the risk of deterioration, mishandling, and expiry rests with the buyer under Section 40 and 42 of the Sale of Goods Act. Furthermore, under Section 34 of the CGST Act, credit notes cannot be unilaterally created by the recipient; the supplier alone possesses statutory power to issue credit notes for legitimate trade discounts.",
    statutoryHook:
      "CGST Act 2017 s.34 + Sale of Goods Act 1930 ss.40, 42 & 59 + Indian Contract Act 1872 s.23 (Unconscionable Terms) + MSMED Act s.15",
    actionProtocol: [
      "Audit all historical trade discount agreements: isolate any promotional deduction lacking explicit sign-off from your Key Account Manager (KAM).",
      "Reject RTV debit notes for goods stored beyond expiration or damaged during dark-store shelf stacking and conveyor transit.",
      "File GST non-acceptance on portal: refuse to acknowledge unilateral buyer-generated debit notes for GST input tax reverse credit.",
      "Issue 15-day statutory demand notice asserting Section 42 Sale of Goods Act acceptance and demanding full principal reimbursement.",
    ],
  },
  {
    id: "portal-recon-payout-holds",
    tabLabel: "4. Portal Reconciliation Payout Holds",
    title: "Platform Freezes ₹45 Lakh Payouts for 'Quarterly Ledger Recon' & Threatens Delisting",
    badge: "Income Tax s.43B(h) & MSMED s.16 3x Interest",
    vendorProfile:
      "Growing D2C brands where quick-commerce sales represent 40%–70% of total revenue, creating high working capital exposure and vulnerability to platform bullying.",
    platformTactic:
      "When overdue invoices exceed ₹30 Lakh to ₹1 Crore, platform finance abruptly halts all weekly automated clearing house (ACH) payouts. The vendor support desk claims payments are frozen pending 'bi-annual physical inventory reconciliation' or 'system migration'. When the vendor's CFO threatens legal action, the platform category manager verbally warns that challenging deductions will lead to 'search suppression, de-growth, or permanent SKU deactivation'.",
    legalReality:
      "Holding payments beyond 45 days violates the statutory mandate of Section 15 of the MSMED Act, 2006, which strictly overrides any private contract or portal policy. Coercing vendors through threats of account suspension constitutes economic duress under Section 15 of the Indian Contract Act and abuse of buyer dominance. Furthermore, under Section 43B(h) of the Income Tax Act, 1961, withholding payments to Udyam-registered vendors beyond 45 days triggers permanent corporate tax deduction disallowances on the buyer's balance sheet.",
    statutoryHook:
      "MSMED Act 2006 ss.15, 16 & 24 (Overriding Effect) + Income Tax Act 1961 s.43B(h) + Commercial Courts Act 2015 s.9 (Interim Injunctions)",
    actionProtocol: [
      "Establish statutory Udyam status: serve written notification of Micro/Small registration along with your official Udyam certificate.",
      "Deliver statutory Section 43B(h) tax disallowance intimation to the platform's CFO, Board of Directors, and statutory auditors.",
      "Issue an Advocate Notice asserting Section 24 non-obstante priority of MSMED Act over platform vendor policies.",
      "Prepare Section 9 Commercial Court petition or Competition Commission of India (CCI) complaint if the platform retaliates with unlawful SKU delisting.",
    ],
  },
];

export default function QuickCommerceScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(SCENARIOS[0].id);
  const current = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full">
      {/* Mobile Tab Select Dropdown */}
      <div className="sm:hidden mb-4">
        <label htmlFor="scenario-select" className="sr-only">
          Select Quick-Commerce Dispute Scenario
        </label>
        <select
          id="scenario-select"
          value={activeTab}
          onChange={(e) => setActiveTab(e.target.value)}
          className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-xs font-bold text-slate-800 shadow-xs focus:ring-2 focus:ring-[#DC2626] focus:border-[#DC2626]"
        >
          {SCENARIOS.map((sc) => (
            <option key={sc.id} value={sc.id}>
              {sc.tabLabel}
            </option>
          ))}
        </select>
      </div>

      {/* Desktop & Tablet Navigation Tabs */}
      <div className="hidden sm:flex flex-wrap gap-2 mb-6 border-b border-slate-200 pb-3">
        {SCENARIOS.map((sc) => {
          const isActive = activeTab === sc.id;
          return (
            <button
              key={sc.id}
              type="button"
              onClick={() => setActiveTab(sc.id)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                isActive
                  ? "bg-[#DC2626] text-white shadow-sm"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {sc.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Tab Panel */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 md:p-8">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <span className="inline-block px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-red-100 text-[#DC2626] border border-red-200">
            {current.badge}
          </span>
          <span className="text-[11px] font-semibold text-slate-500">
            Target: D2C & FMCG Vendor Portals
          </span>
        </div>

        <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-4 leading-snug">
          {current.title}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
          <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs">
            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
              Affected Vendor Profile
            </p>
            <p className="text-xs text-slate-700 leading-relaxed">
              {current.vendorProfile}
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs">
            <p className="text-[11px] font-bold uppercase tracking-wider text-red-500 mb-1.5">
              Platform Modus Operandi
            </p>
            <p className="text-xs text-slate-700 leading-relaxed">
              {current.platformTactic}
            </p>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-4 sm:p-5 shadow-xs mb-6">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#DC2626]"></span>
            Statutory Legal Reality & Debtor Preemption
          </p>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-3">
            {current.legalReality}
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-[11px] font-mono text-slate-700">
            <strong className="text-slate-900">Governing Provisions:</strong> {current.statutoryHook}
          </div>
        </div>

        <div className="bg-slate-900 text-white rounded-xl p-4 sm:p-5">
          <p className="text-xs font-bold uppercase tracking-wider text-red-400 mb-3">
            Step-by-Step Vendor Counter-Protocol
          </p>
          <ul className="space-y-2.5">
            {current.actionProtocol.map((step, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-200 leading-relaxed">
                <span className="w-5 h-5 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
