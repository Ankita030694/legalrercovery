"use client";

import React, { useState } from "react";
import Link from "next/link";

interface EquipmentRentalScenario {
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

const EQUIPMENT_RENTAL_SCENARIOS: EquipmentRentalScenario[] = [
  {
    id: "crane-gate-pass",
    tabLabel: "Crane & Gate-Pass Lockout",
    badge: "Ticket ₹15L – ₹8 Cr | Detinue & Arb s.9",
    title: "Builder Terminated the EPC Contractor & Locked Your ₹4 Crore Rented Crane or Piling Rig Inside the Site Gate",
    ticketBand: "₹15,00,000 – ₹8,00,00,000 (asset replacement value + daily idle-rent arrears)",
    statutoryTrigger: "Third-Party Ownership (Nemo Dat) + Tort of Detinue/Conversion + CPC Order XL Rule 1 / Arb s.9",
    bottleneck:
      "When a project developer terminates an EPC contractor mid-project, site security routinely refuses to issue a demobilization Gate-Pass for third-party rented tower cranes, crawler cranes, piling rigs, or boom lifts—illegally holding the equipment hostage as leverage for unrelated contractor disputes.",
    legalMechanism:
      "A principal employer has **zero lien over third-party bailed machinery** owned by an independent equipment lessor (Contract Act s.148–161 & Sale of Goods Act s.27). Once RC books, tax invoices, e-Way Bills, and hire challans are served on the Project Owner, continued detention constitutes the **tort of detinue and conversion**, making the builder directly liable for daily idle-rent losses and urgent **Arbitration Act s.9 / Order XL Rule 1 Receiver** seizure.",
    operationalSteps: [
      {
        step: "1. Serve Title Proof & Gate-Pass Release Notice on Project Owner",
        detail:
          "Dispatch RC book, OEM invoice, chassis/serial schedule, and e-Way Bill directly to the Builder/Employer demanding unconditional 72-hour Gate-Pass release.",
      },
      {
        step: "2. Quantify Daily Idle-Rent Liability & Police Station CC",
        detail:
          "Put the site principal on notice for daily idle hire charges from the date of refusal and CC the jurisdictional SHO under BNS s.316 where unauthorized retention persists.",
      },
      {
        step: "3. Move Commercial Court Under Arb s.9 or Order XL Rule 1",
        detail:
          "Seek an urgent ex-parte Court Receiver or Advocate Commissioner order authorizing police-assisted demobilization and safe transport out of the project gate.",
      },
    ],
    recommendedLinks: [
      {
        label: "Gate-Pass Obstruction & Crane Playbook",
        href: "/builder-employer-blocking-gate-pass-demobilization-rented-crane-machinery",
      },
      {
        label: "3-in-1 Rental & Gate-Pass Notice Pack",
        href: "/templates/equipment-rental-arrears-gate-pass-repossession-bns-316-notice",
      },
      {
        label: "Contractor Payment Recovery Desk",
        href: "/recovery/contractor-payment",
      },
    ],
  },
  {
    id: "scaffolding-bns-316",
    tabLabel: "Scaffolding & BNS s.316",
    badge: "Ticket ₹5L – ₹3 Cr | BNS s.316 Bailee",
    title: "Contractor Stopped Paying Monthly Rent & Won't Return Cuplock Scaffolding or Aluminium Formwork",
    ticketBand: "₹5,00,000 – ₹3,00,00,000 (running monthly hire meter + lost-material replacement value)",
    statutoryTrigger: "BNS 2023 s.316(2)/(3) Criminal Breach of Trust + Contract Act s.160–161 + Police Intimation",
    bottleneck:
      "Scaffolding, Mivan aluminium formwork, and H-frame shuttering are un-registered movable assets. Rogue subcontractors frequently shift rented steel props to undisclosed third-party sites, ignore return challans, or sell the material as scrap—leaving the lessor with unpaid rent and zero physical inventory.",
    legalMechanism:
      "Under **Indian Contract Act s.148–161**, the contractor is a bailee bound to return the exact hired quantity upon lease termination. Dishonest retention, clandestine shifting, or unauthorized disposal triggers **BNS 2023 Section 316** (Criminal Breach of Trust, erstwhile IPC s.406) alongside civil liability for both **running hire charges** until physical return and **full replacement value**.",
    operationalSteps: [
      {
        step: "1. Reconcile Dispatch vs Return Challans & Weighbridge Slips",
        detail:
          "Prepare a reconciled tonnage/piece ledger from signed outward delivery challans, e-Way Bills, and partial return gate slips.",
      },
      {
        step: "2. Dispatch 3-in-1 Bailee Return Notice with Police CC",
        detail:
          "Terminate the hire agreement, demand return within 7 days, quantify running hire + replacement value, and CC the jurisdictional Police Station under BNS s.316.",
      },
      {
        step: "3. Execute Superdari / Order XXXVII CPC Recovery",
        detail:
          "Pursue BNSS s.497/503 Superdari release if seized by police from third-party yards, alongside Order XXXVII CPC summary recovery for hire arrears.",
      },
    ],
    recommendedLinks: [
      {
        label: "Unreturned Scaffolding BNS s.316 Guide",
        href: "/unreturned-rented-scaffolding-shuttering-formwork-bns-316-recovery",
      },
      {
        label: "BNS s.318 Cheating vs Civil Dispute",
        href: "/law/bns-318-cheating-vs-civil-dispute",
      },
      {
        label: "3-in-1 Rental & Gate-Pass Notice Pack",
        href: "/templates/equipment-rental-arrears-gate-pass-repossession-bns-316-notice",
      },
    ],
  },
  {
    id: "corporate-it-daas",
    tabLabel: "IT Laptops & DaaS Defaults",
    badge: "Ticket ₹4L – ₹2.5 Cr | MDM & BNS s.316",
    title: "Funded Startup Laid Off Remote Staff, Defaulted on Rental Invoices & Can't Account for Leased MacBooks",
    ticketBand: "₹4,00,000 – ₹2,50,00,000 (DaaS monthly rental arrears + unreturned MacBook/workstation buyout)",
    statutoryTrigger: "ABM / Windows Autopilot MDM Lock + BNS s.316 against Directors + Residual Buyout Value",
    bottleneck:
      "Device-as-a-Service (DaaS) and corporate IT lessors ship 50–500 MacBooks, ThinkPads, and GPUs to remote employees of VC-funded startups. When runway dries up and mass layoffs occur, the corporate entity stops paying monthly rentals and fails to retrieve devices from ex-employees.",
    legalMechanism:
      "Enforce contractual **Apple Business Manager (ABM) / Windows Autopilot MDM device-lock clauses** strictly after written default-cure expiry, rendering unreturned hardware unusable without wiping ownership records. Simultaneously serve **BNS s.316** bailee-breach and **Contract Act s.160–161** demand notices on the company and authorized signatories for **residual buyout value + overdue rentals**.",
    operationalSteps: [
      {
        step: "1. Freeze Serial Registry & MDM Telemetry Logs",
        detail:
          "Export serial/IMEI/UUID schedules, delivery PODs, and BSA s.63 certified MDM check-in logs before initiating device lock.",
      },
      {
        step: "2. Serve Cure Notice & Conditional MDM Lock Warning",
        detail:
          "Give the corporate lessee a 7-day window to clear arrears or surrender devices at designated pickup hubs before triggering remote MDM lock.",
      },
      {
        step: "3. File Bulk Arrears + Residual Buyout Claim",
        detail:
          "Enforce bounced security cheques under NI Act s.138 and recover residual buyout value via Order XXXVII CPC or Arbitration.",
      },
    ],
    recommendedLinks: [
      {
        label: "Corporate Laptop & MacBook DaaS Guide",
        href: "/corporate-it-laptop-macbook-workstation-rental-startup-default-recovery",
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
    id: "dg-mhe-medical-av",
    tabLabel: "DG, MHE, Medical & AV Gear",
    badge: "Ticket ₹2L – ₹4 Cr | Logbooks & s.152",
    title: "DG Sets, Forklifts, ICU Ventilators & LED Walls: Minimum-Hour Arrears, Abuse Damage & Safe Repossession",
    ticketBand: "₹2,00,000 – ₹4,00,00,000 (minimum monthly guarantee, fuel/battery abuse & clinical/event gear)",
    statutoryTrigger: "Contract Act s.151–152 Bailee Care + Telematics Logbooks + Patient-Safe Clinical Handover",
    bottleneck:
      "DG set and chiller vendors face disputes over minimum monthly hour guarantees and adulterated-diesel engine damage. Forklift/MHE lessors suffer deep-cycle battery abuse, hospital medical lessors risk clinical liability when repossessing ICU ventilators/C-Arms, and AV/LED rental houses face post-event bounced cheques.",
    legalMechanism:
      "Signed daily operator logbooks and **BSA s.63 telematics hour-meter logs** defeat minimum-hour disputes in Order XXXVII suits. Under **Contract Act s.151–152**, lessees are liable for operator negligence and contaminated-fuel damage beyond fair wear-and-tear. For hospital ICU/C-Arm equipment, issuing a **7-to-14-day Patient-Safe Clinical Handover Notice** insulates the lessor before Order XL Receiver repossession.",
    operationalSteps: [
      {
        step: "1. Lock Operator Logbooks, QC Check-In & Damage Reports",
        detail:
          "Pair telematics hour-meter exports with signed check-out/check-in QC challans, OEM repair estimates, and fuel/battery inspection photos.",
      },
      {
        step: "2. Issue Tailored Statutory Notice (Clinical / Event / Industrial)",
        detail:
          "Serve a 7/14-day clinical handover notice for hospital gear, NI s.138 notice for bounced event cheques, or s.152 damage demand for DG/MHE abuse.",
      },
      {
        step: "3. Repossess via Section 9 / Order XL & Enforce Arrears",
        detail:
          "Execute multi-site asset repossession through a Court Receiver while recovering minimum monthly guarantee arrears and repair costs.",
      },
    ],
    recommendedLinks: [
      {
        label: "DG Set, Chiller & Compressor Recovery",
        href: "/diesel-generator-dg-set-temporary-chiller-load-bank-rental-recovery",
      },
      {
        label: "Hospital ICU & Medical Rental Recovery",
        href: "/medical-icu-equipment-c-arm-ventilator-hospital-rental-default-recovery",
      },
      {
        label: "Forklift, MHE & Pallet-Pooling Recovery",
        href: "/forklift-mhe-pallet-pooling-warehouse-equipment-leasing-recovery",
      },
    ],
  },
];

export default function EquipmentRentalHubScenarioTabs() {
  const [activeId, setActiveId] = useState<string>(EQUIPMENT_RENTAL_SCENARIOS[0].id);
  const activeScenario =
    EQUIPMENT_RENTAL_SCENARIOS.find((s) => s.id === activeId) || EQUIPMENT_RENTAL_SCENARIOS[0];

  return (
    <div className="w-full">
      {/* Tab Buttons */}
      <div className="flex flex-wrap gap-2 mb-6" role="tablist" aria-label="Equipment Rental Scenarios">
        {EQUIPMENT_RENTAL_SCENARIOS.map((scenario) => {
          const isActive = scenario.id === activeScenario.id;
          return (
            <button
              key={scenario.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveId(scenario.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer border ${
                isActive
                  ? "bg-[#DC2626] text-white border-[#DC2626] shadow-md"
                  : "bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200"
              }`}
            >
              {scenario.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Scenario Card */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 md:p-7">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-red-50 text-[#DC2626] border border-red-200">
            {activeScenario.badge}
          </span>
          <span className="text-xs font-semibold text-slate-500">
            {activeScenario.statutoryTrigger}
          </span>
        </div>

        <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-3">
          {activeScenario.title}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
          <div className="bg-white border border-slate-200 rounded-xl p-4">
            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
              Commercial Bottleneck
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {activeScenario.bottleneck}
            </p>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl p-4">
            <p className="text-[11px] font-bold uppercase tracking-wider text-[#DC2626] mb-1">
              Statutory &amp; Enforcement Mechanism
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {activeScenario.legalMechanism}
            </p>
          </div>
        </div>

        <div className="mb-5">
          <p className="text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-2.5">
            3-Step Creditor Execution Protocol
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {activeScenario.operationalSteps.map((item) => (
              <div
                key={item.step}
                className="bg-white border border-slate-200 rounded-xl p-3.5"
              >
                <p className="text-xs font-bold text-slate-900 mb-1">{item.step}</p>
                <p className="text-xs text-slate-600 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2.5 pt-3 border-t border-slate-200">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mr-1">
            Related Playbooks:
          </span>
          {activeScenario.recommendedLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-semibold bg-white border border-slate-200 text-slate-800 hover:border-[#DC2626] hover:text-[#DC2626] transition-colors"
            >
              {link.label} &rarr;
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
