"use client";

import React, { useState } from "react";

interface ProblemScenario {
  id: string;
  tabLabel: string;
  title: string;
  scenarioDescription: string;
  legalViolation: string;
  remedySteps: {
    step: string;
    description: string;
  }[];
  statutoryRule: string;
}

const PROBLEM_SCENARIOS: ProblemScenario[] = [
  {
    id: "consumables-markup",
    tabLabel: "Unused Consumables",
    title: "Excessive Consumable Billing: Gloves, Syringes, & PPE Kits Billed Without Usage",
    scenarioDescription:
      "Upon reviewing the final discharge summary and itemized pharmacy break-up, patients frequently discover hundreds of individual line items for surgical gloves, disposable bedsheets, N95 masks, sanitizers, thermometer covers, and syringes billed in absurd quantities (e.g., 25 pairs of gloves and 8 PPE kits charged per day in an ordinary step-down room). Patients are forced to pay for items that were never opened, dispensed, or consumed.",
    legalViolation:
      "Billing for goods or services never rendered constitutes both an Unfair Trade Practice under Section 2(47) and a Deficiency in Service under Section 2(11) of the Consumer Protection Act, 2019. National and State Consumer Commissions have repeatedly penalized private nursing homes for inflated consumable unbundling, ruling that standard overhead hospital gear is either part of room nursing charges or must be verified against nurses' daily administration charts.",
    remedySteps: [
      {
        step: "Demand the Itemized Ledger & Daily Nursing Chart",
        description:
          "Never accept a single consolidated 'Consumables & Sundries' line item. Insist on a detailed SKU-level ledger and compare it against the patient's bedside Daily Administration Record (DAR).",
      },
      {
        step: "Highlight Physical Impossibilities in Writing",
        description:
          "Formally point out discrepancies before settlement (e.g., 30 IV canulas billed during a 4-day stay without vein changes). Submit a written dispute endorsement on the final invoice copy.",
      },
      {
        step: "Issue Formal Legal Demand for Full Refund",
        description:
          "If the hospital medical superintendent refuses to reverse the unsupported entries, issue a statutory advocate demand notice claiming refund with 12% penal interest and damages.",
      },
    ],
    statutoryRule: "Section 2(11) & 2(47) CPA 2019; NCDRC Hospital Overhead Precedents",
  },
  {
    id: "package-unbundling",
    tabLabel: "Package Rate Breach",
    title: "Agreed Package Price Breach: Unauthorized Room Unbundling & Surcharges",
    scenarioDescription:
      "The hospital provides a pre-admission cost estimate or agreed package price (such as ₹1,80,000 all-inclusive for total knee replacement or laparoscopic surgery). However, on discharge day, the hospital issues a surprise bill of ₹3,20,000, claiming that operation theatre sanitization, post-operative nursing, surgeon visits, and routine medications were 'outside the package'.",
    legalViolation:
      "Unilateral alteration of an agreed surgical or treatment package without prior written informed financial consent violates the Clinical Establishments (Registration and Regulation) Act and constitutes gross contractual breach under the Indian Contract Act, 1872. Consumer commissions consistently hold that hospitals are bound by their written pre-admission package estimates unless unforeseen emergency complications requiring distinct surgical procedures are proven through medical records.",
    remedySteps: [
      {
        step: "Secure Pre-Admission Package Estimate Documentation",
        description:
          "Preserve the initial printed admission estimate slip, counsellor's written quote, email communications, and signed package consent forms.",
      },
      {
        step: "Pay Disputed Balance 'Under Protest' with Endorsed Receipt",
        description:
          "If immediate discharge is impeded, write 'Paid Under Protest subject to legal audit and package price violation' on the payment voucher, debit card slip, or discharge sheet.",
      },
      {
        step: "Serve Notice to Medical Superintendent & Managing Director",
        description:
          "Dispatch a legal notice demanding refund of the unbundled surcharge differential above the agreed package tariff within 15 calendar days.",
      },
    ],
    statutoryRule: "Clinical Establishments Rules; Section 2(47) CPA 2019 Unfair Trade Practice",
  },
  {
    id: "dual-mrp-drugs",
    tabLabel: "Dual-MRP & Implants",
    title: "Above-MRP Drug Markups & National Pharmaceutical Pricing (NPPA) Violations",
    scenarioDescription:
      "Inpatient pharmacies inside corporate hospitals often sell routine medicines, surgical disposables, coronary stents, and orthopaedic implants at inflated rates or using customized 'hospital supply only' packaging bearing artificial MRPs up to 400% higher than open-market retail prices.",
    legalViolation:
      "Charging above the Maximum Retail Price (MRP) violates Rule 18(2) of the Legal Metrology (Packaged Commodities) Rules, 2011 and attracts penalties under Section 36 of the Legal Metrology Act, 2009. Furthermore, billing coronary stents, orthopedic knee implants, or price-controlled essential drugs above the ceiling prices notified by the National Pharmaceutical Pricing Authority (NPPA) under the Drugs (Prices Control) Order (DPCO) is a punishable statutory offence.",
    remedySteps: [
      {
        step: "Verify Medicine Batch Numbers & MRP on Open Market",
        description:
          "Cross-reference the batch numbers, manufacturer details, and NPPA price ceiling lists (available at nppaindia.nic.in) for cardiac stents, oxygen, and scheduled formulations.",
      },
      {
        step: "File Dual Complaints: Legal Metrology Controller & NPPA",
        description:
          "Lodge a digital complaint with the State Legal Metrology Department for dual-MRP/overcharging alongside an NPPA Pharma Sahi Daam grievance.",
      },
      {
        step: "Demand Mandatory Restitution & Treble Damages",
        description:
          "Through an advocate legal notice, demand immediate refund of the illegal margin and statutory interest, citing prosecution under Section 36 of the Legal Metrology Act.",
      },
    ],
    statutoryRule: "Rule 18(2) Legal Metrology Rules 2011 & DPCO Ceiling Price Notifications",
  },
  {
    id: "discharge-hostage",
    tabLabel: "Discharge Detention",
    title: "Patient Detention & Withholding Discharge Summary or Remains over Disputed Dues",
    scenarioDescription:
      "When a family disputes an astronomical, unverified hospital invoice, hospital administrative staff unlawfully refuse to process the discharge, withhold the clinical discharge summary and diagnostic reports, or in tragic cases, hold the mortal remains of a deceased patient hostage until the disputed cash amount is settled.",
    legalViolation:
      "Detaining a patient or withholding mortal remains for non-payment of disputed medical bills is strictly unconstitutional and illegal. The Supreme Court and multiple High Courts (including the Delhi High Court and Bombay High Court) have ruled that hospitals cannot turn medical facilities into recovery prisons. Withholding clinical records also breaches National Medical Commission (NMC) regulations and Article 21 of the Indian Constitution.",
    remedySteps: [
      {
        step: "Lodge Immediate Police PCR Call & Written Complaint",
        description:
          "Call 112 immediately and submit a written police complaint to the Station House Officer (SHO) reporting illegal confinement under the Bharatiya Nyaya Sanhita, 2023 (BNS Section 127).",
      },
      {
        step: "Demand Electronic Records under NMC Regulations",
        description:
          "Remind the hospital administration in writing that under NMC rules, clinical records and discharge summaries must be provided within 72 hours of request.",
      },
      {
        step: "Claim Substantial Punitive Damages in Consumer Commission",
        description:
          "Consumer Commissions routinely award exemplary compensation (frequently ₹1,00,000 to ₹10,00,000) against hospitals guilty of patient detention or corpse withholding.",
      },
    ],
    statutoryRule: "Article 21 Constitution of India; NMC Ethics Regulations; BNS Section 127",
  },
  {
    id: "double-billing-tpa",
    tabLabel: "TPA & Cashless Deductions",
    title: "Double Billing & Illicit Out-of-Pocket Demands Despite Cashless TPA Approval",
    scenarioDescription:
      "The patient holds an active health insurance policy and obtains pre-authorization approval from the Third-Party Administrator (TPA) for cashless treatment under the hospital's GIPSA/PPN agreed network tariff. At discharge, the hospital demands that the family pay tens of thousands in cash for routine administrative charges, bio-medical waste, or PPE, despite these items being expressly bundled under the insurer's network agreement.",
    legalViolation:
      "Demanding out-of-pocket surcharges for services bundled under the insurer-hospital network tariff contract violates the Master Circular on Health Insurance Products issued by the Insurance Regulatory and Development Authority of India (IRDAI). Charging the insured consumer for amounts disallowed by the TPA due to the hospital's contractual agreement constitutes unjust enrichment and unfair trade practice.",
    remedySteps: [
      {
        step: "Obtain the Final TPA Settlement Breakdown & Pre-Auth Letter",
        description:
          "Request the insurer's official TPA settlement voucher indicating the approved package amount, hospital deductions, and permitted non-medical exclusions.",
      },
      {
        step: "Match Hospital Demands Against IRDAI Admissible List",
        description:
          "Under IRDAI circulars, hospitals cannot bill consumers for overhead bio-waste disposal, administrative registration, or routine monitoring already factored into room tariffs.",
      },
      {
        step: "Escalate via Advocate Notice to Hospital & Insurer Grievance Cell",
        description:
          "Issue a combined legal demand notice holding the hospital liable for breach of empanelled network tariff and demanding refund of illicit out-of-pocket collections.",
      },
    ],
    statutoryRule: "IRDAI Health Insurance Regulations; Section 2(47) CPA 2019 Unjust Enrichment",
  },
];

