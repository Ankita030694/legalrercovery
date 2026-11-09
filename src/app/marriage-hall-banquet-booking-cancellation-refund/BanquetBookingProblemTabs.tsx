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
    id: "total-forfeiture-clause",
    tabLabel: "100% Forfeiture Clause",
    title: "Banquet Hall Cites 'Advance Is Strictly Non-Refundable' Clause on Receipt",
    cause:
      "Most wedding halls, lawns, and luxury banquets stamp a pre-printed clause stating 'Advance amount once paid shall not be refunded under any circumstances' on booking slips or estimate receipts. When couples cancel months prior due to unavoidable reasons, managers mechanically point to this unilateral term to retain 100% of the advance deposit.",
    legalBasis:
      "The Supreme Court in Pioneer Urban Land & Infrastructure Ltd. v. Govindan Raghavan (2019) and Kailash Nath Associates v. DDA (2015) 4 SCC 136 established that standard-form contract clauses allowing unconditional forfeiture of earnest money without proving actual loss constitute a penalty under Section 74 of the Indian Contract Act, 1872. Furthermore, Section 2(46) of the Consumer Protection Act, 2019 classifies such one-sided clauses as an 'Unfair Contract', rendering them void and unenforceable.",
    steps: [
      {
        step: "Demand Detailed Accounting of Actual Loss",
        description:
          "Issue a formal written notice requesting the banquet hall to produce verifiable books, ledger entries, or catering purchases proving any actual financial damage caused by the cancellation.",
      },
      {
        step: "Check for Subsequent Re-Booking of the Hall",
        description:
          "Verify whether the hall or lawn was subsequently re-booked to another party on the same date. If the date was re-let, the venue suffered zero loss under Section 73 (mitigation principle).",
      },
      {
        step: "Serve Statutory Advocate Notice Citing Section 74",
        description:
          "Serve a 15-day legal notice warning of e-Jagriti consumer litigation for unfair trade practices under Section 2(47) and seeking full refund with 9%–12% interest.",
      },
    ],
    statutoryRule: "Section 74 Indian Contract Act, 1872 & Section 2(46) CPA 2019",
  },
  {
    id: "venue-rebooked-same-date",
    tabLabel: "Hall Re-Booked",
    title: "Banquet Hall Re-Allotted the Venue to Another Wedding But Still Kept Your Advance",
    cause:
      "A rampant industry malpractice is 'double recovery'. A consumer cancels 60 days before the wedding date. The banquet hall quickly re-rents the auspicious mahurat date to another family at full market rate, yet stubbornly refuses to return the first consumer's ₹2,00,000 to ₹5,00,000 advance deposit, effectively earning double revenue for the single calendar date.",
    legalBasis:
      "Under the Explanation to Section 73 of the Indian Contract Act, the law imposes a strict duty on the banquet owner to mitigate losses. If the venue successfully mitigated its loss by letting out the hall, lawn, or catering services to another client, its actual loss is nil. Retaining the advance amounts to unjust enrichment and an illegal penalty. State Consumer Commissions routinely award 100% refund plus punitive compensation in double-booking forfeiture disputes.",
    steps: [
      {
        step: "Gather Evidence of the Secondary Wedding Function",
        description:
          "Collect wedding invitation cards, photographs, decorator van logs, social media check-ins, or witness statements confirming another wedding celebration occurred on your booked date.",
      },
      {
        step: "File an RTI or Subpoena Application in Court",
        description:
          "If the venue denies re-booking, an application can be moved before the District Consumer Commission demanding production of the banquet register, GST invoice records, and kitchen utility logs for that date.",
      },
      {
        step: "Dispatch Recovery Notice for Unjust Enrichment",
        description:
          "Serve an advocate notice demanding immediate refund of the deposit, interest at 12% p.a., and ₹50,000 exemplary damages for malicious retention.",
      },
    ],
    statutoryRule: "Section 73 (Mitigation) & Section 70 (Unjust Enrichment) Indian Contract Act",
  },
  {
    id: "venue-infra-failure",
    tabLabel: "Infrastructure Failure",
    title: "Air Conditioning Failed, Power Tripped, or Venue Cancelled Due to MCD/Municipal Sealing",
    cause:
      "Wedding banquets frequently suffer severe operational breakdowns during peak summer or winter: central AC plant breakdown, generator failure during prime varmala ceremonies, inadequate parking causing police clampdowns, or sudden municipal sealing (e.g., Delhi MCD, BMC, or local fire department actions due to illegal commercial construction).",
    legalBasis:
      "Section 2(11) of the Consumer Protection Act, 2019 defines deficiency in service as any fault, imperfection, shortcoming, or inadequacy in the quality, nature, and manner of performance required under law or contract. Consumer Commissions hold that wedding hosting is an irreplaceable life event; ruining an occasion due to defective generators or fire safety non-compliance warrants 50% to 100% total billing refund plus hefty mental harassment awards.",
    steps: [
      {
        step: "Preserve Video Footage & Guest Statements",
        description:
          "Record high-resolution videos showing darkness, stopped AC vents, guest discomfort, thermometer readings, or municipal sealing notices posted on the entrance gate.",
      },
      {
        step: "Issue On-Spot Protest & Deduct from Final Settlement",
        description:
          "Never pay 100% balance without recording a written endorsement of service breakdown on the supervisor's logbook or event bill.",
      },
      {
        step: "File for Deficiency in Service & Harassment Damages",
        description:
          "Serve a statutory legal demand within 30 days and file an e-Jagriti consumer complaint seeking compensation for family humiliation and ruined reputation.",
      },
    ],
    statutoryRule: "Section 2(11) & Section 39 Consumer Protection Act, 2019",
  },
  {
    id: "emergency-bereavement",
    tabLabel: "Medical / Bereavement",
    title: "Cancellation Due to Sudden Bereavement, Medical Emergency, or Act of God (Force Majeure)",
    cause:
      "Weddings occasionally have to be called off or postponed indefinitely due to sudden hospitalisation of the bride or groom, death in the immediate family, natural calamity (floods, waterlogging), or unexpected government restrictions. Banquet proprietors often coldly assert that personal tragedies are not their concern and forfeit the full token advance.",
    legalBasis:
      "Under Section 56 of the Indian Contract Act, 1872 (Doctrine of Frustration) and principles of consumer equity, where performance of a contract becomes impossible or unlawful without default of either party, the agreement becomes void. Section 65 dictates that any party who received an advantage under a void contract is bound to restore it. While the hall may retain nominal out-of-pocket administrative expenses (typically 5% to 10%), retaining the entire deposit is judicially censured.",
    steps: [
      {
        step: "Submit Medical Certificate or Death Certificate with Notice",
        description:
          "Send an email and registered letter attaching doctor's discharge summary, ICU admission slip, or death certificate explaining the unforeseen frustration of contract.",
      },
      {
        step: "Offer Mutual Rescheduling Within 6 to 12 Months",
        description:
          "Offer to adjust the deposit against a future date. If the venue management rejects reasonable accommodation, their refusal constitutes unfair trade practice.",
      },
      {
        step: "Lodge National Consumer Helpline (NCH) Grievance",
        description:
          "Register a formal grievance on the 1915 NCH portal. If unresolved within 15 days, escalate to an Advocate Legal Notice.",
      },
    ],
    statutoryRule: "Sections 56 & 65 Indian Contract Act, 1872",
  },
  {
    id: "hidden-charges-extortion",
    tabLabel: "Hidden Charges Extortion",
    title: "Venue Demands Last-Minute Royalty for External Decorators, DJ, or Mandatory In-House Catering",
    cause:
      "A notorious wedding industry bait-and-switch tactic: after collecting a non-refundable advance, the banquet management informs the client days before the event that outside decorators face an exorbitant 'royalty fee' (e.g. ₹50,000), mandatory in-house DJ charges, or compulsory liquor corkage fees not specified in the initial rate quotation.",
    legalBasis:
      "Under Section 2(47) of the Consumer Protection Act, 2019, making a misleading representation concerning the price at which services are ordinarily provided, or imposing tied-in conditions not agreed at booking, constitutes an actionable Unfair Trade Practice. Forcing consumers into an unconscionable choice entitles them to repudiate the contract and claim full advance restitution under Section 75 Contract Act.",
    steps: [
      {
        step: "Compile Initial Written Quotations & Brochures",
        description:
          "Collate the initial rate sheet, WhatsApp discussions, and booking receipts demonstrating that external vendor royalties were never disclosed prior to advance payment.",
      },
      {
        step: "Issue Immediate Written Rejection of Extortionate Terms",
        description:
          "Send an email refuting the unilateral additions and putting the management on notice that cancellation, if forced, will be attributed solely to their contractual breach.",
      },
      {
        step: "Trigger Pre-Litigation Legal Notice for Deceptive Trade",
        description:
          "Serve a statutory legal demand holding the venue directors personally liable for coercive trade practices and financial restitution.",
      },
    ],
    statutoryRule: "Section 2(47) CPA 2019 & Section 75 Indian Contract Act",
  },
];

