"use client";

import React, { useState } from "react";

interface Scenario {
  id: string;
  badge: string;
  title: string;
  stumblingBlock: string;
  statutoryExposure: string;
  recoverySOP: string[];
  keyAuthority: string;
}

const SCENARIOS: Scenario[] = [
  {
    id: "post-facto-excursion-claim",
    badge: "Scenario 1 • Retrospective Refrigerator Failure Blame",
    title: "Hospital Alleges '2–8°C Temperature Break' Weeks After Signed Clean Delivery Receipt Following Ward Freezer Failure",
    stumblingBlock:
      "A specialty distributor supplies 60 vials of Pembrolizumab and Trastuzumab (monoclonal antibodies valued at ₹36,50,000) packed in validated vacuum-insulated panels (VIP) with dry ice/phase change material (PCM) and a NIST-calibrated single-use USB data-logger. The hospital central pharmacy signs the delivery challan with clean receipt. Twenty-five days later, when the payment falls due, the hospital medical superintendent issues an invoice rejection notice claiming that the batch suffered a cold-chain break during transit and degraded. In reality, the hospital's internal blood bank or pharmacy 2–8°C walk-in cooler experienced an unrecorded weekend compressor failure.",
    statutoryExposure:
      "Under Sections 41 and 42 of the Sale of Goods Act, 1930, a commercial buyer is afforded a reasonable opportunity to examine goods upon tender; once accepted and retained without immediate written intimation of rejection, the buyer is deemed to have accepted the goods in law. Furthermore, under Section 63 of Bharatiya Sakshya Adhiniyam, 2023 (BSA 2023), the distributor's continuous time-stamped USB data-logger readout—demonstrating uninterrupted holding between 3.6°C and 4.8°C up to the exact minute of hospital receiving dock signature—constitutes unassailable electronic evidence. The hospital's retrospective debit note is legally void, and shifting post-delivery storage losses onto the distributor violates Section 73 of the Indian Contract Act, 1872.",
    recoverySOP: [
      "Retrieve the cryptographic PDF readout and CSV audit trail from the NIST-traceable USB data-logger activated at dispatch.",
      "Execute a Fact-Verified Section 63 BSA 2023 Certificate certifying the device calibration, serial number, and timestamp integrity.",
      "Serve an immediate Statutory Legal Demand Notice appending the signed Delivery Challan (acknowledging receiving temperature) and the unbroken data-logger temperature curve.",
      "Demand inspection of the hospital's internal 24x7 temperature loggers and maintenance logs under threat of State Drug Controller regulatory complaint for improper cold-chain storage under Drugs and Cosmetics Rules, 1945.",
    ],
    keyAuthority: "Sale of Goods Act 1930 ss. 41–42, BSA 2023 s. 63 & Indian Contract Act 1872 s. 73",
  },
  {
    id: "missing-gate-temp-endorsement",
    badge: "Scenario 2 • Missing Gatekeeper Receiving Temperature",
    title: "Hospital Receiving Clerk Signs Delivery Challan but Leaves 'Receiving Temp' Column Blank to Stall Invoice Clearance",
    stumblingBlock:
      "A vaccine distributor delivers 1,200 doses of quadrivalent influenza vaccines and rabies biologics in cold boxes. The hospital pharmacy receiving clerk stamps and signs the transporter Proof of Delivery (POD) but deliberately leaves the printed field 'Receiving Temperature Recorded: ____°C' blank or writes 'Received Subject to Inspection'. Two months later, the hospital accounts department refuses to process the ₹18,20,000 invoice, contending that 'internal SOP mandates verified temperature endorsement before payment authorization, which was omitted by the carrier'.",
    statutoryExposure:
      "Under Section 43 of the Sale of Goods Act, 1930, unless otherwise agreed, where goods are delivered to the buyer and he refuses to accept them, having the right so to do, he is not bound to return them to the seller, but it is sufficient if he intimates to the seller that he refuses to accept them. Retaining biological products in custody without an explicit, contemporaneous rejection memo within 24 to 48 hours constitutes constructive acceptance. The doctrine of commercial estoppel precludes a corporate hospital from taking advantage of its own clerk's omission when the carrier presented the cold box with active visual indicator tags (Freeze-tag / Warm-mark) intact.",
    recoverySOP: [
      "Collate secondary physical evidence: GPS vehicle tracking logs from the refrigerated van, courier dispatch logs, and transit time stamps.",
      "Compile contemporaneous digital communications: Prove that the delivery rider transmitted a photograph of the active LED indicator (Green/Safe) to the hospital purchasing officer via WhatsApp/email at delivery time.",
      "Serve a 15-day statutory pre-litigation legal notice invoking Section 15 of the MSMED Act, 2006, notifying the hospital that passive silence constitutes deemed acceptance.",
      "Highlight Section 43B(h) of the Income Tax Act, warning the hospital CFO that delaying payment beyond statutory MSME deadlines will trigger tax disallowance on the purchase deduction.",
    ],
    keyAuthority: "Sale of Goods Act 1930 ss. 42–43, MSMED Act 2006 s. 15 & Income Tax Act s. 43B(h)",
  },
  {
    id: "named-patient-oncology-cancellation",
    badge: "Scenario 3 • Named-Patient Therapy Cancellation",
    title: "Hospital Attempts to Return Custom-Imported Oncology Biologic Following Patient Demise or Therapy Protocol Change",
    stumblingBlock:
      "An oncology center issues an urgent purchase requisition for a specialized targeted therapy biologic (such as CAR-T pre-medication or an imported orphan drug costing ₹8,50,000 per vial) under the 'Named-Patient Programme' for a specific bed-admitted terminal cancer patient. The distributor procures and air-couriers the biologic under validated 2–8°C conditions within 36 hours. Before the infusion is administered, the patient either passes away or the medical oncologist modifies the treatment protocol. The hospital then seeks to return the cold box, cancels the purchase order, and freezes the distributor's payment.",
    statutoryExposure:
      "Under Sections 18, 19, and 20 of the Sale of Goods Act, 1930, property in specific or ascertained goods passes to the buyer at the time the contract is made and the goods are irrevocably appropriated to the order. Named-Patient imports are bespoke, non-fungible pharmaceutical consignments procured solely on hospital requisition. Furthermore, under Schedule M and Good Distribution Practices (GDP) prescribed under the Drugs and Cosmetics Act, 1940, returned biologics cannot be re-sold or returned into general stock due to biosecurity and chain-of-custody contamination risks. The loss falls entirely on the institutional buyer.",
    recoverySOP: [
      "Review the Purchase Order and Named-Patient Undertaking to confirm non-cancellable, non-returnable contractual terms.",
      "Formally notify the hospital pharmacy in writing that returned temperature-critical biologics cannot be re-stocked under Drug Controller General of India (DCGI) safety guidelines.",
      "Dispatch a Fact-Verified Demand Notice demanding immediate full invoice clearance under Order XXXVII of the Code of Civil Procedure, 1908 (Summary Suit for liquidated debt).",
      "If the distributor is an MSME, initiate an MSEFC conciliation petition under Section 18 of the MSMED Act claiming 3 times RBI Bank Rate compound interest from the 16th day.",
    ],
    keyAuthority: "Sale of Goods Act 1930 ss. 18–20, DCGI Good Distribution Practices & CPC Order XXXVII",
  },
  {
    id: "chain-central-warehouse-boycott",
    badge: "Scenario 4 • Multi-Hospital Chain Central Warehouse Hold",
    title: "Corporate Healthcare Chain Withholds ₹75 Lakh Multi-Center Vaccine Invoice After Internal Satellite Transit Excursion",
    stumblingBlock:
      "A national multi-specialty hospital chain orders a consolidated ₹75,00,000 quarterly consignment of childhood immunization vaccines and insulin cartridges. The distributor delivers the entire batch to the hospital chain's central warehouse in Gurugram, where warehouse staff accepts delivery with zero temperature deviations. The corporate hospital then uses its own uncalibrated transport vans to distribute stock to 12 satellite clinics across Rajasthan, Haryana, and Uttar Pradesh. Weeks later, one peripheral clinic in Jaipur reports cloudy insulin vials due to local freezing, prompting the corporate CFO to withhold payment across the entire ₹75 Lakh master invoice and threatening nationwide vendor blacklisting.",
    statutoryExposure:
      "Under Section 38 of the Sale of Goods Act, 1930, unless agreed otherwise, delivery to a central designated depot constitutes complete fulfillment of the distributor's contractual obligation. The distributor's risk of loss (periculum rei) terminates at the moment of tender and clean receipt at the agreed delivery point under Section 26 of the Sale of Goods Act. Any subsequent secondary distribution, inter-branch transfer, or peripheral handling is exclusively at the corporate hospital's peril. Moreover, threatening vendor blacklisting or collective refusal to deal constitutes anti-competitive abuse under Section 3 and Section 4 of the Competition Act, 2002.",
    recoverySOP: [
      "Audit central warehouse receiving logs: Establish that the entire master consignment was received in prime condition at the Gurugram depot.",
      "Formally demarcate chain of custody: Demonstrate that transit to peripheral Jaipur or Lucknow branches occurred via the hospital's private internal logistics, without vendor participation.",
      "Serve a High-Impact Corporate Legal Notice demanding segregation of the disputed satellite fraction from the undisputed multi-city balance.",
      "File an application under Section 9 of the Arbitration and Conciliation Act, 1996 (or Commercial Courts Act pre-institution mediation) seeking interim security/deposit of the admitted ₹75 Lakh funds.",
    ],
    keyAuthority: "Sale of Goods Act 1930 ss. 26, 38, Competition Act 2002 ss. 3–4 & Arbitration Act 1996 s. 9",
  },
];

