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
    id: "reagent-rental-breach",
    badge: "IVD Analyzer Placement & Reagent Piracy",
    title: "Diagnostic Center Defaults on Minimum Purchase & Uses Grey-Market Reagents",
    stumblingBlock:
      "A commercial pathology lab or hospital acquires an advanced ₹25L–₹60L automated biochemistry/immunoassay analyzer on a 'Reagent-Rental' or 'Cost-Per-Test' (CPT) arrangement with zero capital outlay. After 6 months, the lab breaches its Minimum Monthly Guarantee (MMG), hacks RFID barcode chips, or sources pirated third-party reagents from unauthorized distributors, while refusing to return the analyzer or settle accrued kit shortfalls.",
    statutoryExposure:
      "Under Section 25 of the Sale of Goods Act, 1930 (Reservation of Right of Disposal), ownership remains vested in the OEM until full contractual conditions are fulfilled. Diverting to unauthorized reagents breaches contractual warranties, infringes registered trademarks/patents, and constitutes civil conversion and actionable breach under Sections 73 and 74 of the Indian Contract Act, 1872.",
    recoverySOP: [
      "Extract remote telemetry logs, reagent consumption counters, and electronic audit trails certified under BSA Section 63 evidencing off-contract third-party reagent usage.",
      "Serve a 15-day Statutory Demand Notice declaring contractual termination, invoking liquidated minimum guarantee shortfalls, and demanding immediate repossession.",
      "File an urgent Section 9 Commercial Injunction under the Arbitration Act (or Order XXXIX CPC) to restrain the lab from utilizing third-party reagents in OEM hardware.",
      "Seek an ex-parte Commercial Court Receiver under Order XL Rule 1 CPC to take physical custody of the analyzer and transfer it back to OEM bonded warehouses.",
    ],
    keyAuthority:
      "Sale of Goods Act 1930 s.25 & Indian Contract Act 1872 ss.73–74 & Commercial Courts Act 2015",
  },
  {
    id: "pcpndt-ultrasound-seizure",
    badge: "PCPNDT Regulatory Repossession",
    title: "Diagnostic Center Default on Sonography Equipment & PCPNDT Legal Roadblock",
    stumblingBlock:
      "A clinic defaults on high-end color Doppler ultrasound instalments (balance ₹18L). When the OEM field engineers attempt repossession, the doctor threatens a non-bailable criminal FIR under Section 23 of the PCPNDT Act, 1994, asserting that moving or removing a registered sonography machine without prior District Appropriate Authority intimation is a statutory crime.",
    statutoryExposure:
      "Under Rules 3A and 13 of the Pre-Conception and Pre-Natal Diagnostic Techniques (PCPNDT) Rules, 1996, every sale, transfer, or relocation of ultrasound equipment must be statutorily intimated to the District Appropriate Authority (Civil Surgeon/CMO). Self-help seizure without statutory compliance exposes OEM directors to criminal prosecution and equipment sealing under Section 30.",
    recoverySOP: [
      "Submit formal 30-day advance statutory intimation to the District Appropriate Authority (CMO/Civil Surgeon) detailing financing default and legal title retention.",
      "File an application under Section 9 of the Arbitration Act or Order XL Rule 1 CPC in the Commercial Court praying for appointment of an advocate/court receiver accompanied by local police assistance.",
      "Execute the physical handover strictly in the presence of the District Health Officer or PCPNDT nodal inspector, recording serial numbers and Form B registration status.",
      "Secure formal transit permits and de-registration acknowledgments from the Appropriate Authority before transporting the equipment to bonded OEM storage.",
    ],
    keyAuthority:
      "PCPNDT Act 1994 ss.18, 23, 30 & PCPNDT Rules 1996 Rule 3A, Rule 13 & CPC Order XL Rule 1",
  },
  {
    id: "radiology-fat-milestone-freeze",
    badge: "High-Value Capital Equipment (MRI / CT)",
    title: "Hospital Withholds Final 10%–20% FAT Acceptance Sign-Off for 18–36 Months",
    stumblingBlock:
      "After delivering, installing, and commissioning a ₹3.5 Crore 128-slice CT scanner or 1.5T MRI machine, the corporate hospital pays the 70% delivery tranche but indefinitely withholds the final ₹50L–₹70L Final Acceptance Test (FAT) sign-off, alleging trivial software bugs or cosmetic casing blemishes while scanning 40+ paid patients daily.",
    statutoryExposure:
      "Under Section 41 and Section 42 of the Sale of Goods Act, 1930, when a buyer performs any act in relation to goods which is inconsistent with the ownership of the seller (such as using the MRI scanner commercially for clinical patients), the buyer is deemed by operation of law to have accepted the goods. Deemed acceptance terminates the right of rejection.",
    recoverySOP: [
      "Document commercial patient scanning logs, hospital marketing announcements, and PACS radiology billing records demonstrating routine revenue generation.",
      "Issue a formal Notice of Deemed Acceptance under Section 42 Sale of Goods Act, giving 7 days to execute the FAT certificate or release final milestone funds.",
      "File an Order XXXVII CPC Summary Suit or Section 18 MSME Samadhaan petition claiming the balance principal plus 3x RBI bank rate compound interest under MSMED Act Section 16.",
      "Apply under Order XXXVIII Rule 5 CPC for interim attachment of the hospital's TPA insurance receivables or corporate bank accounts to secure the milestone debt.",
    ],
    keyAuthority:
      "Sale of Goods Act 1930 ss.41–42 & MSMED Act 2006 ss.15–16 & Order XXXVII CPC",
  },
  {
    id: "biomedical-amc-cmc-default",
    badge: "Hospital AMC/CMC & Spare Parts",
    title: "Unpaid Annual Maintenance Invoices & ICU Life-Support Decommissioning Deadlock",
    stumblingBlock:
      "A biomedical service provider maintains 40 ventilators and anesthesia workstations under a Comprehensive Maintenance Contract (CMC). The hospital owes ₹22L in overdue quarterly service and emergency spare-parts invoices but threatens the service provider with criminal negligence and consumer court litigation if engineers withdraw maintenance or retrieve proprietary PCB circuit boards.",
    statutoryExposure:
      "Service providers are not legally obligated to provide unpaid, uncompensated maintenance when the counterparty commits a fundamental breach under Section 39 of the Indian Contract Act, 1872. Withdrawing maintenance after formal statutory cure notice does not constitute medical negligence if hospital leadership is given adequate opportunity to make alternative arrangements.",
    recoverySOP: [
      "Serve a 30-day Cure-or-Suspend Statutory Legal Notice detailing invoice aging, replacement parts ledgers, and formal notice of planned maintenance suspension.",
      "Formally notify the Chief Medical Officer, State Clinical Establishments Authority, and Hospital Medical Superintendent to insulate technicians from patient-care liability.",
      "File a Commercial Suit or invoke MSME Samadhaan for prompt adjudication of service dues and proprietary component replacement costs.",
      "Decommission cloud-connected remote diagnostics portals and service dongles in accordance with contractual software licensing termination covenants.",
    ],
    keyAuthority:
      "Indian Contract Act 1872 ss.39, 70 & Clinical Establishments Act 2010 Safe-Harbor Protocols",
  },
];

