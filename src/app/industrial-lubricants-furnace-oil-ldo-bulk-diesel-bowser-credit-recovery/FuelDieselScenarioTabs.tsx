"use client";

import React, { useState } from "react";

interface ScenarioTab {
  id: string;
  tabLabel: string;
  title: string;
  debtorTactic: string;
  statutoryCounter: string;
  actionSteps: {
    step: string;
    detail: string;
  }[];
  legalProvision: string;
}

const SCENARIOS: ScenarioTab[] = [
  {
    id: "driver-slip-dispute",
    tabLabel: "Driver-Signed Fuel Slips",
    title: "Fleet Owner Refuses 15-Day Highway Pump Credit Claiming 'Driver Stole or Left'",
    debtorTactic:
      "After running ₹8–₹35 lakh of High-Speed Diesel (HSD) on 15-day fleet credit at a highway petrol pump, the transport company or logistics contractor refuses payment, claiming the truck driver who signed the pump's indent slip 'left employment', 'filled excess without approval', or 'forged the vehicle number'.",
    statutoryCounter:
      "Under Section 188 and Section 237 of the Indian Contract Act, 1872 (Ostensible Authority of Agent), once a fleet operator issues an account opening form, numbered fuel indent book, or driver authorization list to a petrol pump, the driver acts within implied and ostensible authority for every refuelling until written revocation is served. Combined with pump dispenser nozzle-totalizer logs, CCTV vehicle-plate grabs, and FASTag/GPS entry timestamps, the signed fuel indent constitutes a written acknowledgment for an Order XXXVII CPC Summary Suit.",
    actionSteps: [
      {
        step: "Freeze & Export Pump Forecourt Trail",
        detail:
          "Compile carbon-copy signed indent slips, POS/automation nozzle meter readings matching exact date-time stamps, and forecourt ANPR/CCTV frames showing the fleet truck registration.",
      },
      {
        step: "Serve Ostensible-Authority & Order 37 Notice",
        detail:
          "Issue a Fact-Verified Notice invoking Contract Act s.237 ostensible agency and demanding settlement of the consolidated fortnightly statement within 7 days.",
      },
      {
        step: "File Order XXXVII Summary Suit + NI s.138",
        detail:
          "Present any standing fleet security cheque and institute an Order XXXVII CPC summary suit where the defendant cannot defend without court leave.",
      },
    ],
    legalProvision: "Contract Act ss.188, 237 | CPC Order XXXVII | BSA 2023 s.63",
  },
  {
    id: "bowser-rfid-default",
    tabLabel: "Doorstep Diesel Bowser",
    title: "Mining / Infra Contractor Defaults on Doorstep Mobile Diesel Bowser Deliveries",
    debtorTactic:
      "An EPC road contractor, stone crusher, or mining sub-contractor onboarded by a doorstep diesel-delivery startup consumes ₹15 lakh to ₹1.2 Crore of bulk HSD across excavators and DG sets over 15–30 days, then withholds payment citing 'site supervisor mismatch' or 'quantity variance at remote quarry'.",
    statutoryCounter:
      "PESO-licensed mobile diesel bowsers operate on calibrated digital flow-meters, geo-fenced GPS coordinates, and RFID asset tags or OTP-verified site-engineer sign-offs. Under Section 42 of the Sale of Goods Act, 1930, once bulk diesel is decanted into the contractor's static tank or earthmoving equipment and consumed without a contemporaneous dip-rod protest, quantity objections are legally estopped. Digital RFID/flow-meter logs certified under BSA 2023 s.63 qualify as liquidated written contracts under Order XXXVII CPC.",
    actionSteps: [
      {
        step: "Lock IoT Flow-Meter & Geo-Fence Logs",
        detail:
          "Export tamper-evident digital bowser delivery challans, Legal Metrology calibration certificates, GPS decanting pins, and site-engineer OTP/app confirmations with a BSA s.63 certificate.",
      },
      {
        step: "Issue Dual-Track Notice to Principal & EPC",
        detail:
          "Serve statutory demand on the defaulting sub-contractor while marking the principal mining/infra company if RA bill deductions or escrow holds apply.",
      },
      {
        step: "Seek Order XXXVIII Rule 5 Asset Attachment",
        detail:
          "If the contractor is demobilizing machinery from the quarry or highway site, move immediately for Attachment Before Judgment under Order XXXVIII Rule 5 CPC.",
      },
    ],
    legalProvision: "Sale of Goods Act s.42 | CPC Order XXXVII & Order XXXVIII r.5 | BSA s.63",
  },
  {
    id: "furnace-oil-ldo-quality",
    tabLabel: "Furnace Oil & LDO Cuts",
    title: "Boiler / Rolling Mill Raises Post-Burning Viscosity or Water-Cut Debit Notes",
    debtorTactic:
      "After unloading and burning 20–40 KL tankers of Furnace Oil (FO), Light Diesel Oil (LDO), or Industrial Bio-Diesel over 30–60 days, a textile, ceramic, or steel rolling mill issues an arbitrary 15–25% debit note alleging 'high water/sediment content', 'sludge clogging', or 'low calorific value'.",
    statutoryCounter:
      "Industrial FO/LDO tankers are dispatched with sealed refinery/terminal batch Certificates of Analysis (COA), pre-unloading dip measurements, and sample-bottle retention at the buyer's gate. Under Section 42 of the Sale of Goods Act, 1930, burning the entire tanker load inside boilers without preserving a joint sealed sample or obtaining an independent NABL lab test before consumption operates as irrevocable deemed acceptance—rendering belated debit notes legally void.",
    actionSteps: [
      {
        step: "Produce Sealed Tanker COA & Weighbridge Slip",
        detail:
          "Attach the refinery/terminal density-at-15°C COA, E-Way Bill, Dharamkanta gross/tare weighment slip, and security-gate unloading time-log.",
      },
      {
        step: "Repudiate Unilateral Debit Note",
        detail:
          "Send a Fact-Verified Notice rejecting the belated debit note under Sale of Goods Act s.42 and demanding full GST/VAT invoice value plus 18–24% contractual interest.",
      },
      {
        step: "Escalate via MSMED s.16 or Commercial Court",
        detail:
          "For Udyam-registered bio-diesel/oil blenders, file before MSEFC for 3x RBI compound interest; for larger traders, invoke Commercial Courts Act s.12A mediation and suit.",
      },
    ],
    legalProvision: "Sale of Goods Act ss.16, 42 | MSMED Act ss.15–18 | Commercial Courts Act s.12A",
  },
  {
    id: "lubricant-pdc-bounce",
    tabLabel: "Lube Distributor PDCs",
    title: "OEM Cutting-Oil & Hydraulic-Oil Distributor Bounces Security Cheques",
    debtorTactic:
      "Industrial lubricant, CNC cutting-oil, and hydraulic-oil distributors extending 45–60 day credit to auto-ancillary units, machine shops, and factory OEMs receive 'Account Closed' or 'Funds Insufficient' memos on PDCs, with the buyer claiming 'the cheque was only a security deposit'.",
    statutoryCounter:
      "The Supreme Court in Sripati Singh v. State of Jharkhand (2021) ruled that a cheque handed over as security matures into a legally enforceable instrument under Section 138 of the Negotiable Instruments Act, 1881 the moment the underlying 45–60 day lubricant credit falls due. Unlike HSD/FO, industrial lubricants attract 18% GST—so GSTR-1/GSTR-2B input tax credit availed by the buyer serves as conclusive statutory admission of delivery and debt.",
    actionSteps: [
      {
        step: "Reconcile Ledger & GSTR-2B Acceptance",
        detail:
          "Verify that credit notes for empty barrels or volume schemes are adjusted so the cheque amount does not exceed the exact net ledger balance.",
      },
      {
        step: "Dispatch 30-Day Section 138 Statutory Notice",
        detail:
          "Within 30 days of the bank return memo, serve a formal s.138/s.141 demand notice on the company and all signatory/managing directors.",
      },
      {
        step: "Claim 20% Interim Deposit Under s.143A",
        detail:
          "Upon filing the Magistrate complaint, move an application under Section 143A NI Act for mandatory 20% interim compensation.",
      },
    ],
    legalProvision: "NI Act 1881 ss.138, 139, 141 & 143A | Sripati Singh (2021) | GSTR-2B Admission",
  },
];

