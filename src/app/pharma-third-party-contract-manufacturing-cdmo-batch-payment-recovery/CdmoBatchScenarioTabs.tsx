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
    id: "refusal-70-balance",
    tabLabel: "70% Balance Refusal",
    title: "PCD / Marketing Company Refuses to Pay 70% Balance Before Dispatch",
    cause:
      "The marketing company pays a 30% advance to initiate tablet compression, capsule filling, or liquid bottling in Baddi, Haridwar, or Changodar. Once the batch is packed in custom brand-printed alu-alu foils and cartons, the buyer stalls payment of the remaining 70% citing market slowdown or cash-flow crunch.",
    legalBasis:
      "Under Section 44 of the Sale of Goods Act, 1930, when the manufacturer notifies the buyer that ascertained, custom-manufactured goods are ready for delivery and the buyer neglects or refuses to take delivery within a reasonable time, the buyer is liable for any loss occasioned by their refusal plus a reasonable charge for the care, quarantine storage, and custody of the goods. Under Section 55(1), where property in bespoke goods has passed or been appropriated to the contract, the manufacturer can sue for the full price.",
    steps: [
      {
        step: "Serve Formal Notice of Readiness & s.44 Storage Charge Clock",
        description:
          "Issue a written Notice of Batch Readiness attaching the signed Certificate of Analysis (COA), Batch Manufacturing Record (BMR) summary, and Proforma/Tax Invoice, putting the buyer on formal notice that daily warehouse/quarantine storage charges are accruing.",
      },
      {
        step: "Trigger Section 43B(h) & MSMED Act s.15–18 Demand",
        description:
          "If your unit holds a Micro or Small Udyam Registration, serve a formal Advocate Demand Notice warning of Income Tax Section 43B(h) expense disallowance at financial year-end and 3x RBI Bank Rate compound interest under Section 16.",
      },
      {
        step: "Present Security Cheque After 7-Day Intimation",
        description:
          "Where an undated security cheque was collected under the Manufacturing Agreement, issue a 7-day crystallization notice before presentation and initiate Section 138 NI Act proceedings upon dishonour.",
      },
    ],
    statutoryRule:
      "Sale of Goods Act s.44 (Buyer Refusal Liability) + MSMED Act ss.15–18 + Income Tax Act s.43B(h)",
  },
  {
    id: "sham-coa-rejection",
    tabLabel: "Sham COA Rejection",
    title: "Buyer Raises Belated Quality Excuses Despite Approved COA",
    cause:
      "Weeks after dispatch readiness or partial delivery, the PCD marketing firm alleges colour variation, strip-seal defects, or dissolution failure without an independent NABL/Form 39 lab report, solely to demand a 25%–40% arbitrary discount.",
    legalBasis:
      "Under Section 42 of the Sale of Goods Act, 1930, a buyer is deemed to have accepted goods when they intimate acceptance, act inconsistently with the seller's ownership, or retain goods beyond a reasonable time without intimating rejection. Where the contract mandates joint inspection or acceptance against an in-house QC Certificate of Analysis (COA) under Schedule M Good Manufacturing Practices, unsubstantiated verbal objections cannot defeat an Order XXXVII CPC summary suit or MSEFC claim.",
    steps: [
      {
        step: "Lock Control & Retention Samples Under GLP Protocol",
        description:
          "Preserve sealed control samples from the exact batch in your QA stability chamber with timestamped photographs and QA head affidavits under BSA 2023 Section 63.",
      },
      {
        step: "Demand Independent Form 39 / NABL Lab Re-Testing at Buyer's Cost",
        description:
          "In your Advocate Reply/Notice, call upon the buyer to submit sealed intact strips for joint testing at a CDSCO-approved or NABL-accredited laboratory within 7 days, failing which the quality objection stands waived.",
      },
      {
        step: "Establish Deemed Acceptance Under Section 42 SoGA",
        description:
          "Compile email artwork approvals, dispatch instructions, and GSTR-2B ITC availment (if invoice was raised) to prove unconditional commercial acceptance.",
      },
    ],
    statutoryRule:
      "Sale of Goods Act ss.41–42 (Deemed Acceptance) + Drugs & Cosmetics Rules Schedule M (QA Control Sample)",
  },
  {
    id: "custom-foil-expiry",
    tabLabel: "Custom Foil & Expiry Trap",
    title: "Custom Brand-Printed Foil/Carton Stock Ticking Toward Shelf-Life Expiry",
    cause:
      "Unlike generic commodities, third-party pharma batches bear the marketing company's registered trademark, brand name, MRP, and marketing-company address on primary alu-alu/blister foils and secondary cartons. The manufacturer cannot legally re-label or sell the batch to another buyer without violating the Drugs and Cosmetics Act, 1940 and Trade Marks Act, 1999.",
    legalBasis:
      "Re-labelling or erasing batch/brand details constitutes 'misbranding' under Section 17 of the Drugs and Cosmetics Act, 1940, while unauthorized sale of branded stock infringes Section 29 of the Trade Marks Act, 1999. Because the goods are bespoke and non-resalable, Indian Contract Act Section 73 entitles the manufacturer to recover the full contract price, unamortized printed cylinder/foil inventory costs, and statutory bio-medical/expired drug destruction charges.",
    steps: [
      {
        step: "Quantify Shelf-Life Erosion & Cylinder/Foil Sunk Costs",
        description:
          "Document the 24-month/36-month expiry date printed on the batch and itemize unused custom-printed PVC/alu foils, cylinders, and mono-cartons procured exclusively for the buyer's PO.",
      },
      {
        step: "Serve Pre-Destruction Indemnity & Price Recovery Notice",
        description:
          "Notify the buyer that unless 70% balance + storage is cleared within 15 days, the manufacturer will seek recovery of 100% batch value plus statutory BMW/incineration disposal costs at the buyer's sole risk.",
      },
      {
        step: "File Urgent MSEFC / Commercial Court Action Before Expiry",
        description:
          "Initiate MSME Samadhaan or Commercial Court Order XXXVII proceedings immediately so the claim is crystallized while the batch still holds remaining shelf life.",
      },
    ],
    statutoryRule:
      "Drugs & Cosmetics Act s.17 (Misbranding Bar) + Trade Marks Act s.29 + Indian Contract Act s.73 (Bespoke Loss)",
  },
  {
    id: "loan-license-dispute",
    tabLabel: "Loan-License & Destruction",
    title: "Loan-License Principal Defaults on Conversion Charges & Destruction",
    cause:
      "Under a Form 25A / Form 28A Loan License arrangement, the marketing company owns the product permission and brand, while the host factory provides premises, machinery, and technical staff. When the principal defaults on conversion charges and abandons near-expiry stock in the host's warehouse, the host factory faces State Drug Controller compliance exposure.",
    legalBasis:
      "Under Drugs and Cosmetics Rules (Rule 69A / Rule 75A), the loan licensee and host manufacturer carry joint regulatory accountability for batch records and safe disposal of expired formulations. Contractually, however, conversion charges and statutory disposal costs remain a pure commercial debt recoverable under Order XXXVII CPC, MSMED Act Section 18, and Contract Act Section 170 (bailee lien on raw materials/packaging supplied by the licensee until conversion charges are paid).",
    steps: [
      {
        step: "Exercise Contract Act s.170 Bailee Lien on Packaging/RM",
        description:
          "Assert a lawful particular lien over unconsumed raw materials, APIs, and printed packaging supplied by the loan licensee until overdue conversion and testing charges are settled.",
      },
      {
        step: "Notify State Drug Controller / Licensing Authority if Stock Expires",
        description:
          "Maintain transparent quarantine logs and formally intimate the defaulting loan licensee before initiating witnessed destruction under Pollution Control / BMW Rules so regulatory liability does not fall on the host unit.",
      },
      {
        step: "Enforce Conversion Invoice Recovery via MSME / Summary Suit",
        description:
          "Separate statutory regulatory compliance from commercial recovery by filing a dedicated claim for conversion charges, stability testing fees, and destruction expenses.",
      },
    ],
    statutoryRule:
      "Indian Contract Act s.170 (Bailee Lien) + Drugs & Cosmetics Rules 69A/75A + Order XXXVII CPC",
  },
];

