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
    id: "health-ped-repudiation",
    tabLabel: "Health Claim / PED Allegation",
    title: "Health Mediclaim Arbitrarily Repudiated for Alleged Non-Disclosure of Pre-Existing Disease",
    cause:
      "TPA or insurance claims desk mechanically repudiates hospitalization claims by fishing for minor historical consultations (e.g. routine hypertension or mild acidity 5 years prior), falsely branding them as 'fraudulent suppression of pre-existing condition' even when unrelated to the actual surgery or treatment.",
    legalBasis:
      "In Manmohan Nanda v. United India Assurance (2022) 4 SCC 582, the Supreme Court ruled that insurers cannot repudiate claims based on routine, unrelated health conditions unless there is a proven fraudulent nexus to the cause of treatment. Under IRDAI Master Circular 2024, after continuous coverage of 60 months (5 years), no health insurance policy can be contested except in proven gross fraud.",
    steps: [
      {
        step: "Procure Treating Doctor's Clarification Certificate",
        description:
          "Obtain an explicit certificate from the treating specialist stating that the current acute ailment has no clinical linkage to any past alleged pre-existing conditions.",
      },
      {
        step: "Serve 15-Day Statutory Grievance to Insurer GRO",
        description:
          "Issue a formal representation to the insurer's Grievance Redressal Officer citing Section 45 and Supreme Court precedent, demanding immediate claim settlement.",
      },
      {
        step: "Escalate to Insurance Ombudsman on CIO Portal",
        description:
          "File on cioins.co.in within 1 year. Under the IRDAI 7-day rule, the insurer must justify the repudiation within 7 calendar days or face an ex-parte award.",
      },
    ],
    statutoryRule: "Rule 13(1)(b) Insurance Ombudsman Rules 2017 & IRDAI Master Circular 2024",
  },
  {
    id: "insurer-inaction-bima-bharosa",
    tabLabel: "Insurer Inaction (Bima Bharosa)",
    title: "Insurance Company Stonewalling, Giving Generic Auto-Replies, or Exceeding 15 Days",
    cause:
      "Policyholders submit complete claim dossiers or grievance emails, but the claims team sits on the file for months with repetitive generic emails demanding superfluous documents already submitted twice.",
    legalBasis:
      "Under IRDAI Protection of Policyholders' Interests Regulations and Master Circular 2024, insurers must settle or reject claims within 30 days of receiving the final survey/document set. Under the Bima Bharosa portal, complaints must be resolved within 14 calendar days. If 30 days pass from the first grievance without satisfactory resolution, the policyholder acquires direct statutory standing to approach the Insurance Ombudsman under Rule 14(3)(a).",
    steps: [
      {
        step: "Register Token on Bima Bharosa (bimabharosa.irdai.gov.in)",
        description:
          "File an official grievance on IRDAI's Bima Bharosa portal. This triggers an automated 14-day regulatory compliance timer on the insurer's corporate head office.",
      },
      {
        step: "Serve Formal Legal Notice on Head of Grievance Redressal",
        description:
          "Have an advocate dispatch a legal notice establishing the statutory 30-day default and putting the insurer on notice for penal interest at Bank Rate + 2%.",
      },
      {
        step: "Lodge Complaint with Territorial Insurance Ombudsman",
        description:
          "If the insurer fails to resolve the issue within 30 days, lodge the formal petition with the territorial Ombudsman center with token logs attached.",
      },
    ],
    statutoryRule: "IRDAI Policyholder Protection Regulations & Rule 14(3)(a) Insurance Ombudsman Rules",
  },
  {
    id: "motor-claim-rejection",
    tabLabel: "Motor Own-Damage Claim Denied",
    title: "Car / Bike Insurance Repudiated for Delayed FIR, Spot Survey Delay, or Driver Clause",
    cause:
      "Motor insurance claims for accidental damage or vehicle theft are frequently repudiated on hyper-technical pretexts, such as a 48-hour delay in informing the insurer or lodging the police FIR, or minor endorsement mismatches.",
    legalBasis:
      "In Gurmel Singh v. National Insurance Co. Ltd. (2022) 7 SCC 634 and Om Prakash v. Reliance General Insurance (2017) 9 SCC 724, the Supreme Court held that genuine consumer claims cannot be rejected on technicalities like delayed intimation when police report confirms the accident or theft. The Ombudsman regularly enforces these rulings against insurers.",
    steps: [
      {
        step: "Consolidate Police GD / FIR & Final Investigation Report",
        description:
          "Compile the police station general diary entry, certified FIR copy, and untraced report (in theft cases) or spot accident photographs.",
      },
      {
        step: "Challenge Independent Surveyor Assessment Discrepancies",
        description:
          "Demand a certified copy of the surveyor report under IRDAI surveyor regulations and cross-examine arbitrary depreciation deductions.",
      },
      {
        step: "File Before Ombudsman for Full Insured Declared Value (IDV)",
        description:
          "Submit Form VI-A on cioins.co.in claiming full IDV or garage repair invoice reimbursement plus compensation for vehicle deprivation.",
      },
    ],
    statutoryRule: "Supreme Court Gurmel Singh Doctrine & Rule 13(1)(b) Ombudsman Rules 2017",
  },
  {
    id: "life-death-claim-s45",
    tabLabel: "Life Death Claim (Section 45)",
    title: "Life Insurance Death Claim Repudiated Alleging Misstatement or Fraud",
    cause:
      "Following the unfortunate demise of an insured individual, life insurance companies frequently withhold or repudiate term life or endowment death claims, alleging suppression of medical history or lifestyle habits in the original proposal form.",
    legalBasis:
      "Section 45 of the Insurance Act, 1938 establishes an absolute statutory estoppel: no life insurance policy can be called into question by an insurer on any ground whatsoever after the expiry of 3 continuous years from issuance or revival. Within the first 3 years, the insurer bears the heavy legal burden to prove that the suppression was material, fraudulent, and knowingly made.",
    steps: [
      {
        step: "Establish 3-Year Policy Incontestability Threshold",
        description:
          "Verify the exact policy inception and renewal dates. If 3 years have elapsed, invoke Section 45(1) statutory bar which extinguishes all insurer repudiation rights.",
      },
      {
        step: "Issue Advocate Notice Demanding Full Sum Assured + Interest",
        description:
          "Serve legal notice to the insurer's corporate board demanding immediate disbursement of Sum Assured plus 9% to 12% statutory delayed interest.",
      },
      {
        step: "Lodge Complaint Before Ombudsman (Up to ₹50 Lakh)",
        description:
          "If the death claim sum is ₹50 Lakh or less, file on cioins.co.in. If the sum exceeds ₹50 Lakh, file directly before the State or National Consumer Commission.",
      },
    ],
    statutoryRule: "Section 45 Insurance Act 1938 & Rule 13(1)(b) Insurance Ombudsman Rules",
  },
  {
    id: "consumables-deductions",
    tabLabel: "Consumables & Partial Cuts",
    title: "Hospital Cashless Claim Approved with Arbitrary 30% to 50% Deductions",
    cause:
      "Insurers approve cashless or reimbursement claims only partially, disallowing large portions under opaque heads like 'non-medical consumables', 'administrative overheads', 'excess doctor visit fee', or 'unreasonable room rent proportionate deduction'.",
    legalBasis:
      "Under IRDAI Master Circular on Protection of Policyholders' Interests 2024, insurers and TPAs cannot enforce arbitrary deduction lists that violate policy schedule terms. In thousands of reported awards, the Insurance Ombudsman has ordered 100% refund of disallowed medical consumables and capped room rent deductions where the policy schedule was ambiguous.",
    steps: [
      {
        step: "Procure Itemized Hospital Ledger & Disallowed Breakdown",
        description:
          "Collect the hospital's itemized pharmacy summary and demand the insurer's formal claim settlement voucher explaining each deduction head.",
      },
      {
        step: "File Representation Challenging Vague Non-Medical Cuts",
        description:
          "Submit a formal objection to the insurer citing IRDAI standardized billing guidelines and demanding reimbursement of medically indispensable items.",
      },
      {
        step: "Obtain Ombudsman Award for Illegitimately Deducted Sums",
        description:
          "Submit Form VI-A on the CIO portal. The Ombudsman regularly orders complete reimbursement of oxygen, PPE, syringes, and monitoring costs.",
      },
    ],
    statutoryRule: "IRDAI Master Circular 2024 & Rule 13(1)(c) Insurance Ombudsman Rules",
  },
];

