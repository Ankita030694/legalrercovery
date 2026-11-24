"use client";

import React, { useState } from "react";

interface ScenarioTab {
  id: string;
  tabLabel: string;
  title: string;
  dealerTactic: string;
  statutoryCounter: string;
  actionSteps: {
    step: string;
    detail: string;
  }[];
  legalProvision: string;
}

const SCENARIOS: ScenarioTab[] = [
  {
    id: "viral-mortality-fcr-blame",
    tabLabel: "Viral / High FCR Blame",
    title: "Shrimp Pond Wipeout (WSSV/EMS) or Broiler Mortality Blamed on Feed Quality",
    dealerTactic:
      "After a 60–120 day aquaculture crop in Andhra Pradesh/Odisha or a broiler cycle in Namakkal/Haryana/Pune/Telangana, the dealer or farm owner refuses to pay ₹12–₹35 lakh in feed invoices, alleging 'high FCR (Feed Conversion Ratio)', 'excessive moisture', or 'toxic feed caused shrimp/bird mortality'—without ever sending a sealed bag for veterinary or NABL lab testing during the culture cycle.",
    statutoryCounter:
      "Viral outbreaks like White Spot Syndrome Virus (WSSV), Early Mortality Syndrome (EMS), Ranikhet (Newcastle), or Avian Influenza are bio-security and pond/shed management failures, not feed defects. Under Section 42 of the Sale of Goods Act, 1930, once feed bags are unsealed, fed over 45–90 days, and consumed without contemporaneous written rejection or independent NABL/state veterinary laboratory testing of the control batch, the buyer is deemed to have accepted the goods. Producing your factory's Batch Retention Sample Mycotoxin/Aflatoxin & Proximate Analysis Lab Report completely destroys this defense.",
    actionSteps: [
      {
        step: "Release Batch Retention Sample Lab Report",
        detail:
          "Pull the sealed factory control sample for the exact batch numbers printed on the E-Way Bill and obtain a certified NABL/veterinary lab report confirming aflatoxin/mycotoxin levels and crude protein are within BIS (IS 1374 / CAA) tolerances.",
      },
      {
        step: "Serve Estoppel & Veterinary Proof Demand Notice",
        detail:
          "Issue a Fact-Verified Legal Notice putting the dealer to strict proof of contemporaneous post-mortem, PCR/water-quality, or mycotoxin lab reports linking your batch to mortality within 7 days—failing which the defense is barred.",
      },
      {
        step: "File Order XXXVII Summary Suit / MSEFC Claim",
        detail:
          "Escalate liquidated invoice arrears with 3x RBI compound interest (if Udyam-registered under MSMED Act s.16) as an undisputed commercial debt.",
      },
    ],
    legalProvision: "Sale of Goods Act s.42 | BSA 2023 s.63 | MSMED Act ss.15–18 | BIS IS 1374",
  },
  {
    id: "bird-lifting-theft",
    tabLabel: "Bird Lifting Theft (BNS s.316)",
    title: "Contract Broiler Farmer Secretly Sells Integrator Birds at Night & Reports 'Mortality'",
    dealerTactic:
      "Under contract broiler integration, the feed/poultry integrator supplies Day-Old Chicks (DOCs), starter/finisher feed, and vaccines while retaining legal ownership of the flock. At Week 5–6 (when birds reach 2.0–2.4 kg), the contract farmer secretly sells 1,500–4,000 live birds at night to cash mandi traders ('bird lifting theft') and tells the supervisor the birds died of heatstroke or Ranikhet.",
    statutoryCounter:
      "Under a contract farming integration agreement, the farmer holds the chicks and feed strictly as a 'bailee' under Sections 148–161 of the Indian Contract Act, 1872—title never passes to the farmer. Secretly selling or diverting bailed birds to third-party cash traders constitutes Criminal Breach of Trust under Section 316 of the Bharatiya Nyaya Sanhita (BNS), 2023 (punishable with imprisonment and fine), alongside civil conversion damages for market value of the lifted birds plus consumed feed.",
    actionSteps: [
      {
        step: "Conduct Immediate Physical Flock Count & Panchnama",
        detail:
          "Deploy the area supervisor and veterinary officer to record GPS-stamped shed photos, empty litter count, daily mortality register vs. missing bird headcount, and neighbour/watchman statements.",
      },
      {
        step: "Serve BNS s.316 Criminal Breach of Trust Notice",
        detail:
          "Dispatch an urgent Fact-Verified Notice via WhatsApp, Email, and Speed Post RPAD demanding immediate restitution of the lifted flock value within 48–72 hours before FIR registration under BNS s.316.",
      },
      {
        step: "File Police Complaint & Civil Attachment",
        detail:
          "If unpaid, file a criminal complaint at the local police station enclosing the Integration Bailment Agreement, chick challans, feed delivery slips, and flock reconciliation sheet.",
      },
    ],
    legalProvision: "BNS 2023 s.316 (Criminal Breach of Trust) | Contract Act ss.148–161 (Bailment)",
  },
  {
    id: "harvest-pdc-bounce",
    tabLabel: "60–120d Harvest PDC Bounce",
    title: "Aqua/Dairy/Poultry Dealer Security Cheques Bounce After Harvest Collection",
    dealerTactic:
      "Feed distributors in West Godavari, East Godavari, Balasore, Namakkal, Karnal, and Baramati operate on 60–120 day harvest credit backed by undated or post-dated security cheques. When the feed company presents the cheque after harvest reconciliation, the dealer issues 'Stop Payment' or leaves the account unfunded, claiming 'security cheques cannot be prosecuted'.",
    statutoryCounter:
      "The Supreme Court in Sripati Singh v. State of Jharkhand (2021) and Sampelly Satyanarayana Rao (2016) definitively held that a cheque issued as security becomes fully enforceable under Section 138 of the Negotiable Instruments Act, 1881 the moment the underlying credit ledger becomes due and payable. Issuing 'Stop Payment' or closing the account attracts identical criminal liability and 20% interim compensation under Section 143A.",
    actionSteps: [
      {
        step: "Verify Exact Ledger Balance Before Presentation",
        detail:
          "Reconcile all volume rebates, FCR bonuses, and empty gunny-bag credits so the cheque amount matches or is less than the legally enforceable debt (per Dashrathbhai Trikambhai Patel).",
      },
      {
        step: "Issue Mandatory 30-Day Section 138 Demand Notice",
        detail:
          "Within 30 days of the bank return memo, serve a statutory Section 138 NI Act notice giving 15 days to clear the cheque amount via RTGS/NEFT.",
      },
      {
        step: "Prosecute Before Judicial Magistrate + Seek 20% Deposit",
        detail:
          "File the NI s.138 complaint within 30 days of cause of action and move an application under Section 143A NI Act for 20% interim compensation.",
      },
    ],
    legalProvision: "NI Act 1881 ss.138, 139, 141 & 143A | Sripati Singh v. State of Jharkhand (2021)",
  },
  {
    id: "security-mortgage-guarantee",
    tabLabel: "Mortgage & Guarantee",
    title: "Enforcing Dealer Security Mortgage, Personal Guarantee & Asset-Freeze Remedies",
    dealerTactic:
      "High-volume aqua and poultry feed stockists carrying ₹30 lakh to ₹1.5 Cr+ credit limits attempt to alienate agricultural/commercial plots or shift retail billing to a spouse's new GSTIN once overdue ledgers cross 120 days.",
    statutoryCounter:
      "Where the feed manufacturer obtained a registered or equitable mortgage (deposit of title deeds under Section 58(f) of the Transfer of Property Act, 1882) or a personal/third-party guarantee (Section 128 of the Indian Contract Act, 1872), the creditor can simultaneously invoke mortgage enforcement under Order XXXIV CPC, pursue co-extensive recovery against guarantors, and seek urgent Attachment Before Judgment under Order XXXVIII Rule 5 CPC to freeze property transfers.",
    actionSteps: [
      {
        step: "Serve Joint Notice on Dealer & Personal Guarantors",
        detail:
          "Invoke Section 128 Contract Act co-extensive liability so guarantors' personal bank accounts and properties are brought onto the recovery notice immediately.",
      },
      {
        step: "Register Lis Pendens / Seek Order XXXVIII Rule 5 Stay",
        detail:
          "If encumbrance search shows attempts to sell mortgaged or personal land, move Commercial Court / Civil Court for urgent injunction against alienation.",
      },
      {
        step: "Pursue Commercial Court Mediation & Decree Execution",
        detail:
          "Complete mandatory pre-institution mediation under Section 12A of the Commercial Courts Act, 2015 (for claims ≥₹3 lakh) and enforce decree via property attachment.",
      },
    ],
    legalProvision: "Transfer of Property Act s.58(f) | Contract Act s.128 | CPC Order XXXVIII Rule 5 & Order XXXIV",
  },
];

