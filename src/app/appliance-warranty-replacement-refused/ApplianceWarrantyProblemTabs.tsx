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
    id: "led-oled-tv",
    tabLabel: "LED / OLED Smart TV",
    title: "Display Horizontal/Vertical Lines, Ghosting or Motherboard Power Failure",
    cause:
      "Consumer electronics brands frequently claim television screen lines or backlighting failures are caused by 'internal panel damage' or 'external pressure', attempting to repudiate warranty coverage. In reality, panel bonding faults (COF/TAB gate driver degradation) and mainboard power surge failures are inherent manufacturing flaws under normal domestic usage. When panel repair costs exceed 70% of TV purchase value, brands delay spare parts indefinitely instead of providing a replacement unit.",
    legalBasis:
      "Under Section 2(10) of the Consumer Protection Act, 2019, any imperfection in quality or failure to meet standard durability constitutes a statutory defect. In repeated rulings (including Sony India Pvt. Ltd. v. Bikash Debnath), consumer courts have established that a brand cannot reject warranty by alleging 'physical damage' without an independent laboratory technical report. If a panel fails within the standard or extended warranty period and parts are unavailable within 14 days, the consumer is legally entitled to a brand-new replacement or 100% refund.",
    steps: [
      {
        step: "Capture High-Resolution Video & Serial Plate",
        description:
          "Record clear video footage showing the TV model sticker, serial number, clean external display glass with zero external cracks, and the persistent display defect while cycling through different inputs.",
      },
      {
        step: "Demand Detailed Physical Job Sheet",
        description:
          "When the brand technician inspects the TV, refuse to sign any job card stating 'Customer Induced Damage' or 'Liquid Ingress'. Insist on an explicit observation recording normal external condition and electrical display failure.",
      },
      {
        step: "Serve Formal Advocate Notice for Replacement",
        description:
          "If the manufacturer refuses panel replacement or delays parts beyond 14 days, dispatch a formal statutory advocate legal notice demanding immediate unit replacement or 100% invoice refund plus interest within 15 days.",
      },
    ],
    statutoryRule: "Section 2(10) & Section 84(1)(a) Consumer Protection Act, 2019",
  },
  {
    id: "refrigerator",
    tabLabel: "Refrigerator Cooling",
    title: "Inverter Compressor Failure, Gas Choking or Food Spoilage Due to No Cooling",
    cause:
      "Refrigerators sold with 10-year or 20-year compressor warranties often face unfair trade practices when the compressor trips or burns out. Authorized service centres frequently demand exorbitant labor charges, transportation costs, or nitrogen flushing and refrigerant gas refill fees (claiming 'only the bare compressor is free, gas is chargeable'). Additionally, service centres take 3 to 6 weeks to source parts while domestic groceries and medicines spoil.",
    legalBasis:
      "Under Section 2(47) of the Consumer Protection Act, 2019, promising a '10-Year Warranty' while charging mandatory ancillary costs or refusing timely repair constitutes an unfair trade practice. Consumer commissions have repeatedly ruled that an essential household appliance like a refrigerator cannot be left dysfunctional for weeks; repeated cooling failure within the first 1–2 years entitles the buyer to an entirely new refrigerator plus compensation for spoiled food items and mental distress.",
    steps: [
      {
        step: "Document Internal Temperature & Perishables Loss",
        description:
          "Log thermometer readings or take photographic proof of melted freezer frost and spoiled food items. Retain chemist receipts if temperature-sensitive medications (like insulin) were compromised.",
      },
      {
        step: "Contest Bogus Ancillary Service Charges",
        description:
          "Submit a written email rejection of any gas refilling or transport charges demanded during warranty. Quote the warranty certificate and National Consumer Helpline guidelines forbidding hidden repair charges.",
      },
      {
        step: "Trigger Nodal Escalation & Legal Demand",
        description:
          "Escalate to the brand's Head of Customer Service. If unrectified within 7 working days, serve a statutory legal notice seeking total unit replacement and compensation for consequential domestic loss.",
      },
    ],
    statutoryRule: "Section 2(47) Unfair Trade Practice & Section 39(1)(b) CPA 2019",
  },
  {
    id: "washing-machine",
    tabLabel: "Washing Machine Drum/PCB",
    title: "Excessive Vibration, Motor Jam, Error Codes (dE/IE/OE) & Motherboard Burnout",
    cause:
      "Front-load and top-load washing machines frequently develop balance ring ruptures, spider arm corrosion, inverter drive motor failures, or PCB motherboard moisture shorts. Service technicians often visit 3 to 5 times, replacing minor sensors or rubber gaskets without curing the core mechanical defect. When the machine continues to malfunction, the service franchise marks the job ticket as 'Resolved' on their internal portal without customer consent.",
    legalBasis:
      "Under the 'Repeated Failure Doctrine' affirmed by the National Consumer Disputes Redressal Commission (NCDRC), a consumer is not obligated to endure endless trial-and-error repairs of a lemon product. Three unsuccessful repair attempts for the same underlying mechanical or electronic defect during the warranty period legally establish an inherent manufacturing defect, triggering mandatory product replacement under Section 39(1)(b) or full price refund under Section 39(1)(c).",
    steps: [
      {
        step: "Compile All Past Service Ticket IDs & Invoices",
        description:
          "Collect every SMS confirmation, service call docket number, and physical job sheet proving recurring breakdowns for the identical error code or mechanical vibration symptom.",
      },
      {
        step: "Challenge Fraudulent 'Ticket Closed' Status",
        description:
          "Email the brand's Grievance Officer immediately if a technician closes your service request without resolving the error. Demand written technical acknowledgment of the persistent defect.",
      },
      {
        step: "Issue Pre-Litigation Legal Demand Notice",
        description:
          "Instruct an advocate to issue a statutory notice to the manufacturer and selling dealer invoking Section 84 product liability, demanding delivery of a brand-new replacement machine.",
      },
    ],
    statutoryRule: "Section 84 Product Liability & NCDRC Repeated Failure Doctrine",
  },
  {
    id: "inverter-ac",
    tabLabel: "Air Conditioner (AC)",
    title: "Recurring Gas Leakage, Copper Condenser Coil Erosion & PCB Error Breakdown",
    cause:
      "Inverter ACs are prone to microscopic refrigerant gas leaks in evaporator and condenser coils, PCB outdoor unit failures (errors like E6, EC, F3), and poor cooling efficiency during peak summer. Service centres routinely top up gas temporarily without pressure-testing or replacing porous copper coils. Once the warranty nears expiration, they disclaim liability by blaming ambient atmospheric pollution (such as open drain sulfur gases) or third-party electrical fluctuations.",
    legalBasis:
      "Unless ambient environmental exclusions are explicitly drawn to the consumer's attention before sale under Section 2(47) and Rule 4 of Consumer Protection (E-Commerce) Rules, manufacturers cannot repudiate express 5-year or 10-year comprehensive coil warranties. Furthermore, under the Right to Repair guidelines established by the Department of Consumer Affairs, OEMs are statutorily required to maintain readily available replacement coils and functional PCBs.",
    steps: [
      {
        step: "Secure Nitrogen Pressure Test Video Evidence",
        description:
          "Ensure the technician records a soap bubble or nitrogen gauge test confirming coil porosity, rather than merely performing an unverified temporary gas top-up.",
      },
      {
        step: "Verify Stabilizer & Power Installation Compliance",
        description:
          "Retain proof of voltage stabilizer installation and brand-authorized technician commissioning to defeat frivolous allegations of power fluctuation damage.",
      },
      {
        step: "Serve Advocate Legal Notice for Unit Replacement",
        description:
          "Dispatch a statutory notice demanding complete outdoor unit (ODU) or indoor unit (IDU) replacement under Section 39(1)(b) of CPA 2019 before filing on e-Jagriti.",
      },
    ],
    statutoryRule: "Section 2(11) Deficiency in Service & Section 86 Product Service Provider Liability",
  },
  {
    id: "microwave-dishwasher",
    tabLabel: "Microwave / Dishwasher",
    title: "Magnetron Failure, Pump Error, Water Purifier RO Membrane Breakdown",
    cause:
      "Small and built-in kitchen appliances such as convection microwaves, dishwashers, and water purifiers often stop functioning due to magnetron failure, circulation pump burnouts, or sensor logic glitches. Service franchises often refuse on-site inspection, demanding that the consumer carry heavy units to their workshop, or retain the product for 40+ days under the pretext of 'parts awaited from warehouse'.",
    legalBasis:
      "Under Consumer Protection Act regulations, durable home appliances sold with in-home warranty service must be serviced at the customer's premises. Retaining consumer goods for unreasonable periods without providing a temporary replacement unit or loaner device constitutes both deficiency in service (Section 2(11)) and an unfair trade practice (Section 2(47)).",
    steps: [
      {
        step: "Demand In-Home Service or Official Pickup Receipt",
        description:
          "If the unit must be taken to the service centre, obtain a signed physical gate pass and job receipt detailing cosmetic condition, serial number, and committed delivery date.",
      },
      {
        step: "Issue a 48-Hour Final Delivery Ultimatum",
        description:
          "If repair exceeds 15 days, send an official email ultimatum to the brand's leadership requiring return of the repaired product or delivery of a new sealed unit within 48 hours.",
      },
      {
        step: "Execute Statutory Advocate Legal Notice",
        description:
          "Serve a formal statutory legal demand notice demanding 100% refund of the purchase price, interest, and legal costs before instituting proceedings in the District Consumer Commission.",
      },
    ],
    statutoryRule: "Section 2(11) CPA 2019 & Rule 5 Consumer Protection E-Commerce Rules",
  },
];

