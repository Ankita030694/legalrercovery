"use client";

import React, { useState } from "react";
import Link from "next/link";

interface LogisticsScenario {
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

const LOGISTICS_SCENARIOS: LogisticsScenario[] = [
  {
    id: "ftl-carrier-lien",
    tabLabel: "FTL / PTL & Carrier Lien",
    title: "Unpaid Bilty Ledgers, Bogus Damage Debits & Lawful Cargo Lien",
    statutoryTrigger: "Contract Act s.170–171, Carriage Act s.16 & Raman Iron Foundry",
    bottleneck:
      "Fleet operators routinely hold an active truckload hostage for six-month-old freight arrears without a General Lien clause on the Goods Receipt (Bilty)—inviting BNS criminal intimidation or theft FIRs from shippers. Meanwhile, corporate shippers arbitrarily cut 15–30% of admitted freight bills citing unverified 'transit shortage' debit notes even after signing clean PODs or claiming marine transit insurance.",
    legalMechanism:
      "Distinguish statutory Particular Lien (Section 170, limited to the current consignment's freight) from contractual General Lien (enforceable via explicit Bilty/Contract terms plus immediate formal Carrier-Lien Intimation Notice). Simultaneously, invoke clean POD estoppel, the 180-day Carriage by Road Act s.16 notice bar, and Union of India v. Raman Iron Foundry to bar unilateral set-offs of unliquidated claims against admitted freight bills.",
    operationalSteps: [
      {
        step: "1. Audit GR / Bilty Lien Clause & POD Cleanliness",
        detail:
          "Verify whether overdue freight belongs to the active consignment (Particular Lien) or older trips (requires General Lien wording on the GR) and pull clean consignee-stamped PODs and E-Way Bills.",
      },
      {
        step: "2. 48-Hour Carrier Lien Intimation or Set-Off Rebuttal",
        detail:
          "Serve an advocate-signed Lien Intimation Notice before off-loading cargo to prevent criminal conversion allegations, or issue a Raman Iron Foundry rebuttal demanding marine-insurance claim disclosures.",
      },
      {
        step: "3. Order XXXVII Summary Suit / MSME 3x Interest",
        detail:
          "Convert signed PODs, GST invoices, and rate contracts into liquidated claims under Order XXXVII CPC (Commercial Court >= ₹3L) or Udyam MSME s.16 3x RBI Bank Rate compound interest.",
      },
    ],
    primaryRoute: {
      label: "Read Carrier Lien Law Guide (Current vs Past Cargo)",
      href: "/transporter-carrier-lien-holding-cargo-unpaid-freight-carriage-act",
    },
  },
  {
    id: "detention-reefer",
    tabLabel: "Halting, Demurrage & Reefers",
    title: "Factory Gate Trailer Detention, Container Demurrage & Cold-Chain Spoilage",
    statutoryTrigger: "BSA 2023 s.63 Telemetry, Carriage Act s.10/12 & Contract Act s.73",
    bottleneck:
      "Plant security and storekeepers deliberately withhold gate-in/gate-out stamps on driver PODs so accounts departments can strike off ₹2,500–₹6,000/day halting charges while passing shipping-line container detention onto the carrier. On cold-chain lanes, consignors load +12°C warm produce into -18°C reefer trailers without blast-chilling and withhold ₹15–₹25 Lakh in freight citing spoilage.",
    legalMechanism:
      "Replace missing physical gate stamps with Section 63 BSA 2023 certified electronic records: AIS-140 GPS geofence entry/exit coordinates, FASTag toll-plaza timestamps, and GST E-Way Bill validity-extension logs. On reefer claims, continuous cargo-box vs ambient return-air telemetry proves the unit maintained set-point and invokes Section 10/12 inherent-vice and improper pre-cooling defenses.",
    operationalSteps: [
      {
        step: "1. Compile BSA s.63 Telematics & E-Way Bundle",
        detail:
          "Export AIS-140 GPS geofence pings, FASTag plaza logs, E-Way extension records, and continuous reefer pulp/return-air charts certified under Section 63 BSA 2023.",
      },
      {
        step: "2. Itemized Halting & Free-Hour Breach Notice",
        detail:
          "Separate base freight from rate-contract excess detention hours (24/48h free window) and port/ICD container detention receipts to prevent full-bill withholding.",
      },
      {
        step: "3. Defeat Spoilage Counterclaims & Enforce Recovery",
        detail:
          "Put the consignor on notice under Carriage by Road Act s.10/12 exceptions for warm-loading, blocking illegal debit notes before Commercial Court or arbitration.",
      },
    ],
    primaryRoute: {
      label: "Read Truck Halting & Container Demurrage Playbook",
      href: "/truck-detention-halting-charges-container-demurrage-recovery",
    },
  },
  {
    id: "cha-3pl-warehouse",
    tabLabel: "CHAs, Forwarders & 3PL",
    title: "ICEGATE Duty Advances, Abandoned Containers & 3PL Dead-Stock Racks",
    statutoryTrigger: "Contract Act s.170 & s.222, Commercial Courts s.2(1)(c)(iv)/(v)",
    bottleneck:
      "Customs House Agents (CHAs) and freight forwarders earn modest agency fees while advancing ₹5L–₹40L on client ICEGATE customs duty challans, THC, and CFS charges—yet face shipping-line demurrage suits as 'Consignee/Notify Party' when importers abandon containers. Similarly, 3PL warehouses are left holding 20,000 dead-stock D2C SKUs occupying 500+ pallets with months of unpaid WMS rent.",
    legalMechanism:
      "Under Section 222 of the Indian Contract Act, 1872, the importer/principal is statutorily bound to indemnify the CHA/forwarder for all lawful payments and liabilities incurred in agency execution, backed by Delivery Order (DO) and House Bill of Lading (HBL) holds. For 3PL fulfillment centers, Section 170 Bailee Lien paired with statutory valuation, 15-day public auction disposal notice, and deficit summary recovery clears blocked pallet racks lawfully.",
    operationalSteps: [
      {
        step: "1. Freeze Delivery Order / HBL & Serve s.222 Indemnity",
        detail:
          "Hold original DO/HBL release where permissible and serve an immediate Section 222 Contract Act indemnity notice putting the importer on notice for accumulating CFS/line demurrage.",
      },
      {
        step: "2. 3PL Inventory Valuation & 15-Day Auction Notice",
        detail:
          "For abandoned warehouse stock, document pallet-day arrears, run independent stock valuation, and dispatch a tri-channel 15-day Bailee Lien Sale Notice before disposal.",
      },
      {
        step: "3. Recover Uncovered Deficit & Minimum Pallet Lock-In",
        detail:
          "Credit net auction proceeds transparently against accrued WMS storage/pick-pack dues and pursue any shortfall via Section 43B(h) MSME or Order XXXVII CPC action.",
      },
    ],
    primaryRoute: {
      label: "Read CHA Customs Duty & Freight Forwarder Recovery Guide",
      href: "/freight-forwarder-cha-customs-duty-ocean-freight-reimbursement-recovery",
    },
  },
  {
    id: "dedicated-aggregator",
    tabLabel: "Dedicated Fleets & Aggregators",
    title: "Minimum-Km Lock-In Breaches & Courier Negative Seller Wallets",
    statutoryTrigger: "Contract Act s.73–74, IT Act s.10A Clickwrap & Bulk CSV Engine",
    bottleneck:
      "E-commerce, quick-commerce, and dairy shippers persuade fleet operators to finance custom-bodied or EV trucks on 36-month Minimum Monthly Guarantee contracts—then slash routes overnight, leaving fleet owners facing NBFC vehicle repossession. Simultaneously, courier aggregators accumulate thousands of -₹15,000 to -₹5,00,000 D2C seller wallets when RTO surges and volumetric weight audits hit after COD payouts.",
    legalMechanism:
      "For dedicated fleet lock-ins, enforce fixed monthly standing-charge minimums and unamortized custom CapEx damages under Sections 73–74 Contract Act. For shipping aggregators and hyperlocal couriers, clickwrap merchant shipping agreements (valid under IT Act s.10A) paired with AWB/RTO/volumetric-scan CSV logs power simultaneous 1,000+ Email, WhatsApp, and Speed Post RPAD demand waves.",
    operationalSteps: [
      {
        step: "1. Quantify Fixed Standing & Custom CapEx Shortfall",
        detail:
          "Compute monthly minimum-km guarantee deficits, idle driver wages, and unamortized EV/body CapEx under the Master Transport Agreement.",
      },
      {
        step: "2. Batch-Ingest Negative Wallet & Volumetric Ledgers",
        detail:
          "For aggregators, upload CSV batches mapping Seller ID, AWB count, RTO charges, volumetric audit photos, and COD remittance dates.",
      },
      {
        step: "3. Execute Tri-Channel Bulk Notices & ODR Settlements",
        detail:
          "Dispatch advocate notices with 15-day payment links, escalating non-payers into neutral institutional ODR or Commercial Court summary proceedings.",
      },
    ],
    primaryRoute: {
      label: "Read Dedicated Fleet Minimum-Km Shortfall Guide",
      href: "/dedicated-fleet-contract-minimum-km-guarantee-shortfall-recovery",
    },
  },
];

export default function LogisticsHubScenarioTabs() {
  const [activeId, setActiveId] = useState<string>(LOGISTICS_SCENARIOS[0].id);
  const current =
    LOGISTICS_SCENARIOS.find((s) => s.id === activeId) || LOGISTICS_SCENARIOS[0];

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-sm">
      <div className="border-b border-slate-200 pb-4 mb-5">
        <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#DC2626] block mb-1">
          Interactive Logistics Segment Explorer
        </span>
        <p className="text-base sm:text-xl font-bold text-slate-900 tracking-tight">
          Select Your Logistics Vertical to Inspect Statutory Remedies &amp; Execution Rails
        </p>
        <p className="text-xs sm:text-sm text-slate-600 mt-1">
          Switch across FTL/PTL Carrier Lien, Halting &amp; Reefers, CHAs/3PL Warehousing, and Dedicated Fleet/Courier Aggregator desks.
        </p>
      </div>

      {/* Tabs */}
      <div
        className="flex flex-wrap gap-2 mb-6 border-b border-slate-100 pb-3"
        role="tablist"
        aria-label="Logistics operator verticals"
      >
        {LOGISTICS_SCENARIOS.map((tab) => {
          const isActive = tab.id === activeId;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveId(tab.id)}
              className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                isActive
                  ? "bg-[#DC2626] text-white shadow-sm"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              {tab.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Tab Panel */}
      <div className="space-y-5" role="tabpanel">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100">
          <h3 className="text-base sm:text-lg font-bold text-slate-900">{current.title}</h3>
          <span className="inline-block px-2.5 py-1 bg-red-50 text-[#DC2626] rounded-md text-[11px] font-bold border border-red-200 self-start sm:self-auto">
            {current.statutoryTrigger}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-amber-50/70 border border-amber-200 rounded-xl p-4">
            <p className="text-[11px] font-extrabold uppercase tracking-wider text-amber-800 mb-1.5">
              Operational Bottleneck &amp; Counterclaim Trap
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {current.bottleneck}
            </p>
          </div>
          <div className="bg-emerald-50/70 border border-emerald-200 rounded-xl p-4">
            <p className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-800 mb-1.5">
              Creditor-Grade Statutory Weapon
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {current.legalMechanism}
            </p>
          </div>
        </div>

        <div>
          <p className="text-xs font-extrabold uppercase tracking-wider text-slate-500 mb-2.5">
            3-Step Commercial Recovery Sequence
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {current.operationalSteps.map((item) => (
              <div
                key={item.step}
                className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5"
              >
                <p className="text-xs sm:text-sm font-bold text-slate-900">{item.step}</p>
                <p className="text-xs text-slate-600 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100">
          <Link
            href={current.primaryRoute.href}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#DC2626] hover:text-[#B91C1C] hover:underline"
          >
            <span>{current.primaryRoute.label}</span>
            <span aria-hidden="true">&rarr;</span>
          </Link>
          <Link
            href="/templates/transporter-freight-detention-carrier-lien-legal-notice"
            className="text-xs font-semibold text-slate-600 hover:text-slate-900 underline"
          >
            Open Freight &amp; Carrier-Lien Template Pack &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
