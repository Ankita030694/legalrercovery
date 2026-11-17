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
    id: "sham-theft-pilferage-setoff",
    tabLabel: "Bogus Theft Debit Notes",
    title: "Client Conjures ₹10L–₹25L Material Theft or Copper Wire Loss to Offset 4 Months of Bills",
    cause:
      "A factory, builder, or warehouse accumulates ₹12 Lakh to ₹25 Lakh in unpaid security bills over 4 to 6 months. The moment the security agency presses for payment or serves a formal notice, the client's management abruptly terminates the contract and sends an email alleging: '₹15 Lakh of copper wire, diesel, or raw materials went missing 2 months ago; we are setting this off against your arrears.' Crucially, zero FIR was registered with the police at the time of the alleged incident, zero joint investigation was conducted, and no notice was issued until payment was demanded.",
    legalBasis:
      "Under Sections 73 and 74 of the Indian Contract Act, 1872, unliquidated and unproven claims for damages cannot be unilaterally adjusted against certified, liquidated wage debts. A security agency is not an absolute insurer of client property. Furthermore, the Supreme Court in Mobilox Innovations v. Kirusa Software established that belated, post-notice disputes manufactured as an afterthought carry zero legal weight. In the absence of an immediate police FIR, joint Panchnama, or proof of proximate guard negligence, unilateral theft set-offs are void ab initio and amount to illegal withholding of wages.",
    steps: [
      {
        step: "Formal Rebuttal Calling for FIR & Joint Panchnama",
        description:
          "Serve an immediate legal rebuttal demanding a copy of the police FIR, General Diary (GD) entry, CCTV footage audit, and contemporaneous incident report. Point out that failure to report an alleged major theft to the police constitutes an illegal sham defense.",
      },
      {
        step: "Muster Roll & Incident Log Lockdown Under BSA s.63",
        description:
          "Secure certified copies of the site occurrence register, daily visitor logs, and material gate-in/gate-out passes signed by the client's storekeeper and security supervisor to prove operational integrity.",
      },
      {
        step: "Segregation of Pass-Through Wages & Criminal Warning",
        description:
          "Issue an advocate notice putting directors/officers on notice that withholding security guard wages to cover unverified commercial inventory discrepancies exposes them to criminal breach of trust (BNS 316) and extortion (BNS 308).",
      },
      {
        step: "MSME Samadhaan (MSEFC) Reference",
        description:
          "File an immediate reference under Section 18 of the MSMED Act, 2006 for full principal plus 3x RBI compound interest, demonstrating that the theft allegation is a textbook post-default sham.",
      },
    ],
    statutoryRule: "Sections 73 & 74 Contract Act, 1872 · Mobilox Doctrine · MSMED Act Section 18",
  },
  {
    id: "overnight-vendor-swapping",
    tabLabel: "Overnight Vendor Swapping",
    title: "Builder or RWA Brings in New Security Agency on the 1st and Locks Out Old Staff Without Clearing Bills",
    cause:
      "On the 30th or 31st of the month, the client secretly executes an agreement with a competing security vendor. On the morning of the 1st, new guards occupy all gates while your supervisor and guards are barred from entry. The client ignores all pending invoices spanning 3 to 5 months, refusing to issue handover clearances or release security deposits, assuming the agency will simply write off the debt.",
    legalBasis:
      "Abrupt termination without the contractually mandated 30-day or 60-day cure/notice period constitutes a fundamental breach of contract under Section 39 and Section 73 of the Indian Contract Act. Under the doctrine of Quantum Meruit (Section 70), the client having enjoyed the benefit of security and housekeeping deployment is legally bound to compensate the agency. All past monthly muster rolls signed by the client create a statutory estoppel by conduct under Section 121 of Bharatiya Sakshya Adhiniyam, 2023.",
    steps: [
      {
        step: "Immediate Video & Photographic Evidence Lockdown",
        description:
          "Document the unnotified replacement with timestamped video evidence, geo-tagged gate handover refusal logs, and written letters submitted to the local police station noting the sudden lockout.",
      },
      {
        step: "Issuance of Comprehensive Handover Protocol Notice",
        description:
          "Serve an advocate legal notice recording the client's breach of notice-period clauses, claiming notice-period remuneration, security deposit refund, and immediate clearance of all certified past arrears.",
      },
      {
        step: "Income Tax Section 43B(h) Corporate Warning",
        description:
          "Notify the client's statutory auditors and CFO that unpaid service invoices of Udyam-registered agencies must be added back to taxable income with penal interest if unpaid beyond 45 days.",
      },
      {
        step: "Order XXXVII Commercial Summary Suit",
        description:
          "Institute a summary suit for liquidated money recovery in the Commercial Court based on verified bills and signed client attendance sheets, accompanied by an application for attachment of receivables.",
      },
    ],
    statutoryRule: "Indian Contract Act Sections 39, 70 & 73 · Income Tax Act Section 43B(h) · Order XXXVII CPC",
  },
  {
    id: "rwa-management-changeover",
    tabLabel: "RWA Committee Changeover",
    title: "Newly Elected RWA or Society Committee Disclaims Bills Incurred by the Preceding Management",
    cause:
      "A residential housing society (RWA / AOA) conducts annual elections. The newly elected management committee takes over and halts payments on ₹6 Lakh to ₹18 Lakh of pending security and housekeeping bills, asserting: 'The previous President and Secretary made irregular vendor appointments or had personal kickbacks. Go recover from them; the Society will not honor past bills.'",
    legalBasis:
      "A registered Resident Welfare Association (RWA) or Apartment Owners Association (AOA) is a separate juristic entity with perpetual succession under the Societies Registration Act, 1860 or state-specific apartment ownership statutes. A change of individual office-bearers does not terminate the legal obligations of the juristic body. Under the doctrine of Indoor Management, third-party contractors dealing in good faith are entitled to presume that internal management procedures were properly followed. The society cannot disown liability for security guards and sweepers who protected and cleaned the premises.",
    steps: [
      {
        step: "Collation of Society-Stamped Attendance & Work Orders",
        description:
          "Assemble all work orders, contracts, and daily muster rolls stamped with the official Society seal, signed by the former estate manager, supervisor, or committee members.",
      },
      {
        step: "Advocate Legal Demand to Society & Office Bearers Personally",
        description:
          "Serve a joint statutory demand notice addressed to the Society in its juristic capacity and naming the President, Secretary, and Treasurer both officially and personally for mala fide withholding.",
      },
      {
        step: "Formal Complaint to Registrar of Co-operative Societies",
        description:
          "Lodge a statutory petition before the District Registrar / Deputy Registrar of Co-operative Societies for financial mismanagement and willful default of basic civic vendor liabilities.",
      },
      {
        step: "MSEFC Conciliation & Arbitration",
        description:
          "File an MSME Samadhaan petition against the registered society. Awards passed by the MSEFC are directly executable as civil court decrees under Section 36 of the Arbitration Act.",
      },
    ],
    statutoryRule: "Societies Registration Act, 1860 · Doctrine of Indoor Management · MSMED Act Section 18",
  },
  {
    id: "short-deployment-uniform-penalties",
    tabLabel: "Arbitrary Headcount Shortfall Fines",
    title: "Factory or Corporate Park Slashes 30% of Bills Claiming Unproven Headcount Shortfalls",
    cause:
      "At the time of monthly invoice processing, the client's facility manager retroactively imposes sweeping deductions—deducting ₹3 Lakh to ₹8 Lakh under arbitrary heads such as 'short deployment', 'sleeping on duty', or 'lack of standard uniform/shoes'—despite daily muster rolls having been signed by the client's own shift supervisor without protest.",
    legalBasis:
      "Under the doctrine of waiver and estoppel by conduct (BSA Section 121), when a client's authorized supervisor certifies daily attendance registers at the end of each shift or month without recording shortfall remarks, the client cannot retroactively raise penal deductions at the billing stage. Furthermore, penal deductions without following contractual SLA show-cause and cure mechanisms violate Section 74 of the Indian Contract Act.",
    steps: [
      {
        step: "Audit & Collation of Dual-Signed Daily Mustering Registers",
        description:
          "Extract authenticated physical or digital muster rolls signed on a shift-by-shift basis by the client's shift supervisor, security officer, or HR admin.",
      },
      {
        step: "Cross-Reconciliation with Statutory EPF & ESIC Portals",
        description:
          "Produce EPFO Electronic Challan cum Return (ECR) receipts and ESIC wage contribution logs proving that every deployed security guard and housekeeper was enrolled and paid.",
      },
      {
        step: "Formal Rejection of Unilateral Debit Notes",
        description:
          "Issue a formal advocate rebuttal rejecting the arbitrary debit notes as legally invalid, reminding the client that statutory minimum wages cannot be subjected to unauthorized deductions.",
      },
      {
        step: "Fast-Track Demand with 3x Compound Interest",
        description:
          "Demand immediate release of the wrongfully deducted amounts within 15 days, failing which MSMED Act statutory compound interest begins accruing on the withheld principal.",
      },
    ],
    statutoryRule: "Contract Act Section 74 · Estoppel by Conduct (BSA s.121) · Code on Wages, 2019",
  },
];

