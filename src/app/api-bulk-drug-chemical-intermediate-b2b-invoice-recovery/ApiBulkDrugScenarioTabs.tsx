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
    id: "late-qc-assay-rejection",
    tabLabel: "1. Late Assay Rejection",
    title: "Formulation Buyer Consumes API Drums, Then Alleges Pharmacopoeia Impurity at 90 Days",
    badge: "Sale of Goods Act s.42 Deemed Acceptance",
    buyerProfile:
      "Formulation plant in Baddi, Haridwar, or Sikkim purchasing Active Pharmaceutical Ingredients (APIs) on 60–90 day credit terms from bulk drug units in Hyderabad or Vizag.",
    pretext:
      "The buyer receives sealed API drums along with the manufacturer's Certificate of Analysis (COA) matching IP/BP/USP pharmacopoeial monographs. After converting the raw material into oral solids or injectables over 8 weeks, the buyer faces a working capital squeeze and issues an email alleging 'out-of-specification (OOS) related substances' or 'HPLC assay failure', demanding full debit notes or stock return.",
    legalReality:
      "Under Section 41 and 42 of the Sale of Goods Act, 1930, if the buyer retains the goods without intimating rejection within the contractual QC window (standard 7–15 days), or performs any act inconsistent with the seller's ownership (such as dispensing into granulation or formulation batches), the buyer is deemed in law to have accepted the goods. Late rejection after consumption is legally inadmissible and constitutes a manufactured moonshine dispute under Mobilox Innovations.",
    statutoryHook:
      "Sale of Goods Act 1930 (s.41, s.42) + IBC 2016 s.8 Form 3 Notice + Order XXXVII CPC Summary Suit",
    actionProtocol: [
      "Issue an immediate formal requisition under Section 42 Sale of Goods Act for batch manufacturing records (BMR), dispensing logs, and retained sample verification.",
      "Send a sealed aliquot of the manufacturer's certified Control/Retention Sample to a NABL-accredited or CDL reference laboratory for third-party re-testing.",
      "Serve a fact-verified 10-day Demand Notice demonstrating that the buyer's silence past the contractual QC window constituted final statutory acceptance.",
      "Escalate unpaid ledger dues (>= ₹1 Crore) via IBC Section 8 Demand Notice (Form 3/4) to preempt fraudulent NCLT 'pre-existing dispute' defenses.",
    ],
  },
  {
    id: "usance-lc-bill-default",
    tabLabel: "2. Usance LC / Bill Default",
    title: "Buyer Banks Refuse Usance Acceptance or Defaulter Stalls on Bill of Exchange Retirement",
    badge: "Negotiable Instruments Act s.138 & Order 37",
    buyerProfile:
      "Mid-sized pharmaceutical manufacturer or chemical merchant operating on 90–120 day Usance Letters of Credit (LC) or Documents against Acceptance (DA) Bills of Exchange.",
    pretext:
      "API seller draws a Bill of Exchange against bulk intermediate supply, accepted by the buyer with a scheduled 90-day maturity. Upon maturity, the buyer fails to fund its LC account, disputes the underlying chemical assay with its issuing bank, or attempts to obtain injunctions against honoring the negotiable instrument.",
    legalReality:
      "A Bill of Exchange or Letter of Credit is an autonomous contract independent of underlying commercial grievances. Under Section 138 of the Negotiable Instruments Act, 1881 and Order XXXVII CPC, an accepted Bill of Exchange creates unconditional liquidated liability. In the absence of established fraud known to the negotiating bank, payment cannot be withheld under Indian banking law.",
    statutoryHook:
      "NI Act 1881 (s.138, s.141) + Order XXXVII CPC (Rule 1(2)(a)) + UCP 600 Autonomy Doctrine",
    actionProtocol: [
      "Procure a formal Bank Memo / Certificate of Non-Payment and Notarial Protest of dishonour for non-payment within statutory timelines.",
      "Issue statutory 15-day Section 138 legal demand notice to the corporate buyer and all active signatory directors under Section 141.",
      "Simultaneously file an Order XXXVII Summary Suit in the designated Commercial Court, invoking the bill of exchange as an undisputed liquid debt.",
      "Initiate RBI wilful defaulter reporting protocol against the corporate borrower through the negotiating bank consortium.",
    ],
  },
  {
    id: "tanker-excipient-moisture",
    tabLabel: "3. Bulk Tanker Variance",
    title: "Solvent & Excipient Tanker Offloaded, Weighbridge Admitted, Then Disputed for Moisture Variance",
    badge: "Joint Sampling Protocol & BSA s.63 Evidence",
    buyerProfile:
      "Pharma manufacturing units procuring bulk solvents (IPA, MDC, Methanol, Acetone) or liquid excipients via road tankers from chemical corridors in Ankleshwar, Dahej, or Vapi.",
    pretext:
      "The buyer decants the road tanker into bulk storage tanks upon signing delivery challans and gross weighbridge slips. Weeks later, when invoices mature, the accounts department claims 'water content higher than Karl Fischer specification' or 'weight shortage', withholding ₹25 Lakh to ₹75 Lakh per tanker.",
    legalReality:
      "When bulk chemicals are unloaded into buyer storage tanks, the chemical is irreversibly commingled with existing tank stock, terminating the seller's traceability. Under Section 42 of the Sale of Goods Act, commingling is an act strictly inconsistent with seller ownership. Unless joint sampling was executed at the tanker nozzle prior to decanting, post-unloading contamination claims cannot be sustained in court.",
    statutoryHook:
      "Sale of Goods Act 1930 s.42 + Indian Contract Act s.73 + BSA 2023 s.63 Weighbridge & GPS Logs",
    actionProtocol: [
      "Collate signed weighbridge in/out slips, driver decanting receipts, and tanker tamper-evident seal dispatch registers.",
      "Rebut debit notes using GPS geofencing delivery logs and pre-dispatch Karl Fischer moisture test reports certified under BSA Section 63.",
      "Send statutory demand establishing that commingling in buyer storage tanks legally extinguished any post-delivery right of rejection.",
      "File claim before MSME Samadhaan (for registered suppliers) or Commercial Court with pre-litigation mediation under Section 12A.",
    ],
  },
  {
    id: "cross-state-evasion",
    tabLabel: "4. Cross-State Evasion",
    title: "Formulation Cluster in Baddi or Sikkim Evades Hyderabad / Gujarat Court Jurisdiction",
    badge: "Commercial Courts Act s.20 CPC Jurisdiction",
    buyerProfile:
      "Formulation companies located in tax-free manufacturing zones (Himachal Pradesh, Uttarakhand, Sikkim) sourcing raw bulk drugs from Telangana or Gujarat API hubs.",
    pretext:
      "Defaulting formulation company claims that because its plant is situated in Solan or Gangtok, the supplier must litigate locally in distant hill district courts, betting that the cost of cross-state litigation will force a 40%–50% negotiated haircut.",
    legalReality:
      "Under Section 20(c) of the Code of Civil Procedure, 1908 and standard commercial invoice terms ('Subject to Hyderabad/Ahmedabad Jurisdiction'), the cause of action arises where the contract was concluded, where the goods were dispatched, and where payments were agreed to be received. When invoices specify exclusive jurisdiction and payments are routed to seller bank accounts, local Commercial Courts possess full statutory territorial competence.",
    statutoryHook:
      "CPC 1908 s.20(c) + Commercial Courts Act 2015 s.2(1)(c) + Electronic Service via Order V Rule 25",
    actionProtocol: [
      "Enforce the exclusive jurisdiction clause printed on accepted Purchase Orders and GST Tax Invoices.",
      "File pre-institution mediation or summary commercial suit in the supplier's home Commercial Court (e.g., Hyderabad City Civil Commercial Court or Ahmedabad Commercial Court).",
      "Execute court summons and legal demands electronically via registered email, WhatsApp, and speed post under amended Order V CPC rules.",
      "Apply for pre-judgment attachment of debtor bank accounts and pending state pharmaceutical subsidies under Order XXXVIII Rule 5 CPC.",
    ],
  },
];

