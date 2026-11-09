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
    id: "appliance-property-damage",
    tabLabel: "Appliance & Property Damage",
    title: "Appliance Burnout, Plumbing Leakage or Floor Ruined During UC Service",
    cause:
      "Urban Company dispatches technicians for AC servicing, plumbing, deep cleaning, or electrical repairs. Negligent handling—such as overcharging AC gas leading to compressor blowout, improper plumbing joints causing hidden wall seepage, or using harsh acidic chemicals on Italian marble—results in heavy property damage. When confronted, Urban Company routinely deflects liability by labeling the loss as 'pre-existing wear-and-tear' or claiming it acts merely as a software intermediary.",
    legalBasis:
      "Under Section 2(11) (Deficiency in Service) and Section 86 (Liability of Service Provider) of the Consumer Protection Act, 2019, an aggregator that curates professionals, fixes service prices, collects payment, and advertises vetted expertise cannot disclaim liability. District Consumer Commissions have repeatedly struck down intermediary immunity claims under Section 79 of the IT Act when physical negligence occurs during home visits.",
    steps: [
      {
        step: "Preserve Pre/Post Video & Technician Identity",
        description:
          "Capture high-resolution timestamped photographs and video walkthroughs of the damaged asset. Screenshot the Urban Company booking screen showing the technician's name, partner ID, and service timestamp.",
      },
      {
        step: "Obtain Independent Brand Service Center Inspection Report",
        description:
          "Call an authorized manufacturer engineer (e.g., Daikin, LG, Voltas) to inspect the damaged appliance. Obtain an official diagnostic job-sheet and itemized repair estimate attributing the failure to improper handling.",
      },
      {
        step: "Serve Advocate Statutory Notice Impleading Urban Company",
        description:
          "Issue a formal 15-day statutory demand notice to Urban Company Limited corporate headquarters and the partner, demanding full replacement/repair reimbursement alongside compensation for mental agony.",
      },
    ],
    statutoryRule: "Section 2(11) & Section 86, CPA 2019",
  },
  {
    id: "incomplete-abandoned-work",
    tabLabel: "Substandard / Abandoned Work",
    title: "Technician Abandoned Job Halfway or Took Offline Money for Parts",
    cause:
      "Deputed partners frequently solicit direct offline UPI payments for replacement compressor parts, copper piping, or specialized paint, only to perform shoddy, half-baked work or disappear entirely. The Urban Company mobile application subsequently marks the booking as 'Completed', triggering full automated service fee debits while customer chat channels provide only automated bot loops.",
    legalBasis:
      "Under Section 2(47) of the Consumer Protection Act, 2019, marking an unperformed or deficient job as 'Completed' constitutes an unfair trade practice. Under Bharatiya Nyaya Sanhita, 2023 (BNS Section 318 / Section 316), taking consumer funds under false representation creates actionable criminal breach of trust. Urban Company bears vicarious responsibility for contractors operating in its uniform and brand identity.",
    steps: [
      {
        step: "Compile Transaction Trails & Chat Logs",
        description:
          "Download bank/UPI debit statements showing direct payments made to the technician on-site, alongside in-app chat transcripts and phone call logs evidencing partner abandonment.",
      },
      {
        step: "Escalate Formally to Urban Company Grievance Officer",
        description:
          "Submit a formal complaint to grievanceofficer@urbancompany.com citing the booking ID, stating partner abandonment, and setting a 48-hour deadline for refund under E-Commerce Rules, 2020.",
      },
      {
        step: "Issue Advocate Demand Notice for Refund & Damages",
        description:
          "If the company fails to rectify or refund within 48 hours, issue a formal statutory notice demanding 100% refund of service fees and offline sums, with 18% statutory interest.",
      },
    ],
    statutoryRule: "Section 2(47) CPA 2019 & BNS 318",
  },
  {
    id: "damage-cover-rejected",
    tabLabel: "Damage Cover Rejected",
    title: "Arbitrary Repudiation of Urban Company 'Damage Protection Cover'",
    cause:
      "Urban Company aggressively markets a 'Damage Protection Cover' (often up to ₹10,000 or ₹25,000) as a trust guarantee. However, when customers file damage claims for broken TVs, flooded floors, or damaged AC units, UC internal claim adjusters reject them on procedural pretexts—such as 'not reported within 24 hours', 'pre-existing fault', or capping compensation to an insulting ₹500 token coupon.",
    legalBasis:
      "Under Section 2(46) of the Consumer Protection Act, 2019, contractual terms that impose unreasonable restrictions, require unrealistic claim windows, or unilaterally cap genuine consumer loss constitute an 'Unfair Contract'. Consumer courts routinely invalidate such liability limitation clauses and order actual restoration costs.",
    steps: [
      {
        step: "Document Formal Claim Rejection Text",
        description:
          "Save the email or app ticket response where Urban Company repudiated your insurance or damage cover, highlighting their stated justification.",
      },
      {
        step: "Lodge an Official National Consumer Helpline (NCH) Grievance",
        description:
          "Register a complaint on consumerhelpline.gov.in (NCH Docket) specifying unfair contract terms and misleading advertisements regarding the damage cover guarantee.",
      },
      {
        step: "Serve Statutory Pre-Litigation Legal Notice",
        description:
          "Send an advocate demand notice invoking Section 2(46) and Section 85 CPA 2019, warning of consumer commission filing on e-Jagriti for full property restoration plus litigation costs.",
      },
    ],
    statutoryRule: "Section 2(46) Unfair Contract & E-Commerce Rules",
  },
  {
    id: "salon-personal-injury",
    tabLabel: "Salon / Skin Burns & Harm",
    title: "Salon at Home Chemical Burns, Skin Peeling or Infection",
    cause:
      "Urban Company 'Salon at Home' bookings for facials, hair coloring, chemical peeling, or waxing occasionally result in severe dermatological harm, chemical facial burns, allergic dermatitis, or infections due to expired products, unsterilized tools, or uncertified beauticians. Customer care typically offers an automated refund of the service fee (e.g. ₹800) while ignoring thousands of rupees in urgent dermatologist medical bills.",
    legalBasis:
      "Under Section 84, 85, and 86 of the Consumer Protection Act, 2019 (Product Liability & Service Provider Liability for Harm), any service provider that causes personal injury, physical harm, or mental agony due to negligence or defective consumable products is strictly liable to pay full medical expenses and compensatory damages.",
    steps: [
      {
        step: "Immediate Dermatologist Consultation & Certified Report",
        description:
          "Visit a qualified dermatologist or hospital immediately. Secure an official medical certificate detailing the acute chemical burn or contact dermatitis, together with itemized pharmacy and consultation bills.",
      },
      {
        step: "Preserve Product Sachets & High-Res Photographic Record",
        description:
          "Take dated, close-up photos of the affected facial/skin area. Secure packaging of any left-over cream, bleach, or wax sachets used by the professional.",
      },
      {
        step: "Serve Advocate Legal Notice for Bodily Harm Damages",
        description:
          "Dispatch a statutory advocate notice holding Urban Company and the beautician liable for personal injury, claiming full medical expense reimbursement and substantial damages for physical trauma.",
      },
    ],
    statutoryRule: "Section 86 CPA 2019 (Strict Service Provider Liability)",
  },
  {
    id: "unauthorized-wallet-membership",
    tabLabel: "Refund & Membership Dispute",
    title: "Unauthorized UC Plus Auto-Debit or Service Refund Withheld",
    cause:
      "Customers experience unauthorized annual renewals of the 'UC Plus' membership through recurring payment mandates without prior reminder notices. In other common scenarios, when a customer cancels an appointment because the technician fails to arrive on time, Urban Company withholds the refund, deducts unfair cancellation penalties, or forces non-refundable UC Wallet credits instead of bank reversal.",
    legalBasis:
      "Under the Central Consumer Protection Authority (CCPA) Guidelines for Prevention and Regulation of Dark Patterns, 2023, 'Subscription Trap' and 'Forced Action' (compelling wallet credits instead of original payment method) are prohibited commercial offenses under Section 18 CPA 2019. RBI e-mandate guidelines also require pre-debit notifications for recurring charges.",
    steps: [
      {
        step: "Retrieve Transaction ID & Mandate Records",
        description:
          "Obtain bank account debit alerts showing the 12-digit UTR/RRN, cancellation confirmation timestamps, and auto-debit registration details.",
      },
      {
        step: "Lodge Dark Pattern Violation Complaint to Grievance Officer",
        description:
          "Email grievanceofficer@urbancompany.com citing CCPA Dark Patterns Guidelines 2023, requesting immediate cancellation of membership and full bank account reversal.",
      },
      {
        step: "Serve Advocate Legal Notice for Monetary Restitution",
        description:
          "Issue a formal advocate demand notice for the withheld funds with statutory interest, citing CCPA regulations and Section 2(47) unfair trade practices.",
      },
    ],
    statutoryRule: "CCPA Dark Patterns Guidelines 2023 & Section 2(47) CPA",
  },
];

