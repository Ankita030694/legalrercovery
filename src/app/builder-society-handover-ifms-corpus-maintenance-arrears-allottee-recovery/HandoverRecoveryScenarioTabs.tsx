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
    id: "investor-speculator-stall",
    tabLabel: "Speculative Investor Stall",
    badge: "Section 19(10) Possession Default",
    badgeColor: "bg-red-950/70 border-red-800 text-red-300",
    title: "Speculative Multi-Unit Investor Refuses Physical Possession to Evade Monthly CAM & Holding Charges",
    context:
      "In a 650-unit residential township, an HNI investor booked 6 three-BHK units under a subvention scheme. The local authority granted the Occupancy Certificate (OC) 14 months ago, and the promoter issued registered Offers of Possession with final demand notices. The investor stubbornly ignores possession calls, claiming minor cosmetic snags and refusing to pay ₹18.4 Lakhs in cumulative monthly CAM, holding charges (₹5/sq.ft./month), and pending final installment demands while actively hunting for secondary resale buyers.",
    legalChallenge:
      "Investors use cosmetic inspection punch-lists as bad-faith pretexts to delay taking possession, seeking to flip apartments before registration to evade state stamp duty (5%–7%), registration fees, and ongoing maintenance liabilities, leaving the developer footing common utility bills.",
    statutorySolution:
      "Under Section 19(10) of the Real Estate (Regulation and Development) Act, 2016 (RERA), every allottee has an unconditional statutory mandate to take physical possession within 2 months of OC issuance. Furthermore, the Supreme Court in Supertech Ltd. v. Rajni Goyal (2019) and Ireo Grace Realtech (2021) affirmed that upon issuance of the OC and offer of possession, the allottee becomes strictly liable for maintenance charges and holding charges. Under Section 19(6) & 19(7), overdue amounts attract prescribed interest (SBI MCLR + 2%).",
    actionableSteps: [
      "Issue a 15-day statutory cure notice under RERA Section 19(10) and Section 19(6) via Advocate Speed Post RPAD and email.",
      "Tabulate liquidated holding charges, CAM arrears, and penal interest at SBI highest MCLR + 2%.",
      "Attach a Joint Inspection Certificate confirming the flat is habitable and compliant with the sanctioned plan.",
      "Initiate Section 19 recovery proceedings before the RERA Adjudicating Officer / Authority for recovery of dues as land revenue arrears or contract cancellation under Section 11(5).",
    ],
    estimatedRecovery: "100% principal CAM + contractual holding charges + statutory penal interest within 60–90 days.",
  },
  {
    id: "rwa-handover-deficit",
    tabLabel: "RWA Handover Deficit",
    badge: "Pre-Handover OPEX Imbalance",
    badgeColor: "bg-amber-950/70 border-amber-800 text-amber-300",
    title: "Ad-Hoc RWA Refuses Society Takeover Until Builder Clears Maintenance Deficits of Defaulting Units",
    context:
      "A newly constituted Residents Welfare Association (RWA) or Apartment Owners Association (AOA) refuses to sign the maintenance handover protocol or accept common area custody. The RWA claims that out of 400 flats, 95 investor-owned units have never paid CAM, resulting in a ₹54 Lakh operational deficit incurred by the developer's facility arm to keep elevators, diesel generators, water treatment plants, and 24/7 security operational.",
    legalChallenge:
      "Promoters are caught between Section 11(4)(g) / 14 (duty to maintain common services until handover) and Section 17 / 19(11) (mandatory transfer of common areas to RWA within 3 months of majority possession), while non-paying allottees cripple the society's operating reserves.",
    statutorySolution:
      "Section 11(4)(g) specifies that the promoter pays outgoings until he transfers physical possession to the allottees. For units where possession was offered post-OC but the allottee failed to take physical handover under Section 19(10), the legal liability shifts entirely onto defaulting allottees pursuant to Section 19(6). The promoter is legally entitled to assign actionable claims and recover individual arrears from defaulters via Section 19 RERA petitions before handing over net audited accounts.",
    actionableSteps: [
      "Conduct a comprehensive statutory facility audit by an independent Chartered Accountant segregating promoter capital works from operational CAM deficits.",
      "Issue tripartite demand notices to all 95 defaulting allottees placing them on statutory notice of their Section 19(6) non-compliance.",
      "Execute an interim tripartite handover protocol with the RWA transferring operational management while assigning or preserving builder recovery rights over arrears.",
      "File batch recovery claims under RERA Section 19 before the Real Estate Regulatory Authority to obtain recovery certificates executable through the District Collector.",
    ],
    estimatedRecovery: "Resolution of handover bottleneck and 80%–90% deficit recovery through statutory RERA recovery certificates.",
  },
  {
    id: "ifms-sinking-fund-refusal",
    tabLabel: "IFMS & Corpus Refusal",
    badge: "Common Corpus Non-Payment",
    badgeColor: "bg-blue-950/70 border-blue-800 text-blue-300",
    title: "Homebuyer Demands Key Handover But Refuses to Deposit IFMS Corpus, Club Security & Advance CAM",
    context:
      "An allottee has paid all construction-linked installments but refuses to pay ₹3,50,000 comprising Interest-Free Maintenance Security (IFMS), sinking fund corpus, advance 1-year maintenance deposit, and clubhouse operational security at the time of final offer of possession. The buyer demands immediate physical key delivery, threatening criminal complaints for criminal breach of trust under BNS Section 316 if keys are withheld.",
    legalChallenge:
      "Buyers mischaracterize IFMS as an illegal or unauthorized extraction, arguing that corpus funds should only be deposited directly to the future RWA rather than the promoter, leaving the initial operational corpus underfunded.",
    statutorySolution:
      "Clauses requiring IFMS and advance maintenance deposits are standard statutory covenants in model BBA (Builder Buyer Agreements) registered under RERA Section 13. Promoters hold IFMS funds in designated trust/escrow accounts strictly for transfer to the RWA upon handover under Section 17. The promoter is legally entitled to withhold unconditional key handover until all mandatory pre-possession deposits under Section 19(6) are remitted.",
    actionableSteps: [
      "Furnish an audited escrow bank account statement proving IFMS deposits are ring-fenced exclusively for transfer to the registered RWA.",
      "Issue a formal fact-verified notice explaining that key release is conditional upon complete discharge of Section 19(6) contractual and statutory obligations.",
      "Notify the buyer of accruing holding charges and interest under Section 19(7) for each day of possession delay caused by their deposit withholding.",
      "Provide a standardized undertaking confirming automated transfer of the allottee's IFMS credit directly into the RWA bank ledger upon registration.",
    ],
    estimatedRecovery: "100% remittance of IFMS corpus and advance CAM prior to physical key handover.",
  },
  {
    id: "stamp-duty-conveyance-evasion",
    tabLabel: "Conveyance & Registry Evasion",
    badge: "Section 17 Title Execution Default",
    badgeColor: "bg-purple-950/70 border-purple-800 text-purple-300",
    title: "Allottee Occupies Unit but Deliberately Stalls Executing Registered Conveyance / Sub-Lease Deed",
    context:
      "An allottee cleared base dues and took fit-out possession 18 months ago, but persistently ignores repeated notices from the developer's legal team to execute and register the final Sub-Lease / Conveyance Deed. The buyer seeks to avoid paying 6% state stamp duty and registration fees, leaving the promoter on municipal and tax records as the primary property owner.",
    legalChallenge:
      "When buyers delay registration, municipal corporations assess commercial/residential property taxes against the developer. Furthermore, unexecuted deeds prevent the developer from closing project SPV accounts and obtaining formal project completion releases from RERA.",
    statutorySolution:
      "Under RERA Section 17 read with Section 19(10), execution of the registered conveyance deed is a mutual statutory obligation. If the allottee defaults after notice, the developer is protected against municipal outgoings under Section 19(6), which shifts local tax liability onto the allottee from the date of possession. Promoters can issue an ultimatum notice to cancel the allotment under Section 11(5) or petition RERA for specific performance and indemnification.",
    actionableSteps: [
      "Issue a 30-day statutory notice for execution of conveyance deed under Section 17 and Section 19(10).",
      "Bill all interim municipal property tax assessments and administrative stamp surcharge penalties directly to the allottee's ledger.",
      "Notify the local Sub-Registrar and Municipal Authority of the allottee's default, placing on record that the unit is in the allottee's exclusive possession.",
      "File a petition before RERA seeking directions for mandatory execution of conveyance deed or authorization to terminate allotment.",
    ],
    estimatedRecovery: "Compelled deed registration with complete reimbursement of municipal tax and administrative holding costs.",
  },
];

