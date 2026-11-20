"use client";

import React, { useState } from "react";

interface ScenarioItem {
  id: string;
  tabLabel: string;
  badge: string;
  title: string;
  triggerFact: string;
  evidenceRequired: string[];
  courtReliefSought: string;
  citationAnchor: string;
}

const SCENARIOS: ScenarioItem[] = [
  {
    id: "factory-sale",
    tabLabel: "Factory & Machinery Sale",
    badge: "Overt Disposal Act",
    title: "Rolling Mill or Plant Quietly Listed with Industrial Brokers & Night-Truck Shifting",
    triggerFact:
      "A defaulting steel rolling mill or mineral grinding unit owing ₹85 Lakh lists its MIDC/GIDC industrial plot on property portals or begins dismantling induction furnaces and loading billet stock onto flatbed trucks after 11:00 PM.",
    evidenceRequired: [
      "Time-stamped screenshots of industrial broker WhatsApp messages, 99acres/OLX/Magicbricks plant listings, or machinery auction flyers.",
      "Geo-tagged, EXIF-preserved photographs or CCTV clips of night-time crane loading and truck movement out of factory gates.",
      "Sworn affidavit naming the exact broker/transporter source (satisfying Premraj Mundra & Raman Tech specificity rules).",
      "BSA 2023 s.63 electronic evidence certificate signed by the plant-visit executive or IT custodian.",
    ],
    courtReliefSought:
      "Ex-parte conditional attachment under Order XXXVIII Rule 5(3) CPC restraining alienation of plant & machinery, coupled with an urgent s.12A Commercial Courts Act exemption under Yamini Manohar.",
    citationAnchor: "Raman Tech (2008) 2 SCC 302 + Order XXXVIII Rule 5(3) & Rule 5(4)",
  },
  {
    id: "bank-siphoning",
    tabLabel: "Bank Account Siphoning",
    badge: "Cash Diversion",
    title: "Debtor Emptying Primary Current Account While Routing Buyer Receipts to Sister Entities",
    triggerFact:
      "Cheques bounce for 'Funds Insufficient', yet GST GSTR-1 filings or market intelligence show the debtor continues selling finished ingots/coal while instructing downstream buyers to remit funds into a newly incorporated LLP or director-linked account.",
    evidenceRequired: [
      "Dishonoured cheque return memos + RTGS/NEFT failure logs showing sudden account depletion.",
      "GST portal public tax-payer status / GSTR-1 vs GSTR-3B filing pattern showing active outward supply despite zero creditor payments.",
      "Customer confirmation emails or WhatsApp forwards showing the debtor's new third-party/sister-concern bank mandate.",
      "Certified statement of account, E-Way Bills, and Dharamkanta weighment slips establishing an undisputed liquidated debt.",
    ],
    courtReliefSought:
      "Show-cause order under Rule 5(1) directing the debtor to furnish a Bank Guarantee or FDR within 7–10 days, failing which garnishee/attachment orders freeze identified current/OD accounts up to the suit claim.",
    citationAnchor: "Order XXXVIII Rule 5(1)(a)-(b) + Rule 6 + Order XXI Rule 46 (Garnishee)",
  },
  {
    id: "mca-charge",
    tabLabel: "MCA21 Charge & Exit",
    badge: "Corporate Stripping",
    title: "Sudden MCA Form CHG-1 Charge Creation, Promoter Resignations (DIR-12) & Share Transfer",
    triggerFact:
      "Within weeks of receiving your statutory demand notice, the debtor company files Form CHG-1 creating a fresh charge in favour of an unsecured related lender, or key promoter-directors resign via Form DIR-12.",
    evidenceRequired: [
      "Certified MCA21 Index of Charges & Form CHG-1 download showing sudden encumbrance of previously unencumbered factory land or receivables.",
      "MCA Form DIR-12 (director resignation) and Form INC-22 (abrupt registered office shift to a residential/non-traceable address).",
      "Pre-suit demand notice (Speed Post RPAD + Email + WhatsApp) proving the debtor was put on formal notice immediately before the asset/director changes.",
      "Audited balance sheet / AOC-4 extract demonstrating deteriorating net worth and negative working capital.",
    ],
    courtReliefSought:
      "Urgent s.12A mediation waiver under Yamini Manohar + Rule 5(1) security order compelling promoter-backed bank guarantee or attachment of unencumbered corporate assets.",
    citationAnchor: "Yamini Manohar (2024) 5 SCC 815 + Commercial Courts Act s.12A",
  },
  {
    id: "s12a-order37",
    tabLabel: "s.12A & Order 37 Overlap",
    badge: "Procedural Trap",
    title: "Pleading Genuine Urgent Interim Relief Without Triggering Patil Automation Dismissal",
    triggerFact:
      "Filing a Commercial Suit above ₹3 Lakh without pre-institution mediation risks mandatory rejection under Order VII Rule 11 CPC (Patil Automation) unless the plaint and Rule 5 IA establish genuine, non-camouflaged urgency.",
    evidenceRequired: [
      "Contemporaneous urgency timeline: date of default -> date of demand notice -> date debtor's asset-disposal act was discovered (within days/weeks, not 18 months later).",
      "Dedicated IA under Order XXXVIII Rule 5 CPC filed simultaneously with the Commercial Suit plaint (or Order XXXVII summary suit).",
      "Documentary exhibits annexed to the plaint itself so the Commercial Court sees immediate, verifiable dissipation risk on the first hearing.",
      "Clear computation separating liquidated principal, contractual interest, and court fee valuation.",
    ],
    courtReliefSought:
      "Leave to dispense with s.12A mediation at admission stage, immediate Rule 5(1)/(3) notice with ad-interim restraint, and simultaneous fast-track summary adjudication.",
    citationAnchor: "Patil Automation (2022) 10 SCC 1 + Yamini Manohar (2024) 5 SCC 815",
  },
];

export default function AttachmentScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(SCENARIOS[0].id);
  const current = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full">
      {/* Tab Buttons */}
      <div
        role="tablist"
        aria-label="Order 38 Rule 5 asset-stripping scenarios"
        className="flex flex-wrap gap-2 mb-5"
      >
        {SCENARIOS.map((item) => {
          const isActive = item.id === activeTab;
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveTab(item.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                isActive
                  ? "bg-[#DC2626] text-white border-[#DC2626] shadow-sm"
                  : "bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200"
              }`}
            >
              {item.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Tab Panel */}
      <div
        role="tabpanel"
        className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-4"
      >
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="inline-block px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-red-100 text-[#DC2626] border border-red-200">
            {current.badge}
          </span>
          <span className="text-[11px] font-semibold text-slate-500">
            {current.citationAnchor}
          </span>
        </div>

        <h3 className="text-base sm:text-lg font-extrabold text-slate-900 leading-snug">
          {current.title}
        </h3>

        <div className="bg-white border border-slate-200 rounded-xl p-4">
          <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
            Commercial Trigger Fact
          </p>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            {current.triggerFact}
          </p>
        </div>

        <div>
          <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2">
            Concrete Evidence That Satisfies Raman Tech (2008)
          </p>
          <ul className="space-y-2">
            {current.evidenceRequired.map((ev, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed"
              >
                <span className="w-5 h-5 rounded-full bg-slate-900 text-white text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <span>{ev}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
          <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 mb-1">
            Creditor Relief &amp; Order Sought
          </p>
          <p className="text-xs sm:text-sm text-emerald-950 font-medium leading-relaxed">
            {current.courtReliefSought}
          </p>
        </div>
      </div>
    </div>
  );
}
