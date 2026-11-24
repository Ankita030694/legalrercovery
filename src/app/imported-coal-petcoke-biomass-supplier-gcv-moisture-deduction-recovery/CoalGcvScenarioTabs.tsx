"use client";

import React, { useState } from "react";

interface ScenarioTab {
  id: string;
  tabLabel: string;
  title: string;
  trigger: string;
  statutoryDefense: string;
  actionSteps: {
    step: string;
    detail: string;
  }[];
  citation: string;
}

const COAL_SCENARIOS: ScenarioTab[] = [
  {
    id: "burned-lot-gcv",
    tabLabel: "100% Coal Burned",
    title: "Buyer Consumes Entire 2,000-MT Coal Lot in Boiler, Then Emails Day-45 GCV Debit Note",
    trigger:
      "A textile dyeing mill in Surat, paper mill in Vapi, or brick kiln in UP/Haryana receives 40–80 tipper trucks of Indonesian Steam Coal (GAR 4200/4800), feeds 100% into its FBC boiler, claims GST Input Tax Credit on GSTR-2B, and 45–60 days later deducts ₹15–₹25 Lakh citing a '400 kcal GCV shortfall'.",
    statutoryDefense:
      "Under Section 42 of the Sale of Goods Act, 1930, a buyer is legally deemed to have accepted the goods when they do any act in relation to them which is inconsistent with the ownership of the seller—burning coal in a boiler is the textbook definition of irreversible consumption. Once consumed without preserving the sealed joint referee sample, the buyer is estopped from rejecting quality or imposing unilateral price reductions.",
    actionSteps: [
      {
        step: "Serve Section 42 Consumption Estoppel & GSTR-2B Notice",
        detail:
          "Issue a Fact-Verified Demand Notice attaching the buyer's signed Gate Weighbridge Slips, E-Way Bills, and GSTR-2B ITC acceptance proving unconditional appropriation and consumption of the full 2,000 MT.",
      },
      {
        step: "Reject Unilateral Debit Note as Non-Liquidated Fabrication",
        detail:
          "Formally repudiate the unauthenticated debit note in writing within 7 days so the buyer cannot manufacture a 'pre-existing dispute' defense under Section 8(2)(a) of IBC, 2016 (Mobilox Innovations standard).",
      },
      {
        step: "File Order XXXVII Summary Suit or IBC Section 8 Demand",
        detail:
          "Escalate to an Order XXXVII CPC Summary Suit on the written contract + GST tax invoices, or serve Form 3/4 IBC Demand Notice if principal + contractual interest crosses ₹1 Crore.",
      },
    ],
    citation: "Sale of Goods Act, 1930 (ss. 41–42) & CPC Order XXXVII / IBC s. 8",
  },
  {
    id: "unilateral-lab-vs-sgs",
    tabLabel: "Factory Lab vs. SGS",
    title: "Buyer's In-House Lab Report Contradicts Load-Port SGS / Intertek / IIA Certificate",
    trigger:
      "Instead of invoking the contractual Joint Umpire/Referee Sample clause (NABL-accredited third-party lab), the buyer's captive plant chemist runs an uncalibrated bomb-calorimeter test on an unsealed grab sample and slashes ₹900/MT off the petcoke or South African RB2/RB3 coal bill.",
    statutoryDefense:
      "Where a commercial coal or petcoke contract designates Load-Port/Discharge-Port SGS, Intertek, Inspectorate Griffith (IIA), or a mutually sealed NABL referee sample as final and binding, a unilateral test conducted behind the seller's back has zero evidentiary sanctity under Indian contract law and BSA 2023.",
    actionSteps: [
      {
        step: "Enforce Joint Referee Sample Finality Clause",
        detail:
          "Demand production of the mutually signed, tamper-evident sealed referee sample packet and joint sampling video/memo. Absence of joint sealing renders the factory lab report inadmissible.",
      },
      {
        step: "Anchor Claim to Port Certificate of Quality (CoQ)",
        detail:
          "Place the certified Load-Port/Discharge-Port SGS/Intertek/IIA Certificate of Sampling & Analysis on record as conclusive proof of As-Received Basis (ARB) GCV, Total Moisture (TM), and Ash.",
      },
      {
        step: "Pursue NI Act s.138 / Order 38 Rule 5 Security",
        detail:
          "Present any PDC/security cheque held against the dispatch; if dishonored, initiate Section 138/141 criminal prosecution against directors alongside 20% interim compensation under Section 143A.",
      },
    ],
    citation: "Indian Contract Act, 1872 (ss. 37, 73) & BSA 2023 s. 63",
  },
  {
    id: "moisture-transit-risk",
    tabLabel: "Monsoon Moisture Cut",
    title: "Ex-Mundra / Kandla / Vizag Dispatch: Buyer Deducts Monsoon Transit Moisture",
    trigger:
      "On Ex-Port / FOR Plot or Ex-Jetty sales from Mundra, Kandla, Tuna, Navlakhi, Paradip, or Vizag, open tarpaulin trucks encounter rain en route to the buyer's plant. The buyer deducts 6%–10% weight/rate citing 'excess Total Moisture' at factory weighbridge.",
    statutoryDefense:
      "Under Section 26 of the Sale of Goods Act, 1930, unless otherwise agreed, goods remain at the seller's risk until property passes—and on Ex-Plot / FOR dispatch terms, risk transfers to the buyer the moment coal crosses the port weighbridge and bilty/LR is issued. Post-dispatch transit moisture gain is solely to the buyer's account.",
    actionSteps: [
      {
        step: "Lock Port Weighbridge & Moisture Certificate Cutoff",
        detail:
          "Compile the port plot dispatch weighment slip, transporter LR/bilty, and port moisture certificate showing moisture within contracted TM tolerance at the point of delivery.",
      },
      {
        step: "Cite Section 26 Risk Transfer & Section 39 Carrier Delivery",
        detail:
          "Demonstrate under Section 39(1) Sale of Goods Act that delivery to the buyer-nominated carrier/transporter constitutes prima facie delivery to the buyer.",
      },
      {
        step: "Recover Full Principal + 18%–24% Contractual Interest",
        detail:
          "Compute contractual overdue interest from the invoice due date and issue a 15-day statutory demand notice prior to Commercial Court / Order 37 filing.",
      },
    ],
    citation: "Sale of Goods Act, 1930 (ss. 26, 39) & Commercial Courts Act, 2015",
  },
  {
    id: "biomass-pellet-msme",
    tabLabel: "Biomass & Briquettes",
    title: "Biomass Pellet / Briquette Supplier Facing NTPC / Textile Mill Ash & GCV Cuts",
    trigger:
      "An Udyam-registered agro-waste biomass pellet or mustard-husk briquette manufacturer supplies 500 MT to a captive power plant or spinning mill, which holds back 20% retention and imposes arbitrary 'high ash / low GCV' cuts past 45 days.",
    statutoryDefense:
      "Unlike pure coal traders, domestic biomass pellet and briquette manufacturers holding valid Udyam Manufacturing Registration enjoy statutory protection under Sections 15–18 of the MSMED Act, 2006. Any payment delay beyond 45 days triggers mandatory 3x RBI Bank Rate compound interest (with monthly rests), and Section 19 requires the buyer to deposit 75% of the award before challenging it.",
    actionSteps: [
      {
        step: "Verify Udyam Manufacturing NIC Code & Invoice Date",
        detail:
          "Ensure Udyam Registration (Manufacturing category) pre-dates the Purchase Order and Tax Invoices to unlock MSMED Section 16 statutory interest.",
      },
      {
        step: "Serve Combined MSMED s.16 + Section 42 Demand Notice",
        detail:
          "Quantify principal + 3x RBI monthly compounded interest (approx. 19.5%–20.25% p.a. compounded monthly) and highlight Income Tax Section 43B(h) disallowance risk to the corporate buyer.",
      },
      {
        step: "Escalate to MSEFC Conciliation / Arbitration",
        detail:
          "File on MSME Samadhaan if unpaid after 15 days; buyers rarely litigate post-award because Section 19 mandates a 75% pre-deposit for any appeal.",
      },
    ],
    citation: "MSMED Act, 2006 (ss. 15, 16, 18, 19) & Income Tax Act s. 43B(h)",
  },
];

