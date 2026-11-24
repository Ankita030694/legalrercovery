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
    id: "backdated-cube-email",
    tabLabel: "Backdated Cube Email",
    title: "Builder Sends '28-Day Cube Failure' Email Only After Receiving Demand Notice",
    cause:
      "The developer poured 2,000 Cu.M of M30/M40 concrete across multiple floor slabs, signed every transit mixer pour slip without protest, and stayed silent for 60–90 days. Only after the RMC plant serves a payment reminder or IBC Section 8 notice does the builder's project manager email an unverified private-lab report claiming compressive strength fell below 30 MPa.",
    legalBasis:
      "Under Section 42 of the Sale of Goods Act, 1930, a buyer is deemed to have accepted goods when they do any act in relation to them inconsistent with the ownership of the seller—or retain them after a reasonable time without intimating rejection. Pouring liquid concrete into reinforcement formwork, allowing it to set into permanent structural slabs, casting upper floors over it, and marketing those flats under RERA constitutes irreversible, conclusive acceptance. Under the Supreme Court's Mobilox Innovations ruling, an unsubstantiated, post-demand quality allegation is a 'moonshine dispute' that cannot block IBC Section 9 admission or Order XXXVII summary judgment.",
    steps: [
      {
        step: "Audit Chronology Against Pour Slips & E-Way Bills",
        description:
          "Compile every transit mixer delivery challan, slump test endorsement, and GST E-Way Bill showing zero contemporaneous quality remarks at the time of site discharge.",
      },
      {
        step: "Document Structural Continuation & RERA Filings",
        description:
          "Capture timestamped site photographs, RERA quarterly progress updates, and sales brochures proving the builder never demolished the allegedly 'failed' slab and continued vertical construction.",
      },
      {
        step: "Serve Section 42 Rebuttal-Cum-Demand Notice",
        description:
          "Issue a fact-verified notice placing on record the 28-day silence, plant retention-cube logs, and RERA structural continuation to pre-emptively destroy any sham pre-existing dispute plea.",
      },
    ],
    statutoryRule: "Sale of Goods Act, 1930 s.42 & IBC 2016 s.8 / Mobilox Doctrine",
  },
  {
    id: "unwitnessed-site-curing",
    tabLabel: "IS 456 / IS 516 Breach",
    title: "Un-Witnessed Site Cube Crushing & Improper Curing Violating IS 456:2000",
    cause:
      "Site contractors routinely leave concrete test cubes exposed to summer heat without water-tank curing at 27±2°C, fail to compact moulds in 3 layers with 35 tamping strokes, or crush cubes unilaterally at an unaccredited local lab without notifying the RMC plant's QA engineer.",
    legalBasis:
      "IS 456:2000 (Clauses 15 & 16) and IS 516 mandate strict joint sampling from the transit mixer discharge chute, standardized compaction, 24-hour covered site storage followed by immersion in clean water at 27±2°C, and witnessed compression testing in a NABL-accredited laboratory. A unilateral site test that violates IS 516 curing or lacks joint witness signatures has zero evidentiary value in Commercial Courts and arbitrations, whereas the RMC plant's automated SCADA batching printout and NABL-tested retention cubes carry high probative weight.",
    steps: [
      {
        step: "Produce Automated SCADA Batching-Plant Printouts",
        description:
          "Extract tamper-evident batching logs showing exact cementitious content, water-cement ratio, admixture dosage, and moisture correction for every cubic meter dispatched.",
      },
      {
        step: "Submit NABL-Accredited Plant Retention Cube Reports",
        description:
          "Present 7-day and 28-day compressive strength certificates from the RMC plant's own retention samples cured under controlled IS 516 tank conditions.",
      },
      {
        step: "Demand Proof of Joint Sampling & Curing Tank Logs",
        description:
          "Call upon the builder to produce signed joint sampling registers, calibration certificates of their compression testing machine (CTM), and 28-day water-curing logs.",
      },
    ],
    statutoryRule: "IS 456:2000 Cl. 15–16, IS 516 & BSA 2023 Section 63",
  },
  {
    id: "core-test-debit-notes",
    tabLabel: "Core Test / Debit Notes",
    title: "Builder Threatens Arbitrary 30% Debit Notes Citing Non-Destructive / Core Tests",
    cause:
      "Even when slabs are structurally sound, cash-strapped developers invoke Rebound Hammer (Schmidt Hammer) or Ultrasonic Pulse Velocity (UPV) readings to issue unilateral 20%–40% debit notes against pending RMC bills, forcing suppliers into distressed haircuts.",
    legalBasis:
      "Under Indian Contract Act Section 74 and settled Supreme Court precedent (Raman Iron Foundry), a buyer cannot unilaterally adjudicate unliquidated damages or deduct arbitrary sums from admitted supply invoices without mutual agreement or judicial determination. Furthermore, under IS 456:2000 Clause 17.4.3, core tests are only valid if taken by an independent NABL agency with joint participation, and a concrete member passes if the average equivalent cube strength of cores is at least 85% of the specified grade strength with no individual core below 75%.",
    steps: [
      {
        step: "Reject Unilateral Debit Notes in Writing Within 7 Days",
        description:
          "Serve a formal statutory protest rejecting the debit note under Section 74 Contract Act and demanding full invoice payment plus MSMED 3x RBI compound interest.",
      },
      {
        step: "Invoke IS 456 Clause 17.4.3 Core Acceptance Threshold",
        description:
          "Highlight that even if site cores were validly extracted, IS 456 deems 85% average / 75% minimum core strength structurally compliant, barring total bill forfeiture.",
      },
      {
        step: "Trigger Section 43B(h) Tax Disallowance Notice",
        description:
          "If your RMC unit holds Udyam (Micro/Small) registration, notify the builder's statutory auditor that unpaid dues beyond 45 days face 100% income-tax disallowance under Section 43B(h).",
      },
    ],
    statutoryRule: "Indian Contract Act s.74, IS 456 Cl. 17.4.3 & Income Tax Act s.43B(h)",
  },
  {
    id: "cheque-bounce-ibc",
    tabLabel: "Cheques & IBC s.8",
    title: "Builder Stops Payment on Security Cheques & Pleads 'Dispute' in NCLT",
    cause:
      "Builders issue post-dated cheques (PDCs) or security cheques against a 30–45 day RMC credit line, then instruct their bank to 'Stop Payment' once the concrete is poured, hoping to drag the supplier into a 5-year civil suit.",
    legalBasis:
      "Under the Supreme Court's judgment in Sripati Singh v. State of Jharkhand (2021), a security cheque presented after the underlying supply debt crystallizes attracts full criminal liability under Section 138 of the Negotiable Instruments Act, 1881, including mandatory up to 20% interim compensation under Section 143A. Simultaneously, for defaults of ₹1 Crore or more against corporate builders, an IBC Section 8 Form 3/4 demand notice paired with an Order XXXVII CPC summary suit creates dual criminal and insolvency pressure.",
    steps: [
      {
        step: "Present Dishonoured Cheques & Serve 30-Day s.138 Notice",
        description:
          "Deposit PDCs/security cheques before expiry, obtain the bank return memo ('Payment Stopped by Drawer' / 'Funds Insufficient'), and issue a statutory Section 138 notice within 30 days.",
      },
      {
        step: "File Parallel Order XXXVII Summary Suit / Section 143A Motion",
        description:
          "Combine the criminal NI Act complaint (seeking 20% interim deposit under s.143A) with an Order XXXVII summary suit backed by signed pour slips and GST invoices.",
      },
      {
        step: "Serve IBC Section 8 Form 3/4 Notice (Defaults >= ₹1 Crore)",
        description:
          "For corporate developers owing ₹1 Crore+, serve Form 3/4 annexing batching printouts, E-Way bills, and Section 42 acceptance proof to trigger the 10-day statutory clock.",
      },
    ],
    statutoryRule: "NI Act s.138 & s.143A, Order XXXVII CPC & IBC s.8–9",
  },
];

