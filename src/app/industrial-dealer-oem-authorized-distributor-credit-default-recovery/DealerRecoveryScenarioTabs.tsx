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
    id: "credit-stretch-competitor-diversion",
    tabLabel: "1. 180-Day Stretch & Cash Diversion",
    title: "Authorized Dealer Stretches 45-Day Open Credit to 180+ Days While Diverting Cash Flow to Competitor Products",
    badge: "Contractual Default & Breach of Agency Covenants",
    buyerProfile:
      "Exclusive or semi-exclusive industrial stockists and authorized dealers distributing industrial electric motors, LT/HT switchgear, heavy-duty pumps, or cables across engineering hubs like Pune, Coimbatore, Rajkot, Ludhiana, or Peenya.",
    pretext:
      "Dealer operates under an agreed 30-to-45-day credit cycle with an active credit ceiling of ₹35 Lakh to ₹1.5 Crore. After drawing maxed-out inventory, the dealer systematically delays payments past 90, 120, and 180 days. The dealer's management cites bogus external delays: 'Our EPC project clients and state power utilities have withheld milestone payments.' Simultaneously, field intelligence reveals the dealer is using liquidity generated from selling your credit-supplied inventory to make spot-cash purchases of unbranded, low-grade Chinese, or rival tier-2 industrial goods at higher retail margins.",
    legalReality:
      "Under Sections 73 and 211–213 of the Indian Contract Act, 1872, an authorized distributor/agent is bound to conduct business according to the principal's directions and render strict accounts. Utilizing OEM credit capital to fund unauthorized competing product lines constitutes commercial diversion, willful breach of dealership terms, and civil misappropriation. Contractual credit periods are not unilateral rolling facilities; exceeding the credit period matures the entire ledger balance immediately, entitling the OEM to demand full repayment, revoke credit terms, and encash security instruments.",
    statutoryHook:
      "Indian Contract Act 1872 ss. 73, 211, 213 + Section 138 NI Act (Cheque Presentment) + Order XXXVII CPC",
    actionProtocol: [
      "Instantly lock the dealer's account on ERP/SAP to suspend outward dispatches, dispatch holds, and pending sales orders.",
      "Reconcile outstanding balance ledgers, bilties (consignment notes), and signed transporter Delivery Challans with GST e-Way bills.",
      "Present rolling security cheques or undated PDCs held against the dealer credit limit for banking clearance.",
      "Issue a composite 15-Day Advocate Legal Demand Notice asserting immediate debt maturity, contract termination warning, and Section 138 penal consequences upon cheque dishonour.",
    ],
  },
  {
    id: "counterfeit-and-passing-off",
    tabLabel: "2. Counterfeits & Brand Abuse",
    title: "Defaulting Dealer Sells Counterfeit or Refurbished Stock Under OEM Brand While Stalling Payment",
    badge: "Trade Marks Act ss. 29/134 & BNS Section 316",
    buyerProfile:
      "Industrial distributors and stockists handling high-margin, critical engineering components such as industrial ball bearings, high-pressure valves, pneumatic seals, or circuit breakers.",
    pretext:
      "While withholding ₹40 Lakh to ₹1.2 Crore in unpaid consignments under the pretext of 'sluggish industrial market demand,' the dealer exploits the OEM's official authorized dealer signage, digital catalogs, and brand goodwill. The dealer purchases duplicate, re-conditioned, or grey-market unbranded goods, lasers OEM trademarks onto the housings, and supplies them to unsuspecting local process plants, sub-vendors, and contractors under the OEM's authorized warranty promise.",
    legalReality:
      "Selling counterfeit goods while displaying OEM authorized credentials constitutes criminal breach of trust under Section 316 of Bharatiya Nyaya Sanhita (BNS), 2023, coupled with statutory trademark infringement and passing off under Sections 29, 102, 103, and 134 of the Trade Marks Act, 1999. This gives the OEM statutory grounds for immediate, without-notice contract termination, immediate civil forfeiture of all security deposits, and emergency Commercial Court injunctions appointing a Local Commissioner to seize counterfeit stocks and accounting ledgers.",
    statutoryHook:
      "Trade Marks Act 1999 ss. 29, 134, 135 + BNS 2023 s.316 + Commercial Courts Act 2015 s.2(1)(c)(xvii)",
    actionProtocol: [
      "Deploy an independent technical investigator to conduct mystery test purchases, securing notarized purchase invoices, packaging specimens, and batch serial numbers.",
      "Issue an immediate Dealership Termination & Cease-and-Desist Notice revoking brand authorization, signage rights, and access to OEM portal logins.",
      "Forfeit the dealer's cash security deposit and encash Bank Guarantees toward the verified invoice ledger under contractual set-off covenants.",
      "File an urgent Commercial Suit under Order XXXIX Rules 1 & 2 CPC seeking an ex-parte ad-interim injunction, Anton Piller search order, and police assistance.",
    ],
  },
  {
    id: "channel-finance-fldg-recourse",
    tabLabel: "3. Channel Finance Default & FLDG",
    title: "Dealer Defaults on Bank / NBFC Channel Financing, Triggering OEM First-Loss Guarantee & Recourse",
    badge: "Subrogation under Section 140 Indian Contract Act",
    buyerProfile:
      "Large industrial distributors, electrical cable stockists, and switchgear channel partners enrolled in bank-sponsored channel financing (TReDS, SIDBI, HDFC, ICICI, Axis, Tata Capital, or Bajaj Finance vendor programs).",
    pretext:
      "To accelerate inventory turnover, the OEM onboarded the dealer into a structured Channel Finance arrangement with an anchor lending institution. The dealer drew against OEM invoices to pay factory dispatches, but subsequently defaulted on the 60-to-90-day bank repayment tenors. The financing bank invokes the tripartite facility agreement, executing a First Loss Default Guarantee (FLDG) or debiting the OEM's escrow pool/fixed deposit to the tune of ₹50 Lakh to ₹2.5 Crore.",
    legalReality:
      "Under Section 140 of the Indian Contract Act, 1872, upon payment or performance of all that he is liable for, the guarantor (OEM) is invested with all the rights which the creditor (Bank/NBFC) had against the principal debtor. The OEM is legally subrogated to the lending bank's rights, inheriting the enforceable debt, any underlying personal guarantees executed by the dealer's directors, and dishonoured e-NACH mandates under Section 25 of the Payment and Settlement Systems Act, 2007.",
    statutoryHook:
      "Indian Contract Act 1872 s.140 (Right of Subrogation) + PSS Act 2007 s.25 + Commercial Summary Suit Order XXXVII CPC",
    actionProtocol: [
      "Obtain an official Certificate of Debt Discharge and formal Deed of Subrogation from the channel financing bank confirming the exact debit from OEM funds.",
      "Collect dishonoured e-NACH debit logs, loan sanction agreements, and personal guarantee deeds executed by dealer promoters.",
      "Issue a 7-Day Statutory Subrogated Creditor Demand Notice demanding immediate reimbursement of the exact sum debited by the bank plus commercial interest.",
      "File a Commercial Summary Suit under Order XXXVII CPC or initiate Section 7/9 IBC insolvency proceedings (if default exceeds ₹1 Crore statutory threshold).",
    ],
  },
  {
    id: "dead-stock-warranty-counterclaims",
    tabLabel: "4. Retaliatory Dead-Stock & Warranty Excuses",
    title: "Dealer Manufactures Bogus Warranty Defect Claims & Demands Dead-Stock Buyback After Termination Notice",
    badge: "Sale of Goods Act s.42 Deemed Acceptance & s.59 Bar",
    buyerProfile:
      "Regional distributors of industrial compressors, hydraulic valves, industrial gearboxes, and electrical automation components facing distributor replacement.",
    pretext:
      "Following repeated payment defaults, the OEM issues a formal Dealership Termination Notice demanding settlement of ₹65 Lakh in outstanding invoices. In retaliation, the dealer's advocate issues a fabricated reply stating: 'The supplied motors/valves suffered pervasive technical defects resulting in massive field failures; ₹45 Lakh of stock lying in our godown is un-merchantable dead inventory. We debit your account ₹50 Lakh for customer loss and demand you buy back the entire stock.'",
    legalReality:
      "Commercial dealership contracts in industrial goods operate on an outright 'Principal-to-Principal' purchase basis. Under Section 42 of the Sale of Goods Act, 1930, retaining goods for months without written rejection constitutes deemed acceptance. Belated claims raised only after credit default and contract termination are legally barred under Section 59. Dealership agreements routinely disclaim stock buybacks upon termination for dealer default. Unilateral debit notes generated post-termination cannot be set off against liquidated invoice liabilities.",
    statutoryHook:
      "Sale of Goods Act 1930 ss. 41, 42, 59 + Commercial Courts Act 2015 Order XIII-A (Summary Judgment)",
    actionProtocol: [
      "Issue a point-by-point statutory rebuttal within 7 days establishing that zero warranty complaint tickets were logged during the contractual notice window.",
      "Highlight contract clauses affirming principal-to-principal sale, non-returnable inventory terms, and express bar on post-termination stock buyback.",
      "Demonstrate that unilateral debit notes lack bilateral credit confirmation and fail to meet the standards of a triable commercial defense.",
      "Apply for Order XIII-A Summary Judgment in Commercial Court on grounds that the dealer has no real prospect of successfully defending the liquidated invoice debt.",
    ],
  },
];