export default function UrbanCompanyProblemTabs() {
  const [activeTab, setActiveTab] = useState<string>(PROBLEMS[0].id);

  const selectedProblem = PROBLEMS.find((p) => p.id === activeTab) || PROBLEMS[0];

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 shadow-sm p-4 sm:p-6 md:p-8 space-y-6">
      {/* Header */}
      <div>
        <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-slate-800 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
          Archetype B3 Problem Selector
        </span>
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 mt-2">
          Select Your Specific Urban Company Dispute Scenario
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 mt-1">
          Click any home-service dispute scenario below to examine the legal basis under CPA 2019, platform accountability, and the immediate 3-step escalation protocol:
        </p>
      </div>

      {/* ARIA Tablist */}
      <div
        role="tablist"
        aria-label="Urban Company Dispute Scenarios"
        className="flex flex-wrap gap-2 border-b border-slate-200 pb-3"
      >
        {PROBLEMS.map((problem) => {
          const isSelected = activeTab === problem.id;
          return (
            <button
              key={problem.id}
              role="tab"
              id={`tab-${problem.id}`}
              aria-selected={isSelected}
              aria-controls={`panel-${problem.id}`}
              onClick={() => setActiveTab(problem.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                isSelected
                  ? "bg-[#404447] text-white shadow-xs"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              {problem.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Tab Panel */}
      <div
        role="tabpanel"
        id={`panel-${selectedProblem.id}`}
        aria-labelledby={`tab-${selectedProblem.id}`}
        className="space-y-5 focus:outline-none"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
          <h4 className="text-base sm:text-lg md:text-xl font-extrabold text-slate-900">
            {selectedProblem.title}
          </h4>
          <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200 shrink-0">
            {selectedProblem.statutoryRule}
          </span>
        </div>

        {/* Cause & Legal Basis Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500 block mb-1">
              Operational Dispute &amp; Platform Defense
            </span>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {selectedProblem.cause}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-700 block mb-1">
              Statutory Legal Grounds &amp; Consumer Precedent
            </span>
            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
              {selectedProblem.legalBasis}
            </p>
          </div>
        </div>

        {/* 3-Step Action Plan */}
        <div className="space-y-3 pt-2">
          <h5 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-800">
            3-Step Practical Fix For This Scenario
          </h5>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {selectedProblem.steps.map((s, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <span className="w-6 h-6 rounded-full bg-[#404447] text-white font-bold text-xs flex items-center justify-center mb-2">
                    {idx + 1}
                  </span>
                  <strong className="text-xs sm:text-sm text-slate-900 font-bold block mb-1">
                    {s.step}
                  </strong>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {s.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Dispute Action Link */}
        <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-amber-950">
          <span>
            <strong>Need advocate representation?</strong> We draft and dispatch a formal statutory notice directly to Urban Company Limited and the service partner within 24 hours.
          </span>
          <Link
            href="/legal-notice-to-interior-designer-contractor-refund"
            className="text-red-700 hover:text-red-900 font-bold underline shrink-0"
          >
            Explore Contractor Disputes →
          </Link>
        </div>
      </div>
    </div>
  );
}
