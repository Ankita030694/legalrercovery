"use client";

import React, { useState } from "react";

interface ScenarioItem {
  id: string;
  tabLabel: string;
  badge: string;
  clauseValid: boolean;
  title: string;
  statutoryRule: string;
  recommendedTrack: string;
  steps: string[];
  warning: string;
}

const ODR_SCENARIOS: ScenarioItem[] = [
  {
    id: "legacy-unilateral",
    tabLabel: "Legacy Unilateral Clause",
    badge: "Void Under s.12(5) + CORE",
    clauseValid: false,
    title: "Existing NPA Portfolio Uses Unilateral Lender-Appointed Arbitrator Clause",
    statutoryRule:
      "Under Perkins Eastman (2020) and the 5-Judge Constitution Bench in Central Organisation for Railway Electrification (Nov 2024), any clause empowering the NBFC's MD, CEO, or Legal Head to unilaterally nominate a sole arbitrator is void under Section 12(5) read with the Seventh Schedule.",
    recommendedTrack:
      "Do NOT invoke unilateral arbitration. Issue a Section 21 Notice proposing an independent ODR Institution or seek mutual written consent to a neutral roster; if the borrower refuses within 30 days, approach the High Court under Section 11(6) or run parallel Section 25 PSS Act / Order 37 CPC.",
    steps: [
      "Audit the defaulted sanction template before issuing any Section 21 notice to flag unilateral appointment language.",
      "Serve an Advocate-drafted Loan Recall + Section 21 Notice proposing 3 independent institutional ODR providers or requesting mutual waiver/consent in writing under the proviso to s.12(5).",
      "If e-NACH or cheque bounce occurred within 30 days, simultaneously trigger Section 25 PSS Act / Section 138 NI Act criminal demand notices for immediate leverage.",
      "For high-value NPAs where the borrower ignores s.21, file a Section 11(6) petition before the jurisdictional High Court to secure a court-appointed neutral arbitrator.",
    ],
    warning:
      "Proceeding with an ex-parte award under a unilateral appointment clause is a guaranteed Section 34 annulment—courts routinely set aside such awards at the Section 36 execution stage as a nullity in law.",
  },
  {
    id: "curated-panel",
    tabLabel: "Curated 3-Member Panel",
    badge: "Struck Down by CORE (2024)",
    clauseValid: false,
    title: "Sanction Letter Mandates Selection From NBFC's Own Curated Arbitrator Panel",
    statutoryRule:
      "In Central Organisation for Railway Electrification v. ECI SPIC SMO MCML (Nov 2024), the 5-Judge Bench struck down asymmetric 'curated panel' clauses where one party restricts the counterparty to choosing from a pre-selected list maintained by the interested lender.",
    recommendedTrack:
      "Replace the in-house/curated panel clause in all live LOS/LMS templates immediately with a neutral third-party ODR Institution's open roster, where the institution—not the NBFC—assigns the sole arbitrator.",
    steps: [
      "Remove all clauses naming an 'NBFC-approved panel', 'internal ODR desk', or 'lender-curated list of retired judges'.",
      "Insert a clean reference to an independent, recognized Arbitral/ODR Institution administering proceedings under its published neutral rules.",
      "Specify that the institution's independent secretariat—not the lender—shall appoint a Sole Arbitrator from an open, non-exclusive panel.",
      "Require the appointed arbitrator to execute a mandatory Sixth Schedule independence disclosure under Section 12(1) before the first hearing.",
    ],
    warning:
      "Even if the borrower is given a 'choice of 3 names' from a list compiled solely by the NBFC, the 5-Judge CORE Bench held such unequal bargaining power violates Article 14 and Section 18 equal treatment.",
  },
  {
    id: "seat-vs-venue",
    tabLabel: "Seat vs. Virtual Venue",
    badge: "Enforceable if Seat Fixed",
    clauseValid: true,
    title: "Pan-India Digital Borrower Challenges ODR Jurisdiction & Hearing Location",
    statutoryRule:
      "Under BGS SGS Soma JV v. NHPC Ltd. (2020) 4 SCC 234, the designated 'seat' of arbitration confers exclusive supervisory jurisdiction on that High Court/Commercial Court, whereas 'venue' (including virtual ODR hearings) is merely a convenient place of sitting.",
    recommendedTrack:
      "Explicitly separate 'Seat of Arbitration' (e.g., Mumbai, Delhi, Bengaluru, or Chennai) from 'Mode/Venue of Hearings' (online/virtual ODR platform) inside the loan agreement clause.",
    steps: [
      "Draft an unambiguous 'Seat' sub-clause: 'The juridical seat of arbitration shall be [City], India, and courts at [City] alone shall have exclusive supervisory jurisdiction.'",
      "Add a separate 'Virtual Conduct' sub-clause: 'All pleadings, evidence, and hearings shall be conducted online via video-conferencing and electronic filings under Section 29B fast-track procedure.'",
      "Avoid conflicting jurisdiction clauses elsewhere in the sanction letter (e.g., do not write 'courts at Borrower's city' in the general governing-law paragraph).",
      "Ensure the final Section 31 award records the juridical seat clearly so Section 36 execution can be transferred cleanly to the borrower's asset location.",
    ],
    warning:
      "Vague phrases like 'arbitration shall be held online' without a named Indian city as the juridical Seat invite endless Section 11/34 territorial jurisdiction challenges across multiple state High Courts.",
  },
  {
    id: "clickwrap-bsa63",
    tabLabel: "Click-Wrap & Stamp Duty",
    badge: "Enforceable with BSA s.63",
    clauseValid: true,
    title: "Fintech Borrower Denies Signing Physical Arbitration Agreement or Claims Under-Stamping",
    statutoryRule:
      "Section 7(4)(b) of the Arbitration Act read with Section 10A of the IT Act, 2000 validates electronic arbitration agreements. Under the 7-Judge Bench in In Re: Interplay (Dec 2023), non-stamping or deficient stamping is a curable defect under Section 16 and does not void the arbitration clause.",
    recommendedTrack:
      "Preserve immutable click-wrap OTP/Aadhaar e-Sign audit logs paired with a Section 63 BSA 2023 certificate and e-stamp trail from NeSL/SHCIL.",
    steps: [
      "Capture timestamped Aadhaar e-Sign / OTP consent hash, borrower IP address, device ID, and loan agreement PDF checksum at disbursal.",
      "Issue a statutory Section 63 Bharatiya Sakshya Adhiniyam, 2023 certificate signed by the NBFC's IT/authorized officer alongside the Statement of Claim.",
      "Attach state-specific e-stamp duty payment receipts (or cure any shortfall before the Sole Arbitrator under Section 33/35 of the Stamp Act if raised).",
      "Serve all Section 21 and arbitral notices to the borrower's KYC-verified email and WhatsApp number in addition to Speed Post RPAD.",
    ],
    warning:
      "Missing Section 63 BSA certificates or unverified app screenshots allow defaulting borrowers to dispute the existence of the Section 7 arbitration agreement during Section 34 set-aside proceedings.",
  },
];

