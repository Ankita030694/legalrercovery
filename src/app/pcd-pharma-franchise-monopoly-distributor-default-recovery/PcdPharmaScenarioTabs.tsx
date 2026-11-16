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
    id: "district-monopoly-squatting",
    badge: "Scenario 1 • Territory Monopoly Squatting & Chemist Boycott Threats",
    title: "Franchisee Defaults on ₹18L Credit Ledger, Blocks District Sales, and Threatens Association Boycott if Franchisor Re-Appoints",
    stumblingBlock:
      "A PCD pharma company based in Panchkula or Chandigarh grants exclusive district monopoly rights for 120 formulations (antibiotics, PPIs, nutraceuticals, injectables) to a franchisee in Gorakhpur or Patna. The franchisee extracts rolling credit over 90 days, accumulating ₹18 Lakh in unpaid dues. When the franchisor halts further dispatches, the franchisee sits on the exclusive agreement, refuses to reconcile balances, and threatens that any new distributor appointed by the franchisor will be boycotted by the local District Chemist & Druggist Association (CDA).",
    statutoryExposure:
      "Under Section 39 and Section 75 of the Indian Contract Act, 1872, persistent credit default and refusal to meet agreed Minimum Order Quantities (MOQs) constitutes anticipatory repudiatory breach of the franchise contract, granting the franchisor the absolute legal right to terminate exclusive monopoly rights forthwith and claim compensation. Furthermore, orchestrated trade boycotts by regional chemist associations violate Section 3(3)(b) of the Competition Act, 2002 (anti-competitive horizontal agreements limiting market supply) and are punishable with severe CCI penalties on association office-bearers.",
    recoverySOP: [
      "Issue a 7-Day Contractual Remedy-cum-Monopoly Revocation Notice detailing the ledger default and quantifying MOQ contractual shortfalls.",
      "Execute formal Territory De-Listing Notice simultaneously served on the defaulting franchisee and copied to regional wholesale stockists.",
      "Notify the District Chemist & Druggist Association under legal cover, stating that any collusive boycott violates Section 3 of the Competition Act, 2002.",
      "Appoint a replacement distributor immediately under interim indemnity, transitioning retail chemist supplies without regulatory disruption.",
    ],
    keyAuthority: "Indian Contract Act 1872 ss.39, 73, 75 & Competition Act 2002 s.3(3)(b)",
  },
  {
    id: "remote-out-of-state-default",
    badge: "Scenario 2 • Remote Out-of-State Default & Geographic Blackmail",
    title: "Franchisee in Bihar, UP, Odisha or Assam Defies Payment Demands Under the Illusion That HQ Will Never Travel 1,200 km to Sue",
    stumblingBlock:
      "Over 8,000 PCD formulation marketing companies operate out of northern clusters (Chandigarh, Panchkula, Baddi, Ambala) and Gujarat (Ahmedabad, Vadodara). Their greatest operational fear is that suing a defaulting franchisee located in remote districts (such as Siwan, Muzaffarpur, Balasore, or Silchar) requires hiring local lawyers, funding outstation travel, and battling local court bias over years, leading them to write off ₹5L to ₹25L debts.",
    statutoryExposure:
      "The franchisee's geographical immunity is an absolute legal illusion. Under Section 142(2)(a) of the Negotiable Instruments Act, 1881 (enacted via the 2015 statutory amendment), territorial jurisdiction for criminal cheque bounce under Section 138 lies exclusively where the payee maintains its bank account branch where the cheque is delivered for collection! A Chandigarh or Ahmedabad PCD company depositing a cheque in its home branch files Section 138 directly before the CJM in Chandigarh or Ahmedabad. The remote franchisee is forced to travel across state lines to secure bail and attend hearings, completely reversing the territorial leverage.",
    recoverySOP: [
      "Deposit the franchisee's security cheque / current PDC in the franchisor's home bank branch in Chandigarh, Panchkula, Ambala, or Ahmedabad.",
      "Upon memo return, dispatch the mandatory Section 138 Statutory Demand Notice within 30 days via Registered Speed Post RPAD and email.",
      "Upon expiry of the 15-day statutory cure window, file the Section 138 Criminal Complaint before the jurisdictional CJM at the franchisor's home city.",
      "Issue Section 143A interim compensation application demanding mandatory deposit of up to 20% of the cheque face value before trial.",
    ],
    keyAuthority: "Negotiable Instruments Act 1881 s.138, s.142(2)(a), s.143A & Dashrath Rupsingh Rathod Precedent",
  },
  {
    id: "bounced-security-cheque",
    badge: "Scenario 3 • Security Cheque Bounce & 'Stop Payment' Fraud",
    title: "Franchisee Issues 'Stop Payment' on Security PDC Citing Spurious Product Complaints or 'Cheque Given Only for Security'",
    stumblingBlock:
      "When onboarding a PCD franchisee, pharma companies take 1 to 3 signed undated security cheques. When the credit ledger reaches ₹12 Lakh and aging crosses 75 days, the franchisor fills the legally due invoice amount and deposits the cheque. The franchisee immediately instructs its bank to mark 'Payment Stopped by Drawer' or the cheque bounces for 'Funds Insufficient', alleging in a counter-notice that security cheques cannot be encashed without mutual audit.",
    statutoryExposure:
      "In *Sripati Singh v. State of Jharkhand (2021)* and *Sunil Todi v. State of Gujarat (2021)*, the Supreme Court of India conclusively held that a cheque issued as 'security' matures into an enforceable negotiable instrument towards an existing debt as soon as goods are supplied and the borrower or buyer defaults on repayment. A 'Stop Payment' instruction does not evade Section 138 liability (per *Modi Cements v. Kuchil Kumar Nandi*). Once the credit balance is established by GST invoices and transport bilties, the statutory presumption under Sections 118 and 139 of the NI Act operates with full penal force against the franchisee.",
    recoverySOP: [
      "Collate bank return memo with exact dishonour reason code ('Payment Stopped by Drawer' / '01 Insufficient Funds').",
      "Correlate invoice numbers, LR bilties, and GST e-Way bills establishing that the cheque amount matches crystallized, undisputed consideration.",
      "Issue 30-Day Statutory Advocate Notice citing *Sripati Singh* and *Sunil Todi*, putting the franchisee's managing partners or directors on criminal notice.",
      "Combine Section 138 prosecution with an Order XXXVII CPC Summary Suit in Commercial Court for immediate pre-judgment decree.",
    ],
    keyAuthority: "Supreme Court in Sripati Singh (2021), Sunil Todi (2021) & NI Act 1881 ss.118, 138, 139",
  },
  {
    id: "promotional-mr-bag-detention",
    badge: "Scenario 4 • Promotional Input, Visual Aid & Doctor Sample Detention",
    title: "Terminated Franchisee Withholds Medical Representative (MR) Bags, Visual Aids, Product Glossaries & Physician Samples",
    stumblingBlock:
      "PCD pharma companies supply comprehensive marketing collateral alongside drug consignments: embossed leatherette MR bags, laminated visual aids, scientific product glossaries, promotional doctor gifts, catch covers, and free physician samples worth ₹2 Lakh to ₹6 Lakh per district. Upon default or termination, the franchisee detains these assets, re-labels doctor samples, or threatens to destroy visual aids to sabotage the franchisor's brand equity.",
    statutoryExposure:
      "Marketing collateral, visual aids, and physician samples are supplied under bailment (Section 148 of the Indian Contract Act, 1872) strictly for promotional detailing on behalf of the principal; title never transfers to the franchisee. Wrongful retention, diversion, or sale of physician samples labeled 'Physician Sample - Not to be Sold' constitutes Criminal Breach of Trust under Section 316 of the Bharatiya Nyaya Sanhita, 2023 (BNS, legacy IPC s.405/406) and a cognizable violation of the Drugs and Cosmetics Act, 1940 (Section 18(a) / 27).",
    recoverySOP: [
      "Itemize bailed promotional assets using delivery challans and dispatch logs signed by the franchisee or its field medical representatives.",
      "Dispatch a 48-Hour Promotional Asset Repossession Notice demanding immediate physical surrender of all visual aids, MR bags, and doctor samples.",
      "File a criminal complaint under BNS Section 316 / Section 318 before the CJM for police search warrant to seize detained pharma inputs.",
      "Notify the State Drug Controller regarding unauthorized retention of physician samples, initiating regulatory inspection of franchisee godowns.",
    ],
    keyAuthority: "Bharatiya Nyaya Sanhita 2023 s.316 & s.318, Contract Act 1872 s.148 & Drugs and Cosmetics Act 1940 s.18(a)",
  },
];

