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
    id: "broken-goods",
    tabLabel: "Broken Goods",
    title: "Household Goods, Electronics or Furniture Smashed During Transit",
    cause:
      "Packers and movers frequently use sub-standard packing materials (single-layer cardboard instead of multi-ply bubble wrap, missing corner guards, or improper lashings inside the truck). During multi-city interstate transshipment, goods are frequently shifted between multiple vehicles in open consolidation yards without customer consent, leading to cracked TV screens, water-damaged mattresses, dented refrigerators, and fractured wooden joints.",
    legalBasis:
      "Under Section 9, 12, and 13 of the Carriage by Road Act, 2007, a common carrier is strictly liable for any loss of or damage to consignments entrusted to it. Under Section 13, the complainant does not need to prove negligence on the part of the carrier; negligence is statutorily presumed. Furthermore, Section 2(11) of the Consumer Protection Act, 2019 treats careless handling and delivery of damaged articles as gross deficiency in service.",
    steps: [
      {
        step: "Endorse the Consignment Note / Lorry Receipt (LR) Upon Delivery",
        description:
          "Never sign a clean delivery acknowledgment. Write 'Received in damaged condition; full damage inventory subject to unpacking' directly on the physical or electronic copy of the driver's delivery manifest.",
      },
      {
        step: "Capture High-Resolution Unboxing Video & Timestamped Photos",
        description:
          "Record continuous unboxing video footage showing sealed labels being cut, serial numbers, cracked screens, shattered glass, and broken structural joints under Section 63 BSA.",
      },
      {
        step: "Issue Section 10 Carriage by Road Act Notice & Legal Demand",
        description:
          "Serve a formal statutory notice within 180 days specifying the damage quantum, original purchase invoices, and repair estimates, followed by an advocate demand notice.",
      },
    ],
    statutoryRule: "Sections 10, 12 & 13 Carriage by Road Act 2007 & Section 2(11) CPA 2019",
  },
  {
    id: "missing-stolen-boxes",
    tabLabel: "Missing / Stolen Boxes",
    title: "Cartons, Valuables or Entire Consignment Missing from Inventory",
    cause:
      "At destination, the delivery crew unloads fewer boxes than recorded on the origin packing list (e.g., 38 boxes delivered out of 45 numbered cartons). Movers routinely deflect by claiming 'the missing box is in another hub truck and will arrive next week', eventually ceasing communication or declaring the items untraceable.",
    legalBasis:
      "Failing to deliver entrusted consignments constitutes non-delivery under Section 10 and Section 12 of the Carriage by Road Act, 2007. When the carrier fails to account for goods listed on the signed packing list, it constitutes both civil deficiency of service under Section 2(11) CPA 2019 and Criminal Breach of Trust under Section 316 of the Bharatiya Nyaya Sanhita, 2023 (BNS).",
    steps: [
      {
        step: "Cross-Verify Master Packing Slip Box Numbers Immediately",
        description:
          "Mark off every box against the origin inventory slip as it enters the house. Identify exact missing carton numbers (e.g., Box #12 - Crockery, Box #31 - Kitchen Appliances) before the crew departs.",
      },
      {
        step: "Demand Written Discrepancy Note from Delivery Supervisor",
        description:
          "Insist that the delivery supervisor sign a written shortage acknowledgment stating that designated cartons were not tendered at the time of unloading.",
      },
      {
        step: "Lodge Police Complaint for Theft & Serve Statutory Demand Notice",
        description:
          "If high-value electronics or jewellery are missing and the mover stops responding, file a police complaint under BNS Section 316 and serve an advocate legal notice claiming full replacement value.",
      },
    ],
    statutoryRule: "Section 12 Carriage by Road Act 2007 & Section 316 BNS (Criminal Breach of Trust)",
  },
  {
    id: "hostage-goods",
    tabLabel: "Goods Held Hostage",
    title: "Driver Demands Extra Cash at Destination and Refuses to Unload",
    cause:
      "A classic movers racket: a low quotation is agreed upon upfront (e.g. ₹25,000 for door-to-door delivery). Once the loaded truck arrives at your new apartment, the driver or coordinator halts operations, demanding an additional ₹15,000 to ₹40,000 in unreceipted cash or immediate UPI transfer, alleging 'stair carrying fees', 'long-distance walk charges', 'state border bribes', or 'waiting charges'.",
    legalBasis:
      "Unilaterally altering contract terms and holding consumer personal property hostage to extort money constitutes an Unfair Trade Practice under Section 2(47) CPA 2019 and extortion/cheating under Sections 308 and 318 of the Bharatiya Nyaya Sanhita, 2023 (BNS). Common carriers have no common-law or statutory lien to extort payments beyond agreed contract terms.",
    steps: [
      {
        step: "Record Live Video & WhatsApp Demands",
        description:
          "Refuse verbal negotiations. Insist that the coordinator state all extra charges on official company letterhead or via registered WhatsApp number, preserving audio/video evidence of the driver refusing entry.",
      },
      {
        step: "Call Local Police (112) for Goods Wrongfully Restrained",
        description:
          "Explain to local police that movers are illegally restraining your household belongings on the public road to extort ransom beyond the signed contract agreement.",
      },
      {
        step: "Pay Under Written Protest if Forced, Then Enforce Immediate Recovery",
        description:
          "If forced to pay under duress to recover your belongings, mention 'Paid under duress and physical protest' in the UPI remarks or bank transfer, then immediately issue an advocate demand notice for refund plus damages.",
      },
    ],
    statutoryRule: "Section 2(47) CPA 2019 & Sections 308/318 BNS (Extortion & Cheating)",
  },
  {
    id: "insurance-fraud",
    tabLabel: "Fake Insurance Scam",
    title: "Mover Collected 3%–5% Insurance Fee but Denies Claim or Never Issued Policy",
    cause:
      "Rogue movers routinely add a 3% or 5% 'Transit Insurance' surcharge to their quotation. In reality, they pocket this money without purchasing an actual Marine Cargo / Transit Insurance Policy from an IRDAI-registered general insurance company (such as Tata AIG, ICICI Lombard, or New India Assurance). When goods are damaged, they reveal this was only 'Carrier Risk' and invoke obscure internal fine print stating they only compensate ₹500 or ₹1,000 per damaged article.",
    legalBasis:
      "Charging insurance charges without securing an underwriting policy or failing to furnish the certificate of insurance constitutes a classic Deceptive Practice and Unfair Trade Practice under Section 2(47) CPA 2019. The Supreme Court and NCDRC have repeatedly held that movers who pocket insurance fees step into the shoes of the insurer and become directly liable for the full replacement cost of damaged goods.",
    steps: [
      {
        step: "Demand Policy Schedule & 16-Digit IRDAI Policy Number",
        description:
          "Demand the official e-Marine Cargo Policy Certificate with the underwriter's name and premium receipt. If the mover produces only their own printed slip, they committed insurance misrepresentation.",
      },
      {
        step: "Notify the Underwriter or Document Carrier Direct Liability",
        description:
          "If a genuine policy exists, lodge an immediate surveyor claim within 48 hours. If the policy is bogus, hold the moving company strictly liable as the de facto insurer under Section 2(11) & 2(47) CPA.",
      },
      {
        step: "Issue Statutory Notice for Misrepresentation & Recovery",
        description:
          "Serve an advocate legal notice demanding full reimbursement of damaged articles and refund of fraudulent insurance fees, warning of criminal cheating proceedings and consumer litigation on e-Jagriti.",
      },
    ],
    statutoryRule: "Section 2(47) CPA 2019 & IRDAI Protection of Policyholders' Interests Regulations",
  },
];

