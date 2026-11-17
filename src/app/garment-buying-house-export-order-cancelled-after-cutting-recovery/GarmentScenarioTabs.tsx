"use client";

import React, { useState } from "react";

interface Scenario {
  id: string;
  tabLabel: string;
  title: string;
  trigger: string;
  buyerDefense: string;
  statutoryCounter: string;
  remedyAction: string;
  evidenceDocs: string[];
}

const SCENARIOS: Scenario[] = [
  {
    id: "air-freight-trap",
    tabLabel: "The 'Air-Freight Trap'",
    title: "Buyer Delays PP-Sample & Trims, Then Coerces Factory into Air-Freight Shipment",
    trigger: "Buying house merchandiser or buyer's nominated zipper/button supplier delays approval by 18–25 days past the production calendar cutoff. The buyer then threatens full PO cancellation unless the garment factory ships by air cargo at ₹18–35 Lakh supplier expense.",
    buyerDefense: "'FOB handover date in PO is strict and time is of the essence. Delays in sample comments are standard trade communications and do not waive delivery deadlines.'",
    statutoryCounter: "Under Section 53 and 54 of the Indian Contract Act, 1872, where a contract contains reciprocal promises and the party bound to perform first (buyer approving pre-production samples / nominated trims) prevents the other from performing, the promisor is excused from performance and is entitled to compensation. The buyer's own delay legally shifts the FOB handover date day-for-day, rendering any forced air-freight debit note illegal, void, and an act of commercial extortion under Section 73.",
    remedyAction: "Issue immediate Section 54 protest letter reserving FOB rights. Refuse air-freight airway bills under duress without a written 'Without Prejudice & Under Protest' endorsement. Serve dual statutory notice demanding reimbursement of deducted air freight plus 18% interest.",
    evidenceDocs: [
      "Tech-pack submission timestamps and courier dispatch slips of PP samples",
      "Email threads demonstrating merchandiser delay / repeated revisions past PO cutoff",
      "Nominated trim supplier delivery challans proving delayed raw material arrival",
      "Bill of Lading / Airway Bill showing 'Accepted Under Commercial Duress & Protest'",
    ],
  },
  {
    id: "cancelled-after-cutting",
    tabLabel: "Cancelled After Cutting",
    title: "PO Cancelled After Custom Knitted/Woven Fabric Has Been Cut on Lay Tables",
    trigger: "Overseas brand experiences slow seasonal sales in EU/US and abruptly instructs the Indian liaison buying agency to cancel 40,000 units after fabric has been dyed, tested, and cut on the factory floor.",
    buyerDefense: "'PO clause 14 permits unilateral cancellation prior to FOB dispatch without liability, or buyer claims a trivial shade variance in cut panels.'",
    statutoryCounter: "Under Section 73 and Section 74 of the Indian Contract Act, 1872, wrongful repudiation of a bespoke manufacturing contract entitles the manufacturer to full reliance damages, including entire raw material costs, CMT conversion expenses, overheads, and lost contract profits. Under Section 230, the Indian buying house acts as an agent for an undisclosed or foreign principal and can be held personally liable in Indian courts where the principal resides abroad.",
    remedyAction: "Serve statutory Demand Notice demanding full contract value of cut pieces within 15 days. Concurrently issue a 15-day De-branding & Salvage Sale Notice under the Sale of Goods Act, notifying the brand that uncollected goods will have labels cut/defaced and be liquidated in the domestic market to mitigate damages.",
    evidenceDocs: [
      "Approved Purchase Order and Lab Dip / Size Set approval sign-offs",
      "Fabric inward GRN, GSM test reports, and fabric consumption markers",
      "Factory Cutting Room registers signed by the buying agency's visiting QA inspector",
      "Cost breakdown of unrecoverable CMT and specialized cut trim components",
    ],
  },
  {
    id: "port-discount-blackmail",
    tabLabel: "Port 30% Discount Blackmail",
    title: "Consignment Lands at Destination Port; Buyer Demands 30%–40% Distress Discount",
    trigger: "Garment container arrives at Hamburg, Felixstowe, or New York. The foreign importer refuses to take delivery or clear shipping docs, claiming subjective 'hand-feel' or 'packing defects', demanding an instant 30% debit note to accept the goods.",
    buyerDefense: "'Goods are non-conforming under destination inspection; unless supplier accepts discount, container will incur port demurrage and be abandoned.'",
    statutoryCounter: "Under Section 41 and 42 of the Sale of Goods Act, 1930, when goods are inspected and cleared by the buyer's nominated Quality Assurance (QA) agency at the factory (Final Random Inspection / FRI certificate issued) prior to factory stuffing, the buyer has exercised its right of examination. Post-landing rejection on pre-cleared visual parameters constitutes fraudulent refusal to accept delivery under Section 56.",
    remedyAction: "Lodge FRI passing certificate and container seal records. Serve an emergency legal notice to the Indian liaison agency and overseas head office. File a complaint before the Indian Embassy Commercial Wing / Director General of Foreign Trade (DGFT) Quality Complaints Committee and initiate MSME Samadhaan / Commercial Court summary proceedings.",
    evidenceDocs: [
      "Passed Final Random Inspection (FRI) report signed by nominated third-party surveyor",
      "Factory stuffing photos showing sealed carton counts, barcode stickers, and container seal",
      "Bill of Lading and Certificate of Origin issued under Indo-EU/US trade conventions",
      "Demand letters proving buyer's bad-faith attempt to enforce unilateral debit notes",
    ],
  },
  {
    id: "buying-house-liability",
    tabLabel: "Liaison Agency vs Principal",
    title: "Indian Buying Agency Claims 'We Are Merely Facilitators, Sue The Foreign Brand'",
    trigger: "When payments are stopped or cancelled, the Gurugram, Noida, or Bengaluru buying agency disclaims all liability, claiming it is an independent service agent and the factory must file costly civil litigation in London, New York, or Paris.",
    buyerDefense: "'Agency contract stipulates privity exists solely between the foreign buyer and Indian manufacturer. Buying agency has no financial stake or debt liability.'",
    statutoryCounter: "Section 230(1) of the Indian Contract Act, 1872 explicitly creates a statutory presumption that an agent is personally liable when contracting for a foreign principal: 'In the absence of any contract to the contrary, an agent cannot personally enforce contracts... nor is he personally bound by them; but such a contract shall be presumed to exist where the contract is made by an agent for the sale or purchase of goods for a merchant resident abroad.'",
    remedyAction: "Anchor the statutory demand notice directly against the Indian buying agency entity and its resident directors under Section 230(1). Invoke Section 43B(h) of the Income Tax Act if the agency has booked or mediated transactions, and seek bank account freezes under Order 38 Rule 5 CPC in Indian Commercial Courts.",
    evidenceDocs: [
      "Vendor Code Agreement / PO issued directly on the buying house letterhead or ERP portal",
      "Inspection sign-offs, production tracking emails, and commercial invoices citing the buying house",
      "MCA records and GSTIN filings of the Indian buying house entity",
      "Proof of foreign merchant status of the brand without a registered branch in India",
    ],
  },
];

