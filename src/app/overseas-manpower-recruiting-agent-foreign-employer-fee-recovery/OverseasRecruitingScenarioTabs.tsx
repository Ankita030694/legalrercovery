"use client";

import React, { useState } from "react";

interface ScenarioTab {
  id: string;
  tabLabel: string;
  title: string;
  countryScope: string;
  modusOperandi: string;
  legalDoctrine: string;
  actionProtocol: {
    phase: string;
    description: string;
  }[];
  statutoryHook: string;
  recommendedRemedy: string;
}

const OVERSEAS_SCENARIOS: ScenarioTab[] = [
  {
    id: "gulf-epc-mobilization-default",
    tabLabel: "Gulf EPC Mobilization Default",
    title: "150 Technicians Deployed to Saudi/UAE — Foreign EPC Contractor Withholds $180,000 Service Fee & Airfares",
    countryScope: "Kingdom of Saudi Arabia (KSA), UAE, Qatar, Oman & Kuwait",
    modusOperandi:
      "The MEA Recruiting Agent (RA) mobilizes 150 certified welders and electricians under an attested eMigrate Demand Letter and Power of Attorney for an EPC contractor in Jubail or Abu Dhabi. The RA finances trade-test logistics, GAMCA medicals, visa stamping, and international flight tickets (advancing over ₹45 Lakhs). Upon successful deployment, the foreign employer takes possession of the workers, secures their residence permits (Iqama/EID), and abruptly stops communicating. The employer withholds the recruitment fee ($1,200/worker) and ticket reimbursements, claiming 'the project owner has delayed our milestone billing.'",
    legalDoctrine:
      "Under the Emigration Act, 1983, the attested Foreign Employer (FE) Demand Letter and Specimen Employment Contract registered on the eMigrate portal constitute a binding, state-monitored international commercial agreement. Under Section 70 of the Indian Contract Act, 1872 (Quantum Meruit) and Section 73 (Breach Damages), the foreign employer is strictly liable for the contracted service charges and reimbursed advances. For UAE entities, money decrees passed by Indian Commercial Courts are enforceable directly in the Dubai Courts under Section 44A of the Code of Civil Procedure, 1908 (reciprocating territory status notified via S.O. 261(E)).",
    actionProtocol: [
      {
        phase: "Step 1: eMigrate Dossier & Deployment Telemetry Lock",
        description:
          "Consolidate all PoE clearance numbers, eMigrate approved Demand Letter (DL) IDs, airline PNR manifests, arrival immigration timestamps, and Gamca/trade-test sign-offs into a tamper-evident audit bundle.",
      },
      {
        phase: "Step 2: Formal Tri-Lingual Statutory Demand Notice",
        description:
          "Serve a fact-verified international demand notice simultaneously to the foreign employer's Gulf headquarters, their Indian liaison desk, and copy the Labor Attache at the Embassy of India in Riyadh/Abu Dhabi.",
      },
      {
        phase: "Step 3: MEA Protector General of Emigrants (PGE) Blacklisting Petition",
        description:
          "File an administrative grievance before the Protector General of Emigrants (PGE) under Section 10/24 of the Emigration Act to suspend the employer's eMigrate portal registration, freezing their legal quota to recruit Indian manpower.",
      },
    ],
    statutoryHook: "Emigration Act 1983 ss. 10/24, CPC s.44A (UAE Reciprocating Decree) & Contract Act s.70/73",
    recommendedRemedy: "Full 100% Invoice Clearance + Reimbursed Travel Advances + Immediate eMigrate Blacklisting Restraint",
  },
  {
    id: "european-work-permit-abandonment",
    tabLabel: "European Work Permit Abandonment",
    title: "European Employer Cancels 40 Visas Mid-Transit & Refuses Incurred Translation/Processing Advances",
    countryScope: "Poland, Romania, Croatia, Malta, Hungary & Lithuania",
    modusOperandi:
      "A European manufacturing or logistics conglomerate engages an Indian RA to recruit 40 heavy vehicle drivers and CNC operators. The agency incurs heavy upfront expenses on authorized sworn translations, apostille verifications, embassy VFS appointment logistics, and trade certifications. After 15 workers arrive in Warsaw or Bucharest, the employer abruptly cancels the remaining 25 work permits citing 'revised production forecasts', repudiates the placement agreement, and refuses to reimburse the €35,000 in incurred processing costs.",
    legalDoctrine:
      "Contractual repudiation without cause entitles the agency to reliance damages and expectation damages under Section 73 of the Indian Contract Act, 1872. Under international private law and EU Directive 2011/7/EU on combating late payments in commercial transactions, commercial creditors are entitled to statutory interest and compensation for recovery costs. Where the European firm executed an agency agreement or utilized an Indian sourcing intermediary, jurisdiction lies with Indian Commercial Courts under Section 2(1)(c)(xviii) of the Commercial Courts Act, 2015.",
    actionProtocol: [
      {
        phase: "Step 1: Out-of-Pocket Expense Audit",
        description:
          "Tabulate all non-refundable embassy visa fees, apostille invoices, sworn translation bills, and trade-test booking receipts incurred under the principal's explicit written requisition.",
      },
      {
        phase: "Step 2: Cross-Border Commercial Demand with EU Statutory Interest",
        description:
          "Issue a formal fact-verified notice claiming actual incurred costs plus lost contractual agency commission, citing EU Directive 2011/7/EU and Indian Contract Act s.73.",
      },
      {
        phase: "Step 3: Indian MSME Samadhaan / Commercial Summary Filing",
        description:
          "If the RA is Udyam-registered, initiate statutory conciliation under MSMED Act Section 18 against the foreign company and any Indian subsidiary or agent acting on its behalf.",
      },
    ],
    statutoryHook: "Indian Contract Act Section 73 (Reliance Damages), Commercial Courts Act s.2(1)(c) & EU Directive 2011/7/EU",
    recommendedRemedy: "Reimbursement of Total Processing Advances + Contractual Lost-Margin Damages + Statutory Late-Payment Interest",
  },
  {
    id: "bogus-trade-test-rejection-fraud",
    tabLabel: "Spurious Trade-Test Rejections",
    title: "Client Attends Indian Trade Tests, Signs Off Welder Batches, Then Issues Bogus 40% Debit Notes Abroad",
    countryScope: "Saudi Arabia, UAE, Qatar, Kuwait & Bahrain",
    modusOperandi:
      "The foreign employer's technical delegator travels to India, personally conducts 4 days of rigorous trade testing at an accredited workshop in Mumbai or Baroda, and countersigns candidate evaluation sheets. Once the 60 workers arrive on-site, the foreign project director claims 'these workers are unskilled and cannot operate specialized welding rigs', unilaterally imposing a 40% retroactive debit note on the recruitment invoice and refusing repatriation costs.",
    legalDoctrine:
      "Estoppel by Conduct under Section 121 of the Bharatiya Sakshya Adhiniyam, 2023 (formerly Section 115 Evidence Act). Once a principal or its authorized delegate personally inspects, tests, and certifies candidates in India prior to visa issuance, they are legally estopped from disputing candidate competence on identical parameters post-deployment. The unilateral debit note constitutes an illegal breach of contract under Section 73 and an unlawful deduction under the attested eMigrate Specimen Contract.",
    actionProtocol: [
      {
        phase: "Step 1: Assemble Certified Trade Test Logs",
        description:
          "Compile the physical or digital candidate evaluation scorecards bearing the wet signature or biometric sign-off of the foreign client's visiting technical delegate, supported by test workshop CCTV footage.",
      },
      {
        phase: "Step 2: Certificate of Electronic Record under BSA Section 63",
        description:
          "Execute a formal statutory certificate under Section 63 BSA validating email dispatches, WhatsApp communication with the foreign delegate, and interview video recordings.",
      },
      {
        phase: "Step 3: Legal Rebuttal & Embargo Notice",
        description:
          "Serve a stern legal rebuttal rejecting the fraudulent debit notes, citing statutory estoppel and demanding immediate invoice clearance within 15 calendar days under intimation to MEA.",
      },
    ],
    statutoryHook: "Bharatiya Sakshya Adhiniyam 2023 Section 121 (Estoppel) & Section 63 (Electronic Proof), Contract Act s.73",
    recommendedRemedy: "Immediate Invalidation of Retroactive Debit Notes + 100% Invoice Realization + Repatriation Indemnity",
  },
  {
    id: "quota-freeze-airfare-forfeiture",
    tabLabel: "Quota Freeze Airfare Forfeiture",
    title: "Foreign Employer Halts Deployment Due to Local Saudization / Emiratization & Refuses Airfare Advances",
    countryScope: "GCC Member States (Nitaqat & Emiratization Compliance)",
    modusOperandi:
      "After the RA books confirmed group international flight tickets and conducts pre-departure orientations for 80 workers, the foreign employer's HR calls to announce: 'Our company has slipped into Yellow Nitaqat status / our visa quota has been suspended by the Ministry of Human Resources. Hold all deployments indefinitely.' The airline tickets lapse and the employer refuses to reimburse ₹28.5 Lakhs in non-refundable airfares and medical charges, claiming 'force majeure'.",
    legalDoctrine:
      "Local regulatory compliance failures or quota freezes do not constitute 'Force Majeure' under Section 56 of the Indian Contract Act, 1872 (Frustration of Contract). An employer's failure to maintain lawful domestic visa quotas is an internal operational failure, not an act of God. Under Section 70 and Section 124 (Indemnity) of the Contract Act, the employer is legally obligated to hold the Indian agent harmless and reimburse every rupee spent in direct reliance upon the employer's mobilization instruction.",
    actionProtocol: [
      {
        phase: "Step 1: Document Specific Mobilization Directives",
        description:
          "Extract the foreign employer's written emails, Telegram/WhatsApp instructions, and ticket-issuance authorizations mandating the exact travel dates and flight sectors.",
      },
      {
        phase: "Step 2: Airline Cancellation & Forfeiture Certificates",
        description:
          "Obtain official ledger statements from IATA airlines or corporate travel portals certifying non-refundable ticket values and penalty deductions incurred due to employer-directed travel halts.",
      },
      {
        phase: "Step 3: Section 124 Contract Act Indemnity Demand",
        description:
          "Issue a formal indemnity legal notice requiring full restitution of airfare advances within 10 days, followed by recovery action before Indian Commercial Courts under Section 19 CPC.",
      },
    ],
    statutoryHook: "Indian Contract Act Section 70, Section 56 (Self-Induced Frustration Inapplicable) & Section 124 (Indemnity)",
    recommendedRemedy: "100% Restitution of Lapsed Airfares + Travel Agency Penalties + Legal Notice Costs",
  },
];

