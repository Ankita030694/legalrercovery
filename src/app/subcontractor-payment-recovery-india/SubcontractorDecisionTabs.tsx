"use client";

import React, { useState } from "react";
import Link from "next/link";

interface SubcontractorScenario {
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

const SCENARIOS: SubcontractorScenario[] = [
  {
    id: "pay-when-paid",
    tabLabel: "Back-to-Back / Pay-When-Paid",
    title: "Main Contractor Refusing Payment Citing 'Client Has Not Paid Us Yet'",
    cause:
      "Main EPC contractors routinely insert 'back-to-back' or 'pay-when-paid' clauses in subcontract work orders and then use them as an indefinite shield. Even when your scope of work is 100% completed, joint measurements are signed, and the site is handed over, the main contractor stalls your Running Account (RA) bills claiming their own bills or variations are pending with the Principal Employer or Government department.",
    legalBasis:
      "In Zonal General Manager, Ircon International Ltd. v. Vinay Heavy Equipments, (2015) 13 SCC 680, the Supreme Court held that a main contractor cannot hide behind back-to-back clauses to deny legitimate dues to a subcontractor unless an explicit, unambiguous condition precedent shifts the risk of employer insolvency. Delhi High Court precedents further establish that 'pay-when-paid' clauses only allow a reasonable processing window—not indefinite non-payment. Moreover, if you are a registered Micro or Small Enterprise (MSE) supplying fabricated goods or distinct services, Section 15 of the MSMED Act, 2006 caps credit at 45 days regardless of any back-to-back clause.",
    steps: [
      {
        step: "Audit Principal Employer Billing Status",
        description:
          "Ascertain whether the Main Contractor has already billed the Principal Employer for your executed package or received mobilization/milestone advances against your work.",
      },
      {
        step: "Rebut Indefinite 'Pay-When-Paid' Shield",
        description:
          "Serve a formal advocate notice citing Ircon International (2015) 13 SCC 680 and Section 73 Contract Act, putting the Main Contractor on strict 15-day notice that back-to-back clauses do not extinguish primary liability.",
      },
      {
        step: "Put Principal Employer on Notice / Invoke Section 9",
        description:
          "Where the Main Contractor is siphoning project payouts without paying subcontractors, seek interim attachment of project receivables under Section 9 of the Arbitration Act or Order 38 Rule 5 CPC.",
      },
    ],
    statutoryRule: "Ircon International (2015) 13 SCC 680 & Sec 73 Contract Act",
  },
  {
    id: "ra-bill-uncertified",
    tabLabel: "RA Bill Not Certified",
    title: "Site Engineer Delaying Joint Measurement (JMR) or Refusing to Certify RA Bills",
    cause:
      "To prevent the 45-day MSME payment clock or contractual payment milestone from starting, the Main Contractor's Project Manager or Quantity Surveyor (QS) deliberately sits on your submitted Running Account (RA) bill, refuses to sign the Joint Measurement Sheet (JMR), or raises frivolous quality/snag objections months after taking possession of the executed work.",
    legalBasis:
      "Under the Explanation to Section 2(b) of the MSMED Act, 2006, if a buyer fails to raise a specific written objection regarding the quality or measurement of goods/services within 15 days of delivery or bill submission, the date of actual delivery/rendering is deemed the 'day of acceptance'. Furthermore, if the Main Contractor has already deducted 1% or 2% TDS under Section 194C of the Income-tax Act on your invoice (visible in your Form 26AS / AIS), Indian courts treat that tax deduction as an admission of bill booking.",
    steps: [
      {
        step: "Dispatch RA Bill & JMR via Registered Post + Email",
        description:
          "Stop relying solely on physical site hand-delivery. Email the RA bill, measurement sheets, and site photos to the Main Contractor's official project and head-office IDs, and send hard copies via Registered Post (RPAD).",
      },
      {
        step: "Download Form 26AS / AIS & GSTR-2B Proof",
        description:
          "Check if the Main Contractor deducted Section 194C TDS or availed Input Tax Credit (ITC) on your GST invoice. Claiming GST credit while refusing to certify the bill destroys their defence in court.",
      },
      {
        step: "Trigger Deemed Acceptance Legal Notice",
        description:
          "Serve a statutory demand notice declaring that since no written defect memo was issued within 15 days, the RA bill stands deemed accepted under law.",
      },
    ],
    statutoryRule: "Sec 2(b) Explanation MSMED Act & Sec 194C TDS Admission",
  },
  {
    id: "retention-withheld",
    tabLabel: "Retention Money Stuck",
    title: "5%–10% Retention Money & Security Deposit Withheld After Defect Liability Period (DLP)",
    cause:
      "Construction and MEP subcontracts routinely deduct 5% to 10% from every RA bill as 'Retention Money' or 'Performance Security', promising 50% release upon Virtual Completion and 50% after the 12-month Defect Liability Period (DLP). Once the subcontractor demobilizes from the site, the Main Contractor stops answering calls or fabricates back-charges for site cleaning, electricity, or third-party damages to forfeit the retention pool.",
    legalBasis:
      "Under Section 73 and Section 74 of the Indian Contract Act, 1872 (as settled by the Supreme Court in Kailash Nath Associates v. DDA, (2015) 4 SCC 136), a Main Contractor cannot forfeit retention money or deduct liquidated damages without proving actual quantifiable loss and issuing contemporaneous breach notices during the DLP. Once the DLP expires without unrectified defect notices, withholding retention money is an actionable breach of contract.",
    steps: [
      {
        step: "Compile Handover & DLP Expiry Trail",
        description:
          "Gather the Virtual Completion Certificate, handover emails, or proof that the building/facility has been occupied and operational past the 12-month or 24-month DLP window.",
      },
      {
        step: "Challenge Retrospective Back-Charges",
        description:
          "Demand itemized proof and third-party invoices for any alleged back-charges (housekeeping, power, damages) that were never communicated during active site execution.",
      },
      {
        step: "Serve Final Retention Release Demand Notice",
        description:
          "Issue a 15-day advocate notice demanding 100% release of withheld retention funds plus 18% commercial interest, failing which summary recovery or arbitration will be initiated.",
      },
    ],
    statutoryRule: "Sec 73 & 74 Indian Contract Act • Kailash Nath (2015) 4 SCC 136",
  },
  {
    id: "extra-work-variations",
    tabLabel: "Extra Work / No Amendment",
    title: "Extra Scope / Variation Items Executed on Site Instructions Without Formal WO Amendment",
    cause:
      "During fast-track construction, the Main Contractor's Resident Engineer or Project Director instructs the subcontractor via WhatsApp, site diary, or email to execute additional quantities, design changes, or extra items, promising 'we will regularize the Work Order amendment later'. At final billing, the head office refuses to pay for any item exceeding the original BOQ.",
    legalBasis:
      "Section 70 of the Indian Contract Act, 1872 codifies the doctrine of Quantum Meruit ('as much as earned'). In Food Corporation of India v. Vikas Majdoor Kamdar Sahkari Mandli Ltd., (2007) 13 SCC 544, the Supreme Court ruled that where a party executes extra work not intending to do so gratuitously, and the counterparty accepts and enjoys the benefit of that work, the recipient is legally bound to compensate the contractor at fair market/BOQ rates even without a formal written addendum.",
    steps: [
      {
        step: "Preserve Site Emails, WhatsApp & Drawings",
        description:
          "Export all WhatsApp chats with the Site Engineer/PM, revised AutoCAD/GFC drawings issued by the main contractor, and site hindrance/instruction registers under Section 63 BSA.",
      },
      {
        step: "Quantify Extra Work at Contractual / DSR Rates",
        description:
          "Prepare a separate Deviation / Variation Statement referencing the exact site instruction dates and calculating rates based on existing BOQ items or CPWD/State DSR rates.",
      },
      {
        step: "Serve Section 70 Quantum Meruit Demand Notice",
        description:
          "Serve an advocate legal notice invoking Section 70 of the Contract Act, putting the Main Contractor on notice that unjust enrichment from unbilled variation work will be recovered with interest.",
      },
    ],
    statutoryRule: "Section 70 Indian Contract Act (Quantum Meruit) & (2007) 13 SCC 544",
  },
  {
    id: "msme-vs-works-contract",
    tabLabel: "MSME ODR vs Works Contract",
    title: "Using Udyam MSME ODR & Section 43B(h) vs Navigating the 'Works Contract' Objection",
    cause:
      "Many subcontractors hold Udyam Registration as Micro or Small Enterprises (MSEs). However, when they approach the MSME Facilitation Council (MSEFC / ODR Portal), corporate main contractors cite High Court judgments arguing that a composite 'Works Contract' (civil construction + labour + material) falls outside the MSMED Act, which covers 'goods' and 'services'.",
    legalBasis:
      "To defeat the 'works contract' technicality, subcontractors must examine their Purchase Orders/Work Orders: (1) Separate POs for supply of equipment/materials (HVAC, electrical panels, structural steel, UPVC windows) and separate WOs for installation/testing are 100% covered under Sections 15–18 of the MSMED Act and Section 43B(h) of the Income-tax Act; (2) Even where the contract is a composite civil works contract, the subcontractor has an ironclad parallel remedy via Commercial Court Summary Suit, Section 21 Arbitration, or IBC Section 9 (if dues ≥ ₹1 Crore).",
    steps: [
      {
        step: "Segregate Supply & Service Invoices",
        description:
          "Check whether your invoices carry HSN codes (supply of goods) or SAC codes (pure services) versus composite works contract HSN/SAC, and ensure your Udyam number is printed on every bill.",
      },
      {
        step: "Leverage Section 43B(h) Tax Disallowance Notice",
        description:
          "Put the Main Contractor's CFO and Statutory Auditor on notice that unpaid MSE supply/service bills beyond 45 days face 100% tax disallowance under Section 43B(h) in Form 3CD Clause 22.",
      },
      {
        step: "File on MSME ODR Portal or Invoke Arbitration",
        description:
          "For distinct supply/service claims, file on the MSME ODR Portal for 3× RBI compound interest (~20.25% p.a.). For composite civil works contracts, issue a dual-track Section 21 Arbitration + Civil Recovery Notice.",
      },
    ],
    statutoryRule: "Sections 15–18 MSMED Act, 2006 & Section 43B(h) Income-tax Act",
  },
];

export default function SubcontractorDecisionTabs() {
  const [activeTab, setActiveTab] = useState<string>(SCENARIOS[0].id);

  const selectedScenario = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 shadow-sm p-4 sm:p-6 md:p-8 space-y-6">
      <div>
        <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-slate-800 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
          Archetype G1 Interactive Scenario &amp; Route Selector
        </span>
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 mt-2">
          Select Your Specific Subcontractor Payment Bottleneck
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 mt-1">
          Click any construction or B2B subcontract dispute scenario below to view the contractor&apos;s excuse, the exact Supreme Court / statutory rebuttal, and your immediate 3-step recovery action:
        </p>
      </div>

      {/* ARIA Tablist */}
      <div
        role="tablist"
        aria-label="Subcontractor Payment Dispute Scenarios"
        className="flex flex-wrap gap-2 border-b border-slate-200 pb-3"
      >
        {SCENARIOS.map((scenario) => {
          const isSelected = activeTab === scenario.id;
          return (
            <button
              key={scenario.id}
              role="tab"
              id={`tab-${scenario.id}`}
              aria-selected={isSelected}
              aria-controls={`panel-${scenario.id}`}
              onClick={() => setActiveTab(scenario.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                isSelected
                  ? "bg-[#404447] text-white shadow-xs"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              {scenario.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Tab Panel */}
      <div
        role="tabpanel"
        id={`panel-${selectedScenario.id}`}
        aria-labelledby={`tab-${selectedScenario.id}`}
        className="space-y-5 focus:outline-none"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
          <h4 className="text-base sm:text-lg md:text-xl font-extrabold text-slate-900">
            {selectedScenario.title}
          </h4>
          <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200 shrink-0">
            {selectedScenario.statutoryRule}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500 block mb-1">
              Main Contractor&apos;s Tactic &amp; Bottleneck
            </span>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {selectedScenario.cause}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-700 block mb-1">
              Statutory Rebuttal &amp; Judicial Precedent
            </span>
            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
              {selectedScenario.legalBasis}
            </p>
          </div>
        </div>

        <div className="space-y-3 pt-2">
          <h5 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-800">
            3-Step Legal Execution Plan For This Scenario
          </h5>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {selectedScenario.steps.map((s, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <span className="w-6 h-6 rounded-full bg-[#404447] text-white font-bold text-xs flex items-center justify-center mb-2">
                    {idx + 1}
                  </span>
                  <strong className="text-xs sm:text-sm text-slate-900 font-bold block mb-1">
                    {s.step}
                  </strong>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {s.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-amber-950">
          <span>
            <strong>Want to calculate statutory interest on your overdue RA bills?</strong> Use our free compound interest tool before serving your legal notice.
          </span>
          <Link
            href="/tools/msme-delayed-payment-interest-calculator"
            className="text-red-700 hover:text-red-900 font-bold underline shrink-0"
          >
            Calculate 3× RBI Interest →
          </Link>
        </div>
      </div>
    </div>
  );
}
