"use client";

import React, { useState } from "react";

interface TransporterScenario {
  id: string;
  tabLabel: string;
  ticketBand: string;
  title: string;
  failureMechanism: string;
  lawfulProtocol: string;
  statutoryHooks: string;
  executionSteps: {
    step: string;
    detail: string;
  }[];
  recoveryLeverage: string;
}

const TRANSPORTER_SCENARIOS: TransporterScenario[] = [
  {
    id: "current-shipment-freight",
    tabLabel: "Current Bilty Default",
    ticketBand: "₹35,000 – ₹2.5L Unpaid Shipment Freight",
    title: "Shipper or Consignee Refuses Freight Payment for the Ongoing Consignment",
    failureMechanism:
      "The truck reaches the destination godown, but the consignee refuses to clear the 'To-Pay' freight invoice before offloading, threatening to forcefully unload with local labor or file a police complaint for illegal detention.",
    lawfulProtocol: "Statutory Particular Lien (s.170 ICA) + Pre-Offloading Refusal Memo + Formal Detention Intimation",
    statutoryHooks:
      "Section 170 Indian Contract Act, 1872; Carriage by Road Act, 2007 (Section 13 & 14); Bharatiya Nyaya Sanhita, 2023 s.316 defense (Carrier retains lawful possessory bailment until freight is tendered).",
    executionSteps: [
      {
        step: "Instruct Driver to Park at Secure Yard & Halt Unloading",
        detail:
          "Do not break seal or unload goods onto consignee's private dock. Park the truck in a secure commercial yard or transporter terminal. Maintain video log of intact container seals.",
      },
      {
        step: "Issue Immediate Pre-Offloading Freight Demand & Lien Intimation",
        detail:
          "Serve written and WhatsApp intimation to consignor and consignee citing Bilty number, freight payable, and Section 170 possessory lien status.",
      },
      {
        step: "Dispatch Advocate 48-Hour Carrier Lien Demand Notice",
        detail:
          "Formally state that halting charges (₹3,000 to ₹7,500/day) and yard demurrage are accruing to their account until the freight invoice is paid into the designated bank account.",
      },
    ],
    recoveryLeverage: "Absolute Statutory Shield: Consignee cannot legally force unloading without tendering freight.",
  },
  {
    id: "past-ledger-dues-trap",
    tabLabel: "Past Ledger Dues Trap",
    ticketBand: "₹5L – ₹45L Accumulated Multi-Trip Ledger",
    title: "Detaining a Fresh Truckload to Force Settlement of Previous Months' Overdue Freight",
    failureMechanism:
      "Transporter holds a fresh ₹40 Lakh consignment to recover ₹12 Lakh of past unpaid bilties from 6 months ago. Without a contractual General Lien clause, the shipper files a BNS Section 316 / Section 303 FIR alleging criminal breach of trust or theft.",
    lawfulProtocol: "Contractual General Lien Clause (s.171 ICA) + Master Service Agreement Proof + Advance Lien Notice",
    statutoryHooks:
      "Section 171 Indian Contract Act, 1872 (General Lien by contract); Supreme Court ruling in Sriyanesh Knitters; BSA 2023 s.63 electronic ledger and WhatsApp delivery confirmations.",
    executionSteps: [
      {
        step: "Verify Standard 'General Lien & Right of Sale' Clause on Bilty/MSA",
        detail:
          "Confirm that the Goods Forwarding Note, Bilty, or Master Logistics Agreement includes an explicit covenant: 'Carrier holds a general lien over all goods in transit for any balance due on any prior account.'",
      },
      {
        step: "Deliver Pre-Detention Demand Notice Citing Ledger Reconciliation",
        detail:
          "Prior to halting delivery, dispatch an itemized statement of accounts showing all unpaid past bilty numbers, invoice dates, and POD acknowledgments.",
      },
      {
        step: "Lodge Proactive Intimation With Local Police Jurisdiction",
        detail:
          "Submit a preemptive civil intimation letter with the jurisdictional Station House Officer (SHO) explaining contractual detention under Section 171 ICA to nullify false criminal complaints.",
      },
    ],
    recoveryLeverage: "Commercial Neutralization: Transforms an extortion allegation into a valid contractual possessory right.",
  },
  {
    id: "perishable-urgent-cargo",
    tabLabel: "Perishables & Reefer Cargo",
    ticketBand: "₹10L – ₹60L High-Spoilage or Reefer Goods",
    title: "Unpaid Freight or Rejected Delivery of Perishable, Chemical, or Cold-Chain Cargo",
    failureMechanism:
      "Consignee rejects perishable chemicals, agricultural commodities, or pharmaceuticals. The transporter cannot hold the cargo indefinitely as shelf-life expires, causing catastrophic loss and transit damage counter-claims.",
    lawfulProtocol: "Carriage by Road Act Section 14 Emergency Public Auction Protocol + Notarized Condition Survey",
    statutoryHooks:
      "Section 14 Carriage by Road Act, 2007 (Disposal of perishable goods); Section 73 Indian Contract Act (Mitigation of damages); Notarized Panchnama & temperature datalogger extraction.",
    executionSteps: [
      {
        step: "Extract Continuous Temperature & Condition Telematics",
        detail:
          "Download reefer IoT data, GPS logs, and obtain an independent surveyor report within 12 hours of delivery refusal to document that cargo remains in prime condition.",
      },
      {
        step: "Serve 24-Hour Urgent Notice of Perishable Disposal",
        detail:
          "Notify consignor, consignee, and cargo insurer via registered email and courier stating that goods will be disposed of under Section 14 of the Carriage by Road Act to mitigate spoilage.",
      },
      {
        step: "Conduct Regulated Wholesale Auction & Credit Net Proceeds",
        detail:
          "Conduct public auction through recognized mandi or commercial commission agent. Deduct freight, halting, and auction expenses; deposit surplus in escrow or initiate suit for the deficit.",
      },
    ],
    recoveryLeverage: "Loss Prevention: Eliminates shipper's counterclaim for spoilage while securing recovery from salvage.",
  },
  {
    id: "consignee-refusal-demurrage",
    tabLabel: "Consignee Refusal & Halting",
    ticketBand: "₹1.2L – ₹8L Demurrage & Detention Arrears",
    title: "Consignee Denies Receipt Due to Commercial Disputes With Consignor; Truck Held Hostage",
    failureMechanism:
      "Consignee claims they never ordered the goods, or that goods are defective under the sales contract. The truck sits idle outside the factory for 14 days, accumulating massive driver halting costs while neither party pays.",
    lawfulProtocol: "Carrier Halting Debit Protocol + Demurrage Notice to Consignor + Return Freight Lien",
    statutoryHooks:
      "Section 10 Carriage by Road Act, 2007; Section 13 (Unclaimed goods disposal after 30 days notice); CPC Order XXXVII (Summary suit on halting debit notes).",
    executionSteps: [
      {
        step: "Procure Written Refusal Endorsement or Video Gate Verification",
        detail:
          "Obtain an explicit written refusal from consignee's security/store manager on the consignment note copy or record geo-tagged video evidence of entry denial.",
      },
      {
        step: "Serve Formal Notice of Delivery Refusal on Consignor",
        detail:
          "Notify the booking consignor that their consignee has refused delivery, and that statutory halting charges of ₹3,500/day per trailer are accumulating with warehouse demurrage.",
      },
      {
        step: "Invoke 30-Day Notice Period Under Section 13 Carriage by Road Act",
        detail:
          "Issue statutory 30-day notice to consignor to designate alternate delivery or pay round-trip freight plus halting costs, failing which goods will be auctioned at consignor's expense.",
      },
    ],
    recoveryLeverage: "Total Contractual Shifting: The consignor remains strictly liable under common carrier bailment law.",
  },
];

