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
    id: "delayed-delivery",
    tabLabel: "Delivery Delayed / Denied",
    title: "Furniture Order Delayed Indefinitely or Promised Delivery Date Missed",
    cause:
      "Furniture stores, online portals (e.g. Pepperfry, Urban Ladder), or local showrooms take full or advance payment and give an estimated delivery date (e.g., 2–4 weeks). Weeks or months pass with repetitive automated postponement messages, supply-chain excuses, or complete radio silence, while customer support refuses a direct cash refund to the original payment source.",
    legalBasis:
      "Under Section 2(11) of the Consumer Protection Act, 2019, failure to deliver purchased goods within the agreed or reasonable timeline constitutes deficiency in service. Furthermore, under Rule 5(3)(b) of the Consumer Protection (E-Commerce) Rules, 2020, every marketplace and merchant is statutorily required to effect a complete refund to the original payment mode upon request if goods are not delivered within the stipulated schedule.",
    steps: [
      {
        step: "Issue a Written Time-Bound Cancellation Notice",
        description:
          "Email the nodal grievance officer and seller support stating that time was of the essence in the sales contract. Formally cancel the order and revoke authorization for further transit attempts.",
      },
      {
        step: "Dispute Store Credit / Wallet Substitution",
        description:
          "Explicitly decline store credit notes, voucher codes, or wallet balance. Demand direct credit to your bank account / card within 7 business days under CPA E-Commerce Rules.",
      },
      {
        step: "Serve an Advocate Legal Demand Notice",
        description:
          "If the merchant fails to refund within 7 days, dispatch a formal statutory legal notice demanding the principal sum plus 18% annual commercial interest and compensation for physical disruption.",
      },
    ],
    statutoryRule: "Section 2(11) CPA 2019 & Rule 5(3)(b) E-Commerce Rules 2020",
  },
  {
    id: "damaged-transit",
    tabLabel: "Damaged / Broken Goods",
    title: "Furniture Delivered Damaged, Scratched, or Structurally Broken",
    cause:
      "Heavy wooden furniture, dining tables, wardrobes, or sofas arrive with chipped laminates, cracked marble/glass tops, termite infestation, structural wobbling, or fabric tears. The delivery personnel demand signature on the POD (Proof of Delivery) or challan before unboxing, and the brand later rejects return claims citing 'Goods delivered intact per delivery sheet'.",
    legalBasis:
      "Under Section 16 and Section 41 of the Sale of Goods Act, 1930, the buyer has an inalienable statutory right to inspect and examine goods before acceptance. A delivery receipt signed before unboxing does not waive this right. Delivering broken goods amounts to 'Deficiency in Service' under Section 2(11) and 'Unfair Trade Practice' under Section 2(47) of CPA 2019.",
    steps: [
      {
        step: "Endorse the Delivery Challan with Caveat",
        description:
          "If delivery boys insist on an immediate signature, write 'Received in sealed box — subject to unboxing, quality, and transit damage inspection' right above your signature.",
      },
      {
        step: "Record a Continuous Unboxing Video",
        description:
          "Film a continuous, uninterrupted 4K video showing the outer shipping label, box condition, and every defect as packing material is removed. Take clear macro photos of cracks, breaks, or structural flaws.",
      },
      {
        step: "Lodge Immediate Digital Complaint Within 24 Hours",
        description:
          "Email customer care and the nodal officer with order ID, photos, and unboxing link demanding a pickup and immediate full refund rather than a superficial polish touch-up.",
      },
    ],
    statutoryRule: "Section 41 Sale of Goods Act 1930 & Section 2(47) CPA 2019",
  },
  {
    id: "modular-kitchen",
    tabLabel: "Modular Kitchen Abandoned",
    title: "Modular Kitchen Contractor Took Advance, Delayed, or Left Work Incomplete",
    cause:
      "Modular kitchen dealers, interior design firms, or turnkey carpenters collect 50% to 90% advance fees, promise delivery and installation in 30–45 days, and then deliver sub-grade particle boards, miss hinges, leave granite unmounted, or abandon the site entirely for months, rendering the customer's kitchen unusable.",
    legalBasis:
      "A modular kitchen contract constitutes a composite agreement for supply of goods and specialised service. Abandoning installation or utilizing sub-grade non-BWR ply (contrary to quotation specifications) is actionable under Section 2(11) for gross deficiency and Section 2(47) for misleading representation. Consumer commissions routinely award full refund of excess advance, interest, and substantial compensation for daily food ordering and living displacement.",
    steps: [
      {
        step: "Collate Written Quotation & Material Specs",
        description:
          "Gather the original layout drawing, 3D render, bill of quantities (BOQ), brand commitments (e.g. CenturyPly / Merino / Hafele / Hettich fittings), and all payment receipts.",
      },
      {
        step: "Prepare a Joint Site Inspection Punch-List",
        description:
          "Draft an itemised punch-list of incomplete cabinets, defective laminates, misaligned drawers, and missing hardware. Send it via registered email with a 7-day cure deadline.",
      },
      {
        step: "Serve Statutory Notice for Refund & Damages",
        description:
          "Engage an advocate to issue a formal legal demand notice claiming return of advance amounts paid, cost of completion through third-party contractors, and compensation for living inconvenience.",
      },
    ],
    statutoryRule: "Section 2(11) CPA 2019 & Indian Contract Act Section 73 (Damages)",
  },
  {
    id: "wrong-specification",
    tabLabel: "Mismatched / Sub-Grade Goods",
    title: "Wrong Color, Wrong Dimensions, or Sub-Standard Material Delivered",
    cause:
      "The customer ordered premium solid Sheesham/Teak wood or high-density engineered wood in custom dimensions, but the retailer delivered cheap MDF/particle board, incorrect dimensions that do not fit the room, or completely different fabric color, refusing return by claiming 'customized orders cannot be cancelled'.",
    legalBasis:
      "Under Section 15 and Section 37 of the Sale of Goods Act, 1930, where there is a contract for sale of goods by description or sample, there is an implied statutory condition that the goods must correspond with the description. If goods deviate from description, the buyer has the absolute right to reject the delivery and demand complete refund.",
    steps: [
      {
        step: "Compare Product Invoice Against Delivered Item",
        description:
          "Highlight specific discrepancies in material (e.g. MDF stamped on carcass instead of Marine Ply), dimensional variance, or fabric code against the purchase receipt.",
      },
      {
        step: "Refuse Installation / Handover Sign-off",
        description:
          "Do not permit the technicians to drill or assemble non-conforming furniture in your house. State in writing that goods are rejected for breach of contractual description.",
      },
      {
        step: "Escalate via Legal Notice to Retailer & Platform",
        description:
          "Serve a joint demand notice upon both the marketplace and the merchant entity asserting breach of express warranty and unfair trade practice under CPA 2019.",
      },
    ],
    statutoryRule: "Section 15 Sale of Goods Act 1930 & Section 2(47) CPA 2019",
  },
];

