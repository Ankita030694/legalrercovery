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
    id: "employee-credit-letter",
    badge: "Credit Letter Default & Employee Exit",
    title: "Employee Inpatient Care Delivered on HR Credit Letter but Company Refuses Payment After Employee Quits",
    stumblingBlock:
      "A corporate employee or dependent is admitted under an emergency or planned cashless arrangement backed by a signed HR 'Credit Authorization Letter' or 'Letter of Guarantee'. Following successful clinical discharge, corporate finance withholds payment citing that the employee subsequently resigned, was terminated, exhausted annual corporate medical ceilings, or that medical bills exceeded internal HR entitlement bands.",
    statutoryExposure:
      "Under Sections 126, 128, and 70 of the Indian Contract Act, 1872, an employer credit authorization letter functions as an independent, primary contract of guarantee and indemnity. The corporate entity is directly liable as the primary debtor or co-surety. Internal HR grade policies, employee attrition, or subsequent employment termination cannot extinguish third-party debts lawfully contracted with the hospital.",
    recoverySOP: [
      "Collate the primary documentary dossier: Original HR Credit Authorization Letter, Employee Corporate ID proof, signed admission undertaking, and daily medical chart counter-signatures.",
      "Issue a 7-day Pre-Litigation Reconciliation Demand to the Head of Corporate HR and Chief Financial Officer, attaching the signed credit authorization.",
      "Issue a Credit-Suspension Advisory notifying the corporate employer that ongoing cashless OP/IP privileges for other active company staff will be placed on administrative hold within 10 days.",
      "Serve a formal 15-day Advocate Notice of Demand invoking Order XXXVII of the Code of Civil Procedure (CPC) for a fast-track summary suit based on a written contract of debt.",
    ],
    keyAuthority: "Indian Contract Act, 1872 (ss. 126 & 128) & Order XXXVII Rule 1(2)(b) CPC",
  },
  {
    id: "factory-ohc-retainer",
    badge: "Factory OHC & Staffing Arrears",
    title: "On-Site Factory Occupational Health Center (OHC) Retainers, Doctor/Nurse Deputation & Ambulance Invoices Withheld",
    stumblingBlock:
      "Hospitals and occupational health service providers operate mandatory on-site factory OHC clinics (occupational physicians, industrial nursing staff, emergency medical technicians, and dedicated factory ambulances) under annual comprehensive service agreements. Industrial manufacturing clients arbitrarily withhold 3 to 12 months of monthly retainer invoices citing minor biometric attendance gaps, replacement doctor delays, or factory cost-reduction directives.",
    statutoryExposure:
      "Factory OHCs are mandated under Section 41-C of the Factories Act, 1948 and state factory rules. Unilateral withholding of monthly retainer fees while accepting uninterrupted medical coverage at hazardous industrial premises constitutes unjust enrichment under Section 70 of the Contract Act and an actionable commercial dispute under Section 2(1)(c) of the Commercial Courts Act, 2015.",
    recoverySOP: [
      "Extract biometric attendance logs, industrial doctor clinical registers, pharmacy stock consumption logs, and daily ambulance trip run-sheets countersigned by factory safety managers.",
      "Reconcile undisputed retainer amounts against contractual service credits or penalty clauses to eliminate frivolous counterclaims.",
      "Issue an Executive Notice of Operational Withdrawal, formally serving 30 days notice to demobilize medical personnel, putting the factory at risk of statutory factory inspection non-compliance.",
      "Serve a Commercial Legal Notice demanding immediate wire transfer of retainer arrears with compound interest at 18% p.a. under the Interest Act, 1978 or MSMED Act, 2006.",
    ],
    keyAuthority: "Factories Act, 1948 (s. 41-C) & Commercial Courts Act, 2015 (s. 2(1)(c))",
  },
  {
    id: "psu-empanelled-freeze",
    badge: "PSU Empanelled Arrears (BHEL, ONGC, Coal India, Railways)",
    title: "Public Sector Undertaking (PSU) Empanelled Billing Freezes & Fiscal Year-End Budget Lapses",
    stumblingBlock:
      "Hospitals empanelled with major PSUs (such as BHEL, ONGC, Coal India subsidiaries, NTPC, SAIL, IOCL, or Indian Railways) treat serving and retired officers and their families against official referral chits. Receivables stretch past 180 to 365+ days because PSU medical boards raise retrospective billing queries, claim internal audit objections, or wait for new fiscal year budget appropriations before clearing admitted healthcare ledgers.",
    statutoryExposure:
      "PSUs are statutory corporate bodies or government companies ('State' under Article 12). While contractual, withholding undisputed medical reimbursement bills after referral and treatment without a speaking order violates Article 14 (non-arbitrariness). For statutory entities, a 60-day notice under Section 80 CPC or an urgent Section 9 Arbitration interim application serves as the definitive trigger to unblock treasury disbursements.",
    recoverySOP: [
      "Segregate claims into three distinct aging tranches: (1) Admitted and pre-audited bills awaiting payment release, (2) Bills delayed by minor documentation queries, and (3) Arbitrarily rejected line items.",
      "Draft a composite Medical Ledger Reconciliation Memorandum addressed directly to the Director (Finance) and Chief Medical Officer (CMO) of the PSU.",
      "Serve a formal statutory Section 80 CPC Notice (or 15-day commercial demand under the empanelment agreement's dispute clause) detailing each employee token, referral memo, and GST bill.",
      "Escalate to High Court Commercial Division under Article 226 / Section 11 of the Arbitration & Conciliation Act, citing admitted liabilities and public duty doctrine.",
    ],
    keyAuthority: "Section 80 Code of Civil Procedure, 1908 & ABL International Corp Doctrine",
  },
  {
    id: "executive-health-camps",
    badge: "Annual Health Checkup & Camp Defaults",
    title: "Corporate Annual Executive Health Checkups (EHC) & Bulk Diagnostic Screening Invoices Disputed Post-Delivery",
    stumblingBlock:
      "A corporate client contracts a hospital or diagnostic network to conduct mandatory annual health checkups, on-site executive health camps, or pre-employment medical examinations for 500 to 5,000 corporate staff. Once test reports, pathology profiles, and digital fitness certificates are delivered to HR, the company delays payment for 6–9 months, claiming discrepancies in employee headcount or questioning test necessity.",
    statutoryExposure:
      "Upon delivery and acceptance of medical reports, the corporate debt is fully crystallized. The transaction falls squarely within the definition of a commercial contract under Section 2(1)(c)(xviii) of the Commercial Courts Act, 2015. Failure to pay after receiving deliverables leaves the debtor with no bona fide defense in an Order XXXVII CPC summary proceeding.",
    recoverySOP: [
      "Gather participant sign-in registers, laboratory sample barcoding records, digital report dispatch timestamps, and corporate HR email confirmations.",
      "Issue a Final Reconciliation Certificate confirming the exact billed headcount against the HR-approved employee master list.",
      "Dispatch an automated Institutional Credit Alert informing the corporate debtor that employee portal access for health summaries and future pre-employment screenings is suspended.",
      "Issue an Advocate Legal Notice demanding payment within 15 days, specifying that failure to remit will trigger summary suit proceedings and insolvency demand where applicable.",
    ],
    keyAuthority: "Commercial Courts Act, 2015 (s. 2(1)(c)) & Order XXXVII Rule 2 CPC",
  },
];

