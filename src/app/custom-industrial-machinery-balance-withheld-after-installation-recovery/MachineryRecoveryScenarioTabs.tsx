"use client";

import React, { useState } from "react";

interface Scenario {
  id: string;
  tabLabel: string;
  title: string;
  badge: string;
  buyerProfile: string;
  pretext: string;
  legalReality: string;
  statutoryHook: string;
  actionProtocol: string[];
}

const SCENARIOS: Scenario[] = [
  {
    id: "commercial-production-without-ecc",
    tabLabel: "1. 3-Shift Output Without ECC",
    title: "Buyer Runs Machinery in 3-Shift Commercial Production While Refusing Commissioning Sign-Off",
    badge: "Sale of Goods Act s.42 Deemed Acceptance",
    buyerProfile:
      "Mid-to-large manufacturing plants, automotive component suppliers, plastic processing units, or FMCG packaging factories in Pune, Rajkot, Coimbatore, Ludhiana, or Faridabad.",
    pretext:
      "Buyer paid 80% advance and dispatch milestones, took delivery of a custom Special Purpose Machine (SPM), packaging line, or CNC center, and had the supplier's engineers erect it. However, the buyer's plant head repeatedly refuses to execute the Erection & Commissioning Certificate (ECC) or Joint Acceptance Test (JAT) protocol, alleging 'minor calibration pending.' Meanwhile, the factory runs the machinery around the clock, producing and shipping finished goods to its commercial customers for months while freezing the final 15–20% balance (₹12 Lakh to ₹85 Lakh).",
    legalReality:
      "Under Section 42 of the Sale of Goods Act, 1930, a buyer is deemed to have legally accepted goods when they perform any act in relation to them which is inconsistent with the seller's ownership. Operating an industrial machine to manufacture commercial output for revenue is an unequivocal assertion of ownership. The buyer cannot enjoy the economic benefits of commercial production while simultaneously claiming the machine remains unaccepted. Acceptance is established as a matter of law, extinguishing the buyer's right of rejection.",
    statutoryHook:
      "Sale of Goods Act 1930 s.42 & s.55 (Suit for Price) + BSA 2023 s.63 SCADA / Electricity Telemetry",
    actionProtocol: [
      "Extract timestamped PLC cycle counts, SCADA production logs, and industrial power utility load profiles establishing continuous factory operation.",
      "Track buyer's outward GST e-Way bills and GSTR-1 filings demonstrating commercial sale of goods produced on the subject machinery line.",
      "Serve a formal statutory Section 42 Deemed Acceptance Notice notifying the buyer that commercial production legally confirms acceptance and matures the withheld balance.",
      "Issue a 15-Day Advocate Demand Notice initiating MSMED Act Section 18 proceedings or Commercial Summary Suit under Order XXXVII CPC.",
    ],
  },
  {
    id: "belated-defect-speed-shortfall",
    tabLabel: "2. Belated Speed/Defect Claims",
    title: "Buyer Alleges Speed/Efficiency Shortfall 6 Months Later to Forfeit Balance While Keeping Machine",
    badge: "Section 59 Breach of Warranty Bar",
    buyerProfile:
      "Heavy engineering firms, sheet-metal press shops, pharmaceutical blister-packaging plants, or industrial automation clients.",
    pretext:
      "After operating the machinery continuously for 180+ days, the buyer receives the supplier's final retention invoice. In response, the buyer's procurement team raises an aggressive legal dispute, claiming: 'The machine delivers only 820 units per hour instead of the rated 1,000 units/hour. We reject the machine and forfeit your remaining 20% balance as liquidated damages.' Despite claiming 'rejection,' the buyer refuses to return the machine and continues using it daily.",
    legalReality:
      "Under Section 59 of the Sale of Goods Act, 1930, where the buyer has accepted the goods (or is deemed to have accepted them under Section 42), the buyer cannot reject the machinery. Their sole legal remedy is limited to setting up a breach of warranty in diminution or extinction of the price, or filing an independent claim for proven damages. Crucially, the buyer bears the strict evidentiary burden of proving actual technical loss, and cannot unilaterally withhold the entire contract price or invent unverified liquidated damages.",
    statutoryHook:
      "Sale of Goods Act 1930 s.59 + Indian Contract Act 1872 s.73 (Proof of Actual Loss) + Commercial Courts Act s.12A",
    actionProtocol: [
      "Produce the initial installation sign-off sheets, delivery challans, and technician service reports confirming initial parameter compliance.",
      "Demand joint inspection by an independent government-approved Chartered Engineer or accredited technical institute (e.g., CMTI, ARAI, or IIT).",
      "Counter the belated rejection claim by invoking Section 59, establishing that the buyer's right to reject is legally barred.",
      "Demand immediate payment of the principal balance plus 3x RBI compound penal interest under Section 16 of the MSMED Act, 2006.",
    ],
  },
  {
    id: "retention-money-holdback",
    tabLabel: "3. Unlawful Retention Holdback",
    title: "Buyer Withholds 10–20% Cash Retention After Warranty Period & Rejects Bank Guarantee (PBG)",
    badge: "Unjust Enrichment & Section 43B(h)",
    buyerProfile:
      "Large corporate manufacturers, EPC project contractors, Tier-1 automotive OEMs, or listed industrial enterprises holding back vendor cash retainage.",
    pretext:
      "The contract stipulated that 10% of the machinery cost would be withheld as 'Retention Money' for a 12-month Defect Liability Period (DLP). The supplier offers a 10% Performance Bank Guarantee (PBG) from a scheduled commercial bank to release cash flow, but the buyer arbitrarily rejects the PBG. Furthermore, when the 12-month DLP elapses with zero defect notifications, the buyer's accounts department ignores release requests, citing 'internal treasury hold.'",
    legalReality:
      "Retention money is not the buyer's profit; it is trust money held conditionally against latent defects. Once the Defect Liability Period expires without documented warranty claims, retaining the vendor's funds constitutes civil conversion and unjust enrichment under Section 70 of the Indian Contract Act. For Udyam-registered MSME machine builders, retaining funds past 45 days triggers statutory interest at 3 times RBI Bank Rate under Section 16 MSMED Act and corporate tax disallowance under Section 43B(h) of the Income Tax Act.",
    statutoryHook:
      "MSMED Act 2006 ss. 15–18 + Income Tax Act s.43B(h) + Indian Contract Act s.70 (Quantum Meruit / Unjust Enrichment)",
    actionProtocol: [
      "Submit formal completion audit showing expiration of the 12-month DLP with zero open warranty tickets or maintenance logs.",
      "Deliver a formal Section 43B(h) Income Tax Disallowance Notice to the buyer's CFO and statutory auditors prior to March 31.",
      "Compute accrued monthly compounding interest under MSMED Act Section 16 (currently ~20.25% p.a.) on the withheld retention balance.",
      "File an institutional reference before the MSEFC or initiate summary proceedings in the competent Commercial Court.",
    ],
  },
  {
    id: "raw-material-operator-negligence",
    tabLabel: "4. Raw Material / User Error",
    title: "Buyer Feeds Off-Spec Raw Material, Breaks Tooling, and Blames Machine Builder with Debit Notes",
    badge: "Tortious Contributory Negligence & s.16 Bar",
    buyerProfile:
      "Continuous extrusion, stamping, wire-drawing, injection-molding, or automated packaging plants using non-standard raw materials.",
    pretext:
      "To cut production costs, the buyer feeds sub-standard, out-of-tolerance raw material (e.g., high-impurity recycled polymer, unannealed sheet metal with erratic tensile strength, or off-spec chemical solvent) into the high-precision machine. When drive motors trip, cutter blades chip, or packaging seals fail, the buyer claims machine design failure and slaps arbitrary ₹18 Lakh unilateral debit notes for tooling replacement and factory downtime.",
    legalReality:
      "Under Section 16(1) of the Sale of Goods Act, 1930, the implied warranty of fitness for purpose applies only when the buyer operates the machinery in accordance with specified technical parameters. When machinery damage arises from unapproved raw materials, operator mishandling, or bypass of safety interlocks, the liability rests squarely on the buyer under the doctrine of contributory negligence. Unilateral debit notes issued without bilateral agreement have no legal validity to reduce liquidated contract prices.",
    statutoryHook:
      "Sale of Goods Act 1930 s.16(1) + Order XXXVII Rule 2 CPC + BNS 2023 s.316 (Criminal Breach of Trust)",
    actionProtocol: [
      "Procure raw material inspection logs, raw material test certificates (MTRs), and supplier batch numbers showing variance from agreed machine specs.",
      "Extract PLC alarm history logs proving that buyer's technicians repeatedly bypassed factory safety overloads and torque limiters.",
      "Issue a formal legal repudiation of the arbitrary debit note within 7 days, categorizing it as an unlawful post-facto contrivance.",
      "File Commercial Summary Suit under Order XXXVII CPC for the full unpaid machine balance without recognizing the debit note.",
    ],
  },
];

