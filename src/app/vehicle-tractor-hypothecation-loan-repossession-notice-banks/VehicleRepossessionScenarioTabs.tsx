"use client";

import React, { useState } from "react";

interface ScenarioItem {
  id: string;
  shortLabel: string;
  badge: string;
  title: string;
  trigger: string;
  riskExposure: string;
  statutoryAction: string[];
  outcomeMetric: string;
}

const SCENARIOS: ScenarioItem[] = [
  {
    id: "tractor-rural-resistance",
    shortLabel: "1. Rural Tractor Seizure",
    badge: "Agri & Tractor Finance",
    title: "Defaulting Tractor Borrower Resisting Field Repossession in Rural Tehsil",
    trigger:
      "A 50-HP hypothecated tractor financed for ₹8.5 Lakh crosses 120 DPD across two harvest seasons. Local field agents attempting farm-gate seizure face hostile villagers and threats of a false kidnapping/dacoity FIR at the rural police station.",
    riskExposure:
      "Direct breach of ICICI Bank v. Prakash Kaur and Citicorp Maruti Finance mandates if bank-hired agents use force; District Consumer Commission punitive damages of ₹3L–₹10L plus arrest warrants against branch collection staff under BNS s.309/s.140.",
    statutoryAction: [
      "Halt all informal field visits immediately and serve Notice 1 (15-Day Loan Recall-cum-Pre-Repossession Cure Notice) via registered Speed Post RPAD, WhatsApp, and vernacular notice copy to both borrower and agricultural co-borrower/guarantor.",
      "Do NOT attempt forcible self-help when physical resistance is anticipated; file an urgent ex-parte Section 9 petition under the Arbitration and Conciliation Act, 1996 before the District Commercial Court seeking appointment of a Court Receiver with local SHO police-aid direction.",
      "Execute seizure strictly through the Court Receiver with pre- and post-seizure police station diary intimation, video-recorded panchnama documenting chassis/engine serials and attached implements (trolley/rotavator), and mandatory 15-day pre-sale valuation redemption notice.",
    ],
    outcomeMetric:
      "Zero criminal FIR exposure for branch officers and clean title handover for Form 36 fresh RC issuance.",
  },
  {
    id: "hidden-stripped-cv",
    shortLabel: "2. Hidden / Stripped CV",
    badge: "BNS s.316 & s.9 Receiver",
    title: "Commercial Vehicle / LCV Borrower Concealing Vehicle or Stripping Tyres & Battery",
    trigger:
      "A retail CV/pickup borrower skips 4 EMIs, disconnects GPS telemetry, parks the hypothecated vehicle in a relative's closed yard across district lines, or begins cannibalizing tyres, battery, and hydraulic parts.",
    riskExposure:
      "Rapid 35%–55% collateral value erosion before auction, leaving a massive unsecured deficit; breaking locks on third-party premises without judicial orders invites house-trespass (BNS s.329) and theft FIRs.",
    statutoryAction: [
      "Serve an immediate Recall-cum-Inspection Demand Notice directing the borrower to produce the hypothecated vehicle at the branch/authorized stockyard within 7 days, copying the jurisdictional police station via email.",
      "File a Section 9 Arbitration interim application requesting an ex-parte Court Receiver authorized to trace, break open locks where lawfully permitted by court order, and take custody of the vehicle with police assistance.",
      "Simultaneously initiate a criminal complaint under BNS Section 316 (Criminal Breach of Trust) and Section 323 (dishonest removal/concealment of property) if GPS logs or inspection confirm clandestine sale or stripping of the hypothecated chassis, plus flag Vahan portal transfer blocks.",
    ],
    outcomeMetric:
      "Arrests collateral stripping within 14–21 days and preserves 75%+ salvageable auction value.",
  },
  {
    id: "rto-form-36-block",
    shortLabel: "3. RTO Form 36 Refusal",
    badge: "MV Act s.51(5) Compliance",
    title: "Borrower Refusing to Surrender Original RC & Blocking RTO Form 36 Fresh Registration",
    trigger:
      "After peaceful, police-intimated repossession and expiry of the 15-day redemption window, the borrower ignores RTO notices and refuses to hand over the original Registration Certificate (RC) to sabotage the auction buyer's title transfer.",
    riskExposure:
      "Auction buyers discount bids by 30%–40% for vehicles lacking clear RC transferability, or cancel purchases altogether, forcing the bank to absorb parking yard charges and fresh valuation depreciation.",
    statutoryAction: [
      "Compile the complete Section 51(5) Motor Vehicles Act, 1988 statutory packet: copy of Hypothecation Agreement, Form 36 application (Rule 61(2) CMV Rules), pre-seizure Recall Notice with India Post RPAD proof, pre/post SHO intimation receipts, and signed inventory panchnama.",
      "Submit Form 36 online on Parivahan Vahan 4.0 and physically at the jurisdictional Registering Authority (RTO) requesting issuance of a Fresh Registration Certificate directly in the bank's name upon borrower default.",
      "Track the RTO's statutory show-cause notice to the registered owner (Form 37); under Section 51(5), even if the borrower refuses to surrender the old RC or ignores the notice, the RTO is statutorily empowered to cancel the original RC and issue a Fresh RC to the financier.",
    ],
    outcomeMetric:
      "Unlocks clean Vahan title transfer in the bank's name and maximizes transparent e-auction bid realization.",
  },
  {
    id: "post-auction-deficit",
    shortLabel: "4. Post-Auction Deficit",
    badge: "Shortfall Recovery",
    title: "Recovering ₹4.2L–₹9.5L Post-Auction Shortfall After Vehicle Sale Proceeds Fall Short",
    trigger:
      "A hypothecated SUV or commercial vehicle with ₹13.4 Lakh total foreclosure dues fetches only ₹8.6 Lakh in public e-auction after depreciation and yard expenses, leaving a ₹4.8 Lakh residual shortfall that the borrower claims was 'wiped out once you took the car'.",
    riskExposure:
      "Consumer forums and arbitral tribunals routinely disallow deficit claims if the bank fails to prove (a) independent pre-sale valuation, (b) 7/15-day pre-sale redemption notice with reserve price, and (c) transparent public auction competition.",
    statutoryAction: [
      "Issue Notice 4 (Post-Auction Appropriation & Deficit Recovery Legal Notice) within 15 days of sale confirmation, annexing the approved valuer report, e-auction bid sheet, buyer invoice, stockyard/towing vouchers, and itemized credit of sale proceeds against principal and non-capitalized penal charges.",
      "Serve Notice 4 simultaneously on the primary borrower AND co-borrower/personal guarantor (whose liability remains co-extensive under Contract Act Section 128) via Email, WhatsApp, and Speed Post RPAD with BSA Section 63 certification.",
      "If unpaid after 15 days, escalate sub-₹3 Lakh shortfalls to Pre-Litigation National Lok Adalat (zero court fee, Section 21 civil decree) and ₹3 Lakh–₹20 Lakh shortfalls to neutral institutional ODR Arbitration (post-CORE compliant) or Order XXXVII CPC summary suit alongside PSS Act Section 25 e-NACH prosecution.",
    ],
    outcomeMetric:
      "Defeats 'undervalued sale' objections and converts residual auction shortfalls into executable money decrees.",
  },
];