export default function TransporterLienScenarioTabs() {
  const [activeTab, setActiveTab] = useState(TRANSPORTER_SCENARIOS[0].id);
  const current = TRANSPORTER_SCENARIOS.find((s) => s.id === activeTab) || TRANSPORTER_SCENARIOS[0];

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
      {/* Tab Selectors */}
      <div className="flex flex-wrap border-b border-slate-200 bg-slate-50/80 p-2 gap-1.5">
        {TRANSPORTER_SCENARIOS.map((scenario) => {
          const isActive = activeTab === scenario.id;
          return (
            <button
              key={scenario.id}
              type="button"
              onClick={() => setActiveTab(scenario.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                isActive
                  ? "bg-[#DC2626] text-white shadow-sm"
                  : "bg-white text-slate-700 hover:bg-slate-200/70 border border-slate-200/80"
              }`}
            >
              {scenario.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Tab Content Panel */}
      <div className="p-5 sm:p-7 md:p-8 space-y-6">
        {/* Header Strip */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
          <div>
            <span className="inline-block px-2.5 py-1 rounded-md text-[10px] font-black uppercase tracking-wider bg-red-100 text-[#DC2626] mb-1.5">
              {current.ticketBand}
            </span>
            <h3 className="text-base sm:text-lg md:text-xl font-black text-slate-900 leading-snug">
              {current.title}
            </h3>
          </div>
        </div>

        {/* Failure Mechanism & Lawful Protocol Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-red-50/70 border border-red-200 rounded-xl p-4">
            <span className="text-[11px] font-black uppercase tracking-wider text-[#DC2626] block mb-1.5">
              Commercial Risk &amp; Criminal Trap
            </span>
            <p className="text-xs text-slate-700 leading-relaxed">
              {current.failureMechanism}
            </p>
          </div>

          <div className="bg-emerald-50/70 border border-emerald-200 rounded-xl p-4">
            <span className="text-[11px] font-black uppercase tracking-wider text-emerald-800 block mb-1.5">
              Lawful Recovery Remedy
            </span>
            <p className="text-xs text-slate-700 leading-relaxed">
              {current.lawfulProtocol}
            </p>
          </div>
        </div>

        {/* Statutory Ground */}
        <div className="bg-slate-900 text-white rounded-xl p-4">
          <span className="text-[10px] font-black uppercase tracking-widest text-red-400 block mb-1">
            Statutory Hooks &amp; Judicial Grounding
          </span>
          <p className="text-xs text-slate-200 font-mono leading-relaxed">
            {current.statutoryHooks}
          </p>
        </div>

        {/* 3-Step Execution Protocol */}
        <div>
          <h4 className="text-xs sm:text-sm font-black text-slate-900 uppercase tracking-wider mb-3">
            Mandatory Operational Steps for Fleet Managers
          </h4>
          <div className="space-y-3">
            {current.executionSteps.map((stepItem, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-3.5 bg-slate-50 border border-slate-200 rounded-xl"
              >
                <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-black shrink-0 mt-0.5">
                  {index + 1}
                </span>
                <div>
                  <p className="text-xs font-bold text-slate-900 mb-0.5">{stepItem.step}</p>
                  <p className="text-xs text-slate-600 leading-relaxed">{stepItem.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Strategic Bottomline */}
        <div className="p-3.5 bg-amber-50 border border-amber-200 rounded-xl flex items-center justify-between gap-3">
          <div className="text-xs text-amber-900">
            <span className="font-bold">Carrier Tactical Outcome: </span>
            {current.recoveryLeverage}
          </div>
        </div>
      </div>
    </div>
  );
}
