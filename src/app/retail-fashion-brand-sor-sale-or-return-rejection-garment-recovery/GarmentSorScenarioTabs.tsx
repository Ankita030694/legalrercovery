"use client";

import React, { useState } from "react";

interface ScenarioTab {
  id: string;
  tabLabel: string;
  title: string;
  modusOperandi: string;
  legalDoctrine: string;
  actionProtocol: {
    phase: string;
    action: string;
  }[];
  statutorySections: string;
}

const GARMENT_SCENARIOS: ScenarioTab[] = [
  {
    id: "unilateral-sor-conversion",
    tabLabel: "Outright to SOR Switch",
    title: "National Retail Chain Converts Outright PO into Consignment / SOR After End-of-Season",
    modusOperandi:
      "A fast-fashion brand or department store issues standard Outright Purchase Orders for 15,000 units of autumn/festive menswear. Goods pass AQL 2.5 factory inspection, are delivered to central warehouses in Bhiwandi/Gurugram, and are distributed across 80 retail stores. 120 days later, after sluggish retail footfall, the retailer's category manager emails a unilateral debit note converting unsold inventory (4,200 units) to 'Sale or Return' (SOR) and demands the vendor take back stock or absorb a 60% margin markdown.",
    legalDoctrine:
      "Breach of Sale of Goods Act, 1930 s.24 & Contract Act s.62 (Novation requires bilateral written consent). Once property in goods passed at factory gate upon delivery against outright PO, retail inventory risk vests entirely with the buyer. Unilateral PO alteration constitutes illegal repudiation.",
    actionProtocol: [
      {
        phase: "Immediate Non-Acceptance (Day 1-3)",
        action:
          "Issue a formal written protest rejecting the debit note within 48 hours. Explicitly refuse delivery authorization for return logistics trucks and notify carrier that title rests with retailer.",
      },
      {
        phase: "AQL & LR Audit Trail Compilation (Day 4-7)",
        action:
          "Collate factory-gate AQL pre-dispatch sign-off certificates, lorry receipts (LRs), electronic delivery challans, and GST portal e-Invoices showing tax payment on outright sale.",
      },
      {
        phase: "Statutory MSMED Demand Notice (Day 8-15)",
        action:
          "Serve advocate legal notice citing SGA s.24, Section 15 of MSMED Act (45-day statutory payment cap), and notify Section 43B(h) income tax disallowance if not settled by fiscal year-end.",
      },
      {
        phase: "MSEFC / Commercial Suit Filing (Day 30+)",
        action:
          "File Section 18 MSME Samadhaan petition claiming full outright invoice value plus compounding interest at 3x RBI Bank Rate, or summary commercial suit under CPC Order 37.",
      },
    ],
    statutorySections: "Sale of Goods Act s.24, MSMED Act s.15-18, Contract Act s.62, IT Act s.43B(h)",
  },
  {
    id: "post-qc-shopworn-rejections",
    tabLabel: "Post-QC Shopworn Returns",
    title: "Retailer Returns Soiled, Floor-Damaged & Tag-Torn Stock 150 Days Later as 'QC Defective'",
    modusOperandi:
      "Retail chain accepts 8,000 knitted dresses after issuing clean pre-shipment AQL inspection clearance. After 5 months on retail store display racks, trial rooms, and promotional end-caps, unsold garments return crumpled, perfume-stained, missing swing tags, and with hanger abrasions. Retailer issues a 'Quality Rejection' debit note asserting latent manufacturing defects.",
    legalDoctrine:
      "Estoppel by Conduct & Sale of Goods Act, 1930 s.41-42 (Deemed acceptance). The buyer exercised right of examination via pre-shipment AQL audit, took possession, and displayed goods to customers for months. Any subsequent shopwear damage is buyer's operational wear-and-tear, not vendor defect.",
    actionProtocol: [
      {
        phase: "Conditional Joint Survey Notice",
        action:
          "Never sign unreserved Gate Return Challans. Issue notice demanding independent surveyor / chartered engineer inspection at the warehouse under videographic documentation.",
      },
      {
        phase: "Establish Shopwear Evidence",
        action:
          "Document retail barcodes, trial room wear, customer handling marks, and broken security tags proving garments were merchandised and used for commercial display.",
      },
      {
        phase: "Legal Rebuttal of Latent Defect",
        action:
          "Cite Section 42 SGA: buyer did an act inconsistent with seller's ownership by merchandising garments to public. Serve pre-litigation notice for wrongful deduction.",
      },
    ],
    statutorySections: "Sale of Goods Act s.41 & s.42, Commercial Courts Act 2015, BSA 2023 s.63",
  },
  {
    id: "forced-markdown-deductions",
    tabLabel: "Forced Markdown / RTV",
    title: "E-Commerce Fashion Portal Imposes Forced 40%–60% Markdown Subsidies on Vendor Payables",
    modusOperandi:
      "An online fashion platform runs an 'End of Season Sale' (EOSS) and unilaterally deducts 'promotional margin subsidies', 'listing markdown contributions', and 'customer returns processing fees' amounting to ₹35 Lakh from the vendor's pending disbursement ledger without prior written contractual consent.",
    legalDoctrine:
      "Unlawful Withholding of Price under Sale of Goods Act s.55 (Suit for Price) and Section 73 Contract Act. Offsetting independent promotional expenses against liquidated outright invoice price without contractual authorization is illegal debt truncation.",
    actionProtocol: [
      {
        phase: "Ledger Reconciliation Demand",
        action:
          "Extract vendor portal API disbursement sheets, credit memos, and transaction statements. Map every unauthorized deduction against approved PO terms.",
      },
      {
        phase: "Statutory Section 15 Demand",
        action:
          "Issue legal demand treating forced markdowns as delayed principal under MSMED Act, invalidating unilateral margin cuts under overriding statutory rules.",
      },
      {
        phase: "MSME Samadhaan Escalation",
        action:
          "Submit Samadhaan application attaching invoice register, e-Way bills, and email proof of vendor's non-consent to promotional subsidies.",
      },
    ],
    statutorySections: "MSMED Act s.15-18, Contract Act s.73, Sale of Goods Act s.55",
  },
  {
    id: "portal-missing-stock-rto",
    tabLabel: "Fulfillment & Transit Loss",
    title: "E-Commerce Warehouse Reports 20% 'Shortage / In-Transit Damage' on Sealed Pallets",
    modusOperandi:
      "Vendor ships 25,000 units of denim jeans across 5 fulfillment centers (FCs). Cartons are received with unbroken security tamper-evident seals and signed GRNs (Goods Receipt Notes). 45 days later, internal FC stock reconciliation claims 3,500 units 'missing from inner packs' and debits the vendor's balance.",
    legalDoctrine:
      "Carriers Act / Carriage by Road Act 2007 + SGA s.39. Clear delivery acknowledged on LR/GRN without qualification bars subsequent claims of short-delivery against the vendor once outer carton integrity is admitted.",
    actionProtocol: [
      {
        phase: "GRN & LR Weight Re-verification",
        action:
          "Compare gross tare weight recorded at transporter weighbridge and warehouse inward gate against dispatched carton weight metrics.",
      },
      {
        phase: "Warehouse CCTV & Seal Demand",
        action:
          "Demand inward dock CCTV footage and unbroken tamper tape inspection logs. Burden of proving internal pilferage rests on warehouse bailee under Contract Act s.151.",
      },
      {
        phase: "Composite Notice to Portal & Bailee",
        action:
          "Serve statutory recovery notice holding marketplace portal and logistics partner jointly liable for conversion or price recovery.",
      },
    ],
    statutorySections: "Indian Contract Act s.151, Sale of Goods Act s.39, Carriage by Road Act 2007",
  },
];

