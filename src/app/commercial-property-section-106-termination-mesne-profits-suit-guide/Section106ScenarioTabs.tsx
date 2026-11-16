"use client";

import React, { useState } from "react";

interface Scenario {
  id: string;
  badge: string;
  title: string;
  contractContext: string;
  statutoryTrap: string;
  landlordAction: string;
  expectedOutcome: string;
  keyStatutes: string[];
}

const SCENARIOS: Scenario[] = [
  {
    id: "unregistered-lease",
    badge: "Scenario 1 • Unregistered Instrument",
    title: "Unregistered Multi-Year Lease Deed (>11 Months)",
    contractContext:
      "A commercial tenant occupies a 12,000 sq. ft. prime retail showroom on an executed 9-year lease deed that was never registered under Section 17 of the Registration Act, 1908. After 18 months, the tenant stops paying rent, citing financial strain, but points to a 6-month reciprocal cure-and-notice clause in the unregistered draft.",
    statutoryTrap:
      "Defaulting tenants frequently rely on unexecuted or unregistered draft clauses to stall eviction, arguing the landlord cannot evict them without adhering to lengthy contractual exit notices or that registration failure invalidates the landlord's title.",
    landlordAction:
      "Under Section 107 of the Transfer of Property Act read with Section 49 of the Registration Act and the Supreme Court ruling in Park Street Properties (P) Ltd. v. Dipak Kumar Singh (2016), an unregistered lease exceeding one year cannot create a term lease. By operation of law, the tenancy defaults to a month-to-month lease terminable upon just 15 days' notice under Section 106 TPA. The landlord serves a concise 15-day notice to quit, ignoring the 6-month clause.",
    expectedOutcome:
      "The lease is lawfully determined upon the 15th calendar day. Continued occupation converts the tenant into an unauthorized occupant, triggering immediate liability for penal mesne profits at market rates and summary decree under Order XII Rule 6 CPC.",
    keyStatutes: [
      "TPA 1882 Section 106",
      "TPA 1882 Section 107",
      "Registration Act Section 49",
      "Park Street Properties (2016 SC)",
    ],
  },
  {
    id: "rent-control-defense",
    badge: "Scenario 2 • Jurisdictional Rebuttal",
    title: "Tenant Pleads Rent Control Act Statutory Protection",
    contractContext:
      "A corporate tenant operating a restaurant/retail outlet in a metro commercial corridor defaults on 4 consecutive months of rent (₹4,50,000/month). Upon receipt of a Section 106 notice, the tenant files an objection claiming protection against summary eviction under the State Rent Control Act, asserting the landlord can only evict on limited statutory grounds.",
    statutoryTrap:
      "Tenants attempt to drag commercial landlords into overburdened Rent Controller tribunals, where proceedings can stagnate for 8 to 15 years under protective welfare tenancy legislation.",
    landlordAction:
      "The landlord pre-empts this defense by demonstrating statutory exemption ceilings. Under Section 3(c) of the Delhi Rent Control Act (monthly rent > ₹3,500), Section 3(1)(b) of the Maharashtra Rent Control Act (companies with paid-up capital ≥ ₹1 Crore), and Section 2(1)(c)(vii) of the Commercial Courts Act, 2015, high-value commercial leases are completely outside the purview of Rent Control Acts. The landlord files a Commercial Eviction Suit or fast-track arbitration directly.",
    expectedOutcome:
      "The Civil/Commercial Court summarily rejects the tenant's jurisdictional challenge. Under Order XV-A CPC, the court directs the tenant to immediately deposit all arrears and ongoing market rent into court or face immediate striking off of their defense.",
    keyStatutes: [
      "Commercial Courts Act s.2(1)(c)(vii)",
      "Delhi Rent Control Act s.3(c)",
      "Maharashtra Rent Control Act s.3(1)(b)",
      "CPC Order XV-A / Order 39 Rule 10",
    ],
  },
  {
    id: "arbitration-vidya-drolia",
    badge: "Scenario 3 • Fast-Track Arbitration",
    title: "Arbitration Clause Enforcement Post-Vidya Drolia (SC)",
    contractContext:
      "A commercial lease agreement contains an institutional arbitration clause referring disputes to a sole arbitrator. When the tenant defaults on rent and refuses to hand over possession, the landlord invokes Section 21 of the Arbitration and Conciliation Act, 1996. The tenant objects under Section 11/16, claiming tenancy disputes are 'non-arbitrable' based on Himangni Enterprises (2017).",
    statutoryTrap:
      "Older High Court decisions and the overruled 2017 Himangni Enterprises ruling led practitioners to believe landlord-tenant disputes could never be referred to arbitration, forcing lessors into protracted district civil courts.",
    landlordAction:
      "The landlord cites the landmark 3-Judge Bench Supreme Court judgment in Vidya Drolia v. Durga Trading Corporation (2021) 2 SCC 1, which expressly overruled Himangni Enterprises. The Supreme Court confirmed that landlord-tenant disputes governed by the Transfer of Property Act are rights in personam and fully arbitrable. The landlord moves under Section 9 / Section 17 for interim protection, freezing tenant bank accounts and seeking an order to secure possession and mesne profits.",
    expectedOutcome:
      "The High Court appoints a sole arbitrator under Section 11(6), or the agreed institutional arbitral tribunal proceeds. An enforceable arbitral award for eviction and arrears is rendered within 6 to 12 months, executable as a civil court decree under Section 36.",
    keyStatutes: [
      "Arbitration Act 1996 s.7, 11, 17 & 36",
      "Vidya Drolia (2021) 2 SCC 1",
      "TPA 1882 Section 111(h)",
      "CPC Order XXI Execution",
    ],
  },
  {
    id: "mesne-profits-holdover",
    badge: "Scenario 4 • Penal Holdover Profits",
    title: "Squatting Holdover Tenant & Penal Mesne Profits (2x–3x)",
    contractContext:
      "A corporate tenant's 5-year lease expires by efflux of time under Section 111(a) TPA, or is terminated under Section 106. The tenant fails to vacate, continuing to occupy 20,000 sq. ft. of Grade-A office space, tendering old contractual rent of ₹20,00,000/month while market rent has escalated to ₹38,00,000/month.",
    statutoryTrap:
      "The tenant hopes that by continuing to remit old contractual rent, they can establish 'assent of the lessor' under Section 116 TPA, renewing the tenancy as a tenant holding over at old rates.",
    landlordAction:
      "The landlord immediately serves a formal protest letter: rejecting renewal, returning the cheque or accepting payments strictly 'without prejudice as use-and-occupation compensation' (citing Sarup Singh Gupta v. S. Jagdish Singh). The landlord files under Order XX Rule 12 CPC for possession and an inquiry into mesne profits, citing Atma Ram Properties (P) Ltd. v. Federal Motors (P) Ltd. (2005) to claim prevailing market rent plus contractual penal holdover liquidated damages (typically 2x contractual rent).",
    expectedOutcome:
      "The court appoints a Local Commissioner or relies on registered lease deeds of comparable units in the commercial building to fix interim mesne profits at market rates. Failure to pay triggers immediate warrants of possession.",
    keyStatutes: [
      "TPA 1882 Section 116",
      "CPC Order XX Rule 12",
      "Atma Ram Properties (2005) 1 SCC 705",
      "Indian Oil v. Sudera Realty (2022 SC)",
    ],
  },
];