export default function ColdChainScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(SCENARIOS[0].id);
  const activeScenario = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full">
      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-2 pb-4 border-b border-slate-200">
        {SCENARIOS.map((scenario) => {
          const isActive = scenario.id === activeTab;
          return (
            <button
              key={scenario.id}
              type="button"
              onClick={() => setActiveTab(scenario.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all text-left cursor-pointer ${
                isActive
                  ? "bg-[#DC2626] text-white shadow-xs"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {scenario.badge.split("•")[0].trim()}
            </button>
          );
        })}
      </div>

      {/* Active Tab Content Card */}
      <div className="mt-5 p-5 sm:p-6 bg-slate-50 border border-slate-200 rounded-2xl">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-red-100 text-[#DC2626] border border-red-200">
            {activeScenario.badge}
          </span>
          <span className="text-xs font-semibold text-slate-500">
            Creditor Playbook &amp; Dispute Defense
          </span>
        </div>

        <h3 className="text-base sm:text-lg font-black text-slate-900 mb-3 leading-snug">
          {activeScenario.title}
        </h3>

        {/* Commercial Stumbling Block */}
        <div className="mb-4 bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
          <p className="text-xs font-bold uppercase tracking-wider text-red-600 mb-1">
            Commercial Bottleneck &amp; Hospital Evasion Tactic:
          </p>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            {activeScenario.stumblingBlock}
          </p>
        </div>

        {/* Statutory Exposure & Counter-Defense */}
        <div className="mb-4 bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-1">
            Statutory Counter-Defense &amp; Legal Exposure:
          </p>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            {activeScenario.statutoryExposure}
          </p>
        </div>

        {/* Recovery SOP */}
        <div className="mb-4 bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
          <p className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-2">
            Creditor-Side Recovery Standard Operating Procedure (SOP):
          </p>
          <ul className="space-y-2">
            {activeScenario.recoverySOP.map((step, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-black flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Key Statutory Authority */}
        <div className="flex items-center justify-between flex-wrap gap-2 pt-3 border-t border-slate-200 text-xs">
          <span className="font-bold text-slate-500 uppercase tracking-wider text-[11px]">
            Statutory Authority:
          </span>
          <span className="font-extrabold text-slate-900 bg-white px-3 py-1 rounded-lg border border-slate-200">
            {activeScenario.keyAuthority}
          </span>
        </div>
      </div>
    </div>
  );
}
