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
    id: "fitting-sizing-pretext",
    tabLabel: "Fitting / Sizing Pretext",
    title: "Buyer Withholds 50% Balance Citing Belated 'Fitting' or 'Size' Objections",
    cause:
      "After receiving 5,000 logo-embroidered corporate shirts or hotel staff uniforms and distributing them to employees, the buyer's procurement team raises vague emails 30–60 days later claiming 'collar stiffness', 'sleeve tightness', or 'shrinkage' to force a 25–40% debit note.",
    legalBasis:
      "Under Section 17 of the Sale of Goods Act, 1930 (Sale by Sample), once bulk production conforms to the buyer-approved Size-Set / Golden Sample, subjective dissatisfaction is barred. Furthermore, under Section 42, retaining goods beyond a reasonable time without rejection—or distributing uniforms to staff—constitutes irrevocable deemed acceptance, triggering a direct price suit under Section 55(1) alongside Estoppel under Section 121 BSA 2023.",
    steps: [
      {
        step: "Freeze the Size-Set & Golden Sample Sign-Off",
        description:
          "Compile the signed Size-Set approval sheet (S/M/L/XL/XXL grading chart), Pantone shade card, and fabric GSM test report initialled by the buyer's HR or admin head prior to bulk cutting.",
      },
      {
        step: "Document Staff Usage & Deemed Acceptance",
        description:
          "Preserve gate-entry challans, e-Way Bills, and timestamped LinkedIn/social or premises photos showing security guards, hotel staff, or factory workers wearing the supplied logo uniforms.",
      },
      {
        step: "Serve Section 55 + MSMED s.15 Demand Notice",
        description:
          "Issue an advocate notice rejecting the belated debit note as time-barred under Section 42 Sale of Goods Act and invoking 3x RBI compound interest under MSMED s.16 plus s.43B(h) tax disallowance warning.",
      },
    ],
    statutoryRule: "Sale of Goods Act s.17, s.42 & s.55(1) | BSA 2023 s.121 Estoppel",
  },
  {
    id: "school-trust-society",
    tabLabel: "School Trust / Society",
    title: "School Management Withholds Uniform Balance Over Fee Collection or PTA Friction",
    cause:
      "Private schools, coaching institutes, and university hostels in Mumbai, Bengaluru, and Ahmedabad often delay the 50% balance payment citing slow parent uniform-kit collections, change of principal, or internal Trust/Society committee disputes.",
    legalBasis:
      "A school's internal collection cycle from parents does not create a 'back-to-back' payment condition unless expressly agreed in writing. Crucially, under Section 6 of the Societies Registration Act, 1860 (or respective State Public Trusts Acts), a school trade name is not a juristic person—legal notices and Summary Suits must name the Registered Society (through its President/Secretary) or all managing Trustees jointly.",
    steps: [
      {
        step: "Extract MCA / Charity Commissioner / Registrar Entity Details",
        description:
          "Pull the school's Registered Society number, Public Trust PTR copy, or Section 8 Company CIN from the GSTIN and CBSE/ICSE affiliation disclosures so the demand notice cannot be deflected on technical misjoinder.",
      },
      {
        step: "Implead President, Secretary & Authorised Signatory",
        description:
          "Address the statutory notice jointly to the Registered Society/Trust, the Principal who signed the Purchase Order, and the Treasurer/Managing Trustee.",
      },
      {
        step: "File Order XXXVII Summary Suit or MSEFC Reference",
        description:
          "Where the Purchase Order, GST tax invoice, and signed delivery challan are undisputed, file an Order XXXVII CPC Summary Suit or MSEFC Claim on MSME Samadhaan to prevent multi-year trial delays.",
      },
    ],
    statutoryRule: "Societies Registration Act s.6 | CPC Order XXXVII | MSMED Act s.15–18",
  },
  {
    id: "industrial-fr-workwear-ppe",
    tabLabel: "Industrial FR / PPE",
    title: "Factory or Security Agency Disputes Custom Flame-Retardant Workwear & Safety PPE",
    cause:
      "Manufacturing plants, oil & gas contractors, and PSARA security agencies order specialized high-visibility jackets, flame-retardant (FR) coveralls, or anti-static uniforms with woven company badges, then stall the 50% balance claiming 'spec mismatch' or 'project hold'.",
    legalBasis:
      "Custom-dyed, reflective-taped, and logo-embroidered industrial workwear has zero open-market resale value. Under Section 55(2) of the Sale of Goods Act, where the price is payable on a day certain or upon readiness for delivery of bespoke goods, the manufacturer can sue for the full contract price even if the buyer refuses to lift the packed lots—backed by NABL/ISO lab certificates proving FR/GSM compliance.",
    steps: [
      {
        step: "Attach Third-Party Lab & Mill Test Certificates",
        description:
          "Pair your batch dispatch with NABL-accredited GSM, colour-fastness, and EN ISO 11612 / IS flame-retardant test reports matching the PO technical annexure.",
      },
      {
        step: "Exercise Unpaid Seller's Lien on Balance Packed Lots",
        description:
          "If part of the stitched lot remains in your Bhiwandi, Tirupur, or Ahmedabad godown, invoke Section 47 Sale of Goods Act lien and issue a 7-day 'Notice of Readiness to Deliver' fixing storage/demurrage charges.",
      },
      {
        step: "Trigger Section 43B(h) Tax Disallowance Audit Alert",
        description:
          "Notify the corporate buyer's CFO and Statutory Auditor that unpaid Micro/Small uniform vendor balances past 45 days trigger automatic deduction disallowance under Income Tax Act s.43B(h).",
      },
    ],
    statutoryRule: "Sale of Goods Act s.47 & s.55(2) | Income Tax Act s.43B(h)",
  },
  {
    id: "cancelled-after-cutting",
    tabLabel: "Cancelled Post-Cutting",
    title: "Hospital or Hotel Chain Cancels Bulk Linen & Uniform Order After Fabric Cutting",
    cause:
      "Hospitality groups, hospital chains, and corporate facility managers sometimes cancel the second tranche of a 5,000-piece uniform or custom-monogrammed linen order mid-production after fabric has been dyed to their brand Pantone and cut into panels.",
    legalBasis:
      "Once raw fabric is custom-dyed, cut to buyer-specific size ratios, and embroidered with the buyer's registered trademark/logo, the goods are unconditionally appropriated to the contract under Section 23 of the Sale of Goods Act. Unilateral cancellation amounts to anticipatory breach under Section 39/73 of the Indian Contract Act, 1872, entitling the vendor to full WIP cost, conversion charges, and loss of profit.",
    steps: [
      {
        step: "Freeze WIP & Cutting Floor Evidence Immediately",
        description:
          "Photograph and video-record cut bundles, embroidery frames, woven label rolls, and custom-dyed fabric rolls with timestamps and Section 63 BSA 2023 hash/metadata logs.",
      },
      {
        step: "Quantify Zero-Resale & Trademark Restriction Loss",
        description:
          "Record explicitly that IP/trademark law prohibits you from selling logo-embroidered uniforms in the open market, proving 100% net loss on unlifted WIP inventory.",
      },
      {
        step: "Serve Combined Contract Act s.73 & MSMED Demand",
        description:
          "Demand immediate release of the 50% balance on delivered lots plus 100% WIP conversion cost on cut-and-embroidered inventory within 15 days before initiating Commercial Court s.12A mediation or MSEFC filing.",
      },
    ],
    statutoryRule: "Sale of Goods Act s.23 & s.55 | Indian Contract Act s.73 | BSA s.63",
  },
];

