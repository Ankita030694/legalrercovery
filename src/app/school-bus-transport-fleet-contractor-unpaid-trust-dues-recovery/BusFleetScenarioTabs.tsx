"use client";

import React, { useState } from "react";

interface ScenarioTab {
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

const SCENARIOS: ScenarioTab[] = [
  {
    id: "summer-vacation-cut",
    tabLabel: "1. Summer Vacation Cut",
    title: "School Trust Refuses May–June Billing Despite Collecting Annual Transport Fees",
    cause:
      "Private schools routinely collect quarterly or annual transport fees from 1,000–2,000 parents upfront in April, yet withhold May and June payments to the bus fleet contractor claiming 'zero bus movement during summer vacations'. Meanwhile, the contractor's yellow-painted school buses carry state permit restrictions preventing commercial tourist deployment and incur fixed bank EMIs, insurance, road tax, and driver retainers all 12 months.",
    legalBasis:
      "Under Sections 73 and 74 of the Indian Contract Act, 1872, a fixed 12-month standing-charge or minimum-guarantee transport contract cannot be unilaterally converted into a 10-month pay-as-you-go arrangement. Moreover, when the school trust collects earmarked transport fees from parents for the full academic year, withholding the contractor's share triggers a Fiduciary/Escrow Admission Argument and unjust enrichment under Section 70 of the Contract Act.",
    steps: [
      {
        step: "Establish Earmarked Fee Collection in Demand Notice",
        description:
          "Attach the school's published parent fee circular / transport prospectus proving that parents were billed on an annual or 12-month cycle for bus services.",
      },
      {
        step: "Enforce 12-Month Fixed Standing Charges + Permit Lock-In",
        description:
          "Cite the state Motor Vehicles Rules yellow-bus branding and dedicated school permit restrictions that legally bar deploying those vehicles for third-party commercial hire during May–June.",
      },
      {
        step: "Trigger MSMED Section 15–16 Compound Interest",
        description:
          "If your fleet enterprise holds Udyam Registration, compute 3x RBI bank rate compound interest with monthly rests from Day 46 on every unpaid May–June invoice.",
      },
    ],
    statutoryRule: "Sections 70, 73 & 74 Indian Contract Act, 1872 | MSMED Act s.15–18",
  },
  {
    id: "diesel-escalation-freeze",
    tabLabel: "2. Diesel Escalation Freeze",
    title: "Trust Pays Base Route Rate Only—Ignoring Fuel Escalation & Extra-Km Bills",
    cause:
      "When diesel prices rise by ₹8–₹15 per litre or the school adds extra afternoon coaching/exam shuttle trips, the trust accounts office clears only the base monthly slab and indefinitely 'keeps under audit' the diesel escalation and extra-kilometre invoices.",
    legalBasis:
      "Where the Transport Agreement contains a Fuel Price Variation / Diesel Escalation Formula linked to Indian Oil / BPCL retail pump rates, the resulting adjustment is a liquidated contractual debt—not an unliquidated claim. Under Order XXXVII CPC and Section 15 of the MSMED Act, 2006, partial payment of base bills without raising a written quality/measurement objection within 15 days under Section 2(b) constitutes deemed acceptance.",
    steps: [
      {
        step: "Compile State PSU Fuel Rate Chart & GPS Odometer Logs",
        description:
          "Pair monthly IOCL/BPCL city retail diesel price notifications with GPS route-kilometre exports certified under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023.",
      },
      {
        step: "Invoke 15-Day Written Objection Bar (MSMED s.2(b))",
        description:
          "Prove that the school transport coordinator signed daily/monthly route logbooks and raised zero written dispute within 15 days of invoice submission.",
      },
      {
        step: "Demand Consolidated Principal + Escalation Arrears",
        description:
          "Bundle base arrears, diesel differential, and extra-shuttle trips into a single Advocate Legal Notice with a 15-day cure window before MSEFC filing.",
      },
    ],
    statutoryRule: "MSMED Act s.2(b) & s.15 | Order XXXVII CPC | BSA 2023 s.63",
  },
  {
    id: "trust-entity-evasion",
    tabLabel: "3. Trust / Society Evasion",
    title: "Principal Claims 'Talk to Old Trust Secretary' After 4 Months of Non-Payment",
    cause:
      "Fleet contractors often sign agreements with the School Principal or Transport In-Charge on school letterhead. After 4 months of unpaid bills (₹15–₹40 Lakh), the Principal blames the Managing Trustee, or a new Trust Committee refuses to honor bills signed by the outgoing Secretary.",
    legalBasis:
      "A school brand name is not a juristic person. Under Section 6 of the Societies Registration Act, 1860, a registered society must be sued through its President, Chairman, or Secretary. For Public Trusts, Order XXXI CPC and applicable State Public Trusts Acts require impleading the Trust and its Managing/all Trustees. Internal management changes do not extinguish corporate or trust liability once buses operated on campus routes.",
    steps: [
      {
        step: "Map the Exact Legal Entity via CBSE/ICSE & GSTIN Records",
        description:
          "Verify the underlying Registered Society, Public Charitable Trust, or Section 8 Company from the school's Mandatory Public Disclosure and Form 26AS TDS deductor TAN.",
      },
      {
        step: "Array Both the Society/Trust and Office-Bearers",
        description:
          "Address the Advocate Demand Notice to the Registered Trust/Society, the President/Secretary/Managing Trustee, and the School Principal jointly.",
      },
      {
        step: "Block Unlawful Fleet Substitution Before Dues Clearance",
        description:
          "Warn the Trust that onboarding a replacement bus vendor while withholding accrued transport fees collected from parents exposes the trustees to civil attachment.",
      },
    ],
    statutoryRule: "Section 6 Societies Registration Act, 1860 | Order XXXI CPC | Indian Trusts Act, 1882",
  },
  {
    id: "bounced-cheque-and-termination",
    tabLabel: "4. Cheque Bounce & Termination",
    title: "Trust Issues Post-Dated Cheques That Bounce—Then Threatens Contract Cancellation",
    cause:
      "To pacify the fleet operator before the new academic term, the School Trust issues 2–3 post-dated cheques (PDCs) or NACH mandates for ₹8–₹18 Lakh. When the cheques bounce for 'Funds Insufficient' or 'Payment Stopped by Drawer', the trust threatens immediate fleet termination if the contractor initiates legal action.",
    legalBasis:
      "Dishonour of a trust/society cheque issued toward an existing debt attracts criminal liability under Section 138 read with Section 141 of the Negotiable Instruments Act, 1881 against the authorized signatories (Secretary/Treasurer/Trustee in charge of affairs). For NACH/ECS mandates, Section 25 of the Payment and Settlement Systems Act, 2007 carries identical penal consequences. Simultaneously, the contractor can pursue civil recovery without pausing the 30-day NI Act statutory notice clock.",
    steps: [
      {
        step: "Preserve Bank Return Memo & Serve 30-Day s.138 Notice",
        description:
          "Dispatch a strict Section 138 NI Act / Section 25 PSS Act statutory demand notice within 30 days of receiving the bank dishonour memo, naming the Trust and cheque signatories.",
      },
      {
        step: "Never Halt Buses Abruptly Without Written Termination Notice",
        description:
          "Abruptly stranding school children invites police/RTO complaints and counter-claims. Instead, serve a 15-day contractual cure-or-suspension notice while continuing documented service.",
      },
      {
        step: "Run Parallel MSEFC / Order XXXVII Recovery",
        description:
          "Criminal proceedings under Section 138 create immediate settlement leverage, while parallel MSEFC Samadhaan or Order XXXVII CPC proceedings secure executable money decrees.",
      },
    ],
    statutoryRule: "Sections 138 & 141 NI Act, 1881 | Section 25 PSS Act, 2007 | MSMED Act s.18",
  },
];

export default function BusFleetScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(SCENARIOS[0].id);
  const current = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full">
      {/* Tab Buttons */}
      <div
        role="tablist"
        aria-label="School Bus Fleet Default Scenarios"
        className="flex flex-wrap gap-2 mb-6"
      >
        {SCENARIOS.map((scenario) => {
          const isActive = scenario.id === activeTab;
          return (
            <button
              key={scenario.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveTab(scenario.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                isActive
                  ? "bg-[#DC2626] text-white shadow-md shadow-red-900/20"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200"
              }`}
            >
              {scenario.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Scenario Panel */}
      <div
        role="tabpanel"
        className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-5"
      >
        <div>
          <span className="inline-block px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-red-50 text-[#DC2626] border border-red-200 mb-2">
            {current.statutoryRule}
          </span>
          <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 leading-snug">
            {current.title}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white border border-slate-200 rounded-xl p-4">
            <p className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 mb-1.5">
              Commercial Failure Pattern
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{current.cause}</p>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl p-4">
            <p className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-700 mb-1.5">
              Creditor Statutory Weapon
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {current.legalBasis}
            </p>
          </div>
        </div>

        <div>
          <p className="text-xs font-extrabold uppercase tracking-wider text-slate-500 mb-3">
            3-Step Fleet Operator Action Plan
          </p>
          <div className="space-y-2.5">
            {current.steps.map((item, idx) => (
              <div
                key={item.step}
                className="flex items-start gap-3 bg-white border border-slate-200 rounded-xl p-3.5"
              >
                <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <div>
                  <p className="text-xs sm:text-sm font-bold text-slate-900">{item.step}</p>
                  <p className="text-xs text-slate-600 leading-relaxed mt-0.5">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
