"use client";

import React, { useState } from "react";
import Link from "next/link";

interface HeavySupplyScenario {
  id: string;
  tabLabel: string;
  title: string;
  statutoryTrigger: string;
  bottleneck: string;
  legalMechanism: string;
  operationalSteps: {
    step: string;
    detail: string;
  }[];
  primaryRoute: {
    label: string;
    href: string;
  };
}

const HEAVY_SUPPLY_SCENARIOS: HeavySupplyScenario[] = [
  {
    id: "rmc-cube-failure",
    tabLabel: "RMC & Cube-Test Bluff",
    title: "Builder Poured Ready-Mix Concrete & Alleged '28-Day Cube Strength Failure' When PDCs Matured",
    statutoryTrigger: "Sale of Goods Act s.42, IS 456:2000 / IS 516 & IBC Section 8",
    bottleneck:
      "After pouring 1,500–2,500 Cu.M of M30/M40 RMC into tower slabs, defaulting developers send a backdated email claiming '28-day compressive strength failed' right before post-dated cheques hit the bank—solely to fabricate a Mobilox pre-existing dispute while continuing construction and selling those exact RERA flats.",
    legalMechanism:
      "Under IS 456:2000 and IS 516, cube sampling and 28-day NABL compression testing require joint witnessing; unilateral un-witnessed site cubes have zero evidentiary value if the plant's retention cubes passed. Moreover, under Sale of Goods Act s.42, embedding concrete into a standing structure without demolition constitutes irrevocable legal acceptance.",
    operationalSteps: [
      {
        step: "1. Lock Automated Batching Printouts & Transit Pour Slips",
        detail:
          "Compile SCADA/batching-plant mix logs, transit mixer GPS/slump records, signed delivery challans, and plant retention-cube NABL lab certificates under BSA 2023 s.63.",
      },
      {
        step: "2. Expose 'Constructed Slab & RERA Sale' Contradiction",
        detail:
          "Serve an Advocate Notice placing on record that the builder never demolished the alleged defective slab and continues marketing the tower under RERA—neutralizing Mobilox dispute bluffs.",
      },
      {
        step: "3. Trigger NI Act s.138, Order 37 or IBC Section 8 (>= ₹1 Cr)",
        detail:
          "Bank maturing PDCs after 7-day intimation for s.138/s.143A prosecution, or serve IBC Form 3/4 (>= ₹1 Cr combined principal + contractual interest) to compel settlement within 10 days.",
      },
    ],
    primaryRoute: {
      label: "Read RMC Cube-Test Dispute Playbook",
      href: "/ready-mix-concrete-rmc-supplier-builder-payment-cube-test-dispute",
    },
  },
  {
    id: "tmt-steel-dharamkanta",
    tabLabel: "TMT Steel & Weighbridge",
    title: "TMT, Structural Steel & HR/CR Coil Distributors Fighting 150-Day Credit Stretch & Weight-Shortage Claims",
    statutoryTrigger: "Order XXXVII CPC, Order XXXVIII Rule 5 & NI Act s.138/s.143A",
    bottleneck:
      "In Mandi Gobindgarh, Raipur, Kalamboli, Jalna, and Ghaziabad steel hubs, a single 30-ton trailer carries ₹18–22 Lakh of principal on a 1.5% trading margin. One defaulting builder or EPC fabricator wipes out 45 good truckloads of profit while inventing belated 'rusting' or 'weight shortage' debits weeks after unloading.",
    legalMechanism:
      "Pairing GST E-Way Bill Part-A/B, certified Dharamkanta weighbridge slips, Mill Test Certificates (MTCs), and site gate-inward stamps creates a liquidated written-contract dossier under Order XXXVII CPC. For stressed builders liquidating unsold units, Order XXXVIII Rule 5 supports urgent attachment before judgment.",
    operationalSteps: [
      {
        step: "1. Assemble the 4-Document Trailer Dossier",
        detail:
          "Index Tax Invoice, E-Way Bill (Part-A & vehicle Part-B), Dharamkanta gross/tare slip, and primary mill MTC batch certificate for every disputed dispatch.",
      },
      {
        step: "2. Pre-Empt Unilateral Debit Notes Under s.42",
        detail:
          "Issue a formal notice establishing that no weight or surface-rust objection was logged on the LR/gate pass at unloading, barring belated set-offs.",
      },
      {
        step: "3. File Order 37 Summary Suit & Director s.141 Cheque Action",
        detail:
          "Prosecute dishonoured PDCs/RTGS-replacement cheques with 20% interim compensation under s.143A alongside Commercial Court summary recovery.",
      },
    ],
    primaryRoute: {
      label: "Read TMT & Structural Steel Recovery Guide",
      href: "/tmt-steel-structural-iron-trader-credit-default-recovery-india",
    },
  },
  {
    id: "chemicals-polymers-dca",
    tabLabel: "Chemicals & Polymer DCA",
    title: "Solvent Tanker 'Purity' Excuses Post-Decanting & Petrochemical DCA Section 140 Subrogation",
    statutoryTrigger: "Sale of Goods Act s.42 (Pre-Decanting Sample) & Contract Act ss.140–141",
    bottleneck:
      "Chemical distributors in Ankleshwar, Vapi, Tarapur, and Bhiwandi face buyers who pump 20 KL of solvent into commingled underground tanks and allege 'moisture/purity variance' 45 days later. Meanwhile, polymer DCAs (PP/HDPE/PVC) have their own Bank Guarantees encashed by RIL/IOCL/GAIL when plastic processors default.",
    legalMechanism:
      "A pre-decanting top/bottom retention sample signed before breaking the tanker valve seal locks quality acceptance under Sale of Goods Act s.42. For polymer DCAs, paying the PSU Principal triggers statutory subrogation under Contract Act ss.140–141—allowing the DCA to step into the Principal's shoes and sue the defaulting processor directly.",
    operationalSteps: [
      {
        step: "1. Enforce Valve-Seal COA & Retention Sample Proof",
        detail:
          "Attach the batch Certificate of Analysis (COA), tanker seal number, and buyer lab sign-off prior to decanting to defeat post-commingling purity claims.",
      },
      {
        step: "2. Invoke Contract Act s.140–141 DCA Subrogation",
        detail:
          "Document the DCA's payment/BG debit to the petrochemical PSU and serve a Subrogation Demand Notice on the defaulting moulding or extrusion unit.",
      },
      {
        step: "3. Activate MSMED s.15–18 (3x RBI) & s.43B(h) Pressure",
        detail:
          "For Udyam-registered chemical, masterbatch, and compound manufacturers, invoke 3x RBI compound interest and Section 43B(h) corporate tax disallowance.",
      },
    ],
    primaryRoute: {
      label: "Read Chemical & Solvent Tanker Recovery Guide",
      href: "/industrial-chemicals-solvents-dyes-pigments-invoice-recovery",
    },
  },
  {
    id: "building-materials-ibc",
    tabLabel: "Morbi Tiles, Barter & IBC s.8",
    title: "Finishing Vendors Pressured Into 'Barter Flats' & Solo IBC Section 8 Action Against Builders (>= ₹1 Cr)",
    statutoryTrigger: "IBC 2016 s.8/s.9 (No 100-Allottee Bar), CERSAI Audit & MSMED s.16",
    bottleneck:
      "Morbi tile makers, toughened-glass processors, sanitaryware brands, plywood wholesalers, and lift OEMs supply at the finishing stage—just when the builder's construction finance dries up—and get pressured to accept overvalued 'barter flats' instead of cash. Worse, many CFOs wrongly assume they need 100 claimants to file IBC.",
    legalMechanism:
      "The 100-allottee / 10% threshold under IBC Section 7 applies ONLY to homebuyer Financial Creditors—never to Section 9 Operational Creditors. A single material supplier owed ₹1 Cr+ (combining principal and contractual invoice interest per Prashat Agarwal NCLAT) can serve a solo Section 8 Form 3 notice, putting the builder's RERA project at IRP risk within 10 days.",
    operationalSteps: [
      {
        step: "1. Audit CERSAI & RERA Encumbrances Before Any Barter",
        detail:
          "Never accept an allotment letter in lieu of cash without bank NOC and CERSAI search; double-mortgaged barter units often leave suppliers unsecured.",
      },
      {
        step: "2. Combine Principal + Contractual Interest to Cross ₹1 Cr",
        detail:
          "Aggregate overdue project invoices and agreed 18%–24% invoice interest clauses to evaluate IBC Section 8 eligibility against corporate real-estate debtors.",
      },
      {
        step: "3. Serve IBC Form 3 / Form 4 or Pre-Demobilization Attachment",
        detail:
          "Dispatch a defect-free Section 8 Demand Notice (10-day statutory cure window), or pursue MSEFC / Order XXXVIII attachment before site contractors demobilize.",
      },
    ],
    primaryRoute: {
      label: "Read Solo IBC Section 8 Builder Recovery Guide",
      href: "/ibc-section-8-by-building-material-suppliers-against-real-estate-builder",
    },
  },
];

