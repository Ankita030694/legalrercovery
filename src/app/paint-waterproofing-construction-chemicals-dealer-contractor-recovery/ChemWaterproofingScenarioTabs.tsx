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
    id: "warranty-withholding",
    tabLabel: "10-Yr Warranty Hold",
    title: "Builder Withholds 20%–30% Final Bill Citing '5-to-10-Year Waterproofing Warranty'",
    cause:
      "After basement, podium, or terrace waterproofing passes the 72-hour ponding test and receives site handover, the developer refuses to clear the final 20%–30% invoice, claiming the money must stay parked as 'warranty security' for 5 to 10 years.",
    legalBasis:
      "Under Sections 31, 32, and 55 of the Sale of Goods Act, 1930 and Section 52 of the Indian Contract Act, 1872, the buyer's obligation to pay the contract price upon delivery and completed application is an independent, immediate covenant unless a specific retention percentage with a fixed release date is expressly written in the signed work order. A 10-year product performance warranty is a post-payment remedial covenant—not a right to convert trade receivables into an interest-free 10-year deposit. Where the applicator or chemical brand holds Udyam (Micro/Small) registration, withholding beyond 45 days triggers mandatory 3x RBI compound interest under MSMED Act Section 16 and 100% tax disallowance under Income Tax Act Section 43B(h).",
    steps: [
      {
        step: "Condition the Warranty Stamp Bond on 100% Receipt",
        description:
          "Issue a formal notice stating that the 10-year Non-Judicial Stamp Paper Warranty Bond activates exclusively upon 100% realization of all supply and application invoices.",
      },
      {
        step: "Separate Ponding-Test Handover from Defect Liability",
        description:
          "Attach the joint 72-hour ponding test report and site handover sheet proving zero leakage at completion under Sale of Goods Act s.42.",
      },
      {
        step: "Serve Section 43B(h) + Order XXXVII Demand Notice",
        description:
          "Demand immediate clearance of the withheld 20% balance with MSMED 3x RBI compound interest and notify the builder's statutory auditor of Section 43B(h) disallowance.",
      },
    ],
    statutoryRule: "Sale of Goods Act s.32/s.55, Contract Act s.52 & MSMED Act s.15–16",
  },
  {
    id: "epoxy-blistering",
    tabLabel: "Epoxy Blistering",
    title: "Industrial Epoxy / PU Flooring Blisters Due to Missing Civil Vapor Barrier",
    cause:
      "Factory owners or warehouse developers blame the epoxy/PU flooring applicator for osmotic blistering, pinholing, or delamination weeks after handover—even though the root cause is ground-water capillary rise from the civil contractor's omitted polythene vapor barrier or uncured green concrete.",
    legalBasis:
      "Under Indian Contract Act Section 53 and Section 54, when a civil contractor or owner fails to provide a compliant, moisture-free concrete substrate (typically below 4%–5% moisture content by Tramex/calcium chloride test per ASTM F1869), the resulting hydrostatic vapor pressure is a breach of the employer's reciprocal site-readiness obligation. An applicator who recorded pre-application substrate moisture logs or obtained a conditional site-handover sign-off cannot be held liable for structural slab dampness, and unilateral 100% bill forfeiture violates Section 74 of the Contract Act.",
    steps: [
      {
        step: "Produce Pre-Application Moisture & Dew-Point Logs",
        description:
          "Compile calibrated digital moisture-meter photos, relative humidity readings, and signed daily site reports showing substrate conditions before primer coat application.",
      },
      {
        step: "Pinpoint Civil Slab Cracks & Vapor-Barrier Omission",
        description:
          "Document efflorescence, ground-water hydrostatic pressure, and absence of DPM (Damp Proof Membrane) beneath the PCC/RCC slab to separate chemical quality from civil defects.",
      },
      {
        step: "Reject Unilateral Debit Notes Under Contract Act s.74",
        description:
          "Serve a formal statutory rebuttal rejecting arbitrary repair deductions and demanding invoice payment backed by batch COA (Certificate of Analysis) reports.",
      },
    ],
    statutoryRule: "Indian Contract Act s.53, s.54 & s.74 + Batch COA Verification",
  },
  {
    id: "tinting-machine",
    tabLabel: "Tinting Machine Default",
    title: "Paint Dealer Defaults on Credit Line & Locks Branded Tinting Machine",
    cause:
      "Decorative or industrial paint dealers take ₹15–₹60 Lakh of base paints, colorants, and leased automated gyro-shakers/tinting dispensers on 30-day credit, then default on invoices while refusing to return the leased dispensing equipment or misappropriating it.",
    legalBasis:
      "Where tinting machines and gyro-shakers are placed under a Bailment / Equipment Lease Agreement, ownership never passes to the dealer under Section 148 and Section 160 of the Indian Contract Act, 1872. Retaining or encumbering bailed equipment after termination attracts civil recovery (Order XXXVII CPC for the credit ledger + mandatory injunction/replevin for machine repossession) as well as criminal breach of trust exposure under Section 316 of the Bharatiya Nyaya Sanhita (BNS), 2023, alongside NI Act Section 138 prosecution on dishonoured PDCs.",
    steps: [
      {
        step: "Issue Dual Termination & Equipment Recall Notice",
        description:
          "Terminate the dealership credit facility, revoke software/colorant license keys, and demand physical return of the bailed tinting machine within 7 days under Contract Act s.160.",
      },
      {
        step: "Present Security Cheques Under NI Act s.138",
        description:
          "Deposit the dealer's overdue PDCs/security cheques per Sripati Singh (2021) and issue a 30-day statutory demand notice seeking 20% interim compensation under s.143A.",
      },
      {
        step: "File Order XXXVII Suit + BNS s.316 Complaint",
        description:
          "Combine summary suit recovery on acknowledged GST invoices and ledger confirmations with criminal breach of trust action if the leased machine is concealed or sold.",
      },
    ],
    statutoryRule: "Indian Contract Act s.148/s.160, NI Act s.138/s.143A & BNS s.316",
  },
  {
    id: "admixture-supply-apply",
    tabLabel: "Admixture & MSME",
    title: "Builder Disputes Supply + Apply Waterproofing or Admixture Bills as 'Works Contract'",
    cause:
      "Developers argue that 'Supply + Apply' waterproofing or specialized concrete admixture dosing is a composite 'works contract' outside MSME Samadhaan (MSEFC) jurisdiction, or raise belated slump/dosage objections months after concrete has been cast.",
    legalBasis:
      "While pure turnkey works contracts face jurisdictional scrutiny before certain MSEFCs, split-invoicing—separating chemical material supply (HSN-coded GST tax invoices) from application labour bills—preserves indisputable MSEFC maintainability for the material supply component under Sections 15–18 of the MSMED Act, 2006. For composite contracts or non-MSME claims, Order XXXVII CPC summary suits, Commercial Courts Act s.12A pre-institution mediation, and IBC Section 8 Form 3/4 notices (>= ₹1 Crore) remain fully enforceable.",
    steps: [
      {
        step: "Segregate Material GST Invoices from Labour Bills",
        description:
          "Present standalone HSN-coded chemical supply invoices, E-Way Bills, and batch Certificates of Analysis as liquidated debt instruments.",
      },
      {
        step: "Lock Acceptance via Site Consumption & Ponding Logs",
        description:
          "Establish that the builder consumed the admixture/membrane in permanent RCC slabs without any contemporaneous rejection under Sale of Goods Act s.42.",
      },
      {
        step: "Trigger Dual Track: MSEFC (Material) + Order 37 / IBC s.8",
        description:
          "File on MSME Samadhaan for Udyam-covered supply bills (3x RBI interest) and deploy Order XXXVII CPC or IBC Section 8 Form 3/4 for high-value corporate developer arrears.",
      },
    ],
    statutoryRule: "MSMED Act s.15–18, Sale of Goods Act s.42 & IBC s.8 (Mobilox)",
  },
];

