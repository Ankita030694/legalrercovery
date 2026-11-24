"use client";

import React, { useState } from "react";

interface ScenarioTab {
  id: string;
  tabLabel: string;
  title: string;
  trigger: string;
  statutoryShield: string;
  actionSteps: {
    step: string;
    detail: string;
  }[];
  citation: string;
}

const SCENARIOS: ScenarioTab[] = [
  {
    id: "rogue-scrap-sale",
    tabLabel: "1. Sold to Scrap / Buyer",
    title: "Lessee Sold Rented Crane, DG Set, or Shuttering to a Scrap Dealer or Third-Party Contractor",
    trigger:
      "Your defaulting lessee stops paying monthly hire charges and clandestinely sells your serial-numbered excavator, DG set, or cuplock scaffolding to a local scrap yard or competing contractor against cash or RTGS.",
    statutoryShield:
      "Under Section 27 of the Sale of Goods Act, 1930 (Nemo dat quod non habet), a person who does not own goods cannot convey a better title than they possess. Because a lessee is merely a bailee under Section 148 of the Indian Contract Act, 1872, the third-party buyer acquires ZERO legal title—even if they paid full cash without knowing of the lease. Simultaneously, the dishonest disposal constitutes Criminal Breach of Trust under Section 316 BNS (and Dishonest Misappropriation under Section 314 BNS), while the buyer faces liability for receiving stolen/misappropriated property under Section 317 BNS.",
    actionSteps: [
      {
        step: "Freeze Asset Coordinates & Dispatch BNS s.316 Police Intimation",
        detail:
          "Capture GPS/telematics ping logs and chassis/engine serial numbers. File a written complaint at the local police station naming both the lessee's directors and the third-party possessor under BNS ss. 316 & 317.",
      },
      {
        step: "Serve Statutory Nemo Dat Demand Notice on the Buyer",
        detail:
          "Send a Fact-verified notice via Speed Post RPAD & WhatsApp to the third-party buyer attaching the original purchase invoice, e-Way bill, and Lease Agreement, putting them on formal notice that their possession is void ab initio.",
      },
      {
        step: "Move Magistrate for BNSS s.497 / s.503 Superdari Release",
        detail:
          "Once police seize the machinery under BNSS, apply immediately under Section 497/503 BNSS (following Sunderbhai Ambalal Desai) for interim Superdari custody so the crane or DG set is returned to your yard rather than rusting in a police compound.",
      },
    ],
    citation: "Sale of Goods Act s.27 • BNS ss.316 & 317 • BNSS ss.497 & 503",
  },
  {
    id: "unauthorized-pledge",
    tabLabel: "2. Pledged to Financier",
    title: "Lessee Pledged Your Leased Equipment as Collateral to a Local Moneylender or NBFC",
    trigger:
      "To raise emergency working capital, the lessee hands over possession of your rented medical C-Arm, piling rig, or IT workstation fleet to a third-party lender or sub-contractor as 'security' for an unrelated loan.",
    statutoryShield:
      "Under Section 178A of the Indian Contract Act, 1872, a valid pledge by a person in possession requires that the pledgor obtained possession under a voidable contract (Section 19/19A)—NOT under a mere bailment or operating lease. A bailee/lessee has no authority to create a valid pledge over bailed machinery. The financier's purported lien is void against the true lessor.",
    actionSteps: [
      {
        step: "Issue Immediate Title & Non-Consent Notice to the Pledgee",
        detail:
          "Serve the financier/lender with original OEM invoices, asset insurance policy, and Lease Deed proving exclusive ownership and demanding immediate surrender without claiming any storage or loan lien.",
      },
      {
        step: "File Order XL Rule 1 CPC / Arbitration s.9 Receiver Petition",
        detail:
          "Seek an ex-parte Court Receiver or Advocate Commissioner appointment to inventory and take physical custody of the pledged machinery before the financier attempts a private distress auction.",
      },
      {
        step: "Join Both Lessee & Uncooperative Pledgee in Recovery Claim",
        detail:
          "Claim full replacement value, accrued hire charges until actual repossession, and mesne profits/damages for wrongful detention under Contract Act ss.160–161.",
      },
    ],
    citation: "Contract Act ss.148, 160, 178A • CPC Order XL Rule 1 • Arbitration Act s.9",
  },
  {
    id: "nclt-cirp-moratorium",
    tabLabel: "3. Lessee in NCLT CIRP",
    title: "Lessee Admitted to NCLT Insolvency — Resolution Professional Cites Section 14 Moratorium",
    trigger:
      "Your corporate lessee enters Corporate Insolvency Resolution Process (CIRP) under IBC 2016. The Interim Resolution Professional (IRP/RP) refuses demobilization of your ₹2 Cr crane or 300 leased laptops, claiming Section 14(1)(d) prohibits recovery of property in the debtor's possession.",
    statutoryShield:
      "While Section 14(1)(d) bars recovery of property 'occupied by or in the possession of' the Corporate Debtor during moratorium, Section 18 Explanation (a) of the IBC explicitly EXCLUDES 'assets owned by a third party in possession of the corporate debtor held under trust or under contractual arrangements including bailment' from the definition of 'assets' the RP can take control of. Similarly, Section 36(4)(a)(iv) excludes third-party contractual/bailment assets from the Liquidation Estate. An operating lease is a bailment—NOT an asset of the debtor.",
    actionSteps: [
      {
        step: "Serve Formal Section 18 Explanation (a) Exclusion Demand on IRP/RP",
        detail:
          "Within 7 days of public announcement, write to the IRP/RP enclosing the Operating Lease Deed, OEM tax invoices, fixed asset register extract, and GST e-Way bills demanding segregation and exclusion from the Information Memorandum.",
      },
      {
        step: "File Operational Creditor Claim (Form B) ONLY for Unpaid Rent",
        detail:
          "File Form B strictly for pre-CIRP unpaid monthly rental arrears—never surrender ownership title or characterize the operating lease as a financial debt/sale.",
      },
      {
        step: "Move NCLT under Section 60(5) IBC if RP Refuses Handover",
        detail:
          "If the RP withholds demobilization or attempts to include your machinery in the resolution plan, file an urgent IA under Section 60(5) IBC seeking directions for immediate asset return and post-CIRP rental costs as CIRP costs under Regulation 31.",
      },
    ],
    citation: "IBC 2016 s.18 Expl.(a), s.36(4)(a)(iv), s.60(5) & CIRP Reg. 31",
  },
  {
    id: "gps-tampered-shifting",
    tabLabel: "4. Clandestine Shifting",
    title: "Lessee Disabled GPS Telematics & Shifted Machinery to an Undisclosed Site",
    trigger:
      "The lessee disconnects your IoT/GPS tracker on a crawler crane or chiller, stops answering calls, and moves the asset across state borders to a third-party subcontractor's project site.",
    statutoryShield:
      "Clandestine removal of bailed equipment coupled with disabling tracking hardware provides direct mens rea evidence of dishonest misappropriation and Criminal Breach of Trust under Section 316 BNS, defeating the standard 'pure civil rental dispute' defense. Under CPC Order XL Rule 1 and Order XXXIX Rules 1–2, Civil/Commercial Courts grant ex-parte Court Receivers when there is imminent danger of asset dissipation.",
    actionSteps: [
      {
        step: "Preserve Tamper Alerts with BSA 2023 s.63 Certificate",
        detail:
          "Export the last known GPS coordinates, ignition cut-off logs, and SIM-disconnect timestamps certified under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023.",
      },
      {
        step: "Obtain Ex-Parte Court Receiver Order (Order XL Rule 1 CPC)",
        detail:
          "Move the Commercial Court (or High Court under Section 9 Arbitration Act) for an ex-parte Receiver authorized to enter any project site with local police assistance to seize and seal the machinery.",
      },
      {
        step: "Trigger Multi-Channel Criminal + Civil Enforcement",
        detail:
          "Simultaneously serve the BNS s.316 complaint at both the origin and destination police stations so the asset is intercepted before dismantling or re-painting.",
      },
    ],
    citation: "BNS s.316 • BSA 2023 s.63 • CPC Order XL Rule 1 • Arbitration Act s.9",
  },
];