export default function VehicleRepossessionScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(SCENARIOS[0].id);

  const current =
    SCENARIOS.find((item) => item.id === activeTab) || SCENARIOS[0];

  return (
    <div className="space-y-5">
      {/* Tab Selector Buttons */}
      <div
        role="tablist"
        aria-label="Hypothecated vehicle and tractor repossession playbooks"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5"
      >
        {SCENARIOS.map((item) => {
          const isSelected = item.id === activeTab;
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={isSelected}
              aria-controls={`panel-${item.id}`}
              id={`tab-${item.id}`}
              onClick={() => setActiveTab(item.id)}
              className={`px-3.5 py-3 rounded-xl text-left text-xs font-bold border transition-all cursor-pointer ${
                isSelected
                  ? "bg-[#DC2626] text-white border-[#DC2626] shadow-md shadow-red-900/15"
                  : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:border-slate-300"
              }`}
            >
              <span className="block truncate">{item.shortLabel}</span>
              <span
                className={`block text-[10px] font-medium mt-0.5 truncate ${
                  isSelected ? "text-red-100" : "text-slate-500"
                }`}
              >
                {item.badge}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Scenario Panel */}
      <div
        role="tabpanel"
        id={`panel-${current.id}`}
        aria-labelledby={`tab-${current.id}`}
        className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-4"
      >
        <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-200">
          <h3 className="text-base sm:text-lg font-bold text-slate-900">
            {current.title}
          </h3>
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-bold bg-red-50 text-[#DC2626] border border-red-200">
            {current.badge}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white border border-slate-200 rounded-xl p-4 space-y-1.5">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
              Field Collections Trigger
            </span>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {current.trigger}
            </p>
          </div>
          <div className="bg-amber-50/70 border border-amber-200 rounded-xl p-4 space-y-1.5">
            <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800 block">
              Criminal / Consumer-Court Exposure
            </span>
            <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">
              {current.riskExposure}
            </p>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-4 sm:p-5 space-y-3">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#DC2626] block">
            Bank-Side Lawful Execution Steps
          </span>
          <ol className="space-y-2.5">
            {current.statutoryAction.map((step, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 leading-relaxed"
              >
                <span className="w-5 h-5 rounded-full bg-slate-900 text-white text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {index + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="bg-emerald-50 border border-emerald-200 rounded-xl px-4 py-3 flex items-start gap-2.5">
          <span className="text-emerald-700 font-black text-sm mt-0.5">
            &check;
          </span>
          <p className="text-xs sm:text-sm font-medium text-emerald-900">
            <strong>Target Collections Outcome:</strong> {current.outcomeMetric}
          </p>
        </div>
      </div>
    </div>
  );
}