export default function SecurityScenarioTabs() {
  const [activeTab, setActiveTab] = useState(SCENARIOS[0].id);
  const current = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full bg-white border border-slate-200 rounded-2xl p-5 sm:p-7 shadow-sm">
      <div className="border-b border-slate-200 pb-4 mb-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-700 bg-red-50 border border-red-200 mb-2">
          <span>Operational Recovery Scenarios</span>
        </div>
        <h3 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 tracking-tight">
          4 Commercial Failure Modes in Security &amp; Facility Management
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 mt-1">
          Select a default scenario below to view the precise debtor tactics, governing statutory provisions, and step-by-step advocate counter-maneuvers.
        </p>
      </div>

      {/* Tabs navigation */}
      <div className="flex flex-wrap gap-2 pb-4 mb-6 border-b border-slate-100">
        {SCENARIOS.map((scenario) => {
          const isActive = activeTab === scenario.id;
          return (
            <button
              key={scenario.id}
              type="button"
              onClick={() => setActiveTab(scenario.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
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

      {/* Active Tab Content */}
      <div className="space-y-6">
        <div>
          <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
            {current.title}
          </h4>
          <div className="bg-red-50 border-l-4 border-[#DC2626] p-3.5 rounded-r-xl text-xs sm:text-sm text-red-900 leading-relaxed font-medium mb-4">
            <span className="font-bold">Debtor Tactic: </span>
            {current.cause}
          </div>
          <div className="bg-slate-50 border border-slate-200 p-3.5 rounded-xl text-xs sm:text-sm text-slate-700 leading-relaxed mb-5">
            <span className="font-bold text-slate-900">Legal Foundation &amp; Statutory Rebuttal: </span>
            {current.legalBasis}
          </div>
        </div>

        {/* Tactical Playbook Steps */}
        <div>
          <p className="text-xs font-extrabold uppercase tracking-wider text-slate-500 mb-3">
            Recommended Step-by-Step Counter-Action
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {current.steps.map((st, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-xl p-3.5 hover:border-red-300 transition-colors"
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="w-5 h-5 rounded-full bg-[#DC2626] text-white text-[10px] font-bold flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <p className="text-xs font-bold text-slate-900 leading-tight">
                    {st.step}
                  </p>
                </div>
                <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed pl-7">
                  {st.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Rule Strip */}
        <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-500">
          <span className="font-semibold text-slate-700">
            Statutory Governing Framework:
          </span>
          <span className="font-mono text-red-700 bg-red-50 px-2 py-0.5 rounded border border-red-100 font-semibold">
            {current.statutoryRule}
          </span>
        </div>
      </div>
    </div>
  );
}
