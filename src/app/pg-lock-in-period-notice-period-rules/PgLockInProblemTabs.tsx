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
    id: "lock-in-exit",
    tabLabel: "Leaving in Lock-In",
    title: "Vacating Before the 3-Month or 6-Month PG Lock-In Period Expires",
    cause:
      "PG owners and co-living apps routinely insert a 3-to-6 month lock-in clause stating that if you vacate early—even for a medical emergency, job transfer, internship completion, or terrible food and bedbugs—100% of your security deposit stands forfeited.",
    legalBasis:
      "Under Section 74 of the Indian Contract Act, 1872 and the Supreme Court's 5-Judge Constitution Bench ruling in Fateh Chand v. Balkishan Dass (AIR 1963 SC 1405), penalty clauses that forfeit an entire security deposit without proof of actual loss are unenforceable. Furthermore, if you leave because the PG failed to provide promised hygiene, potable water, security, or working Wi-Fi/AC, the owner committed a material breach under Section 39 of the Contract Act, entitling you to terminate immediately and claim a 100% refund.",
    steps: [
      {
        step: "Send a Written Exit & Defect Notice Immediately",
        description:
          "Email or WhatsApp the PG owner/captain stating your exact move-out date. If leaving due to unhygienic food, pests, or broken amenities, attach dated photos/videos so the exit is recorded as a Section 39 repudiation for owner's breach.",
      },
      {
        step: "Document Whether Your Bed/Room Is Re-Allotted",
        description:
          "Note if a new paying guest moves into your bed or if you refer a replacement occupant. Once the bed is re-occupied, the PG owner has zero vacancy loss under Section 74.",
      },
      {
        step: "Serve a Section 74 Statutory Demand Notice",
        description:
          "If the owner refuses to refund the deposit within 7–15 days of handover, serve an advocate legal notice demanding full principal refund plus 12% interest.",
      },
    ],
    statutoryRule: "Section 39 & Section 74 Indian Contract Act, 1872; Fateh Chand (1963 SC)",
  },
  {
    id: "pune-bengaluru-notice",
    tabLabel: "1st-to-1st Notice Trap",
    title: "PG Owner Claims 30-Day Notice Only Counts From the 1st of Next Month",
    cause:
      "In IT and student hubs like Pune (Hinjewadi, Kharadi, Wakad, Viman Nagar) and Bengaluru (HSR Layout, Whitefield, Electronic City), residents give a 30-day notice mid-month (e.g., on the 10th). At move-out, the PG owner claims notice only starts from the 1st of the following calendar month, deducting an extra 20 days' rent.",
    legalBasis:
      "Under Sections 73 and 74 of the Indian Contract Act, 1872, a notice period runs day-for-day from the timestamp of delivery unless an explicit calendar-month billing cycle restriction was signed in writing prior to move-in. Imposing hidden oral conditions at the time of vacating constitutes an Unfair Trade Practice under Section 2(47) of the Consumer Protection Act, 2019.",
    steps: [
      {
        step: "Lock In Your Notice Timestamp on WhatsApp & Email",
        description:
          "Always send your 30-day vacating notice in writing (WhatsApp + Email/SMS) stating: 'Serving 30 days notice today [Date]; my final day of occupancy will be [Date + 30 days].'",
      },
      {
        step: "Pay Only Pro-Rata Rent for the Final Partial Month",
        description:
          "If your 30-day notice ends on the 10th of next month, pay only 10 days' pro-rata rent for that final month so the owner cannot hold both an extra month's rent and your full deposit.",
      },
      {
        step: "Challenge Retroactive PG Ruleboards via Legal Notice",
        description:
          "A PG notice-board rule pasted after you moved in does not bind you. Demand immediate reversal of any arbitrary notice-shortfall deduction.",
      },
    ],
    statutoryRule: "Section 73 Contract Act & Section 2(47) Consumer Protection Act, 2019",
  },
  {
    id: "coliving-apps",
    tabLabel: "Stanza / Zolo / Co-Living",
    title: "Branded Co-Living App (Stanza Living, Zolo, Colive, Your-Space) Delaying Refund Past 45 Days",
    cause:
      "Corporate co-living operators mandate app-based move-out requests, impose 30-to-45 working day refund SLAs, and then deduct arbitrary 'exit processing fees', 'utility reconciliation charges', or freeze refunds behind automated chatbot tickets.",
    legalBasis:
      "Branded co-living companies are commercial service providers under Section 2(7) and Section 2(42) of the Consumer Protection Act, 2019. One-sided clickwrap clauses that allow the operator to hold interest-free deposits for 60–90 days or levy non-negotiable exit fees are voidable as 'Unfair Contracts' under Section 2(46) CPA 2019 (Pioneer Urban Land v. Govindan Raghavan, 2019 SC).",
    steps: [
      {
        step: "Export In-App Move-Out Ticket & Ledger PDF",
        description:
          "Before your app account is deactivated after check-out, screenshot your final settlement ledger, zero-damage room handover checklist, and ticket IDs.",
      },
      {
        step: "Escalate to the Registered Corporate Office & NCH 1915",
        description:
          "Bypass the property captain and serve a formal demand on the corporate entity (e.g., Dtwelve Spaces Pvt. Ltd. or Zolostays Property Solutions Pvt. Ltd.) and lodge an NCH 1915 docket.",
      },
      {
        step: "Serve Pre-Litigation Notice Under CPA 2019",
        description:
          "Demand refund within 15 days failing which a consumer complaint on e-Jagriti will seek 100% deposit, 12% interest, and ₹15,000–₹25,000 harassment compensation.",
      },
    ],
    statutoryRule: "Section 2(11), 2(46) & 2(47) Consumer Protection Act, 2019",
  },
  {
    id: "painting-electricity-cuts",
    tabLabel: "Painting & Electricity Cuts",
    title: "Arbitrary Painting Charges, Bed Sanitization Fees & ₹15–₹20/Unit Electricity Bills",
    cause:
      "When you vacate a PG room, the owner deducts ₹2,000–₹5,000 for 'painting/whitewashing and deep cleaning', plus thousands of rupees for electricity billed at ₹15 to ₹20 per kWh without showing any sub-meter reading or DISCOM bill.",
    legalBasis:
      "Routine repainting, mattress cleaning, and normal wear-and-tear are the property owner's operational expense (analogous to Section 108(m) of the Transfer of Property Act, 1882). Furthermore, reselling electricity at arbitrary markups above the state electricity commission tariff (MSEDCL, BESCOM, DHBVN, TSSPDCL) without a verified sub-meter reading is an illegal surcharge and unfair trade practice.",
    steps: [
      {
        step: "Record a Timestamped Room Walk-Through Video at Handover",
        description:
          "Film the walls, mattress, wardrobe, fan, AC, and bathroom while handing keys to the warden, plus photograph the room sub-meter reading.",
      },
      {
        step: "Demand Itemized GST Invoices & Official DISCOM Bill",
        description:
          "Ask the PG owner on WhatsApp to share the official electricity bill and actual repair receipts. In 90% of cases, no bill exists.",
      },
      {
        step: "Recover Unlawful Deductions via Advocate Notice",
        description:
          "Challenge unsubstantiated deductions as unjust enrichment under Section 72 of the Indian Contract Act and deficiency in service.",
      },
    ],
    statutoryRule: "Section 72 Contract Act & Section 108(m) Transfer of Property Act Principle",
  },
  {
    id: "no-written-agreement",
    tabLabel: "No Written Agreement",
    title: "Paid PG Deposit via UPI/Cash With Only a WhatsApp Chat or Rent Receipt",
    cause:
      "Many local PGs in Pune, Noida, Gurugram, Hyderabad, and Chennai take 1–2 months' security deposit over Google Pay or PhonePe without signing any Leave and Licence or PG agreement, and later claim a '6-month lock-in' orally when you try to leave.",
    legalBasis:
      "If there is no signed written agreement containing a lock-in clause, the PG owner cannot invent a lock-in period orally at exit. Your UPI transaction history (with 'PG Deposit' or 'Advance' remark) and WhatsApp chats with the owner constitute a valid, enforceable contract under Section 10 of the Indian Contract Act, 1872, and primary electronic evidence under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023.",
    steps: [
      {
        step: "Export WhatsApp Chat History & UPIUTR Statement",
        description:
          "Download the full WhatsApp chat showing the room tariff, deposit amount, and vacating notice, alongside your bank statement showing the 12-digit UPI UTR.",
      },
      {
        step: "Give Reasonable 15-to-30 Day Written Notice",
        description:
          "Without a written contract, a 15-to-30 day notice is legally sufficient for a monthly paying guest licence under Section 62 of the Indian Easements Act.",
      },
      {
        step: "Issue a 15-Day Money Recovery & Consumer Notice",
        description:
          "Serve a legal notice citing Section 70 & 72 of the Indian Contract Act (restitution of refundable deposit) and BSA Section 63 electronic proof.",
      },
    ],
    statutoryRule: "Section 10 & 72 Contract Act; Section 63 Bharatiya Sakshya Adhiniyam, 2023",
  },
];

