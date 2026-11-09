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
    id: "odometer-tampering",
    tabLabel: "Odometer Rollback",
    title: "Odometer Tampering & Falsified Mileage on Digital Dashboards",
    cause:
      "Pre-owned car dealers or previous sellers use digital reprogramming tools or OBD scan manipulators to roll back the vehicle odometer reading (e.g., rolling down 1,20,000 km to 45,000 km) to command a higher resale price. Platform inspection teams frequently fail to cross-verify the vehicle's historical service records with OEM dealer databases, leading buyers to purchase heavily aged, wear-compromised cars under false mileage representations.",
    legalBasis:
      "Falsifying odometer readings constitutes criminal cheating under Section 318 of the Bharatiya Nyaya Sanhita, 2023 (formerly IPC Section 420) and an egregious Unfair Trade Practice under Section 2(47) of the Consumer Protection Act, 2019. Under Section 16 of the Sale of Goods Act, 1930, goods sold by description must match the condition represented. The Supreme Court and State Commissions have held that concealing actual usage to inflate prices entitles the buyer to a 100% refund, cancelation of the contract, and punitive damages.",
    steps: [
      {
        step: "Pull Official Dealership Historical Records",
        description:
          "Visit the brand's authorized service center (e.g., Maruti Suzuki, Hyundai, Honda, Tata) with the RC copy. Request a stamped 'Vehicle Service History' printout showing recorded mileage entries during past periodic maintenance visits.",
      },
      {
        step: "Preserve Platform Inspection Certificate & Listing",
        description:
          "Save the platform inspection report, purchase invoice, delivery handover memo, and web listing snapshot showing the advertised mileage reading as conclusive documentary evidence.",
      },
      {
        step: "Serve Advocate Legal Notice for Fraud & Refund",
        description:
          "Serve a formal statutory legal demand notice on the platform and dealership alleging cheating under BNS 318 and unfair trade practice under CPA 2019, demanding full refund within 15 days or facing prosecution and consumer forum filing.",
      },
    ],
    statutoryRule: "Section 2(47) Consumer Protection Act 2019 & Section 318 Bharatiya Nyaya Sanhita 2023",
  },
  {
    id: "hidden-accident-flood",
    tabLabel: "Accident & Flood Damage",
    title: "Concealed Structural Chassis Damage, Accidental Welds or Flood Submersion",
    cause:
      "Platforms market vehicles as having passed a '140-point' or '200-point rigorous quality check' with guaranteed 'zero accidental history'. In reality, vehicles that suffered total-loss collisions, structural pillar/apron welding, chassis realignment, or deep flood submergence (causing hidden ECU oxidation, harness corrosion, and cabin mildew) are cosmetically patched and sold without disclosure.",
    legalBasis:
      "Under Section 16(1) and Section 16(2) of the Sale of Goods Act, 1930, there is an implied condition of merchantable quality. Selling an accident-compromised or flood-affected vehicle without express written disclosure constitutes active misrepresentation and product liability violation under Chapter VI of the Consumer Protection Act, 2019. Buyers are legally entitled to repudiate the contract and demand restitution under Section 65 of the Indian Contract Act, 1872.",
    steps: [
      {
        step: "Get an Independent Authorized PDI / Structural Audit",
        description:
          "Take the car to an authorized OEM workshop or an independent IRDAI-licensed automotive surveyor. Obtain an inspection sheet noting body apron cuts, paint thickness gauge anomalies (>250 microns), repainted roof/pillars, or flood watermark marks on internal wiring harnesses.",
      },
      {
        step: "Notify Platform Within Return or Discovery Window",
        description:
          "Submit a formal return request via email to the platform's support and grievance officer. Attach the technical surveyor report and demand full vehicle return under their 'No-Questions-Asked Money-Back' guarantee.",
      },
      {
        step: "Escalate Via Statutory Advocate Demand Notice",
        description:
          "If the platform rejects the return alleging 'wear-and-tear' or customer negligence, immediately dispatch an advocate legal notice holding the platform strictly liable for deceptive advertising and deficiency of service.",
      },
    ],
    statutoryRule: "Section 16 Sale of Goods Act 1930 & Section 2(11) Consumer Protection Act 2019",
  },
  {
    id: "engine-gearbox-failure",
    tabLabel: "Engine / Transmission Failure",
    title: "Catastrophic Engine Seizure or Transmission Breakdown During Warranty",
    cause:
      "Shortly after delivery (often within days or weeks), the vehicle experiences critical mechanical breakdowns—such as cylinder compression failure, blown head gasket, oil sludge contamination, or automatic dual-clutch transmission (DCT/DSG) failure. When the buyer seeks warranty repairs, the platform's third-party warranty administrator repudiates coverage claiming 'pre-existing condition' or 'driver abuse'.",
    legalBasis:
      "Platforms that charge a premium for certified cars and offer written 3-month to 12-month warranties cannot unilaterally evade obligations through ambiguous exclusion clauses. The Central Consumer Protection Authority (CCPA) Guidelines on Unfair Contract Terms and Section 2(46) of the Consumer Protection Act, 2019 render one-sided warranty exclusions void. If a major powertrain component fails within days of purchase, it conclusively demonstrates a pre-existing latent defect present at the time of sale.",
    steps: [
      {
        step: "Record OBD-II Diagnostic Trouble Codes (DTC)",
        description:
          "Have the authorized brand service center run a complete ECU computer diagnostic scan. Obtain an official printout showing logged error codes (e.g., misfire, transmission slippage, camshaft timing faults) and their first occurrence timestamps.",
      },
      {
        step: "Lodge Written Warranty Claim with Complete Timeline",
        description:
          "Email platform warranty desk, ticket escalation team, and senior management. Attach the repair estimate and OBD diagnostic report, specifying that the defect manifested within the warranty / return period.",
      },
      {
        step: "Serve Legal Notice Demanding Free Overhaul or Full Repurchase",
        description:
          "Serve a 15-day statutory advocate notice demanding either a complete free-of-cost OEM powertrain replacement or total repurchase/refund of the vehicle alongside taxi reimbursement expenses.",
      },
    ],
    statutoryRule: "Section 2(46) & Chapter VI Consumer Protection Act 2019",
  },
  {
    id: "rc-transfer-challans",
    tabLabel: "RC & Challan Disputes",
    title: "Unreasonable RC Transfer Delay, Existing Hypothecation & Traffic Challans",
    cause:
      "Buyers pay hefty 'convenience and RC transfer fees' to used car platforms, but the Registration Certificate (RC) remains in the original owner's name for 6 to 12 months. In worse scenarios, the vehicle carries an undischarged bank loan hypothecation (Form 35 missing), an active RTO blacklisting, or accumulated unpaid high-speed e-challans from the prior owner.",
    legalBasis:
      "Under the Central Motor Vehicles Rules, 2022 (Amendment for Authorized Used Vehicle Dealers) and Section 50 of the Motor Vehicles Act, 1988, dealers holding Form 29C are legally responsible for vehicle custody, transfer documentation, and title handover. Furthermore, under Section 14 of the Sale of Goods Act, 1930, there is an implied warranty that the seller has the right to sell and that the goods are free from any charge or encumbrance. Selling an encumbered vehicle is an actionable breach of contract.",
    steps: [
      {
        step: "Query Parivahan Vahan Portal for Pending Dues",
        description:
          "Run a Parivahan RC status check and Echallan query. Download the complete list of pending unpaid challans, hypothecation status (financier name), and RTO blacklist/alert notices.",
      },
      {
        step: "Demand Clear Title or Instant NOC Transfer",
        description:
          "Send a written demand to the platform's RTO transfer operations team demanding immediate clearance of all pre-purchase challans, bank NOC submission, and expedited RC smart card dispatch within 14 days.",
      },
      {
        step: "Serve Advocate Legal Notice for Contract Cancellation",
        description:
          "If the platform cannot provide clear title or transfer RC within statutory timelines, serve a legal notice seeking total vehicle return, loan cancellation, refund of RC charges, and compensation for illegal driving risk.",
      },
    ],
    statutoryRule: "CMV Rules 2022 (Dealer Form 29C) & Section 14 Sale of Goods Act 1930",
  },
];

