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
    id: "tier1-si-pay-when-paid",
    tabLabel: "1. Tier-1 'Pay-When-Paid' Trap",
    title: "Tier-1 SI Withholds ₹38 Lakh Subcontractor Invoices Stating 'US Client Has Not Released Funds'",
    badge: "Contract Act s.31/73 & Contingent Clause Invalidation",
    buyerProfile:
      "Large Tier-1 System Integrator, IT outsourcing giant, or multinational agency subcontracting C2C engineering pods to Tier-2 specialist vendors.",
    pretext:
      "A Tier-2 staffing vendor deploys 6 Java and Cloud engineers to a Tier-1 SI's BFSI project under a Time & Materials (T&M) SOW. After 90 days of work with approved Jira timesheets, the SI withholds ₹38,00,000 in monthly invoices, citing a clause in their Master Subcontractor Agreement: 'Vendor payment shall be disbursed within 15 days of Receipt of Funds from End-Client.' The SI claims the US banking client delayed quarterly disbursements, freezing subcontractor accounts.",
    legalReality:
      "Under Indian Contract Law and established Commercial Court precedents, a subcontractor is an independent service provider, not an insurer or equity co-investor in the prime contractor's commercial risk. Unless the contract contains clear, express, and unambiguous 'Pay-if-Paid' conditional terminology that explicitly passes end-client insolvency risk to the subcontractor, Indian courts interpret 'Pay-When-Paid' provisions merely as timing mechanisms specifying when payment becomes convenient, not a condition precedent extinguishing debt. Once man-hours are performed and verified via electronic timesheets, the vendor's right to compensation is absolute and mature under Sections 70 and 73 of the Indian Contract Act, 1872.",
    statutoryHook:
      "Indian Contract Act 1872 (ss. 70 & 73) + MSMED Act 2006 (s.15–18 mandatory 45-day cap) + Commercial Courts Act 2015 s.2(1)(c)(xviii)",
    actionProtocol: [
      "Issue a formal statutory notice denying the validity of the contingent payment defense and citing Section 15 of the MSMED Act, which overrides conflicting private contract clauses via Section 24.",
      "Export immutable Jira work logs, timesheet sign-offs from the SI's Delivery Lead, and Git commit histories certified under Section 63 of Bharatiya Sakshya Adhiniyam, 2023.",
      "Inform the SI's Chief Financial Officer that non-payment triggers mandatory expense disallowance under Section 43B(h) of the Income Tax Act upon audit closure.",
      "Initiate pre-institution mediation under Section 12A of the Commercial Courts Act, 2015, or file an emergency petition before the State MSEFC.",
    ],
  },
  {
    id: "ghosting-after-jira-approval",
    tabLabel: "2. Approved Jira Ghosting",
    title: "Funded Tech Startup Signs Off Sprint Timesheets, Deploys Code, and Discontinues Communication",
    badge: "Order XXXVII CPC Liquidated Debt & Estoppel",
    buyerProfile:
      "Series A/B funded tech startup, product incubator, or scale-up undergoing sudden cash burn or runway re-budgeting.",
    pretext:
      "A software staffing agency deploys 4 senior React Native and Python developers for 4 consecutive months. The startup's Product Manager and Engineering Director regularly approve monthly Jira sprint boards and timesheets in writing. At Month 4, facing an unsuccessful funding extension, the startup's executive leadership ceases answering emails and Slack channels, locking out vendor communication while running the deployed features in live production.",
    legalReality:
      "Approved Jira sprint logs, automated timesheet exports, and written PM acknowledgments constitute written admissions of liability and an unquestionable liquidated debt. Under the doctrine of promissory estoppel and Section 115 of BSA 2023, having accepted the benefit of the engineer hours and integrated the resulting code into their commercial product, the debtor is legally barred from disputing the delivery of services. Because the sum due is calculated on fixed hourly/monthly billing rates agreed in the SOW, it qualifies perfectly for an expedited Summary Suit under Order XXXVII of the Code of Civil Procedure (CPC).",
    statutoryHook:
      "Order XXXVII Code of Civil Procedure 1908 (Summary Suit) + BSA 2023 s.63 (Electronic Proof) + Specific Relief Act 1963 s.10",
    actionProtocol: [
      "Collate cryptographic hash prints of all approved Jira tickets, sprint burndown reports, and Slack sign-offs by the startup's Engineering Lead.",
      "Serve a 15-Day Fact-Verified Statutory Demand Notice by Speed Post RPAD, email to all board directors, and WhatsApp to the CEO and CFO.",
      "Issue a formal Notice of Copyright Reservation: inform the company that under Section 19(4) and Section 19(8) of the Copyright Act, intellectual property transfer remains inchoate until full payment.",
      "File an Order XXXVII Summary Suit in the competent Commercial District Court, forcing the startup to deposit the disputed funds to obtain leave to defend.",
    ],
  },
  {
    id: "bench-pullback-counterclaim",
    tabLabel: "3. Bench Pullback & SLA Threats",
    title: "Vendor Pulls Engineers After 60-Day Default; Client Threatens Damages for 'Project Disruption'",
    badge: "Contract Act s.51/54 Reciprocal Promises & Lien",
    buyerProfile:
      "Enterprise or agency client attempting to intimidate an IT staffing vendor with spurious breach-of-contract counter-claims.",
    pretext:
      "Following 60 days of unpaid monthly invoices, the staffing vendor exercises its contractual right to withdraw its 5 dedicated engineers from the client's codebase. The client immediately responds through their legal department, issuing a combative counter-notice alleging 'unauthorized service abandonment, breach of dedicated resource commitment, and catastrophic project delays,' demanding ₹50 Lakh in liquidated damages and SLA penalties.",
    legalReality:
      "Under Sections 51, 52, and 54 of the Indian Contract Act, 1872, contracts for continuous services represent reciprocal promises. The vendor's obligation to supply skilled labor on a month-to-month basis is expressly contingent upon the client performing their reciprocal promise: releasing monthly retainer payments within agreed credit periods. The client's material payment default entitles the vendor to suspend performance. A defaulting debtor cannot maintain a claim for damages arising from a stoppage provoked entirely by their own non-payment.",
    statutoryHook:
      "Indian Contract Act 1872 (ss. 51–54 Reciprocal Promises, s.39 Anticipatory Breach) + Commercial Courts Act s.12A",
    actionProtocol: [
      "Issue an immediate advocate rejoinder establishing the strict sequence of reciprocal obligations under Section 51 of the Indian Contract Act.",
      "Attach contemporaneous email warnings demonstrating that the vendor provided multiple cure notices before exercising the resource suspension.",
      "Rebut spurious SLA penalty clauses by documenting that all deployed deliverables met acceptance criteria prior to the date of financial stoppage.",
      "Demand immediate settlement of mature invoices plus interest, warning that continued bad-faith counter-claims will be cited in an application for costs under Section 35A CPC.",
    ],
  },
  {
    id: "client-poaching-non-solicit",
    tabLabel: "4. Direct Developer Poaching",
    title: "Client Secretly Hires Deployed Full-Stack Engineers Directly While Withholding Final 2 Invoices",
    badge: "B2B Conversion Buyout Fee & Liquidated Compensation",
    buyerProfile:
      "Direct enterprise client, tech agency, or offshore subsidiary that uses staff-augmentation vendors as a free recruitment pipeline.",
    pretext:
      "An enterprise client utilizes 3 senior DevOps and AI engineers deployed by an agency for 9 months. In Month 10, the client notifies the agency that they are 'reducing external contractor headcounts due to internal restructuring' and withholds the final two monthly invoices (₹12,00,000). Two weeks later, the agency discovers that all 3 engineers have resigned and joined the client directly as full-time internal employees.",
    legalReality:
      "While employee-facing non-compete clauses are strictly restricted under Section 27 of the Indian Contract Act, 1872, B2B commercial covenants between corporate entities—specifically Placement / Conversion / Recruitment Buyout Fees—are fully legal and enforceable. In *Wipro Ltd. v. Beckman Coulter International S.A.* and *Keventer Agro*, Indian courts established that non-solicitation clauses between commercial enterprises do not restrain the individual's trade, but rather protect the vendor's legitimate business investment in hiring and training. The vendor is entitled to recover both unpaid monthly invoices and contractually agreed conversion buyout fees (typically 20% to 30% of annual CTC per engineer).",
    statutoryHook:
      "Commercial Contract Law + Delhi High Court Wipro Non-Solicitation Precedent + Indian Contract Act s.73/74 Liquidated Damages",
    actionProtocol: [
      "Issue a dual-claim statutory legal demand notice covering both the unpaid T&M monthly invoices and the contractually stipulated Conversion Buyout Fees.",
      "Serve formal notices to the client's HR, Chief People Officer, and Managing Director citing the exact Non-Solicitation and Recruitment Fee covenants in the signed MSA.",
      "Preserve digital evidence of deployed work, email communication logs, and LinkedIn employment updates under BSA 2023 Section 63.",
      "Institute proceedings before the Commercial Court or Arbitral Tribunal seeking composite recovery of services rendered and contract buyout compensation.",
    ],
  },
];