export default function FuelDieselScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(SCENARIOS[0].id);
  const current = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full">
      <div
        role="tablist"
        aria-label="Industrial lubricant, furnace oil and bulk diesel default scenarios"
        className="flex flex-wrap gap-2 mb-5 border-b border-slate-200 pb-3"
      >
        {SCENARIOS.map((tab) => {
          const isSelected = tab.id === activeTab;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={isSelected}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                isSelected
                  ? "bg-[#DC2626] text-white shadow-sm"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {tab.tabLabel}
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-5"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-4">
          <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
            {current.title}
          </h3>
          <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold bg-slate-900 text-white shrink-0">
            {current.legalProvision}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-red-50/70 border border-red-200 rounded-xl p-4">
            <p className="text-[11px] font-bold uppercase tracking-wider text-[#DC2626] mb-1.5">
              Fleet / Mill / Contractor Default Tactic
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {current.debtorTactic}
            </p>
          </div>
          <div className="bg-emerald-50/70 border border-emerald-200 rounded-xl p-4">
            <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 mb-1.5">
              Creditor Statutory Counter-Playbook
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {current.statutoryCounter}
            </p>
          </div>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
            3-Step Legal Execution Sequence
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {current.actionSteps.map((item, idx) => (
              <div
                key={item.step}
                className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs"
              >
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#DC2626] text-white text-xs font-bold mb-2">
                  {idx + 1}
                </span>
                <p className="text-xs sm:text-sm font-bold text-slate-900 mb-1">{item.step}</p>
                <p className="text-xs text-slate-600 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
