"use client";

import React, { useState } from "react";
import Link from "next/link";

interface ScenarioTab {
  id: string;
  tabLabel: string;
  title: string;
  insurerExcuse: string;
  legalCounter: string;
  actionSteps: {
    step: string;
    description: string;
  }[];
  statutoryBasis: string;
  recommendedForum: string;
}

const SCENARIOS: ScenarioTab[] = [
  {
    id: "ped-non-disclosure",
    tabLabel: "PED Non-Disclosure",
    title: "Claim Rejected Citing Pre-Existing Disease (PED) or Non-Disclosure",
    insurerExcuse:
      "The insurer asserts that the policyholder suffered from hypertension, diabetes, thyroid disorders, or a prior surgical history before policy inception that was allegedly concealed on the proposal form, thereby invoking Section 45 or the non-disclosure clause to repudiate the entire claim.",
    legalCounter:
      "Under Supreme Court jurisprudence (Manmohan Nanda v. United India Insurance Co., 2022) and Section 45 of the Insurance Act 1938, a policy in force for over 3 years cannot be questioned on any ground whatsoever, including non-disclosure. Furthermore, lifestyle ailments like mild hypertension or incidental diabetes cannot be treated as pre-existing conditions unless there is a direct medical nexus between the undisclosed condition and the acute hospitalization event.",
    actionSteps: [
      {
        step: "Check the Inception Date & Moratorium Period",
        description:
          "Verify if the policy (including continuous renewals and ported tenure) has completed 3 years. Under IRDAI Master Circular 2024, the moratorium period for non-disclosure contestability is strictly 60 months (now reduced towards 36 months for basic claims).",
      },
      {
        step: "Obtain Doctor's 'No-Nexus' Medical Certificate",
        description:
          "Have the treating specialist issue a formal clinical certificate confirming that the acute condition (e.g. fractured bone, appendicitis, dengue, acute pancreatitis) has zero etiology or nexus to the alleged prior condition.",
      },
      {
        step: "Serve Statutory Demand Notice & File with Ombudsman",
        description:
          "Issue a 15-day advocate notice demanding claim settlement. If unresolved, escalate directly to the Insurance Ombudsman under Rule 13(1)(b) of Insurance Ombudsman Rules 2017.",
      },
    ],
    statutoryBasis: "Section 45 Insurance Act 1938 & IRDAI Master Circular 2024",
    recommendedForum: "Insurance Ombudsman (Rule 13) or District Consumer Commission",
  },
  {
    id: "active-treatment",
    tabLabel: "Not Medically Necessary",
    title: "Claim Rejected for 'Hospitalisation Not Justified' / Oral Medication",
    insurerExcuse:
      "The TPA or claims team issues a repudiation letter stating: 'Patient was admitted primarily for diagnostic evaluation, oral medications, or observation; active parenteral treatment was not medically required and could have been managed on an outpatient (OPD) basis.'",
    legalCounter:
      "The Supreme Court and National Consumer Commission (NCDRC) have repeatedly ruled that third-party administrators (TPAs) and insurance desk doctors cannot sit in clinical appeal over a registered treating physician. If an qualified specialist determined that hospital admission was vital to monitor vital parameters and prevent clinical deterioration, the insurer cannot retrospectively disallow the admission.",
    actionSteps: [
      {
        step: "Procure Treating Consultant's Justification Letter",
        description:
          "Obtain an explicit letter from the admitting hospital's Head of Department stating the clinical indications, abnormal lab values, and risks of outpatient treatment that made 24-hour indoor monitoring medically compulsory.",
      },
      {
        step: "Compile Nursing Daily Vitals & Medication Charts",
        description:
          "Collate the inpatient indoor case record (IPD record), temperature/pulse chart, and IV medication administration sheets demonstrating active parenteral care.",
      },
      {
        step: "Escalate to Insurer's Grievance Redressal Officer (GRO)",
        description:
          "Submit the medical justification docket. In parallel, draft a pre-litigation advocate notice for deficiency of service under Section 2(11) Consumer Protection Act 2019.",
      },
    ],
    statutoryBasis: "Section 2(11) Consumer Protection Act 2019 & NCDRC Precedents",
    recommendedForum: "Insurance Ombudsman or e-Jagriti Consumer Court",
  },
  {
    id: "daycare-procedures",
    tabLabel: "Daycare / 24h Clause",
    title: "Claim Rejected for Absence of 24-Hour Continuous Hospitalization",
    insurerExcuse:
      "The claim is turned down because the patient was discharged in less than 24 hours, citing standard policy clauses requiring a minimum 24-hour indoor admission for health insurance reimbursement.",
    legalCounter:
      "IRDAI Master Circular on Protection of Policyholders' Interests (2024) mandates that modern surgeries, technologically advanced procedures, and daycare treatments (such as dialysis, chemotherapy, cataract with phacoemulsification, vitrectomy, radiotherapy, laparoscopic appendectomy, and arthroscopy) cannot be denied solely due to discharge within 24 hours when modern medical technology enables early discharge.",
    actionSteps: [
      {
        step: "Match Procedure to IRDAI Modern Treatment List",
        description:
          "Confirm whether the treatment is listed under IRDAI's mandatory coverage of modern treatment methods (e.g. robotic surgery, balloon sinuplasty, stem cell therapy, oral chemotherapy).",
      },
      {
        step: "Extract OT Notes & Discharge Summary",
        description:
          "Secure the operative notes signed by the operating surgeon stating that technological advancement permitted safe same-day post-procedure discharge.",
      },
      {
        step: "Submit Rule 13 Ombudsman Petition",
        description:
          "Ombudsman offices summarily award full claim settlement against insurers invoking archaic 24-hour hospitalization clauses for recognized daycare procedures.",
      },
    ],
    statutoryBasis: "IRDAI Master Circular 2024 (Modern Treatment Methods Clause)",
    recommendedForum: "Insurance Ombudsman (Zero Cost, binding on Insurer)",
  },
  {
    id: "late-intimation",
    tabLabel: "Delay in Intimation",
    title: "Claim Repudiated Solely for Late Claim Intimation or Delayed Bills",
    insurerExcuse:
      "The insurer rejects reimbursement because the policyholder or family failed to notify the insurer within 24/48 hours of emergency admission or submitted bills past the 30-day post-discharge window.",
    legalCounter:
      "IRDAI Circular Ref: IRDA/HLTH/MISC/CIR/216/09/2011 explicitly prohibits insurers from rejecting genuine claims purely on technical grounds of delayed intimation where the delay was due to bona fide reasons (such as attending to a critically ill family member, sudden medical crisis, or ignorance of policy details). The Supreme Court upheld this in Om Prakash v. Reliance General Insurance (2017) and Gurmel Singh (2022).",
    actionSteps: [
      {
        step: "Draft a Medical Emergency Affidavit / Delay Explanation",
        description:
          "Prepare a formal written explanation detailing the emergency circumstances (e.g., sole caregiver, ICU admission, bereavement, geographical isolation) that prevented 24-hour intimation.",
      },
      {
        step: "Cite IRDAI 2011 & 2024 Master Circular Directives",
        description:
          "Quote the binding IRDAI circular emphasizing that the condition is intended to prevent fraudulent claims, not to defeat honest policyholders with genuine hospital records.",
      },
      {
        step: "Serve 15-Day Pre-Litigation Advocate Legal Demand Notice",
        description:
          "Require the insurer to evaluate the claim strictly on medical merits and issue reimbursement within 15 days under penalty of consumer court damages.",
      },
    ],
    statutoryBasis: "IRDAI Circular IRDA/HLTH/MISC/CIR/216/09/2011 & SC Om Prakash (2017)",
    recommendedForum: "Internal GRO Escalation followed by Insurance Ombudsman",
  },
  {
    id: "room-rent-deductions",
    tabLabel: "Room Rent / Proportionate Cut",
    title: "Severe Claim Deductions Under Room Rent Capping & Proportionate Cut",
    insurerExcuse:
      "The patient stayed in a private room exceeding the 1% or 2% sum insured daily sub-limit. Consequently, the insurer applied a proportionate deduction across all associated medical expenses, including doctor consultation, surgeon fees, operation theater charges, and investigations.",
    legalCounter:
      "Under IRDAI circulars and established consumer court jurisprudence, proportionate deductions can only be applied to expenses directly tied to room charges (such as nursing and room tariffs). Insurers are legally barred from applying proportionate cuts to ICU charges, medicines, diagnostic implants, consumables with fixed MRP, and surgeon/anesthetist fees that do not vary by room category.",
    actionSteps: [
      {
        step: "Audit the Hospital Final Bill Breakup",
        description:
          "Separate fixed costs (implants, stents, pharmacy, lab tests) from room rent. Highlight where the TPA unlawfully slashed pharmacy or surgical procedural charges.",
      },
      {
        step: "Demand Itemized Settlement Computation Sheet",
        description:
          "Ask the insurer in writing to disclose the exact formula used for deductions, pointing out illegal deductions contrary to IRDAI guidelines.",
      },
      {
        step: "File Bima Bharosa Grievance & Ombudsman Claim",
        description:
          "Ombudsman routinely orders insurers to refund arbitrary proportionate deductions exceeding actual room tariff variance.",
      },
    ],
    statutoryBasis: "IRDAI Health Insurance Regulations & Consumer Forum Precedents",
    recommendedForum: "Bima Bharosa Portal / Insurance Ombudsman",
  },
  {
    id: "cashless-denial",
    tabLabel: "Cashless Denied",
    title: "Cashless Denied at Hospital Desk — Right to Full Reimbursement",
    insurerExcuse:
      "The TPA rejects initial cashless pre-authorization or final cashless approval citing: 'Lack of initial medical documentation, non-network discrepancy, or need for detailed claim investigation.'",
    legalCounter:
      "Denial of cashless authorization is NOT a repudiation of the insurance claim. IRDAI regulations mandate that cashless denial does not prejudice the policyholder's statutory right to pay the hospital and file for full post-discharge reimbursement. Under IRDAI Master Circular 2024, insurers must convey cashless decisions within 1 hour and final discharge authorizations within 3 hours.",
    actionSteps: [
      {
        step: "Collect Certified Hospital Inpatient Docket",
        description:
          "Pay the hospital bill and collect original receipts, discharge summary, stamped pharmacy bills, diagnostic reports, and implant stickers.",
      },
      {
        step: "Submit Formal Reimbursement Claim Within 30 Days",
        description:
          "File the physical or digital reimbursement claim quoting the earlier cashless pre-auth query number.",
      },
      {
        step: "Escalate Delayed Reimbursement with Penal Interest",
        description:
          "If the insurer delays reimbursement past 30 days of receiving completed documents, they are liable to pay bank rate + 2% penal interest under IRDAI Policyholder Protection Regulations.",
      },
    ],
    statutoryBasis: "IRDAI Master Circular 2024 (Cashless 1-Hour TAT & Reimbursement Rights)",
    recommendedForum: "Insurance Ombudsman / Legal Notice to Insurer GRO",
  },
];

