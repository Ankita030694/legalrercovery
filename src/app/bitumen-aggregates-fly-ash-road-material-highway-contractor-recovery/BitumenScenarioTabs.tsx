"use client";

import React, { useState } from "react";

interface ScenarioTab {
  id: string;
  tabLabel: string;
  title: string;
  cause: string;
  legalBasis: string;
  steps: {
    step: string;
    description: string;
  }[];
  statutoryRule: string;
}

const SCENARIOS: ScenarioTab[] = [
  {
    id: "camp-demobilization",
    tabLabel: "Hot-Mix Camp Demobilizing",
    title: "Out-of-State EPC Sub-Contractor Dismantling Hot-Mix & WMM Plant Overnight",
    cause:
      "Once a 40-km NHAI or State PWD highway stretch reaches bituminous wearing course completion, an out-of-state sub-contractor begins unbolting its hot-mix drum plant, crusher feeders, and diesel gensets to shift to a new state—leaving ₹40 Lakh to ₹1.5 Cr in unpaid crusher aggregate and VG-30/VG-40 bitumen bills behind.",
    legalBasis:
      "Under Order XXXVIII Rule 5 of the Code of Civil Procedure, 1908 (Attachment Before Judgment), when a defendant is about to dispose of or remove the whole or any part of its property from the local limits of the court's jurisdiction with intent to obstruct or delay execution of a decree, the Commercial Court can grant an urgent ex-parte conditional attachment of the hot-mix plant, tipper fleet, or escrow receivables. Critically, under the Supreme Court's ruling in Patil Automation Pvt. Ltd. v. Rakheja Engineers (2022), suits genuinely contemplating urgent interim relief are exempt from mandatory pre-institution Section 12A mediation.",
    steps: [
      {
        step: "Capture Geo-Tagged Dismantling Proof",
        description:
          "Photograph crane mobilization, dismantled batching silos, and trailer loading at the site camp with timestamps and witness affidavits to establish imminent removal from jurisdiction.",
      },
      {
        step: "File Commercial Suit + Order XXXVIII Rule 5 IA",
        description:
          "Move the District Commercial Court immediately seeking exemption from Section 12A mediation on grounds of urgent asset dissipation and pray for attachment of camp machinery or bank security.",
      },
      {
        step: "Serve Court Attachment & Police Aid Order at Site",
        description:
          "Execute the court bailiff attachment warrant at the highway camp before trailers cross the district border, forcing the contractor to furnish a bank guarantee or settle.",
      },
    ],
    statutoryRule: "CPC Order XXXVIII Rule 5 & Commercial Courts Act s.12A Urgent Relief",
  },
  {
    id: "ravanna-weighbridge-proof",
    tabLabel: "Unsigned Aggregate Challans",
    title: "Contractor Disputes Tipper Quantity Citing 'Unsigned Site Slips' & Moisture Loss",
    cause:
      "Site supervisors at highway camps routinely refuse to return signed carbon copies of tipper delivery challans, or later claim 15–20% 'moisture/void deduction' on 10mm/20mm aggregates, GSB, WMM, and pond ash after the material has already been rolled and compacted into the carriageway.",
    legalBasis:
      "Stone crusher aggregates and fly-ash moved across Indian highways are tracked by statutory State Mining Department e-Ravanna / Royalty Transit Passes (containing vehicle number, mineral grade, net metric tonnage, and destination geo-coordinates), corroborated by Dharamkanta weighbridge slips, FASTag/GPS logs, and GST E-Way Bill Part-B. Under Section 42 of the Sale of Goods Act, 1930, once the EPC contractor lays, compacts, and bills the aggregates in NHAI/PWD Running Account (RA) bills, they lose all legal right to dispute quantity or quality.",
    steps: [
      {
        step: "Correlate e-Ravanna & E-Way Bill Part-B Logs",
        description:
          "Export state mining portal e-Ravanna transit passes alongside GST E-Way Bill Part-B vehicle numbers and certify them under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023.",
      },
      {
        step: "Pair With Dharamkanta Slips & Weighbridge Ledger",
        description:
          "Attach gross/tare/net weighment slips and daily summary sheets accepted via WhatsApp or email by the contractor's site storekeeper.",
      },
      {
        step: "Pinpoint NHAI/PWD RA Bill Consumption",
        description:
          "Serve a statutory notice demonstrating that the contractor has already claimed measurement and payment for the laid WMM/DBM/BC layers from the principal employer.",
      },
    ],
    statutoryRule: "Mining e-Ravanna, Sale of Goods Act s.42 & BSA 2023 s.63",
  },
  {
    id: "nhai-escrow-garnishee",
    tabLabel: "NHAI / Escrow Garnishee",
    title: "Intercepting Final Annuity, Retention Release & HAM Escrow Before Payout",
    cause:
      "Sub-contractors often plead insolvency locally while quietly awaiting a ₹3 Cr to ₹15 Cr final milestone bill, retention release, or HAM escrow disbursement from the concessionaire, NHAI, MoRTH, or State PWD.",
    legalBasis:
      "Under Order XXI Rule 46 / Order XXXVIII Rule 5 read with Section 151 CPC (and Section 9 of the Arbitration & Conciliation Act, 1996 where an arbitration clause exists), a creditor can seek a prohibitory garnishee order restraining the principal employer, concessionaire, or escrow bank from releasing earmarked contractor payables up to the disputed invoice value.",
    steps: [
      {
        step: "Identify Principal Employer & Escrow Account",
        description:
          "Trace the exact NHAI PIU, State PWD division, or SPV concessionaire holding the contractor's pending RA bill or 5% retention money.",
      },
      {
        step: "Issue Pre-Suit Legal Notice to Contractor & Copy Principal",
        description:
          "Put the principal contractor and project authority on formal notice of the unpaid material lien and impending court attachment application.",
      },
      {
        step: "Seek Pro-Tem Restraint / Garnishee Deposit in Court",
        description:
          "Pray for a direction requiring the concessionaire or bank to deposit the disputed ₹90 Lakh sum in court rather than disbursing it to the defaulting sub-contractor.",
      },
    ],
    statutoryRule: "CPC Order XXXVIII Rule 5 / Order XXI Rule 46 & Arbitration Act s.9",
  },
  {
    id: "bitumen-viscosity-debit",
    tabLabel: "VG-30/VG-40 Bitumen Dispute",
    title: "Contractor Withholds Bitumen Tanker Payment Claiming 'Late Viscosity / Penetration Variance'",
    cause:
      "After decanting heated VG-30/VG-40 bulk bitumen or cationic emulsion tankers into site storage tanks and mixing it with hot aggregates, the contractor raises a belated debit note claiming penetration or softening-point variance without any joint sample seal.",
    legalBasis:
      "Under IS 73:2013 (Paving Bitumen Specifications) and standard refinery/importer supply terms, quality objections must be raised prior to decanting via joint sealed sampling from the tanker manifold. Once heated bulk bitumen is pumped into the contractor's storage tank and mixed with existing stock, contamination or overheating in the contractor's own hot-mix drum cannot be attributed to the supplier—triggering Section 42 Sale of Goods Act deemed acceptance and defeating any Mobilox 'pre-existing dispute' defense.",
    steps: [
      {
        step: "Produce Refinery / Importer Batch COA & Seal Logs",
        description:
          "Compile the IOCL/BPCL/HPCL or NABL-tested import batch Certificate of Analysis (COA), tanker dip-rod calibration, and intact manifold seal numbers.",
      },
      {
        step: "Rebut Post-Decanting Contamination Under IS 73:2013",
        description:
          "Demonstrate that the contractor signed the tanker unloading slip without drawing a joint referee sample before pumping into their own heated tank.",
      },
      {
        step: "Trigger MSMED 3x RBI Interest & s.43B(h) Tax Disallowance",
        description:
          "If your bitumen processing or trading unit holds Udyam (Micro/Small) status, serve a 45-day statutory demand triggering 3x RBI compound interest and Section 43B(h) auditor reporting.",
      },
    ],
    statutoryRule: "IS 73:2013, Sale of Goods Act s.42 & MSMED Act s.15–16 / s.43B(h)",
  },
];