interface DealerRecoveryScenarioTabsProps {
  className?: string;
}

export default function DealerRecoveryScenarioTabs({
  className = "",
}: DealerRecoveryScenarioTabsProps) {
  const [activeTab, setActiveTab] = useState<string>(SCENARIOS[0].id);

  const currentScenario =
    SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className={`w-full ${className}`}>
      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-2 mb-6 border-b border-slate-200 pb-3">
        {SCENARIOS.map((scenario) => {
          const isActive = scenario.id === activeTab;
          return (
            <button
              key={scenario.id}
              type="button"
              onClick={() => setActiveTab(scenario.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all text-left cursor-pointer ${
                isActive
                  ? "bg-[#DC2626] text-white shadow-sm shadow-red-900/20"
                  : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {scenario.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Tab Content Card */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-7 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-red-100 text-[#DC2626] border border-red-200">
            {currentScenario.badge}
          </span>
          <span className="text-[11px] text-slate-500 font-semibold">
            Statutory Framework: {currentScenario.statutoryHook}
          </span>
        </div>

        <h3 className="text-base sm:text-lg md:text-xl font-black text-slate-900 mb-3 leading-snug">
          {currentScenario.title}
        </h3>

        <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed mb-6">
          <div>
            <span className="font-bold text-slate-900 block mb-0.5">
              Typical Defaulter Profile &amp; Modus Operandi:
            </span>
            <p className="text-slate-600">{currentScenario.buyerProfile}</p>
          </div>

          <div className="bg-white rounded-xl p-4 border border-slate-200">
            <span className="font-bold text-red-800 block mb-1 text-xs uppercase tracking-wider">
              The Commercial Failure Mode &amp; Debtor Pretext:
            </span>
            <p className="text-slate-700 italic">{currentScenario.pretext}</p>
          </div>

          <div className="bg-emerald-50/80 rounded-xl p-4 border border-emerald-200 text-emerald-950">
            <span className="font-bold text-emerald-900 block mb-1 text-xs uppercase tracking-wider">
              Creditor-Side Statutory Reality:
            </span>
            <p className="leading-relaxed">{currentScenario.legalReality}</p>
          </div>
        </div>

        <div>
          <span className="text-xs font-black uppercase tracking-wider text-slate-900 block mb-3">
            Immediate OEM Recovery Action Protocol:
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
            {currentScenario.actionProtocol.map((step, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2.5 bg-white p-3 rounded-xl border border-slate-200 text-xs text-slate-800"
              >
                <span className="w-5 h-5 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <span className="leading-snug">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