export default function ApplianceWarrantyProblemTabs() {
  const [activeTab, setActiveTab] = useState(PROBLEMS[0].id);
  const activeProblem = PROBLEMS.find((p) => p.id === activeTab) || PROBLEMS[0];

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4 sm:p-6 md:p-8">
      {/* Tab Buttons */}
      <div className="flex flex-wrap gap-2 pb-4 mb-6 border-b border-slate-200">
        {PROBLEMS.map((problem) => (
          <button
            key={problem.id}
            type="button"
            onClick={() => setActiveTab(problem.id)}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-150 cursor-pointer ${
              activeTab === problem.id
                ? "bg-[#DC2626] text-white shadow-md shadow-rose-900/20"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            {problem.tabLabel}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="space-y-6">
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-rose-50 text-[#DC2626] border border-rose-100">
              Statutory Basis
            </span>
            <span className="text-xs font-semibold text-slate-500">
              {activeProblem.statutoryRule}
            </span>
          </div>
          <h3 className="text-lg sm:text-xl font-black text-slate-900 leading-tight">
            {activeProblem.title}
          </h3>
        </div>

        {/* Problem Cause & Legal Grounds Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-slate-50 rounded-xl p-4 sm:p-5 border border-slate-200">
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-900 mb-2 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              Brand Rejection Tactic &amp; True Cause
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {activeProblem.cause}
            </p>
          </div>
          <div className="bg-rose-50/50 rounded-xl p-4 sm:p-5 border border-rose-100">
            <h4 className="text-xs font-black uppercase tracking-wider text-[#DC2626] mb-2 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
              Your Statutory Rights Under Indian Law
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {activeProblem.legalBasis}
            </p>
          </div>
        </div>

        {/* Actionable Resolution Steps */}
        <div>
          <h4 className="text-xs font-black uppercase tracking-wider text-slate-900 mb-3">
            Immediate Tactical Action Plan
          </h4>
          <div className="space-y-3">
            {activeProblem.steps.map((st, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80"
              >
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-900 text-white text-xs font-bold flex items-center justify-center">
                  {idx + 1}
                </span>
                <div>
                  <h5 className="text-xs sm:text-sm font-bold text-slate-900 mb-0.5">
                    {st.step}
                  </h5>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {st.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Context Action */}
        <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-slate-100">
          <p className="text-xs text-slate-500">
            Persistent defect after multiple service calls? Brand legally owes you a brand-new sealed appliance or 100% refund.
          </p>
          <Link
            href="/legal-notice-charges"
            className="text-xs font-bold text-[#DC2626] hover:underline flex items-center gap-1 shrink-0"
          >
            Review Legal Notice Rates &amp; Timelines →
          </Link>
        </div>
      </div>
    </div>
  );
}
