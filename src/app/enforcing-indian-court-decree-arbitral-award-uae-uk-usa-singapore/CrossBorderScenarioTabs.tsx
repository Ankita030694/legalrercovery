"use client";

import React, { useState } from "react";

interface JurisdictionScenario {
  id: string;
  tabLabel: string;
  destination: string;
  targetBuyer: string;
  assetProfile: string;
  optimalRail: string;
  cpcBasis: string;
  enforcementAction: string;
  pitfalls: string;
}

const SCENARIOS: JurisdictionScenario[] = [
  {
    id: "uae-dubai",
    tabLabel: "UAE (Dubai / Abu Dhabi)",
    destination: "United Arab Emirates (Onshore Courts & DIFC / ADGM)",
    targetBuyer: "Middle Eastern Importer, Wholesale Distributor, or General Trading LLC",
    assetProfile: "Corporate bank accounts at Emirates NBD / Mashreq Bank; warehoused inventory in Jebel Ali Free Zone (JAFZA); commercial receivables.",
    optimalRail: "CPC Section 44A Direct Execution (Ministry of Law Notification No. G.S.R. 38(E) dated 17-01-2020) OR Institutional Arbitral Award (DIAC / MCIA / SIAC).",
    cpcBasis: "Since Jan 17, 2020, UAE is gazetted as a 'Reciprocating Territory' under Section 44A of the Code of Civil Procedure (CPC). A certified copy of a superior Indian civil/commercial court decree operates with direct executory effect in UAE Federal and Dubai Execution Courts.",
    enforcementAction: "File an Execution Petition directly in Dubai Court of First Instance / Execution Court accompanied by Form 63 certified decree, certificate of satisfaction/non-satisfaction from the Indian court, and Arabic sworn translation. Debtor bank accounts and commercial licenses are immediately attached under UAE Cabinet Resolution No. 57 of 2018.",
    pitfalls: "Decrees from Indian Small Causes Courts or non-superior courts cannot be executed. The foreign decree must have conclusively adjudicated the merits under CPC Section 13 (pure summary default judgments without evidential inquiry risk rejection under Article 85 of the UAE Cabinet Resolution).",
  },
  {
    id: "usa-newyork-delaware",
    tabLabel: "USA (New York / Delaware / California)",
    destination: "United States of America (Federal District Courts & State Courts)",
    targetBuyer: "US Importer, Retail Chain, or Delaware Tech / Procurement Entity",
    assetProfile: "Operating accounts at JPMorgan Chase, Bank of America, or Wells Fargo; accounts receivable from US distributors; enterprise assets.",
    optimalRail: "New York Convention 1958 Arbitral Award (Federal Arbitration Act, 9 U.S.C. § 201 et seq.) — Mandatory.",
    cpcBasis: "NON-RECIPROCATING JURISDICTION under CPC s.44A. The USA has never been notified as a reciprocating territory by India. An Indian civil court decree cannot be directly executed in US courts.",
    enforcementAction: "If holding an Indian arbitral award: File a petition to confirm and enforce under Chapter 2 of the Federal Arbitration Act within 3 years in the relevant US Federal District Court. If holding only a civil decree: Must file an entirely new plenary civil lawsuit 'on the foreign judgment' under the Uniform Foreign-Country Money Judgments Recognition Act (UFCMJRA) as adopted by that state.",
    pitfalls: "Suing on an Indian court decree in the USA subjects the creditor to intense US discovery, personal jurisdiction battles, and expensive US attorney hourly billing ($600–$1,200/hr). Arbitration clauses in contracts with US counterparties are strictly indispensable.",
  },
  {
    id: "uk-england-wales",
    tabLabel: "United Kingdom (England & Wales)",
    destination: "United Kingdom (High Court of Justice, King's Bench Division)",
    targetBuyer: "UK Buying House, Commodity Broker, or European Logistics Hub registered in England",
    assetProfile: "Sterling bank accounts at Barclays / HSBC / Lloyds; commercial premises; balance sheet trade receivables.",
    optimalRail: "CPC Section 44A / Foreign Judgments (Reciprocal Enforcement) Act 1933 OR New York Convention (LCIA / SIAC / ICC).",
    cpcBasis: "Reciprocating Territory under CPC s.44A and reciprocal statutory bilateral framework dating back to 1953 (High Court and District Courts recognized).",
    enforcementAction: "Register the Indian Commercial Court decree in the King's Bench Division of the High Court of Justice within 6 years of the decree date. Once registered, it takes effect as if it were a domestic High Court judgment, allowing Third-Party Debt Orders (freezing bank accounts) and Charging Orders against real property.",
    pitfalls: "Service of process in the original Indian suit must scrupulously comply with the Hague Service Convention 1965. Any breach of natural justice or non-service provides complete defense under Section 4(1)(a)(iii) of the UK 1933 Act.",
  },
  {
    id: "singapore",
    tabLabel: "Singapore",
    destination: "Singapore (State Courts & Singapore International Commercial Court - SICC)",
    targetBuyer: "Southeast Asian Trading Arm, Multi-Commodity Procurement Hub, or MNC Headquarters",
    assetProfile: "DBS, OCBC, or UOB multi-currency escrow accounts; regional supply-chain letters of credit; holding company equity.",
    optimalRail: "Reciprocal Enforcement of Foreign Judgments Act 1959 (REFJA) OR New York Convention (SIAC / MCIA Award).",
    cpcBasis: "Reciprocating Territory under CPC s.44A. Reciprocally, Singapore notified superior courts of India under the Reciprocal Enforcement of Commonwealth Judgments Act (RECJA) and subsequent REFJA consolidation.",
    enforcementAction: "File an ex-parte application for registration of the Indian superior court money decree supported by an affidavit and certified copy. Upon registration, issue an Enforcement Order for Attachment of Debts (Garnishee Order) against Singapore domestic banks within 14–21 business days.",
    pitfalls: "Tightly observed 6-year registration limitation window. If the decree is under appeal in an Indian High Court, Singapore courts will stay enforcement pending Indian appellate outcome under REFJA Section 5.",
  },
];

