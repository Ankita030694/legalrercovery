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
    id: "cash-diversion-40-units",
    tabLabel: "Cash Sale Diversion",
    title: "Dealer Sold 40 EVs for Cash & Pocketed Proceeds Without Remitting OEM Invoice",
    cause:
      "Tier-2/3 EV 2W and L3/L5 e-rickshaw dealers collect 100% cash or UPI payments from retail buyers at the showroom, deliver physical scooters/rickshaws off the floor, and divert the proceeds to unrelated personal ventures instead of clearing the OEM's 30-day floor-credit billing.",
    legalBasis:
      "Under Section 25(1) of the Sale of Goods Act, 1930, where an OEM reserves the right of disposal (e.g., retention of Form 21 Sale Certificate and Vahan OEM-to-Dealer chassis clearance until full invoice realization), property in the goods does not pass unconditionally to the dealer. Disposing of OEM-titled inventory and misappropriating sale proceeds attracts criminal breach of trust by an agent/merchant under Section 316(2) and 316(5) of the Bharatiya Nyaya Sanhita (BNS), 2023, alongside immediate NI Act s.138 / PSS s.25 prosecution on security cheques or e-NACH mandates.",
    steps: [
      {
        step: "1. Immediate DMS & Vahan Form 21 Freeze",
        description:
          "Suspend the dealer's DMS login and withhold Form 21 / Vahan dealer-code chassis mapping for all unpaid VINs so unbilled stock cannot be registered at regional RTOs.",
      },
      {
        step: "2. 48-Hour Physical Stock Audit & BG Encashment",
        description:
          "Conduct a videographed showroom/godown VIN inspection to segregate sold-out-of-trust units from unsold floor stock, and simultaneously lodge an unconditional Bank Guarantee invocation with the issuing bank.",
      },
      {
        step: "3. Tri-Channel BNS s.316 + s.138/PSS s.25 Demand Notice",
        description:
          "Present quantified running-ledger security cheques (or trigger e-NACH) after a 7-day pre-presentation intimation, and serve an Advocate Notice citing BNS s.316(5) and Commercial Courts Act s.12A pre-institution mediation.",
      },
    ],
    statutoryRule: "Sale of Goods Act s.25 • BNS s.316(5) • NI Act s.138 / PSS s.25",
  },
  {
    id: "vahan-trade-certificate-lock",
    tabLabel: "Vahan & Trade Cert",
    title: "Rogue Dealer Uses OEM Homologation & Trade Certificate After Termination",
    cause:
      "Even after termination for credit default, a delinquent dealer continues displaying OEM signage, booking customer advances, or attempting to push grey-market / unbilled chassis through regional RTOs using legacy Form 22 copies or the OEM's CMVR Trade Certificate credentials.",
    legalBasis:
      "Under Rule 33–44 and Rule 47 of the Central Motor Vehicles Rules (CMVR), 1989, Trade Certificates and Form 21/22 homologation mappings are strictly tied to authorized OEM-dealer authorization. Once the dealership agreement is terminated for material payment breach, any continued representation or unauthorized RTO filing constitutes passing off under Trade Marks Act s.29/135 and fraud under BNS s.318, entitling the OEM to notify the Transport Commissioner / NIC Vahan helpdesk to delink the dealer code.",
    steps: [
      {
        step: "1. Formal Dealership Termination & Delinking Notice",
        description:
          "Serve a 15-day cure-and-termination notice revoking showroom authorization, Trade Certificate usage, and brand signage rights with immediate effect.",
      },
      {
        step: "2. State Transport Commissioner & Vahan Portal Intimation",
        description:
          "File a formal OEM representation with the jurisdictional RTO and NIC Vahan portal attaching the termination notice to block fresh Form 21 uploads under the cancelled dealer code.",
      },
      {
        step: "3. Commercial Court Ad-Interim Injunction",
        description:
          "Seek an urgent injunction under Order XXXIX Rules 1–2 CPC read with Commercial Courts Act s.12A (urgent interim relief exemption) restraining unauthorized sales and signage use.",
      },
    ],
    statutoryRule: "CMVR 1989 Rules 33–47 • Trade Marks Act s.135 • Commercial Courts Act s.12A",
  },
  {
    id: "subsidy-reconciliation-dispute",
    tabLabel: "PM E-DRIVE / FAME",
    title: "PM E-DRIVE / FAME Subsidy Clawback & Aadhaar KYC Mismatch Dispute",
    cause:
      "Under FAME-II and PM E-DRIVE demand-incentive schemes, the OEM passes upfront price discounts to retail buyers at billing and claims reimbursement from MHI. When dealers upload duplicate Aadhaar IDs, non-existent fleet buyers, or unverified mobile numbers, MHI rejects or claws back lakhs in subsidy, and the dealer refuses to reimburse the OEM.",
    legalBasis:
      "Dealership agreements and MHI Scheme Guidelines place primary KYC verification and invoice-delivery authenticity on the selling dealer. Where MHI rejects or claws back incentive claims due to dealer-level KYC fabrication or non-delivery, the resulting loss is a liquidated contractual indemnity debt recoverable under Section 73–74 and Section 124–125 of the Indian Contract Act, 1872, enforceable via security-deposit set-off and Order XXXVII CPC summary recovery.",
    steps: [
      {
        step: "1. VIN-Wise MHI Rejection Ledger Reconciliation",
        description:
          "Extract the exact MHI portal rejection/clawback reasons (duplicate Aadhaar, mismatch RC, fake fleet invoice) mapped to each dealer invoice and chassis number.",
      },
      {
        step: "2. Contractual Indemnity & Security Deposit Set-Off",
        description:
          "Exercise contractual set-off against pending dealer margin credits, warranty holdbacks, and refundable security deposits, documenting the net shortfall.",
      },
      {
        step: "3. Statutory Indemnity Demand & ODR / Summary Suit",
        description:
          "Issue an Advocate Demand Notice for the net subsidy clawback principal plus 18% contractual interest, escalating to institutional ODR arbitration or Order XXXVII CPC.",
      },
    ],
    statutoryRule: "Indian Contract Act ss.73, 124–125 • Order XXXVII CPC • BSA s.63",
  },
  {
    id: "lithium-battery-warranty-stock",
    tabLabel: "Lithium Battery Stock",
    title: "Unreturned Warranty Lithium Battery Packs & Spare-Parts Credit Default",
    cause:
      "OEMs dispatch high-value LFP/NMC replacement battery packs, BMS controllers, and hub motors to dealers on zero-cost warranty replacement terms (requiring return of failed packs within 15 days) alongside 45-day spare-parts credit. Defaulting dealers hoard or resell the returned/new battery packs in the grey market and refuse to settle spare-parts ledgers.",
    legalBasis:
      "Replacement warranty battery packs supplied on a return-of-defective-core basis are governed by statutory bailment under Sections 148, 151, and 160 of the Indian Contract Act, 1872—title in the failed core remains with the OEM for cell recycling/audit. Unpaid spare-parts invoices are actionable under Sale of Goods Act s.55 and, where the OEM or component supplier holds an Udyam MSME registration, attract mandatory 3x RBI bank-rate compound interest under MSMED Act s.16.",
    steps: [
      {
        step: "1. Serial-Number BMS & Core-Return Audit",
        description:
          "Reconcile BMS serial numbers of dispatched warranty packs against inward-return gate passes and spare-parts GST e-invoices.",
      },
      {
        step: "2. Bailee Conversion & Spare-Parts Demand Notice",
        description:
          "Serve a formal notice under Contract Act s.160 and BNS s.316 demanding physical return of hoarded battery cores within 7 days or payment of full replacement value plus spare-parts arrears.",
      },
      {
        step: "3. MSME Samadhaan / Commercial Court Escalation",
        description:
          "For Udyam-registered component/battery suppliers, file an MSEFC reference under MSMED Act s.18 claiming 3x RBI compound interest; otherwise invoke institutional arbitration.",
      },
    ],
    statutoryRule: "Contract Act ss.148–160 • Sale of Goods s.55 • MSMED Act s.16",
  },
];

