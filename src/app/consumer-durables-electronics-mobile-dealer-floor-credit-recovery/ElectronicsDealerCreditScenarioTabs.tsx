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
    id: "oral-price-drop-asm",
    tabLabel: "Oral Price-Drop Claim",
    badge: "Written Credit-Note Doctrine",
    title: "Dealer Claims Exited Territory Sales Manager Promised Unofficial Price-Drop Support",
    riskDescription:
      "Following Diwali or summer AC season, the retail dealer refuses to clear ₹15L–₹60L in invoices, alleging that the brand's Regional Territory Sales Manager (TSM/ASM) orally promised '₹2,500 sell-out support per handset/split-AC unit' to achieve regional primary billing targets. The sales manager has since resigned or switched brands, leaving distributor finance holding unverified oral claims.",
    statutoryTrap:
      "If the distributor engages in endless informal WhatsApp arguments or issues ambiguous email balance statements without statutorily repudiating oral commitments, the dealer sets up a 'bona fide dispute' in court, defeating pre-institution mediation and summary judgment.",
    legalStrategy:
      "Under Sections 91 and 92 of the Indian Evidence Act (now Sections 94 and 95 of Bharatiya Sakshya Adhiniyam, 2023), oral agreements cannot contradict, alter, or subtract from written terms of commercial invoices and signed dealership contracts. Our demand notice invokes the 'Integration & No-Oral-Modification' clause, demanding certified company-issued Credit Notes as the sole admissible proof of discount.",
    mandatoryClauses: [
      "Strict recital of Dealership Agreement Clause stipulating all price revisions must be confirmed by official ERP-generated Credit Notes",
      "Explicit invocation of BSA 2023 Sections 94 & 95 barring oral variations to written GST Tax Invoices and signed e-Way bills",
      "Peremptory 7-day rejection notice disallowing unapproved WhatsApp chats or verbal commitments from former employees",
      "Notice that continued withholding constitutes wrongful conversion under BNS Section 316 and triggers commercial interest at 18% p.a.",
    ],
    recommendedAction:
      "Issue a formal Written-Credit-Note Rebuttal Notice. Put the dealer to strict proof of authenticated company credit notes, extinguishing the oral discount defense before filing Order XXXVII summary suit.",
  },
  {
    id: "showroom-stock-diversion",
    tabLabel: "Secret Stock Diversion",
    badge: "Order 38 Rule 5 Pre-Emption",
    title: "Showroom Owner Secretly Liquidating Unpaid Floor Display Units & Diverting Proceeds",
    riskDescription:
      "Distributor field executives discover that a multi-brand electronics showroom is offering deep cash discounts, transferring display OLED TVs and premium smartphones to an affiliated grey-market outlet or sister firm, and preparing to shutter operations post-festivities without clearing distributor trade credit.",
    statutoryTrap:
      "Filing a standard slow civil recovery suit allows the rogue proprietor to empty showroom shelves, surrender commercial shop leases, and transfer cash proceeds to personal or family accounts, rendering any future decree unexecutable paper.",
    legalStrategy:
      "File an urgent Commercial Suit along with an emergency application under Order XXXVIII Rule 5 of the Code of Civil Procedure, 1908 (Attachment Before Judgment). Supported by spot inspection photographs, CCTV footage, and IMEI activation data showing devices sold outside designated territory, the creditor compels the court to attach showroom inventory or freeze dealer bank accounts before judgment.",
    mandatoryClauses: [
      "Specific averment under Order XXXVIII Rule 5 CPC demonstrating imminent intent to remove property out of court jurisdiction",
      "Detailed schedule of hypothecated inventory with specific Serial and IMEI numbers supplied under unpaid tax invoices",
      "Prayer for appointment of Court Commissioner to take physical custody of showroom electronics or seal premises",
      "Affidavit affirming clear prima facie debt and irreparable financial harm to regional distributor working capital",
    ],
    recommendedAction:
      "Pair the immediate Section 138 / Section 20 notice with an emergency Order XXXVIII Rule 5 petition in the Commercial Court to freeze showroom stock before the dealer finishes liquidation.",
  },
  {
    id: "post-diwali-rma-dump",
    tabLabel: "Post-Season RMA Dumping",
    badge: "Sale of Goods Act s.41/42",
    title: "Dealer Attempts Unilateral Return of Obsolete, Unsold or Damaged Post-Diwali Stock",
    riskDescription:
      "Sixty days after Diwali, when model prices drop and new generation series launch, the multi-brand dealer dumps cartons of unsold electronics, unboxed open-box units, and demonstration appliances onto the distributor's delivery truck, demanding credit notes against overdue primary invoices.",
    statutoryTrap:
      "If the distributor's warehouse accepts custody of returned stock without a written qualified endorsement ('Subject to Verification & Final Company RMA Authorization'), the dealer claims full discharge of invoice debt by return of goods.",
    legalStrategy:
      "Under Sections 41 and 42 of the Sale of Goods Act, 1930, once goods are delivered and retained beyond a reasonable inspection period (typically 7–15 days under standard dealer agreements), the buyer is deemed to have accepted the goods. The distributor has no legal obligation to take back unsold market inventory unless governed by explicit SOR (Sale-or-Return) contracts.",
    mandatoryClauses: [
      "Rejection of unilateral Return-to-Vendor (RTV) shipments citing expiry of statutory inspection window under Sale of Goods Act s.42",
      "Reiteration of outright sale terms under GST Tax Invoices without any guaranteed buyback or unsold stock indemnification",
      "Notice that delivered inventory remains dealer risk and storage charges of ₹500/day will be levied for unauthorized depot returns",
      "Immediate demand for unpaid principal plus 18% statutory interest, barring any credit note adjustments for unapproved RMA",
    ],
    recommendedAction:
      "Issue strict warehouse SOPs rejecting unauthorized consignments. Serve a statutory notice establishing deemed acceptance under Sale of Goods Act Section 42.",
  },
  {
    id: "dishonored-pdc-nbfc-theft",
    tabLabel: "Cheque Bounce & EMI Theft",
    badge: "NI Act s.138 + s.143A",
    title: "Dishonored Floor-Credit Post-Dated Cheques & Misappropriated Consumer EMI Subventions",
    riskDescription:
      "To secure festive stock billing, the dealer issued post-dated cheques (PDCs) or blank signed security instruments. Upon presentation, cheques bounce with 'Funds Insufficient' or 'Stop Payment'. Simultaneously, the dealer collected consumer upfront margins and NBFC paper-finance payouts (Bajaj Finance/HDB) but pocketed the funds instead of remitting distributor dues.",
    statutoryTrap:
      "Relying solely on informal phone follow-ups until the mandatory 30-day statutory notice window under Section 138(b) of the Negotiable Instruments Act expires completely forfeits criminal prosecution rights against the firm and its partners/directors.",
    legalStrategy:
      "Serve a dual-action statutory notice under Section 138 of the NI Act read with Section 20 (inchoate instrument completion under Bir Singh) within 30 days of receiving the banker's return memo. Combine this with Section 141 vicarious liability against all active partners/directors, and pray for 20% interim compensation under Section 143A.",
    mandatoryClauses: [
      "Strict chronological recital: Cheque date, number, drawee bank, deposit date, and return memo date with exact CTS return reason code",
      "Formal demand to discharge total cheque sum within 15 days of notice receipt as prescribed under NI Act Section 138(c)",
      "Specific individual liability averments under Section 141 establishing day-to-day management of signatory partners/directors",
      "Notice of immediate application under Section 143A for mandatory 20% interim deposit upon magistrate summoning",
    ],
    recommendedAction:
      "Execute Section 138 notice dispatch via Speed Post RPAD and email/WhatsApp within 48 hours of cheque bounce. Concurrently freeze credit supplies to all retail branches.",
  },
];