export default function PcdPharmaScenarioTabs() {
  const [activeTab, setActiveTab] = useState(SCENARIOS[0].id);
  const currentScenario = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full bg-slate-900 text-white rounded-2xl border border-slate-800 p-5 sm:p-7 shadow-xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-800">
        <div>
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 block mb-1">
            Interactive Operational Playbook
          </span>
          <p className="text-base sm:text-lg font-bold text-white">
            4 Critical PCD Franchise Default Failure Modes &amp; Action Plans
          </p>
        </div>
        <span className="text-xs text-slate-400 bg-slate-800 px-3 py-1 rounded-full self-start sm:self-auto border border-slate-700">
          Select Scenario Below
        </span>
      </div>

      {/* Tabs Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-6">
        {SCENARIOS.map((item) => {
          const isSelected = activeTab === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveTab(item.id)}
              className={`p-3 rounded-xl text-left transition-all duration-150 flex flex-col justify-between cursor-pointer border ${
                isSelected
                  ? "bg-[#DC2626] text-white border-red-500 shadow-md shadow-red-900/40"
                  : "bg-slate-800/80 text-slate-300 border-slate-700/60 hover:bg-slate-800 hover:text-white"
              }`}
            >
              <span className="text-[10px] font-bold uppercase tracking-wider block mb-1 opacity-90 truncate">
                {item.id.replace(/-/g, " ")}
              </span>
              <span className="text-xs font-semibold line-clamp-2 leading-snug">
                {item.badge.split("•")[1] || item.badge}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Tab Panel */}
      <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-5 sm:p-6 space-y-5">
        <div>
          <span className="inline-block px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-red-950/80 text-red-400 border border-red-800/60 mb-2">
            {currentScenario.badge}
          </span>
          <p className="text-base sm:text-lg font-extrabold text-white leading-snug">
            {currentScenario.title}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          {/* Defaulter Play */}
          <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800">
            <span className="block text-[11px] font-bold uppercase tracking-wider text-amber-400 mb-1.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              Franchisee Tactic &amp; Bottleneck
            </span>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {currentScenario.stumblingBlock}
            </p>
          </div>

          {/* Creditor Statutory Countermeasure */}
          <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800">
            <span className="block text-[11px] font-bold uppercase tracking-wider text-emerald-400 mb-1.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Statutory Countermeasure &amp; Legal Shield
            </span>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {currentScenario.statutoryExposure}
            </p>
          </div>
        </div>

        {/* Step-by-Step SOP */}
        <div className="pt-2">
          <span className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
            Operational Recovery SOP &bull; 4-Stage Protocol
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {currentScenario.recoverySOP.map((step, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-900/60 border border-slate-800/80 text-xs text-slate-200"
              >
                <span className="w-5 h-5 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-[10px] font-black shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <span className="leading-relaxed">{step}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Authority Bar */}
        <div className="pt-3 border-t border-slate-800 flex items-center justify-between flex-wrap gap-2 text-[11px]">
          <span className="text-slate-400 font-medium">Governing Statutory Authority:</span>
          <span className="font-semibold text-red-400 bg-red-950/40 px-2.5 py-1 rounded-md border border-red-900/40">
            {currentScenario.keyAuthority}
          </span>
        </div>
      </div>
    </div>
  );
}
