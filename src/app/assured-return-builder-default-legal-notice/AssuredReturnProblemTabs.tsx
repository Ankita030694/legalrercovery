"use client";

import React, { useState } from "react";
import Link from "next/link";

interface AssuredProblemTab {
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

const PROBLEMS: AssuredProblemTab[] = [
  {
    id: "construction-stalled-returns-stopped",
    tabLabel: "Returns Stopped + Project Delayed",
    title: "Builder Stopped Monthly Assured Returns AND Failed to Deliver Possession on Time",
    cause:
      "In commercial retail, office, and studio-apartment projects across Gurugram, Noida, and Greater Noida, developers collect 80% to 100% of the unit price upfront under an MoU promising 9%–12% annual assured returns until offer of possession. Once the builder exhausts initial sales cashflow, they halt both construction and monthly NEFT/RTGS payouts, leaving the buyer with neither rental income nor a completed unit.",
    legalBasis:
      "Under Section 18(1) and Section 12 of the Real Estate (Regulation and Development) Act, 2016 (RERA), read with the Supreme Court 3-Judge Bench ruling in Newtech Promoters v. State of UP (2021) 18 SCC 1, an allottee — whether of a commercial shop, office space, or flat — has an unconditional statutory right to withdraw from a delayed project and recover 100% of the principal paid plus SBI Highest MCLR + 2% interest from each payment date.",
    steps: [
      {
        step: "Reconcile Paid Principal vs Received Returns",
        description:
          "Download your bank statements and Income Tax Form 26AS / AIS to tabulate exact upfront capital paid versus the total gross assured returns (including Section 194A TDS) received before default.",
      },
      {
        step: "Serve 15-Day Revocation & Refund Legal Notice",
        description:
          "Have an advocate serve a formal demand notice terminating the MoU/BBA for fundamental breach and demanding 100% principal refund with statutory interest or immediate clearance of assured-return arrears.",
      },
      {
        step: "File Form M Complaint Before State RERA",
        description:
          "If unpaid after 15 days, file an online RERA complaint under Section 31 seeking refund + SBI MCLR + 2% interest (or UP RERA MCLR + 1%), followed by a Section 40 Recovery Certificate.",
      },
    ],
    statutoryRule: "Section 12 & Section 18(1) RERA 2016 + Newtech Promoters (SC 2021)",
  },
  {
    id: "pdc-cheques-bounced",
    tabLabel: "Assured-Return PDCs Bounced",
    title: "Post-Dated Cheques (PDCs) Issued by Builder for Assured Returns or Buyback Dishonoured",
    cause:
      "To induce upfront 100% down-payment bookings, builders routinely hand over a booklet of 24 to 36 Post-Dated Cheques (PDCs) towards monthly assured returns or a high-value buyback cheque. After clearing the first few cheques, the builder instructs its bank to 'Stop Payment', closes the project escrow account, or leaves the account unfunded.",
    legalBasis:
      "Every dishonoured assured-return or buyback PDC represents a legally enforceable debt under Section 138 of the Negotiable Instruments Act, 1881. Under Section 141 NI Act and Aneeta Hada v. Godfather Travels (2012) 5 SCC 661, you can prosecute both the builder company (Accused No. 1) and its Managing Directors / cheque signatories in criminal court, and claim up to 20% interim compensation under Section 143A.",
    steps: [
      {
        step: "Collect CTS Bank Return Memos Immediately",
        description:
          "Obtain official bank dishonour memos showing 'Funds Insufficient', 'Payment Stopped by Drawer', or 'Account Closed'. Up to 3 cheques bouncing within 12 months can be clubbed in one joint trial under Section 242 BNSS (formerly Sec 219 CrPC).",
      },
      {
        step: "Dispatch Statutory Section 138/141 Notice in 30 Days",
        description:
          "Within strictly 30 calendar days of the return memo, serve a statutory demand notice on the builder company's MCA registered office and each executive director giving 15 days to pay.",
      },
      {
        step: "File Criminal Complaint Within 1 Month of Cure Expiry",
        description:
          "If the builder fails to pay within 15 days of notice receipt, file a Section 138/141 complaint before the Judicial Magistrate and move a Section 143A application for 20% interim deposit.",
      },
    ],
    statutoryRule: "Section 138, 141 & 143A NI Act, 1881 (Strict 30+15 Day Timeline)",
  },
  {
    id: "tds-deducted-not-deposited",
    tabLabel: "TDS Deducted in 26AS / Unpaid",
    title: "Builder Credited TDS in Form 26AS (or Deducted TDS) Without Paying Assured Returns",
    cause:
      "A common accounting manipulation by stressed developers is booking assured-return expenses in their corporate ledgers—or even filing quarterly TDS returns under Section 194A so the entry reflects in your Income Tax Form 26AS / AIS—while never transferring the net 90% assured return to your bank account. Conversely, some builders pay net amounts while pocketing the 10% TDS.",
    legalBasis:
      "When a builder reflects assured returns or deducts TDS under Section 194A of the Income-tax Act, 1961 in your Form 26AS, it operates as an unimpeachable written acknowledgment of debt under Section 18 of the Limitation Act, 1963 (resetting the 3-year civil limitation period) and conclusive admission for a fast-track Summary Suit under Order XXXVII CPC.",
    steps: [
      {
        step: "Download Form 26AS & Annual Information Statement (AIS)",
        description:
          "Export your Form 26AS and AIS PDF from the Income Tax e-Filing portal showing the builder's TAN, section code (194A/194-I), and the exact gross assured return acknowledged.",
      },
      {
        step: "Pair With Certified Bank Account Statement",
        description:
          "Generate a certified bank statement for the corresponding financial year proving zero inward NEFT/RTGS credit against the acknowledged Form 26AS entries.",
      },
      {
        step: "Serve Order 37 Summary Demand & Tax Default Notice",
        description:
          "Serve an advocate legal notice demanding immediate disbursement of the admitted net arrears plus 18% interest, warning of an Order XXXVII CPC Summary Suit and Income Tax TDS prosecution reporting.",
      },
    ],
    statutoryRule: "Order XXXVII CPC + Section 18 Limitation Act + Sec 194A IT Act",
  },
  {
    id: "lease-guarantee-paper-possession",
    tabLabel: "Fake Possession & Lease Default",
    title: "Builder Issued Paper 'Fit-Out Possession' to Stop Assured Returns & Defaulted on Lease Guarantee",
    cause:
      "Many commercial MoUs state that the builder will pay 11% assured returns 'until offer of possession / fit-out possession', followed by a 3-year 'Lease Guarantee' at ₹80–₹150/sq.ft. Builders prematurely issue a sham 'Fit-Out Possession Letter' without obtaining a valid Occupancy Certificate (OC) solely to stop pre-possession assured returns, and then fail to bring in any anchor tenant.",
    legalBasis:
      "Under Section 11(4)(b) and Section 19(10) of RERA 2016, and NCDRC/Supreme Court rulings, an 'offer of possession' without a valid Occupancy Certificate (OC) or Completion Certificate (CC) from the competent authority is legally void. A builder cannot terminate pre-possession assured returns on the strength of an illegal fit-out letter, and remains liable under Section 73 of the Indian Contract Act for post-possession lease-guarantee breaches.",
    steps: [
      {
        step: "Verify Occupancy Certificate (OC) Status on State RERA",
        description:
          "Check the project's quarterly compliance filings on the state RERA portal (HARERA, UP RERA, MahaRERA) to confirm whether a statutory OC was actually granted on the date of the letter.",
      },
      {
        step: "Reject Sham Fit-Out Letter in Writing",
        description:
          "Respond via an advocate legal notice formally rejecting the paper fit-out offer as illegal for want of OC, and demanding continued pre-possession assured returns plus lease-guarantee damages.",
      },
      {
        step: "Initiate RERA / Commercial Arbitration Action",
        description:
          "Pursue RERA action for invalid possession and delay interest, or invoke Order 37 / Arbitration if the conveyance deed is already registered and only post-OC minimum guaranteed rent is due.",
      },
    ],
    statutoryRule: "Section 11(4)(b) & 19(10) RERA 2016 + Section 73 Contract Act",
  },
  {
    id: "virtual-space-unregistered-scheme",
    tabLabel: "Virtual Space / Unregistered MoU",
    title: "Commercial 'Virtual Space' or Buyback Scheme Where Builder Claims RERA Doesn't Apply",
    cause:
      "Investors are frequently sold 'virtual lockable/non-lockable space' (e.g., 250 sq.ft. in a food court, IT tower, or retail atrium) with 12% assured returns and a 36-month compulsory buyback. When the builder defaults, they argue the transaction was a pure financial investment or unregistered MoU outside RERA.",
    legalBasis:
      "Under the Banning of Unregulated Deposit Schemes (BUDS) Act, 2019, Section 11AA of the SEBI Act (Collective Investment Schemes), and NCLAT rulings (Nikhil Mehta & Sons v. AMR Infrastructure), collecting public money under assured-return / buyback real-estate MoUs without delivering a RERA-registered unit exposes promoters to severe statutory attachment, financial creditor claims, and criminal breach of trust / cheating proceedings under Section 316 & 318 BNS if fraudulent from inception.",
    steps: [
      {
        step: "Audit Project RERA Registration & Sanctioned Plans",
        description:
          "Check whether the building and your specific commercial floor/unit exist in approved town-planning layouts and state RERA disclosures.",
      },
      {
        step: "Serve Multi-Statutory Advocate Demand Notice",
        description:
          "Issue a notice invoking Contract Act Section 73/65, BUDS Act 2019 deposit-default provisions, and BNS Section 318/316 (where unlicensed/unapproved virtual spaces were sold dishonestly).",
      },
      {
        step: "File Civil Summary Suit or Group IBC / EOW Action",
        description:
          "File an Order 37 Summary Suit with an Order 38 Rule 5 attachment-before-judgment application against the builder's bank accounts, or join 100/10% allottees for Section 7 IBC action.",
      },
    ],
    statutoryRule: "Section 65 & 73 Contract Act + BUDS Act 2019 + Sec 318 BNS",
  },
];

export default function AssuredReturnProblemTabs() {
  const [activeTab, setActiveTab] = useState<string>(PROBLEMS[0].id);

  const selectedProblem = PROBLEMS.find((p) => p.id === activeTab) || PROBLEMS[0];

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 shadow-sm p-4 sm:p-6 md:p-8 space-y-6">
      <div>
        <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-slate-800 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
          Interactive Dispute Diagnostic
        </span>
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 mt-2">
          Select Your Specific Assured-Return Default Scenario
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 mt-1">
          Click your exact builder default bottleneck below to view the legal position, governing statute, and 3-step tactical fix:
        </p>
      </div>

      {/* ARIA Tablist */}
      <div
        role="tablist"
        aria-label="Assured Return Dispute Scenarios"
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500 block mb-1">
              How Builders Execute This Default
            </span>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {selectedProblem.cause}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-700 block mb-1">
              Statutory Legal Grounds &amp; Precedent
            </span>
            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
              {selectedProblem.legalBasis}
            </p>
          </div>
        </div>

        <div className="space-y-3 pt-2">
          <h5 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-800">
            3-Step Tactical Fix For This Scenario
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

        <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-amber-950">
          <span>
            <strong>Want to calculate your statutory RERA refund interest first?</strong> Compare your unpaid assured returns against SBI MCLR + 2% per-instalment interest.
          </span>
          <Link
            href="/tools/rera-refund-interest-calculator"
            className="text-red-700 hover:text-red-900 font-bold underline shrink-0"
          >
            Open RERA Interest Calculator →
          </Link>
        </div>
      </div>
    </div>
  );
}
