"use client";

import React, { useState } from "react";

interface ScenarioItem {
  id: string;
  shortLabel: string;
  badge: string;
  headline: string;
  typicalBuyerTactic: string;
  statutoryCounter: string;
  keyProof: string[];
  actionPlan: string;
  recoveryLeverage: string;
}

const PALLET_SCENARIOS: ScenarioItem[] = [
  {
    id: "ispm15-shipped-unpaid",
    shortLabel: "1. ISPM-15 Shipped, Bill Unpaid",
    badge: "Export Shipment Lever",
    headline: "ISPM-15 Certificate Issued & Vessel Sailed—Exporter Stretches Crating Bill Past 120 Days",
    typicalBuyerTactic:
      "Heavy engineering exporters in Chakan, Peenya, and Vadodara demand rush seaworthy crating with VCI vacuum foil and DPPQS-accredited ISPM-15 Heat-Treatment (HT) stamping so their consignment clears JNPA or Mundra Customs. Once the Bill of Lading is cut and export proceeds are realized, accounts payable stalls your invoice citing 'foreign buyer LC delay' or '90-day vendor policy'.",
    statutoryCounter:
      "Under Section 42 of the Sale of Goods Act, 1930, exporting capital machinery inside your stamped wooden crates is conclusive commercial consumption and irrevocable acceptance. Under MSMED Act Sections 15 & 24, a buyer's back-to-back foreign LC delay or internal 120-day ERP rule cannot override the mandatory 45-day ceiling for Micro & Small timber crating units.",
    keyProof: [
      "DPPQS-accredited ISPM-15 Treatment Certificate bearing your unique IN-XXX facility code, batch number, and kiln core-temp log (56°C for 30+ mins)",
      "Exporter's Shipping Bill / Container Number / Bill of Lading cross-referenced in WhatsApp or email dispatch instructions",
      "Signed factory gate-in challan, E-Way bill, and pre-stuffing photographs showing the IPPC stamp on the crated machine",
    ],
    actionPlan:
      "Issue a Fact-Verified Statutory Demand Notice directly to the exporter's CFO and Statutory Auditor flagging Income Tax Section 43B(h) disallowance, Form 3CD Clause 22 disclosure, and MSEFC 3x RBI monthly compounded interest. Simultaneously notify that future ISPM-15 compliance certificates will require 100% advance clearance.",
    recoveryLeverage:
      "High pre-litigation settlement leverage: exporters cannot deny receipt once your unique IPPC/ISPM-15 certificate number is embedded in their customs clearance dossier.",
  },
  {
    id: "custom-machinery-crate-unlifted",
    shortLabel: "2. Custom Heavy Crate Unlifted",
    badge: "Zero-Salvage Custom Build",
    headline: "Oversized CNC / Transformer Wooden Box Built to CAD Drawings Left Abandoned on Your Yard",
    typicalBuyerTactic:
      "An OEM orders bespoke heavy-duty skid bases, saddle blocks, and 4-meter seaworthy pinewood/plywood boxes engineered to exact center-of-gravity CAD drawings. Mid-way, the overseas project gets postponed or canceled; the buyer refuses to lift the fabricated crates and tells you to 'reuse the wood for another customer'.",
    statutoryCounter:
      "Under Section 55(1)–(2) of the Sale of Goods Act, 1930 and Section 73 of the Indian Contract Act, 1872, custom-dimensioned machinery boxes cut to bespoke load-bearing blueprints have zero open-market resale value (dismantling recovers scrap firewood at <15% cost). You are entitled to 100% contract price plus Section 44 yard/storage demurrage for occupying shed capacity.",
    keyProof: [
      "Buyer's PO, CAD/dimension drawing email, or WhatsApp approval confirming exact L×W×H, gross payload tonnage, and timber spec",
      "Imported New Zealand/European radiata pinewood or hardwood purchase invoices showing upfront cash material procurement",
      "Timestamped yard photographs of completed boxes, Ready-for-Inspection (RFI) email, and formal 7-day lifting notice",
    ],
    actionPlan:
      "Serve a formal Tender of Delivery & Section 44 Storage Charge Notice establishing constructive appropriation of the custom boxes. If lifting does not occur within 15 days, escalate via MSEFC Samadhaan (for Udyam units) or Commercial Court Summary Suit under Order XXXVII CPC for full invoice value plus yard demurrage.",
    recoveryLeverage:
      "Neutralizes the 'mitigation of loss' defense: bespoke structural crating cannot be resold intact, locking in full invoice recovery.",
  },
  {
    id: "port-lashing-cha-blocker",
    shortLabel: "3. Container Lashing & CHA Dues",
    badge: "Port / ICD Service Dues",
    headline: "Container Lashing, Choking & VCI On-Site Crew Paid Cash—CHA / Forwarder Freezes Invoice",
    typicalBuyerTactic:
      "You deploy certified lashing crews, heavy-duty polyester strapping, steel wire ropes, turnbuckles, dunnage airbags, and wooden chocks inside 40ft Flat-Rack or Open-Top containers at Mundra, Nhava Sheva (JNPA), Chennai Port, or ICD Dadri/Tughlakabad. The freight forwarder or CHA pockets the exporter's full packing-and-lashing disbursement but withholds your bill blaming 'shipper audit' or 'marine surveyor query'.",
    statutoryCounter:
      "Where your crew executed container lashing and a Third-Party Marine / Lashing Surveyor (e.g., SGS, Intertek, or port-approved agency) issued a clean Lashing & Securing Certificate allowing container gate-in, performance is fully completed under Section 70 of the Indian Contract Act. A CHA cannot hide behind an undisclosed 'pay-when-paid' understanding unless expressly contracted—and even then, MSMED Act s.15 caps payment at 45 days for Udyam service enterprises.",
    keyProof: [
      "Container number, seal number, port/CFS gate-pass logs, and worker attendance/deployment sheets signed by CFS supervisor",
      "Before-and-after container lashing photographs (geotagged/timestamped) plus Marine Surveyor Lashing Certificate copy",
      "Material consumption tally (timber dunnage, VCI film, desiccant bags, heavy lashing belts) and GSTR-1 filed tax invoice",
    ],
    actionPlan:
      "Serve a joint Fact-Verified Notice on both the contracting CHA/Freight Forwarder (principal obligor) and copy the Exporter's Logistics Head (beneficiary under Section 70) putting them on notice of GSTR-2B ITC reversal risk under CGST Section 16(2) if the invoice crosses 180 days unpaid.",
    recoveryLeverage:
      "Copying the end-exporter breaks CHA stonewalling immediately—exporters rarely tolerate forwarders pocketing already-reimbursed port lashing bills.",
  },
  {
    id: "factory-pallet-ledger-excuse",
    shortLabel: "4. Factory Pallet Ledger & Excuses",
    badge: "Running Ledger Recovery",
    headline: "Regular Euro / 4-Way Pinewood Pallet Factory Supply Stretched + Fake Moisture / Nail Deductions",
    typicalBuyerTactic:
      "Auto-ancillary, pharma, and chemical plants in Ambattur, Faridabad, Bharuch, and Pimpri-Chinchwad take weekly truckloads of 4-way Euro pallets on running account. When receivables cross ₹15–₹40 lakh, procurement stops releasing payments and suddenly sends a retrospective debit note alleging 'fungus/moisture >20%' or 'bent nail / deck-board crack' on pallets delivered 60 days earlier.",
    statutoryCounter:
      "Under MSMED Act Section 2(b) Explanation, any written objection to goods must be raised strictly within 15 days of delivery; silence triggers deemed acceptance on Day 16. Furthermore, under Sale of Goods Act Section 26, kiln-dried pallets left outdoors in monsoon rain inside the buyer's open factory yard deteriorate at the buyer's sole risk.",
    keyProof: [
      "Signed factory security Gate-In registers, E-Way bills, and Store GRNs bearing 'Received in Good Condition' stamps",
      "Moisture-meter reading sheet (<18%–20% MC at dispatch) and kiln-drying / HT treatment batch records",
      "Reconciled running ledger statement, partial on-account NEFT receipts (extending limitation under Section 19 Limitation Act), and GSTR-2B ITC acceptance",
    ],
    actionPlan:
      "Reject the fabricated debit note in writing within 72 hours, refuse to issue any CGST Section 34 Credit Note, and trigger an Advocate Demand Notice enforcing the full reconciled running ledger + 3x RBI compound interest from each invoice's 46th day.",
    recoveryLeverage:
      "Factory GRN + GSTR-2B credit availment destroys retrospective moisture/nail debit notes before MSEFC or Commercial Courts.",
  },
];

