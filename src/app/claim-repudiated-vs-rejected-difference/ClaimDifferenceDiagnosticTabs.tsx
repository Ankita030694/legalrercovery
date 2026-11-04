"use client";

import React, { useState } from "react";
import Link from "next/link";

interface DiagnosticScenario {
  id: string;
  tabLabel: string;
  heading: string;
  badge: string;
  badgeColor: string;
  nature: string;
  typicalLanguage: string;
  legalStanding: string;
  recommendedAction: string;
  governingRule: string;
}

const SCENARIOS: DiagnosticScenario[] = [
  {
    id: "repudiated",
    tabLabel: "Repudiation (Contract Refusal)",
    heading: "Substantive Denial of Liability / Contract Breach Allegation",
    badge: "Repudiation Letter",
    badgeColor: "bg-red-100 text-red-800 border-red-200",
    nature:
      "The insurer asserts that no legal or contractual liability exists under the policy. This denial attacks the substance of the claim—such as non-disclosure of pre-existing disease (PED), alleged misrepresentation at proposal, permanent policy exclusion, or lack of coverage under Section 45 of the Insurance Act 1938.",
    typicalLanguage:
      "'We regret to inform you that your claim has been repudiated under Clause 4.1 (Non-Disclosure of Material Facts / Pre-Existing Disease). The insurer holds no liability under the contract.'",
    legalStanding:
      "This cannot be resolved by providing missing receipts or diagnostic slips. The contract is either being treated as voidable or the specific treatment is permanently excluded. The policyholder must challenge the substantive legal basis before the Grievance Redressal Officer (GRO), via a formal legal notice, and subsequently before the Insurance Ombudsman or Consumer Court.",
    recommendedAction:
      "1. Secure treating doctor certificate certifying disease was acute and had no prior history.\n2. Obtain complete Indoor Case Papers (ICP) with initial admitting notes.\n3. Send an advocate statutory notice citing Section 45 and Supreme Court in Manmohan Nanda.\n4. Escalate to Bima Bharosa and file an Insurance Ombudsman complaint under Rule 13(1)(b).",
    governingRule: "Section 45 Insurance Act 1938 & IRDAI Master Circular 2024",
  },
  {
    id: "rejected",
    tabLabel: "Rejection (Technical / Procedural)",
    heading: "Procedural, Documentation, or Filing Window Non-Compliance",
    badge: "Rejection Letter / Query Notice",
    badgeColor: "bg-amber-100 text-amber-800 border-amber-200",
    nature:
      "The claim is refused due to technical, procedural, or documentation shortfalls. The insurer does not allege fraud, dishonesty, or breach of contract. Examples include missing hospital pharmacy bill receipts, delayed claim submission beyond 30 days post-discharge, or an unverified TPA query response.",
    typicalLanguage:
      "'Your claim has been closed / rejected due to non-submission of required documents (breakup of investigation bills and discharge summary) within the stipulated timeline.'",
    legalStanding:
      "The insurance policy remains 100% valid and operational. Under Supreme Court precedent (Gurmel Singh v. National Insurance, 2022) and IRDAI circulars, genuine consumer claims cannot be rejected mechanically on hyper-technical or procedural grounds if the underlying loss and hospitalisation are authentic.",
    recommendedAction:
      "1. Compile the exact missing documents identified in the deficiency memo.\n2. Draft a formal representation explaining the genuine delay reasons with hospital proof.\n3. Submit for file re-opening under IRDAI claims processing timelines.\n4. If the insurer obstinately refuses to re-open within 15 days, issue a formal demand notice.",
    recommendedActionLink: "/legal-notice-to-insurance-company-claim-rejection-recovery",
    governingRule: "Supreme Court in Gurmel Singh (2022) & IRDAI PPI Regulations",
  },
  {
    id: "cashless-denied",
    tabLabel: "Cashless Denial at Discharge",
    heading: "Cashless Facility Denied ≠ Final Reimbursement Rejection",
    badge: "Cashless Denial Memo",
    badgeColor: "bg-blue-100 text-blue-800 border-blue-200",
    nature:
      "The Third-Party Administrator (TPA) or insurer rejects the network hospital's pre-authorization request or denies cashless settlement at the time of patient discharge, forcing the patient to pay out of pocket before leaving the hospital.",
    typicalLanguage:
      "'Cashless facility is denied as the treating diagnosis requires further clinical evaluation and scrutiny of past medical records. The insured may apply for reimbursement post-discharge.'",
    legalStanding:
      "Denial of cashless facility is NOT a claim repudiation. It is solely a withdrawal of the immediate direct-settlement credit facility. Under IRDAI Master Circular 2024, an insurer or TPA cannot repudiate a reimbursement claim simply because cashless authorization was previously declined during an emergency.",
    recommendedAction:
      "1. Pay the hospital dues and collect original itemized bills, payment receipts, and discharge summary.\n2. Obtain hospital seal and signature on original investigation reports.\n3. Lodge a formal reimbursement claim within 15 to 30 days of discharge.\n4. If the insurer then issues a repudiation letter, escalate immediately to legal notice and Ombudsman.",
    recommendedActionLink: "/health-insurance-claim-rejection-reasons-counter",
    governingRule: "IRDAI Master Circular 2024 (Cashless 1-Hour & Discharge 3-Hour TAT)",
  },
];

