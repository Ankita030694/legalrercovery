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
    id: "fm2-floor-dilapidation",
    tabLabel: "FM2 Floor Dilapidation",
    badge: "Structural Floor Damage",
    badgeColor: "bg-red-950/70 border-red-800 text-red-300",
    title: "3PL Logistics Lessee Damages Laser-Screeded FM2/VDF Floor and Shears Racking Bolts",
    context:
      "A 3PL logistics provider leased a 75,000 sq. ft. Grade-A box warehouse in a major logistics corridor (such as Luhari, Bilaspur, or Bhiwandi). The facility featured high-tolerance FM2 laser-screeded jointless flooring designed for very narrow aisle (VNA) reach trucks. Upon early exit, the tenant left 1,200 cut-off expansion bolts embedded in the slab, deep gouges from dropped steel coils, and widespread surface de-lamination, making the shed impossible to re-lease to Tier-1 multinational tenants.",
    legalChallenge:
      "The vacating lessee claims that surface gouges and cut bolt heads constitute 'ordinary wear and tear' exempted under Section 108(m) of the Transfer of Property Act, 1882, and threatens police complaints if the ₹60 Lakh security deposit is not refunded within 15 days.",
    statutorySolution:
      "Section 108(m) of the TPA imposes an absolute affirmative obligation on the lessee to restore the premises in the condition it was delivered. High-tolerance industrial flooring structural impairment is not fair wear and tear. The landlord is entitled to commission an independent civil engineering laser flatness survey (TR-34 compliance), obtain certified repair estimates, and deduct the full restoration cost plus holdover mesne profits from the deposit and recover any balance in court.",
    actionableSteps: [
      "Refuse unconditional handover of the warehouse keys; issue a 48-hour formal notice for joint dilapidation inspection.",
      "Empanel an independent certified structural engineer to conduct a TR-34 laser-screed floor survey and BSA 2023 s.63 video audit.",
      "Dispatch an advocate demand notice quantifying floor core-drilling, bolt removal, epoxy pressure grouting, and re-polishing costs.",
      "Appropriate security deposit against quantified reinstatement damage before any rental adjustments.",
    ],
    estimatedRecovery: "100% Floor Reinstatement Cost + Gap Period Holding Rent",
  },
  {
    id: "pcb-hazardous-waste",
    tabLabel: "PCB Hazardous Waste",
    badge: "Environmental & Criminal Exposure",
    badgeColor: "bg-amber-950/70 border-amber-800 text-amber-300",
    title: "Factory Tenant Abandons 120 Corrosive Chemical Drums and ETP Sludge on Plot",
    context:
      "An industrial tenant operating a specialty chemicals packaging or metal-finishing plant in an MIDC, GIDC, or HSIIDC industrial estate defaulted on 4 months of lease rent. Over a long holiday weekend, the tenant evacuated managerial personnel, leaving behind 120 rusting metal drums containing toxic solvents, un-neutralized acid wash, and heavy-metal ETP sludge dumped across the unpaved yard.",
    legalChallenge:
      "State Pollution Control Boards (SPCBs) routinely issue show-cause and closure notices to the registered landowner or plot lessee under Section 33A of the Water Act and Section 31A of the Air Act, holding the landlord vicariously liable for environmental contamination and site remediation.",
    statutorySolution:
      "Under the 'Polluter Pays Principle' established by the Supreme Court in Vellore Citizens and Indian Council for Enviro-Legal Action, environmental remediation liability is personal to the actual polluting generator. The landlord must immediately file a formal intimation with the Regional Officer of the SPCB documenting tenant abandonment, file an urgent police complaint under BNS Section 287/290, and petition the Commercial Court or High Court for an emergency mandatory injunction forcing the tenant to remove toxic waste through authorized TSDF facilities.",
    actionableSteps: [
      "File immediate formal intimation to the SPCB Regional Office and District Magistrate documenting tenant abandonment.",
      "Engage an accredited CPCB/SPCB hazardous waste management agency to issue manifest Form 10 and remediation quotes.",
      "File a Commercial Suit under Section 2(1)(c)(vii) of the Commercial Courts Act, 2015 for immediate mandatory removal injunction.",
      "Seek Order 38 Rule 5 CPC attachment over the tenant's corporate parent bank accounts and factory equipment at other sites.",
    ],
    estimatedRecovery: "Full Hazardous Disposal Reimbursement + Indemnity from SPCB Penalties",
  },
  {
    id: "discom-ht-power-arrears",
    tabLabel: "DISCOM HT Power Arrears",
    badge: "Premises Supply Lien",
    badgeColor: "bg-purple-950/70 border-purple-800 text-purple-300",
    title: "Manufacturing Lessee Leaves ₹35 Lakh Unpaid HT Electricity Dues Attached to Plot",
    context:
      "A manufacturing lessee operating a high-power industrial shed with a dedicated 500 kVA 11kV High Tension (HT) electricity connection defaulted on electricity bills for 5 consecutive months, racking up ₹35,00,000 in energy charges, delayed payment surcharges (DPS), and minimum contractual demand penalties before quietly ceasing production.",
    legalChallenge:
      "Under state electricity supply codes and the Supreme Court 3-Judge Bench judgment in K.C. Ninan v. Kerala State Electricity Board (2023), electricity distribution companies (DISCOMs) possess statutory power to refuse power reconnection or transfer of connection on the premises until all historical consumption arrears are cleared.",
    statutorySolution:
      "Electricity arrears do not automatically wipe out upon tenant departure; they represent a de facto operational freeze on the asset. The landlord must immediately invoke bank guarantees or corporate guarantees provided under the lease, dispatch a Section 106 TPA termination notice, and file an interim application under Order 39 Rules 1 & 2 CPC or Section 9 of the Arbitration Act to restrain the tenant from removing movable plant and machinery until the DISCOM NOC is deposited.",
    actionableSteps: [
      "Obtain official statement of dues, meter reading logs, and disconnection notices from the local DISCOM executive engineer.",
      "Issue urgent advocate legal notice under lease indemnity covenants giving 7 days to clear DISCOM dues or face asset seizure.",
      "Apply to the Commercial Court for attachment before judgment (Order 38 Rule 5) over tenant machinery located on the shed.",
      "Initiate summary suit / arbitration seeking immediate escrow deposit of the full DISCOM demand sum.",
    ],
    estimatedRecovery: "100% DISCOM Bill Arrears + Delayed Surcharges + Demand Penalties",
  },
  {
    id: "midnight-machinery-evacuation",
    tabLabel: "Machinery Evacuation Stall",
    badge: "Asset Flight & Lien",
    badgeColor: "bg-blue-950/70 border-blue-800 text-blue-300",
    title: "Tenant Attempts Overnight Clearance of Multi-Crore Machinery While Defaulting on Rent",
    context:
      "An industrial lessee owing 6 months of unpaid lease rent, CAM charges, and property tax surcharges summons heavy cranes and flatbed trailers on a Saturday night to dismantle multi-crore CNC machines, overhead gantry cranes, and heavy racking systems to relocate them to a new facility in another state, leaving the landlord with an empty shed and zero recovery recourse.",
    legalChallenge:
      "Unless restrained by a judicial order, tenants who successfully move plant and machinery out of the jurisdiction leave landlords holding unsecured, uncollectible paper decrees against shell corporate entities.",
    statutorySolution:
      "Under Indian Contract Act Section 171 (general possessory lien if contractually provided) and Commercial Courts Act Section 2(1)(c)(vii) read with CPC Order 38 Rule 5, a commercial landlord can establish a prima facie case of intentional asset dissipation. Commercial Courts and Arbitral Tribunals (under Section 9) grant ex-parte emergency injunctions and appoint Court Receivers or local commissioners to seal factory gates and inventory all machinery.",
    actionableSteps: [
      "Station 24/7 security at perimeter gates and exercise contractual gate-pass security verification covenants.",
      "File an emergency Section 9 petition or Commercial Suit accompanied by an urgent Order 38 Rule 5 attachment application.",
      "Obtain an ex-parte status quo order restraining removal of machinery, racking, transformers, and raw materials.",
      "Invoke CPC Order XV-A requiring the tenant to deposit undisputed arrears in court as a pre-condition to hearing their defense.",
    ],
    estimatedRecovery: "Secured Physical Asset Freeze Forcing Immediate Rental Settlement",
  },
];