export default function HealthInsuranceRejectionTabs() {
  const [activeTab, setActiveTab] = useState(SCENARIOS[0].id);
  const currentScenario = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full bg-white border border-slate-200 rounded-2xl p-4 sm:p-6 md:p-8 shadow-xs">
      {/* Scrollable Tab Navigation */}
      <div className="flex items-center gap-1.5 sm:gap-2 pb-3 border-b border-slate-200 overflow-x-auto scrollbar-none">
        {SCENARIOS.map((tab) => {
          const isActive = tab.id === activeTab;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 sm:px-4 py-2 text-xs sm:text-sm font-bold rounded-xl whitespace-nowrap transition-all cursor-pointer ${
                isActive
                  ? "bg-slate-900 text-white shadow-sm"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              {tab.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Tab Content Card */}
      <div className="pt-5 sm:pt-6 space-y-5">
        <div>
          <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider text-red-600 bg-red-50 border border-red-200 px-2.5 py-1 rounded-full">
            Selected Rejection Ground
          </span>
          <h3 className="text-base sm:text-lg md:text-xl font-extrabold text-slate-900 mt-2">
            {currentScenario.title}
          </h3>
        </div>

        {/* Insurer Excuse vs Legal Counter Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-red-50/60 border border-red-200/80">
            <span className="text-[10px] font-black uppercase tracking-wider text-red-700 block mb-1">
              ✕ What the Insurer&apos;s Rejection Letter Says:
            </span>
            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
              {currentScenario.insurerExcuse}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200/80">
            <span className="text-[10px] font-black uppercase tracking-wider text-emerald-800 block mb-1">
              ✓ The Statutory Counter-Argument:
            </span>
            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
              {currentScenario.legalCounter}
            </p>
          </div>
        </div>

        {/* 3 Action Steps */}
        <div className="space-y-3">
          <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-700">
            3-Step Immediate Action Checklist:
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {currentScenario.actionSteps.map((action, idx) => (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200/80 rounded-xl p-3.5 flex flex-col justify-between"
              >
                <div>
                  <span className="w-5 h-5 rounded-full bg-slate-900 text-white font-bold text-[10px] flex items-center justify-center mb-2">
                    {idx + 1}
                  </span>
                  <strong className="text-xs sm:text-sm text-slate-900 font-bold block mb-1">
                    {action.step}
                  </strong>
                  <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">
                    {action.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Statutory Citation & Target Forum */}
        <div className="p-3.5 bg-slate-100 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div>
            <span className="font-bold text-slate-500 uppercase tracking-wider text-[10px] block">
              Governing Law &amp; Regulations:
            </span>
            <span className="font-semibold text-slate-900">{currentScenario.statutoryBasis}</span>
          </div>
          <div className="sm:text-right">
            <span className="font-bold text-slate-500 uppercase tracking-wider text-[10px] block">
              Most Effective Forum:
            </span>
            <span className="font-bold text-red-700">{currentScenario.recommendedForum}</span>
          </div>
        </div>

        <div className="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100">
          <p className="text-xs text-slate-500">
            Read more on how to file an{" "}
            <Link
              href="/legal-notice-to-insurance-company-claim-rejection-recovery"
              className="text-blue-700 underline font-semibold"
            >
              Insurance Ombudsman &amp; Bima Bharosa Complaint
            </Link>
            .
          </p>
          <a
            href="#heading-cta-block"
            className="text-xs font-bold text-red-600 hover:text-red-700 hover:underline"
          >
            Draft Advocate Legal Demand Notice →
          </a>
        </div>
      </div>
    </div>
  );
}
