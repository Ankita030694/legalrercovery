"use client";

import React, { useState } from "react";

interface ScenarioTab {
  id: string;
  tabLabel: string;
  title: string;
  buyerTactic: string;
  statutoryCounter: string;
  actionSteps: {
    step: string;
    detail: string;
  }[];
  legalProvision: string;
}

const SCENARIOS: ScenarioTab[] = [
  {
    id: "phoenix-llp-shutdown",
    tabLabel: "Phoenix LLP Shutdown",
    title: "Restaurateur Shuts LLP-1 Owing ₹15L+ and Opens a New Cafe Next Month",
    buyerTactic:
      "A pub, fine-dining, or cloud-kitchen promoter operates under 'Hospitality LLP-1', runs up ₹10–₹25 lakh in unpaid imported cheese, frozen fries, meat, and coffee bean bills across 90 days, abruptly surrenders the outlet lease, and launches a rebranded cafe under 'Ventures Pvt Ltd-2' using the same kitchen equipment and founder team.",
    statutoryCounter:
      "Closing an LLP or Pvt Ltd shell does not extinguish personal criminal liability under Sections 138 and 141 of the Negotiable Instruments Act, 1881 for dishonoured post-dated cheques signed by Designated Partners or Directors. Where personal guarantees or sole-proprietor credit applications exist, creditors can sue the promoters personally under Order XXXVII CPC, and fraudulent asset transfer to a phoenix entity attracts BNS Section 318 (cheating) and Section 316 (criminal breach of trust).",
    actionSteps: [
      {
        step: "Present Security PDCs & Name Every Signatory Under s.141 NI Act",
        detail:
          "Deposit due security cheques immediately and serve the 15-day Section 138 demand notice on both the LLP/Company and the individual Designated Partners/Directors who signed or managed kitchen procurement.",
      },
      {
        step: "Enforce Personal Guarantee / Proprietor Credit Form",
        detail:
          "Invoke the personal guarantee clause in your HoReCa Vendor Onboarding Form to pursue promoters' personal bank accounts and assets independent of the closed LLP.",
      },
      {
        step: "File BNS s.318 Criminal Complaint for Fraudulent Diversion",
        detail:
          "Document MCA/GSTIN links between LLP-1 and the new cafe entity (shared FSSAI license address, directors, or kitchen assets) to establish dishonest inducement.",
      },
    ],
    legalProvision: "NI Act 1881 ss.138 & 141 | CPC Order XXXVII | BNS 2023 ss.316 & 318",
  },
  {
    id: "qsr-120-day-stretch",
    tabLabel: "QSR 120-Day Stretch",
    title: "Multi-Outlet QSR or Cloud-Kitchen Chain Stretches Credit Beyond 90–120 Days",
    buyerTactic:
      "A funded QSR chain or multi-brand cloud kitchen in Mumbai, Bengaluru, or Delhi-NCR promises 15-day or 30-day credit on daily poultry, seafood, bakery, and sauce deliveries, then unilaterally shifts to 'centralized finance batching'—stretching payables to 120+ days while using vendor credit to fund new outlet expansion.",
    statutoryCounter:
      "If your food processing, dairy, bakery, or spice/sauce supply unit holds an Udyam Registration Certificate (Micro or Small Enterprise), Sections 15–16 of the MSMED Act, 2006 cap credit at 45 days maximum regardless of any QSR vendor-portal terms. Any balance unpaid past 45 days triggers mandatory 3x RBI Bank Rate monthly compounded interest AND bars the QSR chain from claiming the unpaid invoice as a tax-deductible expense under Section 43B(h) of the Income Tax Act.",
    actionSteps: [
      {
        step: "Trigger Day-35 Pre-Shutdown Fact-Verified Notice",
        detail:
          "Never wait until Day 120 when an F&B chain runs out of runway. Serve a formal Fact-Verified Legal Notice at Day 35–45 putting the CFO and Procurement Head on statutory notice.",
      },
      {
        step: "Invoke Income Tax Act Section 43B(h) Disallowance",
        detail:
          "Explicitly cite Section 43B(h) in your demand notice—alerting the QSR's auditors that unpaid Udyam MSME invoices at financial year-end convert directly into taxable income.",
      },
      {
        step: "File MSME Samadhaan or Commercial Court Suit (≥ ₹3 Lakh)",
        detail:
          "Escalate unpaid Udyam food-processing claims to MSEFC Samadhaan for statutory conciliation/arbitration, or initiate Section 12A Commercial Mediation + Summary Suit.",
      },
    ],
    legalProvision: "MSMED Act 2006 ss.15–18 | Income Tax Act s.43B(h) | Commercial Courts Act s.12A",
  },
  {
    id: "fssai-spoilage-excuse",
    tabLabel: "Fake Spoilage / FSSAI Excuse",
    title: "Kitchen Claims 'Expired Shelf-Life' or 'Spoiled Meat/Cheese' Weeks After Delivery",
    buyerTactic:
      "Only after receiving a payment reminder or legal notice, the restaurant's accounts team emails a unilateral debit note alleging that imported cheese, frozen fries, or chilled seafood had 'short FSSAI shelf life' or 'temperature abuse'—despite their Head Chef having accepted the crates weeks earlier.",
    statutoryCounter:
      "Under Sections 41 and 42 of the Sale of Goods Act, 1930, perishable F&B goods must be inspected for temperature, FSSAI best-before dates, and weight at the receiving dock. Once the Head Chef or Storekeeper signs and stamps the Delivery Challan (noting cold-chain temperature/quantity without protest) and places the stock into the kitchen walk-in chiller, the buyer is legally deemed to have accepted the goods. Retrospective spoilage excuses without a contemporaneous rejection memo are void.",
    actionSteps: [
      {
        step: "Produce Chef-Stamped Delivery Challans & Cold-Chain Logs",
        detail:
          "Exhibit the signed/stamped Kitchen Delivery Challan, FSSAI batch/expiry log, and reefer temperature printout showing clean acceptance at the restaurant's back-door dock.",
      },
      {
        step: "Cite Sale of Goods Act ss. 41–42 Deemed Acceptance",
        detail:
          "Rebut the post-consumption debit note in your legal notice by showing the buyer consumed or stored the perishable stock for weeks without any Day-0 rejection.",
      },
      {
        step: "Certify WhatsApp Chef Orders Under BSA 2023 s.63",
        detail:
          "Compile WhatsApp purchase orders from the Executive Chef, storekeeper gate entries, and GST e-Invoices with a Section 63 BSA electronic evidence certificate.",
      },
    ],
    legalProvision: "Sale of Goods Act 1930 ss.41 & 42 | FSSAI Cold-Chain Norms | BSA 2023 s.63",
  },
  {
    id: "pdc-bounce-guarantee",
    tabLabel: "Bounced PDCs & Guarantees",
    title: "Restaurant's Security Cheque Bounces ('Account Closed' or 'Payment Stopped')",
    buyerTactic:
      "A pub or fine-dining outlet issues a post-dated cheque (PDC) to release a ₹12 lakh frozen seafood and bakery supply hold, then instructs the bank to 'Stop Payment' or lets the account go dormant/frozen due to GST or landlord disputes.",
    statutoryCounter:
      "Under Section 138 of the NI Act, 1881, 'Stop Payment' or 'Account Closed' carries the exact same criminal liability as 'Funds Insufficient' (established by Supreme Court precedent in Modi Cements / Laxmi Dyechem). Section 139 creates a statutory presumption that the cheque was issued for a legally enforceable debt, shifting the burden onto the restaurateur. Under Section 143A, courts can direct 20% interim compensation within 60 days of plea.",
    actionSteps: [
      {
        step: "Serve Mandatory 15-Day Notice Within 30 Days of Return Memo",
        detail:
          "Track the exact date on the Bank Cheque Return Memo and dispatch a Section 138 demand notice via Speed Post RPAD + Email + WhatsApp within 30 days.",
      },
      {
        step: "Name All Active Directors / Partners Under s.141",
        detail:
          "Include specific averments describing how each Designated Partner or Director was in charge of day-to-day restaurant operations and vendor payments.",
      },
      {
        step: "Move s.143A Interim Compensation + Parallel Order XXXVII Suit",
        detail:
          "Seek 20% interim relief under s.143A NI Act in the Magistrate Court while running a parallel Order XXXVII Summary Suit for fast civil attachment.",
      },
    ],
    legalProvision: "NI Act 1881 ss.138, 139, 141 & 143A | CPC Order XXXVII",
  },
];

