"use client";

import React, { useState } from "react";

interface ScenarioTab {
  id: string;
  tabLabel: string;
  title: string;
  cause: string;
  legalBasis: string;
  steps: {
    step: string;
    description: string;
  }[];
  statutoryRule: string;
}

const SCENARIOS: ScenarioTab[] = [
  {
    id: "civil-site-not-ready",
    tabLabel: "Site Civil / MEP Delay",
    title: "Client's Interior Contractor Delays Server Room, Power & False Ceiling for 6–10 Months",
    cause:
      "Your team delivers ₹1 Cr of Cisco Catalyst switches, HPE servers, Aruba access points, and Hikvision cameras on schedule. You receive the 70% delivery tranche, but the client refuses the 30% installation & UAT milestone because their own civil/MEP contractor has not finished earthing, precision AC, or gypsum ceilings.",
    legalBasis:
      "Under Sections 53 and 54 of the Indian Contract Act, 1872, handing over a dust-free, powered, earthing-compliant server room and cable pathway is a prior reciprocal promise. When the buyer prevents performance of the installation milestone, the contract becomes voidable at the SI's option, or the 30% holdback matures as Deemed Commissioning compensation plus warehousing and warranty-depreciation loss.",
    steps: [
      {
        step: "Issue Formal Site-Non-Readiness Intimation",
        description:
          "Document missing prerequisites (raw UPS power, earthing < 2 ohms, HVAC, structured conduit) via joint site-inspection minutes and registered email.",
      },
      {
        step: "Invoke Contract Act s.53/54 Deemed Commissioning",
        description:
          "Serve a 15-day cure notice declaring that unless a dust-free powered rack room is handed over, the 30% installation holdback stands immediately due and payable.",
      },
      {
        step: "Claim Extended Stay & OEM Warranty Reset Costs",
        description:
          "Quantify engineer idling, extended transit insurance, and OEM SmartNet/CarePack warranty burn incurred while hardware sat boxed in the client's store.",
      },
    ],
    statutoryRule: "Indian Contract Act, 1872 s.53 & s.54 · Sale of Goods Act, 1930 s.44",
  },
  {
    id: "distributor-channel-squeeze",
    tabLabel: "Redington / Ingram Squeeze",
    title: "IT Distributor Debits Channel Line on Day 45 While Enterprise Buyer Delays 180+ Days",
    cause:
      "Authorized distributors (Redington, Ingram Micro, Savex, Iris) enforce strict 30-to-45-day credit limits, auto-debiting your channel finance facility or presenting security PDCs on Day 46. Meanwhile, the enterprise buyer withholds the 20%–30% balance citing internal audit or pending UAT, wiping out the SI's 8%–12% gross margin in penal interest.",
    legalBasis:
      "Under Section 15 and Section 16 of the MSMED Act, 2006, if the SI holds an Udyam Registration, any buyer delaying payment beyond 45 days (even under a sham 'back-to-back' or 'post-UAT' pretext when delivery is complete) owes compound interest at 3x the RBI bank rate. Further, Section 43B(h) of the Income Tax Act disallows the buyer's tax deduction on unpaid Micro/Small enterprise bills.",
    steps: [
      {
        step: "Serve Section 43B(h) & MSMED s.16 Tax-Alert Notice",
        description:
          "Put the client's CFO and Statutory Auditor on formal notice that unpaid hardware/integration invoices risk Income Tax disallowance and 3x RBI interest.",
      },
      {
        step: "Separate Supply Price from Commissioning Fee",
        description:
          "Establish under Sale of Goods Act s.31 & s.42 that title and risk in serialized switches/LED walls passed on E-Way Bill delivery, making supply dues unconditional.",
      },
      {
        step: "File MSEFC Samadhaan / Order XXXVII Summary Suit",
        description:
          "Escalate to the Micro & Small Enterprises Facilitation Council for 90-day statutory conciliation/arbitration, or file an Order XXXVII CPC summary suit on acknowledged POs.",
      },
    ],
    statutoryRule: "MSMED Act, 2006 s.15–18 · Income Tax Act s.43B(h) · Order XXXVII CPC",
  },
  {
    id: "smart-city-sub-vendor",
    tabLabel: "Smart-City / PSU Sub-Vendor",
    title: "Master SI or EPC Prime Withholds CCTV & Command-Center Dues Citing 'Department Not Paid'",
    cause:
      "In Smart-City, Safe-City, or PSU campus projects, a Tier-1 Master System Integrator (MSI) subcontracts passive cabling, IP-CCTV poles, or AV command-center LED walls to a specialist SI. After installation, the MSI refuses payment for 12 months claiming the Municipal Corporation or PSU has not released its milestone tranche.",
    legalBasis:
      "Indian courts consistently hold that an independent subcontract between an MSI and a sub-vendor is distinct from the prime PSU contract unless an explicit, unambiguous 'pay-when-paid' condition precedent is drafted—and even then, the MSI cannot indefinitely delay payment due to its own billing defaults or unrelated SLA penalties with the government agency.",
    steps: [
      {
        step: "Audit Subcontract for Privity & Back-to-Back Clauses",
        description:
          "Verify whether your PO/Work Order ties payment to actual receipt from the PSU or merely specifies a 45-day credit cycle post-installation.",
      },
      {
        step: "Secure Joint Measurement & Go-Live Logs",
        description:
          "Preserve RTSP camera feeds, VMS commissioning screenshots, and joint measurement sheets signed by the MSI's project manager under BSA 2023 s.63.",
      },
      {
        step: "Proceed Against MSI Independent of PSU",
        description:
          "Issue an advocate-drafted demand notice to the MSI (not the PSU) under MSMED Act s.18 or Commercial Courts Act s.12A pre-institution mediation.",
      },
    ],
    statutoryRule: "Contract Act s.53/54 · MSMED Act s.18 · Commercial Courts Act, 2015 s.12A",
  },
  {
    id: "live-use-without-uat",
    tabLabel: "Live Usage Without UAT",
    title: "Client Uses Wi-Fi, CCTV & Boardroom AV Daily While Withholding Final UAT Sign-Off",
    cause:
      "The client's IT team powers on your Cisco/Aruba Wi-Fi controllers, logs into the Hikvision NVR, and conducts boardroom meetings on Crestron AV walls—yet the procurement head refuses to sign the User Acceptance Test (UAT) certificate, citing minor cosmetic punch-list items to hold back ₹25L–₹50L.",
    legalBasis:
      "Under Section 42 of the Sale of Goods Act, 1930, a buyer is deemed to have accepted the goods when they do any act in relation to them inconsistent with the ownership of the seller, or retain them beyond a reasonable time without intimating rejection. Beneficial commercial use of live IT/AV infrastructure estops the buyer from withholding milestone payment on trivial punch-list pretexts.",
    steps: [
      {
        step: "Capture Live Telemetry & OEM Activation Logs",
        description:
          "Extract cloud-controller MAC counts, NVR recording timestamps, and OEM serial warranty activation dates proving live production usage.",
      },
      {
        step: "Authenticate Under BSA 2023 Section 63",
        description:
          "Attach a signed Section 63 Bharatiya Sakshya Adhiniyam electronic evidence certificate to lock admissibility before Commercial Court or Arbitrator.",
      },
      {
        step: "Demand Immediate Deemed UAT & Balance Release",
        description:
          "Serve a legal notice invoking Sale of Goods Act s.42 and Contract Act s.70 (quantum meruit), limiting any minor snag to a proportionate 1%–2% retention.",
      },
    ],
    statutoryRule: "Sale of Goods Act, 1930 s.42 · BSA 2023 s.63 · Contract Act s.70",
  },
];