export default function PackersMoversProblemTabs() {
  const [activeTabId, setActiveTabId] = useState<string>(PROBLEMS[0].id);
  const activeTab = PROBLEMS.find((p) => p.id === activeTabId) || PROBLEMS[0];

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm">
      {/* Tab Navigation Pill Bar */}
      <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-4">
        {PROBLEMS.map((tab) => {
          const isActive = tab.id === activeTabId;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTabId(tab.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                isActive
                  ? "bg-slate-900 text-white shadow-sm"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {tab.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Tab Content Body */}
      <div className="pt-5 space-y-4">
        <div>
          <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-wider text-red-600 bg-red-50 px-2.5 py-1 rounded-md">
            Statutory Framework: {activeTab.statutoryRule}
          </span>
          <h3 className="text-base sm:text-xl font-bold text-slate-900 mt-2">
            {activeTab.title}
          </h3>
        </div>

        <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
          <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
            <strong className="text-slate-900 font-bold block mb-1">
              Modus Operandi &amp; Ground Reality:
            </strong>
            <p>{activeTab.cause}</p>
          </div>

          <div className="p-3.5 bg-red-50/70 border border-red-200 rounded-xl text-red-950">
            <strong className="text-red-900 font-bold block mb-1">
              Legal Recourse &amp; Statutory Carrier Liability:
            </strong>
            <p>{activeTab.legalBasis}</p>
          </div>
        </div>

        <div>
          <h4 className="text-xs sm:text-sm font-bold text-slate-900 mb-2 uppercase tracking-wide">
            Immediate 3-Step Action Plan:
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {activeTab.steps.map((st, i) => (
              <div
                key={i}
                className="bg-white border border-slate-200 p-3 sm:p-4 rounded-xl shadow-xs space-y-1"
              >
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-slate-900 text-white text-[11px] font-bold flex items-center justify-center shrink-0">
                    {i + 1}
                  </span>
                  <span className="text-xs font-bold text-slate-900 truncate">
                    {st.step}
                  </span>
                </div>
                <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed mt-1">
                  {st.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-2 text-right">
          <Link
            href="#heading-playbook"
            className="text-xs font-bold text-red-600 hover:text-red-800 underline inline-flex items-center gap-1"
          >
            See step-by-step notice drafting instructions ↓
          </Link>
        </div>
      </div>
    </div>
  );
}
