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
    id: "nri-sponsor-default",
    badge: "Scenario 1 • Overseas NRI Sponsor Default",
    title: "Overseas NRI Children Commission 24x7 Home-ICU or Assisted Living, Then Sever Communication & Default on Arrears",
    stumblingBlock:
      "An adult son or daughter residing in the United States, United Kingdom, Canada, or the UAE executes a digital Service Level Agreement (SLA) for round-the-clock home-ICU nursing, physician tele-rounds, and bedside eldercare for bedridden parents in Delhi, Bengaluru, Mumbai, or Hyderabad. After 2–3 months of punctual remittances, the sponsor ceases wire transfers, cites currency conversion bottlenecks or disputes medical consumption logs, and abruptly ceases answering calls or emails while the elderly patient continues receiving 24x7 care.",
    statutoryExposure:
      "Under Section 73 of the Indian Contract Act, 1872, the overseas sponsor is directly and personally bound to pay liquidated contractual fees. Furthermore, under Section 4 of the Maintenance and Welfare of Parents and Senior Citizens Act, 2007, adult children possessing sufficient means have an affirmative statutory obligation to maintain elderly parents. Overseas residence confers no immunity: under Order V Rule 9 and Rule 25 CPC, along with the Hague Service Convention (Convention of 15 November 1965 on the Service Abroad of Judicial and Extrajudicial Documents), cross-border commercial demand notices and court summons are fully executable against non-resident debtors.",
    recoverySOP: [
      "Audit the digital service file: Extract the digitally countersigned master service agreement, sponsor passport/OCI KYC, overseas address proof, and verified IP/timestamp delivery logs.",
      "Issue an Executive Pre-Discontinuation Notice via verified electronic channels (WhatsApp Business API and registered email), putting the sponsor on 7-day notice of planned transition to alternative eldercare arrangements.",
      "Serve a formal Advocate Demand Notice directly on the sponsor's domestic family address as well as their overseas employer/residential address via DHL/FedEx courier with international delivery receipt tracking.",
      "Simultaneously copy the local District Magistrate / Senior Citizens Maintenance Tribunal, establishing that the agency is maintaining human care standards while the adult child is committing statutory abandonment and commercial breach.",
    ],
    keyAuthority: "Indian Contract Act 1872 s.73, Maintenance of Parents Act 2007 s.4 & CPC Order V Rule 25",
  },
  {
    id: "unreturned-icu-equipment",
    badge: "Scenario 2 • Unreturned ICU Gear & Beds",
    title: "Family Withholds Ventilator, BiPAP Machine, Oxygen Concentrator & Electric ICU Bed Following Patient Recovery or Demise",
    stumblingBlock:
      "Following the recovery or demise of a home-ICU patient, the family or property attendants refuse to grant retrieval access to the home-healthcare agency's biomedical logistics team. High-value life-support equipment—such as Hamilton/Philips turbine ventilators (worth ₹3.5L to ₹6.5L), ResMed BiPAP units (worth ₹85,000 to ₹1.5L), 10L oxygen concentrators, and motorized 5-function ICU beds—are wrongfully retained as collateral for perceived billing grievances or simply locked inside private residential premises.",
    statutoryExposure:
      "Retaining rented medical equipment after termination of the hire/service contract constitutes an immediate conversion and Criminal Breach of Trust under Section 316 of the Bharatiya Nyaya Sanhita, 2023 (BNS, corresponding to legacy IPC Section 405/406), carrying imprisonment up to 5 years, along with Cheating under Section 318 BNS. Furthermore, under Section 73 of the Indian Contract Act, 1872, the defaulter is liable for daily commercial equipment hire charges for every day of wrongful detention, alongside interim recovery plaints under Order 39 / Order 40 of the Code of Civil Procedure (CPC) for court-appointed receiver possession.",
    recoverySOP: [
      "Compile the Asset Deployment Dossier: Signed equipment delivery challan with device serial numbers, calibrated hour-meter readings, condition reports, and signed equipment bailment clauses.",
      "Issue an immediate 48-Hour Biomedical Equipment Repossession Demand Notice, stating the daily demurrage hire rate (₹2,500–₹5,000/day) running against the family.",
      "Serve an Advocate Notice warning of immediate invocation of Section 316 BNS (Criminal Breach of Trust) before the jurisdictional Chief Judicial Magistrate (CJM) / Police Commissioner.",
      "File an urgent pre-institution interim application under Order XL Rule 1 CPC seeking appointment of a Court Receiver or local commissioner with police protection to enter premises and retrieve life-critical assets.",
    ],
    keyAuthority: "Bharatiya Nyaya Sanhita 2023 s.316 & s.318, Contract Act s.73 & CPC Order XL Rule 1",
  },
  {
    id: "nurse-poaching-breach",
    badge: "Scenario 3 • Nurse & Attendant Poaching",
    title: "Family Induces Deployed Critical Care Nurse or GDA Attendant to Resign and Work Privately Off-the-Books",
    stumblingBlock:
      "After the healthcare startup or nursing bureau trains, screens, background-verifies, and deploys a certified critical care nurse (GNM/BSc Nursing) or General Duty Assistant (GDA) to provide round-the-clock home care, the patient's family offers the healthcare worker cash-in-hand to quit the agency and work directly for the household at a slight markup, bypassing agency billings and causing immediate revenue loss and operational disruption.",
    statutoryExposure:
      "While employee non-compete covenants are strictly tested under Section 27 of the Indian Contract Act, 1872, B2B and consumer anti-poaching non-solicitation clauses imposed on clients are legally valid and enforceable as legitimate protection of commercial investments and agency goodwill. Under Section 73 and Section 74 of the Contract Act, the agency is entitled to recover pre-estimated liquidated recruitment, verification, training, and placement damages (typically 3 to 6 months of billing fees or ₹1,00,000–₹2,500,000 per poached clinical worker), as established in *Niranjan Shankar Golikari* and subsequent Delhi High Court precedents.",
    recoverySOP: [
      "Verify the off-the-books deployment: Cross-examine nurse WhatsApp communications, agency geo-fenced attendance check-ins, or sudden resignation letters without mandatory 30-day notice.",
      "Inspect the client service agreement containing the explicit Client Non-Solicitation and Placement Fee Liquidated Damages clause.",
      "Issue a Cease-and-Desist cum Liquidated Damages Notice demanding immediate payment of the contractually stipulated placement fee within 15 days.",
      "Serve a concurrent professional advisory to the nursing staff member reminding them of regulatory reporting to State Nursing Councils for breach of ethical code and abandonment of active clinical rotations.",
    ],
    keyAuthority: "Indian Contract Act 1872 ss. 73 & 74 & Commercial Courts Act 2015 s.2(1)(c)",
  },
  {
    id: "rehab-abandonment-default",
    badge: "Scenario 4 • Assisted Living & Rehab Default",
    title: "Family Admits Patient to Assisted Living or De-Addiction Rehab Center, Pays Initial Deposit, and Refuses Monthly Fees",
    stumblingBlock:
      "A family admits an elderly parent requiring assisted living or an individual struggling with substance abuse or psychiatric impairment to a specialized residential center or palliative home. After paying the first month's admission deposit, the legal guardians stop paying monthly maintenance, food, medical consultation, and pharmacy bills. The facility is left with ongoing human-care liability, ethical restrictions against evicting vulnerable residents, and mounting bad debt.",
    statutoryExposure:
      "Under the Mental Healthcare Act, 2017 and the Senior Citizens Act, 2007, residential centers cannot unilaterally abandon or evict medically fragile or mentally compromised residents on the street. However, the commercial and statutory liability of the nominated guardians and signatories remains absolute under Sections 126 and 128 of the Indian Contract Act (Contract of Indemnity & Guarantee). Facilities can initiate Order XXXVII summary suits for admitted monthly maintenance ledgers while filing formal reports before the District Social Welfare Officer and the Senior Citizens Tribunal to transfer guardianship or attach sponsor bank accounts.",
    recoverySOP: [
      "Gather admission dossiers: Signed Resident Admission Agreement, Nominated Guardian Undertaking, Identity Proof of Guarantor, and monthly itemized care ledgers.",
      "Issue an Executive Care Governance & Arrears Reconciliation Memorandum to the primary guarantor and secondary nominated next-of-kin.",
      "Serve a 15-day Advocate Legal Notice demanding payment of all accrued maintenance and pharmacy dues with interest, stating that default will result in civil recovery plaints and regulatory notification.",
      "Initiate statutory proceedings before the Maintenance Tribunal under Section 5 & 6 of the Senior Citizens Act or institute an Order XXXVII summary suit for liquidated residential dues.",
    ],
    keyAuthority: "Indian Contract Act 1872 ss. 126 & 128, Senior Citizens Act 2007 & Mental Healthcare Act 2017",
  },
];

