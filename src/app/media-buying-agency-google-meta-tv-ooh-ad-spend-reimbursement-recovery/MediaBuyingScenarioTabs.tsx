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

const MEDIA_BUYING_SCENARIOS: ScenarioTab[] = [
  {
    id: "meta-google-line",
    tabLabel: "Meta & Google Monthly Invoicing Burst",
    title: "Startup Scaled Festive Ad Spend on Agency Amex/Meta Line—Then Froze Operations",
    modusOperandi:
      "A D2C brand or venture-funded startup instructed your performance marketing agency to aggressively ramp up Meta Ads Manager and Google Ads spend during Diwali, Big Billion Days, or IPL. The agency ran ₹45 Lakhs on its own corporate credit card or Meta Monthly Invoicing line against 5% management fee. Post-festive season, the brand suffered inventory write-downs or missed funding rounds, and refuses to reimburse the pass-through ad spend while retaining campaign customer acquisition data.",
    legalDoctrine:
      "Section 222 & 223 Indian Contract Act (Statutory Agent Indemnity for Lawful Expenditures) read with Order XXXVII CPC. An agent executing media placement under approved media schedules acts purely as an agent incurring liabilities on behalf of the principal. The principal possesses zero legal right to link platform performance or CAC metrics to pass-through ad spend reimbursement.",
    actionProtocol: [
      {
        phase: "Immediate Revocation",
        description:
          "Immediately revoke the brand's Meta Business Manager and Google Ads MCC client access, download timestamped billing invoices with transaction IDs, and archive all WhatsApp/Slack campaign budget approval threads.",
      },
      {
        phase: "Section 222 Demand Notice",
        description:
          "Issue a 7-day fact-verified demand notice invoking Contract Act Section 222, holding directors personally liable for misrepresentation under Section 17, and warning of corporate Section 43B(h) tax disallowance.",
      },
      {
        phase: "Commercial Summary Suit",
        description:
          "Institute an Order XXXVII CPC Summary Suit in Commercial Court supported by platform invoices and approved media plans, moving for pre-judgment attachment of brand payment gateway receivables under Order XXXVIII Rule 5.",
      },
    ],
    statutoryHook:
      "Contract Act Section 222 (Agent Indemnity) + Order XXXVII CPC (Summary Money Decree) + Order XXXVIII Rule 5 CPC (Bank & Gateway Attachment)",
    recommendedRemedy:
      "Order XXXVII Summary Suit with urgent Order 38 Rule 5 ex-parte attachment against Razorpay/Cashfree gateway merchant payouts.",
  },
  {
    id: "tv-broadcast-network",
    tabLabel: "TV Broadcast Prime-Time Airtime",
    title: "National TV Ad Spots Telecast on Star/Zee/Sony—Brand Alleges Poor TRP & Withholds Crores",
    modusOperandi:
      "A consumer electronics or FMCG advertiser executed signed Release Orders (ROs) for 30-second prime-time commercial spots during cricket tournaments or reality shows on national broadcast networks. The media buying agency committed its accredited broadcast credit line. After 100% of the airtime was broadcast and BARC watermarked logs were certified, the brand claimed 'insufficient sales uplift' or alleged broadcast during low-rating program intervals, refusing to settle the ₹80 Lakh media bill.",
    legalDoctrine:
      "Contract Act Section 70 (Quantum Meruit for Non-Gratuitous Work) and IBDF (Indian Broadcasting and Digital Foundation) Accreditation Regulations. Once a commercial spot is transmitted as per signed Release Order time-bands, the service is fully discharged. Media buying agencies do not warrant television viewership ratings or commercial conversion.",
    actionProtocol: [
      {
        phase: "Telecast Log Certification",
        description:
          "Procure official BARC/broadcaster electronic telecast certificates with minute-by-minute commercial logs establishing 100% schedule fulfillment as per the signed Release Order.",
      },
      {
        phase: "IBDF Industry Credit Escalation",
        description:
          "Notify the advertiser that non-payment within 48 hours will trigger a formal complaint to the IBDF and AAA-I Credit Default Committee, preventing the advertiser from releasing ads through any accredited agency in India.",
      },
      {
        phase: "Commercial Court Insolvency Action",
        description:
          "Serve a formal statutory Section 8 Demand Notice under IBC (for undisputed corporate debt >= ₹1 Crore) or institute a Commercial Court recovery suit with interest claim under MSMED Act Section 16.",
      },
    ],
    statutoryHook:
      "IBDF Credit Default Regulations + MSMED Act Section 15-16 (3x RBI Compound Interest) + Commercial Courts Act 2015",
    recommendedRemedy:
      "IBDF Accreditation Default Notice followed by MSME Samadhaan petition claiming 3x RBI compound interest from the broadcast date.",
  },
  {
    id: "print-ins-newspaper",
    tabLabel: "INS Print & Newspaper Release Orders",
    title: "Full-Page Newspaper Campaign Executed—Brand Fabricates Post-Release Cancellation Excuse",
    modusOperandi:
      "An educational institution or real estate developer authorized front-page and jacket ads across leading English and vernacular dailies via a signed physical/digital Release Order (RO). The agency fronted the credit under its INS (Indian Newspaper Society) accreditation. Following newspaper distribution across 15 editions, the advertiser claimed an email was sent to 'cancel the Sunday jacket' late Friday night, falsely disputing liability for a ₹35 Lakh print bill.",
    legalDoctrine:
      "INS Accreditation Rule 12 & Indian Contract Act Section 222. An RO constitutes a solemn, irrevocable commercial commitment once past the publisher's print deadline. An advertiser cannot unilaterally retract a print order after the publisher initiates printing plates and distribution logistics.",
    actionProtocol: [
      {
        phase: "Tear Sheet & Deadline Evidence",
        description:
          "Compile physical newspaper tear sheets, digital e-paper archived links, and publisher printing plate cutoff receipts proving the cancellation attempt occurred post-deadline.",
      },
      {
        phase: "INS Circular Warning Notice",
        description:
          "Issue a formal legal notice stating that upon expiry of 10 days, the agency will submit the default to the INS Credit Committee for issuance of an all-India Member Society Circular embargoing the brand.",
      },
      {
        phase: "Summary Recovery under Order 37",
        description:
          "File an Order XXXVII CPC Summary Suit. Because the signed RO explicitly states print deadlines and payment terms, the court treats the RO as a liquidated written contract.",
      },
    ],
    statutoryHook:
      "INS Society By-laws (National Publication Embargo) + Order XXXVII CPC (Liquidated Debt on Written Release Order)",
    recommendedRemedy:
      "INS All-India Embargo Notice backed by Order XXXVII Summary Suit in the territorial Commercial Court.",
  },
  {
    id: "ooh-outdoor-billboards",
    tabLabel: "OOH Billboard & Transit Media",
    title: "Prime Airport & Arterial Hoardings Displayed—Brand Claims 'Delayed Proof of Performance'",
    modusOperandi:
      "An automobile or real estate brand booked 20 prime airport flyover hoardings and bus shelters for 60 days. The media agency entered into vendor concession agreements, fabricated flex prints, and paid local municipal billboard taxes. Upon campaign completion, the brand refused to pay the ₹28 Lakh invoice, alleging the agency did not provide geo-tagged, timestamped Proof of Performance (POP) photos on every single consecutive morning.",
    legalDoctrine:
      "Indian Contract Act Section 73 (Substantial Performance) & Section 222 (Reimbursement of Site Leases & Municipal Display Taxes). When physical hoardings are mounted, municipal display fees remitted, and periodic photographic proof provided, minor administrative POP intervals do not constitute fundamental breach justifying total non-payment of lease rentals.",
    actionProtocol: [
      {
        phase: "Audit Municipal & Vendor Leases",
        description:
          "Consolidate municipal advertising tax challans, concessionaire site agreements, and third-party monitoring logs corroborating continuous site illumination and flex display.",
      },
      {
        phase: "Creative Copyright Revocation",
        description:
          "Serve a dual-action notice invoking Section 19(4) & 51 of the Copyright Act, revoking all licensing rights to campaign creatives, photography, and brand copy utilized across the displays.",
      },
      {
        phase: "Civil & Commercial Recovery",
        description:
          "File for interim injunction and recovery in Commercial Court, seeking attachment of debtor bank accounts and directing municipal authorities to mark the advertiser's campaign permissions in default.",
      },
    ],
    statutoryHook:
      "Contract Act Section 222 (Vendor Out-of-Pocket Reimbursement) + Copyright Act Section 51 (Unpaid Creative License Revocation)",
    recommendedRemedy:
      "Dual-track Demand Notice enforcing Municipal Lease Indemnity under Section 222 plus 7-Day Copyright Infringement Cease-and-Desist.",
  },
];

