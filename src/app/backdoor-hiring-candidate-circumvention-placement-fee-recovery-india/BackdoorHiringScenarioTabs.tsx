"use client";

import React, { useState } from "react";

interface ScenarioTab {
  id: string;
  tabLabel: string;
  title: string;
  modusOperandi: string;
  legalDoctrine: string;
  actionProtocol: {
    phase: string;
    description: string;
  }[];
  statutoryHook: string;
  recommendedRemedy: string;
}

const CIRCUMVENTION_SCENARIOS: ScenarioTab[] = [
  {
    id: "rejected-then-hired",
    tabLabel: "Rejected & Secretly Hired",
    title: "Client HR Claimed 'Position on Hold' or 'Not a Cultural Fit' — Hired Secretly 60 Days Later",
    modusOperandi:
      "The agency submits a senior candidate, coordinates interviews, or receives an email from HR stating: 'The budget has been frozen / client went with another profile.' Within 60 to 120 days, the candidate updates their LinkedIn profile displaying the exact corporate title at the client company, having been recruited directly to dodge agency placement commissions.",
    legalDoctrine:
      "Under the 'Effective Cause' doctrine (Millar v. Radford, upheld in Indian mercantile contract jurisprudence) and Section 73 of the Indian Contract Act, 1872, the agency remains the introducing party who brought the parties together. The client's active circumvention during the 12-month candidate ownership window constitutes a direct breach of contract triggering full placement fee entitlement plus contractual circumvention damages.",
    actionProtocol: [
      {
        phase: "Step 1: Timestamp & Telemetry Lock",
        description:
          "Export complete ATS submission logs, original resume dispatch email headers (MIME .eml files), and interview coordination threads. Download timestamped LinkedIn profiles and Wayback Machine snapshots.",
      },
      {
        phase: "Step 2: Formal Placement Invoice Issuance",
        description:
          "Immediately issue a formal GST Tax Invoice referencing the candidate name, designation, joined date, standard placement fee percentage (e.g., 8.33%–15% of CTC), and 18% GST with a 7-day payment window.",
      },
      {
        phase: "Step 3: Fact-Verified Legal Notice Dispatch",
        description:
          "Upon non-payment or denial, serve a formal Legal Demand Notice, prepared and sent by our team after verifying your facts, under Section 73 & Section 74 of the Contract Act and Section 63 BSA 2023, backed by your electronic evidence proofs.",
      },
    ],
    statutoryHook: "Contract Act s.73, s.74 (Liquidated Circumvention Surcharge) & BSA 2023 s.63",
    recommendedRemedy: "Full 100% Placement Fee + Contractual Backdoor Penalty Surcharge + 18% p.a. Commercial Interest",
  },
  {
    id: "subsidiary-group-evasion",
    tabLabel: "Sister Entity Evasion",
    title: "Client Hired Introduced Candidate into Subsidiary, Joint Venture, or Sister Group Entity",
    modusOperandi:
      "The agency shares a candidate for a role at 'Tech Corp India Pvt Ltd'. The hiring manager conducts the technical screening, rejects the candidate for that specific entity, and secretly forwards the resume to a related sister company, group captive center, or holding entity ('Tech Corp Global Services LLP' or a third-party payroll contractor) to claim no contract exists with the subsidiary.",
    legalDoctrine:
      "The Corporate Veil Doctrine and Contract Act Section 70 (Quantum Meruit). Standard Terms of Business (TOB) expressly extend candidate ownership to all 'Affiliates, Parents, Subsidiaries, and Associated Entities'. Even if the subsidiary claims lack of contractual privity, Section 70 mandates that where a corporate entity receives the commercial benefit of an introduction non-gratuitously, it is legally bound to pay fair market remuneration.",
    actionProtocol: [
      {
        phase: "Step 1: Corporate Group Mapping via MCA Data",
        description:
          "Extract Ministry of Corporate Affairs (MCA) DIN/CIN records proving common directorship, ultimate parent shareholding, or identical registered office addresses between the contracting entity and the hiring entity.",
      },
      {
        phase: "Step 2: Dual-Entity Demand Notice",
        description:
          "Address the statutory notice jointly to both the contracting parent entity (for breach of candidate ownership non-circumvention terms under Section 73) and the subsidiary employer (under Section 70 Quantum Meruit).",
      },
      {
        phase: "Step 3: Joint Liability Recovery Proceeding",
        description:
          "Institute a Commercial Summary Suit under Order XXXVII CPC or MSME Samadhaan claim holding both entities jointly and severally liable for procurement circumvention and unjust enrichment.",
      },
    ],
    statutoryHook: "Indian Contract Act Section 70 (Quantum Meruit) & Section 73 (Affiliate Breach)",
    recommendedRemedy: "Joint and Several Recovery against Parent & Subsidiary via Commercial Court Summary Decree",
  },
  {
    id: "duplicate-database-defense",
    tabLabel: "Duplicate Database Defense",
    title: "Client Falsely Claims 'Candidate Was Already in Our Internal Talent Database'",
    modusOperandi:
      "Following candidate placement confirmation or post-hire discovery, the client's Talent Acquisition head retroactively rejects the agency invoice claiming: 'We cannot pay this bill because the candidate applied through our careers portal 8 months ago / was already in our Workday database.' The client provides zero timestamp logs proving active sourcing.",
    legalDoctrine:
      "The '48-Hour Active Database Rule' and Burden of Proof under Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 104). In recruitment law, passive presence in an uncontacted corporate database does not constitute an introduction. If the client did not issue a written duplicate rejection within 48 hours of agency CV submission and proceeded to interview or hire the profile, the agency's introduction is the proximate effective cause.",
    actionProtocol: [
      {
        phase: "Step 1: Enforce the 48-Hour Disclosure Window",
        description:
          "Audit the initial email dispatch. If HR did not reply with a verifiable duplicate timestamp within 24–48 hours of submission, their retroactive claim is legally invalid and contractually waived.",
      },
      {
        phase: "Step 2: Candidate Evidentiary Affidavit",
        description:
          "Obtain an email statement or affidavit from the candidate confirming: (a) who first informed them of the opening, (b) who prepared them for the interview, and (c) that client HR had never contacted them prior to agency submission.",
      },
      {
        phase: "Step 3: Evidentiary Rebuttal Demand",
        description:
          "Dispatch a fact-verified notice challenging the client to produce their certified server audit logs under BSA 2023 Section 63 demonstrating active outbound outreach prior to agency transmission.",
      },
    ],
    statutoryHook: "Bharatiya Sakshya Adhiniyam, 2023 Section 104 (Burden of Proof) & Section 63",
    recommendedRemedy: "Dismissal of Passive Database Defense; Recovery of Full Retainer & Success Surcharge",
  },
  {
    id: "unsigned-tob-defense",
    tabLabel: "Unsigned TOB / Click-Wrap",
    title: "Client Refuses Payment Arguing 'Terms of Business (TOB) Was Never Formally Wet-Signed'",
    modusOperandi:
      "The agency shared its standard Terms of Business (TOB) via email stating: 'Submission of candidate profiles or scheduling of interviews constitutes acceptance of our recruitment terms.' The client interviewed candidates, hired one, and subsequently claims no valid contract exists because procurement never signed a Master Services Agreement (MSA).",
    legalDoctrine:
      "Section 8 of the Indian Contract Act, 1872 (Acceptance by performing conditions or receiving consideration) and the 7-judge Constitution Bench in B.K. Mondal & Sons (AIR 1962 SC 779) establishing Section 70 Quantum Meruit. When a client requests CVs, conducts interviews, and hires the introduced profile after receiving notice of terms, acceptance is established by conduct. The lack of a wet signature does not immunize the debtor from paying commercial consideration.",
    actionProtocol: [
      {
        phase: "Step 1: Document Unbroken Chain of Conduct",
        description:
          "Collate emails showing: (a) Delivery of TOB attachment in opening email, (b) Client's subsequent request for interview slots, (c) Coordination of technical assessments, and (d) Final offer generation.",
      },
      {
        phase: "Step 2: Quantum Meruit Notice Drafting",
        description:
          "Serve a specialized Legal Notice invoking Section 8 (Conduct Acceptance) and Section 70 (Non-Gratuitous Commercial Act), demanding standard market rate compensation (8.33%–12.5% of annual CTC) plus GST.",
      },
      {
        phase: "Step 3: Commercial Court / MSME Filing",
        description:
          "File under MSME Samadhaan (for registered staffing agencies) or Commercial Court pre-institution mediation under Section 12A. Indian courts routinely reject the 'unsigned agreement' defense where commercial benefit is enjoyed.",
      },
    ],
    statutoryHook: "Indian Contract Act Sections 8 & 70 (Quantum Meruit) & Section 10A IT Act 2000",
    recommendedRemedy: "Statutory Quantum Meruit Award with Compounded 3x RBI Bank Rate Interest under MSMED Act",
  },
];

