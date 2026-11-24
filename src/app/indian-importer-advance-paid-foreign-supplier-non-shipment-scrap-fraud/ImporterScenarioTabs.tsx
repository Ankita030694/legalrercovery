"use client";

import React, { useState } from "react";

interface Scenario {
  id: string;
  tabLabel: string;
  badge: string;
  title: string;
  description: string;
  redFlags: string[];
  immediateSteps: string[];
  rbiDefenseStrategy: string;
}

const SCENARIOS: Scenario[] = [
  {
    id: "stones-scrap-fraud",
    tabLabel: "Stones / Mud in Scrap Container",
    badge: "Container Quality & High Seas Substitution Fraud",
    title: "Import Container Loaded with Concrete Slabs, Slag, or Mud Instead of HMS 1/2 Scrap",
    description:
      "A common trans-shipment scam operating out of West Africa, UAE, or Eastern Europe: the supplier ships genuine trial containers, then loads crushed concrete, sea sand, or industrial sludge into high-value Heavy Melting Steel (HMS 1/2) or copper cathode containers. The importer pays 80%-100% CAD or TT advance before customs de-stuffing.",
    redFlags: [
      "Supplier insists on clean Bill of Lading with generic cargo description 'Said to Contain'",
      "Pre-shipment inspection certificate issued by unverified or spoofed survey agency",
      "Supplier demands release of original BL against 100% payment before container arrives at ICD",
      "Weighbridge variance at port gate reveals severe gross vs net weight anomalies",
    ],
    immediateSteps: [
      "Issue urgent Joint Survey Notice to shipping line, customs clearing agent, and foreign supplier",
      "Secure Customs Examination Order and video-recorded de-stuffing under certified customs surveyor",
      "File formal Police / Cyber Crime FIR citing Section 318(4) & 316(2) of Bharatiya Nyaya Sanhita (BNS 2023) for cheating and criminal breach of trust",
      "Submit joint survey report and FIR copy to AD Category-I Bank to formally freeze IDPMS default tagging",
    ],
    rbiDefenseStrategy:
      "Under RBI Master Direction on Import of Goods and Services (Para C.2 & C.3), the AD Bank cannot force BOE settlement when goods fail entry due to criminal fraud. Importer establishes non-hawala bona fides by producing the Customs de-stuffing Panchnama, survey certificate, and cross-border recovery notice served under CISG / Hague Service framework.",
  },
  {
    id: "ghost-supplier-vanished",
    tabLabel: "TT Advance Paid & Supplier Vanished",
    badge: "Total Non-Shipment / Phantom Overseas Entity",
    title: "15%-30% TT Remitted to Chinese, Dubai, or European Supplier Who Ceased All Communications",
    description:
      "Indian manufacturing company transfers USD 50,000 to USD 250,000 outward remittance as advance against custom machinery, solar components, or active pharmaceutical ingredients (APIs). Post-remittance, supplier provides fake production photos, promises rolling ship dates, and ultimately disconnects phone numbers and disables websites.",
    redFlags: [
      "Foreign company registered within the last 12-18 months in zero-tax or offshore secrecy jurisdictions",
      "Supplier representative communicates strictly via WeChat, WhatsApp, or protonmail with no corporate landline",
      "Repeated requests for further 'tax clearance' or 'port customs inspection fees' prior to dispatch",
      "Failure to provide valid IMO container vessel booking reference or master airway bill (MAWB)",
    ],
    immediateSteps: [
      "Issue formal fact-verified Cross-Border Legal Demand Notice via international registered mail and legal email",
      "Instruct AD Bank to dispatch MT199 / MT299 SWIFT tracer to foreign beneficiary bank to freeze accounts",
      "Lodge complaint with Embassy Commercial Wing / Consulate Trade Commissioner in the supplier's country",
      "File online grievance on National Cyber Crime Reporting Portal (cybercrime.gov.in) for cross-border financial fraud",
    ],
    rbiDefenseStrategy:
      "As 6-month statutory clock ticks toward IDPMS non-submission threshold, file formal Extension of Time (EOT) petition with AD Bank enclosing legal notice proofs, commercial counselor correspondence, and bank SWIFT inquiry confirmations under RBI Master Direction Para C.1.",
  },
  {
    id: "bec-invoice-spoofing",
    tabLabel: "BEC Email Invoice Hijack",
    badge: "Business Email Compromise (BEC) / Cyber Hijacking",
    title: "Supplier Email Compromised; Advance Remitted to Fraudulent Hong Kong / UK Bank Account",
    description:
      "Legitimate long-standing foreign vendor's email system is breached. Threat actors introduce a lookalike domain (typosquatting) or spoofed email thread instructing the Indian accounts department to divert TT funds to a newly opened bank account in Hong Kong, Turkey, or the UK citing 'annual corporate tax audit'.",
    redFlags: [
      "Sudden change in beneficiary banking details received right before scheduled wire remittance",
      "Urgent pressure applied citing production stop, vessel cancellation, or special currency clearing rules",
      "Beneficiary account name differs slightly from Proforma Invoice entity or uses third-party escrow",
      "Domain name differs by one transposed character (e.g., supplier-tech.com vs suppller-tech.com)",
    ],
    immediateSteps: [
      "Invoke Golden Hour SWIFT Recall protocol (MT192 / MT292) through Indian remitting AD Bank within 24 hours",
      "Register emergency complaint with 1930 Cyber Crime Helpline and National Cyber Crime Portal",
      "Engage legal counsel in beneficiary jurisdiction (e.g. Hong Kong High Court Section 21M injunction / UK freezing order) to freeze transferred proceeds before cash withdrawal",
      "Obtain certified RFC 5322 email headers and forensic IT audit report under Bharatiya Sakshya Adhiniyam, 2023 (BSA s.63)",
    ],
    rbiDefenseStrategy:
      "AD Bank will demand BOE or fund repatriation. Submitting a certified BSA s.63 electronic evidence report, 1930 Cyber FIR, and MT192 SWIFT recall acknowledgment legally shields the Indian promoter from FEMA Section 10(6) unauthorized remittance proceedings.",
  },
  {
    id: "cancelled-order-no-refund",
    tabLabel: "Cancelled Order Refund Withheld",
    badge: "Commercial Breach & Refusal to Repatriate Foreign Exchange",
    title: "Order Cancelled by Mutual Consent but Foreign Supplier Refuses or Delays TT Advance Refund",
    description:
      "Indian buyer cancels import order due to overseas supplier's force majeure claim, factory shutdown, or prolonged delivery delay beyond contract timeline. Supplier acknowledges cancellation in writing but continuously delays refunding the unutilized foreign currency balance.",
    redFlags: [
      "Supplier claims foreign exchange control restrictions in their country prevent outward TT refunds",
      "Deduction of unilateral 'administrative charges', 'holding fees', or 'raw material cancellation penalties'",
      "Offers worthless credit notes valid only for future purchases instead of foreign currency TT repatriation",
      "Attempts to drag negotiations past the 6-month RBI IDPMS reporting deadline",
    ],
    immediateSteps: [
      "Serve high-priority Section 21 / CISG formal notice revoking acceptance and mandating immediate TT refund",
      "Put foreign supplier on written notice regarding Indian statutory obligations under FEMA & RBI Master Direction",
      "Trigger commercial dispute mediation through international chamber or bilateral trade dispute councils",
      "Initiate overseas summary debt recovery lawsuit or commercial arbitration in stipulated seat",
    ],
    rbiDefenseStrategy:
      "Present cancellation agreement, ledger statement, and formal legal demand notice to AD Bank to request extension under Para C.1(iii) or write-off recommendation under Para C.3 where foreign supplier is insolvent or untraceable.",
  },
];