export default function InsuranceOmbudsmanProblemTabs() {
  const [activeTab, setActiveTab] = useState(PROBLEMS[0].id);
  const currentProblem = PROBLEMS.find((p) => p.id === activeTab) || PROBLEMS[0];

  return (
    <div className="w-full bg-white border border-slate-200 rounded-2xl p-5 sm:p-7 shadow-xs">
      <div className="flex items-center space-x-2 pb-4 mb-5 border-b border-slate-100">
        <span className="w-2.5 h-2.5 rounded-full bg-blue-600 shrink-0" />
        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-700">
          Dispute Category Playbooks: Rejection Ground → Legal Counter
        </h3>
      </div>

      {/* Tabs navigation */}
      <div className="flex space-x-1.5 overflow-x-auto pb-2 scrollbar-none">
        {PROBLEMS.map((problem) => {
          const isActive = activeTab === problem.id;
          return (
            <button
              key={problem.id}
              type="button"
              onClick={() => setActiveTab(problem.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-150 cursor-pointer ${
                isActive
                  ? "bg-blue-600 text-white shadow-sm"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              {problem.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Tab content */}
      <div className="mt-5 space-y-4">
        <div>
          <span className="inline-block px-2.5 py-0.5 rounded-md text-[11px] font-semibold bg-blue-50 text-blue-700 border border-blue-100 mb-2">
            Statutory Basis: {currentProblem.statutoryRule}
          </span>
          <h4 className="text-base sm:text-lg font-bold text-slate-900">
            {currentProblem.title}
          </h4>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-rose-50/60 border border-rose-100 rounded-xl p-4">
            <h5 className="text-xs font-bold uppercase tracking-wider text-rose-800 mb-1.5 flex items-center gap-1.5">
              <span>⚠️</span> How Insurers Delay or Deny Claims
            </h5>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {currentProblem.cause}
            </p>
          </div>

          <div className="bg-emerald-50/60 border border-emerald-100 rounded-xl p-4">
            <h5 className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-1.5 flex items-center gap-1.5">
              <span>⚖️</span> Statutory Legal Counter &amp; Authority
            </h5>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {currentProblem.legalBasis}
            </p>
          </div>
        </div>

        <div className="pt-2">
          <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
            Recommended Step-by-Step Escalation Protocol:
          </h5>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {currentProblem.steps.map((s, idx) => (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200/80 rounded-xl p-3.5 flex flex-col justify-between"
              >
                <div>
                  <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 text-xs font-bold flex items-center justify-center mb-2">
                    {idx + 1}
                  </span>
                  <p className="text-xs font-bold text-slate-900 mb-1">{s.step}</p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {s.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <p className="text-xs text-slate-500">
            Need an advocate to draft your formal representation to the insurer GRO?
          </p>
          <Link
            href="/legal-notice-to-insurance-company-claim-rejection-recovery"
            className="text-xs font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1"
          >
            <span>Read Legal Notice to Insurance Company Guide</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

