"use client";

import React, { useState } from "react";
import Link from "next/link";

interface StaffingScenario {
  id: string;
  tabLabel: string;
  badge: string;
  title: string;
  ticketBand: string;
  statutoryTrigger: string;
  bottleneck: string;
  legalMechanism: string;
  operationalSteps: {
    step: string;
    detail: string;
  }[];
  recommendedLinks: {
    label: string;
    href: string;
  }[];
}

const STAFFING_SCENARIOS: StaffingScenario[] = [
  {
    id: "backdoor-hiring",
    tabLabel: "Backdoor Hiring & CV Circumvention",
    badge: "Ticket ₹75K – ₹15L | Permanent Recruitment",
    title: "Client Claims 'Profile Already in Database' or Secretly Hires Candidate Post-Rejection",
    ticketBand: "₹75,000 – ₹15,00,000 (8.33% to 16% of annual CTC per candidate)",
    statutoryTrigger: "Indian Contract Act s.70 (Quantum Meruit / Effective Cause) & s.73 (12-Month Ownership)",
    bottleneck:
      "A recruitment firm sources a senior engineer or VP, emails the CV to HR, and coordinates round-1 interviews. The client abruptly emails 'Profile rejected / Position put on hold / Already in our internal database', only to issue an offer letter 60 days later directly or via a sister subsidiary entity to evade the placement invoice.",
    legalMechanism:
      "Under Section 70 of the Indian Contract Act, 1872, where a person lawfully does anything for another not intending to do so gratuitously, and the other person enjoys the benefit, the recipient is bound to make compensation. Courts recognize the recruitment agency as the 'Effective Cause of Introduction'. Furthermore, standard Terms of Business provide a 12-month candidate ownership window enforceable under Section 73.",
    operationalSteps: [
      {
        step: "1. Audit ATS & Email Header Metadata (Section 63 BSA, 2023)",
        detail:
          "Preserve the original email transmission logs, ATS submission timestamps, and HR acknowledgement replies. Under Section 63 BSA, electronic timestamps establish prima facie introduction seniority over unsubstantiated internal database claims.",
      },
      {
        step: "2. Verify Active Employment & Joining Date",
        detail:
          "Establish current deployment through the candidate's updated LinkedIn profile, corporate email domain verification, or EPFO member passbook records confirming the exact joining date and designation.",
      },
      {
        step: "3. Issue Statutory Backdoor-Hire Notice & Forum Escalation",
        detail:
          "Serve a fact-verified demand notice calculating contractual placement fees (or penal 25% circumvention damages) with interest under Section 80/Order XXXVII CPC, followed by an MSME Samadhaan claim or summary suit.",
      },
    ],
    recommendedLinks: [
      {
        label: "Backdoor Hiring Fee Recovery Playbook",
        href: "/backdoor-hiring-candidate-circumvention-placement-fee-recovery-india",
      },
      {
        label: "Recruitment Backdoor Notice Format",
        href: "/templates/recruitment-backdoor-hiring-and-staffing-invoice-legal-notice",
      },
      {
        label: "MSME Delayed Payment Interest Calculator",
        href: "/tools/msme-delayed-payment-interest-calculator",
      },
    ],
  },
  {
    id: "temp-staffing-payroll",
    tabLabel: "Temp Staffing Payroll & PF Default",
    badge: "Ticket ₹5L – ₹3Cr+ | Flexi-Staffing & Labour",
    title: "Client Withholds Monthly Invoices While Agency Fronts Statutory Wages, EPF, ESIC & GST",
    ticketBand: "₹5,00,000 – ₹3,00,00,000+ monthly deployed associate payroll outlays",
    statutoryTrigger: "CLRA s.21(4) Principal Employer Liability, MSMED Act s.15–18 & IBC s.8 Operational Debt",
    bottleneck:
      "In flexi-staffing and manpower outsourcing, 90%–94% of every billed rupee represents pass-through statutory employee cost (net wages, EPF, ESIC, LWF, professional tax, and 18% GST). On a razor-thin 5%–8% markup, when an enterprise or factory defaults on 3 months of invoices, the agency faces insolvency because it cannot legally delay salaries past the 7th or statutory dues past the 15th.",
    legalMechanism:
      "Under Section 21(4) of the Contract Labour (Regulation and Abolition) Act, 1970, the Principal Employer is legally and ultimately liable to disburse unpaid contract wages. Unpaid staffing payroll invoices constitute undisputed 'Operational Debt' under Section 8 & 9 of the Insolvency and Bankruptcy Code (IBC, 2016), while Udyam-registered staffing firms invoke mandatory 45-day payment caps and 3x compound interest under MSMED Act Sections 15–18.",
    operationalSteps: [
      {
        step: "1. Reconcile ECR Challans & Joint Wage Register Signs",
        detail:
          "Assemble bank disbursement certificates, EPFO ECR challans, ESIC contribution statements, and client-certified attendance musters proving the agency fully discharged statutory dues on time.",
      },
      {
        step: "2. Serve 15-Day Statutory Wage Reimbursement Demand",
        detail:
          "Dispatch an institutional fact-verified demand notice invoking CLRA Section 21(4) joint liability, Income Tax Section 43B(h) buyer expense disallowance, and compound penal interest.",
      },
      {
        step: "3. Deploy Staff Withdrawal Notice & Insolvency Escalation",
        detail:
          "Serve a lawful 15-day demobilization warning under contract safety clauses. If unpaid arrears cross ₹1 Crore, serve a Form 3/4 Demand Notice under IBC Section 8 prior to NCLT filing.",
      },
    ],
    recommendedLinks: [
      {
        label: "Temp Staffing Payroll Default Playbook",
        href: "/contract-staffing-temp-payroll-pf-esic-invoice-default-recovery",
      },
      {
        label: "Section 43B(h) MSME Disallowance Guide",
        href: "/law/section-43bh-msme-payment-rule",
      },
      {
        label: "Bulk CSV Staffing Recovery Desk",
        href: "/bulk-recovery-cases-all-in-one-affordable-solutions",
      },
    ],
  },
  {
    id: "replacement-clause-abuse",
    tabLabel: "90-Day Replacement Clause Abuse",
    badge: "Ticket ₹1L – ₹12L | Contingency Search",
    title: "Client Delays Day-30 Placement Invoice Claiming 'We Only Pay After 90-Day Guarantee'",
    ticketBand: "₹1,00,000 – ₹12,00,000 (placement fee per corporate hire)",
    statutoryTrigger: "Indian Contract Act s.51–54 (Reciprocal Promises & Condition Precedent)",
    bottleneck:
      "Corporate HR teams frequently manipulate standard contractual '90-day free replacement' clauses into an unauthorized 90-day credit period. They refuse to clear the agency's Day-15 or Day-30 invoice, asserting that payment is due only if the candidate completes 90 days. Worse, if the client terminates the employee on Day 75 due to internal budget cuts, they demand fee waivers or cash refunds.",
    legalMechanism:
      "Under Sections 51 to 54 of the Indian Contract Act, 1872, the obligation to provide a replacement candidate is a 'conditional subsequent guarantee' contingent on the client having fulfilled its condition precedent: timely invoice clearance within 15 to 30 days of joining. If the client withholds payment, the replacement warranty is forfeited, and the full placement fee becomes immediately recoverable with interest.",
    operationalSteps: [
      {
        step: "1. Document Client Joining Confirmation & Onboarding",
        detail:
          "Secure the client's official joining intimation email, IT asset assignment log, or candidate onboarding photo verifying the candidate actively assumed their duties on the agreed start date.",
      },
      {
        step: "2. Rebut Replacement Condition Precedent in Writing",
        detail:
          "Issue a formal legal communication stating that the replacement guarantee is legally voided if the 30-day invoice remains unsettled, and that internal role elimination or constructive discharge does not qualify for replacement.",
      },
      {
        step: "3. Serve Fact-Verified Notice for Unconditional Fee Clearance",
        detail:
          "Demand immediate wire transfer of principal placement fees plus 18% p.a. commercial interest under Order XXXVII CPC, precluding bad-faith claims of candidate dissatisfaction.",
      },
    ],
    recommendedLinks: [
      {
        label: "90-Day Replacement Abuse Legal Guide",
        href: "/recruitment-agency-90-day-replacement-clause-abuse-fee-recovery",
      },
      {
        label: "Unsigned Terms of Business Recovery",
        href: "/recruitment-terms-of-business-unsigned-email-acceptance-recovery",
      },
      {
        label: "Business Dues Recovery Portal",
        href: "/recovery/business-dues",
      },
    ],
  },
  {
    id: "security-fms-theft-deduction",
    tabLabel: "Security & FMS Fake Theft Claims",
    badge: "Ticket ₹3L – ₹50L | Guarding & IFM Contracts",
    title: "RWA, Builder or Factory Terminates Security Agency Overnight with Bogus Theft Debits",
    ticketBand: "₹3,00,000 – ₹50,00,000 (unpaid monthly security & housekeeping bills)",
    statutoryTrigger: "MSMED Act s.15–18, PSARA Compliance, Estoppel by Signed Attendance Muster",
    bottleneck:
      "A housing society (RWA), commercial mall, or factory owes 3 to 6 months of security guard and housekeeping bills. When the agency demands payment, the client abruptly brings in a new contractor overnight and fabricates a debit note claiming '₹15 Lakh of copper cable was stolen 2 months ago'—without any contemporaneous FIR, CCTV footage, or inquiry at the time.",
    legalMechanism:
      "Under the doctrine of estoppel and settled commercial jurisprudence, unilateral unliquidated damage claims cannot be set off against admitted statutory wage bills (Supreme Court in Union of India v. Raman Iron Foundry). Daily attendance muster rolls signed by the client's facility manager constitute conclusive proof of service delivery, and service MSME status entitles agencies to fast-track MSEFC recovery.",
    operationalSteps: [
      {
        step: "1. Consolidate Signed Daily Attendance & Shift Logs",
        detail:
          "Collate physical gate muster rolls, biometric punch logs, and monthly attendance certificates countersigned by the client's site administrator or society secretary.",
      },
      {
        step: "2. Challenge Bogus Theft Claims & Lack of Police FIR",
        detail:
          "Rebut the arbitrary debit note by proving the client never registered an FIR under Section 173 BNSS (or Section 154 CrPC), notified the agency in writing within 24 hours, or produced CCTV proof of security negligence.",
      },
      {
        step: "3. File MSEFC Reference with 3x Compound Interest",
        detail:
          "Initiate statutory conciliation and arbitration before the Micro & Small Enterprises Facilitation Council under Section 18 of the MSMED Act, securing statutory awards against society office-bearers or corporate directors.",
      },
    ],
    recommendedLinks: [
      {
        label: "Security Guard & FMS Arrears Recovery",
        href: "/security-guard-housekeeping-facility-management-unpaid-bill-recovery",
      },
      {
        label: "Industrial Labour Contractor Factory Bills",
        href: "/blue-collar-industrial-labour-contractor-factory-bill-recovery",
      },
      {
        label: "Vendor & Invoice Legal Notice Services",
        href: "/services/vendor-and-invoice-recoveries",
      },
    ],
  },
];