export default function ClaimDifferenceDiagnosticTabs() {
  const [activeTab, setActiveTab] = useState<string>("repudiated");

  const current = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full bg-white border border-slate-200 rounded-2xl p-4 sm:p-6 md:p-8 shadow-sm my-8">
      <div className="flex flex-wrap items-center gap-2 pb-4 border-b border-slate-100 mb-6">
        {SCENARIOS.map((scenario) => (
          <button
            key={scenario.id}
            type="button"
            onClick={() => setActiveTab(scenario.id)}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === scenario.id
                ? "bg-slate-900 text-white shadow-md shadow-slate-900/20"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            {scenario.tabLabel}
          </button>
        ))}
      </div>

      <div className="space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h3 className="text-lg sm:text-xl font-bold text-slate-900">{current.heading}</h3>
          <span className={`px-3 py-1 rounded-full text-xs font-bold border ${current.badgeColor}`}>
            {current.badge}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
          <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-4">
            <h4 className="font-bold text-slate-900 mb-1.5 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-red-600" />
              Core Nature of the Denial
            </h4>
            <p className="text-slate-600 leading-relaxed">{current.nature}</p>
          </div>

          <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-4">
            <h4 className="font-bold text-slate-900 mb-1.5 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-blue-600" />
              Typical Wording on Insurance Letter
            </h4>
            <p className="text-slate-700 font-mono text-[11px] sm:text-xs leading-relaxed italic bg-white p-2.5 rounded-lg border border-slate-200">
              {current.typicalLanguage}
            </p>
          </div>
        </div>

        <div className="bg-red-50/50 border border-red-100 rounded-xl p-4 text-xs sm:text-sm">
          <h4 className="font-bold text-red-950 mb-1.5">Legal Standing &amp; Contract Validity</h4>
          <p className="text-slate-700 leading-relaxed">{current.legalStanding}</p>
        </div>

        <div className="bg-emerald-50/50 border border-emerald-100 rounded-xl p-4 text-xs sm:text-sm">
          <h4 className="font-bold text-emerald-950 mb-2">Recommended Recovery Pathway</h4>
          <div className="text-slate-700 whitespace-pre-line leading-relaxed mb-3">
            {current.recommendedAction}
          </div>
          <div className="pt-2 border-t border-emerald-200/60 flex flex-wrap items-center justify-between gap-2 text-xs font-semibold text-emerald-900">
            <span>Statutory Benchmark: {current.governingRule}</span>
            <Link
              href="/legal-notice-to-insurance-company-claim-rejection-recovery"
              className="text-red-700 hover:text-red-900 underline font-bold"
            >
              Issue Legal Notice &rarr;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
