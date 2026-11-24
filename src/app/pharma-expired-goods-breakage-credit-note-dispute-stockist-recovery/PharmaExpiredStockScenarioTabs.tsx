"use client";

import React, { useState } from "react";

interface Scenario {
  id: string;
  badge: string;
  title: string;
  stumblingBlock: string;
  statutoryExposure: string;
  recoverySOP: string[];
  keyAuthority: string;
}

const SCENARIOS: Scenario[] = [
  {
    id: "unverified-expiry-dump",
    badge: "Scenario 1 • Obsolete Batch Dump Upon Demand",
    title: "Stockist Dumps 2–3 Year Old Expired Formulations Upon Demand for Overdue Ledger Dues, Deducting 100% Value",
    stumblingBlock:
      "When a pharma brand owner or C&F agent (CFA) demands settlement of an overdue ₹18,00,000 ledger balance, the wholesale druggist suddenly dumps 40 cartons of date-expired, discolored, or near-expiry medicines dating back 2 to 3 years. The stockist issues a unilateral debit note deducting ₹14,50,000, claiming that pharmaceutical trade practice guarantees unconditional replacement of all expired drugs, despite the signed distributor agreement containing a strict 1.5% annual expiry cap and requiring 90-day pre-expiry advance notifications.",
    statutoryExposure:
      "Under Section 73 of the Indian Contract Act, 1872, express written contractual terms (such as an annual 1.5% expiry cap and mandatory 90-day pre-expiry intimations) legally govern the commercial relationship and render unilateral debit notes void ab initio. Furthermore, under Rule 65(17) of the Drugs and Cosmetics Rules, 1945, stockists are strictly prohibited from hoarding expired medicines without maintaining a segregated 'Not for Sale' designated enclosure and detailed disposal register. Hoarding expired stock for years and dumping it en masse violates licensing conditions under Form 20B/21B and cannot form the basis of a lawful financial offset against current commercial sales.",
    recoverySOP: [
      "Issue an immediate physical rejection memo: CFA gatekeeper refuses delivery or accepts only under protest ('Received for Inspection Only — Not Accepted as Commercial Credit').",
      "Perform a joint physical audit: Categorize dumped stock by manufacturing date, batch number, original invoice date, and expiry date to prove stock originated outside the permitted return window.",
      "Dispatch a Fact-Verified Legal Demand Notice rebutting the unilateral debit note, enforcing the 1.5% contractual cap, and demanding payment of the unadjusted balance within 15 days.",
      "Initiate MSME Samadhaan petition or Commercial Summary Suit under Order XXXVII CPC for the full invoiced principal plus 3x RBI compound penal interest under Section 16 of the MSMED Act.",
    ],
    keyAuthority: "Indian Contract Act 1872 s.73, Drugs & Cosmetics Rules 1945 r.65(17) & MSMED Act 2006 s.16",
  },
  {
    id: "arbitrary-breakage-claims",
    badge: "Scenario 2 • Inflated Breakage & Transit Damage",
    title: "Stockist Deducts 8%–15% Unilateral Breakage on Liquid Syrups & Ampoules Without Joint Survey or Carrier Endorsement",
    stumblingBlock:
      "A regional stockist receives consignments of glass vials, liquid suspensions, ampoules, and effervescent tablets. Months later, during payment reconciliation, the stockist's accounts desk withholds 8% to 15% of the total invoice value claiming 'in-transit breakage, leaking bottles, and carton crushing'. The stockist fails to furnish any carrier damage certificate, LR (Lorry Receipt) breakage remarks, delivery challan discrepancy notes, or photographic/unboxing evidence at the time of initial warehouse receipt.",
    statutoryExposure:
      "Under Section 42 of the Sale of Goods Act, 1930, the buyer is deemed to have accepted the goods when the goods have been delivered and the buyer retains them without intimating rejection within a reasonable time. Retaining pharmaceuticals in warehouse inventory without lodging an immediate written damage claim constitutes absolute commercial acceptance. Under Section 10 of the Carriers Act, 1865 / Carriage by Road Act, 2007, transit damage claims require prompt notice and carrier survey. Unilateral breakage debit notes deducted post-facto constitute unauthorized withholdings subject to recovery with commercial interest.",
    recoverySOP: [
      "Audit Lorry Receipts (LRs) and PODs: Verify that transporter delivery receipts bear clean, unendorsed signatures without any shortage or breakage notation.",
      "Issue a formal Damage Claim Rebuttal Letter demanding production of joint survey reports, stamped carrier damage certificates, and batch destruction certificates within 48 hours.",
      "Re-credit the withheld amount in the vendor ledger and serve a 15-day statutory advocate notice demanding immediate reversal of unauthorized debit notes.",
      "If the stockist persists in withholding funds, lodge an MSEFC claim or summary recovery suit highlighting deemed acceptance under Sale of Goods Act Section 42.",
    ],
    keyAuthority: "Sale of Goods Act 1930 ss.41-42, Carriage by Road Act 2007 & Contract Act 1872 s.73",
  },
  {
    id: "time-barred-gst-cut-off",
    badge: "Scenario 3 • Time-Barred GST Credit Notes",
    title: "Stockist Returns Expired Stock Past Section 34 Cut-off, Refusing Fresh Supply Invoice & Causing ITC Forfeiture",
    stumblingBlock:
      "A stockist returns expired drugs 18 to 24 months post-sale and demands that the pharma manufacturer issue a GST Credit Note. However, under Section 34(2) of the CGST Act, 2017, a credit note can only be issued up to 30th November following the end of the financial year in which the supply was made, or the date of furnishing the annual return, whichever is earlier. Because the return is time-barred, the manufacturer cannot adjust its GST output liability. The stockist refuses to treat the return as a fresh supply under CBIC Circular 72/46/2018-GST and refuses to pay the pending invoice balance.",
    statutoryExposure:
      "Under CBIC Circular No. 72/46/2018-GST (Option B / Fresh Supply), where the time limit specified in Section 34(2) of the CGST Act has expired, the return of time-expired medicines MUST be treated as a fresh outward supply by the stockist. If registered under GST, the stockist must raise a regular commercial tax invoice. If the stockist simply dumps the goods and deducts the amount, the manufacturer cannot claim tax adjustment and faces mandatory ITC reversal under Section 17(5)(h) of the CGST Act upon subsequent physical destruction, resulting in a double financial penalty.",
    recoverySOP: [
      "Issue a Statutory GST Compliance Notice notifying the stockist that Section 34(2) statutory time limits have lapsed, precluding credit note issuance.",
      "Demand issuance of a commercial Tax Invoice as a 'Fresh Supply' under CBIC Circular No. 72/46/2018-GST Option B, or tender full cash payment of the overdue invoice.",
      "Notify the stockist that unilateral deduction without a valid GST tax document creates an irregular ITC scenario subject to reporting to the jurisdictional GST Commissionerate.",
      "Incorporate the tax loss and unpaid principal into a formal Advocate Demand Notice with compound interest under MSMED Act Section 16.",
    ],
    keyAuthority: "CGST Act 2017 s.34(2) & s.17(5)(h), CBIC Circular No. 72/46/2018-GST & MSMED Act s.16",
  },
  {
    id: "aiocd-norm-defense",
    badge: "Scenario 4 • AIOCD Customary Practice Defense",
    title: "Terminated Stockist Invokes AIOCD 'Trade Guidelines' to Stall ₹25L+ Final Ledger Settlement and Return Audit",
    stumblingBlock:
      "Following dealership termination or distributor non-performance, the pharmaceutical company seeks Full & Final (F&F) settlement of a ₹25,00,000 ledger balance. The defaulting stockist, backed by local chemist association representatives, claims that unwritten 'AIOCD trade norms' mandate that manufacturers must take back all slow-moving, near-expiry, and expired inventory at 100% MRP/PTR (Price to Retailer) regardless of when supplied, threatening trade boycotts if deductions are contested.",
    statutoryExposure:
      "The Competition Commission of India (CCI) has repeatedly held (e.g., in Suo Moto Case No. 05/2013 and subsequent pharmaceutical cartelization rulings) that trade associations like AIOCD and state druggist bodies cannot impose mandatory NOCs, dictate commercial discounts, or enforce anti-competitive return practices on manufacturers under Section 3 of the Competition Act, 2002. Express bilateral distributor agreements strictly prevail over association circulars. Coercive boycotts or unauthorized ledger deductions constitute actionable commercial defaults subject to immediate civil recovery and Competition Commission complaints.",
    recoverySOP: [
      "Notify the stockist in writing that bilateral distributor terms signed by both parties govern the dealership, and association circulars possess zero legal force to modify contract terms.",
      "Serve a Fact-Verified Legal Notice citing Competition Act 2002 Section 3 and Indian Contract Act Section 73, warning that association-backed boycotts will trigger CCI filings and damages claims.",
      "Establish a strict 7-day window for physical verification of permitted capped returns at the manufacturer's designated warehouse.",
      "Simultaneously file an MSME Samadhaan petition or Commercial Summary Suit (Order XXXVII CPC) to attach the stockist's bank accounts and freeze receivables.",
    ],
    keyAuthority: "Competition Act 2002 s.3, Contract Act 1872 s.73, CPC Order XXXVII & CCI Pharma Precedents",
  },
];

