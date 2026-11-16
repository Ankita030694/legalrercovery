"use client";

import React, { useState } from "react";

interface Scenario {
  id: string;
  tabLabel: string;
  badge: string;
  title: string;
  problem: string;
  statutoryTrap: string;
  lawfulPlaybook: string;
  remedyCode: string;
  financialRecovery: string;
}

const SCENARIOS: Scenario[] = [
  {
    id: "horticulture-warm-loading",
    tabLabel: "Fresh Fruit Warm-Loading",
    badge: "Field Heat & Respiration Failure",
    title: "Shipper Loads Table Grapes or Mangoes at +16°C Pulp Temp into +2°C Reefer Without Pre-Cooling",
    problem:
      "A fresh fruit exporter in Nashik or Ratnagiri loads 18 tonnes of freshly harvested table grapes or Alphonso mangoes directly from the orchard packhouse. The fruit pulp temperature is +16°C to +18°C. The shipper instructs the reefer driver to maintain +2°C. Over the 1,400 km haul to Delhi NCR, the fruit continues respiration and field-heat generation, causing mold proliferation and skin softening. At Azadpur Mandi, the consignee rejects 40% of the boxes and the shipper unilaterally withholds the entire ₹1,85,000 trip freight plus ₹6,50,000 alleged fruit damage.",
    statutoryTrap:
      "Mobile truck refrigeration units (Thermo King / Carrier) are designed strictly to MAINTAIN pre-cooled cargo temperature, not to extract sensible and latent field heat like an industrial blast chiller. If the transporter fails to record the loading pulp temperature on the Consignment Note (Lorry Receipt / Bilty) and lacks continuous return-air sensor logs, the shipper attempts to frame the issue as equipment breakdown.",
    lawfulPlaybook:
      "1. Produce digital data logger records (Thermo King TracKing / Carrier DataCOLD) showing compressor continuous run hours and return-air temperature curve proving the unit operated at maximum cooling capacity.\n2. Invoke Section 10(1) and Section 12 of the Carriage by Road Act, 2007: cargo deterioration resulted solely from the consignor's failure to pre-cool perishable cargo and inherent vice of the goods.\n3. Demand immediate rejection of the unilateral debit note under the Supreme Court doctrine in Raman Iron Foundry.\n4. Issue an advocate statutory demand notice for full freight plus truck detention charges backed by BSA 2023 Section 63 electronic evidence certification.",
    remedyCode: "Carriage by Road Act s.10(1) & s.12 + BSA 2023 s.63 Telematics Logs",
    financialRecovery: "100% Freight Realization (₹1,85,000) + Quashing of ₹6,50,000 Unilateral Debit Note",
  },
  {
    id: "frozen-meat-dairy-icecream",
    tabLabel: "Frozen Meat / Ice Cream at -5°C",
    badge: "Inadequate Blast Freezing",
    title: "Processor Loads Frozen Buffalo Meat or Ice Cream at -5°C Instead of -18°C Mandatory Set-Point",
    problem:
      "An export abattoir or dairy ice cream manufacturer in Punjab loads 22 tonnes of cartonized frozen boneless buffalo meat or premium ice cream tubs into a 32-foot multi-axle reefer container. The product was removed prematurely from cold rooms with a core pulp temp of -5°C to -8°C instead of the mandatory -18°C deep-freeze standard. During the 72-hour transit to Jawaharlal Nehru Port (JNPT), the reefer unit blows continuous -20°C air, but the core meat centers fail to freeze solid. The export surveyor detects surface softening, and the exporter withholds ₹22 Lakhs of outstanding fleet freight.",
    statutoryTrap:
      "Frozen food contracts require strict adherence to FSSAI (Food Safety and Standards Regulations) and APEDA export norms. Exporters routinely try to pass the blame for factory-level blast freezer shortcuts onto the line-haul carrier. Without calibrated insertion thermometer loading logs signed by the loader, the carrier is exposed to common carrier liability presumptions.",
    lawfulPlaybook:
      "1. Correlate telematics supply-air sensor graphs proving supply air was consistently discharged at -20°C to -22°C throughout the transit route.\n2. Submit FSSAI Cold Chain Guidelines and APEDA Meat Export Standards establishing that cargo must be presented at -18°C or colder prior to loading.\n3. Demonstrate that the reefer micro-controller logged zero power cut-offs, zero fuel runouts, and zero high-temperature unit alarms.\n4. Assert statutory carrier lien under Section 170 Indian Contract Act and Section 13 Carriage by Road Act over subsequent consignments, and institute Commercial Court Order XXXVII summary suit.",
    remedyCode: "FSSAI Pre-Cooling Standards + Contract Act s.170 Lien + CPC Order XXXVII",
    financialRecovery: "Complete Disallowance of ₹22 Lakh Counterclaim + Immediate Freight Release",
  },
  {
    id: "consignee-port-unplugged-delay",
    tabLabel: "Port / Consignee Unplugged Delay",
    badge: "Detention Without Genset Power",
    title: "Consignee or Port CFS Keeps Reefer Trailer Detained for 36 Hours Without Auxiliary Power",
    problem:
      "A reefer truck transporting sensitive biopharma vaccines or imported Dutch cheese arrives at a distribution center in Bengaluru or a private CFS near Nhava Sheva. The receiving warehouse has no available electrical reefer plug-in socket (reefer receptacle) and refuses to authorize diesel genset running due to factory environmental or noise regulations. The trailer is parked under direct 38°C sun for 36 hours. Temperature inevitably rises to +14°C. The receiver rejects the cargo and the client deducts both the freight and cargo value from the transporter's ledger.",
    statutoryTrap:
      "Receivers often refuse to sign detention slips or acknowledge lack of shore-power facilities on the physical Lorry Receipt. If the driver leaves without written proof or timestamped communications, the client falsely alleges the driver switched off the refrigeration engine during transit to save diesel fuel.",
    lawfulPlaybook:
      "1. Extract AIS-140 GPS telematics and geofence entry timestamps proving arrival at destination within SLA.\n2. Download reefer telematics showing exact engine shutdown command initiated at consignee gate due to receiver's refusal to supply auxiliary electrical power.\n3. Send contemporaneous WhatsApp and email intimation notices to the consignor during the detention alerting them to temperature degradation risks.\n4. Invoke Section 73 Indian Contract Act to bill contractual truck detention/halting charges (₹7,500–₹12,000/day) in addition to full freight, defeating cargo damage claims caused by consignee default under Carriage by Road Act Section 10(1).",
    remedyCode: "Carriage by Road Act s.10(1)(e) (Consignee Default) + Halting Per-Diem under Contract Act s.73",
    financialRecovery: "Full Invoice Freight + ₹36,000 Accrued Halting Dues + Zero Spoilage Liability",
  },
  {
    id: "blanket-ledger-withholding",
    tabLabel: "Cross-Trip Ledger Withholding",
    badge: "Illegal Unilateral Set-Off",
    title: "Shipper Withholds ₹25 Lakhs Across 45 Unrelated Completed Trips for One Disputed Reefer Load",
    problem:
      "A reefer fleet operator provides continuous dedicated transport services to a national quick-service restaurant (QSR) or frozen food distributor, operating 50 to 80 trips per month. Following one temperature excursion on a single ₹1.5 Lakh freight trip, the corporate accounts department abruptly freezes all payments across the entire running account, withholding ₹25,40,000 of clean, acknowledged bills covering 45 separate completed consignments.",
    statutoryTrap:
      "Transporters often fear losing the corporate client and wait months in informal negotiations. Meanwhile, high diesel bills, EMI payments on ₹45-Lakh reefer chassis, and driver salaries create severe cash-flow strangulation, pushing the transport enterprise toward default.",
    lawfulPlaybook:
      "1. Segregate the running ledger: isolate clean, signed Proof of Delivery (POD) consignments from the single disputed load.\n2. Issue an Advocate Statutory Demand Notice citing the Supreme Court rulings in Union of India v. Raman Iron Foundry and Gangotri Enterprises: unadjudicated cargo damage claims cannot be set off against admitted freight bills.\n3. Demand payment within 15 days, failing which an MSME Samadhaan petition (under MSMED Act Section 15 & 16 for compound interest at 3x RBI bank rate) or Commercial Court Order XXXVII summary suit will be initiated.\n4. Exercise lawful bailee lien under Section 171 Indian Contract Act over any cargo currently in transit.",
    remedyCode: "Raman Iron Foundry Doctrine + MSMED Act s.16 Compound Interest + Order XXXVII CPC",
    financialRecovery: "Full Recovery of ₹25.40 Lakh Principal + Mandatory 3x RBI Delayed Payment Interest",
  },
];