export default function OverseasRecruitingScenarioTabs() {
  const [activeTabId, setActiveTabId] = useState<string>(OVERSEAS_SCENARIOS[0].id);

  const activeScenario =
    OVERSEAS_SCENARIOS.find((s) => s.id === activeTabId) || OVERSEAS_SCENARIOS[0];

  return (
    <div className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-6 md:p-8">
      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-2 mb-6 border-b border-slate-200 pb-4">
        {OVERSEAS_SCENARIOS.map((scenario) => {
          const isActive = scenario.id === activeTabId;
          return (
            <button
              key={scenario.id}
              type="button"
              onClick={() => setActiveTabId(scenario.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-150 cursor-pointer ${
                isActive
                  ? "bg-[#DC2626] text-white shadow-sm"
                  : "bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-900 border border-slate-200"
              }`}
            >
              {scenario.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Tab Panel */}
      <div className="bg-white rounded-xl border border-slate-200 p-5 sm:p-6 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-100">
          <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-red-50 text-red-700 border border-red-200">
            Jurisdiction: {activeScenario.countryScope}
          </span>
          <span className="text-[11px] font-semibold text-slate-500">
            Hook: {activeScenario.statutoryHook}
          </span>
        </div>

        <p className="text-base sm:text-lg font-bold text-slate-900 mb-3">
          {activeScenario.title}
        </p>

        <div className="mb-4">
          <span className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
            Modus Operandi &amp; Operational Failure:
          </span>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            {activeScenario.modusOperandi}
          </p>
        </div>

        <div className="mb-5 bg-slate-50 rounded-xl p-4 border border-slate-200">
          <span className="block text-xs font-bold uppercase tracking-wider text-red-700 mb-1">
            Statutory Legal Doctrine:
          </span>
          <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
            {activeScenario.legalDoctrine}
          </p>
        </div>

        <div className="mb-5">
          <span className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
            Multi-Phase Creditor Action Protocol:
          </span>
          <div className="space-y-2.5">
            {activeScenario.actionProtocol.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-3 rounded-lg bg-white border border-slate-200"
              >
                <div className="w-6 h-6 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-black shrink-0 mt-0.5">
                  {idx + 1}
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900 mb-0.5">{item.phase}</p>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-3.5 bg-emerald-50 rounded-xl border border-emerald-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <span className="block text-[10px] font-bold uppercase tracking-wider text-emerald-800">
              Recommended Legal Remedy
            </span>
            <p className="text-xs sm:text-sm font-bold text-emerald-900">
              {activeScenario.recommendedRemedy}
            </p>
          </div>
          <a
            href="/user/new-recovery"
            className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold transition-colors shrink-0"
          >
            Initiate Recovery &rarr;
          </a>
        </div>
      </div>
    </div>
  );
}