export default function PharmaExpiredStockScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(SCENARIOS[0].id);
  const activeScenario = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full">
      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-2 pb-4 border-b border-slate-200">
        {SCENARIOS.map((scenario) => {
          const isActive = scenario.id === activeTab;
          return (
            <button
              key={scenario.id}
              type="button"
              onClick={() => setActiveTab(scenario.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all text-left cursor-pointer ${
                isActive
                  ? "bg-[#DC2626] text-white shadow-xs"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {scenario.badge.split("•")[0]}
            </button>
          );
        })}
      </div>

      {/* Tab Content Box */}
      <div className="mt-5 bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-7 shadow-xs">
        <div className="mb-4">
          <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-red-100 text-[#DC2626] border border-red-200 mb-2">
            {activeScenario.badge}
          </span>
          <p className="text-base sm:text-lg font-black text-slate-900 leading-snug">
            {activeScenario.title}
          </p>
        </div>

        {/* 2-Column Details: Problem vs Statutory Remedy */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5">
          <div className="bg-white border border-slate-200 rounded-xl p-4 sm:p-5">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
              <p className="text-xs font-black uppercase tracking-wider text-slate-800">
                Stockist Deduction Stumbling Block
              </p>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {activeScenario.stumblingBlock}
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-4 sm:p-5">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              <p className="text-xs font-black uppercase tracking-wider text-slate-800">
                Creditor Statutory Shield &amp; Defense
              </p>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {activeScenario.statutoryExposure}
            </p>
          </div>
        </div>

        {/* Recovery SOP Steps */}
        <div className="bg-white border border-slate-200 rounded-xl p-4 sm:p-5 mb-4">
          <p className="text-xs font-black uppercase tracking-wider text-slate-900 mb-3">
            Immediate Operational Recovery SOP
          </p>
          <div className="space-y-2.5">
            {activeScenario.recoverySOP.map((step, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-[#DC2626] text-white text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{step}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Statutory Footing */}
        <div className="flex items-center justify-between flex-wrap gap-2 pt-3 border-t border-slate-200 text-[11px] sm:text-xs">
          <span className="font-semibold text-slate-500">Statutory Authority:</span>
          <span className="font-mono font-bold text-slate-800">{activeScenario.keyAuthority}</span>
        </div>
      </div>
    </div>
  );
}
