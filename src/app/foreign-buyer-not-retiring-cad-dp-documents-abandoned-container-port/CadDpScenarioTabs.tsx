"use client";

import React, { useState } from "react";

interface Scenario {
  id: string;
  tabLabel: string;
  portRisk: string;
  commodity: string;
  defaultPattern: string;
  tacticalCountermeasure: string;
  statutoryRail: string;
  timelineAction: string;
}

const SCENARIOS: Scenario[] = [
  {
    id: "dubai-jebel-ali",
    tabLabel: "Jebel Ali / Dubai (40% Distress Extortion)",
    portRisk: "High Demurrage & Re-Export Friction ($180–$320/day after 7 free days)",
    commodity: "Morbi Ceramic Tiles, Rice, Spices, Agro Commodities",
    defaultPattern: "Buyer ignores MT410 advice of arrival. As vessel discharges at Jebel Ali and free time expires, buyer emails claiming 'sudden domestic price crash' or 'cash liquidity crunch', offering to retire original B/L only if invoice is discounted by 35%–40%.",
    tacticalCountermeasure: "Serve immediate 48-hour Fact-Verified Demand Notice. Instruct Remitting Bank under URC 522 Article 26 to execute a formal Bank Protest. Simultaneously identify an alternate UAE/GCC buyer under RBI Master Direction on Export of Goods Para C.15 (permitting up to 25% discount through AD Bank).",
    statutoryRail: "URC 522 Art. 26 (Bank Protest) + RBI Master Direction No. 16/2015-16 Para C.15 + Dubai Commercial Transactions Law (Federal Decree-Law No. 50/2022).",
    timelineAction: "Day 3–5 of discharge: Freeze demurrage escalation by instructing shipping line to transfer container to off-dock bonded CFS.",
  },
  {
    id: "mombasa-africa",
    tabLabel: "Mombasa / East Africa (Container Abandonment)",
    portRisk: "Extreme Demurrage & Impending Port Customs Auction (30-day statutory notice)",
    commodity: "Engineering Spares, Galvanized Steel, Textiles, Parboiled Rice",
    defaultPattern: "Buyer vanishes completely. The collecting bank reports 'drawee uncontactable'. Cargo accumulates astronomical container demurrage and Kenya Ports Authority (KPA) storage. Customs posts public gazette notice to auction uncleared cargo.",
    tacticalCountermeasure: "Serve urgent legal notice to Kenyan buyer holding them liable for full contract price plus port storage. Appoint local marine surveyor and maritime agent in Mombasa. Issue notice of cargo abandonment to carrier or execute immediate re-routing/re-sale to Uganda/Tanzania before port auction notice runs out.",
    statutoryRail: "East African Community Customs Management Act (EACCMA 2004 s.42) + Carriage of Goods by Sea Act (COGSA) + Indian Contract Act s.73.",
    timelineAction: "Day 10 post-arrival: Request AD Bank to issue urgent NOC for alternate consignee or cargo destruction/re-importation to prevent carrier claim against Indian shipper.",
  },
  {
    id: "rotterdam-europe",
    tabLabel: "Rotterdam / Antwerp (EU Regulatory Rejection Pretext)",
    portRisk: "High Terminal Handling Charges (THC) & Euro-Denominated Quay Rent",
    commodity: "Organic Spices, Sesame, Chemicals, Marine Products, Gherkins",
    defaultPattern: "Buyer claims post-arrival that cargo will not clear EU MRL (Maximum Residue Limits) or pesticide testing, refusing to pay the CAD draft at the European collecting bank while demanding free cargo release on open-credit terms for 'sorting'.",
    tacticalCountermeasure: "Reject open-credit release. Invoke accredited pre-shipment SGS/Eurofins Certificate of Analysis (COA) issued at Indian load port. Notify buyer that CAD/DP terms require payment against documents, not physical post-customs inspection. Issue 72-hour notice of default and divert to non-EU UK/Balkan destination.",
    statutoryRail: "ICC Uniform Rules for Collections URC 522 + Incoterms 2020 (CIF/CFR document delivery obligations) + Rome I Regulation Art. 3/4.",
    timelineAction: "Day 4 post-discharge: Recall documents via Remitting Bank and endorse B/L to secondary EU importer or bonded warehousekeeper.",
  },
  {
    id: "collecting-bank-breach",
    tabLabel: "Bank Negligence: B/L Released Without Payment",
    portRisk: "Total Loss of Title: Cargo Cleared Without Exporter Realizing Funds",
    commodity: "Any Export Sector on CAD / DP (Sight Collection)",
    defaultPattern: "The overseas collecting bank wrongfully releases original Bills of Lading to the buyer on trust receipt, local relationship, or acceptance of a deferred bill without collecting irrevocable funds, in gross violation of collection instructions.",
    tacticalCountermeasure: "Issue emergency formal notice of banking liability to Foreign Collecting Bank under URC 522 Article 9 & Article 10. File simultaneous complaint through Reserve Bank of India (Banking Ombudsman / FED) and Indian Remitting Bank, holding the foreign bank strictly liable as bailee and converter of title.",
    statutoryRail: "URC 522 Art. 9 (Good Faith & Due Care) + Art. 10 (Documents vs Payment) + High Court Maritime Admiralty Jurisdiction / Tort of Conversion.",
    timelineAction: "Immediate (within 24 hours of unauthorized delivery order issuance): Serve pre-litigation banker liability notice and notify shipping line to freeze gate pass.",
  },
];

export default function CadDpScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(SCENARIOS[0].id);
  const activeScenario = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full">
      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-2 mb-6 border-b border-slate-200 pb-3">
        {SCENARIOS.map((scenario) => {
          const isActive = scenario.id === activeTab;
          return (
            <button
              key={scenario.id}
              type="button"
              onClick={() => setActiveTab(scenario.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
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

      {/* Active Tab Panel */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-xl space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
          <div>
            <span className="inline-block px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-red-950/80 text-red-400 border border-red-800/60 mb-1">
              Port Risk Profile
            </span>
            <p className="text-sm sm:text-base font-extrabold text-white">
              {activeScenario.portRisk}
            </p>
          </div>
          <div className="text-right">
            <span className="text-[11px] text-slate-400 block font-medium">Vulnerable Commodities</span>
            <span className="text-xs sm:text-sm font-semibold text-emerald-400">{activeScenario.commodity}</span>
          </div>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-wider text-red-400 font-bold mb-1.5">
            Default Pattern &amp; Extortion Mechanism
          </h4>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {activeScenario.defaultPattern}
          </p>
        </div>

        <div className="bg-slate-800/80 rounded-xl p-4 sm:p-5 border border-slate-700">
          <h4 className="text-xs uppercase tracking-wider text-emerald-400 font-bold mb-1.5">
            SOP Countermeasure &amp; Shipper Defense
          </h4>
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
            {activeScenario.tacticalCountermeasure}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 text-xs">
          <div className="p-3.5 rounded-lg bg-slate-950/60 border border-slate-800">
            <span className="text-slate-400 uppercase font-semibold block text-[10px] mb-1">
              Governing Statutes &amp; Treaties
            </span>
            <span className="text-slate-200 font-medium">{activeScenario.statutoryRail}</span>
          </div>
          <div className="p-3.5 rounded-lg bg-slate-950/60 border border-slate-800">
            <span className="text-slate-400 uppercase font-semibold block text-[10px] mb-1">
              Mandatory Action Deadline
            </span>
            <span className="text-amber-300 font-medium">{activeScenario.timelineAction}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
