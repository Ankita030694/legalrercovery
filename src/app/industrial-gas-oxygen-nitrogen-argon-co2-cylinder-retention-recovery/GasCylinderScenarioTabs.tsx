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
    id: "factory-hoarding",
    tabLabel: "Factory Hoarding Cylinders",
    title: "Fabrication Plant or Foundry Holding 200+ O2/Argon/DA Cylinders Without Payment",
    cause:
      "Heavy engineering fabricators, shipyards, and foundries take 150–400 high-pressure seamless steel cylinders (7 cum / 47L water capacity) on rotation. Once gas credit bills cross 60–90 days, the factory stops placing orders with the original supplier while retaining the ₹10,000/unit cylinder bank as free working capital.",
    legalBasis:
      "Under the Gas Cylinders Rules, 2016 (framed under the Explosives Act, 1884), title to returnable cylinders stamped with the owner's PESO-approved identification mark remains strictly with the gas filler/owner. Continued retention after a formal recall notice converts lawful bailment (Contract Act ss. 148, 160) into dishonest misappropriation and Criminal Breach of Trust under Section 316 of the Bharatiya Nyaya Sanhita (BNS), 2023.",
    steps: [
      {
        step: "1. Freeze Cylinder Rotation & Serve 7-Day BNS s.316 Recall Notice",
        description:
          "Issue an Advocate Legal Notice annexing the PESO neck-ring serial register and signed delivery challans, demanding physical return of all serial-numbered cylinders plus daily holding rent (demurrage) within 7 days.",
      },
      {
        step: "2. Separate Gas Invoice Claim from Cylinder Replacement Indemnity",
        description:
          "Quantify unpaid gas bills separately from the ₹7,000–₹14,000 per-cylinder replacement cost so the debtor cannot dispute gas consumption to justify holding the steel vessels.",
      },
      {
        step: "3. File Order XXXVII CPC Summary Suit + Order XXXVIII Rule 5 Attachment",
        description:
          "If the plant is shutting down or stripping machinery, pair the criminal complaint under BNS s.316 with an Order 37 Summary Suit and an Order 38 Rule 5 application to attach plant receivables before judgment.",
      },
    ],
    statutoryRule: "BNS s.316 (Criminal Breach of Trust) + Contract Act ss.148/160 + Order 37 CPC",
  },
  {
    id: "rogue-refiller",
    tabLabel: "Rogue Competitor Refilling",
    title: "Grey-Market Competitor Illegally Refilling Your PESO-Embossed Cylinders",
    cause:
      "To avoid paying overdue gas bills and daily cylinder rent, a defaulting buyer secretly sends your neck-ring embossed cylinders to a local rival gas plant or grey-market refiller who fills them at lower rates without checking ownership or hydro-test validity.",
    legalBasis:
      "Under the Gas Cylinders Rules, 2016 (notably Rules 18, 22, and 35 governing filling permissions and owner identification marks), no gas filler is permitted to fill a cylinder bearing another owner's permanent neck-ring embossing or brand mark without written authorization from the true owner and PESO compliance. Doing so exposes the rival plant to PESO license suspension/cancellation under the Explosives Act, 1884, alongside abetment of BNS s.316 and Section 317 (dishonestly receiving stolen/misappropriated property).",
    steps: [
      {
        step: "1. Serve Dual-Addressee Cease & Desist on Buyer + Rogue Refiller",
        description:
          "Dispatch a tri-channel Advocate Notice simultaneously to the defaulting factory and the suspected rival filling plant, putting the refiller on formal statutory notice of PESO Rules violation and BNS s.317 liability.",
      },
      {
        step: "2. Preserve Serial-Numbered Gate & Weighbridge Evidence",
        description:
          "Compile PESO Form F / manufacturing test certificates, neck-ring stamp photos, and GPS/dispatch logs proving your exclusive ownership of the serial series.",
      },
      {
        step: "3. Escalate to Chief Controller of Explosives (PESO) & Local Police",
        description:
          "File a formal complaint with the jurisdictional PESO Circle Office for unauthorized filling of third-party cylinders and seek seizure of misappropriated vessels under BNSS search/seizure powers.",
      },
    ],
    statutoryRule: "Gas Cylinders Rules, 2016 (PESO) + Explosives Act, 1884 + BNS ss.316 & 317",
  },
  {
    id: "hospital-oxygen",
    tabLabel: "Hospital Medical O2 Default",
    title: "Private Hospital / Nursing Home Holding Medical Oxygen Cylinders & Skipping Rent",
    cause:
      "Private hospitals and nursing homes retain 50–250 B-type and D-type medical oxygen cylinders on standby for ICU beds, delay invoice payments for 120+ days, and refuse to pay agreed cylinder holding charges citing patient-care emergencies.",
    legalBasis:
      "While suppliers must avoid sudden life-safety disruption in active ICUs, hospitals have zero statutory immunity from paying for supplied medical gas, cylinder demurrage, or returning surplus empty banks. Under the MSMED Act, 2006 (Sections 15–16), registered MSME gas fillers are entitled to 3x the RBI bank rate compounded monthly after 45 days, plus Income Tax Act Section 43B(h) disallowance pressure on the hospital's audit.",
    steps: [
      {
        step: "1. Audit Empty vs. Standby Cylinder Ledger at Hospital Manifold",
        description:
          "Conduct a documented joint reconciliation of full, empty, and manifold-connected cylinders so the hospital cannot claim all retained units are in active ICU use.",
      },
      {
        step: "2. Trigger MSMED s.16 Compound Interest & s.43B(h) Tax Notice",
        description:
          "Serve a statutory demand highlighting the 3x RBI interest accrual and Section 43B(h) tax disallowance risk, alongside a phased 10-day return schedule for surplus empty cylinders.",
      },
      {
        step: "3. Escalate to MSEFC Samadhaan / Section 138 NI Act on Security Cheques",
        description:
          "Present any dishonored PDCs under Section 138 NI Act against the hospital's managing directors/trustees and file an MSEFC claim for principal + demurrage + statutory interest.",
      },
    ],
    statutoryRule: "MSMED Act ss.15–16 + Income Tax Act s.43B(h) + NI Act s.138",
  },
  {
    id: "cryogenic-vie",
    tabLabel: "Cryogenic Tank (VIE) Default",
    title: "Cryogenic Liquid Tank (VIE) & Manifold Lessor Facing Default & Gate Obstruction",
    cause:
      "Industrial gas distributors install Vacuum Insulated Evaporators (VIE cryogenic tanks), vaporizers, and copper manifolds at customer plants under Minimum Take-or-Pay (MTOP) and monthly facility rental contracts. When the buyer defaults, plant security blocks the supplier's crane/rigging team from dismantling and recovering the ₹15–₹45 Lakh cryogenic skid.",
    legalBasis:
      "A VIE installation agreement is a commercial equipment lease/bailment where ownership of the cryogenic vessel and PESO site license remains with the gas supplier. Obstructing lawful repossession after termination constitutes breach of contract, BNS s.316 criminal breach of trust, and wrongful restraint of property, warranting urgent interim relief under Section 9 of the Arbitration and Conciliation Act, 1996 (or Order 39/Order 40 CPC) for an Advocate Commissioner / Court Receiver to dismantle and retrieve the tank.",
    steps: [
      {
        step: "1. Terminate MTOP Supply & Revoke PESO Site Authorization",
        description:
          "Issue a formal termination notice revoking the customer's permission to store liquid O2/N2/Ar in your PESO-licensed VIE vessel and demanding immediate access for safe decommissioning.",
      },
      {
        step: "2. Seek Section 9 Arbitration / Civil Injunction for Safe De-Installation",
        description:
          "Apply for an urgent Court Receiver / Advocate Commissioner order authorizing your cryogenic engineers to purge, disconnect, and crane-lift the VIE tank with police protection if needed.",
      },
      {
        step: "3. Recover MTOP Shortfall, Rental Arrears & Rigging Costs",
        description:
          "Claim the unpaid liquid gas invoices, contractual Minimum Take-or-Pay shortfall, monthly facility rent, and de-installation/transport expenses in the substantive arbitration or Commercial Suit.",
      },
    ],
    statutoryRule: "Arbitration Act s.9 / Order 40 CPC + Gas Cylinders / SMPV(U) Rules + BNS s.316",
  },
];

