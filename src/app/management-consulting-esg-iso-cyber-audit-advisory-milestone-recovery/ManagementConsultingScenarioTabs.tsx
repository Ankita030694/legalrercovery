"use client";

import React, { useState } from "react";

interface ScenarioTab {
  id: string;
  badge: string;
  title: string;
  engagementScope: string;
  clientEvasionPattern: string;
  statutoryCounter: string;
  evidentiaryChecklist: string[];
  actionPlan: string;
  outcomeBenchmark: string;
}

const SCENARIO_TABS: ScenarioTab[] = [
  {
    id: "pli-subsidy",
    badge: "State Subsidy & PLI",
    title: "Client Received ₹10 Cr State Subsidy / SGST Incentive & Froze 5% Success Fee",
    engagementScope:
      "Turnkey advisory mandate for State Industrial Policy Capital Investment Subsidy, SGST Refund, or Central PLI Scheme on 3%–8% milestone/success fee terms.",
    clientEvasionPattern:
      "The day the State Industries Commissioner or DPIIT issues the sanction letter and credits ₹10 Crore into the factory's bank account, client amnesia strikes. Management claims 'the subsidy was delayed by 6 months,' 'our CFO's personal relations cleared the file,' or offers an arbitrary ₹5 Lakh token settlement.",
    statutoryCounter:
      "Indian Contract Act, 1872 Section 70 (Quantum Meruit obligation to compensate for non-gratuitous advisory services) + Section 219 (Agent's remuneration earned upon act completion) + Order XXXVII CPC for liquidated debt proven by official government sanction order + urgent bank account attachment under Order XXXVIII Rule 5 CPC.",
    evidentiaryChecklist: [
      "Signed Engagement Mandate specifying 3%–8% success fee upon sanction/disbursement",
      "Public portal sanction letter from DPIIT, State Single Window System, or Industries Department",
      "Email paper trail showing consultant prepared DPR, capital asset certification, and subsidy filings",
      "GST E-Invoice raised upon subsidy milestone + proof of delivery via Speed Post RPAD & email",
    ],
    actionPlan:
      "Serve an immediate 15-day Legal Demand Notice attaching the official sanction order as conclusive milestone proof. Put the factory on notice for Section 43B(h) tax disallowance and file an Order XXXVII Summary Suit with an ex-parte Order XXXVIII Rule 5 freezing application on the designated subsidy bank account.",
    outcomeBenchmark: "14–28 days to compel settlement before trial; full recovery of contracted success fee.",
  },
  {
    id: "cyber-audit",
    badge: "CERT-In & RBI VAPT",
    title: "NBFC / FinTech Secured RBI Cyber Clearance & Withheld Final 30% Audit Milestone",
    engagementScope:
      "CERT-In empaneled cyber security firm conducting RBI Master Direction Cybersecurity Audit, Comprehensive VAPT, and ISO 27001 ISMS certification.",
    clientEvasionPattern:
      "The FinTech/NBFC submits the clean audit report and sign-off certificate to the Reserve Bank of India to protect its NBFC/PA-PG license. Once RBI accepts the compliance filing, the client ignores the final 30% sign-off invoice, raising retroactive claims of 'unresolved low-priority vulnerabilities' or 'budget cuts'.",
    statutoryCounter:
      "Indian Contract Act Sections 51–52 (Reciprocal promises — client cannot enjoy regulatory benefit while withholding consideration) + Copyright Act, 1957 Section 14, 19 & 51 (copyright in proprietary audit methodology, threat models, and gap analysis does not transfer until full consideration is paid) + MSMED Act Section 15–16.",
    evidentiaryChecklist: [
      "Engagement agreement with milestone sign-off schedules (Initial Scope, Testing, Final Clearance)",
      "Official transmittal of final CERT-In audit report and signed management closure memo",
      "Client's public regulatory disclosure or RBI submission confirming cyber compliance clearance",
      "Signed delivery acknowledgment (BSA 2023 Section 63 cryptographic email timestamp & hash)",
    ],
    actionPlan:
      "Issue a 7-day Pre-Litigation Legal Notice revoking the license to rely upon the proprietary audit certificate under Copyright Act Section 51, intimating impending notification to the RBI Department of Supervision for fraudulent reliance on an unpaid audit sign-off, coupled with an MSME Samadhaan claim.",
    outcomeBenchmark: "7–15 days rapid compliance settlement to avoid regulatory scrutiny by RBI/CERT-In.",
  },
  {
    id: "hospital-nabh",
    badge: "NABH / NABL Accreditation",
    title: "Hospital Achieved NABH / NABL Accreditation & Evaded Final Consultant Retainer",
    engagementScope:
      "Healthcare quality management consultancy guiding a 250-bed multi-specialty hospital through NABH 5th Edition standards, clinician training, and assessor mock audits.",
    clientEvasionPattern:
      "The hospital receives its official NABH Accreditation Certificate, holds a press conference, and secures lucrative CGHS/ECHS/TPA empanelment rates. When the consultant bills the final 25% accreditation milestone, hospital management claims 'our Medical Superintendent and internal nursing team did all the work.'",
    statutoryCounter:
      "Contract Act Section 70 (Non-gratuitous professional benefit) + Order XXXVII CPC for debt arising on written retainer agreement + Section 43B(h) Income Tax disallowance hammer against hospital trust or healthcare operating company + Commercial Courts Act, 2015 summary recovery.",
    evidentiaryChecklist: [
      "Consulting retainer contract with clear stage disbursements tied to NABH milestone stages",
      "NABH online portal login logs, audit submissions, and consultant NC (non-compliance) response trails",
      "Official NABH Accreditation Certificate downloaded from the Quality Council of India (QCI) portal",
      "Form 26AS showing prior TDS deducted under Section 194J confirming professional engagement",
    ],
    actionPlan:
      "Serve a formal statutory legal notice detailing the exact NABH audit trail and consultant work-hours. Highlight that the hospital's CGHS/insurance revenue depends on clean regulatory compliance, and initiate MSME MSEFC conciliation or an Order 37 summary suit in the jurisdictional Commercial Court.",
    outcomeBenchmark: "21–35 days to secure full tranche payment or negotiated bank draft settlement.",
  },
  {
    id: "brsr-esg",
    badge: "BRSR & ESG Advisory",
    title: "Listed Corporate Filed SEBI BRSR Core Report & Left Sustainability Advisor Unpaid",
    engagementScope:
      "Sustainability advisory firm preparing Business Responsibility and Sustainability Reporting (BRSR Core) under SEBI LODR Regulation 34(2)(f), Scope 1–3 GHG accounting, and EcoVadis rating.",
    clientEvasionPattern:
      "The listed corporate attaches the consultant's GHG emissions inventory and BRSR assurance report directly into its Annual Report, uploads it to BSE/NSE, and holds its AGM. Once filed, procurement delays the final 35% deliverable invoice, citing 'internal purchase order re-alignment' or 'vendor code verification.'",
    statutoryCounter:
      "SEBI (Listing Obligations and Disclosure Requirements) Regulations, 2015 Regulation 34(2)(f) (filing constitutes public admission of report validity) + Indian Evidence Act / BSA 2023 Section 121 (Estoppel) + Copyright Act, 1957 Section 51 + MSMED Act Section 16 mandatory 3x RBI compound interest.",
    evidentiaryChecklist: [
      "SOW / Master Services Agreement defining BRSR deliverable sign-offs and Scope 1-3 deliverables",
      "Exchange filings on BSE/NSE reproducing the consultant's data tables and sustainability framework",
      "TDS certificates in Form 26AS / AIS reflecting earlier milestone payments under Section 194J",
      "Unanswered milestone reminder emails and delivered GST invoices with digital IRN receipts",
    ],
    actionPlan:
      "Dispatch a structured legal demand notice to the Managing Director, CFO, and Company Secretary, noting that continued use of unpaid copyrighted ESG datasets in statutory stock exchange disclosures constitutes ongoing copyright infringement under Section 51, triggering immediate CFO intervention.",
    outcomeBenchmark: "10–20 days to release trapped funds prior to upcoming quarterly audit sign-offs.",
  },
];

