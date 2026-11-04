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
    id: "delay-intimation",
    tabLabel: "Delay in Intimation",
    title: "Claim Denied Due to Delayed Incident Reporting (FIR or Insurer Intimation)",
    cause:
      "Insurers frequently repudiate own-damage or vehicle theft claims by citing policy clause 1: 'Immediate intimation to insurer within 24–48 hours'. Policyholders who hospitalised injured passengers first or waited for police spot-panchanama before notifying the insurance company are routinely issued repudiation letters.",
    legalBasis:
      "In the landmark Supreme Court ruling in Gurmel Singh v. Branch Manager, National Insurance Co. Ltd. (2022) and Om Prakash v. Reliance General Insurance (2017) 9 SCC 724, the apex court held that genuine claims cannot be mechanically rejected on hyper-technical grounds of intimation delay. When the incident (accident or theft) is authentic and corroborated by police or surveyor records, delay does not vitiate the contract.",
    steps: [
      {
        step: "Gather Plausible Reason for Delay",
        description:
          "Collate discharge summaries, medical certificates of driver/passengers, or police diary extract proving emergency hospitalisation or bona fide delay.",
      },
      {
        step: "Issue Advocate Demand Notice Citing Gurmel Singh",
        description:
          "Cite Supreme Court precedents establishing that intimation conditions are directory, not mandatory conditions precedent when loss is undisputed.",
      },
      {
        step: "Escalate to Insurance Ombudsman or Consumer Commission",
        description:
          "File complaint before the Insurance Ombudsman under Rule 13 of Insurance Ombudsman Rules 2017 or e-Jagriti consumer commission seeking full claim plus 9% interest.",
      },
    ],
    statutoryRule: "Supreme Court in Gurmel Singh (2022) & IRDAI Circular Ref: IRDA/HLTH/MISC/CIR/216/09/2011",
  },
  {
    id: "licence-defect",
    tabLabel: "Driving Licence Issue",
    title: "Claim Rejected Over Expired Licence, Category Mismatch, or Driver's Licence Defect",
    cause:
      "If the driver's licence expired within the grace period (30 days), had an LMV endorsement while driving a transport vehicle under 7,500 kg, or the hired driver possessed a licence that turned out to be forged, insurers summarily repudiate own-damage and third-party claims alleging breach of policy warranty.",
    legalBasis:
      "In the Constitution Bench and 3-Judge Bench judgments in National Insurance Co. Ltd. v. Swaran Singh (2004) 3 SCC 297 and Lakhmi Chand v. Reliance General Insurance (2016) 3 SCC 100, the Supreme Court ruled that an insurer must prove willful breach by the vehicle owner. If the owner exercised due care, or if the licence defect did not directly cause the accident, total repudiation is illegal. In Mukund Dewangan (2017) 14 SCC 663, an LMV licence was explicitly held valid for light commercial transport vehicles.",
    steps: [
      {
        step: "Verify Category and Grace Period Status",
        description:
          "Check Sarathi / Parivahan digital records. Under Section 14 of the Motor Vehicles Act 1988, a licence remains valid for renewal up to 30 days post-expiry without lapse of driving competence.",
      },
      {
        step: "Invoke the 'Fundamental Breach' Rule",
        description:
          "Serve a legal notice asserting that under Lakhmi Chand, an administrative licence technicality without causative contribution to the collision cannot justify claim denial.",
      },
      {
        step: "Seek Non-Standard Settlement Minimum (75%)",
        description:
          "Under general insurance guidelines, where licence breach is non-fundamental, insurers must at minimum settle on a non-standard basis (up to 75% of assessed loss).",
      },
    ],
    statutoryRule: "Swaran Singh (2004) 3 SCC 297 & Mukund Dewangan (2017) 14 SCC 663",
  },
  {
    id: "drunk-driving",
    tabLabel: "Drunk Driving Clause",
    title: "Claim Repudiated Alleging Intoxication / Drunk Driving Without Blood Alcohol Test",
    cause:
      "Surveyors or claims managers often flag 'smell of alcohol' noted informally in the hospital casualty register or police GD entry, and invoke the policy exclusion for 'driving under the influence of intoxicating liquor or drugs' to refuse total settlement.",
    legalBasis:
      "Under Section 185 of the Motor Vehicles Act 1988 and judgments of the NCDRC (Sunita Goyal v. SBI General Insurance; Bachi Devi v. National Insurance), an insurer cannot repudiate a claim based merely on subjective observations. The law requires scientific corroboration showing Blood Alcohol Concentration (BAC) exceeding 30 mg per 100 ml of blood via breath analyser or lab toxicology report. Without quantitative proof, the exclusion clause is legally unenforceable.",
    steps: [
      {
        step: "Demand the Medico-Legal Certificate (MLC) & Blood Report",
        description:
          "Procure the complete MLC from the treating hospital. Check if any quantitative chemical toxicology test or gas chromatography was conducted.",
      },
      {
        step: "Challenge Subjective Remarks via Advocate Notice",
        description:
          "Serve a formal statutory notice pointing out the absence of statutory Section 185 proof and citing NCDRC precedent invalidating subjective repudiations.",
      },
      {
        step: "File Before Ombudsman for Bad-Faith Repudiation Damages",
        description:
          "Claim full assessed vehicle loss alongside mental harassment compensation for defamatory intoxication allegations without clinical proof.",
      },
    ],
    statutoryRule: "Section 185 Motor Vehicles Act 1988 & NCDRC Ruling in Sunita Goyal",
  },
  {
    id: "misrepresentation",
    tabLabel: "Misrepresentation / Pre-Existing",
    title: "Claim Repudiated for Non-Disclosure of Modifications, CNG Kit, or Prior Minor Dents",
    cause:
      "Insurers routinely reject claims alleging that the policyholder did not disclose an aftermarket CNG/LPG kit, failed to transfer policy within 14 days of vehicle purchase, or that current collision damage overlaps with pre-existing scratches noted in earlier renewal inspection photos.",
    legalBasis:
      "Under Section 157(2) of the Motor Vehicles Act 1988, insurance transfers automatically to the transferee upon vehicle ownership transfer for third-party cover, and IRDAI guidelines require reasonable processing for own-damage transfer. Furthermore, under Section 45 principles and IRDAI Master Circular 2024, repudiation on grounds of non-disclosure is void unless the insurer proves that the non-disclosure was fraudulent, material to the loss, and directly contributed to the risk.",
    steps: [
      {
        step: "Review the Independent Surveyor's Detailed Assessment",
        description:
          "Obtain the final Survey Report under IRDAI regulations. Insurers are legally obligated to share the licensed surveyor's loss assessment sheet.",
      },
      {
        step: "Segregate Disputed Modifications from Accident Cause",
        description:
          "Establish that the unendorsed accessory (e.g., CNG kit or roof rack) had zero causal link to the collision caused by a third-party vehicle impact.",
      },
      {
        step: "Serve Notice to Insurer Grievance Redressal Officer (GRO)",
        description:
          "Issue a legal demand warning of Bima Bharosa escalation and IRDAI penalty proceedings for arbitrary invocation of Uberrima Fides.",
      },
    ],
    statutoryRule: "Section 157 MV Act, Section 45 Insurance Act & IRDAI Master Circular 2024",
  },
];

