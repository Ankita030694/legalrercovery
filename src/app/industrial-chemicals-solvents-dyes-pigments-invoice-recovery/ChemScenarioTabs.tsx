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
    id: "commingled-tank-purity",
    tabLabel: "Post-Decant Purity Excuse",
    title: "20 KL Solvent Tanker Pumped Into Buyer's Storage Tank — 'Water Contamination' Alleged 45 Days Later",
    cause:
      "A specialty solvent or acid distributor in Ankleshwar, Vapi, Tarapur, or Dahej delivers a 20 KL road tanker. The buyer's plant QC draws top and bottom dip samples, breaks the valve seal, and pumps the solvent into a half-full underground or vertical storage tank containing older residual stock. Six weeks later, when the 45-day credit period expires, the buyer emails claiming high moisture, low assay, or off-spec boiling range.",
    legalBasis:
      "Under Section 42 of the Sale of Goods Act, 1930, breaking the tanker valve seal and commingling liquid cargo into an existing plant storage tank is an act inconsistent with the seller's ownership—constituting irreversible statutory acceptance. Once commingled, chemical identity is destroyed; the buyer cannot prove whether moisture or impurities originated from their own uncleaned tank lines, prior vendor stock, or atmospheric condensation. Under the Supreme Court's Mobilox Innovations ruling, uncorroborated post-decanting lab emails sent after credit expiry are 'moonshine defenses' incapable of blocking IBC Section 9 or Order XXXVII summary recovery.",
    steps: [
      {
        step: "Lock Pre-Decanting Valve-Seal Sign-Off & COA",
        description:
          "Compile the Certificate of Analysis (COA), batch GC/HPLC chromatogram, weighbridge slip, GST E-Way Bill Part-B, and the gate-signed tanker unloading slip showing unbroken seal numbers prior to decanting.",
      },
      {
        step: "Invoke Sealed Retention Sample Protocol",
        description:
          "Cite your dispatch retention sample (drawn at factory loading and sealed with tamper-evident cap) and demand joint NABL re-testing of the unopened retention bottle rather than contaminated buyer tank samples.",
      },
      {
        step: "Serve Section 42 & Order XXXVII Rebuttal Notice",
        description:
          "Dispatch an advocate-vetted notice placing on record the 45-day silence, commingling estoppel, and MSMED s.16 / Order XXXVII CPC summary liability before the buyer fabricates a paper trail.",
      },
    ],
    statutoryRule: "Sale of Goods Act, 1930 s.42 & IBC 2016 s.8 / Mobilox Doctrine",
  },
  {
    id: "drum-ibc-deposit-dispute",
    tabLabel: "Drum / IBC Tote Set-Off",
    title: "Buyer Withholds ₹12 Lakh Invoice Citing Returnable 200L HDPE Drums & IBC Tote Deposit Set-Off",
    cause:
      "Industrial resin, surfactant, and acid suppliers across Bhiwandi, Thane-Belapur, and Bawana supply chemicals in returnable 200L MS/HDPE drums or 1,000L IBC cages. Defaulting buyers retain empty drums for months, resell them to scrap dealers, and arbitrarily deduct inflated 'drum handling' or 'damaged pallet' debit notes against principal chemical invoices.",
    legalBasis:
      "Under Sections 73 and 74 of the Indian Contract Act, 1872, a buyer cannot unilaterally set off unliquidated or fabricated packaging deductions against an admitted, GST-reported supply debt. Where the invoice or supply agreement fixes a refundable drum/IBC deposit or 30-day return window, failure to return intact containers entitles the supplier to recover both the chemical invoice principal and the stipulated container replacement value.",
    steps: [
      {
        step: "Reconcile LR Challans & Empty-Return Gate Passes",
        description:
          "Build a container-movement ledger matching outward E-Way Bills against signed empty-drum return challans to prove exact unreturned drum/IBC counts.",
      },
      {
        step: "Neutralize Arbitrary Debit Notes Under GST & Contract Law",
        description:
          "Verify whether the buyer ever issued a valid GST Credit/Debit Note within statutory timelines; unaccepted unilateral debit notes hold zero evidentiary weight in Commercial Courts.",
      },
      {
        step: "Claim Combined Principal + Container Replacement Value",
        description:
          "Include both the overdue chemical invoice amount and the forfeited drum/IBC deposit schedule in your Order XXXVII or MSME Samadhaan claim.",
      },
    ],
    statutoryRule: "Indian Contract Act, 1872 s.73–74 & Order XXXVII CPC",
  },
  {
    id: "dye-pigment-shade-excuse",
    tabLabel: "Dye / Pigment Shade Claim",
    title: "Textile Dye or Paint Pigment Consumed in Production — 'Shade Variation' Claimed After 60 Days",
    cause:
      "Dye, pigment, and masterbatch suppliers serving Surat, Tirupur, Ahmedabad, and Panipat industrial belts face buyers who approve lab-dips, consume 500 kg–5 MT of reactive dyes or titanium dioxide across full production runs, ship finished fabric or coatings to end-customers, and then withhold payment alleging 'delta-E shade variation' or 'poor wash fastness'.",
    legalBasis:
      "Section 41 and Section 42 of the Sale of Goods Act, 1930 give the buyer a reasonable opportunity to inspect bulk lots against the approved lab-dip standard prior to bulk consumption. Once the factory mixes the dye or pigment with binders, auxiliaries, and third-party substrates in commercial production, it exercises irreversible dominion over the goods and forfeits the right to reject or withhold the invoice price.",
    steps: [
      {
        step: "Exhibit Approved Lab-Dip & Batch COA Sign-Off",
        description:
          "Attach WhatsApp/email approvals of the pre-dispatch lab-dip, spectrophotometer delta-E reading, and batch-wise Certificate of Analysis.",
      },
      {
        step: "Establish Consumption & Process-Variable Estoppel",
        description:
          "Highlight that dye fastness depends on buyer-controlled liquor ratio, pH, curing temperature, and water hardness—making post-production shade claims legally untenable.",
      },
      {
        step: "Trigger MSMED 45-Day Cap & Section 43B(h) Tax Leverage",
        description:
          "For Udyam-registered dye/pigment manufacturers, invoke Section 15–16 MSMED Act (3x RBI compound interest) and Income Tax Section 43B(h) disallowance notice.",
      },
    ],
    statutoryRule: "Sale of Goods Act, 1930 s.41–42 & MSMED Act, 2006 s.15–18",
  },
  {
    id: "msme-43bh-ibc-escalation",
    tabLabel: "MSME 43B(h) + IBC s.8",
    title: "Multi-Invoice Factory Default (₹1 Cr+): Combining Section 43B(h) Audit Pressure & IBC Form 3",
    cause:
      "Large chemical-consuming factories (pharma APIs, agrochemical formulators, paint plants, and textile mills) routinely stretch mid-size chemical and solvent suppliers to 120–180 days, using working capital of MSME vendors as interest-free credit while claiming full tax deductions on unpaid purchase bills.",
    legalBasis:
      "Under Section 43B(h) of the Income Tax Act, 1961, any sum payable by a buyer to an Udyam-registered Micro or Small enterprise beyond the 45-day MSMED Act s.15 cap is disallowed as a business expense in that financial year—triggering immediate ~25%–30% corporate tax liability plus audit qualification. Where aggregate admitted arrears against a Private/Public Limited company cross ₹1 Crore (including contractual interest per Prashat Agarwal), an IBC Section 8 Form 3 Demand Notice initiates a 10-day insolvency countdown.",
    steps: [
      {
        step: "Serve Dual MSMED s.16 + Income Tax s.43B(h) Statutory Notice",
        description:
          "Notify the buyer's CFO and Statutory Auditor of pending Udyam supplier dues past 45 days, forcing balance-sheet and Tax Audit Form 3CD disclosure.",
      },
      {
        step: "Present Security Cheques & Trigger NI Act s.138 / s.143A",
        description:
          "Deposit buyer PDCs/security cheques after written intimation and file Section 138 complaints seeking 20% interim compensation under Section 143A.",
      },
      {
        step: "Escalate ₹1 Cr+ Corporate Defaults to IBC Section 8 Form 3",
        description:
          "Serve statutory Form 3 annexing E-Way Bills, Weighbridge Slips, COAs, and GSTR-1 reconciliation to trigger NCLT admission pressure.",
      },
    ],
    statutoryRule: "Income Tax Act s.43B(h), MSMED Act s.15–18 & IBC 2016 s.8–9",
  },
];

