"use client";

import React, { useState } from "react";

interface ScenarioItem {
  id: string;
  tabLabel: string;
  badge: string;
  title: string;
  siteExcuse: string;
  statutoryCounter: string;
  evidenceRequired: string[];
  recommendedAction: string;
}

const SCENARIOS: ScenarioItem[] = [
  {
    id: "employer-locks-gate-post-termination",
    tabLabel: "1. Builder Locks Site Gate",
    badge: "Nemo Dat + Tort of Conversion",
    title: "Project Owner / PSU Terminates EPC Contractor & Seizes All Site Machinery",
    siteExcuse:
      "After firing the main civil contractor for project delays, the developer, highway concessionaire, or PSU site engineer orders security guards to lock the main gate and detain your ₹4 Crore crawler crane, hydraulic piling rig, or boom-lift as 'contractor site inventory' under the EPC termination clause.",
    statutoryCounter:
      "Under the foundational Nemo Dat Quod Non Habet principle (Sale of Goods Act s.27) and Indian Contract Act ss.148–161 (Bailment), a contractor cannot confer a lien or pledge over machinery it never owned. An EPC termination clause binds only the Employer and Contractor—it creates ZERO general or particular lien over an innocent third-party rental lessor's RC- and invoice-proved plant. Continued detention after formal demand constitutes the actionable Tort of Detinue and Conversion, making the Project Owner directly and personally liable for daily idle-rent damages.",
    evidenceRequired: [
      "Vahan RC Book / Form 20 or OEM Tax Invoice & e-Way Bill proving lessor ownership",
      "Equipment Hire Agreement / Work Order with the EPC contractor (no-lien / title-retention clause)",
      "Signed Site Gate-In Entry Register, Weighbridge Slip, or Safety Induction Pass",
      "Dated email, WhatsApp, or security log recording refusal of Gate-Pass after termination",
    ],
    recommendedAction:
      "Serve an urgent 48-Hour Joint Owner + Contractor Tortious Conversion & Gate-Pass Demand Notice quantifying daily idle-rent (e.g., ₹35,000/day) directly on the Project Owner's Managing Director and Site Head.",
  },
  {
    id: "coerced-no-dues-waiver",
    tabLabel: "2. Coerced Waiver Trap",
    badge: "Contract Act s.15/16",
    title: "Site Admin Demands 'Full & Final Settlement / Indemnity Letter' Before Issuing Gate-Pass",
    siteExcuse:
      "The builder or defaulting EPC contractor tells your site supervisor: 'Sign this undertaking waiving ₹18 Lakh in overdue hire charges and demobilization costs, or your piling rig stays parked inside the yard indefinitely.'",
    statutoryCounter:
      "Withholding a lessor's high-value capital equipment to extract a waiver of earned hire arrears is textbook economic duress and coercion under Sections 15 and 16 of the Indian Contract Act, 1872. A coerced 'No-Dues' undertaking signed under threat of wrongful asset detention is voidable, and detaining the rig as leverage is an independent civil wrong (Conversion) plus Criminal Breach of Trust under BNS Section 316.",
    evidenceRequired: [
      "Draft indemnity / waiver letter sent by site admin or contractor procurement team",
      "Written protest email/WhatsApp stating Gate-Pass is being withheld for unlawful waiver",
      "Monthly log-sheets (hours run / idle standby) signed by site engineer prior to dispute",
      "Approved GST Invoice ledger and unpaid hire-rent reconciliation statement",
    ],
    recommendedAction:
      "Never sign an unconditional waiver. Issue a 'Without Prejudice' protest communication and immediately serve a Fact-Verified Notice demanding unconditional Gate-Pass release plus BNS s.316 criminal intimation.",
  },
  {
    id: "sub-pledge-or-clandestine-shift",
    tabLabel: "3. Clandestine Shifting / Pledge",
    badge: "BNS s.316 + Police CC",
    title: "Contractor Threatens to Shift Crane to Another Site or Sub-Pledge to Local Financiers",
    siteExcuse:
      "Instead of returning your crane or batching plant upon lease termination, the defaulting contractor stops answering calls, disables the GPS tracker, or attempts to move your machinery to a third-party site or hand it over to local sub-vendors as security.",
    statutoryCounter:
      "Under Bharatiya Nyaya Sanhita (BNS) 2023 Section 316 (Criminal Breach of Trust), a bailee/lessee entrusted with movable plant who dishonestly misappropriates, converts, pledges, or shifts it in violation of the bailment terms commits a cognizable criminal offence. Unlike pure unpaid-invoice disputes (which courts treat as civil under BNS s.318), physical misappropriation or clandestine removal of bailed machinery triggers immediate police intervention and BNSS seizure/superdari.",
    evidenceRequired: [
      "OEM / Aftermarket GPS Telematics ping history showing geofence breach or tamper alert",
      "Hypothecation / Bank Financer NOC confirming lessor's title and serial/chassis numbers",
      "Hire Agreement termination notice revoking lessee's right to possession under Contract Act s.153",
      "Photographs/video of site yard showing unauthorized dismantling or movement",
    ],
    recommendedAction:
      "Dispatch a Fact-Verified Notice with mandatory CC to the jurisdictional Police Station House Officer (SHO) and SP under BNS s.316, attaching chassis/engine numbers to freeze unauthorized highway movement.",
  },
  {
    id: "no-privity-with-project-owner",
    tabLabel: "4. Court Receiver & Sec 9",
    badge: "Order XL CPC + Arb s.9",
    title: "No Direct Contract with Project Owner: Enforcing Demobilization via Court Receiver",
    siteExcuse:
      "The Project Owner's legal team replies: 'We have no privity of contract with your rental company; sort it out with our terminated contractor. Until our final measurement reconciliation finishes in 6 months, nothing leaves the gate.'",
    statutoryCounter:
      "Lack of contractual privity does NOT shield a Project Owner from tortious liability or judicial repossession. While Arbitration Act Section 9 empowers you to obtain urgent interim custody against your lessee-contractor (and even implead third-party custodians holding the asset), an application under Order XL Rule 1 read with Order XXXIX CPC before the jurisdictional Commercial Court lets you join BOTH the Contractor and the Project Owner as defendants, securing an ex-parte Court Receiver with Police Protection to physically demobilize the crane.",
    evidenceRequired: [
      "Complete chain of title: Purchase Invoice, Vahan RC, Insurance Policy & Chassis Plate photos",
      "Proof of Service of the 48-Hour Tortious Conversion Notice on the Project Owner",
      "Calculation of daily ongoing depreciation, EMI burden, and ₹35,000+/day idle-rent loss",
      "Low-bed trailer / craneage mobilization quote demonstrating readiness for immediate removal",
    ],
    recommendedAction:
      "File an urgent Commercial Suit / Order XL Rule 1 Receiver Petition (seeking Section 12A Commercial Courts Act urgent interim-relief exemption) or Section 9 Arbitration Petition with Police Aid direction.",
  },
];