export default function CdmoBatchScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(SCENARIOS[0].id);

  const currentScenario = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full">
      {/* Tab Selector Bar */}
      <div
        role="tablist"
        aria-label="CDMO Unlifted Batch Failure Scenarios"
        className="flex flex-wrap gap-2 mb-6"
      >
        {SCENARIOS.map((scenario) => {
          const isActive = scenario.id === activeTab;
          return (
            <button
              key={scenario.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveTab(scenario.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer border ${
                isActive
                  ? "bg-[#DC2626] text-white border-[#DC2626] shadow-md shadow-red-900/20"
                  : "bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200"
              }`}
            >
              {scenario.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Scenario Card */}
      <div
        role="tabpanel"
        className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 md:p-7 space-y-5"
      >
        <div>
          <span className="inline-block px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-red-100 text-[#DC2626] mb-2">
            Creditor Action Protocol
          </span>
          <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 leading-snug">
            {currentScenario.title}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white border border-slate-200 rounded-xl p-4">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
              Commercial Failure Mode
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {currentScenario.cause}
            </p>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl p-4">
            <p className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-1.5">
              Statutory &amp; Contractual Basis
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {currentScenario.legalBasis}
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-900">
            Immediate 3-Step Execution Checklist
          </p>
          <div className="grid grid-cols-1 gap-3">
            {currentScenario.steps.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 bg-white border border-slate-200 rounded-xl p-3.5"
              >
                <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <div>
                  <p className="text-xs sm:text-sm font-bold text-slate-900 mb-0.5">{item.step}</p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-slate-900 text-slate-100 rounded-xl p-3.5 text-xs font-medium flex flex-wrap items-center gap-2">
          <span className="text-red-400 font-bold uppercase tracking-wider">Governing Law:</span>
          <span>{currentScenario.statutoryRule}</span>
        </div>
      </div>
    </div>
  );
}
