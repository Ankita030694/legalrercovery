"use client";

import React, { useState } from "react";

interface Scenario {
  id: string;
  tabLabel: string;
  badge: string;
  title: string;
  buyerPretext: string;
  legalReality: string;
  stayFeasibility: string;
  tacticalActionPlan: string[];
  statutoryPrecedent: string;
}

const SCENARIOS: Scenario[] = [
  {
    id: "retaliatory-retention-invocation",
    tabLabel: "1. Retaliatory PBG Invocation",
    badge: "Coercive Leverage",
    title: "Buyer Involves 10% PBG When Manufacturer Demands Overdue 20% Retention Dues",
    buyerPretext:
      "\"The machinery was commissioned 8 months ago, but we now notice micro-vibrations and slight throughput drop. Because you served an advocate notice for your pending ₹45 Lakh retention milestone, we have invoked your 10% Performance Bank Guarantee (₹25 Lakh) to secure our damages.\"",
    legalReality:
      "When a buyer has executed commercial production on delivered machinery without issuing contemporaneous defect notices under Sale of Goods Act s.42, invoking a PBG purely to counter a legitimate overdue payment demand constitutes bad faith. While banks cannot judge underlying disputes, if the buyer admitted satisfactory commissioning in prior minutes or emails, this creates compelling grounds of 'special equities' where permitting encashment would inflict irretrievable injustice on an operational creditor.",
    stayFeasibility:
      "MODERATE TO HIGH INJUNCTION CHANCE: If contemporaneous email threads or joint commissioning protocols confirm the machine achieved standard parameters and invocation is timed immediately post-statutory demand notice, courts recognize malicious weaponization under the special equities doctrine.",
    tacticalActionPlan: [
      "Issue an immediate formal 'Notice of Malicious & Bad-Faith Invocation' to the buyer's Managing Director and Chief Financial Officer, copied to the issuing bank branch manager.",
      "File an emergency petition under Section 9 of the Arbitration and Conciliation Act, 1996 before the Commercial Division of the High Court or District Commercial Court.",
      "Place on record joint commissioning logs, signed Provisional/Final Acceptance Certificates (PAC/FAC), and GST e-invoices proving full commercial exploitation.",
      "Seek an interim ad-interim stay or an order directing the encashed proceeds to be deposited into an interest-bearing escrow account maintained with the Court Registrar.",
    ],
    statutoryPrecedent: "U.P. State Sugar Corp. (1997) 1 SCC 568 · BSES Ltd. v. Fenner India Ltd. (2006) 2 SCC 728",
  },
  {
    id: "conditional-bg-defect",
    tabLabel: "2. The Conditional BG Trap",
    badge: "Textual Strictness",
    title: "Bank Guarantee Text Contains Explicit Breach / Certificate Pre-Conditions",
    buyerPretext:
      "\"Our purchase order says the guarantee is unconditional. We have submitted an invocation letter stating simply 'Please encash PBG No. 4920 and remit funds to our current account immediately'. The bank is legally mandated to pay without questioning our claim.\"",
    legalReality:
      "The Supreme Court in *Hindustan Construction Co. Ltd. v. State of Bihar* and *Standard Chartered Bank v. Heavy Engineering Corporation* established that the terms of the bank guarantee contract govern absolutely—not the overarching purchase agreement. If the BG instrument explicitly states that invocation requires a declaration that 'the contractor has committed a breach of clause X' or requires an Independent Engineer's certificate, an invocation letter that omits these mandatory words is invalid, void ab initio, and the issuing bank has zero legal authority to honor it.",
    stayFeasibility:
      "VERY HIGH INJUNCTION CHANCE (Near 100%): Banks have a fiduciary duty to reject invocations that deviate from the exact conditional wording of the guarantee. Courts routinely grant ad-interim injunctions restraining payment on non-compliant invocation letters.",
    tacticalActionPlan: [
      "Immediately audit every clause of the original Bank Guarantee instrument issued by your banker; cross-check every word against the buyer's invocation notice.",
      "Submit an urgent written caveat and legal protest to the issuing bank branch, citing *Hindustan Construction* (1999) 8 SCC 436, warning the bank against wrongful debit to your credit facility.",
      "File an urgent Section 9 Arbitration Petition highlighting the jurisdictional defect: the beneficiary has failed to fulfill the contractual trigger conditions precedent.",
      "Force the buyer to issue a fresh invocation letter—giving your legal team time to establish performance compliance or file comprehensive arbitral pleadings.",
    ],
    statutoryPrecedent: "Hindustan Construction Co. v. State of Bihar (1999) 8 SCC 436 · Standard Chartered Bank (2020) 13 SCC 574",
  },
  {
    id: "abg-advance-guarantee-reduction",
    tabLabel: "3. Advance BG (ABG) Invocation",
    badge: "Proportional Discharge",
    title: "Buyer Involves Full 100% Advance Bank Guarantee After 80% Goods Delivered",
    buyerPretext:
      "\"We gave you a 15% mobilization advance backed by an ABG of ₹50 Lakh. Although you delivered ₹2.5 Crore worth of equipment and we adjusted ₹40 Lakh against progressive invoices, we are encashing the full ₹50 Lakh ABG because the remaining 20% components are delayed.\"",
    legalReality:
      "An Advance Bank Guarantee is intended solely to secure the mobilization advance until it is adjusted against running supply invoices. Invocations of the full face value of an ABG when the buyer has already adjusted 80% of the advance amount constitutes egregious fraud on the face of the record. The beneficiary cannot unjustly enrich itself by recovering money it has already recouped through invoice deductions.",
    stayFeasibility:
      "HIGH INJUNCTION CHANCE: Courts recognize that attempting to encash unadjusted portions of an Advance BG when the underlying advance has been liquidated creates an egregious fraud scenario and violates Section 67 & 70 of the Indian Contract Act.",
    tacticalActionPlan: [
      "Collate all progressive invoices showing the explicit deduction column: 'Advance Recovery Adjusted'.",
      "Compile payment vouchers, TDS certificates, and bank statements confirming that ₹40 Lakh of advance was already recouped by the buyer.",
      "Issue a formal legal notice to the issuing bank demanding reduction of guarantee liability pro rata to supplies delivered, as recognized in standard FIDIC and CPWD contracts.",
      "Seek Section 9 interim relief restricting invocation strictly to the unrecovered balance (₹10 Lakh) or granting a complete stay based on fraudulent over-claiming.",
    ],
    statutoryPrecedent: "Gangotri Enterprises Ltd. v. Union of India (2016) 11 SCC 720 · Indian Contract Act s.70",
  },
  {
    id: "post-encashment-restitution",
    tabLabel: "4. Post-Encashment Restitution",
    badge: "Recovery & Penal Interest",
    title: "Bank Has Already Paid Out the PBG: Recovering Funds With 18% Compound Interest",
    buyerPretext:
      "\"The bank has already transferred the ₹30 Lakh to our corporate account yesterday. The bank guarantee is discharged and the money is ours. You cannot obtain an injunction against an encashed guarantee; your only remedy is to wait 5 years for a civil suit.\"",
    legalReality:
      "While an injunction cannot lie against an already encashed guarantee, the law does NOT leave the manufacturer helpless. Under the Doctrine of Restitution (enshrined in Section 144 of the Code of Civil Procedure, 1908 and arbitral powers under Section 31(7) of the Arbitration Act), an arbitral tribunal or Commercial Court has full statutory power to order the abusive buyer to deposit the entire encashed amount back into court or escrow, accompanied by 18% commercial penal interest from the precise date of debit.",
    stayFeasibility:
      "POST-ENCASHMENT RESTITUTION: Cannot obtain stay, but can obtain Section 9/17 security deposit orders compelling buyer to furnish solvent security or bank guarantee for the encashed sum pending arbitration.",
    tacticalActionPlan: [
      "File an urgent Section 9(1)(ii)(b) petition for preservation of assets, or Section 17 before the Arbitral Tribunal, seeking an order directing the buyer to deposit ₹30 Lakh into court.",
      "Issue an immediate Advocate Statutory Demand Notice for Restitution under Section 144 CPC and Section 73 of the Indian Contract Act, claiming 18% per annum commercial interest.",
      "If the manufacturer is an MSME (Micro/Small Enterprise), file an MSEFC Reference claiming the encashed PBG as an illegal deduction from the total contract amount, demanding 3x RBI Bank Rate compound interest under Section 16 of the MSMED Act.",
      "Attach the buyer's plant equipment or bank accounts under Order XXXVIII Rule 5 CPC if there is risk of asset dissipation.",
    ],
    statutoryPrecedent: "Arbitration Act s.9(1)(ii)(b) & s.31(7) · CPC s.144 Restitution · MSMED Act s.16",
  },
];

