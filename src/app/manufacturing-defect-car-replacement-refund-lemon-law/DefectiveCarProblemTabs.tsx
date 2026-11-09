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
    id: "powertrain-defect",
    tabLabel: "Engine & Transmission",
    title: "Recurring Engine Stalling, DCT/AMT Shudder & Chronic Limp-Home Mode",
    cause:
      "A frequent nightmare for buyers of new internal combustion engine (ICE) or hybrid vehicles is intermittent powertrain breakdown: dual-clutch transmission (DCT) overheating, automated manual transmission (AMT) jerky juddering, sudden engine stalling at 80 km/h on expressways, and repeated check-engine illumination. Dealerships routinely perform ECU software resets or replace minor clutch actuators, returning the car only for the failure to reoccur within 200 km.",
    legalBasis:
      "Under Section 84(1)(a) & (e) of the Consumer Protection Act, 2019, a product manufacturer is strictly liable where a product contains a manufacturing defect or does not conform to the express warranty. In landmark judgments including Maruti Suzuki v. Rajiv Kumar Mittal and Tata Motors v. Rajesh Tyagi, the National Consumer Commission (NCDRC) held that recurring powertrain failure requiring repeated workshop visits within the warranty period constitutes an inherent defect. When three repair attempts fail to remedy the problem, the consumer cannot be compelled to retain an unreliable vehicle.",
    steps: [
      {
        step: "Insist on Precise Job Card Defect Descriptions",
        description:
          "Never permit service advisors to write vague remarks like 'general checkup' or 'running repair'. Ensure the opened job card explicitly states: 'Vehicle stalled at high speed with check-engine light' or 'Severe transmission judder in 1st/2nd gear'.",
      },
      {
        step: "Extract OBD-II Diagnostic Trouble Codes (DTC)",
        description:
          "Demand a printed or digital copy of the OEM diagnostic scan report showing active and stored DTC fault codes before the service centre clears the vehicle memory.",
      },
      {
        step: "Serve Joint Statutory Demand for Replacement or Refund",
        description:
          "If the vehicle visits the workshop 3 times for the same powertrain defect, serve a formal 15-day advocate legal notice to the manufacturer's Managing Director and the dealership Principal demanding a new replacement vehicle or 100% invoice refund.",
      },
    ],
    statutoryRule: "Section 84(1)(a) CPA 2019 & NCDRC Powertrain Precedents",
  },
  {
    id: "ev-battery-failure",
    tabLabel: "EV Battery & BMS",
    title: "Electric Vehicle Traction Battery Degradation, Thermal Faults & Range Collapse",
    cause:
      "Electric four-wheeler owners frequently encounter severe battery management system (BMS) failures, rapid state-of-charge (SOC) cliff-drops (e.g., dropping from 40% to 5% within 3 km), refusal to accept DC fast charging, and persistent high-voltage isolation faults. Service centres often ground the EV for 60 to 90 days citing high-voltage battery pack import or warranty claims approval from remote overseas headquarters.",
    legalBasis:
      "Under Section 2(34) and Section 84 of CPA 2019, an electric vehicle whose high-voltage traction pack fails repeatedly suffers from design and manufacturing defects. Under Central Motor Vehicles Rules (CMVR) 127C and AIS-156 safety standards, traction battery defects that pose isolation or fire hazards require mandatory manufacturer intervention. Inordinate repair delays exceeding 30 days without providing an equivalent courtesy EV constitute gross deficiency in service.",
    steps: [
      {
        step: "Record Live Telematics & Instrument Cluster Video",
        description:
          "Record smartphone video evidence of the sudden SOC percentage plunge, range collapse, and instrument cluster error screens before turning off the vehicle.",
      },
      {
        step: "Demand Job Card Gate Passes with Exact Odometer Readings",
        description:
          "Ensure every day the EV remains stationed at the workshop is documented via physical or electronic gate passes and unclosed job cards to compute workshop custody days.",
      },
      {
        step: "Issue Advocate Notice for Battery Replacement or Complete Vehicle Repurchase",
        description:
          "Invoke the 8-year OEM battery warranty and CPA 2019 product liability provisions to demand a brand new sealed battery pack or full vehicle buyback plus loan interest indemnification.",
      },
    ],
    statutoryRule: "AIS-156 Safety Norms & Section 84 CPA 2019 Product Liability",
  },
  {
    id: "critical-safety-defect",
    tabLabel: "Safety & Airbag Failure",
    title: "Airbag Non-Deployment, Steering EPS Lock & ADAS Phantom Braking",
    cause:
      "The most dangerous class of vehicle defect involves active and passive safety system failures: electronic power steering (EPS) freezing while navigating corners, emergency autonomous emergency braking (AEB) triggering suddenly on empty open roads (phantom braking), and airbags failing to deploy during severe frontal or side collisions resulting in consumer injuries.",
    legalBasis:
      "In the landmark ruling Hyundai Motor India Ltd. v. Shailendra Bhatnagar (Civil Appeal No. 3001 of 2022), the Supreme Court of India decisively rejected car manufacturers' technical excuses regarding collision angles and impact sensors, holding that the failure of airbags to deploy during a substantial collision constitutes severe product defect and gross deficiency in service, warranting punitive damages and replacement compensation. Under Section 110A of the Motor Vehicles Act, 1988, such safety defects trigger mandatory recall liabilities.",
    steps: [
      {
        step: "Preserve Crash / Incident Evidence & Vehicle Event Data",
        description:
          "Do not permit the dealer to alter or erase the Event Data Recorder (EDR) or Airbag Control Module (ACM) crash log. Photograph damage deformation and steering assembly thoroughly.",
      },
      {
        step: "Obtain Independent Government / Forensic Technical Assessment",
        description:
          "Apply under Section 38(2)(c) of CPA 2019 for testing by an authorized laboratory (e.g., ARAI, ICAT, or a State Government Engineering College automotive department).",
      },
      {
        step: "Claim Strict Product Liability Damages for Bodily Harm & Vehicle Value",
        description:
          "File a comprehensive product liability claim under Chapter VI of CPA 2019 before the District, State, or National Commission seeking full vehicle refund plus medical and mental distress compensation.",
      },
    ],
    statutoryRule: "Supreme Court in Hyundai (2022) & Section 110A Motor Vehicles Act",
  },
  {
    id: "chronic-electrical",
    tabLabel: "Electrical & Infotainment",
    title: "Parasitic Battery Drain, Digital Cluster Blackouts & Systemic ECU Freezes",
    cause:
      "Modern connected vehicles depend heavily on interconnected control area network (CAN-bus) architectures. When wiring harness flaws, parasitic body control module (BCM) drains, or defective instrument cluster screens occur, the vehicle battery dies overnight repeatedly, screens go completely blank while driving at night, and advanced driver assistance systems (ADAS) shut down without warning.",
    legalBasis:
      "A brand new motor vehicle must be fit for the ordinary purpose of reliable and safe road transport under Section 16 of the Sale of Goods Act, 1930 and Section 2(10) of CPA 2019. Where electronic gremlins force a vehicle into the service bay multiple times without a lasting resolution, consumer courts hold that systemic electrical integration failures constitute a manufacturing defect entitling the buyer to replacement.",
    steps: [
      {
        step: "Maintain Continuous Roadside Assistance (RSA) Dispatch Logs",
        description:
          "Compile RSA jump-start job cards, tow truck dispatch receipts, and date-stamped call logs proving that the brand new vehicle stranded you repeatedly.",
      },
      {
        step: "Refuse Acceptance Without a Certified Master Technician Sign-Off",
        description:
          "Refuse to take delivery after repairs unless the workshop General Manager provides a written declaration specifying the root cause identified and parts replaced.",
      },
      {
        step: "Send Pre-Litigation Legal Notice Before Warranty Expiry",
        description:
          "Ensure legal notice is served while the vehicle is under manufacturer standard warranty, establishing pre-litigation documentation of continuous non-rectification.",
      },
    ],
    statutoryRule: "Section 16 Sale of Goods Act & Section 2(10) CPA 2019",
  },
];

