"use client";

import React, { useState } from "react";

interface ScenarioTab {
  id: string;
  tabLabel: string;
  title: string;
  cause: string;
  legalBasis: string;
  steps: {
    step: string;
    description: string;
  }[];
  statutoryRule: string;
}

const SCENARIOS: ScenarioTab[] = [
  {
    id: "q3-budget-freeze",
    tabLabel: "1. Q3 Budget Freeze",
    title: "20 Leadership or POSH Workshops Delivered—HR Freezes Payment Over 'CFO Cost Cuts'",
    cause:
      "After an executive coaching firm or POSH training partner completes 15–20 cohorts across regional offices, the client CHRO or Procurement Head stalls PO release or invoice approval citing an internal 'Q3 Opex Freeze' or 'headcount restructuring'.",
    legalBasis:
      "Under Section 10 and Section 37 of the Indian Contract Act, 1872, an internal budget freeze or management reorganization does not discharge an executed commercial obligation. Once delegates attend workshops and sign attendance sheets or submit digital NPS feedback, the enterprise is barred by promissory estoppel (Section 121 BSA, 2023) from disputing delivery. If the vendor is Udyam-registered, Section 15 of the MSMED Act caps credit at 45 days regardless of internal CFO freeze memos.",
    steps: [
      {
        step: "Bind the Enterprise via Attendance & Feedback Estoppel",
        description:
          "Export signed physical attendance registers, Zoom/Teams participant logs, facilitator travel vouchers, and post-workshop feedback scores with date-stamps.",
      },
      {
        step: "Trigger Income Tax Section 43B(h) Intimation Before March 31",
        description:
          "Serve a formal Section 43B(h) + MSMED Section 15 notice addressed to the CFO, Company Secretary, and Statutory Auditor warning of 30% corporate tax disallowance on unpaid Micro/Small vendor dues.",
      },
      {
        step: "File MSEFC Reference or Order XXXVII CPC Summary Suit",
        description:
          "If unpaid after 15 days of formal demand, escalate to the Micro & Small Enterprises Facilitation Council (Samadhaan) for 3x RBI compound interest or file a Summary Suit.",
      },
    ],
    statutoryRule: "MSMED Act s.15–18 | Income Tax Act s.43B(h) | BSA 2023 s.121 (Estoppel)",
  },
  {
    id: "lms-seat-renewal",
    tabLabel: "2. LMS Seat License",
    title: "5,000 Enterprise LMS Seats Provisioned—Client Demands Pro-Rata Cancellation Mid-Year",
    cause:
      "An enterprise upskilling SaaS provisions 5,000 annual Learning Management System (LMS) seats on Day 1 under an annual SOW. At Month 5, after laying off 1,200 staff, the buyer refuses to pay the annual invoice and demands a 60% 'unused seat' write-off.",
    legalBasis:
      "Annual enterprise SaaS seat commitments are fixed-capacity, non-cancellable subscriptions unless the MSA expressly grants a mid-term true-down right. Under Section 73 of the Contract Act and Order XXXVII Rule 1(2) CPC, a liquidated SOW fee is a debt due upon provisioning of credentials. Furthermore, server SSO authentication logs and SCORM/xAPI completion telemetry constitute admissible electronic proof of availability under Section 63 of the Bharatiya Sakshya Adhiniyam (BSA), 2023.",
    steps: [
      {
        step: "Preserve SSO Provisioning & Active Learner Telemetry",
        description:
          "Lock AWS/Azure audit logs showing 5,000 tenant seats provisioned, admin onboarding emails, and active course completions before suspending access.",
      },
      {
        step: "Issue Cure-or-Suspend Notice Under MSA Default Clause",
        description:
          "Serve a 7-to-15 day advocate notice invoking the MSA non-cancellability clause and reserving the right to suspend learner SSO access without waiving accrued annual fees.",
      },
      {
        step: "Rebut 'Low Utilization' Defenses with Liquidated SOW Pricing",
        description:
          "Clarify in the legal demand that enterprise SaaS licensing bills for reserved tenant capacity—not employee login frequency—eliminating spurious 'deficiency of service' excuses.",
      },
    ],
    statutoryRule: "Order XXXVII CPC | Contract Act s.73 | BSA 2023 s.63 (Electronic Logs)",
  },
  {
    id: "campus-proctoring",
    tabLabel: "3. Campus Proctoring",
    title: "Campus-Hiring Assessment & AI Proctoring Dues Held Over 'Procurement Portal Lag'",
    cause:
      "Online assessment and AI-proctoring platforms execute pan-India campus hiring drives for IT majors and BFSI recruiters across 80+ colleges. Months after shortlists are hired, the buyer's vendor-portal shows 'GRN Pending' or 'PO Amendment Under Review' for 120–180 days.",
    legalBasis:
      "Procurement portal workflows (SAP Ariba, Coupa, Oracle) are internal buyer accounting conveniences—not statutory conditions precedent that override Section 15 of the MSMED Act, 2006. Once the assessment results, proctoring integrity reports, and candidate scorecards are downloaded by the client's Talent Acquisition team, 'deemed acceptance' occurs within 15 days under Section 2(b) of the MSMED Act unless written quality objections were raised within that 15-day window.",
    steps: [
      {
        step: "Establish Deemed Acceptance Beyond the 15-Day Window",
        description:
          "Document the exact date candidate scorecards and proctoring logs were transmitted to Talent Acquisition, proving zero written defect objections within 15 days.",
      },
      {
        step: "Bypass Junior TA Coordinators & Address Finance/Compliance",
        description:
          "Send Speed Post RPAD and email notices directly to the Head of Procurement, CFO, and Registered Office rather than waiting on Ariba ticket escalations.",
      },
      {
        step: "Claim 3x RBI Compound Interest From Day 46",
        description:
          "Attach an automated MSMED Section 16 interest ledger showing monthly compounding from the 46th day post-delivery, turning portal stalls into an escalating balance-sheet liability.",
      },
    ],
    statutoryRule: "MSMED Act s.2(b) & s.15–16 | Commercial Courts Act s.12A | IT Act s.10A",
  },
  {
    id: "psu-skill-grant",
    tabLabel: "4. PSU / CSR / NSDC",
    title: "PSU Executive Training or CSR / State Skill-Mission Tranche Frozen Post-Completion",
    cause:
      "Executive education institutes (IIM/private B-school MDPs) and NSDC/CSR skill partners deliver residential leadership batches or placement-linked training for PSUs and State Skill Development Missions (SSDMs), only for final 40% tranches to stall over audit queries.",
    legalBasis:
      "Where the defaulting entity is a Central/State Government department or statutory authority, a mandatory 2-month statutory notice under Section 80 of the Code of Civil Procedure, 1908 must be served before instituting a civil suit. For Public Sector Undertakings (PSUs) that qualify as 'companies' under the Companies Act, Section 80 CPC is not strictly mandatory unless notified, yet a structured pre-litigation legal demand citing MSMED Act s.15–18 (which binds PSUs equally as 'buyers') triggers immediate internal Vigilance and Audit clearance.",
    steps: [
      {
        step: "Verify Entity Status (Govt Department vs. PSU Company)",
        description:
          "Determine whether the counterparty is a State Ministry/SSDM requiring a strict 60-day Section 80 CPC notice or a PSU company amenable to direct MSEFC / Commercial Court action.",
      },
      {
        step: "Compile Biometric Attendance, Assessment & Placement Proofs",
        description:
          "Bundle Aadhaar-enabled biometric logs, NSDC/SSC certification lists, and signed utilization certificates with a Section 63 BSA certificate.",
      },
      {
        step: "Serve Formal Section 80 CPC / Pre-Institution Notice",
        description:
          "Dispatch an advocate-drafted demand notice to the Secretary/CMD via Speed Post RPAD, creating a statutory compliance clock for file movement.",
      },
    ],
    statutoryRule: "CPC s.80 (60-Day Govt Notice) | MSMED Act s.15–18 | Commercial Courts Act s.12A",
  },
];