export default function BackdoorHiringScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(CIRCUMVENTION_SCENARIOS[0].id);
  const currentScenario =
    CIRCUMVENTION_SCENARIOS.find((s) => s.id === activeTab) || CIRCUMVENTION_SCENARIOS[0];

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-7 text-white shadow-xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-6 border-b border-slate-800 gap-2">
        <div>
          <span className="text-[11px] font-bold text-red-400 uppercase tracking-widest block mb-1">
            Interactive Operational Playbook
          </span>
          <p className="text-base sm:text-lg font-extrabold text-white">
            4 Common Backdoor Hiring Circumvention Schemes &amp; Legal Remedies
          </p>
        </div>
        <span className="text-xs text-slate-400 bg-slate-800/80 px-3 py-1 rounded-full border border-slate-700 w-fit">
          Click tabs below to inspect legal action rails
        </span>
      </div>

      {/* Tabs Bar */}
      <div className="flex overflow-x-auto gap-2 pb-2 mb-6 scrollbar-thin scrollbar-thumb-slate-700">
        {CIRCUMVENTION_SCENARIOS.map((scenario) => (
          <button
            key={scenario.id}
            type="button"
            onClick={() => setActiveTab(scenario.id)}
            className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-150 cursor-pointer ${
              activeTab === scenario.id
                ? "bg-[#DC2626] text-white shadow-md shadow-red-900/40"
                : "bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white"
            }`}
          >
            {scenario.tabLabel}
          </button>
        ))}
      </div>

      {/* Tab Content Panel */}
      <div className="space-y-6">
        <div>
          <span className="inline-block px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider bg-red-950 text-red-400 border border-red-800/60 mb-2">
            Circumvention Modus Operandi
          </span>
          <p className="text-lg sm:text-xl font-bold text-white mb-2 leading-snug">
            {currentScenario.title}
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {currentScenario.modusOperandi}
          </p>
        </div>

        <div className="bg-slate-800/70 border-l-4 border-[#DC2626] p-4 rounded-r-xl">
          <span className="block text-[11px] uppercase tracking-wider text-red-400 font-bold mb-1">
            Governing Legal Doctrine &amp; Statutory Authority
          </span>
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
            {currentScenario.legalDoctrine}
          </p>
        </div>

        {/* Step-by-Step Action Protocol */}
        <div>
          <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
            Agency Enforcement SOP (Phase-by-Phase)
          </span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {currentScenario.actionProtocol.map((phaseItem, index) => (
              <div
                key={index}
                className="bg-slate-800/50 border border-slate-700/80 rounded-xl p-3.5 flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block px-2 py-0.5 rounded text-[10px] font-extrabold uppercase bg-red-950/80 text-red-400 mb-2">
                    {phaseItem.phase}
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {phaseItem.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Remedy & Hook Footer */}
        <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-400 uppercase text-[11px]">Statutory Hook:</span>
            <span className="text-emerald-400 font-semibold">{currentScenario.statutoryHook}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-400 uppercase text-[11px]">Admissible Claim:</span>
            <span className="text-amber-300 font-semibold">{currentScenario.recommendedRemedy}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
