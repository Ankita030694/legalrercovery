"use client";

import React, { useState } from "react";

interface Scenario {
  id: string;
  badge: string;
  title: string;
  stumblingBlock: string;
  statutoryExposure: string;
  recoverySOP: string[];
  keyAuthority: string;
}

const SCENARIOS: Scenario[] = [
  {
    id: "utiitsl-bpa",
    badge: "UTIITSL BPA Algorithm Rejection",
    title: "Arbitrary Deductions & Algorithmic Query Loops on UTIITSL Portal",
    stumblingBlock:
      "Empanelled hospitals submitting CGHS, ECHS, or ESIC bills via the UTIITSL Bill Processing Agency (BPA) encounter repetitive, automated technical queries (e.g., 'missing pre-auth verification code' or 'implant invoice illegible') raised past the mandatory 15-day review window. Claims are unilaterally curtailed or rejected without reasoned medical grounds.",
    statutoryExposure:
      "Under the CGHS / ECHS Memorandum of Agreement (MoA), the BPA cannot sit on claims indefinitely or impose arbitrary price haircuts below the notified CGHS rate list. Withholding undisputed portions of the bill while disputing minor line items violates basic contractual reciprocity and fair procedure.",
    recoverySOP: [
      "Extract the full UTIITSL claim history: pre-auth approval PDF, admission/discharge timestamps, biometric verification logs, and query response trails.",
      "Issue a formal Rule 12 Escalation Letter to the Additional Director (CGHS) or Regional Director (ESIC) highlighting the breach of the 15-day SLA.",
      "Establish that under Central Government BPA norms, undisputed bill components must be released immediately at 70%–80% provisional rates.",
      "Serve a statutory Section 80 CPC Notice citing arbitrary deductions as a breach of contract by the Union of India / MoHFW / MoD.",
    ],
    keyAuthority: "MoHFW CGHS Empanelment MoA Clause 10 & Delhi HC Mandate on BPA SLAs",
  },
  {
    id: "pmjay-sha",
    badge: "PM-JAY SHA Treasury Freeze",
    title: "Ayushman Bharat (AB-PMJAY) State Health Agency 90–180+ Day Dues",
    stumblingBlock:
      "Hospitals treating PM-JAY and state scheme beneficiaries (Aarogyasri, RGJAY, Chiranjeevi, BSKY) face systematic payment freezes lasting 6 to 18 months because State Health Agencies (SHAs) exhaust their budget tranches or delay State Matching Grants to the escrow account, despite TMS portal approval.",
    statutoryExposure:
      "Under National Health Authority (NHA) Operational Guidelines, claims approved on the Transaction Management System (TMS) must be disbursed within 15 calendar days. Delayed disbursements attract penal interest payable to the empanelled healthcare provider (EHCP) at 1% per month for delays exceeding 30 days.",
    recoverySOP: [
      "Download certified TMS claims ledger: Pre-Auth ID, Case Number, Speciality Code, Admission Date, Discharge Date, and Approved Claim Amount.",
      "File a time-stamped Stage-1 Appeal before the District Grievance Redressal Committee (DGRC) and State Grievance Redressal Committee (SGRC).",
      "Issue a composite Demand Notice to the CEO, State Health Agency (SHA) and Secretary (Health & Family Welfare) demanding principal plus NHA penal interest.",
      "Initiate High Court Article 226 Writ Petition for Mandamus against the State Government for releasing admitted healthcare treasury appropriations.",
    ],
    keyAuthority: "NHA Guidelines Chapter 7 (Claims Adjudication) & SGRC Grievance Rules",
  },
  {
    id: "echs-regional",
    badge: "ECHS Regional Clearance Paralysis",
    title: "ECHS Polyclinic & Regional Centre Aged Arrears Exceeding 12–24 Months",
    stumblingBlock:
      "Bills referred by ECHS Polyclinics and approved by Station Headquarters remain unpaid for over a year due to fiscal year-end budget lapses, internal administrative transfers, or disputed offline referral papers, accumulating ₹1 Cr to ₹10 Cr in aged debt for private multi-specialty centres.",
    statutoryExposure:
      "Private hospitals provide life-saving critical care to ex-servicemen and war veterans under solemn MoAs executed on behalf of the President of India through the Department of Ex-Servicemen Welfare (DoESW), Ministry of Defence. Non-payment violates Article 14 (non-arbitrariness) and the Doctrine of Legitimate Expectation.",
    recoverySOP: [
      "Compile dual-track dossier: ECHS Smart Card referral slips, emergency admission approvals, itemized pharmacy/implant sheets, and BPA tracking receipts.",
      "Submit a consolidated reconciliation representation to the Central Organisation ECHS (MD ECHS) and Regional Centre Director.",
      "Serve a 60-day Section 80 CPC Notice on the Secretary, Department of Ex-Servicemen Welfare (DoESW), Ministry of Defence, New Delhi.",
      "File a High Court Writ of Mandamus invoking the ABL International doctrine for immediate release of undisputed defense healthcare dues.",
    ],
    keyAuthority: "DoESW Govt of India MoA & Supreme Court ABL International Doctrine",
  },
  {
    id: "esic-tieup",
    badge: "ESIC Tie-Up Disallowances",
    title: "ESIC Super-Specialty Tie-Up Hospital Non-Payment & Stent Rate Disputes",
    stumblingBlock:
      "ESIC-empanelled hospitals providing super-specialty cardiac, oncology, and nephrology care face unilateral disallowance of drug/consumable bills by the Senior State Medical Commissioner (SSMC) on the pretext that hospital tariffs exceed ESIC ceiling rates, even when pre-authorized.",
    statutoryExposure:
      "Under the Employees' State Insurance Act, 1948 and ESIC Headquarters Empanelment Circulars, tie-up hospitals are legally entitled to agreed package rates for referred insured persons (IPs). Retrospective deductions on pre-authorized procedures constitute an actionable breach of contract.",
    recoverySOP: [
      "Map every disputed claim against the original ESIC Referral Letter and Pre-Authorization approval issued by the Medical Superintendent (MS) of the ESIC Hospital.",
      "Issue a formal contractual rebuttal to the SSMC / State Medical Officer highlighting that tariff terms cannot be altered post-procedure.",
      "Serve a legal notice demanding release of the withheld secondary/tertiary care funds along with commercial interest under the Interest Act, 1978.",
      "Escalate to the Director General, ESIC Headquarters, followed by High Court Writ proceedings or arbitration as stipulated in the ESIC MoA.",
    ],
    keyAuthority: "ESI Act 1948 Section 59 & ESIC Super-Specialty Referral Guidelines",
  },
];