export default function RmcScenarioTabs() {
  const [activeTabId, setActiveTabId] = useState<string>(SCENARIOS[0].id);
  const activeScenario = SCENARIOS.find((s) => s.id === activeTabId) || SCENARIOS[0];

  return (
    <div className="w-full">
      {/* Tab Buttons */}
      <div
        role="tablist"
        aria-label="RMC Cube Dispute Recovery Scenarios"
        className="flex flex-wrap gap-2 mb-6"
      >
        {SCENARIOS.map((scenario) => {
          const isActive = scenario.id === activeTabId;
          return (
            <button
              key={scenario.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveTabId(scenario.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                isActive
                  ? "bg-[#DC2626] text-white shadow-md shadow-red-900/20"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200"
              }`}
            >
              {scenario.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Tab Content */}
      <div
        role="tabpanel"
        className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-5"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-4">
          <h3 className="text-base sm:text-lg font-black text-slate-900">
            {activeScenario.title}
          </h3>
          <span className="inline-block shrink-0 text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-red-50 text-[#DC2626] border border-red-200">
            {activeScenario.statutoryRule}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white border border-slate-200 rounded-xl p-4">
            <p className="text-[11px] font-extrabold uppercase tracking-wider text-amber-700 mb-1.5">
              Builder&apos;s Delay Tactic
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {activeScenario.cause}
            </p>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl p-4">
            <p className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-700 mb-1.5">
              Creditor Statutory Counter-Strike
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {activeScenario.legalBasis}
            </p>
          </div>
        </div>

        <div>
          <p className="text-xs font-black uppercase tracking-wider text-slate-900 mb-3">
            3-Step Operational Execution
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {activeScenario.steps.map((item, idx) => (
              <div
                key={item.step}
                className="bg-white border border-slate-200 rounded-xl p-4 flex flex-col gap-1.5"
              >
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#DC2626] text-white text-xs font-black">
                  {idx + 1}
                </span>
                <p className="text-xs sm:text-sm font-bold text-slate-900">{item.step}</p>
                <p className="text-xs text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