export default function SiProjectScenarioTabs() {
  const [activeId, setActiveId] = useState<string>(SCENARIOS[0].id);
  const current = SCENARIOS.find((s) => s.id === activeId) || SCENARIOS[0];

  return (
    <div className="w-full max-w-full">
      {/* Tab Buttons */}
      <div
        role="tablist"
        aria-label="System Integrator Recovery Scenarios"
        className="flex flex-wrap gap-2 mb-6"
      >
        {SCENARIOS.map((sc) => {
          const isActive = sc.id === activeId;
          return (
            <button
              key={sc.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveId(sc.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer border ${
                isActive
                  ? "bg-[#DC2626] text-white border-[#DC2626] shadow-sm"
                  : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
              }`}
            >
              {sc.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Scenario Panel */}
      <div
        role="tabpanel"
        className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-5"
      >
        <div>
          <span className="inline-block px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-red-50 text-[#DC2626] border border-red-200 mb-2">
            Creditor Playbook
          </span>
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
            {current.title}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white border border-slate-200 rounded-xl p-4">
            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
              Commercial Bottleneck
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{current.cause}</p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-4">
            <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 mb-1.5">
              Statutory Remedy
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {current.legalBasis}
            </p>
          </div>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
            3-Step Execution Protocol
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {current.steps.map((st, idx) => (
              <div
                key={st.step}
                className="bg-white border border-slate-200 rounded-xl p-4 flex flex-col"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-slate-900">{st.step}</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">{st.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-slate-900 text-slate-100 rounded-xl px-4 py-3 text-xs font-medium flex flex-wrap items-center justify-between gap-2">
          <span className="text-slate-400 uppercase tracking-wider font-bold text-[10px]">
            Governing Provisions:
          </span>
          <span className="text-red-300 font-semibold">{current.statutoryRule}</span>
        </div>
      </div>
    </div>
  );
}