export default function HospitalEmpanelledScenarioTabs() {
  const [activeTab, setActiveTab] = useState(SCENARIOS[0].id);

  const activeScenario = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full bg-slate-900 text-white rounded-2xl p-5 sm:p-7 border border-slate-800 shadow-xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-5 border-b border-slate-800">
        <div>
          <span className="text-red-400 text-xs font-bold uppercase tracking-wider">
            Operational Diagnostics &bull; 4 Core Failure Modes
          </span>
          <p className="text-sm text-slate-300 font-medium mt-0.5">
            Select a government scheme bottleneck to view the exact statutory recovery path:
          </p>
        </div>
        <span className="text-[11px] font-mono text-slate-400 bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700">
          IND-03 Healthcare RCM
        </span>
      </div>

      {/* Tabs list */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-6">
        {SCENARIOS.map((scenario) => {
          const isActive = scenario.id === activeTab;
          return (
            <button
              key={scenario.id}
              type="button"
              onClick={() => setActiveTab(scenario.id)}
              className={`p-3 rounded-xl text-left transition-all duration-150 border ${
                isActive
                  ? "bg-[#DC2626] text-white border-red-500 shadow-md"
                  : "bg-slate-800/70 text-slate-300 border-slate-700/80 hover:bg-slate-800 hover:text-white"
              }`}
            >
              <span
                className={`block text-[10px] font-bold uppercase tracking-wider mb-1 ${
                  isActive ? "text-red-100" : "text-slate-400"
                }`}
              >
                {scenario.badge}
              </span>
              <span className="block text-xs font-semibold leading-snug line-clamp-2">
                {scenario.title}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Tab Content Card */}
      <div className="bg-slate-800/90 rounded-xl p-5 sm:p-6 border border-slate-700/80">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-red-950/80 text-red-400 border border-red-800/60">
            {activeScenario.badge}
          </span>
          <span className="text-[11px] text-slate-400 font-mono">
            Standard: {activeScenario.keyAuthority}
          </span>
        </div>

        <p className="text-base sm:text-lg font-bold text-white mb-4">
          {activeScenario.title}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5 text-xs sm:text-sm">
          <div className="bg-slate-900/80 p-4 rounded-lg border border-slate-700/60">
            <span className="text-amber-400 font-bold block mb-1 uppercase text-[11px] tracking-wider">
              1. Institutional Bottleneck:
            </span>
            <p className="text-slate-300 leading-relaxed">{activeScenario.stumblingBlock}</p>
          </div>
          <div className="bg-slate-900/80 p-4 rounded-lg border border-slate-700/60">
            <span className="text-red-400 font-bold block mb-1 uppercase text-[11px] tracking-wider">
              2. Legal Violation &amp; State Exposure:
            </span>
            <p className="text-slate-300 leading-relaxed">{activeScenario.statutoryExposure}</p>
          </div>
        </div>

        <div>
          <span className="text-emerald-400 font-bold block mb-2 uppercase text-[11px] tracking-wider">
            3. Operational Recovery &amp; Legal Escalation SOP:
          </span>
          <ol className="space-y-2 text-xs sm:text-sm text-slate-200">
            {activeScenario.recoverySOP.map((step, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <span className="leading-relaxed">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