export default function HospitalOverbillingProblemTabs() {
  const [activeTab, setActiveTab] = useState<string>(PROBLEM_SCENARIOS[0].id);

  const currentScenario =
    PROBLEM_SCENARIOS.find((item) => item.id === activeTab) || PROBLEM_SCENARIOS[0];

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200/80 p-5 sm:p-7 shadow-xs">
      <div className="border-b border-slate-200 pb-4 mb-6">
        <span className="text-[11px] font-black uppercase tracking-wider text-red-600 block mb-1">
          Scenario Diagnosis &amp; Remedy
        </span>
        <h3 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
          How Hospital Overbilling Happens: Identify Your Scenario &amp; Counter-Measures
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 mt-1">
          Select the overcharge tactic used on your bill to see specific statutory provisions, actionable evidence steps, and recovery options.
        </p>
      </div>

      {/* Tab Selectors */}
      <div className="flex flex-wrap gap-2 pb-4 border-b border-slate-100" role="tablist">
        {PROBLEM_SCENARIOS.map((scenario) => {
          const isActive = activeTab === scenario.id;
          return (
            <button
              key={scenario.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveTab(scenario.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                isActive
                  ? "bg-[#DC2626] text-white shadow-md shadow-red-900/20"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              {scenario.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Tab Content Panel */}
      <div className="pt-6 space-y-6">
        <div>
          <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-md bg-red-100 text-red-800">
            {currentScenario.statutoryRule}
          </span>
          <h4 className="text-base sm:text-lg font-black text-slate-900 mt-2">
            {currentScenario.title}
          </h4>
        </div>

        <div className="bg-slate-50 border border-slate-200/70 rounded-xl p-4 sm:p-5">
          <p className="text-xs sm:text-sm font-semibold text-slate-800 mb-1">
            Factual Situation:
          </p>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {currentScenario.scenarioDescription}
          </p>
        </div>

        <div className="bg-amber-50/70 border border-amber-200/70 rounded-xl p-4 sm:p-5">
          <p className="text-xs sm:text-sm font-bold text-amber-900 mb-1">
            Statutory Violation:
          </p>
          <p className="text-xs sm:text-sm text-amber-800 leading-relaxed">
            {currentScenario.legalViolation}
          </p>
        </div>

        <div className="space-y-3">
          <p className="text-xs sm:text-sm font-black uppercase tracking-wider text-slate-900">
            Actionable Defense &amp; Evidence Steps:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {currentScenario.remedySteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-xl p-4 shadow-2xs space-y-1.5"
              >
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-red-600 text-white text-[10px] font-black flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <span className="text-xs font-bold text-slate-900 leading-snug">
                    {step.step}
                  </span>
                </div>
                <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed pl-7">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