export default function DefectiveCarProblemTabs() {
  const [activeTab, setActiveTab] = useState<string>(PROBLEMS[0].id);
  const currentProblem = PROBLEMS.find((p) => p.id === activeTab) || PROBLEMS[0];

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      {/* Tab Navigation Header */}
      <div className="border-b border-slate-200 bg-slate-50/80 p-2 sm:p-3">
        <div className="flex flex-wrap gap-1.5 sm:gap-2" role="tablist" aria-label="Vehicle Defect Problem Scenarios">
          {PROBLEMS.map((problem) => {
            const isActive = activeTab === problem.id;
            return (
              <button
                key={problem.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveTab(problem.id)}
                className={`px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#DC2626] text-white shadow-md shadow-red-900/20"
                    : "bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-900 border border-slate-200"
                }`}
              >
                {problem.tabLabel}
              </button>
            );
          })}
        </div>
      </div>

      {/* Tab Content Display */}
      <div className="p-5 sm:p-7 md:p-8 space-y-6">
        <div>
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
            <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-red-100 text-red-800">
              Verified Legal Antidote
            </span>
            <span className="text-xs font-semibold text-slate-500">
              {currentProblem.statutoryRule}
            </span>
          </div>
          <h3 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 tracking-tight">
            {currentProblem.title}
          </h3>
        </div>

        {/* Breakdown of Cause & Legal Ground */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-500 mb-1.5">
              The Reality &amp; Dealer Evasion
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
              {currentProblem.cause}
            </p>
          </div>

          <div className="p-4 bg-red-50/60 rounded-xl border border-red-200/70">
            <h4 className="text-xs font-black uppercase tracking-wider text-red-800 mb-1.5">
              CPA 2019 &amp; Judicial Ground
            </h4>
            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
              {currentProblem.legalBasis}
            </p>
          </div>
        </div>

        {/* Actionable Steps */}
        <div className="space-y-3 pt-2">
          <h4 className="text-xs font-black uppercase tracking-wider text-slate-900">
            Actionable Evidence &amp; Legal Escalation Steps:
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {currentProblem.steps.map((s, idx) => (
              <div key={idx} className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                <span className="text-[10px] font-black uppercase tracking-wider text-[#DC2626]">
                  Step 0{idx + 1}
                </span>
                <p className="text-xs font-bold text-slate-900">{s.step}</p>
                <p className="text-[11px] text-slate-600 leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-2 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-xs text-slate-500">
            Need an advocate notice drafted for this specific vehicle breakdown?
          </p>
          <Link
            href="/legal-notice-charges"
            className="text-xs font-bold text-[#DC2626] hover:underline inline-flex items-center gap-1"
          >
            Review Legal Notice Rates &amp; Delivery Guarantees →
          </Link>
        </div>
      </div>
    </div>
  );
}
