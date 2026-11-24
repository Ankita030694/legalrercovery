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
    id: "trade-show-ghosting",
    tabLabel: "Post-Expo Ghosting",
    badge: "Pragati Maidan / Yashobhoomi / NESCO",
    title: "Client Ghosted After 3-Day Trade Show, Leaving ₹18 Lakhs in Fabrication Balances Unpaid",
    problem:
      "A fast-growing D2C brand or industrial manufacturer contracts an exhibition stall fabricator to build a bespoke ₹30 Lakh multi-tier booth at Pragati Maidan (IECC) or Yashobhoomi (IICC). The client pays 50% advance, demands delivery in a 48-hour build window, and hosts prospective overseas buyers for three days. Once the show concludes and the booth is dismantled into scrap, the client vacates their rented stall, stops answering phone calls, and ignores emails for the remaining ₹15 Lakhs balance.",
    statutoryTrap:
      "Exhibition booths are temporary structures dismantled within 24 hours of expo closure. Because the fabricator loses physical custody of the materials once the venue clears the hall, possessory lien under Section 170 Contract Act is impossible. Relying purely on verbal promises or informal venue passes leaves the fabricator without proof of delivery.",
    lawfulPlaybook:
      "1. Compile the organizer-issued Stall Possession & Handover Clearance Certificate signed by the exhibitor's stall manager.\n2. Collate high-resolution, geolocated, and timestamped photographs/videos of the completed booth with client brand logos and executive personnel active inside.\n3. Draft a cryptographic BSA 2023 Section 63 Electronic Evidence Certificate certifying export of the WhatsApp coordination group logs.\n4. Issue an immediate 15-day statutory demand notice invoking Section 70 Indian Contract Act (obligation to pay for non-gratuitous benefits enjoyed) and MSMED Act Section 16 penal interest.\n5. File a summary suit under Order XXXVII CPC or MSME Samadhaan petition attaching the organizer's exhibitor directory and GST returns.",
    remedyCode: "BSA 2023 s.63 + Contract Act s.70 + MSMED Act s.16 + Order XXXVII CPC",
    financialRecovery: "100% Outstanding ₹15 Lakhs Balance + 3x RBI Monthly Compound Interest",
  },
  {
    id: "midnight-whatsapp-additions",
    tabLabel: "Midnight Scope-Creep",
    badge: "Live-Event WhatsApp Additions",
    title: "Client Approved Midnight Audio, LED & Structural Additions on WhatsApp, Then Refuses Final Bill",
    problem:
      "At 1:30 AM before an annual corporate summit or global investor conclave, the client's marketing head frantically texts the event agency WhatsApp group requesting an additional 60-foot curved P2 LED wall, 4 extra wireless lapel mics, translation booths, and custom stage risers. The agency mobilizes overnight logistics incurring ₹8.5 Lakhs in hard vendor rentals. After the event, the client's procurement department rejects the scope-creep invoice stating: 'These items were not approved via an official signed Purchase Order (PO) amendment.'",
    statutoryTrap:
      "Under traditional contract paradigms, procurement contracts require bilateral written addenda. If the agency waits for a post-facto PO or engages in informal WhatsApp pleading, the client exploits the lack of formal paperwork to disallow the entire overtime expenditure.",
    lawfulPlaybook:
      "1. Preserve the full chat export (.txt) alongside raw database media files, ensuring phone numbers match the client's authorized representatives listed in the Master Service Agreement (MSA).\n2. Apply Section 10A of the Information Technology Act, 2000 (validity of contracts formed through electronic means) and Section 63 of the Bharatiya Sakshya Adhiniyam, 2023.\n3. Establish that the client accepted performance without protest under Section 70 Indian Contract Act, thereby ratifying the verbal/electronic variation.\n4. Serve a fact-verified legal notice highlighting personal liability of the approving managers and corporate liability for commercial bad faith.\n5. Lodge a claim before the Micro and Small Enterprise Facilitation Council (MSEFC) where statutory 45-day limits override restrictive PO clauses.",
    remedyCode: "IT Act 2000 s.10A + BSA 2023 s.63 + Indian Contract Act s.70 & s.73",
    financialRecovery: "Full Recovery of Overtime Rentals + 18% Vendor Mobilization Overheads",
  },
  {
    id: "pretextual-minor-glitch",
    tabLabel: "Pretextual AV Glitch",
    badge: "Manufactured SLA Penalties",
    title: "Client Nitpicks 3-Minute Mic Squeal or Single LED Tile Flicker to Withhold 40% Final Milestone",
    problem:
      "A corporate client hosts a 2-day national sales convention with a total production budget of ₹45 Lakhs. 60% was paid prior to event setup. During day 2, a wireless microphone experienced 90 seconds of RF frequency interference before the backup audio engineer switched channels seamlessly. The event concluded with standing ovations and executive keynotes. Post-event, the client issues a punitive debit note deducting the entire remaining 40% (₹18 Lakhs) claiming 'catastrophic brand reputation loss' and 'total event failure.'",
    statutoryTrap:
      "Event agencies often apologize profusely over WhatsApp to maintain client relations. In litigation, defaulting corporate legal teams distort these courtesy apologies as admissions of breach under Section 73 of the Indian Contract Act to substantiate unilateral liquidated damages.",
    lawfulPlaybook:
      "1. Issue an immediate rebuttal letter clarifying that the technical contingency was mitigated within 90 seconds per international production standards and contract SLA limits.\n2. Secure unedited full-event video and audio recordings showing 99.8% flawless transmission across all 16 conference hours.\n3. Leverage Section 74 of the Indian Contract Act (*Kailash Nath Associates v. DDA*): liquidated damages cannot be deducted arbitrarily without proving actual, measurable pecuniary loss.\n4. Issue a formal statutory demand notice demonstrating that withholding ₹18 Lakhs for a minor transient glitch constitutes an unconscionable penalty in law.\n5. Pre-empt any defensive arbitration maneuvers by filing under Section 18 of the MSMED Act.",
    remedyCode: "Contract Act s.73/74 (Kailash Nath Precedent) + BSA 2023 s.63 Audio-Video Logs",
    financialRecovery: "100% Milestone Recovery + Invalidation of Unilateral Penalty Debit Notes",
  },
  {
    id: "agency-vendor-pass-through",
    tabLabel: "Subcontractor Default",
    badge: "AV, Stage & Truss Vendors",
    title: "Lead Event Agency Withholds AV & Truss Subcontractor Payouts Blaming End-Client Delay",
    problem:
      "A specialized sound, light, truss, and LED display vendor is engaged by a lead event management agency for an international music festival or auto expo stall for ₹22 Lakhs. The subcontractor delivers flawless physical production. When the vendor submits final invoices, the lead agency replies: 'We haven't received payment from the main brand yet. Our contract is Pay-When-Paid; we will release your funds once the client clears our master bill.'",
    statutoryTrap:
      "Subcontractors often wait 6–12 months under the illusion that the lead agency is fighting on their behalf, allowing limitation periods under the Limitation Act, 1963 to slip away while the lead agency quietly collects settlements and diverts cash flows to other projects.",
    lawfulPlaybook:
      "1. Scrutinize the vendor work order: Indian courts (*Intertoll ICS Cecons O&M v. NHAI*) have ruled that 'Pay-When-Paid' clauses do not grant indefinite payment postponement, but only provide a reasonable mechanism for timing.\n2. If the subcontractor is Udyam-registered, Section 15 of the MSMED Act establishes an absolute statutory deadline of 45 days, which overrides any contrary contractual 'Pay-When-Paid' terms.\n3. Dispatch a formal 15-day statutory notice to the lead agency with a copy marked to the end corporate client under Section 70 of the Indian Contract Act.\n4. Institute simultaneous proceedings before the MSEFC against the lead agency and explore third-party garnishment under Order XXI Rule 46 CPC to freeze payments flowing from the end client.",
    remedyCode: "MSMED Act s.15/18 (Statutory Override) + Order XXI Rule 46 CPC Garnishee Order",
    financialRecovery: "Direct Recovery of Unpaid Vendor Invoices with Mandatory 3x RBI Interest",
  },
];