export default function MedicalEquipmentScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(SCENARIOS[0].id);
  const currentScenario = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full bg-white border border-slate-200 rounded-2xl p-5 sm:p-7 shadow-sm">
      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-2 pb-4 mb-6 border-b border-slate-200">
        {SCENARIOS.map((tab) => {
          const isActive = tab.id === activeTab;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`px-3.5 py-2 rounded-xl font-bold text-xs sm:text-sm transition-all text-left cursor-pointer ${
                isActive
                  ? "bg-[#DC2626] text-white shadow-md shadow-red-900/20"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              {tab.badge}
            </button>
          );
        })}
      </div>

      {/* Tab Content Display */}
      <div className="space-y-6">
        <div>
          <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-red-100 text-[#DC2626] border border-red-200 mb-2">
            Failure Mode &bull; {currentScenario.badge}
          </span>
          <h3 className="text-lg sm:text-xl font-black text-slate-900 leading-snug">
            {currentScenario.title}
          </h3>
        </div>

        {/* Commercial Stumbling Block */}
        <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200">
          <h4 className="text-xs font-black uppercase tracking-wider text-slate-700 mb-2">
            The Commercial Bottleneck &amp; Hospital Evasion
          </h4>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            {currentScenario.stumblingBlock}
          </p>
        </div>

        {/* Statutory Exposure */}
        <div className="p-4 sm:p-5 rounded-xl bg-amber-50/70 border border-amber-200">
          <h4 className="text-xs font-black uppercase tracking-wider text-amber-900 mb-2">
            Statutory Framework &amp; Legal Exposure
          </h4>
          <p className="text-xs sm:text-sm text-amber-950 leading-relaxed font-medium">
            {currentScenario.statutoryExposure}
          </p>
        </div>

        {/* Operational SOP */}
        <div className="p-4 sm:p-5 rounded-xl bg-emerald-50/70 border border-emerald-200">
          <h4 className="text-xs font-black uppercase tracking-wider text-emerald-900 mb-3">
            Creditor-Side SOP &amp; Enforceable Remedies
          </h4>
          <ul className="space-y-2.5 text-xs sm:text-sm text-emerald-950">
            {currentScenario.recoverySOP.map((step, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <span className="leading-relaxed">{step}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Governing Authority */}
        <div className="flex items-center justify-between flex-wrap gap-2 pt-2 border-t border-slate-100 text-xs text-slate-500">
          <span className="font-semibold text-slate-600">Governing Statutory Rule:</span>
          <span className="font-mono text-slate-800 bg-slate-100 px-2.5 py-1 rounded-md text-[11px] font-bold">
            {currentScenario.keyAuthority}
          </span>
        </div>
      </div>
    </div>
  );
}
