"use client";

import React, { useState } from "react";
import Link from "next/link";

interface ProblemTab {
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

const PROBLEMS: ProblemTab[] = [
  {
    id: "service-backlog",
    tabLabel: "Service Backlog (>15 Days)",
    title: "Electric Scooter Stranded at Workshop for Weeks Due to Spare Parts Shortage",
    cause:
      "EV owners across India frequently face situations where their electric two-wheeler is dumped at an authorized service station for weeks or months. Workshops cite severe supply-chain shortages, delayed battery modules, or unapproved warranty authorisations from the OEM headquarters, while refusing to provide a loaner scooter or transport compensation.",
    legalBasis:
      "Under Section 2(11) of the Consumer Protection Act, 2019, depriving a consumer of their purchased vehicle for unreasonable durations without providing substitute mobility constitutes gross 'deficiency in service'. Consumer Commissions routinely hold that repairs taking more than 15-21 days without legitimate technical justification entitle the owner to taxi/fuel conveyance allowances (₹300–₹500/day) plus punitive damages.",
    steps: [
      {
        step: "Secure Stamped Job Card with Accurate Inward Timestamp",
        description:
          "Never leave your EV without an authorized Job Sheet recording the exact date of deposit, odometer reading, battery state-of-charge, and reported mechanical/electrical faults.",
      },
      {
        step: "Issue a 7-Day Completion & Courtesy Mobility Demand via Email",
        description:
          "Send an email to the dealer principal and OEM customer care putting them on notice to return the repaired vehicle within 7 days or provide an equivalent EV loaner scooter.",
      },
      {
        step: "Serve Formal Legal Notice Demanding Daily Conveyance Reimbursement",
        description:
          "If the vehicle remains grounded beyond 15 days, dispatch a statutory legal notice demanding vehicle handover, daily travel compensation, and reservation of rights to file for full refund.",
      },
    ],
    statutoryRule: "Section 2(11) CPA 2019 & CCPA Auto-Service Directives",
  },
  {
    id: "battery-degradation",
    tabLabel: "Battery Claim Rejected",
    title: "Drastic Battery Range Drop: OEM Repudiates Warranty on False Pretexts",
    cause:
      "The EV battery is the most expensive sub-assembly, accounting for 35%–50% of the vehicle cost. When the battery health degrades prematurely (e.g., real-world range collapses from 100 km to 30 km within 12–18 months), manufacturers often reject warranty replacement claims by alleging 'water ingress', 'rat bite / physical impact', or 'improper charging cycle', without producing certified diagnostic test logs.",
    legalBasis:
      "Most EV brands promise 3-year or 8-year warranties guaranteeing at least 70%–80% State of Health (SOH). Under Section 2(10) (defect in goods) and Section 2(47) (unfair trade practice) of the CPA 2019, arbitrary repudiation of warranty without an AIS-156 compliant technical laboratory report is invalid in court. Under Section 38(2)(c), Consumer Commissions direct government-approved labs (ARAI / ICAT) to test the cell pack at the OEM's expense.",
    steps: [
      {
        step: "Capture Screen Telematics & Battery Health Diagnostic Reports",
        description:
          "Photograph the dashboard range indicator, app charging analytics, and demand a written printout of the BMS battery cell-balancing diagnostic report from the service scanner.",
      },
      {
        step: "Rebut Water Ingress or Abuse Allegations in Writing",
        description:
          "If the workshop orally claims water damage, demand written photographs of the sealed IP67 battery enclosure showing external breaches. A certified IP67 pack cannot suffer water entry under normal rain conditions.",
      },
      {
        step: "Serve Statutory Demand for Free Battery Pack Replacement",
        description:
          "Demand free installation of a brand-new, non-refurbished battery pack with full warranty carryover, citing Chapter VI Product Liability obligations.",
      },
    ],
    statutoryRule: "Section 2(10), Section 84 CPA 2019 & AIS-156 Safety Norms",
  },
  {
    id: "bms-thermal-stall",
    tabLabel: "Sudden Cutoff / Stall",
    title: "Sudden Power Shutdown While Driving / Thermal Runaway Hazard",
    cause:
      "Defective battery management systems (BMS), motor controller overheating, or faulty throttle sensors frequently cause electric scooters to abruptly lose power mid-traffic, shift into reverse unprompted, or lock up the rear wheel, exposing the rider to grave accidents on highway traffic.",
    legalBasis:
      "An unexpected vehicular shutdown during active riding is an inherently dangerous manufacturing defect governed by Chapter VI (Product Liability) of the Consumer Protection Act, 2019. Under Section 84, a product manufacturer is strictly liable for harm, personal danger, or property damage caused by design defects, defective construction, or failure to conform to express safety standards.",
    steps: [
      {
        step: "Document Incident Time, Traffic Conditions, and Dash Warnings",
        description:
          "Note down the exact speed, road gradient, ambient temperature, and dashboard error codes (e.g., 'Thermal Shutdown', 'Motor Overheat') when the stall occurred.",
      },
      {
        step: "Refuse to Accept Repaired Vehicle Without Road-Test Certification",
        description:
          "Insist that the service centre provide a signed engineering safety certificate certifying that the controller, throttle wiring, and thermal management firmware have been stress-tested.",
      },
      {
        step: "Demand Total Vehicle Replacement or 100% Refund with Interest",
        description:
          "Because sudden cutoffs endanger human life, consumer courts routinely order complete replacement of the vehicle or refund of the entire ex-showroom price under Section 39(1)(b) & (c).",
      },
    ],
    statutoryRule: "Section 84 & 86 CPA 2019 (Strict Product Liability)",
  },
  {
    id: "charger-electronics",
    tabLabel: "Charger / Electronics",
    title: "Faulty Home Charger, DC Converter, or TFT Touchscreen Screen Glitch",
    cause:
      "Authorized service centres often claim that proprietary home charging units, DC-DC convertors, keyless lock modules, or touchscreen displays are 'accessories' or 'wear-and-tear components' subject to only 6 months warranty, despite sales brochures stating bumper-to-bumper vehicle coverage.",
    legalBasis:
      "Under Section 2(47) of the CPA 2019, creating misleading distinctions between the core vehicle and essential operating hardware required to charge or operate the vehicle amounts to an unfair trade practice. Without an operable home charger or working dashboard, an EV cannot legally or practically function as motor vehicle under the Motor Vehicles Act.",
    steps: [
      {
        step: "Preserve the Original Purchase Invoice & Warranty Terms Booklet",
        description:
          "Check whether the portable or wall charger was billed in the unified vehicle invoice and verify the express exclusions in the warranty handbook.",
      },
      {
        step: "Demand Immediate Replacement Under Comprehensive Vehicle Warranty",
        description:
          "Submit the malfunctioning hardware with receipt of surrender and demand replacement under the standard 3-year mechanical/electrical vehicle warranty.",
      },
      {
        step: "Serve Notice to OEM for Misleading Advertisement & Unfair Practice",
        description:
          "If the dealer refuses warranty repair, issue a legal notice demanding rectification and highlighting complaints before the Central Consumer Protection Authority (CCPA).",
      },
    ],
    statutoryRule: "Section 2(47) CPA 2019 & CCPA Misleading Ads Regulations",
  },
  {
    id: "unauthorized-charges",
    tabLabel: "Illegal Service Charges",
    title: "Workshop Demanding Paid Inspection or Labor for Warranty Replacements",
    cause:
      "When components fail under active factory warranty, service centers frequently attempt to charge consumers 'handling fees', 'diagnostic scanner charges', 'freight charges for battery shipment to factory', or 'labor charges', claiming only the physical spare part is free.",
    legalBasis:
      "A statutory manufacturer warranty implies that defect diagnosis, removal, factory freight, and re-installation labor must be borne exclusively by the manufacturer and dealer. Demanding labor or freight charges to rectify a manufacturing defect constitutes illegal extortion of funds and unfair trade practice under Section 2(47) of CPA 2019.",
    steps: [
      {
        step: "Refuse to Pay Unofficial Diagnostic or Freight Estimates",
        description:
          "Demand a written justification citing the specific clause in the owner's manual that permits levying freight or labor for in-warranty repairs.",
      },
      {
        step: "Pay Under Protest If Vehicle Is Held Hostage",
        description:
          "If the service center refuses to release your vehicle without payment, write 'Paid Under Protest & Subject to Legal Challenge' across the invoice and payment receipt.",
      },
      {
        step: "Recover Full Amount with 18% Interest & Harassment Penalty",
        description:
          "Add these illegal charges to your statutory legal notice, claiming refund with punitive interest and filing an e-Jagriti consumer grievance.",
      },
    ],
    statutoryRule: "Section 2(47) CPA 2019 & National Consumer Helpline Directives",
  },
];

export default function EvServiceDelayProblemTabs() {
  const [activeTabId, setActiveTabId] = useState<string>(PROBLEMS[0].id);
  const activeProblem = PROBLEMS.find((p) => p.id === activeTabId) || PROBLEMS[0];

  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 p-5 sm:p-7 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-4 mb-6">
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-slate-900">
            Select Your EV Service or Battery Dispute Scenario
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Click through common failure modes to view the exact statutory violation and remedial steps.
          </p>
        </div>
        <span className="self-start sm:self-auto px-2.5 py-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 rounded-full border border-emerald-200">
          CPA 2019 Remedy Matrix
        </span>
      </div>

      {/* Tabs Horizontal Scroll */}
      <div className="flex gap-2 overflow-x-auto pb-3 mb-6 scrollbar-thin">
        {PROBLEMS.map((problem) => {
          const isActive = problem.id === activeTabId;
          return (
            <button
              key={problem.id}
              type="button"
              onClick={() => setActiveTabId(problem.id)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                isActive
                  ? "bg-slate-900 text-white shadow-md shadow-slate-900/10"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              {problem.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Tab Content Display */}
      <div className="space-y-6">
        <div className="bg-slate-50 rounded-xl p-4 sm:p-6 border border-slate-200">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
            <h4 className="text-base sm:text-lg font-bold text-slate-900">
              {activeProblem.title}
            </h4>
            <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-red-100 text-red-800 border border-red-200">
              {activeProblem.statutoryRule}
            </span>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
            <div>
              <strong className="text-slate-900 block font-semibold mb-1">
                The Practical Problem:
              </strong>
              <p>{activeProblem.cause}</p>
            </div>

            <div>
              <strong className="text-slate-900 block font-semibold mb-1">
                Statutory Consumer Law Position:
              </strong>
              <p>{activeProblem.legalBasis}</p>
            </div>
          </div>
        </div>

        {/* Action Steps */}
        <div>
          <h4 className="text-xs uppercase tracking-wider font-extrabold text-slate-500 mb-3">
            Recommended Step-by-Step Remedial Action
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
            {activeProblem.steps.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-4 border border-slate-200 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-slate-900 text-white text-xs font-bold mb-2">
                    {idx + 1}
                  </span>
                  <h5 className="font-bold text-slate-900 text-xs sm:text-sm mb-1.5">
                    {item.step}
                  </h5>
                  <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Embedded Callout Link */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-red-50/70 border border-red-200 rounded-xl p-3.5 text-xs text-red-900">
          <div>
            <strong className="font-bold">Need to put the EV company on statutory notice?</strong>
            <p className="text-red-700 mt-0.5">
              Draft a formal 15-day demand notice holding the OEM &amp; Service Workshop jointly liable.
            </p>
          </div>
          <Link
            href="/legal-notice-charges"
            className="self-start sm:self-auto font-bold text-red-700 underline hover:text-red-800 whitespace-nowrap"
          >
            Check Legal Notice Pricing →
          </Link>
        </div>
      </div>
    </div>
  );
}