export default function ItStaffAugmentationScenarioTabs() {
  const [activeTab, setActiveTab] = useState(SCENARIOS[0].id);
  const currentScenario = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
      {/* Header Bar */}
      <div className="bg-slate-900 text-white p-5 sm:p-6 border-b border-slate-800">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/70 border border-red-800/60 px-2.5 py-1 rounded-full">
              Interactive Breach Analysis
            </span>
            <p className="text-base sm:text-xl font-bold text-white mt-2">
              Common C2C Staff-Augmentation Defaults &amp; Strategic Responses
            </p>
          </div>
          <p className="text-xs text-slate-400">
            Click scenario tabs to view contractual &amp; statutory SOPs
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-5">
          {SCENARIOS.map((scenario) => {
            const isActive = activeTab === scenario.id;
            return (
              <button
                key={scenario.id}
                type="button"
                onClick={() => setActiveTab(scenario.id)}
                className={`px-3 py-2.5 rounded-xl text-xs font-bold transition-all text-left truncate cursor-pointer ${
                  isActive
                    ? "bg-[#DC2626] text-white shadow-md shadow-red-900/40"
                    : "bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white"
                }`}
              >
                {scenario.tabLabel}
              </button>
            );
          })}
        </div>
      </div>

      {/* Tab Body */}
      <div className="p-5 sm:p-7 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-4">
          <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
            {currentScenario.title}
          </h3>
          <span className="text-xs font-bold text-red-700 bg-red-50 border border-red-200 px-3 py-1 rounded-full">
            {currentScenario.badge}
          </span>
        </div>

        {/* 2-Column Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
              Debtor Profile &amp; Default Narrative
            </span>
            <p className="text-xs font-semibold text-slate-800 mb-2">
              {currentScenario.buyerProfile}
            </p>
            <p className="text-xs text-slate-600 leading-relaxed">
              {currentScenario.pretext}
            </p>
          </div>

          <div className="p-4 bg-emerald-50/60 rounded-xl border border-emerald-200">
            <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 block mb-1">
              Legal Position &amp; Statutory Reality
            </span>
            <p className="text-xs text-slate-700 leading-relaxed">
              {currentScenario.legalReality}
            </p>
            <div className="mt-3 pt-2 border-t border-emerald-200/60">
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-900">
                Statutory Hook:
              </span>
              <p className="text-xs font-semibold text-emerald-950 mt-0.5">
                {currentScenario.statutoryHook}
              </p>
            </div>
          </div>
        </div>

        {/* Action Protocol Steps */}
        <div className="p-4 sm:p-5 bg-slate-900 text-white rounded-xl">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-red-400 mb-3">
            Creditor Playbook: Mandatory Execution Protocol
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {currentScenario.actionProtocol.map((step, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-200">
                <span className="w-5 h-5 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <span className="leading-relaxed">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