export default function GarmentSorScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>("unilateral-sor-conversion");
  const currentScenario = GARMENT_SCENARIOS.find((s) => s.id === activeTab) || GARMENT_SCENARIOS[0];

  return (
    <div className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-6 md:p-8">
      {/* Mobile Tab Pills */}
      <div className="flex overflow-x-auto gap-2 pb-3 mb-6 no-scrollbar">
        {GARMENT_SCENARIOS.map((scenario) => {
          const isActive = scenario.id === activeTab;
          return (
            <button
              key={scenario.id}
              onClick={() => setActiveTab(scenario.id)}
              className={`shrink-0 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                isActive
                  ? "bg-[#DC2626] text-white shadow-md shadow-red-900/20"
                  : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {scenario.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Tab Panel */}
      <div className="bg-white rounded-xl border border-slate-200 p-5 sm:p-7 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3 pb-3 border-b border-slate-100">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-red-600 bg-red-50 px-2.5 py-1 rounded-md">
            <span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>
            Retail Dispute Modality
          </span>
          <span className="text-[11px] font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
            {currentScenario.statutorySections}
          </span>
        </div>

        <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 mb-3">
          {currentScenario.title}
        </h3>

        {/* Modus Operandi Box */}
        <div className="mb-4 bg-slate-50 rounded-xl p-3.5 sm:p-4 border-l-4 border-amber-500">
          <h4 className="text-xs uppercase tracking-wider font-bold text-slate-700 mb-1">
            Retail Chain Modus Operandi
          </h4>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {currentScenario.modusOperandi}
          </p>
        </div>

        {/* Legal Doctrine */}
        <div className="mb-6 bg-red-50/60 rounded-xl p-3.5 sm:p-4 border-l-4 border-[#DC2626]">
          <h4 className="text-xs uppercase tracking-wider font-bold text-red-800 mb-1">
            Vendor Statutory Shield & Legal Theory
          </h4>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
            {currentScenario.legalDoctrine}
          </p>
        </div>

        {/* Action Protocol Steps */}
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
          Step-by-Step Vendor Counter-Escalation Protocol
        </h4>
        <div className="space-y-3">
          {currentScenario.actionProtocol.map((step, idx) => (
            <div key={idx} className="flex gap-3 items-start bg-slate-50 p-3 rounded-lg border border-slate-100">
              <span className="shrink-0 w-6 h-6 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center mt-0.5">
                {idx + 1}
              </span>
              <div className="text-xs sm:text-sm">
                <span className="font-bold text-slate-900 block mb-0.5">{step.phase}</span>
                <span className="text-slate-600 leading-relaxed">{step.action}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