export default function ChemScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(SCENARIOS[0].id);
  const current = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      {/* Tab Selector Strip */}
      <div
        role="tablist"
        aria-label="Chemical and Solvent Payment Dispute Scenarios"
        className="flex flex-wrap gap-2 p-4 bg-slate-900 border-b border-slate-800"
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
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                isActive
                  ? "bg-[#DC2626] text-white shadow-md"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white"
              }`}
            >
              {scenario.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Scenario Panel */}
      <div role="tabpanel" className="p-5 sm:p-6 md:p-8 space-y-6">
        <div>
          <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-red-50 text-[#DC2626] border border-red-200 mb-3">
            {current.statutoryRule}
          </span>
          <h3 className="text-lg sm:text-xl font-black text-slate-900 leading-snug">
            {current.title}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-amber-50/70 border border-amber-200 rounded-xl p-4 sm:p-5">
            <p className="text-xs font-bold uppercase tracking-wider text-amber-800 mb-1.5">
              Commercial Failure Pattern
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {current.cause}
            </p>
          </div>
          <div className="bg-emerald-50/70 border border-emerald-200 rounded-xl p-4 sm:p-5">
            <p className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-1.5">
              Statutory Creditor Counter-Strike
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {current.legalBasis}
            </p>
          </div>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
            3-Step Execution Protocol
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {current.steps.map((item, idx) => (
              <div
                key={item.step}
                className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col gap-2"
              >
                <div className="flex items-center gap-2.5">
                  <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                    {item.step}
                  </h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
