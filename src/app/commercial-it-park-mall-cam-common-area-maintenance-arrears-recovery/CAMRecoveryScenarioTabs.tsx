"use client";

import React, { useState } from "react";

interface Scenario {
  id: string;
  tabLabel: string;
  badge: string;
  badgeColor: string;
  title: string;
  context: string;
  legalChallenge: string;
  statutorySolution: string;
  actionableSteps: string[];
  estimatedRecovery: string;
}

const SCENARIOS: Scenario[] = [
  {
    id: "vacant-speculator-refusal",
    tabLabel: "Vacant / Locked Shop",
    badge: "Investor Non-Occupancy Defense",
    badgeColor: "bg-red-950/70 border-red-800 text-red-300",
    title: "Speculator Unit Owner Keeps Commercial Shop Locked for 24 Months, Claiming 'Zero Usage = Zero CAM'",
    context:
      "In a premium high-street commercial plaza or IT retail galleria, an individual or HNI investor purchased 3 retail units on the second floor. For over two years, the units have remained shuttered without fit-outs or tenancy. The owner refuses to pay monthly base CAM, central chiller readiness charges, and sinking fund contributions, accumulating ₹14,80,000 in arrears while arguing: 'My shop is locked, lights are off, and nobody is using the lifts or air conditioning.'",
    legalChallenge:
      "Defaulting allottees rely on ordinary consumer perceptions of 'pay per consumption'. They threaten police complaints alleging extortion or criminal intimidation if maintenance teams levy interest or issue notices to attach their registry.",
    statutorySolution:
      "Under Section 10 & 20 of the Maharashtra Apartment Ownership Act (and equivalent Sections in Haryana, UP, Karnataka, and Delhi), no apartment owner may exempt themselves from paying common expenses by waiver of use or abandonment of the unit. Fixed CAM covers structural insurance, lift maintenance, STP operation, round-the-clock security, and basements. Furthermore, RERA Section 19(6) makes payment of all common maintenance charges a mandatory statutory obligation upon possession.",
    actionableSteps: [
      "Issue 15-day statutory demand notice invoking the State Apartment Ownership Act non-waiver section and registered Declaration of Covenants.",
      "Calculate compound interest at the agreed Facility Agreement rate or SBI MCLR + 2% under RERA Section 19(7).",
      "Deactivate RFID parking tags, loading bay access, and building directory listings.",
      "File summary recovery proceedings under Order XXXVII CPC or initiate statutory charge enforcement before the Competent Authority under the Apartment Act.",
    ],
    estimatedRecovery: "100% of Fixed Base CAM + Sinking Fund + Statutory Interest within 45–60 days.",
  },
  {
    id: "anchor-brand-audit-stall",
    tabLabel: "Anchor Brand Audit Stall",
    badge: "Retail Lease Reconciliation Dispute",
    badgeColor: "bg-amber-950/70 border-amber-800 text-amber-300",
    title: "National Retail Brand Withholds ₹45L in CAM, HVAC & Marketing Dues Demanding 'Open-Book Third-Party Audit'",
    context:
      "An anchor department store or national fashion brand occupying 18,000 sq. ft. in a regional shopping mall unilaterally halts monthly CAM payments for 6 months. The tenant's corporate legal team claims that the mall developer inflated the chiller coefficient of performance (COP), overcharged DG diesel per-unit tariffs, and diverted the Common Marketing Fund to unrelated projects, demanding an independent audit before releasing funds.",
    legalChallenge:
      "Anchor tenants possess significant bargaining power and leverage complex audit clauses in bespoke commercial lease agreements to create an artificial 'pre-existing dispute' to ward off summary decrees and IBC insolvency triggers.",
    statutorySolution:
      "Disputes over CAM reconciliations do not create an automatic right to withhold undisputed base maintenance. Under Supreme Court principles affirmed in commercial leasing jurisprudence, an occupant cannot enjoy peaceful possession, climate control, and common facilities without paying the admitted or baseline operational costs. The facility agreement binds the tenant to pay billed amounts 'without deduction or set-off' under protest while audit reconciliations proceed in parallel.",
    actionableSteps: [
      "Serve an Advocate Notice with Annexure 1: Statutory Auditor's True-Up Certificate and BMS energy telemetry logs.",
      "Invoke the 'No Set-Off / Pay First, Reconcile Later' covenant in the Tripartite Facility Agreement.",
      "Issue a 7-day conditional notice to taper secondary cooling (chilled water valve throttling) during off-peak hours.",
      "Initiate Pre-Institution Commercial Mediation under Section 12A of the Commercial Courts Act 2015 for immediate deposit of undisputed baseline dues.",
    ],
    estimatedRecovery: "85%–95% settlement of principal arrears via structured escrow deposit.",
  },
  {
    id: "landlord-tenant-buck-passing",
    tabLabel: "Tenant vs Investor Landlord",
    badge: "Tripartite Buck-Passing",
    badgeColor: "bg-slate-800 border-slate-700 text-slate-300",
    title: "Commercial Office Lessee Claims CAM is Included in Rent, While Absentee Owner Claims Tenant is Responsible",
    context:
      "In a multi-tenanted commercial IT park, an IT/BPO occupier defaults on CAM and high-draw DG power backup totaling ₹9,20,000. When confronted by the Facility Management Company (FMC), the corporate tenant claims their sub-lease is 'gross rent inclusive of maintenance'. Meanwhile, the NRI/absentee unit-owner claims the tenant is in sole physical possession and should pay the facility manager directly, leaving the FMC caught in an endless game of email buck-passing.",
    legalChallenge:
      "The Facility Management Company has privity of contract with the unit purchaser through the registered sale deed/covenant, but physical control of the premises and daily consumption rests with the occupant tenant.",
    statutorySolution:
      "The primary statutory and covenantal charge runs with the property and binds the title owner. The FMC is not bound by private bilateral rent arrangements between the landlord and tenant. Notice must be served jointly on both parties under CPC Order I Rule 3, making the owner primarily liable as the covenantor and the tenant jointly liable as the direct consumer of facility services.",
    actionableSteps: [
      "Issue joint dual-addressed statutory demand notice to both unit owner and corporate tenant.",
      "Give 7 days cure notice: failure to pay results in suspension of tenant-specific discretionary amenities (DG backup power and chilled water).",
      "Attach the tenant's security deposit or rental receivables via a garnishee-style demand notice under Section 106 TPA.",
      "Notify the building management association to initiate a statutory charge on the unit title under the Apartment Ownership Act.",
    ],
    estimatedRecovery: "Instant cure within 7 days by tenant deducting from upcoming month's rent.",
  },
  {
    id: "food-court-hvac-tampering",
    tabLabel: "Food Court / High HVAC Load",
    badge: "Sub-Meter & Kitchen Exhaust Default",
    badgeColor: "bg-red-950/70 border-red-800 text-red-300",
    title: "Food Court Cloud Kitchen Accumulates High-Draw Utility Arrears & Defies Sub-Meter Replacement",
    context:
      "A fast-food chain or cloud kitchen outlet in a commercial mall food court operates heavy refrigeration, commercial exhaust blowers, and high-tonnage HVAC connections. Despite consuming massive electrical and chiller loads, the operator defaults on three successive monthly utility bills (₹6,50,000) and disputes the calibrated electronic BTU/energy sub-meters, alleging hardware defects.",
    legalChallenge:
      "Food operators frequently threaten litigation alleging spoilage of perishable raw materials and disruption of commercial livelihood under Article 19(1)(g) if utility connections are discontinued.",
    statutorySolution:
      "Centralized kitchen exhaust, chilled water, and backup diesel power are specialized, highly capital-intensive contractual utilities—not protected public municipal amenities. Under Delhi High Court and Bombay High Court commercial precedents, a facility manager or commercial mall developer is legally entitled to isolate secondary utility lines where consumption charges are willfully defaulted, provided calibration logs under BSA Section 63 are documented.",
    actionableSteps: [
      "Conduct third-party certified calibration of the electronic BTU and electrical meters with photographic/video timestamping.",
      "Serve a formal 72-hour final cure notice detailing precise run-hour meter telemetry and diesel rate escalations.",
      "Execute lawful isolation of the dedicated HVAC chilled water supply valve and DG backup breaker at the distribution board.",
      "File a Commercial Suit under Section 2(1)(c)(vii) of the Commercial Courts Act with an interim application for attachment of commercial kitchen equipment.",
    ],
    estimatedRecovery: "Immediate payment or bank guarantee within 48 hours of utility isolation notice.",
  },
];