export default function EventRecoveryScenarioTabs() {
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
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                isActive
                  ? "bg-[#DC2626] text-white shadow-sm"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              {item.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Tab Card */}
      <div className="mt-5 p-5 sm:p-6 bg-slate-50 border border-slate-200 rounded-2xl">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <span className="text-[11px] font-bold uppercase tracking-wider text-red-600 bg-red-100/70 border border-red-200 px-2.5 py-0.5 rounded-full">
            {scenario.badge}
          </span>
          <span className="text-xs font-mono font-bold text-slate-500">
            {scenario.remedyCode}
          </span>
        </div>

        <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-3">
          {scenario.title}
        </h3>

        <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
          <div>
            <span className="block text-[11px] font-extrabold uppercase tracking-wider text-slate-500 mb-1">
              The Operational Problem:
            </span>
            <p className="bg-white p-3.5 rounded-xl border border-slate-200/80">
              {scenario.problem}
            </p>
          </div>

          <div>
            <span className="block text-[11px] font-extrabold uppercase tracking-wider text-red-600 mb-1">
              The Legal Trap to Avoid:
            </span>
            <p className="bg-red-50/60 p-3.5 rounded-xl border border-red-200 text-red-900">
              {scenario.statutoryTrap}
            </p>
          </div>

          <div>
            <span className="block text-[11px] font-extrabold uppercase tracking-wider text-emerald-700 mb-1">
              The Lawful Recovery Playbook:
            </span>
            <div className="bg-emerald-50/60 p-3.5 rounded-xl border border-emerald-200 text-emerald-950 whitespace-pre-line font-medium">
              {scenario.lawfulPlaybook}
            </div>
          </div>

          <div className="pt-2 border-t border-slate-200 flex flex-wrap items-center justify-between gap-2">
            <span className="text-xs font-bold text-slate-600">Expected Outcome:</span>
            <span className="text-xs font-extrabold text-[#DC2626]">
              {scenario.financialRecovery}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