export default function UsedCarProblemTabs() {
  const [activeTab, setActiveTab] = useState<string>(PROBLEMS[0].id);
  const currentProblem = PROBLEMS.find((p) => p.id === activeTab) || PROBLEMS[0];

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-sm">
      {/* Tab Navigation Pill Bar */}
      <div className="flex flex-wrap gap-2 pb-4 border-b border-slate-200">
        {PROBLEMS.map((problem) => (
          <button
            key={problem.id}
            type="button"
            onClick={() => setActiveTab(problem.id)}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === problem.id
                ? "bg-[#DC2626] text-white shadow-sm"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            {problem.tabLabel}
          </button>
        ))}
      </div>

      {/* Tab Content Display */}
      <div className="pt-5 space-y-4">
        <div>
          <span className="text-[11px] font-extrabold uppercase tracking-wider text-red-600 bg-red-50 px-2.5 py-1 rounded-md">
            {currentProblem.statutoryRule}
          </span>
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 mt-2">
            {currentProblem.title}
          </h3>
        </div>

        <div className="space-y-3 text-xs sm:text-sm text-slate-700">
          <div>
            <strong className="text-slate-900 font-semibold block mb-0.5">
              Root Cause &amp; Platform Vulnerability:
            </strong>
            <p className="leading-relaxed">{currentProblem.cause}</p>
          </div>

          <div>
            <strong className="text-slate-900 font-semibold block mb-0.5">
              Statutory Basis &amp; Consumer Remedy:
            </strong>
            <p className="leading-relaxed">{currentProblem.legalBasis}</p>
          </div>
        </div>

        {/* Action Steps Grid */}
        <div className="pt-2">
          <strong className="text-slate-900 text-xs sm:text-sm font-semibold block mb-2">
            Immediate Recommended Action Steps:
          </strong>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {currentProblem.steps.map((st, i) => (
              <div
                key={i}
                className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 space-y-1"
              >
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-slate-900 text-white text-[10px] font-bold flex items-center justify-center shrink-0">
                    {i + 1}
                  </span>
                  <span className="text-xs font-bold text-slate-900 leading-tight">
                    {st.step}
                  </span>
                </div>
                <p className="text-[11px] text-slate-600 leading-relaxed pl-7">
                  {st.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