export default function ApiBulkDrugScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(SCENARIOS[0].id);

  const activeScenario = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-6 md:p-8">
      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-2 pb-5 border-b border-slate-200 mb-6">
        {SCENARIOS.map((scenario) => {
          const isActive = activeTab === scenario.id;
          return (
            <button
              key={scenario.id}
              type="button"
              onClick={() => setActiveTab(scenario.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-150 cursor-pointer ${
                isActive
                  ? "bg-[#DC2626] text-white shadow-xs"
                  : "bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-900 border border-slate-200"
              }`}
            >
              {scenario.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Tab Content Card */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <p className="text-base sm:text-lg font-black text-slate-900 leading-snug">
            {activeScenario.title}
          </p>
          <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-red-100 text-[#DC2626] border border-red-200 shrink-0 self-start sm:self-auto">
            {activeScenario.badge}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 sm:p-5 rounded-xl border border-slate-200 shadow-xs">
            <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
              Debtor Pattern &amp; Corridor
            </span>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {activeScenario.buyerProfile}
            </p>
          </div>

          <div className="bg-amber-50/70 p-4 sm:p-5 rounded-xl border border-amber-200 shadow-xs">
            <span className="block text-[11px] font-bold uppercase tracking-wider text-amber-800 font-black mb-1">
              Debtor Tactical Pretext
            </span>
            <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">
              {activeScenario.pretext}
            </p>
          </div>
        </div>

        <div className="bg-white p-4 sm:p-5 rounded-xl border border-slate-200 shadow-xs space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Statutory Position &amp; Judicial Reality
            </span>
            <span className="text-xs font-semibold text-[#DC2626]">
              {activeScenario.statutoryHook}
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
            {activeScenario.legalReality}
          </p>
        </div>

        <div className="bg-slate-900 text-white p-4 sm:p-6 rounded-xl border border-slate-800 shadow-md">
          <p className="text-xs font-extrabold uppercase tracking-widest text-red-400 mb-3">
            API Creditor Recovery SOP &bull; Immediate Execution Steps
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-200 leading-relaxed">
            {activeScenario.actionProtocol.map((step, idx) => (
              <li key={idx} className="flex items-start gap-2 bg-slate-800/80 p-3 rounded-lg border border-slate-700/60">
                <span className="w-5 h-5 rounded-full bg-[#DC2626] text-white font-bold flex items-center justify-center text-[10px] shrink-0 mt-0.5">
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