export default function ImporterScenarioTabs() {
  const [activeTab, setActiveTab] = useState(SCENARIOS[0].id);
  const current = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full">
      {/* Tab navigation */}
      <div className="flex flex-wrap gap-2 pb-4 border-b border-slate-200">
        {SCENARIOS.map((scenario) => {
          const isActive = scenario.id === activeTab;
          return (
            <button
              key={scenario.id}
              type="button"
              onClick={() => setActiveTab(scenario.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                isActive
                  ? "bg-[#DC2626] text-white shadow-md shadow-red-900/20"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              {scenario.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Tab Content Card */}
      <div className="mt-5 p-5 sm:p-6 bg-slate-50 rounded-2xl border border-slate-200">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="px-2.5 py-1 rounded-md text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-red-100 text-[#DC2626] border border-red-200">
            {current.badge}
          </span>
        </div>

        <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 mb-3">
          {current.title}
        </h3>

        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
          {current.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="p-4 bg-white rounded-xl border border-amber-200">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-800 mb-2 flex items-center gap-1.5">
              <span>&#9888;</span> Forensic Red Flags
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-700">
              {current.redFlags.map((flag, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <span className="text-amber-500 font-bold shrink-0">&bull;</span>
                  <span>{flag}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-4 bg-white rounded-xl border border-emerald-200">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-2 flex items-center gap-1.5">
              <span>&#10003;</span> Immediate Creditor SOP
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-700">
              {current.immediateSteps.map((step, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <span className="text-emerald-600 font-bold shrink-0">&bull;</span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="p-4 bg-slate-900 text-white rounded-xl border border-slate-800">
          <div className="text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1">
            RBI IDPMS &amp; FEMA Enforcement Directorate (ED) Defense
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {current.rbiDefenseStrategy}
          </p>
        </div>
      </div>
    </div>
  );
}
