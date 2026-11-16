"use client";

import React, { useState } from "react";

interface Scenario {
  id: string;
  tabLabel: string;
  badge: string;
  title: string;
  situation: string;
  shipperTactic: string;
  statutoryShield: string;
  counterStrategy: string;
  outcomeMetric: string;
}

const SCENARIOS: Scenario[] = [
  {
    id: "clean-pod-delayed-shortage",
    tabLabel: "Clean POD & Delayed Shortage",
    badge: "Estoppel & Deemed Acceptance",
    title: "Clean POD Signed by Receiver, Shortage Claimed 30 to 90 Days Later",
    situation:
      "A 3PL fleet delivered 600 cartons of consumer packaged goods at the consignee's regional warehouse. The receiving supervisor inspected the vehicle seals, counted boxes, and signed the consignment note (LR/Bilty) with stamp and 'Received in Good Condition'. Six weeks later, during internal monthly ERP audit, the corporate shipper issues a unilateral debit note of ₹3,40,000 for alleged concealed shortage of 42 cartons.",
    shipperTactic:
      "Shipper claims that warehouse unloading was conducted under pressure and that internal physical audit revealed shortages attributable exclusively to the transporter during transit.",
    statutoryShield:
      "Section 121 Bharatiya Sakshya Adhiniyam, 2023 (Estoppel) read with Section 42 of the Sale of Goods Act, 1930 and Section 16 of the Carriage by Road Act, 2007. Once a consignee unloads cargo and signs a clean delivery receipt without qualifying remarks ('subject to verification' or seal breakage), the carrier's bailment duty terminates completely. Any subsequent shortage is an internal pilferage matter of the buyer.",
    counterStrategy:
      "Issue an immediate formal Rejection of Debit Note attaching high-resolution digital scans of the clean POD, GPS timestamp at unloading dock, and security gate-in/gate-out logs. Cite Section 16 Carriage by Road Act: absent immediate written notice of loss prior to cargo custody transfer, the claim is legally non est.",
    outcomeMetric: "100% debit note nullification; full release of freight voucher within 15 days.",
  },
  {
    id: "marine-insurance-double-dip",
    tabLabel: "Marine Insurance Double-Dip",
    badge: "Subrogation & Fraud Bar",
    title: "Shipper Files Marine Insurance Claim AND Deducts Freight from Transporter",
    situation:
      "During transit on NH-48, a reefer truck met with an accident resulting in partial carton crushing valued at ₹6,20,000. The corporate shipper immediately filed a Marine Cargo Insurance claim under their Open Policy with New India Assurance. The insurer appointed a licensed surveyor, assessed the loss, and settled ₹5,10,000 into the shipper's bank account. Simultaneously, the shipper's accounts department issued a debit note deducting the full ₹6,20,000 from the transporter's pending multi-vehicle freight ledger.",
    shipperTactic:
      "Shipper double-dips by recovering full indemnity from the insurer while quietly recovering the exact same loss by cutting the transporter's unpaid freight invoices, earning a 100%+ windfall profit.",
    statutoryShield:
      "Section 79 Marine Insurance Act, 1963 (Doctrine of Subrogation) and Sections 70 & 72 Indian Contract Act, 1872 (Unjust Enrichment & Quasi-Contract). Marine cargo insurance is strictly a contract of indemnity. Once an insurer indemnifies the cargo owner, all actionable rights against the carrier transfer exclusively to the insurer. The shipper has no subsisting actionable claim against the transporter and retaining both recoveries constitutes criminal breach of trust under Section 316 BNS.",
    counterStrategy:
      "Serve a formal statutory interrogatory demanding: (1) Copy of Marine Cargo Insurance Policy and claim filing status, (2) Surveyor Assessment Report, (3) Letter of Subrogation (LoS) executed in favor of the insurer. If the shipper has received insurance compensation, demand immediate reversal of the freight debit with 18% p.a. interest or face prosecution for unlawful double recovery.",
    outcomeMetric: "Immediate debit clawback; insurer deals directly under limited carrier liability.",
  },
  {
    id: "unilateral-running-ledger-setoff",
    tabLabel: "Unilateral Freight Set-Off",
    badge: "Raman Iron Foundry Doctrine",
    title: "Shipper Withholds Freight of 15 Unrelated Trucks for 1 Disputed Trip",
    situation:
      "A dedicated fleet transporter operates 40 trucks across North India for a major chemical and agrochemical conglomerate. On one consignment, the buyer alleged a valve leakage of ₹4,50,000. Rather than adjudicating the dispute or filing a carrier claim, the conglomerate's finance team unilaterally blocked payment of 15 subsequent, completely unrelated and admitted freight bills totaling ₹12,80,000 across other routes.",
    shipperTactic:
      "Corporates exploit their bargaining dominance by holding entire running ledger accounts hostage, forcing the transporter to absorb arbitrary damage debit notes under financial duress.",
    statutoryShield:
      "Supreme Court Landmark Precedent: *Union of India v. Raman Iron Foundry* (1974) 2 SCC 231 and *Gangotri Enterprises Ltd. v. Union of India* (2016) 11 SCC 720. A claim for unliquidated, unadjudicated damages does not constitute a 'debt due'. A debtor cannot unilaterally appropriate or set off disputed unliquidated damages against admitted, liquidated debts arising from separate freight contracts or running vouchers.",
    counterStrategy:
      "Dispatch a 15-Day Advocate Statutory Demand Notice under Order XXXVII CPC / MSMED Act Section 15. Formally bifurcate the admitted freight ledger from the disputed damage claim. Put directors on personal notice that unilateral set-off of unliquidated damages is illegal per se under Supreme Court authority, entitling the transporter to 3x RBI compound interest under MSMED Act.",
    outcomeMetric: "Forced release of undisputed ₹12.80L running bills; damages relegated to arbitration/court.",
  },
  {
    id: "undeclared-cargo-excess-liability",
    tabLabel: "Undeclared High-Value Cargo",
    badge: "Carriage by Road Act Section 10",
    title: "Shipper Demands Total Replacement Value on Standard Freight Rate Cargo",
    situation:
      "A shipper loaded specialized industrial electronics machinery invoiced at ₹48,00,000 into a general container truck paying standard bulk road freight rates (₹42,000). The shipper did not declare consignment value on the face of the Lorry Receipt (LR) nor paid the ad-valorem carrier insurance risk surcharge. Due to severe road potholes, internal machinery brackets suffered misalignment. The shipper issued a debit note for ₹18,00,000 for repair and recalibration.",
    shipperTactic:
      "Shippers conceal true commercial risk to avoid paying higher carrier freight rates, but seek total tortious indemnity from the low-margin transporter when transit shock occurs.",
    statutoryShield:
      "Carriage by Road Act, 2007 (Section 10) read with Rule 12 of the Carriage by Road Rules, 2011. The statutory liability of a common carrier for loss or damage to consignments is strictly limited to the statutory ceiling (ten times freight or prescribed per-kg limits) unless the consignor explicitly declares the value on the consignment note AND pays the agreed carrier risk percentage surcharge prior to dispatch.",
    counterStrategy:
      "Produce the original Consignment Note / Bilty proving non-declaration of special value and absence of ad-valorem carrier risk surcharge. Reject the ₹18,00,000 debit note in toto; invoke Rule 12 limited carrier liability ceiling, capping total exposure to a fractional amount or zero if packaging inadequacy caused internal vibration damage.",
    outcomeMetric: "Debit exposure restricted from ₹18,00,000 down to statutory carrier ceiling; balance saved.",
  },
];

