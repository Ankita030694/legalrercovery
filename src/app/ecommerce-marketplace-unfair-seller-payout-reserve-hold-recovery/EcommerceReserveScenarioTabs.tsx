"use client";

import React, { useState } from "react";

interface Scenario {
  id: string;
  tabLabel: string;
  badge: string;
  title: string;
  riskDescription: string;
  statutoryTrap: string;
  legalStrategy: string;
  mandatoryClauses: string[];
  recommendedAction: string;
}

const SCENARIOS: Scenario[] = [
  {
    id: "counterfeit-algorithmic-freeze",
    tabLabel: "Algorithmic Inauthenticity Flag",
    badge: "Trademark & Contract Act s.74",
    title: "Marketplace Suspends Brand Seller on Algorithmic Bot Flag and Freezes 100% Payouts",
    riskDescription:
      "An automated marketplace bot flags a high-velocity SKU as 'suspected counterfeit' or 'inauthentic' based on customer sentiment keywords or rogue competitor test-buys. The platform instantly deactivates the seller account and imposes a blanket 90 to 180-day freeze on all accumulated disbursements (often ₹25L to ₹1.5Cr), refusing human review despite submitted brand authorization letters and GST tax invoices.",
    statutoryTrap:
      "Marketplaces rely on adhesion clauses in their Business Solutions Agreements (BSA) asserting an unfettered contractual right to withhold 100% of sales proceeds indefinitely to cover 'hypothetical customer refunds and IP indemnities'.",
    legalStrategy:
      "Under Section 74 of the Indian Contract Act, 1872 and the Supreme Court benchmark in Kailash Nath Associates v. DDA, contractual forfeiture clauses are strictly governed by the law of liquidated damages. A marketplace cannot confiscate or withhold earned proceeds without proving actual quantifiable loss. Furthermore, as an intermediary under Section 79 of the Information Technology Act, once the authorized seller tenders statutory proof of authenticity under Rule 3 of the IT Intermediary Guidelines, the platform has zero legal authority to withhold undisputed sales revenues.",
    mandatoryClauses: [
      "Presentation of registered Trademark certificate, brand manufacturer distribution agreement, and chain-of-custody GST tax invoices",
      "Formal rebuttal of algorithmic suspension citing absence of any genuine trademark infringement under Trade Marks Act, 1999",
      "Contract Act Section 74 challenge to the 180-day reserve hold as an unenforceable, unconscionable penalty clause",
      "Statutory demand for release of crystallized payout within 7 days, failing which interest at 18% p.a. accrues under MSMED Act / commercial law",
    ],
    recommendedAction:
      "Issue an immediate Fact-Verified Legal Notice to the marketplace's grievance officer and legal team enclosing certified supply invoices and video packing logs, demanding immediate human review and unfreezing of undisputed disbursements.",
  },
  {
    id: "spf-return-fraud-rejection",
    tabLabel: "SPF Fake Return Rejections",
    badge: "BSA 2023 s.63 & BNS s.318",
    title: "Buyer Return-Fraud Swapped Items & Systematic SPF (Seller Protection Fund) Rejections",
    riskDescription:
      "Organized return fraud syndicates purchase high-value consumer electronics or branded cosmetics and initiate return requests. Instead of the authentic product, the seller receives duplicate scrap, empty packaging, or detergent bars. When the seller files a claim under the platform's Seller Protection Fund (SPF) / SAFE-T claim mechanism, the platform's automated dispute team rejects the claim citing arbitrary reasons like 'insufficient packaging footage' or 'exceeded claim timeline'.",
    statutoryTrap:
      "Marketplaces unilaterally deduct the customer refund from the seller's escrow wallet before the physical return arrives. If the seller fails to counter the rejection within 3 to 7 days, the loss is permanently written off in the seller's books as an uncontested debit note.",
    legalStrategy:
      "Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA), high-definition dual-camera CCTV footage of the packing station—capturing the exact product serial number, barcode scan, weight scale reading, and tamper-evident security tape application—constitutes unimpeachable electronic evidence. When paired with unboxing footage recorded upon courier delivery, the seller establishes a prima facie case of cheating under Section 318 of the Bharatiya Nyaya Sanhita, 2023 (BNS) and unlawful debit under the Consumer Protection (E-Commerce) Rules, 2020.",
    mandatoryClauses: [
      "Side-by-side comparative forensic log: Dispatch weight vs Courier return transit slip weight vs Received unboxing weight",
      "BSA 2023 Section 63 Electronic Evidence Certificate verifying packing and unboxing CCTV recordings with immutable hash values",
      "Notice of unilateral breach of Marketplace Logistics SLA and bad-faith rejection of SPF / SAFE-T indemnification",
      "Demand for reverse debit-note reversal plus reimbursement of reverse logistics freight fees wrongly levied on the merchant",
    ],
    recommendedAction:
      "Compile packing station weight telemetry and unboxing video into an advocate demand notice. Reserve the right to file formal criminal complaints under BNS s.318/s.316 alongside institutional arbitration.",
  },
  {
    id: "aggregator-multi-account-ban",
    tabLabel: "Cross-Account Linked Ban",
    badge: "Doctrine of Separate Entity",
    title: "Marketplace Freezes Multiple Unrelated Sister Seller Accounts via Algorithmic Association",
    riskDescription:
      "An enterprise brand or multi-brand D2C aggregator operates 3 to 5 distinct corporate entities or seller profiles to segregate product categories (e.g., apparel vs electronics). A minor compliance glitch or inventory dispute on one secondary seller profile triggers an algorithmic cascade: the marketplace links the accounts via shared GST roots, warehouse pincodes, or IP addresses, and instantaneously freezes disbursements across all accounts, locking up crores in working capital.",
    statutoryTrap:
      "The platform invokes 'related party breach' provisions in its seller policies, treating legally distinct corporate entities with separate CINs and GST registrations as a single unified defaulter.",
    legalStrategy:
      "Under Indian corporate law (Solomon principle affirmed by Supreme Court of India), each incorporated entity possesses independent legal personality. A contractual dispute or alleged policy infraction with Entity A cannot be unilaterally set off against undisputed, matured receivables of Entity B. Unilateral cross-collateralization and funds seizure across independent legal entities without express tripartite consent constitutes civil conversion and tortious interference with business operations.",
    mandatoryClauses: [
      "Corporate registration particulars proving distinct legal personality, PAN, GSTIN, and independent director boards",
      "Challenge to arbitrary cross-account linking as an ultra vires contractual violation of individual Seller Service Agreements",
      "Cessation demand against cross-entity set-offs under Section 70 (obligation of person enjoying benefit of non-gratuitous act) and Section 72 of the Contract Act",
      "Notice of impending High Court Section 9 petition for mandatory injunction seeking immediate ring-fenced disbursement",
    ],
    recommendedAction:
      "Serve a formal corporate legal notice establishing entity segregation and demanding the immediate release of funds for all unblemished accounts within 48 hours.",
  },
  {
    id: "indefinite-return-reserve",
    tabLabel: "Indefinite 180-Day Reserve",
    badge: "FDI Norms & Intermediary Rule",
    title: "Platform Holds Massive Reserve Beyond Return Window Despite Zero Customer Chargebacks",
    riskDescription:
      "Following an account deactivation or voluntary exit, the marketplace's automated finance engine withholds 100% of the closing seller balance (e.g., ₹45,00,000) under the guise of an 'active return reserve' for 180 days. Even after the 30-day consumer return window closes and zero customer refund requests or chargebacks remain pending, the platform's support ticket system continually issues automated canned responses, retaining the seller's money for 6 to 9 months.",
    statutoryTrap:
      "Sellers wait passively for 180 days believing the marketplace will release funds automatically, only to discover at Day 181 that the platform has eroded the reserve through retrospective 'disposal fees', 'storage surcharges', and 'advertising debt'.",
    legalStrategy:
      "Under the Consumer Protection (E-Commerce) Rules, 2020 and FDI Policy (Press Note 2 of 2018), an e-commerce marketplace entity operates purely as a technology facilitator and cannot exercise ownership or unauthorized dominion over merchant revenues. Once the contractual customer return window (maximum 15 to 30 days) has expired, any ongoing retention of merchant funds lacks legal consideration and constitutes unjust enrichment under Section 72 of the Indian Contract Act.",
    mandatoryClauses: [
      "Detailed actuarial reconciliation of total sales GMV, elapsed return expiry dates, and actual recorded customer returns (under 2%)",
      "Statutory limitation cutoff demonstrating that 100% of shipped orders have surpassed the consumer dispute window",
      "Demand for immediate transfer of net closing balance to registered merchant current account with interest at 18% p.a.",
      "Notice of invocation of institutional arbitration (e.g., BIMACC, DIAC, or MCIA) under the agreement's dispute resolution clause",
    ],
    recommendedAction:
      "Do not wait for 180 days. Serve a fact-verified notice at Day 35 post-suspension to fix liability, initiate arbitration under Section 21 of the Arbitration Act, and claim commercial interest.",
  },
];

