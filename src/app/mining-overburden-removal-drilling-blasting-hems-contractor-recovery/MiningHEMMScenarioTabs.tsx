"use client";

import React, { useState } from "react";

interface ScenarioTab {
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

const SCENARIOS: ScenarioTab[] = [
  {
    id: "volumetric-survey",
    tabLabel: "Volumetric Survey Cut",
    title: "MDO or Leaseholder Rejecting Joint Total-Station / Drone OB Survey Sheets",
    cause:
      "After an overburden (OB) and rock-blasting contractor excavates 3 to 5 lakh bank cubic meters (BCM) of waste rock, the mine developer-cum-operator (MDO) or captive leaseholder refuses to certify the RA bill, claiming a 12–18% 're-survey variance' or unilateral stripping-ratio adjustment weeks after fresh benches have already been blasted and backfilled.",
    legalBasis:
      "Under Indian Contract Act, 1872 principles of estoppel and commercial measurement finality, once joint pre-excavation and post-excavation Total-Station / Drone LiDAR surveys are counter-signed by the site surveyor and pit manager—or once subsequent mining destroys the original bench profile—the principal cannot unilaterally re-open measured BCM quantities. Withholding certified RA bills or refusing joint sign-off triggers Arbitration Section 21 invocation and Commercial Court summary recovery.",
    steps: [
      {
        step: "1. Lock Pre- & Post-Blast Survey Coordinates Under BSA s.63",
        description:
          "Export raw Total-Station (.dxf/.csv) and Drone orthomosaic/point-cloud files with timestamped metadata, counter-signed field books, and a Section 63 BSA 2023 electronic evidence certificate before the pit geometry changes.",
      },
      {
        step: "2. Serve Formal Measurement Finality & RA Bill Demand Notice",
        description:
          "Issue a Fact-Verified Notice invoking the contract's joint-measurement clause, putting the MDO on notice that destroying bench topography via subsequent dumping bars any unilateral quantity deduction.",
      },
      {
        step: "3. Invoke Section 9 Interim Deposit & Section 21 Arbitration",
        description:
          "Seek an urgent Section 9 Arbitration & Conciliation Act order appointing an independent DGPS/survey commissioner and directing deposit of undisputed RA bill amounts.",
      },
    ],
    statutoryRule: "Arbitration Act s.9 & s.21 + Contract Act s.73 + BSA 2023 s.63",
  },
  {
    id: "ec-suspension-idle",
    tabLabel: "EC / Forest Idle Fleet",
    title: "Leaseholder Suspended Operations Over EC/Forest Clearance—Refusing Idle Charges",
    cause:
      "When a state pollution board, MoEFCC, or DGMS suspends mining operations due to the leaseholder's Environmental Clearance (EC), Forest Clearance (FC), or statutory safety lapse, 15 to 40 excavators, 40-ton Volvo/Scania tippers, and blast-hole drill rigs sit stranded inside the pit while ₹20L–₹60L/month NBFC EMIs keep ticking.",
    legalBasis:
      "Regulatory or EC/FC suspension caused by the mine owner's statutory non-compliance is not a Force Majeure excuse that shifts capital-idling losses onto the HEMM subcontractor. Under Sections 55 and 73 of the Indian Contract Act, 1872, preventing the contractor from performing entitles the contractor to contractual idle-fleet standing charges, minimum guaranteed BCM shortfall compensation, and fixed-overhead damages.",
    steps: [
      {
        step: "1. Serve Daily Idle-Fleet Attendance & Equipment Log Notices",
        description:
          "Submit daily machine-wise deployment sheets, operator attendance, and GPS/telematics idle-hour logs via official email and RPAD from Day 1 of the stoppage.",
      },
      {
        step: "2. Reject Unilateral Force Majeure Suspension Claims",
        description:
          "Send a formal legal rebuttal proving that EC/FC/CTO lapses are self-induced defaults of the leaseholder, preserving your right to standing charges and mobilization/demobilization costs.",
      },
      {
        step: "3. Trigger Termination for Convenience / Breach & Claim Idle Damages",
        description:
          "If stoppage exceeds the contractual cure window (typically 15–30 days), terminate for employer default and invoke Arbitration s.21 or Commercial Suit for idle-fleet arrears.",
      },
    ],
    statutoryRule: "Contract Act ss.55, 56 & 73 + Commercial Courts Act s.2(1)(c)",
  },
  {
    id: "diesel-blasting-cut",
    tabLabel: "Diesel & Blasting Cuts",
    title: "Arbitrary Free-Issue Diesel (HSD) & Explosive Reconciliation Deductions",
    cause:
      "Principals routinely supply free-issue High-Speed Diesel (HSD) and ANFO/emulsion explosives to OB contractors and then deduct ₹40 Lakh–₹1.5 Cr from final RA bills by alleging 'excess fuel burn per BCM' or 'over-break / powder-factor variance' without calibrating bowser flow meters or accounting for hard-rock strata shifts.",
    legalBasis:
      "Contractual free-issue reconciliation clauses require calibrated metering, joint daily issue slips, and geological strata verification. Unilateral debit notes raised months after consumption—ignoring hard-rock/waterlogged pit conditions or uncalibrated bowser meters—constitute unlawful set-off under Contract Act Section 73 and fail judicial scrutiny when countered with signed daily HSD indents and DGMS/PESO magazine issue registers.",
    steps: [
      {
        step: "1. Audit Daily HSD Bowser Slips vs. OEM Fuel-Burn Norms",
        description:
          "Compile daily signed diesel issue slips, HEMM hour-meter/odometer logs, and strata-change correspondence showing hard rock or extended haul-road gradients.",
      },
      {
        step: "2. Demand Joint Explosive & Powder-Factor Reconciliation",
        description:
          "Cross-verify PESO Form RE-11/RE-12 magazine issue logs and blast-pattern sheets to defeat inflated explosive-recovery debit notes.",
      },
      {
        step: "3. File Order XXXVII / Commercial Recovery for Wrongful Set-Off",
        description:
          "Challenge arbitrary credit-note deductions alongside certified RA bill balances, claiming 18% commercial interest or 3x RBI MSME compound interest where Udyam-eligible.",
      },
    ],
    statutoryRule: "Contract Act s.73 + MSMED Act ss.15–16 + Order XXXVII CPC",
  },
  {
    id: "gate-pass-blockade",
    tabLabel: "Demobilization Blockade",
    title: "Leaseholder Blocking Gate Passes to Hold 40-Ton Dumpers & Excavators Hostage",
    cause:
      "When a mining subcontractor stops work over ₹3 Cr+ in unpaid RA bills, the leaseholder's mine security locks the weighbridge exit gate and refuses demobilization gate passes for ₹8–₹15 Cr worth of financed excavators, rock-breakers, and tippers—attempting to coerce a discounted full-and-final settlement.",
    legalBasis:
      "A mine owner has zero statutory lien over a contractor's financed HEMM fleet for disputed counter-claims; wrongful detention of third-party / NBFC-hypothecated earthmoving machinery attracts urgent interim protection under Section 9 of the Arbitration and Conciliation Act, 1996 (mandatory injunction + Court Receiver with police aid) and criminal liability for wrongful restraint / misappropriation under BNS s.316 where equipment is converted or stripped.",
    steps: [
      {
        step: "1. Serve 48-Hour Demobilization Gate-Pass & BNS s.316 Warning",
        description:
          "Dispatch an urgent tri-channel Fact-Verified Notice listing every machine's chassis/engine number, RC book, and NBFC hypothecation details, demanding immediate gate clearance.",
      },
      {
        step: "2. File Urgent Section 9 Arbitration Petition Before Commercial Court",
        description:
          "Move an ex-parte/urgent Section 9 application for appointment of an Advocate Commissioner / Court Receiver to inventory and escort your fleet out of the mine lease boundary.",
      },
      {
        step: "3. Attach Escrow / Coal-Sales Receivables for Unpaid RA Bills",
        description:
          "Simultaneously seek Section 9(1)(ii)(b) or Order 38 Rule 5 security over the leaseholder's mineral dispatch proceeds or bank accounts to secure your unpaid RA bills.",
      },
    ],
    statutoryRule: "Arbitration Act s.9 + BNS s.316 + Order XXXVIII Rule 5 CPC",
  },
];

export default function MiningHEMMScenarioTabs() {
  const [activeId, setActiveId] = useState<string>(SCENARIOS[0].id);
  const current = SCENARIOS.find((s) => s.id === activeId) || SCENARIOS[0];

  return (
    <div className="space-y-5">
      {/* Tab Buttons */}
      <div
        role="tablist"
        aria-label="Mining Overburden and HEMM Dispute Scenarios"
        className="flex flex-wrap gap-2"
      >
        {SCENARIOS.map((item) => {
          const isActive = item.id === activeId;
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveId(item.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                isActive
                  ? "bg-[#DC2626] text-white shadow-md shadow-red-900/20"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {item.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Tab Panel */}
      <div
        role="tabpanel"
        className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-5"
      >
        <div>
          <span className="inline-block px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-red-100 text-[#DC2626] mb-2">
            Creditor Action Track
          </span>
          <h3 className="text-lg sm:text-xl font-bold text-slate-900">
            {current.title}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white border border-slate-200 rounded-xl p-4">
            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
              Commercial Failure Mode
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {current.cause}
            </p>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl p-4">
            <p className="text-[11px] font-bold uppercase tracking-wider text-[#DC2626] mb-1.5">
              Statutory &amp; Contractual Counter-Move
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {current.legalBasis}
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-700">
            3-Step Creditor Execution Protocol
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {current.steps.map((st, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-xl p-4 flex flex-col justify-between"
              >
                <div>
                  <p className="text-xs sm:text-sm font-bold text-slate-900 mb-1.5">
                    {st.step}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {st.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-slate-900 text-slate-100 rounded-xl px-4 py-3 text-xs flex flex-wrap items-center justify-between gap-2">
          <span className="font-bold text-red-400 uppercase tracking-wider">
            Primary Statutory Hook:
          </span>
          <span className="font-semibold">{current.statutoryRule}</span>
        </div>
      </div>
    </div>
  );
}