export default function OdrClauseScenarioTabs() {
  const [activeId, setActiveId] = useState<string>(ODR_SCENARIOS[0].id);
  const current = ODR_SCENARIOS.find((s) => s.id === activeId) || ODR_SCENARIOS[0];

  return (
    <div className="w-full">
      {/* Tab Buttons */}
      <div
        role="tablist"
        aria-label="NBFC ODR Clause Scenarios"
        className="flex flex-wrap gap-2 mb-5"
      >
        {ODR_SCENARIOS.map((item) => {
          const isActive = item.id === activeId;
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveId(item.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer border ${
                isActive
                  ? "bg-[#DC2626] text-white border-[#DC2626] shadow-sm"
                  : "bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200"
              }`}
            >
              {item.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Scenario Card */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <span
            className={`inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider border ${
              current.clauseValid
                ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                : "bg-red-50 text-[#DC2626] border-red-200"
            }`}
          >
            {current.badge}
          </span>
          <span className="text-[11px] font-semibold text-slate-500">
            Arbitration Act, 1996 &amp; BSA 2023
          </span>
        </div>

        <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">
          {current.title}
        </h3>

        <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
          <div className="bg-white border border-slate-200 rounded-xl p-4">
            <p className="font-bold text-slate-900 mb-1">Statutory &amp; Precedent Position</p>
            <p>{current.statutoryRule}</p>
          </div>

          <div className="bg-slate-900 text-slate-100 rounded-xl p-4">
            <p className="text-[11px] font-bold uppercase tracking-wider text-red-400 mb-1">
              Recommended GC Action Track
            </p>
            <p className="text-xs sm:text-sm leading-relaxed">{current.recommendedTrack}</p>
          </div>

          <div>
            <p className="font-bold text-slate-900 mb-2">Execution Checklist:</p>
            <ol className="space-y-2 list-decimal list-inside">
              {current.steps.map((step, i) => (
                <li key={i} className="text-slate-700">
                  {step}
                </li>
              ))}
            </ol>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-amber-900">
            <p className="font-bold text-xs uppercase tracking-wider text-amber-800 mb-1">
              Section 34 / 36 Risk Warning
            </p>
            <p>{current.warning}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