export default function FeedDealerScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(SCENARIOS[0].id);
  const current = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full">
      <div
        role="tablist"
        aria-label="Feed dealer and contract farming default scenarios"
        className="flex flex-wrap gap-2 mb-5 border-b border-slate-200 pb-3"
      >
        {SCENARIOS.map((tab) => {
          const isSelected = tab.id === activeTab;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={isSelected}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                isSelected
                  ? "bg-[#DC2626] text-white shadow-sm"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {tab.tabLabel}
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-5"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-4">
          <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
            {current.title}
          </h3>
          <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold bg-slate-900 text-white shrink-0">
            {current.legalProvision}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-red-50/70 border border-red-200 rounded-xl p-4">
            <p className="text-[11px] font-bold uppercase tracking-wider text-[#DC2626] mb-1.5">
              Dealer / Farmer Diversion Tactic
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {current.dealerTactic}
            </p>
          </div>
          <div className="bg-emerald-50/70 border border-emerald-200 rounded-xl p-4">
            <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 mb-1.5">
              Creditor Statutory Counter-Playbook
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {current.statutoryCounter}
            </p>
          </div>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
            3-Step Legal Execution Sequence
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {current.actionSteps.map((item, idx) => (
              <div
                key={item.step}
                className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs"
              >
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#DC2626] text-white text-xs font-bold mb-2">
                  {idx + 1}
                </span>
                <p className="text-xs sm:text-sm font-bold text-slate-900 mb-1">{item.step}</p>
                <p className="text-xs text-slate-600 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