interface MachineryRecoveryScenarioTabsProps {
  className?: string;
}

export default function MachineryRecoveryScenarioTabs({
  className = "",
}: MachineryRecoveryScenarioTabsProps) {
  const [activeTab, setActiveTab] = useState<string>(SCENARIOS[0].id);

  const scenario = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className={`w-full ${className}`}>
      {/* Tab navigation */}
      <div className="flex flex-wrap gap-2 mb-6 border-b border-slate-200 pb-3">
        {SCENARIOS.map((s) => {
          const isActive = s.id === activeTab;
          return (
            <button
              key={s.id}
              type="button"
              onClick={() => setActiveTab(s.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                isActive
                  ? "bg-[#DC2626] text-white shadow-md shadow-red-900/20"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              {s.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Tab content panel */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-7 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-red-100 text-[#DC2626] border border-red-200">
            {scenario.badge}
          </span>
          <span className="text-[11px] font-semibold text-slate-500">
            Governing Law: {scenario.statutoryHook}
          </span>
        </div>

        <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-3 leading-snug">
          {scenario.title}
        </h3>

        {/* Profile */}
        <div className="mb-4 bg-white rounded-xl p-3.5 border border-slate-200">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
            Buyer Profile &amp; Factory Segment:
          </p>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            {scenario.buyerProfile}
          </p>
        </div>

        {/* Commercial Pretext vs Legal Reality */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
          <div className="bg-red-50/70 border border-red-200/80 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
              <p className="text-xs font-extrabold text-[#DC2626] uppercase tracking-wider">
                Buyer&apos;s Commercial Pretext
              </p>
            </div>
            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
              {scenario.pretext}
            </p>
          </div>

          <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-600" />
              <p className="text-xs font-extrabold text-emerald-800 uppercase tracking-wider">
                Statutory Legal Reality
              </p>
            </div>
            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
              {scenario.legalReality}
            </p>
          </div>
        </div>

        {/* Action Protocol */}
        <div className="bg-white rounded-xl p-4 border border-slate-200">
          <p className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
            Creditor Action Protocol &amp; Statutory Steps:
          </p>
          <ul className="space-y-2">
            {scenario.actionProtocol.map((step, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#DC2626] text-white text-[10px] font-bold shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