export default function StaffingRecoveryScenarioTabs() {
  const [activeTab, setActiveTab] = useState(STAFFING_SCENARIOS[0].id);

  const currentScenario =
    STAFFING_SCENARIOS.find((item) => item.id === activeTab) || STAFFING_SCENARIOS[0];

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
      {/* Tabs Navigation */}
      <div className="flex border-b border-slate-200 overflow-x-auto bg-slate-50/80 p-1.5 gap-1.5 scrollbar-thin">
        {STAFFING_SCENARIOS.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 min-w-[200px] text-left px-4 py-3 rounded-xl transition-all cursor-pointer ${
                isActive
                  ? "bg-white text-slate-950 font-bold shadow-sm border border-slate-200/80"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/70"
              }`}
            >
              <div className="flex items-center gap-1.5 mb-1">
                <span
                  className={`w-2 h-2 rounded-full shrink-0 ${
                    isActive ? "bg-[#DC2626]" : "bg-slate-300"
                  }`}
                />
                <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400">
                  Scenario
                </span>
              </div>
              <p className="text-xs font-semibold leading-tight line-clamp-1">{tab.tabLabel}</p>
            </button>
          );
        })}
      </div>

      {/* Active Tab Content */}
      <div className="p-5 sm:p-7 md:p-8 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-100">
          <div>
            <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-red-50 text-[#DC2626] border border-red-200 mb-2">
              {currentScenario.badge}
            </span>
            <h3 className="text-lg sm:text-xl font-black text-slate-900 leading-snug">
              {currentScenario.title}
            </h3>
          </div>
          <div className="bg-slate-50 rounded-xl px-3.5 py-2 border border-slate-200 text-right">
            <span className="block text-[10px] uppercase font-bold text-slate-400">
              Statutory Basis
            </span>
            <span className="text-xs font-bold text-slate-800">
              {currentScenario.statutoryTrigger}
            </span>
          </div>
        </div>

        {/* Bottleneck vs Legal Mechanism */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-amber-50/60 rounded-xl p-4 sm:p-5 border border-amber-200/80">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
              <h4 className="text-xs font-bold uppercase tracking-wider text-amber-900">
                Corporate Defaulter Strategy &amp; Bottleneck
              </h4>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {currentScenario.bottleneck}
            </p>
          </div>

          <div className="bg-emerald-50/60 rounded-xl p-4 sm:p-5 border border-emerald-200/80">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
              <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-900">
                Enforceable Creditor Statutory Remedy
              </h4>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {currentScenario.legalMechanism}
            </p>
          </div>
        </div>

        {/* 3 Operational Steps */}
        <div className="space-y-3 pt-2">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
            Operational Recovery Roadmap for Agency Founders &amp; CFOs
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {currentScenario.operationalSteps.map((s, idx) => (
              <div
                key={idx}
                className="bg-slate-50 rounded-xl p-4 border border-slate-200/80 flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block w-6 h-6 rounded-full bg-slate-900 text-white text-[11px] font-bold text-center leading-6 mb-2">
                    {idx + 1}
                  </span>
                  <p className="text-xs font-bold text-slate-900 mb-1.5">{s.step}</p>
                  <p className="text-[11px] text-slate-600 leading-relaxed">{s.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recommended Cross-Links */}
        <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
          <span className="text-xs font-bold text-slate-700">Deep-Dive Guides &amp; Tools:</span>
          <div className="flex flex-wrap gap-2">
            {currentScenario.recommendedLinks.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors"
              >
                <span>{link.label}</span>
                <span className="text-[#DC2626] font-bold">&rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
