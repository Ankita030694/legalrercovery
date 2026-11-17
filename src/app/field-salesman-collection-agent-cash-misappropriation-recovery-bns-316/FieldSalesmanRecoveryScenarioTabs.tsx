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
    id: "fake-receipt-cash",
    tabLabel: "Fake Receipt / Counterfoil",
    badge: "BNS s.316(4) + s.318(4) & Contract Act s.237",
    title: "Salesman Pocketed Cash Collections Using Handwritten or Duplicate Receipts",
    riskDescription:
      "A field sales representative collected ₹4,80,000 in cash from 14 retail kiranas over a 10-day beat cycle using handwritten slips, rough counterfoils, or an unauthorized duplicate manual receipt book. The salesman failed to deposit the cash into the distributor's daily cash-drop safe and absconded. When confronted, retailers refuse to pay again, brandishing the signed slips.",
    statutoryTrap:
      "Local police stations routinely refuse to register an FIR, telling the distributor: 'The salesman was your authorized employee; if the retailer paid him, this is a civil accounting dispute between employer and employee.' Concurrently, retailers claim discharge under Section 237 of the Indian Contract Act (apparent authority).",
    legalStrategy:
      "Under Bharatiya Nyaya Sanhita (BNS) 2023 Section 316(4) [erstwhile IPC Section 408], criminal breach of trust by a clerk or servant carries up to 7 years rigorous imprisonment and is a non-bailable, cognizable offense. In parallel, Section 318(4) (cheating) applies for issuing forged acknowledgment slips. If invoices carry an express negative stipulation ('Cash payments strictly prohibited without official computerized SMS/app receipt'), Section 237 ostensible authority does NOT discharge the retailer.",
    mandatoryClauses: [
      "Recital of employment contract and appointment letter expressly detailing restricted collection mandate and daily cash settlement terms",
      "Explicit invocation of BNS Section 316(4) (Criminal breach of trust by servant with dominion over cash collections)",
      "Annexure of certified invoice terms showing express negative covenant against informal handwritten receipts",
      "Demand for immediate retailer sworn affidavit or signed payment declaration identifying the absconding employee",
    ],
    recommendedAction:
      "Dispatch joint verification notices to all 14 retailers immediately, secure written copies of the fake receipts, and file a formal written complaint under BNSS Section 173(1) directly before the Superintendent of Police / Cyber Cell.",
  },
  {
    id: "personal-upi-qr",
    tabLabel: "Personal UPI QR Diversion",
    badge: "BNS s.316(4) + IT Act s.66D + BSA s.63",
    title: "Salesman Showed Personal PhonePe/GooglePay QR Code at Retail Counters",
    riskDescription:
      "The collection agent instructed 22 shopkeepers: 'The company's current account QR code is temporarily frozen due to bank server maintenance; please scan this official field-agent backup QR.' Retailers scanned the personal UPI QR, transferring ₹7,25,000 directly into the salesman's private savings account over a 3-week billing window.",
    statutoryTrap:
      "Retailers produce bank UPI debit screenshots and argue their commercial obligation is extinguished. The salesman drains the personal bank account via ATM withdrawals and UPI transfers to third parties before the distributor detects the ledger hole.",
    legalStrategy:
      "This constitutes simultaneous Criminal Breach of Trust under BNS Section 316(4), Cheating by Personation under BNS Section 318(4), and Cyber Fraud under Section 66D of the Information Technology Act, 2000. Under Section 107 and Section 111 of Bharatiya Nagarik Suraksha Sanhita (BNSS) 2023, the investigating officer has statutory authority to immediately freeze the beneficiary bank accounts.",
    mandatoryClauses: [
      "Itemized UTR and transaction ID schedule extracted from retailer UPI screenshots",
      "Mandatory Certificate under Section 63 of Bharatiya Sakshya Adhiniyam (BSA) 2023 validating digital transaction screenshots and WhatsApp communication",
      "Immediate requisition under BNSS Section 107 requesting the Cyber Police to issue a lien freeze on the employee's bank account and linked UPI VPAs",
      "Notice to retailer indicating that paying an employee's personal savings account violates tax compliance and standard invoice mandate",
    ],
    recommendedAction:
      "Lodge an urgent Cyber Crime Portal (1930) complaint alongside a formal BNS s.316(4) FIR. Issue a statutory requisition to the beneficiary bank's nodal officer to freeze the destination account balance within 24 hours.",
  },
  {
    id: "absconded-interstate",
    tabLabel: "Absconded to Native State",
    badge: "BNSS s.84/85 & CPC Order 38 Rule 5",
    title: "Employee Vanished Across State Borders: Securing Arrest and Property Seizure",
    riskDescription:
      "After pocketing ₹8,50,000 from festive season market collections, the salesman switched off both registered mobile numbers, vacated his rented room overnight, and returned to his native village in another state. Local police claim lack of territorial jurisdiction and hesitate to travel interstate for an 'employee theft'.",
    statutoryTrap:
      "Distributors waste months making casual visits to the local police thana without written escalation. If not legally compelled, police mark the case as an untraced non-cognizable inquiry, allowing the accused to liquidate or conceal the embezzled funds.",
    legalStrategy:
      "Jurisdiction lies where the offense was committed and where the cash was due to be surrendered (the distributor's registered depot). Under BNSS Section 173(1), the SHO is duty-bound to register a cognizable FIR. If they delay, an immediate petition under Section 175(3) BNSS [erstwhile CrPC s.156(3)] before the Chief Judicial Magistrate (CJM) compels an FIR and issuance of Non-Bailable Warrants (NBW). Proclamation under BNSS Section 84 and property attachment under BNSS Section 85 follow.",
    mandatoryClauses: [
      "Documentary proof of permanent address, Aadhaar, PAN, voter card, and guarantor/surety details executed at onboarding",
      "Statutory prayer for issuance of Non-Bailable Warrants (NBW) under BNSS Section 72 and inter-state execution requisition under BNSS Section 80",
      "Application under CPC Order 38 Rule 5 for attachment before judgment of the employee's known personal bank accounts, vehicles, and landed property",
      "Notice of demand served at native village address via registered speed post RPAD to establish deliberate abscondance",
    ],
    recommendedAction:
      "File a composite BNS Section 316(4) complaint with the jurisdictional Magistrate under BNSS Section 175(3) while simultaneously initiating an Order 37 summary suit with Order 38 Rule 5 asset attachment.",
  },
  {
    id: "fidelity-claim-repudiation",
    tabLabel: "Fidelity Insurance Dispute",
    badge: "IRDAI Compliance & Commercial Crime Policy",
    title: "Insurance Surveyor Repudiates Claim Due to FIR Delay or Verification Gaps",
    riskDescription:
      "The distributor lodged a ₹12,00,000 claim under their Commercial Fidelity Guarantee Policy. The insurance company's appointed surveyor issues an intent-to-repudiate notice citing: 'Delay of 7 days in intimating the loss', 'Absence of registered FIR with final police report', and 'Distributor failed to maintain dual-custody cash audit controls'.",
    statutoryTrap:
      "Fidelity policies contain strict 24–48 hour discovery intimation warranties and mandatory police FIR conditions. If the distributor entered into informal negotiation with the salesman's family before filing an FIR, the insurer treats it as a breach of policy terms and rejects the entire claim.",
    legalStrategy:
      "Under Supreme Court jurisprudence (e.g., *Om Prakash v. Reliance General Insurance*), genuine insurance claims cannot be mechanically dismissed on technical intimation delays if the occurrence of theft/breach of trust is indisputable. A formal FIR under BNS Section 316(4), supported by forensic internal audit reports and retailer verification affidavits, fulfills all core policy warranties.",
    mandatoryClauses: [
      "Date of Discovery Memo establishing the precise date when the discrepancy was uncovered during weekly reconciliation",
      "Certified true copy of BNS Section 316(4) Police FIR and acknowledgment copy under BNSS Section 173(1)",
      "Itemized retail audit statement signed by company statutory auditor or chartered accountant",
      "Formal legal rebuttal citing IRDAI (Protection of Policyholders' Interests) Regulations 2024 against arbitrary surveyor delays",
    ],
    recommendedAction:
      "Submit an advocate-drafted formal Claim Representation to the insurer's Grievance Redressal Officer (GRO) with the certified BNS s.316(4) FIR dossier. If unresolved within 30 days, escalate to the Insurance Ombudsman or Commercial Court.",
  },
];

export default function FieldSalesmanRecoveryScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(SCENARIOS[0].id);
  const activeScenario = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

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
              className={`flex-1 min-w-[140px] sm:min-w-[160px] py-2.5 px-3 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer text-center ${
                isActive
                  ? "bg-white text-slate-900 shadow-sm border border-slate-200/80"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/50"
              }`}
            >
              <span className="block truncate">{scenario.tabLabel}</span>
            </button>
          );
        })}
      </div>

      {/* Tab Content Card */}
      <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-4 border-b border-slate-100">
          <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-red-50 text-[#DC2626] border border-red-200">
            {activeScenario.badge}
          </span>
          <span className="text-xs text-slate-400 font-medium">
            Operational Playbook &bull; IND-10 FMCG &amp; Wholesale
          </span>
        </div>

        <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-4">
          {activeScenario.title}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
          <div className="bg-red-50/70 border border-red-100 rounded-xl p-4">
            <p className="text-xs font-bold uppercase tracking-wider text-[#DC2626] mb-1.5">
              The Operational Failure &amp; Loss
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {activeScenario.riskDescription}
            </p>
          </div>

          <div className="bg-amber-50/70 border border-amber-200/80 rounded-xl p-4">
            <p className="text-xs font-bold uppercase tracking-wider text-amber-800 mb-1.5">
              The Common Statutory Trap
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {activeScenario.statutoryTrap}
            </p>
          </div>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 mb-6">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
            The Legal &amp; Enforcement Strategy
          </p>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            {activeScenario.legalStrategy}
          </p>
        </div>

        <div className="mb-6">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
            Mandatory Documentary &amp; Legal Inclusions
          </p>
          <ul className="space-y-2">
            {activeScenario.mandatoryClauses.map((clause, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                <span className="w-5 h-5 rounded-full bg-red-100 text-[#DC2626] font-bold text-[11px] flex items-center justify-center shrink-0 mt-0.5">
                  &check;
                </span>
                <span>{clause}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <span className="block text-[10px] font-black uppercase tracking-wider text-emerald-800">
              Immediate SOP Action Item
            </span>
            <p className="text-xs sm:text-sm font-semibold text-emerald-900">
              {activeScenario.recommendedAction}
            </p>
          </div>
          <a
            href="#heading-action-flow"
            className="shrink-0 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg transition-colors text-center"
          >
            Review 48h Protocol &rarr;
          </a>
        </div>
      </div>
    </div>
  );
}
