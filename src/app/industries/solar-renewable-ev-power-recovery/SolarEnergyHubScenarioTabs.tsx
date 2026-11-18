"use client";

import React, { useState } from "react";
import Link from "next/link";

interface SolarEnergyScenario {
  id: string;
  tabLabel: string;
  badge: string;
  title: string;
  ticketBand: string;
  statutoryTrigger: string;
  bottleneck: string;
  legalMechanism: string;
  operationalSteps: {
    step: string;
    detail: string;
  }[];
  recommendedLinks: {
    label: string;
    href: string;
  }[];
}

const SOLAR_ENERGY_SCENARIOS: SolarEnergyScenario[] = [
  {
    id: "opex-resco-ppa",
    tabLabel: "OPEX / RESCO PPA Default",
    badge: "Ticket ₹20L – ₹25 Cr | Arb Act s.9",
    title: "Factory Consuming Rooftop OPEX Solar Power While Defaulting on Monthly PPA Bills & Locking the Gate",
    ticketBand: "₹20,00,000 – ₹25,00,00,000 (monthly kWh tariff arrears + termination buyout value)",
    statutoryTrigger: "Arbitration Act s.9 (Injunction Against Free Consumption + Asset Repossession) + Contract Act s.74",
    bottleneck:
      "Under a 15-to-25-year OPEX/RESCO Power Purchase Agreement (PPA), the solar developer funds 100% of the CapEx and installs serialized Tier-1 PV modules and string inverters on the off-taker's factory roof. When the factory defaults on 3–6 monthly tariff invoices, it often locks rooftop access, blocks O&M engineers, and continues consuming generated solar power for free while contesting the Termination Buyout schedule.",
    legalMechanism:
      "Because the RESCO developer retains legal title to the solar plant until the end of the PPA term, **Section 9 of the Arbitration and Conciliation Act, 1996** empowers the developer to seek urgent interim injunctions before the Commercial Court: (1) restraining the off-taker from unauthorized power consumption or tampering with export-control relays, (2) appointing a Court Receiver for plant inspection/dismantling, and (3) securing the contractual Termination Buyout value.",
    operationalSteps: [
      {
        step: "1. Lock SCADA Generation Logs & PPA Cure Notice",
        detail:
          "Certify inverter SCADA kWh export logs under BSA 2023 s.63 and serve a formal PPA Event-of-Default & Termination Buyout Cure Notice via RPAD and Email.",
      },
      {
        step: "2. Enforce Lawful Curtailment & Title Reservation",
        detail:
          "Invoke contractual remote zero-export / inverter curtailment rights strictly after expiry of the PPA cure period while preserving rooftop safety.",
      },
      {
        step: "3. File Section 9 Arbitration Petition for Receiver & Buyout",
        detail:
          "Move the jurisdictional Commercial Court under Arbitration Act s.9 for an interim injunction against free power draw and protection of module/inverter assets.",
      },
    ],
    recommendedLinks: [
      {
        label: "OPEX / RESCO PPA Buyout Playbook",
        href: "/opex-resco-solar-ppa-tariff-default-termination-buyout-repossession",
      },
      {
        label: "RESCO & CapEx Solar Notice Pack",
        href: "/templates/solar-epc-and-resco-ppa-default-buyout-legal-notice",
      },
      {
        label: "MSME 3x RBI Interest Calculator",
        href: "/tools/msme-delayed-payment-interest-calculator",
      },
    ],
  },
  {
    id: "ci-capex-epc",
    tabLabel: "C&I CapEx EPC Holdback",
    badge: "Ticket ₹8L – ₹5 Cr | s.53/54 & MSMED",
    title: "C&I Rooftop Solar EPC Plant Commissioned, Yet Factory Withholds Final 15–20% Citing Net-Metering Delays",
    ticketBand: "₹8,00,000 – ₹5,00,00,000 (final commissioning & net-metering milestone retention)",
    statutoryTrigger: "Contract Act s.53/54 Deemed Commissioning + MSMED Act s.15–18 + Order XXXVII CPC",
    bottleneck:
      "C&I Solar EPCs typically structure contracts as 80% against module/inverter delivery and mechanical erection, with the final 15–20% tied to DISCOM net-metering or CEIG energization. Factories frequently enjoy daytime captive solar savings on zero-export mode while delaying DISCOM fee deposits, transformer upgrades, or roof-cleaning—and blaming the EPC for dust-induced PR drops to freeze the final 20% indefinitely.",
    legalMechanism:
      "Under **Sections 53 and 54 of the Indian Contract Act, 1872**, where the off-taker fails to perform reciprocal obligations (such as clearing DISCOM load-extension arrears or providing CEIG/site readiness), the EPC's final commissioning milestone matures by **Deemed Commissioning**. Paired with **MSMED Act s.15–18** (3x RBI compound interest) and **Income-tax Act s.43B(h)** tax disallowance pressure, the buyer faces severe statutory cost for holding retention.",
    operationalSteps: [
      {
        step: "1. Compile Mechanical Completion & Zero-Export Generation Proof",
        detail:
          "Attach signed BoM delivery challans, inverter commissioning checklists, CEIG inspection submissions, and emails showing buyer-side DISCOM delays.",
      },
      {
        step: "2. Serve Deemed Commissioning & s.43B(h) Demand Notice",
        detail:
          "Quantify principal retention plus 3x RBI compound interest from Day 46 under MSMED s.16, warning of MSEFC filing and audit disallowance.",
      },
      {
        step: "3. Escalate to MSEFC Samadhaan or Order XXXVII CPC",
        detail:
          "File on MSME Samadhaan for Udyam-registered EPCs or institute an Order XXXVII summary suit based on signed milestone invoices and ledger confirmations.",
      },
    ],
    recommendedLinks: [
      {
        label: "C&I Rooftop EPC Net-Metering Guide",
        href: "/commercial-industrial-rooftop-solar-epc-net-metering-balance-recovery",
      },
      {
        label: "Subcontractor & EPC Recovery India",
        href: "/subcontractor-payment-recovery-india",
      },
      {
        label: "RESCO & CapEx Solar Notice Pack",
        href: "/templates/solar-epc-and-resco-ppa-default-buyout-legal-notice",
      },
    ],
  },
  {
    id: "ev-charging-cpo",
    tabLabel: "EV Charging CPO & Fleet",
    badge: "Ticket ₹3L – ₹3 Cr | BNS s.316 & s.9",
    title: "EV Charge Point Operator (CPO) Fleet-Hub Billing Defaults & Host-Site DC Fast Charger Repossession",
    ticketBand: "₹3,00,000 – ₹3,00,00,000 (fleet kWh charging arrears, landlord revenue share & DC fast chargers)",
    statutoryTrigger: "BSA 2023 s.63 OCPP Session Logs + BNS s.316 Hardware Retention + Arbitration Act s.9",
    bottleneck:
      "EV Charge Point Operators (CPOs) and charger OEMs deploy ₹12L–₹45L 60kW–240kW DC fast chargers at commercial malls, highway plazas, and fleet-hub depots. Two acute failures strike: (1) EV cab/logistics fleet operators default on postpaid OCPP kWh billing cycles, and (2) host-site landlords terminate the site license early and physically block the CPO from uninstalling its owned DC fast chargers and transformers.",
    legalMechanism:
      "Immutable **OCPP 1.6J/2.0.1 charging session logs**, RFID fleet-tag records, and GST e-invoices certified under **BSA 2023 s.63** establish airtight summary liability for postpaid fleet charging dues under **Order XXXVII CPC** and **NI Act s.138**. Against hostile host-site landlords blocking removal of owned DC chargers, **BNS s.316** (criminal breach of trust over bailed/licensed equipment) paired with an **Arbitration s.9** dismantling order secures rapid hardware recovery.",
    operationalSteps: [
      {
        step: "1. Certify OCPP Session Logs & Asset Serial Schedule",
        detail:
          "Export OCPP meter-value kWh logs, fleet RFID authorization trails, and DC charger serial/asset-tag invoices under BSA s.63.",
      },
      {
        step: "2. Suspend Postpaid RFID Access & Demand Hardware Access",
        detail:
          "Issue a 7-day statutory demand for overdue fleet charging invoices and serve a BNS s.316 de-installation access notice on the host landlord.",
      },
      {
        step: "3. File s.9 Repossession / Order 37 Fleet Recovery",
        detail:
          "Pursue Order XXXVII CPC or Section 138 NI Act against fleet defaulters and Section 9 interim dismantling relief against obstructive site hosts.",
      },
    ],
    recommendedLinks: [
      {
        label: "EV Charging CPO & Fleet-Hub Recovery",
        href: "/ev-charging-station-cpo-fleet-hub-landlord-revenue-share-recovery",
      },
      {
        label: "Bulk Defaulter CSV Desk",
        href: "/bulk-recovery-cases-all-in-one-affordable-solutions",
      },
      {
        label: "MSME 3x RBI Interest Calculator",
        href: "/tools/msme-delayed-payment-interest-calculator",
      },
    ],
  },
  {
    id: "bos-substation-stp",
    tabLabel: "BOS Credit, HT/LT & STP/ETP",
    badge: "Ticket ₹2L – ₹4 Cr | Warranty Hold & s.80",
    title: "Solar Module/Inverter Dealer Credit, HT/LT Substation Balances & STP/ETP Plant Holdbacks",
    ticketBand: "₹2,00,000 – ₹4,00,00,000 (BOS dealer credit, CEIG substations, ZLD/STP plants & DISCOM/KUSUM)",
    statutoryTrigger: "Sale of Goods Act + NI Act s.138 + Electricity LPS Rules 2022 & s.86(1)(f) + CPC s.80",
    bottleneck:
      "Solar module/inverter distributors ship containers on 30-to-60-day credit to regional EPCs who vanish after collecting client advances. Meanwhile, HT/LT electrical contractors energize substations with CEIG approval and STP/ETP vendors secure PCB 'Consent to Operate' for factories—only for the buyer to freeze the final 25% balance. Separately, DISCOMs and State Nodal Agencies (PM-KUSUM) delay tariff and subsidy tranches for 6–18 months.",
    legalMechanism:
      "Module and inverter OEMs can combine **PDC enforcement under NI Act s.138** with **contractual serial-number warranty holds** (suspending OEM performance warranty activation until cleared). HT/LT and STP/ETP vendors defeat post-energization/CTO holdbacks via **MSMED s.15–18** and **Order XXXVII CPC**. Against DISCOMs and State Nodal Agencies, creditors invoke **Electricity (Late Payment Surcharge) Rules, 2022**, **Electricity Act s.86(1)(f)** before SERCs, and **Section 80 CPC** statutory notices.",
    operationalSteps: [
      {
        step: "1. Lock Serial Numbers, CEIG / PCB CTO & E-Way Bills",
        detail:
          "Pair module/inverter flash-test serial lists with e-Way Bills, CEIG energization certificates, or State PCB Consent-to-Operate records.",
      },
      {
        step: "2. Trigger NI s.138 / s.80 CPC / LPS Rules Notice",
        detail:
          "Serve 15-day NI s.138 demand on bounced dealer PDCs, 60-day Section 80 CPC notice on government/SNA bodies, or LPS surcharge notice on DISCOMs.",
      },
      {
        step: "3. File Before SERC, MSEFC or Commercial Court",
        detail:
          "Route DISCOM tariff disputes to SERC under s.86(1)(f), Udyam contractor dues to MSEFC, and BOS dealer credit to Commercial Court / Order 37.",
      },
    ],
    recommendedLinks: [
      {
        label: "Solar Module & Inverter Credit Guide",
        href: "/solar-panel-module-inverter-distributor-installer-credit-recovery",
      },
      {
        label: "DISCOM & PM-KUSUM LPS Rules Law",
        href: "/discom-kusum-state-nodal-agency-renewable-payment-delay-lps-rules",
      },
      {
        label: "Section 80 CPC Notice to Government",
        href: "/law/section-80-cpc-notice-to-government",
      },
    ],
  },
];