export default function GasCylinderScenarioTabs() {
  const [activeTabId, setActiveTabId] = useState<string>(SCENARIOS[0].id);
  const activeScenario = SCENARIOS.find((s) => s.id === activeTabId) || SCENARIOS[0];

  return (
    <div className="w-full">
      {/* Tab Buttons */}
      <div
        role="tablist"
        aria-label="Industrial Gas Cylinder Retention Scenarios"
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
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer border ${
                isActive
                  ? "bg-[#DC2626] text-white border-[#DC2626] shadow-md"
                  : "bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              {scenario.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Scenario Panel */}
      <div
        role="tabpanel"
        className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-5"
      >
        <div>
          <span className="inline-block px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-red-100 text-[#DC2626] mb-2">
            {activeScenario.statutoryRule}
          </span>
          <h3 className="text-lg sm:text-xl font-bold text-slate-900">
            {activeScenario.title}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white border border-slate-200 rounded-xl p-4">
            <p className="text-xs font-black uppercase tracking-wider text-slate-500 mb-1.5">
              Commercial Bottleneck
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {activeScenario.cause}
            </p>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl p-4">
            <p className="text-xs font-black uppercase tracking-wider text-[#DC2626] mb-1.5">
              Creditor Statutory Leverage
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {activeScenario.legalBasis}
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-xs font-black uppercase tracking-wider text-slate-500">
            3-Step Recovery Counter-Move
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {activeScenario.steps.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm"
              >
                <p className="text-xs sm:text-sm font-bold text-slate-900 mb-1.5">
                  {item.step}
                </p>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