export default function CrossBorderScenarioTabs() {
  const [activeTab, setActiveTab] = useState(SCENARIOS[0].id);
  const currentScenario = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full bg-slate-900 rounded-2xl border border-slate-800 p-5 sm:p-6 md:p-8 text-white">
      <div className="mb-6">
        <span className="inline-block px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-2">
          Jurisdictional Execution Framework
        </span>
        <h3 className="text-xl sm:text-2xl font-black text-white">
          Asset Freezing & Enforcement Across Key Export Corridors
        </h3>
        <p className="text-slate-400 text-xs sm:text-sm mt-1">
          Select target destination to evaluate statutory enforceability, local banking attachment powers, and prerequisite notifications.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 pb-4 border-b border-slate-800">
        {SCENARIOS.map((scenario) => (
          <button
            key={scenario.id}
            onClick={() => setActiveTab(scenario.id)}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeTab === scenario.id
                ? "bg-[#DC2626] text-white shadow-lg shadow-red-900/40"
                : "bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white"
            }`}
          >
            {scenario.tabLabel}
          </button>
        ))}
      </div>

      {/* Active Tab Panel */}
      <div className="mt-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-slate-800/80 rounded-xl p-4 border border-slate-700/60">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
              Target Forum & Buyer Profile
            </span>
            <p className="text-sm font-bold text-white mb-1">{currentScenario.destination}</p>
            <p className="text-xs text-slate-300">{currentScenario.targetBuyer}</p>
          </div>

          <div className="bg-slate-800/80 rounded-xl p-4 border border-slate-700/60">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
              Buyer Asset Pool in Target Jurisdiction
            </span>
            <p className="text-xs text-slate-300 leading-relaxed">{currentScenario.assetProfile}</p>
          </div>
        </div>

        <div className="bg-slate-950/60 rounded-xl p-5 border border-slate-800 space-y-4">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 block mb-1">
              Recommended Legal Rail
            </span>
            <p className="text-sm font-bold text-emerald-300">{currentScenario.optimalRail}</p>
          </div>

          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
              Statutory Basis & Reciprocity Status
            </span>
            <p className="text-xs text-slate-300 leading-relaxed">{currentScenario.cpcBasis}</p>
          </div>

          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-blue-400 block mb-1">
              Direct Enforcement & Bank Garnishment Mechanism
            </span>
            <p className="text-xs text-slate-300 leading-relaxed">{currentScenario.enforcementAction}</p>
          </div>

          <div className="p-3 bg-red-950/40 border border-red-800/50 rounded-lg">
            <span className="text-[10px] font-bold uppercase tracking-wider text-red-400 block mb-1">
              Critical Litigant Pitfall & Debtor Defense Risk
            </span>
            <p className="text-xs text-red-200 leading-relaxed">{currentScenario.pitfalls}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