export default function HomeHealthcareScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(SCENARIOS[0].id);
  const activeScenario = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-7 shadow-xs">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-200">
        <div>
          <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-red-100 text-[#DC2626] mb-1.5">
            Operational Failure Modes &amp; Remedies
          </span>
          <p className="text-base sm:text-lg font-black text-slate-900">
            Interactive Home Healthcare Default Resolution Matrix
          </p>
        </div>
        <span className="text-xs text-slate-500 font-medium">
          Select scenario to inspect statutory triggers &amp; recovery SOP
        </span>
      </div>

      {/* Tabs Navigation */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-6">
        {SCENARIOS.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveTab(item.id)}
              className={`p-3 rounded-xl text-left transition-all cursor-pointer border ${
                isActive
                  ? "bg-slate-900 text-white border-slate-900 shadow-md"
                  : "bg-white text-slate-700 border-slate-200 hover:bg-slate-100 hover:border-slate-300"
              }`}
            >
              <span
                className={`block text-[10px] font-black uppercase tracking-wider mb-1 ${
                  isActive ? "text-red-400" : "text-[#DC2626]"
                }`}
              >
                {item.badge.split("•")[0].trim()}
              </span>
              <p
                className={`text-xs font-bold line-clamp-2 leading-snug ${
                  isActive ? "text-white" : "text-slate-800"
                }`}
              >
                {item.title}
              </p>
            </button>
          );
        })}
      </div>

      {/* Active Tab Panel */}
      <div className="bg-white border border-slate-200 rounded-xl p-5 sm:p-6 shadow-xs space-y-5">
        <div>
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold text-white bg-slate-900 mb-2">
            {activeScenario.badge}
          </span>
          <h3 className="text-base sm:text-lg font-extrabold text-slate-900 leading-snug">
            {activeScenario.title}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-red-50/70 border border-red-200/80 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
              <p className="text-xs font-black uppercase tracking-wider text-red-900">
                Operational Stumbling Block
              </p>
            </div>
            <p className="text-xs text-slate-700 leading-relaxed">
              {activeScenario.stumblingBlock}
            </p>
          </div>

          <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-600" />
              <p className="text-xs font-black uppercase tracking-wider text-emerald-900">
                Statutory Hook &amp; Debtor Exposure
              </p>
            </div>
            <p className="text-xs text-slate-700 leading-relaxed">
              {activeScenario.statutoryExposure}
            </p>
          </div>
        </div>

        <div>
          <p className="text-xs font-black uppercase tracking-wider text-slate-800 mb-3">
            Standard Operating Recovery Procedure (SOP)
          </p>
          <div className="space-y-2.5">
            {activeScenario.recoverySOP.map((step, idx) => (
              <div key={idx} className="flex items-start gap-3 text-xs text-slate-700">
                <span className="w-5 h-5 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <span className="leading-relaxed">{step}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
          <span className="text-slate-500 font-medium">
            Core Statutory Authority:
          </span>
          <span className="font-bold text-slate-900 bg-slate-100 px-3 py-1 rounded-lg">
            {activeScenario.keyAuthority}
          </span>
        </div>
      </div>
    </div>
  );
}
