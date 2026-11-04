"use client";

import React, { useState } from "react";
import Link from "next/link";

interface ProblemTab {
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

const PROBLEMS: ProblemTab[] = [
  {
    id: "pre-auth-denied",
    tabLabel: "Admission Denied",
    title: "Pre-Authorisation Denied at Hospital Desk (Investigation / Pre-Existing Pretext)",
    cause:
      "Upon presenting your health e-card at the hospital insurance desk for planned or emergency hospitalization, the Third Party Administrator (TPA) issues a query or denial letter stating 'Claim requires field verification', 'Suspected pre-existing disease (PED) non-disclosure', or 'Medical history records incomplete'. The hospital insists on immediate advance cash or credit card deposit before continuing treatment.",
    legalBasis:
      "Under IRDAI Master Circular on Operations and Allied Matters (2024), an insurer or TPA must decide on pre-authorisation within 1 hour of hospital document submission. Rejection of cashless pre-authorisation does not mean repudiation of liability under the contract. Furthermore, under Section 45 of the Insurance Act, 1938, after an insurance policy completes 3 continuous years (moratorium period), no claim or coverage can be questioned on grounds of misstatement or omission.",
    steps: [
      {
        step: "Demand Formal Written Denial Letter with Exact Code",
        description:
          "Never accept verbal denial from the hospital TPA desk. Obtain the official denial letter issued on insurer/TPA letterhead with specific ICD-10 codes and repudiation grounds.",
      },
      {
        step: "Secure Doctor's Admission Certificate & First-Symptom Note",
        description:
          "Have the treating specialist clearly record in the Indoor Case Paper that the present acute condition has no nexus to any past illness and required urgent hospitalization.",
      },
      {
        step: "Proceed Under Paid Route & Preserve All Receipts",
        description:
          "Settle the initial admission deposit or hospital bill via traceable bank/credit card payment and immediately file an electronic intimation for statutory reimbursement.",
      },
    ],
    statutoryRule: "IRDAI 1-Hour Mandate & Section 45 Insurance Act, 1938",
  },
  {
    id: "discharge-delayed",
    tabLabel: "Discharge Stalled > 3 Hrs",
    title: "Patient Held Hostage: Discharge Authorization Delayed Beyond the 3-Hour Limit",
    cause:
      "The doctor signs the physical discharge summary at 11:00 AM, but the hospital refuses to let the patient leave the room until the insurer issues the final cashless approval letter. The TPA delays response for 6 to 10 hours, and the hospital adds an extra full day's room rent, nursing charges, and bed occupancy fees to the bill.",
    legalBasis:
      "IRDAI's May 2024 Master Circular mandates that insurers must communicate final discharge authorization within 3 hours of receiving the final bill and discharge summary. IRDAI has explicitly ruled that if the insurer delays approval beyond 3 hours, any additional room rent or hospital charges incurred due to the delay MUST be borne by the insurance company, not the consumer. Furthermore, detaining a medically discharged patient violates Article 21 rights and constitutes unfair trade practice under Section 2(47) Consumer Protection Act, 2019.",
    steps: [
      {
        step: "Time-Stamp the Hospital's Portal Submission",
        description:
          "Ask the hospital billing desk for a printed screenshot of their portal showing the exact minute the final discharge summary and bill were uploaded to the TPA/insurer system.",
      },
      {
        step: "Serve Immediate Written Protest to TPA & Hospital Billing Head",
        description:
          "Issue a written notice referencing the IRDAI 3-hour limit, stating that keeping the patient in the room constitutes unlawful restraint and any extra room rent will be claimed from the insurer with penal interest.",
      },
      {
        step: "Clear Bill Under Written Protest & Demand Itemized Discharge Receipt",
        description:
          "If the insurer fails to respond, settle under explicit written protest ('Paid Under Compulsion Due to Insurer Delay') and initiate a formal legal recovery process.",
      },
    ],
    statutoryRule: "IRDAI 3-Hour Discharge Norm & Section 2(47) CPA 2019",
  },
  {
    id: "cashless-everywhere",
    tabLabel: "Non-Network Hospital",
    title: "Non-Network Hospital Refuses Cashless Under IRDAI 'Cashless Everywhere' Mandate",
    cause:
      "Under IRDAI's nationwide 'Cashless Everywhere' initiative, policyholders are entitled to cashless hospitalization even at non-network hospitals. However, either the hospital administration refuses to sign the temporary Memorandum of Understanding (MoU), or the insurer's TPA ignores the intimation request sent 48 hours prior to planned admission.",
    legalBasis:
      "General Insurance Council (GIC) and IRDAI guidelines obligate general and health insurers to extend cashless access across all recognized hospitals having more than 15 beds and registration with local clinical authorities. When an insurer mechanically denies cashless access for a non-network facility despite compliant notice, it constitutes deficiency of service under Section 2(11) of the Consumer Protection Act, 2019.",
    steps: [
      {
        step: "Verify Notice Timelines (48 Hrs Planned / 48 Hrs Emergency)",
        description:
          "Ensure you gave 48-hour prior intimation for elective surgery, or informed the insurer within 48 hours of emergency admission along with hospital registration certificate.",
      },
      {
        step: "Obtain Hospital's ROHINI ID & Registration Copy",
        description:
          "Collect the hospital's Registry of Hospitals in Network of Insurance (ROHINI) ID code and State Clinical Establishments registration to confirm facility eligibility.",
      },
      {
        step: "Escalate to Insurer's Cashless Everywhere Cell",
        description:
          "Send an urgent email to the insurer's specialized nodal officer and GRO. If unaddressed, settle bills directly and claim statutory interest from admission date.",
      },
    ],
    statutoryRule: "GIC Cashless Everywhere Framework & Section 2(11) CPA 2019",
  },
  {
    id: "arbitrary-deductions",
    tabLabel: "Consumables & Slashing",
    title: "Cashless Granted with 40%+ Arbitrary Deductions & Capped Consumables",
    cause:
      "The hospital bills ₹2,50,000, but the insurer/TPA issues an authorization of only ₹1,40,000, classifying vital medical supplies, gloves, syringes, surgical drapes, oxygen charges, or administrative documentation as 'non-medical non-payable expenses' or imposing arbitrary internal sub-limits not in the policy schedule.",
    legalBasis:
      "Under IRDAI (Standardization of Exclusions) Regulations, insurers can only deduct items listed under IRDAI's defined non-payable list unless a specific consumables rider or comprehensive policy is active. Arbitrary proportional room rent reductions applied to doctor consultation fees or medicines violate National Consumer Disputes Redressal Commission (NCDRC) binding precedents.",
    steps: [
      {
        step: "Examine Itemized Breakup in TPA Approval Letter",
        description:
          "Review the exact deduction codes in the pre-auth or final cashless clearance letter to identify disallowed items versus IRDAI's standardized non-payable schedule.",
      },
      {
        step: "Get Doctor's Justification for Consumables & High-Value Items",
        description:
          "Secure a written certificate from the surgeon explaining why specialized surgical items, implants, or ICU monitoring were medically imperative for life safety.",
      },
      {
        step: "Issue Legal Demand Notice for Illegally Deducted Balance",
        description:
          "Pay the hospital the balance under protest, then immediately serve a formal legal notice demanding reimbursement of the unlawfully slashed sum with statutory interest.",
      },
    ],
    statutoryRule: "IRDAI Standard Non-Payables Schedule & NCDRC Deductions Precedents",
  },
];

export default function CashlessClaimProblemTabs() {
  const [activeTabId, setActiveTabId] = useState<string>(PROBLEMS[0].id);
  const activeTab = PROBLEMS.find((p) => p.id === activeTabId) || PROBLEMS[0];

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      {/* Tab Navigation */}
      <div className="flex border-b border-slate-200 bg-slate-50/80 overflow-x-auto scrollbar-none">
        {PROBLEMS.map((problem) => {
          const isActive = problem.id === activeTabId;
          return (
            <button
              key={problem.id}
              type="button"
              onClick={() => setActiveTabId(problem.id)}
              className={`shrink-0 px-4 sm:px-6 py-3.5 text-xs sm:text-sm font-bold transition-all border-b-2 cursor-pointer ${
                isActive
                  ? "border-red-600 text-red-600 bg-white shadow-sm"
                  : "border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100/60"
              }`}
            >
              {problem.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Tab Content */}
      <div className="p-5 sm:p-7 md:p-8 space-y-6">
        <div>
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-red-50 text-red-700 border border-red-200 mb-2">
            <span>Statutory Anchor</span>
            <span>•</span>
            <span>{activeTab.statutoryRule}</span>
          </div>
          <h3 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 tracking-tight">
            {activeTab.title}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs sm:text-sm">
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5">
            <h4 className="text-xs uppercase tracking-wider font-extrabold text-slate-500 mb-2">
              Typical Hospital / TPA Friction
            </h4>
            <p className="text-slate-700 leading-relaxed">{activeTab.cause}</p>
          </div>
          <div className="bg-amber-50/60 border border-amber-200/80 rounded-xl p-4 sm:p-5">
            <h4 className="text-xs uppercase tracking-wider font-extrabold text-amber-800 mb-2">
              Statutory Protection &amp; Legal Stance
            </h4>
            <p className="text-slate-700 leading-relaxed">{activeTab.legalBasis}</p>
          </div>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-wider font-extrabold text-slate-900 mb-3">
            Immediate Action Protocol
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {activeTab.steps.map((st, i) => (
              <div key={i} className="border border-slate-200 rounded-xl p-3.5 bg-white shadow-xs">
                <span className="w-5 h-5 rounded-full bg-red-600 text-white font-mono text-[10px] font-bold flex items-center justify-center mb-2">
                  {i + 1}
                </span>
                <p className="font-bold text-slate-900 text-xs sm:text-sm mb-1">{st.step}</p>
                <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">{st.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-100">
          <p className="text-xs text-slate-500">
            TPA rejected or delayed your authorization? Explore our legal notice drafting to hold them accountable.
          </p>
          <Link
            href="/legal-notice-charges"
            className="text-xs font-bold text-red-600 hover:text-red-700 hover:underline shrink-0"
          >
            Review Transparent Notice Fees →
          </Link>
        </div>
      </div>
    </div>
  );
}