export default function CAMRecoveryScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(SCENARIOS[0].id);
  const activeScenario = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-sm">
      {/* Tab Navigation Header */}
      <div className="flex flex-wrap border-b border-slate-200 bg-slate-50/80 p-2 gap-1.5 sm:gap-2">
        {SCENARIOS.map((scenario) => {
          const isActive = activeTab === scenario.id;
          return (
            <button
              key={scenario.id}
              type="button"
              onClick={() => setActiveTab(scenario.id)}
              className={`px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-150 cursor-pointer ${
                isActive
                  ? "bg-[#DC2626] text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/60"
              }`}
            >
              {scenario.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Scenario Detail Body */}
      <div className="p-5 sm:p-6 md:p-8 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-bold uppercase tracking-wider ${activeScenario.badgeColor}`}
          >
            {activeScenario.badge}
          </span>
          <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Est. Recovery: {activeScenario.estimatedRecovery}
          </span>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 mb-3">
            {activeScenario.title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-200/80">
            <strong className="text-slate-900 block mb-1">Commercial Fact Pattern:</strong>
            {activeScenario.context}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <div className="p-4 sm:p-5 rounded-xl bg-red-50/60 border border-red-200/70 space-y-2">
            <div className="flex items-center gap-2 text-red-900 font-bold text-xs sm:text-sm">
              <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
              Defaulting Debtor Defense &amp; Bottleneck
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {activeScenario.legalChallenge}
            </p>
          </div>

          <div className="p-4 sm:p-5 rounded-xl bg-emerald-50/60 border border-emerald-200/70 space-y-2">
            <div className="flex items-center gap-2 text-emerald-900 font-bold text-xs sm:text-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-600" />
              Statutory Doctrine &amp; Creditor Remedy
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {activeScenario.statutorySolution}
            </p>
          </div>
        </div>

        <div className="space-y-3 pt-2">
          <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
            <span className="w-1.5 h-4 bg-[#DC2626] rounded-full" />
            Operational Action Plan for Facility Heads &amp; Condominium Boards
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {activeScenario.actionableSteps.map((step, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-800"
              >
                <span className="w-5 h-5 rounded-full bg-[#DC2626] text-white font-bold text-[11px] flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <span className="leading-snug">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