export default function MotorInsuranceProblemTabs() {
  const [activeTab, setActiveTab] = useState<string>(PROBLEMS[0].id);
  const currentProblem = PROBLEMS.find((p) => p.id === activeTab) || PROBLEMS[0];

  return (
    <div className="w-full bg-white border border-slate-200 rounded-2xl p-5 sm:p-7 shadow-sm">
      <div className="border-b border-slate-200 pb-4 mb-6">
        <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
          Interactive Repudiation Counter-Strategy Selector
        </h3>
        <p className="text-xs sm:text-sm text-slate-600">
          Select the exact rejection ground stated in your insurer&apos;s repudiation letter to reveal the binding statutory counter-arguments, landmark court rulings, and required evidentiary steps.
        </p>
      </div>

      {/* Tabs Navigation */}
      <div className="flex flex-wrap gap-2 mb-6" role="tablist">
        {PROBLEMS.map((problem) => (
          <button
            key={problem.id}
            type="button"
            role="tab"
            aria-selected={activeTab === problem.id}
            onClick={() => setActiveTab(problem.id)}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === problem.id
                ? "bg-red-600 text-white shadow-md shadow-red-600/20"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
            }`}
          >
            {problem.tabLabel}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-red-600 bg-red-50 border border-red-200 px-2.5 py-1 rounded-md">
            {currentProblem.statutoryRule}
          </span>
          <span className="text-xs text-slate-500 font-medium">Binding Legal Counter-Rail</span>
        </div>

        <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-3">{currentProblem.title}</h4>

        <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed mb-6">
          <div>
            <strong className="text-slate-900 font-semibold block mb-1">
              Why the Insurer Repudiated (The Defense Ground):
            </strong>
            <p className="text-slate-600">{currentProblem.cause}</p>
          </div>

          <div className="bg-white p-4 rounded-lg border-l-4 border-red-500 shadow-sm">
            <strong className="text-slate-900 font-semibold block mb-1">
              Statutory Position &amp; Binding Judicial Ruling:
            </strong>
            <p className="text-slate-700">{currentProblem.legalBasis}</p>
          </div>
        </div>

        <div>
          <strong className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wide block mb-3">
            Immediate Action Steps to Overturn This Repudiation:
          </strong>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {currentProblem.steps.map((item, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-lg p-3.5 shadow-xs">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="w-5 h-5 rounded-full bg-red-100 text-red-600 text-xs font-bold flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <span className="text-xs font-bold text-slate-900">{item.step}</span>
                </div>
                <p className="text-[11px] sm:text-xs text-slate-600 leading-normal">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-5 pt-4 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <p className="text-xs text-slate-500">
            Need an advocate notice drafted addressing this specific rejection ground?
          </p>
          <Link
            href="/legal-notice-charges"
            className="text-xs font-bold text-red-600 hover:text-red-700 hover:underline flex items-center gap-1 shrink-0"
          >
            <span>Check Transparent Notice Charges</span>
            <span>&rarr;</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
