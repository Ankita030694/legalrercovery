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

const OOH_SCENARIOS: ScenarioTab[] = [
  {
    id: "agency-back-to-back-stall",
    tabLabel: "Agency 'Back-to-Back' Defense",
    title: "Media Buying Agency Withholds Billboard Rentals Alleging: 'End-Client Has Not Released Funds Yet'",
    modusOperandi:
      "A media buying or advertising agency books premium highway gantries, DOOH LED clusters, or bus-queue shelters (BQS) under their own Release Order (RO) or Purchase Order. When invoices mature at 30 or 45 days, the agency claims a 'back-to-back' conditional payment clause, stating they cannot pay the media concessionaire until the brand (e.g., FMCG, fintech, smartphone OEM) pays them.",
    legalDoctrine:
      "Doctrine of Independent Contractor vs. Undisclosed Principal (Indian Contract Act, 1872 s.230 & s.73). Unless the media concessionaire explicitly executed a tripartite agreement binding their compensation directly to the brand's settlement, an agency issuing an RO acts as an independent principal. A 'pay-when-paid' or 'pay-if-paid' clause cannot be unilaterally implied.",
    actionProtocol: [
      {
        phase: "Step 1: Release Order & Privity Audit",
        description:
          "Examine the signed Media Display Order / Release Order (RO). Confirm whether the billing entity is the agency itself with its own GSTIN, establishing direct contractual privity.",
      },
      {
        phase: "Step 2: Dual Formal Demand Notice",
        description:
          "Issue a formal advocate demand notice simultaneously to both the Media Buying Agency (as contracting debtor under Order 37 CPC) and copy the Brand Chairman/CMO (putting them on notice regarding non-remittance and potential joint liability for conversion/unjust enrichment under ICA s.70).",
      },
      {
        phase: "Step 3: Summary Suit Filing",
        description:
          "Institute an Order XXXVII CPC Summary Suit in the Commercial Court, or lodge an MSME Samadhaan petition (if registered as Micro/Small enterprise) claiming compounding monthly interest at 3x RBI Bank Rate under Section 16 of the MSMED Act.",
      },
    ],
    statutoryHook: "Indian Contract Act s.70 & s.230 + Commercial Courts Act s.2(1)(c)(xviii)",
    recommendedRemedy: "Order XXXVII CPC Summary Suit against Agency + MSME Samadhaan Reference",
  },
  {
    id: "real-estate-jeweller-90d-burst",
    tabLabel: "Builder / Jeweller 90-Day Burst",
    title: "Real Estate Builder or Jeweller Demands Prime Festive Burst, Then Ignores Invoices Post-Campaign",
    modusOperandi:
      "Promoters book high-impact arterial hoardings, airport departures, or metro pillar media for a high-intensity 60-to-90-day launch (festive Diwali/Akshaya Tritiya or township pre-launch). Once the campaign ends and the physical flex is dismounted, the client cuts off telephone lines, replaces marketing personnel, and refuses to sign post-campaign completion certificates.",
    legalDoctrine:
      "Constructive Acceptance & Electronic Proof Admissibility (Bharatiya Sakshya Adhiniyam, 2023 s.63, replacing Indian Evidence Act s.65B). The lack of a formal manual handover sign-off does not negate proof of display when supported by daily or weekly geo-tagged, time-stamped inspection photographs and illumination logs served without objection during the campaign tenure.",
    actionProtocol: [
      {
        phase: "Step 1: Compile Electronic Monitoring Dossier",
        description:
          "Export the complete campaign monitoring dataset: geo-coordinates (latitude/longitude), camera timestamp metadata, server upload logs, and WhatsApp/Email dispatch proofs sent to the client's marketing manager during the live display period.",
      },
      {
        phase: "Step 2: Section 63 BSA Affidavit Execution",
        description:
          "Have the OOH operations manager sign a statutory certificate under Section 63 of BSA 2023 authenticating the device, digital hash, and un-tampered continuity of the monitoring photographs.",
      },
      {
        phase: "Step 3: Commercial Court Section 12A Mediation / Summary Suit",
        description:
          "File for mandatory Pre-Institution Mediation under Section 12A of the Commercial Courts Act, 2015. If the builder fails to participate or settle, institute an Order 37 summary recovery suit along with an application under Order 38 Rule 5 CPC for attachment before judgment against the builder's unsold inventory or bank accounts.",
      },
    ],
    statutoryHook: "Bharatiya Sakshya Adhiniyam, 2023 s.63 + Order XXXVIII Rule 5 CPC (Attachment Before Judgment)",
    recommendedRemedy: "Order 37 Summary Suit with Order 38 Rule 5 Asset Attachment",
  },
  {
    id: "political-election-burst",
    tabLabel: "Election / Political Campaign Default",
    title: "Political Party or Campaign Committee Books Entire City Hoardings Ahead of Elections, Then Vanishes",
    modusOperandi:
      "Ahead of assembly or municipal elections, campaign committees, local leaders, or authorized political PR agencies occupy hundreds of premium hoardings on an emergency 30-day blitz. Advance cheques bounce or verbal promises of cash clearing post-results evaporate when the candidate or faction loses, or claims the campaign was unauthorized.",
    legalDoctrine:
      "Cheque Dishonour Criminality (Negotiable Instruments Act, 1881 s.138/s.141) & Agency Ratification (Indian Contract Act s.196-199). If a candidate or party office displayed authorized symbols and benefited from the public hoarding publicity without repudiating it publicly, they ratified the contract by conduct.",
    actionProtocol: [
      {
        phase: "Step 1: 30-Day NI Act Section 138 Notice",
        description:
          "If advance or post-dated cheques were issued and bounced for 'Insufficient Funds' or 'Stop Payment', issue a mandatory statutory demand notice within 30 days of the bank memo under Section 138 of the NI Act.",
      },
      {
        phase: "Step 2: Election Commission Expenditure Reconciliation",
        description:
          "Procure the candidate's mandatory election expenditure disclosure filed with the Election Commission of India (ECI). If the candidate declared your hoarding expenses to the District Election Officer (DEO), that disclosure constitutes an incontrovertible admission of liability under BSA 2023.",
      },
      {
        phase: "Step 3: Criminal Complaint under NI Act s.138 & BNS s.318",
        description:
          "File a Section 138 complaint before the Judicial Magistrate within 15 days of notice cure expiry, accompanied by a complaint for cheating under Bharatiya Nyaya Sanhita, 2023 Section 318(4) against the signatory and authorizing committee members.",
      },
    ],
    statutoryHook: "Negotiable Instruments Act s.138 & s.141 + Bharatiya Nyaya Sanhita, 2023 s.318(4) (Cheating)",
    recommendedRemedy: "Section 138 NI Act Prosecution + ECI Expenditure Declaration Subpoena",
  },
  {
    id: "mid-tenure-flex-dismantling",
    tabLabel: "Mid-Tenure Flex Pull-Down Dispute",
    title: "Client Stops Paying Installments Mid-Tenure, Then Sues for 'Breach' When You Dismantle Flex",
    modusOperandi:
      "A client contracts a 12-month highway unipolar billboard payable in quarterly installments. After Quarter 1, the client defaults. After sending 3 reminders, the media owner pulls down the vinyl flex and re-leases the site. The client then refuses to pay arrears and threatens damages, claiming the media owner committed anticipatory breach.",
    legalDoctrine:
      "Anticipatory Repudiation & Right of Rescission (Indian Contract Act, 1872 s.39 & s.73). A party cannot refuse to perform its reciprocal payment obligations while insisting that the other party continue committing high-value municipal concession assets. Concessionaires have a legal duty to mitigate damages (s.73 Explanation) by re-leasing the site while claiming the unpaid balance and idle vacancy period from the defaulter.",
    actionProtocol: [
      {
        phase: "Step 1: Cure Period Default Notice with Dismantling Warning",
        description:
          "Serve a 7-day cure notice explicitly notifying that continued non-payment constitutes commercial repudiation under Section 39 ICA, and that flex removal will take place on Day 8 to mitigate ongoing municipal holding charges.",
      },
      {
        phase: "Step 2: Date-Stamped Dismantling Video & Inventory Receipt",
        description:
          "Capture geo-tagged video evidence of the flex dismantling. Store the printed vinyl material securely and notify the advertiser in writing to collect their property within 14 days, subject to storage liens.",
      },
      {
        phase: "Step 3: Action for Accrued Rentals + Vacancy Holding Period",
        description:
          "Sue for the full accrued rentals for the active display period PLUS damages for the gap period during which the billboard remained vacant before a replacement advertiser was onboarded.",
      },
    ],
    statutoryHook: "Indian Contract Act, 1872 Section 39 (Repudiation) & Section 73 (Duty to Mitigate Loss)",
    recommendedRemedy: "Statutory Rescission Notice + Civil Suit for Net Differential Loss",
  },
];