export default function WoodenPalletScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(PALLET_SCENARIOS[0].id);
  const current = PALLET_SCENARIOS.find((s) => s.id === activeTab) || PALLET_SCENARIOS[0];

  return (
    <div className="w-full">
      {/* Tab Selector Buttons */}
      <div
        role="tablist"
        aria-label="Wooden pallet and export crating default scenarios"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 mb-6"
      >
        {PALLET_SCENARIOS.map((item) => {
          const isSelected = item.id === activeTab;
          return (
            <button
              key={item.id}
              role="tab"
              type="button"
              aria-selected={isSelected}
              onClick={() => setActiveTab(item.id)}
              className={`text-left px-3.5 py-3 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                isSelected
                  ? "bg-[#DC2626] text-white border-[#DC2626] shadow-md"
                  : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:border-slate-300"
              }`}
            >
              <span className="block leading-snug">{item.shortLabel}</span>
            </button>
          );
        })}
      </div>

      {/* Active Scenario Card */}
      <div
        role="tabpanel"
        className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-5"
      >
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-red-100 text-[#DC2626] border border-red-200">
            {current.badge}
          </span>
          <h3 className="text-base sm:text-lg font-extrabold text-slate-900 leading-snug">
            {current.headline}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white border border-amber-200 rounded-xl p-4">
            <p className="text-[11px] font-extrabold uppercase tracking-wider text-amber-700 mb-1.5">
              Debtor / Exporter Delay Tactic
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {current.typicalBuyerTactic}
            </p>
          </div>

          <div className="bg-white border border-emerald-200 rounded-xl p-4">
            <p className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-700 mb-1.5">
              Creditor Statutory Counter-Strike
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {current.statutoryCounter}
            </p>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-4">
          <p className="text-[11px] font-extrabold uppercase tracking-wider text-slate-600 mb-2">
            Mandatory Proof Bundle to Lock Liability
          </p>
          <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700 list-disc pl-5">
            {current.keyProof.map((proof, idx) => (
              <li key={idx} className="leading-relaxed">
                {proof}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-slate-900 text-slate-100 rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <p className="text-[11px] font-bold uppercase tracking-wider text-red-400">
              Immediate Execution SOP
            </p>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              {current.actionPlan}
            </p>
          </div>
          <div className="sm:w-64 shrink-0 bg-white/10 border border-white/15 rounded-lg p-3">
            <p className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 mb-1">
              Commercial Leverage
            </p>
            <p className="text-xs text-slate-200 leading-snug">
              {current.recoveryLeverage}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