export default function SolarEnergyHubScenarioTabs() {
  const [activeTabId, setActiveTabId] = useState<string>(SOLAR_ENERGY_SCENARIOS[0].id);
  const activeScenario =
    SOLAR_ENERGY_SCENARIOS.find((item) => item.id === activeTabId) || SOLAR_ENERGY_SCENARIOS[0];

  return (
    <div className="w-full">
      {/* Tab Buttons */}
      <div
        role="tablist"
        aria-label="Solar EPC, RESCO PPA, EV Charging and Power Contractor Recovery Scenarios"
        className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 mb-6"
      >
        {SOLAR_ENERGY_SCENARIOS.map((item) => {
          const isActive = item.id === activeTabId;
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveTabId(item.id)}
              className={`px-3 sm:px-4 py-3 rounded-xl text-left transition-all border cursor-pointer ${
                isActive
                  ? "bg-[#DC2626] text-white border-[#DC2626] shadow-md"
                  : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:border-slate-300"
              }`}
            >
              <span
                className={`block text-[10px] font-bold uppercase tracking-wider mb-0.5 ${
                  isActive ? "text-red-100" : "text-slate-400"
                }`}
              >
                Scenario
              </span>
              <span className="block text-xs sm:text-sm font-extrabold leading-snug">
                {item.tabLabel}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Scenario Panel */}
      <div
        role="tabpanel"
        className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 md:p-7 space-y-5"
      >
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-red-50 text-[#DC2626] border border-red-200">
            {activeScenario.badge}
          </span>
          <span className="text-xs font-semibold text-slate-500">
            {activeScenario.ticketBand}
          </span>
        </div>

        <h3 className="text-lg sm:text-xl font-black text-slate-900 leading-snug">
          {activeScenario.title}
        </h3>

        <div className="bg-slate-900 text-slate-100 rounded-xl p-4 text-xs sm:text-sm">
          <span className="block text-[10px] font-bold uppercase tracking-widest text-red-400 mb-1">
            Primary Statutory Trigger
          </span>
          <p className="font-semibold">{activeScenario.statutoryTrigger}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white border border-slate-200 rounded-xl p-4">
            <p className="text-xs font-extrabold uppercase tracking-wider text-amber-700 mb-1.5">
              Commercial Bottleneck
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {activeScenario.bottleneck}
            </p>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl p-4">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-1.5">
              Creditor Legal Mechanism
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {activeScenario.legalMechanism}
            </p>
          </div>
        </div>

        <div className="space-y-2.5">
          <p className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
            3-Step Execution Protocol
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {activeScenario.operationalSteps.map((op) => (
              <div
                key={op.step}
                className="bg-white border border-slate-200 rounded-xl p-4"
              >
                <p className="text-xs font-extrabold text-[#DC2626] mb-1">{op.step}</p>
                <p className="text-xs text-slate-600 leading-relaxed">{op.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-2 border-t border-slate-200 flex flex-wrap items-center gap-2.5">
          <span className="text-xs font-bold text-slate-500 mr-1">Deep-Dive Guides:</span>
          {activeScenario.recommendedLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-bold bg-white border border-slate-200 text-slate-800 hover:border-[#DC2626] hover:text-[#DC2626] transition-colors"
            >
              {link.label} &rarr;
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
