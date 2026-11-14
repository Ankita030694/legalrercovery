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
    id: "biometric-audit-freeze",
    badge: "PMNDP Portal Biometric Queries",
    title: "Arbitrary Withholding on Patient Biometrics, Aadhaar Logs & Offline Sheets",
    stumblingBlock:
      "District Health Societies (DHS) and Chief Medical Officers (CMO) routinely freeze 6 to 12 months of per-session hemodialysis payouts alleging technical discrepancies in rural patient Aadhaar thumbprints, offline counter-signatures, or portal sync timeouts, despite the hemodialysis run being fully executed and consumables expended.",
    statutoryExposure:
      "Under Section 70 of the Indian Contract Act, 1872, where the government enjoys the benefit of non-gratuitous medical care delivered to end-stage renal disease (ESRD) patients, it is statutorily bound to compensate the concessionaire. Unilateral rejection of verified clinical treatment based on procedural portal glitches is arbitrary and unconstitutional under Article 14.",
    recoverySOP: [
      "Extract certified machine dialyzer run logs, RO water TDS logs, and heparin/erythropoietin batch consumption records certified under BSA Section 63.",
      "Reconcile PMNDP portal upload timestamps with offline patient sign-off registers attested by the on-duty District Hospital medical officer.",
      "Issue a formal 15-day SLA Audit Cure Notice to the District Health Society calling for joint physical verification of disputed patient files.",
      "Escalate unresolved audit holds directly to the State Mission Director (NHM) and State Health Society nodal grievance cell.",
    ],
    keyAuthority:
      "Indian Contract Act 1872 s.70 & ABL International Ltd. v. ECGC (2004) 3 SCC 553",
  },
  {
    id: "treasury-budget-exhaustion",
    badge: "Treasury Tranche Delays (60:40 Split)",
    title: "12–24 Month Payment Freezes Citing Inter-Governmental Fund Sharing Stalls",
    stumblingBlock:
      "The concessionaire maintains undisputed, verified invoices signed by the Hospital Superintendent, but the District Health Society sits on disbursements stating that NHM Central-State matching funds (60:40 grant-in-aid) have not been released by the State Finance Department.",
    statutoryExposure:
      "The Supreme Court of India has settled in Surya Constructions v. State of U.P. (2019) and State of U.P. v. Sudhir Kumar Singh (2020) that administrative budgetary constraints or inter-departmental treasury delays cannot serve as a valid legal defense to deny payment for completed public infrastructure and essential healthcare services.",
    recoverySOP: [
      "Obtain written admission of liability via joint monthly reconciliation statements signed by the CMO or District Accounts Officer.",
      "Serve a formal 60-day Section 80 CPC Statutory Notice on the Principal Secretary (Health), State Mission Director (NHM), and District Magistrate.",
      "Demand statutory commercial compound interest at 3x RBI Bank Rate under Section 16 MSMED Act, 2006 (or Interest Act, 1978).",
      "File an Article 226 Writ of Mandamus before the High Court to compel release of admitted treasury allocations within 4 to 6 weeks.",
    ],
    keyAuthority:
      "Surya Constructions v. State of U.P. (2019) 16 SCC 794 & Code of Civil Procedure 1908 s.80",
  },
  {
    id: "liquidated-damages-pbg-threat",
    badge: "Spurious Penalties & PBG Threats",
    title: "Retaliatory Machine Downtime Penalties & Threat to Encash Bank Guarantees",
    stumblingBlock:
      "When the dialysis or radiology concessionaire serves legal reminders for multi-crore arrears, the hospital administration retaliates by issuing backdated liquidated damages (LD) notices alleging machine downtime, RO plant filter lapses, or doctor absenteeism, threatening to forfeit the Performance Bank Guarantee (PBG).",
    statutoryExposure:
      "Under Section 74 of the Indian Contract Act, 1872 and the Supreme Court Constitution Bench ruling in Kailash Nath Associates v. DDA (2015), liquidated damages cannot be levied as a penal forfeiture without proving actual loss. Invoking a bank guarantee fraudulently or arbitrarily to evade admitted contract dues is actionable and subject to High Court injunctions.",
    recoverySOP: [
      "File an urgent Section 9 Petition under the Arbitration & Conciliation Act, 1996 before the Commercial Court / High Court for an ad-interim injunction restraining PBG encashment.",
      "Place on record machine maintenance logs, tele-nephrology consultative records, and biomedical engineering uptime certificates proving >95% operational availability.",
      "Serve a statutory Section 21 Arbitration Invocation Notice nominating an independent sole arbitrator, defeating unilateral departmental appointments.",
      "Move Section 11(6) application before the High Court if the State Health Society fails to agree on an independent arbitrator within 30 days.",
    ],
    keyAuthority:
      "Arbitration & Conciliation Act 1996 s.9 & s.11(6) & Kailash Nath Associates v. DDA (2015) 4 SCC 136",
  },
  {
    id: "oncology-daycare-consumables",
    badge: "Chemo Daycare & Consumable Defaults",
    title: "Unilateral Haircuts on Chemotherapy Drugs, Infusion Sets & Oncology Packages",
    stumblingBlock:
      "Daycare oncology units operating inside government tertiary centers face retrospective claim haircuts where state audit committees disallow expensive chemotherapeutic drugs, monoclonal antibodies, and supportive care anti-emetics that were pre-authorized and infused into cancer patients.",
    statutoryExposure:
      "Where treatment protocols and drug formularies were agreed under the concession agreement or state package rates, unilateral retrospective price cuts violate the doctrine of promissory estoppel and constitute an actionable breach of contract compensable under Section 73 of the Indian Contract Act, 1872.",
    recoverySOP: [
      "Compile oncologist prescription sheets, nursing infusion administration charts, and cold-chain temperature monitoring logs with drug batch barcodes.",
      "Invoke the MSME Samadhaan portal (MSEFC) under Section 18 of the MSMED Act, 2006 for registered clinical and healthcare service providers.",
      "Enforce mandatory conciliation within 90 days; if conciliation fails, MSEFC arbitrates and issues a binding statutory award including 3x RBI bank rate interest.",
      "Execute the MSEFC award as a civil court decree under Section 36 of the Arbitration & Conciliation Act, 1996.",
    ],
    keyAuthority:
      "MSMED Act 2006 s.18 & Gujarat State Civil Supplies Corp. v. Mahakali Foods (2023) 6 SCC 401",
  },
];

