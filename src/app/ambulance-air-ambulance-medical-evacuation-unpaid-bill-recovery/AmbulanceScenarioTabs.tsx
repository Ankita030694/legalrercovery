"use client";

import React, { useState } from "react";

interface MedevacScenario {
  id: string;
  tabLabel: string;
  ticketBand: string;
  title: string;
  failureMechanism: string;
  lawfulProtocol: string;
  statutoryHooks: string;
  executionSteps: {
    step: string;
    detail: string;
  }[];
  recoveryLeverage: string;
}

const MEDEVAC_SCENARIOS: MedevacScenario[] = [
  {
    id: "insurance-cashless-repudiation",
    tabLabel: "Insurer Cashless Repudiation",
    ticketBand: "₹4.5L – ₹18L Domestic Air-Charter Claim",
    title: "Insurer or TPA Approves Air-Ambulance Evacuation on Phone/Email, Then Arbitrarily Repudiates Post-Landing",
    failureMechanism:
      "A critically ill cardiac or polytrauma patient requires urgent inter-state airlift. The insurer or Third-Party Administrator (TPA) issues an emergency email clearance or cashless pre-authorization under an Air Ambulance Policy Rider. After the flight lands safely and costs are incurred, the insurer repudiates the claim or imposes an arbitrary 75% hair-cut, citing 'unreasonable aviation tariffs', 'non-network flight operator', or 'lack of active ICU justification'.",
    lawfulProtocol:
      "Digital Pre-Authorization Audit + IRDAI Master Direction Demand + Order XXXVII CPC Summary Suit Against Insurer / TPA",
    statutoryHooks:
      "IRDAI (Health Insurance) Regulations, 2016 Reg. 26; IRDAI Master Circular on Operations and Allied Matters 2024; Information Technology Act 2000 s.10A; Bharatiya Sakshya Adhiniyam 2023 s.63; Order XXXVII Rule 1(2) CPC (Liquidated Claim on Written Contract).",
    executionSteps: [
      {
        step: "Preserve Pre-Flight Telephonic & Email Dispatch Audit Trail",
        detail:
          "Collate pre-flight emergency request emails, TPA cashless sanction tickets, emergency doctor triage referrals, and time-stamped call recordings under BSA 2023 Section 63 electronic certification.",
      },
      {
        step: "15-Day Statutory Notice Citing IRDAI Non-Repudiation Directives",
        detail:
          "Serve an Advocate Legal Demand on the insurer's Claims Head and TPA Desk, establishing that post-facto repudiation of emergency pre-authorized medical evacuation violates IRDAI guidelines and constitutes actionable commercial bad faith.",
      },
      {
        step: "Dual Filing: Insurance Ombudsman & Summary Commercial Action",
        detail:
          "Assist patient family in lodging an expedited Insurance Ombudsman complaint for policy limits while simultaneously instituting commercial recovery proceedings against the insurer for the balance flight mobilization costs.",
      },
    ],
    recoveryLeverage:
      "Regulatory Exposure: Insurers face heavy IRDAI penalties and Ombudsman censure for reneging on emergency life-support pre-authorizations once electronic audit logs are served.",
  },
  {
    id: "assistance-desk-cross-border",
    tabLabel: "Corporate & Travel Assistance",
    ticketBand: "₹12L – ₹45L International Bed-to-Bed Charter",
    title: "Global Travel Assistance Aggregator Dispatches Medevac Sortie, Then Stalls Settlement Citing Foreign Underwriters",
    failureMechanism:
      "An international travel assistance company (or multinational employer medical desk) engages an Indian charter operator to perform an urgent bed-to-bed repatriation (e.g., Nepal, Bangladesh, UAE, or Maldives to New Delhi/Mumbai). Following flight completion, the assistance desk stalls payments for 90–180 days, asserting that 'the foreign underwriter has not remitted funds' or disputing layover hours, ground ambulance rendezvous, and onboard ECMO doctor surcharges.",
    lawfulProtocol:
      "Principal-to-Principal Contract Enforcement + Section 70 Contract Act Quantum Meruit + Section 12A Commercial Mediation",
    statutoryHooks:
      "Commercial Courts Act 2015 s.2(1)(c)(xviii); Indian Contract Act 1872 s.70 (Non-Gratuitous Service) & s.73; Bharatiya Sakshya Adhiniyam 2023 s.63 (Airway Bills & Flight Clearance Metadata); MSMED Act 2006 ss.15 & 16 (for Indian registered MSME operators).",
    executionSteps: [
      {
        step: "Sever Underwriter Reliance via Principal Contract Doctrine",
        detail:
          "Issue formal communication establishing that the assistance desk is a direct contracting principal, not a conditional broker, and cannot withhold payment on grounds of third-party foreign underwriter delays.",
      },
      {
        step: "Flight Plan, DGCA ATC Clearance & Hospital Handover Submission",
        detail:
          "Dispatch complete verification dossier: DGCA flight clearance, Airport Authority of India (AAI) landing slips, fuel uplift receipts, and receiving hospital ICU bed-to-bed handover sheet.",
      },
      {
        step: "Commercial Court Pre-Institution Mediation or High Court Rule Action",
        detail:
          "Initiate mandatory Section 12A mediation before the District Legal Services Authority (DLSA) or file an international commercial summary suit with prayer for interim bank account attachment.",
      },
    ],
    recoveryLeverage:
      "Corporate Travel Blacklisting: Assistance desks depend on Indian charter operators for regional emergencies; legal escalation threatens their operational standing with multinational corporate clients.",
  },
  {
    id: "family-promissory-default",
    tabLabel: "Family WhatsApp / DPN Default",
    ticketBand: "₹5L – ₹28L Private Emergency Airlift",
    title: "Family Authorizes ₹18L Fixed-Wing Charter via WhatsApp/Email, Pays Token Advance, and Blocks Calls Post-Landing",
    failureMechanism:
      "A patient's family faces a critical clinical window and frantically requests a private air ambulance from a non-metro city to a premier metropolitan hospital. Due to extreme time constraints, the charter launches on a ₹2 Lakh token transfer plus WhatsApp confirmations, signed emergency indemnities, and promised post-landing RTGS. Once the patient is safely admitted to the destination ICU, the family reneges on the ₹16 Lakh balance, stops answering calls, or issues a cheque that bounces.",
    lawfulProtocol:
      "BSA 2023 Section 63 Digital Contract Execution + Section 138 NI Act Action + CPC Order XXXVII Summary Money Suit",
    statutoryHooks:
      "Bharatiya Sakshya Adhiniyam 2023 s.63; Information Technology Act 2000 s.10A (Electronic Contract Formation); Negotiable Instruments Act 1881 s.138 & s.139; Code of Civil Procedure 1908 Order XXXVII Rule 1 & 2; Indian Contract Act 1872 s.70.",
    executionSteps: [
      {
        step: "Immutable WhatsApp Chat Export & Hashing Under BSA s.63",
        detail:
          "Export complete WhatsApp conversation threads containing quotation approvals, passport/Aadhaar copies, flight schedule acknowledgments, and bank transfer promises, generating cryptographic hashes and Section 63 certificates.",
      },
      {
        step: "Statutory 15-Day NI Act Section 138 Notice (If Cheque Bounced)",
        detail:
          "If the family tendered a cheque or promissory note that dishonoured, immediately dispatch a Section 138 statutory demand within 30 days of the bank memo, activating criminal trial provisions.",
      },
      {
        step: "Order XXXVII Summary Suit with Pre-Judgment Asset Attachment",
        detail:
          "File an expedited Order XXXVII summary suit in the competent District Commercial Court, securing an Order XXXVIII Rule 5 attachment order against the debtor's disclosed properties or bank accounts.",
      },
    ],
    recoveryLeverage:
      "Criminal & Civil Cross-Pressure: Families cannot hide behind 'emotional emergency'; Indian courts treat emergency electronic authorizations as fully enforceable commercial commitments.",
  },
  {
    id: "hospital-als-fleet-arrears",
    tabLabel: "Hospital ALS Fleet Arrears",
    ticketBand: "₹8L – ₹40L Annual Fleet Retainer Arrears",
    title: "Multi-Specialty Hospital Chain Retains Dedicated ALS Fleet, Accrues 120-Day Arrears & Deducts Penalties",
    failureMechanism:
      "An Advanced Life Support (ALS) ground ambulance fleet operator provides dedicated ventilator-equipped cardiac ambulances, emergency medical technicians (EMTs), and drivers on an annual SLA to a private hospital chain. The hospital collects transfer charges from patients but delays vendor payouts to 90–150 days. When pressured, hospital accounts fabricate arbitrary deductions for 'delayed response times' or 'paramedic absenteeism' without contemporaneous logs.",
    lawfulProtocol:
      "GPS Fleet Telematics Ledger + MSME Samadhaan MSEFC Filing + Commercial Contract Termination Notice",
    statutoryHooks:
      "Micro, Small and Medium Enterprises Development Act 2006 ss.15, 16 & 18; Commercial Courts Act 2015 s.2(1)(c)(xviii); Bharatiya Sakshya Adhiniyam 2023 s.63 (GPS Telematics & Trip Sheet Logs); Income Tax Act 1961 s.43B(h).",
    executionSteps: [
      {
        step: "Collate GPS Telematics, Trip Sheets & Hospital Dispatch Slips",
        detail:
          "Reconcile all physical trip sheets countersigned by hospital casualty nurses against automated GPS trip logs, destroying fabricated allegations of delayed arrival.",
      },
      {
        step: "Serve 15-Day Legal Demand Invoking MSMED Act Section 16 & 43B(h)",
        detail:
          "Deliver an Advocate Demand Notice highlighting statutory compound interest at 3x RBI bank rate, service suspension rights, and fiscal penalties under Section 43B(h) for corporate buyers.",
      },
      {
        step: "MSEFC Samadhaan Fast-Track Conciliation & Arbitration",
        detail:
          "Lodge a statutory reference before the State Micro and Small Enterprises Facilitation Council (MSEFC), requiring the hospital to deposit 75% under Section 19 to challenge any award.",
      },
    ],
    recoveryLeverage:
      "Severe Balance Sheet Pressure: Corporate hospitals settle within 21 days to avoid Section 43B(h) disallowance and public exposure of defaulting on emergency ambulance providers.",
  },
];