export default function FurnitureProblemTabs() {
  const [activeTab, setActiveTab] = useState<string>(PROBLEMS[0].id);

  const selectedProblem = PROBLEMS.find((p) => p.id === activeTab) || PROBLEMS[0];

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 shadow-sm p-4 sm:p-6 md:p-8 space-y-6">
      <div className="border-b border-slate-100 pb-4">
        <span className="text-[11px] font-bold uppercase tracking-wider text-red-600 block mb-1">
          Interactive Scenario Navigator
        </span>
        <h3 className="text-lg sm:text-xl font-black text-slate-900">
          Select Your Furniture or Modular Kitchen Dispute
        </h3>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Choose the exact failure mode below to view statutory legal grounds and immediate tactical steps.
        </p>
      </div>

      {/* Tab Navigation Buttons */}
      <div className="flex flex-wrap gap-2">
        {PROBLEMS.map((problem) => {
          const isActive = problem.id === activeTab;
          return (
            <button
              key={problem.id}
              type="button"
              onClick={() => setActiveTab(problem.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-150 cursor-pointer ${
                isActive
                  ? "bg-slate-900 text-white shadow-md shadow-slate-900/20"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              {problem.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Selected Tab Content Card */}
      <div className="space-y-5 bg-slate-50 rounded-xl p-4 sm:p-6 border border-slate-200/80">
        <div>
          <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-extrabold uppercase tracking-wide bg-red-100 text-red-800 mb-2">
            Statutory Rule: {selectedProblem.statutoryRule}
          </span>
          <h4 className="text-base sm:text-lg font-black text-slate-900 leading-snug">
            {selectedProblem.title}
          </h4>
        </div>

        <div className="space-y-2">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Factual Dilemma:
          </p>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            {selectedProblem.cause}
          </p>
        </div>

        <div className="p-3.5 bg-amber-50/80 border border-amber-200/80 rounded-xl space-y-1">
          <p className="text-xs font-bold text-amber-900 uppercase tracking-wider">
            Consumer Court Stance &amp; Legal Right:
          </p>
          <p className="text-xs sm:text-sm text-amber-950 font-medium leading-relaxed">
            {selectedProblem.legalBasis}
          </p>
        </div>

        <div className="space-y-3 pt-2">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-800">
            Recommended Statutory Action Steps:
          </p>
          <div className="space-y-2.5">
            {selectedProblem.steps.map((st, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 bg-white p-3 rounded-lg border border-slate-200/60 shadow-2xs"
              >
                <span className="w-5 h-5 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-[10px] font-black shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <div className="text-xs sm:text-sm">
                  <span className="font-bold text-slate-900 block mb-0.5">
                    {st.step}
                  </span>
                  <span className="text-slate-600 leading-relaxed block">
                    {st.description}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-200">
          <span className="text-[11px] text-slate-500 font-medium text-center sm:text-left">
            Have evidence ready? Advocate demand notice service forces 85%+ pre-litigation settlements.
          </span>
          <Link
            href="/legal-notice-charges"
            className="text-xs font-bold text-red-600 hover:text-red-700 hover:underline shrink-0"
          >
            Review Legal Notice Pricing &amp; TAT →
          </Link>
        </div>
      </div>
    </div>
  );
}