export default function PPPDialysisScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(SCENARIOS[0].id);
  const currentScenario = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full">
      {/* Tab Selector Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 mb-6">
        {SCENARIOS.map((item) => {
          const isSelected = item.id === activeTab;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`p-3 text-left rounded-xl border transition-all text-xs font-bold leading-snug cursor-pointer ${
                isSelected
                  ? "bg-slate-900 text-white border-slate-900 shadow-md ring-2 ring-[#DC2626]"
                  : "bg-white text-slate-700 border-slate-200 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              <span
                className={`block text-[10px] font-black uppercase tracking-wider mb-1 ${
                  isSelected ? "text-red-400" : "text-[#DC2626]"
                }`}
              >
                {item.badge}
              </span>
              <span className="line-clamp-2">{item.title}</span>
            </button>
          );
        })}
      </div>

      {/* Selected Scenario Panel */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-7 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-5 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
            <span className="text-xs font-black uppercase tracking-wider text-slate-700">
              Healthcare PPP Dispute Case Analysis
            </span>
          </div>
          <span className="text-[11px] font-bold text-slate-500 bg-white px-3 py-1 rounded-full border border-slate-200">
            Governing Rule: {currentScenario.keyAuthority}
          </span>
        </div>

        <h3 className="text-base sm:text-lg md:text-xl font-black text-slate-900 mb-3">
          {currentScenario.title}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
          <div className="bg-white p-4 rounded-xl border border-red-200/80 shadow-xs">
            <span className="block text-[10px] font-black uppercase tracking-wider text-red-600 mb-1.5">
              The Operational Bottleneck
            </span>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {currentScenario.stumblingBlock}
            </p>
          </div>

          <div className="bg-white p-4 rounded-xl border border-blue-200/80 shadow-xs">
            <span className="block text-[10px] font-black uppercase tracking-wider text-blue-700 mb-1.5">
              Statutory Vulnerability of Government Defense
            </span>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {currentScenario.statutoryExposure}
            </p>
          </div>
        </div>

        <div className="bg-white p-4 sm:p-5 rounded-xl border border-slate-200">
          <span className="block text-xs font-black uppercase tracking-wider text-slate-900 mb-3">
            Standard Operating Recovery Protocol (Creditor Legal SOP)
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {currentScenario.recoverySOP.map((step, idx) => (
              <div key={idx} className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-red-100 text-[#DC2626] font-black text-[11px] flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <p className="text-xs text-slate-700 leading-relaxed font-medium">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
