"use client";

import React, { useState } from "react";
import Link from "next/link";

interface TechScenarioTrack {
  id: string;
  tabLabel: string;
  badge: string;
  title: string;
  ticketBand: string;
  primaryStatutes: string;
  headlineSummary: string;
  workflowSteps: { step: string; detail: string }[];
  complianceGuardrail: string;
  recommendedLinks: { label: string; href: string }[];
}

const TECH_SCENARIO_TRACKS: TechScenarioTrack[] = [
  {
    id: "saas-cloud-nce",
    tabLabel: "B2B SaaS & Cloud NCE",
    badge: "ACV ₹3L – ₹1.5 Cr | Multi-Year & CSP",
    title: "Non-Cancellable SaaS Order Forms & AWS / Azure / Microsoft NCE Arrears",
    ticketBand: "₹3 Lakh – ₹1.5 Cr Annual Contract Value & Cloud Consumption",
    primaryStatutes:
      "Indian Contract Act s.73/74, Commercial Courts Act s.2(1)(c)(xviii) & s.12A, Order XXXVII CPC, IT Act s.43/66 Boundaries",
    headlineSummary:
      "Enforce committed annual or multi-year SaaS Order Forms when a client cancels mid-term after claiming an annual discount, and rescue thin-margin cloud resellers paying USD hyperscaler bills on defaulted client tenants.",
    workflowSteps: [
      {
        step: "1. Billing Telemetry & Acceleration Audit",
        detail:
          "Compile executed Order Form, MSA non-cancellation clause, seat provisioning logs, or AWS/Azure/Microsoft NCE Partner Center consumption CSVs under BSA 2023 s.63.",
      },
      {
        step: "2. 7-Day Cure-Cum-Read-Only Freeze Notice",
        detail:
          "Serve an advocate notice demanding full accelerated ACV or unpaid cloud consumption while offering a lawful 7-day data-export window prior to read-only tenant suspension.",
      },
      {
        step: "3. Commercial Court / Order XXXVII & Garnishee Escalation",
        detail:
          "Escalate uncured enterprise accounts >= ₹3 Lakh into Commercial Courts s.12A mediation or Order XXXVII summary suits backed by director guarantees on high-burn cloud accounts.",
      },
    ],
    complianceGuardrail:
      "Never delete client production databases, trigger hidden kill-switches, or alter live root IAM passwords unannounced—malicious disruption invites cyber complaints under IT Act s.43 and s.66.",
    recommendedLinks: [
      {
        label: "Enforce Annual SaaS Order Forms",
        href: "/b2b-saas-annual-subscription-early-cancellation-unpaid-invoice-recovery",
      },
      {
        label: "AWS / Azure / NCE Reseller Recovery",
        href: "/cloud-reseller-aws-azure-gcp-microsoft-csp-unpaid-consumption-recovery",
      },
      {
        label: "IT & SaaS MSA Notice Format",
        href: "/templates/it-software-saas-msa-payment-default-legal-notice",
      },
    ],
  },
  {
    id: "uat-erp-whitelabel",
    tabLabel: "UAT, ERP & White-Label",
    badge: "Milestones ₹5L – ₹2 Cr+ | IP & SOW",
    title: "Stalled UAT Sign-Offs, ERP Go-Live Delays & White-Label Subcontracts",
    ticketBand: "₹5 Lakh – ₹2 Cr+ Custom Software, AI & SAP/Salesforce Builds",
    primaryStatutes:
      "Copyright Act 1957 s.17/19/51 (Pine Labs Rule), Indian Contract Act s.39/53/54/55, Commercial Courts Act s.12A",
    headlineSummary:
      "Break 'infinite UAT bug-fix loops' where clients deploy code to live users without paying the final milestone, defeat ERP client-data blame shifting, and recover unpaid white-label agency invoices without violating NDAs.",
    workflowSteps: [
      {
        step: "1. Live Telemetry & Reciprocal Promise Mapping",
        detail:
          "Preserve Git commit hashes, Jira sprint sign-offs, production traffic pings proving live usage (deemed acceptance), and delayed client master-data dependency logs under Contract Act s.53/54.",
      },
      {
        step: "2. Conditional IP Non-Transfer & License Revocation Notice",
        detail:
          "Cite Copyright Act s.17/19 (no written perpetual assignment until full consideration clears) to put defaulting clients or prime white-label agencies on notice of unauthorized commercial deployment.",
      },
      {
        step: "3. Change-Request Segregation & s.12A Mediation",
        detail:
          "Separate original SOW deliverables from out-of-scope enhancements and initiate Commercial Court Pre-Institution Mediation or neutral institutional ODR arbitration.",
      },
    ],
    complianceGuardrail:
      "When enforcing white-label subcontractor arrears, direct the IP warranty-breach notice strictly to the prime agency's General Counsel first so confidentiality covenants remain respected.",
    recommendedLinks: [
      {
        label: "Escape Infinite UAT Sign-Off Traps",
        href: "/software-uat-sign-off-delay-scope-creep-milestone-payment-recovery",
      },
      {
        label: "ERP (SAP/Oracle/Salesforce) Disputes",
        href: "/erp-sap-oracle-salesforce-implementation-milestone-dispute-recovery",
      },
      {
        label: "Source Code Escrow vs IT Act s.66",
        href: "/source-code-escrow-ip-withholding-clause-unpaid-it-invoices",
      },
    ],
  },
  {
    id: "staffing-poaching-msme",
    tabLabel: "T&M Staffing & Poaching",
    badge: "C2C Bench & Buyout | Udyam 45d",
    title: "C2C Staff Augmentation Arrears & Deployed Engineer Poaching Buyouts",
    ticketBand: "₹2 Lakh – ₹75 Lakh Monthly T&M Ledgers & Conversion Fees",
    primaryStatutes:
      "MSMED Act s.15–18 (3x RBI Compound Interest), Income Tax Act s.43B(h), Contract Act s.27 vs s.74, BSA s.63",
    headlineSummary:
      "Dismantle Tier-1 System Integrator 'back-to-back pay-when-paid' excuses on approved developer timesheets and enforce commercial B2B temp-to-perm conversion fees when clients secretly hire your deployed engineers.",
    workflowSteps: [
      {
        step: "1. Timesheet, Git & Attendance Consolidation",
        detail:
          "Lock Jira/Azure DevOps sprint boards, Slack approvals, and signed client timesheets with BSA s.63 Part-A/Part-B certificates alongside Udyam Micro/Small registration proof.",
      },
      {
        step: "2. MSME s.15/43B(h) or Resource-Pullback Notice",
        detail:
          "Serve a 15-day statutory notice citing MSMED Act s.16 (3x RBI Bank Rate compound interest) and Income Tax s.43B(h) March 31 expense disallowance, plus scheduled bench withdrawal if uncured.",
      },
      {
        step: "3. B2B Conversion Fee Demand on Poached Talent",
        detail:
          "Frame poaching claims strictly against the corporate client as an agreed commercial recruitment/conversion fee under Contract Act s.74—distinct from restraining an employee under s.27.",
      },
    ],
    complianceGuardrail:
      "Verify whether your IT firm falls under Micro/Small vs Medium Enterprise classification under MSMED Act: Medium Enterprises are excluded from MSEFC s.18 and must route via Commercial Courts or Order XXXVII.",
    recommendedLinks: [
      {
        label: "T&M & C2C Staff-Augmentation Recovery",
        href: "/it-staff-augmentation-dedicated-developer-monthly-invoice-recovery",
      },
      {
        label: "Poached Developer Buyout Fee Guide",
        href: "/client-poached-deployed-developer-non-solicitation-fee-recovery",
      },
      {
        label: "Section 43B(h) MSME Payment Rule",
        href: "/law/section-43bh-msme-payment-rule",
      },
    ],
  },
  {
    id: "export-softex-fema",
    tabLabel: "US/UK/UAE & SOFTEX",
    badge: "Cross-Border & RBI EDPMS 9m",
    title: "Offshore US, UK, EU & UAE Tech Receivables + STPI SOFTEX Closure",
    ticketBand: "$5,000 – $500,000+ Export Invoices & AD-Bank EDPMS",
    primaryStatutes:
      "FEMA 1999 Export Master Direction (9-Month Clock, 5%/10% Write-Off Cap), CPC s.44A (UK/UAE Reciprocating Decrees)",
    headlineSummary:
      "Solve both sides of a defaulted foreign software invoice: compel settlement from Delaware LLCs, UK Ltds, and Dubai firms while generating formal legal recovery proof required by your AD Bank to close open STPI SOFTEX entries in RBI EDPMS.",
    workflowSteps: [
      {
        step: "1. Calculate 9-Month FEMA & EDPMS Deadline",
        detail:
          "Map each SOFTEX invoice date against RBI's 9-month repatriation clock and check whether the unrealized balance sits within your 5% Normal or 10% Status-Holder self-write-off limit.",
      },
      {
        step: "2. Cross-Border Advocate Legal Demand",
        detail:
          "Serve formal demand notices on foreign registered agents, Delaware/UK/DIFC corporate directors, and US/EU legal counsel citing MSA governing law, IP non-transfer, and international enforcement.",
      },
      {
        step: "3. AD Bank Write-Off & CPC s.44A Enforcement",
        detail:
          "Submit Speed Post RPAD/courier proof, BSA s.63 email logs, and advocate demand records to your AD Bank for compliant EDPMS closure, or execute Indian decrees in reciprocating territories (UK/UAE/Singapore) under CPC s.44A.",
      },
    ],
    complianceGuardrail:
      "Never leave unrealized SOFTEX bills unattended past 9 months in EDPMS—unexplained open export entries risk AD-Bank caution-listing and FEMA adjudication.",
    recommendedLinks: [
      {
        label: "SOFTEX & FEMA 9-Month Calculator",
        href: "/tools/softex-fema-export-realization-deadline-calculator",
      },
      {
        label: "US/UK/UAE Recovery & SOFTEX Guide",
        href: "/us-uk-uae-client-unpaid-software-invoice-softex-fema-recovery",
      },
      {
        label: "International Client Legal Notice",
        href: "/legal-notice-to-international-client-unpaid-invoice-recovery",
      },
    ],
  },
];