export default function PgLockInProblemTabs() {
  const [activeTab, setActiveTab] = useState<string>(PROBLEMS[0].id);
  const activeProblem = PROBLEMS.find((p) => p.id === activeTab) || PROBLEMS[0];

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm">
      {/* Tab Buttons */}
      <div className="flex flex-wrap gap-2 pb-4 border-b border-slate-100" role="tablist" aria-label="PG Dispute Scenarios">
        {PROBLEMS.map((problem) => (
          <button
            key={problem.id}
            type="button"
            role="tab"
            aria-selected={activeTab === problem.id}
            onClick={() => setActiveTab(problem.id)}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === problem.id
                ? "bg-[#DC2626] text-white shadow-md shadow-red-900/20"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            {problem.tabLabel}
          </button>
        ))}
      </div>

      {/* Tab Content Panel */}
      <div className="pt-5 space-y-4" role="tabpanel">
        <div>
          <span className="inline-block px-2.5 py-1 rounded-md text-[10px] sm:text-xs font-black uppercase tracking-wider bg-red-50 text-red-700 border border-red-200 mb-2">
            Governing Law: {activeProblem.statutoryRule}
          </span>
          <h3 className="text-base sm:text-lg md:text-xl font-extrabold text-slate-900">
            {activeProblem.title}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-700">
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/80 space-y-1.5">
            <strong className="text-slate-900 font-bold block text-xs uppercase tracking-wider">
              How PG Owners &amp; Operators Trap Residents
            </strong>
            <p className="leading-relaxed">{activeProblem.cause}</p>
          </div>

          <div className="p-4 bg-amber-50/70 rounded-xl border border-amber-200/80 space-y-1.5 text-amber-950">
            <strong className="text-amber-900 font-bold block text-xs uppercase tracking-wider">
              Statutory Law &amp; Judicial Mandate
            </strong>
            <p className="leading-relaxed">{activeProblem.legalBasis}</p>
          </div>
        </div>

        {/* Action Steps */}
        <div className="space-y-2.5 pt-2">
          <strong className="text-xs uppercase tracking-wider font-extrabold text-slate-900 block">
            3-Step Tactical Remedy to Recover Your Deposit:
          </strong>
          <div className="grid grid-cols-1 gap-2.5">
            {activeProblem.steps.map((st, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-3 bg-white rounded-xl border border-slate-200/90 shadow-2xs"
              >
                <span className="shrink-0 w-6 h-6 rounded-full bg-slate-900 text-white text-xs font-bold flex items-center justify-center mt-0.5">
                  {i + 1}
                </span>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">{st.step}</h4>
                  <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">{st.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-2 text-xs text-slate-500">
          Dealing with a flat landlord instead of a PG? Read our master guide on{" "}
          <Link href="/recover-security-deposit-from-landlord-india" className="text-blue-700 underline font-semibold">
            recovering a rental security deposit from a landlord in India
          </Link>{" "}
          or check{" "}
          <Link href="/legal-notice-landlord-unreasonable-security-deposit-deductions" className="text-blue-700 underline font-semibold">
            challenging unreasonable painting and repair deductions
          </Link>
          .
        </div>
      </div>
    </div>
  );
}