interface HospitalCorporateScenarioTabsProps {
  className?: string;
}

export default function HospitalCorporateScenarioTabs({
  className = "",
}: HospitalCorporateScenarioTabsProps) {
  const [activeTab, setActiveTab] = useState<string>(SCENARIOS[0].id);

  const currentScenario = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className={`w-full bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-7 ${className}`}>
      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-2 mb-6 border-b border-slate-200 pb-4">
        {SCENARIOS.map((scenario) => {
          const isActive = activeTab === scenario.id;
          return (
            <button
              key={scenario.id}
              type="button"
              onClick={() => setActiveTab(scenario.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer text-left ${
                isActive
                  ? "bg-[#DC2626] text-white shadow-sm"
                  : "bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-900 border border-slate-200"
              }`}
            >
              {scenario.badge}
            </button>
          );
        })}
      </div>

      {/* Tab Content Panel */}
      <div className="bg-white border border-slate-200 rounded-xl p-5 sm:p-6 shadow-xs">
        <div className="mb-4">
          <span className="inline-block px-2.5 py-1 rounded-md text-[10px] font-black uppercase tracking-wider bg-red-50 text-[#DC2626] border border-red-200 mb-2">
            Commercial Bottleneck Analysis
          </span>
          <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
            {currentScenario.title}
          </h3>
        </div>

        {/* Bottleneck vs Statutory Rights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
          <div className="bg-amber-50/70 border border-amber-200 rounded-xl p-4">
            <p className="text-[11px] font-black uppercase tracking-wider text-amber-800 mb-1.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              Corporate Friction Point
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {currentScenario.stumblingBlock}
            </p>
          </div>

          <div className="bg-slate-900 text-white rounded-xl p-4">
            <p className="text-[11px] font-black uppercase tracking-wider text-red-400 mb-1.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
              Statutory Exposure &amp; Rights
            </p>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {currentScenario.statutoryExposure}
            </p>
          </div>
        </div>

        {/* Action SOP Rail */}
        <div className="mb-5">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
            Hospital Recovery Action SOP:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {currentScenario.recoverySOP.map((step, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-800"
              >
                <span className="w-5 h-5 rounded-full bg-[#DC2626] text-white font-bold text-[11px] flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <span className="leading-relaxed">{step}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Legal Authority Footnote */}
        <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-xs text-slate-500">
          <span className="font-semibold text-slate-700">Legal Authority Benchmark:</span>
          <span className="font-mono text-[11px] text-[#DC2626] font-bold">
            {currentScenario.keyAuthority}
          </span>
        </div>
      </div>
    </div>
  );
}