export default function EcommerceReserveScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(SCENARIOS[0].id);
  const currentScenario = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-7 shadow-xs">
      <div className="flex flex-wrap gap-2 mb-6 border-b border-slate-200 pb-4">
        {SCENARIOS.map((scenario) => {
          const isActive = activeTab === scenario.id;
          return (
            <button
              key={scenario.id}
              type="button"
              onClick={() => setActiveTab(scenario.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                isActive
                  ? "bg-[#DC2626] text-white shadow-sm"
                  : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {scenario.tabLabel}
            </button>
          );
        })}
      </div>

      <div className="bg-white border border-slate-200 rounded-xl p-5 sm:p-6 shadow-xs space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
          <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-red-50 text-[#DC2626] border border-red-200 w-fit">
            {currentScenario.badge}
          </span>
          <span className="text-[11px] font-mono text-slate-400">
            Scenario Ref: {currentScenario.id}
          </span>
        </div>

        <div>
          <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
            {currentScenario.title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {currentScenario.riskDescription}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <div className="bg-amber-50/70 border border-amber-200 rounded-xl p-4">
            <div className="flex items-center gap-1.5 mb-2">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              <p className="text-xs font-bold uppercase tracking-wider text-amber-900">
                Marketplace Contractual Trap
              </p>
            </div>
            <p className="text-xs text-amber-800 leading-relaxed">
              {currentScenario.statutoryTrap}
            </p>
          </div>

          <div className="bg-emerald-50/70 border border-emerald-200 rounded-xl p-4">
            <div className="flex items-center gap-1.5 mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-600" />
              <p className="text-xs font-bold uppercase tracking-wider text-emerald-900">
                Creditor Statutory Remedy
              </p>
            </div>
            <p className="text-xs text-emerald-800 leading-relaxed">
              {currentScenario.legalStrategy}
            </p>
          </div>
        </div>

        <div className="pt-2">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2.5">
            Mandatory Legal Notice Rebuttal Clauses
          </p>
          <ul className="space-y-2">
            {currentScenario.mandatoryClauses.map((clause, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                <span className="w-5 h-5 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <span className="leading-relaxed">{clause}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-slate-900 text-white rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <p className="text-[10px] uppercase font-bold tracking-widest text-red-400 mb-0.5">
              Recommended Legal Escalation
            </p>
            <p className="text-xs sm:text-sm text-slate-200">
              {currentScenario.recommendedAction}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