export default function ChemicalsRmcHubScenarioTabs() {
  const [activeTabId, setActiveTabId] = useState<string>(HEAVY_SUPPLY_SCENARIOS[0].id);

  const activeScenario =
    HEAVY_SUPPLY_SCENARIOS.find((s) => s.id === activeTabId) || HEAVY_SUPPLY_SCENARIOS[0];

  return (
    <div className="w-full space-y-5">
      {/* Tab Buttons */}
      <div
        role="tablist"
        aria-label="Heavy-supply recovery scenarios"
        className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3"
      >
        {HEAVY_SUPPLY_SCENARIOS.map((scenario) => {
          const isActive = scenario.id === activeTabId;
          return (
            <button
              key={scenario.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveTabId(scenario.id)}
              className={`px-3 py-2.5 sm:px-4 sm:py-3 rounded-xl text-xs sm:text-sm font-bold text-left transition-all border cursor-pointer ${
                isActive
                  ? "bg-[#DC2626] text-white border-[#DC2626] shadow-md"
                  : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              {scenario.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Panel */}
      <div
        role="tabpanel"
        className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 md:p-7 space-y-5"
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-slate-200 pb-4">
          <h3 className="text-base sm:text-lg md:text-xl font-black text-slate-900 leading-snug">
            {activeScenario.title}
          </h3>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold bg-red-50 text-[#DC2626] border border-red-200 shrink-0 self-start sm:self-center">
            {activeScenario.statutoryTrigger}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white border border-slate-200 rounded-xl p-4 space-y-1.5">
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-amber-700 block">
              Commercial Failure Mode
            </span>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {activeScenario.bottleneck}
            </p>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl p-4 space-y-1.5">
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-700 block">
              Statutory &amp; Evidentiary Remedy
            </span>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {activeScenario.legalMechanism}
            </p>
          </div>
        </div>

        <div className="space-y-2.5">
          <p className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
            3-Step Institutional Execution Rail
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {activeScenario.operationalSteps.map((item) => (
              <div
                key={item.step}
                className="bg-white border border-slate-200 rounded-xl p-3.5 space-y-1.5"
              >
                <p className="text-xs font-bold text-[#DC2626]">{item.step}</p>
                <p className="text-xs text-slate-600 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-2">
          <Link
            href={activeScenario.primaryRoute.href}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-bold transition-colors"
          >
            <span>{activeScenario.primaryRoute.label}</span>
            <span>&rarr;</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