export default function ElectronicsDealerCreditScenarioTabs() {
  const [activeTab, setActiveTab] = useState(SCENARIOS[0].id);
  const current = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full">
      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-2 p-1.5 bg-slate-100 rounded-2xl border border-slate-200 mb-6">
        {SCENARIOS.map((scenario) => {
          const isActive = activeTab === scenario.id;
          return (
            <button
              key={scenario.id}
              type="button"
              onClick={() => setActiveTab(scenario.id)}
              className={`flex-1 min-w-[140px] sm:min-w-[170px] py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all text-center cursor-pointer ${
                isActive
                  ? "bg-[#DC2626] text-white shadow-md shadow-red-900/20"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/70"
              }`}
            >
              {scenario.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Tab Panel */}
      <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-4 border-b border-slate-100">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-red-50 text-[#DC2626] border border-red-200">
            {current.badge}
          </span>
          <span className="text-xs text-slate-400 font-semibold">
            Institutional Strategy Analysis &bull; Scenario {SCENARIOS.findIndex((s) => s.id === current.id) + 1} of {SCENARIOS.length}
          </span>
        </div>

        <p className="text-lg sm:text-xl font-black text-slate-900 mb-4 leading-snug">
          {current.title}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              Commercial Failure Mode &amp; Dispute Context
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {current.riskDescription}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-amber-50 border border-amber-200">
            <p className="text-xs font-bold uppercase tracking-wider text-amber-800 mb-2">
              Statutory Vulnerability &amp; Debtor Tactics
            </p>
            <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">
              {current.statutoryTrap}
            </p>
          </div>
        </div>

        <div className="mb-6 p-4 rounded-xl bg-slate-900 text-white">
          <p className="text-xs font-bold uppercase tracking-wider text-red-400 mb-2">
            Creditor Statutory Escalation &amp; Enforcement Strategy
          </p>
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
            {current.legalStrategy}
          </p>
        </div>

        <div className="mb-6">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-3">
            Mandatory Legal Notice Recitals &amp; Contractual Shield
          </p>
          <ul className="space-y-2">
            {current.mandatoryClauses.map((clause, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                <span className="w-5 h-5 rounded-full bg-red-100 text-[#DC2626] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                  &check;
                </span>
                <span>{clause}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex items-start gap-3">
          <span className="text-emerald-700 font-bold text-lg shrink-0">&rarr;</span>
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-1">
              Recommended Creditor Next Step
            </p>
            <p className="text-xs sm:text-sm text-emerald-900 font-medium leading-relaxed">
              {current.recommendedAction}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