export default function CorporateLndScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(SCENARIOS[0].id);
  const current = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full">
      {/* Tab Strip */}
      <div className="flex flex-wrap gap-2 mb-5 border-b border-slate-200 pb-3">
        {SCENARIOS.map((tab) => {
          const isActive = tab.id === activeTab;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                isActive
                  ? "bg-[#DC2626] text-white shadow-sm"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {tab.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Scenario Card */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6">
        <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-3">
          {current.title}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
          <div className="bg-white border border-slate-200 rounded-xl p-4">
            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
              Commercial Bottleneck
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {current.cause}
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-4">
            <p className="text-[11px] font-bold uppercase tracking-wider text-[#DC2626] mb-1.5">
              Creditor Statutory Rebuttal
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {current.legalBasis}
            </p>
          </div>
        </div>

        <div className="space-y-3 mb-5">
          {current.steps.map((item, idx) => (
            <div
              key={item.step}
              className="flex items-start gap-3 bg-white border border-slate-200 rounded-xl p-3.5"
            >
              <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                {idx + 1}
              </span>
              <div>
                <p className="text-xs sm:text-sm font-bold text-slate-900 mb-0.5">
                  {item.step}
                </p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-slate-900 text-slate-100 rounded-xl px-4 py-3 text-xs font-semibold flex flex-wrap items-center gap-2">
          <span className="text-red-400 uppercase tracking-wider font-bold">
            Applicable Statutes:
          </span>
          <span>{current.statutoryRule}</span>
        </div>
      </div>
    </div>
  );
}