export default function PbgInvocationScenarioTabs() {
  const [activeTab, setActiveTab] = useState(SCENARIOS[0].id);
  const currentScenario = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full">
      {/* Tab Navigation */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-6">
        {SCENARIOS.map((sc) => {
          const isActive = activeTab === sc.id;
          return (
            <button
              key={sc.id}
              type="button"
              onClick={() => setActiveTab(sc.id)}
              className={`p-3 text-left rounded-xl border transition-all cursor-pointer ${
                isActive
                  ? "bg-[#DC2626] border-[#DC2626] text-white shadow-sm font-bold"
                  : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300 font-medium"
              }`}
            >
              <span
                className={`block text-[10px] uppercase tracking-wider mb-1 ${
                  isActive ? "text-red-100" : "text-slate-400"
                }`}
              >
                {sc.badge}
              </span>
              <span className="text-xs sm:text-sm block line-clamp-2 leading-snug">
                {sc.tabLabel}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Tab Panel */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-7 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-4 border-b border-slate-200">
          <div>
            <span className="inline-block px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-red-100 text-[#DC2626] mb-1.5">
              Live Commercial Failure Mode
            </span>
            <h3 className="text-base sm:text-lg font-bold text-slate-900">
              {currentScenario.title}
            </h3>
          </div>
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-200 text-slate-700">
            {currentScenario.statutoryPrecedent}
          </span>
        </div>

        {/* Pretext vs Legal Reality */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
          <div className="bg-white border border-red-200 rounded-xl p-4 shadow-xs">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
              <p className="text-xs font-bold uppercase tracking-wider text-red-700">
                Buyer Pretext / Bluff
              </p>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
              {currentScenario.buyerPretext}
            </p>
          </div>

          <div className="bg-white border border-emerald-200 rounded-xl p-4 shadow-xs">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-600" />
              <p className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                Statutory &amp; Judicial Reality
              </p>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {currentScenario.legalReality}
            </p>
          </div>
        </div>

        {/* Stay Feasibility Warning */}
        <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl mb-5">
          <p className="text-xs font-bold uppercase tracking-wider text-amber-900 mb-1">
            Section 9 Injunction Feasibility Assessment
          </p>
          <p className="text-xs sm:text-sm text-amber-900 font-medium leading-relaxed">
            {currentScenario.stayFeasibility}
          </p>
        </div>

        {/* Tactical Action Plan */}
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-3">
            Creditor Tactical Action SOP:
          </p>
          <ul className="space-y-2">
            {currentScenario.tacticalActionPlan.map((action, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700"
              >
                <span className="w-5 h-5 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <span>{action}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