export default function OOHHoardingScenarioTabs() {
  const [activeTabId, setActiveTabId] = useState<string>(OOH_SCENARIOS[0].id);

  const activeScenario =
    OOH_SCENARIOS.find((s) => s.id === activeTabId) || OOH_SCENARIOS[0];

  return (
    <div className="w-full bg-slate-900 rounded-2xl border border-slate-800 p-5 sm:p-6 md:p-8 text-white shadow-lg">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-800">
        <div>
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/70 border border-red-800/60 px-2.5 py-1 rounded-full">
            Commercial Default Playbook
          </span>
          <h3 className="text-lg sm:text-xl font-black text-white mt-2">
            Interactive OOH Default Scenarios &amp; Action SOPs
          </h3>
        </div>
        <span className="text-xs text-slate-400">
          Select client category below:
        </span>
      </div>

      {/* Tabs list */}
      <div className="flex gap-2 overflow-x-auto pb-2 mb-6 no-scrollbar">
        {OOH_SCENARIOS.map((scenario) => {
          const isActive = scenario.id === activeTabId;
          return (
            <button
              key={scenario.id}
              onClick={() => setActiveTabId(scenario.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                isActive
                  ? "bg-[#DC2626] text-white shadow-md shadow-red-950"
                  : "bg-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-700/60"
              }`}
            >
              {scenario.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Tab Panel */}
      <div className="bg-slate-950/70 rounded-xl p-5 sm:p-6 border border-slate-800/80 space-y-5">
        <div>
          <h4 className="text-base sm:text-lg font-bold text-white mb-2 leading-snug">
            {activeScenario.title}
          </h4>
          <div className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-900/60 p-3.5 rounded-lg border border-slate-800">
            <span className="text-red-400 font-bold block mb-1">Modus Operandi:</span>
            {activeScenario.modusOperandi}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-slate-900/40 p-3.5 rounded-lg border border-slate-800/70">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
              Governing Statutory Doctrine
            </span>
            <p className="text-xs sm:text-sm text-slate-200 font-medium">
              {activeScenario.legalDoctrine}
            </p>
          </div>
          <div className="bg-slate-900/40 p-3.5 rounded-lg border border-slate-800/70">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
              Statutory Basis &amp; Remedy
            </span>
            <p className="text-xs sm:text-sm text-red-300 font-semibold mb-1">
              {activeScenario.statutoryHook}
            </p>
            <span className="inline-block text-[11px] bg-red-950 text-red-300 px-2 py-0.5 rounded border border-red-800/50">
              {activeScenario.recommendedRemedy}
            </span>
          </div>
        </div>

        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3">
            Enforcement Protocol (Step-by-Step):
          </span>
          <div className="space-y-2.5">
            {activeScenario.actionProtocol.map((step, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 bg-slate-900/80 p-3 rounded-lg border border-slate-800"
              >
                <span className="w-5 h-5 rounded-full bg-[#DC2626] text-white text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <div>
                  <span className="text-xs font-bold text-white block mb-0.5">
                    {step.phase}
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