export default function GarmentScenarioTabs() {
  const [activeTab, setActiveTab] = useState(SCENARIOS[0].id);
  const activeScenario = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
      {/* Tab Navigation Header */}
      <div className="flex border-b border-slate-200 bg-slate-50 overflow-x-auto scrollbar-thin">
        {SCENARIOS.map((scenario) => {
          const isActive = scenario.id === activeTab;
          return (
            <button
              key={scenario.id}
              onClick={() => setActiveTab(scenario.id)}
              className={`px-4 sm:px-6 py-3.5 text-xs sm:text-sm font-semibold whitespace-nowrap transition-colors border-b-2 cursor-pointer ${
                isActive
                  ? "border-[#DC2626] text-[#DC2626] bg-white font-bold"
                  : "border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              {scenario.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Tab Content Body */}
      <div className="p-5 sm:p-6 md:p-8 space-y-6">
        <div>
          <span className="inline-block px-2.5 py-1 rounded-md text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-red-100 text-red-800 mb-2">
            Commercial Dispute Scenario
          </span>
          <h3 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 leading-snug">
            {activeScenario.title}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <h4 className="text-xs uppercase tracking-wider font-bold text-slate-500 mb-2">
              Commercial Trigger
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {activeScenario.trigger}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200">
            <h4 className="text-xs uppercase tracking-wider font-bold text-amber-800 mb-2">
              Buying House / Brand Stance
            </h4>
            <p className="text-xs sm:text-sm text-amber-950 leading-relaxed font-medium">
              {activeScenario.buyerDefense}
            </p>
          </div>
        </div>

        <div className="p-4 sm:p-5 rounded-xl bg-emerald-50/80 border border-emerald-300">
          <h4 className="text-xs uppercase tracking-wider font-bold text-emerald-800 mb-2 flex items-center gap-1.5">
            <span>&#9878;</span> Statutory Counter &amp; Judicial Protection
          </h4>
          <p className="text-xs sm:text-sm text-emerald-950 leading-relaxed">
            {activeScenario.statutoryCounter}
          </p>
        </div>

        <div className="p-4 sm:p-5 rounded-xl bg-slate-900 text-white">
          <h4 className="text-xs uppercase tracking-wider font-bold text-red-400 mb-2">
            Recommended Actionable SOP
          </h4>
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed mb-4">
            {activeScenario.remedyAction}
          </p>

          <h5 className="text-[11px] uppercase tracking-wider font-bold text-slate-400 mb-2">
            Mandatory Evidentiary Documents to Secure:
          </h5>
          <ul className="space-y-1.5">
            {activeScenario.evidenceDocs.map((doc, idx) => (
              <li key={idx} className="text-xs text-slate-300 flex items-start gap-2">
                <span className="text-emerald-400 font-bold">&#10003;</span>
                <span>{doc}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
