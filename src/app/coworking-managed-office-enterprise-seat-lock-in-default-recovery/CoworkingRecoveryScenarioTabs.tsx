"use client";

import React, { useState } from "react";

interface Scenario {
  id: string;
  tabLabel: string;
  title: string;
  badge: string;
  buyerProfile: string;
  pretext: string;
  legalReality: string;
  statutoryHook: string;
  actionProtocol: string[];
}

const SCENARIOS: Scenario[] = [
  {
    id: "startup-runway-exhaustion-lockin",
    tabLabel: "1. Startup Runway Lock-In",
    title: "Series-A Startup Books 150 Seats on a 36-Month Lock-In, Runs Out of Runway in Month 9",
    badge: "Contract Act s.73/74 Liquidated Lock-In Fees",
    buyerProfile:
      "Venture-funded tech startup, D2C brand, or AI company executing a 24-to-36 month Managed Office Master Services Agreement (MSA) with heavily discounted per-seat pricing.",
    pretext:
      "After raising seed funding, the company committed to 150 dedicated seats at ₹16,000/seat/month (₹24,00,000 monthly fee) with a mandatory 36-month lock-in. At Month 9, following a failed Series A round or bridge financing collapse, the founders send an email stating: 'Due to severe macro headwinds and runway depletion, we are shutting down our on-site team immediately. Please cancel our membership agreement and adjust the 2-month security deposit against outstanding dues.'",
    legalReality:
      "Under Sections 73 and 74 of the Indian Contract Act, 1872, an explicit lock-in clause in a commercial B2B contract is legally enforceable as pre-estimated liquidated damages. The co-working operator took long-term commercial lease exposure, amortized capital fit-out costs, and dedicated dedicated server bandwidth specifically in consideration of the full 36-month guaranteed revenue stream. A two-month security deposit cannot unilaterally discharge the remaining 27 months of unexpired lock-in liability. The operator is entitled to accelerate the unexpired lock-in fees and recover actual commercial damages.",
    statutoryHook:
      "Indian Contract Act 1872 ss. 73 & 74 (Liquidated Damages) + Commercial Courts Act 2015 s.2(1)(c)(vii) + Order XXXVII CPC Summary Suit",
    actionProtocol: [
      "Issue a formal legal communication rejecting the unilateral termination email and confirming that the 36-month lock-in remains binding and irrevocable.",
      "Calculate total outstanding seat dues, unamortized fit-out CapEx, and unexpired lock-in fees, setting off the security deposit only against accrued mature arrears.",
      "Serve an advocate-drafted 15-day statutory demand notice threatening pre-institution commercial mediation under Section 12A of the Commercial Courts Act.",
      "If the defaulting startup is a private limited entity with cumulative dues exceeding ₹1.00 Crore, serve a formal IBC Section 8 Form 3 Demand Notice on its directors.",
    ],
  },
  {
    id: "abandoned-it-assets-lien",
    tabLabel: "2. Abandoned IT & Hardware Lien",
    title: "Client Ghosting After Non-Payment, Leaving 80 Laptops, Monitors & Server Racks in Locked Cabin",
    badge: "Contract Act s.170/171 Particular Lien & Disposal",
    buyerProfile:
      "Fintech, edtech, or offshore development agency that suddenly stops paying monthly license fees and stops responding to emails and phone calls.",
    pretext:
      "The client defaults for 60 consecutive days, accumulating ₹28 Lakh in unpaid seat fees. Their staff ceases visiting the facility, but their private managed suite remains locked from inside with 80 high-end monitors, laptops, biometric docks, server racks, and expensive ergonomic chairs. The operator cannot re-license the 2,500 sq.ft suite to a new paying client without removing the debtor's physical property, but fears criminal allegations of theft or conversion.",
    legalReality:
      "Under Section 52 of the Indian Easements Act, 1882, the client holds a bare, revocable license to occupy the space—not legal possession or tenancy. Once the license is revoked for non-payment, their continued presence constitutes an unauthorized trespass. Furthermore, under Section 170 and 171 of the Indian Contract Act, 1872, the operator as a bailee and service provider can lawfully assert a particular lien over the chattels for unpaid services rendered, provided a rigorous, video-recorded inventory protocol is executed.",
    statutoryHook:
      "Indian Easements Act 1882 s.60 + Indian Contract Act 1872 s.170 (Bailee's Lien) + Bharatiya Sakshya Adhiniyam 2023 s.63",
    actionProtocol: [
      "Issue an 'Abandoned Goods & License Termination Notice' granting 7 days to clear all outstanding arrears and remove chattels under supervision.",
      "Upon expiry, assemble an inventory committee comprising center management, a certified notary public, and security heads; record continuous 4K video footage of the cabin entry.",
      "Prepare a line-item serial-number inventory of all laptops, monitors, servers, and furniture; seal the assets in safe third-party warehouse storage at the client's risk and cost.",
      "Release the cabin immediately for re-licensing to mitigate damages, preserving the inventoried goods under a formal statutory lien pending recovery.",
    ],
  },
  {
    id: "spurious-tenancy-rent-court-defense",
    tabLabel: "3. Spurious Tenancy Defense",
    title: "Debtor Alleges 'Tenancy Rights' Under Rent Control Act to Stall RFID Deactivation & Eviction",
    badge: "Easements Act s.52 Zero-Possession Doctrine",
    buyerProfile:
      "Regional distributor, law firm, or enterprise branch office attempting to exploit archaic state Rent Control legislation to avoid commercial market rates.",
    pretext:
      "Upon receiving a 48-hour access card suspension notice for three months of unpaid seat fees, the debtor's advocate replies alleging that the client is a 'protected commercial tenant' under the State Rent Control Act (e.g., Delhi Rent Control Act, Maharashtra Rent Control Act, or Karnataka Rent Act). The debtor warns that deactivating biometric turnstiles constitutes 'illegal dispossession and criminal wrongful restraint' under BNS Section 126.",
    legalReality:
      "The Supreme Court of India in Associated Hotels of India v. R.N. Kapoor (1959) and Delta International Ltd. v. Shyam Sundar Ganeriwalla (1999) settled that the test of tenancy is 'exclusive legal possession'. In a co-working or managed office facility, the operator retains master keys, controls physical entry, provides shared reception, cleaning, security, HVAC, and internet, and retains absolute supervisory dominion over the real estate. Under Section 52 of the Indian Easements Act, 1882, a co-working contract is purely a license to use shared amenities. Zero tenancy rights or Rent Court jurisdiction exist.",
    statutoryHook:
      "Indian Easements Act 1882 ss. 52, 60 & 62 + Supreme Court Delta International Doctrine + Commercial Courts Act 2015",
    actionProtocol: [
      "Issue an immediate advocate rebuttal distinguishing a revocable service license from a lease deed under Section 105 of the Transfer of Property Act, 1882.",
      "Highlight the operator's continuous possession, shared infrastructure, facility maintenance logs, and lack of exclusive demise in the executed Membership Agreement.",
      "Proceed with lawful biometric turnstile and RFID access deactivation, citing the express terms of the Revocable License and Easements Act Section 62.",
      "File a caveat or Commercial Summary Suit before the designated Commercial Court to pre-empt any frivolous injunction applications by the debtor.",
    ],
  },
  {
    id: "bespoke-fitout-capex-default",
    tabLabel: "4. Bespoke Fit-Out CapEx",
    title: "Enterprise Demands ₹85 Lakh Custom Cabin Fit-Out, Defaults in Month 4 of 3-Year Commitment",
    badge: "Contract Act s.73 Actual Unamortized CapEx Loss",
    buyerProfile:
      "Multinational enterprise, GCC capability center, or large corporate customer requiring specialized acoustic cabins, custom branding, enterprise server rooms, and bespoke furniture.",
    pretext:
      "The client negotiated a 200-seat bespoke managed floor. To meet their architectural specifications, the co-working operator expended ₹85 Lakh in upfront Capital Expenditure (CapEx) for specialized soundproofing, glass partitions, private server cooling, and custom modular desks, amortizing this investment across a mandatory 36-month lock-in at ₹2,36,000/month built into the seat fee. At Month 4, the enterprise terminates the contract citing an offshore corporate consolidation.",
    legalReality:
      "Under Section 73 of the Indian Contract Act, 1872, when a party breaches a contract, the injured party is entitled to compensation for any loss or damage naturally arising in the usual course of things. The co-working operator incurred dedicated, non-recoverable capital expenditure tailored specifically to the defendant's unique layout. Under the landmark Supreme Court ruling in Kailash Nath Associates v. DDA, damages are readily quantifiable based on actual invoices, contractor bills, and unamortized CapEx ledgers.",
    statutoryHook:
      "Indian Contract Act 1872 s.73 (Expectation & Reliance Damages) + Kailash Nath Associates Doctrine + Order XXXVII CPC",
    actionProtocol: [
      "Collate all architect drawings, contractor measurement sheets, interior procurement invoices, and GST payment receipts proving the ₹85 Lakh upfront CapEx.",
      "Prepare a chartered accountant-certified CapEx Amortization Schedule demonstrating that only ₹9,44,000 was amortized during Months 1–4, leaving ₹75,56,000 as net unamortized loss.",
      "Issue a formal statutory demand notice for the accelerated unamortized CapEx plus unexpired lock-in margin damages under Section 73.",
      "Institute an Order XXXVII Summary Suit in the High Court or Commercial Court, seeking attachment before judgment under Order XXXVIII Rule 5 over the debtor's corporate bank accounts.",
    ],
  },
];

