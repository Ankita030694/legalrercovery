"use client";

import React, { useState } from "react";

interface DmcScenario {
  id: string;
  tabLabel: string;
  title: string;
  failureMode: string;
  statutoryLeverage: string;
  actionSteps: {
    step: string;
    detail: string;
  }[];
  hook: string;
}

const DMC_SCENARIOS: DmcScenario[] = [
  {
    id: "fake-utr-arrival",
    tabLabel: "Fake UTR / SWIFT Scam",
    title: "Retail Agent Sends Edited NEFT/RTGS or SWIFT PDF on Arrival Morning",
    failureMode:
      "At 6:00 PM on Friday—or 7:00 AM as tourists clear airport immigration in Goa, Kochi, Srinagar, or Dubai—the retail travel agent WhatsApps a cropped NEFT UTR or SWIFT MT103 PDF claiming funds are 'in clearing'. Your DMC honours the hotel check-in and Volvo coach to avoid stranding families, only to discover on Monday that the UTR is fabricated and the agent has blocked your calls.",
    statutoryLeverage:
      "Fabricating or altering a bank remittance receipt or SWIFT advice is not a mere civil breach—it constitutes Forgery of an Electronic Record & Valuable Security under Sections 336 and 340 of the Bharatiya Nyaya Sanhita (BNS), 2023 (up to 7 years imprisonment, cognizable/non-bailable) alongside Section 318 BNS (Cheating). Putting the proprietor/directors on a 48-hour criminal-civil notice triggers rapid RTGS settlement.",
    actionSteps: [
      {
        step: "Obtain Bank Non-Credit Confirmation & Preserve Metadata",
        detail:
          "Download your bank's written confirmation that the quoted UTR/SWIFT reference never hit your beneficiary account, and preserve the original WhatsApp/email file with a BSA 2023 s.63 certificate.",
      },
      {
        step: "Serve 48-Hour BNS s.318 & s.336/340 Statutory Notice",
        detail:
          "Dispatch an Advocate notice via WhatsApp, email, and Speed Post RPAD explicitly attaching the forged PDF metadata and warning of an Economic Offences / Cyber Police FIR.",
      },
      {
        step: "File Criminal Complaint + Order XXXVII Summary Suit",
        detail:
          "If unpaid after 48 hours, lodge the BNS s.336/340 complaint at the local police station/Cyber Cell while filing an Order XXXVII CPC summary suit for principal + interest.",
      },
    ],
    hook: "BNS 2023 s.336/340 Forgery (Up to 7 Yrs) + s.318 Cheating",
  },
  {
    id: "pax-paid-agent",
    tabLabel: "Pax Paid, Agent Vanished",
    title: "Retail Agent Collected 100% Tour Money from Tourists & Defaulted to DMC",
    failureMode:
      "The retail agency collected the entire ₹12–₹25 Lakh family or group tour package upfront from the end-passengers, issued your DMC's hotel vouchers, and then used those funds to plug its own working-capital hole—defaulting on the DMC's land package invoice after the group returned home.",
    statutoryLeverage:
      "When an agent collects monies earmarked for third-party hoteliers, transport, and DMC services and dishonestly misappropriates them, it attracts Criminal Breach of Trust under Section 316 BNS, 2023 in addition to civil recovery under Order XXXVII CPC. If the agent issued a post-dated security cheque, dishonour triggers NI Act s.138 prosecution with 20% interim compensation under s.143A.",
    actionSteps: [
      {
        step: "Lock Signed Check-In Vouchers & Service Completion Proof",
        detail:
          "Compile hotel check-in folios, excursion tickets, driver duty slips, and passenger WhatsApp welcome confirmations proving 100% land delivery.",
      },
      {
        step: "Present Security PDC & Issue NI Act s.138 Notice",
        detail:
          "Deposit any security cheque held against the credit ledger; upon bounce, serve a mandatory 15-day statutory demand notice within 30 days of the bank return memo.",
      },
      {
        step: "Notify Directors / Partners Under BNS s.316 & NI s.141",
        detail:
          "Hold every active partner or director personally liable for dishonest misappropriation of entrusted tour proceeds.",
      },
    ],
    hook: "BNS s.316 Criminal Breach of Trust + NI Act s.138 / s.143A",
  },
  {
    id: "foreign-fto-default",
    tabLabel: "Inbound Foreign FTO Default",
    title: "Foreign Tour Operator (UK/EU/GCC) Defaults on Indian DMC Invoice",
    failureMode:
      "An inbound DMC in Rajasthan, Kerala, or Delhi operates a 20-day heritage or wildlife circuit for a European, UK, or GCC Foreign Tour Operator (FTO) on 30-day post-departure credit. Post-departure, the FTO invents minor service-quality excuses (hotel room view, coach AC) to withhold the final €25,000–$45,000 wire.",
    statutoryLeverage:
      "Under Indian jurisdiction clauses in the DMC-FTO Operator Agreement, an Indian Commercial Court decree under Order XXXVII CPC can be directly executed in reciprocating territories (UK, UAE, Singapore) under Section 44A CPC. Simultaneously, documented service completion under BSA 2023 s.63 defeats fabricated post-departure quality set-offs.",
    actionSteps: [
      {
        step: "Audit Signed Tour Leader Feedback & Hotel Folios",
        detail:
          "Attach end-of-tour feedback sheets signed by the FTO's own tour escort showing zero contemporaneous complaints during the itinerary.",
      },
      {
        step: "Serve Cross-Border Advocate Notice + AD-Bank Trail",
        detail:
          "Issue a formal demand notice citing the Indian jurisdiction clause, FEMA export-of-services realization obligation, and Section 44A CPC reciprocal decree enforcement.",
      },
      {
        step: "Escalate via Commercial Court / Foreign Collection Counsel",
        detail:
          "Obtain an ex-parte or contested summary decree in India for enforcement against the FTO's home-country assets in reciprocating jurisdictions.",
      },
    ],
    hook: "Order XXXVII CPC + Section 44A Reciprocating Execution",
  },
  {
    id: "outbound-block-forfeit",
    tabLabel: "Outbound Block Attrition",
    title: "Sub-Agent Cancels Group Departure Leaving DMC with Non-Refundable Blocks",
    failureMode:
      "Your outbound DMC blocked 35 rooms in Phuket, Bali, Baku, or Switzerland and pre-paid local coach/cruise suppliers for a corporate incentive or Diwali group departure. The sub-agent backs out 10 days before departure or stops paying the final tranche, leaving your DMC absorbing 100% hotel attrition penalties.",
    statutoryLeverage:
      "Under Sections 73 and 74 of the Indian Contract Act, 1872, pre-agreed cancellation slabs and non-refundable supplier commitments are recoverable as liquidated damages when backed by supplier debit notes and bank remittance proofs. Registered MSME DMCs can also claim 3x RBI bank rate compound interest under Section 16 of the MSMED Act, 2006.",
    actionSteps: [
      {
        step: "Quantify Actual Supplier Debit Notes & Wire Proofs",
        detail:
          "Collate overseas hotel/cruise cancellation invoices and your bank's SWIFT outward remittance copies to prove real out-of-pocket loss.",
      },
      {
        step: "Invoke Contract Act s.74 & MSMED Act s.15–18",
        detail:
          "Serve an Advocate demand notice claiming the exact forfeited block amount plus 3x RBI compound interest from the 45-day MSME due date.",
      },
      {
        step: "File MSEFC Samadhaan Claim / Commercial Suit",
        detail:
          "Escalate to the Micro & Small Enterprises Facilitation Council (where the buyer must deposit 75% to appeal any award) or Commercial Court.",
      },
    ],
    hook: "Contract Act s.73/74 + MSMED s.16 (3x RBI Compound Interest)",
  },
];