export default function Section106ScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(SCENARIOS[0].id);
  const activeScenario = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
      {/* Tab Selectors */}
      <div className="grid grid-cols-2 lg:grid-cols-4 border-b border-slate-200 bg-slate-50">
        {SCENARIOS.map((scenario) => {
          const isActive = scenario.id === activeTab;
          return (
            <button
              key={scenario.id}
              type="button"
              onClick={() => setActiveTab(scenario.id)}
              className={`p-3.5 sm:p-4 text-left transition-all relative border-r border-slate-200 last:border-r-0 ${
                isActive
                  ? "bg-white text-slate-900 font-bold border-b-2 border-b-[#DC2626]"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/70"
              }`}
            >
              <span className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#DC2626] mb-1">
                {scenario.badge.split("•")[0].trim()}
              </span>
              <p className="text-xs sm:text-sm font-bold line-clamp-2 leading-snug">
                {scenario.title}
              </p>
              {isActive && (
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#DC2626]" />
              )}
            </button>
          );
        })}
      </div>

      {/* Tab Content Display */}
      <div className="p-5 sm:p-6 md:p-8 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-slate-100">
          <div>
            <span className="inline-block px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-red-50 text-[#DC2626] border border-red-200 mb-1.5">
              {activeScenario.badge}
            </span>
            <p className="text-lg sm:text-xl font-black text-slate-900">
              {activeScenario.title}
            </p>
          </div>
        </div>

        {/* 2x2 Grid of Commercial Reality & Statutory Strategy */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Fact Context */}
          <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
              Commercial Fact Pattern
            </span>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {activeScenario.contractContext}
            </p>
          </div>

          {/* Statutory Trap */}
          <div className="p-4 sm:p-5 rounded-xl bg-amber-50/70 border border-amber-200 space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800 block">
              Debtor Statutory Defense Trap
            </span>
            <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">
              {activeScenario.statutoryTrap}
            </p>
          </div>

          {/* Landlord Action */}
          <div className="p-4 sm:p-5 rounded-xl bg-emerald-50/70 border border-emerald-200 space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 block">
              Creditor Landlord Strategic SOP
            </span>
            <p className="text-xs sm:text-sm text-emerald-950 leading-relaxed font-medium">
              {activeScenario.landlordAction}
            </p>
          </div>

          {/* Expected Outcome */}
          <div className="p-4 sm:p-5 rounded-xl bg-slate-900 text-white space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-red-400 block">
              Enforcement &amp; Judicial Outcome
            </span>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              {activeScenario.expectedOutcome}
            </p>
          </div>
        </div>

        {/* Statutory Anchors */}
        <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold text-slate-500 mr-2">Governing Authorities:</span>
          {activeScenario.keyStatutes.map((statute, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-slate-100 text-slate-700 border border-slate-200"
            >
              {statute}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