export default function LesseeSaleScenarioTabs() {
  const [activeTabId, setActiveTabId] = useState<string>(SCENARIOS[0].id);
  const active = SCENARIOS.find((s) => s.id === activeTabId) || SCENARIOS[0];

  return (
    <div className="w-full">
      <div
        role="tablist"
        aria-label="Equipment lessor crisis scenarios"
        className="flex flex-wrap gap-2 mb-5"
      >
        {SCENARIOS.map((tab) => {
          const isSelected = tab.id === activeTabId;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={isSelected}
              onClick={() => setActiveTabId(tab.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                isSelected
                  ? "bg-[#DC2626] text-white shadow-sm"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200"
              }`}
            >
              {tab.tabLabel}
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-4"
      >
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h3 className="text-base sm:text-lg font-black text-slate-900">{active.title}</h3>
          <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-red-50 text-[#DC2626] border border-red-200">
            {active.citation}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white border border-slate-200 rounded-xl p-4">
            <p className="text-[11px] font-black uppercase tracking-wider text-slate-400 mb-1">
              Commercial Trigger
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{active.trigger}</p>
          </div>
          <div className="bg-white border border-emerald-200 rounded-xl p-4">
            <p className="text-[11px] font-black uppercase tracking-wider text-emerald-700 mb-1">
              Statutory Shield
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {active.statutoryShield}
            </p>
          </div>
        </div>

        <div className="space-y-2.5">
          <p className="text-[11px] font-black uppercase tracking-wider text-slate-500">
            3-Step Creditor Execution Protocol
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {active.actionSteps.map((item, idx) => (
              <div
                key={item.step}
                className="bg-white border border-slate-200 rounded-xl p-3.5 shadow-xs"
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="w-5 h-5 rounded-full bg-slate-900 text-white text-[10px] font-black flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <p className="text-xs font-bold text-slate-900 leading-snug">{item.step}</p>
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