export default function UniformScenarioTabs() {
  const [activeTabId, setActiveTabId] = useState<string>(SCENARIOS[0].id);
  const activeScenario = SCENARIOS.find((s) => s.id === activeTabId) || SCENARIOS[0];

  return (
    <div className="w-full">
      {/* Tab Buttons */}
      <div
        role="tablist"
        aria-label="Uniform Bulk Order Default Scenarios"
        className="flex flex-wrap gap-2 mb-6"
      >
        {SCENARIOS.map((scenario) => {
          const isActive = scenario.id === activeTabId;
          return (
            <button
              key={scenario.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveTabId(scenario.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer border ${
                isActive
                  ? "bg-[#DC2626] text-white border-[#DC2626] shadow-sm"
                  : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              {scenario.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Scenario Card */}
      <div
        role="tabpanel"
        className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 md:p-7"
      >
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
            {activeScenario.title}
          </h3>
          <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold bg-red-50 text-[#DC2626] border border-red-200">
            {activeScenario.statutoryRule}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-white border border-slate-200 rounded-xl p-4">
            <span className="block text-[11px] font-bold uppercase tracking-wider text-amber-700 mb-1.5">
              Commercial Bottleneck
            </span>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {activeScenario.cause}
            </p>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl p-4">
            <span className="block text-[11px] font-bold uppercase tracking-wider text-emerald-700 mb-1.5">
              Creditor Statutory Counter-Move
            </span>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {activeScenario.legalBasis}
            </p>
          </div>
        </div>

        <div className="space-y-3">
          {activeScenario.steps.map((item, idx) => (
            <div
              key={item.step}
              className="flex items-start gap-3 bg-white border border-slate-200 rounded-xl p-4"
            >
              <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                {idx + 1}
              </span>
              <div>
                <p className="text-xs sm:text-sm font-bold text-slate-900 mb-1">
                  {item.step}
                </p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