export default function ShipperDebitDefenseScenarioTabs() {
  const [selectedScenario, setSelectedScenario] = useState<Scenario>(SCENARIOS[0]);

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
      {/* Tab Navigation */}
      <div className="flex flex-wrap border-b border-slate-200 bg-slate-50/80 p-1.5 gap-1.5">
        {SCENARIOS.map((scenario) => {
          const isSelected = selectedScenario.id === scenario.id;
          return (
            <button
              key={scenario.id}
              type="button"
              onClick={() => setSelectedScenario(scenario)}
              className={`flex-1 min-w-[140px] sm:min-w-[180px] px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all duration-150 text-center cursor-pointer ${
                isSelected
                  ? "bg-[#DC2626] text-white shadow-xs"
                  : "bg-transparent text-slate-600 hover:text-slate-900 hover:bg-white"
              }`}
            >
              {scenario.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Tab Body */}
      <div className="p-5 sm:p-7 md:p-8 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="inline-block px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-red-100 text-[#DC2626] border border-red-200">
            {selectedScenario.badge}
          </span>
          <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
            &check; Recoverable via Statutory Notice
          </span>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 leading-snug mb-3">
            {selectedScenario.title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-200">
            <strong className="text-slate-900 font-bold block mb-1">Commercial Fact Pattern:</strong>
            {selectedScenario.situation}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-red-50/70 border border-red-200 text-slate-800">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-red-600 shrink-0" />
              <h4 className="text-xs font-black uppercase tracking-wider text-red-900">
                Shipper's Coercive Tactic
              </h4>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {selectedScenario.shipperTactic}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900 text-white border border-slate-800">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
              <h4 className="text-xs font-black uppercase tracking-wider text-emerald-400">
                Statutory Defense &amp; Precedent Shield
              </h4>
            </div>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              {selectedScenario.statutoryShield}
            </p>
          </div>
        </div>

        <div className="p-4 sm:p-5 rounded-xl bg-gradient-to-r from-slate-50 via-red-50/40 to-slate-50 border border-red-200/80">
          <h4 className="text-xs font-black uppercase tracking-wider text-slate-900 mb-2">
            Recommended Operational Counter-Strategy
          </h4>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-3">
            {selectedScenario.counterStrategy}
          </p>
          <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-800 bg-emerald-100/80 px-3 py-1.5 rounded-lg border border-emerald-300">
            <span>Result Benchmark:</span>
            <span>{selectedScenario.outcomeMetric}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
