"use client";

import React, { useState } from "react";
import Link from "next/link";

interface ProblemTab {
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

const PROBLEMS: ProblemTab[] = [
  {
    id: "branch-closure",
    tabLabel: "Branch Closure / Shift",
    title: "Gym Closes Local Branch or Shifts Location Far Away",
    cause:
      "A frequent grievance across metropolitan and Tier-1 cities occurs when fitness centres or studio chains collect upfront 1-year or 2-year subscription fees (often ₹18,000 to ₹45,000), only to abruptly shut down that specific branch, undergo indefinite renovation, or relocate several kilometres away. Front desk staff dismiss refund claims, offering only 'transfers' to inconvenient sister branches.",
    legalBasis:
      "Under Section 2(11) of the Consumer Protection Act, 2019, failure to deliver services at the agreed location is an incurable 'deficiency in service'. Furthermore, forcing a consumer to travel to a distant branch constitutes an 'unfair trade practice' under Section 2(47). Consumer Commissions across India (including NCDRC and State Commissions) have consistently held that unilateral branch relocations entitle the subscriber to an immediate, full pro-rata refund of all unexpired months plus interest.",
    steps: [
      {
        step: "Document Evidence of Closure or Relocation Notice",
        description:
          "Photograph the locked premises, save WhatsApp broadcasts from gym management, or screenshot official app notifications announcing branch termination.",
      },
      {
        step: "Send Formal Rejection of Branch Transfer via Email",
        description:
          "Explicitly email management stating that the alternate branch is commercially and geographically unfeasible, rejecting unilateral transfer and demanding pro-rata refund within 7 days.",
      },
      {
        step: "Serve Advocate Legal Notice & File on e-Jagriti",
        description:
          "If the fitness chain delays beyond 7 days, dispatch an advocate legal notice citing Section 2(11) CPA 2019. Follow with an e-Jagriti consumer complaint for refund, 9-12% interest, and litigation costs.",
      },
    ],
    statutoryRule: "Section 2(11) Deficiency & Section 2(47) Unfair Trade Practice, CPA 2019",
  },
  {
    id: "medical-grounds",
    tabLabel: "Medical Grounds",
    title: "Medical Illness, Spine Injury or Doctor's Fitness Ban Refused",
    cause:
      "A consumer suffers a slip disc, cardiovascular condition, fracture, high-risk pregnancy, or other medical incapacity where certified doctors advise immediate cessation of rigorous physical exertion. Despite submitting verified medical certificates, gym managers point to a boilerplate 'Fees Once Paid Are Strictly Non-Refundable Under Any Circumstances' clause.",
    legalBasis:
      "Under Section 2(46) of the Consumer Protection Act, 2019, any contractual clause that causes significant imbalance in the rights and obligations of a consumer is an 'Unfair Contract'. A blanket refusal to refund fees when health incapacitates a member—a condition of frustration of contract under Section 56 of the Indian Contract Act, 1872—is void ab initio and illegal. District Consumer Commissions routinely direct gyms to refund unutilised dues when backed by registered medical practitioner certificates.",
    steps: [
      {
        step: "Obtain Registered Medical Practitioner (RMP) Fitness Advisory",
        description:
          "Secure a written medical certificate on the doctor's official letterhead specifically stating that gym workout, weight lifting, or strenuous activity is medically contraindicated.",
      },
      {
        step: "Issue Cancellation Notice with Medical Certificate Attached",
        description:
          "Send an email and written letter attaching the medical certificate, requesting immediate termination of membership and refund of balance unexpired tenure.",
      },
      {
        step: "Invoke Section 2(46) CPA in Advocate Demand Notice",
        description:
          "Serve an advocate notice asserting that 'No Refund on Medical Grounds' is an unenforceable unfair contract clause. Demand pro-rata reimbursement within 15 days.",
      },
    ],
    statutoryRule: "Section 2(46) Unfair Contract, CPA 2019 & Section 56 Indian Contract Act 1872",
  },
  {
    id: "facility-downgrade",
    tabLabel: "Defective Facility / Trainers",
    title: "Broken Equipment, Substandard Hygiene or Missing Certified Trainers",
    cause:
      "Gym members enroll based on lavish promises of centralized air-conditioning, working steam rooms, swimming pools, certified personal trainers, or specialized equipment. Within weeks, AC units break down, equipment remains out of order for months, hygiene deteriorates, or promised personal trainers abruptly resign without competent replacements.",
    legalBasis:
      "When a gym advertises premium infrastructure but fails to maintain basic hygiene, safety, or functional amenities, it commits both 'Deficiency in Service' under Section 2(11) and 'Misleading Advertisement' under Section 2(28) of CPA 2019. Consumers are not obliged to endure substandard, hazardous conditions when they paid consideration for premium fitness facilities.",
    steps: [
      {
        step: "Capture Timestamps of Malfunctioning Amenities",
        description:
          "Take date-stamped photographs or videos of non-functional treadmills, broken weights, unhygienic washrooms, or absent AC cooling.",
      },
      {
        step: "Log Written Grievances on Official App / Email",
        description:
          "Do not rely on verbal complaints to gym floor staff. Lodge formal tickets on the brand's customer portal or send dated emails to management detailing specific deficiencies.",
      },
      {
        step: "Trigger Legal Demand Notice for Contract Rescission",
        description:
          "Issue a statutory advocate notice demanding rescission of membership contract, full reimbursement of unused fees, and compensation for deficiency in service.",
      },
    ],
    statutoryRule: "Section 2(11) Deficiency & Section 2(28) Misleading Advertisement, CPA 2019",
  },
  {
    id: "subscription-traps",
    tabLabel: "Auto-Debit / Dark Patterns",
    title: "Unauthorised Auto-Renewal Debits & Buried Cancellation Links",
    cause:
      "Online fitness applications, digital gym passes, and app-based memberships (such as Cultpass, fitness aggregators, or boutique studio apps) quietly lock consumers into recurring monthly or annual auto-debit mandates without clear pre-debit notices, or introduce labyrinthine cancellation flows where cancelling requires multiple obscure screens.",
    legalBasis:
      "In November 2023, the Central Consumer Protection Authority (CCPA) notified the Guidelines for Prevention and Regulation of Dark Patterns. Practices such as 'Subscription Traps' (making cancellation complex or hidden), 'Forced Actions' (compelling auto-renewal to access discounts), and 'Drip Pricing' violate Sections 2(47) and 18 of CPA 2019. In addition, RBI e-Mandate circulars mandate pre-debit SMS alerts at least 24 hours prior to recurring transactions.",
    steps: [
      {
        step: "Revoke E-Mandate via NetBanking / UPI App Immediately",
        description:
          "Access your bank's net banking portal or UPI app (NPCI mandate section) and cancel the recurring auto-debit standing instruction to prevent subsequent unauthorized deductions.",
      },
      {
        step: "Lodge RBI Chargeback Request with Issuing Bank",
        description:
          "Within 30–60 days of the unauthorized deduction, file a written chargeback dispute with your card-issuing bank citing merchant subscription trap and lack of explicit consent.",
      },
      {
        step: "Escalate CCPA Dark Pattern Violation via Legal Notice",
        description:
          "Send an advocate demand notice citing the CCPA Dark Patterns Guidelines 2023 and CPA 2019, seeking immediate reversal and regulatory reporting to the CCPA.",
      },
    ],
    statutoryRule: "CCPA Dark Patterns Guidelines 2023 & RBI E-Mandate Framework",
  },
];

export default function GymProblemTabs() {
  const [activeTabId, setActiveTabId] = useState<string>(PROBLEMS[0].id);

  const current = PROBLEMS.find((p) => p.id === activeTabId) || PROBLEMS[0];

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      {/* Tabs Navigation Header */}
      <div className="flex border-b border-slate-200 bg-slate-50/80 overflow-x-auto scrollbar-none">
        {PROBLEMS.map((tab) => {
          const isActive = tab.id === activeTabId;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTabId(tab.id)}
              className={`px-4 sm:px-6 py-3.5 text-xs sm:text-sm font-bold tracking-tight whitespace-nowrap border-b-2 transition-all cursor-pointer ${
                isActive
                  ? "border-[#DC2626] text-red-600 bg-white"
                  : "border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100/60"
              }`}
            >
              {tab.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Tab Panel Content */}
      <div className="p-5 sm:p-7 md:p-8 space-y-6">
        <div>
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-red-50 text-red-700 border border-red-200 mb-2">
            <span>Statutory Ground:</span>
            <span className="font-mono">{current.statutoryRule}</span>
          </div>
          <h3 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 leading-snug">
            {current.title}
          </h3>
        </div>

        {/* Cause vs Legal Basis Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200">
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-700 mb-2 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              Common Ground Reality &amp; Refusal Tactic
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
              {current.cause}
            </p>
          </div>

          <div className="p-4 sm:p-5 rounded-xl bg-red-50/50 border border-red-200/80">
            <h4 className="text-xs font-black uppercase tracking-wider text-red-800 mb-2 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-red-600" />
              Statutory Consumer Remedy &amp; Rulings
            </h4>
            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-normal">
              {current.legalBasis}
            </p>
          </div>
        </div>

        {/* Actionable Steps */}
        <div className="space-y-3">
          <h4 className="text-xs font-black uppercase tracking-wider text-slate-800">
            Immediate Recommended Action Plan:
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {current.steps.map((s, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl border border-slate-200 bg-white shadow-xs space-y-1"
              >
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-slate-900 text-white font-mono text-[10px] font-bold flex items-center justify-center">
                    {idx + 1}
                  </span>
                  <span className="text-xs font-bold text-slate-900">{s.step}</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-slate-100">
          <p className="text-xs text-slate-500">
            Need legal counsel to review your specific membership agreement or branch closure?
          </p>
          <Link
            href="/services/refunds-and-consumer-complaints"
            className="text-xs font-bold text-red-600 hover:text-red-700 underline inline-flex items-center gap-1"
          >
            Explore Consumer Refund Services &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