export default function EvDealerScenarioTabs() {
  const [activeTabId, setActiveTabId] = useState<string>(SCENARIOS[0].id);
  const activeScenario =
    SCENARIOS.find((s) => s.id === activeTabId) || SCENARIOS[0];

  return (
    <div className="w-full">
      {/* Tab Buttons */}
      <div
        role="tablist"
        aria-label="EV OEM Dealer Default Scenarios"
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
                  ? "bg-[#DC2626] text-white border-[#DC2626] shadow-sm"
                  : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
              }`}
            >
              {scenario.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Scenario Panel */}
      <div
        role="tabpanel"
        className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-5"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-4">
          <h3 className="text-base sm:text-lg font-black text-slate-900 leading-snug">
            {activeScenario.title}
          </h3>
          <span className="inline-block shrink-0 px-3 py-1 rounded-full text-[11px] font-bold bg-slate-900 text-white">
            {activeScenario.statutoryRule}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white border border-slate-200 rounded-xl p-4">
            <p className="text-[11px] font-black uppercase tracking-wider text-amber-700 mb-1.5">
              Commercial Failure Mode
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {activeScenario.cause}
            </p>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl p-4">
            <p className="text-[11px] font-black uppercase tracking-wider text-emerald-700 mb-1.5">
              Statutory &amp; Contractual Remedy
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {activeScenario.legalBasis}
            </p>
          </div>
        </div>

        <div>
          <p className="text-xs font-black uppercase tracking-wider text-slate-900 mb-3">
            3-Step OEM Legal &amp; Portal Action Plan
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {activeScenario.steps.map((item) => (
              <div
                key={item.step}
                className="bg-white border border-slate-200 rounded-xl p-4"
              >
                <p className="text-xs font-bold text-[#DC2626] mb-1.5">
                  {item.step}
                </p>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
