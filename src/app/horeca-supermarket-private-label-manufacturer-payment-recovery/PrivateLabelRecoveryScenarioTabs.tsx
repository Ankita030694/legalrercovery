"use client";

import React, { useState } from "react";

interface Scenario {
  id: string;
  tabLabel: string;
  badge: string;
  title: string;
  problem: string;
  statutoryTrap: string;
  lawfulPlaybook: string;
  remedyCode: string;
  financialRecovery: string;
}

const SCENARIOS: Scenario[] = [
  {
    id: "abandoned-batch-cac-spike",
    tabLabel: "Burned Ad Spend & Abandoned Batch",
    badge: "D2C Cash Crunch Default",
    title: "D2C Brand Ordered 30,000 Custom Serum Bottles, Burnt Ad Budget & Refuses to Lift Stock",
    problem:
      "A fast-growing direct-to-consumer (D2C) skincare brand issued a confirmed Purchase Order for 30,000 units of custom 30ml Niacinamide & Salicylic Acid face serums. The contract manufacturing plant formulated the bulk, filled bespoke amber dropper bottles, applied the brand's proprietary screen printing and outer mono-cartons, and billed ₹42 Lakhs. When the brand's Meta (Facebook/Instagram) ad performance deteriorated and customer acquisition costs tripled, the founder stopped communication, ignored readiness intimations, and refused to uplift the finished stock or pay the 70% delivery balance.",
    statutoryTrap:
      "D2C founders often assume contract manufacturers are powerless because the goods are physically inside the factory. They argue that because delivery was not accepted, the factory can only resell the goods in the open market and claim nominal damages under Contract Act Section 73.",
    lawfulPlaybook:
      "1. Invoke Sale of Goods Act, 1930 Section 55(1) & Section 55(2): Where property in the goods has passed to the buyer, or where the price is payable on a day certain irrespective of delivery, the seller may sue for the full contract price.\n2. Establish Zero Alternative Commercial Market: Custom-branded cosmetic bottles bearing the buyer's registered trademark and loan-license details cannot lawfully be sold to third parties without committing trademark infringement and Drugs & Cosmetics Act violations.\n3. Serve a 15-Day Fact-Verified Statutory Demand Notice under Sale of Goods Act Section 44 (claiming manufacturing price, handling charges, and warehouse storage demurrage) combined with MSMED Act Section 15.\n4. Institute an Order XXXVII CPC Summary Suit or file before the MSEFC for full recovery plus 3x RBI compound interest.",
    remedyCode: "Sale of Goods Act s.55(2) (Action for Full Price) + MSMED Act s.15–18 + CPC Order XXXVII",
    financialRecovery: "100% Recovery of ₹42,00,000 Batch Invoice + ₹3,80,000 Warehouse Pallet Demurrage",
  },
  {
    id: "sham-viscosity-quality-defense",
    tabLabel: "Fabricated Quality / Viscosity Excuse",
    badge: "Afterthought Dispute Pretext",
    title: "Brand Fabricates 'Viscosity & Aroma Discrepancy' to Evade ₹36L Clean Batch Invoice",
    problem:
      "Upon receiving the proforma dispatch invoice and balance payment request for 25,000 units of gourmet snack pouches or cold-pressed shampoos, the D2C brand's procurement head sends an email asserting that 'the latest lab batch fails sensory viscosity and aroma standards' and unilaterally rejects the entire production run. The brand demands the return of their 30% advance and threatens regulatory escalation, despite having signed off on the pre-production pilot sample with identical batch Certificate of Analysis (COA) parameters.",
    statutoryTrap:
      "Defaulting brands routinely invent frivolous, unsubstantiated quality disputes after receiving demand notices to trigger the 'pre-existing dispute' defense under IBC Section 9 or to evade fast-track MSME Samadhaan conciliation.",
    lawfulPlaybook:
      "1. Rebut pretexts under Supreme Court doctrine in Mobilox Innovations v. Kirusa Software (2018): a spurious, illusory defense invented without contemporaneous objective data does not constitute a bona fide commercial dispute.\n2. Tender In-House Master Batch Records (BMR), Batch Packaging Records (BPR), and NABL-accredited third-party laboratory test reports proving exact conformance to the agreed Product Technical Dossier.\n3. Issue a formal 48-Hour Joint Inspection Call: Put the brand on written notice that failure to inspect the batch alongside an accredited independent chemist within 48 hours constitutes unconditional acceptance under Sale of Goods Act Section 42.\n4. Initiate MSME Samadhaan recovery and serve personal demand notice on the directors under Contract Act Section 73.",
    remedyCode: "Sale of Goods Act s.42 (Deemed Acceptance) + Mobilox Doctrine + NABL Dossier",
    financialRecovery: "Full ₹36,00,000 Invoiced Dues Upheld; Sham Debit Notes Struck Down",
  },
  {
    id: "custom-packaging-moq-breach",
    tabLabel: "Custom Packaging & MOQ Shortfall",
    badge: "Stranded Inventory & Labels",
    title: "Plant Procured ₹28L Custom Packaging on 100,000-Unit MOQ Commitment, Brand Abandoned PO",
    problem:
      "To obtain volume pricing for specialized airless acrylic pumps, biodegradable cosmetic tubes, and printed mono-cartons, the D2C brand entered into a 12-month Manufacturing Agreement committing to a Minimum Order Quantity (MOQ) of 1,00,000 units. The contract manufacturer procured ₹28 Lakhs worth of customized, brand-embossed packaging and dedicated warehouse racking. After ordering only 15,000 units across two quarters, the brand pivoted to another product line, terminated the contract, and refused to compensate the manufacturer for the ₹23.8 Lakhs in stranded, brand-specific packaging inventory.",
    statutoryTrap:
      "Brands argue that packaging procurement was the manufacturer's operational risk and that the purchase order did not contain an explicit 'take-or-pay' clause or automatic reimbursement obligation.",
    lawfulPlaybook:
      "1. Establish Promissory Estoppel & Contractual Indemnity: The procurement of custom packaging was executed in direct reliance on the brand's signed MOQ schedule, approved artwork proofs, and purchase forecasts.\n2. Enforce Section 73 of the Indian Contract Act, 1872: The manufacturer is entitled to compensation for all natural losses and expenses incurred directly from the breach of the volume commitment.\n3. Conduct physical inventory count and preserve digital artwork sign-offs under Bharatiya Sakshya Adhiniyam, 2023 Section 63.\n4. File a Commercial Court suit for liquidated procurement costs plus godown storage charges under Commercial Courts Act Section 2(1)(c)(xviii).",
    remedyCode: "Indian Contract Act s.73 (Damages for Custom Procurement) + Commercial Courts Act",
    financialRecovery: "₹23,80,000 Packaging Reimbursement + Scrap Offset Authorization",
  },
  {
    id: "loan-license-director-fraud",
    tabLabel: "Loan License Misuse & Director Fraud",
    badge: "Regulatory Violation & Dishonor",
    title: "Brand Sells Goods Under Plant's FDA / FSSAI License While Bouncing Cheques & Withholding Dues",
    problem:
      "A wellness brand operates under a Form 32 / Loan License arrangement utilizing the contract manufacturer's state FDA cosmetic manufacturing license and FSSAI facility registration. The brand issues post-dated cheques (PDCs) signed by its founders for ₹55 Lakhs of manufactured goods, lifts the stock, and sells it through quick-commerce dark stores (Blinkit, Zepto, Instamart) and Amazon. When the cheques are deposited, they bounce with 'Funds Insufficient'. The founders ignore statutory notices while continuing to market goods bearing the factory's license credentials.",
    statutoryTrap:
      "Founders hide behind corporate limited liability (Pvt Ltd) to shield their personal assets from contract manufacturing liabilities, leaving the plant holding worthless paper.",
    lawfulPlaybook:
      "1. Issue Section 138 Negotiable Instruments Act Statutory Demand Notice within 30 days of cheque dishonor, citing Supreme Court precedent in Sripati Singh v. State of Jharkhand.\n2. Prosecute Signatory Directors Personally under Section 141 NI Act: Company directors who signed cheques or managed daily operations are criminally and personally liable without corporate veil protection.\n3. File Regulatory Revocation Notice with State FDA Licensing Authority / FSSAI: Formally withdraw manufacturing endorsement for the brand's SKUs due to commercial fraud and breach of loan-license covenants.\n4. File urgent Commercial Court petition under Order XXXVIII Rule 5 CPC for attachment of quick-commerce marketplace receivables before founders siphon funds.",
    remedyCode: "NI Act ss.138/141 + Order XXXVIII Rule 5 CPC (Marketplace Receivables Attachment)",
    financialRecovery: "100% Liquidation of ₹55 Lakh Cheque Amount + 20% Interim Compensation under s.143A",
  },
];

export default function PrivateLabelRecoveryScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(SCENARIOS[0].id);
  const current = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full">
      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-2 pb-4 border-b border-slate-200 mb-6">
        {SCENARIOS.map((scenario) => {
          const isActive = activeTab === scenario.id;
          return (
            <button
              key={scenario.id}
              type="button"
              onClick={() => setActiveTab(scenario.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                isActive
                  ? "bg-[#DC2626] text-white shadow-md shadow-red-900/10"
                  : "bg-slate-100 hover:bg-slate-200 text-slate-700"
              }`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full ${
                  isActive ? "bg-white" : "bg-slate-400"
                }`}
              />
              {scenario.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Tab Panel */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 md:p-8 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-red-100 text-[#DC2626] border border-red-200">
            {current.badge}
          </span>
          <span className="text-xs font-mono font-bold text-slate-500 bg-white px-2.5 py-1 rounded-lg border border-slate-200">
            Remedy: {current.remedyCode}
          </span>
        </div>

        <div>
          <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 mb-3">
            {current.title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {current.problem}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          {/* Statutory Trap */}
          <div className="bg-white rounded-xl border border-amber-200 p-4 shadow-sm">
            <div className="flex items-center gap-2 mb-2 text-amber-800 font-bold text-xs uppercase tracking-wide">
              <svg className="w-4 h-4 text-amber-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              Debtor Defense &amp; Statutory Trap
            </div>
            <p className="text-xs text-slate-700 leading-relaxed">
              {current.statutoryTrap}
            </p>
          </div>

          {/* Lawful Playbook */}
          <div className="bg-white rounded-xl border border-emerald-200 p-4 shadow-sm">
            <div className="flex items-center gap-2 mb-2 text-emerald-800 font-bold text-xs uppercase tracking-wide">
              <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Advocate Recovery Playbook
            </div>
            <div className="text-xs text-slate-700 leading-relaxed whitespace-pre-line space-y-1">
              {current.lawfulPlaybook}
            </div>
          </div>
        </div>

        {/* Expected Financial Outcome */}
        <div className="bg-white rounded-xl border border-slate-200 p-4 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            Target Commercial Recovery:
          </div>
          <div className="text-xs sm:text-sm font-extrabold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200">
            {current.financialRecovery}
          </div>
        </div>
      </div>
    </div>
  );
}