export default function DmcScenarioTabs() {
  const [activeId, setActiveId] = useState<string>(DMC_SCENARIOS[0].id);
  const current = DMC_SCENARIOS.find((s) => s.id === activeId) || DMC_SCENARIOS[0];

  return (
    <div className="w-full">
      {/* Tab Buttons */}
      <div
        role="tablist"
        aria-label="DMC Default Scenarios"
        className="flex flex-wrap gap-2 mb-5 border-b border-slate-200 pb-3"
      >
        {DMC_SCENARIOS.map((scenario) => {
          const isActive = scenario.id === activeId;
          return (
            <button
              key={scenario.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveId(scenario.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-colors cursor-pointer ${
                isActive
                  ? "bg-[#DC2626] text-white shadow-sm"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {scenario.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Tab Panel */}
      <div
        role="tabpanel"
        className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-5"
      >
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h3 className="text-base sm:text-lg font-bold text-slate-900">{current.title}</h3>
          <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold bg-red-50 text-[#DC2626] border border-red-200">
            {current.hook}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded-xl p-4 border border-slate-200">
            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
              Commercial Failure Mode
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {current.failureMode}
            </p>
          </div>
          <div className="bg-emerald-50/70 rounded-xl p-4 border border-emerald-200">
            <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 mb-1.5">
              Creditor Statutory Leverage
            </p>
            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
              {current.statutoryLeverage}
            </p>
          </div>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
            3-Step Recovery Action Sequence
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {current.actionSteps.map((item, idx) => (
              <div
                key={item.step}
                className="bg-white rounded-xl p-4 border border-slate-200 shadow-xs"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <p className="text-xs sm:text-sm font-bold text-slate-900">{item.step}</p>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