export default function CoworkingRecoveryScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(SCENARIOS[0].id);

  const activeScenario =
    SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full">
      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-2 pb-3 border-b border-slate-200">
        {SCENARIOS.map((scenario) => {
          const isActive = activeTab === scenario.id;
          return (
            <button
              key={scenario.id}
              type="button"
              onClick={() => setActiveTab(scenario.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
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

      {/* Active Tab Content Card */}
      <div className="mt-5 bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-red-100 text-[#DC2626] border border-red-200">
            {activeScenario.badge}
          </span>
          <span className="text-xs font-medium text-slate-500">
            Target: {activeScenario.buyerProfile}
          </span>
        </div>

        <p className="text-lg sm:text-xl font-black text-slate-900 mb-4 leading-snug">
          {activeScenario.title}
        </p>

        {/* Commercial Pretext vs Legal Reality */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
          <div className="bg-amber-50/70 border border-amber-200 rounded-xl p-4">
            <span className="block text-[11px] font-bold uppercase tracking-wider text-amber-900 mb-1.5 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              Defaulting Client&apos;s Pretext
            </span>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed m-0">
              {activeScenario.pretext}
            </p>
          </div>

          <div className="bg-emerald-50/70 border border-emerald-200 rounded-xl p-4">
            <span className="block text-[11px] font-bold uppercase tracking-wider text-emerald-900 mb-1.5 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-600" />
              Co-Working Operator&apos;s Legal Reality
            </span>
            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed m-0">
              {activeScenario.legalReality}
            </p>
          </div>
        </div>

        {/* Statutory Hook */}
        <div className="bg-slate-900 text-slate-100 rounded-xl p-3.5 sm:p-4 mb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-red-600 text-white">
              Statutory Hook
            </span>
            <span className="text-xs sm:text-sm font-semibold text-slate-200">
              {activeScenario.statutoryHook}
            </span>
          </div>
        </div>

        {/* Action Protocol Checklist */}
        <div>
          <span className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2.5">
            Operator Tactical Action Protocol:
          </span>
          <div className="space-y-2">
            {activeScenario.actionProtocol.map((step, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2.5 p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-xs sm:text-sm text-slate-700"
              >
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#DC2626] text-white text-[10px] font-bold shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <span className="leading-relaxed">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
