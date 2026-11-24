"use client";

import React, { useState } from "react";
import Link from "next/link";

interface CommodityScenario {
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

const COMMODITY_SCENARIOS: CommodityScenario[] = [
  {
    id: "coal-petcoke-gcv",
    tabLabel: "Coal & GCV Cuts",
    title: "Boiler Plant Burned Your 2,000-MT Imported Coal Lot—Then Issued an ₹18L 'Low GCV / Moisture' Debit Note",
    statutoryTrigger: "Sale of Goods Act s.42, NABL Umpire/Referee Sample Finality & IBC s.8",
    bottleneck:
      "Port-side coal and petcoke importers at Gandhidham, Mundra, Vizag, Paradip, and Krishnapatnam supply captive power plants, sponge-iron kilns, and brick units on 30–60 day credit. After feeding the entire rake or tipper lot into the boiler, buyers issue unilateral 'low GCV / high moisture / excess ash' debit notes 45 days later to manufacture a Mobilox dispute.",
    legalMechanism:
      "Under Sale of Goods Act Section 42, burning or consuming the coal lot constitutes an act inconsistent with the seller's ownership—extinguishing any right of rejection. Further, where the supply contract designates a joint load-port or disport NABL/SGS/Intertek umpire sample as final, unilateral buyer yard lab reports have zero evidentiary weight.",
    operationalSteps: [
      {
        step: "1. Lock Load-Port / Disport NABL & Umpire Certificates",
        detail:
          "Compile the SGS/Intertek/NABL load-port and disport quality certificates, sealed referee sample custody log, Railway Receipt / E-Way Bill Part-B, and weighbridge slips under BSA 2023 s.63.",
      },
      {
        step: "2. Invoke Section 42 Irreversible Consumption Estoppel",
        detail:
          "Serve a Fact-Verified Demand Notice recording that zero joint re-sampling was requested within the 48-hour unloading window and the entire consignment was consumed in the buyer's boiler.",
      },
      {
        step: "3. Escalate via Order 37 Summary Suit or IBC Section 8 (>= ₹1 Cr)",
        detail:
          "File an Order XXXVII CPC summary suit on acknowledged tax invoices and GSTR-2B filings, or serve an IBC Form 3/4 demand notice where principal plus contractual interest crosses ₹1 Crore.",
      },
    ],
    primaryRoute: {
      label: "Start Order 37 Summary Suit Escalation",
      href: "/law/order-37-summary-suit-money-recovery",
    },
  },
  {
    id: "metal-scrap-furnace",
    tabLabel: "Scrap & Furnace Melting",
    title: "Induction Furnace Melted Your HMS / Copper / Aluminium Scrap in 12 Hours—Now Withholds ₹45L for 'Excess Slag'",
    statutoryTrigger: "Sale of Goods Act s.42 + CPC Order XXXVIII Rule 5 Attachment + s.12A Urgency",
    bottleneck:
      "Ferrous and non-ferrous scrap wholesalers in Mandi Gobindgarh, Alang, Durgapur, Bhiwandi, Raipur, and Jalna operate on razor-thin 2–3% margins. Rolling mills and induction furnaces melt 25-ton scrap truckloads within hours of gate entry, then withhold ₹30L–₹1.5Cr citing 'excess slag, dust, or recovery loss'—while quietly diverting finished billets to sister concerns.",
    legalMechanism:
      "Once scrap is charged into an induction furnace, physical inspection or return is impossible—locking legal acceptance under Sale of Goods Act s.42. Where the mill is liquidating inventory or transferring plant machinery, the supplier can bypass mandatory Section 12A mediation under the 'urgent interim relief' exception (Yamini Manohar) and seek Order XXXVIII Rule 5 attachment before judgment.",
    operationalSteps: [
      {
        step: "1. Build the Gate-Entry & Dharamkanta Proof Bundle",
        detail:
          "Pair Tax Invoice, E-Way Bill, certified Dharamkanta gross/tare slip, gate-inward stamp, and unloading WhatsApp/CCTV timestamps confirming zero rejection at tipper unloading.",
      },
      {
        step: "2. Pre-Empt Sham 'Slag / Yield Loss' Set-Offs",
        detail:
          "Issue a statutory rebuttal rejecting post-melting recovery deductions unless a joint furnace heat-log protocol was pre-agreed in writing.",
      },
      {
        step: "3. Seek Urgent Order 38 Rule 5 Attachment & NI s.138 Action",
        detail:
          "Move for attachment of finished ingot/billet stock or bank receivables under Order XXXVIII Rule 5 CPC alongside Section 138/143A director prosecution on dishonoured PDCs.",
      },
    ],
    primaryRoute: {
      label: "Prosecute Directors Under NI Act s.138",
      href: "/cheque-bounce-case-against-company-directors",
    },
  },
  {
    id: "peso-gas-fuel",
    tabLabel: "PESO Cylinders & Fuel",
    title: "Factory Holding 300 PESO-Embossed Oxygen/Argon Cylinders or Defaulting on Bulk Diesel/Furnace Oil Indents",
    statutoryTrigger: "Gas Cylinders Rules 2016 (PESO), BNS s.316 & Order XXXVII CPC",
    bottleneck:
      "Industrial gas manufacturers (O2, N2, Argon, CO2) lose crores when factories or hospitals stop paying gas bills and refuse to return neck-ring embossed high-pressure cylinders—often getting them illegally refilled by rival bottlers. Simultaneously, furnace oil, LDO, biodiesel, and bulk diesel bowser distributors face defaults on signed fuel indent books.",
    legalMechanism:
      "Under the Gas Cylinders Rules, 2016 (PESO), filling a cylinder bearing another owner's embossed neck-ring mark without written authorization is a statutory violation. Retaining bailed cylinders after termination triggers Criminal Breach of Trust under BNS Section 316 alongside civil cylinder demurrage/rent and Order XXXVII recovery on signed fuel indent receipts.",
    operationalSteps: [
      {
        step: "1. Audit Embossed Serial Numbers & Signed Indent Books",
        detail:
          "Compile cylinder serial-number challans, PESO ownership stamps, security deposit ledgers, and signed fuel bowser/RFID delivery slips.",
      },
      {
        step: "2. Serve Dual BNS s.316 Criminal & Demurrage Demand Notice",
        detail:
          "Put the defaulting plant and rival refilling stations on formal notice of unauthorized cylinder retention, daily demurrage accrual, and BNS s.316 prosecution.",
      },
      {
        step: "3. Recover Principal, Demurrage & Unreturned Asset Value",
        detail:
          "File Order 37 summary proceedings for fuel/gas invoices plus cylinder replacement value, or initiate criminal complaint for misappropriated PESO assets.",
      },
    ],
    primaryRoute: {
      label: "Launch Unpaid Invoice & Asset Recovery",
      href: "/recovery/unpaid-invoices",
    },
  },
  {
    id: "minerals-ob-timber",
    tabLabel: "Minerals, OB & Timber",
    title: "Ceramic/Steel Plant Holding Quartz/Feldspar Bills, Leaseholder Stalling OB Fleet, or Plywood Dealer Default",
    statutoryTrigger: "MSMED Act ss.15–18 (3x RBI), s.43B(h) & Arbitration s.9/21",
    bottleneck:
      "Mineral grinding/calcining plants (Beawar, Udaipur, Bhuj, Ongole, Katni), mining overburden (OB) & HEMM fleet contractors, and Gandhidham/Yamunanagar timber & plywood wholesalers face 120–180 day credit lockups, unilateral volumetric survey cuts, and stalled gate-pass demobilization.",
    legalMechanism:
      "Udyam-registered mineral grinding, calcining, and plywood manufacturing units qualify as Manufacturing MSMEs—unlocking 3x RBI compound interest under MSMED s.16 and corporate tax disallowance under Income Tax Act s.43B(h). For OB/HEMM contractors, joint volumetric survey sign-offs and Arbitration s.9 interim reliefs prevent illegal retention of heavy excavators.",
    operationalSteps: [
      {
        step: "1. Verify Udyam Manufacturing Eligibility & Survey Sign-Offs",
        detail:
          "Lock Udyam certificate dates against invoice dates for MSMED/43B(h) leverage, or compile joint OB volumetric survey sheets and e-Ravanna royalty passes.",
      },
      {
        step: "2. Serve Statutory Demand Flagging s.43B(h) Tax Disallowance",
        detail:
          "Quantify 3x RBI compound interest using the statutory formula and notify the buyer's CFO/auditors of mandatory Year-End tax add-back exposure.",
      },
      {
        step: "3. Route to MSEFC Conciliation, s.9 Arbitration or Bulk CSV",
        detail:
          "Escalate single high-value ledgers to MSEFC / Commercial Court, or upload 50–1,000+ dealer defaults via CSV for synchronized legal notice dispatch.",
      },
    ],
    primaryRoute: {
      label: "Calculate 3x RBI MSMED Interest",
      href: "/tools/msme-delayed-payment-interest-calculator",
    },
  },
];

export default function CommodityHubScenarioTabs() {
  const [activeId, setActiveId] = useState<string>(COMMODITY_SCENARIOS[0].id);
  const active =
    COMMODITY_SCENARIOS.find((item) => item.id === activeId) || COMMODITY_SCENARIOS[0];

  return (
    <div className="w-full">
      {/* Tab Buttons */}
      <div
        role="tablist"
        aria-label="IND-25 Commodity Recovery Scenarios"
        className="flex flex-wrap gap-2 mb-6"
      >
        {COMMODITY_SCENARIOS.map((item) => {
          const isActive = item.id === activeId;
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveId(item.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer border ${
                isActive
                  ? "bg-[#DC2626] text-white border-[#DC2626] shadow-md shadow-red-900/15"
                  : "bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              {item.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Scenario Panel */}
      <div
        role="tabpanel"
        className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 md:p-7"
      >
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-red-50 text-[#DC2626] border border-red-200">
            {active.statutoryTrigger}
          </span>
        </div>

        <h3 className="text-base sm:text-lg md:text-xl font-extrabold text-slate-900 leading-snug mb-4">
          {active.title}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
          <div className="bg-white border border-slate-200 rounded-xl p-4">
            <p className="text-[11px] font-extrabold uppercase tracking-wider text-amber-700 mb-1.5">
              Commercial Bottleneck
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {active.bottleneck}
            </p>
          </div>
          <div className="bg-white border border-emerald-200 rounded-xl p-4">
            <p className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-700 mb-1.5">
              Creditor Legal Mechanism
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {active.legalMechanism}
            </p>
          </div>
        </div>

        <div className="space-y-2.5 mb-5">
          {active.operationalSteps.map((s) => (
            <div
              key={s.step}
              className="bg-white border border-slate-200 rounded-xl p-3.5 sm:p-4"
            >
              <p className="text-xs sm:text-sm font-bold text-slate-900 mb-1">
                {s.step}
              </p>
              <p className="text-xs text-slate-600 leading-relaxed">{s.detail}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-end">
          <Link
            href={active.primaryRoute.href}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-slate-900 hover:bg-[#DC2626] transition-colors"
          >
            {active.primaryRoute.label} &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