export default function HorecaRecoveryScenarioTabs() {
  const [activeTabId, setActiveTabId] = useState<string>(SCENARIOS[0].id);
  const activeScenario = SCENARIOS.find((s) => s.id === activeTabId) || SCENARIOS[0];

  return (
    <div className="w-full max-w-full">
      {/* Tab Buttons */}
      <div
        role="tablist"
        aria-label="HoReCa and Restaurant Default Scenarios"
        className="flex flex-wrap gap-2 mb-6"
      >
        {SCENARIOS.map((scenario) => {
          const isActive = scenario.id === activeTabId;
          return (
            <button
              key={scenario.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveTabId(scenario.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer border ${
                isActive
                  ? "bg-[#DC2626] text-white border-[#DC2626] shadow-md"
                  : "bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              {scenario.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Scenario Card */}
      <div
        role="tabpanel"
        className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 md:p-7 space-y-5"
      >
        <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-slate-200">
          <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 leading-snug">
            {activeScenario.title}
          </h3>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold bg-slate-900 text-white">
            {activeScenario.legalProvision}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
            <p className="text-[11px] font-bold uppercase tracking-wider text-amber-800 mb-1.5">
              F&amp;B Operator&apos;s Delay / Closure Tactic
            </p>
            <p className="text-xs sm:text-sm text-amber-950 leading-relaxed">
              {activeScenario.buyerTactic}
            </p>
          </div>

          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
            <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 mb-1.5">
              Creditor&apos;s Statutory Counter-Strike
            </p>
            <p className="text-xs sm:text-sm text-emerald-950 leading-relaxed">
              {activeScenario.statutoryCounter}
            </p>
          </div>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
            3-Step Operational Execution
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {activeScenario.actionSteps.map((item, idx) => (
              <div
                key={item.step}
                className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <p className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                    {item.step}
                  </p>
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