export default function ItSaasScenarioTabs() {
  const [activeTabId, setActiveTabId] = useState<string>(TECH_SCENARIO_TRACKS[0].id);
  const current =
    TECH_SCENARIO_TRACKS.find((t) => t.id === activeTabId) ?? TECH_SCENARIO_TRACKS[0];

  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:p-6">
      <div
        role="tablist"
        aria-label="IT Services and B2B SaaS recovery verticals"
        className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-6"
      >
        {TECH_SCENARIO_TRACKS.map((track) => {
          const isActive = track.id === activeTabId;
          return (
            <button
              key={track.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveTabId(track.id)}
              className={`px-3 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all text-left border cursor-pointer ${
                isActive
                  ? "bg-[#DC2626] text-white border-[#DC2626] shadow-md"
                  : "bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-100"
              }`}
            >
              <span className="block leading-tight">{track.tabLabel}</span>
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm space-y-5"
      >
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-4">
          <span className="px-3 py-1 rounded-full bg-red-50 border border-red-200 text-[#DC2626] text-xs font-bold">
            {current.badge}
          </span>
          <span className="text-xs font-semibold text-slate-500">
            {current.ticketBand}
          </span>
        </div>

        <div>
          <p className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2">
            {current.title}
          </p>
          <p className="text-sm text-slate-700 leading-relaxed mb-3">
            {current.headlineSummary}
          </p>
          <p className="text-xs font-semibold text-slate-800 bg-slate-100 rounded-lg px-3 py-2">
            Primary Statutory Hooks: {current.primaryStatutes}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {current.workflowSteps.map((ws) => (
            <div
              key={ws.step}
              className="rounded-xl border border-slate-200 bg-slate-50 p-4"
            >
              <p className="text-xs font-extrabold text-[#DC2626] mb-1.5">
                {ws.step}
              </p>
              <p className="text-xs text-slate-700 leading-relaxed">{ws.detail}</p>
            </div>
          ))}
        </div>

        <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
          <p className="text-xs font-bold text-amber-900 uppercase tracking-wider mb-1">
            Statutory &amp; Technical Compliance Guardrail
          </p>
          <p className="text-xs text-amber-800 leading-relaxed">
            {current.complianceGuardrail}
          </p>
        </div>

        <div className="flex flex-wrap gap-2.5 pt-2">
          {current.recommendedLinks.map((lnk) => (
            <Link
              key={lnk.href}
              href={lnk.href}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-slate-900 hover:bg-[#DC2626] text-white text-xs font-semibold transition-colors"
            >
              <span>{lnk.label}</span>
              <span aria-hidden="true">→</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