export default function AmbulanceScenarioTabs() {
  const [activeTab, setActiveTab] = useState(MEDEVAC_SCENARIOS[0].id);
  const activeScenario =
    MEDEVAC_SCENARIOS.find((s) => s.id === activeTab) || MEDEVAC_SCENARIOS[0];

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
      {/* Tab Navigation Header */}
      <div className="flex flex-wrap border-b border-slate-200 bg-slate-50/80 p-1.5 sm:p-2 gap-1.5 sm:gap-2">
        {MEDEVAC_SCENARIOS.map((scenario) => {
          const isActive = scenario.id === activeTab;
          return (
            <button
              key={scenario.id}
              type="button"
              onClick={() => setActiveTab(scenario.id)}
              className={`flex-1 min-w-[140px] sm:min-w-[170px] py-2 sm:py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all text-center cursor-pointer ${
                isActive
                  ? "bg-[#DC2626] text-white shadow-xs"
                  : "bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-900 border border-slate-200/80"
              }`}
            >
              {scenario.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Tab Content Card */}
      <div className="p-5 sm:p-6 md:p-8 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-100">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-red-100 text-red-800">
            {activeScenario.ticketBand}
          </span>
          <span className="text-xs font-semibold text-slate-500">
            Operational Recovery Playbook
          </span>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 leading-snug mb-3">
            {activeScenario.title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-200">
            <strong className="text-slate-900 font-bold block mb-1">
              Commercial Failure Mode:
            </strong>
            {activeScenario.failureMechanism}
          </p>
        </div>

        {/* Protocol & Statutory Hooks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200">
            <span className="block text-[11px] font-black uppercase tracking-wider text-emerald-800 mb-1">
              Lawful Escalation Protocol
            </span>
            <p className="text-xs sm:text-sm text-emerald-950 font-medium leading-relaxed">
              {activeScenario.lawfulProtocol}
            </p>
          </div>
          <div className="p-4 rounded-xl bg-slate-900 text-white border border-slate-800">
            <span className="block text-[11px] font-black uppercase tracking-wider text-red-400 mb-1">
              Statutory Levers &amp; Sections
            </span>
            <p className="text-xs sm:text-sm text-slate-200 font-mono leading-relaxed">
              {activeScenario.statutoryHooks}
            </p>
          </div>
        </div>

        {/* 3-Step Action Sequence */}
        <div className="space-y-3">
          <h4 className="text-xs sm:text-sm font-black uppercase tracking-wider text-slate-900">
            SOP Execution Sequence
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {activeScenario.executionSteps.map((step, idx) => (
              <div
                key={step.step}
                className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block w-6 h-6 rounded-full bg-[#DC2626] text-white text-xs font-bold text-center leading-6 mb-2">
                    {idx + 1}
                  </span>
                  <p className="font-bold text-xs sm:text-sm text-slate-900 mb-1">
                    {step.step}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Leverage Box */}
        <div className="p-4 rounded-xl bg-amber-50 border border-amber-200">
          <div className="flex items-start gap-2.5">
            <span className="text-base text-amber-700 font-bold shrink-0">&bull;</span>
            <div className="text-xs sm:text-sm text-amber-900 font-medium leading-relaxed">
              <strong className="font-bold text-amber-950">Statutory Leverage: </strong>
              {activeScenario.recoveryLeverage}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