export default function IndustrialWarehouseScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(SCENARIOS[0].id);

  const currentScenario = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full">
      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-2 mb-6 border-b border-slate-200 pb-3">
        {SCENARIOS.map((scenario) => {
          const isActive = activeTab === scenario.id;
          return (
            <button
              key={scenario.id}
              type="button"
              onClick={() => setActiveTab(scenario.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all duration-150 cursor-pointer ${
                isActive
                  ? "bg-[#DC2626] text-white shadow-md shadow-red-900/20"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              {scenario.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Scenario Detail Card */}
      <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5 sm:p-6 md:p-8 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span
            className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${currentScenario.badgeColor}`}
          >
            {currentScenario.badge}
          </span>
          <span className="text-xs font-semibold text-slate-500">
            Remedy: {currentScenario.estimatedRecovery}
          </span>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-3">
            {currentScenario.title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            {currentScenario.context}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded-xl p-4 border border-red-200/80 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-red-600" />
              <p className="text-xs font-extrabold uppercase tracking-wider text-red-700">
                Defaulting Lessee Defense / Tactic
              </p>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {currentScenario.legalChallenge}
            </p>
          </div>

          <div className="bg-white rounded-xl p-4 border border-emerald-200/80 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-600" />
              <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700">
                Landlord Statutory Counter-Strike
              </p>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {currentScenario.statutorySolution}
            </p>
          </div>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">
            Immediate Actionable SOP for Industrial Asset Managers:
          </p>
          <ul className="space-y-2">
            {currentScenario.actionableSteps.map((step, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700"
              >
                <span className="w-5 h-5 rounded-full bg-slate-900 text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