export default function ChemWaterproofingScenarioTabs() {
  const [activeId, setActiveId] = useState<string>(SCENARIOS[0].id);
  const current = SCENARIOS.find((s) => s.id === activeId) || SCENARIOS[0];

  return (
    <div className="w-full">
      <div
        role="tablist"
        aria-label="Construction chemical and waterproofing dispute scenarios"
        className="flex flex-wrap gap-2 mb-6 border-b border-slate-200 pb-3"
      >
        {SCENARIOS.map((item) => {
          const isSelected = item.id === activeId;
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={isSelected}
              onClick={() => setActiveId(item.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                isSelected
                  ? "bg-[#DC2626] text-white shadow-sm"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {item.tabLabel}
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-5"
      >
        <div>
          <span className="inline-block px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-red-100 text-[#DC2626] mb-2">
            {current.statutoryRule}
          </span>
          <h3 className="text-lg sm:text-xl font-black text-slate-900">
            {current.title}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white border border-slate-200 rounded-xl p-4">
            <p className="text-xs font-extrabold uppercase tracking-wider text-slate-500 mb-1.5">
              Commercial Failure Mode
            </p>
            <p className="text-sm text-slate-700 leading-relaxed">{current.cause}</p>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl p-4">
            <p className="text-xs font-extrabold uppercase tracking-wider text-[#DC2626] mb-1.5">
              Creditor Statutory Counter-Position
            </p>
            <p className="text-sm text-slate-700 leading-relaxed">
              {current.legalBasis}
            </p>
          </div>
        </div>

        <div>
          <p className="text-xs font-extrabold uppercase tracking-wider text-slate-900 mb-3">
            3-Step Recovery Execution Protocol
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {current.steps.map((st, idx) => (
              <div
                key={st.step}
                className="bg-white border border-slate-200 rounded-xl p-4 flex flex-col"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <span className="text-xs font-bold text-slate-900 leading-snug">
                    {st.step}
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {st.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