export default function CraneGatePassScenarioTabs() {
  const [activeId, setActiveId] = useState<string>(SCENARIOS[0].id);
  const active = SCENARIOS.find((s) => s.id === activeId) || SCENARIOS[0];

  return (
    <div className="w-full max-w-full">
      <div
        role="tablist"
        aria-label="Crane and Machinery Gate-Pass Lockout Scenarios"
        className="flex flex-wrap gap-2 mb-6"
      >
        {SCENARIOS.map((scenario) => {
          const isSelected = scenario.id === active.id;
          return (
            <button
              key={scenario.id}
              type="button"
              role="tab"
              aria-selected={isSelected}
              onClick={() => setActiveId(scenario.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer border ${
                isSelected
                  ? "bg-[#DC2626] text-white border-[#DC2626] shadow-sm"
                  : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
              }`}
            >
              {scenario.tabLabel}
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-4"
      >
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-red-50 text-[#DC2626] border border-red-200">
            {active.badge}
          </span>
        </div>

        <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 leading-snug">
          {active.title}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white border border-slate-200 rounded-xl p-4">
            <p className="text-[11px] font-extrabold uppercase tracking-wider text-amber-700 mb-1.5">
              Site Gate Excuse / Blockade Tactic
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {active.siteExcuse}
            </p>
          </div>

          <div className="bg-white border border-emerald-200 rounded-xl p-4">
            <p className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-700 mb-1.5">
              Statutory &amp; Tortious Counter-Weapon
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {active.statutoryCounter}
            </p>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-4">
          <p className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500 mb-2">
            BSA 2023 s.63 &amp; Title Evidence Required
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {active.evidenceRequired.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-xs sm:text-sm text-slate-700"
              >
                <span className="text-[#DC2626] font-black mt-0.5">&#10003;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-slate-900 text-white rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-red-400 mb-0.5">
              Immediate Demobilization Action
            </p>
            <p className="text-xs sm:text-sm text-slate-100 font-medium">
              {active.recommendedAction}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