export default function MediaBuyingScenarioTabs() {
  const [activeScenarioId, setActiveScenarioId] = useState<string>(MEDIA_BUYING_SCENARIOS[0].id);

  const activeScenario =
    MEDIA_BUYING_SCENARIOS.find((s) => s.id === activeScenarioId) || MEDIA_BUYING_SCENARIOS[0];

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-7 shadow-xl text-white">
      <div className="border-b border-slate-800 pb-4 mb-6">
        <span className="text-[10px] font-black uppercase tracking-widest text-red-400 block mb-1">
          Interactive Commercial Failure Matrix
        </span>
        <h3 className="text-lg sm:text-xl font-black text-white">
          Explore Your Specific Ad Spend Default Scenario
        </h3>
        <p className="text-xs text-slate-400 mt-1">
          Select your media channel and default modus operandi to view the exact statutory recovery protocol.
        </p>
      </div>

      {/* Tab Selectors */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-6">
        {MEDIA_BUYING_SCENARIOS.map((scenario) => {
          const isSelected = scenario.id === activeScenarioId;
          return (
            <button
              key={scenario.id}
              onClick={() => setActiveScenarioId(scenario.id)}
              type="button"
              className={`text-left p-3 rounded-xl transition-all border text-xs font-bold ${
                isSelected
                  ? "bg-[#DC2626] border-red-500 text-white shadow-lg shadow-red-950/40"
                  : "bg-slate-800/80 border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white"
              }`}
            >
              <span className="block text-[10px] opacity-75 uppercase tracking-wider mb-0.5">
                Channel
              </span>
              {scenario.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Scenario Display */}
      <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 sm:p-6 space-y-5">
        <div>
          <span className="inline-block px-2.5 py-1 rounded text-[10px] font-black uppercase tracking-wider bg-red-950/80 text-red-400 border border-red-800/60 mb-2">
            Default Pattern Analysis
          </span>
          <h4 className="text-base sm:text-lg font-bold text-white leading-snug">
            {activeScenario.title}
          </h4>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-2">
            {activeScenario.modusOperandi}
          </p>
        </div>

        {/* Legal Doctrine Hook */}
        <div className="bg-slate-900/90 border-l-4 border-red-500 p-4 rounded-r-xl">
          <span className="block text-[10px] font-black uppercase tracking-widest text-red-400 mb-1">
            Governing Legal Doctrine
          </span>
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
            {activeScenario.legalDoctrine}
          </p>
        </div>

        {/* Action Protocol Grid */}
        <div>
          <span className="block text-xs font-black uppercase tracking-wider text-slate-300 mb-3">
            Agency 3-Phase Counter-Offensive Protocol:
          </span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {activeScenario.actionProtocol.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-900 border border-slate-800 p-3.5 rounded-xl flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-black text-red-400 uppercase tracking-wider block mb-1">
                    Phase {idx + 1}: {item.phase}
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Statutory Hook & Recommended Remedy Footer */}
        <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
              Statutory Leverage Points
            </span>
            <span className="font-semibold text-emerald-400">{activeScenario.statutoryHook}</span>
          </div>
          <div className="sm:text-right">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
              Recommended Legal Action
            </span>
            <span className="font-bold text-white bg-red-950/60 px-2 py-1 rounded border border-red-800/40 inline-block mt-0.5">
              {activeScenario.recommendedRemedy}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