export default function HandoverRecoveryScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(SCENARIOS[0].id);

  const activeScenario = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-7 shadow-xl text-white">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6 border-b border-slate-800 pb-4">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-red-400 block mb-1">
            Interactive Operational Matrix
          </span>
          <p className="text-lg sm:text-xl font-bold text-white">
            4 Post-OC Allottee Failure Modes &amp; Statutory Playbooks
          </p>
        </div>
        <span className="text-xs text-slate-400">
          RERA 2016 ss. 19(6), 19(7), 19(10) &bull; Supreme Court Precedents
        </span>
      </div>

      {/* Tabs Navigation */}
      <div className="flex flex-wrap gap-2 mb-6">
        {SCENARIOS.map((scenario) => {
          const isActive = activeTab === scenario.id;
          return (
            <button
              key={scenario.id}
              type="button"
              onClick={() => setActiveTab(scenario.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                isActive
                  ? "bg-[#DC2626] text-white shadow-lg shadow-red-900/40"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white"
              }`}
            >
              {scenario.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Scenario Card */}
      <div className="bg-slate-800/80 border border-slate-700 rounded-xl p-5 sm:p-6 space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-700 pb-3">
          <span
            className={`inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wide border ${activeScenario.badgeColor}`}
          >
            {activeScenario.badge}
          </span>
          <span className="text-xs font-semibold text-emerald-400">
            Recovery Potential: {activeScenario.estimatedRecovery}
          </span>
        </div>

        <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
          {activeScenario.title}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-300">
          <div className="bg-slate-900/60 p-4 rounded-lg border border-slate-800 space-y-2">
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-amber-400 block">
              Commercial &amp; Fact Scenario
            </span>
            <p className="leading-relaxed">{activeScenario.context}</p>
          </div>

          <div className="bg-slate-900/60 p-4 rounded-lg border border-slate-800 space-y-2">
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-red-400 block">
              Debtor Pretext &amp; Legal Barrier
            </span>
            <p className="leading-relaxed">{activeScenario.legalChallenge}</p>
          </div>
        </div>

        <div className="bg-slate-900/90 p-4 rounded-lg border-l-4 border-[#DC2626] space-y-2">
          <span className="text-[11px] font-extrabold uppercase tracking-wider text-red-400 block">
            Statutory Legal Remedy &amp; RERA Authority
          </span>
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
            {activeScenario.statutorySolution}
          </p>
        </div>

        <div className="space-y-2 pt-1">
          <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 block">
            SOP Action Plan for Developer Legal Desk
          </span>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
            {activeScenario.actionableSteps.map((step, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2 bg-slate-900/50 p-2.5 rounded-lg border border-slate-800"
              >
                <span className="w-5 h-5 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <span className="leading-relaxed">{step}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