export default function ReeferFreightRecoveryScenarioTabs() {
  const [activeTab, setActiveTab] = useState(SCENARIOS[0].id);

  const scenario = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full">
      {/* Desktop & Mobile Tab Selectors */}
      <div className="flex flex-wrap gap-2 pb-4 border-b border-slate-200">
        {SCENARIOS.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveTab(item.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all text-left cursor-pointer ${
                isActive
                  ? "bg-[#DC2626] text-white shadow-md shadow-red-900/20"
                  : "bg-slate-100 hover:bg-slate-200 text-slate-700"
              }`}
            >
              {item.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Scenario Card */}
      <div className="mt-5 p-5 sm:p-6 bg-slate-50 border border-slate-200 rounded-2xl">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <span className="px-2.5 py-1 rounded-md bg-red-100 border border-red-200 text-red-900 text-[11px] font-extrabold uppercase tracking-wider">
            {scenario.badge}
          </span>
          <span className="text-[11px] font-semibold text-slate-500">
            Remedy Code: <strong className="text-slate-800">{scenario.remedyCode}</strong>
          </span>
        </div>

        <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-3 leading-snug">
          {scenario.title}
        </h3>

        <div className="space-y-3.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
          <div className="p-3.5 bg-white border border-slate-200 rounded-xl shadow-xs">
            <span className="font-bold text-red-600 uppercase tracking-wider text-[11px] block mb-1">
              The Operational Problem
            </span>
            <p>{scenario.problem}</p>
          </div>

          <div className="p-3.5 bg-amber-50 border border-amber-200 rounded-xl">
            <span className="font-bold text-amber-900 uppercase tracking-wider text-[11px] block mb-1">
              The Legal Trap / Shippers' Defense Tactic
            </span>
            <p className="text-amber-950">{scenario.statutoryTrap}</p>
          </div>

          <div className="p-3.5 bg-white border border-slate-200 rounded-xl shadow-xs">
            <span className="font-bold text-emerald-700 uppercase tracking-wider text-[11px] block mb-1">
              Lawful Transporter Counter-Playbook
            </span>
            <p className="whitespace-pre-line text-slate-800">{scenario.lawfulPlaybook}</p>
          </div>

          <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center justify-between gap-3">
            <span className="text-xs font-bold text-emerald-950">Statutory Outcome:</span>
            <span className="text-xs font-extrabold text-emerald-800">{scenario.financialRecovery}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