export default function BitumenScenarioTabs() {
  const [activeTabId, setActiveTabId] = useState<string>(SCENARIOS[0].id);
  const activeScenario = SCENARIOS.find((s) => s.id === activeTabId) || SCENARIOS[0];

  return (
    <div className="space-y-5">
      {/* Tab Buttons */}
      <div
        role="tablist"
        aria-label="Highway Material Contractor Default Scenarios"
        className="flex flex-wrap gap-2"
      >
        {SCENARIOS.map((scenario) => {
          const isActive = scenario.id === activeTabId;
          return (
            <button
              key={scenario.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveTabId(scenario.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                isActive
                  ? "bg-[#DC2626] text-white shadow-md shadow-red-900/20"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200"
              }`}
            >
              {scenario.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Tab Content */}
      <div
        role="tabpanel"
        className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-5"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-4">
          <h3 className="text-base sm:text-lg font-black text-slate-900">
            {activeScenario.title}
          </h3>
          <span className="inline-block shrink-0 text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-red-50 text-[#DC2626] border border-red-200">
            {activeScenario.statutoryRule}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white border border-slate-200 rounded-xl p-4">
            <p className="text-[11px] font-extrabold uppercase tracking-wider text-amber-700 mb-1.5">
              Contractor&apos;s Evasion Tactic
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {activeScenario.cause}
            </p>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl p-4">
            <p className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-700 mb-1.5">
              Creditor Statutory Counter-Strike
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {activeScenario.legalBasis}
            </p>
          </div>
        </div>

        <div>
          <p className="text-xs font-black uppercase tracking-wider text-slate-900 mb-3">
            3-Step Operational Execution
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {activeScenario.steps.map((item, idx) => (
              <div
                key={item.step}
                className="bg-white border border-slate-200 rounded-xl p-4 flex flex-col gap-1.5"
              >
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#DC2626] text-white text-xs font-black">
                  {idx + 1}
                </span>
                <p className="text-xs sm:text-sm font-bold text-slate-900">{item.step}</p>
                <p className="text-xs text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