export default function BanquetBookingProblemTabs() {
  const [activeTab, setActiveTab] = useState<string>(PROBLEMS[0].id);
  const currentProblem = PROBLEMS.find((p) => p.id === activeTab) || PROBLEMS[0];

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-sm space-y-6">
      <div className="border-b border-slate-100 pb-4">
        <span className="text-xs uppercase tracking-wider font-extrabold text-red-600">
          Dispute Resolution Matrix
        </span>
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mt-1">
          Pick Your Banquet Cancellation Dispute Scenario
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 mt-1">
          Select your specific wedding venue scenario below to see the statutory legal foundation, precedent odds, and actionable recovery steps.
        </p>
      </div>

      {/* Tab Selectors */}
      <div className="flex flex-wrap gap-2 pb-2">
        {PROBLEMS.map((problem) => (
          <button
            key={problem.id}
            type="button"
            onClick={() => setActiveTab(problem.id)}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-150 cursor-pointer ${
              activeTab === problem.id
                ? "bg-slate-900 text-white shadow-md shadow-slate-900/20"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            {problem.tabLabel}
          </button>
        ))}
      </div>

      {/* Active Tab Panel */}
      <div className="bg-slate-50/80 rounded-xl p-5 sm:p-6 border border-slate-200 space-y-5">
        <div>
          <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider bg-red-100 text-red-800 border border-red-200 mb-2">
            Statutory Rule: {currentProblem.statutoryRule}
          </span>
          <h4 className="text-base sm:text-lg font-bold text-slate-900">{currentProblem.title}</h4>
        </div>

        <div className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
          <p>
            <strong className="text-slate-900 font-semibold">Common Venue Pattern: </strong>
            {currentProblem.cause}
          </p>
          <p>
            <strong className="text-slate-900 font-semibold">Legal &amp; Judicial Basis: </strong>
            {currentProblem.legalBasis}
          </p>
        </div>

        <div className="space-y-3 pt-2">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-700">
            Actionable Legal Protocol:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {currentProblem.steps.map((st, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg p-3.5 border border-slate-200 shadow-xs space-y-1.5"
              >
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-red-600 text-white text-[11px] font-bold flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <p className="text-xs font-bold text-slate-900 leading-tight">{st.step}</p>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed pl-7">{st.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-slate-200">
          <p className="text-xs text-slate-500">
            Need an advocate notice enforcing this section? Dispatched in 24 hours.
          </p>
          <Link
            href="/legal-notice-charges"
            className="inline-flex items-center text-xs font-bold text-red-600 hover:text-red-700 underline underline-offset-2"
          >
            Check Legal Notice Rates &amp; Delivery SLA &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