export default function CoalGcvScenarioTabs() {
  const [activeTab, setActiveTab] = useState(COAL_SCENARIOS[0].id);
  const current = COAL_SCENARIOS.find((s) => s.id === activeTab) || COAL_SCENARIOS[0];

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-sm">
      <div className="border-b border-slate-200 pb-4 mb-5">
        <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#DC2626] block mb-1">
          Interactive Creditor Playbooks
        </span>
        <p className="text-base sm:text-lg font-bold text-slate-900">
          Select Your Coal, Petcoke or Biomass Deduction Scenario
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {COAL_SCENARIOS.map((tab) => {
          const isActive = tab.id === activeTab;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                isActive
                  ? "bg-[#DC2626] text-white border-[#DC2626] shadow-sm"
                  : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              {tab.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Panel */}
      <div className="space-y-5">
        <div className="bg-slate-900 text-white rounded-xl p-4 sm:p-5">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-red-400">
              Active Playbook
            </span>
            <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-white/10 text-slate-200 border border-white/15">
              {current.citation}
            </span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
            {current.title}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
            <p className="text-[11px] font-extrabold uppercase tracking-wider text-amber-800 mb-1.5">
              Buyer Default Pattern
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{current.trigger}</p>
          </div>
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
            <p className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-800 mb-1.5">
              Creditor Statutory Counter-Move
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {current.statutoryDefense}
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
            3-Step Execution Protocol
          </p>
          {current.actionSteps.map((item, idx) => (
            <div
              key={item.step}
              className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-50 border border-slate-200"
            >
              <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                {idx + 1}
              </span>
              <div>
                <p className="text-sm font-bold text-slate-900">{item.step}</p>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