export default function ManagementConsultingScenarioTabs() {
  const [activeTabId, setActiveTabId] = useState<string>(SCENARIO_TABS[0].id);
  const activeTab = SCENARIO_TABS.find((tab) => tab.id === activeTabId) || SCENARIO_TABS[0];

  return (
    <div className="w-full">
      {/* Tab Navigation Pill Bar */}
      <div className="flex flex-wrap gap-2 p-1.5 bg-slate-100 rounded-2xl border border-slate-200 mb-6">
        {SCENARIO_TABS.map((tab) => {
          const isActive = tab.id === activeTabId;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTabId(tab.id)}
              className={`flex-1 min-w-[140px] sm:min-w-[160px] py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 text-center ${
                isActive
                  ? "bg-[#DC2626] text-white shadow-md shadow-red-900/20"
                  : "bg-transparent text-slate-700 hover:bg-white hover:text-slate-900"
              }`}
            >
              <span className="block text-[10px] uppercase tracking-wider opacity-80 mb-0.5">
                {tab.badge}
              </span>
              <span className="truncate block">{tab.title.split("&")[0].trim()}</span>
            </button>
          );
        })}
      </div>

      {/* Active Tab Card Content */}
      <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-sm transition-all duration-200">
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-5 border-b border-slate-100">
          <div>
            <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-red-100 text-[#DC2626] border border-red-200 mb-2">
              Default Playbook · {activeTab.badge}
            </span>
            <p className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
              {activeTab.title}
            </p>
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-right">
            <span className="block text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
              Typical Resolution Time
            </span>
            <span className="text-xs sm:text-sm font-bold text-emerald-600">
              {activeTab.outcomeBenchmark.split(";")[0]}
            </span>
          </div>
        </div>

        {/* 2-Column Grid Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
          <div className="bg-red-50/60 border border-red-200/80 rounded-xl p-4">
            <span className="block text-[11px] font-bold uppercase tracking-wider text-red-700 mb-1.5 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-red-600" />
              Client Default &amp; Evasion Pattern
            </span>
            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
              {activeTab.clientEvasionPattern}
            </p>
          </div>

          <div className="bg-emerald-50/60 border border-emerald-200/80 rounded-xl p-4">
            <span className="block text-[11px] font-bold uppercase tracking-wider text-emerald-800 mb-1.5 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-600" />
              Statutory Remedy &amp; Precedent Hammer
            </span>
            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
              {activeTab.statutoryCounter}
            </p>
          </div>
        </div>

        {/* Evidence & Action Plan */}
        <div className="space-y-4 pt-1">
          <div>
            <span className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              Mandatory Evidentiary Proof Points (BSA 2023 Section 63 Compliant)
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {activeTab.evidentiaryChecklist.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2 bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-xs text-slate-700"
                >
                  <span className="text-[#DC2626] font-bold font-mono shrink-0">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-900 text-white rounded-xl p-4 sm:p-5 mt-4">
            <span className="block text-[11px] font-bold uppercase tracking-wider text-red-400 mb-1">
              Escalation SOP &amp; Tactical Execution
            </span>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed mb-3">
              {activeTab.actionPlan}
            </p>
            <div className="flex items-center gap-2 text-[11px] text-slate-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
              <span>Target Enforcement: {activeTab.outcomeBenchmark}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
